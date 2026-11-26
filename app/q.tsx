import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { Back, Body, Button, Opt, Screen, TextLink, Title, Toggle } from '@/components/ui';
import { resetTo, useAnswers } from '@/lib/onboarding';
import { groupDone, optId, SECTIONS, SKIP } from '@/lib/questions';
import { fonts, space, usePalette } from '@/theme';

// One question at a time (prototype V.q). No "3 of 7": the group's name is enough.
// Answers are saved by fixed ids. "This matters a lot to me" only on hopes and beliefs, and only once an
// answer is chosen (behavioural and product reviews, 26 Nov). No nudge to unmark: no count, no cap note.
export default function Question() {
  const p = usePalette();
  const { sec } = useLocalSearchParams<{ sec: string }>();
  const section = SECTIONS.find((s) => s.k === sec) ?? SECTIONS[0];
  const [i, setI] = React.useState(0);
  const { a, set } = useAnswers();
  const q = section.qs[i];
  const saved = a.ans[q.id] ?? [];
  const chosen = saved.filter((x) => x !== SKIP);
  const must = a.must.includes(q.id);
  const last = i === section.qs.length - 1;

  const pick = (n: number) => {
    const id = optId(q, n);
    const next = q.multi ? (chosen.includes(id) ? chosen.filter((x) => x !== id) : [...chosen, id]) : [id];
    set({ ans: { ...a.ans, [q.id]: next }, must: next.length ? a.must : a.must.filter((k) => k !== q.id) });
  };
  const finish = (ans: Record<string, string[]>) => {
    router.replace({ pathname: '/secdone', params: { sec: section.k, all: groupDone(section, ans) ? '1' : '0' } });
  };
  const next = (ans = a.ans) => (last ? finish(ans) : setI(i + 1));
  const rather = () => {
    const ans = { ...a.ans, [q.id]: [SKIP] };
    set({ ans, must: a.must.filter((k) => k !== q.id) });
    next(ans);
  };

  return (
    <Screen>
      <Back onPress={() => (i > 0 ? setI(i - 1) : router.back())} />
      <Text style={{ fontFamily: fonts.bodySemi, fontSize: 13, letterSpacing: 1.6, textTransform: 'uppercase', color: p.muted, marginTop: space.s }}>{section.name}</Text>
      <Title style={{ fontSize: 27, lineHeight: 32 }}>{q.text}</Title>
      {q.note ? <Body small muted>{q.note}</Body> : null}
      {q.id === 'leadership' ? <TextLink label="Talk to us privately ›" onPress={() => router.push('/talk')} /> : null}
      <View accessibilityRole={q.multi ? undefined : 'radiogroup'}>
        {q.options.map((o, n) => <Opt key={o} label={o} on={chosen.includes(optId(q, n))} multi={q.multi} onPress={() => pick(n)} />)}
      </View>
      {!q.fact ? (
        <Toggle label="This matters a lot to me" on={must} disabled={!chosen.length}
          onPress={() => set({ must: must ? a.must.filter((k) => k !== q.id) : [...a.must, q.id] })} />
      ) : null}
      <Button kind="primary" label={last ? 'Finish this group' : 'Next'} disabled={!chosen.length && saved[0] !== SKIP} onPress={() => next()} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', columnGap: space.l }}>
        <TextLink label="Skip for now" onPress={() => next()} />
        <TextLink label="I’d rather not say" onPress={rather} />
      </View>
      {last ? null : <TextLink label="Stop for now" onPress={() => resetTo('/home')} />}
    </Screen>
  );
}
