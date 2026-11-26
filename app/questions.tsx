import { router } from 'expo-router';
import { Back, Body, Button, Eyebrow, Row, Screen, Title } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';
import { nextNeeded, SECTIONS } from '@/lib/questions';

// Faith and marriage questions (Tier 1), prototype V.questions. No counts or progress: each group is
// "Done", "Needed for introductions" or "Whenever you're ready".
export default function Questions() {
  const { a } = useAnswers();
  const need = nextNeeded(a.done);
  return (
    <Screen tab={a.done.length ? 'me' : undefined}>
      <Back onPress={() => router.back()} />
      <Eyebrow>Tier 1</Eyebrow>
      <Title>Faith and marriage questions</Title>
      <Body>About five minutes a group, and your answers save as you go. Faith and church, and Marriage itself, come first. The others can wait.</Body>
      {SECTIONS.map((s) => (
        <Row key={s.k} title={s.name} note={a.done.includes(s.k) ? 'Done' : s.needed ? 'Needed for introductions' : 'Whenever you’re ready'}
          onPress={() => router.push({ pathname: '/q', params: { sec: s.k } })} />
      ))}
      <Body small muted>You can mark a few answers “This matters a lot to me”. Those must agree before anyone is introduced to you. The rest only help us choose who to introduce. Nobody ever sees a score.</Body>
      <Button kind="primary" label={need ? 'Continue' : 'Done for now'}
        onPress={() => (need ? router.push({ pathname: '/q', params: { sec: need.k } }) : router.replace('/home'))} />
    </Screen>
  );
}
