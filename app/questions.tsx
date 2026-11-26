import React from 'react';
import { router } from 'expo-router';
import { Back, Body, Button, Row, Screen, Title } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';
import { groupDone, nextNeeded, SECTIONS } from '@/lib/questions';

// Faith and marriage questions (prototype V.questions). No counts or progress: each group is "Done",
// "Needed for introductions" or "Whenever you're ready".
export default function Questions() {
  const { a, set } = useAnswers();
  React.useEffect(() => { if (!a.setupDone) set({ setupDone: true }); }, [a.setupDone, set]);
  const need = nextNeeded(a.ans);
  const go = (k: string) => router.push({ pathname: '/q', params: { sec: k } });
  return (
    <Screen tab="me">
      <Back onPress={() => (router.canGoBack() ? router.back() : router.replace('/home'))} />
      <Title>Faith and marriage questions</Title>
      <Body>About five minutes a group. “Your faith and church” and “Marriage itself” come first. The others can wait.</Body>
      {SECTIONS.map((s) => (
        <Row key={s.k} title={s.name} note={groupDone(s, a.ans) ? 'Done' : s.needed ? 'Needed for introductions' : 'Whenever you’re ready'} onPress={() => go(s.k)} />
      ))}
      <Body small muted>You can mark answers “This matters a lot to me”. Those must agree before anyone is introduced to you. The rest only help us choose who to introduce. Nobody ever sees a score.</Body>
      <Button kind="primary" label={need ? 'Continue' : 'Done for now'} onPress={() => (need ? go(need.k) : router.replace('/home'))} />
    </Screen>
  );
}
