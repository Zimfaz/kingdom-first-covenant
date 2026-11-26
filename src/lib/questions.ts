// Faith and marriage questions (Tier 1), from the prototype's SECS, with the pastoral study of 26 Nov 2026
// applied. Draft wording: the pastoral reviewer and a reader from each tradition check before testers see it.
// "Which church families would you be open to?" lives on the Who you're open to screen, not here.
/** `id` is fixed for good: answers are saved by id, never by position, so wording and order can change.
 * Options are saved by their own fixed ids (optionIds). `fact` = a fact about yourself, so it can't be
 * marked "This matters a lot to me" (behavioural review 26 Nov). */
export type Q = { id: string; text: string; options: string[]; multi?: boolean; note?: string; fact?: boolean };
export type Section = { k: string; name: string; needed?: boolean; qs: Q[] };

export const SECTIONS: Section[] = [
  { k: 'B', name: 'Your faith and church', needed: true, qs: [
    { id: 'baptised', fact: true, text: 'Have you been baptised?', options: ['Yes, as a baby', 'Yes, as a believer', 'Not yet; I’m preparing', 'My church doesn’t baptise with water', 'I’m not sure'], note: 'If you are Catholic or Orthodox, your church will ask for a baptism certificate before a wedding.' },
    { id: 'worship', fact: true, text: 'How often do you worship with your church?', options: ['Every Sunday or more', 'Most weeks', 'When I can', 'I’m looking for a church at the moment'] },
    { id: 'where_worship', text: 'Where would you hope to worship as a married couple?', options: ['In my church', 'In my future spouse’s church', 'Each in our own, sometimes together', 'We’d decide together with our priest or pastor'] },
    { id: 'pray_home', text: 'Would you hope to pray together at home?', options: ['I’d love us to pray together most days', 'Sometimes', 'I’d like to learn how', 'I’d rather talk about it'] },
    { id: 'fasts', text: 'Do you keep the fasts and feasts of the church year?', options: ['Keeping them is part of my life', 'I keep some', 'My church doesn’t follow the church year'], note: 'Many Orthodox, Catholic and Anglican homes keep the fasts together, and it shapes family life.' },
    { id: 'faith_own', fact: true, text: 'How did faith become your own?', options: ['I grew up with it', 'As an adult', 'Recently', 'It’s still growing'] }
  ] },
  { k: 'C', name: 'The Church and the sacraments', qs: [
    { id: 'communion', text: 'Holy Communion (the Eucharist, the Lord’s Supper) is…', options: ['the true Body and Blood of Christ', 'Christ truly present in a spiritual way', 'a memorial of His death, which we do as He commanded', 'My church doesn’t celebrate it with bread and wine', 'I’m still learning'], note: 'Christians answer these differently, and your church’s teaching matters. Answer honestly; nothing is scored.' },
    { id: 'scripture', text: 'How does your church read Scripture?', options: ['Scripture within the Tradition of the Church', 'Scripture as the final authority', 'Scripture, tradition and reason together', 'I’m not sure how to put it'] },
    { id: 'saints', text: 'How do you see asking Mary and the saints to pray for us?', options: ['Asking the Theotokos / Our Lady and the saints to pray for us is part of my faith', 'Not my practice, but I respect it', 'I’m not comfortable with it'] },
    { id: 'confession', text: 'How do you confess your sins?', options: ['I go to confession with a priest', 'I confess to God, sometimes with a pastor or friend', 'Both'] },
    { id: 'child_baptism', text: 'When would your children be baptised?', options: ['Babies are baptised', 'Children are baptised when they come to faith', 'I’d follow our church'] },
    { id: 'marriage_is', text: 'Marriage is…', options: ['a sacrament (a holy mystery)', 'a holy covenant before God', 'both words fit for me', 'I’m still learning'] }
  ] },
  { k: 'D', name: 'Marriage itself', needed: true, qs: [
    { id: 'chastity', text: 'From now until our wedding, I want to keep sex for marriage.', options: ['Yes', 'I’d rather talk about it'], note: 'This is about from now on, not about your past.' },
    { id: 'leadership', text: 'How do you see leadership and decisions in marriage?', options: ['The husband leads by serving in love; we’re equal in worth', 'Husband and wife lead together as equals', 'Somewhere between', 'We’d work it out with our church’s guidance'], note: 'Whatever you believe about leadership in marriage, it never means control, fear or harm. Paul begins, “Submit to one another out of reverence for Christ” (Ephesians 5:21). If anyone uses Scripture to frighten or control you, please tell us.' },
    { id: 'remarriage', text: 'After divorce, remarriage while a former spouse is living…', options: ['My church doesn’t allow it without a declaration of nullity', 'My church allows it in some cases', 'I’d follow my church’s guidance', 'I’m not sure'] },
    { id: 'preparation', text: 'Would you want marriage preparation?', options: ['I’d want us to do our church’s marriage preparation', 'Yes, if our church offers it', 'Open'] },
    { id: 'work_home', text: 'How would you hope to share work and home?', options: ['Both of us working', 'One of us at home while children are young', 'We’d decide together'] },
    { id: 'money', text: 'How would you hope to handle money?', options: ['One shared account', 'Shared and some of our own', 'We’d decide together'] },
    { id: 'engaged_when', text: 'If an introduction feels right, when would you hope to be engaged?', options: ['Within about 6 months', '6–12 months', '1–2 years', 'No timeline; when it’s right'] }
  ] },
  { k: 'E', name: 'Children and family', qs: [
    { id: 'children_hope', text: 'Would you like to have or raise children?', options: ['Yes', 'Open, if God gives them', 'I’d prefer not to', 'I’d rather talk about it'], note: 'If you can’t have children, or you’ve lost a baby, you don’t have to explain. Choose what fits, or “I’d rather talk about it”.' },
    { id: 'family_planning', text: 'How do you see family planning?', options: ['Natural family planning only, as my church teaches', 'I’d follow my conscience and my church’s guidance', 'I’d rather talk about it'] },
    { id: 'children_church', text: 'Our children would be baptised and brought up in…', options: ['my church', 'my future spouse’s church', 'we’d decide together'] },
    { id: 'have_children', fact: true, text: 'Do you have children?', options: ['No', 'Yes, living with me', 'Yes, not living with me', 'I’d rather say in conversation'] },
    { id: 'adoption', text: 'Would you be open to adoption or fostering?', options: ['Yes, I’d be open', 'Perhaps', 'Not for me'] },
    { id: 'parent_home', text: 'Could a parent live with you one day?', options: ['Yes, I’d expect it', 'Perhaps', 'I’d hope not'] }
  ] },
  { k: 'F', name: 'Everyday life', qs: [
    { id: 'move', text: 'Would you move for marriage?', options: ['Yes, anywhere in the UK', 'Within my region', 'No'] },
    { id: 'family_role', text: 'How involved would you like your families to be?', options: ['Very: I’d want my family’s blessing before engagement', 'Involved, but it’s our choice', 'Our choice; families come later'], note: 'However involved your family is, the choice to marry is yours alone. Nobody can make it for you.' },
    { id: 'alcohol', fact: true, text: 'Do you drink alcohol?', options: ['I don’t drink', 'Sometimes', 'No strong view'] }
  ] }
];

/** Fixed option ids, in the same order as each question's options. When a label is reworded, keep its id;
 * a new option gets a new id at the end of its list or anywhere in the order shown. Never reuse an id. */
export const OPTION_IDS: Record<string, string[]> = {
  baptised: ['yes_as_a_baby', 'yes_as_a_believer', 'not_yet_im_preparing', 'my_church_doesnt_baptise', 'im_not_sure'],
  worship: ['every_sunday_or_more', 'most_weeks', 'when_i_can', 'im_looking_for_a'],
  where_worship: ['in_my_church', 'in_my_future_spouses', 'each_in_our_own', 'wed_decide_together_with'],
  pray_home: ['id_love_us_to', 'sometimes', 'id_like_to_learn', 'id_rather_talk_about'],
  fasts: ['keeping_them_is_part', 'i_keep_some', 'my_church_doesnt_follow'],
  faith_own: ['i_grew_up_with', 'as_an_adult', 'recently', 'its_still_growing'],
  communion: ['the_true_body_and', 'christ_truly_present_in', 'a_memorial_of_his', 'my_church_doesnt_celebrate', 'im_still_learning'],
  scripture: ['scripture_within_the_tradition', 'scripture_as_the_final', 'scripture_tradition_and_reason', 'im_not_sure_how'],
  saints: ['asking_the_theotokos_our', 'not_my_practice_but', 'im_not_comfortable_with'],
  confession: ['i_go_to_confession', 'i_confess_to_god', 'both'],
  child_baptism: ['babies_are_baptised', 'children_are_baptised_when', 'id_follow_our_church'],
  marriage_is: ['a_sacrament_a_holy', 'a_holy_covenant_before', 'both_words_fit_for', 'im_still_learning'],
  chastity: ['yes', 'id_rather_talk_about'],
  leadership: ['the_husband_leads_by', 'husband_and_wife_lead', 'somewhere_between', 'wed_work_it_out'],
  remarriage: ['my_church_doesnt_allow', 'my_church_allows_it', 'id_follow_my_churchs', 'im_not_sure'],
  preparation: ['id_want_us_to', 'yes_if_our_church', 'open'],
  work_home: ['both_of_us_working', 'one_of_us_at', 'wed_decide_together'],
  money: ['one_shared_account', 'shared_and_some_of', 'wed_decide_together'],
  engaged_when: ['within_about_6_months', '6_12_months', '1_2_years', 'no_timeline_when_its'],
  children_hope: ['yes', 'open_if_god_gives', 'id_prefer_not_to', 'id_rather_talk_about'],
  family_planning: ['natural_family_planning_only', 'id_follow_my_conscience', 'id_rather_talk_about'],
  children_church: ['my_church', 'my_future_spouses_church', 'wed_decide_together'],
  have_children: ['no', 'yes_living_with_me', 'yes_not_living_with', 'id_rather_say_in'],
  adoption: ['yes_id_be_open', 'perhaps', 'not_for_me'],
  parent_home: ['yes_id_expect_it', 'perhaps', 'id_hope_not'],
  move: ['yes_anywhere_in_the', 'within_my_region', 'no'],
  family_role: ['very_id_want_my', 'involved_but_its_our', 'our_choice_families_come'],
  alcohol: ['i_dont_drink', 'sometimes', 'no_strong_view']
};
export const optId = (q: Q, n: number) => OPTION_IDS[q.id][n];

/** A group is done only when every question has an answer or "I'd rather not say". */
export const groupDone = (s: Section, ans: Record<string, string[]>) => s.qs.every((q) => (ans[q.id] ?? []).length > 0);

export const nextNeeded = (ans: Record<string, string[]>) => SECTIONS.find((s) => s.needed && !groupDone(s, ans));
export const readyForIntros = (ans: Record<string, string[]>) => !nextNeeded(ans);
export const SKIP = 'rather_not_say';
