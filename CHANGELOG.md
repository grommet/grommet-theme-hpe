# grommet-theme-hpe

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
