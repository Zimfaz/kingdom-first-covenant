import React from 'react';
import { router } from 'expo-router';
import { Body, Brand, Button, Card, Eyebrow, Screen, TextLink, Title, Verse } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';
import { nextNeeded } from '@/lib/questions';

// Home (prototype V.home): one next step, then a quiet word. No counts, nothing "missed", no empty week
// before introductions are possible, and no button that leads to an empty screen (behavioural review).
export default function Home() {
  const { a, set } = useAnswers();
  React.useEffect(() => { if (!a.setupDone) set({ setupDone: true }); }, [a.setupDone, set]);
  const need = nextNeeded(a.ans);
  return (
    <Screen tab="home">
      <Brand />
      <Title style={{ marginTop: 22 }}>Hello{a.firstName ? `, ${a.firstName}` : ''}</Title>
      {a.paused ? (
        <>
          <Body>Your introductions are paused{a.paused === 'until I start again' ? '' : ` for ${a.paused}`}.</Body>
          <Body muted>Nobody else can see that you’ve paused. Take the time you need.</Body>
          <TextLink label="Start introductions again" onPress={() => set({ paused: false })} />
        </>
      ) : need ? (
        <>
          <Body>Your next step: {need.name}.</Body>
          <Body muted>About five minutes. Introductions can start once “Your faith and church” and “Marriage itself” are answered.</Body>
          <Button kind="primary" label="Continue the questions" onPress={() => router.push({ pathname: '/q', params: { sec: need.k } })} />
        </>
      ) : (
        <>
          <Body>Introductions come on Thursday evenings, never on a Sunday.</Body>
          <Body muted>We only introduce people who fit what you’ve told us matters most. If there’s nobody yet, we’ll wait with you rather than rush.</Body>
          <TextLink label="Answer more questions ›" onPress={() => router.push('/questions')} />
        </>
      )}
      <Card>
        <Eyebrow>A quiet word</Eyebrow>
        <Verse text="The LORD is good to those who wait for Him, to the soul who seeks Him." reference="Lamentations 3:25" />
      </Card>
      <TextLink label="Marriage in Scripture ›" onPress={() => router.push('/scripture')} />
    </Screen>
  );
}
