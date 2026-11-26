import { Linking, Pressable, Text, View } from 'react-native';
import { fonts, space, TAP, usePalette } from '@/theme';

/** Phone numbers as 48px tap targets, the name above the number so neither is squeezed. UK only at launch. */
export function Lines({ head, items }: { head: string; items: [string, string][] }) {
  const p = usePalette();
  return (
    <View style={{ marginBottom: space.l }}>
      <Text accessibilityRole="header" style={{ fontFamily: fonts.bodySemi, fontSize: 16, color: p.ink, marginBottom: space.xs }}>{head}</Text>
      {items.map(([name, num]) => (
        <Pressable key={name} accessibilityRole="link" accessibilityLabel={`Call ${name}, ${num}`} onPress={() => Linking.openURL('tel:' + num.replace(/\s/g, ''))}
          style={{ minHeight: TAP, justifyContent: 'center', paddingVertical: space.s, borderBottomColor: p.line, borderBottomWidth: 1 }}>
          <Text style={{ fontFamily: fonts.body, fontSize: 15, lineHeight: 21, color: p.ink }}>{name}</Text>
          <Text style={{ fontFamily: fonts.bodySemi, fontSize: 17, lineHeight: 24, color: p.accent }}>{num}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export const FORCED: [string, string][] = [['Forced Marriage Unit (or email fmu@fcdo.gov.uk)', '020 7008 0151'], ['Karma Nirvana, free, Monday to Friday, 9am to 5pm', '0800 5999 247'], ['Scotland: Domestic Abuse and Forced Marriage Helpline (24 hours)', '0800 027 1234']];
