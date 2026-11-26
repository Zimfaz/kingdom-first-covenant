import { router } from 'expo-router';
import { Body, Button, Eyebrow, Screen, TextLink, Title } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';
import { nextNeeded } from '@/lib/questions';

// Introductions (prototype V.intros / V.noneweek). Three states, never an empty week before one is possible:
// not ready yet, paused, and waiting for Thursday. Milestone 2 adds the introductions themselves.
export default function Intros() {
  const { a } = useAnswers();
  const need = nextNeeded(a.ans);
  return (
    <Screen tab="intros">
      <Eyebrow>Introductions</Eyebrow>
      {a.paused ? (
        <>
          <Title>Introductions are paused</Title>
          <Body>Nobody else can see that you’ve paused. Start again from Home whenever you’re ready.</Body>
        </>
      ) : need ? (
        <>
          <Title>Not yet</Title>
          <Body>Introductions can start once you’ve answered “Your faith and church” and “Marriage itself”.</Body>
          <Button kind="primary" label="Continue the questions" onPress={() => router.push({ pathname: '/q', params: { sec: need.k } })} />
        </>
      ) : (
        <>
          <Title>Nothing here yet</Title>
          <Body>Introductions come on Thursday evenings. When there’s nobody near you yet who shares what matters most to you, we’d rather wait than introduce you to someone who doesn’t.</Body>
          <Body muted>That isn’t a judgement on you.</Body>
        </>
      )}
      <TextLink label="Still waiting? A word for you ›" onPress={() => router.push('/waiting')} />
    </Screen>
  );
}
