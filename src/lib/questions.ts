// Faith and marriage questions (Tier 1), from the prototype's SECS, with the pastoral study of 26 Nov 2026
// applied. Draft wording: the pastoral reviewer and a reader from each tradition check before testers see it.
// "Which church families would you be open to?" lives on the Who you're open to screen, not here.
export type Q = { text: string; options: string[]; multi?: boolean; note?: string };
export type Section = { k: string; name: string; needed?: boolean; qs: Q[] };

export const SECTIONS: Section[] = [
  { k: 'B', name: 'Your faith and church', needed: true, qs: [
    { text: 'Have you been baptised?', options: ['Yes, as a baby', 'Yes, as a believer', 'Yes, I was received or chrismated', 'Not yet; I’m preparing', 'I’m not sure'], note: 'If you are Catholic or Orthodox, your church will ask for a baptism certificate before a wedding.' },
    { text: 'How often do you worship with your church?', options: ['Every Sunday or more', 'Most weeks', 'Sometimes', 'I’m looking for a church at the moment'] },
    { text: 'Where would you hope to worship as a married couple?', options: ['In my church', 'In my future spouse’s church', 'Each in our own, sometimes together', 'We’d decide together with our priest or pastor'] },
    { text: 'Prayer together at home', options: ['I’d love us to pray together most days', 'Sometimes', 'I’d like to learn how', 'I’d rather talk about it'] },
    { text: 'The church year: fasts and feasts', options: ['Keeping them is part of my life', 'I keep some', 'My church doesn’t follow the church year'], note: 'Many Orthodox and Catholic homes keep the fasts together, and it shapes family life.' },
    { text: 'How did faith become your own?', options: ['I grew up with it', 'As an adult', 'Recently', 'It’s still growing'] }
  ] },
  { k: 'C', name: 'The Church and the sacraments', qs: [
    { text: 'Holy Communion (the Eucharist, the Lord’s Supper) is…', options: ['the true Body and Blood of Christ', 'Christ truly present in a spiritual way', 'a memorial of His death, which we do as He commanded', 'I’m still learning'], note: 'Christians answer these differently. There are no wrong answers here, only honest ones.' },
    { text: 'How does your church read Scripture?', options: ['Scripture within the Tradition of the Church', 'Scripture as the final authority', 'Scripture, tradition and reason together', 'I’m not sure how to put it'] },
    { text: 'Mary and the saints', options: ['Asking the Theotokos / Our Lady and the saints to pray for us is part of my faith', 'Not my practice, but I respect it', 'I’m not comfortable with it'] },
    { text: 'Confession', options: ['I go to confession with a priest', 'I confess to God, sometimes with a pastor or friend', 'Both'] },
    { text: 'Baptism of children', options: ['Babies are baptised', 'Children are baptised when they come to faith', 'I’d follow our church'] },
    { text: 'Marriage is…', options: ['a sacrament', 'a holy covenant before God', 'both words fit for me'] }
  ] },
  { k: 'D', name: 'Marriage itself', needed: true, qs: [
    { text: 'From now until our wedding, I want to keep sex for marriage.', options: ['Yes', 'I’d rather talk about it'], note: 'This is about from now on, not about your past.' },
    { text: 'Leadership and decisions in marriage', options: ['The husband leads by serving in love; we’re equal in worth', 'Husband and wife lead together as equals', 'Somewhere between', 'We’d work it out with our church’s guidance'], note: 'Whatever you believe about leadership in marriage, it never means control, fear or harm. Paul begins, “Submit to one another out of reverence for Christ” (Ephesians 5:21). If anyone uses Scripture to frighten or control you, please tell us.' },
    { text: 'After divorce, remarriage while a former spouse is living…', options: ['My church doesn’t allow it without a declaration of nullity', 'My church allows it in some cases', 'I’d follow my church’s guidance', 'I’m not sure'] },
    { text: 'Marriage preparation', options: ['I’d want us to do our church’s marriage preparation', 'Yes, if our church offers it', 'Open'] },
    { text: 'Work and home', options: ['Both of us working', 'One of us at home while children are young', 'We’d decide together'] },
    { text: 'Money', options: ['One shared account', 'Shared and some of our own', 'We’d decide together'] },
    { text: 'If an introduction feels right, when would you hope to be engaged?', options: ['Within about 6 months', '6–12 months', '1–2 years', 'No timeline; when it’s right'] }
  ] },
  { k: 'E', name: 'Children and family', qs: [
    { text: 'Would you like to have or raise children?', options: ['Yes', 'Open, if God gives them', 'I’d prefer not to', 'I’d rather talk about it'] },
    { text: 'Family planning', options: ['Natural family planning only, as my church teaches', 'I’d follow my conscience and my church’s guidance', 'I’d rather talk about it'] },
    { text: 'Our children would be baptised and brought up in…', options: ['my church', 'my future spouse’s church', 'we’d decide together'] },
    { text: 'Do you have children?', options: ['No', 'Yes, living with me', 'Yes, not living with me', 'I’d rather say in conversation'] },
    { text: 'Adoption and fostering', options: ['Yes, I’d be open', 'Perhaps', 'Not for me'] },
    { text: 'A parent living with us one day', options: ['Yes, I’d expect it', 'Perhaps', 'I’d hope not'] }
  ] },
  { k: 'F', name: 'Everyday life', qs: [
    { text: 'Would you move for marriage?', options: ['Yes, anywhere in the UK', 'Within my region', 'No'] },
    { text: 'How involved would you like your families to be?', options: ['Very: I’d want my family’s blessing before engagement', 'Involved, but it’s our choice', 'Our choice; families come later'], note: 'However involved your family is, the choice to marry is yours alone. Nobody can make it for you.' },
    { text: 'Alcohol', options: ['I don’t drink', 'Sometimes', 'No strong view'] }
  ] }
];

export const nextNeeded = (done: string[]) => SECTIONS.find((s) => s.needed && !done.includes(s.k));
export const readyForIntros = (done: string[]) => !nextNeeded(done);
