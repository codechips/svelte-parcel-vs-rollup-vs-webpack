# Parcel vs Rollup vs Webpack for Svelte

This is a project that compares three of the most popular JS bundlers for
Svelte. It uses a minimal Svelte app as a test.

## Test drive it yourself

```bash
$ git clone

## install deps
$ yarn

# parcel

$ yarn parcel:start
$ yarn parcel:build

# rollup

$ yarn rollup:start
$ yarn rollup:build

# webpack

$ yarn webpack:start
$ yarn webpack:build

# serve the build

$ yarn serve

```

Everything is bundled into the `dist` directory.

## Build size

### Parcel

```bash
total 36K

4.0K index.html
4.0K main.a0838bf2.css
28K main.ceed3f71.js

```

### Rollup

```bash
total 12K

4.0K bundle.css
4.0K bundle.js
4.0K index.html

```

### Webpack

```bash
total 16K

4.0K bundle.css
8.0K bundle.js
4.0K index.html

```

## Conclusion

Rollup seems to build the smallest bundle size possible.

