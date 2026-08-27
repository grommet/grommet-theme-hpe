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

describe('Deprecation entries', () => {
  const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });

  it('contains expected deprecated color entries', () => {
    const names = theme.global.deprecated.colors.map((entry) => entry.name);

    expect(names).toEqual(
      expect.arrayContaining([
        'accent-1',
        'neutral-1',
        'status-error',
        'graph-0',
        'graph-7',
        'disabled-text',
        'background-cta-alternate',
      ]),
    );
  });

  it('contains expected deprecated button kinds', () => {
    const names = theme.global.deprecated.button.kind.map(
      (entry) => entry.name,
    );

    expect(names).toContain('cta-primary');
    expect(names).toContain('cta-alternate');
  });

  it('contains expected deprecated backgrounds', () => {
    const names = theme.global.deprecated.backgrounds.map(
      (entry) => entry.name,
    );

    expect(names).toContain('orange-yellow');
    expect(names).toContain('purple-blue');
    expect(names).toContain('datawave-green-1');
  });

  it('stores deprecation message text for all entries', () => {
    const lists = [
      theme.global.deprecated.colors,
      theme.global.deprecated.button.kind,
      theme.global.deprecated.backgrounds,
    ];

    lists.flat().forEach((entry) => {
      expect(typeof entry.message).toBe('string');
      expect(entry.message.length).toBeGreaterThan(0);
    });
  });
});
