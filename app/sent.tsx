import { router, useLocalSearchParams } from 'expo-router';
import { Body, Button, Screen, Title } from '@/components/ui';

// After Talk to us privately or Report (prototype SH.sent).
export default function Sent() {
  const { k } = useLocalSearchParams<{ k?: string }>();
  return (
    <Screen>
      <Title style={{ marginTop: 40 }}>Thank you for telling us</Title>
      <Body>A member of the Covenant team will look at this today. {k === 'report' ? 'You can close an introduction at any time, without giving a reason.' : 'You can pause or close an introduction at any time, without giving a reason.'}</Body>
      <Body muted>If someone is in danger now, call 999.</Body>
      <Button kind="primary" label="Done" onPress={() => (router.canGoBack() ? router.back() : router.replace('/home'))} />
      <Button kind="quiet" label="Get help now" onPress={() => router.push('/help')} />
    </Screen>
  );
}
