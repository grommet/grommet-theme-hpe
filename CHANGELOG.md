# grommet-theme-hpe

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
