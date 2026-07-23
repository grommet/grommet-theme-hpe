"use strict";

var _grommet = require("hpe-design-tokens/grommet");
var _colors = require("../../themes/colors");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
describe('color builder', function () {
  var tokens = {
    primitives: _grommet.primitives,
    light: _grommet.light,
    dark: _grommet.dark,
    components: _grommet.components
  };
  it('builds the canonical colors map from tokens', function () {
    expect((0, _colors.buildColors)(tokens)).toEqual(_colors.colors);
  });
  it('responds to token changes instead of using a precomputed import', function () {
    var customTokens = _extends({}, tokens, {
      light: _extends({}, _grommet.light, {
        hpe: _extends({}, _grommet.light.hpe, {
          color: _extends({}, _grommet.light.hpe.color, {
            text: _extends({}, _grommet.light.hpe.color.text, {
              "default": '#123456'
            })
          })
        })
      })
    });
    expect((0, _colors.buildColors)(customTokens).text.light).toBe('#123456');
  });
});