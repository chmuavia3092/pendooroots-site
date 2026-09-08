import js from '@eslint/js';

/**
 * Flat ESLint config (v9+).
 *
 * We only lint plain `.js` here. TypeScript and Astro files are type-checked by
 * `tsc --noEmit` and the Astro compiler respectively; install
 * `typescript-eslint` + `eslint-plugin-astro` if you want them linted here too.
 */
export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'legacy-spa/**',
      'public/**',
      'src/**',
    ],
  },
  js.configs.recommended,
];
