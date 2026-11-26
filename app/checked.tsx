import { resetTo } from '@/lib/onboarding';
import { Body, Button, Screen, Title } from '@/components/ui';

// Checked (prototype V.checked). In the test version nothing was checked, so it says what would happen.
export default function Checked() {
  return (
    <Screen>
      <Title style={{ marginTop: 40 }}>Thank you. You’re checked.</Title>
      <Body>In the real app this screen confirms your ID matched your selfie and you’re over 18, and that your ID images have been deleted.</Body>
      <Body small muted>Test version: no check took place.</Body>
      <Button kind="primary" label="Continue" onPress={() => resetTo('/basics')} />
    </Screen>
  );
}
