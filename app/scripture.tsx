import { router } from 'expo-router';
import { Back, Body, Label, Screen, Title, Verse } from '@/components/ui';

// Marriage in Scripture (pastoral study 26 Nov, D3). BSB, checked word for word. Draft.
export default function Scripture() {
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Title>Marriage in Scripture</Title>
      <Label>A good gift from the beginning</Label>
      <Verse text="For this reason a man will leave his father and mother and be united to his wife, and they will become one flesh." reference="Genesis 2:24" />
      <Label>Freely chosen</Label>
      <Body>When Rebekah’s family were asked about her marriage, they said, “We will call the girl and ask her opinion.” She said, “I will go.” (Genesis 24:57–58). Nobody can choose for you.</Body>
      <Label>A covenant for life</Label>
      <Verse text="So they are no longer two, but one flesh. Therefore what God has joined together, let man not separate." reference="Matthew 19:6" />
      <Label>Love that gives itself</Label>
      <Verse text="Submit to one another out of reverence for Christ." reference="Ephesians 5:21" />
      <Verse text="Husbands, love your wives, just as Christ loved the church and gave Himself up for her" reference="Ephesians 5:25" />
      <Label>Not the only good life</Label>
      <Verse text="…each man has his own gift from God; one has this gift, another has that." reference="1 Corinthians 7:7" />
      <Body>Churches teach and celebrate marriage in their own ways. Your priest or pastor will help you prepare. Covenant can introduce you. It can’t promise a marriage, and your life with God doesn’t wait on one.</Body>
    </Screen>
  );
}
