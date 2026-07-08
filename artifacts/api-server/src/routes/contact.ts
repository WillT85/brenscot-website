import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();

const ENQUIRIES_EMAIL = "enquiries@brenscot.com.au";
const FROM_ADDRESS =
  process.env.CONTACT_FROM_ADDRESS ?? "Brenscot Website <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact form submission");
    res.status(400).json({ error: "Please fill in all required fields correctly." });
    return;
  }

  const { name, phone, email, projectType, message } = parsed.data;

  const html = `
    <h2>New Website Enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${projectType ? `<p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>` : ""}
    <p><strong>Project Details:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    // Resend integration via Replit connectors proxy
    const connectors = new ReplitConnectors();
    const response = await connectors.proxy("resend", "/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [ENQUIRIES_EMAIL],
        reply_to: email,
        subject: `Website Enquiry from ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      req.log.error(
        { status: response.status, detail },
        "Resend rejected contact email",
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
