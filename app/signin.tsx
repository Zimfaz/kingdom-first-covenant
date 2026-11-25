import { useState } from 'react';
import { TextInput } from 'react-native';
import { router } from 'expo-router';
import { Back, Body, Button, Card, Screen, Title } from '@/components/ui';
import { fonts, radius, space, usePalette } from '@/theme';

// Create account / Sign in (build plan step 3: email code plus App review sign-in).
// Sign-ups are switched off on the server until the solicitor, DPIA and safeguarding checks are done,
// so this screen says so plainly instead of pretending to create an account.
export default function SignIn() {
  const p = usePalette();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Title>Create your account</Title>
      <Body muted>We’ll email you a code. We never post anything for you.</Body>
      <TextInput
        accessibilityLabel="Email address"
        placeholder="Email address"
        placeholderTextColor={p.muted}
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{ fontFamily: fonts.body, fontSize: 16, color: p.ink, backgroundColor: p.surface, borderColor: p.line, borderWidth: 1.5, borderRadius: radius.button, minHeight: 52, paddingHorizontal: space.l, marginVertical: space.s }}
      />
      <Button kind="primary" label="Email me a code" onPress={() => setSent(true)} />
      {sent && (
        <Card>
          <Body>Kingdom First Covenant isn’t open yet, so we can’t create accounts. Thank you for your interest.</Body>
          <Body small muted>Joining opens later, in the UK first.</Body>
        </Card>
      )}
    </Screen>
  );
}
