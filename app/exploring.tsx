import { router } from 'expo-router';
import { Body, Button, Screen, Title } from '@/components/ui';

// Still exploring (prototype V.exploring).
export default function Exploring() {
  return (
    <Screen>
      <Title style={{ marginTop: 40 }}>This app is for Christians who share this faith</Title>
      <Body>Kingdom First Covenant introduces people for a Christian marriage that every main church can bless. If you’re still exploring, we’re really glad you’re asking.</Body>
      <Body>A local church, or our sister app Kingdom First Life, could be a good place to start.</Body>
      <Button label="Go back" onPress={() => router.back()} />
    </Screen>
  );
}
