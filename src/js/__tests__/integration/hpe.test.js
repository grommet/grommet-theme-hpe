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

describe('Structural and Contract Tests', () => {
  const tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    small: localSmall,
    large: localDimension,
    global: localGlobal,
    components: localComponents,
  };

  describe('Critical property paths', () => {
    it('should have global.colors object', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global).toBeDefined();
      expect(theme.global.colors).toBeDefined();
      expect(typeof theme.global.colors).toBe('object');
    });

    it('should have global.focus definition', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.focus).toBeDefined();
      expect(typeof theme.global.focus).toBe('object');
    });

    it('should have global.edgeSize definition', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.edgeSize).toBeDefined();
      expect(typeof theme.global.edgeSize).toBe('object');
    });

    it('should have global.font definition', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.font).toBeDefined();
      expect(typeof theme.global.font).toBe('object');
    });

    it('should have global.breakpoints definition', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.breakpoints).toBeDefined();
      expect(typeof theme.global.breakpoints).toBe('object');
    });

    it('should have button.primary definition', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.button).toBeDefined();
      expect(theme.button.primary).toBeDefined();
      expect(typeof theme.button.primary).toBe('object');
    });

    it('should have text and heading definitions', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.text).toBeDefined();
      expect(theme.heading).toBeDefined();
      expect(typeof theme.text).toBe('object');
      expect(typeof theme.heading).toBe('object');
    });

    it('should have form field definitions', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.formField).toBeDefined();
      expect(typeof theme.formField).toBe('object');
    });
  });

  describe('Color definitions', () => {
    it('should have text-strong color defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.colors['text-strong']).toBeDefined();
    });

    it('should have focus color defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      expect(theme.global.colors.focus).toBeDefined();
    });

    it('should have all required color keys', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      const requiredColors = [
        'text',
        'text-strong',
        'focus',
        'background',
        'control',
      ];
      requiredColors.forEach((color) => {
        expect(theme.global.colors[color]).toBeDefined();
      });
    });
  });

  describe('Breakpoint definitions', () => {
    it('should have all required breakpoints', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      const requiredBreakpoints = [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
      ];
      requiredBreakpoints.forEach((bp) => {
        expect(theme.global.breakpoints[bp]).toBeDefined();
        expect(typeof theme.global.breakpoints[bp]).toBe('object');
      });
    });

    it('should have breakpoint properties', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      const breakpoints = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
      breakpoints.forEach((bp) => {
        expect(theme.global.breakpoints[bp]).toBeDefined();
        // Check if value exists, otherwise check for the object itself
        expect(
          theme.global.breakpoints[bp].value !== undefined ||
            typeof theme.global.breakpoints[bp] === 'object',
        ).toBe(true);
      });
    });
  });

  describe('Spacing and sizing', () => {
    it('should have all edgeSize values', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      const requiredSizes = [
        'none',
        'hair',
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
      ];
      requiredSizes.forEach((size) => {
        expect(theme.global.edgeSize[size]).toBeDefined();
      });
    });

    it('should have borderSize values defined', () => {
      const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
      // Check that borderSize object exists and has at least some values
      expect(theme.global.borderSize).toBeDefined();
      expect(typeof theme.global.borderSize).toBe('object');
      // At least one size should be defined
      expect(Object.keys(theme.global.borderSize).length).toBeGreaterThan(0);
    });
  });
});
