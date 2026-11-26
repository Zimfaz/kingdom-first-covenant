import { router } from 'expo-router';
import { Back, Body, Screen, Title, Verse } from '@/components/ui';

// For those still waiting, and for anyone who never marries (pastoral study 26 Nov, D6). Draft.
export default function Waiting() {
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Title>Still waiting</Title>
      <Body>Waiting can hurt, and it’s all right to tell God so. We can’t promise a marriage. Your life with God isn’t on hold, and it isn’t second best.</Body>
      <Verse text="Trust in Him at all times, O people; pour out your hearts before Him. God is our refuge." reference="Psalm 62:8" />
      <Title style={{ fontSize: 26, marginTop: 28 }}>A single life</Title>
      <Body>Jesus never married. Paul calls marriage and single life each a gift from God. Many Christians are called to a single life, and many find it rich and full of love. If you leave without marrying, you haven’t missed your life.</Body>
      <Verse text="…each man has his own gift from God; one has this gift, another has that." reference="1 Corinthians 7:7" />
    </Screen>
  );
}
