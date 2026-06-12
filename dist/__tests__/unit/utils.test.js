"use strict";

var _utils = require("../../themes/utils");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
describe('Pure utility functions', function () {
  describe('isObject', function () {
    it('should correctly identify plain objects', function () {
      expect((0, _utils.isObject)({})).toBe(true);
      expect((0, _utils.isObject)({
        key: 'value'
      })).toBe(true);
    });
    it('should return false for arrays, null, and primitives', function () {
      expect((0, _utils.isObject)([])).toBe(false);
      expect((0, _utils.isObject)(null)).toBe(false);
      expect((0, _utils.isObject)('text')).toBe(false);
      expect((0, _utils.isObject)(123)).toBe(false);
    });
  });
  describe('deepFreeze', function () {
    it('should freeze the root object and first-level nested objects', function () {
      var obj = {
        top: {
          nested: true
        },
        other: {
          value: 1
        }
      };
      var frozen = (0, _utils.deepFreeze)(obj);
      expect(Object.isFrozen(frozen)).toBe(true);
      expect(Object.isFrozen(frozen.top)).toBe(true);
      expect(Object.isFrozen(frozen.other)).toBe(true);
    });
    it('should prevent modifications to the frozen theme', function () {
      var obj = {
        level: {
          value: 'original'
        }
      };
      var frozen = (0, _utils.deepFreeze)(obj);
      try {
        frozen.level.value = 'modified';
      } catch (e) {
        // ignore TypeError in strict mode
      }
      expect(frozen.level.value).toBe('original');
    });
  });
  describe('getTextSize', function () {
    it('should convert 3xlarge to 3xl', function () {
      expect((0, _utils.getTextSize)('3xlarge')).toBe('3xl');
      expect((0, _utils.getTextSize)('4xlarge')).toBe('4xl');
      expect((0, _utils.getTextSize)('5xlarge')).toBe('5xl');
      expect((0, _utils.getTextSize)('6xlarge')).toBe('6xl');
      expect((0, _utils.getTextSize)('large')).toBe('large');
    });
  });
  describe('getThemeColor', function () {
    it('should resolve color strings from theme', function () {
      var theme = {
        dark: false,
        global: {
          colors: {
            'text-strong': '#111111'
          }
        }
      };
      expect((0, _utils.getThemeColor)('text-strong', theme)).toBe('#111111');
    });
    it('should resolve color objects with light/dark variants', function () {
      var theme = {
        dark: false,
        global: {
          colors: {
            focus: {
              light: '#010101',
              dark: '#fefefe'
            }
          }
        }
      };
      var darkTheme = _extends({}, theme, {
        dark: true
      });
      expect((0, _utils.getThemeColor)('focus', theme)).toBe('#010101');
      expect((0, _utils.getThemeColor)('focus', darkTheme)).toBe('#fefefe');
    });
    it('should return original color token when key is missing', function () {
      var theme = {
        dark: false,
        global: {
          colors: {}
        }
      };
      expect((0, _utils.getThemeColor)('unknown-token', theme)).toBe('unknown-token');
    });
  });
  describe('getHeadingSize', function () {
    it('should map heading levels to appropriate sizes', function () {
      var breakpointTokens = {
        hpe: {
          heading: {
            xlarge: {
              size: '48px'
            },
            large: {
              size: '36px'
            },
            medium: {
              size: '28px'
            },
            small: {
              size: '22px'
            },
            xsmall: {
              size: '18px'
            },
            xxsmall: {
              size: '14px'
            }
          }
        }
      };
      expect((0, _utils.getHeadingSize)(breakpointTokens, undefined, 1)).toEqual({
        size: '48px'
      });
      expect((0, _utils.getHeadingSize)(breakpointTokens, undefined, 3)).toEqual({
        size: '28px'
      });
      expect((0, _utils.getHeadingSize)(breakpointTokens, undefined, 6)).toEqual({
        size: '14px'
      });
    });
    it('should use explicit size when available and fallback when missing', function () {
      var breakpointTokens = {
        hpe: {
          heading: {
            medium: {
              size: '28px'
            },
            xlarge: {
              size: '48px'
            }
          }
        }
      };
      expect((0, _utils.getHeadingSize)(breakpointTokens, 'medium', 2)).toEqual({
        size: '28px'
      });
      expect((0, _utils.getHeadingSize)(breakpointTokens, 'missing-size', 1)).toEqual({
        size: '48px'
      });
    });
  });
});