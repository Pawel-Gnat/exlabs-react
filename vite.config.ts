/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    setupFiles: [resolve(__dirname, './tests/setup.ts')],
  },
});
