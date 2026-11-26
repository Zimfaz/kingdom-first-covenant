import { router } from 'expo-router';
import { Back, Body, Button, Screen, TextLink, Title } from '@/components/ui';

// Separated (prototype V.separated).
export default function Separated() {
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Title>Not yet, and that’s all right</Title>
      <Body>While you’re still married, even if you’re separated, Covenant can’t introduce you to anyone. We know this season can be very hard.</Body>
      <Body>When your divorce (and, if your church asks, a declaration of nullity or church permission) is complete, you’re welcome back.</Body>
      <TextLink label="If you’re not safe at home: Get help now ›" onPress={() => router.push('/help')} />
      <Button label="Go back" onPress={() => router.back()} />
    </Screen>
  );
}
