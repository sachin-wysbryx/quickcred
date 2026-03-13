import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./testing/setup.ts'],
    alias: {
      '@repo/utils': path.resolve(__dirname, './packages/utils/src'),
      '@repo/ui': path.resolve(__dirname, './packages/ui/src'),
      '@repo/db': path.resolve(__dirname, './packages/db/src'),
    },
  },
});
