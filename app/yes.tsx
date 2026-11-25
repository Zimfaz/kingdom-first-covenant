import { router } from 'expo-router';
import { Back, Body, Button, Eyebrow, Prayer, Screen, Title, Verse } from '@/components/ui';

// My yes / Before we begin (prototype V.yes).
export default function MyYes() {
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Eyebrow>My yes</Eyebrow>
      <Title>Before we begin</Title>
      <Body>I’m here to be introduced for marriage, not for dating or passing time. I’ll be honest about myself, and kind and clear if an introduction isn’t right.</Body>
      <Verse text="Simply let your ‘Yes’ be ‘Yes,’ and your ‘No,’ ‘No.’…" reference="Matthew 5:37" />
      <Prayer>Lord, You know me better than I know myself. Give me honesty, kindness and courage. Lead me in Your way, towards marriage or not, and keep my heart at rest in You. Amen.</Prayer>
      <Body small muted>A prayer before you begin, if you’d like.</Body>
      <Button kind="primary" label="This is my yes" onPress={() => router.push('/signin')} />
    </Screen>
  );
}
