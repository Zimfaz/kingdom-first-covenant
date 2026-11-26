import { router } from 'expo-router';
import { Back, Body, Button, Card, Eyebrow, Screen, TextLink, Title, Verse } from '@/components/ui';

// The faith we share (prototype V.faith). Wording is draft until the pastoral reviewer checks it.
export default function Faith() {
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Eyebrow>The faith we share</Eyebrow>
      <Title>Do you share this faith?</Title>
      <Card>
        <Body>“I believe in one God, Father, Son and Holy Spirit, and that Jesus Christ is truly God and truly man, who died for us and rose again.”</Body>
      </Card>
      <Card>
        <Body>“Marriage is a lifelong covenant between one man and one woman.”</Body>
        <Body small muted>The teaching of all the churches in this app.</Body>
      </Card>
      <Verse text="So they are no longer two, but one flesh. Therefore what God has joined together, let man not separate." reference="Matthew 19:6" />
      <Button kind="primary" label="Yes, I believe this" onPress={() => router.push('/church')} />
      <TextLink label="I’m still exploring" onPress={() => router.push('/exploring')} />
    </Screen>
  );
}
