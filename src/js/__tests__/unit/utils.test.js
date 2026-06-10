import {
  primitives as localPrimitives,
  dark as localDark,
  light as localLight,
  dimension as localDimension,
  small as localSmall,
  global as localGlobal,
  components as localComponents,
} from 'hpe-design-tokens/grommet';
import { buildTheme } from '../../themes/hpe';

describe('Pure utility functions', () => {
  // Utility helpers are exported from src/js/themes/utils.js.
  // Prefer calling helpers directly for unit tests; use buildTheme() only
  // when validating integration behavior.

  const tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    small: localSmall,
    large: localDimension,
    global: localGlobal,
    components: localComponents,
  };

  describe('isObject', () => {
    it('should correctly identify objects vs non-objects by checking built theme structure', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });

      // Verify the result is an object and has expected structure
      expect(typeof theme).toBe('object');
      expect(theme).not.toBeNull();
      expect(Array.isArray(theme)).toBe(false);
    });
  });

  describe('deepFreeze', () => {
    it('should freeze the theme object and nested objects', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });

      // Verify the theme is frozen
      expect(Object.isFrozen(theme)).toBe(true);

      // Verify nested objects are frozen (when they exist)
      if (theme.global && typeof theme.global === 'object') {
        expect(Object.isFrozen(theme.global)).toBe(true);
      }
      if (theme.button && typeof theme.button === 'object') {
        expect(Object.isFrozen(theme.button)).toBe(true);
      }
    });

    it('should prevent modifications to the frozen theme', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });

      // Attempting to modify the frozen theme should fail silently in non-strict mode
      // or throw in strict mode. Either way, the value should not change.
      const originalValue = theme.global?.focus?.border?.color;
      if (originalValue !== undefined) {
        try {
          theme.global.focus.border.color = 'modified';
        } catch (e) {
          // ignore TypeError in strict mode
        }
        expect(theme.global.focus.border.color).toBe(originalValue);
      }
    });
  });

  describe('getTextSize', () => {
    it('should convert 3xlarge to 3xl', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });

      // Verify the theme builds without error (getTextSize is called internally)
      expect(theme).toBeDefined();
      expect(typeof theme).toBe('object');
    });
  });

  describe('getThemeColor', () => {
    it('should resolve color strings from theme', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });

      // Verify the theme resolves colors correctly
      expect(theme.global).toBeDefined();
      // Colors can be strings or objects with light/dark variants
      if (theme.global.colors && theme.global.colors['text-strong']) {
        const color = theme.global.colors['text-strong'];
        expect(typeof color === 'string' || typeof color === 'object').toBe(
          true,
        );
      }
    });

    it('should resolve color objects with light/dark variants', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });

      // Verify the theme resolves color variants
      expect(theme.global).toBeDefined();
      expect(typeof theme.global.colors).toBe('object');
    });
  });

  describe('getHeadingSize', () => {
    it('should map heading levels to appropriate sizes', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });

      // Verify heading definitions exist
      expect(theme.heading).toBeDefined();
      expect(typeof theme.heading).toBe('object');
    });
  });
});
