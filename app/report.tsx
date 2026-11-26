import React from 'react';
import { router } from 'expo-router';
import { Back, Body, Button, Opt, Screen, Title } from '@/components/ui';
import { TEST_BUILD } from '@/lib/onboarding';

// Report (prototype SH.report). The person isn't told who reported them, and nor are the companions.
const WHY = ['Asking for money', 'Pressure or control', 'Rude or sexual messages', 'Not who they say they are', 'Something else'];

export default function Report() {
  const [why, setWhy] = React.useState<number[]>([]);
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Title>Report</Title>
      <Body muted>Tell us what happened. Nobody is told who reported them.</Body>
      {WHY.map((w, n) => (
        <Opt key={w} label={w} multi on={why.includes(n)} onPress={() => setWhy(why.includes(n) ? why.filter((x) => x !== n) : [...why, n])} />
      ))}
      {TEST_BUILD ? <Body small muted>Test version: nothing is sent yet.</Body> : null}
      <Button kind="primary" label="Send report" onPress={() => router.replace({ pathname: '/sent', params: { k: 'report' } })} />
      <Button kind="quiet" label="Cancel" onPress={() => router.back()} />
    </Screen>
  );
}
