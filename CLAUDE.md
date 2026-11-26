# Kingdom First Covenant — standards for every piece of work

Sister app to Kingdom First Life, run by Kingdom First Life Limited (owner: Zimran). Started 23 Nov 2026.
Everything for Kingdom First Covenant lives in this repo (Zimfaz/kingdom-first-covenant, private; moved from the Kingdom First Life repo's covenant/ folder on 25 Nov 2026) and is pushed the same day. The family rules, brand/colours.json and the build plan (reviews/native-build-plan-2026-11-24.md) stay in the Kingdom First Life repo; src/theme/colours.json here is copied from brand/colours.json and is updated whenever that file changes.

## What it is (owner, 23 Nov 2026)
- A Christian app that introduces people **for marriage, not dating**. Its purpose is to introduce people so they marry; it is not for passing time, casual dating or endless browsing. Say so plainly everywhere (store listing, sign-up, profile, every match).
- **Two-tier matching.** Tier 1: answers to theological questions, including questions on marriage. Tier 2: pictures, only after Tier 1.
- **Cross-tradition:** Catholic, Orthodox (every tradition, grouped as in KFL's church-calendar review), Anglican and Protestant, and others; each person says which traditions they are open to.
- **Marital history includes divorced and annulled** (decree of nullity). Catholic teaching does not permit marriage after divorce without an annulment; people choose who they are open to, and the app explains this kindly and never shames anyone.
- **UK only at launch.**
- **Companions, never one-to-one (owner):** every conversation includes a companion for each person (a family member, friend, priest or pastor they invite). The role is called **Companion** on screen (owner, 23 Nov; the reviews said "chaperone"). Companions pass the same ID check, read and write, can pause and report, but can't say yes or no, close an introduction or message anyone privately; the member can change companion quietly. With no companion present the conversation pauses.
- **Reviewers first, then a clickable prototype.** All the KFL reviewers are kept (.claude/agents, copied from KFL).
- **Native apps from the start (owner, 24 Nov 2026, 10:40).** Built as native iPhone and Android apps from day one, not as one shared web (Capacitor) app like Kingdom First Life. The clickable prototype stays a web page for reviews and testing only; none of it ships. Plan, effort, skills and cloud builds for two native apps go to the product reviewer before any build starts.

## Owner decisions after round 1 (23 Nov; reviews/round1/combined-2026-11-23.md)
- Photos: shown to both at the same moment, **after both say yes to the faith summary** and before the companions' conversation starts. Up to 3, no filters, first checked against the ID selfie.
- Pace: **up to 3 introductions a week, on Thursday evening**, never Sunday; one open conversation at a time (one more introduction may wait).
- Price: **per season, not monthly**: e.g. £59.99 for 6 months, no automatic renewal (example price). Free to join, verify, answer and see introductions; a season to say yes and talk; companions never pay; no paying to be seen.
- Words: "introduction" (never "match"), "close this introduction", "What you share / Things to talk about", no scores or percentages, no swiping, likes, streaks, read receipts or "last active".
- A private "I feel pressured, or I'm worried about my safety" line in every conversation, unseen by companions, with UK help numbers and same-day review.
- Timing (reviewers): prototype in December; build after the KFL January update; London waitlist after Easter 2027, closed beta summer 2027, UK launch about September 2027. Before launch: solicitor (Online Safety Act, UK GDPR special category data, Equality Act on Christians-only and man–woman introductions, trade mark classes 9, 42, 45), a second trained moderator, an independent safeguarding adviser, a reader from each tradition.
- Prototype: prototype/index.html, published at https://claude.ai/artifact/EaGskjLFELNQ2ewDfKs91g (34 screens; brand colours are the brand reviewer's proposal, not decided).

## Carried over from Kingdom First Life
- Plain English, short sentences; check every screen on small and large phones, light and dark, before showing the owner.
- Ask before changing the logo, fonts or colours. Family look with KFL (Cormorant Garamond headings, IBM Plex Sans body) until the owner decides the brand.
- Only claim features that are built. BSB for public Scripture. Respect Catholic, Anglican/Protestant and Orthodox traditions; the pastoral reviewer checks faith and care wording.
- Safeguarding first: adults only; report, block and removal everywhere; never enter payments or credentials for the owner; the owner does all account, store and payment steps.

- Colours (owner, 24 Nov 2026): brand/colours.json in the repo is the only source of colour for everything made for this app too (videos, slides, PDFs, store images). Family colours come from Kingdom First Life's app; this app's own accent stays a proposal until the owner decides.
- Build (owner, 24 Nov 13:38): React Native with Expo; own Supabase project kingdom-first-covenant (supabase-link.md); repo Zimfaz/kingdom-first-covenant (this repo; the app is at the root: app/ screens, src/ theme and components, supabase/migrations). Plan: reviews/native-build-plan-2026-11-24.md (KFL repo).
- Accounts (owner, 25–26 Nov 2026): Expo account kingdom-first-life-limited (organisation; robot user "GitHub builds", Developer role, token in the GitHub secret EXPO_TOKEN); EAS project @kingdom-first-life-limited/kingdom-first-covenant, projectId in app.config.ts. Apple: App ID com.kingdomfirstlife.covenant registered (team 9ZQT8B59NK); App Store Connect app "Kingdom First Covenant" created 26 Nov 00:14 (SKU kfc-ios-001, English UK, all users have access). Still to do before iPhone builds (not before 15 Jan 2027): upload the existing Admin App Store Connect API key to Expo › Credentials (owner). Availability UK only when the store listing is set up (leave China and other regions off).
- Build started (owner, 26 Nov 00:15: "why do we not start building now"): Covenant screens and early Android test builds on test data only, now; Kingdom First Life work comes first each day; no Covenant work 4–14 Dec (KFL tester feedback and store submission); iPhone builds once the Apple key is in Expo. Real personal data still only after the solicitor, DPIA, safeguarding advisers and pastoral reviewer.
