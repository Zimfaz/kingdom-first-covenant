# Kingdom First Covenant: native app (Expo)

Started 25 Nov 2026 in the Kingdom First Life repo; moved here the same night.

- Expo SDK 58, TypeScript strict, expo-router. Screens in `app/`, theme and components in `src/`.
- Colours: `src/theme/colours.json`, copied from `brand/colours.json` (Covenant's accent is a proposal). Never type a hex value in a screen.
- No local npm in Claude's workspace: run the GitHub workflow **Covenant app check** (`gh workflow run check.yml -f install=true` the first time) to resolve versions, commit the lock file, type-check and export the web preview (artifact `covenant-web`).
- Supabase: `supabase/migrations/`, for project kingdom-first-covenant only, applied with the owner present.
- Test data only until the solicitor, DPIA, safeguarding advisers and pastoral reviewer sign off. Sign-ups are off on the server.
- Builds: EAS, Android test builds from 15 Dec, no iPhone builds before 15 Jan 2027 (reviews/native-build-plan-2026-11-24.md).

Built so far: Welcome, Before we begin (My yes), Create account (says plainly it isn't open yet), Get help now. Wording is the prototype's draft until the pastoral reviewer checks it.
