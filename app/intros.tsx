import { router } from 'expo-router';
import { Body, Button, Card, Eyebrow, Screen, TextLink, Title } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';
import { readyForIntros } from '@/lib/questions';

// Introductions (prototype V.intros / V.noneweek). Milestone 1 shows the empty week only; introductions,
// the two yeses and Companions come in milestone 2. Never an empty strip or a count.
export default function Intros() {
  const { a } = useAnswers();
  return (
    <Screen tab="intros">
      <Eyebrow>Introductions</Eyebrow>
      <Title>No new introductions this week</Title>
      {readyForIntros(a.done) ? (
        <Body>That’s not a judgement on you. Sometimes there’s nobody near you yet who shares what matters most to you. We would rather wait than introduce you to the wrong person.</Body>
      ) : (
        <>
          <Body>Introductions start once you’ve answered Faith and church, and Marriage itself.</Body>
          <Button kind="primary" label="Continue the questions" onPress={() => router.push('/questions')} />
        </>
      )}
      <Card>
        <Body small muted>Up to three introductions, every Thursday evening. Never on a Sunday.</Body>
      </Card>
      <TextLink label="Still waiting? A word for you ›" onPress={() => router.push('/waiting')} />
    </Screen>
  );
}
