import { router } from 'expo-router';
import { Back, Body, Button, Card, Screen, Title } from '@/components/ui';

// ID and selfie (prototype V.idcheck). No ID partner is connected yet, so the test version says so
// plainly and takes no photos.
export default function IdCheck() {
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Title>Your ID and a selfie</Title>
      <Card>
        <Body>In the real app, our ID partner opens here: a photo of your passport or driving licence, then a short live selfie.</Body>
        <Body small muted>This test version isn’t connected to an ID partner, so no photos are taken.</Body>
      </Card>
      <Button kind="primary" label="Continue without photos (test)" onPress={() => router.push('/checked')} />
    </Screen>
  );
}
