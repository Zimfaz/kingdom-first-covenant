"""Build the Covenant app comparison workbook (checked 26 Nov 2026)."""
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.utils import get_column_letter

OUT = "/home/claude/kingdom-first-covenant/reviews/comparison/covenant-app-comparison-2026-11-26.xlsx"
CHECKED = "26 Nov 2026"

# ---------------------------------------------------------------- sources
S = {
 "S1": ("Kingdom First Covenant CLAUDE.md (repo file, owner decisions to 26 Nov 2026)", "file: kingdom-first-covenant/CLAUDE.md"),
 "S2": ("Covenant round 1 combined review, 23 Nov 2026 (repo file)", "file: kingdom-first-covenant/reviews/round1/combined-2026-11-23.md"),
 "S3": ("Christian Connection, UK App Store listing", "https://apps.apple.com/gb/app/id1158866595"),
 "S4": ("Christian Connection help: membership cost", "https://help.christianconnection.com/doc/membership-cost"),
 "S5": ("Christian Connection: about", "https://christianconnection.com/about"),
 "S6": ("AppGoblin: Christian Connection on Google Play (third-party data)", "https://appgoblin.info/apps/com.christianconnection.fishtank"),
 "S7": ("The Upcoming: best Christian dating apps in the UK (16 Oct 2025)", "https://www.theupcoming.co.uk/2025/10/16/best-christian-dating-apps-in-the-uk/"),
 "S8": ("SALT, App Store listing (shown in US$)", "https://apps.apple.com/app/id1276115488"),
 "S9": ("AppGoblin: SALT on Google Play (third-party data)", "https://appgoblin.info/apps/com.besalt.app"),
 "S10": ("Wikipedia: SALT (dating app)", "https://en.wikipedia.org/wiki/SALT_(dating_app)"),
 "S11": ("Christian Mingle, UK App Store listing (older app)", "https://itunes.apple.com/gb/app/christian-mingle-dating-app/id941317572?mt=8"),
 "S12": ("Christian Mingle, US App Store listing (newer app)", "https://apps.apple.com/us/app/-/id6746410808"),
 "S13": ("Christian Mingle: UK dating page", "https://www.christianmingle.com/en/believe/find/local/uk-dating"),
 "S14": ("Bloomberg Law: Christian Mingle, JDate owner brings German insolvency to US (31 Mar 2026)", "https://news.bloomberglaw.com/litigation/christian-mingle-jdate-owner-brings-german-insolvency-to-us"),
 "S15": ("DatingNews: Spark Networks German unit files for insolvency", "https://www.datingnews.com/apps-and-sites/spark-networks-german-unit-files-for-insolvency/"),
 "S16": ("DatingNews: EliteSingles is shutting down 30 April", "https://www.datingnews.com/apps-and-sites/elitesingles-is-shutting-down-april-30-users-given-days-notice-in-email/"),
 "S17": ("Upward, App Store listing (shown in US$)", "https://apps.apple.com/app/id1499137942"),
 "S18": ("Global Dating Insights: Upward relaunch (23 Sep 2026)", "https://www.globaldatinginsights.com/featured/upward-christian-dating-app-relaunch/"),
 "S19": ("DatingNews: courtship is making a comeback, says Match Group", "https://www.datingnews.com/apps-and-sites/courtship-is-making-a-comeback-says-match-group/"),
 "S20": ("CatholicMatch, App Store listing (shown in US$)", "https://apps.apple.com/app/id1438033563"),
 "S21": ("AppGoblin: CatholicMatch on Google Play (third-party data)", "https://appgoblin.info/apps/com.catholicmatch.app"),
 "S22": ("Higher Bond, US App Store listing", "https://apps.apple.com/us/app/id1665725303"),
 "S23": ("Ark, UK App Store listing", "https://apps.apple.com/gb/app/id1671028117"),
 "S24": ("Ark: about", "https://www.arkdating.app/about"),
 "S25": ("AppGoblin: Ark on Google Play (third-party data)", "https://appgoblin.info/apps/app.ark.dating"),
 "S26": ("Meet & Right (Orthodox), App Store listing (shown in US$)", "https://apps.apple.com/app/id1385072841"),
 "S27": ("ArkLove Orthodox Dating, US App Store listing", "https://apps.apple.com/us/app/id6761444471"),
 "S28": ("Muzz, UK App Store listing", "https://apps.apple.com/gb/app/id969997496"),
 "S29": ("Muzz help: how is Muzz halal?", "https://muzz.com/help/getting-started/how-is-muzz-halal"),
 "S30": ("Muzz help: voice and video calls", "https://muzz.com/help/muzz-101/how-do-voice-and-video-calls-work-on-muzz"),
 "S31": ("Wikipedia: Muzz (dating app)", "https://en.wikipedia.org/wiki/Muzz_(dating_app)"),
 "S32": ("Grand-Screen: Muzz on Google Play (third-party, page dated 10 Oct 2025)", "https://grand-screen.com/apps/muzz-where-muslims-marry/"),
 "S33": ("Jdate, App Store listing (shown in US$)", "https://apps.apple.com/ai/app/id484715536?l=en-gb"),
 "S34": ("Shaadi.com, UK App Store listing", "https://apps.apple.com/gb/app/id480093204"),
 "S35": ("Shaadi.com support: ID proof required", "https://support.shaadi.com/support/solutions/articles/48000962486-when-i-try-to-login-it-says-id-proof-required-what-do-i-do-"),
 "S36": ("ThePrint: parents no longer make matrimonial profiles (4 Sep 2022)", "https://theprint.in/feature/parents-no-longer-make-matrimonial-profiles-of-children-but-theres-a-north-south-divide/1109683"),
 "S37": ("Jeevansathi, App Store listing (shown in €)", "https://apps.apple.com/de/app/jeevansathi/id969994186?l=en"),
 "S38": ("Hinge, UK App Store listing", "https://apps.apple.com/gb/app/id595287172"),
 "S39": ("Biometric Update: Match Group extends Face Check to Hinge, UK age checks (5 Feb 2026)", "https://www.biometricupdate.com/202602/match-group-extends-facetec-liveness-to-hinge-adds-age-verification-for-uk-oz-users"),
 "S40": ("Grand-Screen: Hinge on Google Play (third-party, page dated 2025)", "https://grand-screen.com/apps/hinge-dating-app-match-date/"),
 "S41": ("Bumble, UK App Store listing", "https://apps.apple.com/gb/app/id930441707"),
 "S42": ("Tinder, UK App Store listing", "https://apps.apple.com/gb/app/tinder/id547702041?l=pl"),
 "S43": ("eharmony, UK App Store listing", "https://apps.apple.com/gb/app/eharmony/id458272450"),
 "S44": ("eharmony UK: Christian dating page", "https://www.eharmony.co.uk/christian-dating-1/"),
 "S45": ("Match, UK App Store listing", "https://apps.apple.com/gb/app/match-local-dating-app/id444823469"),
 "S46": ("TechCrunch: Ditto (6 Aug 2026)", "https://techcrunch.com/?p=3150667"),
 "S47": ("Lox Club, App Store listing (shown in €)", "https://apps.apple.com/es/app/lox-club/id1523344686?l=en-GB"),
 "S48": ("Global Dating Insights: Lox Club expands to London (9 Apr 2025)", "https://www.globaldatinginsights.com/featured/exclusive-jewish-dating-app-lox-club-expands-to-london/"),
 "S49": ("Evening Standard via Yahoo: Bond, London matchmaking (14 Mar 2023)", "https://uk.news.yahoo.com/bond-inside-london-elite-5k-155758459.html"),
 "S50": ("Trustpilot: Sara Eden Introductions", "https://www.trustpilot.com/review/www.sara-eden.co.uk"),
 "S51": ("DatingNews: Friends1st helps single Christians (undated)", "https://www.datingnews.com/apps-and-sites/friends1st-helps-single-christians-find-relationships/"),
 "S52": ("Christian Mingle matchmaking", "https://matchmaking.christianmingle.com"),
 "S53": ("BusinessCloud: Thursday dating app closes", "https://businesscloud.co.uk/news/heartache-for-dating-app-which-operated-one-day-a-week"),
 "S54": ("City AM: Thursday to shut app (9 Jan 2025)", "https://www.cityam.com/?p=2296926"),
 "S55": ("MacRumors: Apple updates App Store guidelines, 4.3(b) (9 Jun 2026)", "https://macrumors.com/2026/06/09/app-store-guidelines-low-quality-apps/"),
 "S56": ("Apple Developer Forums: community matrimonial app rejected under 4.3(b) (24 Sep 2026)", "https://developer.apple.com/forums/thread/848193"),
 "S57": ("Apple Developer Forums: niche dating app, 4.3(b) appeal upheld (18 Apr 2026)", "https://developer.apple.com/forums/thread/823323"),
 "S58": ("Ofcom: dating and social discovery, online safety risks and rules (18 May 2026)", "https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/dating-and-social-discovery-know-the-online-safety-risks-rules-and-how-to-comply"),
 "S59": ("Christian Century: religious dating apps aren't safer for women (8 Apr 2020)", "https://www.christiancentury.org/news/religious-dating-apps-aren-t-safer-women"),
}

NP = "not published"
NC = "not checked (no reachable source on 26 Nov 2026)"

COLS = [
 ("Group", 14), ("App", 20), ("Status on 26 Nov 2026", 30),
 ("Purpose: marriage or dating, and how plainly", 34),
 ("How matching works (questions or values; photos first?)", 42),
 ("Faith depth (church or denomination; belief checked?)", 34),
 ("Family or chaperone involvement", 32), ("ID verification", 28),
 ("Safety features (report, block, video calls, moderation)", 36),
 ("UK price (£) and automatic renewal", 36),
 ("Swiping, likes or gamification", 30), ("UK-only or global", 18),
 ("App Store rating", 20), ("Google Play rating", 24),
 ("Main complaints (reviews or press)", 38),
 ("What Covenant can learn", 38), ("What Covenant should avoid", 38),
 ("Sources", 16),
]

ROWS = [
 # ------------------------------------------------------------ Covenant
 ["Covenant (planned)", "Kingdom First Covenant (PLANNED, not built)",
  "Planned. Not released. Early set-up screens on test data only. Reviewers' timing: London waitlist after Easter 2027, closed beta summer 2027, UK launch about September 2027. [S1, S2]",
  "Marriage, not dating. To be said plainly everywhere: store listing, sign-up, profile and every introduction. [S1]",
  "Tier 1: answers to theological questions, including questions on marriage. Tier 2: photos only after both people say yes to the faith summary; both see them at the same moment; up to 3, no filters, first checked against the ID selfie. Up to 3 introductions a week, Thursday evening, never Sunday; one open conversation at a time. Words: 'introduction', never 'match'; no scores or percentages. [S1]",
  "Catholic, Orthodox, Anglican, Protestant and others; each person says which traditions they are open to. Marital history includes divorced and annulled, explained kindly. Belief is shown through answers; no check of church membership is planned in CLAUDE.md. [S1]",
  "A Companion for each person in every conversation (family member, friend, priest or pastor they invite). Companions pass the same ID check, read and write, can pause and report; cannot say yes or no, close an introduction or message anyone privately. No Companion present = conversation pauses. [S1]",
  "Planned: ID document plus live selfie for every member and every Companion (round 1: Stripe Identity, about £1.25 a check, paid by Covenant). [S1, S2]",
  "Planned: private 'I feel pressured, or I'm worried about my safety' line in every conversation, unseen by Companions, UK help numbers, same-day review; report, block and removal everywhere; text only with contact details filtered (round 1). No video calls planned. [S1, S2]",
  "Planned: free to join, verify, answer and see introductions. A season to say yes and talk, e.g. £59.99 for 6 months (example price). No automatic renewal. Companions never pay. No paying to be seen. [S1]",
  "None planned: no swiping, likes, streaks, read receipts or 'last active'. [S1]",
  "UK only at launch. [S1]",
  "Not applicable (not released)", "Not applicable (not released)",
  "Not applicable (not released). See risks in the summary.",
  "This row is the benchmark.", "This row is the benchmark.", "S1, S2"],

 # ------------------------------------------------------------ Christian
 ["Christian", "Christian Connection",
  "Running. UK site since 2000, small team in London. [S5] Android installs trend marked 'declining' by AppGoblin. [S6]",
  "Dating, said openly: 'The home of Christian Dating in the UK.' Does not say marriage is the aim, though it mentions marriage among outcomes. [S3, S5]",
  "Questions at sign-up and partner preferences, then 'Discover Christians nearby'. Filters beyond area are paid. Photo-led profiles. [S3]",
  "Christian only; denomination detail not stated on the listing. No belief check described. [S3]",
  "None described. [S3]",
  "'Every profile is checked and verified by our dedicated team.' Method not published. [S3]",
  "Search Visibility controls who can contact you; real-time chat; advice not to share contact details. Video calls not mentioned. [S3]",
  "In-app purchases £27.99 to £63.99 (periods not shown on listing); subscriptions renew automatically. Free members can search, wave, like and reply with preset answers only; free trial no longer offered. [S3, S4]",
  "Waves, likes, 'see who has liked you'. [S3]",
  "Global: UK, Ireland, US, Canada, Australia and others. [S5]",
  "4.2 from about 4,000 ratings (UK). [S3]",
  "3.48 from about 3,700 ratings (AppGoblin). [S6]",
  "Dated and slow; mostly older users; must pay to message even after a match. [S7]",
  "UK incumbent for 25 years with a serious, older audience, including many after divorce or widowhood: proof that this group wants a Christian space. [S5, S7]",
  "Paying just to reply to someone; automatic renewal; unclear price periods on the store listing. [S3, S4, S7]",
  "S3, S4, S5, S6, S7"],

 ["Christian", "SALT",
  "Running. Started in the UK; 'several million users in 50 countries'. [S10]",
  "Dating: 'meet, date, and develop relationships'. Marriage not mentioned by the company. [S8]",
  "Like (heart) or skip on profiles; photo-led. Also audio hangouts, social feed and in-person events. [S7, S8]",
  "Christian only; no belief check described. [S8]",
  "None described. [S8]",
  "Not described on the listing. [S8]",
  "18+ with age assurance; block and report (fixed in a recent update). Video calls not listed. [S8]",
  "UK £ prices not shown on the listing we could reach; in US$: weekly $13.99 to $19.99, monthly $28.99 to $41.99, yearly $139.99 to $199.99, plus paid 'Intros' and 'Highlight profile'. Subscriptions (App Store). [S8]",
  "Heart or skip (swipe-style); paid boosts and highlights. [S8]",
  "Global (50 countries). [S10]",
  "4.3 from 2,100 ratings (US listing). [S8]",
  "4.07 from about 16,000 ratings; about 1.7m installs (AppGoblin). [S9]",
  "Fewer people in rural areas. [S7] Pay-to-be-seen extras. [S8]",
  "A UK-born Christian app can reach millions; events and community features build trust and word of mouth. [S7, S10]",
  "Pay-to-be-seen (Highlight profile, paid Intros); swipe mechanics; vague purpose. [S8]",
  "S7, S8, S9, S10"],

 ["Christian", "Christian Mingle",
  "Running but at risk. Owner Spark Networks' German operator is in insolvency and sought US Chapter 15 recognition (31 Mar 2026); it aims to sell assets while trading. [S14, S15] Two app listings exist: an older UK one (copyright 2020) and a newer US one updated in 2026. [S11, S12]",
  "Dating: 'Christian singles looking for a God-centered relationship'. [S11]",
  "Personality assessment; up to 7 matches a day or search by distance and match percentage; like or 'smile'; messaging after a mutual like. Photos screened before matches. [S13]",
  "Denomination recorded (over 23 options), church attendance, and preferred denominations in a partner. No belief check. [S13]",
  "None in the app. A separate paid human matchmaking service exists; price and UK coverage not published. [S52]",
  "Newer app says it does not run background checks; a team removes fake profiles. [S11, S12]",
  "Fake-profile removal team; anonymous browsing for subscribers. [S11]",
  "UK listing: £22.99 to £94.99 (Basic and Premium; periods not shown). Subscriptions (App Store). [S11]",
  "Likes, smiles, match percentages. [S13]",
  "Global; larger in the US. [S7]",
  "UK listing: rating not shown. Newer US app: 3.6 from 663 ratings. [S11, S12]",
  NC,
  "Fake profiles, scammers and poor support. [S11] Older users and dated design; must pay to message. [S7]",
  "Recording denomination and 'open to' choices is normal and accepted by users. [S13] Owner's insolvency may leave UK Christian users looking for a new home. [S14]",
  "Match percentages; weak verification; depending on one owner's finances. [S12, S13, S14]",
  "S7, S11, S12, S13, S14, S15, S52"],

 ["Christian", "Upward",
  "Running. Match Group relaunched it in September 2026 around 'modern courtship'; users no longer need to identify as Christian; social tab removed. [S18]",
  "Says marriage more plainly than before: 'Bring back courtship and conviction', Marriage Timeline, 'move toward marriage together'. [S17, S19]",
  "Swipe right or left; mutual like = match; Core Values and Marriage Timeline on profiles; 'Chivalry Mode' (men make the first move). Photo-led. [S17]",
  "No longer Christian-only after the relaunch. [S18] No belief check described. [S17]",
  "None described. [S17]",
  "Not described on the listing. [S17]",
  "Not described on the listing; 18+ with age assurance. [S17]",
  "UK £ prices not shown on the listing we could reach; in US$: Elite $17.99 a week to $71.99 for 6 months; Super Likes. Subscriptions (App Store). [S17]",
  "Swiping, Super Likes, rewinds, boosts, 'see who liked you'. [S17]",
  "Global listing; UK availability of the relaunch not stated. [S18]",
  "4.3 from about 163,000 ratings (listing shown in US$). [S17]",
  NC,
  "Feels like a rebranded swipe app; faith not central. [S7]",
  "Shows that a big company now sees 'marriage-minded' as a market, so 'for marriage' alone is no longer a difference. [S18, S19]",
  "Swipe mechanics dressed in courtship words. [S7, S17]",
  "S7, S17, S18, S19"],

 ["Christian", "CatholicMatch",
  "Running. [S20]",
  "Marriage, very plainly: 'to help you find the person you'll marry'; 'built for sacramental marriage, not for dating to date'. [S20]",
  "Profile with faith questions ('do you believe these teachings' prompts) and a personality test; photo-led profiles. [S20]",
  "Catholic only; asks about Church teaching. Answers are self-declared. [S7, S20]",
  "None described. [S20]",
  "'Every profile and photo is reviewed by our team.' [S20]",
  "Security team removes suspected scam accounts. 18+. [S20]",
  "UK £ prices not shown on the listing we could reach; in US$: $29.99 a month, $89.99 for 6 months, $119.99 a year; renews automatically. [S20]",
  "Not described as swiping. [S20]",
  "Global; US-centred. [S7]",
  "3.9 from about 4,600 ratings (listing shown in US$). [S20]",
  "2.25 from about 1,900 ratings (AppGoblin). [S21]",
  "'Nearly dead or full of bots' (a reviewer). Outdated design, small pool, paywall to message. [S7, S20]",
  "Catholics will answer detailed faith questions, and a plain marriage purpose is credible. [S20]",
  "A small pool that feels empty; automatic renewal; paywall to message. [S7, S20]",
  "S7, S20, S21"],

 ["Christian", "Higher Bond",
  "Running (US-based seller). [S22]",
  "Relationships 'Christ-centered'; marriage not stated as the aim. [S22]",
  "Questions on faith, lifestyle and relationship goals, built with pastors and counsellors; 3 to 5 matches a day; guided first messages. Photo-led. [S22]",
  "Christian only; no belief check described. [S22]",
  "None described. [S22]",
  "'100% manual account and photo approval.' [S22]",
  "Manual approval; guided first messages. [S22]",
  "UK £ prices not shown on the listing we could reach; in US$: $24.99 a month to $71.90 for 6 months; lifetime $59.00. [S22]",
  "Positions itself against 'swiping endlessly'; free members one Like a day (a reviewer). [S22]",
  "UK availability not published. [S22]",
  "4.2 from 696 ratings (US). [S22]",
  NC,
  "Still small; 'more people in my area' wanted. [S22]",
  "A few curated matches a day and pastor input to the questions are selling points. [S22]",
  "A lifetime price lowers seriousness and income. [S22]",
  "S22"],

 ["Christian", "Ark",
  "Running. Listed in the UK App Store as 'Ark - UK Christian Dating App'; seller Ark Dating, Inc (US). [S23, S25]",
  "'Meaningful, faith-filled relationships'; marriage not stated as the aim. [S23, S24]",
  "Match on denomination, church attendance, marital history and family plans; matches expire if no message is sent. Photo-led. [S23]",
  "Records denomination and church attendance; 'Bible Verified with AI and human review' (method not published). [S23]",
  "None described. [S23]",
  "Profile review by AI and people; method not published. [S23, S24]",
  "AI tools and human moderation; reporting system. [S23, S24]",
  "£24.99 a month, £44.99 for 3 months, £59.99 for 6 months, £14.99 to £17.99 a week; boosts £7.99; paid 'Notes'. Renewal terms not published on the listing. [S23]",
  "Likes, boosts, paid notes, expiring matches. [S23]",
  "Global (English, Portuguese, Spanish). [S23]",
  "4.6 from 583 ratings (UK). [S23]",
  "4.26 from about 5,400 ratings (AppGoblin). [S25]",
  "'Time wasters' (a reviewer); not many people yet. [S23, S24]",
  "Marital history and family plans as matching fields are accepted. Its 6-month price is £59.99, the same as Covenant's example price. [S23]",
  "Expiry timers that pressure people; boosts and paid notes. [S23]",
  "S23, S24, S25"],

 ["Christian (Orthodox)", "Meet & Right",
  "Running; says it is under 'new management' with a rebuilt app planned. [S26]",
  "Orthodox Christian dating; mentions couples married 'through Christ'. [S26]",
  "Limited daily profiles (no unlimited swipes); mutual match then messaging. Photo-led. [S26]",
  "Orthodox only; jurisdiction not published; no belief check. [S26]",
  "None described. [S26]",
  "Selfie verification, including selfie video. [S26]",
  "Team reviews reported profiles; hides last name, exact location and email. [S26]",
  "UK £ prices not shown on the listing we could reach; in US$: $17.99 a month to $77.99 for 6 months; 'Crowns'; one-week free trial. [S26]",
  "Likes; crowns (paid currency). [S26]",
  "Global; UK availability not published. [S26]",
  "2.7 from 188 ratings (US). [S26]",
  NC,
  "Few profiles; premium cost; likes that expired. [S26]",
  "Orthodox singles look for their own space; selfie video check is cheap and expected. [S26]",
  "Paid currencies; too few people. [S26]",
  "S26"],

 ["Christian (Orthodox)", "ArkLove Orthodox Dating",
  "New in 2026 (version 1.0 dated 17 Apr; rating recently reset). [S27]",
  "'Marriage-Minded Dating' for 'adults seeking marriage, family'; 'not endless swiping or casual dating'. [S27]",
  "Likes, passes and mutual matches; filters for church, language and age. Photo-led. [S27]",
  "Church filter; jurisdiction not published; advises seeking a priest's guidance. [S27]",
  "None; advises guidance from a priest or pastor. [S27]",
  "Verification badge; option to talk only to verified users. [S27]",
  "Scam reports investigated; never send money advice. [S27]",
  "UK £ prices not shown on the listing we could reach; in US$: Plus $19.99, Gold $29.99 a month; boosts. [S27]",
  "Likes, boosts, 'unmatch'. [S27]",
  "Global; UK availability not published. [S27]",
  "Rating recently reset; not shown. [S27]",
  NC,
  "'2 of 3 were catfishes … asking for money' (a reviewer). [S27]",
  "Inviting a priest's guidance is welcomed in Orthodox settings. [S27]",
  "Launching without strong ID checks: romance scams arrive at once. [S27, S58]",
  "S27, S58"],

 # ------------------------------------------------------------ other faith
 ["Other faith", "Muzz",
  "Running. London company (formerly Muzmatch), founded 2015; over 21m members (2026). [S31]",
  "Marriage, plainly: 'Where Muslims Marry', 'Halal dating for marriage'. [S28]",
  "Like or pass; mutual like opens free chat. Members rate matches for politeness and seriousness, which affects how often people are shown. Photos can be private until the person chooses to share. [S28, S29]",
  "Muslim only; joining oath on conduct; no belief check. [S29]",
  "Optional 'Chaperone Mode': weekly chat transcripts shared with a wali. [S29]",
  "Selfie for everyone; optional ID check for a blue badge. [S28, S29]",
  "Screenshots blocked; photo privacy; free voice and video calls inside the app, switched on by the user; support team. [S28, S30]",
  "Gold £14.99 to £34.99; Premium £19.99; compliments and boosts £4.99. Subscriptions (App Store). [S28]",
  "Likes, compliments, boosts. [S28]",
  "Global; UK-based. [S31]",
  "4.4 from about 40,000 ratings (UK). [S28]",
  "4.2 from about 260,000 reviews (Grand-Screen, Oct 2025). [S32]",
  "Most photos blurred (a reviewer). Mixed views on privacy and moderation. [S28, S31]",
  "A UK marriage app with family involvement grew huge. Oath on joining, photo privacy, screenshot block and in-app calls are all worth copying in spirit. [S28, S29, S31]",
  "Chaperone as an optional weekly transcript (too weak for our promise); ratings of people that affect who is shown; paid boosts. [S28, S29]",
  "S28, S29, S30, S31, S32"],

 ["Other faith", "Jdate",
  "Running but at risk (same owner as Christian Mingle, in insolvency). [S14]",
  "Dating: 'the leading Jewish dating site'. [S33]",
  "Location and preferences; interests and personality. Photo-led. [S33]",
  "Jewish only; no belief check. [S33]",
  "None described. [S33]",
  "Not described. [S33]",
  "Anonymous browsing for subscribers; 18+. [S33]",
  "UK £ prices not shown on the listing we could reach; in US$: Premium $74.90 to $155.99; 'Spotlight' $1.99 to $14.99. [S33]",
  "'Spotlight' paid visibility. [S33]",
  "Global. [S33]",
  "Not shown on the listing we could reach. [S33]",
  NC,
  NP,
  "Faith-only services can last for decades, but brand strength depends on the owner. [S14]",
  "Paid visibility ('Spotlight'). [S33]",
  "S14, S33"],

 ["Other faith", "Shaadi.com",
  "Running. [S34]",
  "Marriage, plainly: 'Find your perfect bride or groom'. [S34]",
  "Matchmaking profiles and search; photo-led. [S34]",
  "Community, not faith-specific; no belief check. [S34]",
  "Families often create the profile: about 25–30% of accounts in north India and 45–50% in south India (company data, 2022). [S36]",
  "'Government ID verified profiles'; ID proof (passport, driving licence and others) asked for at login. [S34, S35]",
  "Voice and video calls without revealing numbers; privacy controls. [S34]",
  "3 months Gold £69.99; 6 months Diamond £99.99; 12 months Platinum+ £169.99. Subscriptions (App Store). [S34]",
  "Not described as swiping. [S34]",
  "Global. [S34]",
  "4.2 from about 8,200 ratings (UK). [S34]",
  NC,
  "Fake or inactive profiles; refused refunds. [S34]",
  "Season-length prices (3, 6, 12 months) are normal for marriage services. Government ID checks are accepted. [S34, S35]",
  "Letting someone else create or run a person's profile (consent and pressure risk); refund disputes. [S34, S36]",
  "S34, S35, S36"],

 ["Other faith", "Jeevansathi",
  "Running (Info Edge, India). [S37]",
  "Marriage: 'serious about marriage'. [S37]",
  "Matchmaking profiles; online matchmaking events; photo-led. [S37]",
  "Community and family framing ('Shaadi in India is about families'); no belief check. [S37]",
  "Framed around families; whether parents can create profiles is not stated on the listing. [S37]",
  "Selfie verification. [S37]",
  "Block and report; paid members can see phone numbers and emails. [S37]",
  "UK £ prices not shown on the listing we could reach; in €: €59 to €249 (plans not clearly mapped). [S37]",
  "'Spotlight', 'Super Interest'. [S37]",
  "Global. [S37]",
  "4.3 from 134 ratings (German store). [S37]",
  NC,
  "Fake profiles; men stopped replying once parents were involved (a reviewer). [S37]",
  "Events can complement introductions. [S37]",
  "Selling access to phone numbers and emails. [S37]",
  "S37"],

 # ------------------------------------------------------------ mainstream
 ["Mainstream", "Hinge",
  "Running (Match Group). [S38]",
  "Dating; 'designed to be deleted'. Dating intentions shown on profiles. [S38]",
  "Like or comment on a specific prompt or photo; learns 'your type'; asks how the date went. Photos and prompts shown together. [S38]",
  "Religion is a profile field; no belief check. [S38]",
  "None. [S38]",
  "Face Check liveness for all users worldwide and facial age estimation in the UK (Feb 2026). [S39]",
  "Selfie verification; safety tools. Video calls not mentioned on the listing. [S38, S39]",
  "Hinge+ about £12.99 to £14.99; other subscriptions to £29.49; roses £9.99 for 3; boost £9.99. Subscriptions (App Store). [S38]",
  "Likes, roses, boosts, 'priority likes'. [S38]",
  "Global. [S38]",
  "4.3 from about 200,000 ratings (UK). [S38]",
  "3.5 from about 389,000 reviews (Grand-Screen, 2025). [S40]",
  "Non-paying users feel unseen (a reviewer). [S38]",
  "Where most UK Christians already are. Prompts that start a conversation about something specific work well. [S38]",
  "Learning 'your type' from looks; paid priority. [S38]",
  "S38, S39, S40"],

 ["Mainstream", "Bumble",
  "Running. [S41]",
  "Dating. [S41]",
  "Swipe; women make the first move; match disappears if no chat within 24 hours. Photo-led. [S41]",
  "No faith focus. [S41]",
  "None; share meet-up details with someone you trust. [S41]",
  "ID verification offered. [S41]",
  "Video chat; meet-up sharing; community guidelines. [S41]",
  "Premium £13.99 to £16.99; 7-day Premium £9.99 to £24.99; Boost £2.49 to £10.99; coins. Subscriptions (App Store). [S41]",
  "Swiping, boosts, coins, 24-hour timers. [S41]",
  "Global. [S41]",
  "4.2 from about 277,000 ratings (UK). [S41]",
  NC,
  NP,
  "'Share my plans with someone I trust' is a light safety step people understand. [S41]",
  "Timers that create pressure. [S41]",
  "S41"],

 ["Mainstream", "Tinder",
  "Running (Match Group). [S42]",
  "Dating and meeting people. [S42]",
  "Send likes, match and chat; photo-led. [S42]",
  "No faith focus. [S42]",
  "None; tell a friend when you're meeting someone. [S42]",
  "'Multiple ways to verify profiles'; mandatory face liveness for US users from Oct 2025. [S39, S42]",
  "Chat safety tools; friend notification. Video chat not mentioned. [S42]",
  "Plus £3.99; Gold £7.49 to £14.99; boosts £3.99 to £9.99; 5 Super Likes £4.99. Subscriptions (App Store). [S42]",
  "Swiping, Super Likes, boosts. [S42]",
  "Global. [S42]",
  "4.2 from about 276,000 ratings (UK). [S42]",
  NC,
  NP,
  "Very little; it is the opposite of Covenant.",
  "Everything that rewards looks and speed. [S42]",
  "S39, S42"],

 ["Mainstream", "eharmony",
  "Running. [S43]",
  "Long-term relationships: 'a meaningful, lasting relationship'. Marriage not stated. [S43]",
  "Compatibility Quiz and matching score; photos blurred until you pay (reviewers). [S43]",
  "Can filter for Christian singles; no denomination field or belief check described. [S44]",
  "None. [S43]",
  "Not described; profiles must be at least 50% complete. [S43]",
  "Trust and Safety team. Video dates not mentioned. [S43]",
  "Basic £44.99 to £104.99; Premium Light £109.99 to £289.99; Premium Plus £149.99 to £349.99 (periods not shown). Subscriptions (App Store). [S43]",
  "Matching scores. [S43]",
  "Global. [S43]",
  "3.8 from about 5,600 ratings (UK). [S43]",
  NC,
  "Subscription terms, cancellation and refunds; paywalls. [S43]",
  "UK adults pay over £100 for serious, question-led matching. [S43]",
  "Scores on people; blur-until-you-pay; hard-to-cancel subscriptions. [S43]",
  "S43, S44"],

 ["Mainstream", "Match",
  "Running. [S45]",
  "'Lasting relationships'. Marriage not stated. [S45]",
  "Filters for location, interests, lifestyle and values; suggestions 'based on compatibility'. Photo-led. [S45]",
  "Values filters; no belief check. [S45]",
  "None. [S45]",
  "Not described; profiles 'moderated'. [S45]",
  "'Dedicated safety tools'; safety advice page. [S45]",
  "Premium £19.99 a week or £39.99 a month; other items £4.99 to £59.99. Subscriptions (App Store). [S45]",
  "Not described as swiping. [S45]",
  "Global. [S45]",
  "3.8 from about 41,000 ratings (UK). [S45]",
  NC,
  "Outages, sync problems, slow support. [S45]",
  "Even large brands lose trust through poor support. [S45]",
  "Weekly pricing that rewards staying single. [S45]",
  "S45"],

 # ------------------------------------------------------------ intentional
 ["Intentional", "Ditto",
  "Running, but only at a few dozen US colleges; not in the UK. [S46]",
  "Dates for students. [S46]",
  "An AI chat asks about personality; one match a week, every Wednesday at 7pm, with a set time and place; no swiping and no messages. [S46]",
  "No faith focus. [S46]",
  "None. [S46]",
  "Student email check. [S46]",
  "Not described. [S46]",
  "Not published. [S46]",
  "None. [S46]",
  "US colleges only. [S46]",
  NC, NC,
  NP,
  "A weekly drop at a fixed time can work: about 150,000 sign-ups and about 20% of matches go on a date (company figures). [S46]",
  "Letting software arrange real meetings without people checking. [S46]",
  "S46"],

 ["Intentional", "Lox Club",
  "Running; came to London in April 2025. [S48]",
  "Dating, friends and events for Jewish singles. [S47]",
  "Every application hand-reviewed; in-house matchmakers; events. Photo-led. [S47, S48]",
  "Cultural, not belief-based; open to anyone who appreciates its style. [S48]",
  "None. [S47]",
  "Hand review of applications, career and social media. [S47, S48]",
  "Hand review; events. [S47]",
  "UK £ prices not shown on the listing we could reach; in €: €22.99 to €149.99; 'Skip the wait' €5.99. [S47]",
  "Paid 'skip the wait'. [S47]",
  "Global; London since 2025. [S48]",
  "5.0 from 5 ratings (Spanish store). [S47]",
  NC,
  "Called elitist at its London launch (press headline). [S48]",
  "A waitlist and hand review make people value getting in. [S47, S48]",
  "Paying to skip the waitlist; exclusivity by status. [S47]",
  "S47, S48"],

 ["Intentional", "UK human matchmakers (e.g. Bond, Sara Eden; Christian: Friends1st)",
  "Running (Bond, Sara Eden). Friends1st's current status not confirmed. [S49, S50, S51]",
  "Serious relationships; marriage stories common. [S49, S50]",
  "People, not algorithms: questionnaire and interview, then a few hand-picked introductions. [S49]",
  "Friends1st is for Christians; others not faith-based. [S51]",
  "None; staff call members after dates (Bond). [S49]",
  "Interview and vetting; Friends1st mentions identity verification. [S49, S51]",
  "Staff follow-up; vetting. [S49]",
  "Bond £5,000 early-bird for 5 introductions, £10,000 standard (2023). Sara Eden £6,100 and about £3,000 to £7,000 (reviewers). One-off fees. [S49, S50]",
  "None. [S49]",
  "UK (London-led). [S49]",
  "Not applicable", "Not applicable",
  "Sara Eden: 1.9 on Trustpilot from 33 reviews; refunds, fewer introductions than promised, too few men. [S50]",
  "People pay a lot for vetted, serious introductions with a human touch. [S49]",
  "Promising a number of introductions you can't deliver; too few men. [S50]",
  "S49, S50, S51"],

 ["Intentional (closed)", "Thursday",
  "CLOSED. London app that opened only on Thursdays; shut its app in January 2025 and moved to events. [S53, S54]",
  "Dating. [S53]",
  "Open one day a week to fight 'dating fatigue'. [S53]",
  "No faith focus. [S53]",
  "None. [S53]",
  NP,
  NP,
  "Not applicable (closed).",
  "Swipe-style, on one day a week. [S53]",
  "UK first, then abroad. [S53]",
  "Not applicable (closed)", "Not applicable (closed)",
  "'Rapidly declining consumer interest' in dating apps (co-founder). 2m lifetime users and over 100 known marriages. [S54]",
  "Its own founders say meeting in person matters more; pair introductions with real church life. [S53, S54]",
  "Relying on a fixed weekday as the main difference: it was not enough. [S53, S54]",
  "S53, S54"],
]

GAPS_A = [  # what Covenant plans that no app we checked does
 ("A Companion for each person in every conversation, compulsory; no one-to-one chat ever", "None. Muzz's Chaperone Mode is optional weekly transcripts to a wali. [S29]", "Covenant's clearest true difference. Also its biggest friction: no Companion, no conversation.", "Must keep; explain it kindly at sign-up and in Apple review notes"),
 ("Companions pass the same ID check as members", "None found. [S29]", "Strong scam and safeguarding defence (Ofcom: 29% of adult internet users have met romance or dating scams). [S58]", "Must keep"),
 ("Photos only after both say yes to the faith summary, shown to both at once", "Partly: Muzz lets women keep photos private and reveal them per match. [S29] Everyone else is photo-led.", "Real difference in order: faith first, then faces.", "Must keep"),
 ("Season price with no automatic renewal", "None found among app subscriptions. Human matchmakers charge one-off fees, but £3,000 to £10,000. [S49, S50]", "Answers the most common paid-app complaint (renewals and refunds). [S43, S34]", "Must keep"),
 ("Private 'I feel pressured, or I'm worried about my safety' line unseen by Companions", "None found.", "Needed because family involvement can itself be a source of pressure, and faith apps can give a 'false sense of security' (a church-app user, in the press). [S59]", "Must keep"),
 ("Marital history including annulment, explained per tradition, with 'open to' choices", "Partly: Ark matches on marital history; Christian Mingle records preferred denominations. [S23, S13]", "Kind wording for divorced, widowed and annulled people is rare.", "Must keep"),
 ("No paying to be seen, no boosts, no likes, no 'last active'", "Few: Higher Bond limits likes, but sells premium. [S22] Nearly all others sell boosts or highlights.", "Clear and easy to say.", "Must keep"),
 ("Never on Sunday", "None found.", "Fits the brand; costs little.", "Should keep"),
]
GAPS_B = [  # what others do that Covenant lacks
 ("In-app voice or video calls without sharing numbers", "Muzz (free, switched on by the user), Shaadi.com, Bumble. [S30, S34, S41]", "Couples will want to see and hear each other before meeting. A Companion-present video call would need a safeguarding design.", "Should decide before beta"),
 ("Events and real-world meeting", "SALT, Christian Connection, Lox Club, Jeevansathi. [S7, S5, S48, S37]", "Thursday's closure suggests in-person matters most. Church-hosted events fit Covenant's 'with your church' spirit.", "Should plan for the waitlist phase"),
 ("Human matchmaker help", "Lox Club, Christian Mingle matchmaking, Bond. [S47, S52, S49]", "Could help the cold start: a person reviews the first introductions in each area.", "Could"),
 ("A large existing community", "Muzz 21m+, SALT several million, Christian Connection since 2000. [S31, S10, S5]", "The cold-start risk: too few people per area and tradition.", "Must plan (area-by-area opening, waitlist thresholds)"),
 ("Screenshot blocking", "Muzz. [S28]", "Protects photos once shared.", "Should"),
 ("A joining pledge or oath on conduct", "Muzz (Islamic Oath). [S29]", "A short covenant pledge on joining fits the name; pastoral reviewer to word it.", "Should"),
 ("Manual or AI-plus-human review of every profile", "Higher Bond, CatholicMatch, Ark. [S22, S20, S23]", "Covenant plans ID checks; profile text and photos still need review.", "Must"),
 ("Share my plans with someone I trust", "Tinder, Bumble. [S42, S41]", "The Companion already knows; a 'first meeting plan' note shared with the Companion would be natural.", "Could"),
 ("Free conversation after a mutual yes", "Muzz, SALT (free chat after a match). [S28, S8]", "Covenant needs a season to say yes and talk; people compare with free chat. Explain what the season pays for.", "Must explain clearly"),
 ("Government ID checks already normal", "Shaadi.com; Hinge Face Check in the UK from Feb 2026. [S35, S39]", "ID checks are no longer a difference on their own; they are the baseline.", "Note"),
]
CHANGES = [
 ("Spark Networks (Christian Mingle, Jdate, Zoosk) in insolvency; US Chapter 15 filing", "31 Mar 2026", "[S14, S15]"),
 ("EliteSingles closing on 30 April, users given two days' notice (year not stated in the article; reported alongside the Spark insolvency)", "30 Apr", "[S16]"),
 ("Thursday (London, one day a week) shut its app and moved to events", "Jan 2025", "[S53, S54]"),
 ("Upward relaunched by Match Group as 'modern courtship'; no longer Christian-only", "Sep 2026", "[S18]"),
 ("Apple tightened guideline 4.3(b): dating named as saturated; may remove stale apps", "9 Jun 2026", "[S55]"),
 ("Hinge: Face Check for all users, facial age estimation in the UK", "Feb 2026", "[S39]"),
 ("Muzmatch renamed Muzz after a court case with Match Group", "2022", "[S31]"),
 ("'Faithful' Christian dating app named in the brief: no live app of that name found on 26 Nov 2026", "26 Nov 2026", "search only; not listed"),
]

# ---------------------------------------------------------------- workbook
F = "Arial"
hdr_font = Font(name=F, bold=True, color="F3EEE4", size=10)
hdr_fill = PatternFill("solid", fgColor="19203A")
body = Font(name=F, size=10)
bold = Font(name=F, size=10, bold=True)
cov_fill = PatternFill("solid", fgColor="F3F0EA")
closed_fill = PatternFill("solid", fgColor="ECE7DF")
thin = Side(style="thin", color="E4DDEB")
border = Border(left=thin, right=thin, top=thin, bottom=thin)
wrap = Alignment(wrap_text=True, vertical="top")

def header(ws, names_widths, row=1):
    for i, (n, w) in enumerate(names_widths, 1):
        c = ws.cell(row=row, column=i, value=n)
        c.font, c.fill, c.alignment, c.border = hdr_font, hdr_fill, wrap, border
        ws.column_dimensions[get_column_letter(i)].width = w
    ws.row_dimensions[row].height = 45

wb = Workbook()
ws = wb.active
ws.title = "Apps"
header(ws, COLS)
for r, row in enumerate(ROWS, 2):
    assert len(row) == len(COLS), (row[1], len(row))
    for c, v in enumerate(row, 1):
        cell = ws.cell(row=r, column=c, value=v)
        cell.font = bold if c == 2 else body
        cell.alignment, cell.border = wrap, border
        if r == 2:
            cell.fill = cov_fill
        elif "closed" in row[0]:
            cell.fill = closed_fill
ws.freeze_panes = "C2"
ws.auto_filter.ref = f"A1:{get_column_letter(len(COLS))}{len(ROWS)+1}"
note_r = len(ROWS) + 3
ws.cell(row=note_r, column=1, value=(
    f"Checked {CHECKED}. Numbers in [brackets] are source IDs on the Sources sheet. "
    "Prices are from store listings; where the UK listing could not be reached, the listing's own currency is shown and nothing is converted. "
    "AppGoblin and Grand-Screen are third-party trackers of Google Play, not Google itself. "
    "'Not published' = the company does not say. 'Not checked' = we could not reach a source on 26 Nov 2026. "
    "Kingdom First Covenant is planned, not built; its row claims only what CLAUDE.md records.")).font = Font(name=F, size=9, italic=True)
ws.merge_cells(start_row=note_r, start_column=1, end_row=note_r, end_column=10)
ws.cell(row=note_r, column=1).alignment = wrap
ws.row_dimensions[note_r].height = 60

# Gaps
g = wb.create_sheet("Gaps")
gcols = [("What", 48), ("Who else does it", 52), ("Why it matters for Covenant", 60), ("Priority", 30)]
r = 1
def section(title):
    global r
    c = g.cell(row=r, column=1, value=title)
    c.font = Font(name=F, size=12, bold=True, color="2A1840")
    r += 1
section("A. What Covenant plans that no app we checked does in full")
header(g, gcols, r); r += 1
first_hdr = r - 1
for row in GAPS_A:
    for i, v in enumerate(row, 1):
        c = g.cell(row=r, column=i, value=v); c.font, c.alignment, c.border = body, wrap, border
    r += 1
r += 1
section("B. What other apps do that Covenant lacks or has not decided")
header(g, gcols, r); r += 1
for row in GAPS_B:
    for i, v in enumerate(row, 1):
        c = g.cell(row=r, column=i, value=v); c.font, c.alignment, c.border = body, wrap, border
    r += 1
r += 1
section("C. Closures, mergers and market changes")
header(g, [("Change", 48), ("When", 52), ("Source", 60), ("", 30)], r); r += 1
for row in CHANGES:
    for i, v in enumerate(row, 1):
        c = g.cell(row=r, column=i, value=v); c.font, c.alignment, c.border = body, wrap, border
    r += 1
g.freeze_panes = g.cell(row=first_hdr + 1, column=1)

# Sources
s = wb.create_sheet("Sources")
header(s, [("ID", 7), ("Source", 70), ("URL or file", 95), ("Date checked", 16)])
def sk(k): return int(k[1:])
for i, k in enumerate(sorted(S, key=sk), 2):
    name, url = S[k]
    vals = [k, name, url, CHECKED]
    for j, v in enumerate(vals, 1):
        c = s.cell(row=i, column=j, value=v); c.font, c.alignment, c.border = body, wrap, border
    if url.startswith("http"):
        s.cell(row=i, column=3).hyperlink = url
        s.cell(row=i, column=3).font = Font(name=F, size=10, color="3F2163", underline="single")
s.freeze_panes = "A2"

# check every cited ID exists
import re
cited = set()
for row in ROWS:
    for v in row:
        cited |= set(re.findall(r"S\d+", str(v)))
for blk in (GAPS_A, GAPS_B, CHANGES):
    for row in blk:
        for v in row:
            cited |= set(re.findall(r"S\d+", str(v)))
missing = cited - set(S)
unused = set(S) - cited
assert not missing, missing
print("rows", len(ROWS), "sources", len(S), "unused", sorted(unused, key=sk))
wb.save(OUT)
print("saved", OUT)
