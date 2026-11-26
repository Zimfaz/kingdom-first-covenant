import React from 'react';
import { router } from 'expo-router';
import { Back, Body, Button, Eyebrow, Field, Label, Opt, Screen, Title } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';

// Your church (prototype V.church). Church families grouped as in the church-calendar review.
export const CHURCHES: [string, string[]][] = [
  ['Catholic', ['Catholic (Latin, Roman)', 'Eastern Catholic: Byzantine', 'Eastern Catholic: Maronite, Syro-Malabar, Chaldean and others']],
  ['Orthodox', ['Eastern Orthodox (Greek, Antiochian, Romanian and others)', 'Eastern Orthodox (Russian, Serbian, Georgian and others)', 'Coptic Orthodox', 'Ethiopian or Eritrean Orthodox Tewahedo', 'Armenian Apostolic', 'Syriac or Malankara Orthodox']],
  ['Anglican', ['Church of England', 'Church in Wales', 'Scottish Episcopal Church', 'Church of Ireland']],
  ['Protestant and free churches', ['Baptist', 'Methodist', 'Pentecostal', 'Presbyterian or Reformed', 'Independent or non-denominational', 'Charismatic', 'Salvation Army', 'Quaker']],
  ['Others', ['I’m between churches', 'Another church']]
];

export default function Church() {
  const { a, set } = useAnswers();
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Eyebrow>About you</Eyebrow>
      <Title>Your church</Title>
      <Body>Which church family do you belong to?</Body>
      {CHURCHES.map(([group, list]) => (
        <React.Fragment key={group}>
          <Label>{group}</Label>
          {list.map((c) => <Opt key={c} label={c} on={a.church === c} onPress={() => set({ church: c })} />)}
        </React.Fragment>
      ))}
      <Field label="Your parish or church (optional)" value={a.parish} onChangeText={(t) => set({ parish: t })} placeholder="e.g. St Anne’s, Leeds" hint="Only shown once you’re talking with someone." />
      {!a.church && <Body small muted>Choose one to continue.</Body>}
      <Button kind="primary" label={a.setupDone ? 'Save' : 'Next'} disabled={!a.church} onPress={() => (a.setupDone ? router.back() : router.push('/story'))} />
    </Screen>
  );
}
