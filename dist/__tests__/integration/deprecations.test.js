"use strict";

var _grommet = require("hpe-design-tokens/grommet");
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
describe('Deprecation entries', function () {
  var theme = (0, _hpe.buildTheme)(tokens, {
    'v6-backwards-compatibility': false
  });
  it('contains expected deprecated color entries', function () {
    var names = theme.global.deprecated.colors.map(function (entry) {
      return entry.name;
    });
    expect(names).toEqual(expect.arrayContaining(['accent-1', 'neutral-1', 'status-error', 'graph-0', 'graph-7', 'disabled-text', 'background-cta-alternate']));
  });
  it('contains expected deprecated button kinds', function () {
    var names = theme.global.deprecated.button.kind.map(function (entry) {
      return entry.name;
    });
    expect(names).toContain('cta-primary');
    expect(names).toContain('cta-alternate');
  });
  it('contains expected deprecated backgrounds', function () {
    var names = theme.global.deprecated.backgrounds.map(function (entry) {
      return entry.name;
    });
    expect(names).toContain('orange-yellow');
    expect(names).toContain('purple-blue');
    expect(names).toContain('datawave-green-1');
  });
  it('stores deprecation message text for all entries', function () {
    var lists = [theme.global.deprecated.colors, theme.global.deprecated.button.kind, theme.global.deprecated.backgrounds];
    lists.flat().forEach(function (entry) {
      expect(typeof entry.message).toBe('string');
      expect(entry.message.length).toBeGreaterThan(0);
    });
  });
});