---
name: Contact email provider choice
description: Why the Brenscot contact form sends via the Gmail connector, and which alternatives failed.
---

The Brenscot contact form (`POST /api/contact`) sends email through the **Gmail Replit connector** (`connectors.proxy("google-mail", "/gmail/v1/users/me/messages/send", ...)`) using a raw base64url-encoded MIME message.

**Why:**
- Resend was tried first but the user repeatedly saved an invalid 13-char api_key (real keys start with `re_`); never got a valid key.
- Microsoft Outlook connector failed: the user's Microsoft 365 work account requires **admin consent** for third-party apps, so OAuth could not complete.
- Gmail (personal account) worked immediately — no admin approval, no API key.

**How to apply:**
- If email sending breaks, check the `google-mail` connection status first; re-propose it if disconnected.
- Emails send *from* the connected Gmail account, *to* enquiries@brenscot.com.au, with Reply-To set to the visitor.
- If the user ever gets M365 admin consent or a valid Resend key, either can replace Gmail — the route is isolated in the api-server contact route.
- Gmail raw send: MIME must be base64url encoded in the `raw` field; multipart/alternative (text + HTML) used for deliverability; CR/LF stripped from user-supplied header values.
