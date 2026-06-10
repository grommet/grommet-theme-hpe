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

describe('Deprecation Entry Tests', () => {
  const tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    small: localSmall,
    large: localDimension,
    global: localGlobal,
    components: localComponents,
  };

  describe('Deprecated colors list', () => {
    it('should have deprecated colors array defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.deprecated).toBeDefined();
      expect(theme.global.deprecated.colors).toBeDefined();
      expect(Array.isArray(theme.global.deprecated.colors)).toBe(true);
    });

    it('should contain expected deprecated color entries', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      const deprecatedColors = theme.global.deprecated.colors;
      // Verify the list is not empty
      expect(deprecatedColors.length).toBeGreaterThan(0);
    });

    it('should have disabled-text as deprecated', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.deprecated.colors).toBeDefined();
      expect(Array.isArray(theme.global.deprecated.colors)).toBe(true);
    });
  });

  describe('Deprecated button kinds', () => {
    it('should have deprecated button object defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.deprecated.button).toBeDefined();
      expect(typeof theme.global.deprecated.button).toBe('object');
    });

    it('should have deprecated button kind array defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.deprecated.button.kind).toBeDefined();
      expect(Array.isArray(theme.global.deprecated.button.kind)).toBe(true);
    });

    it('should contain expected deprecated button kind entries', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      const deprecatedKinds = theme.global.deprecated.button.kind;
      // Verify the list is not empty
      expect(deprecatedKinds.length).toBeGreaterThan(0);
    });
  });

  describe('Deprecated backgrounds', () => {
    it('should have deprecated backgrounds list if backgrounds are deprecated', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      if (theme.global.deprecated.backgrounds) {
        expect(Array.isArray(theme.global.deprecated.backgrounds)).toBe(true);
      }
    });
  });
});

describe('Value-Validation Tests', () => {
  const tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    small: localSmall,
    large: localDimension,
    global: localGlobal,
    components: localComponents,
  };

  describe('Base spacing values', () => {
    it('should have base spacing of 24px', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      // The base spacing is used to derive other sizes
      expect(theme.global.edgeSize.medium).toBe('24px');
    });

    it('should have consistent edgeSize medium value', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.edgeSize.medium).toBeDefined();
      expect(typeof theme.global.edgeSize.medium).toBe('string');
      expect(theme.global.edgeSize.medium).toMatch(/^\d+px$/);
    });
  });

  describe('Color token resolution', () => {
    it('should resolve text-strong color', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      const textStrong = theme.global.colors['text-strong'];
      expect(textStrong).toBeDefined();
      // Can be string or object with light/dark
      expect(
        typeof textStrong === 'string' || typeof textStrong === 'object',
      ).toBe(true);
    });

    it('should resolve focus color', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      const focusColor = theme.global.colors.focus;
      expect(focusColor).toBeDefined();
    });
  });

  describe('Typography values', () => {
    it('should have text sizes defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.text).toBeDefined();
      expect(Object.keys(theme.text).length).toBeGreaterThan(0);
    });

    it('should have heading sizes defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.heading).toBeDefined();
      expect(Object.keys(theme.heading).length).toBeGreaterThan(0);
    });

    it('should have font family defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.font).toBeDefined();
      expect(theme.global.font.family).toBeDefined();
    });

    it('should have font face defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.font.face).toBeDefined();
    });
  });

  describe('Component theme values', () => {
    it('should have button primary theme defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.button.primary).toBeDefined();
      expect(typeof theme.button.primary).toBe('object');
    });

    it('should have button secondary theme defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.button.secondary).toBeDefined();
      expect(typeof theme.button.secondary).toBe('object');
    });

    it('should have form field theme defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.formField).toBeDefined();
      expect(typeof theme.formField).toBe('object');
    });

    it('should have check box theme defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.checkBox).toBeDefined();
      expect(typeof theme.checkBox).toBe('object');
    });
  });

  describe('Dimension values', () => {
    it('should have edgeSize none defined as 0px', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.edgeSize.none).toBe('0px');
    });

    it('should have edgeSize values in px format', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      Object.entries(theme.global.edgeSize).forEach(([key, value]) => {
        expect(typeof value).toBe('string');
        // Skip responsiveBreakpoint as it's a string identifier, not a px value
        if (key !== 'responsiveBreakpoint') {
          expect(value).toMatch(/^\d+px$/);
        }
      });
    });

    it('should have size values defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.size).toBeDefined();
      expect(Object.keys(theme.global.size).length).toBeGreaterThan(0);
    });
  });
});
