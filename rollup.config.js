import commonjs from '@rollup/plugin-commonjs';
import html from 'rollup-plugin-html2';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import preprocess from 'svelte-preprocess';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';

const isDev = process.env.NODE_ENV === 'development';

const plugins = [
  svelte({
    dev: isDev,
    extensions: ['.svelte'],
    preprocess: preprocess({ postcss: true }),
    emitCss: true,
  }),
  postcss({
    extract: './dist/bundle.css',
  }),
  resolve({
    browser: true,
    dedupe: ['svelte'],
  }),
  commonjs(),
  html({
    template: 'src/index.html',
    fileName: 'index.html',
  }),
];

if (isDev) {
  plugins.push(
    serve({
      contentBase: './dist',
      historyApiFallback: true,
      port: 5000,
    }),
    livereload({ watch: './dist' })
  );
} else {
  plugins.push(terser({ sourcemap: isDev }));
}

module.exports = {
  input: 'src/main.js',
  output: {
    name: 'bundle',
    file: 'dist/bundle.js',
    sourcemap: isDev,
    format: 'iife',
  },
  plugins,
};
