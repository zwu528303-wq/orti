# ORTI

ORTI is a fan-made Olivia Rodrigo quiz site built with Next.js, TypeScript, and Tailwind CSS.

## Scripts

- `corepack pnpm dev` runs the app locally
- `corepack pnpm lint` runs ESLint with zero warnings allowed
- `corepack pnpm build` creates a production build
- `corepack pnpm generate:questions` regenerates `src/data/questions.ts` from `orti-questions-v2-final.md` by default
- `corepack pnpm generate:songs` regenerates `src/data/songs.ts` from `orti-songs-v1.md`

## Project Notes

- The landing page supports last-result recall and quiz draft resume
- The quiz currently uses the 17 questions generated from `orti-questions-v2-final.md`
- The result data currently uses the 23 songs generated from `orti-songs-v1.md`
- The result page is shipping in `safe` quote mode by default, so lyrics are hidden unless `src/config/content.ts` is switched to `lyrics`
- Analytics is currently routed through a local no-op wrapper in `src/lib/analytics.ts`; this keeps the app build-stable until the real Vercel analytics package is wired back in

## GitHub Handoff

This folder currently sits inside a parent git repository at `/Users/kaiya/Documents/New project`.

When you are ready to publish:

1. Create an empty GitHub repository from the web UI.
2. Send me the repository URL.
3. I can then help you either:
   - turn `orti/` into its own repo, or
   - extract it cleanly from the parent repo before the first push.
