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
- `.husky/pre-push`: Runs the stronger pre-push gate (`lint` and `yarn test -- --bail`).

## Source Layout (`src/js`)

### `src/js/index.js`

Package entrypoint for JavaScript consumers.

### `src/js/index.d.ts`

Type declaration entrypoint for TypeScript consumers.

### `src/js/v2migration.js`

Migration support logic for v2 transition scenarios.

## Theme Builder API

### `buildTheme(tokens, flags)` (`src/js/themes/hpe.js`)

Builds the full HPE Grommet theme object from design tokens and feature flags.

Note: `buildTheme` is exported for advanced customization scenarios and is not part of the public API. Consumers should use the prebuilt `hpe` export. Maintainers and/or contributors may need to generate a theme from custom token inputs (e.g., for testing future token versions) or explicitly control compatibility flags.

- Signature: `buildTheme(tokens, flags)`
- Defined in: `src/js/themes/hpe.js`
- Exported from module: `src/js/themes/hpe.js` (`export { buildTheme }`)
- Return value: deeply frozen theme object (`Object.isFrozen(result) === true`)

#### Parameters

- `tokens` (required): token bundle consumed by theme builders. Expected shape includes:
  - `primitives`
  - `light`
  - `dark`
  - `small`
  - `large`
  - `global`
  - `components`
- `flags` (required): feature-flag object for compatibility behavior.
  - Supported flag: `'v6-backwards-compatibility'` (boolean)

#### Behavior Notes

- Composes the final theme by combining foundational builders (`global`, `dimensions`, `typography`, `colors`, `backgrounds`, `deprecations`, `fonts`) and family/component builders (`button`, `form`, `data`, `feedback`, `navigation`, `content`, `misc`, `layout`).
- Adds theme-designer metadata (`name`, `rounding`, `scale`, `spacing`) to the returned object.
- Flag impact:
  - When `'v6-backwards-compatibility'` is `false`, edge sizes come from token-based sizing (modern behavior).
  - When `'v6-backwards-compatibility'` is `true`, edge sizes use legacy global size mappings.
- The exported prebuilt `hpe` theme is created by calling `buildTheme(...)` with `'v6-backwards-compatibility': false`.

#### Example

```js
import { buildTheme } from './themes/hpe';

const theme = buildTheme(tokens, {
  'v6-backwards-compatibility': false,
});
```

## Theme Modules (`src/js/themes`)

| Module                          | Role                                                                                | Purpose                                                                                                                             |
| ------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `src/js/themes/index.js`        | Public export surface for theme-related modules.                                    |                                                                                                                                     |
| `src/js/themes/index.d.ts`      | Type declarations for theme exports.                                                |                                                                                                                                     |
| `src/js/themes/hpe.js`          | Primary HPE theme definition and assembly logic.                                    | This is the canonical theme implementation that combines token mappings, component styles, deprecations, and global theme settings. |
| `src/js/themes/hpePop.js`       | Alternative/variant HPE theme export.                                               | Variant theme configuration maintained separately from the core `hpe` theme.                                                        |
| `src/js/themes/global.js`       | Global theme assembly builder.                                                      | Centralizes global settings (focus, drop, elevation, input/font defaults, and deprecations wiring).                                 |
| `src/js/themes/deprecations.js` | Deprecation message and list builder.                                               | Defines deprecated backgrounds/colors/button kinds and user-facing guidance.                                                        |
| `src/js/themes/colors.js`       | Color token mapping and color aliases.                                              | Central place for color behavior and compatibility mappings.                                                                        |
| `src/js/themes/backgrounds.js`  | Background token mapping and background presets.                                    | Dedicated source of background theme values.                                                                                        |
| `src/js/themes/fonts.js`        | Font helper utilities.                                                              | Computes Graphik family aliasing and generates `@font-face` declarations.                                                           |
| `src/js/themes/dimensions.js`   | Dimension and breakpoint builder.                                                   | Computes border, edge, radius, size, and breakpoint mappings from tokens and flags.                                                 |
| `src/js/themes/utils.js`        | Shared helper utilities (for example object freezing and token resolution helpers). | Common logic used by theme code and unit-tested directly.                                                                           |
| `src/js/themes/typography.js`   | Typography builder.                                                                 | Assembles anchor, text, paragraph, and heading theme structures.                                                                    |
| `src/js/themes/button.js`       | Button theme builder.                                                               | Constructs button kinds, states, sizes, and option behavior primitives.                                                             |
| `src/js/themes/form.js`         | Form family builder.                                                                | Assembles field/input/select/range/rating-related component themes.                                                                 |
| `src/js/themes/data.js`         | Data family builder.                                                                | Assembles data table/chart/filter/search/sort/summary and toolbar themes.                                                           |
| `src/js/themes/feedback.js`     | Feedback family builder.                                                            | Assembles notification, spinner, and layer themes.                                                                                  |
| `src/js/themes/navigation.js`   | Navigation family builder.                                                          | Assembles tabs, menu, pagination, sidebar, nav, tip, and toggle group themes.                                                       |
| `src/js/themes/content.js`      | Content family builder.                                                             | Assembles card/list/table/calendar/chart/carousel/avatar themes.                                                                    |
| `src/js/themes/misc.js`         | Miscellaneous family builder.                                                       | Assembles shared component themes such as box, header/footer, diagram, distribution, icon, meter, and tag.                          |
| `src/js/themes/layout.js`       | Layout family builder.                                                              | Assembles page, pageHeader, video, and nameValuePair themes.                                                                        |
| `src/js/themes/prism.js`        | Prism syntax-highlighting theme definitions.                                        | Code-block syntax color styling separate from base component theming.                                                               |

## Test Layout (`src/js/__tests__`)

### Integration Tests (`src/js/__tests__/integration`)

- `hpe.test.js`:
  Structural and contract tests for assembled theme shape.
  Distinctive purpose: verifies expected object paths and core schema presence.

- `hpe.validations.test.js`:
  Value validation and deprecation-focused assertions.
  Distinctive purpose: checks critical resolved values and compatibility/deprecation expectations.

- `hpe.flags.test.js`:
  Feature-flag behavior assertions.
  Distinctive purpose: verifies `v6-backwards-compatibility` behavior and default exported-theme flag expectations.

- `hpe.snapshots.test.js`:
  Snapshot regression coverage for logical theme groups.
  Distinctive purpose: surfaces broad structural/value drift in reviewed snapshot diffs.

- `deprecations.test.js`:
  Deprecation entry assertions.
  Distinctive purpose: validates deprecated keys and warning-metadata contract for compatibility tooling.

### Unit Tests (`src/js/__tests__/unit`)

- `utils.test.js`:
  Pure function tests for `themes/utils.js`.
  Distinctive purpose: validates helper behavior in isolation from full theme assembly.

### Snapshots (`src/js/__tests__/integration/__snapshots__`)

- `hpe.snapshots.test.js.snap`:
  Jest-generated snapshot artifact.
  Distinctive purpose: committed baseline for snapshot regression review.

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

- `convert-to-json.js`: Converts theme export to JSON (`yarn jsonify`).
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
