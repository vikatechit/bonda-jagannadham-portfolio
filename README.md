# బొండా జగన్నాధం — ప్రజా సేవా పోర్ట్‌ఫోలియో

Telugu-first public information site for Bonda Jagannadham, based on the client pamphlet and the 2021 State Election Commission ward result for GVMC Ward 87, Visakhapatnam.

This is not an official GVMC website.

## Local commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm start
```

Open http://localhost:3000

The song file is `public/audio/yellow-singam.mp3`. Playback starts at 35 seconds. If the browser blocks sound, use the play button.

## Content edits

- Profile text: `src/data/profile.ts`
- Works and printed amounts: `src/data/projects.ts`
- Photographs: `public/images/` and `src/data/gallery.ts`
- Phone numbers: `src/data/contact.ts`
- Interface copy: `src/i18n/te.ts` and `src/i18n/en.ts`

## Environment

`NEXT_PUBLIC_SITE_URL` is optional. On Vercel the production URL is used for canonical links when this variable is absent.

No database, API key, or secret is required. The enquiry form validates input and does not store messages.

## Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel, or run `npx vercel --prod`.
3. Framework preset: Next.js. No extra environment variables are required.
4. After the first deployment, set `NEXT_PUBLIC_SITE_URL` to the live URL and redeploy if the canonical host should be fixed.
