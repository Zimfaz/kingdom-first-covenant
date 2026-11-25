import type { ExpoConfig } from 'expo/config';

// Kingdom First Covenant: native iPhone and Android app (Expo). Test data only until the
// solicitor, DPIA, safeguarding advisers and pastoral reviewer have signed off
// (reviews/native-build-plan-2026-11-24.md in the Kingdom First Life repo).
const config: ExpoConfig = {
  name: 'Kingdom First Covenant',
  slug: 'kingdom-first-covenant',
  scheme: 'kfcovenant',
  version: '0.1.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  ios: { bundleIdentifier: 'com.kingdomfirstlife.covenant', supportsTablet: false },
  android: { package: 'com.kingdomfirstlife.covenant' },
  web: { bundler: 'metro', output: 'static' },
  plugins: ['expo-router', 'expo-secure-store', 'expo-font', 'expo-status-bar'],
  experiments: { typedRoutes: true },
  extra: {
    supabaseUrl: 'https://afiyphuubmefjaofbmbx.supabase.co',
    // Publishable key: safe in the app; row level security protects the data (covenant/supabase-link.md).
    supabaseKey: 'sb_publishable_EKWysWv3RyKAJo5lEMmX4A_J4fDFeXR'
  }
};
export default config;
