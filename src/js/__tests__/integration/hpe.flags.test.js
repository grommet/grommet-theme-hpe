// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import {
  primitives as localPrimitives,
  dark as localDark,
  light as localLight,
  dimension as localDimension,
  small as localSmall,
  global as localGlobal,
  components as localComponents,
} from 'hpe-design-tokens/grommet';
import { hpe } from '../../themes';
import { buildTheme } from '../../themes/hpe';

const tokens = {
  primitives: localPrimitives,
  light: localLight,
  dark: localDark,
  small: localSmall,
  large: localDimension,
  global: localGlobal,
  components: localComponents,
};

describe('Flag behavior', () => {
  it('uses token-based edgeSize with v6-backwards-compatibility=false', () => {
    const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
    expect(theme.global.edgeSize.medium).toBe('24px');
    expect(theme.global.edgeSize.small).toBe(localDimension.hpe.spacing.small);
    expect(theme.global.edgeSize['5xsmall']).toBeDefined();
  });

  it('uses legacy globalSizes with v6-backwards-compatibility=true', () => {
    const theme = buildTheme(tokens, { 'v6-backwards-compatibility': true });
    expect(theme.global.edgeSize.medium).toBe('24px');
    expect(theme.global.edgeSize.small).toBe('12px');
    expect(theme.global.edgeSize['5xsmall']).toBeUndefined();
  });

  it('changes edgeSize shape between false and true modes', () => {
    const modernTheme = buildTheme(tokens, {
      'v6-backwards-compatibility': false,
    });
    const legacyTheme = buildTheme(tokens, {
      'v6-backwards-compatibility': true,
    });

    expect(modernTheme.global.edgeSize).not.toEqual(
      legacyTheme.global.edgeSize,
    );
  });
});

describe('Pre-built hpe export behavior', () => {
  it('is defined and frozen', () => {
    expect(hpe).toBeDefined();
    expect(Object.isFrozen(hpe)).toBe(true);
  });

  it('uses v6-backwards-compatibility=false behavior by default', () => {
    expect(hpe.global.edgeSize.medium).toBe('24px');
    expect(hpe.global.edgeSize['5xsmall']).toBeDefined();
  });
});
