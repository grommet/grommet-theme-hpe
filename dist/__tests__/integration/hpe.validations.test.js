"use strict";

var _grommet = require("hpe-design-tokens/grommet");
var _hpe = require("../../themes/hpe");
// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0

describe('Value-Validation Tests', function () {
  var tokens = {
    primitives: _grommet.primitives,
    light: _grommet.light,
    dark: _grommet.dark,
    small: _grommet.small,
    large: _grommet.dimension,
    global: _grommet.global,
    components: _grommet.components
  };
  describe('Base spacing values', function () {
    it('should have base spacing of 24px', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      // The base spacing is used to derive other sizes
      expect(theme.global.edgeSize.medium).toBe('24px');
    });
    it('should have consistent edgeSize medium value', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.global.edgeSize.medium).toBeDefined();
      expect(typeof theme.global.edgeSize.medium).toBe('string');
      expect(theme.global.edgeSize.medium).toMatch(/^\d+px$/);
    });
  });
  describe('Color token resolution', function () {
    it('should resolve text-strong color', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      var textStrong = theme.global.colors['text-strong'];
      expect(textStrong).toBeDefined();
      // Can be string or object with light/dark
      expect(typeof textStrong === 'string' || typeof textStrong === 'object').toBe(true);
    });
    it('should resolve focus color', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      var focusColor = theme.global.colors.focus;
      expect(focusColor).toBeDefined();
    });
  });
  describe('Typography values', function () {
    it('should have text sizes defined', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.text).toBeDefined();
      expect(Object.keys(theme.text).length).toBeGreaterThan(0);
    });
    it('should have heading sizes defined', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.heading).toBeDefined();
      expect(Object.keys(theme.heading).length).toBeGreaterThan(0);
    });
    it('should have font family defined', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.global.font).toBeDefined();
      expect(theme.global.font.family).toBeDefined();
    });
    it('should have font face defined', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.global.font.face).toBeDefined();
    });
  });
  describe('Component theme values', function () {
    it('should have button primary theme defined', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.button.primary).toBeDefined();
      expect(typeof theme.button.primary).toBe('object');
    });
    it('should have button secondary theme defined', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.button.secondary).toBeDefined();
      expect(typeof theme.button.secondary).toBe('object');
    });
    it('should have form field theme defined', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.formField).toBeDefined();
      expect(typeof theme.formField).toBe('object');
    });
    it('should have check box theme defined', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.checkBox).toBeDefined();
      expect(typeof theme.checkBox).toBe('object');
    });
  });
  describe('Dimension values', function () {
    it('should have edgeSize none defined as 0px', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.global.edgeSize.none).toBe('0px');
    });
    it('should have edgeSize values in px format', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      Object.entries(theme.global.edgeSize).forEach(function (_ref) {
        var key = _ref[0],
          value = _ref[1];
        expect(typeof value).toBe('string');
        // Skip responsiveBreakpoint as it's a string identifier, not a px value
        if (key !== 'responsiveBreakpoint') {
          expect(value).toMatch(/^\d+px$/);
        }
      });
    });
    it('should have size values defined', function () {
      var theme = (0, _hpe.buildTheme)(tokens, {
        'v6-backwards-compatibility': false
      });
      expect(theme.global.size).toBeDefined();
      expect(Object.keys(theme.global.size).length).toBeGreaterThan(0);
    });
  });
});