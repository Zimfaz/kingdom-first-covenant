import { router } from 'expo-router';
import { Body, Button, Card, Screen, Title } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';

// End of this part of the test version. The faith and marriage questions come next (not built yet).
export default function Saved() {
  const { a } = useAnswers();
  return (
    <Screen>
      <Title style={{ marginTop: 40 }}>Thank you{a.firstName ? `, ${a.firstName}` : ''}</Title>
      <Body>Next come the questions on faith and marriage, which help us introduce you to people you share the most with.</Body>
      <Card><Body small muted>Test version: the questions aren’t built yet, and your answers here are forgotten when you close the app.</Body></Card>
      <Button label="Back to the start" onPress={() => router.replace('/')} />
    </Screen>
  );
}
