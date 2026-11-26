import { router, useLocalSearchParams } from 'expo-router';
import { Body, Button, Screen, TextLink, Title } from '@/components/ui';
import { resetTo, useAnswers } from '@/lib/onboarding';
import { nextNeeded, SECTIONS } from '@/lib/questions';

// End of a group (prototype V.secdone). "Done" only when every question has an answer or "I'd rather not
// say"; otherwise "saved", with no count of what's missing.
export default function SectionDone() {
  const { sec, all } = useLocalSearchParams<{ sec: string; all?: string }>();
  const { a } = useAnswers();
  const section = SECTIONS.find((s) => s.k === sec) ?? SECTIONS[0];
  const done = all === '1';
  const need = nextNeeded(a.ans);
  return (
    <Screen>
      <Title style={{ marginTop: 40 }}>{section.name}: {done ? 'done' : 'saved'}</Title>
      <Body>
        {done ? 'Thank you for answering honestly. ' : 'Thank you. You can come back to the questions you skipped whenever you’re ready. '}
        {need ? `Next, when you’re ready: ${need.name}.` : 'Your first introductions can come on a Thursday evening.'}
      </Body>
      <Button kind="primary" label={need ? 'Continue' : 'Go to Home'}
        onPress={() => (need ? router.replace({ pathname: '/q', params: { sec: need.k } }) : resetTo('/home'))} />
      {need ? <TextLink label="That’s enough for today" onPress={() => resetTo('/home')} /> : <TextLink label="Answer more questions" onPress={() => router.replace('/questions')} />}
    </Screen>
  );
}
