# Kingdom First Covenant: product review, round 1

Product manager, 23 Nov 2026. Answers brief questions 6 (UK law and safety) and 8 (product). Nothing here is built and nothing here is legal advice. Every fact is marked **[verified: source]** (checked today) or **[from knowledge]** (not checked today, confirm before relying on it). The solicitor decides the legal points; I only set out what is known and what must be asked.

---

## The short version

1. **This is a regulated, high-risk service, not a sister feature.** It handles religion, marital history, sexual orientation by implication (opposite-sex matching), faces and ID documents, and private conversations between strangers who may meet. Ofcom treats dating as its own risk category under the Online Safety Act.
2. **Four things block launch, and none of them is code:** solicitor advice on the Equality Act (opposite-sex and Christian-only matching), a written illegal-content risk assessment and children's access assessment *before* launch, a DPIA for the special category data, and a real moderation rota (the owner alone is not enough for a dating service).
3. **Release 1 can be small.** Verified adults, about 25 Tier 1 questions, weekly introductions (no browsing), mutual photo reveal, a group conversation that only opens when a chaperone is present, report and block everywhere, and one honest membership price.
4. **Effort: about 80 build days plus about 10 weeks of beta and legal time running alongside.** Running costs are low (about £60–£150 a month plus about £1.25 per verified person). The real cost is moderation time.
5. **Recommended launch: closed beta June 2027, public launch early September 2027** (the start of the church term). Do not start the build before Kingdom First Life's January update ships. In December, do only the clickable prototype and send the legal questions to the solicitor.

---

## Question 6: UK law and safety

### 6.1 Online Safety Act 2023 (OSA)

**Is Covenant in scope?** Yes. Users send each other content (profiles, photos, messages), so it is a "user-to-user" service with UK users. Ofcom's own page for dating and social discovery says most dating platforms are in scope **[verified: [Ofcom, Dating and social discovery](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/dating-and-social-discovery-know-the-online-safety-risks-rules-and-how-to-comply)]**.

**What we must do (Ofcom's list for dating services) [verified, same source]:**
- An **illegal content risk assessment** covering the 17 kinds of priority illegal content, using Ofcom's Register of Risks.
- A **children's access assessment**; if children can get in, a children's risk assessment and children's safety measures as well.
- **Safety measures** based on the risk assessment: clear terms, an easy reporting and complaints tool, quick review and removal of illegal content.
- Ofcom's guidance on **women and girls** (nine actions, including safer default settings, better reporting, and reporting of incidents that happen off the app).
- **Record-keeping and review**: keep the assessments, decisions and changes in writing.

**Timing.** Do the assessments while designing, not after launch. A law-firm note on a current Ofcom investigation says "Don't launch first and assess later", and that risk assessments must be updated *before* any significant change goes live **[verified: [Lewis Silkin, 22 Oct 2026](https://www.lewissilkin.com/insights/2026/10/22/ofcom-investigation-puts-pre-launch-risk-assessments-in-the-spotlight-102o663)]**. The exact deadline for a brand-new service is something to confirm with the solicitor **[from knowledge: new services must assess before or as they come into scope]**.

**Risks Ofcom will expect us to cover on a dating service [from knowledge, matches the Register of Risks themes]:** romance fraud and money requests, harassment and stalking, controlling or coercive behaviour, cyberflashing and intimate image abuse, extreme pornography, grooming (if any child gets in), people trafficking, and threats. The chaperone model lowers several of these, but it does not remove them. The assessment should say so honestly.

**Ofcom code measures we should expect to adopt (smaller, higher-risk service) [from knowledge]:** a named person accountable for online safety; a content moderation function that can act quickly; reporting open to everyone, including chaperones and non-users; complaints and appeals; clear terms; user blocking and muting; removal of accounts that share illegal content. Ofcom's fees apply only to very large providers (about £250m+ worldwide revenue) **[from knowledge]**, so none for us.

**Children and age assurance.** Ofcom's position is that a service can only conclude children are *not* likely to get in if it uses **highly effective age assurance** **[from knowledge: Ofcom statement on age assurance and children's access, Jan 2025; [Ofcom age assurance page](https://www.ofcom.org.uk/online-safety/protecting-children/age-assurance)]**. A tick-box "I am 18" is not highly effective. Methods Ofcom accepts include photo-ID matching (document plus live selfie), facial age estimation, open banking, credit-card checks, digital ID wallets and mobile-network checks **[from knowledge]**. **Recommendation:** document plus live selfie for every member *and every chaperone* before they can see anyone or send anything. That one check covers age, identity and the anti-scam goal together.

### 6.2 UK GDPR and special category data

| Data | Category | Lawful basis to ask the solicitor to confirm |
|---|---|---|
| Christian tradition, faith practice, Tier 1 answers | **Special category** (religious belief) | Explicit consent, Article 9(2)(a) **[from knowledge]** |
| Wanting a spouse of the opposite sex | Reveals **sexual orientation** (special category) | Explicit consent **[from knowledge]** |
| Face scan used to match the ID photo | **Biometric** data for identification (special category) | Explicit consent; the provider is usually a processor **[from knowledge]** |
| Marital history (divorced, annulled, annulment in process) | Not special category in law, but highly sensitive; may reveal religion | Contract or consent; treat as if special category |
| Photos, messages, reports | Personal data; reports may hold allegations of crime | Contract; legitimate interest for safety records |

What this means in practice:
- A **DPIA** (data protection impact assessment) before building. Large-scale special category data plus matching and profiling means one is required **[from knowledge: ICO list of high-risk processing]**.
- **Separate Supabase project** from Kingdom First Life, in the London region. Never mix the two user bases.
- **Separate consent screens** for religion, for orientation, and for the face check, each one plain and each one refusable (refusing means you cannot use the service, and we say so honestly).
- **Delete the ID document images** once the check passes; keep only "verified, date, method, provider reference". Confirm the provider deletes them too.
- **Data minimisation for chaperones:** a chaperone gives name, email and the ID check, nothing else.
- **Retention:** messages deleted a set time after an introduction ends (proposal: 90 days, so reports can still be investigated); report records kept longer (proposal: 2 years); banned-person marker (a hash of the ID check, not the document) so a removed scammer cannot simply rejoin. The solicitor sets the periods.
- **Apple and Google rules** add to this: in-app account deletion **[verified: [App Review Guidelines 5.1.1(v)](https://developer.apple.com/app-store/review/guidelines/)]**, permission before sharing data with any third party including AI **[verified: 5.1.2(i), same source]**, and data collected for one purpose not reused without new consent **[verified: 5.1.2(ii)]**. So no Kingdom First Life cross-promotion using Covenant data, and no AI on profiles or messages unless people agree first.

### 6.3 Equality Act 2010: who can be matched with whom

This is the biggest legal unknown. **The solicitor must advise before any public promise is made.** What is known:

- Providing a service to the public is covered by the Act (section 29); sex, sexual orientation, religion or belief and gender reassignment are protected characteristics **[from knowledge]**.
- The religious-organisation exception (Schedule 23, paragraph 2) lets religious organisations restrict participation on grounds of religion or sexual orientation in some cases, **but it "does not apply to an organisation whose sole or main purpose is commercial"** **[verified: [legislation.gov.uk, Sch 23 para 2](https://www.legislation.gov.uk/ukpga/2010/15/schedule/23/paragraph/2)]**. Kingdom First Life Limited is a commercial company, so we should assume this exception does **not** protect Covenant as currently set up.
- The Supreme Court held in *Bull v Hall* [2013] UKSC 73 that Christian hotel owners who offered double rooms only to married (then opposite-sex) couples directly discriminated on sexual orientation **[verified: [Supreme Court press summary](https://caselaw.nationalarchives.gov.uk/uksc/2013/73/press-summary)]**. This is a warning sign, not a decision about introduction services.
- *For Women Scotland v Scottish Ministers* (UK Supreme Court, April 2025) held that "sex" in the Equality Act means biological sex **[from knowledge]**. Relevant to how we record sex and whether ID documents settle it.
- Faith-specific marriage apps operate openly in the UK with opposite-sex matching (Muzz is the best-known example) **[from knowledge; not checked how they are structured legally]**. Existence is not proof of lawfulness.

Questions for the solicitor, word for word if useful:
1. Can a commercial company offer an introduction service for Christian marriage between a man and a woman only, or does that need a different structure (for example a not-for-profit religious body) or a different description of the service?
2. Can we require members to be Christian, or only describe the service as for Christian marriage and let each person choose the traditions they are open to?
3. How should we ask and record sex (self-declared, from the ID document, or both), and what do we say to someone whose ID and self-declared sex differ?
4. Does letting each person filter by tradition, marital history and children create any risk for us, given each person chooses for themselves?

Until the answer comes, the product should be designed so that **each person sets their own filters** and the app explains its purpose plainly, rather than the app ruling people out. That keeps the most options open whatever the solicitor says.

### 6.4 Identity and age verification: providers and costs

| Provider | What it does | Published price | Notes |
|---|---|---|---|
| **Stripe Identity** | UK ID document + live selfie | **£1.25 per completed check, first 50 free** **[verified: [stripe.com/gb/identity](https://stripe.com/gb/identity)]** | Simple to add (web flow or SDK), pay-as-you-go, no minimum. Good fit for release 1. |
| **Veriff** | Document + selfie; also facial age estimation | **$0.80–$1.89 per check with a $49–$209 monthly minimum** **[verified: [Veriff self-serve plans](https://www.veriff.com/plans/self-serve)]** | Age estimation price not published. Good if volumes grow. |
| **Yoti** | Digital ID app, facial age estimation, document checks | Not published; quote needed **[from knowledge]** | UK company, widely used for UK age assurance; Ofcom-friendly. Worth a quote. |
| Onfido (Entrust), Persona | Document + selfie | Quote only **[from knowledge]** | Enterprise-leaning. |

**Recommendation:** Stripe Identity for release 1 (no minimum, cheapest to start), with a Yoti quote kept as the alternative. We pay for every check ourselves, members and chaperones alike; never charge for safety. Re-check the selfie when someone changes their profile photo.

Background checks (criminal records) are not recommended: a basic DBS check is not designed for this, it would add criminal offence data, and it would give false comfort **[from knowledge]**.

### 6.5 Moderation

- **Before anyone sees a photo, a person or tool checks it.** Release 1: an automatic nudity and face check (Google Cloud Vision SafeSearch or AWS Rekognition, about $1–1.50 per 1,000 images **[from knowledge]**) plus the moderator approving every first profile.
- **Reports reach a human within 24 hours, urgent ones the same day** (the KFL One Body rule, made stricter). Anyone in a conversation, including a chaperone, can report. "I feel unsafe" shows 999 and 101 first.
- **Scam signals flagged for the moderator, not auto-punished:** asking for money, bank details, gift cards, crypto, or to move to WhatsApp or Telegram. A gentle line in the chat: "Never send money to someone you have met here."
- **Moderation console** (web, two-step sign-in): queue, the full conversation with the chaperones' view, take down, warn, suspend, ban, keep; every action logged with a reason (record-keeping duty).
- **Who moderates.** The owner is already moderating One Body and launching KFL. A dating service needs cover every day, including holidays. Plan for at least one trained, paid or volunteer second moderator (DBS-checked, contract with confidentiality) before beta. This is the item most likely to delay launch.
- **Voluntary standards:** consider joining the Online Dating and Discovery Association and following the government's Online Fraud Charter steps for dating **[from knowledge]**.

---

## Question 8: Product

### 8.1 Release 1 must-haves and what waits

| Release 1 (must have) | Later (after launch) |
|---|---|
| Sign-up with the purpose pledge ("I am here to marry, not to date") | Church endorsement badge for verified pastors (needs a church verification process) |
| ID + selfie check for every member and chaperone | Video calls inside the chaperoned conversation |
| Profile basics: first name, age, region (not exact location), tradition, marital history, children, one short paragraph | Voice notes |
| Tier 1: about 25 questions (faith, church life, marriage, children, family life), each with "must agree" or "nice to have" | More Tier 1 depth, optional essays, "questions to ask each other" prompts |
| Weekly introductions, at most 3 open at once, no browsing, no swiping | Events with churches (in person, with chaperones) |
| Mutual "Yes, introduce us" on the Tier 1 summary, then mutual photo reveal (up to 4 photos) | Spanish/Portuguese, outside the UK |
| Chaperone invite and the chaperoned group conversation (text only) | Pre-marriage course links with churches |
| Meeting safely guide (public place, family told, chaperone knows) | Optional "pastor's reference" |
| Kind endings: "Close this introduction" with a gentle fixed message; "We're engaged" closes both profiles | Testimonies (only with both people's written consent) |
| Report, block and "I feel unsafe" on every profile and conversation | AI help of any kind (only with consent, per 5.1.2) |
| Moderation console, logs, banned-person marker | |
| Membership via RevenueCat, Restore, Manage | |
| In-app account deletion, data download | |
| Light and dark, every phone size, large text (KFL standards) | |

### 8.2 Data model (Supabase, its own project, London region)

Row-level security on every table; nobody reads another person's row directly, only through server functions that return what that stage allows.

- `profiles`: user_id, first_name, birth_year (from ID check), sex (as the solicitor advises), region, tradition_group, tradition_detail, marital_status (never_married, widowed, divorced, annulled, divorced_annulment_in_process), children_now, about, status (draft, verified, active, paused, engaged, closed, banned), pledge_at.
- `verifications`: user_id, role (member, chaperone), provider, provider_ref, result, method, checked_at. **No document images.**
- `preferences`: user_id, age_min, age_max, regions[], open_traditions[], open_marital[], children_wanted, plus which ones are must-agree.
- `questions`: id, version, section, text, answer_type, options, can_be_must, tradition_note. `answers`: user_id, question_id, answer, importance (must_agree, nice_to_have, not_important), visible_in_summary.
- `photos`: user_id, storage_path (private bucket), order, moderation_state, face_match_ok. Served only through signed URLs to people at the reveal stage.
- `introductions`: id, a_id, b_id, created_week, stage (suggested, a_yes, b_yes, both_yes, photos_shown, chaperones_ready, conversation_open, closed, engaged), closed_by, close_reason (private), timestamps.
- `chaperones`: id, introduction_id, for_user_id, chaperone_user_id, relation (family, friend, pastor), invited_at, accepted_at, left_at.
- `conversations` and `messages`: conversation_id, introduction_id; message sender_id, body (text only), created_at, hidden_by_mod. A database rule refuses any message unless at least one chaperone is present (see 8.4).
- `reports`, `blocks`, `mod_actions`, `banned_markers` (hash of provider reference), `subscriptions` (from the RevenueCat webhook, as KFL does in supabase/functions/revenuecat).
- Edge Functions: `verify-webhook` (provider result), `match-weekly` (scheduled), `reveal`, `invite-chaperone`, `revenuecat`, `delete-account`, `export-data`.

### 8.3 Matching logic for Tier 1

1. **Hard gates both ways** (both people must pass each other's): verified and active; opposite sex (subject to solicitor); age inside both ranges; region in both lists; tradition inside both "open to" lists; marital history inside both "open to" lists; not blocked, not previously introduced, not closed.
2. **Must-agree answers:** for every question either person marked "must agree", the other's answer must be in the accepted set. One miss and they are not introduced. Cap must-agrees at about 8 per person, with a gentle note ("The more you require, the fewer people we can introduce you to"), so people do not lock themselves out.
3. **Nice-to-haves:** a hidden weighting (nice_to_have counts more than not_important) only to choose *which* suitable person is introduced first. **No percentages, scores or "match %" are ever shown.** The summary shows words: "You agree on: children, where to marry, Sunday worship."
4. **Pace:** the scheduled function runs once a week (say Sunday evening, or Monday morning if the "keep Sunday quiet" idea is carried over), offers at most one new introduction per person per week, and never more than 3 open at once. If nobody suitable exists that week, say so kindly and say nothing about counts.
5. **Fairness across traditions:** questions are written with the pastoral reviewer so each tradition can answer honestly (for example on annulment, the Eucharist, icons, where to marry). Tradition notes explain, never rank.
6. Matching runs in Postgres (a SQL function over the gates, then ordering by weight). At UK-only volumes (thousands, not millions) this is fast and cheap; no separate engine needed.

### 8.4 Chaperone model

- **Before saying yes to any introduction**, each person must have at least one chaperone who has accepted and passed the ID check. Setting this up early avoids a match stalling.
- **Invite:** by link sent from the phone's share menu; the chaperone installs the app, picks "I'm a chaperone", passes the ID check, accepts. Chaperones have no profile, cannot be introduced, and see only conversations they were invited to.
- **The conversation:** one group thread with both people and both chaperones (recommended; it is fair and feels like two families meeting). **Owner decision:** one chaperone between them, or one each.
- **Rule in the database:** messages can only be sent while at least one chaperone is in the thread. If a chaperone leaves, the thread pauses with a kind line and an invitation to add another.
- **What a chaperone can do:** read everything, write, report, pause the conversation for both, and suggest a meeting. They see the other person's Tier 1 summary and the revealed photos (owner decision; recommended yes, so families can give counsel).
- **No chaperone available:** offer a short list of ways (a friend from church, a parent, a pastor). We do not provide chaperones in release 1; volunteer chaperones are a safeguarding project of their own and need DBS checks and training.
- **Meeting in person:** a "Plan a meeting" card in the thread (public place, daytime suggested, the chaperones know when and where). The app never shares location.
- **Moving on:** "We'd like to tell our families and keep talking outside the app" is the natural end. "We're engaged" closes both profiles (and offers to delete the conversation). "Close this introduction" ends it with a fixed kind message; no reasons shared.
- **Apple and Google fit:** group chat between verified, named adults is the opposite of the "random or anonymous chat" Apple bans **[verified: [1.2](https://developer.apple.com/app-store/review/guidelines/)]**, which helps review.

### 8.5 Photo reveal

- No photo is shown until both people say yes to the Tier 1 summary. Then each person chooses "Show my photos"; nothing shows until both have chosen. Blurred placeholders before that.
- Up to 4 photos, face clearly visible in the first, modest dress rule in plain words, no filters or heavy edits (stated in the rules; the face-match with the ID selfie checks it is really them).
- No swiping, no "likes", no public gallery, no counters of who viewed.
- Screenshots: block them on Android (a secure-screen setting); iPhone cannot block them, so show a line "Photos are for this introduction only" and treat misuse as a report reason. Do not promise screenshots are impossible.

### 8.6 Pricing: honest, no pay-to-be-seen

Principles: nobody can pay to be shown more, ranked higher, or see who looked at them; safety (ID checks, reporting, blocking) is free for everyone; chaperones never pay.

**Proposal (for the marketing reviewer and the owner):**
- **Free:** sign up, verify, answer Tier 1, set preferences, receive introductions and read the Tier 1 summary.
- **Membership:** needed to say "Yes, introduce us" and to open a chaperoned conversation. About **£14.99 a month, £59.99 for 6 months** (6 months fits a marriage intention better than a year). Every member gets exactly the same.
- **"We're engaged" stops the subscription prompt and points to Manage subscription**; we cannot cancel an Apple or Google subscription for them, so say how.
- **Church-sponsored places** later (like KFL's "a year of Premium, freely given").
- Must use in-app purchase, since it unlocks functionality **[verified: [3.1.1](https://developer.apple.com/app-store/review/guidelines/)]**; describe clearly what the price gets before asking **[verified: 3.1.2(c)]**; no bait and switch **[verified: 3.1.2(a)]**. UK subscription-contract rules under the Digital Markets, Competition and Consumers Act 2024 (reminders, easy cancellation) are coming into force; ask the solicitor for the current date **[from knowledge, not checked]**.

### 8.7 Apple and Google rules for dating apps

**Apple [verified: [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) unless marked]:**
- **4.3(b):** dating is a saturated category; Apple "will not accept new submissions unless they offer a meaningfully different or improved experience". Our review notes must lead with what is different: marriage only, theology-first matching, chaperoned group conversations, ID-verified adults, no browsing.
- **1.2:** filtering of objectionable material, reporting with timely responses, blocking, published contact details. Bans "random or anonymous chat" and "hot-or-not" style rating of real people.
- **1.1.4:** "hookup" apps are not allowed; our purpose pledge makes the difference plain.
- **5.1.1(ix):** apps that need sensitive information should be submitted by a legal entity; Kingdom First Life Limited already is one.
- **5.1.1(v):** in-app account deletion. **5.1.2:** consent before any sharing, including with AI.
- **Age rating:** Apple has added a "Dating and Relationships" content descriptor in App Store Connect, with updated age-rating answers due by **12 January 2027**, and gives dating apps an 18+ rating **[verified: [TechRepublic report](https://www.techrepublic.com/article/news-apple-app-store-dating-ai-companion-age-ratings/); confirm in App Store Connect]**. Apple's 18+ rating is not our age check; we still need our own.
- **Review access:** Apple needs to test it. Prepare two demo members already matched, a demo chaperone, and a way for the reviewer to skip the ID check (a review-only flag on those accounts), explained in the review notes.

**Google Play:**
- **Child Safety Standards policy** applies to every app in the Dating category, whatever its audience: a public web page with our standards against child sexual abuse and exploitation, an in-app feedback route, acting on CSAM under our standards and the law, and a named child safety contact in Play Console **[verified: [Google Play Child Safety Standards](https://support.google.com/googleplay/android-developer/answer/14747720?hl=en-GB)]**.
- **User-generated content policy:** users accept terms before posting; objectionable content defined and banned; ongoing moderation; in-app report and block; children kept out by age screening **[verified: [Google Play UGC policy](https://support.google.com/googleplay/android-developer/answer/9876937)]**.
- Target audience 18+ only, Data safety form, and a web link for account deletion as well as in-app **[from knowledge]**.

### 8.8 Effort (build days, one developer working as on KFL)

| Piece | Days |
|---|---|
| New repo and Capacitor app, sign-in, design tokens from KFL, iOS and Android cloud builds copied from KFL | 4 |
| Sign-up, purpose pledge, profile basics, preferences | 5 |
| Tier 1 questions screens and storage (content written separately, below) | 4 |
| Matching function and weekly schedule | 5 |
| Introductions flow, limits, kind endings, "We're engaged" | 5 |
| Photos: upload, automatic check, moderation, mutual reveal, signed links | 5 |
| ID and age check (Stripe Identity), webhook, re-check on photo change | 4 |
| Chaperone invites, chaperone role, group conversation, "no chaperone, no message" rule | 8 |
| Report, block, "I feel unsafe", scam flags | 4 |
| Moderation console (web, two-step sign-in, logs) | 6 |
| Membership (RevenueCat), plans page, restore, manage | 3 |
| Account deletion, data download, retention jobs | 3 |
| Help, meeting safely, rules and terms screens | 2 |
| Security review of every RLS rule and function | 4 |
| Testing on all 12 iPhone sizes, Android 360px at 130%, light and dark | 6 |
| Store listings, screenshots, review notes, demo accounts, CSAE page | 3 |
| Beta fixes | 8 |
| **Build total** | **about 79 days** |

Alongside the build (elapsed time, not developer days): Tier 1 questions written and checked by the pastoral reviewer with a reader from each tradition (2–3 weeks); solicitor advice (4–8 weeks); DPIA and both OSA assessments drafted by us, checked by the solicitor (2 weeks); independent safeguarding adviser review (2–4 weeks); recruiting and training a second moderator (4 weeks); closed beta through churches (6–8 weeks).

### 8.9 Running costs (estimates)

| Item | Cost | Basis |
|---|---|---|
| Supabase Pro, separate project | about $25–$75/month | **[from knowledge]** |
| ID checks | £1.25 per member or chaperone | **[verified: Stripe]**; 1,000 members with 1,000 chaperones ≈ £2,500 one-off |
| Photo moderation API | a few pounds a month | **[from knowledge]** |
| RevenueCat | free until $2.5k monthly revenue, then 1% | **[from knowledge]** |
| Apple and Google developer accounts | already paid for KFL | |
| ICO fee | already covered by the company if registered **[from knowledge]** | |
| Solicitor (Equality Act, terms, privacy, OSA check) | about £3,000–£8,000 one-off **[from knowledge, estimate]** | |
| Insurance (cyber and liability for a dating service) | about £500–£1,500 a year **[from knowledge, estimate]** | |
| Second moderator | about £13–£15 an hour, say 5–10 hours a week at first | **[from knowledge, estimate]** |

### 8.10 Risks

| Risk | Likelihood | Impact | What reduces it |
|---|---|---|---|
| Solicitor advises opposite-sex or Christian-only matching is unlawful as set up | Medium | Very high | Ask first; design "each person sets their own filters"; consider a different structure |
| Apple rejects under 4.3(b) as "another dating app" | Medium | High | Lead review notes with the differences; good demo accounts |
| Romance scam or abuse incident, press story | Medium | Very high | ID for everyone, chaperones, scam flags, fast reports |
| Too few members in one region, so introductions are rare | High | High | Launch through churches region by region; honest "we'll write when there's someone" |
| Chaperone friction: people give up before a conversation opens | High | Medium | Ask for the chaperone early; one chaperone allowed (owner decision) |
| Owner overload alongside KFL launch and Lent | High | High | Do not start the build until after the KFL January update |
| Special category data breach | Low | Very high | Separate project, RLS review, no ID images kept, retention jobs |
| A child gets through | Low | Very high | ID + selfie for everyone; report route; CSAE page |
| Pastoral harm (shame over divorce, annulment, singleness) | Medium | High | Pastoral reviewer on every line; no counts, no "no matches" language |

---

## Phased plan and recommended launch date

| When | What |
|---|---|
| **Now to 10 Dec 2026** | Reviewers finish round 1. Owner decides the open questions below. Send the legal questions (6.3) to the solicitor. **No build.** KFL comes first. |
| **11 Dec 2026 – 31 Jan 2027** | Clickable prototype (no real data). Tier 1 questions drafted with the pastoral reviewer. DPIA and both OSA assessments drafted. Solicitor answers. KFL launch (31 Dec) and January update take priority. |
| **February – April 2027** | Build release 1 (about 79 days of work, spread around KFL Lent work and Easter on 28 March). Second moderator recruited. Safeguarding adviser review. |
| **May – June 2027** | TestFlight and Play closed testing with 50–150 people from a few churches in one or two regions. Fix, re-assess risks before going public. |
| **Early September 2027** | Public launch in the UK, timed with the start of the church term, through churches first. |

**Earliest possible launch, if everything goes right: May 2027. I do not recommend it**: it would mean building during the KFL launch and Lent, and the legal and moderation pieces would not be ready. If the solicitor's answer on 6.3 is difficult, the September date moves.

---

## Decisions the owner must make

1. Accept that building waits until after the KFL January update, with launch planned for September 2027 (closed beta June)?
2. Instruct the solicitor on the four Equality Act questions (6.3), plus terms, privacy and OSA checks?
3. One chaperone each (recommended) or one between them?
4. Can chaperones see the Tier 1 summary and photos (recommended yes)?
5. ID check provider: Stripe Identity for release 1, with a Yoti quote (recommended)?
6. Pricing model: free to join and be introduced, one membership to say yes and talk, with no pay-to-be-seen (recommended); the marketing reviewer proposes the figures.
7. Who is the second moderator, and who is the named person accountable for online safety (probably the owner)?
8. Weekly introductions on which day, and at most 3 open at once (recommended)?
9. Retention periods to propose to the solicitor (messages 90 days after an introduction ends, reports 2 years)?

## Sources checked today
- [Ofcom: Dating and social discovery](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/dating-and-social-discovery-know-the-online-safety-risks-rules-and-how-to-comply)
- [Ofcom: Age assurance duties](https://www.ofcom.org.uk/online-safety/protecting-children/age-assurance)
- [Lewis Silkin: pre-launch risk assessments, 22 Oct 2026](https://www.lewissilkin.com/insights/2026/10/22/ofcom-investigation-puts-pre-launch-risk-assessments-in-the-spotlight-102o663)
- [Equality Act 2010, Schedule 23 paragraph 2](https://www.legislation.gov.uk/ukpga/2010/15/schedule/23/paragraph/2)
- [Bull v Hall, UKSC 2013 press summary](https://caselaw.nationalarchives.gov.uk/uksc/2013/73/press-summary)
- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [TechRepublic: Apple 18+ ratings for dating apps](https://www.techrepublic.com/article/news-apple-app-store-dating-ai-companion-age-ratings/)
- [Google Play Child Safety Standards policy](https://support.google.com/googleplay/android-developer/answer/14747720?hl=en-GB)
- [Google Play User Generated Content policy](https://support.google.com/googleplay/android-developer/answer/9876937)
- [Stripe Identity UK pricing](https://stripe.com/gb/identity)
- [Veriff self-serve plans](https://www.veriff.com/plans/self-serve)
