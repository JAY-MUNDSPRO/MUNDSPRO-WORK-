# MUNDSPRO — vendor outreach campaign

Where all outreach drafts and send lists live, kept in the repo so they
survive between sessions and are easy to find later.

## Status as of 2026-09-21

**Sent so far:** 41 (initial client/vendor campaign) + 65 (verified dormant
leads) + 48 (wave-1 vendor batch: restoration/design/PM/trades/realtors) +
67 (wave-2 "ready now" batch, same categories, new companies) + 151
(wave-2 "new verticals" batch: title, insurance, mortgage, photographers,
appraisers, movers, closets, window treatments, garage doors, epoxy
floors, home security, junk removal, senior living, senior move
managers, pest control, solar) = **372 emails sent**, **zero bounces** on
the 151-email new-verticals batch (checked after every 1-2 verticals
during send), low single-digit bounce rate on earlier batches.

**Nothing currently pending approval.** All drafted/approved copy has
been sent as of 2026-09-21.

## Files

- `drafts/wave1_specialty_intros_SENT.md` — the 6 original approved
  templates (restoration, design/showroom, property mgmt, realtors, trades,
  homeowners). Design/showroom was intentionally excluded from sending.
- `drafts/wave2_new_verticals_SENT.md` — 16 draft templates (title,
  insurance, mortgage, photographers, appraisers, movers, closets, window
  treatments, garage doors, epoxy floors, home security, junk removal,
  senior living, senior move managers, pest control, solar), approved and
  **sent 2026-09-21** to all 151 recipients, zero bounces.
- `lists/wave2_new_verticals_SENT_recipients.csv` — the 151 verified email
  addresses matched to those 16 drafts, all sent 2026-09-21. Every address
  was pulled from a real, live web page — none guessed — and cross-checked
  against the full Gmail Sent history before sending.
- `lists/pbc_vendor_roster_wave1.csv` — the original 212-company Palm Beach
  County roster (company names, cities, phone numbers, contact-page URLs)
  that started this whole effort. Useful if you want to go collect more
  addresses by hand or by phone.
- `lists/suppression_list.md` — every address that has bounced, opted out
  ("remove"/"no thanks"), or should not be re-contacted. Check this before
  any future send, and add to it whenever a new bounce or opt-out comes in.
- **`lists/MASTER_SENT_RECIPIENTS.csv`** — **the single source of truth for
  dedupe.** Every email address ever sent from mundspro@gmail.com, from the
  very start of the account through 2026-09-21 — **2,101 distinct
  addresses**, each with first-sent date, last-sent date, how many times,
  and which source it came from (`historical` = built from a full Sent-
  folder rebuild covering 2016–2026-09-18; `campaign-2026-09` = this week's
  outreach push; `campaign-2026-09-wave2` = the 151-recipient new-verticals
  batch sent 2026-09-21). **Before any future send, check every candidate
  address against this file first.** If it's not here, it's genuinely never
  been contacted (as of this file's date).
- `lists/CAMPAIGN_LOG_2026-09.csv` — a plain chronological record of this
  week's actual campaign: date, subject line, recipient, one row per
  message sent. 373 messages across 7 campaigns:
  | Count | Subject |
  |---|---|
  | 87 | Checking in — MUNDSPRO (clients + dormant leads) |
  | 40 | Rebuild partner after your dry-outs — MundsPro (restoration) |
  | 38 | Referral partner for interior work — MundsPro (trades) |
  | 25 | Interior contractor for your properties — MundsPro (property mgmt) |
  | 20 | Remodeling support for your clients — MundsPro (original vendor batch) |
  | 12 | Pre-listing work in 48 hours — MundsPro (realtors) |
  | 151 | 16 new-vertical subjects (title, insurance, mortgage, photographers, appraisers, movers, closets, window treatments, garage doors, epoxy floors, home security, junk removal, senior living, senior move managers, pest control, solar) — MundsPro |

  Useful for reporting, for spotting who to follow up with, or for auditing
  exactly what any given person was sent and when.

### Keeping MASTER_SENT_RECIPIENTS.csv current

This file is a **snapshot**, not a live query. Every time a new batch goes
out, append those addresses to it (and to `CAMPAIGN_LOG_2026-09.csv` or a
new dated log file) so it stays authoritative. A future session should
re-verify with a fresh Gmail Sent search before trusting a copy of this
file that's more than a day or two old — don't skip that check, it's what
caught 26 accidental repeat-contacts earlier in this campaign.

## Starting a new batch

There's no pending batch right now. To start a new one: research/draft new
vendor categories or add new companies to an existing category, save the
draft + recipient list to `drafts/` and `lists/` following the naming
pattern used here, then say so in a new session on this repo/branch,
referencing the file by path and asking to send. A fresh session can pick
this up with no re-explaining needed. Standing rule: **never send without
explicit approval**, and always re-verify against
`lists/suppression_list.md` plus a fresh Gmail Sent check immediately
before sending — do not trust `MASTER_SENT_RECIPIENTS.csv`'s dedupe if
more than a day or two has passed, since more emails may have gone out
since it was last updated.

## Rules this campaign has followed throughout

- No guessed or pattern-generated email addresses, ever. Only literal text
  seen on a fetched page (or algorithmically decoded from Cloudflare's
  email-obfuscation payload, which counts as literally seen).
- Every batch checked against full Sent-folder history (not just a stale
  index) before sending.
- Batches sent in groups of ~10-25 with a bounce check in between.
- Interior designers/design-build firms excluded from the vendor referral
  campaign per owner's instruction.
