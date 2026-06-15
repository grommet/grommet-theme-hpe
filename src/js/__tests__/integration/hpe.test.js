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

  let theme;

  beforeAll(() => {
    theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
  });

  describe('Critical property paths', () => {
    it('should have global.colors object', () => {
      expect(theme.global).toBeDefined();
      expect(theme.global.colors).toBeDefined();
      expect(typeof theme.global.colors).toBe('object');
    });

    it('should have global.focus definition', () => {
      expect(theme.global.focus).toBeDefined();
      expect(typeof theme.global.focus).toBe('object');
    });

    it('should have global.edgeSize definition', () => {
      expect(theme.global.edgeSize).toBeDefined();
      expect(typeof theme.global.edgeSize).toBe('object');
    });

    it('should have global.font definition', () => {
      expect(theme.global.font).toBeDefined();
      expect(typeof theme.global.font).toBe('object');
    });

    it('should have global.breakpoints definition', () => {
      expect(theme.global.breakpoints).toBeDefined();
      expect(typeof theme.global.breakpoints).toBe('object');
    });

    it('should have button.primary definition', () => {
      expect(theme.button).toBeDefined();
      expect(theme.button.primary).toBeDefined();
      expect(typeof theme.button.primary).toBe('object');
    });

    it('should have text and heading definitions', () => {
      expect(theme.text).toBeDefined();
      expect(theme.heading).toBeDefined();
      expect(typeof theme.text).toBe('object');
      expect(typeof theme.heading).toBe('object');
    });

    it('should have form field definitions', () => {
      expect(theme.formField).toBeDefined();
      expect(typeof theme.formField).toBe('object');
    });
  });

  describe('Color definitions', () => {
    it('should have text-strong color defined', () => {
      expect(theme.global.colors['text-strong']).toBeDefined();
    });

    it('should have focus color defined', () => {
      expect(theme.global.colors.focus).toBeDefined();
    });

    it('should have all required color keys', () => {
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
      const breakpoints = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
      breakpoints.forEach((bp) => {
        expect(theme.global.breakpoints[bp]).toBeDefined();
        // value is optional (xlarge omits it), but must be a number when present
        const { value } = theme.global.breakpoints[bp];
        if (value !== undefined) {
          expect(typeof value).toBe('number');
        }
      });
    });

    it('should use caller-provided global breakpoint for responsive heading styles', () => {
      const customTokens = {
        ...tokens,
        global: {
          ...tokens.global,
          hpe: {
            ...tokens.global.hpe,
            breakpoint: {
              ...tokens.global.hpe.breakpoint,
              small: '1234px',
            },
          },
        },
      };

      const customTheme = buildTheme(customTokens, {
        'v6-backwards-compatibility': false,
      });
      const responsiveStyle = customTheme.heading.extend({
        level: 1,
        responsive: true,
      });

      expect(responsiveStyle).toContain('(max-width: 1234px)');
    });
  });

  describe('Spacing and sizing', () => {
    it('should have all edgeSize values', () => {
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
      // Check that borderSize object exists and has at least some values
      expect(theme.global.borderSize).toBeDefined();
      expect(typeof theme.global.borderSize).toBe('object');
      // At least one size should be defined
      expect(Object.keys(theme.global.borderSize).length).toBeGreaterThan(0);
    });
  });
});
