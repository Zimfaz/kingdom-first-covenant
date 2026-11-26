import { Linking, Pressable, Text, View } from 'react-native';
import { fonts, space, TAP, usePalette } from '@/theme';

/** Phone numbers as 48px tap targets. UK only at launch. */
export function Lines({ head, items }: { head: string; items: [string, string][] }) {
  const p = usePalette();
  return (
    <View style={{ marginBottom: space.l }}>
      <Text accessibilityRole="header" style={{ fontFamily: fonts.bodySemi, fontSize: 16, color: p.ink, marginBottom: space.xs }}>{head}</Text>
      {items.map(([name, num]) => (
        <Pressable key={name} accessibilityRole="link" accessibilityLabel={`Call ${name}, ${num}`} onPress={() => Linking.openURL('tel:' + num.replace(/\s/g, ''))}
          style={{ minHeight: TAP, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: p.line, borderBottomWidth: 1 }}>
          <Text style={{ fontFamily: fonts.body, fontSize: 15, lineHeight: 21, color: p.ink, flex: 1, paddingRight: space.s, paddingVertical: space.xs }}>{name}</Text>
          <Text style={{ fontFamily: fonts.bodySemi, fontSize: 16, color: p.accent }}>{num}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export const FORCED: [string, string][] = [['Forced Marriage Unit (or email fmu@fcdo.gov.uk)', '020 7008 0151'], ['Karma Nirvana, free, Monday to Friday, 9am to 5pm', '0800 5999 247']];
