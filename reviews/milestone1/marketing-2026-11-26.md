# Kingdom First Covenant, milestone 1: marketing review (26 Nov 2026)

Marketing reviewer. Two parts: (A) the 5 Ps for Covenant as built today, with findings on the code, and (B) a plan to fill the London waitlist from January 2027.

**What I read:** CLAUDE.md; reviews/round1/combined-2026-11-23.md and marketing.md; reviews/pastoral/marriage-introductions-2026-11-26.md; reviews/comparison/summary-2026-11-26.md; reviews/store/apple-4-3-review-2026-11-26.md; every screen in app/*.tsx; src/components/ui.tsx and helplines.tsx; src/lib/onboarding.tsx and questions.ts; supabase/migrations/20261125234900_cov_base.sql; the screenshots in reviews/build/. I did not edit any app code.

**Marks:** **[V]** = checked today against the linked source. **[K]** = from my own knowledge, so check it before it goes in public. **[P]** = my proposal, not a fact. Every target number in part B is [P]: none of it is known yet, and the beta should replace it with real figures.

**Not reviewed as missing:** introductions, the two yeses, Companions in conversation, photos, the season price and engagement (milestone 2).

---

## Decisions needed from the owner

| # | Decision | My advice | By when |
|---|---|---|---|
| D1 | **When the public waitlist opens.** CLAUDE.md says "London waitlist after Easter 2027". This brief asks for a plan from January. | Keep the public waitlist after Easter. Use **January to March for groundwork only**: solicitor, name, page built but not live, and conversations with friendly churches. Open the page on **Tue 6 Apr 2027**, after Easter week (Easter Day is 28 Mar 2027). That keeps Covenant away from Kingdom First Life's launch, its 8 Jan update and its Lent push. | 15 Jan 2027 |
| D2 | **Covenant's own marketing budget, Jan to Sep 2027.** Kingdom First Life's £500 to Easter is for Kingdom First Life only. | **£1,500 [P]**: about £1,000 for church evenings, about £400 for Christian media, and the rest for email and printing. No paid app ads before the beta. | 31 Jan 2027 |
| D3 | **Where the waitlist page lives.** | Use **its own domain** (round 1, D6), with "From the makers of Kingdom First Life" at the foot. A Covenant complaint should never land on Kingdom First Life's site or in its inbox. The solicitor's name clearance comes first (round 1, D7). | Before the page goes live |
| D4 | **Should the waitlist ask an age band?** Age decides who can be introduced as much as church does. Milestone 1 has no age preference at all (finding P4). | Ask **one optional question**, "Your age: 18–29 / 30–39 / 40–49 / 50+". Without it, the opening targets can't tell a pool of 25-year-olds from a pool of 55-year-olds. If you want the shortest possible form, leave it out and accept that the targets will be rough. | Before the page is built |
| D5 | **Kingdom First Life cross-promotion.** | One footer line on kingdomfirstlife.com from 6 Apr. Nothing inside the Kingdom First Life app before Covenant is live. **Never** use Kingdom First Life data to find singles: sex, Life seasons such as Love, Marriage or Bereavement, church, Care. | 6 Apr 2027 |
| D6 | **The opening rule for an area** (part B, section 3). | Adopt the per-tradition targets for women and men as a starting rule, and review them after 8 weeks of beta. | Before the beta (summer 2027) |
| D7 | **Format of church evenings.** | A short talk on meeting and marrying well, hosted and led by the church, with Covenant explained in 10 minutes. **It is not a singles mixer.** Parents and friends are welcome, because they are future Companions. | Before the first host church is asked (Feb 2027) |

---

## Summary

1. **Must:** don't let the app or the store page reach the public until the sign-in dead end becomes a way onto the waitlist (A1). Today `app/signin.tsx` takes an email, keeps nothing and says "isn't open yet".
2. **Must:** use one list of church families everywhere: set-up, Who you're open to, the waitlist and the opening targets. Today the set-up has Oriental Orthodox but `open.tsx` doesn't (A2).
3. **Must:** record the area as a choice from a list, not free text, so an area can open when its numbers are reached. Milestone 2 then needs an "Your area isn't open yet" state that never looks like an empty week (A3, A4).
4. **Must:** the waitlist page says what is planned and doesn't present it as working. Today nothing a member sees in a conversation is built, so every claim is "how it will work" (A5).
5. **Should:** lead with the Companion everywhere. That means the welcome bullet order, the waitlist headline and the store. "For marriage, not dating" no longer sets Covenant apart (A6).
6. **Should:** introduce the Companion in the first week. Today it is a Me row marked "Chosen later". Finding a Companion is the biggest friction, and people need time to ask someone (A7).
7. **Should:** remove internal words and overclaims from member screens: "Tier 1", "every main church can bless", "we believe you could marry with a clear conscience", and the solicitor note on Leave (A8 to A11).
8. **Must (plan):** fill London through churches first. Hold 7 church-hosted evenings from April to June, letters by tradition, chaplaincies and Christian media. Measure women and men in each tradition every week, and reach men on purpose (part B).

---

# Part A. The 5 Ps for Covenant as built

## A0. Where milestone 1 stands, in one table

| P | As built (milestone 1) | What marketing may say today |
|---|---|---|
| **Product** | A test app. Welcome, My yes, Sign in (no accounts), ID screens (no ID partner), About you, the faith question, church, story, separated, Who you're open to, 31 faith and marriage questions in 5 groups with "This matters a lot to me", Home, Introductions (empty week), Still waiting, Marriage in Scripture, Me, My companion, Pause, Leave, Get help now, Talk to us privately (with forced-marriage help), Report. Answers are held in memory only (`src/lib/onboarding.tsx:3`). Sign-ups are off on the server (migration line 16). | Nothing yet as "working". The page may describe how it **will** work, labelled "In development". The questions and the safety screens are real enough to show as screenshots marked "test version". |
| **Price** | No price on any screen. Me says the season row comes in milestone 2 (`app/me.tsx:7`). "Companions never pay" (`app/companion.tsx:25`) and "We pay for the check" (`app/whycheck.tsx:13`) are on screen, and both are owner decisions. | "Free to join the waitlist. Prices to be confirmed before anyone pays." "Companions never pay." "We pay for the ID check." Don't quote £59.99: CLAUDE.md calls it an example price. |
| **Place** | Native app, not in any store. UK only. London first is not mentioned in the app. iPhone builds come after 15 Jan 2027, with Android first (store review). | The waitlist page on the web is the only "place" until the beta. Churches and evenings are the real distribution. |
| **Promotion** | Welcome headline "Introductions for marriage, not dating." (`app/index.tsx:9`), with three bullets (line 14). "From the makers of Kingdom First Life" on Me (`app/me.tsx:27`). | Positioning (for the brand and pastoral reviewers to check): **"Faith first. Faces second. Never alone."** with "Introductions for marriage, for Christians of every tradition." |
| **People** | The owner alone. No moderator, no safeguarding adviser in post yet, no readers from each tradition. Personas from round 1 still stand. | Say nothing about safety staffing until it exists. "A member of the Covenant team will look at this today" (`app/sent.tsx:10`) must be true before any real user sees it. |

## A1. Product findings (code)

**A1. Sign-in is a dead end, with no waitlist. Must.**
`app/signin.tsx:18–36`. The person sees "Create your account", types an email and taps "Email me a code". Then they read "Kingdom First Covenant isn't open yet, so we can't create accounts." The email is thrown away. Every interested person who installs an early build is lost, and the store review already says this wording can't go to App Review (store review, summary 4).
**Fix:** until an area is open, this screen says "Covenant opens area by area, starting in London" and links to the waitlist page ("Join the waitlist ›"). The app itself doesn't collect waitlist data. One form on the web keeps the consent and privacy in one place. **Who:** Claude (app), owner (page live).

**A2. The church families don't match across screens. Must (milestone 2 depends on it).**
`app/church.tsx:7–12` has five groups, and Oriental Orthodox churches sit inside "Orthodox". `app/open.tsx:11` offers only four families: Catholic, Orthodox, Anglican, Protestant and free churches. The pastoral study (C5) asks for Eastern and Oriental Orthodox to be separate, because they aren't in communion and their marriage rules differ. Marketing needs the same split. The opening targets and the waitlist count women and men per family, and if the app groups people differently, the waitlist numbers won't carry over.
**Fix:** one exported list of six families, used by church.tsx, open.tsx, the waitlist form and the dashboard: Catholic (including Eastern Catholic) · Eastern Orthodox · Oriental Orthodox · Anglican · Protestant and free churches · Between churches. **Who:** Claude, pastoral reviewer.

**A3. "Where you live" is free text. Must (milestone 2 depends on it).**
`app/basics.tsx:17` takes any text, for example "e.g. Leeds". The table stores the same (`profiles.town`, migration line 24). An area can't be opened, counted or told "you're next" from free text.
**Fix:** a list of areas: Greater London first, then the UK regions. Keep the town as an optional display field, as now ("We show your town, never your address or postcode" stays true). Add an `area` column in milestone 2. **Who:** Claude, owner (approves the migration).

**A4. Milestone 2 needs an "area not open yet" state that never looks like an empty week. Must.**
`app/home.tsx:28–29` and `app/intros.tsx:13–15`: once the needed groups are done, everyone sees "No new introductions this week". In the early months most people outside London, and some inside, will be waiting for their area. If they see an empty week every Thursday, they will read it as failure, and the comparison found that apps with too few people get 2-star ratings (summary, finding 6). Store review summary 3 says the reviewer must never see an empty app.
**Fix (milestone 2):** a separate state, "Covenant is opening in London first. We'll tell you, once, when your area opens. Nothing for you to do until then." It has no Thursday wording, no counts and no "waiting list position". Keep the empty week for people in open areas only. **Who:** Claude, behavioural reviewer.

**A5. The page must not claim what isn't built. Must.**
Kingdom First Life's rule applies here: only claim features that are built. The welcome bullets (`app/index.tsx:14`) describe photos and Companions in conversations, which are milestone 2. Inside the app that's fine as a description. On the web page and in press it must read "How it will work" with an "In development" label. The same goes for "A member of the Covenant team will look at this today" (`app/sent.tsx:10`): don't repeat it publicly until a second trained moderator is in post. **Who:** owner, copywriter.

**A6. Lead with the Companion. Should.**
`app/index.tsx:9` and `:14`. The headline is "Introductions for marriage, not dating." Muzz, CatholicMatch, Shaadi.com, ArkLove and the relaunched Upward all say that (comparison, finding 2). The Companion is the only thing no one else does (comparison, finding 1; store review, summary 1). Today it comes third in the bullets.
**Fix:** move "Every conversation includes your companions" to the first bullet. On the waitlist page and store page, use "Faith first. Faces second. Never alone." as the strap line, once the brand and pastoral reviewers agree. Keep "for marriage, not dating" as the line underneath. **Who:** copywriter, brand reviewer.

## A2. Reach check (who it's for, how they find it in week one)

| Part | For | How found in week one | Hidden? |
|---|---|---|---|
| Get help now | Everyone | Welcome link (`index.tsx:18`), story link (`story.tsx:29`), Me row (`me.tsx:23`) | No. Home has no help link, but Me is one tap away. **Could:** a small "Help" on Home, as Kingdom First Life's Today has. |
| Talk to us privately | Anyone pressured, forced-marriage risk | Me row (`me.tsx:24`), Get help now | No. |
| Who you're open to | Everyone | Set-up, then Me | No. Church teaching is in a fold (`open.tsx:32`) whose title names it, so the fold hides length, not existence. That's acceptable. |
| Separated | Separated but married | Text link on the story screen (`story.tsx:33`) | No. |
| **My companion** | Everyone. It is required to talk | Only a Me row marked "Chosen later" (`me.tsx:21`) | **Yes, in effect. See A7.** |
| Marriage in Scripture | Everyone | Me row only | Acceptable. |
| Still waiting | People waiting, people who never marry | Text link on Introductions (`intros.tsx:25`) and on Leave | Acceptable. |
| Pause | Anyone | Me row | No. |

**A7. Introduce the Companion in the first week. Should.**
`app/me.tsx:21` and `app/companion.tsx:25`. A person finishes the needed questions and lands on Home. Nothing asks them to think about who their Companion will be until a conversation is about to start, which is milestone 2. Asking a parent, a friend or a priest takes days. People without anyone to ask (converts, people estranged from family, the widowed, people new to the UK; pastoral C3) need to know early.
**Fix:** once the needed groups are done, Home shows one quiet line: "When you're introduced, you'll need a companion. Who might you ask? ›", which opens /companion. Nothing is required, and there is no reminder. On the waitlist page, the same thought sits under "How it will work". **Who:** Claude, behavioural reviewer.

## A3. Words that cost trust

**A8. "Tier 1" on a member screen. Should.** `app/questions.tsx:14`. The eyebrow is internal shorthand. **Fix:** "Faith first". **Who:** Claude.

**A9. "A Christian marriage that every main church can bless." Should.** `app/exploring.tsx:9`. That's not true for every pairing. A marriage across churches often needs permission or a dispensation (pastoral C6), and the pastoral study found four listed churches that now marry same-sex couples (summary 4). A journalist would quote this line. **Fix:** align it with the new faith-screen line (`faith.tsx:16`), for example "introduces people for a lifelong marriage between a man and a woman, as the historic Church has always taught." It goes to the pastoral reviewer and the solicitor (Equality Act), like D7. **Who:** pastoral reviewer, solicitor.

**A10. "We only introduce people we believe you could marry with a clear conscience." Could.** `app/home.tsx:29`. It sounds like a promise about conscience that the app can't make, since only the person can judge that. **Fix:** "We only introduce people who share what matters most to you." **Who:** copywriter.

**A11. A note to the solicitor on a member screen. Could.** `app/leave.tsx:17`: "How long reports are kept is for the solicitor to advise." It's fine for testers, but take it out before anyone outside the test group sees it. **Who:** Claude.

**A12. Small mismatch. Could.** `app/home.tsx:23` and `intros.tsx:18` say "Faith and church", but the group is named "Your faith and church" (`questions.ts:8`). Use one name. **Who:** Claude.

**A13. "I already have an account" opens "Create your account". Could.** `app/index.tsx:17` to `signin.tsx:18`. **Fix:** a title that fits both, "Sign in or join". **Who:** Claude.

## A4. Price (as built, and what milestone 1 must get right)

- **As built:** no price on screen. That is right while the price is an example.
- **Must for milestone 2:** before anyone pays, show the person, once, in plain words: what is free (join, ID check, questions, receiving introductions), what a season pays for (saying yes and talking), that it never renews, and that Companions never pay. The store review already requires the non-renewing product (summary 6).
- **Should:** the waitlist page says "Free to join the waitlist. Prices to be confirmed before anyone pays." The website says "To be confirmed" until launch day, as Kingdom First Life does.
- **Could:** a hardship season (pastoral summary 12), so that saying yes never depends on money. Decide before the beta and say so on the price page if it exists.
- **Never:** referral rewards, "invite 3 friends for a free season", boosts or paying to be seen. That's the same rule as Kingdom First Life's trainer codes: no referral payments.

## A5. Place

- **Web waitlist first. The app follows the area.** The store review advises releasing on the App Store close to the time the waitlist opens, with Android first (summary 9; §4.6 point 14). Waitlist sign-ups should never be sent to a store page where they would install an app that can't introduce anyone yet. Use the stores from the closed beta onward.
- **Churches are the real channel.** Christians mostly meet their spouse through church networks and friends [K]. Covenant should sit next to those networks and never claim to replace them: the same "collaborative, not competitive" rule as Kingdom First Life.
- **Later:** the rest of the UK, area by area, using the same targets. Ireland next [K]. Romanian or Greek only with native-speaker and pastoral checks.

## A6. People (personas the plan is built around)

From round 1, still true:
1. **Practising Catholics, 25–40.** They have the best sex balance [V, Single Friendly Church](https://www.singlefriendlychurch.com/news-and-resources/where-are-all-the-men) and are used to detailed faith questions.
2. **Orthodox diaspora, Eastern and Oriental.** Family involvement is normal for them, so the Companion fits [K].
3. **Evangelical, charismatic, Pentecostal and Black-majority churches.** This is the largest London group: London's Pentecostal attendance "exploded" between 2005 and 2012 [V, Church Times](https://churchtimes.co.uk/articles/2014/9-may/news/uk/church-numbers-in-london-buck-trend). They are the most likely to already use SALT or Hinge.
4. **Anglican.**
5. **Widowed, divorced and annulled, 35–60.** `story.tsx` and `open.tsx` treat them kindly. That's a real draw, so say it on the page.
6. **Parents, godparents and friends.** They aren't members, but they are future Companions and the people who will pass the page on.

**The sex imbalance is the biggest risk to the waitlist.** A YouGov study in 2014 found "half a million more women than men" regularly attend church at least monthly in Great Britain [V](https://singlefriendlychurch.com/research/yougov). Plan to reach men on purpose from day one.

**Team before the waitlist opens [P]:** the owner (about 4 hours a week from Feb to Mar, then 6 to 8 from Apr to Jun); the pastoral reviewer writes the evening talk outline; one volunteer contact in each host church. No public waitlist until the solicitor has approved the form and the privacy notice. Real safety staffing is needed before the beta, not before the waitlist.

---

# Part B. Filling the London waitlist

## 1. The waitlist page: as little data as possible

**What it asks:**

| Field | Required? | Why we need it |
|---|---|---|
| Email | Yes | To tell the person, once, when their area opens. Double opt-in. |
| I'm a woman / I'm a man | Yes | The opening rule depends on the balance of women and men. |
| Area: Greater London / another UK region (a list) | Yes | To open London first and size the next areas. Not a town, not a postcode. |
| Church family: the six from A2 | Yes | The opening targets are per tradition. This is religious belief data, so it needs explicit consent (see below). |
| Age band (D4) | Optional | Only if the owner agrees. |
| "I'm 18 or over and I hope to marry" | Yes, a tick | Adults only. Marriage, not dating. |
| How did you hear? (a list, plus an optional church or evening code) | Optional | To see which channel works. No personal data from anyone else. |

**What it never asks:** name, phone, date of birth, photo, marital history, parish, exact location, or anything about a third person. "Here for someone else?" gets a share button that sends the page, never a form about that person.

**Consent and law.** Church family is special category data: religious belief. It needs an Article 9 condition as well as a lawful basis, and explicit consent is the usual one [V, ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-are-the-rules-on-special-category-data/). Signing up to a Christian marriage waitlist reveals religion even without the field [K], so the consent tick covers the whole form. The form needs:
- one unticked box: "I agree that Kingdom First Life Limited keeps my answers, including my church, to plan where Covenant opens."
- a separate, optional box for occasional news.
- a short privacy notice.
- a rule that data is deleted 12 months after sign-up unless the person joins [P].
- an unsubscribe-and-delete link in every email.

**The solicitor approves the form, the notice and the retention period before the page goes live.** The DPIA for Covenant should cover the waitlist.

**How it's built [P].**
- A static page with a form. It posts to a Supabase Edge Function on **Covenant's own project** (never Kingdom First Life's), into a `waitlist` table. Insert only, with row level security and no reads by the public.
- The owner sees **counts only**: area × church family × sex × age band × source. No list of names.
- Confirmation emails go through Resend. The free plan allows 3,000 emails a month but **only 100 a day** [V](https://resend.com/pricing.md), so a press mention could exceed it. Move to Pro at $20 a month for the launch fortnight.
- Supabase data writes need the owner present to approve, as with Kingdom First Life.
- **Cost:** domain about £10 to £20 a year [K]; Resend £0 to $20 a month; hosting £0 [K]. **Owner:** Claude builds it; the owner approves and publishes it.

**What the page says (draft, for the copywriter, brand and pastoral reviewers):** the strap line from A6, "How it will work" labelled *In development*, one paragraph on the Companion, "Free to join the waitlist. Prices to be confirmed before anyone pays.", "We'll email you once, when your area opens", and "For churches, parents and friends ›".

## 2. Channels, with costs, owners and dates

All dates are 2027. They keep Covenant work away from Kingdom First Life's launch weeks and from 4 to 14 Dec 2026.

| # | What | Why | Cost [P unless marked] | Owner | When | Measure |
|---|---|---|---|---|---|---|
| 1 | **Solicitor: waitlist form, privacy notice, retention, and the Equality Act line on the page** | Nothing public without it | Part of the Covenant solicitor quote (get one) | Owner, solicitor | Ask 11 Jan; signed off by 12 Mar | Approved in writing |
| 2 | **Name clearance and UK trade mark** | No public use before it (round 1, D7) | From £205 online for one class, plus the solicitor [V, round 1](https://www.gov.uk/csv-preview/695d0ba76056a077857e7375/IPO_full_list_of_current_and_new_fees___3_.csv) | Owner, solicitor | File by 26 Feb | Filed |
| 3 | **Waitlist page built, not live** | Ready for 6 Apr | Domain about £15 [K] | Claude, owner | 1 to 19 Mar | Checked at 320, 390 and 440, light and dark |
| 4 | **Friendly churches first.** The owner's own church plus 8 to 10 contacts across the six families, by personal introduction | Trust travels person to person | £0, owner's time | Owner | Conversations 1 Feb to 26 Mar | Churches willing to mention it or host an evening |
| 5 | **Church-hosted evenings** (see section 4). 7 evenings: 2 Catholic, 1 Eastern Orthodox, 1 Oriental Orthodox, 1 Anglican, 2 free church or Black-majority | The best place to reach people of the right age with their families present | About £150 each (refreshments £60, 250 cards £30, an offered contribution to the hall £50, travel). About £1,050 in total | Owner, host church, pastoral reviewer (outline) | Ask hosts in Feb; evenings 13 Apr to 25 Jun. Weekdays only, never Sunday, none in Holy Week. Orthodox Holy Week 2027 runs up to Pascha on 2 May [K] | Sign-ups with the evening's code, by sex |
| 6 | **Letters by tradition**: a one-page letter and a card PDF to clergy and young-adult leaders. Catholic marriage and family life offices, Orthodox parish priests by jurisdiction, Anglican deanery networks, free-church and Black-majority networks [K] | Ask for "a mention to your single adults", never an endorsement | £0, plus £50 printing | Owner (sends), copywriter, pastoral reviewer (reads) | Drafted by 19 Mar; sent 6 to 30 Apr | Replies; sign-ups by source |
| 7 | **Chaplaincies.** London Catholic university chaplaincy (Newman House covers 19 London institutions [V](https://www.universitycatholic.net/colleges/)), Anglican and free-church university chaplains, and workplace Christian groups [K]. Aim at postgraduates, staff and young-adult groups, not first-year students | They reach 22- to 35-year-olds, which most parishes struggle to do | £0 | Owner | Contact 6 to 30 Apr; talks in May or June | Sign-ups with "chaplaincy" as source |
| 8 | **Companions and families.** A "For parents and friends" section and a printable card: "Know someone who hopes to marry? Send them this page." There are no rewards and no data about the other person. At evenings, parents and friends are invited by name | The Companion is the difference. Family and friends are how many Orthodox and diaspora communities already introduce people [K] | £30 printing | Copywriter, owner | Live with the page, 6 Apr | Source "a friend or family member" |
| 9 | **Kingdom First Life, after its launch** (D5). One footer line on kingdomfirstlife.com, and one paragraph in Kingdom First Life's news email, sent only to people who opted in to news. Nothing in the app's daily screens, no push notification, and no Kingdom First Life data used | Same company, same values, an audience that already trusts the brand | £0 | Owner, Claude | 6 Apr (footer); one email in May | Source "Kingdom First Life". Unsubscribes from Kingdom First Life news, which should stay normal |
| 10 | **Christian media, earned first.** A founder story and press note with the Companion as the hook: Premier Christianity, Church Times, Christian Today, Catholic Herald, The Tablet, Catholic Universe, Keep the Faith, Evangelicals Now, and Orthodox community papers [K] | Free, with reach across traditions | £0 | Owner, copywriter | Pitch 6 to 23 Apr | Pieces published; sign-ups in the following week |
| 11 | **Christian media, paid, small.** Tests only, one at a time. Church Times e-newsletter (8 appearances £444; 19,000 recipients, 60% open rate) [V](https://www.churchtimes.co.uk/advertise). Evangelical Alliance Headlines email banner (£250 a week; about 17,000 recipients) [V](https://eauk.org/assets/files/downloads/Evangelical-Alliance-Media-Pack-2025.pdf). en online (£144 an issue) [V](https://www.e-n.org.uk/documents/12/EN_Advertising_Rates_2026_6MqCmyV.pdf). Ask each publisher first whether it accepts introduction services: none of the rate cards mentions them | To reach men and the evangelical pool at scale | £400 cap (two tests) | Owner | May to June, after the earned pieces | Cost per confirmed sign-up, by sex. Stop if it's above £5 [P] |
| 12 | **Short silent explainers on YouTube.** "How Covenant will work in 30 seconds", on the same video standards as Kingdom First Life. No couples, no stock photos, no members' faces | Explains the Companion faster than words | £0 (the existing render tools) | Claude, owner | 2 videos by 30 Apr | Views to page visits |
| — | **Not used:** Instagram (the account is disabled), Meta ads (dating ads need Meta's prior permission [K]), targeting by religion, App Store ads before the beta, singles mixers, paid influencers | | | | | |

**Owner's time [P]:** about 4 hours a week in Feb and Mar; 6 to 8 hours a week from Apr to Jun; Kingdom First Life work first each day, as CLAUDE.md requires.

## 3. Targets: women and men in each tradition before London opens

**The rule [P].** London opens to introductions one church family at a time. A family opens when **both** of these are true:
- enough **women** in London have checked their ID and finished the needed questions, and
- enough **men** in London have checked their ID, finished the needed questions **and are open to marrying someone from that family**,

and the same the other way round. Put simply: a Catholic woman needs enough men who are open to marrying a Catholic, not only Catholic men.

**How I reached the numbers [P, to replace with beta data].**
- A six-month season should bring each person about 12 introductions, roughly one a fortnight. That is well below the cap of three a week.
- After age, must-agree answers and marital history are applied, perhaps 1 in 10 people of the other sex will fit any one person. That is a guess.
- So each person needs about **120 people of the other sex** in reach. I've rounded up for people who pause or leave.

| Church family | Women needed | Men needed | Waitlist goal by 30 Jun (about 2× for drop-off between sign-up and ID check) | Closed beta (summer) |
|---|---|---|---|---|
| Catholic (including Eastern Catholic) | 150 | 150 | 300 W / 300 M | 20 W / 20 M |
| Eastern Orthodox | 60 | 60 | 120 / 120 | 10 / 10 |
| Oriental Orthodox | 40 | 40 | 80 / 80 | 10 / 10 |
| Anglican | 100 | 100 | 200 / 200 | 15 / 15 |
| Protestant and free churches | 200 | 200 | 400 / 400 | 25 / 25 |
| **Total** | **550** | **550** | **1,100 / 1,100** | **80 / 80**, within CLAUDE.md's 100 to 200 plus Companions |

- People who are open to other families count towards those families too. That's why a small family, such as Oriental Orthodox, can open below its own target if enough people from other families are open to it.
- **Balance rule [P]:** if women outnumber men by more than 3 to 2 in a family, the next month's effort goes to men: men's groups, Catholic and Orthodox parishes, Christian Vision for Men (which co-funded the YouGov study [V](https://singlefriendlychurch.com/research/yougov)). The waiting women are told honestly, once, that their area isn't open yet. They never see an empty week.
- **The test from round 1 still stands:** if a free waitlist can't reach about 1,000 confirmed London sign-ups by 30 Jun without paid ads, the idea needs rethinking before the beta.
- **Measure every Monday** (the owner's dashboard, counts only): confirmed sign-ups by family × sex × age band × source; the women-to-men ratio per family; the double opt-in rate; cost per confirmed sign-up by channel. From the beta, add the share who check their ID and finish the needed questions within 14 days, which replaces the 2× guess.

## 4. Church-hosted evenings: how to run them

- **The church hosts and leads.** The church's priest or pastor gives a 25-minute talk on meeting and marrying well, using the pastoral reviewer's outline. It is drawn from the pastoral study: consent, family and friends close by, Proverbs 15:22, and single life as a gift. The owner explains Covenant in 10 minutes, followed by questions. Co-brand as "St Aidan's, with Kingdom First Covenant", the same pattern as Kingdom First Life.
- **Not a mixer.** No speed-dating, no name badges marked "single", no pairing games. Parents, godparents and friends are welcome. Adults only (18+). The host church's safeguarding lead knows about the evening and its own policy applies.
- **Sign-up is on each person's own phone,** by QR code to the page with the evening's code. Nobody collects names on paper.
- **Never on a Sunday,** never in Holy Week (Western or Orthodox), and at a time the host church chooses around its own fasts and feasts [K, check with each host].
- **Cost per evening [P]:** about £150 (see the channel table). **Measure:** sign-ups with the evening code within 7 days, by sex, and whether the host would do it again.

## 5. Calendar (January to September 2027)

| When | What |
|---|---|
| 4 to 29 Jan | Kingdom First Life comes first (8 Jan update). Owner decides D1 to D7 by 31 Jan. Solicitor briefed 11 Jan. |
| Feb | Name clearance and filing. Conversations with friendly churches. Host churches asked for evenings. Copywriter drafts the page, the letters and the "for parents and friends" card. Lent begins 10 Feb, so Kingdom First Life's Lent push comes first. |
| 1 to 26 Mar | Page built and checked, not live. Solicitor signs off by 12 Mar. Letters ready by 19 Mar. Pastoral reviewer writes the talk outline. |
| 28 Mar | Easter Day. Nothing launches in Holy Week. |
| Tue 6 Apr | Waitlist page live. Kingdom First Life footer line. First press pitches. |
| 6 to 30 Apr | Letters out; chaplaincies contacted; 2 explainer videos. Avoid Orthodox outreach in Orthodox Holy Week (to Pascha, 2 May [K]). |
| 13 Apr to 25 Jun | Seven church evenings. |
| May | One Kingdom First Life news email (opted-in readers only). First paid test (£200). |
| Jun | Second paid test, only if the first one met £5 per sign-up. Balance push towards men where needed. |
| 30 Jun | Review: the 1,000 test and the per-family waitlist goals. Owner decides on the beta. |
| Summer | Closed beta: 80 women and 80 men plus Companions. Replace the guesses with real conversion figures. |
| Sep (earliest) | London opens family by family as the targets in section 3 are met. Nothing opens to an empty week. |

---

## Flags for others

- **Pastoral reviewer:** A9 (`exploring.tsx:9`), the strap line, the evening talk outline, the letters by tradition.
- **Solicitor:** the waitlist consent and retention; the Equality Act line on the page and in A9; whether a Christian publication accepting an introduction-service advert raises anything [K].
- **Brand designer:** strap line, page, card, explainer video frames (colours from brand/colours.json; Covenant's own accent is still a proposal).
- **Safeguarding advisers:** the evening format (section 4) before the first host church is asked.
- **Behavioural reviewer:** A4 (area not open) and A7 (Companion line on Home).

## Sources (opened 26 Nov 2026)

- [ICO: rules on special category data](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-are-the-rules-on-special-category-data/)
- [Church Times: advertising](https://www.churchtimes.co.uk/advertise)
- [Evangelical Alliance media pack 2025](https://eauk.org/assets/files/downloads/Evangelical-Alliance-Media-Pack-2025.pdf)
- [Evangelicals Now advertising rates 2026](https://www.e-n.org.uk/documents/12/EN_Advertising_Rates_2026_6MqCmyV.pdf)
- [Resend pricing](https://resend.com/pricing.md)
- [Single Friendly Church: YouGov research](https://singlefriendlychurch.com/research/yougov)
- [Single Friendly Church: where are all the men](https://www.singlefriendlychurch.com/news-and-resources/where-are-all-the-men)
- [Church Times: London church numbers (2012 census)](https://churchtimes.co.uk/articles/2014/9-may/news/uk/church-numbers-in-london-buck-trend)
- [Catholic Chaplaincy to London universities: colleges](https://www.universitycatholic.net/colleges/)
- Earlier sources: reviews/comparison/summary-2026-11-26.md, reviews/round1/marketing.md.
