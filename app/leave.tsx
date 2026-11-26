import React from 'react';
import { router } from 'expo-router';
import { Back, Body, Button, Card, Screen, TextLink, Title, Verse } from '@/components/ui';
import { TEST_BUILD, useAnswers } from '@/lib/onboarding';

// Leave Covenant (prototype V.leave). Delete my account asks first, on this screen (no pop-up).
export default function Leave() {
  const { reset } = useAnswers();
  const [sure, setSure] = React.useState(false);
  return (
    <Screen tab="me">
      <Back label="Me" onPress={() => router.back()} />
      <Title>Thank you for the care you’ve shown here</Title>
      <Body>Leaving without a marriage isn’t failing. Your life with God isn’t on hold, and nothing can separate you from His love.</Body>
      <Verse text="…nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." reference="Romans 8:39" />
      <TextLink label="A word on single life ›" onPress={() => router.push('/waiting')} />
      <Body muted>Your profile, answers and conversations will be deleted. How long reports are kept is for the solicitor to advise.</Body>
      {TEST_BUILD ? <Card><Body small muted>Test version: this forgets the made-up answers on this phone and goes back to the start.</Body></Card> : null}
      <Button label="Pause instead" onPress={() => router.replace('/pause')} />
      {sure ? (
        <Card>
          <Body>Delete your account and everything in it? This can’t be undone.</Body>
          <Button kind="primary" label="Yes, delete my account" onPress={() => { reset(); router.replace('/'); }} />
          <Button kind="quiet" label="Keep my account" onPress={() => setSure(false)} />
        </Card>
      ) : (
        <Button kind="quiet" label="Delete my account" onPress={() => setSure(true)} />
      )}
    </Screen>
  );
}
