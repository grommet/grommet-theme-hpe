// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import {
  primitives as localPrimitives,
  dark as localDark,
  light as localLight,
  components as localComponents,
} from 'hpe-design-tokens/grommet';
import { buildPrism, prism } from '../../themes/prism';
import { buildColors } from '../../themes/colors';

describe('prism builder', () => {
  const tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    components: localComponents,
  };

  it('builds the canonical prism theme from tokens', () => {
    expect(buildPrism(tokens)).toEqual(prism);
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

    expect(
      buildPrism(customTokens).light['code[class*="language-"]'].color,
    ).toBe('#123456');
    expect(
      buildPrism(customTokens).light['pre[class*="language-"]'].background,
    ).toBe(buildColors(customTokens)['background-contrast'].light);
  });
});
