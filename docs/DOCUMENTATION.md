# Project Documentation

## Purpose

`grommet-theme-hpe` is the Hewlett Packard Enterprise theme package for Grommet.
It publishes theme objects and supporting exports that downstream applications can consume.

## High-Level Structure

- `src/js/`: Source code for runtime exports.
- `src/js/themes/`: Theme definitions and related modules.
- `src/js/__tests__/`: Test suites (integration and unit).
- `dist/`: Build output (CommonJS, ES modules, JSON artifact, bundled browser file).
- `tools/`: Release and conversion scripts used by package scripts.
- `.husky/`: Git hook scripts managed by Husky.
- `docs/`: Project documentation and planning notes.

## Top-Level Files and Roles

- `package.json`: Package metadata, dependency graph, publish/build/test/lint scripts.
- `jest.config.js`: Jest setup (jsdom, Babel transform, test matching, coverage collection).
- `.eslintrc`: Linting rules and test-environment overrides.
- `webpack.config.babel.js`: Bundling config for browser artifact generation.
- `.babelrc`: Babel transpilation settings.
- `README.md`: Public usage information for consumers.
- `CHANGELOG.md`: Versioned release notes.
- `LICENSE`: License terms.
- `.husky/pre-commit`: Runs fast local checks on commit (`lint-fix` and staged Prettier).
- `.husky/pre-push`: Runs the stronger pre-push gate (`lint` and `npm test -- --bail`).

## Source Layout (`src/js`)

### `src/js/index.js`

Package entrypoint for JavaScript consumers.

### `src/js/index.d.ts`

Type declaration entrypoint for TypeScript consumers.

### `src/js/v2migration.js`

Migration support logic for v2 transition scenarios.

## Theme Modules (`src/js/themes`)

### `src/js/themes/index.js`

Public export surface for theme-related modules.

### `src/js/themes/hpe.js`

Primary HPE theme definition and assembly logic.
Distinctive purpose: this is the canonical theme implementation that combines token mappings, component styles, deprecations, and global theme settings.

### `src/js/themes/utils.js`

Shared helper utilities (for example object freezing and token resolution helpers).
Distinctive purpose: common logic used by theme code and unit-tested directly.

### `src/js/themes/colors.js`

Color token mapping and color aliases.
Distinctive purpose: central place for color behavior and compatibility mappings.

### `src/js/themes/backgrounds.js`

Background token mapping and background presets.
Distinctive purpose: dedicated source of background theme values.

### `src/js/themes/prism.js`

Prism syntax-highlighting theme definitions.
Distinctive purpose: code-block syntax color styling separate from base component theming.

### `src/js/themes/hpePop.js`

Alternative/variant HPE theme export.
Distinctive purpose: variant theme configuration maintained separately from the core `hpe` theme.

### `src/js/themes/index.d.ts`

Type declarations for theme exports.

## Test Layout (`src/js/__tests__`)

### Integration Tests (`src/js/__tests__/integration`)

- `hpe.test.js`:
  Structural and contract tests for assembled theme shape.
  Distinctive purpose: verifies expected object paths and core schema presence.

- `hpe.validations.test.js`:
  Value validation and deprecation-focused assertions.
  Distinctive purpose: checks critical resolved values and compatibility/deprecation expectations.

### Unit Tests (`src/js/__tests__/unit`)

- `utils.test.js`:
  Pure function tests for `themes/utils.js`.
  Distinctive purpose: validates helper behavior in isolation from full theme assembly.

## Build and Artifact Flow

### Build Output

The `build` script generates:

- `dist/index.js`: CommonJS entry output.
- `dist/es6/index.js`: ES module entry output.
- `dist/grommet-theme-hpe.min.js`: Browser bundle.
- Transpiled theme files under `dist/` and `dist/es6/`.

### JSON Artifact

The `jsonify` script generates:

- `dist/grommet-theme-hpe.json`: JSON serialization of the theme for tooling and comparison workflows.

## Tooling and Scripts (`tools`)

- `convert-to-json.js`: Converts theme export to JSON (`npm run jsonify`).
- `release-stable.js`: Stable release automation entry.
- `release-gh-pages.js`: GitHub Pages release/deploy support.
- `grommet-babel-preset-env.js`: Babel-related helper config.

## Common Development Commands

- `yarn lint`: Lint source and test files.
- `yarn test`: Run Jest test suite.
- `yarn build`: Build bundle and transpiled distributions.
- `yarn jsonify`: Generate theme JSON artifact.
- `yarn prepublishOnly`: Build + JSON generation pre-publish check.
- Git commits are gated by Husky via `.husky/pre-commit`.
- Git pushes are gated by Husky via `.husky/pre-push`.

## Maintenance Notes

- Keep exported API stable unless intentionally making a breaking change.
- Prefer updating integration tests when changing theme structure/values.
- Prefer updating unit tests when changing utility behavior.
- If modifying token mappings (`colors.js`, `backgrounds.js`, `hpe.js`), regenerate JSON and review artifact differences.
