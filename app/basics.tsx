import { router } from 'expo-router';
import { Back, Button, Eyebrow, Field, Label, Opt, Screen, Title } from '@/components/ui';
import { useAnswers } from '@/lib/onboarding';

// About you (prototype V.basics).
export default function Basics() {
  const { a, set } = useAnswers();
  const edit = a.setupDone;
  return (
    <Screen>
      {edit ? <Back onPress={() => router.back()} /> : null}
      <Eyebrow>About you</Eyebrow>
      <Title>{edit ? 'About me' : 'Your first name'}</Title>
      <Field label="First name" value={a.firstName} onChangeText={(t) => set({ firstName: t })} hint="Only your first name is ever shown." />
      <Label>I am a</Label>
      <Opt label="Woman" on={a.sex === 'woman'} onPress={() => set({ sex: 'woman' })} />
      <Opt label="Man" on={a.sex === 'man'} onPress={() => set({ sex: 'man' })} />
      <Field label="Where you live" value={a.town} onChangeText={(t) => set({ town: t })} placeholder="e.g. Leeds" hint="We show your town, never your address or postcode." />
      {!(a.firstName.trim() && a.sex && a.town.trim()) && <Body small muted>Add your first name, woman or man, and where you live to continue.</Body>}
      <Button kind="primary" label={edit ? 'Save' : 'Next'} disabled={!(a.firstName.trim() && a.sex && a.town.trim())} onPress={() => (edit ? router.back() : router.push('/faith'))} />
    </Screen>
  );
}
