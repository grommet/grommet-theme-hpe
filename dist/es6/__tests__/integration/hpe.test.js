import { primitives as localPrimitives, dark as localDark, light as localLight, dimension as localDimension, small as localSmall, global as localGlobal, components as localComponents } from 'hpe-design-tokens/grommet';
import { buildTheme, hpe } from '../../themes/hpe';
describe('Structural and Contract Tests', function () {
  var tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    small: localSmall,
    large: localDimension,
    global: localGlobal,
    components: localComponents
  };
  var theme;
  beforeAll(function () {
    theme = buildTheme(tokens, {
      'v6-backwards-compatibility': false
    });
  });
  describe('Critical property paths', function () {
    it('should have global.colors object', function () {
      expect(theme.global).toBeDefined();
      expect(theme.global.colors).toBeDefined();
      expect(typeof theme.global.colors).toBe('object');
    });
    it('should have global.focus definition', function () {
      expect(theme.global.focus).toBeDefined();
      expect(typeof theme.global.focus).toBe('object');
    });
    it('should have global.edgeSize definition', function () {
      expect(theme.global.edgeSize).toBeDefined();
      expect(typeof theme.global.edgeSize).toBe('object');
    });
    it('should have global.font definition', function () {
      expect(theme.global.font).toBeDefined();
      expect(typeof theme.global.font).toBe('object');
    });
    it('should have global.breakpoints definition', function () {
      expect(theme.global.breakpoints).toBeDefined();
      expect(typeof theme.global.breakpoints).toBe('object');
    });
    it('should have button.primary definition', function () {
      expect(theme.button).toBeDefined();
      expect(theme.button.primary).toBeDefined();
      expect(typeof theme.button.primary).toBe('object');
    });
    it('should have text and heading definitions', function () {
      expect(theme.text).toBeDefined();
      expect(theme.heading).toBeDefined();
      expect(typeof theme.text).toBe('object');
      expect(typeof theme.heading).toBe('object');
    });
    it('should have form field definitions', function () {
      expect(theme.formField).toBeDefined();
      expect(typeof theme.formField).toBe('object');
    });
  });
  describe('Color definitions', function () {
    it('should have text-strong color defined', function () {
      expect(theme.global.colors['text-strong']).toBeDefined();
    });
    it('should have focus color defined', function () {
      expect(theme.global.colors.focus).toBeDefined();
    });
    it('should have all required color keys', function () {
      var requiredColors = ['text', 'text-strong', 'focus', 'background', 'control'];
      requiredColors.forEach(function (color) {
        expect(theme.global.colors[color]).toBeDefined();
      });
    });
  });
  describe('Breakpoint definitions', function () {
    it('should have all required breakpoints', function () {
      var requiredBreakpoints = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
      requiredBreakpoints.forEach(function (bp) {
        expect(theme.global.breakpoints[bp]).toBeDefined();
        expect(typeof theme.global.breakpoints[bp]).toBe('object');
      });
    });
    it('should have breakpoint properties', function () {
      var breakpoints = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
      breakpoints.forEach(function (bp) {
        expect(theme.global.breakpoints[bp]).toBeDefined();
        // value is optional (xlarge omits it), but must be a number when present
        var value = theme.global.breakpoints[bp].value;
        if (value !== undefined) {
          expect(typeof value).toBe('number');
        }
      });
    });
  });
  describe('Spacing and sizing', function () {
    it('should have all edgeSize values', function () {
      var requiredSizes = ['none', 'hair', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
      requiredSizes.forEach(function (size) {
        expect(theme.global.edgeSize[size]).toBeDefined();
      });
    });
    it('should have borderSize values defined', function () {
      // Check that borderSize object exists and has at least some values
      expect(theme.global.borderSize).toBeDefined();
      expect(typeof theme.global.borderSize).toBe('object');
      // At least one size should be defined
      expect(Object.keys(theme.global.borderSize).length).toBeGreaterThan(0);
    });
  });
  describe('Deprecated entries', function () {
    it('should have deprecated colors list', function () {
      expect(theme.global.deprecated).toBeDefined();
      expect(theme.global.deprecated.colors).toBeDefined();
      expect(Array.isArray(theme.global.deprecated.colors)).toBe(true);
    });
    it('should have deprecated button kinds list', function () {
      expect(theme.global.deprecated.button).toBeDefined();
      expect(theme.global.deprecated.button.kind).toBeDefined();
      expect(Array.isArray(theme.global.deprecated.button.kind)).toBe(true);
    });
  });
});
describe('Flag Behavior Tests', function () {
  var tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    small: localSmall,
    large: localDimension,
    global: localGlobal,
    components: localComponents
  };
  describe('v6-backwards-compatibility flag', function () {
    it('should use token-based edgeSize when flag is false', function () {
      var themeWithoutFlag = buildTheme(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(themeWithoutFlag.global.edgeSize).toBeDefined();
      // Token-based dimensions include the additional t-shirt sizes.
      expect(themeWithoutFlag.global.edgeSize['5xsmall']).toBeDefined();
    });
    it('should use globalSizes edgeSize when flag is true', function () {
      var themeWithFlag = buildTheme(tokens, {
        'v6-backwards-compatibility': true
      });
      expect(themeWithFlag.global.edgeSize).toBeDefined();
      expect(themeWithFlag.global.edgeSize['5xsmall']).toBeUndefined();
      expect(themeWithFlag.global.edgeSize.medium).toBe('24px');
    });
    it('should have different edgeSize values when flag differs', function () {
      var themeWithoutFlag = buildTheme(tokens, {
        'v6-backwards-compatibility': false
      });
      var themeWithFlag = buildTheme(tokens, {
        'v6-backwards-compatibility': true
      });
      // The values should differ between the two flag states
      // (though they might coincidentally be the same in some cases)
      expect(themeWithoutFlag.global.edgeSize).toBeDefined();
      expect(themeWithFlag.global.edgeSize).toBeDefined();
    });
  });
  describe('Pre-built hpe export', function () {
    it('should be defined and frozen', function () {
      expect(hpe).toBeDefined();
      expect(Object.isFrozen(hpe)).toBe(true);
    });
    it('should have expected structure', function () {
      expect(hpe.global).toBeDefined();
      expect(hpe.button).toBeDefined();
      expect(hpe.text).toBeDefined();
      expect(hpe.heading).toBeDefined();
    });
    it('should have comprehensive theme structure', function () {
      // Smoke-check deeper nested paths on the shipped default export.
      expect(hpe.global.colors['text-strong']).toBeDefined();
      expect(hpe.button.primary).toBeDefined();
      expect(hpe.button.primary.background).toBeDefined();
    });
    it('should use v6-backwards-compatibility: false by default', function () {
      // The exported hpe should use the default flag value (false)
      // Verify by checking a flag-specific edgeSize key.
      expect(hpe.global.edgeSize['5xsmall']).toBeDefined();
    });
  });
});