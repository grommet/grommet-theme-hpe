function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import { primitives as localPrimitives, dark as localDark, light as localLight, dimension as localDimension, small as localSmall, global as localGlobal, components as localComponents } from 'hpe-design-tokens/grommet';
import { buildTheme } from '../../themes/hpe';
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
    it('should have dateTimeInput definitions', function () {
      expect(theme.dateTimeInput).toBeDefined();
      expect(theme.dateTimeInput.container.round).toBeDefined();
      expect(theme.dateTimeInput.button.margin).toBeDefined();
      expect(theme.dateTimeInput.active.background).toBeDefined();
      expect(theme.dateTimeInput.active.indicator.color).toBeDefined();
      expect(theme.dateTimeInput.drop.border.size).toBeDefined();
      expect(theme.dateTimeInput.separator.pad).toBeDefined();
      expect(theme.dateTimeInput.icon.calendar).toBeDefined();
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
    it('should use caller-provided global breakpoint for responsive heading styles', function () {
      var customTokens = _extends({}, tokens, {
        global: _extends({}, tokens.global, {
          hpe: _extends({}, tokens.global.hpe, {
            breakpoint: _extends({}, tokens.global.hpe.breakpoint, {
              small: '1234px'
            })
          })
        })
      });
      var customTheme = buildTheme(customTokens, {
        'v6-backwards-compatibility': false
      });
      var responsiveStyle = customTheme.heading.extend({
        level: 1,
        responsive: true
      });
      expect(responsiveStyle).toContain('(max-width: 1234px)');
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
});