import { router } from 'expo-router';
import { Back, Body, Button, Eyebrow, Fold, Label, Opt, Screen, Title } from '@/components/ui';
import { resetTo, toggle, useAnswers, type Story } from '@/lib/onboarding';

// Who you're open to (prototype V.open). Teaching summaries are draft until the pastoral reviewer and
// a reader from each tradition check them.
const OPEN: [Story, string][] = [
  ['never', 'Never married'], ['widowed', 'Widowed'], ['nullity', 'Divorced, with a declaration of nullity'],
  ['permission', 'Divorced, with church permission to marry again'], ['divorced', 'Divorced'], ['process', 'Declaration of nullity or permission in process']
];
const TRADS = ['Catholic', 'Eastern Orthodox', 'Oriental Orthodox (Coptic, Ethiopian, Eritrean, Armenian, Syriac)', 'Anglican', 'Protestant and free churches'];
const TEACH: Record<string, string> = {
  Catholic: 'The Catholic Church teaches that a valid marriage lasts for life, so a civil divorce on its own doesn’t free someone to marry again in church. A declaration of nullity (often called an annulment) is the Church’s finding, after careful inquiry, that a true marriage bond never existed. It isn’t a “Catholic divorce”, and it doesn’t make children of that marriage illegitimate. This applies to anyone a Catholic marries, whether or not they’re Catholic. A widowed person is free to marry. If you’re unsure, your parish priest can help.',
  Orthodox: 'The Orthodox Church holds that marriage is for life, and it grieves when a marriage breaks down. Out of care for its people (this is called economia), a bishop may give a church divorce and allow a second, or even a third, marriage, usually with a quieter service of repentance and hope. Each diocese has its own process, so your priest will guide you.',
  Oriental: 'Your church has its own teaching on marriage after divorce, and some of it is stricter than in other churches. Please ask your priest before you choose.',
  Anglican: 'The Church of England teaches that marriage is for life. Since 2002 it has accepted that, in exceptional circumstances, a divorced person may marry in church while a former husband or wife is still living. The decision rests with the priest, who may also say no. A service of prayer and dedication after a civil wedding is another way. The Church in Wales, the Scottish Episcopal Church and other Anglican churches have their own guidance.',
  Protestant: 'Churches differ. Many allow remarriage after divorce, some only where there was adultery or desertion, and a few not while a former husband or wife is living. Your church’s leaders can tell you how they see it.'
};
const family = (c: string | null) =>
  !c ? 'Protestant' : /Coptic|Ethiopian|Armenian|Syriac/.test(c) ? 'Oriental' : /Orthodox/.test(c) ? 'Orthodox' : /Catholic/.test(c) ? 'Catholic' : /England|Wales|Scottish|Ireland/.test(c) ? 'Anglican' : 'Protestant';

export default function Open() {
  const { a, set } = useAnswers();
  const ready = a.openHist.length > 0 && a.openTrad.length > 0;
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Eyebrow>Who you’re open to</Eyebrow>
      <Title>Who would you be open to marrying?</Title>
      <Body>Tick everyone you could marry with a clear conscience. You can change this at any time, and nobody is told what you chose.</Body>
      {OPEN.map(([k, l]) => <Opt key={k} multi label={l} on={a.openHist.includes(k)} onPress={() => set({ openHist: toggle(a.openHist, k) })} />)}
      <Fold title="Read what my church teaches">
        <Body small>{TEACH[family(a.church)]}</Body>
        <Body small muted>Your church’s teaching and your priest’s or pastor’s guidance come first. This is only a short summary.</Body>
      </Fold>
      <Label>Which church families could you marry into?</Label>
      {TRADS.map((k) => <Opt key={k} multi label={k} on={a.openTrad.includes(k)} onPress={() => set({ openTrad: toggle(a.openTrad, k) })} />)}
      {!ready && <Body small muted>Tick at least one in each list to continue. Nothing is ticked for you.</Body>}
      <Button kind="primary" label="Save" disabled={!ready} onPress={() => (a.setupDone ? router.back() : resetTo('/questions'))} />
    </Screen>
  );
}
