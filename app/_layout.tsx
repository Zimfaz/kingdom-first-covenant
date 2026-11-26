import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, CormorantGaramond_500Medium_Italic, CormorantGaramond_600SemiBold, CormorantGaramond_700Bold } from '@expo-google-fonts/cormorant-garamond';
import { IBMPlexSans_400Regular, IBMPlexSans_600SemiBold } from '@expo-google-fonts/ibm-plex-sans';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { usePalette } from '@/theme';
import { OnboardingProvider } from '@/lib/onboarding';

export default function RootLayout() {
  // Brand fonts are bundled in the app, so they work offline.
  const [loaded] = useFonts({
    CormorantGaramond_500Medium_Italic,
    CormorantGaramond_600SemiBold,
    CormorantGaramond_700Bold,
    IBMPlexSans_400Regular,
    IBMPlexSans_600SemiBold
  });
  const p = usePalette();
  if (!loaded) return null;
  return (
    <SafeAreaProvider>
      <OnboardingProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: p.bg } }}>
        <Stack.Screen name="help" options={{ presentation: 'modal' }} />
      </Stack>
          </OnboardingProvider>
    </SafeAreaProvider>
  );
}
