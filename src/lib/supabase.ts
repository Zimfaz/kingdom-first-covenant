import 'react-native-url-polyfill/auto';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { createClient } from '@supabase/supabase-js';

// Covenant's own Supabase project (never Kingdom First Life's). Sign-ups stay off on the
// server (app_flags.signups = false) until the checks in the build plan are done.
const extra = (Constants.expoConfig?.extra ?? {}) as { supabaseUrl: string; supabaseKey: string };

// The session is kept in the phone's secure storage (Keychain / Keystore). On the web preview
// it falls back to the browser, which is only for screenshots and checks.
const storage = Platform.OS === 'web'
  ? undefined
  : {
      getItem: (k: string) => SecureStore.getItemAsync(k),
      setItem: (k: string, v: string) => SecureStore.setItemAsync(k, v),
      removeItem: (k: string) => SecureStore.deleteItemAsync(k)
    };

export const supabase = createClient(extra.supabaseUrl, extra.supabaseKey, {
  auth: { storage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: false }
});
