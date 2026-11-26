# How people come to marry: Scripture, the traditions, and Kingdom First Covenant

Pastoral reviewer, 26 Nov 2026. Asked by the owner: "check how marriage is supposed to work from a biblical perspective, i.e. how do people get introduced". Part A is the study of Scripture, Part B covers the traditions today, and Part C checks Covenant against both. Part D gives draft wording.

**Marks.** **V** means verified today against the source linked. **K** means from knowledge: a priest, minister, canonist or the solicitor checks it before it goes on screen. Every Scripture quotation is BSB, checked word for word today against `kingdom-first-life-app/www/bible/bsb`. Nothing here is legal or canonical advice. I read the set-up screens in `app/*.tsx` and the prototype; I did not edit them.

---

## Summary

1. **Scripture describes many ways of being introduced, and commands none.** God brings the woman to the man (Genesis 2:22). A servant and a family arrange a marriage, then ask the woman (Genesis 24). A mother-in-law gives counsel, and the town's elders are witnesses (Ruth 3–4). The constants are these: the couple's free yes, a public covenant before God, the community close by, and sexual holiness. Nothing in Scripture forbids an introduction service, and nothing requires one. **(finding)**
2. **Consent is the one thing every source agrees on:** Rebekah's "I will go" (Genesis 24:58), the Catechism ("No human power can substitute for this consent"), the Orthodox Council of Crete ("freely entered"), the Church of England's declarations, and UK law. **Must:** at every step (yes, photos, meeting, engagement), the member decides alone, on their own phone, and no companion, parent or priest can act for them. Most of this is already in the design. Keep it.
3. **Must:** call the Companion what it is, a wise practice and not a command. Never write "biblical chaperoning" or "Scripture requires…". Use the "Why a companion?" line in D1, which quotes Proverbs 15:22.
4. **Must:** fix the faith screen line "The teaching of all the churches in this app." It is no longer true. The Methodist Church (2021), the Scottish Episcopal Church (2017), the Church of Scotland (2022) and the Quakers now marry same-sex couples, and all four are on the church list. Replacement wording is in C1.
5. **Must:** the "Read what my church teaches" fold in `app/open.tsx` shows the Eastern Orthodox *economia* text to Coptic, Ethiopian, Eritrean, Armenian, Syriac and Malankara members, because the regex matches "Orthodox" and "Armenian". Restore the separate Oriental Orthodox text from round 1. The Anglican text also needs its Church in Wales, Scottish Episcopal and Church of Ireland line. Details in C5.
6. **Must:** engagement must not switch the safeguards off. Today, both accounts close at "We're engaged". Engagement is when family pressure and forced-marriage risk are often highest. Keep Help and "Talk to us privately" for at least 6 months after an engagement, and offer a kind way back if an engagement ends. Wording in D5.
7. **Must:** the forced-marriage route follows the UK statutory guidance. Staff never contact, mediate with or tell the family. A companion never learns that a report was made. The pressure sheet gets a clear option: "My family or someone else is pushing me to marry". Details in C7.
8. **Must:** never apply 2 Corinthians 6:14 ("unequally yoked") to marriage between Christians of different traditions. Never present Proverbs 31 or Ephesians 5 as a checklist, a filter or a profile label. Never show any line that promises a spouse ("God has someone for you", Jeremiah 29:11, Psalm 37:4, Psalm 68:6).
9. **Should:** add to the companion promise "I won't tell either of them what God wants them to decide." Add a member-facing line that no companion can decide for them. Spiritual abuse by a trusted companion is the risk that is hardest to see. Wording in D2.
10. **Should:** replace Matthew 1:19 ("…he resolved to divorce her quietly") on the closing screen with Colossians 4:6. Divorced members will read "divorce" at the moment of ending an introduction. Wording in D4.
11. **Should:** don't offer caste, ethnicity or "community" filters, even where families ask for them (South Asian, Middle Eastern and some African diaspora churches). Language and culture questions are enough. The solicitor needs to check caste under the Equality Act.
12. **Could:** add a hardship season, so that saying yes never depends on money. Pause introductions in Holy Week, since Maundy Thursday and Orthodox Great and Holy Thursday fall on a Thursday evening. Add an optional line for Orthodox, Catholic and other couples about how their church marks an engagement (betrothal, a blessing).

---

## Part A. How people come to marry, in Scripture

For each passage: what it **describes** (what happened) and what it **prescribes** (what it asks of believers). Much of Scripture on marriage is narrative from a very different world: bride-price, levirate law, polygamy and women given by fathers. Narrative shows us God at work. It doesn't make every custom a rule.

### A1. Genesis 2:18–25: the first marriage

> "…It is not good for the man to be alone. I will make for him a suitable helper." (2:18)
> "And from the rib that the LORD God had taken from the man, He made a woman and brought her to him." (2:22)
> "For this reason a man will leave his father and mother and be united to his wife, and they will become one flesh." (2:24)

- **Describes:** loneliness is the first thing God calls "not good". God, not the man, makes the introduction ("brought her to him"). The man responds with joy (2:23). "Helper" (*'ezer*) is used elsewhere of God Himself ("He is our help and our shield", Psalm 33:20). It means a partner who matches him, not someone lower than him.
- **Prescribes:** Jesus treats 2:24 as the pattern for marriage (Matthew 19:5). A new household is formed. The man "leaves" father and mother, so the parents' authority over the couple ends at marriage.
- **For Covenant:** this is the deepest answer to "how do people get introduced": God is the One who brings people together. It doesn't allow the app, a companion or anyone else to claim, "God brought this person to you." "Not good to be alone" is about human companionship, which is met by friendship and the church as well as by marriage (Ecclesiastes 4:9–10). It is never a verdict on single people.

### A2. Genesis 24: Rebekah

- **Describes:** Abraham sends his servant to find a wife for Isaac among his own kin, not from the Canaanites (24:3–4). The servant prays for a sign (24:12–14). The sign tests character: a woman who offers to water ten camels is generous and hard-working. Rebekah's father and brother answer, "This is from the LORD; we have no choice in the matter" (24:50). Then the family says, "We will call the girl and ask her opinion" (24:57):
  > "They called Rebekah and asked her, 'Will you go with this man?' 'I will go,' she replied." (24:58)

  Isaac is meditating in the field when she arrives (24:63). The chapter ends with love after the wedding: "And Isaac loved her and was comforted after his mother's death." (24:67)
- **An honest note on 24:57–58.** Scholars differ on whether Rebekah is asked about the marriage itself or only about leaving now rather than in "ten days or so" (24:55). Either way, the narrative stops to ask the woman and records her own words. In a culture where fathers gave daughters, that matters.
- **Prescribes:** nothing directly about method. The principles it carries: marry within the faith (the reason for 24:3–4), pray, look for character rather than looks, involve family, and ask the person herself.
- **For Covenant:** this is the best biblical model for an introduction app: a trusted go-between, prayer, character before appearance, family involved, and the person's own yes. It must **not** be used to teach sign-seeking ("ask God for a sign that this is the one"). The servant's prayer describes one man's faith on one journey. It is not a method of discernment.

### A3. Genesis 29: Jacob, Rachel and Leah

> "So Jacob served seven years for Rachel, yet it seemed but a few days because of his love for her." (29:20)

- **Describes:** love at first sight, a long and costly wait, and then a father's deception. Laban substitutes Leah (29:25–26), and polygamy follows, with years of rivalry and pain between the sisters (chapters 29–30).
- **Prescribes:** nothing as a model. It is a warning story. When family control replaces honesty and the couple's consent, people are deeply hurt, Leah most of all.
- **For Covenant:** family involvement is good only when it is honest. It is a strong case for the rule that no one but the member speaks or decides for them. Laban "managed" the match.

### A4. Ruth 2–4: Naomi, Boaz and the elders

- **Describes:**
  - Naomi, a widowed mother-in-law, gives counsel: "My daughter, should I not seek a resting place for you, that it may be well with you?" (3:1). She proposes a bold plan.
  - Ruth takes the initiative: "Spread the corner of your garment over me, for you are a kinsman-redeemer." (3:9)
  - Boaz guards her reputation: "Do not let it be known that a woman came to the threshing floor." (3:14) He then settles the matter publicly, at the town gate, before ten elders (4:1–2): "You are witnesses today." (4:10) "We are witnesses," said the elders and all the people… (4:11)
  - Boaz praises Ruth's character with the same phrase as Proverbs 31:10: "all my fellow townspeople know that you are a woman of noble character." (3:11)
- **Prescribes:** the levirate and redeemer laws belong to Israel's land law, not to us. The lasting principles are an older person's wise counsel, initiative that is honourable on both sides, care for the other's reputation, and marriage settled openly before witnesses.
- **For Covenant:** Ruth is a widowed foreigner, so she is a strong text for widowed, older and migrant members. The threshing-floor scene is not a model for how to meet. "Waiting for your Boaz" stays on the banned list (round 1, §1).

### A5. The Song of Songs: desire, timing and friends

> "O daughters of Jerusalem, I adjure you by the gazelles and does of the field: Do not arouse or awaken love until the time is right." (2:7; also 3:5 and 8:4)
> "Mighty waters cannot quench love; rivers cannot sweep it away…" (8:7)
> "But my own vineyard is mine to give…" (8:12)

- **Describes:** mutual desire, spoken more often by the woman than the man ("My beloved is mine and I am his…", 2:16). Friends ("daughters of Jerusalem") are drawn in as witnesses and counsellors. Brothers are both protective (8:8–9) and controlling ("My mother's sons were angry with me…", 1:6).
- **Prescribes:** the refrain is a charge. Don't stir up love before its time. It is about readiness and timing. It doesn't forbid looking for marriage. Desire is good and belongs within marriage.
- **For Covenant:** this supports the slow pace. It also supports the woman's own voice ("mine to give"): family protection is good, family control is not. The prototype already uses 2:7 on "Where are you?". Keep it there, never as pressure to slow down someone who is ready.

### A6. Proverbs 18:22, 19:14 and 31

> "He who finds a wife finds a good thing and obtains favor from the LORD." (18:22)
> "Houses and wealth are inherited from fathers, but a prudent wife is from the LORD." (19:14)
> "A wife of noble character, who can find? She is far more precious than rubies." (31:10)
> "Charm is deceptive and beauty is fleeting, but a woman who fears the LORD is to be praised." (31:30)

- **Describes:** wisdom sayings, not promises. Proverbs observes what is generally so. 19:14 is pointed: families can hand down property, but a good spouse is a gift from God. Even in a family-arranged culture, a good marriage isn't something the family can guarantee.
- **Proverbs 31:10–31** is an acrostic poem (each verse starts with the next Hebrew letter). It is framed as a mother's teaching to her son ("…the burden that his mother taught him", 31:1). It praises wisdom lived out in a household. It is a portrait of a woman who "fears the LORD", not a list of tasks. Ruth, a poor widowed foreigner, is the one woman Scripture calls by its title, "a woman of noble character" (Ruth 3:11).
- **Prescribes:** value character and the fear of the LORD above charm and beauty (31:30). That is exactly why faith comes before photos.
- **For Covenant:** never "a Proverbs 31 woman" as a filter, question, badge or marketing line. Never Proverbs 18:22 as a promise ("find a wife here and you'll have God's favour"). 31:30 would suit the photos screen as a gentle reminder, if wanted.

### A7. Malachi 2:14–16: covenant

> "…the LORD has been a witness between you and the wife of your youth, against whom you have broken faith, though she is your companion and your wife by covenant." (2:14)

- **Describes:** men of Judah were divorcing the wives of their youth, abandoning them, and coming to the altar anyway. God says He is the witness of the marriage covenant.
- **Prescribes:** marriage is a covenant made before God, not only a private contract, and faithfulness matters to Him. The passage defends abandoned wives.
- **For Covenant:** this is the source of the app's name. Never show 2:16 ("For I hate divorce…"), as round 1 said. That verse goes on, "He who divorces his wife covers his garment with violence." It condemns treachery against a spouse. It is too often turned against people who left a violent marriage, who are the very people the passage protects.

### A8. Matthew 19:3–12: Jesus on marriage, divorce and singleness

> "So they are no longer two, but one flesh. Therefore what God has joined together, let man not separate." (19:6)
> "…For there are eunuchs who were born that way; others were made that way by men; and still others live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it." (19:12)

- **Describes:** in a debate about divorce "for any reason" (19:3), Jesus goes back to Genesis 1–2. He names one exception (19:9). His disciples react: "it is better not to marry" (19:10).
- **Prescribes:** marriage is lifelong. God is the one who "joins". The churches read the exception clause differently (Part B). Single life "for the sake of the kingdom" is a calling Jesus honours. It is not a failure.
- **For Covenant:** the faith screen quotes 19:6. That is right as teaching, but it is the first verse a divorced member meets, one screen before "Your story so far". **Could:** use Genesis 2:24 there instead, and keep 19:6 for the "Marriage in Scripture" page, where it sits beside 1 Corinthians 7. 19:12 belongs on any page about singleness (D6).

### A9. 1 Corinthians 7: marriage, singleness and "belongs to the Lord"

> "…But each man has his own gift from God; one has this gift, another has that." (7:7)
> "But if you do marry, you have not sinned…" (7:28)
> "I am saying this for your own good, not to restrict you, but in order to promote proper decorum and undivided devotion to the Lord." (7:35)
> "A wife is bound to her husband as long as he lives. But if her husband dies, she is free to marry anyone she wishes, as long as he belongs to the Lord." (7:39)

- **Describes:** Paul answers the Corinthians' questions. Married couples owe each other mutual, equal duties (7:3–5: "likewise the husband…"). He wishes all were single as he is (7:7–8), but marrying is no sin (7:28, 7:36–38). The single person can be undivided in devotion (7:32–35).
- **Prescribes:** both marriage and singleness are gifts (7:7). A widow may marry "anyone she wishes": her own free choice. The one limit is "as long as he belongs to the Lord". Many English versions translate this as "only in the Lord". The BSB wording is the one to quote on screen.
- **For Covenant:** this is the clearest New Testament basis for a Christians-only introduction service, and for marriage after a spouse's death. It also forbids any hint that single people are lesser. Paul says the single life is "even better" (7:38). Covenant exists for people who hope to marry, and must say so without looking down on anyone who doesn't.

### A10. 2 Corinthians 6:14: "unequally yoked"

> "Do not be unequally yoked with unbelievers. For what partnership can righteousness have with wickedness? Or what fellowship does light have with darkness?" (6:14)

- **Describes:** the context is idolatry: "What agreement can exist between the temple of God and idols?" (6:16). The passage is about partnership with pagan worship. It is not mainly about marriage.
- **Prescribes:** most churches apply it, rightly, to marriage between a believer and an unbeliever. Taken together with 1 Corinthians 7:39, that is a fair reading.
- **For Covenant:** it supports the app's faith entry question. It must **never** be used of a Catholic marrying a Baptist, or an Orthodox Christian marrying an Anglican. Those are "brothers and sisters" in Christ, not "unbelievers". A cross-tradition app that quoted 6:14 near the tradition choices would wound people.

### A11. Ephesians 5:21–33

> "Submit to one another out of reverence for Christ." (5:21)
> "Husbands, love your wives, just as Christ loved the church and gave Himself up for her" (5:25)
> "This mystery is profound, but I am speaking about Christ and the church." (5:32)

- **Describes:** the passage opens with mutual submission (5:21). In Greek, verse 22 borrows its verb from verse 21. It asks wives to submit and husbands to love to the point of self-giving. It ends with a "mystery": marriage points to Christ and the church.
- **Prescribes:** self-giving love, respect, and faithfulness that mirrors Christ's. The churches read "headship" differently (round 1, D3), but none of them reads it as control.
- **For Covenant:** use it only with the D3 frame that round 1 drafted, which always begins with 5:21 and 5:25. Never as a checklist ("Will you submit?"), a profile label, or a test of someone's faith.

### A12. 1 Peter 3:1–7

> "Your beauty should not come from outward adornment… but from the inner disposition of your heart…" (3:3–4)
> "Husbands, in the same way, treat your wives with consideration as a delicate vessel, and with honor as fellow heirs of the gracious gift of life, so that your prayers will not be hindered." (3:7)

- **Describes:** Peter writes to wives whose husbands "refuse to believe the word" (3:1). These are Christian women already married to non-Christians, in a hostile culture. He asks husbands to honour their wives as "fellow heirs".
- **Prescribes:** inner character over outward show, and honour that is equal before God.
- **For Covenant:** 3:1 is about a marriage that already exists. It is not permission for "missionary dating" (marrying someone in the hope of converting them). 3:7 joins a husband's treatment of his wife to his own prayer life, which is a strong word against control. "Treat … as a delicate vessel" doesn't make women less: the verse itself says "fellow heirs".

### A13. Hebrews 13:4 and 1 Thessalonians 4:3–8: holiness

> "Marriage should be honored by all and the marriage bed kept undefiled, for God will judge the sexually immoral and adulterers." (Hebrews 13:4)
> "…each of you must know how to control his own body in holiness and honor… and no one should ever violate or exploit his brother in this regard…" (1 Thessalonians 4:4, 6)

- **Describes and prescribes:** marriage is honoured "by all", including single people and the community. Sex belongs within marriage. 1 Thessalonians 4:6 adds that sexual sin wrongs another person, "violate or exploit". Holiness includes not using people.
- **For Covenant:** purity and safety are one subject. Text-only conversations, no intimate images, companions, public meetings and "no money, ever" protect holiness and protect people. Round 1's D2 is right to say "from now on, not about your past". Purity is never a ranking of people.

### A14. What Scripture says, question by question

**Who has a part, and what part?**

| Who | In Scripture | For adults today |
|---|---|---|
| **The couple** | They give the yes (Genesis 24:58; Song of Songs 8:12; 1 Corinthians 7:39, "anyone she wishes"). | They decide. Nobody can say yes or no for them. |
| **The family** | Often arranges (Genesis 24, 29), counsels (Ruth 3:1) and blesses (Genesis 24:60; Ruth 4:11). It can also deceive (Genesis 29) or control (Song of Songs 1:6). | Counsel and blessing, gladly sought, freely given. Never a veto and never pressure. "Leave father and mother" (Genesis 2:24) marks the change. |
| **The community** | Witnesses at the gate (Ruth 4:9–11); friends in the Song. | The church prepares, witnesses and supports the couple: banns, preparation, the wedding itself. Companions bring a little of this early. |
| **God** | Brings the woman to the man (Genesis 2:22), leads the servant (Genesis 24:27), witnesses the covenant (Malachi 2:14) and joins (Matthew 19:6). | Prayed to, trusted and asked for wisdom (James 1:5). Never claimed as the voice behind one person's wish ("God told me you're the one"). |

**Is consent essential?** Yes. Scripture records the woman's own voice where its culture didn't require it (Genesis 24:58), and Paul names the widow's free choice (1 Corinthians 7:39). Every tradition makes free consent essential to a true marriage (Part B). UK law makes forcing anyone into marriage a crime. Arranged marriage, where both freely choose, is legal and honourable. Forced marriage is never either.

**What place do parents and guardians have for adults?** "Honor your father and mother…" (Exodus 20:12) lasts all our lives. "Children, obey…" (Ephesians 6:1) is addressed to children in the household. An adult honours parents by listening, seeking their blessing and caring for them, not by handing over the choice. Genesis 2:24 says a man "will leave his father and mother". Many Christian families, especially in cultures where families introduce people, hope for a real part, and that can be a great gift. The app can welcome that through the companion and the family question (round 1, F3), as long as the member chooses it.

**What is the role of prayer and of waiting?** The servant prays (Genesis 24:12). Isaac meditates (24:63). Jacob waits seven years (29:20). The Song charges its readers to wait "until the time is right". In Scripture, waiting is waiting *for the LORD*: "The LORD is good to those who wait for Him, to the soul who seeks Him." (Lamentations 3:25). It is not waiting for a spouse God has promised. Prayer asks for wisdom ("…he should ask God, who gives generously to all without finding fault…", James 1:5), not for signs to settle the question.

**How should purity and safety be handled while getting to know someone?** In public, with others near (Ruth 4:1–11; Ruth 3:14 shows care for reputation). Slowly (Song of Songs 2:7). Without using anyone (1 Thessalonians 4:6). With honour for marriage "by all" (Hebrews 13:4). Without shame about the past: a person's history is theirs to share, in their own time.

**How should singleness be honoured?** Jesus was single. He names singleness "for the sake of the kingdom of heaven" as a calling (Matthew 19:12). Paul calls it a gift and in some ways "even better" (1 Corinthians 7:7, 7:38). God promises a name "better than that of sons and daughters" to those who were cut off from family life (Isaiah 56:4–5). Catholic and Orthodox Christians honour consecrated and monastic life. The church is family to every believer. So Covenant must never imply that the unmarried are incomplete, behind, or waiting for life to start. Its purpose is to serve people who hope to marry, not to rank the two gifts.

---

## Part B. How each tradition practises it today

### B1. Catholic

- **Free consent makes the marriage.** "The Church holds the exchange of consent between the spouses to be the indispensable element that 'makes the marriage.' If consent is lacking there is no marriage." (CCC 1626). "No human power can substitute for this consent." "If this freedom is lacking the marriage is invalid." (CCC 1628) **V** ([CCC, Matrimonial consent](https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_three/article_7/iii_matrimonial_consent.html))
- Canon 1103: a marriage entered "under the influence of violence or grave external fear" is invalid, even if the fear was not inflicted on purpose. **V** (French text, my translation: [CIC 1095–1107](https://www.vatican.va/archive/cod-iuris-canonici/fra/documents/cic_libro4_cann1095-1107_fr.html))
- **Form.** The priest or deacon "receives the consent of the spouses in the name of the Church" (CCC 1630, **V**). The Church normally requires the canonical form (CCC 1631, **V**, library).
- **Preparation.** So that the "I do" "may be a free and responsible act", preparation is "of prime importance" (CCC 1632, **V**). It follows *Amoris Laetitia* 205–222 and the 2022 *Catechumenal Pathways for Married Life*, in three phases: remote (growing up), proximate (from engagement) and immediate (the weeks before the wedding). **V** ([USCCB summary](https://www.usccb.org/news/2021/walking-towards-marriage-phases-sacramental-preparation)). In England and Wales, parishes usually ask for about six months' notice and a preparation course. **K**
- **Mixed marriage** (with a baptised non-Catholic): "Difference of confession between the spouses does not constitute an insurmountable obstacle for marriage" (CCC 1634). It needs "the express permission of ecclesiastical authority" for liceity (CCC 1635). The Catholic party promises to do all they can to have the children baptised (can. 1125). **V**
- **Disparity of cult** (with an unbaptised person): needs a dispensation for validity (CCC 1635; can. 1086). **V/K**
- **Divorce and nullity:** see the library note (CBCEW guide, **V**). No Catholic wedding after divorce until a declaration of nullity, for anyone a Catholic marries.

### B2. Orthodox (Eastern)

- **Free consent.** "The freely entered union of man and woman is an indispensable precondition for marriage." (Holy and Great Council, Crete 2016, *The Sacrament of Marriage and its Impediments* I.1) **V** ([text](https://www.orthodoxcouncil.org/decisions/-/asset_publisher/f1JDEVkdg6TH/content/marriage/3574532803f.html)). "A necessary condition of marriage is faith in Jesus Christ, which must be shared by the bridegroom and the bride." (I.4) **V**
- **Betrothal and crowning.** The service has two parts: the Betrothal (rings) and the Crowning. In many parishes today they are served together. In the Russian use, before the Crowning the priest asks each person whether they come freely and whether they have promised themselves to anyone else. The priest needs "a positive, audible response" to the first question and "a negative one" to the second, and must first "ascertain that the couple is marrying of their free volition". **V** (Bishop Irenei of London and Western Europe, ROCOR, [Guidance on the Marriage Services, 2023](https://orthodox-europe.org/wp-content/uploads/2023/12/2023-08-Guidance-on-the-Marriage-Services-EN.pdf)). The Greek use has no spoken consent question; consent is shown by the couple's presence and the betrothal. **K**
- **The priest and the spiritual father.** "Every Priest must consider this pre-marriage counselling / education as an essential part of his role." Before the wedding, each person goes to confession and receives Communion. **V** (same guide). In many Orthodox families, the person's spiritual father (confessor) is consulted about whether to marry and whom. That is counsel and blessing, not a command. **K**
- **Sponsors.** The *koumbaros* or *koumbara* (Greek), *kum* (Serbian) or *naș* (Romanian) is a sponsor of the marriage, often for life. At St Sophia (Thyateira) the sponsor must be Orthodox. **V** (library)
- **Mixed marriages.** "Marriage between Orthodox and non-Orthodox Christians is forbidden according to canonical akribeia", but each autocephalous Church's synod may exercise *oikonomia* (Crete II.5.1–5.2). Marriage with non-Christians is "categorically forbidden" (II.5.3). **V** In practice, the non-Orthodox partner is usually asked to be baptised in the name of the Trinity and to marry in the Orthodox Church, and the bishop's counsel is sought "in advance". ROCOR London: "may or may not be permitted, depending on the circumstance". **V**
- **Second marriage by economy.** ROCOR London: "a second or third marriage is permitted, though the form will differ from a first", and a fourth is not permitted. **V** The OCA says the same, with a penitential service. **V** (library). Crete II.2 lists "a marriage that is not completely dissolved or annulled and a third marriage" as absolute impediments, and condemns "bigamy and a fourth marriage". **V** This reads as meaning that someone in, or after, a third marriage may not marry again. Jurisdictions differ in practice, so the app always says "your priest will guide you". **K**
- **Differences between jurisdictions.** Greek (Thyateira), Antiochian, Romanian, Serbian, Russian and others differ on the consent question, the length of preparation, mixed marriages and the second-marriage rite. **K** The app summary stays general.
- **Oriental Orthodox** (Coptic, Ethiopian, Eritrean, Armenian, Syriac, Malankara) are separate churches with their own rules, often stricter (Coptic: remarriage after divorce generally only after adultery). **K**, library.

### B3. Anglican: the Church of England

- **The reasons for marriage**, in the introduction to the Common Worship service: "The Scriptures teach us that marriage is a gift of God in creation and a means of his grace, a holy mystery in which man and woman become one flesh." Marriage is given "that husband and wife may comfort and help each other, living faithfully together in need and in plenty, in sorrow and in joy", "that with delight and tenderness they may know each other in love", and "that they may have children and be blessed in caring for them". **V** ([Common Worship marriage text, via oremus](https://oremus.org/liturgy/tcw/marriage/marriage.html)). **Copyright:** Common Worship is © The Archbishops' Council. Short quotations in a review are fine. Any use on screen needs the Church House Publishing copyright terms checked. **K**
- **Consent:** the declarations ("N, will you take N to be your wedded wife?… forsaking all others, be faithful to her as long as you both shall live?") come before the vows. **V**
- **Preparation:** the vicar "will want to talk frankly about your past and hopes for the future". Most parishes offer a marriage preparation day or course. Banns are read on three Sundays. **V/K** ([CofE, marriage after divorce](https://www.churchofengland.org/node/41386))
- **Remarriage after divorce** (2002): "the Church of England accepts that a divorced person may marry again in church", in certain circumstances, at the vicar's discretion. Some vicars "don't feel able to", and may offer "a blessing service after a civil wedding". **V** (same page; Diocese of London advice, library)
- The Church in Wales, the Scottish Episcopal Church and the Church of Ireland have their own rules. The Scottish Episcopal Church has married same-sex couples since 2017 (see C1). **V/K**

### B4. Evangelical and free churches

- **Courtship and "dating with intention".** In the 1990s and 2000s, many evangelicals moved from casual dating to "courtship": intentional from the start, often with a father's or pastor's involvement, and aimed at marriage. The best-known book, Joshua Harris's *I Kissed Dating Goodbye* (1997), was withdrawn by its author in 2018. He said "Fear is never a good motive" and regretted giving "the impression that there was one formula that you could follow". **V** ([Christian Post, 2018](https://www.christianpost.com/news/joshua-harris-says-i-kissed-dating-goodbye-will-be-discontinued-apologizes-for-flaws.html)). Today many UK evangelical churches teach "dating with intention": be clear about marriage, go slowly, stay accountable, and keep sex for marriage. They avoid fear, formulas and shame. **K**
- **Church leaders and mentors.** In many Pentecostal and African-led churches (for example the Redeemed Christian Church of God), couples are expected to tell their pastor and take marriage counselling before engagement. In some churches the pastor's approval is expected. **K** Many independent churches pair couples with an older married couple as mentors. **K**
- **Singleness.** UK research by Single Friendly Church and Christian Connection found that many single Christians feel overlooked in church life. **V/K** ([Single Friendly Church research](https://www.singlefriendlychurch.com/what-do-single-christians-say-about-church/what-do-single-christians-say-about-church))
- **Remarriage:** varies (library: Westminster Confession 24.5–6; Methodist discretion; local Baptist and independent practice).

### B5. Christian cultures where families introduce people

All **K**, except where linked. Check with members of each community; the companion design should be shaped with them.

- **South Asian Christians** (Pakistani and Indian Catholics, Church of Pakistan, Church of South India and North India, Kerala's Syro-Malabar, Malankara Orthodox and Mar Thoma churches, Goan Catholics): families often exchange a "biodata" and arrange a meeting through relatives or parish networks. Parish and diaspora matrimonial columns are common. Denomination, region and sometimes caste still shape whom families will consider.
- **African Christians** (for example Nigerian, Ghanaian, Zimbabwean, Kenyan): an "introduction" or "knocking" visit between families, then bride-price or bridewealth talks (*lobola*, *roora*), often followed by a separate church wedding. Elders and pastors have a strong voice. Women can face heavy pressure about age.
- **Middle Eastern Christians** (Coptic, Assyrian, Chaldean, Maronite, Syriac, Armenian): introductions are usually through family and church networks, with a formal family visit to ask for the woman's hand. Communities often hope people marry within the community.
- **Eastern European Christians** (Romanian, Serbian, Ukrainian, Russian, Greek, Polish): matchmakers belong mostly to the past. Today most people choose freely and value the parents' blessing, the priest's blessing and the sponsors.
- **What they share:** family blessing is highly valued, and the community feels responsible for its young adults. At their best these customs carry Ruth 4 and Genesis 24 into today. At their worst they become Genesis 29: honour, pressure, or a choice made by others.
- **UK law:** "In an arranged marriage the families of both spouses take a leading role in the arrangements… the choice of whether to go ahead with the marriage remains the decision of the prospective spouses." "An arranged marriage can also become a forced marriage if there is any form of coercion." Forced marriage "can never be justified on religious grounds". **V** ([statutory guidance](https://www.gov.uk/government/publications/the-right-to-choose-government-guidance-on-forced-marriage/multi-agency-statutory-guidance-for-dealing-with-forced-marriage-and-multi-agency-practice-guidelines-handling-cases-of-forced-marriage-accessible))

### B6. Where the traditions agree and differ

| | Agree | Differ |
|---|---|---|
| **Consent** | Free consent is essential. Force or fear makes a marriage invalid (Catholic), unblessable (Orthodox), unlawful (UK). | How it is spoken: Catholic and Anglican vows; the Russian Orthodox question; the Greek use without a spoken question. |
| **Who marries** | A man and a woman who share faith in Christ (Catholic, Orthodox, Church of England, most evangelicals). | Some UK Protestant churches now marry same-sex couples (C1). Disparity of cult is possible by dispensation (Catholic) but forbidden (Orthodox). |
| **Family** | Honour parents; their blessing is good. | How much weight the family has; the role of sponsors (Orthodox); pastoral approval (some evangelical and African churches). |
| **Church's role** | Preparation, witness, blessing. | Sacrament (Catholic, Orthodox); "holy mystery… a means of his grace" (Church of England); covenant and ordinance (many evangelicals). |
| **After divorce** | Marriage is meant for life; the widowed are free. | Nullity (Catholic); economy, up to a third marriage (Orthodox); the minister's discretion (Church of England); varies (Protestant). |
| **Mixed traditions** | Possible with care and permission. | Catholic permission and the promise about children; Orthodox economy case by case, usually in the Orthodox Church; evangelicals often ask only for shared faith. |
| **Singleness** | A real calling. | Consecrated and monastic life (Catholic, Orthodox); evangelicals often have less vocabulary for it. |

---

## Part C. Covenant checked against Parts A and B

### C1. For marriage, not dating

- **Fits.** It matches Genesis 2:24, Ruth 4, 1 Corinthians 7:9 and 7:39, and Hebrews 13:4, and every tradition's practice. "My yes" (Matthew 5:37) is good, and its prayer "towards marriage or not" is exactly right.
- **Must change.** `app/faith.tsx`: "The teaching of all the churches in this app." The Methodist Church (2021), Scottish Episcopal Church (2017), Church of Scotland (2022) and Quakers marry same-sex couples. **V** ([EARS overview](https://europeanacademyofreligionandsociety.com/news/reform-pressure-and-schism-british-churches-and-same-sex-marriage/); [Church of Scotland](https://churchofscotland.org.uk/news-and-events/news/2022/articles/general-assembly-approves-scheme-to-conduct-same-sex-marriages)). The URC (2016) is reported too. **K** Replace with:
  > **The historic teaching of the Church, held today by the Catholic and Orthodox Churches and many others. Covenant introduces people on this basis.**

  This says what the app is for without misrepresenting any church, and without contempt for anyone. The solicitor's Equality Act advice (round 1, §6.3) still stands.
- **Risk:** the app quietly becomes a dating app. Keep the house words and the slow pace.

### C2. Faith answers first, photos after both yeses

- **Fits.** Proverbs 31:30 ("Charm is deceptive and beauty is fleeting…") and 1 Peter 3:3–4 put character before appearance, and Genesis 24 tests character, not looks. Both see the photos at once, so neither is judged alone.
- **Could:** put Proverbs 31:30 on the photos screen, quoted in full, as a reminder for both men and women and never aimed at one sex.
- **Risk:** the faith answers turn into a purity or holiness score. Keep "What you share" in words, with no ranking. The questions about sacraments and leadership must stay in each tradition's own words (round 1, §2).

### C3. The Companion in every conversation

- **Fits.** It carries the witnesses of Ruth 4, the friends of the Song of Songs, the counsel of Proverbs 15:22 ("Plans fail for lack of counsel, but with many advisers they succeed.") and the family of Genesis 24, without giving anyone the decision. It also matches many evangelical, Orthodox and diaspora instincts (B4–B5). In practice it is the best guard against romance fraud and sexual exploitation (1 Thessalonians 4:6).
- **Must:** say it is wisdom, not a command. Scripture shows families and communities close to a marriage. It never commands a chaperone, and many faithful marriages began without one. Use the D1 line. Never write "biblical chaperoning" or "as Scripture requires".
- **Should:** add to the companion promise "I won't tell either of them what God wants them to decide." Show the member, on the invite screen: "A companion can share wisdom. No companion, parent or priest can decide for you, or tell you God has decided." This follows Thirtyone:eight's definition of spiritual abuse ("coercion and control of a person by another in a spiritual context", including "justifying harmful actions using religious texts" and "abusing spiritual authority or leadership roles"). **V** ([Thirtyone:eight](https://thirtyoneeight.org/help-and-resources/knowledge-hub/definitions/spiritual-abuse))
- **Should:** when the companion is the member's priest or confessor, show one line: "If your companion is your confessor, what you say here isn't confession, and they may prefer to keep the two apart." This respects the seal of confession, which is Catholic and Orthodox (**K**), and the priest's freedom.
- **Risks:** (a) a parent or church leader as companion applies pressure, or is part of a forced-marriage plan. That is why the companion can't decide, can be changed quietly, and never learns of a report (C7). (b) People with no one to ask (converts, the estranged, the widowed, people new to the UK) feel shut out. Keep round 1's §5.6 wording and plan the volunteer companions from partner churches. (c) A companion pausing again and again to stall things. A pause is advisory, and the member's Continue ends it. If one companion pauses three times on one introduction, moderators should get a quiet note.

### C4. Pace and the Thursday rhythm, never Sunday

- **Fits.** The Song's refrain (2:7), Jacob's patience and the Church's preparation all favour slowness. A Thursday evening also avoids the Friday-sunset-to-Saturday Sabbath of the Seventh-day Adventists and Messianic Jews on the church list, as well as Sunday.
- **Could:** no introductions on the Thursday of Holy Week. That is Maundy Thursday for Western churches, and Great and Holy Thursday for the Orthodox, which falls on a different date in most years. **K** (dates from the KFL church calendar). Also none on Christmas Day when it falls on a Thursday. The skip shows as one quiet line, never as a lost week.
- **Risk:** the Thursday arrival becomes a weekly high and low (behavioural). Keep "No new introductions this week" with Lamentations 3:25 and no counts.

### C5. Marital history (divorced, annulled) and openness to other traditions

- **Fits.** The story screen in `app/story.tsx` is kind and accurate. It matches round 1's wording and Part B. No document is asked for. The widowed line is gentle. "You did not fail God by getting safe" is right and needed. Malachi 2:16 is nowhere. Keep it so.
- **Must (bug):** `app/open.tsx`, function `family()`: `/Orthodox|Armenian/` sends Coptic, Ethiopian, Eritrean, Armenian, Syriac and Malankara members to the Eastern Orthodox text ("a second, or even a third, marriage"). That misstates their churches (B2). Restore round 1's Oriental Orthodox text exactly:
  > Your church has its own teaching on marriage after divorce, and some of it is stricter than in other churches. Please ask your priest before you choose.
- **Should:** restore the parts of round 1's Anglican text that were cut: "A service of prayer and dedication after a civil wedding is another way. The Church in Wales, the Scottish Episcopal Church and other Anglican churches have their own guidance." As it stands, a Church in Wales member reads "The Church of England teaches…". Restore the Catholic line too: "Nobody is turned away from the process because they can't pay."
- **Should:** split the open-to list's "Orthodox" into "Eastern Orthodox" and "Oriental Orthodox (Coptic, Ethiopian, Eritrean, Armenian, Syriac, Malankara)". They are not in communion with each other, and their marriage rules differ. Round 1's B2 had the full list.
- **Could:** restore Lutheran, Brethren, Seventh-day Adventist and Messianic Jewish to the church list, as in round 1, §2.8.
- **Risks:** shaming divorced people; reading Matthew 19:6 as aimed at them (A8, the "could" there); implying the app has decided for anyone's conscience. Nothing is pre-ticked, and the app explains and never decides. That is right.

### C6. Cross-tradition introductions

- **Fits.** 1 Corinthians 7:39 asks only that the person "belongs to the Lord". CCC 1634 says difference of confession "does not constitute an insurmountable obstacle". Orthodox economy allows it case by case. The two-way, silent openness rule is wise.
- **Must:** never 2 Corinthians 6:14 in this setting (A10).
- **Should:** the app tells people the real costs plainly, as round 1 drafted. The Catholic party makes the promise about the children's baptism. Orthodox churches usually ask for the wedding to be in the Orthodox Church, with the bishop's counsel "in advance" (**V**, ROCOR). CCC 1634 names the "tragedy of Christian disunity even in the heart of their own home" (**V**). One honest line under the church-families list:
  > Marrying across churches can be a great gift, and it asks for patience. Talk to your priest or pastor early, especially about where you'd marry and how you'd raise children.

### C7. The private "I feel pressured" line

- **Fits.** It applies the Song's "mine to give" and every tradition's teaching on consent. It is the most important safeguard in the design.
- **Must:** follow the statutory forced-marriage guidance. Staff never "initiate, encourage or facilitate family counselling, mediation… or reconciliation", and never "approach or involve families if forced marriage is suspected". The "one chance" rule applies: the first contact may be the only one. **V** ([statutory guidance](https://www.gov.uk/government/publications/the-right-to-choose-government-guidance-on-forced-marriage/multi-agency-statutory-guidance-for-dealing-with-forced-marriage-and-multi-agency-practice-guidelines-handling-cases-of-forced-marriage-accessible)). The moderation guide says so in these words.
- **Must:** add to the pressure sheet (prototype `SH.pressure`) the option **"My family or someone else is pushing me to marry"**. When it is chosen, show the Forced Marriage Unit and Karma Nirvana straight away, before anything is sent:
  > **You have the right to choose.** Nobody can make you marry, or marry someone, against your will. That's the law, and it's what every church teaches.
  > Forced Marriage Unit: 020 7008 0151 · Karma Nirvana: 0800 5999 247 (free, Monday to Friday, 9am to 5pm)
  > In danger now? Call 999.

  **V**: [FMU number](https://www.gov.uk/guidance/forced-marriage) and email fmu@fcdo.gov.uk; [Karma Nirvana hours](https://karmanirvana.org.uk/help/helpline/). `app/help.tsx` should add the Karma Nirvana hours and the FMU email.
- **Must:** a companion never learns that a report was made. The companion's view of a closed introduction is the same whoever closed it and for whatever reason. The member's companion is not told that the member paused or reported.
- **Note (law):** the minimum marriage age has been 18 in England and Wales since 27 February 2023, and causing a child to marry is an offence. Scotland and Northern Ireland have their own law. **V** ([GOV.UK](https://www.gov.uk/government/news/legal-age-of-marriage-in-england-and-wales-rises-to-18)). Covenant is 18+ for members and companions, which covers this.

### C8. What happens at engagement

- **Fits.** Both must confirm. Nothing is announced or counted. The couple are sent to their priest or pastor for preparation, which matches all of Part B.
- **Must:** don't close the safeguards at engagement. Engagement is when wedding plans, families and money come in, and the risk of forced marriage can peak. For at least 6 months after both confirm (the solicitor sets the retention period), keep the account in a quiet "engaged" state with Help and "Talk to us privately". No introductions, no conversation history beyond what the retention policy allows.
- **Must:** "We're engaged" (on the prototype's "Where are you?" screen) needs each person to confirm **separately and privately**, as round 1 said. It should never be one person's tap.
- **Must:** a kind way back if an engagement ends (D5). Matthew 1:19 shows that a betrothal could end without disgrace. No "failed" wording.
- **Could:** one optional line: "Your church may have its own way to mark an engagement, such as an Orthodox betrothal or a blessing of the engaged couple. Your priest or pastor can tell you." **K**

### C9. How the app speaks to people who never marry

- **Fits.** The welcome screen ("Marriage is a good gift from God. So is a single life lived for Him. You're not waiting to become complete."), the leaving screen (Romans 8:39) and the empty week (Lamentations 3:25) are all right.
- **Must:** none of the following anywhere, including marketing, store listing, notifications or testimonies: "God has someone for you", "your future spouse is out there", "the One", "soulmate", "it's your season", "don't give up on love", "waiting for your Boaz"; and never Jeremiah 29:11, Psalm 37:4 or Psalm 68:6 as a promise of marriage. Round 1 banned most of these. This adds the marketing channels and the verses.
- **Should:** add a short page on singleness (D6) in Help, for anyone, including people who are thinking of leaving.
- **Risk:** the season price makes waiting feel like money running out. Show no countdown, and the end of a season as "Your season ended on 23 May. Begin another whenever you'd like." **Could:** a hardship season for anyone who asks, with no proof, so that the yes never depends on money (James 2:1–4, in spirit).

---

## Part D. Draft wording

Every Scripture quotation below is BSB, checked word for word on 26 Nov 2026. None of it promises an outcome.

### D1. Why a companion? (invite screen and Help)

> **Why a companion?**
> In Scripture, marriages often began with family and friends close by. Scripture doesn't command a chaperone, but it's old Christian wisdom. Your companion is there to help you both stay safe, honest and kind. The decisions are yours.
> "Plans fail for lack of counsel, but with many advisers they succeed." Proverbs 15:22

### D2. On the invite screen (member) and in the companion's promise

Member:
> A companion can share wisdom. No companion, parent or priest can decide for you, or tell you God has decided. You can change your companion at any time, quietly.

Add to the companion's promise (round 1, §5.5), after "I won't push either of them…":
> - I won't tell either of them what God wants them to decide.

### D3. Marriage in Scripture (a short page in Help)

> **Marriage in Scripture**
>
> **A good gift from the beginning.** "For this reason a man will leave his father and mother and be united to his wife, and they will become one flesh." Genesis 2:24
>
> **Freely chosen.** When Rebekah's family were asked about her marriage, they said, "We will call the girl and ask her opinion." She said, "I will go." Genesis 24:57–58. Nobody can choose for you.
>
> **A covenant for life.** "So they are no longer two, but one flesh. Therefore what God has joined together, let man not separate." Matthew 19:6
>
> **Love that gives itself.** "Submit to one another out of reverence for Christ." Ephesians 5:21. "Husbands, love your wives, just as Christ loved the church and gave Himself up for her" Ephesians 5:25
>
> **Not the only good life.** "…each man has his own gift from God; one has this gift, another has that." 1 Corinthians 7:7
>
> Churches teach and celebrate marriage in their own ways. Your priest or pastor will help you prepare. Covenant can introduce you. It can't promise a marriage, and your life with God doesn't wait on one.

### D4. Closing an introduction (person closing; replaces Matthew 1:19)

> It's right to close an introduction when you don't believe you're being led towards marriage together. You don't have to give a reason.
> "Let your speech always be gracious, seasoned with salt, so that you may know how to answer everyone." Colossians 4:6

The person receiving it keeps round 1's screen, with Isaiah 43:1. That verse is God's word to Israel, which the Church has long heard as spoken to His people, so it is fair to use.

### D5. Engagement, and if an engagement ends

At engagement (both confirmed):
> **We're so glad**
> This is your decision, together. Take the time you need, and speak to your priest or pastor about marriage preparation.
> No new introductions now, and nothing is announced. If you ever feel pressured, before the wedding or after, help is still here ›

If an engagement ends:
> **Your engagement has ended**
> We're sorry. Ending an engagement honestly is better than a marriage either of you can't freely enter. It isn't failure.
> Take all the time you need. When you're ready, introductions can begin again, and nobody else is told.
> "The LORD is near to the brokenhearted; He saves the contrite in spirit." Psalm 34:18

### D6. For those still waiting, and for anyone who never marries

> **Still waiting**
> Waiting can hurt, and it's all right to tell God so. We can't promise a marriage. Your life with God isn't on hold, and it isn't second best.
> "Trust in Him at all times, O people; pour out your hearts before Him. God is our refuge…" Psalm 62:8

> **A single life**
> Jesus never married. Paul calls marriage and single life each a gift from God. Many Christians are called to a single life, and many find it rich and full of love. If you leave without marrying, you haven't missed your life.
> "…still others live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it." Matthew 19:12
> *(If 19:12 feels too technical on screen, use 1 Corinthians 7:7, quoted in D3.)*

### D7. Faith screen replacement (C1)

> "Marriage is a lifelong covenant between one man and one woman."
> The historic teaching of the Church, held today by the Catholic and Orthodox Churches and many others. Covenant introduces people on this basis.

---

## Checks still needed before any of this goes on screen

1. A reader from each tradition (Catholic, Eastern Orthodox, Oriental Orthodox, Anglican, evangelical) checks Parts B and C5, and the Orthodox engagement line.
2. Members of the South Asian, African, Middle Eastern and Eastern European Christian communities check B5 and how companions are explained.
3. The solicitor: the C1 wording and the Equality Act; caste and ethnicity filters; how long engaged accounts are kept; and the Common Worship copyright terms if any preface text is used.
4. The independent safeguarding adviser checks C3, C7 and C8 against the statutory forced-marriage guidance.

## Sources (opened 26 Nov 2026)

- Catechism of the Catholic Church, Matrimonial consent (1625–1637): https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_three/article_7/iii_matrimonial_consent.html
- Code of Canon Law cann. 1095–1107 (French): https://www.vatican.va/archive/cod-iuris-canonici/fra/documents/cic_libro4_cann1095-1107_fr.html
- USCCB, Walking towards marriage (phases of preparation): https://www.usccb.org/news/2021/walking-towards-marriage-phases-sacramental-preparation
- Holy and Great Council (Crete 2016), The Sacrament of Marriage and its Impediments: https://www.orthodoxcouncil.org/decisions/-/asset_publisher/f1JDEVkdg6TH/content/marriage/3574532803f.html
- ROCOR Diocese of London and Western Europe, Guidance on the Marriage Services (2023): https://orthodox-europe.org/wp-content/uploads/2023/12/2023-08-Guidance-on-the-Marriage-Services-EN.pdf
- Common Worship Marriage Service (text via oremus): https://oremus.org/liturgy/tcw/marriage/marriage.html
- Church of England, Marriage after divorce: https://www.churchofengland.org/node/41386
- European Academy on Religion and Society, British churches and same-sex marriage: https://europeanacademyofreligionandsociety.com/news/reform-pressure-and-schism-british-churches-and-same-sex-marriage/
- Church of Scotland, General Assembly 2022: https://churchofscotland.org.uk/news-and-events/news/2022/articles/general-assembly-approves-scheme-to-conduct-same-sex-marriages
- Christian Post, Joshua Harris discontinues *I Kissed Dating Goodbye* (2018): https://www.christianpost.com/news/joshua-harris-says-i-kissed-dating-goodbye-will-be-discontinued-apologizes-for-flaws.html
- Single Friendly Church research: https://www.singlefriendlychurch.com/what-do-single-christians-say-about-church/what-do-single-christians-say-about-church
- Thirtyone:eight, Spiritual abuse definition: https://thirtyoneeight.org/help-and-resources/knowledge-hub/definitions/spiritual-abuse
- GOV.UK, Forced marriage (FMU): https://www.gov.uk/guidance/forced-marriage
- GOV.UK, Multi-agency statutory guidance on forced marriage: https://www.gov.uk/government/publications/the-right-to-choose-government-guidance-on-forced-marriage/multi-agency-statutory-guidance-for-dealing-with-forced-marriage-and-multi-agency-practice-guidelines-handling-cases-of-forced-marriage-accessible
- GOV.UK, Legal age of marriage rises to 18: https://www.gov.uk/government/news/legal-age-of-marriage-in-england-and-wales-rises-to-18
- Karma Nirvana helpline: https://karmanirvana.org.uk/help/helpline/
- Earlier sources (CBCEW nullity guide, OCA, St Sophia Thyateira, Diocese of London, Equality Act): `kingdom-first-life-app/kfl-pastoral/library/marriage-and-remarriage-traditions.md`
