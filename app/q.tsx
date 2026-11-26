import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { Back, Body, Button, Opt, Screen, TextLink, Title, Toggle } from '@/components/ui';
import { Text, View } from 'react-native';
import { useAnswers } from '@/lib/onboarding';
import { SECTIONS } from '@/lib/questions';
import { fonts, space, usePalette } from '@/theme';

// One question at a time (prototype V.q). No "3 of 7": the group's name is enough.
export default function Question() {
  const p = usePalette();
  const { sec } = useLocalSearchParams<{ sec: string }>();
  const section = SECTIONS.find((s) => s.k === sec) ?? SECTIONS[0];
  const [i, setI] = React.useState(0);
  const { a, set } = useAnswers();
  const q = section.qs[i];
  const key = section.k + i;
  const chosen = (a.ans[key] ?? []).filter((x) => x >= 0);
  const must = a.must.includes(key);
  const last = i === section.qs.length - 1;

  const pick = (n: number) => {
    const next = q.multi ? (chosen.includes(n) ? chosen.filter((x) => x !== n) : [...chosen, n]) : [n];
    set({ ans: { ...a.ans, [key]: next } });
  };
  const next = () => {
    if (!last) return setI(i + 1);
    set({ done: a.done.includes(section.k) ? a.done : [...a.done, section.k] });
    router.replace({ pathname: '/secdone', params: { sec: section.k } });
  };

  return (
    <Screen>
      <Back label="Questions" onPress={() => (i > 0 ? setI(i - 1) : router.back())} />
      <Text style={{ fontFamily: fonts.bodySemi, fontSize: 13, letterSpacing: 1.6, textTransform: 'uppercase', color: p.muted, marginTop: space.s }}>{section.name}</Text>
      <Title style={{ fontSize: 27, lineHeight: 32 }}>{q.text}</Title>
      {q.note ? <Body small muted>{q.note}</Body> : null}
      <View accessibilityRole={q.multi ? undefined : 'radiogroup'}>
        {q.options.map((o, n) => <Opt key={o} label={o} on={chosen.includes(n)} multi={q.multi} onPress={() => pick(n)} />)}
      </View>
      <Toggle label="This matters a lot to me" on={must}
        onPress={() => set({ must: must ? a.must.filter((k) => k !== key) : [...a.must, key] })} />
      {a.must.length >= 5 && !must ? (
        <Body small muted>You’ve marked a few already. Keeping these for what truly matters means more people can be introduced to you.</Body>
      ) : null}
      <Button kind="primary" label={last ? 'Finish this group' : 'Next'} onPress={next} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', columnGap: space.l }}>
        <TextLink label="Skip for now" onPress={next} />
        <TextLink label="I’d rather not say" onPress={() => { set({ ans: { ...a.ans, [key]: [-1] } }); next(); }} />
      </View>
    </Screen>
  );
}
