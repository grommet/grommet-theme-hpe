// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import {
  deepFreeze,
  getHeadingSize,
  getTextSize,
  getThemeColor,
  isObject,
} from '../../themes/utils';

describe('Pure utility functions', () => {
  describe('isObject', () => {
    it('should correctly identify plain objects', () => {
      expect(isObject({})).toBe(true);
      expect(isObject({ key: 'value' })).toBe(true);
    });

    it('should return false for arrays, null, and primitives', () => {
      expect(isObject([])).toBe(false);
      expect(isObject(null)).toBe(false);
      expect(isObject('text')).toBe(false);
      expect(isObject(123)).toBe(false);
    });
  });

  describe('deepFreeze', () => {
    it('should freeze the root object and first-level nested objects', () => {
      const obj = {
        top: { nested: true },
        other: { value: 1 },
      };

      const frozen = deepFreeze(obj);
      expect(Object.isFrozen(frozen)).toBe(true);
      expect(Object.isFrozen(frozen.top)).toBe(true);
      expect(Object.isFrozen(frozen.other)).toBe(true);
    });

    it('should prevent modifications to the frozen theme', () => {
      const obj = { level: { value: 'original' } };
      const frozen = deepFreeze(obj);

      try {
        frozen.level.value = 'modified';
      } catch (e) {
        // ignore TypeError in strict mode
      }

      expect(frozen.level.value).toBe('original');
    });
  });

  describe('getTextSize', () => {
    it('should convert 3xlarge to 3xl', () => {
      expect(getTextSize('3xlarge')).toBe('3xl');
      expect(getTextSize('4xlarge')).toBe('4xl');
      expect(getTextSize('5xlarge')).toBe('5xl');
      expect(getTextSize('6xlarge')).toBe('6xl');
      expect(getTextSize('large')).toBe('large');
    });
  });

  describe('getThemeColor', () => {
    it('should resolve color strings from theme', () => {
      const theme = {
        dark: false,
        global: { colors: { 'text-strong': '#111111' } },
      };

      expect(getThemeColor('text-strong', theme)).toBe('#111111');
    });

    it('should resolve color objects with light/dark variants', () => {
      const theme = {
        dark: false,
        global: {
          colors: {
            focus: { light: '#010101', dark: '#fefefe' },
          },
        },
      };
      const darkTheme = { ...theme, dark: true };

      expect(getThemeColor('focus', theme)).toBe('#010101');
      expect(getThemeColor('focus', darkTheme)).toBe('#fefefe');
    });

    it('should return original color token when key is missing', () => {
      const theme = { dark: false, global: { colors: {} } };
      expect(getThemeColor('unknown-token', theme)).toBe('unknown-token');
    });
  });

  describe('getHeadingSize', () => {
    it('should map heading levels to appropriate sizes', () => {
      const breakpointTokens = {
        hpe: {
          heading: {
            xlarge: { size: '48px' },
            large: { size: '36px' },
            medium: { size: '28px' },
            small: { size: '22px' },
            xsmall: { size: '18px' },
            xxsmall: { size: '14px' },
          },
        },
      };

      expect(getHeadingSize(breakpointTokens, undefined, 1)).toEqual({
        size: '48px',
      });
      expect(getHeadingSize(breakpointTokens, undefined, 3)).toEqual({
        size: '28px',
      });
      expect(getHeadingSize(breakpointTokens, undefined, 6)).toEqual({
        size: '14px',
      });
    });

    it('should use explicit size when available and fallback when missing', () => {
      const breakpointTokens = {
        hpe: {
          heading: {
            medium: { size: '28px' },
            xlarge: { size: '48px' },
          },
        },
      };

      expect(getHeadingSize(breakpointTokens, 'medium', 2)).toEqual({
        size: '28px',
      });
      expect(getHeadingSize(breakpointTokens, 'missing-size', 1)).toEqual({
        size: '48px',
      });
    });
  });
});
