import {
  primitives as localPrimitives,
  dark as localDark,
  light as localLight,
  components as localComponents,
} from 'hpe-design-tokens/grommet';
import { buildColors, colors } from '../../themes/colors';

describe('color builder', () => {
  const tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    components: localComponents,
  };

  it('builds the canonical colors map from tokens', () => {
    expect(buildColors(tokens)).toEqual(colors);
  });

  it('responds to token changes instead of using a precomputed import', () => {
    const customTokens = {
      ...tokens,
      light: {
        ...localLight,
        hpe: {
          ...localLight.hpe,
          color: {
            ...localLight.hpe.color,
            text: {
              ...localLight.hpe.color.text,
              default: '#123456',
            },
          },
        },
      },
    };

    expect(buildColors(customTokens).text.light).toBe('#123456');
  });
});
