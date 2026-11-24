// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
/* eslint-env browser */
import React from 'react';
import { renderToString } from 'react-dom/server.node';
import {
  CheckBox,
  CheckBoxGroup,
  FormField,
  Grommet,
  RadioButtonGroup,
  StarRating,
  TextInput,
  ThumbsRating,
} from 'grommet';
import { ServerStyleSheet } from 'styled-components';
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

describe('Structural and Contract Tests', () => {
  const tokens = {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    small: localSmall,
    large: localDimension,
    global: localGlobal,
    components: localComponents,
  };

  let theme;

  beforeAll(() => {
    theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });
  });

  describe('Checkbox hover backgrounds', () => {
    const renderCheckbox = (formField, disabled) => {
      const sheet = new ServerStyleSheet();
      const checkbox = <CheckBox label="Option" disabled={disabled} />;
      try {
        const html = renderToString(
          sheet.collectStyles(
            <Grommet theme={theme}>
              {formField ? (
                <FormField disabled={disabled}>{checkbox}</FormField>
              ) : (
                checkbox
              )}
            </Grommet>,
          ),
        );
        const document = new DOMParser().parseFromString(html, 'text/html');
        return {
          label: document.querySelector('label'),
          css: sheet.getStyleTags(),
        };
      } finally {
        sheet.seal();
      }
    };

    const hoverStyles = (element, css) =>
      Array.from(element.classList)
        .map((name) => css.match(new RegExp(`\\.${name}:hover\\{([^}]*)\\}`)))
        .filter(Boolean)
        .map((match) => match[1])
        .join(' ');

    it('only applies the container hover background inside FormField', () => {
      const standalone = renderCheckbox(false, false);
      const field = renderCheckbox(true, false);
      const hoverColor =
        theme.global.colors[
          localComponents.hpe.formField.default.input.group.item.hover
            .background
        ].light;

      expect(hoverStyles(standalone.label, standalone.css)).not.toContain(
        'background-color',
      );
      expect(hoverStyles(field.label, field.css)).not.toContain(
        'background-color',
      );
      expect(hoverStyles(field.label.parentElement, field.css)).toContain(
        `background-color:${hoverColor}`,
      );
    });

    it('does not apply the FormField hover background when disabled', () => {
      const field = renderCheckbox(true, true);

      expect(hoverStyles(field.label.parentElement, field.css)).not.toContain(
        'background-color',
      );
    });
  });

  describe('CheckBoxGroup item hover backgrounds', () => {
    const renderGroup = (formField, disabled, mode) => {
      const sheet = new ServerStyleSheet();
      const group = (
        <CheckBoxGroup
          options={[
            { label: 'Enabled', value: 'enabled' },
            { label: 'Disabled', value: 'disabled', disabled: true },
          ]}
        />
      );
      try {
        const html = renderToString(
          sheet.collectStyles(
            <Grommet theme={theme} themeMode={mode}>
              {formField ? (
                <FormField disabled={disabled}>{group}</FormField>
              ) : (
                group
              )}
            </Grommet>,
          ),
        );
        return {
          document: new DOMParser().parseFromString(html, 'text/html'),
          css: sheet.getStyleTags(),
        };
      } finally {
        sheet.seal();
      }
    };

    const itemHoverRule = (css) =>
      css.match(
        /([^{}]+?\[role=["']?group["']?\]\s*>\s*label:not\(\[disabled\]\):hover)\s*\{([^}]*)\}/,
      );

    it.each(['light', 'dark'])(
      'highlights enabled FormField items using the %s token color',
      (mode) => {
        const field = renderGroup(true, false, mode);
        const standalone = renderGroup(false, false, mode);
        const [enabled, disabled] = field.document.querySelectorAll(
          '[role="group"] > label',
        );
        const rule = itemHoverRule(field.css);
        const token =
          localComponents.hpe.formField.default.input.group.item.hover
            .background;

        expect(rule).not.toBeNull();
        expect(rule[2]).toContain(
          `background-color:${theme.global.colors[token][mode]}`,
        );
        enabled.setAttribute('data-hover', '');
        disabled.setAttribute('data-hover', '');
        const selector = rule[1]
          .replace(/^.*\*\//, '')
          .trim()
          .replace(':hover', '[data-hover]');
        expect(enabled.matches(selector)).toBe(true);
        expect(disabled.matches(selector)).toBe(false);
        expect(itemHoverRule(standalone.css)).toBeNull();
      },
    );

    it('does not highlight items in a disabled FormField', () => {
      expect(itemHoverRule(renderGroup(true, true, 'light').css)).toBeNull();
    });
  });

  describe('Disabled FormField borders', () => {
    const renderField = (Component, props, disabled, mode) => {
      const sheet = new ServerStyleSheet();
      try {
        const html = renderToString(
          sheet.collectStyles(
            <Grommet theme={theme} themeMode={mode}>
              <FormField disabled={disabled}>
                {React.createElement(Component, { ...props, disabled })}
              </FormField>
            </Grommet>,
          ),
        );
        const document = new DOMParser().parseFromString(html, 'text/html');
        return {
          content: document.querySelector(
            '[class*="FormField__FormFieldContentBox"]',
          ),
          css: sheet.getStyleTags(),
        };
      } finally {
        sheet.seal();
      }
    };

    const hasBorderOverride = ({ content, css }, color) =>
      Array.from(content.classList).some((name) =>
        css.includes(`.${name}.${name}{border-color:${color};}`),
      );

    const fields = [
      ['CheckBox', CheckBox, { label: 'Option' }, 'item'],
      ['CheckBoxGroup', CheckBoxGroup, { options: ['A', 'B'] }, 'container'],
      [
        'RadioButtonGroup',
        RadioButtonGroup,
        { options: ['A', 'B'] },
        'container',
      ],
      ['StarRating', StarRating, {}, 'container'],
      ['ThumbsRating', ThumbsRating, {}, 'container'],
    ];

    it.each(fields)(
      '%s overrides only its disabled FormField border',
      (name, Component, props, part) => {
        const token =
          localComponents.hpe.formField.default.input.group[part].disabled.rest
            .borderColor;
        ['light', 'dark'].forEach((mode) => {
          const color = theme.global.colors[token][mode];
          expect(
            hasBorderOverride(renderField(Component, props, true, mode), color),
          ).toBe(true);
          expect(
            hasBorderOverride(
              renderField(Component, props, false, mode),
              color,
            ),
          ).toBe(false);
        });
      },
    );

    it('does not override the disabled border of a TextInput FormField', () => {
      const field = renderField(TextInput, {}, true, 'light');
      const color = theme.global.colors['border-disabled'].light;
      const contentStyles = Array.from(field.content.classList)
        .map((name) => field.css.match(new RegExp(`\\.${name}\\{([^}]*)\\}`)))
        .filter(Boolean)
        .map((match) => match[1])
        .join(' ');

      expect(contentStyles).toContain(color);
      expect(hasBorderOverride(field, 'rgba(0, 0, 0, 0)')).toBe(false);
    });
  });

  describe('Toggle track', () => {
    it('sets the track height independently of the shared checkbox size', () => {
      const { track } = localComponents.hpe.switch.default.medium.control;
      const customTheme = {
        ...theme,
        checkBox: { ...theme.checkBox, size: '40px' },
      };

      expect(theme.checkBox.toggle.extend({ theme: customTheme })).toContain(
        `height: ${track.height};`,
      );
    });

    it.each([false, true])(
      'uses the switch token when checked is %s',
      (checked) => {
        const { track } = localComponents.hpe.switch.default.control;
        const color = (checked ? track.selected.hover : track.hover)
          .borderColor;
        const hoverTheme = {
          ...theme,
          global: {
            ...theme.global,
            colors: { ...theme.global.colors, [color]: '#123456' },
          },
        };

        expect(
          theme.checkBox.toggle.extend({ checked, theme: hoverTheme }),
        ).toMatch(/label:hover[^{}]+\{\s*border-color: #123456;/);
      },
    );

    it('does not style the track on hover when disabled', () => {
      expect(
        theme.checkBox.toggle.extend({ disabled: true, theme }),
      ).not.toContain('label:hover');
    });
  });

  describe('Critical property paths', () => {
    it('should have global.colors object', () => {
      expect(theme.global).toBeDefined();
      expect(theme.global.colors).toBeDefined();
      expect(typeof theme.global.colors).toBe('object');
    });

    it('should have global.focus definition', () => {
      expect(theme.global.focus).toBeDefined();
      expect(typeof theme.global.focus).toBe('object');
    });

    it('should have global.edgeSize definition', () => {
      expect(theme.global.edgeSize).toBeDefined();
      expect(typeof theme.global.edgeSize).toBe('object');
    });

    it('should have global.font definition', () => {
      expect(theme.global.font).toBeDefined();
      expect(typeof theme.global.font).toBe('object');
    });

    it('should have global.breakpoints definition', () => {
      expect(theme.global.breakpoints).toBeDefined();
      expect(typeof theme.global.breakpoints).toBe('object');
    });

    it('should have button.primary definition', () => {
      expect(theme.button).toBeDefined();
      expect(theme.button.primary).toBeDefined();
      expect(typeof theme.button.primary).toBe('object');
    });

    it('should have text and heading definitions', () => {
      expect(theme.text).toBeDefined();
      expect(theme.heading).toBeDefined();
      expect(typeof theme.text).toBe('object');
      expect(typeof theme.heading).toBe('object');
    });

    it('should have form field definitions', () => {
      expect(theme.formField).toBeDefined();
      expect(typeof theme.formField).toBe('object');
    });

    it('should have dateTimeInput definitions', () => {
      expect(theme.dateTimeInput).toBeDefined();
      expect(theme.dateTimeInput.container.round).toBeDefined();
      expect(theme.dateTimeInput.button.margin).toBeDefined();
      expect(theme.dateTimeInput.active.background).toBeDefined();
      expect(theme.dateTimeInput.active.indicator.color).toBeDefined();
      expect(theme.dateTimeInput.drop.border.size).toBeDefined();
      expect(theme.dateTimeInput.separator.pad).toBeDefined();
      expect(theme.dateTimeInput.icon.calendar).toBeDefined();
    });

    it('should have timeInput definitions', () => {
      expect(theme.timeInput).toBeDefined();
      expect(theme.timeInput.container.round).toBeDefined();
      expect(theme.timeInput.segment.pad.left).toBeDefined();
      expect(theme.timeInput.segment.active.background).toBeDefined();
      expect(theme.timeInput.segment.active.border.size).toBeDefined();
      expect(theme.timeInput.segment.active.border.color).toBeDefined();
      expect(theme.timeInput.drop.column.gap).toBeDefined();
      expect(theme.timeInput.drop.pad.horizontal).toBeDefined();
      expect(theme.timeInput.drop.option.container.pad.vertical).toBeDefined();
      expect(theme.timeInput.drop.option.container.round).toBeDefined();
      expect(theme.timeInput.drop.option.text.size).toBeDefined();
      expect(theme.timeInput.dropButton.icon).toBeDefined();
    });
  });

  describe('Color definitions', () => {
    it('should have text-strong color defined', () => {
      expect(theme.global.colors['text-strong']).toBeDefined();
    });

    it('should have focus color defined', () => {
      expect(theme.global.colors.focus).toBeDefined();
    });

    it('should have all required color keys', () => {
      const requiredColors = [
        'text',
        'text-strong',
        'focus',
        'background',
        'control',
      ];
      requiredColors.forEach((color) => {
        expect(theme.global.colors[color]).toBeDefined();
      });
    });
  });

  describe('Breakpoint definitions', () => {
    it('should have all required breakpoints', () => {
      const requiredBreakpoints = [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
      ];
      requiredBreakpoints.forEach((bp) => {
        expect(theme.global.breakpoints[bp]).toBeDefined();
        expect(typeof theme.global.breakpoints[bp]).toBe('object');
      });
    });

    it('should have breakpoint properties', () => {
      const breakpoints = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
      breakpoints.forEach((bp) => {
        expect(theme.global.breakpoints[bp]).toBeDefined();
        // value is optional (xlarge omits it), but must be a number when present
        const { value } = theme.global.breakpoints[bp];
        if (value !== undefined) {
          expect(typeof value).toBe('number');
        }
      });
    });

    it('should use caller-provided global breakpoint for responsive heading styles', () => {
      const customTokens = {
        ...tokens,
        global: {
          ...tokens.global,
          hpe: {
            ...tokens.global.hpe,
            breakpoint: {
              ...tokens.global.hpe.breakpoint,
              small: '1234px',
            },
          },
        },
      };

      const customTheme = buildTheme(customTokens, {
        'v6-backwards-compatibility': false,
      });
      const responsiveStyle = customTheme.heading.extend({
        level: 1,
        responsive: true,
      });

      expect(responsiveStyle).toContain('(max-width: 1234px)');
    });
  });

  describe('Spacing and sizing', () => {
    it('should have all edgeSize values', () => {
      const requiredSizes = [
        'none',
        'hair',
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
      ];
      requiredSizes.forEach((size) => {
        expect(theme.global.edgeSize[size]).toBeDefined();
      });
    });

    it('should have borderSize values defined', () => {
      // Check that borderSize object exists and has at least some values
      expect(theme.global.borderSize).toBeDefined();
      expect(typeof theme.global.borderSize).toBe('object');
      // At least one size should be defined
      expect(Object.keys(theme.global.borderSize).length).toBeGreaterThan(0);
    });
  });
});
