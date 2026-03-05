This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Admin Access Control

To restrict `/admin` to only you, set these environment variables:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`

Example:

```bash
ADMIN_USERNAME=your_name
ADMIN_PASSWORD=very_strong_password
```

Access `/login` and choose `Admin` to sign in.

## Customer-specific main URL (palette_ai)

`pal_studio` admin copies the customer main URL in this format:

`/main?cid=<customer_id>`

To point this URL to `palette_ai`, set:

```bash
NEXT_PUBLIC_PALETTE_AI_ORIGIN=https://your-palette-ai-domain
```

If this variable is not set, the copied URL is relative.

## Route roles

- `palette_ai`: chat entrypoint (`/main`)
- `pal_studio`: website production/admin (`/admin`)

## E2E smoke test (Playwright)

This test suite validates:

- `palette_ai` chat entry is reachable
- `pal_studio` admin login flow works
- customer save/get/public-page flow works in `pal_studio`

Run from `pal_studio`:

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

Optional environment variables:

```bash
PALETTE_AI_PORT=3000
PALETTE_STUDIO_PORT=3001
PALETTE_AI_ORIGIN=http://127.0.0.1:3000
PALETTE_STUDIO_ORIGIN=http://127.0.0.1:3001
ADMIN_USERNAME=studio-admin
ADMIN_PASSWORD=studio-pass
```
