# Theme Maintainability: Test Coverage & Refactoring Plan

## Background

`src/js/themes/hpe.js` is a ~3,340-line monolith. Utility helpers, token-processing logic, and theme definitions for 60+ Grommet components are all interleaved inside a single `buildTheme()` function. The project historically had no test infrastructure.

These two issues compound each other: it is difficult to make changes confidently when there is nothing to catch regressions, and the file's size makes it hard to locate the right place to make a change. The goal of this plan is to establish test coverage first, then use those tests as a safety net for a structural refactor.

**Constraint:** The public `export const hpe` API and the `buildTheme` function signature must not change. The exported theme object must be structurally and value-identical before and after the refactor.

---

## Getting Started

Before beginning this work:

1. Run `yarn test` to verify the test harness and current suite pass.
2. Before writing additional tests, confirm `yarn test` runs without errors.
3. All tests should be written and passing before any refactoring begins (Phase 2 must be 100% complete before starting Phase 3).
4. After each extraction step in Phase 3, run `yarn test` and `yarn run build` before proceeding to the next step.

---

## Phase 1 — Test Infrastructure

Before writing any tests, the tooling needs to be in place.

1. Add `jest`, `babel-jest`, and `jest-environment-jsdom` as devDependencies.
   - `jest-environment-jsdom` is required because several component theme values use inline JSX (icon components), which requires a DOM-like environment to render.
   - The existing `.babelrc` config can be reused as the Jest transform — no additional Babel setup should be needed.
2. Create `jest.config.js` at the project root, pointing at `src/`, configuring the jsdom environment, and wiring up the Babel transform.
3. Add `"test": "jest"` to the `scripts` block in `package.json`.

**Important:** After setup, tests should mostly use import `buildTheme` directly (not the pre-built `hpe` export) so that each test scenario can provide custom tokens and flag combinations independently. The pre-built `hpe` export should be used for tests validating what consumers get when importing the package default theme.

1. Use buildTheme when the test is about theme generation behavior

- Custom tokens
- Different flag combinations
- Shape/value logic produced by the builder
- Regression checks that should be independent of module-level defaults

2. Use hpe when the test is about published default export contract

- The export exists and can be imported
- It is frozen/immutable
- It was built with the intended default tokens and default flags
- Public consumer-facing smoke checks

**Jest Configuration Example:**

Create `jest.config.js` at the project root with the following content:

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/js/**/*.js', '!src/**/*.d.ts'],
};
```

**Token Fixtures Import Path:**

The token fixtures (`localPrimitives`, `localLight`, `localDark`, `localSmall`, `localDimension`, `localGlobal`, `localComponents`) are imported from `hpe-design-tokens/grommet` (see `src/js/themes/hpe.js`). If test scenarios require custom fixtures, place them in a dedicated test-only module to avoid circular dependencies.

**Files affected:** `package.json`, `jest.config.js` (new), optionally `src/js/themes/testFixtures.js` (new)

---

## Phase 2 — Test Coverage

Tests should be written and passing **before** any refactoring begins. This is the safety net.

See **Test File Organization** section below for directory structure recommendations.

### 2a. Snapshot tests (per component section)

Write one snapshot per logical group of component definitions — not a single snapshot for the entire theme object. A monolithic snapshot produces diffs that are too large to review meaningfully and frequently gets auto-updated without scrutiny.

**Icon serialization:** Component theme values include inline JSX icon components (e.g., `icon: StatusCritical`). These will produce verbose React element serializations in snapshots.

**Recommendation:** As a first pass, accept verbose snapshots and focus on making them reviewable. If snapshots become too large to review comfortably, implement a custom Jest snapshot serializer (see Jest documentation) to abbreviate React elements. Example: `<Icon />` instead of `Icon { $$typeof: Symbol.for('react.element'), ... }`

Alternatively, use a package like `jest-snapshot-serializer-html` to simplify element output.

Suggested snapshot groups:

- `global` (colors, font, spacing, focus, drop, elevation)
- `button` (kinds, states, sizes)
- `formField` + form controls (`checkBox`, `radioButton`, `select`, `rangeInput`, etc.)
- `heading` + `text` + `paragraph` + `anchor`
- `dataTable` + `dataChart` + data-related components
- `notification`
- `tabs` + `tab` + `menu` + `pagination` + `accordion`
- `layer` + `tip` + `spinner`
- `card` + `list` + `table` + `calendar` + `avatar`

### 2b. Structural / contract tests

Assert that critical property paths exist and have the expected shape. These catch accidental deletions that a snapshot might present as an acceptable diff.

Examples:

- `hpe.button.primary.background` is defined
- `hpe.global.colors['text-strong']` has both `light` and `dark` keys
- `hpe.global.breakpoints` has `xsmall`, `small`, `medium`, `large`, `xlarge` keys
- `hpe.global.font.face` contains a `@font-face` block

### 2c. Value-validation tests

Assert specific critical values that map directly to design token expectations. These catch token-mapping regressions when `hpe-design-tokens` is updated.

**Maintenance Note:** When `hpe-design-tokens` is bumped, these tests will likely need updates. Mark tests that directly assert token values as "golden" (update these when tokens change) vs. structural tests (these should rarely change). Document which tests require updates during token upgrades.

Examples:

- Base spacing is `24`
- `hpe.global.edgeSize.medium` resolves to `'24px'`
- `hpe.global.breakpoints.small.value` is a number
- Key color tokens resolve to the expected hex values in light and dark modes

### 2d. Flag behavior tests

`buildTheme` accepts a `flags` argument with a `v6-backwards-compatibility` key. This flag changes the shape of the `dimensions` object. Both paths should be tested.

- With `{ 'v6-backwards-compatibility': false }` (current default): verify that `edgeSize` uses values from design tokens
- With `{ 'v6-backwards-compatibility': true }`: verify that `edgeSize` uses the legacy hardcoded `globalSizes` values

**Implementation detail:** The production export (`src/js/themes/index.js`) should also be tested to confirm it uses the correct flag value. Add a test that imports the pre-built `hpe` export and verifies its structure matches the expected flag behavior.

### 2e. Deprecation entry tests

The theme exposes `hpe.global.deprecated` entries for colors, backgrounds, and button kinds. These are consumed by tooling to warn consumers about upcoming removals. Verify each list contains the expected entries.

Examples:

- `hpe.global.deprecated.colors` contains an entry for `'disabled-text'`
- `hpe.global.deprecated.button.kind` contains entries for `'cta-primary'` and `'cta-alternate'`
- `hpe.global.deprecated.backgrounds` contains an entry for `'orange-yellow'`

### 2f. Pure function unit tests

Several helpers in `hpe.js` are pure functions with no side effects and are straightforward to test in isolation:

- `getThemeColor(color, theme)` — resolves a color name to its string value given a theme object, respecting `theme.dark`
- `getTextSize(size)` — maps `'3xlarge'` → `'3xl'`, etc.
- `getHeadingSize(breakpointTokens, size, level)` — resolves a heading size with fallback logic

**Test data:** Tests should import token fixtures from the extracted file (or directly from `hpe.js` if not extracted). Example:

```javascript
import {
  localPrimitives,
  localLight,
  localDark,
  localSmall,
} from '../themes/testFixtures';
```

⚠️ **Circular Import Warning:** Do not import test setup or test-only utilities back into `hpe.js`. Keep test data in a dedicated file to prevent circular dependencies.

---

## Test File Organization

To keep tests maintainable and organized, use the following directory structure:

```
__tests__/
  integration/
    hpe.test.js                    # Structural/contract tests + integration tests
    hpe.snapshots.test.js          # Snapshot tests (one per component group)
    hpe.flags.test.js              # Flag behavior + backwards compatibility tests
    deprecations.test.js           # Deprecation entries and warnings
  unit/
    utils.test.js                  # Unit tests for getThemeColor, getTextSize, etc.
  __snapshots__/                   # Auto-generated snapshot files (git-tracked)
    hpe.snapshots.test.js.snap
```

**Snapshot Files:** Jest automatically stores snapshots in `__snapshots__/` subdirectories. Snapshot files (`.snap`) are automatically created and updated—do not edit them manually. Commit them to git so that snapshot diffs are visible in pull requests.

**Snapshot update workflow:**

- When snapshots change intentionally (e.g., after a token update or theme change), use `yarn test -- -u` (or `npm test -- -u`)
- **Always review the diff carefully** before committing the snapshot update
- Include the reason for snapshot changes in the commit message

**Code Coverage:** Use `yarn test -- --coverage` to generate coverage reports. No specific coverage target is mandated; the priority is regression safety. However, aim to cover the main theme-building logic and pure utility functions.

---

## Phase 3 — Structural Refactor

Each extraction step below should be followed immediately by a `npm test` run before the next step begins. If tests fail, fix the issue before proceeding.

The public API (`export const hpe`) and `buildTheme` signature are not changed.

**PR/Commit Strategy:** Each of the 6 steps below should be its own pull request. This makes code review tractable, allows for easier bisection if a regression appears later, and provides rollback points if something goes wrong. Each PR should include its corresponding test run output showing all tests passing.

**Component Family Extraction Order:** The component families in Step 5 are independent of each other and can be extracted in any order. If multiple team members work on different component families in parallel, merge each family one at a time (to avoid merge conflicts). Run `yarn test` after each merge to catch import or integration issues.

**Constants Consolidation:** Shared constants used across multiple extracted modules (e.g., `buttonKinds`, `componentSizes`, `textSizes`) should be moved to `src/js/themes/constants.js` to avoid duplication.

### Step 1 — Extract utility helpers

Create `src/js/themes/utils.js` and move the following there:

- `isObject`
- `deepFreeze`
- `getThemeColor`
- `getTextSize`
- `getHeadingSize`
- `breakpointStyle`

Update `hpe.js` to import these from `utils.js`.

**After Step 1:** Run `yarn test` to verify that the extracted `utils.js` is correctly imported and all tests still pass.

### Step 2 — Extract dimension/spacing logic

Create `src/js/themes/dimensions.js` and move the following there:

- `globalSizes`
- `responsiveGlobalSizes`
- The `dimensions` object construction logic (the block that reads from token breakpoints and builds `borderSize`, `edgeSize`, `radius`, `size`, and `breakpoints`)

Export a `buildDimensions(tokens, flags)` function that `hpe.js` calls to obtain the `dimensions` object.

**After Step 2:** Run `yarn test` and `yarn jsonify` — confirm that the JSON output is identical to before extraction.

### Step 3 — Extract typography

Create `src/js/themes/typography.js` and move the following there:

- The `anchorSizeTheme` construction loop
- The `paragraphTheme` and `textTheme` construction loops (including the `fallback` tracking logic)
- The `fontWeights` map
- The `textTheme.extend` and `paragraphTheme.extend` functions
- The complete `heading` theme definition

Export a `buildTypography(tokens)` function that returns `{ anchor: { size: anchorSizeTheme }, paragraph: paragraphTheme, text: textTheme, heading: headingTheme }`.

**Cross-file dependencies:** `typography.js` imports utilities from `utils.js`. After extraction, verify that all pure functions are properly exported from `utils.js` and correctly imported by `typography.js`.

### Step 4 — Extract button theming

Create `src/js/themes/button.js` and move the following there:

- The `buttonKindTheme` construction loop
- The `buttonStatesTheme` construction loop
- The `buttonSizesTheme` construction loop
- The `mediumIconOnlyPad` constant
- The complete `button` theme definition

Export a `buildButtonTheme(tokens, dimensions)` function.

### Step 5 — Extract grouped component families

Create individual files for logical groupings of related components. Each file exports a `build*Theme(tokens, dimensions)` function.

**Testing strategy:** After extracting each component family, verify that its snapshot tests pass and that integration continues to work. Consider writing integration tests that verify dependencies between modules (e.g., that `form.js` can successfully import and use utilities from `utils.js`).

| New file                      | Components included                                                                                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/js/themes/form.js`       | `checkBox`, `checkBoxGroup`, `radioButton`, `radioButtonGroup`, `rangeInput`, `rangeSelector`, `select`, `selectMultiple`, `formField`, `fileInput`, `dateInput`         |
| `src/js/themes/data.js`       | `dataTable`, `dataChart`, `dataFilter`, `dataFilters`, `dataTableColumns`, `data`, `dataSummary`, `dataSort`, `dataSearch`                                               |
| `src/js/themes/feedback.js`   | `notification`, `spinner`, `layer`, `tip`                                                                                                                                |
| `src/js/themes/navigation.js` | `tabs`, `tab`, `menu`, `pagination`, `sidebar`, `nav`, `accordion`                                                                                                       |
| `src/js/themes/content.js`    | `card`, `cards`, `list`, `table`, `nameValueList`, `nameValuePair`, `avatar`, `calendar`, `chart`, `dataChart`, `carousel`, `video`, `page`, `pageHeader`                |
| `src/js/themes/misc.js`       | `box`, `diagram`, `distribution`, `footer`, `header`, `icon`, `maskedInput`, `meter`, `tag`, `text`, `textInput`, `thumbsRating`, `toggleGroup`, `toolbar`, `starRating` |

### Step 6 — Slim down hpe.js

After all extractions, `hpe.js` becomes a thin orchestrator:

1. Imports tokens, colors, backgrounds
2. Imports all `build*` functions from the new files
3. Calls each `build*` function to assemble the final theme object
4. Passes the assembled object to `deepFreeze` and exports it as `hpe`

The file should be in the range of 100–150 lines.

---

## Effort & Timeline Estimate

Estimated effort assuming a team familiar with Jest and the codebase:

| Phase               | Task                                                                         | Duration                                                     |
| ------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Phase 1**         | Jest setup, config, test infrastructure                                      | 2–4 hours                                                    |
| **Phase 2**         | Write all tests (snapshots, structural, units, flags, deprecations)          | 2–3 days                                                     |
| **Phase 3, Step 1** | Extract utils.js                                                             | 2–3 hours                                                    |
| **Phase 3, Step 2** | Extract dimensions.js                                                        | 2–3 hours                                                    |
| **Phase 3, Step 3** | Extract typography.js                                                        | 2–3 hours                                                    |
| **Phase 3, Step 4** | Extract button.js                                                            | 2 hours                                                      |
| **Phase 3, Step 5** | Extract component families (form, data, feedback, navigation, content, misc) | 1 day (can be parallelized across 2–3 developers)            |
| **Phase 3, Step 6** | Slim down hpe.js, final verification                                         | 2–3 hours                                                    |
| **Total**           |                                                                              | **1–2 weeks** (1–3 developers, depending on parallelization) |

**Note:** These estimates assume no major blockers. Complexity may increase if circular import issues arise or if Jest + Babel configuration needs troubleshooting.

---

## Command Reference

Throughout this plan, use `yarn` or `npm` interchangeably. Both work identically:

| Task                    | Yarn                      | npm                      |
| ----------------------- | ------------------------- | ------------------------ |
| Run tests               | `yarn test`               | `npm test`               |
| Update snapshots        | `yarn test -- -u`         | `npm test -- -u`         |
| Run tests with coverage | `yarn test -- --coverage` | `npm test -- --coverage` |
| Linting                 | `yarn lint`               | `npm run lint`           |
| Build bundle            | `yarn build`              | `npm run build`          |
| Generate JSON theme     | `yarn jsonify`            | `npm run jsonify`        |

---

## Maintenance Considerations

After the refactor is complete, keep these points in mind for future maintenance:

### Token Updates

When `hpe-design-tokens` is updated:

1. Run tests to identify which value-validation tests fail
2. Update those tests with the new expected values
3. Verify snapshots have changed appropriately
4. Run `npm run jsonify` and review the output for regressions

### Adding New Components

When a new Grommet component is added to the theme:

1. Add its theme definition to the appropriate file (e.g., `form.js`, `navigation.js`, `misc.js`)
2. Add a snapshot test in the corresponding snapshot test file
3. Add any needed structural/contract tests
4. Run `npm test` and `npm run build` before committing

### Identifying "Golden" Tests

As the test suite matures, document which tests are "golden" (rarely change) vs. which are tied to external tokens/design decisions. This helps team members quickly assess whether a test failure is expected (e.g., after a design token update) or indicates a real regression.

---

## Verification Checklist

Before merging the refactor:

- [ ] Phase 1 setup complete: `npm test` runs without errors (before test code is written)
- [ ] Phase 2 complete: All test files written and `npm test` passes 100%
- [ ] Each Phase 3 step completed: After each extraction, `npm test` passes
- [ ] Phase 3 final verification:
  - [ ] `npm test` passes with no failures or unexpected snapshot updates
  - [ ] `npm run build` completes without errors
  - [ ] `npm run jsonify` output before the refactor, diffed against output after, shows **no differences**
  - [ ] **Bundle size verification:** Run `ls -lh dist/index.js dist/es6/index.js` before and after refactor; sizes should match
  - [ ] `npm run lint` passes

---

## Out of Scope

The following are related improvements that are explicitly **not** part of this plan. They can be addressed separately.

- Test coverage for `hpePop.js`, `colors.js`, `backgrounds.js`, or `prism.js`
- TypeScript migration (the existing `index.d.ts` declares all exports as `object` — improving type definitions is a separate effort)
- Changes to any public API surface
