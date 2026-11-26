import { router } from 'expo-router';
import { Body, Brand, Bullets, Button, Card, Screen, TextLink, Title } from '@/components/ui';

// Welcome (prototype V.welcome, covenant/prototype/index.html). Wording is draft until the pastoral reviewer checks it.
export default function Welcome() {
  return (
    <Screen>
      <Brand />
      <Title style={{ marginTop: 28 }}>For marriage, and never one-to-one.</Title>
      <Body>Every conversation includes a companion for each of you: someone you trust, such as a family member, friend, priest or pastor. We introduce Christians who hope to marry, slowly and with care.</Body>
      <Body muted>Marriage is a good gift from God. So is a single life lived for Him. You’re not waiting to become complete.</Body>
      <Card>
        <Bullets items={['A companion for each of you in every conversation', 'Faith and marriage questions first', 'Photos only when you both say yes']} />
      </Card>
      <Button kind="primary" label="Begin" onPress={() => router.push('/yes')} />
      <TextLink label="I already have an account" onPress={() => router.push('/signin')} />
      <TextLink label="Get help now" onPress={() => router.push('/help')} />
    </Screen>
  );
}
