import { router } from 'expo-router';
import { Body, Button, Screen, TextLink, Title } from '@/components/ui';
import { FORCED, Lines } from '@/components/helplines';

// Get help now (prototype SH.help). UK only at launch. Numbers checked by the pastoral reviewer on
// 23 Nov 2026; some still to verify before launch. Every number is a 48px tap target.
const LINES: { head: string; items: [string, string][] }[] = [
  { head: 'In danger now? Call 999.', items: [['Police, ambulance or fire', '999']] },
  { head: 'Domestic abuse', items: [['England (24 hours)', '0808 2000 247'], ['Wales, Live Fear Free', '0808 80 10 800'], ['Scotland', '0800 027 1234'], ['Northern Ireland', '0808 802 1414'], ['Men’s Advice Line', '0808 8010 327']] },
  { head: 'Forced marriage or honour-based abuse', items: FORCED },
  { head: 'Fraud or a scam', items: [['Report Fraud (England, Wales, Northern Ireland)', '0300 123 2040'], ['Police Scotland', '101']] },
  { head: 'Struggling to cope', items: [['Samaritans, free, any time', '116 123']] },
  { head: 'Abuse in a church setting', items: [['Thirtyone:eight', '0303 003 1111']] }
];

export default function Help() {
  return (
    <Screen>
      <Button kind="quiet" label="Close" onPress={() => router.back()} />
      <Title>Get help now</Title>
      <Body small muted>If you can’t speak, call 999 and press 55 when asked (mobile).</Body>
      {LINES.map((g) => <Lines key={g.head} head={g.head} items={g.items} />)}
      <Body small muted>Or your church’s safeguarding lead.</Body>
      <Button label="Talk to us privately" onPress={() => router.push('/talk')} />
      <Button label="Report someone" onPress={() => router.push('/report')} />
      <TextLink label="Marriage in Scripture ›" onPress={() => router.push('/scripture')} />
      <TextLink label="Still waiting, and a single life ›" onPress={() => router.push('/waiting')} />
      <Button kind="quiet" label="Close" onPress={() => router.back()} />
    </Screen>
  );
}
