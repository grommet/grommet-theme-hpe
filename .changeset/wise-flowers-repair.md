---
'grommet-theme-hpe': patch
---

[grommet-theme-hpe] Form field and input styles.

Added new `background-input` and `background-input-hover` colors to the theme and applies them to `FormField` inputs and unselected `CheckBox`/`RadioButton` controls so they lift visually from the page background.

- Added `background-input` and `background-input-hover` colors for the background fill of form inputs. Available as grommet color keys. Values are identical at rest and hover in both modes; the hover key gives `FormField` a dedicated hook should the fill ever need to diverge.

  | Color key                | Value (light) | Value (dark) |
  | ------------------------ | ------------- | ------------ |
  | `background-input`       | `#FFFFFFB8`   | `#0000000A`  |
  | `background-input-hover` | `#FFFFFFB8`   | `#0000000A`  |

- Changed `FormField` input containers (`TextInput`, `Select`, `SelectMultiple`, `TextArea`, `DateInput`, `FileInput`) from a transparent background to `background-input` at rest and `background-input-hover` on hover. The hover affordance continues to be carried by the `border-strong` border.

- Changed the unselected `CheckBox` and `RadioButton` control background from transparent to `background-input`, so controls read as fillable inputs consistent with `FormField`. Selected, indeterminate, hover and disabled states are unchanged; control hover fill remains `background-hover`.

- `CheckBoxGroup` and `RadioButtonGroup` containers remain transparent. The fill belongs to the individual controls, not the wrapping group.
