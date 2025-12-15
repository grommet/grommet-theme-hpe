# grommet-theme-hpe

## 8.1.0

### General:

- Added a fallback for Heading `size` if a size is passed that doesn’t exist. https://github.com/grommet/grommet-theme-hpe/pull/556

- Fixed instances where icons were falling back to grommet-icons instead of using the new icon set from `@hpe-design/icons-grommet`. https://github.com/grommet/grommet-theme-hpe/pull/557, https://github.com/grommet/grommet-theme-hpe/pull/562, and https://github.com/grommet/grommet-theme-hpe/pull/568

- Fixed an icon issue in the `primary` button where the icon received a white outline around it. https://github.com/grommet/grommet-theme-hpe/pull/560

- Fixed an issue with `text-onPrimaryStrong`, `text-onSelectedPrimaryStrong`, `icon-onPrimaryStrong`, and `icon-onSelectedPrimaryStrong` getting the opposite light/dark values. https://github.com/grommet/grommet-theme-hpe/pull/563.

- Updated hpe-design-tokens dependency to v2.2.0. This adds a new color, `foreground-ok` to the theme. https://github.com/grommet/grommet-theme-hpe/pull/569

- Updated Meter `background` to background-contrast color. https://github.com/grommet/grommet-theme-hpe/pull/565

### Deprecated:

These items are no longer recommended for use and will be removed in v9 of the theme.

- CTA button kinds. https://github.com/grommet/grommet-theme-hpe/pull/567

- The following backgrounds: https://github.com/grommet/grommet-theme-hpe/pull/566
  - datawave-green-1
  - datawave-green-2
  - datawave-multi-1
  - datawave-multi-2
  - datawave-multi-3
  - datawave-multi-4
  - datawave-multi-5
  - datawave-multi-6
  - datawave-white-1
  - datawave-white-2
  - datawave-white-3
  - datawave-white-4
  - light-shadow-1
  - light-shadow-2
  - light-shadow-3
  - light-shadow-4
  - orange-yellow
  - purple-blue
  - purple-blue-yellow
  - purple-magenta-yellow

## 8.0.0

### Major Changes

- 9c761b7: Updated `hpe-design-tokens` dependency from `~1.4.0` to `^2.1.0` which introduces NEW look and feel.

- Updated `grommet` peerDependency from `^2.49.0` to `^2.50.0`.

- 9c761b7: Dropped support for `styled-components` v5.

- Removed `grommet-icons` peer dependency.

- Added `@hpe-design/icons-grommet` peer dependency.

- Updated theme to use new icons from `@hpe-design/icons-grommet`.

- 9c761b7: Removed the following colors from the theme:
  - `decorative-red`
  - `red`
  - `red!`
  - `decorative-orange`
  - `orange`
  - `orange!`
  - `decorative-yellow`
  - `yellow`
  - `yellow!`
  - `decorative-teal`
  - `teal`
  - `teal!`

  These colors are no longer supported and should be replaced with other theme colors.

- Added `decorative-cyan` color to the theme.

- Adjusted the prism theme colors for use with code blocks syntax highlighting.

- Adjusted heading font sizes so that `xxsmall`, `xsmall`, `small`, `large`, and `xlarge` stay consistent across all heading levels.
  - `xxsmall` = 14px (exported as em)
  - `xsmall` = 16px (exported as em)
  - `small` = 18px (exported as em)
  - `large` = 24px (exported as em)
  - `xlarge` = 32px (exported as em)

- Changed to new typeface, Graphik, which replaces HPE Metric.

- 9c761b7: Updated Text and Heading such that passing `weight="bold"` will resolve to theme-defined weight of 500. This enables the concept of "bold" to be theme-driven. For use cases that need the font-face's true bold, numeric font-weights 800 can be used and won't be overridden.

## 7.0.2

- Fixed t-shirt size mapping of `dataTable.resize.padding.vertical` to `3xsmall`. (https://github.com/grommet/grommet-theme-hpe/pull/538)

## 7.0.1

- Fixed mapping of PageHeader `xlarge` breakpoint columns size from `large` to `xlarge` to match v6 size. (https://github.com/grommet/grommet-theme-hpe/pull/536)
- Fixed mapping of Tip `margin` from `3xsmall` to `5xsmall` to match v6 size. (https://github.com/grommet/grommet-theme-hpe/pull/536)

## 7.0.0

### Major Changes

- 203bc52: Introduces breaking changes to t-shirt sizes.

  **`pad`, `gap`, `margin` t-shirt sizes**
  | Current | New | Value |
  |---------|-----|-----:|
  | hair | hair | 1px |
  | xxsmall | 5xsmall | 3px |
  | -- | 4xsmall (NEW) | 4px |
  | xsmall | 3xsmall | 6px |
  | -- | xxsmall (NEW) | 8px |
  | small | xsmall | 12px |
  | -- | small (NEW) | 16px |
  | medium | medium | 24px |
  | -- | large (NEW) | 32px |
  | large | xlarge | 48px |
  | -- | xxlarge (NEW) | 64px |
  | xlarge | 3xlarge | 96px |

  **`round` t-shirt sizes**
  | Current | New | Value |
  |---------|-----|-----:|
  | none | none | 0px |
  | hair | hair | 1px |
  | xxsmall | -- | 3px |
  | -- | xxsmall (NEW) | 4px |
  | xsmall | xsmall | 6px |
  | -- | small (NEW) | 8px |
  | small | medium | 12px |
  | -- | large (NEW) | 16px |
  | medium | xlarge | 24px |
  | -- | xxlarge (NEW) | 32px |
  | large | -- | 48px |
  | -- | -- | 64px |
  | xlarge | -- | 96px |
  | full | full | 9999px |

  **border size t-shirt sizes**
  | Current | New | Value |
  |---------|-----|-----:|
  | -- | none | 0px |
  | xsmall | xsmall | 1px |
  | small | small | 2px |
  | medium | medium | 4px |
  | -- | large | 6px |
  | large | -- | 12px |
  | xlarge | -- | 24px |
  | -- | default | 1px |

  **`width`, `height` t-shirt sizes**
  | Current | New | Value |
  |---------|-----|-----:|
  | xxsmall | 5xsmall | 48px |
  | -- | 4xsmall (NEW) | 64px |
  | xsmall | 3xsmall | 96px |
  | -- | xxsmall (NEW)| 128px |
  | small | xsmall | 192px |
  | -- | small (NEW) | 256px |
  | medium | medium | 384px |
  | -- | large | 512px |
  | large | xlarge (NEW) | 768px |
  | -- | xxlarge | 1024px |
  | xlarge | -- | 1152px (value eliminated because it doesn't follow formula) |
  | xxlarge | 3xlarge | 1536px |

- 203bc52: - Improves accessibility of the RangeSelector component by increasing the interactive area of its edge controls to meet WCAG 2.1 AA success criterion 2.5.5 (Target Size).
- 203bc52: - Fixed inconsistent focus styles in the Select component to meet WCAG 2.4.7 Focus Visible requirements.
  Specifically, the "Clear selection" button now uses the same visible focus style as the rest of the component,
  ensuring consistent and perceivable focus indicators for all interactive elements.
- 203bc52: - Bumped grommet peerDependency to ^2.49.0.
- Adjusted `tip.content.margin` to `3xsmall`.

### Patch Changes

- 203bc52: - Fixed RadioButton checked icon misalignment which was occurring on certain browsers, such as Safari, and window zoom levels.

## 6.5.1

### Patch Changes

- f0dbf80: - Fixed missing design token mapping for padding of table header and footer cells to align with hpe-design-tokens and Figma. Height of header cells changes from 36px to 48px, in alignment with body cell styling.

## 6.5.0

### Minor Changes

- 55b537b: - Upgraded hpe-design-tokens to next minor version.
  - Added `color.icon.primary.hover`. In Grommet, used as `color="icon-primary-hover"`.
  - Fixed value of `checkbox.control.indeterminate.rest.iconColor` from `color.icon.onPrimaryStrong` to `color.icon.onSelectedPrimaryStrong`. No visual change for this theme version, but fixes reference to be more scalable to future theme changes.
- fe34cae: - Added `global.focus.inset` for cases like DataTable expand control which leverages `focusIndicator="inset"` internally. Supported when using grommet >=2.48.0.

### Patch Changes

- 5f82fd6: - Fixed `global.focus.shadow.blur` to be intended value of `0px` instead of `2px`.

## 6.4.2

### Patch Changes

- 3e44690: - Fixed RangeInput styling for Firefox which does not support pseudo-element on input tag. In the future, we might consider rebuilding the Grommet RangeInput to accommodate the "dot" marker across all browsers. For now, applying border styling on track for FireFox to meet WCAG AA requirements.
  - For all other browsers (non-FireFox), increased "dot" marker from 3px to 4px to match the height of the RangeInput track.

## 6.4.1

### Patch Changes

- e6abbd6: - Fixed RangeInput styles to meet WCAG AA requirements by adding "dot" indicator at end of unselected track. This ensures that, even though the unselected track color doesn't meet 3:1 contrast ratio with background colors, there is an alternate visual indicator to define the end of the input.
- 695c1be: - Fixed Calendar disabled day styles.

## 6.4.0

### Minor Changes

- f3702f9: - Updated Tab styles to use underline marker instead of background fill to indicate the selected tab. This removes potential conflict in visual hierarchy with primary Buttons.
- 119f3ee: - Added React 19 to support peerDependencies.

## 6.3.0

### Minor Changes

- 06da636: - Upgraded hpe-design-tokens to next minor version.
  - Refined `dataVis.categorical` palette to remove use of green to avoid confusion with status-based charts.
  - Fixed `color.foreground.primary`, `color.border.selected` to meet 4.5:1 contrast ratio on standard background colors.

### Patch Changes

- 0a2c7fa: - Fixed accessibility bug where TextInput and MaskedInput suggestions were not receiving sufficient visual styling to meet WCAG requirements with keyboard navigation.

## 6.2.0

### Minor Changes

- bbfbb57: - Upgraded hpe-design-tokens to next minor version.
  - Updated paragraph max-width from `25em` to `30em` to avoid prematurely wrapping; still adheres to WCAG AAA 80 character per line recommendation.
  - Fixed `text-weak` to meet minimum 4.5:1 contrast ratio on supported standard background colors.

## 6.1.0

### Minor Changes

- 4570645: - Upgraded hpe-design-tokens to next minor version. This adds `icon-onStrong` color and updates status background colors to use opaque values.
- 083200d: - Added "graph-7" to provide full range of dataVis-categorical colors offered by hpe-design-tokens.

## 6.0.1

### Patch Changes

- 0fbcba7: - Fixed `list.primaryKey` to use font-weight "medium" instead of "bold".
- 075868c: - Fixed hpe-design-tokens dependency to only pull in patch versions.
- 0f332db: - Fixed inline notification message to "fill" container as was intended direction for v6.0.0.
- b011b63: - Fixed incorrect override of Button hover styles when in table body cell.
- 5a97dcd: - Fixed bug where inputs outside of FormField were not receiving disabled styling.
- 0eee2e9: - Fixed Carousel disabled icon color.
