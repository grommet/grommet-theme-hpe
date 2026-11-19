// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import type { BoxProps, TextProps, ThemeType } from 'grommet';
import type { Icon } from 'grommet-icons';
import { css } from 'styled-components';

import { getThemeColor, getTokenColorPair, swapped } from './utils';

type TokenFields<Keys extends string> = Record<Keys, string>;
type ControlColors = TokenFields<'background' | 'borderColor'>;
type SelectedControlColors = ControlColors & TokenFields<'iconColor'>;
type ControlStates = {
  rest: ControlColors;
  hover: ControlColors;
  selected: { rest: SelectedControlColors; hover: ControlColors };
  disabled: { rest: SelectedControlColors };
};
type LabelStates = {
  rest: TokenFields<'fontWeight'>;
  disabled: { rest: TokenFields<'textColor'> };
};
type ButtonColors = TokenFields<'background' | 'textColor'>;

// The token package ships untyped exports. Describe only the fields read here.
type FormTokens = {
  primitives: { hpe: { base: { dimension: Record<100 | 600, string> } } };
  light: { hpe: { color: { icon: TokenFields<'critical'> } } };
  dark: object;
  large: {
    hpe: {
      radius: TokenFields<'full' | 'xxsmall'>;
      spacing: TokenFields<'6xsmall' | '4xsmall' | '3xsmall' | 'xsmall'>;
      borderWidth: TokenFields<'small'>;
      text: { medium: TokenFields<'fontSize'> };
    };
  };
  global: { hpe: { fontWeight: { medium: number | `${number}` } } };
  components: {
    hpe: {
      button: {
        secondary: {
          rest: ButtonColors & TokenFields<'fontWeight'>;
          hover: ButtonColors;
          medium: TokenFields<'borderRadius' | 'paddingX' | 'paddingY'>;
        };
      };
      checkbox: {
        default: {
          control: ControlStates;
          label: LabelStates;
          medium: TokenFields<'gapX'> & {
            control: TokenFields<
              'borderRadius' | 'borderWidth' | 'height' | 'width'
            >;
          };
        };
      };
      element: {
        medium: TokenFields<'paddingY'> & { paddingX: TokenFields<'default'> };
      };
      formField: {
        default: {
          help: {
            rest: TokenFields<'color'>;
            disabled: { rest: TokenFields<'textColor'> };
          };
          info: {
            rest: TokenFields<'color'>;
            disabled: { rest: TokenFields<'textColor'> };
          };
          error: { rest: TokenFields<'textColor'> };
          label: {
            rest: TokenFields<'textColor'>;
            disabled: { rest: TokenFields<'textColor'> };
          };
          input: {
            container: {
              rest: ControlColors;
              hover: ControlColors;
              disabled: { rest: ControlColors };
              error: { rest: ControlColors };
            };
            group: {
              container: {
                rest: ControlColors;
                disabled: { rest: ControlColors };
                error: { rest: ControlColors };
              };
              item: { rest: ControlColors; hover: ControlColors };
            };
          };
          medium: {
            label: { fontWeight: number | `${number}` };
            input: {
              container: TokenFields<'borderRadius' | 'borderWidth'>;
              group: {
                container: TokenFields<'paddingX' | 'paddingY'>;
                item: TokenFields<
                  'paddingX' | 'paddingY' | 'borderRadius' | 'borderWidth'
                >;
              };
            };
          };
        };
      };
      radioButton: {
        default: {
          control: Pick<ControlStates, 'rest' | 'hover' | 'selected'>;
          label: Pick<LabelStates, 'rest'>;
          medium: TokenFields<'gapX'> & {
            control: TokenFields<'borderWidth' | 'height' | 'width'>;
          };
        };
      };
      select: {
        default: {
          medium: {
            drop: TokenFields<'paddingX' | 'paddingY' | 'gapY'>;
            option: TokenFields<
              'borderRadius' | 'borderWidth' | 'paddingX' | 'paddingY'
            >;
          };
          option: {
            rest: TokenFields<'fontWeight'>;
            hover: TokenFields<'background'>;
          };
        };
      };
      switch: {
        default: {
          control: {
            track: Omit<ControlStates, 'selected' | 'disabled'> & {
              selected: { rest: ControlColors; hover: ControlColors };
              disabled: { rest: ControlColors };
            };
            handle: {
              rest: ControlColors & TokenFields<'boxShadow'>;
              disabled: { rest: TokenFields<'borderColor'> };
            };
          };
          medium: {
            control: {
              track: TokenFields<'width' | 'height' | 'borderWidth'>;
              handle: TokenFields<'borderWidth' | 'height' | 'width'>;
            };
          };
        };
      };
    };
  };
};

type FormThemeContext = {
  dimensions: Record<
    'borderSize' | 'edgeSize' | 'radius',
    Record<string, string>
  >;
  option: { pad: BoxProps['pad'] };
  icons: Record<
    | 'Alert'
    | 'Blank'
    | 'Calendar'
    | 'Clock'
    | 'Close'
    | 'Copy'
    | 'Dislike'
    | 'DislikeFill'
    | 'Down'
    | 'Hide'
    | 'Like'
    | 'LikeFill'
    | 'Search'
    | 'Star'
    | 'StarFill'
    | 'Up'
    | 'View',
    Icon
  >;
};

type ResolvedTheme = ThemeType & { dark?: boolean };
type ThemeProps = { theme: ResolvedTheme };
type ControlProps = ThemeProps & {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  toggle?: boolean;
};
type ErrorProps = ThemeProps & { error?: React.ReactNode };

type ThemeSection<K extends keyof ThemeType> = NonNullable<ThemeType[K]>;
type FormField = ThemeSection<'formField'>;
type ButtonKind = NonNullable<ThemeSection<'button'>['secondary']>;
type ButtonStyle = ButtonKind & {
  border?: { size?: string };
  pad?: ButtonKind['padding'];
  hover?: ButtonKind;
};

// Keep runtime-supported fields that Grommet's declarations do not yet cover.
type FormTheme = ThemeType & {
  checkBox: ThemeSection<'checkBox'> & {
    hover?: { border?: { width?: string } };
  };
  fileInput: ThemeSection<'fileInput'> & {
    button?: ButtonStyle;
    label?: Pick<BoxProps, 'gap'>;
  };
  formField: FormField & {
    help?: Pick<TextProps, 'size'>;
    info?: Pick<TextProps, 'size'>;
    error?: Pick<TextProps, 'size'>;
    survey?: { label?: Pick<TextProps, 'weight'> };
  };
  select: ThemeSection<'select'> & {
    clear?: { button?: ButtonStyle };
  };
  selectMultiple: ThemeSection<'selectMultiple'> & {
    summary?: Pick<BoxProps, 'gap' | 'height'>;
  };
};

export const buildFormTheme = (
  tokens: FormTokens,
  context: FormThemeContext,
) => {
  const { primitives, light, dark, large, global, components } = tokens;
  const { dimensions, option } = context;
  const {
    Alert,
    Blank,
    Calendar,
    Clock: ClockIcon,
    Close,
    Copy,
    Dislike,
    DislikeFill,
    Down,
    Hide,
    Like,
    LikeFill,
    Search,
    Star,
    StarFill,
    Up,
    View,
  } = context.icons;
  // Pulling the raw values directly from the token files gives us the color
  // exactly as authored.
  const backgroundActive = getTokenColorPair('color.background.active', tokens);
  const backgroundHover = getTokenColorPair('color.background.hover', tokens);
  const focusColor = getTokenColorPair('color.focus', tokens);
  const backgroundSelectedPrimaryStrong = getTokenColorPair(
    'color.background.selected-primary-strong',
    tokens,
  );
  const backgroundSelectedPrimaryStrongHover = getTokenColorPair(
    'color.background.selected-primary-strong-hover',
    tokens,
  );
  // text-onSelectedPrimaryStrong is authored with light/dark swapped.
  // See https://github.com/grommet/grommet/issues/7818
  const textOnSelectedPrimaryStrong = swapped(
    'hpe.color.text.onSelectedPrimaryStrong',
    dark,
    light,
  );
  const textDefaultColor = getTokenColorPair('color.text.default', tokens);

  return {
    checkBox: {
      control: {
        background: components.hpe.checkbox.default.control.rest.background,
        border: {
          color: components.hpe.checkbox.default.control.rest.borderColor,
          size: components.hpe.checkbox.default.medium.control.borderWidth,
        },
        height: components.hpe.checkbox.default.medium.control.height,
        round: components.hpe.checkbox.default.medium.control.borderRadius,
        width: components.hpe.checkbox.default.medium.control.width,
        hover: {
          background: {
            color: components.hpe.checkbox.default.control.hover.background,
          },
          border: {
            color: components.hpe.checkbox.default.control.hover.borderColor,
          },
        },
        selected: {
          background:
            components.hpe.checkbox.default.control.selected.rest.background,
          border: {
            color:
              components.hpe.checkbox.default.control.selected.rest.borderColor,
          },
          hover: {
            background: {
              color:
                components.hpe.checkbox.default.control.selected.hover
                  .background,
            },
            border: {
              color:
                components.hpe.checkbox.default.control.selected.hover
                  .borderColor,
            },
          },
        },
      },
      color: components.hpe.switch.default.control.handle.rest.background,
      check: {
        thickness: large.hpe.borderWidth.small,
      },
      gap: components.hpe.checkbox.default.medium.gapX,
      label: { align: 'start' },
      pad: 'none',
      toggle: {
        background: components.hpe.switch.default.control.track.rest.background,
        color: components.hpe.switch.default.control.handle.rest.background,
        size: components.hpe.switch.default.medium.control.track.width,
        knob: {
          extend: ({ theme, checked, disabled }: ControlProps) => {
            const { borderWidth } =
              components.hpe.switch.default.medium.control.handle;
            const insetHandle =
              dimensions.borderSize[borderWidth] || borderWidth;

            return `
              box-shadow: ${
                theme.global?.elevation?.[theme.dark ? 'dark' : 'light']?.[
                  components.hpe.switch.default.control.handle.rest.boxShadow
                ]
              };
              border: ${dimensions.borderSize[borderWidth] || borderWidth} solid ${getThemeColor(
                disabled
                  ? components.hpe.switch.default.control.handle.disabled.rest
                      .borderColor
                  : components.hpe.switch.default.control.handle.rest
                      .borderColor,
                theme,
              )};
              width: ${components.hpe.switch.default.medium.control.handle.width};
              height: ${components.hpe.switch.default.medium.control.handle.height};
              top: ${insetHandle};
              left: ${!checked ? insetHandle : '25px'};
          `;
          },
        },
        // applies to track around handle
        extend: ({ checked, theme, disabled }: ControlProps) => {
          const { track } = components.hpe.switch.default.control;
          const hover = checked ? track.selected.hover : track.hover;
          const hoverBackground = getThemeColor(hover.background, theme);
          let background;
          let borderColor = getThemeColor(track.rest.borderColor, theme);
          if (checked) {
            background = getThemeColor(track.selected.rest.background, theme);
          }
          if (disabled) {
            background = getThemeColor(track.disabled.rest.background, theme);
            borderColor = getThemeColor(
              components.hpe.switch.default.control.handle.disabled.rest
                .borderColor,
              theme,
            );
          }
          return `
            height: ${components.hpe.switch.default.medium.control.track.height};
            border-width: ${components.hpe.switch.default.medium.control.track.borderWidth};
            border-color: ${borderColor};
            background: ${background};
            &:hover {
              ${!disabled ? `background: ${hoverBackground};` : ''}
            }
            ${
              // Match label hover and outrank Grommet's shared hover rule.
              !disabled
                ? `label:hover input:not([disabled]) + && {
                    border-color: ${getThemeColor(hover.borderColor, theme)};
                  }`
                : ''
            }
        `;
        },
      },
    },
    checkBoxGroup: {
      container: { cssGap: true, gap: 'xsmall', margin: 'none' },
    },
    dateInput: {
      container: {
        round:
          components.hpe.formField.default.medium.input.container.borderRadius,
      },
      icon: {
        calendar: Calendar,
        size: 'small',
      },
      button: { margin: 'xsmall' },
    },
    dateTimeInput: {
      button: {
        margin: { right: '3xsmall' },
      },
      container: {
        round:
          components.hpe.formField.default.medium.input.container.borderRadius,
      },
      active: {
        background: 'background-active',
        pad: '5xsmall',
        indicator: {
          color: 'focus',
        },
      },
      drop: {
        pad: 'small',
        gap: 'small',
        border: {
          color: 'border',
          size: 'xsmall',
        },
      },
      separator: {
        pad: '5xsmall',
      },
      icon: {
        calendar: Calendar,
      },
      calendar: {
        day: {
          selected: {
            background: 'background-selected-primary-strong',
          },
        },
      },
    },
    fileInput: {
      anchor: {
        margin: 'xsmall',
      },
      border: {
        color:
          components.hpe.formField.default.input.container.rest.borderColor,
        side: 'all',
        style: 'solid',
        size: components.hpe.formField.default.medium.input.container
          .borderWidth,
      },
      button: {
        background: components.hpe.button.secondary.rest.background,
        border: { radius: components.hpe.button.secondary.medium.borderRadius },
        pad: {
          vertical: components.hpe.button.secondary.medium.paddingY,
          horizontal: components.hpe.button.secondary.medium.paddingX,
        },
        color: components.hpe.button.secondary.rest.textColor,
        font: { weight: components.hpe.button.secondary.rest.fontWeight },
        hover: {
          background: components.hpe.button.secondary.hover.background,
          color: components.hpe.button.secondary.hover.textColor,
        },
      },
      dragOver: {
        background: 'background-hover',
        border: { color: 'transparent' },
      },
      hover: { border: { color: 'border' } },
      icons: {
        error: Alert,
        remove: Close,
      },
      label: { margin: 'xsmall', gap: '3xsmall' },
      message: { color: 'placeholder', margin: 'xsmall' },
      pad: { horizontal: '3xsmall' },
      extend: `border-radius: ${components.hpe.formField.default.medium.input.container.borderRadius};`,
    },
    formField: {
      border: {
        error: {
          color:
            components.hpe.formField.default.input.container.error.rest
              .borderColor,
        },
        color:
          components.hpe.formField.default.input.container.rest.borderColor,
        side: 'all',
      },
      content: { margin: { vertical: '3xsmall' }, pad: 'none' },
      help: {
        size: 'xsmall',
        color: components.hpe.formField.default.help.rest.color,
        margin: 'none',
      },
      info: {
        size: 'xsmall',
        color: components.hpe.formField.default.info.rest.color,
        margin: { bottom: '3xsmall', top: 'none', horizontal: 'none' },
      },
      label: {
        size: 'xsmall',
        color: components.hpe.formField.default.label.rest.textColor,
        margin: { bottom: 'none', top: '3xsmall', horizontal: 'none' },
        requiredIndicator: true,
        weight: Number(
          components.hpe.formField.default.medium.label.fontWeight,
        ),
      },
      margin: { bottom: 'none' },
      round:
        components.hpe.formField.default.medium.input.container.borderRadius,
      /* FormField states */
      disabled: {
        background:
          components.hpe.formField.default.input.group.container.disabled.rest
            .background,
        border: {
          color:
            components.hpe.formField.default.input.container.disabled.rest
              .borderColor,
        },
        label: {
          color: components.hpe.formField.default.label.disabled.rest.textColor,
        },
        help: {
          color: components.hpe.formField.default.help.disabled.rest.textColor,
        },
        info: {
          color: components.hpe.formField.default.info.disabled.rest.textColor,
        },
      },
      error: {
        background: {
          color:
            components.hpe.formField.default.input.container.error.rest
              .background,
        },
        container: { gap: '3xsmall' },
        icon: <Alert size="small" color={light.hpe.color.icon.critical} />,
        size: 'xsmall',
        color: components.hpe.formField.default.error.rest.textColor,
        margin: { bottom: '3xsmall', top: 'none', horizontal: 'none' },
      },
      focus: {
        containerFocus: false,
        background: undefined,
        border: {
          color: undefined,
        },
      },
      hover: {
        border: {
          color:
            components.hpe.formField.default.input.container.hover.borderColor,
        },
      },
      /* Input specific styles */
      checkBox: {
        pad: {
          horizontal:
            components.hpe.formField.default.medium.input.group.item.paddingX,
          vertical:
            components.hpe.formField.default.medium.input.group.item.paddingY,
        },
        container: {
          extend: ({ error }: ErrorProps) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
        hover: {
          border: {
            color: undefined,
          },
        },
      },
      checkBoxGroup: {
        container: {
          extend: ({ error }: ErrorProps) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
        hover: {
          border: {
            color: undefined,
          },
        },
      },
      radioButtonGroup: {
        container: {
          extend: ({ error }: ErrorProps) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
        hover: {
          border: {
            color: undefined,
          },
        },
      },
      starRating: {
        container: {
          extend: ({ error }: ErrorProps) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
        hover: {
          border: {
            color: undefined,
          },
        },
      },
      survey: {
        label: { margin: { bottom: 'none' }, size: 'medium', weight: 500 },
      },
      thumbsRating: {
        container: {
          extend: ({ error }: ErrorProps) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
        hover: {
          border: {
            color: undefined,
          },
        },
      },
      extend: ({ theme }: ThemeProps) => {
        return `
          [class*="ContentBox"] {
            label {
              padding-block: ${
                components.hpe.formField.default.medium.input.group.item
                  .paddingY
              };
              padding-inline: ${
                components.hpe.formField.default.medium.input.group.item
                  .paddingX
              };
              &:hover:not([disabled]) {
                background: ${getThemeColor(
                  components.hpe.formField.default.input.container.hover
                    .background,
                  theme,
                )};
              }
            }
            [role="group"], [role="radiogroup"] {
              gap: 0;
              padding-block: ${
                components.hpe.formField.default.medium.input.group.container
                  .paddingY
              };
              padding-inline: ${
                components.hpe.formField.default.medium.input.group.container
                  .paddingX
              };
              label {
                border: ${
                  dimensions.borderSize[
                    components.hpe.formField.default.medium.input.group.item
                      .borderWidth
                  ] ||
                  components.hpe.formField.default.medium.input.group.item
                    .borderWidth
                } solid ${getThemeColor(
                  components.hpe.formField.default.input.group.item.rest
                    .borderColor,
                  theme,
                )};
                padding-block: ${
                  components.hpe.formField.default.medium.input.group.item
                    .paddingY
                };
                padding-inline: ${
                  components.hpe.formField.default.medium.input.group.item
                    .paddingX
                };
                border-radius: ${
                  dimensions.radius[
                    components.hpe.formField.default.medium.input.group.item
                      .borderRadius
                  ]
                };
                &:hover:not([disabled]) {
                  background: ${getThemeColor(
                    components.hpe.formField.default.input.group.item.hover
                      .background,
                    theme,
                  )};
                }
              }
            }
          }
      `;
      },
    },
    radioButton: {
      border: {
        color: components.hpe.radioButton.default.control.rest.borderColor,
        width: components.hpe.radioButton.default.medium.control.borderWidth,
      },
      check: {
        background: {
          color:
            components.hpe.radioButton.default.control.selected.rest.background,
        },
      },
      color:
        components.hpe.radioButton.default.control.selected.rest.borderColor,
      container: {
        extend: ({ theme }: ThemeProps) => `
          width: auto;
          &:has(input[checked]) {
            & div:has(> svg[aria-hidden="true"]) {
              background: ${getThemeColor(
                components.hpe.radioButton.default.control.selected.rest
                  .background,
                theme,
              )};
              border-color: ${getThemeColor(
                components.hpe.radioButton.default.control.selected.rest
                  .borderColor,
                theme,
              )};
            }
          }
          &:has(input[checked]):hover:not([disabled]) {
              & div:has(> svg[aria-hidden="true"]) {
                background: ${getThemeColor(
                  components.hpe.radioButton.default.control.selected.hover
                    .background,
                  theme,
                )};
                border-color: ${getThemeColor(
                  components.hpe.radioButton.default.control.selected.hover
                    .borderColor,
                  theme,
                )};
              }
          }
          `,
      },
      gap: components.hpe.radioButton.default.medium.gapX,
      hover: {
        background: { color: 'transparent' },
        border: {
          color: components.hpe.radioButton.default.control.hover.borderColor,
        },
      },
      size: components.hpe.radioButton.default.medium.control.height,
      font: {
        weight: components.hpe.radioButton.default.label.rest.fontWeight,
      },
      icons: {
        circle: ({ theme }: ThemeProps) => (
          <Blank
            preserveAspectRatio="xMidYMid meet"
            color={getThemeColor(
              components.hpe.radioButton.default.control.selected.rest
                .iconColor,
              { ...theme, dark: !theme.dark },
            )}
            size={components.hpe.radioButton.default.medium.control.width}
          >
            <circle cx={12} cy={12} r={6} />
          </Blank>
        ),
      },
    },
    radioButtonGroup: {
      container: { cssGap: true, gap: 'xsmall', margin: 'none' },
    },
    maskedInput: {
      container: {
        extend: ({ theme }: ThemeProps) => `
          svg {
            fill: ${getThemeColor('text-strong', theme)};
            stroke: ${getThemeColor('text-strong', theme)};
          }
        `,
      },
    },
    rangeInput: {
      thumb: {
        color: 'background-primary-strong',
        extend: 'border-color: transparent;',
      },
      track: {
        lower: { color: 'background-primary-strong' },
        upper: {
          color: { light: '#e0e0e0', dark: '#616161' },
        },
        extend: ({ theme }: ThemeProps) => `
        border-radius: ${large.hpe.radius.full};
        // firefox only selector, since pseudo-element
        // isn't supported
        @-moz-document url-prefix() {
          border: 1px solid ${getThemeColor('border-strong', theme)};
        }`,
      },
      disabled: {
        opacity: 1,
        track: { color: 'background-disabled' },
        thumb: {
          color: { light: 'rgb(245, 245, 245)', dark: 'rgb(44, 44, 44)' },
        },
      },
      extend: ({ disabled, theme }: ControlProps) => `
        &::before {
          display: block;
          position: absolute;
          content: '';
          width: ${primitives.hpe.base.dimension[100]};
          height: ${primitives.hpe.base.dimension[100]};
          border-radius: ${large.hpe.radius.full};
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: ${getThemeColor(
            disabled ? 'background-disabled' : 'background-neutral-xstrong',
            theme,
          )};
        }
    `,
    },
    rangeSelector: {
      edge: {
        size: `${primitives.hpe.base.dimension[600]}`,
      },
      label: { margin: { horizontal: 'xsmall' } },
    },
    select: {
      clear: {
        container: {
          background: 'transparent',
          pad: components.hpe.select.default.medium.drop.paddingX,
        },
        text: undefined,
        button: {
          border: {
            radius: components.hpe.select.default.medium.option.borderRadius,
            size: components.hpe.select.default.medium.option.borderWidth,
          },
          padding: {
            horizontal: components.hpe.select.default.medium.option.paddingX,
            vertical: components.hpe.select.default.medium.option.paddingY,
          },
          hover: {
            background: components.hpe.select.default.option.hover.background,
            color: 'text-strong',
          },
          color: 'text-strong',
          font: {
            weight: components.hpe.select.default.option.rest.fontWeight,
          },
        },
      },
      container: {
        extend: () =>
          `
          div:has(input[type="search"]) {
            padding-bottom: 0;
          }
        `,
      },
      control: {
        extend: ({
          disabled,
        }: ThemeProps & Pick<ControlProps, 'disabled'>) => css`
          ${
            disabled &&
            `
          opacity: 0.3;
          input {
            cursor: default;
          }`
          }

          &[class*="SelectMultiple"] [role="listbox"] {
            padding-block: ${
              components.hpe.select.default.medium.drop.paddingY
            };
            padding-inline: ${
              components.hpe.select.default.medium.drop.paddingX
            };
            & [role='option'] {
              border-radius: ${
                dimensions.edgeSize[
                  components.hpe.select.default.medium.option.borderRadius
                ] || components.hpe.select.default.medium.option.borderRadius
              };
            }
          }
        `,
      },
      emptySearchMessage: { container: { pad: option.pad } },
      icons: {
        color: 'icon',
        down: Down,
        search: <Search aria-hidden />,
        margin: {
          left: 'xsmall',
          right: '12px',
        },
        up: Up,
      },
      options: undefined,
      listbox: {
        extend: () => `
          padding-top: ${components.hpe.select.default.medium.drop.paddingY};
          padding-inline: ${components.hpe.select.default.medium.drop.paddingX};
          display: flex;
          flex-direction: column;
          gap: ${components.hpe.select.default.medium.drop.gapY};
          [role="option"] {
            border-radius: ${components.hpe.select.default.medium.option.borderRadius};
          }
        `,
      },
      search: { pad: '3xsmall' },
    },
    selectMultiple: {
      help: {
        container: {
          pad: '3xsmall',
        },
      },
      listbox: {
        extend: () => `
          padding-block: ${components.hpe.select.default.medium.drop.paddingY};
          padding-inline: ${components.hpe.select.default.medium.drop.paddingX};
          display: flex;
          flex-direction: column;
          [role="option"] {
              border-radius: ${
                dimensions.edgeSize[
                  components.hpe.select.default.medium.option.borderRadius
                ] || components.hpe.select.default.medium.option.borderRadius
              };
            }
          }
        `,
      },
      option: {
        pad: '3xsmall',
      },
      search: {
        pad: '3xsmall',
      },
      showMore: {
        pad: {
          horizontal: 'xsmall',
          bottom: 'xsmall',
          top: '3xsmall',
        },
      },
      summary: {
        gap: 'xsmall',
        height: {
          min: '5xsmall',
        },
        pad: '3xsmall',
        showSelectedInline: {
          pad: {
            left: '3xsmall',
            vertical: '3xsmall',
          },
        },
      },
    },
    starRating: {
      color: 'background-selected-primary-strong',
      icons: {
        selected: StarFill,
        unselected: Star,
      },
    },
    textInput: {
      container: {
        extend: ({ theme }: ThemeProps) => `
          svg {
            fill: ${getThemeColor('icon-strong', theme)};
            stroke: ${getThemeColor('icon-strong', theme)};
          }
        `,
      },
      icons: {
        copy: Copy,
        hidePassword: Hide,
        showPassword: View,
      },
      suggestions: {
        extend: ({ theme }: ThemeProps) => `
          padding-block: ${components.hpe.select.default.medium.drop.paddingY};
          padding-inline: ${components.hpe.select.default.medium.drop.paddingX};
          gap: ${components.hpe.select.default.medium.drop.gapY};
          display: flex;
          flex-direction: column;
          [role="option"]:hover {
            background: ${getThemeColor(
              components.hpe.select.default.option.hover.background,
              theme,
            )};
          }
        `,
      },
    },
    thumbsRating: {
      like: { color: 'background-selected-primary-strong' },
      dislike: { color: 'background-selected-primary-strong' },
      icons: {
        dislike: Dislike,
        dislikeSelected: DislikeFill,
        like: Like,
        likeSelected: LikeFill,
      },
    },
    timeInput: {
      container: {
        round:
          components.hpe.formField.default.medium.input.container.borderRadius,
      },
      segment: {
        pad: {
          left: large.hpe.spacing['6xsmall'],
          right: large.hpe.spacing['6xsmall'],
        },
        active: {
          background: backgroundActive,
          border: {
            size: large.hpe.borderWidth.small,
            color: focusColor,
          },
        },
      },
      drop: {
        column: {
          gap: large.hpe.spacing['4xsmall'],
          pad: { horizontal: large.hpe.spacing['3xsmall'] },
        },
        pad: {
          horizontal: large.hpe.spacing['3xsmall'],
          vertical: large.hpe.spacing.xsmall,
        },
        option: {
          container: {
            pad: {
              vertical: components.hpe.element.medium.paddingY,
              horizontal: components.hpe.element.medium.paddingX.default,
            },
            round: large.hpe.radius.xxsmall,
            hover: {
              background: backgroundHover,
            },
            selected: {
              background: backgroundSelectedPrimaryStrong,
              hover: {
                background: backgroundSelectedPrimaryStrongHover,
              },
            },
          },
          text: {
            size: large.hpe.text.medium.fontSize,
            color: textDefaultColor,
            selected: {
              color: textOnSelectedPrimaryStrong,
              weight: Number(global.hpe.fontWeight.medium),
            },
          },
        },
      },
      dropButton: {
        icon: ClockIcon,
      },
    },
  } satisfies FormTheme;
};
