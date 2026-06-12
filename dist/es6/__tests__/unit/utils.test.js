function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { deepFreeze, getHeadingSize, getTextSize, getThemeColor, isObject } from '../../themes/utils';
describe('Pure utility functions', function () {
  describe('isObject', function () {
    it('should correctly identify plain objects', function () {
      expect(isObject({})).toBe(true);
      expect(isObject({
        key: 'value'
      })).toBe(true);
    });
    it('should return false for arrays, null, and primitives', function () {
      expect(isObject([])).toBe(false);
      expect(isObject(null)).toBe(false);
      expect(isObject('text')).toBe(false);
      expect(isObject(123)).toBe(false);
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
      var frozen = deepFreeze(obj);
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
      var frozen = deepFreeze(obj);
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
      expect(getTextSize('3xlarge')).toBe('3xl');
      expect(getTextSize('4xlarge')).toBe('4xl');
      expect(getTextSize('5xlarge')).toBe('5xl');
      expect(getTextSize('6xlarge')).toBe('6xl');
      expect(getTextSize('large')).toBe('large');
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
      expect(getThemeColor('text-strong', theme)).toBe('#111111');
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
      expect(getThemeColor('focus', theme)).toBe('#010101');
      expect(getThemeColor('focus', darkTheme)).toBe('#fefefe');
    });
    it('should return original color token when key is missing', function () {
      var theme = {
        dark: false,
        global: {
          colors: {}
        }
      };
      expect(getThemeColor('unknown-token', theme)).toBe('unknown-token');
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
      expect(getHeadingSize(breakpointTokens, undefined, 1)).toEqual({
        size: '48px'
      });
      expect(getHeadingSize(breakpointTokens, undefined, 3)).toEqual({
        size: '28px'
      });
      expect(getHeadingSize(breakpointTokens, undefined, 6)).toEqual({
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
      expect(getHeadingSize(breakpointTokens, 'medium', 2)).toEqual({
        size: '28px'
      });
      expect(getHeadingSize(breakpointTokens, 'missing-size', 1)).toEqual({
        size: '48px'
      });
    });
  });
});