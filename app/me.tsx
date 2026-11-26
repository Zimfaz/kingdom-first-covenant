import { router } from 'expo-router';
import { Body, Card, Label, Row, Screen, Title } from '@/components/ui';
import { Text } from 'react-native';
import { useAnswers } from '@/lib/onboarding';
import { STORIES } from './story';
import { fonts, usePalette } from '@/theme';

// Me (prototype V.me), grouped (UX review 26 Nov). The season row comes in milestone 2 with the price.
export default function Me() {
  const p = usePalette();
  const { a } = useAnswers();
  const where = [a.town, a.church].filter(Boolean).join(' · ');
  return (
    <Screen tab="me">
      <Title>Me</Title>
      <Card>
        <Text style={{ fontFamily: fonts.displayBold, fontSize: 22, color: p.ink }}>{a.firstName || 'Your name'}</Text>
        {where ? <Body small muted>{where}</Body> : null}
      </Card>
      <Label>My profile</Label>
      <Row title="About me" note="First name, where you live" onPress={() => router.push('/basics')} />
      <Row title="My church" onPress={() => router.push('/church')} />
      <Row title="My story so far" note={STORIES.find(([k]) => k === a.story)?.[1]} onPress={() => router.push('/story')} />
      <Row title="My answers" onPress={() => router.push('/questions')} />
      <Label>Introductions</Label>
      <Row title="Who I’m open to" onPress={() => router.push('/open')} />
      <Row title="My companion" note="You’ll choose one before a conversation" onPress={() => router.push('/companion')} />
      <Row title="Pause introductions" note={a.paused ? 'Paused' : undefined} onPress={() => router.push('/pause')} />
      <Label>Help and safety</Label>
      <Row title="Get help now" onPress={() => router.push('/help')} />
      <Row title="Talk to us privately" onPress={() => router.push('/talk')} />
      <Row title="Marriage in Scripture" onPress={() => router.push('/scripture')} />
      <Row title="Still waiting, and a single life" onPress={() => router.push('/waiting')} />
      <Row title="Leave or delete my account" onPress={() => router.push('/leave')} />
      <Body small muted>Kingdom First Covenant, from the makers of Kingdom First Life.</Body>
    </Screen>
  );
}
