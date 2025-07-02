---
"grommet-theme-hpe": patch
---

- Fixed RangeInput styling for Firefox which does not support pseudo-element on input tag. In the future, we might consider rebuilding the Grommet RangeInput to accommodate the "dot" marker across all browsers. For now, applying this styling for FireFox to meet WCAG AA guidelines.
- For all other browsers (non-FireFox), increased "dot" marker from 3px to 4px to match the height of the RangeInput track.
