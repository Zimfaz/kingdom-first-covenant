# Kingdom First Covenant, milestone 1: behavioural review

Behavioural scientist, 26 Nov 2026. I reviewed the real code (`app/*.tsx`, `src/components/ui.tsx` and `helplines.tsx`, `src/lib/onboarding.tsx` and `questions.ts`, `supabase/migrations/20261125234900_cov_base.sql`) and the screenshots in `reviews/build/` (contact sheets, plus single screens at 390 dark). This builds on round 1 (`reviews/round1/behavioural.md`, `combined-2026-11-23.md`), the pastoral study (`reviews/pastoral/marriage-introductions-2026-11-26.md`), the comparison (`reviews/comparison/summary-2026-11-26.md`) and the store review (`reviews/store/apple-4-3-review-2026-11-26.md`). I didn't edit any app code.

Milestone 1 is a test version. Answers stay in memory, and nothing is sent. Introductions, the two yeses, Companions in conversation, photos, the season price and engagement come in milestone 2. I don't mark them as missing. Section 6 says what milestone 1 must get right so that milestone 2 fits.

Research marks: **[verified]** means checked in round 1 with a link (see Sources). **[from knowledge]** means I know the work but didn't re-check it today, so check it before quoting it in public. No figures are invented.

---

## Verdict

Milestone 1 is kind, slow and honest, and it is one of the least manipulative onboarding flows I have reviewed. There are no counts, no progress bars, no scores and no streaks. "Skip for now" and "I'd rather not say" are always there. People can pause without anyone knowing, and leaving is thanked, not resisted. The wording for divorced, widowed and single people mostly follows the pastoral study.

The risks are in a few places where the app quietly turns the person's own choices into their fault, or tells them about a rejection before one is possible:
- **The must-agree limit warning.** After five answers marked "This matters a lot to me", it says that keeping fewer means "more people can be introduced to you". That puts pressure on someone's convictions.
- **"No new introductions this week."** It shows on Home and Introductions straight away, even before the person can receive introductions, and even while they are paused.
- **"Up to three" every Thursday.** In a small pool, this turns most weeks into "zero out of three".
- **No word yet for people with no one to ask** to be their companion.

All four are small wording or logic fixes. Get them right now, because milestone 2 builds on these exact screens.

---

## The three questions

### 1. What is the purpose of the app?

**In one sentence:** to introduce Christian adults in the UK, slowly and with a trusted companion beside them, to someone who shares their faith and their hopes for marriage, so that they can decide well and marry.

**Its job in a person's week.** In the first week it is a short set-up: about 20–30 minutes in two or three sittings, plus the two needed question groups. After that, its job is very small. It should be a calm place to come back to on Thursday evening, and it is fine to ignore it for the rest of the week. When milestone 2 exists, there will be a few unhurried conversations a week with companions present, and a few real decisions.

**Gaps between purpose and screens:**
- **The empty week comes before the first possible week.** `app/home.tsx:28` and `app/intros.tsx:13` say "No new introductions this week" to someone who has just finished the questions on, say, a Monday. On `intros.tsx` the title shows even before the questions are done. The first thing the app says about introductions is that there aren't any. That clashes with the purpose of "slowly and with care".
- **"Tier 1" (`app/questions.tsx:14`) is a builder's word.** It turns a reflective conversation about faith into a qualifying round. Round 1 asked for no "tier" on screen.
- **The must-agree note (`app/q.tsx:43–45`) pushes people to loosen convictions** so that they get more introductions. The purpose is marrying well, not getting more introductions.
- **The test copy promises something it doesn't do:** "your answers save as you go" (`app/questions.tsx:16`). In milestone 1 answers live in memory and vanish when the app closes. Testers who come back next day and find nothing will feel let down.

### 2. What benefit does a person get, even if it is never stated?

| Hidden benefit | Where milestone 1 delivers it | Strength of evidence |
|---|---|---|
| **Being taken seriously.** Everyone here wants marriage. | "Introductions for marriage, not dating" (`index.tsx:9`); "My yes" (`yes.tsx:11`) | Moderate. Clear shared intentions reduce ambiguity (goal-setting research, [from knowledge]). Not tested on Christian introduction services. |
| **Knowing your own convictions.** Putting words to belief about children, church, money and leadership. | The question groups (`questions.ts`) | Plausible. Premarital programmes covering these topics go with better marriages (Stanley et al. 2006 [from knowledge]), but that is a different setting. |
| **A sense of being held**, by God and, later, by a companion. | Welcome, "Why a companion?" (`companion.tsx`), the prayer on `yes.tsx:13` | Good for the general point. Network approval goes with lasting relationships (Sinclair, Hood & Wright 2014 [verified]; Sprecher & Felmlee 1992 [from knowledge]). |
| **Dignity for divorced, annulled and widowed people.** No document, no explanation. "You did not fail God by getting safe." | `story.tsx:23–31`, `open.tsx:30` ("nobody is told what you chose") | Pastoral rather than empirical, and strong for this group. Marketing round 1 names them as "badly served, often ashamed in church". |
| **Single life affirmed.** "You're not waiting to become complete." | `index.tsx:11`, `waiting.tsx`, `leave.tsx:14` | Indirect. Fear of being single goes with settling for less responsive partners (Spielmann et al. 2013 [verified]). Lowering that fear is protective. |
| **Less decision fatigue.** No browsing, so no "is someone better out there?". | No feed or search anywhere; a fixed day | Good. Larger choice sets lead to more rejection (Pronk & Denissen 2020 [verified]). |
| **Autonomy.** Nothing is ticked for you, and you can skip or decline anything. | `open.tsx:38`, `q.tsx:48–49`, pause, leave | Good. Autonomy support goes with lasting, self-endorsed motivation (Self-Determination Theory, Deci & Ryan 2000 [from knowledge]). |
| **Safety that doesn't need to be asked for.** Help and a private line exist before anything goes wrong. | Help on Welcome; Talk to us privately; the forced-marriage card (`talk.tsx:33–40`) | Pastoral and statutory guidance (pastoral study C7). It works as a sign of care even for people who never use it. |

**Unstated costs**
- **Time.** About five minutes per group and five groups, plus set-up. It is fine, as long as nothing suggests the person is behind.
- **Exposure.** Religion, marital history and sexual conduct are answered in the first sitting. The server keeps profiles readable only by their owner (`cov_base.sql:32`), which is right. The person isn't told yet who will see what (milestone 2).
- **A weekly verdict.** Thursday arrives every week. In a small pool, which the comparison rates a high risk, most early weeks will be empty.
- **Companion worry.** The Welcome screen says "a companion you trust" (`index.tsx:10`). People with no one to ask meet that on the first screen and get no answer anywhere in milestone 1.
- **Conscience load.** Sacraments, leadership, family planning and remarriage questions could feel like an exam to people with scrupulosity, and to people new to faith.

### 3. How does the app create a feel-good factor?

There is no daily rhythm, so I walk through a person's first weeks.

| Moment | Healthy feeling now | Where it is missing or could turn into pressure |
|---|---|---|
| **First open (Welcome, My yes)** | Calm and purpose. The single-life line is a gift. The prayer "towards marriage or not" is honest and freeing. | "A companion you trust" with no word for people who have no one. |
| **Set-up (About you, faith, church, story)** | Respect. "Every story is welcome here." The widowed and divorced lines are kind. | Matthew 19:6 on the faith screen (`faith.tsx:18`) is the verse a divorced person reads one screen before "Your story so far". |
| **The questions** | Gentle competence. One question at a time, no "3 of 7", "Skip for now", "I'd rather not say", "That's enough for today" (`secdone.tsx:18`). "Thank you for answering honestly" is a good reward because it rewards honesty, not completion. | The must-agree note puts pressure on convictions. Some sacrament questions have no "not sure" answer. "Marriage itself: done" shows even if every question was skipped. |
| **Home, ready** | A quiet verse (Lamentations 3:25), one next step, no counts. | "No new introductions this week" plus a "See introductions" button to an empty screen. A button that leads to nothing teaches people to check. |
| **Thursday evening** (shaped now, built in milestone 2) | It should feel like anticipation with an ending. | "Up to three" sets an anchor, so an empty Thursday feels like a loss of three. A fixed weekly time drives checking just before and on that evening (fixed-interval schedules, Ferster & Skinner 1957 [from knowledge]). |
| **Sunday** | Nothing arrives, which is right. | Nothing in milestone 1 says so on a Sunday. Fine for now. Notifications in milestone 2 must keep Sunday silent. |
| **A hard day** (grief, family pressure, fear) | Strong. Help is on Welcome and in Me. Talk to us privately is unseen by companions. The forced-marriage help shows before anything is sent. | Help isn't on Home or Introductions, so it takes two taps from Me. "Please tell us" in the leadership note (`questions.ts:26`) has no link. |
| **Paused** | Relief. "Nobody else can see that you've paused." "Nothing is lost." | Home's only filled button is "Start again" (`home.tsx:18`), a daily invitation to stop resting. Introductions still says "No new introductions this week… not a judgement on you" while paused. "Two weeks" never ends, because no date is kept. |
| **Leaving** | Dignity and gratitude. "Thank you for the care you've shown here." "Leaving without a marriage isn't failing." | The legal note "How long reports are kept is for the solicitor to advise" (`leave.tsx:17`) is visible to members. The screen assumes nobody leaves because they met someone elsewhere. |
| **Missed days** | Nothing nags. No missed questions, no "you haven't finished". | Keep it so. Never add "Finish your profile to get introductions" pushes. |

**Healthy feel-good in milestone 1:** meaning (My yes, the prayer), gentle competence (one group at a time, ending on "done"), being respected (the story screen), rest (pause), and dignity in leaving.

**Hollow or risky feel-good to keep out:** checking for arrivals, "up to three" as a quota to fill, must-agree marks as a lever for more introductions, and any later "profile strength" or completeness meter.

---

## 4. Findings, nudge by nudge

Each finding gives the file and line, what the person sees, the fix, and must, should or could. Effort is small (S), medium (M) or large (L). Faith and care wording goes to the pastoral reviewer before use.

### 4.1 Waiting and the empty week

**F1. Must (S). The empty week shows before any week is possible.**
- **Where:** `app/intros.tsx:13`.
- **What the person sees:** the title "No new introductions this week" shows whatever state the person is in, including before they have answered the two needed groups. `app/home.tsx:28` shows the same line as soon as the person is ready, even if their first Thursday hasn't come yet.
- **Fix:** three states, with different words:
  - **Not ready yet:** title "Introductions begin after two groups of questions". No "this week".
  - **Ready, before their first Thursday:** "Your first introductions can come on Thursday evening." Give the date if the code has it.
  - **After a Thursday with no one:** the current empty-week text.
- **Why:** a rejection message before any chance of acceptance is felt as a verdict on the person, not on timing (round 1, R3).

**F2. Must (S). "Up to three" turns every empty week into a loss.**
- **Where:** `home.tsx:29`, `intros.tsx:23`, `secdone.tsx:15`.
- **What the person sees:** "up to three at a time" repeated on the empty-week screens.
- **Fix:** keep the pace rule in Help or "How introductions work". On the empty-week screens, say: "Introductions come on Thursday evenings, when there's someone we believe you could marry with a clear conscience."
- **Why:** naming a maximum sets a reference point, so zero is felt as a loss (reference dependence in prospect theory, Kahneman & Tversky 1979 [from knowledge]). The owner's decision on the pace stays the same; only where it is said changes.

**F3. Must (S). A button that leads to nothing.**
- **Where:** `home.tsx:30`.
- **What the person sees:** "See introductions" on an empty week opens an empty screen.
- **Fix:** remove the button on empty weeks. Home already says there is nothing new. Show a button only when there is something to see.
- **Why:** a tap that sometimes leads to something and sometimes doesn't is the start of variable-reward checking.

**F4. Should (S). Be honest about size.**
- **Where:** `intros.tsx:15`.
- **What the person sees:** "Sometimes there's nobody near you yet…"
- **Fix:** add "Covenant is new, and still small." Never give counts. Never suggest loosening a must-agree answer. Offer to widen only distance, only when the person asks (round 1, Q7).
- **Why:** the comparison rates a small pool as a high risk. Honest framing puts the cause in the situation, not the self, which protects people from blaming themselves for weeks of silence.

**F5. Should (S). The "A word for you" link and the Home verse frame the app as a waiting room.**
- **Where:** `intros.tsx:25`, `home.tsx:35`.
- **What the person sees:**
  - "Still waiting? A word for you ›" shows before the person has waited at all.
  - Lamentations 3:25 ("wait for Him") is on Home in every state.
- **Fix:**
  - Show the link only after the first empty Thursday.
  - Later (pastoral list), let the Home verse vary, and not always about waiting.
- **Why:** repeating "wait" every visit primes a sense of lack.

**F6. Should (S). "Still waiting" and "A single life" share one page.**
- **Where:** `waiting.tsx:9–14`.
- **What the person sees:** after a first empty week, the person reads "If you leave without marrying, you haven't missed your life." That can read as a hint to give up.
- **Fix:**
  - From Introductions, open "Still waiting" only.
  - From Leave (`leave.tsx:16`), open "A single life", or put it first.
  - Both stay visible pages, not folds.

### 4.2 "This matters a lot to me"

**F7. Must (S). The limit note puts pressure on convictions.**
- **Where:** `q.tsx:43–45`.
- **What the person sees:** after five marks, "Keeping these for what truly matters means more people can be introduced to you."
- **Why it's a problem:** it frames a conscience choice as a cost to the person, and invites them to give up a conviction to be introduced to more people. Round 1 said: "Never suggest loosening a faith must-have." It also has no real limit, so people with scrupulosity can keep marking and keep feeling warned.
- **Fix:**
  - State the limit neutrally in the group intro: "You can mark up to five answers as 'This matters a lot to me'." (The pastoral reviewer suggested 5, the product reviewer 8. Owner to confirm.)
  - At the limit, show only: "You've marked five. To mark this one, unmark another." Nothing about introductions.

**F8. Must (M). Only answers about what you hope for can be must-agree, never facts about yourself.**
- **Where:** `q.tsx:41`.
- **What the person sees:** the toggle shows on every question, including:
  - "Do you have children?" (`questions.ts:37`)
  - "Have you been baptised?" (`questions.ts:9`)
  - "Alcohol" (`questions.ts:44`)
- **Why it's a problem:** marking a fact about yourself as must-agree becomes a silent filter on other people's lives. For example, "No" to children as must-agree screens out widowed and divorced parents. That is a shaming filter they will never see. It also shows before any answer is chosen, and on "I'd rather talk about it" and "I'd rather not say", where it means nothing.
- **Fix:**
  - Add a flag in `questions.ts` (for example `mustOk`) for questions about hopes and convictions only.
  - Show the toggle only once an answer is chosen, and not on the "not sure", "rather talk" or "rather not say" answers.
  - The pastoral and product reviewers choose which questions qualify.
- **Why now:** milestone 2 matching is built on this data.

**F9. Should (M). Nowhere to see what you've marked.**
- **Where:** the questions list (`questions.tsx`) shows only "Done" per group.
- **Fix:** add a short "What matters most to me" list in Me › My answers that shows the marked answers in words, with "Change". Milestone 2 needs the same list for "What you share".
- **Why:** autonomy and less worry. People can review their own convictions without re-opening every group.

### 4.3 The questions as a whole

**F10. Should (S). "Tier 1" eyebrow.**
- **Where:** `questions.tsx:14`.
- **Fix:** use "Faith and marriage", or no eyebrow at all.
- **Why:** a ranking word in an exam-like context.

**F11. Should (S). Some sacrament and faith questions have no honest "not sure" answer.**
- **Where:** `questions.ts`:
  - "Mary and the saints" (line 19)
  - "Confession" (line 20)
  - "Baptism of children" (line 21) has "I'd follow our church", which is close enough
- **What the person sees:** "I'd rather not say" frames uncertainty as withholding.
- **Fix:** add "I'm still learning" to each, and show the "There are no wrong answers here, only honest ones" note at the start of the group, not only on the Communion question.
- **Why:** this matters for people new to faith and people with scrupulosity (religious OCD; Abramowitz et al. 2002, Penn Inventory of Scrupulosity [from knowledge]).

**F12. Should (S). "Done" when nothing was answered.**
- **Where:** `q.tsx:26–29`, `secdone.tsx:14–15`.
- **What the person sees:** skipping every question still gives "Marriage itself: done. Thank you for answering honestly."
- **Fix:** if every question was skipped, say "Marriage itself: saved. You can come back to it whenever you like." The owner decides whether skipped needed groups count for introductions (see the owner questions).

**F13. Should (S). "Please tell us" with no way to tell.**
- **Where:** `questions.ts:26` (the leadership note).
- **Fix:** add a "Talk to us privately ›" link under that note. Spiritual abuse is the hardest risk to see (pastoral study C3), and this is the moment someone recognises it.

**F14. Could (S). The engagement timeline question.**
- **Where:** `questions.ts:31`.
- **Fix:** keep the question. Don't allow must-agree on it (F8). Never quote it back later ("You hoped to be engaged within 6 months"). Round 1 risk R4 (rushing).

**F15. Should (S). Test wording promises saving.**
- **Where:** `questions.tsx:16`.
- **Fix:** while `TEST_BUILD`, say "In this test version, answers are kept only until you close the app."

### 4.4 Pause and leave

**F16. Must (S). Introductions ignores a pause.**
- **Where:** `intros.tsx:14–16`.
- **What the person sees:** a paused person still sees "No new introductions this week. That's not a judgement on you…"
- **Fix:** when paused, show "Your introductions are paused. Nothing is lost, and nobody can see it." Don't show the empty-week text.

**F17. Should (S). Home pushes un-pausing.**
- **Where:** `home.tsx:18`.
- **What the person sees:** the only filled button on a paused Home is "Start again".
- **Fix:** make it a quiet link ("Start introductions again ›"). When the pause has an end, show it: "Paused until Thursday 10 Dec."
- **Why:** people pause after grief, a hard ending or a family crisis. A filled button every visit nudges them back before they're ready.

**F18. Should (M). A pause for "two weeks" never ends.**
- **Where:**
  - `onboarding.tsx:21` keeps only a label.
  - The server has only `paused boolean` (`cov_base.sql:28`).
- **Fix:** store the end date (`paused_until`). When it ends, introductions resume silently on the next Thursday. There is no "Welcome back" push, and no "you've been away" message.
- **Why now:** milestone 2 needs this to behave.

**F19. Should (S). "Pause instead" looks more important than leaving.**
- **Where:** `leave.tsx:19` and `leave.tsx:27`.
- **What the person sees:** "Pause instead" is a bordered button above a quiet "Delete my account".
- **Fix:** make both the same weight, or make Pause a text link.
- **Why:** offering a pause is kind. Making deletion look smaller is a mild obstruction pattern.

**F20. Should (S). A legal note shows on screen.**
- **Where:** `leave.tsx:17`.
- **What the person sees:** "How long reports are kept is for the solicitor to advise."
- **Fix:** replace it before testers see it. For example: "We keep safety reports for a set time, as the law asks. Everything else is deleted."

**F21. Could (S). Leaving because you've met someone.**
- **Where:** `leave.tsx`.
- **Fix:** add one line: "If you're leaving because you've met someone, we're glad for you."
- **Why:** this removes the assumption that leaving means "without a marriage". Some people will meet a spouse at church.

### 4.5 Divorced, annulled and widowed people

**F22. Should (S). Matthew 19:6 one screen before "Your story so far".**
- **Where:** `faith.tsx:18`.
- **What the person sees:** "…what God has joined together, let man not separate" just before saying they are divorced.
- **Fix:** use Genesis 2:24 here (pastoral study A8). Matthew 19:6 is already on the "Marriage in Scripture" page (`scripture.tsx:15`).
- **Why:** the pastoral study marked this "could". I raise it to "should" because of the order.

**F23. Should (S). "A Christian marriage that every main church can bless".**
- **Where:** `exploring.tsx:9`.
- **Fix:** align with D7 ("the historic teaching of the Church…") or simply say "introduces Christians for marriage". The current line isn't true of every church, and divorced readers know their own church may not bless them.

**F24. Could (S). More than one story is true.**
- **Where:** `story.tsx:6–13`.
- **What the person sees:** the screen allows one answer. Someone divorced and later widowed has to pick one, and canonically that may matter.
- **Fix:** add one line, from the pastoral reviewer: "If more than one is true, choose the one that describes you now. You can explain the rest in conversation."

**F25. Could (S). The separated screen ends with only "Go back".**
- **Where:** `separated.tsx`.
- **Fix:** add a quiet link to Kingdom First Life's Bereavement or Restarting plans, or to "Still waiting", from the pastoral reviewer. The current wording is kind.

**F26. Should (M), for milestone 2. The remarriage question and the "open to" screen overlap.**
- **Where:** the remarriage question (`questions.ts:27`) and `open.tsx`.
- **Fix:** matching should use only "Who you're open to" for marital history. Treat the question as information to talk about. Never use both as filters, or divorced people get filtered out twice with no way to see why.

### 4.6 People who never marry

Overall this is good. The Welcome line (`index.tsx:11`), 1 Corinthians 7:7, the single-life text and Romans 8:39 on Leave all honour singleness without looking down on it. No screen mentions age, a clock or "your season". Keep it that way:

**F27. Must (S), for milestone 2.** Write a never-say list into the Covenant CLAUDE.md as a rule, and check notifications, store text and emails against it:
- No age, "time", "season" or fertility wording.
- No "God has someone for you".
- None of the verses the pastoral study bans.
- Testimonies only off-app, with both people's consent.

### 4.7 Companions, and people with no one to ask

**F28. Must (S). No word for people with no one to ask.**
- **Where:** `companion.tsx:25` and `index.tsx:10`.
- **What the person sees:** the companion page explains the role and the promise, but says nothing to people who have nobody to ask: converts, estranged people, people widowed late in life, people new to the UK, people who left an abusive home.
- **Fix:** add round 1 pastoral §5.6, adapted. For example: "Not having someone to ask is nothing to be ashamed of. A companion could be a friend, someone from your church, a home-group leader or a mentor. They don't need to live near you." Pastoral reviewer to word it.
- **Why:** round 1 risk R5 (exclusion). Without this, the worry starts on day 1 and stays all week.

**F29. Should (S). The companion page has no link to the private line.**
- **Where:** `companion.tsx`.
- **Fix:** add a quiet "If someone is pressuring you, talk to us privately ›" link under the promise.
- **Why:** a parent or leader companion is the main coercion risk (round 1 R1; pastoral C3).

### 4.8 Help and reach

**F30. Should (S). Help is two taps from Home.**
- **Where:** Home, Introductions.
- **What the person sees:** Help is on Welcome and in Me, but not on Home or Introductions.
- **Fix:** add a quiet "Get help now" link, or a header button as in Kingdom First Life, on Home and Introductions.
- **Why now:** milestone 2 must put Help and Talk to us privately in every conversation. Setting the pattern now makes that easy.

**F31. Should (S). "Same day" isn't promised the same way twice.**
- **Where:** `talk.tsx:29` and `sent.tsx:10`.
- **What the person sees:** Talk says "We usually reply the same day". Sent says "A member of the Covenant team will look at this today."
- **Fix:** use the same honest wording on both, for example "We aim to look at this the same day, every day of the week". Confirm Sundays are covered (see the owner questions). A broken safety promise is worse than a modest one.

**Reach check (who, and how they find it in week 1):**

| Part | For | Found in week 1? |
|---|---|---|
| Get help now | Everyone | Yes: Welcome and Me. Not on Home (F30). |
| Talk to us privately | Anyone under pressure | Me, Help, Sent. Not from the leadership note (F13) or the companion page (F29). |
| Forced-marriage help | People under family pressure | Yes, inside Talk, shown before sending. Good. |
| Pause | Grief, burnout, hard endings | Me only. Fine. Also offered on Leave. |
| Marriage in Scripture | Everyone | Me only. Fine, it's reference material. |
| A single life | People thinking of leaving; long-waiting members | Only through "Still waiting" or Leave (F6). |
| Companion explanation | Everyone, especially people with no one to ask | Me › My companion ("Chosen later"). No word for people with nobody (F28). |
| Separated | Separated people | A text link on the story screen. Visible, not folded. Good. |
| "Read what my church teaches" | Divorced people and people open to them | A fold on `open.tsx:32`. The fold hides length, not existence. Fine. |

Nothing important is only behind a setting. The gaps are F28 and F30.

---

## 5. Risks

| # | Risk | Who is hurt | Severity | Fix |
|---|---|---|---|---|
| R1 | Must-agree note pushes people to give up convictions for more introductions | Scrupulous people, people afraid of being single | **High** | F7 |
| R2 | Empty-week verdict before any week is possible, and every week in a small pool | People with depression, divorced and older members | **High** | F1, F2, F4 |
| R3 | Facts about yourself used as hidden must-agree filters (children, history) | Divorced and widowed parents | **High** (shown in milestone 2) | F8, F26 |
| R4 | Worry about the companion from day 1 for people with no one to ask | Converts, estranged people, abuse survivors, people new to the UK | **Medium-High** | F28 |
| R5 | Checking on Thursday evenings, and a button to an empty screen | Lonely people, anxious attachment | **Medium** | F3, plus notifications in milestone 2 |
| R6 | A paused person nudged back, or told "not a judgement" while resting | People grieving or in crisis | **Medium** | F16, F17, F18 |
| R7 | Sacrament questions felt as a test | People new to faith, people with scrupulosity or OCD | **Medium** | F10, F11 |
| R8 | Divorced people meet Matthew 19:6, then the "every main church can bless" line | Divorced and annulled people | **Medium** | F22, F23 |
| R9 | A coercive companion with no visible route to help from the companion page | People under family or spiritual pressure | **Medium** (High once conversations exist) | F29, F30 |
| R10 | Store-review demo seeding leaks into the real app (a "never empty" feel bought with fake activity) | Trust; any member | **Medium** | Keep seeding to the four review accounts only. Never show seeded or "sample" introductions to members. |
| R11 | Test wording ("saves as you go") breaks trust in testing | Testers | **Low** | F15 |

---

## 6. What milestone 1 must get right so milestone 2 fits

1. **A data shape for must-agree answers** (F8, F9). There is a per-question flag saying whether must-agree is allowed, and a hard limit. Milestone 2's "What you share / Things to talk about" reads from it, in words, with no scores.
2. **A pause with an end date** (F18), stored on the server, never visible to others (`profiles` is owner-read only today, so keep it that way). It ends silently, with no "welcome back" push.
3. **An introduction state machine** with four states, each with its own words (F1, F16): not ready, ready before the first Thursday, empty week, paused. Milestone 2 adds "introductions waiting", "conversation open" and "conversation paused, no companion". Every state has one clear next step or none, and never a button to an empty screen.
4. **A notification promise.** "You don't need to check. We'll tell you on Thursday evening if there's someone." Send at most one note a day. None 10pm–7am, none on Sunday. Never a note about nothing. The owner decides whether an empty Thursday gets a closing line in the app (see the questions).
5. **Help in every conversation** (F30). The header pattern built now carries over.
6. **Marital history filters only from "Who you're open to"** (F26).
7. **No last-active, read, seen or popularity data in the schema.** Today's migration has none. Keep it so as tables are added: if it isn't stored, it can't leak onto a screen.
8. **The never-say list in CLAUDE.md** (F27), checked against notifications and store text.
9. **Companion rule written once** (see the owner questions): whether a person can receive introductions before choosing a companion.

---

## 7. Recommendations, in order

| # | Must / should / could | Effort | What | Supports |
|---|---|---|---|---|
| 1 | Must | S | F7: neutral, hard limit on must-agree; no "more people" line | Integrity of conviction; no pressure to compromise |
| 2 | Must | M | F8: must-agree only on questions about hopes and convictions, only once an answer is chosen | Fair matching; no hidden shaming filters |
| 3 | Must | S | F1: three states on Home and Introductions; no empty-week line before the first Thursday | Hope without a premature verdict |
| 4 | Must | S | F2: move "up to three" off the empty-week screens | Removes loss framing |
| 5 | Must | S | F3: no "See introductions" button on empty weeks | Prevents a checking habit |
| 6 | Must | S | F16: Introductions respects a pause | Rest without mixed messages |
| 7 | Must | S | F28: a word for people with no one to ask (pastoral wording) | Belonging; prevents early drop-out |
| 8 | Must | S | F27: never-say list into CLAUDE.md | Keeps singleness honoured through milestone 2 and marketing |
| 9 | Should | S | F4, F5, F6: "new and still small"; waiting link after the first empty Thursday; split "Still waiting" and "A single life" | Honest attribution; no waiting-room frame |
| 10 | Should | M | F9: "What matters most to me" list in Me | Autonomy; feeds milestone 2 |
| 11 | Should | S | F10, F11, F12: drop "Tier 1"; "I'm still learning" options; "saved" not "done" when skipped | Competence without exam anxiety |
| 12 | Should | S | F13, F29, F30: Talk privately linked from the leadership note and the companion page; Help on Home and Introductions | Safety reachable at the moment it's needed |
| 13 | Should | S/M | F17, F18, F19: quiet un-pause, pause end date, equal Pause and Delete | Rest; no obstruction |
| 14 | Should | S | F20, F15, F31: remove the solicitor note; test-version saving line; one same-day wording | Trust |
| 15 | Should | S | F22, F23: Genesis 2:24 on the faith screen; fix the exploring line (pastoral) | Dignity for divorced people |
| 16 | Should | M | F26: one source for marital-history filters | Fair matching in milestone 2 |
| 17 | Could | S | F14, F21, F24, F25: no must-agree on timeline; a line for leaving because you've met someone; "more than one is true"; a link from Separated | Small kindnesses |

No streaks, scores, counts, badges, loss-aversion messages or false urgency are proposed. No logo, font or colour changes. All faith and care wording above is draft for the pastoral reviewer.

---

## 8. Questions for the owner

1. **How many must-agree answers?** Five (pastoral) or eight (product), as a hard limit with no warning about fewer introductions.
2. **Companion before introductions, or before conversation?** CLAUDE.md says you choose a companion "when a conversation is about to start". Round 1 pastoral §5.6 said "Introductions begin once your chaperone has said yes." Which is it? My advice is the CLAUDE.md version: receiving an introduction shouldn't wait on finding someone, but saying yes to one should.
3. **Empty Thursdays.** Should the app show a closing line on Home after an empty Thursday (for example "Nothing new this Thursday. Rest easy."), with no push note? My advice: yes in the app, never as a notification.
4. **Skipped needed groups.** If someone skips every question in "Your faith and church" or "Marriage itself", do they still get introductions? My advice: yes, but the group reads "saved", and introductions use only what they answered.
5. **Same-day review on Sundays.** "Never on a Sunday" covers introductions. Does the same-day safety review also run on Sundays? It should, or the wording must say "by Monday" for Sunday reports.

---

## Sources

**Verified (links checked in round 1, 23 Nov 2026)**
- Pronk, T. M. & Denissen, J. J. A. (2020). A rejection mind-set: Choice overload in online dating. https://journals.sagepub.com/doi/10.1177/1948550619866189
- Spielmann, S. S. et al. (2013). Settling for less out of fear of being single. https://www.sciencedaily.com/releases/2013/12/131203133728.htm
- Sinclair, H. C., Hood, K. B. & Wright, B. L. (2014). Revisiting the Romeo and Juliet effect. https://econtent.hogrefe.com/doi/10.1027/1864-9335/a000181
- Hunt, L. L., Eastwick, P. W. & Finkel, E. J. (2015). Longer acquaintance and attractiveness. https://www.psychologicalscience.org/news/releases/longer-acquaintance-levels-the-romantic-playing-field.html
- Thirtyone:eight, definition of spiritual abuse (via the pastoral study). https://thirtyoneeight.org/help-and-resources/knowledge-hub/definitions/spiritual-abuse
- GOV.UK, multi-agency statutory guidance on forced marriage (via the pastoral study). https://www.gov.uk/government/publications/the-right-to-choose-government-guidance-on-forced-marriage/multi-agency-statutory-guidance-for-dealing-with-forced-marriage-and-multi-agency-practice-guidelines-handling-cases-of-forced-marriage-accessible

**From knowledge (check before quoting in public)**
- Kahneman, D. & Tversky, A. (1979). Prospect theory. *Econometrica.*
- Ferster, C. B. & Skinner, B. F. (1957). *Schedules of Reinforcement.*
- Deci, E. L. & Ryan, R. M. (2000). Self-Determination Theory. *Psychological Inquiry.*
- Abramowitz, J. S. et al. (2002). The Penn Inventory of Scrupulosity. *Behaviour Research and Therapy.*
- Stanley, S. M. et al. (2006). Premarital education, marital quality and stability. *Journal of Family Psychology.*
- Sprecher, S. & Felmlee, D. (1992). Parents, friends and relationship quality. *Journal of Marriage and the Family.*
