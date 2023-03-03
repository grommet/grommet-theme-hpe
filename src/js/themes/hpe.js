// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import { css } from 'styled-components';
import { Ascending } from 'grommet-icons/icons/Ascending';
import { Blank } from 'grommet-icons/icons/Blank';
import { CircleAlert } from 'grommet-icons/icons/CircleAlert';
import { Descending } from 'grommet-icons/icons/Descending';
import { Down } from 'grommet-icons/icons/Down';
import { Next } from 'grommet-icons/icons/Next';
import { Previous } from 'grommet-icons/icons/Previous';
import { Unsorted } from 'grommet-icons/icons/Unsorted';
import { Up } from 'grommet-icons/icons/Up';
import { Hpe } from 'grommet-icons/icons/Hpe';

import { backgrounds } from './backgrounds';
import { colors } from './colors';

const baseSpacing = 24;

const isObject = (item) =>
  item && typeof item === 'object' && !Array.isArray(item);

const deepFreeze = (obj) => {
  Object.keys(obj).forEach(
    (key) => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

// necessary to apply a linear gradient for primary button background
const primaryBackground = (props) => {
  let style = '';
  if (!props.active) {
    style += !props.colorValue
      ? `background:
linear-gradient(70deg, transparent,
  ${props.theme.global.colors['green!']} 35%, transparent 70%)
  ${props.theme.global.colors['green!']};`
      : `
  color: ${
    props.theme.global.colors['text-strong'][
      props.theme.dark ? 'dark' : 'light'
    ]
  };
`;
  }
  return style;
};

// necessary to adjust the background color
// of button to darker green to expose gradient on hover
const primaryHoverBackground = (props) =>
  !props.active && !props.colorValue
    ? `background-color: ${props.theme.global.colors.green.dark};`
    : '';

export const hpe = deepFreeze({
  defaultMode: 'light',
  global: {
    backgrounds,
    breakpoints: {
      xsmall: {
        value: baseSpacing * 24, // 576
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: `${baseSpacing / 6}px`, // 4
          large: `${baseSpacing / 4}px`, // 6
          xlarge: `${baseSpacing / 2}px`, // 12
        },
        edgeSize: {
          none: '0px',
          hair: '1px', // for Chart
          xxsmall: '2px',
          xsmall: `${baseSpacing / 8}px`, // 3
          small: `${baseSpacing / 4}px`, // 6
          medium: `${baseSpacing / 2}px`, // 12
          large: `${baseSpacing}px`, // 24
          xlarge: `${baseSpacing * 2}px`, // 48
        },
        size: {
          xxsmall: `${baseSpacing}px`, // 24
          xsmall: `${baseSpacing * 2}px`, // 48
          small: `${baseSpacing * 4}px`, // 96
          medium: `${baseSpacing * 8}px`, // 192
          large: `${baseSpacing * 16}px`, // 384
          xlarge: `${baseSpacing * 32}px`, // 768
          full: '100%',
        },
      },
      small: {
        value: baseSpacing * 32, // 768
      },
      medium: {
        value: baseSpacing * 45, // 1080
      },
      large: {
        value: baseSpacing * 60, // 1440
      },
      xlarge: {}, // anything larger than 1440,
    },
    colors,
    control: {
      border: {
        radius: '6px',
      },
    },
    input: {
      font: {
        height: 'inherit',
        weight: 500,
      },
      padding: {
        horizontal: '11px', // equivalent to 'small' when combined with 1px border
        vertical: '5px', // equivalent to 'xsmall' when combined with 1px border
      },
      extend: `
        &::-webkit-input-placeholder {
          font-weight: 400;
        }
      
        &::-moz-placeholder {
          font-weight: 400;
        }
      
        &:-ms-input-placeholder {
          font-weight: 400;
        }
      `,
    },
    font: {
      family: "'Metric', Arial, sans-serif",
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
    },
    focus: {
      border: undefined,
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    drop: {
      background: 'background-front',
      border: {
        radius: '4px',
      },
      margin: 'xsmall',
      intelligentMargin: true,
      shadowSize: 'medium',
      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment brings Drop in alignment with Layer
       * which needs an elevated z-index to sit atop the Global header. */
      zIndex: '110',
    },
    elevation: {
      // Elevation values were derived from this Figma file.
      // https://www.figma.com/file/eZYR3dtWdb9U90QvJ7p3T9/HPE-Color-Styles?node-id=405%3A25
      // Naming in Figma file is strong/default/weak vs. Grommet t-shirt sizing.
      // As defined here, default is currently mapping to medium.
      light: {
        small: '0px 2px 4px #0000001F;',
        medium: '0px 6px 12px #0000001F;',
        large: '0px 12px 24px #0000003D;',
      },
      dark: {
        small: '0px 2px 4px #0000003D;',
        medium: '0px 6px 12px #0000005C;',
        large: '0px 12px 24px #0000007A;',
      },
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
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
      level: 3,
      margin: { vertical: 'medium', horizontal: 'xsmall' },
    },
    hover: {
      background: 'background-contrast',
      heading: {
        color: undefined,
      },
    },
    border: undefined,
    icons: {
      color: 'text',
    },
  },
  anchor: {
    color: 'text-strong',
    textDecoration: 'underline',
    fontWeight: 700,
    gap: 'xsmall',
    hover: {
      textDecoration: 'underline',
    },
    size: {
      large: {
        color: 'brand',
        textDecoration: 'none',
      },
      xlarge: {
        color: 'brand',
        textDecoration: 'none',
      },
      xxlarge: {
        color: 'brand',
        textDecoration: 'none',
      },
      '3xl': {
        color: 'brand',
        textDecoration: 'none',
      },
      '4xl': {
        color: 'brand',
        textDecoration: 'none',
      },
      '5xl': {
        color: 'brand',
        textDecoration: 'none',
      },
      '6xl': {
        color: 'brand',
        textDecoration: 'none',
      },
    },
  },
  avatar: {
    size: {
      large: `${baseSpacing * 4}px`, // 96px
    },
    text: {
      size: {
        large: 'xxlarge', // 36px
      },
    },
  },
  button: {
    badge: {
      size: {
        medium: '18px',
      },
      text: {
        size: {
          medium: 'xsmall',
        },
      },
    },
    'cta-primary': {
      background: { color: 'brand' },
      border: {
        radius: '2em',
      },
      color: 'text-primary-button',
      font: { weight: 'bold' },
      icon: <Hpe />,
      reverse: true,
      extend: (props) => primaryBackground(props),
    },
    'cta-alternate': {
      background: 'background-cta-alternate',
      border: {
        radius: '2em',
      },
      color: 'text-strong',
      font: {
        weight: 'bold',
      },
      icon: <Hpe color="brand" />,
      reverse: true,
    },
    default: {
      color: 'text-strong',
      border: {
        radius: '2em',
      },
      font: {
        weight: 700,
      },
    },
    gap: 'xsmall',
    primary: {
      background: {
        color: 'brand',
      },
      border: {
        radius: '2em',
      },
      color: 'text-primary-button',
      font: {
        weight: 700,
      },
      extend: (props) => primaryBackground(props),
    },
    secondary: {
      border: {
        color: 'brand',
        radius: '2em',
        width: '2px',
      },
      color: 'text-strong',
      font: {
        weight: 700,
      },
    },
    toolbar: {
      border: {
        radius: '6px',
      },
      color: 'text-strong',
      font: {
        weight: 700,
      },
    },
    option: {
      color: 'text',
      border: {
        radius: '0px',
      },
      font: {
        weight: 500,
      },
    },
    active: {
      background: {
        color: 'background-contrast',
      },
      color: 'text-strong',
      secondary: {
        border: {
          color: 'transparent',
        },
      },
      option: {
        background: {
          color: 'active-background',
        },
      },
    },
    selected: {
      option: {
        background: 'selected-background',
        color: 'selected-text',
        font: {
          weight: 700,
        },
      },
    },
    hover: {
      'cta-primary': {
        extend: (props) => primaryHoverBackground(props),
      },
      'cta-alternate': {
        extend: ({ active, colorValue, theme }) => {
          let color;
          if (!colorValue && !active) {
            if (theme.dark) {
              color = 'rgba(0, 0, 0, 0.2)'; // TBD
            } else color = 'rgba(0, 0, 0, 0.2)'; // TBD
          }

          const style = `inset 0 0 100px 100px ${color}`;
          return `-moz-box-shadow: ${style};
            -webkit-box-shadow: ${style};
            box-shadow: ${style};`;
        },
      },
      default: {
        background: {
          color: 'background-contrast',
        },
        color: undefined,
      },
      option: {
        background: 'active-background',
        color: 'active-text',
      },
      primary: {
        extend: (props) => primaryHoverBackground(props),
      },
      secondary: {
        border: {
          width: '3px',
        },
      },
      toolbar: {
        background: {
          color: 'background-contrast',
        },
        color: undefined,
      },
    },
    color: 'text-strong',
    border: {
      radius: '6px',
    },
    padding: {
      vertical: '4px',
      horizontal: '22px',
    },
    size: {
      small: {
        border: {
          radius: '6px',
        },
        pad: {
          vertical: '6px',
          horizontal: '18px',
        },
        iconOnly: {
          pad: '9px',
        },
        toolbar: {
          pad: {
            vertical: '4px',
            horizontal: '8px',
          },
        },
      },
      medium: {
        border: {
          radius: '6px',
        },
        pad: {
          vertical: '6px',
          horizontal: '18px',
        },
        iconOnly: {
          pad: '9px',
        },
        toolbar: {
          border: {
            radius: '6px',
          },
          pad: {
            vertical: '6px',
            horizontal: '12px',
          },
        },
      },
      large: {
        border: {
          radius: '8px',
        },
        pad: {
          vertical: '8px',
          horizontal: '24px',
        },
        iconOnly: {
          pad: '12px',
        },
        toolbar: {
          pad: {
            vertical: '8px',
            horizontal: '16px',
          },
        },
      },
      xlarge: {
        border: {
          radius: '2em',
        },
        pad: {
          vertical: '18px',
          horizontal: '30px',
        },
        iconOnly: {
          pad: '21px',
        },
      },
    },
    extend: ({ sizeProp }) => {
      // necessary so primary label is accessible on HPE green background
      const fontSize = '19px';
      const lineHeight = '24px';
      let style = '';
      // keep reasonable click target for small button
      if (sizeProp === 'small') {
        style += `line-height: ${lineHeight};`;
      }
      if (sizeProp === 'medium' || sizeProp === undefined) {
        style += `font-size: ${fontSize};
        line-height: ${lineHeight};`;
      }
      return style;
    },
  },
  calendar: {
    // ensure color is #FFFFFF to meet color contrast requirement on HPE green
    day: {
      extend: ({ isSelected, theme }) =>
        isSelected && `color: ${theme.global.colors['text-primary-button']};`,
    },
    icons: {
      next: Next,
      previous: Previous,
    },
    small: {
      fontSize: '13.6px',
      lineHeight: 1.375,
      daySize: '27.43px',
      title: {
        size: 'medium',
        weight: 500,
        color: 'text-strong',
      },
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
      title: {
        size: 'large',
        weight: 500,
        color: 'text-strong',
      },
    },
    large: {
      fontSize: '31.2px',
      lineHeight: 1.11,
      daySize: '109.71px',
      title: {
        size: 'xlarge',
        weight: 500,
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
        color: 'border-strong',
      },
      background: {
        color: 'background-contrast',
      },
      // HPE Design System guidance states that pad="none" should be applied on CheckBox
      // when its used outside of a FormField. We will apply this hover treatment in
      // those instances.
      extend: ({ disabled, pad, theme }) => `
      ${
        !disabled &&
        pad === 'none' &&
        `border: 2px solid ${
          theme.global.colors['border-strong'][theme.dark ? 'dark' : 'light']
        };`
      }
    `,
    },
    color: 'background',
    border: {
      color: 'border',
      width: '1px',
    },
    check: {
      radius: '4px',
      extend: ({ theme, checked, indeterminate }) => `
      background-color: ${
        checked || indeterminate
          ? theme.global.colors['green!']
          : theme.global.colors.background[theme.dark ? 'dark' : 'light']
      };
      ${(checked || indeterminate) && 'border: none;'}
        `,
    },
    icon: {
      extend: ({ theme }) => `stroke-width: 2px;
      stroke: ${theme.global.colors['text-primary-button']}`,
    },
    gap: 'small',
    label: {
      align: 'start',
    },
    pad: {
      vertical: 'xsmall',
      horizontal: 'small',
    },
    toggle: {
      background: 'background',
      color: 'background',
      knob: {
        extend: ({ theme }) => `
           box-shadow: ${
             theme.global.elevation[theme.dark ? 'dark' : 'light'].small
           };
           border: 1px solid ${
             theme.global.colors.border[theme.dark ? 'dark' : 'light']
           }
        `,
      },
      extend: ({ checked, theme }) => `
        ${checked && `background-color: ${theme.global.colors['green!']};`}
      `,
    },
    // HPE Design System guidance states that pad="none" should be applied on CheckBox
    // when its used outside of a FormField. We will apply this hover treatment in
    // those instances.
    extend: ({ disabled, pad }) => `
    ${
      !disabled &&
      pad === 'none' &&
      `:hover {
      background-color: unset;
    }`
    }
    font-weight: 500;
    width: auto;
  };
  `,
  },
  checkBoxGroup: {
    container: {
      gap: 'none',
      margin: {
        vertical: 'xsmall',
      },
    },
  },
  dataTable: {
    body: {
      extend: ({ theme }) => `
        /* Margin and padding allow room for focus on table body */
        margin: ${theme.global.edgeSize.xxsmall} 0px;
        padding: 0px ${theme.global.edgeSize.xxsmall};
      `,
    },
    header: {
      border: { side: 'bottom' },
      color: 'text-strong',
      extend: ({ column, sort, sortable, theme }) =>
        `
          ${
            sort &&
            sort.property === column &&
            `
            background: ${
              theme.global.colors['background-contrast'][
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
              :hover {
                svg {
                  opacity: 1;
                }
              }
            `
          };
        `,
      font: {
        weight: 500,
      },
      gap: 'none',
      hover: {
        background: {
          color: 'background-contrast',
        },
      },
      pad: { horizontal: 'small', vertical: 'xsmall' },
    },
    icons: {
      ascending: Ascending,
      descending: Descending,
      sortable: Unsorted,
    },
    pinned: {
      header: {
        extend: 'backdrop-filter: blur(12px);',
      },
      body: {
        extend: 'backdrop-filter: blur(12px);',
      },
      footer: {
        extend: 'backdrop-filter: blur(12px);',
      },
    },
    primary: {
      weight: 400,
      color: 'text-strong',
    },
    resize: {
      hover: {
        border: {
          color: 'border-strong',
          size: 'small',
        },
      },
    },
  },
  dateInput: {
    container: {
      round: 'xsmall',
    },
    icon: {
      size: 'small',
    },
  },
  fileInput: {
    border: {
      size: 'xsmall',
    },
    button: {
      border: {
        radius: '24px',
      },
      pad: {
        vertical: '6px',
        horizontal: '12px',
      },
      color: 'text-strong',
      font: {
        weight: 'bold',
      },
      hover: {
        background: 'background-contrast',
      },
    },
    dragOver: {
      background: 'background-contrast',
      border: 'none',
    },
    hover: {
      border: {
        color: 'border',
      },
    },
    message: {
      color: 'placeholder',
    },
    pad: { horizontal: 'xsmall' },
    extend: 'border-radius: 4px;',
  },
  formField: {
    content: {
      margin: { vertical: 'xsmall' },
      pad: undefined,
    },
    border: {
      error: {
        color: 'border-strong',
      },
      color: 'border',
      side: 'all',
    },
    disabled: {
      background: {
        color: undefined,
      },
      border: {
        color: 'border-weak',
      },
      label: {
        color: 'text-xweak',
      },
    },
    error: {
      background: {
        color: 'validation-critical',
      },
      container: {
        gap: 'xsmall',
      },
      icon: <CircleAlert size="small" style={{ marginTop: '4px' }} />,
      size: 'xsmall',
      color: 'text',
      margin: {
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none',
      },
    },
    focus: {
      border: {
        color: 'border-strong',
      },
    },
    help: {
      size: 'xsmall',
      color: 'text',
      margin: 'none',
    },
    info: {
      size: 'xsmall',
      color: 'text',
      margin: {
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none',
      },
    },
    label: {
      size: 'xsmall',
      color: 'text',
      margin: {
        bottom: 'none',
        top: 'xsmall',
        horizontal: 'none',
      },
      requiredIndicator: true,
      weight: 500,
    },
    margin: {
      bottom: 'none',
    },
    round: '6px',
    survey: {
      label: {
        margin: { bottom: 'none' },
      },
    },
  },
  heading: {
    color: 'text-strong',
    weight: 500,
    level: {
      1: {
        font: {
          weight: 400,
        },
        small: {
          size: '24px',
          height: '24px',
        },
        medium: {
          size: '36px',
          height: '36px',
        },
        large: {
          size: '48px',
          height: '48px',
        },
        xlarge: {
          size: '60px',
          height: '60px',
        },
      },
      2: {
        small: {
          size: '20px',
          height: '20px',
        },
        medium: {
          size: '24px',
          height: '24px',
        },
        large: {
          size: '36px',
          height: '36px',
        },
        xlarge: {
          size: '48px',
          height: '48px',
        },
      },
      3: {
        font: {
          weight: 500,
        },
        small: {
          size: '16px',
          height: '16px',
        },
        medium: {
          size: '20px',
          height: '20px',
        },
        large: {
          size: '24px',
          height: '24px',
        },
        xlarge: {
          size: '36px',
          height: '36px',
        },
      },
      4: {
        font: {
          weight: 500,
        },
        small: {
          size: '12px',
          height: '12px',
        },
        medium: {
          size: '16px',
          height: '16px',
        },
        large: {
          size: '20px',
          height: '20px',
        },
        xlarge: {
          size: '24px',
          height: '24px',
        },
      },
      5: {
        font: {
          weight: 600,
        },
        small: {
          size: '12px',
          height: '12px',
        },
        medium: {
          size: '12px',
          height: '12px',
        },
        large: {
          size: '16px',
          height: '16px',
        },
        xlarge: {
          size: '20px',
          height: '20px',
        },
      },
      6: {
        font: {
          weight: 600,
        },
        small: {
          size: '12px',
          height: '12px',
        },
        medium: {
          size: '12px',
          height: '12px',
        },
        large: {
          size: '12px',
          height: '12px',
        },
        xlarge: {
          size: '16px',
          height: '16px',
        },
      },
    },
    // This block applies size-specific weights to headings to ensure
    // that as heading sizes get small, the weight increases and as they
    // get large, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support level and size specific weights.
    extend: ({ level, size }) => {
      let fontWeight = '';
      if (level === 1 && size === 'small') {
        fontWeight = 'font-weight: 500;';
      } else if (level === 2 && ['large', 'xlarge'].includes(size)) {
        fontWeight = 'font-weight: 400;';
      } else if (level === 3 && size === 'small') {
        fontWeight = 'font-weight: 600;';
      } else if (level === 4 && ['small', 'medium'].includes(size)) {
        fontWeight = 'font-weight: 600;';
      } else if (level === 5 && size === 'xlarge') {
        fontWeight = 'font-weight: 500;';
      }
      return fontWeight;
    },
  },
  icon: {
    disableScaleDown: true,
    matchSize: true,
    size: {
      small: '16px',
      medium: '18px',
      large: '24px',
      xlarge: '30px',
      xxlarge: '36px',
    },
  },
  layer: {
    background: 'background',
    border: {
      radius: 'small',
      intelligentRounding: true,
    },
    container: {
      elevation: 'large',
    },
    overlay: {
      background: 'background-layer-overlay',
      backdropFilter: `blur(12px)`,
    },
    /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
     * at a z-index of 101. This adjustment allows for Layer modals and side-drawers
     * to sit atop the Global header. */
    zIndex: '110',
  },
  list: {
    item: {
      border: undefined,
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
        pad: 'none',
      },
      separator: {
        color: 'border',
        pad: 'none',
      },
    },
    icons: {
      color: 'text-strong',
      down: Down,
    },
  },
  nameValuePair: {
    name: {
      color: 'text-strong',
      weight: 500,
    },
  },
  notification: {
    actions: {
      color: { light: 'text', dark: 'text-strong' },
    },
    direction: 'row',
    container: {
      round: 'xsmall',
    },
    iconContainer: {
      pad: {
        top: 'xxsmall',
      },
    },
    global: {
      container: {
        round: 'none',
      },
    },
    message: {
      color: { dark: 'text-strong' },
    },
    title: {
      // any text props
      color: 'text-strong',
      weight: 500,
    },
    critical: {
      background: 'validation-critical',
      global: {
        background: 'validation-critical',
      },
      toast: {
        background: 'background-front',
      },
    },
    warning: {
      background: 'validation-warning',
      global: {
        background: 'validation-warning',
      },
      toast: {
        background: 'background-front',
      },
    },
    normal: {
      background: 'validation-ok',
      global: {
        background: 'validation-ok',
      },
      toast: {
        background: 'background-front',
      },
    },
    unknown: {
      background: 'background-contrast',
      global: {
        background: 'background-contrast',
      },
      toast: {
        background: 'background-front',
      },
    },
    info: {
      background: 'background-contrast',
      global: {
        background: 'background-contrast',
      },
      toast: {
        background: 'background-front',
      },
    },
    undefined: {
      background: 'background-contrast',
      global: {
        background: 'background-contrast',
      },
      toast: {
        background: 'background-front',
      },
    },
    toast: {
      direction: 'column',
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
    subtitle: {
      size: 'xlarge',
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
      border: {
        radius: '2em',
      },
      font: {
        weight: 700,
      },
      active: {
        border: {
          radius: '2em',
        },
        font: {
          weight: 700,
        },
      },
      disabled: {
        color: 'text-xweak',
      },
    },
  },
  paragraph: {
    xsmall: {
      size: '14px',
      height: '16px',
      maxWidth: '30em',
    },
    small: {
      size: '16px',
      height: '18px',
      maxWidth: '30em',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '30em',
    },
    large: {
      size: '24px',
      height: '32px',
      maxWidth: '30em',
    },
    xlarge: {
      size: '30px',
      height: '36px',
      maxWidth: '27em',
    },
    xxlarge: {
      size: '36px',
      height: '40px',
      maxWidth: '27em',
    },
    // This block applies size-specific weights to paragraph to ensure
    // that as paragraph sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: ({ size }) => `
      ${['xlarge', 'xxlarge'].includes(size) ? 'font-weight: 300;' : ''};
    `,
  },
  radioButton: {
    border: {
      color: 'border',
      width: 'xsmall',
    },
    check: {
      color: 'selected-background',
      background: {
        color: 'background-front',
      },
    },
    color: 'selected-background',
    container: {
      extend: ({ theme }) => `
      font-weight: 500;
      width: auto;
      padding: ${theme.global.edgeSize.xxsmall} ${theme.global.edgeSize.xsmall};
    `,
    },
    extend: ({ theme }) => `
      padding: ${theme.global.edgeSize.xxsmall} ${theme.global.edgeSize.xsmall};
    `,
    gap: 'xsmall',
    hover: {
      background: {
        color: 'background-contrast',
      },
      border: {
        color: undefined,
      },
    },
    icons: {
      circle: () => (
        <Blank color="selected-background">
          <circle cx="12" cy="12" r="8" />
        </Blank>
      ),
    },
  },
  radioButtonGroup: {
    container: {
      gap: 'none',
      margin: {
        vertical: 'xsmall',
      },
    },
  },
  rangeInput: {
    thumb: {
      color: 'brand',
    },
    track: {
      lower: {
        color: 'brand',
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
    icons: {
      color: 'text',
      down: Down,
      up: Up,
    },
    options: undefined,
  },
  spinner: {
    container: {
      pad: 'none',
      color: 'brand',
      border: [
        { color: 'border-weak', side: 'all', size: 'medium' },
        { color: 'border-weak', side: 'right', size: 'medium' },
        { color: 'border-weak', side: 'top', size: 'medium' },
        { color: 'border-weak', side: 'left', size: 'medium' },
      ],
    },
  },
  starRating: {
    color: 'purple!',
  },
  tab: {
    color: 'text',
    active: {
      background: undefined,
      color: 'text-strong',
      weight: 'bold',
    },
    hover: {
      background: 'transparent',
      color: 'text',
    },
    border: {
      side: 'bottom',
      color: 'transparent',
      size: 'medium',
      active: {
        color: 'brand',
      },
      disabled: {
        color: undefined,
      },
      hover: {
        color: 'border-weak',
      },
    },
    disabled: {
      color: 'text-xweak',
    },
    pad: {
      // top and bottom pad need to be defined individually, specifying
      // "vertical" only applies to top
      bottom: '9px',
      top: '9px',
      // align horizontal pad with button
      horizontal: '18px',
    },
    margin: {
      // bring the overall tabs border behind invidual tab borders
      vertical: '-1px',
      horizontal: 'none',
    },
  },
  tabs: {
    header: {
      alignSelf: 'start',
      border: {
        side: 'bottom',
        size: 'xsmall',
        color: 'border-weak',
      },
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
      // space for focus indicator on sortable columns
      pad: { left: 'none', vertical: 'none', right: 'xxsmall' },
    },
    body: {
      extend: ({ theme }) =>
        `
          :hover {
            button {
              background: ${
                theme.global.colors['background-contrast'][
                  theme.dark ? 'dark' : 'light'
                ]
              }
            }
          }
        `,
    },
    row: {
      hover: {
        background: 'background-contrast',
      },
    },
    footer: {
      extend: `
        font-weight: 500;
      `,
    },
  },
  tag: {
    value: {
      weight: 500,
    },
    remove: {
      margin: {
        top: 'xxsmall',
      },
    },
  },
  text: {
    xsmall: {
      size: '14px',
      height: '16px',
    },
    small: {
      size: '16px',
      height: '20px',
    },
    medium: {
      size: '18px',
      height: '24px',
    },
    large: {
      size: '24px',
      height: '32px',
    },
    xlarge: {
      size: '30px',
      height: '36px',
    },
    xxlarge: {
      size: '36px',
      height: '40px',
    },
    '3xl': {
      size: '42px',
      height: '46px',
    },
    '4xl': {
      size: '48px',
      height: '48px',
    },
    '5xl': {
      size: '72px',
      height: '72px',
    },
    '6xl': {
      size: '72px',
      height: '72px',
    },
    // This block applies size-specific weights to text to ensure
    // that as text sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: ({ size }) => `
      ${
        ['xlarge', 'xxlarge', '3xl', '4xl', '5xl', '6xl'].includes(size)
          ? 'font-weight: 300;'
          : ''
      };
    `,
  },
  textInput: {
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
  tip: {
    content: {
      background: 'background',
      border: {
        color: 'border-weak',
      },
      margin: 'xxsmall',
      elevation: 'small',
      pad: {
        vertical: 'none',
        horizontal: 'small',
      },
      round: 'xsmall',
    },
  },
  thumbsRating: {
    like: {
      color: 'purple!',
    },
    dislike: {
      color: 'purple!',
    },
  },
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24,
});
