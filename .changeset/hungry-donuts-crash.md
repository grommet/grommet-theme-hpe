---
"grommet-theme-hpe": patch
---

- Updated Text and Heading such that passing `weight="bold"` will resolve to theme-defined weight of 500. This enables the concept of "bold" to be theme-driven. For use cases that need the font-face's true bold, numeric font-weights 800 can be used and won't be overridden. 
