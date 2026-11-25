# Brand: Kingdom First Covenant, round 1 (23 Nov 2026)

Brand designer. **Proposals only. The owner decides the name lockup, logo, fonts and colours.** Nothing in Kingdom First Life's own brand changes.

Files in this folder (concepts, not approved):
- `brand-icon-a-crown-rings.svg`: crown with two joined rings
- `brand-icon-b-threefold-cord.svg`: crown with a cord of three strands
- `brand-icon-c-ring-crown.svg`: one gold ring with the crown as its setting
- `brand-wordmark.svg`: wordmark on white and on navy

I rendered all of them at 1024, 300, 60 and 29 px next to the KFL icon and checked them by eye.

---

## 1. How the name sits with Kingdom First Life

- **The same pattern as KFL.** "KINGDOM FIRST" in Cormorant capitals, then the second word in italic, just as KFL sets its italic gold "Life". Readers then see one family with two apps: *Kingdom First Life* and *Kingdom First Covenant*.
- **Short forms.** Use "Covenant" inside the app and in conversation ("open Covenant"). Avoid "KFC" anywhere, because it is a fast-food chain's mark. Write the name in full at least once in every store listing and on every screen that people see before they sign in.
- **Endorsement line** on the store listing, the website footer and the sign-up screen: "From Kingdom First Life." Never use this line as the headline.
- **Possible line for the owner to weigh:** "Introduced for marriage." Other options are "Seek first His kingdom, together." or "Introductions for marriage, under God." Keep the KFL brand line ("Life in Full – through Him.") for KFL only.
- Every place the name appears should also say plainly what the app is for: "Introductions for marriage, not dating."

## 2. Wordmark idea

- The crown, then "KINGDOM FIRST" (Cormorant Garamond 600, caps, tracking about .09em), then *Covenant* (Cormorant 600 italic) underneath.
- *Covenant* takes the new signature colour: wine `#7B2D3B` on light backgrounds and wine-light `#E4A6A0` on navy. KFL's *Life* stays gold.
- In the wordmark the crown is plain, with no leaves. The leaves belong to Life's three pillars, and Covenant is not a pillar app. The gold base bar stays and carries the family link.
- One left edge for the crown and both words, matching the KFL alignment rule.

## 3. Icon concepts (navy tile, as KFL)

| | Idea | Strengths | Weaknesses |
|---|---|---|---|
| **A. Crown and rings** (my first choice) | KFL's crown in cream. Two joined wine rings replace the leaves. The gold bar stays. | Clearly KFL's sister at every size. The rings say "marriage" straight away. Clear even at 29 px. | Wedding rings are common in this market, so the crown has to make it distinctive. |
| **B. Threefold cord** | The crown with a cord of three strands in wine, gold and prayer purple. "A cord of three strands is not quickly broken" (Ecclesiastes 4:12). Base bar in wine. | The richest meaning: husband, wife and God, and it fits the chaperone idea of a third person present. | Busy below 60 px, where the strands blur into a stripe. The wine bar is only 1.74:1 on navy, so it nearly disappears at small sizes. It would need simplifying. |
| **C. Crowned ring** | One gold ring with the crown as its setting. | The simplest shape, and different from KFL's crown silhouette. | Reads like an engagement ring, which leans towards "jewellery" and glamour. Weaker family link. |

All three keep navy `#19203A` and cream `#F3EEE4`. I did not use hearts, lips, flames or two faces, because they say "dating".

## 4. Colour palette (family, but distinct)

Shared with KFL: navy, cream, ink, muted and Cormorant/Plex. New: **wine**, which stands for Cana and "the new covenant in My blood". It is a covenant colour, not a romance pink.

| Token | Hex | Use |
|---|---|---|
| `--cv-navy` | `#19203A` | Icon tile, dark background (same as KFL) |
| `--cv-cream` | `#F3EEE4` | Crown, text on dark (same as KFL) |
| `--cv-ink` | `#221636` | Headings and body ink on light (same as KFL) |
| `--cv-muted` | `#5E556C` | Body and small text on light (same as KFL) |
| `--cv-muted-dark` | `#B9B3C6` | Muted text on navy |
| `--cv-wine` | `#7B2D3B` | **Signature.** Accent text, links and the filled main button on light (cream text) |
| `--cv-wine-light` | `#E4A6A0` | Accent text on dark; filled button on dark (navy text) |
| `--cv-wine-mid` | `#C25E6D` | Graphics only (icons, rules) on navy; never text |
| `--cv-wine-tint` | `#F4E7E9` | Label pills on light (wine or ink text) |
| `--cv-wine-tint-dark` | `#3A2533` | Label pills and cards on dark |
| `--cv-raised-dark` | `#232B48` | Raised cards on navy |
| `--cv-gold` | `#CBAA6A` | The crown's base bar and the rings only, not UI. In KFL, gold means Live. |
| `--cv-prayer` | `#B08CEB` / `#E4D8F3` / text `#3F2163` (dark `#C9B2F2`) | Prayer only, as in KFL ("Pray for this introduction") |

**Contrast (WCAG AA).** I calculated these ratios with the WCAG formula. I have not checked them in a built screen, because no app exists yet. All pass 4.5:1 for normal text unless noted.

| Pair | Ratio |
|---|---|
| Wine on white / cream / page `#FAF7F2` | 9.21 / 7.96 / 8.62 |
| Cream on wine (button) / white on wine | 7.96 / 9.21 |
| Wine on wine-tint / on neutral `#ECE7DF` | 7.65 / 7.48 |
| Ink on white / cream | 16.99 / 14.69 |
| Muted on white / cream / wine-tint | 7.02 / 6.07 / 5.83 |
| Cream on navy / on raised | 13.87 / 12.02 |
| Wine-light on navy / raised / tint-dark | 7.84 / 6.79 / 6.88 |
| Navy on wine-light (dark button) | 7.84 |
| Muted-dark on navy / raised | 7.89 / 6.84 |
| Wine-mid on navy (graphics, needs 3:1) | 3.91, passes for graphics only |
| Gold on navy (icon ring/bar) | 7.26 |
| Wine `#7B2D3B` on navy | **1.74, fails. Never put wine directly on navy;** use wine-light. |

**Watch points**
- Wine-light `#E4A6A0` is close to KFL's women's rose `#E8A9CF` (1.07:1). I moved it to a warmer hue (about 5° against rose's 324°) so it reads as wine rather than pink. The two never share a screen, but the owner should see them side by side.
- No red for errors. Use ink text with a wine left edge, as KFL avoids red in Care.
- No pink or blue to split men and women. Wording and colour stay neutral.

## 5. Type

- The same fonts as KFL: **Cormorant Garamond** for headings, names on profiles and Scripture; **IBM Plex Sans** for body text, form labels and buttons. No new font.
- Profile answers (Tier 1) are set in Plex at 1rem/1.6, so faith answers read like a letter and not like a card to rate.
- The KFL website template carries over: eyebrows in Plex 600 caps (wine instead of gold), h2 in Cormorant 600, and lead lines in Cormorant italic (wine instead of purple, because purple stays for prayer).

## 6. Photos and illustration

- **Photos.** Real people in daylight, fully clothed, in ordinary places: a parish hall, a family table, a walk in a park, a church door. Older couples, widowed people remarrying and people of many backgrounds. Families and friends are in the frame too (they fit the chaperone idea). Avoid models, close-up kissing, beds, beaches, swimwear, nightclubs, wine glasses as romance props, "glamour" lighting and stock "couple laughing at salad" shots.
- **Profile photo rules in the brand:** face clearly visible, no filters, modest dress, no one else cropped out (no "ex" shoulders).
- **Illustration.** Flat, quiet line drawings in navy and cream with one wine accent: rings, a table set for a family meal, a church door, two chairs and a third chair (the chaperone), a threefold cord. No cartoons of couples and no hearts.
- **Icons.** Navy tile with a cream icon, as KFL.

## 7. Tone of voice

Warm, serious and plain, like a wise friend from church who is good at introductions. Use short sentences and speak to the person directly. Respect every tradition, and never shame anyone over marital history. Be honest that this takes time. Make no promises of a spouse, a "soulmate" or an outcome.

- **Before:** "Find your perfect match today!"
- **After:** "We introduce Christians who hope to marry. It takes time, and that's good."

## 8. Words

| Use | Avoid (never on screen, in the store or in ads) |
|---|---|
| introduce, introduction | swipe, swipe right/left |
| covenant, marriage, courtship | hook up, fling, casual |
| meet (with your chaperone) | date, dating, date night, first date |
| a possible match / "someone to meet" | hottie, babe, sexy, flirt, chemistry test |
| chaperone (family member, friend or pastor) | "slide into DMs", chat-up, wink, poke, super-like |
| intentions, discernment, seek God's will | likes, hearts, matches count, "X people want you" |
| "Not for me, thank you" / "close kindly" | reject, pass, ghost, unmatch |
| "pray for this introduction" | soulmate, "the one" (as a promise), perfect match |
| marital history: never married, widowed, divorced, annulled (decree of nullity) | "divorcee" as a label, "baggage", "second-hand" |
| engagement, betrothal (Orthodox) | "Experience", "game", streaks, badges, "hot right now" |

Check with the pastoral reviewer whether "courtship" carries baggage for some readers (in some Protestant circles it suggests strict parental control). "Introduce" is the safest main verb.

## 9. Trade mark (UK)

This section is from my own knowledge and is not verified. A solicitor or trade-mark attorney must check it.
- KFL's application UK00004476277 is for KINGDOM FIRST LIFE. It does **not** cover KINGDOM FIRST COVENANT, and introduction and matchmaking services are probably outside its classes. The repo's checklist names classes 9, 41 and 42.
- Search the UK IPO (and EUIPO/WIPO for later) for KINGDOM FIRST COVENANT, and also for COVENANT on its own, in **class 45** (introduction, matchmaking and marriage bureau services), **class 9** (apps) and **class 42**. "Covenant" alone is widely used by churches, eyes and other businesses, so the protection comes from the whole phrase.
- Check for existing Christian dating or marriage services that use "Covenant" (for example "Covenant Match"-style names) before investing in the brand.
- File in the company's name (Kingdom First Life Limited) for classes 9, 42 and 45. The cost from the repo's checklist is £205 plus £60 for each extra class. Consider filing the crown icon as a separate figurative mark later.
- Use ™, never ®, until registered. Check the domain names (kingdomfirstcovenant.com / .co.uk) and the store names are free at the same time.

## 10. Decisions for the owner

1. The lockup: "KINGDOM FIRST *Covenant*" in KFL's pattern, with "Covenant" as the short name. Yes or no?
2. The icon concept: A (crown and rings, recommended), B (threefold cord, needs simplifying) or C (crowned ring).
3. The signature colour: wine `#7B2D3B`, with wine-light `#E4A6A0` on dark. Or another colour to look at?
4. Keep the gold base bar on Covenant's crown (as the family link), or a wine bar?
5. A strap line: "Introduced for marriage." or one of the other options.
6. Instruct the trade-mark search and filing (class 45 included) before any public use of the name.
