function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { primitives as localPrimitives, dark as localDark, light as localLight, components as localComponents } from 'hpe-design-tokens/grommet';
import { buildPrism, prism } from '../../themes/prism';
import { buildColors } from '../../themes/colors';
describe('prism builder', function () {
  var tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    components: localComponents
  };
  it('builds the canonical prism theme from tokens', function () {
    expect(buildPrism(tokens)).toEqual(prism);
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
    expect(buildPrism(customTokens).light['code[class*="language-"]'].color).toBe('#123456');
    expect(buildPrism(customTokens).light['pre[class*="language-"]'].background).toBe(buildColors(customTokens)['background-contrast'].light);
  });
});