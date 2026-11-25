# Kingdom First Covenant: UX flows, round 1

UX reviewer, 23 Nov 2026. No app exists yet, so this is a proposed design, not a walk-through. Tap counts are estimates for a person who knows what they want. Nothing here is built or approved.

## Verdict

The app should feel like being introduced by a wise friend, not like scrolling through a catalogue. The simplest way to make "for marriage, not dating" real is to limit the app's shape, not just add words to it. **No browsing, no search, no swiping.** Introductions arrive a few at a time. A person talks to **one person at a time**, and **every conversation has a chaperone**. Each screen has one filled button. Three tabs are enough: **Home** (the one next step), **Introductions** and **Me**. Chaperones get a separate one-tab view. Everything people might want to tune (who they are open to, pausing, leaving) sits in Me, away from the daily screens. The riskiest part of the flow is the chaperone hand-off. If nobody joins, the match stalls, so the app needs a kind "waiting" state and a way to swap chaperones.

## Principles (from Kingdom First Life, applied here)

1. One filled button per screen. Any other choice is a quiet text link (for example "Not for me ›").
2. No counts, badges, red dots, "likes", "viewed you", "last online", "% match", read ticks or typing dots. Progress is shown in words ("Faith · done", "Marriage · next"), never "12 of 30".
3. A calm pace. New introductions arrive at one set time each week (suggested: Thursday evening, never Sunday), up to 3 at once. A person can only be in conversation with one person at a time.
4. Report, block and pause are always one "⋯" away: on every introduction, conversation and chaperone.
5. Works at 320px wide and with large text (130%). Button rows stack, names wrap to two lines rather than being cut off, and the three-person conversation header uses two lines.
6. Neutral wording. "The person", "your introduction", never "girls/guys".

## Navigation

| Tab | What it holds | Never on it |
|---|---|---|
| **Home** | One card: the single next step ("Answer the Marriage questions", "Daniel said yes: see photos", "Your chaperone hasn't joined yet"). A short line of purpose under it. | Lists, counts, adverts, Plus labels |
| **Introductions** | This week's introductions (up to 3) and your one active match, with its conversation inside it. Earlier ones are folded under "Earlier introductions" with no count. | Browse, search, filters, ranking |
| **Me** | My answers, Profile and photos, Who I'm open to, Chaperone, Pause, Safety (report, blocked, help), Plans, Help, Leave Covenant | Daily actions |

The conversation is **not** its own tab. It lives inside the active match, so there is never an inbox of many chats.

**Chaperone view** (someone who joins only as a chaperone): one screen, "Chaperoning", with the conversation(s) they look after and their tools. No tabs, no profile of their own to be matched.

## Jobs people come to do

| Job | How often | Taps now → after | Screens |
|---|---|---|---|
| Sign up, pledge, verify, basic profile | Once | n/a → about 30 (half of them typing or the ID scan) | 14 |
| Answer one section of Tier 1 questions | A few sittings in the first week | → 7 (6 answers + Save) | 7 |
| Look at a new introduction and decide | Weekly | → 2 (open, "I'd like to know more") | 2 |
| See photos (Tier 2) | Per match | → 2 | 2 |
| Invite a chaperone | Per match | → 3 (Invite, pick a contact in the share menu, Send) | 2 + share menu |
| Send a message in the chaperoned conversation | Daily during a match | → 2 (type, Send), opening from Home is 1 more | 1 |
| Suggest a first meeting | Once or twice per match | → 6 | 2 |
| End a match kindly | Per match | → 3 | 2 |
| Pause introductions | Occasional | → 3 | 2 |
| Say "We're engaged" / "We married" | Once | → 3 each person (both confirm) | 2 |
| Leave and delete everything | Once | → 4 | 3 |
| Report or block | Rare | → 3 to 4 | 2 |

## The flows

### 1. Welcome, pledge and sign-in (S01–S03)

- **S01 Welcome.** Name, one line: "Introductions for marriage, not dating." Three plain points: answers before photos; a chaperone in every conversation; one person at a time. Button: **Begin**. Quiet link: "I've been invited as a chaperone ›".
- **S02 Our promise.** Says plainly what the app is and isn't. "I'm here to find a husband or wife, with God's help. I'll be honest about my faith and my past. I'll treat everyone as a brother or sister in Christ." Button: **I'm here to marry** (the button is the pledge; no tick box as well). Quiet link: "Not ready yet? That's OK ›" (closes kindly).
- **S03 Sign in.** Apple, Google or email. One filled button per platform default (Apple on iPhone, Google on Android); the others are outlined.

Hidden until needed: prices, photos, questions. Taps: 3–4.

### 2. Age and identity check (S04–S06)

Done before any profile is visible to anyone, and before any introduction. Uses an outside checking service (the product and law reviewers choose which one).

- **S04 Why we check.** "Everyone here is a real, verified adult. It takes about two minutes." What is checked, what is kept (only the result, not the ID photo, if the provider allows) and who sees it (nobody else). Button: **Check my ID**.
- **S05 ID and selfie** (the provider's own screens): photo of a passport or driving licence, then a live selfie. About 5 taps.
- **S06 You're checked.** Date of birth comes from the ID, so age is never typed. Button: **Continue**.

If the check fails: a kind line, "We couldn't confirm this. You can try again or ask us for help.", with **Try again** and "Get help ›". Never "rejected".

### 3. About you and who you're open to (S07–S11)

One question per screen, large tap targets, Back always available, and each answer saves at once.

- **S07 Your first name** (shown to introductions) and **I am a man / a woman**. Button: **Next**.
- **S08 Where you live.** Postcode (never shown). Others see only the town or county. Button: **Next**.
- **S09 Your church.** Tradition picker grouped as in KFL (Catholic; Eastern Catholic; Orthodox, opening into its traditions; Anglican; Protestant, opening into its families; Other Christian). Then an optional "Your church or parish" line. Button: **Next**.
- **S10 Marriage so far.** Never married · Widowed · Divorced · Divorced, annulment in process · Marriage annulled (decree of nullity). A small fold, "What do these mean? ›", explains the terms kindly in one short paragraph each (pastoral reviewer to write). "Children already?" Yes / No. Button: **Next**.
- **S11 Who you're open to.** Three short groups on one scrolling screen: traditions (all ticked by default, untick to narrow), marriage so far (all ticked by default), age range (two-handle slider). If a Catholic person ticks "Divorced", one calm line appears: "The Catholic Church asks that a previous marriage is annulled before a new one. You can choose who you're open to." No warning colours. Distance is optional and folded. Button: **Save**.

Taps: about 14 plus typing.

### 4. Tier 1 questions (S12–S13, then Q screens)

**How many in total:** about 30, in five sections of about 6 (the theology reviewer writes them): Faith · Church and worship · Marriage · Children and family · Everyday life. Faith and Marriage must be finished before introductions start. The other three are strongly suggested but can wait.

**Per sitting:** one section, about 5 minutes. After the last question in a section, the sitting ends and goes back to Home with "Marriage · done. Next time: Children and family ›". The app never pushes a person straight into the next section.

**Saving:** every answer saves the moment it is tapped. Closing the app at any point loses nothing, and Home reopens at the same question.

**Skipping:** each question has a quiet "Skip for now ›" (it comes back at the end of the section once) and, for sensitive ones, "I'd rather not say ›" (final, and the question is then never used to match). There is no penalty and no "missing" message.

**Must-agree:** on each answer, one small switch, "This matters a lot to me" (off by default). Switched on, it means "only introduce me to people who agree". At most about 5 must-agrees, and when someone tries to add more, a gentle line says: "Fewer must-agrees mean more introductions." No counter is shown.

- **S12 Questions home** (also Me › My answers). Five rows in words: "Faith · done", "Marriage · next", "Children and family", … Button: **Continue** (opens the next unanswered question).
- **Q screen** (one per question). The question in large type, 3–5 answer buttons stacked full-width (never side by side, so they work at 320px), the "This matters a lot to me" switch under the chosen answer, and "Skip for now ›". Tapping an answer selects it. Button: **Next**. A thin progress line in words at the top: "Marriage". No numbers.
- **S13 Section finished.** "Thank you. Your answers help us introduce you well." Button: **Back to Home**. Once Faith and Marriage are done: "Introductions start this Thursday evening."

Taps per section: 6 answers + 6 Next = 12. Or 7 if tapping an answer moves straight on (recommended, with Back to change it). This means people can change their answer, but a single tap does the job.

### 5. Seeing a Tier 1 introduction (S14–S15)

Arrives as one notification: "You have new introductions." No count, no names in the notification.

- **S14 Introductions.** Up to 3 cards. Each shows first name, age, town or county, tradition, and one line in their own words. No photo, no score. Tap a card. No button on the list itself; the cards are the action.
- **S15 Introduction.** First name, age, area, tradition, marriage so far (worded as they chose), children. **Where you agree** (3–4 lines in words, e.g. "You both hope to marry in church." "You both want children, God willing."). **Worth talking about** (1–2 differences, worded kindly). Their own short "About me" (a few sentences, no photos). Button: **I'd like to know more**. Quiet link: "Not for me ›" (no reason asked, never told to the other person). "⋯": Report, Block.

If you're already in an active match, the button reads **Keep for later** and the introduction waits up to 2 weeks. Hidden: their full answers, photos, contact details.

Empty state (no introductions this week): "No introduction this week. We only introduce people who share what matters to you. We'll look again next Thursday." No "0", no sad graphic, no upsell.

Taps: 2.

### 6. Tier 2: the photo reveal (S16–S17)

Only when **both** have said "I'd like to know more".

- **S16 You both said yes.** "Daniel would like to know more too. Would you like to see each other's photos?" A short reminder: "Photos are shared only when you both agree." Button: **Share photos**. Quiet link: "Not now ›" (waits, no nudges).
- **S17 Photos.** Shown once both have tapped (until then, "Waiting for Daniel. We'll let you know."). Up to 3 photos, the first a face photo matching the ID selfie, marked in words "Photo matches their ID check". Swipe sideways within the 3 only. Below: the full answers, folded under "All their answers". Button: **Invite a chaperone to start talking**. Quiet link: "End this introduction kindly ›".

Taps: 2. Photos can't be saved from inside the app, and screenshots can't be fully blocked, so the app says so honestly in Me › Safety.

### 7. Chaperone: inviting and the three-person conversation (S18–S21, C01–C03)

Proposal: **one chaperone per conversation, chosen by either person and accepted by both**, so the room is three people. When the conversation has a chaperone, it can open. Whether both may bring one (four people) is a question for the owner.

- **S18 Invite a chaperone.** "Every conversation here includes someone you trust: a parent, relative, friend, pastor or priest. They'll see every message and can pause the conversation." Who they are to you: Family · Friend · Pastor or priest. Button: **Invite** (opens the phone's share menu with a one-time link). Quiet link: "Use my saved chaperone ›" (Me › Chaperone).
- **S19 Waiting.** On Home and in the match: "Your conversation opens when your chaperone joins. Daniel will be asked to agree." Quiet links: "Send the invite again ›", "Invite someone else ›". After 7 days, one gentle line, "Still waiting? You could ask someone else ›". Never a countdown.
- **S20 Agree to the chaperone** (the other person). "Ruth has invited her aunt, Mary, to chaperone. Mary will see every message." Button: **Agree**. Quiet link: "I'd prefer someone else ›" (asks Ruth kindly to choose another).
- **S21 Conversation.** Header on two lines: "Ruth · Daniel" and "Chaperone: Mary (Ruth's aunt)". Every message shows the sender's name. Text only: no photos, voice notes, links, phone numbers, emails or addresses (filtered, with a line explaining why). At the top, folded: "Ideas to talk about", drawn from "Worth talking about". The composer is fixed above the home bar. Button: **Send**. "⋯": Suggest a first meeting, Pause this conversation, End kindly, Report, Block.

Chaperone side:

- **C01 You've been invited.** "Ruth has asked you to chaperone a conversation on Kingdom First Covenant." What a chaperone does and sees, in 3 lines. Button: **Accept**. A quick age check (18+, the lighter check; the safeguarding reviewer decides) and sign-in.
- **C02 Chaperone promise.** "I'll be present, kind and discreet. I won't share what I read." Button: **I promise**.
- **C03 Chaperoning.** The same conversation. The chaperone may write (they're a person in the room, not a camera). Their tools are in "⋯": Pause the conversation (both see "Mary has paused the conversation for now."), Report, Step down. If the chaperone steps down, the conversation **pauses** until a new chaperone joins. It never becomes one-to-one.

Taps: invite 3; agree 1; chaperone joining about 5 plus the age check; sending a message 2.

### 8. Arranging a first meeting (S22–S23)

- **S22 Suggest a first meeting** (from "⋯" or a quiet line in the conversation after some messages). Type of place: Café · After a church service · With family · Somewhere else public. Day and part of the day (morning, afternoon, evening; no exact time until agreed). "My chaperone will come / will know where I am." Button: **Suggest**. The plan appears as a card in the conversation that all three can see.
- **S23 Meeting card.** The other person: **Agree** or "Suggest another time ›". Once agreed, the card shows the plan and a folded "Meeting safely" (public place, make your own way there, tell someone, leave whenever you want; plus 999 and 101). Home addresses are never asked for or shown.

Afterwards, nothing asks for a rating. One private, optional line on Home the next day: "How are you feeling about Daniel? Keep talking · End kindly ›". Only the person sees it.

Taps: 6 to suggest, 1 to agree.

### 9. Ending a match kindly (S24–S25)

- **S24 End kindly.** "It's right to end this if you don't see a marriage ahead. You don't need to give a reason." An optional choice of one kind closing line to send (e.g. "Thank you for your openness. I don't think we're right for marriage, and I wish you every blessing.") or none. Button: **End introduction**.
- **S25 Ended.** "This introduction has ended." The other person sees the same calm words, plus the closing line if one was sent, and a short blessing (pastoral reviewer to word). The conversation becomes read-only and is then deleted after a set time (kept only for safety reports). The chaperone is told in the same words. Button: **Back to Home**.

No "they left you", no reason codes shown, no instant new match pushed. The next introduction comes at the usual weekly time.

Taps: 3.

### 10. Pausing (S26)

- **S26 Pause** (Me › Pause). "Take a break. Nobody new will be introduced, and you won't be shown to anyone." Choices: Until I come back · 1 month · 3 months. Asks only if there's an active match: "Keep your current conversation open?" Yes / End it kindly. Button: **Pause**.

While paused, Home shows one line, "You're paused. Come back whenever you're ready ›". Others never see that you're paused. You're simply not introduced.

Taps: 3.

### 11. Engaged, married and leaving (S27–S30)

- **S27 We're engaged** (in the active match's "⋯"). Both must confirm. Button: **We're engaged**. Then one calm screen: congratulations in a single line, a verse (pastoral reviewer), introductions stop for both, and other kept introductions end kindly on their own. An optional, quiet "Share your story with us ›" (never public by default, never pressed for).
- **S28 We married.** Same pattern: both confirm. Then: "We'd love to leave you with your memories, not your data." Explains what is deleted. Button: **Close our accounts**. Optional "Keep our conversation as a PDF ›" for both (the chaperone is never included in a download without their agreement, a question for the owner).
- **S29 Leave Covenant** (Me › Leave). Short reasons, all optional: Found someone · Taking a break (offers Pause instead) · Not for me · Something went wrong (offers Help). Button: **Continue**.
- **S30 Delete everything.** Plain list of what's deleted and what is kept by law for a set time (safety reports, verification result). Type nothing, just confirm. Button: **Delete my account**. App stores require deletion inside the app, and this is it.

Taps: engaged/married 3 each person; leaving 4.

## Screen list for the prototype (in order)

| # | Name | Purpose | Main content | Main button |
|---|---|---|---|---|
| S01 | Welcome | Say what this is | Name, "for marriage, not dating", 3 points | Begin |
| S02 | Our promise | Intent pledge | Pledge in plain words | I'm here to marry |
| S03 | Sign in | Account | Apple / Google / email | Continue with Apple (or Google) |
| S04 | Why we check | Explain ID check | What, why, what's kept | Check my ID |
| S05 | ID and selfie | Verification (provider) | Document photo, live selfie | (provider's) |
| S06 | You're checked | Confirm | Age from ID | Continue |
| S07 | Name and sex | Basics | First name; man / woman | Next |
| S08 | Where you live | Area | Postcode (shown as town) | Next |
| S09 | Your church | Tradition | Grouped picker, parish optional | Next |
| S10 | Marriage so far | Marital history | 5 choices, explainer fold, children | Next |
| S11 | Who you're open to | Preferences | Traditions, histories, ages | Save |
| S12 | Questions home | Tier 1 progress in words | 5 sections, done / next | Continue |
| Q | Question | One Tier 1 question | Answers, "matters a lot", skip | Next |
| S13 | Section finished | Close a sitting | Thanks, what's next | Back to Home |
| H | Home | One next step | One card + purpose line | (the step) |
| S14 | Introductions | This week's (up to 3) | Cards, no photos | (tap a card) |
| S15 | Introduction | Tier 1 match | Agree / worth talking about / own words | I'd like to know more |
| S16 | You both said yes | Consent to photos | Mutual-consent line | Share photos |
| S17 | Photos | Tier 2 | Up to 3 photos, full answers folded | Invite a chaperone to start talking |
| S18 | Invite a chaperone | Choose chaperone | Role, what they see | Invite |
| S19 | Waiting for chaperone | Calm waiting state | Status in words, re-send | (none; quiet links) |
| S20 | Agree to chaperone | Other person consents | Who, relation | Agree |
| S21 | Conversation | Chaperoned chat | 3 names, messages, ideas fold | Send |
| S22 | Suggest a first meeting | Plan meeting | Place type, day, chaperone | Suggest |
| S23 | Meeting card | Agree the plan | Plan, Meeting safely fold | Agree |
| S24 | End kindly | End a match | Optional closing line | End introduction |
| S25 | Ended | Close calmly | Calm words, blessing | Back to Home |
| S26 | Pause | Take a break | Length, current match | Pause |
| S27 | We're engaged | Celebrate, stop introductions | Both confirm | We're engaged |
| S28 | We married | Close both accounts | What's deleted, PDF | Close our accounts |
| S29 | Leave | Why (optional) | Reasons, Pause offer | Continue |
| S30 | Delete everything | Deletion | What's deleted and kept | Delete my account |
| M | Me | Settings place | Answers, profile, photos, open to, chaperone, pause, safety, plans, help, leave | (none; rows) |
| R | Report | Safety | Reasons, optional note, block too | Send report |
| C01 | Chaperone invite | Chaperone joins | Role in 3 lines | Accept |
| C02 | Chaperone promise | Chaperone pledge | Promise | I promise |
| C03 | Chaperoning | Chaperone's view | Conversation, Pause / Report / Step down | Send |

Where photos are added: Me › Profile and photos, asked as **one step on Home** after S13 ("Add your photos. Nobody sees them until you both agree.", button **Add photos**). This keeps photos out of the first sign-up sitting and makes Tier 2 feel separate.

## Numbered recommendations

1. **No browsing or search anywhere.** Introductions only, up to 3 a week at a set time. Must, small (it's what we leave out).
2. **One active match at a time.** Other introductions can be kept for later. Must, medium.
3. **The pledge is the button** ("I'm here to marry") on S02, and the purpose line is repeated on S01, S15 and Home. Must, small.
4. **Verify before anyone sees you.** The ID and selfie check comes before the profile is visible or any introduction is made. Must, medium (provider integration).
5. **Tier 1 in five sections, one section per sitting, saved on every tap**, with progress in words and no numbers. Faith and Marriage are needed to start; the rest are optional. Must, medium.
6. **"This matters a lot to me" switch per answer**, kept to a few, with a gentle line instead of a counter. Must, small.
7. **The introduction shows "Where you agree" and "Worth talking about" in words**, never a % or score. Must, medium (matching logic).
8. **"Not for me" is silent.** No reason asked, nothing sent. Must, small.
9. **Photos only after mutual "know more" and mutual "Share photos".** Up to 3, the first matched to the ID selfie. Must, medium.
10. **The conversation never exists without a chaperone.** If the chaperone steps down, it pauses. Text only, with contact details filtered. Must, large.
11. **A calm waiting state for the chaperone** (S19), with re-send and swap, and no countdown. Must, small.
12. **The chaperone has their own simple view and pledge** (C01–C03), with the power to pause and report. Must, medium.
13. **Structured first-meeting card**, public places only, no addresses, Meeting safely fold. Should, medium.
14. **End kindly in 3 taps**, with an optional closing line and a blessing. The same calm words reach both people and the chaperone. Must, small.
15. **Pause in Me**, invisible to others. Must, small.
16. **Engaged / married both confirm**, then introductions stop. Married closes and deletes both accounts, with an optional PDF. Should, medium.
17. **In-app deletion** (S29–S30), which store rules require. Must, small.
18. **Report and block on every introduction, conversation and chaperone**, with "⋯" in the same place everywhere. Must, medium.
19. **Every screen tested at 320px and 130% text.** Answers and buttons are stacked full-width, the conversation header takes two lines, and the composer sits above the home bar. Must, small per screen.
20. **Volunteer chaperones from partner churches** for people with nobody to ask. Later, large (needs safeguarding checks).

## Questions for the owner

1. **One chaperone, or one each?** Three people (one chaperone both agree to) is simplest. Four people (each brings one) may feel safer for some families.
2. **Can the chaperone write, or only read?** I suggest they can write and pause.
3. **How many introductions a week, and which evening?** I suggest up to 3 on Thursday evening, never on Sunday.
4. **Does a chaperone need full ID checks or only an age check?**
5. **What happens to the conversation after a match ends or after marriage?** How long is it kept for safety, and is a PDF allowed (and does the chaperone have to agree)?
6. **What does the person with nobody to ask do at launch?** Wait, or ask their church? Volunteer chaperones would come later.
7. **Should photos be collected in the first sitting or as a later Home step?** I suggest a later step.
