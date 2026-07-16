import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();

const ENQUIRIES_EMAIL = "enquiries@brenscot.com.au";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function encodeHeaderValue(value: string): string {
  const sanitized = value.replace(/[\r\n]+/g, " ").trim();
  if (/^[\x20-\x7e]*$/.test(sanitized)) {
    return sanitized;
  }
  return `=?UTF-8?B?${Buffer.from(sanitized, "utf8").toString("base64")}?=`;
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionLog = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    submissionLog.set(key, timestamps);
    return true;
  }
  timestamps.push(now);
  submissionLog.set(key, timestamps);
  if (submissionLog.size > 1000) {
    for (const [k, v] of submissionLog) {
      if (v.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        submissionLog.delete(k);
      }
    }
  }
  return false;
}

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact form submission");
    res.status(400).json({ error: "Please fill in all required fields correctly." });
    return;
  }

  const { name, phone, email, projectType, message, recaptchaToken } = parsed.data;

  // Verify reCAPTCHA token
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (!recaptchaSecret) {
    req.log.error("RECAPTCHA_SECRET_KEY is not set");
    res.status(500).json({ error: "Server configuration error." });
    return;
  }
  try {
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`,
      { method: "POST" },
    );
    const verifyData = await verifyRes.json() as { success: boolean; "error-codes"?: string[] };
    if (!verifyData.success) {
      req.log.warn({ errorCodes: verifyData["error-codes"] }, "reCAPTCHA verification failed");
      res.status(400).json({ error: "reCAPTCHA verification failed. Please try again." });
      return;
    }
  } catch (err) {
    req.log.error({ err }, "reCAPTCHA verification request failed");
    res.status(502).json({ error: "Could not verify reCAPTCHA. Please try again." });
    return;
  }

  const rateKey = req.ip ?? "unknown";
  if (isRateLimited(rateKey)) {
    req.log.warn({ rateKey }, "Contact form rate limit exceeded");
    res.status(429).json({
      error: "Too many enquiries sent. Please wait a few minutes and try again.",
    });
    return;
  }

  const text = [
    "New Website Enquiry",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    ...(projectType ? [`Project Type: ${projectType}`] : []),
    "",
    "Project Details:",
    message,
  ].join("\n");

  const html = `
    <h2>New Website Enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${projectType ? `<p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>` : ""}
    <p><strong>Project Details:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  const boundary = `brenscot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  const mime = [
    `To: ${ENQUIRIES_EMAIL}`,
    `Reply-To: ${encodeHeaderValue(email)}`,
    `Subject: ${encodeHeaderValue(`Website Enquiry from ${name}`)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(text, "utf8").toString("base64"),
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(html, "utf8").toString("base64"),
    `--${boundary}--`,
  ].join("\r\n");

  try {
    // Gmail integration via Replit connectors proxy (google-mail connection)
    const connectors = new ReplitConnectors();
    const response = await connectors.proxy(
      "google-mail",
      "/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          raw: Buffer.from(mime, "utf8").toString("base64url"),
        }),
      },
    );

    if (!response.ok) {
      const detail = await response.text();
      req.log.error(
        { status: response.status, detail },
        "Gmail rejected contact email",
      );
      res.status(502).json({
        error: "We couldn't send your enquiry right now. Please email us directly.",
      });
      return;
    }

    req.log.info("Contact enquiry email sent");
    res.json(SubmitContactResponse.parse({ success: true }));
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(502).json({
      error: "We couldn't send your enquiry right now. Please email us directly.",
    });
  }
});

export default router;
