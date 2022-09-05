import esbuild from 'esbuild';

esbuild.buildSync({
  bundle: true,
  entryPoints: {
    'toast/index': `./src/components/toast/index.tsx`,
    'index': './src/index.tsx'
  },
  outdir: 'lib',
  external: [
    'react'
  ],
  format: 'esm',
  // format: 'iife'
});