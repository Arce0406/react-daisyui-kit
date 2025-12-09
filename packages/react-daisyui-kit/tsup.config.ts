import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  minify: false,
  clean: true,
  external: ['react', 'react-dom', 'daisyui', 'tailwindcss'],
  outDir: 'dist',
});
