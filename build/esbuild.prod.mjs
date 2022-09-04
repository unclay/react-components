import esbuild from 'esbuild';

const components = [
  'toast',
  'action-sheet'
];
esbuild.buildSync({
  bundle: true,
  entryPoints: components.map((item) => `./src/components/${item}/index.tsx`),
  outdir: 'lib',
  external: [
    'react'
  ],
  // format: 'esm',
  // format: 'iife'
});