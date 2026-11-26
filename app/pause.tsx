import React from 'react';
import { router } from 'expo-router';
import { Back, Body, Button, Opt, Screen, Title } from '@/components/ui';
import { useAnswers, type Answers } from '@/lib/onboarding';

type Len = Exclude<Answers['paused'], false>;
const LENS: Len[] = ['two weeks', 'a month', 'until I start again'];
const label = (l: Len) => l[0].toUpperCase() + l.slice(1);

// Pause introductions (prototype V.pause). Nobody can see a pause.
export default function Pause() {
  const { a, set } = useAnswers();
  const [len, setLen] = React.useState<Len>(a.paused || 'until I start again');
  return (
    <Screen tab="me">
      <Back label="Me" onPress={() => router.back()} />
      <Title>Pause introductions</Title>
      <Body>Take a break for as long as you need. Nobody can see that you’ve paused, and nothing is lost.</Body>
      {LENS.map((l) => <Opt key={l} label={label(l)} on={len === l} onPress={() => setLen(l)} />)}
      <Button kind="primary" label="Pause" onPress={() => { set({ paused: len }); router.replace('/home'); }} />
      {a.paused ? <Button kind="quiet" label="Start introductions again" onPress={() => { set({ paused: false }); router.replace('/home'); }} /> : null}
    </Screen>
  );
}
