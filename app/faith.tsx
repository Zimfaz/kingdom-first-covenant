import { router } from 'expo-router';
import { Back, Body, Button, Card, Eyebrow, Screen, TextLink, Title, Verse } from '@/components/ui';

// The faith we share (prototype V.faith). Wording is draft; the marriage line follows the pastoral study of 26 Nov (D7), still to be checked by the solicitor.
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
        <Body small muted>The historic teaching of the Church, held today by the Catholic and Orthodox Churches and many others. Covenant introduces people on this basis.</Body>
      </Card>
      <Verse text="So they are no longer two, but one flesh. Therefore what God has joined together, let man not separate." reference="Matthew 19:6" />
      <Button kind="primary" label="Yes, I believe this" onPress={() => router.push('/church')} />
      <TextLink label="I’m still exploring" onPress={() => router.push('/exploring')} />
    </Screen>
  );
}
