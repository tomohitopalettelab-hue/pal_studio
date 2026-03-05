import { defineConfig } from '@playwright/test';

const paletteAiPort = Number(process.env.PALETTE_AI_PORT || 3000);
const paletteStudioPort = Number(process.env.PALETTE_STUDIO_PORT || 3001);
const paletteAiOrigin = process.env.PALETTE_AI_ORIGIN || `http://127.0.0.1:${paletteAiPort}`;
const paletteStudioOrigin = process.env.PALETTE_STUDIO_ORIGIN || `http://127.0.0.1:${paletteStudioPort}`;

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  retries: 0,
  workers: 1,
  use: {
    baseURL: paletteStudioOrigin,
    headless: true,
  },
  webServer: [
    {
      command: `npm run dev -- -p ${paletteAiPort}`,
      cwd: '../palette_ai',
      url: `${paletteAiOrigin}/main`,
      timeout: 120_000,
      reuseExistingServer: true,
    },
    {
      command: `npm run dev -- -p ${paletteStudioPort}`,
      cwd: '.',
      url: `${paletteStudioOrigin}/login`,
      timeout: 120_000,
      reuseExistingServer: true,
      env: {
        ...process.env,
        NEXT_PUBLIC_PALETTE_AI_ORIGIN: paletteAiOrigin,
        ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'studio-admin',
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'studio-pass',
      },
    },
  ],
});
