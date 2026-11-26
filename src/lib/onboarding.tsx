import React from 'react';
import { router } from 'expo-router';

// Test version: answers live only in the app's memory for this session. Nothing is stored on the
// phone or sent anywhere until the solicitor, DPIA, safeguarding advisers and pastoral reviewer sign off.
export type Story = 'never' | 'widowed' | 'divorced' | 'nullity' | 'permission' | 'process';
export type Answers = {
  firstName: string;
  sex: 'woman' | 'man' | null;
  town: string;
  church: string | null;
  parish: string;
  story: Story | null;
  openHist: Story[];
  openTrad: string[];
  /** Faith and marriage answers: question id -> fixed option ids (questions.ts), or [SKIP] for "I'd rather not say". */
  ans: Record<string, string[]>;
  /** Question ids marked "This matters a lot to me" (must agree before an introduction). */
  must: string[];
  /** Set-up finished (the person has reached the questions); used for routing and Back. */
  setupDone: boolean;
  paused: false | 'two weeks' | 'a month' | 'until I start again';
};
const empty: Answers = { firstName: '', sex: null, town: '', church: null, parish: '', story: null, openHist: [], openTrad: [], ans: {}, must: [], setupDone: false, paused: false };

const Ctx = React.createContext<{ a: Answers; set: (patch: Partial<Answers>) => void; reset: () => void }>({ a: empty, set: () => {}, reset: () => {} });

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [a, setA] = React.useState<Answers>(empty);
  const set = React.useCallback((patch: Partial<Answers>) => setA((x) => ({ ...x, ...patch })), []);
  const reset = React.useCallback(() => setA(empty), []);
  return <Ctx.Provider value={{ a, set, reset }}>{children}</Ctx.Provider>;
}
export const useAnswers = () => React.useContext(Ctx);

export function toggle<T>(list: T[], k: T): T[] {
  return list.includes(k) ? list.filter((x) => x !== k) : [...list, k];
}

/** Shown only in the test version, so testers can walk through set-up with made-up answers. */
export const TEST_BUILD = true;

/** Go to a top-level screen and clear the history behind it, so Back (or Android's back gesture) can't
 * walk back into set-up, the ID check or a deleted account (UX and product reviews, 26 Nov). */
export function resetTo(href: '/home' | '/' | '/questions' | '/basics') {
  if (router.canDismiss()) router.dismissAll();
  router.replace(href as never);
}
