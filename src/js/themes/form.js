// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { css } from 'styled-components';

import { getThemeColor } from './utils';

export const buildFormTheme = (tokens, context) => {
  const { primitives, light, dark, large, components } = tokens;
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
    Like,
    LikeFill,
    Search,
    Star,
    StarFill,
    Up,
  } = context.icons;
  // Pulling the raw values directly from the token files gives us the color
  // exactly as authored.
  const textOnSelectedPrimaryStrong = {
    light: light.hpe.color.text.onSelectedPrimaryStrong,
    dark: dark.hpe.color.text.onSelectedPrimaryStrong,
  };

  return {
    checkBox: {
      hover: {
        border: {
          color: undefined,
          width:
            dimensions.borderSize[
              components.hpe.checkbox.default.medium.control.borderWidth
            ] || components.hpe.checkbox.default.medium.control.borderWidth,
        },
        // applies to container around control and label
        background: { color: undefined },
        extend: ({ theme, toggle, checked }) => {
          if (!checked) {
            return css``;
          }

          const borderColor = toggle
            ? getThemeColor(
                components.hpe.switch.default.control.track.selected.hover
                  .borderColor,
                theme,
              )
            : getThemeColor(
                components.hpe.checkbox.default.control.selected.hover
                  .borderColor,
                theme,
              );

          return css`
            border-color: ${borderColor};
          `;
        },
      },
      color: components.hpe.switch.default.control.handle.rest.background,
      border: {
        color: components.hpe.checkbox.default.control.rest.borderColor,
        width:
          dimensions.borderSize[
            components.hpe.checkbox.default.medium.control.borderWidth
          ] || components.hpe.checkbox.default.medium.control.borderWidth,
      },
      check: {
        radius: components.hpe.checkbox.default.medium.control.borderRadius,
        thickness: '2px',
        extend: ({ theme, checked, indeterminate, disabled }) => {
          let background = getThemeColor(
            components.hpe.checkbox.default.control.rest.background,
            theme,
          );
          let hoverBackground = getThemeColor(
            components.hpe.checkbox.default.control.hover.background,
            theme,
          );
          let borderColor = getThemeColor(
            components.hpe.checkbox.default.control.rest.borderColor,
            theme,
          );
          if (checked || indeterminate) {
            background = getThemeColor(
              components.hpe.checkbox.default.control.selected.rest.background,
              theme,
            );
            borderColor = getThemeColor(
              components.hpe.checkbox.default.control.selected.rest.borderColor,
              theme,
            );
          }
          if (checked || indeterminate) {
            hoverBackground = getThemeColor(
              components.hpe.checkbox.default.control.selected.hover.background,
              theme,
            );
          }
          if (disabled) {
            background = getThemeColor(
              components.hpe.checkbox.default.control.disabled.rest.background,
              theme,
            );
            borderColor = getThemeColor(
              components.hpe.checkbox.default.control.disabled.rest.borderColor,
              theme,
            );
          }
          return `
            background: ${background};
            border-color: ${borderColor};
            &:hover {
              ${!disabled ? `background: ${hoverBackground};` : ''}
            }
          `;
        },
      },
      icon: {
        extend: ({ theme, disabled }) => {
          // Grommet normally applies a "smart" background/foreground pairing that
          // selects foreground colors based on the background (light/dark) to keep
          // text and icons readable. Because the "icon-onSelectedPrimaryStrong" token's
          // light/dark values are intentionally swapped in our tokens, invert
          // theme.dark here so the token is resolved exactly as authored.
          const themeToUse = disabled ? theme : { ...theme, dark: !theme.dark };
          return `stroke-width: 2px;
      stroke: ${getThemeColor(
        disabled
          ? components.hpe.checkbox.default.control.disabled.rest.iconColor
          : components.hpe.checkbox.default.control.selected.rest.iconColor,
        themeToUse,
      )}`;
        },
      },
      gap: components.hpe.checkbox.default.medium.gapX,
      label: { align: 'start' },
      pad: 'none',
      size: components.hpe.checkbox.default.medium.control.width,
      toggle: {
        background: components.hpe.switch.default.control.track.rest.background,
        color: components.hpe.switch.default.control.handle.rest.background,
        size: components.hpe.switch.default.medium.control.track.width,
        knob: {
          extend: ({ theme, checked, disabled }) => {
            const { borderWidth } =
              components.hpe.switch.default.medium.control.handle;
            const insetHandle =
              dimensions.borderSize[borderWidth] || borderWidth;

            return `
          box-shadow: ${
            theme.global.elevation[theme.dark ? 'dark' : 'light'][
              components.hpe.switch.default.control.handle.rest.boxShadow
            ]
          };
          border: ${dimensions.borderSize[borderWidth] || borderWidth} solid ${getThemeColor(
            disabled
              ? components.hpe.switch.default.control.handle.disabled.rest
                  .borderColor
              : components.hpe.switch.default.control.handle.rest.borderColor,
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
        extend: ({ checked, theme, disabled }) => {
          let background;
          let hoverBackground = getThemeColor(
            components.hpe.switch.default.control.track.hover.background,
            theme,
          );
          let borderColor = getThemeColor(
            components.hpe.switch.default.control.track.rest.borderColor,
            theme,
          );
          if (checked) {
            background = getThemeColor(
              components.hpe.switch.default.control.track.selected.rest
                .background,
              theme,
            );
            hoverBackground = getThemeColor(
              components.hpe.switch.default.control.track.selected.hover
                .background,
              theme,
            );
          }
          if (disabled) {
            background = getThemeColor(
              components.hpe.switch.default.control.track.disabled.rest
                .background,
              theme,
            );
            borderColor = getThemeColor(
              components.hpe.switch.default.control.handle.disabled.rest
                .borderColor,
              theme,
            );
          }
          return `
            border-color: ${borderColor};
            background: ${background};
            &:hover {
              ${!disabled ? `background: ${hoverBackground};` : ''}
            }
        `;
        },
      },
      extend: ({ disabled, theme }) => css`
        font-weight: ${components.hpe.checkbox.default.label.rest.fontWeight};
        width: auto;
        border: ${
          components.hpe.formField.default.medium.input.container.borderWidth
        }
          solid
          ${getThemeColor(
            components.hpe.formField.default.input.group.item.rest.borderColor,
            theme,
          )};
        &
          input:checked
          + span[class*='CheckBoxToggle']
          > span[class*='CheckBoxKnob'] {
          left: 25px;
        }
        ${
          // override built in disabled opacity: 0.5 from grommet
          disabled &&
          `opacity: 1;
        color: ${getThemeColor(
          components.hpe.checkbox.default.label.disabled.rest.textColor,
          theme,
        )};`
        }
      `,
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
      dragOver: { background: 'background-hover', border: 'none' },
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
        weight: components.hpe.formField.default.medium.label.fontWeight,
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
          extend: ({ error }) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
      },
      checkBoxGroup: {
        container: {
          extend: ({ error }) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
      },
      radioButtonGroup: {
        container: {
          extend: ({ error }) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
      },
      thumbsRating: {
        container: {
          extend: ({ error }) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
      },
      starRating: {
        container: {
          extend: ({ error }) =>
            `border-color: ${
              error
                ? components.hpe.formField.default.input.group.container.error
                    .rest.borderColor
                : components.hpe.formField.default.input.group.container.rest
                    .borderColor
            }; `,
        },
      },
      survey: {
        label: { margin: { bottom: 'none' }, size: 'medium', weight: 500 },
      },
      extend: (props) => {
        const { theme } = props;
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
        extend: ({ theme }) => `
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
        circle: ({ theme }) => (
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
        extend: ({ theme }) => `
          svg {
            fill: ${
              theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light']
            };
            stroke: ${
              theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light']
            };
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
        extend: ({ theme }) => `
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
      extend: ({ disabled, theme }) => `
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
        extend: ({ disabled }) => css`
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
        extend: ({ theme }) => `
          svg {
            fill: ${
              theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light']
            };
            stroke: ${
              theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light']
            };
          }
        `,
      },
      icons: {
        copy: Copy,
      },
      suggestions: {
        extend: ({ theme }) => `
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
      button: {
        margin: { right: '3xsmall' },
      },
      active: {
        background: 'background-active',
        pad: '5xsmall',
        indicator: {
          color: 'focus',
        },
      },
      drop: {
        option: {
          hover: {
            background: 'background-active',
          },
          selected: {
            background: 'background-selected-primary-strong',
            color: textOnSelectedPrimaryStrong,
            hover: { background: 'background-selected-primary-strong-hover' },
          },
        },
      },
      icon: {
        clock: ClockIcon,
      },
    },
  };
};
