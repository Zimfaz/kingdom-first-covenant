import { useColorScheme } from 'react-native';
import colours from './colours.json';

export type Palette = typeof colours.light;

/** Colours follow the phone (light or dark), like Kingdom First Life's "Match my phone". */
export function usePalette(): Palette {
  return useColorScheme() === 'dark' ? colours.dark : colours.light;
}

export const fonts = {
  display: 'CormorantGaramond_600SemiBold',
  displayBold: 'CormorantGaramond_700Bold',
  displayItalic: 'CormorantGaramond_500Medium_Italic',
  body: 'IBMPlexSans_400Regular',
  bodySemi: 'IBMPlexSans_600SemiBold'
} as const;

export const space = { xs: 4, s: 8, m: 12, l: 16, xl: 20, xxl: 28 } as const;
export const radius = { card: 18, button: 14, pill: 999 } as const;
/** Minimum touch target (Apple and Google guidance). */
export const TAP = 48;
