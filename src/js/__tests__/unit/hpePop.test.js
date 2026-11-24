// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import { hpe } from '../../themes/hpe';
import { hpePop } from '../../themes/hpePop';

describe('Pop button styling', () => {
  describe.each([false, true])('dark: %s', (dark) => {
    it.each([
      ['primary', false, false],
      ['primary', true, false],
      ['primary', false, true],
      ['cta-primary', false, false],
    ])(
      'inherits HPE colors for %s (disabled: %s, active: %s)',
      (kind, disabled, active) => {
        const props = {
          theme: { ...hpePop, dark },
          sizeProp: 'small',
          kind,
          disabled,
          active,
        };

        expect(hpePop.button.extend(props)).toBe(hpe.button.extend(props));
      },
    );
  });

  it('preserves Pop sizing alongside the inherited primary hover styling', () => {
    const props = {
      theme: { ...hpePop, dark: false },
      sizeProp: 'large',
      kind: 'primary',
    };

    expect(hpePop.button.extend(props)).toBe(
      `${hpe.button.extend(props)}font-size: 1.5rem; line-height: 1.75rem;`,
    );
  });
});
