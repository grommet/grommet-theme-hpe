// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import { css } from 'styled-components';
import { Ascending } from 'grommet-icons/icons/Ascending';
import { Blank } from 'grommet-icons/icons/Blank';
import { CircleAlert } from 'grommet-icons/icons/CircleAlert';
import { Descending } from 'grommet-icons/icons/Descending';
import { FormDown } from 'grommet-icons/icons/FormDown';
import { FormNext } from 'grommet-icons/icons/FormNext';
import { FormPrevious } from 'grommet-icons/icons/FormPrevious';
import { FormUp } from 'grommet-icons/icons/FormUp';
import { Unsorted } from 'grommet-icons/icons/Unsorted';
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
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSThin-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSThin-Regular.woff") format('woff');
          font-weight: 100;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSLight-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSLight-Regular.woff") format('woff');
          font-weight: 300;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Regular.woff") format('woff');
          font-weight: 400;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSMedium-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSMedium-Regular.woff") format('woff');
          font-weight: 500;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSSemibold-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSSemibold-Regular.woff") format('woff');
          font-weight: 600;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Bold.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Bold.woff") format('woff');
          font-weight: 700;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSBlack-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSBlack-Regular.woff") format('woff');
          font-weight: 900;
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
    color: 'text',
    textDecoration: 'underline',
    fontWeight: 500,
    gap: 'xsmall',
    hover: {
      textDecoration: 'underline',
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
    'cta-primary': {
      background: { color: 'brand' },
      border: {
        radius: '100px',
      },
      color: 'text-primary-button',
      font: { weight: 'bold' },
      icon: <Hpe />,
      reverse: true,
    },
    'cta-alternate': {
      background: 'background-cta-alternate',
      border: {
        radius: '100px',
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
      border: undefined,
      font: {
        weight: 700,
      },
    },
    gap: 'xsmall',
    primary: {
      background: {
        color: 'brand',
      },
      border: undefined,
      color: 'text-primary-button',
      font: {
        weight: 700,
      },
      // for primary button with color, use text-strong
      // instead of text-primary-button which is hard-coded
      // to "white" specifically for HPE green.
      extend: ({ colorValue, primary, theme }) =>
        colorValue && primary
          ? `
        color: ${
          theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light']
        };
      `
          : ``,
    },
    secondary: {
      border: {
        color: 'brand',
        width: '2px',
      },
      color: 'text-strong',
      font: {
        weight: 700,
      },
    },
    toolbar: {
      border: {
        color: 'border',
        width: '1px',
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
      },
    },
    disabled: {
      background: {
        color: 'transparent',
      },
      color: 'text-xweak',
      'cta-primary': {
        border: {
          color: 'border-weak',
          width: '2px',
        },
      },
      'cta-alternate': {
        border: {
          color: 'border-weak',
          width: '2px',
        },
      },
      primary: {
        border: {
          color: 'border-weak',
          width: '2px',
        },
      },
      secondary: {
        border: {
          color: 'border-weak',
        },
      },
      opacity: 1.0,
    },
    hover: {
      'cta-primary': {
        extend: ({ active, colorValue, theme }) => {
          let color;
          if (!colorValue && !active) {
            if (theme.dark) {
              color = 'rgba(0, 0, 0, 0.2)';
            } else color = 'rgba(0, 0, 0, 0.2)'; // TBD
          }

          const style = `inset 0 0 100px 100px ${color}`;
          return `-moz-box-shadow: ${style};
            -webkit-box-shadow: ${style};
            box-shadow: ${style};`;
        },
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
      secondary: {
        border: {
          width: '3px',
        },
      },
      option: {
        background: 'active-background',
        color: 'active-text',
      },
      toolbar: {
        background: {
          color: 'background-contrast',
        },
        color: undefined,
      },
      primary: {
        extend: ({ active, colorValue, theme }) => {
          let color;
          if (!colorValue && !active) {
            if (theme.dark) {
              color = 'rgba(0, 0, 0, 0.2)';
            } else color = 'rgba(0, 0, 0, 0.2)';
          }

          const style = `inset 0 0 100px 100px ${color}`;
          return `-moz-box-shadow: ${style};
            -webkit-box-shadow: ${style};
            box-shadow: ${style};`;
        },
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
          vertical: '4px',
          horizontal: '8px',
        },
        'cta-primary': {
          pad: {
            vertical: '3px',
            horizontal: '12px',
          },
        },
        'cta-alternate': {
          pad: {
            vertical: '3px',
            horizontal: '12px',
          },
        },
      },
      medium: {
        border: {
          radius: '6px',
        },
        pad: {
          vertical: '6px',
          horizontal: '12px',
        },
        'cta-primary': {
          pad: {
            vertical: '6px',
            horizontal: '16px',
          },
        },
        'cta-alternate': {
          pad: {
            vertical: '6px',
            horizontal: '16px',
          },
        },
      },
      large: {
        border: {
          radius: '8px',
        },
        pad: {
          vertical: '8px',
          horizontal: '16px',
        },
        'cta-primary': {
          pad: {
            vertical: '8px',
            horizontal: '20px',
          },
        },
        'cta-alternate': {
          pad: {
            vertical: '8px',
            horizontal: '20px',
          },
        },
      },
      xlarge: {
        border: {
          radius: '10px',
        },
        pad: {
          vertical: '10px',
          horizontal: '20px',
        },
        'cta-primary': {
          pad: {
            vertical: '10px',
            horizontal: '28px',
          },
        },
        'cta-alternate': {
          pad: {
            vertical: '10px',
            horizontal: '28px',
          },
        },
      },
    },
    // aligning with brand central which follows slightly different interval between t-shirt sizes
    extend: ({ sizeProp }) => {
      let fontSize = '19px'; // necessary so cta-primary label is accessible on HPE green background
      let lineHeight = '24px';
      if (sizeProp === 'small') {
        fontSize = '16px';
        lineHeight = '22px';
      } else if (sizeProp === 'large') {
        fontSize = '20px';
        lineHeight = '26px';
      } else if (sizeProp === 'xlarge') {
        fontSize = '22px';
        lineHeight = '28px';
      }
      return `
      font-size: ${fontSize};
      line-height: ${lineHeight}
      `;
    },
  },
  calendar: {
    icons: {
      next: FormNext,
      previous: FormPrevious,
    },
    small: {
      fontSize: '13.6px',
      lineHeight: 1.375,
      daySize: '27.43px',
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
    },
    large: {
      fontSize: '31.2px',
      lineHeight: 1.11,
      daySize: '109.71px',
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
          ? theme.global.colors.green[theme.dark ? 'dark' : 'light']
          : theme.global.colors.background[theme.dark ? 'dark' : 'light']
      };
      ${(checked || indeterminate) && 'border: none;'}
        `,
    },
    icon: {
      extend: ({ theme }) => `stroke-width: 2px;
      stroke: ${
        theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light']
      }`,
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
        ${
          checked &&
          `background-color: ${
            theme.global.colors.green[theme.dark ? 'dark' : 'light']
          };`
        }
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
        weight: 'bold',
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
    /* Add FireFox work around until it adds support for backdrop-filter
    https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
    */
    pinned: {
      header: {
        background: { opacity: 0.95 },
        extend: 'backdrop-filter: blur(8px);',
      },
      body: {
        background: { opacity: 0.95 },
        extend: 'backdrop-filter: blur(8px);',
      },
      footer: {
        background: { opacity: 0.95 },
        extend: 'backdrop-filter: blur(8px);',
      },
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
  },
  heading: {
    color: 'text-strong',
    weight: 400,
    level: {
      1: {
        small: {
          size: '48px', // size: '36px',
          height: '48px', // height: '42px',
          maxWidth: '854px',
        },
        medium: {
          size: '72px', // size: '53px',
          height: '72px', // height: '59px',
          maxWidth: '1277px',
        },
        large: {
          size: '96px', // size: '88px',
          height: '96px', // height: '94px',
          maxWidth: '2122px',
        },
        xlarge: {
          size: '120px', // size: '124px',
          height: '120px', // height: '130px',
          maxWidth: '2966px',
        },
      },
      2: {
        small: {
          size: '36px', // size: '31px',
          height: '36px', // height: '37px',
          maxWidth: '749px',
        },
        medium: {
          size: '48px', // size: '44px',
          height: '48px', // height: '50px',
          maxWidth: '1066px',
        },
        large: {
          size: '72px', // size: '58px',
          height: '72px', // height: '64px',
          maxWidth: '1382px',
        },
        xlarge: {
          size: '96px', // size: '71px',
          height: '96px', // height: '77px',
          maxWidth: '1699px',
        },
      },
      3: {
        small: {
          // Design file call for h3 small to bump up to font-weight 500,
          // however the theme does not currently support this at the 'size'
          // level, only for at the 'level' level.
          size: '24px', // size: '27px',
          height: '24px', // height: '33px',
          maxWidth: '643px',
        },
        medium: {
          size: '36px', // size: '36px',
          height: '36px', // height: '42px',
          maxWidth: '854px',
        },
        large: {
          size: '48px', // size: '44px',
          height: '48px', // height: '50px',
          maxWidth: '1066px',
        },
        xlarge: {
          size: '72px', // size: '53px',
          height: '72px', // height: '59px',
          maxWidth: '1277px',
        },
      },
      4: {
        font: {
          weight: 500,
        },
        small: {
          size: '18px', // size: '22px',
          height: '18px', // height: '28px',
          maxWidth: '538px',
        },
        medium: {
          size: '24px', // size: '27px',
          height: '24px', // height: '33px',
          maxWidth: '643px',
        },
        // This should be a weight of 400, while all smaller sizes 500.
        large: {
          size: '36px', // size: '31px',
          height: '36px', // height: '37px',
          maxWidth: '749px',
        },
        // This should be a weight of 400, while all smaller sizes 500.
        xlarge: {
          size: '48px', // size: '36px',
          height: '48px', // height: '42px',
          maxWidth: '854px',
        },
      },
      5: {
        font: {
          weight: 500,
        },
        small: {
          size: '16px', // size: '16px',
          height: '16px', // height: '22px',
          maxWidth: '379px',
        },
        medium: {
          size: '18px', // size: '16px',
          height: '18px', // height: '22px',
          maxWidth: '379px',
        },
        large: {
          size: '24px', // size: '16px',
          height: '24px', // height: '22px',
          maxWidth: '379px',
        },
        xlarge: {
          // This should be a weight of 400, while all smaller sizes 500.
          size: '36px', // size: '16px',
          height: '36px', // height: '22px',
          maxWidth: '379px',
        },
      },
      6: {
        font: {
          weight: 500,
        },
        small: {
          size: '14px', // size: '14px',
          height: '14px', // height: '20px',
          maxWidth: '326px',
        },
        medium: {
          size: '16px', // size: '14px',
          height: '16px', // height: '20px',
          maxWidth: '326px',
        },
        large: {
          size: '18px', // size: '14px',
          height: '18px', // height: '20px',
          maxWidth: '326px',
        },
        xlarge: {
          size: '24px', // size: '14px',
          height: '24px', // height: '20px',
          maxWidth: '326px',
        },
      },
    },
  },
  icon: {
    size: {
      xxlarge: '166px',
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
      background: '#00000080',
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
    global: {
      container: {
        round: 'none',
      },
    },
    message: {
      color: { dark: 'text-strong' },
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
    actions: {
      pad: { vertical: 'xxsmall' }, // aligns button height with heading font-size instead of line-height
    },
    subtitle: {
      size: 'large',
    },
    title: {
      size: 'small',
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
      font: {
        weight: 700,
      },
      active: {
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
    small: {
      size: '16px',
      height: '20px',
      maxWidth: '379px',
    },
    medium: {
      size: '18px',
      height: '22px',
      maxWidth: '432px',
    },
    large: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '24px',
      height: '30px',
      maxWidth: '538px',
    },
    xlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '36px',
      height: '42px',
      maxWidth: '643px',
    },
    // xxlarge is not part of Chris's type exploration
    xxlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '42px',
      height: '48px',
      maxWidth: '854px',
    },
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
      color: 'green',
    },
    track: {
      lower: {
        color: 'green',
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
      down: FormDown,
      up: FormUp,
    },
    options: undefined,
  },
  spinner: {
    container: {
      pad: 'none',
      color: 'green',
      border: [
        { side: 'all', size: 'medium' },
        { side: 'right', size: 'medium' },
        { side: 'top', size: 'medium' },
        { side: 'left', size: 'medium' },
      ],
    },
  },
  tab: {
    color: 'text-strong',
    active: {
      background: 'background-contrast',
      color: 'text-strong',
    },
    hover: {
      background: 'background-contrast',
      color: 'text-strong',
    },
    border: {
      side: 'bottom',
      color: 'transparent',
      size: '6px',
      active: {
        color: 'text-strong',
      },
      disabled: {
        color: undefined,
      },
      hover: {
        color: undefined,
      },
    },
    disabled: {
      color: 'text-xweak',
    },
    pad: {
      // top and bottom pad need to be defined individually, specifying
      // "vertical" only applies to top
      bottom: 'small',
      top: 'small',
      horizontal: 'medium',
    },
    margin: {
      // bring the overall tabs border behind invidual tab borders
      vertical: '-2px',
      horizontal: 'none',
    },
    extend: ({ theme }) => css`
      border-top-left-radius: ${theme.global.control.border
        .radius}; // should use radius property of border
      border-top-right-radius: ${theme.global.control.border
        .radius}; // should use radius property of border
      font-weight: bold;
    `,
  },
  tabs: {
    header: {
      border: {
        side: 'bottom',
        size: 'small',
        color: 'border',
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
        font-weight: bold;
      `,
    },
  },
  text: {
    xsmall: {
      size: '14px',
      height: '18px',
      maxWidth: '326px',
    },
    small: {
      size: '16px',
      height: '20px',
      maxWidth: '379px',
    },
    medium: {
      size: '18px',
      height: '22px',
      maxWidth: '432px',
    },
    large: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '24px',
      height: '30px',
      maxWidth: '538px',
    },
    xlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '36px',
      height: '42px',
      maxWidth: '643px',
    },
    // xxlarge is not part of Chris's type exploration
    xxlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '42px',
      height: '48px',
      maxWidth: '854px',
    },
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
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24,
});
