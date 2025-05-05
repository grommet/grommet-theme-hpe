# grommet-theme-hpe

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
