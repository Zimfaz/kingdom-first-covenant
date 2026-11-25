import { router } from 'expo-router';
import { Body, Brand, Bullets, Button, Card, Screen, TextLink, Title, Verse } from '@/components/ui';

// Welcome (prototype V.welcome, covenant/prototype/index.html). Wording is draft until the pastoral reviewer checks it.
export default function Welcome() {
  return (
    <Screen>
      <Brand />
      <Title style={{ marginTop: 28 }}>Introductions for marriage, not dating.</Title>
      <Body>We introduce Christians who hope to marry, slowly and with care, in conversations that always include a companion you trust.</Body>
      <Body muted>Marriage is a good gift from God. So is a single life lived for Him. You’re not waiting to become complete.</Body>
      <Verse text="…each man has his own gift from God; one has this gift, another has that." reference="1 Corinthians 7:7" />
      <Card>
        <Bullets items={['Faith and marriage questions first', 'Photos only when you both say yes', 'Every conversation includes your companions']} />
      </Card>
      <Button kind="primary" label="Begin" onPress={() => router.push('/yes')} />
      <TextLink label="I already have an account" onPress={() => router.push('/signin')} />
      <TextLink label="Get help now" onPress={() => router.push('/help')} />
    </Screen>
  );
}
