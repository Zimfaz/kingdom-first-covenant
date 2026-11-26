import { router } from 'expo-router';
import { Body, Brand, Button, Card, Eyebrow, Screen, Title, Verse } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';
import { readyForIntros } from '@/lib/questions';

// Home (prototype V.home): one next step, then a quiet word. No counts, nothing "missed".
export default function Home() {
  const { a, set } = useAnswers();
  const ready = readyForIntros(a.done);
  return (
    <Screen tab="home">
      <Brand />
      <Title style={{ marginTop: 22 }}>Hello{a.firstName ? `, ${a.firstName}` : ''}</Title>
      {a.paused ? (
        <>
          <Body>Your introductions are paused.</Body>
          <Body muted>Nobody else can see that you’ve paused. Take the time you need.</Body>
          <Button kind="primary" label="Start again" onPress={() => set({ paused: false })} />
        </>
      ) : !ready ? (
        <>
          <Body>Your next step: the faith and marriage questions.</Body>
          <Body muted>About five minutes for each group. Introductions start once Faith and church, and Marriage itself, are done.</Body>
          <Button kind="primary" label="Continue the questions" onPress={() => router.push('/questions')} />
        </>
      ) : (
        <>
          <Body>No new introductions this week.</Body>
          <Body muted>Introductions come on Thursday evenings, up to three at a time, and never on a Sunday. We only introduce people we believe you could marry with a clear conscience.</Body>
          <Button label="See introductions" onPress={() => router.replace('/intros')} />
        </>
      )}
      <Card>
        <Eyebrow>A quiet word</Eyebrow>
        <Verse text="The LORD is good to those who wait for Him, to the soul who seeks Him." reference="Lamentations 3:25" />
      </Card>
    </Screen>
  );
}
