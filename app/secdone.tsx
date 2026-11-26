import { router, useLocalSearchParams } from 'expo-router';
import { Body, Button, Screen, TextLink, Title } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';
import { nextNeeded, SECTIONS } from '@/lib/questions';

// "<group>: done" (prototype V.secdone). No ticks or counts.
export default function SectionDone() {
  const { sec } = useLocalSearchParams<{ sec: string }>();
  const { a } = useAnswers();
  const section = SECTIONS.find((s) => s.k === sec) ?? SECTIONS[0];
  const need = nextNeeded(a.done);
  return (
    <Screen>
      <Title style={{ marginTop: 40 }}>{section.name}: done</Title>
      <Body>Thank you for answering honestly. {need ? `Next, when you’re ready: ${need.name}.` : 'Introductions come on Thursday evenings, up to three at a time.'}</Body>
      <Button kind="primary" label={need ? 'Continue' : 'Go to Home'}
        onPress={() => (need ? router.replace({ pathname: '/q', params: { sec: need.k } }) : router.replace('/home'))} />
      {need ? <TextLink label="That’s enough for today" onPress={() => router.replace('/home')} /> : <TextLink label="Answer more questions" onPress={() => router.replace('/questions')} />}
    </Screen>
  );
}
