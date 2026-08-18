function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import { primitives as localPrimitives, dark as localDark, light as localLight, components as localComponents } from 'hpe-design-tokens/grommet';
import { buildColors, colors } from '../../themes/colors';
describe('color builder', function () {
  var tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    components: localComponents
  };
  it('builds the canonical colors map from tokens', function () {
    expect(buildColors(tokens)).toEqual(colors);
  });
  it('responds to token changes instead of using a precomputed import', function () {
    var customTokens = _extends({}, tokens, {
      light: _extends({}, localLight, {
        hpe: _extends({}, localLight.hpe, {
          color: _extends({}, localLight.hpe.color, {
            text: _extends({}, localLight.hpe.color.text, {
              "default": '#123456'
            })
          })
        })
      })
    });
    expect(buildColors(customTokens).text.light).toBe('#123456');
  });
});