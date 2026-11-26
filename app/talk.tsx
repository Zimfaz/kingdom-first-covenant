import React from 'react';
import { router } from 'expo-router';
import { TextInput } from 'react-native';
import { Back, Body, Button, Card, Opt, Screen, Title } from '@/components/ui';
import { FORCED, Lines } from '@/components/helplines';
import { TEST_BUILD } from '@/lib/onboarding';
import { fonts, radius, space, usePalette } from '@/theme';

// Talk to us privately (prototype SH.pressure; pastoral study 26 Nov, C7). Nobody in a conversation,
// companions included, can see this or learn it was sent. Forced marriage follows the UK statutory
// guidance: staff never contact or involve the family, and the help lines show before anything is sent.
const WHY = [
  'I feel pressured to go faster or to marry',
  'My family or someone else is pushing me to marry',
  'Someone has asked me for money',
  'I’m worried about my safety',
  'Something else'
];

export default function Talk() {
  const p = usePalette();
  const [why, setWhy] = React.useState<number[]>([]);
  const [text, setText] = React.useState('');
  const forced = why.includes(1);
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Title>Talk to us privately</Title>
      <Body>Nobody you’re talking with can see this, and that includes the companions. We usually reply the same day, but we can’t respond in an emergency. If someone is in danger now, call 999.</Body>
      {WHY.map((w, n) => (
        <Opt key={w} label={w} multi on={why.includes(n)} onPress={() => setWhy(why.includes(n) ? why.filter((x) => x !== n) : [...why, n])} />
      ))}
      {forced ? (
        <Card>
          <Body>You have the right to choose. Nobody can make you marry, or marry someone, against your will. That’s the law, and it’s what every church teaches.</Body>
          <Lines head="Help with forced marriage" items={FORCED} />
          <Lines head="In danger now?" items={[['Police, ambulance or fire', '999']]} />
          <Body small muted>We will never contact your family about this.</Body>
        </Card>
      ) : null}
      <TextInput accessibilityLabel="Tell us more (optional)" value={text} onChangeText={setText} multiline placeholder="Tell us more, if you’d like" placeholderTextColor={p.muted}
        style={{ fontFamily: fonts.body, fontSize: 16, color: p.ink, backgroundColor: p.surface, borderColor: p.line, borderWidth: 1.5, borderRadius: radius.button, minHeight: 110, padding: space.l, textAlignVertical: 'top', marginBottom: space.m }} />
      {TEST_BUILD ? <Body small muted>Test version: nothing is sent yet.</Body> : null}
      <Button kind="primary" label="Send to the Covenant team" onPress={() => router.replace({ pathname: '/sent', params: { k: 'talk' } })} />
      <Button kind="quiet" label="Not now" onPress={() => router.back()} />
    </Screen>
  );
}
