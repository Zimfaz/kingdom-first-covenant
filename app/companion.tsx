import { router } from 'expo-router';
import { Back, Body, Bullets, Card, Label, Screen, Title, Verse } from '@/components/ui';

// My companion (pastoral study 26 Nov, D1 and D2; round 1 companion promise). Choosing and inviting a
// companion comes in milestone 2, when a conversation is about to start.
export default function Companion() {
  return (
    <Screen tab="me">
      <Back label="Me" onPress={() => router.back()} />
      <Title>Why a companion?</Title>
      <Body>In Scripture, marriages often began with family and friends close by. Scripture doesn’t command a chaperone, but it’s old Christian wisdom. Your companion is there to help you both stay safe, honest and kind. The decisions are yours.</Body>
      <Verse text="Plans fail for lack of counsel, but with many advisers they succeed." reference="Proverbs 15:22" />
      <Card>
        <Body>A companion can share wisdom. No companion, parent or priest can decide for you, or tell you God has decided. You can change your companion at any time, quietly.</Body>
      </Card>
      <Label>What a companion promises</Label>
      <Bullets items={[
        'I’ll keep what I read here private. I won’t screenshot or share it.',
        'I won’t message anyone privately, inside or outside the app.',
        'I’ll speak up gently if something worries me, and report anything unsafe.',
        'I won’t push either of them towards marriage or away from it.',
        'I won’t tell either of them what God wants them to decide.',
        'I’m 18 or over, and I’m not looking for marriage here myself.'
      ]} />
      <Body small muted>You’ll choose your companion, a family member, friend, priest or pastor, when a conversation is about to start. They pass the same ID check and never pay.</Body>
    </Screen>
  );
}
