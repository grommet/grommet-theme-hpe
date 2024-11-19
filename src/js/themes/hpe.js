// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import { css } from 'styled-components';
import { components, global, dark, light, medium } from 'hpe-design-tokens';
import { Ascending } from 'grommet-icons/icons/Ascending';
import { Blank } from 'grommet-icons/icons/Blank';
import { CircleAlert } from 'grommet-icons/icons/CircleAlert';
import { Close } from 'grommet-icons/icons/Close';
import { Descending } from 'grommet-icons/icons/Descending';
import { Down } from 'grommet-icons/icons/Down';
import { Next } from 'grommet-icons/icons/Next';
import { Previous } from 'grommet-icons/icons/Previous';
import { Unsorted } from 'grommet-icons/icons/Unsorted';
import { Up } from 'grommet-icons/icons/Up';
import { Hpe } from 'grommet-icons/icons/Hpe';

import { backgrounds } from './backgrounds';
import { colors } from './colors';
import { dimensions } from './dimensions';

const baseSpacing = 24;

const isObject = (item) =>
  item && typeof item === 'object' && !Array.isArray(item);

const deepFreeze = (obj) => {
  Object.keys(obj).forEach(
    (key) => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

const MISSING = {
  color: 'red',
  weight: 700,
};

export const componentSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
export const buttonKinds = ['default', 'secondary', 'primary', 'toolbar'];
export const buttonStates = ['hover', 'active', 'disabled'];

export const textSizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
];

const anchorSizeTheme = {};
textSizes.forEach((size) => {
  anchorSizeTheme[size] = {
    color: components.hpe.anchor.default.enabled.textColor,
    textDecoration: components.hpe.anchor.default.enabled.textDecoration,
    fontWeight: components.hpe.anchor.default.enabled.fontWeight,
  };
});

const paragraphTheme = {};
const textTheme = {};
textSizes.forEach((size) => {
  paragraphTheme[size] = {
    size: medium.hpe.text?.[size]?.fontSize,
    height: medium.hpe.text?.[size]?.lineHeight,
    maxWidth: medium.hpe.paragraph?.[size]?.maxWidth,
  };
  textTheme[size] = {
    size: medium.hpe.text?.[size].fontSize,
    height: medium.hpe.text?.[size].lineHeight,
  };
});

const buttonKindTheme = {};
buttonKinds.forEach((kind) => {
  buttonKindTheme[kind] = {
    background: components.hpe.button?.[kind].enabled.background,
    border: {
      width:
        dimensions.borderSize[
          components.hpe.button.medium?.[kind].borderWidth
        ] || components.hpe.button.medium?.[kind].borderWidth,
      color: components.hpe.button?.[kind].enabled.borderColor,
      radius:
        dimensions.borderSize[
          components.hpe.button.medium?.[kind].borderRadius
        ] || components.hpe.button.medium?.[kind].borderRadius,
    },
    color: components.hpe.button?.[kind].enabled.textColor,
    font: {
      weight: components.hpe.button?.[kind].enabled.fontWeight,
    },
  };
});

const buttonStatesTheme = {};
buttonStates.forEach((state) => {
  buttonStatesTheme[state] = {};
  buttonKinds.forEach((kind) => {
    let adjustedState = state;
    if (state === 'active') {
      adjustedState = 'selected';
      buttonStatesTheme[state][kind] = {
        background: {
          color:
            components.hpe.button?.[kind]?.[adjustedState].enabled.background,
        },
        border: {
          // Q: this token isn't correct
          color:
            components.hpe.button?.[kind]?.[adjustedState].enabled.borderColor,
        },
        color: components.hpe.button?.[kind]?.[adjustedState].enabled.textColor,
        font: {
          weight:
            components.hpe.button?.[kind]?.[adjustedState].enabled.fontWeight,
        },
      };
      if (!('active' in buttonStatesTheme.hover))
        buttonStatesTheme.hover.active = {};
      buttonStatesTheme.hover[state][kind] = {
        background: {
          color:
            components.hpe.button?.[kind]?.[adjustedState]?.hover?.background,
        },
        border: {
          color:
            components.hpe.button?.[kind]?.[adjustedState]?.hover?.borderColor,
        },
        color: components.hpe.button?.[kind]?.[adjustedState]?.hover?.textColor,
        font: {
          weight:
            components.hpe.button?.[kind]?.[adjustedState]?.hover?.fontWeight,
        },
      };
    } else if (kind === 'option') {
      if (state === 'active') adjustedState = 'selected';
      buttonStatesTheme[state][kind] = {
        background: {
          color:
            components.hpe.select.option?.[adjustedState].enabled.background,
        },
        border: {
          color: components.hpe.select.option?.[adjustedState].borderColor,
        },
        color: components.hpe.select.option?.[adjustedState].textColor,
      };
    } else {
      buttonStatesTheme[state][kind] = {
        background: {
          color: components.hpe.button?.[kind]?.[adjustedState].background,
        },
        border: {
          width: '',
          color: components.hpe.button?.[kind]?.[adjustedState].borderColor,
        },
        color: components.hpe.button?.[kind]?.[adjustedState].textColor,
        font: {
          weight: components.hpe.button?.[kind]?.[adjustedState].fontWeight,
        },
      };
    }
  });
});

const buttonSizesTheme = {};
componentSizes.forEach((size) => {
  const kindStyles = {};
  buttonKinds.forEach((kind) => {
    kindStyles[kind] = {
      border: {
        radius: components.hpe.button?.[size]?.[kind].borderRadius,
      },
      pad: {
        vertical: components.hpe.button?.[size]?.[kind].paddingY,
        horizontal: components.hpe.button?.[size]?.[kind].paddingX,
      },
    };
  });
  buttonSizesTheme[size] = {
    border: {
      radius: components.hpe.button?.[size]?.default.borderRadius,
    },
    pad: {
      vertical: components.hpe.button?.[size]?.default.paddingY,
      horizontal: components.hpe.button?.[size]?.default.paddingX,
    },
    iconOnly: {
      pad: {
        vertical: components.hpe.button?.[size]?.default.iconOnly.paddingY,
        horizontal: components.hpe.button?.[size]?.default.iconOnly.paddingX,
      },
    },
    ...kindStyles,
  };
});

// option button kind styles. abstracted so select.emptySearchMessage
// can reference pad value
const option = {
  color: components.hpe.select.option.enabled.textColor,
  border: {
    radius:
      dimensions.edgeSize[components.hpe.select.medium.option.borderRadius] ||
      components.hpe.select.medium.option.borderRadius,
    width:
      dimensions.borderSize[components.hpe.select.medium.option.borderWidth] ||
      components.hpe.select.medium.option.borderWidth,
    color: components.hpe.select.option.enabled.borderColor,
  },
  pad: {
    horizontal: components.hpe.select.medium.option.paddingX,
    vertical: components.hpe.select.medium.option.paddingY,
  },
  font: {
    weight: components.hpe.select.option.enabled.fontWeight,
  },
};

// abstracted so button and pinned list icon can reference
const mediumIconOnlyPad = {
  vertical: components.hpe.button.medium.default.iconOnly.paddingY,
  horizontal: components.hpe.button.medium.default.iconOnly.paddingX,
};

export const hpe = deepFreeze({
  defaultMode: 'light',
  global: {
    backgrounds, // TO DO backgrounds
    ...dimensions,
    colors,
    control: {
      border: {
        radius: components.hpe.formField.medium.input.container.borderRadius,
        color: components.hpe.formField.input.container.enabled.borderColor,
      },
    },
    input: {
      font: {
        height: 'inherit',
        weight: components.hpe.formField.medium.value.fontWeight,
      },
      padding: {
        horizontal: components.hpe.formField.medium.input.container.paddingX,
        vertical: components.hpe.formField.medium.input.container.paddingY,
      },
      readOnly: {
        background:
          components.hpe.formField.input.container.readOnly.background,
        border: {
          color: components.hpe.formField.input.container.readOnly.borderColor,
        },
      },
      extend: `
        &::-webkit-input-placeholder {
        font-weight: ${components.hpe.formField.medium.placeholder.fontWeight};
      }
    
      &::-moz-placeholder {
        font-weight: ${components.hpe.formField.medium.placeholder.fontWeight};
      }
    
      &:-ms-input-placeholder {
        font-weight: ${components.hpe.formField.medium.placeholder.fontWeight};
      }
      `,
    },
    font: {
      family: global.hpe.fontStack.primary,
      face: `
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff") format('woff');
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff") format('woff');
          font-weight: 400;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff") format('woff');
          font-weight: 700;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff") format('woff');
          font-weight: 600;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff") format('woff');
          font-weight: 500;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff") format('woff');
          font-weight: 100;
        }`,
      size: medium.hpe.text.medium.fontSize,
      height: medium.hpe.text.medium.lineHeight,
    },
    focus: {
      border: undefined,
    },
    active: {
      background: 'background-active',
      color: 'active-text',
    },
    drop: {
      background: components.hpe.drop.background,
      border: {
        radius:
          dimensions.edgeSize[components.hpe.drop.borderRadius] ||
          components.hpe.drop.borderRadius,
      },
      margin: components.hpe.drop.margin,
      intelligentMargin: true,
      shadowSize: 'medium',
      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment brings Drop in alignment with Layer
       * which needs an elevated z-index to sit atop the Global header. */
      zIndex: components.hpe.drop.zIndex,
    },
    elevation: {
      light: {
        small: light.hpe.shadow.small,
        medium: light.hpe.shadow.medium,
        large: light.hpe.shadow.large,
        'inset-selected': `inset 3px 0 ${light.hpe.color.border.selected}`,
      },
      dark: {
        small: dark.hpe.shadow.small,
        medium: dark.hpe.shadow.medium,
        large: dark.hpe.shadow.large,
        'inset-selected': `inset 3px 0 ${dark.hpe.color.border.selected}`,
      },
    },
    hover: {
      background: 'background-hover',
      color: MISSING.color, // TO DO
    },
    selected: {
      background: 'background-selected-strong-enabled',
      color: 'text-onSelectedStrong',
    },
  },
  accordion: {
    panel: {
      border: {
        side: 'horizontal',
        color: 'border',
      },
    },
    heading: {
      level: 4, // NOTE: in v3 all accordions were h4
      margin: { vertical: 'medium', horizontal: 'xsmall' },
    },
    hover: {
      background: 'background-hover',
      heading: {
        color: undefined,
      },
    },
    border: undefined,
    icons: {
      collapse: Up,
      expand: Down,
      color: 'text',
    },
  },
  anchor: {
    color: components.hpe.anchor.default.enabled.textColor,
    textDecoration: components.hpe.anchor.default.enabled.textDecoration,
    fontWeight: components.hpe.anchor.default.enabled.fontWeight,
    gap: components.hpe.anchor.medium.default.gapX, // TO DO not size specific
    hover: {
      textDecoration: components.hpe.anchor.default.hover.textDecoration,
    },
    size: anchorSizeTheme,
  },
  avatar: {
    size: {
      xsmall: components.hpe.element?.xsmall.minHeight,
      small: components.hpe.element?.small.minHeight, // 24px
      medium: components.hpe.element?.medium.minHeight, // default 48px
      large: components.hpe.element?.large.minHeight, // 72px
      xlarge: components.hpe.element?.xlarge.minHeight, // 96px
      '2xl': `${baseSpacing * 5}px`, // TO DO no component size, is this a one off?
      '3xl': `${baseSpacing * 6}px`, // TO DO no component size, is this a one off?
      '4xl': `${baseSpacing * 7}px`, // TO DO no component size, is this a one off?
      '5xl': `${baseSpacing * 8}px`, // TO DO no component size, is this a one off?
    },
    text: {
      size: {
        xsmall: 'xsmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        xlarge: 'xlarge',
        '2xl': '3xl', // TO DO no component size, is this a one off?
        '3xl': '4xl', // TO DO no component size, is this a one off?
        '4xl': '5xl', // TO DO no component size, is this a one off?
        '5xl': '6xl', // TO DO no component size, is this a one off?
      },
    },
  },
  button: {
    intelligentPad: false,
    color: components.hpe.button.default.enabled.textColor,
    gap: components.hpe.button.medium.default.gapX,
    badge: {
      align: 'container', // TO DO this is a grommet-ism?
      container: {
        // align badge background to button label color
        background: 'text-strong',
      },
      size: {
        medium: '18px', // Q: what token should be used here? no token for this at the moments
      },
      text: {
        size: {
          medium: 'xsmall', // TO DO how to do references for typography sizes
        },
      },
    },
    // TO DO add cta-primary variant
    'cta-primary': {
      ...buttonKindTheme.primary,
      icon: <Hpe />,
      reverse: true,
      extend: '',
    },
    // TO DO add cta-alternate variant
    'cta-alternate': {
      ...buttonKindTheme.secondary,
      icon: <Hpe color="icon-brand" />,
      reverse: true,
    },
    ...buttonKindTheme,
    option,
    active: buttonStatesTheme.active,
    disabled: {
      opacity: 1,
      ...buttonStatesTheme.disabled,
    },
    selected: {
      option: {
        background: components.hpe.select.option.selected.enabled.background,
        color: components.hpe.select.option.selected.textColor,
        font: {
          weight: components.hpe.select.option.selected.enabled.fontWeight,
        },
        elevation: 'inset-selected',
      },
    },
    hover: {
      'cta-primary': buttonStatesTheme.hover.primary,
      'cta-alternate': {
        ...buttonStatesTheme.hover.secondary,
        extend: '', // TO DO can remove when merging, temp to override extend
      },
      ...buttonStatesTheme.hover,
    },
    size: {
      xsmall: {
        border: {
          radius: '2em',
        },
        iconOnly: {
          pad: {
            vertical: '3px',
            horizontal: '3px',
          },
        },
      },
      ...buttonSizesTheme,
    },
  },
  calendar: {
    day: {
      hover: {
        background: 'background-hover',
        color: 'text-strong',
      },
      selected: {
        background: 'background-selected-strong-enabled',
        color: 'text-onSelectedStrong',
        hover: {
          background: 'background-selected-strong-hover',
        },
        font: {
          weight: global.hpe.fontWeight.medium,
        },
      },
      inRange: {
        color: 'text-onSelectedWeak',
        hover: {
          background: 'background-selected-weak-hover',
        },
        font: {
          weight: global.hpe.fontWeight.medium,
        },
      },
      extend: '',
    },
    range: {
      background: 'background-selected-weak-enabled',
    },
    icons: {
      next: Next,
      previous: Previous,
    },
    small: {
      // TO DO should we use t-shirt size element tokens here?
      fontSize: '13.6px',
      lineHeight: 1.375,
      daySize: '27.43px',
      title: {
        size: 'medium',
        weight: global.hpe.fontWeight.normal,
        color: 'text-strong',
      },
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
      day: {
        round: 'full',
      },
      range: {
        round: 'none',
        start: {
          round: {
            corner: 'left',
            size: 'full',
          },
        },
        end: {
          round: {
            corner: 'right',
            size: 'full',
          },
        },
      },
      title: {
        size: 'large',
        weight: global.hpe.fontWeight.normal,
        color: 'text-strong',
      },
    },
    large: {
      fontSize: '31.2px',
      lineHeight: 1.11,
      daySize: '109.71px',
      title: {
        size: 'xlarge',
        weight: global.hpe.fontWeight.normal,
        color: 'text-strong',
      },
    },
  },
  card: {
    container: {
      background: 'background-front',
      elevation: 'medium',
      extend: 'transition: all 0.3s ease-in-out;',
    },
    body: {
      pad: 'medium',
    },
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
    },
    header: {
      pad: 'medium',
    },
    hover: {
      container: {
        elevation: 'large',
      },
    },
  },
  checkBox: {
    hover: {
      border: {
        color: components.hpe.checkbox.control.hover.borderColor,
        width: components.hpe.checkbox.control.hover.borderWidth,
      },
      background: {
        color: 'transparent',
      },
      // HPE Design System guidance states that pad="none" should be applied on CheckBox
      // when its used outside of a FormField. We will apply this hover treatment in
      // those instances.
      extend: ({ disabled, pad, theme, toggle }) => css`
        ${!disabled &&
        pad === 'none' &&
        !toggle &&
        `border: 2px solid ${
          theme.global.colors[
            components.hpe.checkbox.control.hover.borderColor
          ][theme.dark ? 'dark' : 'light']
        };`}
      `, // Q: missing token for hover borderWidth? this falls into similar boat as secondary button
    },
    color: components.hpe.switch.control.handle.enabled.background,
    border: {
      color: components.hpe.checkbox.control.enabled.borderColor,
      width:
        dimensions.borderSize[
          components.hpe.checkbox.medium.control.borderWidth
        ] || components.hpe.checkbox.medium.control.borderWidth,
    },
    check: {
      radius: components.hpe.checkbox.medium.control.borderRadius,
      thickness: components.hpe.checkbox.control.hover.borderWidth,
      extend: ({ theme, checked, indeterminate }) => `
      margin-block: ${
        dimensions.borderSize[components.hpe.checkbox.medium.control.marginY] ||
        components.hpe.checkbox.medium.control.marginY
      }px;
      background: ${
        theme.global.colors[
          components.hpe.checkbox.control.enabled.background
        ]?.[theme.dark ? 'dark' : 'light']
      };
      background-color: ${
        checked || indeterminate
          ? theme.global.colors[
              components.hpe.checkbox.control.selected.enabled.background
            ]?.[theme.dark ? 'dark' : 'light']
          : ''
      };
      &:hover {
        background: ${
          checked || indeterminate
            ? theme.global.colors[
                components.hpe.checkbox.control.selected.hover.background
              ]?.[theme.dark ? 'dark' : 'light']
            : theme.global.colors[
                components.hpe.checkbox.control.hover.background
              ]?.[theme.dark ? 'dark' : 'light']
        };
      }
      ${(checked || indeterminate) && 'border: none;'}
        `,
    },
    icon: {
      extend: ({ theme }) => `stroke-width: 2px;
      stroke: ${
        theme.global.colors[
          components.hpe.checkbox.control.selected.enabled.iconColor
        ]?.[theme.dark ? 'dark' : 'light']
      }`,
    },
    gap: components.hpe.checkbox.medium.gapX,
    label: {
      align: 'start',
    },
    pad: {
      vertical: components.hpe.element?.medium.paddingY,
      horizontal: components.hpe.formField.medium.input.container.paddingX,
    },
    size: components.hpe.checkbox.medium.control.width,
    toggle: {
      background: components.hpe.switch.control.track.enabled.background,
      color: components.hpe.switch.control.handle.enabled.background,
      size: components.hpe.switch.medium.control.track.width,
      knob: {
        extend: ({ theme, checked }) => `
           box-shadow: ${
             theme.global.elevation[theme.dark ? 'dark' : 'light'].small
           };
           border: ${
             dimensions.borderSize[
               components.hpe.switch.medium.control.handle.borderWidth
             ]
           } solid ${
             theme.global.colors[
               components.hpe.switch.control.handle.enabled.borderColor
             ][theme.dark ? 'dark' : 'light']
           };
        width: ${components.hpe.switch.medium.control.handle.width};
        height: ${components.hpe.switch.medium.control.handle.height};
        top: 1px; // TO DO token?
        ${!checked ? 'left: 1px;' : ''} // TO DO token?
        `,
      },
      extend: ({ checked, theme }) => `
        ${
          checked &&
          `background-color: ${
            theme.global.colors[
              components.hpe.switch.control.track.selected.enabled.background
            ]?.[theme.dark ? 'dark' : 'light']
          };`
        }
         margin-block: ${
           dimensions.borderSize[
             components.hpe.switch.medium.control.track.marginY
           ] || components.hpe.switch.medium.control.track.marginY
         }px;
         border-color: ${
           theme.global.colors[
             components.hpe.switch.control.track.enabled.borderColor
           ]?.[theme.dark ? 'dark' : 'light']
         };
      `,
    },
    // HPE Design System guidance states that pad="none" should be applied on CheckBox
    // when its used outside of a FormField. We will apply this hover treatment in
    // those instances.
    extend: ({ disabled, pad }) => css`
    ${
      !disabled &&
      pad === 'none' &&
      `&:hover {
      background-color: unset;
    }`
    }
    font-weight: ${components.hpe.checkbox.medium.label.fontWeight};
    width: auto;
  };
  `,
  },
  checkBoxGroup: {
    container: {
      gap: 'none', // TO DO token ?
      margin: {
        vertical:
          components.hpe.formField.medium.input.group.container.paddingY,
      },
    },
  },
  data: {
    button: {
      kind: 'toolbar',
    },
  },
  dateInput: {
    container: {
      round: components.hpe.formField.medium.input.container.borderRadius,
    },
  },
  dataTable: {
    body: {
      // TO DO should there be a token?
      extend: ({ theme }) => `
        /* Margin and padding allow room for focus on table body */
        margin: ${theme.global.edgeSize.xxsmall} 0px;
        padding: 0px ${theme.global.edgeSize.xxsmall};
      `,
      selected: {
        background: components.hpe.dataCell.selected?.enabled?.background,
      },
    },
    groupHeader: {
      // background: undefined,
      // border: undefined,
      // pad: undefined,
    },
    groupEnd: {
      border: { side: 'bottom', size: 'xsmall' },
    },
    header: {
      border: { side: 'bottom' },
      color: components.hpe.headerCell.enabled.textColor,
      extend: ({ column, sort, sortable, theme }) =>
        `
          ${
            sort &&
            sort.property === column &&
            `
            background: ${
              theme.global.colors['background-active'][
                theme.dark ? 'dark' : 'light'
              ]
            }
          `
          };
          ${
            sortable &&
            sort &&
            sort.property !== column &&
            `
              svg {
                opacity: 0;
              }
              &:hover {
                svg {
                  opacity: 1;
                }
              }
            `
          };
        `,
      font: {
        weight: components.hpe.headerCell.fontWeight,
      },
      gap: components.hpe.headerCell.gapX,
      hover: {
        background: {
          color: components.hpe.headerCell.hover.background,
        },
      },
      units: {
        color: components.hpe.headerCell.units.enabled.textColor,
      },
    },
    icons: {
      ascending: () => <Ascending height="medium" />,
      descending: () => <Descending height="medium" />,
      contract: () => <Up height="medium" />,
      expand: () => <Down height="medium" />,
      sortable: () => <Unsorted height="medium" />,
    },
    pinned: {
      header: {
        background: { opacity: 'strong' },
        extend: 'backdrop-filter: blur(12px);',
      },
      body: {
        background: { opacity: 'strong' },
        extend: 'backdrop-filter: blur(12px);',
      },
      footer: {
        background: { opacity: 'strong' },
        extend: 'backdrop-filter: blur(12px);',
      },
    },
    primary: {
      weight: components.hpe.dataCell.primary.fontWeight,
      color: components.hpe.dataCell.primary.enabled.textColor,
    },
    resize: {
      border: {
        color: 'border',
        side: 'end',
      },
      hover: {
        border: {
          color: 'border-strong',
          size: 'small',
        },
      },
    },
  },
  fileInput: {
    border: {
      color: components.hpe.formField.input.container.enabled.borderColor,
      side: 'all',
      style: 'solid',
      size: components.hpe.formField.medium.input.container.borderWidth,
    },
    button: {
      background: components.hpe.button.secondary.enabled.background,
      border: {
        radius: components.hpe.button.medium.secondary.borderRadius,
      },
      pad: {
        vertical: components.hpe.button.medium.secondary.paddingY,
        horizontal: components.hpe.button.medium.secondary.paddingX,
      },
      color: components.hpe.button.secondary.enabled.textColor,
      font: {
        weight: components.hpe.button.secondary.enabled.fontWeight,
      },
      hover: {
        background: components.hpe.button.secondary.hover.background,
        color: components.hpe.button.secondary.hover.textColor,
      },
    },
    dragOver: {
      background: MISSING.color,
      border: 'none',
    },
    hover: {
      border: {
        color: 'border',
      },
    },
    icons: {
      remove: Close,
    },
    label: {
      margin: 'small',
    },
    message: {
      color: 'placeholder',
      margin: 'small',
    },
    pad: { horizontal: 'xsmall' },
    extend: `border-radius: ${components.hpe.formField.medium.input.container.borderRadius};`,
  },
  formField: {
    content: {
      margin: { vertical: 'xsmall' },
      pad: 'none',
    },
    border: {
      error: {
        color:
          components.hpe.formField.input.container.status.critical.borderColor,
      },
      color: components.hpe.formField.input.container.enabled.borderColor,
      side: 'all',
    },
    disabled: {
      background:
        components.hpe.formField.input.group.container.disabled.background,
      border: {
        color: components.hpe.formField.input.container.disabled.borderColor,
      },
      label: {
        color: components.hpe.formField.label.disabled.textColor,
      },
    },
    error: {
      background: {
        color:
          components.hpe.formField.input.container.status.critical.background,
      },
      container: {
        gap: 'xsmall', // TO DO missing token
      },
      icon: <CircleAlert size="small" color={light.hpe.color.icon.critical} />, // TO DO need to handle modes
      size: 'xsmall', // TO DO we have a token but it's not a t-shirt size reference but fontSize, lineHeight directly
      color: components.hpe.formField.error.enabled.textColor,
      margin: {
        // TO DO missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none',
      },
    },
    focus: {
      background: components.hpe.formField.input.container.background,
      border: {
        color: components.hpe.formField.input.container.borderColor,
      },
    },
    help: {
      size: 'xsmall',
      color: components.hpe.formField.help.enabled.color,
      margin: 'none', // TO DO missing token
    },
    info: {
      size: 'xsmall',
      color: components.hpe.formField.info.enabled.color,
      margin: {
        // TO DO missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none',
      },
    },
    label: {
      size: 'xsmall', // TO DO how to capture this as token, currently we have "fontSize", "lineHeight", "..."
      color: components.hpe.formField.label.enabled.color,
      margin: {
        // TO DO missing token
        bottom: 'none',
        top: 'xsmall',
        horizontal: 'none',
      },
      requiredIndicator: true,
      weight: components.hpe.formField.medium.label.fontWeight,
    },
    margin: {
      bottom: 'none', // TO DO missing token
    },
    round: components.hpe.formField.medium.input.container.borderRadius,
    // TO DO no tokens
    survey: {
      label: {
        margin: { bottom: 'none' },
        size: 'medium',
      },
    },
  },
  heading: {
    color: 'heading',
    weight: medium.hpe.heading.xlarge.fontWeight,
    level: {
      1: {
        font: {
          weight: medium.hpe.heading.xlarge.fontWeight,
        },
        small: {
          size: medium.hpe.heading.large.fontSize,
          height: medium.hpe.heading.large.lineHeight,
        },
        medium: {
          size: medium.hpe.heading.xlarge.fontSize,
          height: medium.hpe.heading.xlarge.lineHeight,
        },
        large: {
          // TO DO what tokens?
          size: '48px',
          height: '48px',
        },
        xlarge: {
          // TO DO what tokens?
          size: '60px',
          height: '60px',
        },
      },
      2: {
        font: {
          weight: medium.hpe.heading.large.fontWeight,
        },
        small: {
          size: medium.hpe.heading.medium.fontSize,
          height: medium.hpe.heading.medium.lineHeight,
        },
        medium: {
          size: medium.hpe.heading.large.fontSize,
          height: medium.hpe.heading.large.lineHeight,
        },
        large: {
          size: medium.hpe.heading.xlarge.fontSize,
          height: medium.hpe.heading.xlarge.lineHeight,
        },
        xlarge: {
          // TO DO what tokens?
          size: '48px',
          height: '48px',
        },
      },
      3: {
        font: {
          weight: medium.hpe.heading.medium.fontWeight,
        },
        small: {
          size: medium.hpe.heading.small.fontSize,
          height: medium.hpe.heading.small.lineHeight,
        },
        medium: {
          size: medium.hpe.heading.medium.fontSize,
          height: medium.hpe.heading.medium.lineHeight,
        },
        large: {
          size: medium.hpe.heading.large.fontSize,
          height: medium.hpe.heading.large.lineHeight,
        },
        xlarge: {
          size: medium.hpe.heading.xlarge.fontSize,
          height: medium.hpe.heading.xlarge.lineHeight,
        },
      },
      4: {
        font: {
          weight: medium.hpe.heading.small.fontWeight,
        },
        small: {
          size: medium.hpe.heading.xsmall.fontSize,
          height: medium.hpe.heading.xsmall.lineHeight,
        },
        medium: {
          size: medium.hpe.heading.small.fontSize,
          height: medium.hpe.heading.small.lineHeight,
        },
        large: {
          size: medium.hpe.heading.medium.fontSize,
          height: medium.hpe.heading.medium.lineHeight,
        },
        xlarge: {
          size: medium.hpe.heading.large.fontSize,
          height: medium.hpe.heading.large.lineHeight,
        },
      },
      5: {
        font: {
          weight: medium.hpe.heading.xsmall.fontWeight,
        },
        small: {
          size: medium.hpe.heading.xxsmall.fontSize,
          height: medium.hpe.heading.xxsmall.lineHeight,
        },
        medium: {
          size: medium.hpe.heading.xsmall.fontSize,
          height: medium.hpe.heading.xsmall.lineHeight,
        },
        large: {
          size: medium.hpe.heading.small.fontSize,
          height: medium.hpe.heading.small.lineHeight,
        },
        xlarge: {
          size: medium.hpe.heading.medium.fontSize,
          height: medium.hpe.heading.medium.lineHeight,
        },
      },
      6: {
        font: {
          weight: medium.hpe.heading.xxsmall.fontWeight,
        },
        small: {
          size: medium.hpe.heading.xxsmall.fontSize,
          height: medium.hpe.heading.xxsmall.lineHeight,
        },
        medium: {
          size: medium.hpe.heading.xxsmall.fontSize,
          height: medium.hpe.heading.xxsmall.lineHeight,
        },
        large: {
          size: medium.hpe.heading.small.fontSize,
          height: medium.hpe.heading.small.lineHeight,
        },
        xlarge: {
          size: medium.hpe.heading.medium.fontSize,
          height: medium.hpe.heading.medium.lineHeight,
        },
      },
    },
    // This block applies size-specific weights to headings to ensure
    // that as heading sizes get small, the weight increases and as they
    // get large, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support level and size-specific weights.
    extend: ({ level, size }) => {
      let fontWeight = '';
      if (level === 3 && size === 'small') {
        fontWeight = `font-weight: ${medium.hpe.heading.small.fontWeight};`;
        // undefined necessary so an h4 without size prop explicitly defined
        // still renders as weight 600
      } else if (level === 4 && ['small', 'medium', undefined].includes(size)) {
        fontWeight = `font-weight: ${medium.hpe.heading.small.fontWeight};`;
      } else if (level === 5 && size === 'xlarge') {
        fontWeight = `font-weight: ${medium.hpe.heading.small.fontWeight};`;
      }
      return fontWeight;
    },
  },
  icon: {
    disableScaleDown: true,
    matchSize: true,
    size: {
      xsmall: medium.hpe.size.icon.xsmall,
      small: medium.hpe.size.icon.small,
      medium: medium.hpe.size.icon.medium,
      large: medium.hpe.size.icon.large,
      xlarge: medium.hpe.size.icon.xlarge,
      xxlarge: medium.hpe.size.icon.xxlarge,
    },
  },
  layer: {
    background: 'background-floating',
    border: {
      radius: 'small',
      intelligentRounding: true,
    },
    container: {
      elevation: 'large',
    },
    overlay: {
      background: 'background-layer-overlay',
    },
    /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
     * at a z-index of 101. This adjustment allows for Layer modals and side-drawers
     * to sit atop the Global header. */
    zIndex: '110', // TO DO no token
  },
  list: {
    container: {
      // any box props
      gap: 'xsmall',
      // extend: undefined,
    },
    item: {
      border: undefined,
      disabled: {
        color: 'text-disabled',
        cursor: 'default',
      },
      pinned: {
        background: 'background-active',
        icon: {
          pad: mediumIconOnlyPad,
        },
      },
    },
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
  menu: {
    drop: {
      align: {
        top: 'bottom',
        left: 'left',
      },
    },
    group: {
      container: {
        pad: {
          vertical: components.hpe.menu.medium.group.container.paddingY,
        },
      },
      separator: {
        color: components.hpe.menu.group.separator.background,
        size: components.hpe.menu.medium.group.separator.height,
        pad: 'none', // TO DO no token
      },
    },
    icons: {
      color: components.hpe.menu.item.enabled.iconColor,
      down: Down,
    },
    item: {
      pad: {
        horizontal: components.hpe.menu.medium.item.paddingX,
        vertical: components.hpe.menu.medium.item.paddingY,
      },
    },
  },
  nameValuePair: {
    name: {
      color: 'text-strong',
      weight: global.hpe.fontWeight.medium,
    },
  },
  notification: {
    close: {
      icon: Close,
    },
    container: {
      round: 'xsmall',
    },
    direction: 'column',
    global: {
      direction: 'row',
      container: {
        round: 'none',
      },
    },
    message: {
      color: 'text',
    },
    title: {
      color: 'text-strong',
      weight: global.hpe.fontWeight.medium,
    },
    critical: {
      background: 'background-critical',
      message: {
        color: 'text-onCritical-default',
      },
      title: {
        color: 'text-onCritical-strong',
      },
      global: {
        background: 'background-critical',
        message: {
          color: 'text-onCritical-default',
        },
        title: {
          color: 'text-onCritical-strong',
        },
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text',
        },
        title: {
          color: 'text-strong',
        },
      },
    },
    warning: {
      background: 'background-warning',
      message: {
        color: 'text-onWarning-default',
      },
      title: {
        color: 'text-onWarning-strong',
      },
      global: {
        background: 'background-warning',
        message: {
          color: 'text-onWarning-default',
        },
        title: {
          color: 'text-onWarning-strong',
        },
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text',
        },
        title: {
          color: 'text-strong',
        },
      },
    },
    normal: {
      background: 'background-ok',
      message: {
        color: 'text-onOk-default',
      },
      title: {
        color: 'text-onOk-strong',
      },
      global: {
        background: 'background-ok',
        message: {
          color: 'text-onOk-default',
        },
        title: {
          color: 'text-onOk-strong',
        },
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text',
        },
        title: {
          color: 'text-strong',
        },
      },
    },
    unknown: {
      background: 'background-unknown',
      message: {
        color: 'text-onUnknown-default',
      },
      title: {
        color: 'text-onUnknown-strong',
      },
      global: {
        background: 'background-unknown',
        message: {
          color: 'text-onUnknown-default',
        },
        title: {
          color: 'text-onUnknown-strong',
        },
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text',
        },
        title: {
          color: 'text-strong',
        },
      },
    },
    info: {
      background: 'background-info',
      message: {
        color: 'text-onInfo-default',
      },
      title: {
        color: 'text-onInfo-strong',
      },
      global: {
        background: 'background-info',
        message: {
          color: 'text-onInfo-default',
        },
        title: {
          color: 'text-onInfo-strong',
        },
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text',
        },
        title: {
          color: 'text-strong',
        },
      },
    },
    undefined: {
      background: 'background-unknown',
      message: {
        color: 'text-onUnknown-default',
      },
      title: {
        color: 'text-onUnknown-strong',
      },
      global: {
        background: 'background-ok',
        message: {
          color: 'text-onUnknown-default',
        },
        title: {
          color: 'text-onUnknown-strong',
        },
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text',
        },
        title: {
          color: 'text-strong',
        },
      },
    },
  },
  page: {
    wide: {
      width: {
        min: '336px', // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: 'xxlarge',
      },
      xsmall: {
        pad: { horizontal: 'large' },
      },
      xlarge: {
        pad: { horizontal: 'large' },
      },
    },
    narrow: {
      width: {
        min: '336px', // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: 'large',
      },
      xsmall: {
        pad: { horizontal: 'large' },
      },
      xlarge: {
        pad: { horizontal: 'large' },
      },
    },
    full: {
      width: {
        min: '336px', // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: '100%',
      },
      xsmall: {
        pad: { horizontal: 'large' },
      },
      xlarge: {
        pad: { horizontal: 'large' },
      },
    },
  },
  pageHeader: {
    responsive: {
      breakpoints: ['xsmall', 'small'],
    },
    // title: {
    //   size: undefined,
    // },
    subtitle: {
      size: 'large',
    },
    xsmall: {
      areas: [
        ['parent', 'parent'],
        ['title', 'actions'],
        ['subtitle', 'actions'],
      ],
      columns: [['small', 'flex'], 'auto'],
      rows: ['auto', 'auto', 'auto'],
      gap: { row: 'xsmall', column: 'medium' },
    },
    xlarge: {
      areas: [
        ['parent', 'parent'],
        ['title', 'actions'],
        ['subtitle', 'actions'],
      ],
      columns: [['medium', 'large'], 'auto'],
      rows: ['auto', 'auto', 'auto'],
      gap: { row: 'xsmall', column: 'large' },
    },
  },
  pagination: {
    button: {
      color: components.hpe.button.default.enabled.textColor,
      border: {
        radius: components.hpe.button.medium.default.borderRadius,
      },
      font: {
        weight: components.hpe.button.default.enabled.fontWeight,
      },
      active: {
        background: components.hpe.button.default.selected.enabled.background,
        border: {
          radius: components.hpe.button.medium.default.borderRadius,
        },
        color: components.hpe.button.default.selected.enabled.textColor,
        font: {
          weight: components.hpe.button.default.selected.enabled.fontWeight,
        },
      },
      hover: {
        background: components.hpe.button.default.hover.background,
        border: {
          radius: components.hpe.button.medium.default.borderRadius,
        },
        color: components.hpe.button.default.hover.textColor,
        font: {
          weight: components.hpe.button.default.hover.fontWeight,
        },
      },
      disabled: {
        background: components.hpe.button.default.disabled.background,
        border: {
          radius: components.hpe.button.medium.default.borderRadius,
        },
        color: components.hpe.button.default.disabled.textColor,
        font: {
          weight: components.hpe.button.default.disabled.fontWeight,
        },
      },
      size: {
        small: {
          border: {
            radius: components.hpe.button.small.default.borderRadius,
            width:
              dimensions.borderSize[
                components.hpe.button.small.default.borderWidth
              ] || components.hpe.button.small.default.borderWidth,
          },
          pad: {
            vertical: '4px',
            horizontal: '4px',
          },
          font: {
            size: components.hpe.element?.small.fontSize,
            height: components.hpe.element?.small.lineHeight,
          },
          height: components.hpe.element?.small.minHeight,
          width: components.hpe.element?.small.minHeight,
        },
        medium: {
          border: {
            radius: components.hpe.button.medium.default.borderRadius,
            width:
              dimensions.borderSize[
                components.hpe.button.medium.default.borderWidth
              ] || components.hpe.button.medium.default.borderWidth,
          },
          pad: {
            vertical: '4px',
            horizontal: '4px',
          },
          font: {
            size: components.hpe.element?.medium.fontSize,
            height: components.hpe.element?.medium.lineHeight,
          },
          height: components.hpe.element?.medium.minHeight,
          width: components.hpe.element?.medium.minHeight,
        },
        large: {
          border: {
            radius: components.hpe.button.large.default.borderRadius,
            width:
              dimensions.borderSize[
                components.hpe.button.large.default.borderWidth
              ] || components.hpe.button.large.default.borderWidth,
          },
          pad: {
            vertical: '4px',
            horizontal: '4px',
          },
          font: {
            size: components.hpe.element?.large.fontSize,
            height: components.hpe.element?.large.lineHeight,
          },
          height: components.hpe.element?.large.minHeight,
          width: components.hpe.element?.large.minHeight,
        },
      },
    },
  },
  paragraph: {
    // TO DO this is enabling more than xxlarge
    ...paragraphTheme,
    // This block applies size-specific weights to paragraph to ensure
    // that as paragraph sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: ({ size }) => `
      ${
        ['xxlarge'].includes(size)
          ? `font-weight: ${medium.hpe.text[size].fontWeight};`
          : ''
      };
    `,
  },
  radioButton: {
    border: {
      color: components.hpe.radioButton.control.enabled.borderColor,
      width: components.hpe.radioButton.medium.control.borderWidth, // TO DO want this narrower when not checked
    },
    color: components.hpe.radioButton.control.selected.enabled.borderColor,
    container: {
      extend: ({ theme }) => `
      width: auto;
      padding-inline: ${
        components.hpe.formField.medium.input.group.item.paddingX
      };
      &:has(input[checked]) {
        background: ${
          // TO DO how to only do in FormField
          theme.global.colors['background-selected-weak-enabled'][
            theme.dark ? 'dark' : 'light'
          ]
        };
      }
    `,
    },
    extend: () => `
      padding-block: ${components.hpe.formField.medium.input.group.item.paddingY};
    `,
    gap: components.hpe.radioButton.medium.gapX,
    hover: {
      background: {
        color: components.hpe.formField.input.group.item.hover.background,
      },
      border: {
        color: components.hpe.radioButton.control.hover.borderColor,
      },
    },
    size: components.hpe.radioButton.medium.control.height,
    font: {
      weight: components.hpe.radioButton.medium.label.fontWeight,
    },
    icons: {
      circle: () => (
        <Blank
          color={components.hpe.radioButton.control.selected.enabled.iconColor}
        >
          <circle cx="12" cy="12" r="6" />
        </Blank>
      ),
    },
  },
  radioButtonGroup: {
    container: {
      gap: 'none', // TO DO token?
      margin: {
        vertical:
          components.hpe.formField.medium.input.group.container.paddingY,
      },
    },
  },
  rangeInput: {
    thumb: {
      color: 'background-primary-default',
    },
    track: {
      lower: {
        color: 'background-primary-default',
      },
      upper: {
        color: 'border',
      },
    },
  },
  select: {
    control: {
      extend: ({ disabled }) => css`
        ${disabled &&
        `
        opacity: 0.3;
        input {
          cursor: default;
        }`}
      `,
    },
    emptySearchMessage: {
      container: {
        pad: option.pad,
      },
    },
    icons: {
      color: 'icon',
      down: Down,
      margin: {
        left: 'small',
        // setting right margin to 12px because on small
        // screens, Select responsive padding sizes down
        // which brings the icon too tight with edge of
        // control.
        right: '12px',
      },
      up: Up,
    },
    options: undefined,
  },
  spinner: {
    container: {
      pad: 'none',
      color: 'background-primary-default',
      border: [
        { color: 'border-weak', side: 'all', size: 'medium' },
        { color: 'border-weak', side: 'right', size: 'medium' },
        { color: 'border-weak', side: 'top', size: 'medium' },
        { color: 'border-weak', side: 'left', size: 'medium' },
      ],
    },
    size: {
      xsmall: components.hpe.element?.xsmall.minHeight,
      small: components.hpe.element?.small.minHeight,
      medium: components.hpe.element?.medium.minHeight,
      large: components.hpe.element?.large.minHeight,
      xlarge: components.hpe.element?.xlarge.minHeight,
    },
  },
  starRating: {
    color: 'background-selected-strong-enabled',
  },
  tab: {
    color: 'text',
    active: {
      background: 'background-selected-strong-enabled',
      color: 'text-onSelectedStrong',
      weight: 500,
    },
    hover: {
      background: 'background-hover',
      color: 'text',
    },
    border: {
      side: 'all',
      color: 'transparent',
      size:
        dimensions[components.hpe.element?.medium.borderWidth] ||
        components.hpe.element?.medium.borderWidth,
      active: {
        color: 'transparent',
      },
      disabled: {
        color: undefined,
      },
      hover: {
        color: undefined,
      },
    },
    disabled: {
      background: 'background-disabled',
      color: 'text-disabled',
    },
    pad: {
      bottom: components.hpe.element?.medium.paddingY,
      top: components.hpe.element?.medium.paddingY,
      horizontal: components.hpe.element?.medium?.paddingX?.wide,
    },
    margin: {
      vertical: 'none',
      horizontal: 'none',
    },
    extend: ({ theme }) => `border-radius: ${theme.global.edgeSize.xsmall};`,
  },
  tabs: {
    gap: 'small',
    header: {
      border: undefined,
      // TO DO these selectors could be improved on in future grommet theme enhancements
      extend: ({ theme }) => `
        border-radius: ${theme.global.edgeSize.xsmall}; 
        & button[aria-selected="true"]:hover > div {
          background: ${
            theme.global.colors['background-selected-strong-hover'][
              theme.dark ? 'dark' : 'light'
            ]
          };
          color: ${
            theme.global.colors['text-onSelectedStrong'][
              theme.dark ? 'dark' : 'light'
            ]
          };
        }
      `,
    },
    step: {
      xsmall: 1,
      xlarge: 3,
    },
  },
  table: {
    header: {
      extend: `
        > div { 
          height: 100%;
          justify-content: center;
        }
        // align onSelect checkbox to center of header cell
        label { 
          justify-content: center;
        }
      `,
    },
    body: {
      pad: {
        top: components.hpe.dataCell.paddingTop,
        bottom: components.hpe.dataCell.paddingBottom,
        horizontal: components.hpe.dataCell.paddingX,
      },
      border: {
        side: 'bottom', // TO DO this causes issues on the last row with the footer border
        color: components.hpe.dataCell.enabled.borderColor,
      },
      extend: ({ theme }) =>
        `
          &:hover {
            button {
              background: ${
                theme.global.colors['background-hover'][
                  theme.dark ? 'dark' : 'light'
                ]
              };
            }
          }
        `,
    },
    row: {
      hover: {
        background: 'background-hover',
      },
    },
    footer: {
      extend: `
        font-weight: ${MISSING.weight};
      `,
    },
  },
  tag: {
    border: {
      color: 'border-weak',
    },
    icons: {
      remove: Close,
    },
    pad: {
      horizontal: components.hpe.element?.medium?.paddingX?.default,
      vertical: components.hpe.element?.medium.paddingY,
    },
    remove: {
      kind: 'default',
    },
    value: {
      weight: global.hpe.fontWeight.medium,
    },
    round: 'xsmall',
    size: {
      xsmall: {
        icon: undefined,
        pad: {
          vertical: components.hpe.element?.small.paddingY,
          horizontal: components.hpe.element?.small?.paddingX?.default,
        },
        remove: {
          size: 'xsmall',
          margin: {
            right: 'none',
            vertical: '-1px', // account for border
          },
        },
      },
      small: {
        icon: undefined,
        pad: {
          vertical: components.hpe.element?.small.paddingY,
          horizontal: components.hpe.element?.small?.paddingX?.default,
        },
        remove: {
          size: 'xsmall',
          margin: {
            right: '2px',
          },
        },
      },
      // TO DO tag rounding is overriding "default" rounding, do we expect this?
      medium: {
        icon: undefined,
        pad: {
          vertical: components.hpe.element?.medium.paddingY,
          horizontal: components.hpe.element?.medium?.paddingX?.default,
        },
        remove: {
          size: 'small',
          margin: {
            right: 'xxsmall',
          },
        },
      },
      large: {
        icon: undefined,
        pad: {
          vertical: components.hpe.element?.large.paddingY,
          horizontal: components.hpe.element?.large?.paddingX?.default,
        },
        remove: {
          size: 'medium',
          margin: {
            right: 'xxsmall',
          },
        },
      },
      xlarge: {
        icon: undefined,
        pad: {
          vertical: components.hpe.element?.xlarge.paddingY,
          horizontal: components.hpe.element?.xlarge?.paddingX?.default,
        },
        remove: {
          size: 'large',
          margin: {
            right: 'xsmall',
          },
        },
      },
    },
  },
  text: textTheme,
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
  },
  tip: {
    content: {
      background: 'background-floating',
      border: {
        color: 'border-weak',
      },
      margin: 'xxsmall',
      elevation: 'small',
      pad: {
        vertical: 'none',
        horizontal: 'small',
      },
      round: components.hpe.drop.borderRadius,
    },
  },
  thumbsRating: {
    like: {
      color: 'background-selected-strong-enabled',
    },
    dislike: {
      color: 'background-selected-strong-enabled',
    },
  },
  toggleGroup: {
    button: {
      kind: 'toolbar',
    },
    container: {
      border: false,
    },
    divider: false,
  },
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24,
});
