# MUNDSPRO — vendor outreach campaign

Where all outreach drafts and send lists live, kept in the repo so they
survive between sessions and are easy to find later.

## Status as of 2026-09-21

**Sent so far:** 41 (initial client/vendor campaign) + 65 (verified dormant
leads) + 48 (wave-1 vendor batch: restoration/design/PM/trades/realtors) +
67 (wave-2 "ready now" batch, same categories, new companies) = **221 emails
sent**, low single-digit bounce rate throughout.

**Pending — needs your approval before sending:**
`lists/WAVE2_PENDING_new_drafts.csv` — **151 verified recipients** across 16
new vendor categories that don't have approved copy yet:
title companies, insurance agents, mortgage brokers, real estate
photographers, appraisers, movers, closet companies, window treatment
companies, garage door companies, epoxy floor companies, home security
installers, junk removal companies, senior living facilities, senior move
managers, pest control companies, solar installers.

Drafts for these are written and waiting for review:
`drafts/wave2_new_verticals_PENDING_APPROVAL.md`

## Files

- `drafts/wave1_specialty_intros_SENT.md` — the 6 original approved
  templates (restoration, design/showroom, property mgmt, realtors, trades,
  homeowners). Design/showroom was intentionally excluded from sending.
- `drafts/wave2_new_verticals_PENDING_APPROVAL.md` — 16 new draft templates,
  **not yet approved or sent**.
- `lists/WAVE2_PENDING_new_drafts.csv` — the 151 verified email addresses
  matched to those 16 pending drafts. Every address was pulled from a real,
  live web page — none guessed — and cross-checked against the full Gmail
  Sent history before being marked clear.
- `lists/pbc_vendor_roster_wave1.csv` — the original 212-company Palm Beach
  County roster (company names, cities, phone numbers, contact-page URLs)
  that started this whole effort. Useful if you want to go collect more
  addresses by hand or by phone.
- `lists/suppression_list.md` — every address that has bounced, opted out
  ("remove"/"no thanks"), or should not be re-contacted. Check this before
  any future send, and add to it whenever a new bounce or opt-out comes in.
- **`lists/MASTER_SENT_RECIPIENTS.csv`** — **the single source of truth for
  dedupe.** Every email address ever sent from mundspro@gmail.com, from the
  very start of the account through 2026-09-21 — **1,950 distinct
  addresses**, each with first-sent date, last-sent date, how many times,
  and which source it came from (`historical` = built from a full Sent-
  folder rebuild covering 2016–2026-09-18; `campaign-2026-09` = this week's
  outreach push). **Before any future send, check every candidate address
  against this file first.** If it's not here, it's genuinely never been
  contacted (as of this file's date).
- `lists/CAMPAIGN_LOG_2026-09.csv` — a plain chronological record of this
  week's actual campaign: date, subject line, recipient, one row per
  message sent. 222 messages across 6 campaigns:
  | Count | Subject |
  |---|---|
  | 87 | Checking in — MUNDSPRO (clients + dormant leads) |
  | 40 | Rebuild partner after your dry-outs — MundsPro (restoration) |
  | 38 | Referral partner for interior work — MundsPro (trades) |
  | 25 | Interior contractor for your properties — MundsPro (property mgmt) |
  | 20 | Remodeling support for your clients — MundsPro (original vendor batch) |
  | 12 | Pre-listing work in 48 hours — MundsPro (realtors) |

  Useful for reporting, for spotting who to follow up with, or for auditing
  exactly what any given person was sent and when.

### Keeping MASTER_SENT_RECIPIENTS.csv current

This file is a **snapshot**, not a live query. Every time a new batch goes
out, append those addresses to it (and to `CAMPAIGN_LOG_2026-09.csv` or a
new dated log file) so it stays authoritative. A future session should
re-verify with a fresh Gmail Sent search before trusting a copy of this
file that's more than a day or two old — don't skip that check, it's what
caught 26 accidental repeat-contacts earlier in this campaign.

## To send the pending 151

1. Open `drafts/wave2_new_verticals_PENDING_APPROVAL.md`, review/edit.
2. Say so in a new session on this repo/branch — reference this file by
   path and ask to send. A fresh session can pick this up with no
   re-explaining needed.
3. Standing rule: **never send without explicit approval**, and always
   re-verify against `lists/suppression_list.md` plus a fresh Gmail Sent
   check immediately before sending — do not trust this file's dedupe if
   more than a day or two has passed, since more emails may have gone out
   since it was built.

## Rules this campaign has followed throughout

- No guessed or pattern-generated email addresses, ever. Only literal text
  seen on a fetched page (or algorithmically decoded from Cloudflare's
  email-obfuscation payload, which counts as literally seen).
- Every batch checked against full Sent-folder history (not just a stale
  index) before sending.
- Batches sent in groups of ~10-25 with a bounce check in between.
- Interior designers/design-build firms excluded from the vendor referral
  campaign per owner's instruction.
