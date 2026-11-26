import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View, type TextStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { fonts, radius, space, TAP, usePalette } from '@/theme';

export type Tab = 'home' | 'intros' | 'me';
const TABS: [Tab, string, string][] = [['home', 'Home', '/home'], ['intros', 'Introductions', '/intros'], ['me', 'Me', '/me']];

/** A page. With `tab`, the tab bar sits at the bottom, above the home bar (safe area). */
export function Screen({ children, tab }: { children: React.ReactNode; tab?: Tab }) {
  const p = usePalette();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: p.bg }} edges={['top', 'bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: space.xl, paddingBottom: space.xxl }}>{children}</ScrollView>
      {tab && (
        <View accessibilityRole="tablist" style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: p.line, backgroundColor: p.surface }}>
          {TABS.map(([k, label, href]) => {
            const on = k === tab;
            return (
              <Pressable key={k} accessibilityRole="tab" accessibilityState={{ selected: on }} onPress={() => !on && router.replace(href as never)}
                style={{ flex: 1, minHeight: 56, alignItems: 'center', justifyContent: 'center', paddingHorizontal: space.xs }}>
                <Text style={{ fontFamily: on ? fonts.bodySemi : fonts.body, fontSize: 14, color: on ? p.accent : p.muted, textAlign: 'center' }}>{label}</Text>
                <View style={{ height: 3, width: 28, borderRadius: 2, marginTop: 4, backgroundColor: on ? p.accent : 'transparent' }} />
              </Pressable>
            );
          })}
        </View>
      )}
    </SafeAreaView>
  );
}

/** A tappable row with a title and a quiet note on the right (Me, the question groups, Help). */
export function Row({ title, note, onPress }: { title: string; note?: string; onPress: () => void }) {
  const p = usePalette();
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={note ? `${title}, ${note}` : title} onPress={onPress}
      style={({ pressed }) => ({ minHeight: 56, flexDirection: 'row', alignItems: 'center', backgroundColor: p.surface, borderColor: p.line, borderWidth: 1, borderRadius: radius.button, paddingHorizontal: space.l, paddingVertical: space.m, marginBottom: space.s, opacity: pressed ? 0.85 : 1 })}>
      <Text style={{ flex: 1, fontFamily: fonts.bodySemi, fontSize: 16, lineHeight: 22, color: p.ink }}>{title}</Text>
      <Text style={{ fontFamily: fonts.body, fontSize: 14, color: p.muted, marginLeft: space.s, maxWidth: '45%', textAlign: 'right' }}>{note ?? '›'}</Text>
    </Pressable>
  );
}

/** An on/off row, e.g. "This matters a lot to me". */
export function Toggle({ label, on, onPress }: { label: string; on: boolean; onPress: () => void }) {
  const p = usePalette();
  return (
    <Pressable accessibilityRole="switch" accessibilityState={{ checked: on }} onPress={onPress}
      style={{ minHeight: 52, flexDirection: 'row', alignItems: 'center', paddingVertical: space.s, marginVertical: space.s }}>
      <Text style={{ flex: 1, fontFamily: fonts.bodySemi, fontSize: 16, lineHeight: 22, color: p.ink }}>{label}</Text>
      <View style={{ width: 48, height: 28, borderRadius: 14, padding: 3, backgroundColor: on ? p.accent : p.line, alignItems: on ? 'flex-end' : 'flex-start' }}>
        <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: p.surface }} />
      </View>
    </Pressable>
  );
}

export function Brand() {
  const p = usePalette();
  return (
    <View accessibilityRole="header" accessibilityLabel="Kingdom First Covenant">
      <Text style={{ fontFamily: fonts.display, fontSize: 15, letterSpacing: 2.1, color: p.ink }}>KINGDOM FIRST</Text>
      <Text style={{ fontFamily: fonts.displayItalic, fontSize: 22, color: p.accent }}>Covenant</Text>
    </View>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  const p = usePalette();
  return <Text style={{ fontFamily: fonts.bodySemi, fontSize: 12, letterSpacing: 1.9, textTransform: 'uppercase', color: p.muted, marginBottom: space.xs }}>{children}</Text>;
}

export function Title({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  const p = usePalette();
  return <Text accessibilityRole="header" style={[{ fontFamily: fonts.display, fontSize: 32, lineHeight: 36, color: p.ink, marginTop: space.s, marginBottom: space.m }, style]}>{children}</Text>;
}

export function Body({ children, muted, small }: { children: React.ReactNode; muted?: boolean; small?: boolean }) {
  const p = usePalette();
  return <Text style={{ fontFamily: fonts.body, fontSize: small ? 14 : 16, lineHeight: small ? 21 : 25, color: muted ? p.muted : p.ink, marginBottom: space.m }}>{children}</Text>;
}

export function Verse({ text, reference }: { text: string; reference: string }) {
  const p = usePalette();
  return (
    <View style={{ marginTop: space.m, marginBottom: space.s }}>
      <Text style={{ fontFamily: fonts.displayItalic, fontSize: 19, lineHeight: 26, color: p.ink }}>“{text}”</Text>
      <Text style={{ fontFamily: fonts.bodySemi, fontSize: 12, letterSpacing: 1.7, textTransform: 'uppercase', color: p.muted, marginTop: space.xs }}>{reference}</Text>
    </View>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  const p = usePalette();
  return <View style={{ backgroundColor: p.surface, borderColor: p.line, borderWidth: 1, borderRadius: radius.card, padding: space.l, marginBottom: space.m }}>{children}</View>;
}

export function Prayer({ children }: { children: React.ReactNode }) {
  const p = usePalette();
  return (
    <View style={{ backgroundColor: p.pray, borderRadius: radius.card, padding: space.l, marginVertical: space.m }}>
      <Text style={{ fontFamily: fonts.displayItalic, fontSize: 18, lineHeight: 25, color: p.prayInk }}>{children}</Text>
    </View>
  );
}

export function Bullets({ items }: { items: string[] }) {
  const p = usePalette();
  return (
    <View>
      {items.map((t) => (
        <View key={t} style={{ flexDirection: 'row', marginBottom: space.xs }}>
          <Text style={{ fontFamily: fonts.body, fontSize: 16, lineHeight: 25, color: p.ink, width: 18 }}>•</Text>
          <Text style={{ fontFamily: fonts.body, fontSize: 16, lineHeight: 25, color: p.ink, flex: 1 }}>{t}</Text>
        </View>
      ))}
    </View>
  );
}

type BtnKind = 'primary' | 'secondary' | 'quiet';
export function Button({ label, onPress, kind = 'secondary' }: { label: string; onPress: () => void; kind?: BtnKind }) {
  const p = usePalette();
  const primary = kind === 'primary';
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        s.btn,
        { borderColor: kind === 'quiet' ? p.line : p.accent, backgroundColor: primary ? p.accent : p.surface, opacity: pressed ? 0.85 : 1 }
      ]}
    >
      <Text style={{ fontFamily: fonts.bodySemi, fontSize: 16, color: primary ? p.onAccent : p.ink, textAlign: 'center' }}>{label}</Text>
    </Pressable>
  );
}

export function TextLink({ label, onPress }: { label: string; onPress: () => void }) {
  const p = usePalette();
  return (
    <Pressable accessibilityRole="link" onPress={onPress} style={{ minHeight: TAP, justifyContent: 'center' }}>
      <Text style={{ fontFamily: fonts.bodySemi, fontSize: 16, color: p.accent, textDecorationLine: 'underline' }}>{label}</Text>
    </Pressable>
  );
}

export function Back({ onPress, label = 'Back' }: { onPress: () => void; label?: string }) {
  const p = usePalette();
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={{ minHeight: TAP, justifyContent: 'center', alignSelf: 'flex-start' }}>
      <Text style={{ fontFamily: fonts.bodySemi, fontSize: 16, color: p.accent }}>‹ {label}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  btn: { minHeight: 52, borderRadius: radius.button, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center', paddingHorizontal: space.l, paddingVertical: space.m, marginVertical: space.s }
});

/** A choice row: radio (one) or tick box (many). 52px tall at least, the whole row is the target. */
export function Opt({ label, on, onPress, multi }: { label: string; on: boolean; onPress: () => void; multi?: boolean }) {
  const p = usePalette();
  return (
    <Pressable
      accessibilityRole={multi ? 'checkbox' : 'radio'}
      accessibilityState={multi ? { checked: on } : { selected: on }}
      onPress={onPress}
      style={{ minHeight: 52, flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: on ? p.accent : p.line, backgroundColor: on ? p.tint : p.surface, borderRadius: radius.button, paddingHorizontal: space.l, paddingVertical: space.m, marginBottom: space.s }}
    >
      <View style={{ width: 20, height: 20, borderRadius: multi ? 5 : 10, borderWidth: 2, borderColor: on ? p.accent : p.muted, backgroundColor: on ? p.accent : 'transparent', marginRight: space.m, alignItems: 'center', justifyContent: 'center' }}>
        {on && <Text style={{ color: p.onAccent, fontSize: 12, fontFamily: fonts.bodySemi, lineHeight: 14 }}>{multi ? '✓' : ''}</Text>}
      </View>
      <Text style={{ flex: 1, fontFamily: fonts.body, fontSize: 16, lineHeight: 22, color: p.ink }}>{label}</Text>
    </Pressable>
  );
}

export function Field({ label, value, onChangeText, placeholder, hint }: { label: string; value: string; onChangeText: (t: string) => void; placeholder?: string; hint?: string }) {
  const p = usePalette();
  return (
    <View style={{ marginBottom: space.m }}>
      <Text style={{ fontFamily: fonts.bodySemi, fontSize: 15, color: p.ink, marginBottom: space.xs }}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={p.muted}
        style={{ fontFamily: fonts.body, fontSize: 16, color: p.ink, backgroundColor: p.surface, borderColor: p.line, borderWidth: 1.5, borderRadius: radius.button, minHeight: 52, paddingHorizontal: space.l }}
      />
      {hint ? <Text style={{ fontFamily: fonts.body, fontSize: 14, lineHeight: 20, color: p.muted, marginTop: space.xs }}>{hint}</Text> : null}
    </View>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  const p = usePalette();
  return <Text accessibilityRole="header" style={{ fontFamily: fonts.bodySemi, fontSize: 15, color: p.ink, marginTop: space.m, marginBottom: space.s }}>{children}</Text>;
}

export function Fold({ title, children }: { title: string; children: React.ReactNode }) {
  const p = usePalette();
  const [open, setOpen] = React.useState(false);
  return (
    <View style={{ marginVertical: space.s }}>
      <Pressable accessibilityRole="button" accessibilityState={{ expanded: open }} onPress={() => setOpen(!open)} style={{ minHeight: TAP, justifyContent: 'center' }}>
        <Text style={{ fontFamily: fonts.bodySemi, fontSize: 16, color: p.accent }}>{open ? '▾' : '▸'} {title}</Text>
      </Pressable>
      {open && <View style={{ paddingLeft: space.l }}>{children}</View>}
    </View>
  );
}
