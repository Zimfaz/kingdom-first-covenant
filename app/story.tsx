import { router } from 'expo-router';
import { Back, Body, Button, Eyebrow, Opt, Screen, TextLink, Title } from '@/components/ui';
import { useAnswers, type Story } from '@/lib/onboarding';

// Your story so far (prototype V.story). Wording is draft until the pastoral reviewer checks it.
export const STORIES: [Story, string][] = [
  ['never', 'I’ve never been married'],
  ['widowed', 'I’m widowed'],
  ['divorced', 'I’m divorced'],
  ['nullity', 'I’m divorced, and my marriage has been declared null by the Church (declaration of nullity, often called an annulment)'],
  ['permission', 'I’m divorced, and my church has given permission to marry again (for example an Orthodox church divorce)'],
  ['process', 'I’m divorced, and a declaration of nullity or church permission is in process']
];

export default function StoryScreen() {
  const { a, set } = useAnswers();
  const divorced = a.story === 'divorced' || a.story === 'nullity' || a.story === 'permission' || a.story === 'process';
  return (
    <Screen>
      <Back onPress={() => router.back()} />
      <Eyebrow>About you</Eyebrow>
      <Title>Your story so far</Title>
      <Body>Every story is welcome here. Choose the one that’s true for you. You won’t need to explain it on your profile, and nobody will ever see who has chosen not to be introduced to them.</Body>
      {STORIES.map(([k, l]) => <Opt key={k} label={l} on={a.story === k} onPress={() => set({ story: k })} />)}
      {a.story === 'widowed' && <Body small muted>We’re sorry for your loss. Grief has no timetable, and there’s no right moment to begin again. Go at your own pace.</Body>}
      {divorced && (
        <>
          <Body small muted>You don’t have to explain what happened. If your marriage ended because you were being hurt, you did not fail God by getting safe.</Body>
          <TextLink label="Help and support ›" onPress={() => router.push('/help')} />
        </>
      )}
      <Body small muted>Why we ask: churches have different teaching about marriage after divorce. Telling the truth here means you’re only introduced to people who can marry you with a clear conscience, in a church that can bless it.</Body>
      <TextLink label="I’m separated but not yet divorced" onPress={() => router.push('/separated')} />
      <Button kind="primary" label="Next" onPress={() => router.push('/open')} />
    </Screen>
  );
}
