import { router } from 'expo-router';
import { Body, Card, Row, Screen, Title } from '@/components/ui';
import { Text } from 'react-native';
import { useAnswers } from '@/lib/onboarding';
import { fonts, usePalette } from '@/theme';

// Me (prototype V.me). The season row comes in milestone 2 with the season price.
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
      <Row title="My answers" onPress={() => router.push('/questions')} />
      <Row title="Who I’m open to" onPress={() => router.push('/open')} />
      <Row title="My companion" note="Chosen later" onPress={() => router.push('/companion')} />
      <Row title="Pause introductions" note={a.paused ? 'Paused' : undefined} onPress={() => router.push('/pause')} />
      <Row title="Get help now" onPress={() => router.push('/help')} />
      <Row title="Talk to us privately" onPress={() => router.push('/talk')} />
      <Row title="Marriage in Scripture" onPress={() => router.push('/scripture')} />
      <Row title="Leave Covenant" onPress={() => router.push('/leave')} />
      <Body small muted>Kingdom First Covenant, from the makers of Kingdom First Life.</Body>
    </Screen>
  );
}
