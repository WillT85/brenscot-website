---
name: Replit custom domain verification trigger
description: How to force Replit to re-check a custom domain when DNS is correct but status stays red.
---

Replit's Domains panel has no "Verify" or "Re-check" button in all views. When DNS records are confirmed live (A record + TXT record both propagated) but Replit still shows the domain as unverified (red dot), the fix is:

**Re-add the domain entry in Replit's Domains panel without removing it first.** Just type the domain again and confirm — this triggers an immediate fresh verification check.

**Why:** Replit checks periodically in the background but doesn't expose a manual trigger. Re-adding the domain forces an on-demand check.

**How to apply:** Any time a user's custom domain DNS is confirmed correct via dnschecker.org or nslookup but Replit still shows "Unknown" / red status.

Required DNS records Replit needs (shown in the Manage screen):
- A record: `@` → IP provided by Replit (e.g. `34.111.179.208`)
- TXT record: `@` → `replit-verify-<unique-id>`
