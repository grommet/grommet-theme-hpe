"use strict";

var _grommet = require("hpe-design-tokens/grommet");
var _themes = require("../../themes");
var _hpe = require("../../themes/hpe");
var tokens = {
  primitives: _grommet.primitives,
  light: _grommet.light,
  dark: _grommet.dark,
  small: _grommet.small,
  large: _grommet.dimension,
  global: _grommet.global,
  components: _grommet.components
};
describe('Flag behavior', function () {
  it('uses token-based edgeSize with v6-backwards-compatibility=false', function () {
    var theme = (0, _hpe.buildTheme)(tokens, {
      'v6-backwards-compatibility': false
    });
    expect(theme.global.edgeSize.medium).toBe('24px');
    expect(theme.global.edgeSize['5xsmall']).toBeDefined();
  });
  it('uses legacy globalSizes with v6-backwards-compatibility=true', function () {
    var theme = (0, _hpe.buildTheme)(tokens, {
      'v6-backwards-compatibility': true
    });
    expect(theme.global.edgeSize.medium).toBe('24px');
    expect(theme.global.edgeSize['5xsmall']).toBeUndefined();
  });
  it('changes edgeSize shape between false and true modes', function () {
    var modernTheme = (0, _hpe.buildTheme)(tokens, {
      'v6-backwards-compatibility': false
    });
    var legacyTheme = (0, _hpe.buildTheme)(tokens, {
      'v6-backwards-compatibility': true
    });
    expect(modernTheme.global.edgeSize).not.toEqual(legacyTheme.global.edgeSize);
  });
});
describe('Pre-built hpe export behavior', function () {
  it('is defined and frozen', function () {
    expect(_themes.hpe).toBeDefined();
    expect(Object.isFrozen(_themes.hpe)).toBe(true);
  });
  it('uses v6-backwards-compatibility=false behavior by default', function () {
    expect(_themes.hpe.global.edgeSize.medium).toBe('24px');
    expect(_themes.hpe.global.edgeSize['5xsmall']).toBeDefined();
  });
});