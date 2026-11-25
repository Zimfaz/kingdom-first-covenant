import { Linking, Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Body, Button, Screen, Title } from '@/components/ui';
import { fonts, space, TAP, usePalette } from '@/theme';

// Get help now (prototype SH.help). UK only at launch. Numbers checked by the pastoral reviewer on
// 23 Nov 2026; some still to verify before launch. Every number is a 48px tap target.
const LINES: { head: string; items: [string, string][] }[] = [
  { head: 'In danger now? Call 999.', items: [['Police, ambulance or fire', '999']] },
  { head: 'Domestic abuse', items: [['England (24 hours)', '0808 2000 247'], ['Wales, Live Fear Free', '0808 80 10 800'], ['Scotland', '0800 027 1234'], ['Northern Ireland', '0808 802 1414'], ['Men’s Advice Line', '0808 8010 327']] },
  { head: 'Forced marriage or honour-based abuse', items: [['Forced Marriage Unit', '020 7008 0151'], ['Karma Nirvana', '0800 5999 247']] },
  { head: 'Fraud or a scam', items: [['Report Fraud (England, Wales, Northern Ireland)', '0300 123 2040'], ['Police Scotland', '101']] },
  { head: 'Struggling to cope', items: [['Samaritans, free, any time', '116 123']] },
  { head: 'Abuse in a church setting', items: [['Thirtyone:eight', '0303 003 1111']] }
];

export default function Help() {
  const p = usePalette();
  return (
    <Screen>
      <Title>Get help now</Title>
      <Body small muted>If you can’t speak, call 999 and press 55 when asked (mobile).</Body>
      {LINES.map((g) => (
        <View key={g.head} style={{ marginBottom: space.l }}>
          <Text accessibilityRole="header" style={{ fontFamily: fonts.bodySemi, fontSize: 16, color: p.ink, marginBottom: space.xs }}>{g.head}</Text>
          {g.items.map(([name, num]) => (
            <Pressable key={name} accessibilityRole="link" accessibilityLabel={`Call ${name}, ${num}`} onPress={() => Linking.openURL('tel:' + num.replace(/\s/g, ''))}
              style={{ minHeight: TAP, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: p.line, borderBottomWidth: 1 }}>
              <Text style={{ fontFamily: fonts.body, fontSize: 15, color: p.ink, flex: 1, paddingRight: space.s }}>{name}</Text>
              <Text style={{ fontFamily: fonts.bodySemi, fontSize: 16, color: p.accent }}>{num}</Text>
            </Pressable>
          ))}
        </View>
      ))}
      <Body small muted>Or your church’s safeguarding lead.</Body>
      <Button kind="quiet" label="Close" onPress={() => router.back()} />
    </Screen>
  );
}
