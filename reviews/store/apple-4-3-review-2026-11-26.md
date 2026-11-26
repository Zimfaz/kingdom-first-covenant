# Kingdom First Covenant: App Store and Google Play review (26 Nov 2026)

App Store and Google Play review specialist (.claude/agents/app-store-review-expert.md). Asked by the owner: is Covenant "meaningfully different" under Apple guideline 4.3(b), what else applies, and how do we test early.

**What I read:** CLAUDE.md, every screen in `app/*.tsx`, `src/lib/onboarding.tsx` and `questions.ts`, `app.config.ts`, `eas.json`, reviews/comparison (summary and .xlsx), reviews/pastoral/marriage-introductions-2026-11-26.md, reviews/round1/combined-2026-11-23.md, and the build plan in the KFL repo (reviews/native-build-plan-2026-11-24.md). I did not edit any app code.

**Checks, all dated 26 Nov 2026:**
- Apple's App Review Guidelines, "Last Updated: October 16, 2026".
- Google Play policy pages (dating, age-restricted functionality, user-generated content).
- Apple's help pages on App Review appointments and TestFlight.
- Ten Apple Developer Forums threads on 4.3(b) from 2026.
- Press on the 9 Jun 2026 change and the new age-rating descriptors.

**Marks:** **V** means checked today against the source named. **K** means from my own knowledge, so the owner or solicitor confirms it before relying on it.

**Nobody can guarantee approval.** Apple's own words: an App Review appointment "cannot preapprove apps or specific features". In 2026, the forums show no new dating or matrimonial app that clearly got through 4.3(b) after the June change. This plan improves the odds and leaves time to appeal. It can't promise the result. That is why Android and a fallback are part of it.

---

## Summary (must / should / could)

1. **Must:** the case to Apple rests on one structural fact: **there is no one-to-one chat in Covenant, ever.** Every conversation has an ID-checked Companion for each person, and the server refuses messages without them. No app in the comparison does this, and a reviewer can check it in two minutes. Lead with it everywhere: first screen, first store screenshot, first line of the review notes.
2. **Must:** don't lean on things other apps already claimed and still got rejected for. These include no swiping, limits per day or week, ID checks, "serious about marriage", photos shown later and a fixed weekday. On their own, these are not "meaningfully different" (section 1.3). Use them only as supporting points.
3. **Must:** the reviewer must never see an empty app. Seed the four demo accounts so an introduction and a running Companion conversation are there on any day, not only on Thursday evening. Reset them to that state every night. An empty Home ("No new introductions this week") invites a 2.1 or 4.2 rejection on top of 4.3.
4. **Must:** the App Store build has no test wording. Remove "isn't open yet", "Continue without photos (test)" and "Test version: no check took place", and set TEST_BUILD to false in the production profile. TestFlight builds may keep them.
5. **Must:** don't block the app by IP address or GPS outside the UK. Apple's reviewers may not be in the UK. Keep "UK only" as App Store and Play availability plus UK towns.
6. **Must:** the season is a **non-renewing subscription** on Apple and a **prepaid plan** on Google, through RevenueCat. Our server keeps the end date, restores it on every device and never renews it. No codes or seasons paid for outside the app (3.1.1).
7. **Must:** set the age rating to 18+ with Apple's new "Dating and Relationships" descriptor. This has been in App Store Connect since 16 Nov 2026, and every app must answer it by 12 Jan 2027. On Google Play, Restrict Minor Access is required for apps whose core purpose is matchmaking.
8. **Must:** test 4.3 early through **TestFlight external testing** after milestone 2, with made-up data, then a full review set to **Manually release**. Book a **Meet with Apple App Review appointment** (30 minutes, Tuesdays and Thursdays) for the first slot after 15 Jan 2027. The owner books it.
9. **Should:** plan for Apple saying no. Android goes first (Google Play has no 4.3), with a clear fallback for iPhone users (section 4.7). Never resubmit the same build again and again. The Apple developer account is the one Kingdom First Life uses.
10. **Should:** attach a one-page comparison and a 3-minute screen recording to every submission. Apple's own engineer told a rejected dating app to "provide more evidence of uniqueness" (thread 787880).
11. **Should:** list sensitive data honestly in App Privacy and Play Data safety: religion, sexual orientation implied by man–woman introductions, marital history, the ID check and selfie, photos and messages. Name Stripe Identity and any AI moderation as third parties (5.1.2(i)).
12. **Could:** use App Store pre-orders for the London waitlist. The UK digital markets regime may give a route to complain about an unfair refusal, which the solicitor should check (K).

---

## 1. Guideline 4.3(b): the rule, the record, and Covenant

### 1.1 The rule today (V, guidelines dated 16 Oct 2026)
> "Don't submit apps that are indistinguishable from what's already widely available. … Certain kinds of apps, such as dating, … are well established on the App Store and we will not accept new submissions unless they offer a meaningfully different or improved experience. We may remove these apps from the App Store going forward if they are not updated, improved, or do not attract customers."

What this means for Covenant:
- **Apple will treat Covenant as a dating app.** "Introductions for marriage, not dating" won't move it out of the category. Struck tried taking features out, and Tall, VIVA Khoja and Kindred argued about their niche. All were judged as dating apps. Say so openly in the notes. Trying to dodge the category reads as misleading (2.3.1).
- **The test is "meaningfully different or improved".** Two developers say Apple's rejection letter itself admits the app "may include features or characteristics that distinguish it", then adds "there are already enough of these apps" (BeetMeet, Tekero). So a difference alone isn't enough. It has to be big, visible and shown with evidence.
- **The rule also hits live apps.** Mithaq, a live app with profiles, was approved in July 2026, then had every update rejected under 4.3(b) from August, bug fixes included (thread 847985). Getting approved once is not the end of the risk. Keep shipping real improvements and keep real users.

### 1.2 Recent cases (all V on the Apple Developer Forums, 26 Nov 2026)

| App | Date | What it claimed was different | Result |
|---|---|---|---|
| VIVA Khoja, matrimonial app for one Shia community (848193) | Jun and Sep 2026 | Limited profiles a day, "Send Interest" instead of swiping, compulsory ID check, a matchmaker screen, recommendations from relatives | Rejected twice. Appeal and Developer Support pending. The developer saw no sign in server logs that the reviewer used the app. |
| Tall (823323) | Apr 2026 | Height gate, door-frame photo check, a daily curated drop | Rejected four times, appeal upheld. A Meet with Apple appointment was booked. |
| BeetMeet, Korea, 19+ (852906) | Oct 2026 | A model built before matching, a 90% screening threshold, photos blurred until day 7, no feed | Rejected. Appeal pending with no reply. |
| Tekero (843754) | 2026 | Ghosting penalty, chat cap, trust score, joint browsing | Rejected ("already enough of these apps"). Appeal pending. Its testers used it on TestFlight. |
| Purge (850439) | Oct 2026 | Nightly reset, camera-only photos, 8 replies a day | Rejected four times. |
| Diary-based dating app (844231) | 2026 | Text first, no photo grid, ID-checked users, AI moderation | Appeal rejected with a template reply. Appointment requested. |
| Rove (787880) | 2025–26 | 3-conversation cap, curated drop, behaviour ratings | Rejected. An Apple DTS engineer asked for "more evidence of uniqueness". |
| YADA (826032) | May 2026 | Matches people who have already met | Flagged under 4.3(b) **in TestFlight review**, approved for external testing after an appeal, then rejected for the App Store. The App Review Board later found the 4.3(b) rejection "not valid" (developer's account), then raised 1.2 (block and report) and 5.1. |
| Struck (TechCrunch, 2020) | 2020 | Astrology matching | About nine rejections, then suddenly approved. Even the reviewer couldn't say why. |

**What this teaches:**
- Caps, daily drops, "no swiping", ID checks, photos blurred until later and family involvement have **all** been tried in 2026 and refused. VIVA Khoja is the closest case to ours: marriage, one community, relatives' recommendations, a matchmaker. It still failed.
- The only 2026 case that got past 4.3(b) did it **on appeal** (YADA). The difference was a mechanic you couldn't mistake for any other app. Then it hit 1.2 and 5.1 problems, because the safety basics weren't ready.
- Several developers found reviewers rejected within minutes, without using the app. The difference must be **visible on the first screens and in the screenshots**, not only described in the notes.
- Google Play approved apps that Apple refused (Kindred; the app in thread 811633).

### 1.3 Is Covenant meaningfully different? Point by point

| Covenant feature | Already done by others? | Weight with Apple |
|---|---|---|
| **A Companion for each person in every conversation, ID-checked, compulsory. No two-person chat exists, and the conversation pauses if a Companion isn't present.** | No. Muzz's optional Chaperone Mode sends a weekly copy to a wali. No app checks a chaperone's ID or makes one compulsory (comparison, V). | **Strong.** It is structural, the server enforces it (no two-person message table; `post_message()` refuses without both Companions), and a reviewer can see it at once. This is the case. |
| **A private "I feel pressured, or I'm worried about my safety" line the Companions can't see**, with same-day review and a forced-marriage route | No app found has a safety line hidden from chaperones. | **Strong in support.** It shows the Companion model was designed with safety in mind, not just bolted on. |
| **Faith answers first; photos only after both say yes to the faith summary, then shown to both at the same moment, checked against the ID selfie** | Faith questions are common. Photos later was tried by BeetMeet (blurred until day 7), which was refused. Muzz lets women hide photos. | **Medium.** Real, but the closest copy was refused. Present it as part of one sequence: faith → two yeses → photos → Companions. |
| **Church-aware marital history** (never married, widowed, divorced, declaration of nullity, church permission, in process), with each tradition's teaching explained | Not found in this depth. CatholicMatch asks about annulment (K). | **Medium.** Distinctive and caring, but a reviewer outside the faith may not see it. One screenshot is enough. |
| **A season that never renews** (e.g. £59.99 for 6 months). Free to join, check ID, answer and see introductions. Companions never pay. No paying to be seen. | Every subscription found renews automatically. Paying to be seen is almost everywhere. | **Medium.** It is "improved" in Apple's own terms: renewals are a top complaint, and the app has no reason to keep people single. Rare in the category. |
| Up to 3 introductions a week, Thursday evening, never Sunday; one open conversation at a time | Caps and drops: Tall, VIVA Khoja, Purge, Rove (all refused). Thursday the app closed in 2025. | **Weak alone.** Never lead with it. It also makes review harder (section 2.2). |
| No swiping, likes, streaks, read receipts, "last active" or scores | Claimed by nearly every refused app above. | **Weak alone.** |
| ID document plus live selfie for everyone, Companions included | ID checks are the minimum now (Hinge, Muzz, Shaadi). The Companion check is new. | **Weak for members, medium for Companions.** |
| "For marriage, not dating" | CatholicMatch, Muzz, Shaadi, Ark, Upward (comparison). | **Weak.** It is the purpose, not the difference. |

**My view:** Covenant is meaningfully different in Apple's terms, **but only if the reviewer sees the Companion model working within the first minute.** Covenant is a third party's verified presence in every conversation, enforced by the server, with a private safety line around it. That is not a dating app with features added. It is a different kind of product: a supervised introduction service, which is closer to the way churches and families have always introduced people. Of all the apps above, ours is the only one whose main mechanic can't be found anywhere in the category. Even so, the risk stays **high**, because the record shows Apple refusing apps it admits are distinguishable.

### 1.4 How we show it (the evidence pack)
Apple's engineer asked one rejected developer for "evidence of uniqueness" (787880). A community answer to another said "show the difference, not explain it" (850439). So:
1. **First 30 seconds.** Welcome's first line names the Companion. The current order is faith first, then photos, then Companions. Reorder to: "Every conversation includes a Companion for each of you" / "Faith and marriage questions first" / "Photos only when you both say yes". (Claude, with the owner's and pastoral reviewer's OK.)
2. **Store screenshots** (2.3: they must match the app). Screenshot 1 shows a conversation with both Companions named on screen and "Paused: waiting for Ruth's Companion". Screenshot 2 shows the faith summary with no photo. Screenshot 3 shows "Your season: 6 months. It doesn't renew." No couples' faces, and no profile grids.
3. **Subtitle and promotional text** lead with the difference, e.g. "Faith first. Faces second. Never alone." (comparison proposal; the brand and pastoral reviewers check it). The word "dating" appears only as "not dating".
4. **A one-page comparison** attached to the review: Covenant against Muzz, CatholicMatch, Hinge and Ark on six rows (one-to-one chat, chaperone, chaperone ID check, private safety line, photos before faith, renewal). Build it from the existing .xlsx, citing its sources.
5. **A 3-minute screen recording** from the submitted build (section 5.3).
6. **Ask App Review the question directly** at the appointment (section 4.4): "Does a compulsory, ID-checked third person in every conversation count as a meaningfully different experience? What evidence would help you judge it?"

---

## 2. Design choices: what helps, what hurts, what to change

### 2.1 Choices that strengthen the case (keep)
- No two-person message table, with `post_message()` refusing messages unless a checked Companion for each member is present (build plan). Mention this in the notes. It proves the rule is enforced, not just written.
- Companions can't say yes or no, close an introduction or message anyone privately.
- The private safety line, the forced-marriage route and help lines for all four UK nations (`app/help.tsx`, 48px tap targets).
- Two quiet yeses, and nobody learns who said no.
- No pay-to-be-seen. Safety (the ID check) is never charged.
- The non-renewing season, with free joining and answering before any payment. The reviewer sees the difference before any paywall, which also helps 4.2.
- Kingdom First Life Limited submits it, a legal entity. 5.1.1(ix) expects that for apps that "require sensitive user information" (V).

### 2.2 Choices that weaken it (change or manage)

| Issue | Risk | Change | Who |
|---|---|---|---|
| Introductions arrive only on Thursday evening, so a reviewer on a Monday finds nothing | High (2.1, 4.2, 4.3) | Seed the demo accounts so they are already mid-introduction; reset them every night (section 5.2). Say in the notes that real members receive introductions on Thursday evening. This sets up data, not different behaviour, so the app behaves the same for everyone. | Claude (seed and reset job); owner approves |
| Empty Home ("No new introductions this week", milestone 1 plan) | High | Demo accounts never show it. For real members, follow the comparison's "never show an empty week": areas open only once they have enough members. | Claude |
| Email-code sign-in that reviewers can't receive | High (2.1) | The "App review sign-in" link with a password, the same pattern as KFL (`reviewSignIn`). It is open to any account that has a password, so it is not reviewer-only. | Claude |
| Stripe Identity needs a real ID | Medium (2.1) | Demo accounts are already checked. The notes explain the flow, and the recording shows it. Don't ask the reviewer to upload their own ID. | Claude, owner |
| Test wording in `signin.tsx`, `idcheck.tsx`, `checked.tsx`, `saved.tsx` ("isn't open yet", "(test)") | High in an App Store build (2.1: "placeholder text … should be scrubbed") | Production EAS profile sets TEST_BUILD false and the real flows run. Fine in TestFlight. | Claude |
| UK only | Medium | App Store and Play availability set to the UK only. No IP or GPS block inside the app. The demo accounts are UK members. | Owner (availability), Claude |
| Up to 3 a week and the Thursday rhythm presented as differences | Medium | Keep them in the product, but leave them out of the first lines of the notes and the screenshots. | Owner, Claude |
| "For marriage, not dating" as the headline | Medium | Use it as the purpose line, after the Companion line. | Brand reviewer, owner |
| Faith screen: "Marriage is a lifelong covenant between one man and one woman" | Low to medium (1.1.1 bans "discriminatory … references or commentary about religion … sexual orientation") | Keep the current, kind wording (pastoral D7). Faith apps with stated beliefs are on the store (CatholicMatch, Muzz), so a statement of belief isn't the problem; mean-spirited wording would be. Never add anything about other people. The solicitor's Equality Act advice comes first. | Solicitor, pastoral reviewer |
| A small pool at launch, and Apple's "do not attract customers" removal clause | Medium, after launch | Area-by-area opening, real updates every few weeks, real users. Release on the App Store close to when the London waitlist opens, not months before. | Owner |
| Companion friction, people leaving at "invite a Companion" | Medium, product risk | Measure it in the closed beta. The decision is the owner's. Don't weaken the rule for review: it is the case. | Owner |

### 2.3 Change before the first submission (in order)
1. Reorder Welcome so the Companion comes first. Put the same order in screenshots 1–3 and the subtitle.
2. Build the demo seed and nightly reset (section 5.2), and the password sign-in.
3. Production profile with TEST_BUILD off, and real ID, photo and payment flows.
4. In-app account deletion for members **and** Companions (section 3.6).
5. Report and block on every profile, message and Companion. A filter for numbers, emails, links and addresses. Published contact details. A moderation queue with a named response time (section 3.1).
6. Privacy policy and terms URLs live, in the app and in App Store Connect (5.1.1(i)).
7. A season purchase that works in sandbox, with Restore (section 3.4).
8. The evidence pack: comparison page, recording, review notes.

---

## 3. Other guidelines and policies that apply

### 3.1 Apple 1.2 User-Generated Content (V)
> Apps "must include: A method for filtering objectionable material from being posted … A mechanism to report offensive content and timely responses to concerns … The ability to block abusive users … Published contact information."

Apple also says it is "your responsibility to remove content that violates this guideline". The 9 Jun 2026 update adds that Apple may ask for "a plan to improve your compliance".

- **What Covenant does (planned):** the message filter (numbers, emails, links, addresses), report and block, the `reports` and `blocks` tables, the private safety line, and urgent email alerts (build plan, `_cov_safety`).
- **Risk: medium.** YADA got past 4.3(b) on appeal and then failed 1.2 for missing block, report and a EULA. Messaging between strangers draws extra checks.
- **Change:**
  - Report and block on each member, each Companion and each message, reachable in two taps.
  - Terms (EULA) accepted at sign-up, with "no tolerance for objectionable content or abusive users" written plainly (K: Apple's usual wording in 1.2 rejections).
  - A person reviews every profile's text and photos before anyone sees them (comparison must 4).
  - A written moderation plan: who moderates, response within 24 hours, same day for safety reports. Put one line about it in the notes.
  - Two trained moderators before beta (round 1).
- **Who acts:** Claude builds. The owner names the moderators.

### 3.2 Apple 1.4 Physical Harm (V) and safety when meeting
1.4.1 is about medical apps, so it doesn't apply directly. But Apple asks whether apps that bring strangers together in person keep people safe (K).
- **Covenant:** help lines; a "first meeting plan" is a could in the comparison.
- **Risk: low.**
- **Change:** a short "Meeting safely" card before the first meeting (public place, tell your Companion, your own way home), and "Get help now" on every conversation screen.
- **Who acts:** Claude, with the pastoral reviewer and safeguarding adviser.

### 3.3 Apple 5.1.1 and 5.1.2, App Privacy, and UK GDPR
The rules (V):
- 5.1.1(i) requires a privacy policy that says what is collected and how to delete it.
- 5.1.1(ii) requires consent and an easy way to withdraw it.
- 5.1.1(iii) is data minimisation: "use the out-of-process picker … rather than requesting full access to … Photos".
- 5.1.2(i) requires that "You must clearly disclose where personal data will be shared with third parties, including with third-party AI".
- 5.1.2(vi) bars using face data from camera APIs for marketing.

**Sensitive data in Covenant:**
- Religion and church.
- Sexual orientation, implied by man–woman introductions.
- Marital history.
- Government ID and a live selfie (biometric), through Stripe Identity.
- Photos.
- Messages, which Companions read.
- Town.
- Safety reports.

**Risk: medium with Apple, high in law.** The UK GDPR treats religion, sexual orientation and biometrics as special category data, which needs explicit consent and a DPIA. The solicitor and the DPIA come first (CLAUDE.md).

**Change:**
- Explicit consent for each kind of data, separately, before it is collected. Plain purpose strings for the camera ("To check that your photos and your ID match you. Images are deleted once the check passes.").
- PHPicker for photos (no full Photos access).
- Keep only the ID result, not the images (`_cov_verification` stores the result only).
- App Privacy labels: declare Sensitive Info, Contact Info, Photos, User Content (messages), Identifiers, and anything Stripe collects (K: Stripe's own privacy details).
- Name Stripe and any AI moderation in the policy and on screen.
- Companions agree, at their own sign-up, that their messages are seen by both members and the other Companion.

**Who acts:** solicitor (policy and DPIA), Claude (screens, labels draft), owner (App Store Connect).

### 3.4 Apple 3.1.1 and the season as a non-renewing subscription
The rules (V):
- 3.1.1: "If you want to unlock features or functionality within your app (by way of example: subscriptions …), you must use in-app purchase."
- 3.1.2 covers only auto-renewing subscriptions.
- Apple's StoreKit documentation says that for non-renewing subscriptions "Your app is responsible for calculating the time period … for detecting that a non-renewing subscription is approaching its expiration date … [and] for making purchased subscriptions available across all the user's devices and for letting users restore past purchases."

**Covenant:** a RevenueCat non-renewing product on Apple and a prepaid plan on Google. The end date lives on the server via webhook (build plan).

**Risk: low to medium.** Reviewers sometimes question a non-renewing subscription used for ongoing access to a service (K). Our reason is a real one, so give it in the notes: "The season ends by design; we never want to earn more from someone staying single."

**Change:**
- Show before purchase what the season gives (saying yes, conversations with Companions, photos after two yeses), its length and "It doesn't renew".
- Restore on sign-in on any device, from our server.
- A sandbox purchase path in the demo (section 5.2).
- No church-paid or hardship seasons unlocked by codes bought outside the app. Use Apple offer codes, or grant from the server with nothing sold outside the app (K; the solicitor checks, since KFL gives churches "a year of Premium, freely given").
- Companions never see a paywall.
- 3.1.3(d) (person-to-person services) and 3.1.3(e) (services consumed outside the app) don't apply: introductions are a digital service in the app.

**Who acts:** Claude (code), owner (App Store Connect, Play Console and RevenueCat products).

### 3.5 Apple 2.1 completeness, demo accounts and 2.3.1 notes (V)
The rules:
- 2.1(a): "include demo account info (and turn on your back-end service!) if your app includes a login … Ensure the demo mode exhibits your app's full features."
- 2.3.1(a): "All new features … must be described with specificity in the Notes for Review … (generic descriptions will be rejected)."

**Risk: high** if a reviewer can't reach an introduction and a conversation.

**Answer:**
- Four seeded demo accounts, password sign-in, a nightly reset and the back end on (sections 5.1–5.2).
- Specific notes.
- No placeholder screens.
- Every link works: privacy, terms, support, help lines.

### 3.6 Apple 5.1.1(v) account deletion (V)
> "If your app supports account creation, you must also offer account deletion within the app."

**Covenant:** "Me, Pause, Leave" is in milestone 1. It must be real deletion, not a pause.

**Risk: medium**, because there are two kinds of account.

**Change:**
- "Delete my account" in Me for members **and** Companions, with one confirmation, and deletion through a server function.
- Say what is kept and why. For example, safety reports and the ID-check result may be kept for a fixed time for legal and safety reasons; the solicitor sets the period.
- Deleting a member closes their introductions kindly for the other person.
- Deleting a Companion pauses the conversations they were in, with "Choose another Companion".
- Remind members that a season paid through Apple can't be refunded by us (Apple handles refunds; K).

**Who acts:** Claude, solicitor (what is kept).

### 3.7 Age 18+ (V)
- **Apple:** from 16 Nov 2026 the age-rating questionnaire has a "Dating and Relationships" descriptor with a minimum 18+ rating. Every app must answer it by 12 Jan 2027 (iClarified, MacRumors). The July 2026 questions also ask about social media features. Covenant has no feed, so answer honestly.
- **Covenant:** the ID check gives age from the document. Set 18+.
- **Google:** the Age-Restricted Content and Functionality policy says apps must block minors if they are "Apps whose core functionality is to facilitate matchmaking or dating". Use Play Console's Restrict Minor Access. Google adds that "Simple age gates that can be easily circumvented may not be considered reasonable", and our ID check answers that.
- **Risk: low.**
- **Who acts:** owner (questionnaires), Claude (answers drafted).

### 3.8 Apple 4.3(a)
Don't make extra apps or bundle IDs for each tradition or area. One app, one bundle ID (com.kingdomfirstlife.covenant).
- **Risk: low.**
- Note: an old record with a live storefront caused a 4.3(a) rejection for BeetMeet. Keep only one App Store Connect record for Covenant (created 26 Nov).

### 3.9 Apple 5.6 Developer Code of Conduct and the shared account (V)
- The guidelines warn that repeated rejection "for the same guideline violation" makes review slower. They also say "Repeated manipulative or misleading behavior … will lead to your removal from the Apple Developer Program."
- Covenant shares team 9ZQT8B59NK with Kingdom First Life.
- **Risk: low if we behave well, severe if not.**
- **Rule:**
  - Never resubmit an unchanged build after a 4.3 rejection.
  - Reply in the Resolution Center or appeal instead.
  - Every resubmission names what changed.
  - Keep a log in reviews/store/.

### 3.10 Google Play (dating, UGC, Data safety, account deletion, payments)
- **No 4.3 equivalent.** Apps Apple refused are on Google Play (Kindred; thread 811633). **Android is the likely first store.**
- **Dating:** Restrict Minor Access (section 3.7) (V).
- **User-generated content (V):**
  - Users must "accept the app's Terms of Use and/or user policy before users can create or upload UGC".
  - The terms must define objectionable content.
  - Moderation must be "robust, effective and ongoing".
  - There must be "an in-app system for reporting and blocking objectionable UGC and users".
  - The same build as for Apple 1.2 meets this.
- **Data safety (K):** declare "Political or religious beliefs", "Sexual orientation", photos, messages, approximate location (town), and the ID check through Stripe. Say whether data is encrypted in transit and how it can be deleted.
- **Account deletion (K):** Google requires in-app deletion **and** a web page where people can ask for deletion without the app. Covenant needs its own page, like KFL's website/delete-account.html.
- **Payments:** Google Play Billing prepaid plan for the season (K: prepaid base plans don't renew).
- **Account type:** the Organization account (the same as KFL). The 12-tester, 14-day closed test rule applies to personal accounts created after Nov 2023, so not to us (K).
- **Subscription eligibility rule** (announced 29 Oct 2026, deadline 27 Jan 2027, V): it applies only to eligibility-based discounts, such as a hardship season if we ever add one. If so, state who qualifies and how it is checked.
- **Who acts:** owner (Play Console forms), Claude (drafts).

### 3.11 UK law around the stores (K, for the solicitor)
Apple doesn't check these, but Ofcom does:
- **Online Safety Act** duties for a user-to-user service with messaging: an illegal-harms risk assessment, a children's access assessment, and reporting and complaints (Ofcom's dating guidance is in the comparison).
- **Equality Act:** Christians-only and man–woman introductions.
- **UK GDPR:** special category data.

---

## 4. Step-by-step plan for testing early

The limits (CLAUDE.md and the build plan):
- No Covenant work 4–14 Dec.
- Android test builds from 15 Dec.
- No iPhone builds before 15 Jan 2027.
- No Covenant store submission until Kingdom First Life is live on 31 Dec 2026.
- Real personal data only after the solicitor, the DPIA, the safeguarding advisers and the pastoral reviewer.

TestFlight external testing counts as a submission to Apple. So it waits until after 31 Dec, and in practice until after 15 Jan because of the iPhone build limit.

### 4.1 Now to 3 Dec 2026 (nothing to build)
1. **Owner:** open the Meet with Apple schedule (developer.apple.com/events, search "App Review"). Note how far ahead App Review appointments open. Request the first Tuesday or Thursday slot after 15 Jan 2027. Include Covenant's App Apple ID from App Store Connect (the record created 26 Nov) and the questions in 4.4. If nothing is bookable that far ahead, set a reminder for early January.
2. **Claude**, after the day's KFL work: draft the one-page comparison from the .xlsx.

### 4.2 15 Dec 2026 to 14 Jan 2027: EAS builds, Android first
3. Milestone 1 on Android through EAS (Linux workflow, `eas build -p android --profile preview`), installed by the owner and Claude's testers with made-up data.
4. Google Play internal testing track, after 31 Dec, made-up data only. This is not a public release. It checks the Play Console set-up, Restrict Minor Access, and drafts of Data safety and the deletion page.

### 4.3 From 15 Jan 2027: iPhone
5. **Owner:** upload the Admin App Store Connect API key to Expo › Credentials (CLAUDE.md, still to do).
6. **Claude:** `eas build -p ios --profile production`, then `eas submit` to TestFlight. **Internal** testers first (up to 100 App Store Connect users). Internal builds get no review, so this is not yet an Apple read.
7. **Meet with Apple appointment** (section 4.4). Show the internal build or the prototype and ask the 4.3 questions. Write down what is said, the same day, in reviews/store/.

### 4.4 The App Review appointment (V: Apple help page, 26 Nov 2026)
- 30 minutes on Webex, "during your local business hours on Tuesdays and Thursdays". The camera is optional.
- It "doesn't replace, expedite, or guarantee the outcome of your app's review". Apple "cannot preapprove apps or specific features".
- Request it on the Meet with Apple page with the App Apple ID and specific questions.

Questions to send:
1. Covenant has no one-to-one messaging. Every conversation has an ID-checked Companion for each person, and messages are refused without them. Does this kind of structural difference count as a "meaningfully different experience" under 4.3(b)?
2. What evidence helps App Review judge that? A comparison table, a screen recording, the server rule?
3. Our introductions arrive on Thursday evenings. Is seeding demo accounts with an introduction in progress, and resetting them nightly, the right way to show the full experience?
4. Is a non-renewing subscription the right product for a 6-month season that deliberately never renews?
5. UK only: is App Store availability alone enough, with no in-app location block?
6. If we are refused under 4.3(b), what would the App Review Board need to see?

### 4.5 After milestone 2 (about February to March 2027): TestFlight external, the first real 4.3 read
8. Milestone 2 complete (section 6), still on made-up data.
9. An external TestFlight group of 10–30 people (KFL testers who volunteer, friends from the owner's church), all with made-up answers, and **no real photos or ID.** External testers are real people. Until the solicitor and DPIA are done they must not enter real religion, marital history or photos. The test build keeps its "made-up answers" wording.
10. Submit the build for **TestFlight App Review**. Fill in Test Information with the same notes and demo accounts as section 5, the beta description, and a feedback email. "The first build you submit requires a full review" (V). YADA was flagged under 4.3(b) at exactly this stage, so this is a genuine early read.
11. **If approved:** run the test for a few weeks. Note that passing beta review is **not** an App Store approval: YADA passed TestFlight and was then refused for the store.
12. **If flagged under 4.3(b):** reply in the Resolution Center first (section 4.7).

### 4.6 Full App Review, set to "Manually release" (about March to April 2027, after the solicitor)
13. Submit the App Store build: test wording gone, real ID, photo and payment flows, the evidence pack attached. In App Store Connect choose **"Manually release this version"**. An approved build then waits as "Pending Developer Release" until the owner presses Release (K).
14. Aim to release when the London waitlist opens after Easter (Easter Day is 28 Mar 2027), so the app goes live with real people and real updates soon after. It is safer not to sit approved for months and then change the build. The new build would be reviewed again, and Mithaq shows 4.3(b) can hit an update.
15. Google Play production in parallel: closed testing, then production with the same notes and accounts, as soon as the solicitor clears real data.
16. **Could:** Apple pre-orders (up to 180 days, K) can list the app for the waitlist before it opens. Pre-orders still go through full review.

### 4.7 If Apple says no: Resolution Center, then the App Review Board
- **Resolution Center reply first** (V: "please use App Store Connect to communicate directly with the App Review team"). Keep it short: one line per structural difference with a screenshot beside it (850439), then the comparison page and the recording link. Ask which feature they consider "widely available" (as BeetMeet asked).
- **Then the App Review Board appeal** (V: "If you disagree with the outcome of your review, please submit an appeal") on Apple's appeal form in Contact Us. Note the case number. The 2026 threads show weeks of silence and template replies, so plan for 4–8 weeks.
- **Don't resubmit the same build while an appeal is open** (community advice, not verified). Never resubmit without real changes (section 3.9).
- **Take real product changes back into the next build** if Apple names one. Never change something Apple didn't ask about just to "look different".
- **Fallbacks, if the Board upholds the rejection:**
  1. **Android first:** launch on Google Play and keep the iPhone appeal open.
  2. **iPhone users through the web:** the Expo app already has `web: { output: 'static' }`, so a web version could serve iPhone users. CLAUDE.md says the native apps are "from the start", so the owner decides.
  3. **UK digital markets regime:** the CMA gave Apple strategic market status for mobile platforms in Oct 2025, and app review fairness has been part of its work (K, for the solicitor to confirm). This is a route to raise an unfair refusal, not a way to force approval.

---

## 5. Draft App Review notes, demo accounts and recording

### 5.1 Notes to paste into App Store Connect (and Play Console app access)
App Store Connect allows about 4,000 characters (K). This draft is under that. The owner pastes it and types the account details himself. Placeholders are in angle brackets.

> **Kingdom First Covenant has no one-to-one chat. Every conversation includes a Companion for each person (a family member, friend, priest or pastor), and our server refuses any message unless an ID-checked Companion for each member is present.**
> **People answer faith and marriage questions first; photos are shown only after both say yes, to both at the same moment. It is for Christians in the UK who want to marry, not for dating.**
>
> We know Covenant sits in the dating category under 4.3(b). What is different:
> 1. Companions in every conversation. They pass the same ID check, can read, write, pause and report, but cannot say yes or no, close an introduction or message anyone privately. If a Companion leaves, the conversation pauses. It never becomes one-to-one.
> 2. A private "I feel pressured, or I'm worried about my safety" line in every conversation, which no Companion or other member can see, reviewed by our team the same day.
> 3. Faith first, faces second: no photo is shown until both have said yes to each other's faith summary.
> 4. A season that never renews (6 months, non-renewing in-app purchase). Joining, the ID check, the questions and seeing introductions are free. Companions never pay, and nobody can pay to be seen.
> A one-page comparison and a 3-minute recording are attached.
>
> **Demo accounts** (password sign-in: on the sign-in screen tap "App review sign-in"). All four are already ID-checked, so you won't be asked for your own ID. They reset to this state every night (UK time).
> - Member A, Ruth: <email> / <password>. Has a season. In a conversation with Daniel, with both Companions.
> - Member B, Daniel: <email> / <password>. No season. Also has an introduction waiting from Hannah (a demo profile), to try the yes and season purchase in sandbox.
> - Companion for Ruth, Margaret: <email> / <password>.
> - Companion for Daniel, Fr Thomas: <email> / <password>.
>
> **Steps (about 5 minutes)**
> 1. Sign in as Ruth. Open Conversation: Daniel. You'll see both Companions named. Send a message. Try typing a phone number: it is filtered.
> 2. Tap ⋯ › "I feel pressured, or I'm worried about my safety" to see the private line (please don't send it), then Report and Block.
> 3. Sign in as Margaret (Companion). You can read, write, Pause and Report. There is no Yes, No or Close, and no private messages.
> 4. Sign in as Daniel. Open Introduction: Hannah. You'll see her faith summary with no photo. Tap Yes. The season sheet shows the price and "It doesn't renew". Buy in sandbox. Photos appear only after both yeses.
> 5. Me › Delete my account works for members and Companions (please use it only on a demo account you've finished with).
>
> **Why introductions may look sparse:** real members receive up to 3 introductions on Thursday evening, never on Sunday, with one open conversation at a time. The demo accounts are set up so you can see everything on any day.
>
> **ID check:** real members and Companions show a passport or driving licence and take a live selfie through Stripe Identity. We keep only the result; the images are deleted once the check passes. You can start the flow from Me › ID check to see the screens.
>
> **Safety and moderation:** a person reviews every profile's text and photos before anyone sees them. Messages are filtered for phone numbers, emails, links and addresses. Report and block are on every profile, message and Companion. Reports are answered within 24 hours, and safety reports the same day. Adults only (18+, from the ID). UK only. Contact: support@kingdomfirstlife.com.
>
> **Data:** religion, marital history, photos and the ID check are collected only with explicit consent, explained on each screen, and can be withdrawn and deleted in the app.
>
> Submitted by Kingdom First Life Limited.

Claude checks the notes against the build on the day of each submission. Every step must work exactly as written (2.3.1). Before the notes go in, decide whether to name Stripe and RevenueCat, and the exact retention periods (solicitor).

### 5.2 The demo accounts and seed (Claude builds, owner approves)
- **Four accounts with passwords.** The owner creates them in the Covenant Supabase project (afiyphuubmefjaofbmbx) and keeps the passwords. Plus-aliases of a mailbox he already has are fine, as with KFL (e.g. support+cov-ruth@kingdomfirstlife.com). They are marked ID-checked by an admin function (build plan step 4), never by a fake ID.
- **The seed:**
  - Ruth (woman, Anglican, never married, season active) and Daniel (man, Catholic, never married) both said yes; photos were shared; a conversation of about 8 messages with Margaret and Fr Thomas.
  - Hannah is a demo profile only (no login). She has said yes to Daniel. Daniel hasn't answered and has no season.
  - **Assumption to check:** a member in an open conversation can also have one introduction waiting ("one more introduction may wait", CLAUDE.md). If the owner rules that out, give Hannah's introduction to a fifth account, a member with no season.
- **The nightly reset:** a scheduled server job, at 03:00 UK, restores the seed for accounts flagged `review_demo`. It doesn't touch any other account. This is data, not reviewer-only behaviour: the app runs the same code for everyone.
- Demo accounts are never introduced to real members. Real members never see them.
- **Sandbox:** Daniel's purchase uses Apple's sandbox automatically in review (K). The RevenueCat webhook resets with the seed.

### 5.3 Screen recording plan (3 minutes, from the submitted build)
Record on an iPhone with the system screen recorder, with short captions added afterwards. No voice, no real people's faces, and demo photos only (stock or drawn, with a licence). Link it in the notes (an unlisted link) or attach it in App Review Information.

| Time | Screen | Caption |
|---|---|---|
| 0:00 | Welcome | "Every conversation includes a Companion for each of you." |
| 0:10 | My yes, the faith statement, Your church, Your story so far, Who you're open to | "Faith and marriage first. Divorced and annulled are both welcome, explained kindly for each church." |
| 0:40 | Why we check / ID check (Stripe flow) | "Everyone, Companions too, shows ID and a live selfie." |
| 0:55 | Invite a Companion, and the Companion's own sign-up and ID check | "Your Companion is someone you trust." |
| 1:15 | Thursday introduction: faith summary, no photo | "Faith first. No photos yet." |
| 1:30 | Yes, then the season sheet ("It doesn't renew"), then both yes, then photos at the same moment | "Photos only after two yeses." |
| 1:50 | Conversation with two Companions; type a phone number (filtered) | "Never one-to-one." |
| 2:05 | A Companion leaves: "Paused: waiting for Daniel's Companion" | "No Companion, no conversation." |
| 2:15 | ⋯ › the private safety line, Report, Block | "A private line nobody else in the conversation can see." |
| 2:30 | The Companion's view: no Yes, No or Close | "Companions support. Only the member decides." |
| 2:40 | Close this introduction kindly | "Kind endings." |
| 2:50 | Me › Delete my account | "Delete anytime, in the app." |

---

## 6. What milestones 1 and 2 must include for a reviewer to judge Covenant complete

### Milestone 1 (Android from 15 Dec, iPhone internal TestFlight from 15 Jan; made-up data)
The build plan's list is right for internal testing. **It is not enough for any Apple review**, because a reviewer would see no introduction and no Companion: the whole case is missing. Add these to milestone 1 so it can go to Apple's appointment and internal testers:
- Password sign-in ("App review sign-in"), the same as KFL.
- Me › Delete my account, working end to end (not only Pause and Leave).
- Report and block wired to the `reports` and `blocks` tables, the private safety line (`safety_requests`) and the urgent alert. All three are already in `_cov_safety`.
- Privacy and terms links (drafts are fine for internal testing).
- Welcome reordered with the Companion first.
- A visible build label ("Test version, made-up answers"). It is already there through TEST_BUILD.

### Milestone 2 (needed before TestFlight external and the full review)
The difference must be real and working:
1. Introductions: the Thursday drop, the faith summary, two quiet yeses, "This introduction has closed", up to 3 a week and one open conversation.
2. **Companions:** invitation, the Companion's own sign-up and ID check, the Companion's view (read, write, pause, report; no yes, no or close), a quiet change of Companion, and **the pause when a Companion is missing**, enforced in `post_message()`.
3. Conversation: text only, with the filter for numbers, emails, links and addresses.
4. Photos: private bucket, signed links only after two yeses, shown to both at once, checked against the ID selfie, up to 3, no filters, and a person reviews them.
5. **The season:** a RevenueCat non-renewing product on Apple and a prepaid plan on Google, the end date on the server, Restore, and clear text before purchase.
6. Stripe Identity live (after the solicitor), with a test mode only in TestFlight.
7. The moderation console for the owner and the second moderator, with response times.
8. Kind endings, plus engaged and married flows. Keep Help and "Talk to us privately" for 6 months after an engagement (pastoral must 6).
9. Account deletion for both kinds of account, and the web deletion page for Google.
10. The demo seed and nightly reset (section 5.2).
11. Live privacy policy, terms (EULA) and support URLs, plus App Privacy and Data safety answers.
12. The age rating set to 18+ with the Dating and Relationships descriptor, and Google's Restrict Minor Access.
13. The App Store build with TEST_BUILD off and no placeholder text.

**Not needed for review:** video calls (a comparison decision), church events, a joining pledge, Holy Week pauses. Leave out anything not built; never describe unbuilt features in the notes or the store text.

---

## 7. Who acts

| Step | Owner | Claude | Solicitor and advisers |
|---|---|---|---|
| Book the App Review appointment (first slot after 15 Jan) | ✓ | questions (4.4) | |
| Expo › Credentials: the Apple API key | ✓ | | |
| Reorder Welcome; demo seed and reset; password sign-in; deletion; report and block | approves wording | builds | pastoral reviewer checks the wording |
| Comparison page, recording, notes | approves | drafts | |
| App Privacy, Data safety, age-rating questionnaires | enters them | drafts | solicitor checks |
| Privacy policy, terms, retention periods, Equality Act, Online Safety Act | | | solicitor |
| Store availability set to the UK only; products in App Store Connect, Play and RevenueCat | ✓ | lists the settings | |
| Resolution Center replies and appeals | sends them | drafts | |

---

## Sources (all checked 26 Nov 2026)
- [Apple App Review Guidelines (Last Updated 16 Oct 2026)](https://developer.apple.com/app-store/review/guidelines/)
- [MacRumors: Apple tightens 4.3(b), 9 Jun 2026](https://macrumors.com/2026/06/09/app-store-guidelines-low-quality-apps/)
- [Apple: App Review appointments](https://developer.apple.com/help/app-review/before-submitting-for-review/app-review-appointment)
- [Apple: Invite external testers (TestFlight App Review)](https://www.developer.apple.com/help/app-store-connect/test-a-beta-version/invite-external-testers)
- [Apple StoreKit: Handling subscriptions billing (non-renewing)](https://developer.apple.com/documentation/storekit/handling-subscriptions-billing.md)
- [iClarified: 18+ ratings for dating apps, descriptors from 16 Nov 2026](https://www.iclarified.com/103248/apple-to-require-18-ratings-for-dating-apps-and-romantic-virtual-companions)
- [9to5Mac: social media age-rating questions, Jul 2026](https://9to5mac.com/2026/07/09/apple-adds-social-media-questions-to-app-store-connect-age-rating-questionnaire/)
- Forums: [848193 VIVA Khoja](https://developer.apple.com/forums/thread/848193), [823323 Tall](https://developer.apple.com/forums/thread/823323), [852906 BeetMeet](https://developer.apple.com/forums/thread/852906), [843754 Tekero](https://developer.apple.com/forums/thread/843754), [850439 Purge](https://developer.apple.com/forums/thread/850439?answerId=908974022), [844231 diary-based app](https://developer.apple.com/forums/thread/844231), [787880 Rove](https://developer.apple.com/forums/thread/787880?answerId=843680022), [826032 YADA](https://developer.apple.com/forums/thread/826032), [847985 Mithaq updates](https://developer.apple.com/forums/thread/847985), [843466 Kindred](https://developer.apple.com/forums/thread/843466), [811633 Android-only after refusal](https://developer.apple.com/forums/thread/811633), [817037 how uniqueness is judged](https://developer.apple.com/forums/thread/817037)
- [TechCrunch: Struck approved after many rejections (2020)](https://techcrunch.com/2020/07/20/after-numerous-rejections-strucks-dating-app-for-the-co-star-crowd-hits-the-app-store/)
- [Kuutti: 4.3(b) plan if refused (GitHub issue)](https://github.com/kuutti-ry/kumpa-app/issues/374)
- [Google Play: Age-Restricted Content and Functionality](https://support.google.com/googleplay/android-developer/answer/16302250)
- [Google Play: apps with dating or matchmaking features](https://support.google.com/googleplay/android-developer/answer/16838200)
- [Google Play: User Generated Content policy](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en-GB)
- [Google Play: policy announcements 2026](https://support.google.com/googleplay/android-developer/table/12921780?hl=en)
