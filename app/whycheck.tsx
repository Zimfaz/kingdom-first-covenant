import { router } from 'expo-router';
import { Back, Bullets, Button, Card, Body, Eyebrow, Screen, Title } from '@/components/ui';

// Why we check ID (prototype V.whycheck).
export default function WhyCheck() {
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Eyebrow>Keeping everyone safe</Eyebrow>
      <Title>We check everyone’s ID</Title>
      <Body>Everyone here, and every companion, shows a photo ID and takes a short live selfie. That keeps out people under 18, fake profiles and scammers.</Body>
      <Card>
        <Bullets items={['Your age comes from your ID, so you never type it', 'Your ID images are deleted as soon as the check passes', 'We pay for the check; safety is never something you buy']} />
      </Card>
      <Button kind="primary" label="Check my ID" onPress={() => router.push('/idcheck')} />
    </Screen>
  );
}
