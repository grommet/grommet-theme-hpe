// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import { css } from 'styled-components';
import { Ascending } from 'grommet-icons/icons/Ascending';
import { Blank } from 'grommet-icons/icons/Blank';
import { CircleAlert } from 'grommet-icons/icons/CircleAlert';
import { Descending } from 'grommet-icons/icons/Descending';
import { FormDown } from 'grommet-icons/icons/FormDown';
import { FormUp } from 'grommet-icons/icons/FormUp';
import { Unsorted } from 'grommet-icons/icons/Unsorted';

const isObject = item =>
  item && typeof item === 'object' && !Array.isArray(item);

const deepFreeze = obj => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

export const hpe = deepFreeze({
  defaultMode: 'light',
  global: {
    colors: {
      /* deprecated accent and neutral colors */
      'accent-1': undefined,
      'accent-2': undefined,
      'accent-3': undefined,
      'accent-4': undefined,
      'neutral-1': undefined,
      'neutral-2': undefined,
      'neutral-3': undefined,
      'neutral-4': undefined,
      'neutral-5': undefined,
      'status-error': undefined,
      brand: 'green!',
      background: {
        dark: '#263040',
        light: '#FFFFFF',
      },
      'background-back': {
        dark: '#263040',
        light: '#EFEFEF',
      },
      'background-front': {
        dark: '#404B5C',
        light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#FFFFFF14',
        light: '#0000000A',
      },
      icon: 'text',
      text: {
        dark: '#C0CADC',
        light: '#444444',
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000',
      },
      'text-weak': {
        dark: '#606B7D',
        light: '#BBBBBB',
      },
      'text-xweak': 'text-weak',
      border: {
        dark: '#7887A1',
        light: '#999999',
      },
      'border-strong': {
        dark: '#AFBCD2',
        light: '#666666',
      },
      'border-weak': {
        dark: '#606B7D',
        light: '#BBBBBB',
      },
      control: 'green',
      'active-background': 'background-contrast',
      'active-text': 'text',
      'disabled-text': 'text-weak', // deprecated, use text-weak instead
      'selected-background': 'green',
      'selected-text': 'text-strong',
      'status-critical': {
        dark: '#D04F4E',
        light: '#FC5A5A',
      },
      'status-warning': {
        dark: '#9B6310',
        light: '#FFBC44',
      },
      'status-ok': {
        dark: '#008567',
        light: '#17EBA0',
      },
      'status-unknown': {
        dark: '#4F5F76',
        light: '#CCCCCC',
      },
      'status-disabled': '#CCCCCC', // deprecated, does not support light and dark. use text-weak instead
      blue: {
        dark: '#00567A',
        light: '#00C8FF',
      },
      'blue!': '#00739D',
      green: {
        dark: '#008567',
        light: '#17EBA0',
      },
      'green!': '#01A982',
      teal: {
        dark: '#117B82',
        light: '#82FFF2',
      },
      'teal!': '#00E8CF',
      purple: {
        dark: '#6633BC',
        light: '#F740FF',
      },
      'purple!': '#7630EA',
      red: {
        dark: '#A2423D',
        light: '#FC6161',
      },
      'red!': '#C54E4B',
      orange: {
        dark: '#9B6310',
        light: '#FFBC44',
      },
      'orange!': '#FF8300',
      yellow: {
        dark: '#8D741C',
        light: '#FFEB59',
      },
      'yellow!': '#FEC901',
      'validation-critical': {
        light: '#FC61613D',
        dark: '#C54E4B5C',
      },
      'graph-0': 'orange!',
      'graph-1': 'blue!',
      'graph-2': 'purple!',
      'graph-3': 'yellow!',
      'graph-4': 'teal!',
      focus: 'teal!',
      placeholder: 'text-weak',
    },
    input: {
      font: {
        height: 'inherit',
        weight: 500,
      },
      padding: {
        horizontal: 'small',
        vertical: 'xsmall',
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
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Regular.woff") format('woff');
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Bold.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Bold.woff") format('woff');
          font-weight: 700;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSSemibold-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSSemibold-Regular.woff") format('woff');
          font-weight: 600;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSMedium-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSMedium-Regular.woff") format('woff');
          font-weight: 500;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSLight-Regular.woff2") format('woff2'),
               url("https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSLight-Regular.woff") format('woff');
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
      extend: ({ alignProp, theme }) => `
        margin-top: ${alignProp.top !== 'top' && theme.global.edgeSize.xsmall}; 
        margin-bottom: ${alignProp.bottom !== 'bottom' &&
          theme.global.edgeSize.xsmall}`,
      shadowSize: 'medium',
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
        color: 'text',
      },
    },
    heading: {
      margin: { vertical: 'medium', horizontal: 'xsmall' },
    },
    hover: {
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
    hover: {
      textDecoration: 'underline',
    },
  },
  button: {
    default: {
      color: 'text-strong',
      border: undefined,
      font: {
        weight: 700,
      },
      padding: {
        horizontal: '12px',
        vertical: '6px',
      },
    },
    primary: {
      background: {
        color: 'green',
      },
      border: undefined,
      color: 'text-strong',
      font: {
        weight: 700,
      },
      padding: {
        horizontal: '12px',
        vertical: '6px',
      },
    },
    secondary: {
      border: {
        color: 'green',
        width: '2px',
      },
      color: 'text-strong',
      font: {
        weight: 700,
      },
      padding: {
        horizontal: '10px',
        vertical: '4px',
      },
    },
    option: {
      color: 'text',
      border: {
        radius: '0px',
      },
      padding: {
        horizontal: '12px',
        vertical: '6px',
      },
      font: {
        weight: 400,
      },
    },
    active: {
      background: {
        color: 'background-contrast',
      },
      color: 'text',
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
      color: 'text-weak',
      primary: {
        border: {
          color: 'border-weak',
          width: '2px',
        },
        padding: {
          horizontal: '10px',
          vertical: '4px',
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
        padding: {
          horizontal: '9px',
          vertical: '3px',
        },
      },
      option: {
        background: 'active-background',
        color: 'active-text',
      },
    },
    size: {
      small: {
        border: {
          radius: '4px',
        },
        pad: {
          vertical: '4px',
          horizontal: '8px',
        },
      },
      medium: {
        border: {
          radius: '4px',
        },
        pad: {
          vertical: '4px',
          horizontal: '10px',
        },
      },
      large: {
        border: {
          radius: '6px',
        },
        pad: {
          vertical: '6px',
          horizontal: '16px',
        },
      },
    },
    border: {
      radius: '4px',
    },
    color: 'text-strong',
    padding: {
      vertical: '4px',
      horizontal: '10px',
    },
  },
  calendar: {
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
  },
  checkBox: {
    hover: {
      border: {
        color: undefined,
      },
      background: {
        color: 'background-contrast',
      },
    },
    color: 'background',
    border: {
      color: 'border',
      width: '1px',
    },
    check: {
      radius: '2px',
      extend: ({ theme, checked, indeterminate }) => `
      box-shadow: none;
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
        ${checked &&
          `background-color: ${
            theme.global.colors.green[theme.dark ? 'dark' : 'light']
          };`}
      `,
    },
    extend: ({ disabled, theme }) => `
      ${!disabled &&
        `:hover {
        background-color: ${
          theme.global.colors['background-contrast'][
            theme.dark ? 'dark' : 'light'
          ]
        };
      }`}
      font-weight: 500;
      width: auto;
      padding: ${theme.global.edgeSize.xsmall} ${theme.global.edgeSize.small};
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
      extend: ({ column, sort, sortable, theme }) => {
        return `
          ${sort &&
            sort.property === column &&
            `
            background: ${
              theme.global.colors['background-contrast'][
                theme.dark ? 'dark' : 'light'
              ]
            }
          `};
          ${sortable &&
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
            `};
         `;
      },
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
    pinned: {
      header: {
        background: {
          color: 'background-front',
          opacity: 'strong',
        },
        extend: 'backdrop-filter: blur(8px);',
      },
      body: {
        background: {
          color: 'background-front',
          opacity: 'strong',
        },
        extend: 'backdrop-filter: blur(8px);',
      },
      footer: {
        background: {
          color: 'background-front',
          opacity: 'strong',
        },
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
    icon: {
      size: 'small',
    },
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
        color: 'text-weak',
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
      weight: 500,
    },
    margin: {
      bottom: 'none',
    },
    round: '4px',
  },
  heading: {
    color: 'text-strong',
    level: {
      '1': {
        small: {
          size: '36px',
          height: '42px',
          maxWidth: '854px',
        },
        medium: {
          size: '53px',
          height: '59px',
          maxWidth: '1277px',
        },
        large: {
          size: '88px',
          height: '94px',
          maxWidth: '2122px',
        },
        xlarge: {
          size: '124px',
          height: '130px',
          maxWidth: '2966px',
        },
      },
      '2': {
        small: {
          size: '31px',
          height: '37px',
          maxWidth: '749px',
        },
        medium: {
          size: '44px',
          height: '50px',
          maxWidth: '1066px',
        },
        large: {
          size: '58px',
          height: '64px',
          maxWidth: '1382px',
        },
        xlarge: {
          size: '71px',
          height: '77px',
          maxWidth: '1699px',
        },
      },
      '3': {
        small: {
          size: '27px',
          height: '33px',
          maxWidth: '643px',
        },
        medium: {
          size: '36px',
          height: '42px',
          maxWidth: '854px',
        },
        large: {
          size: '44px',
          height: '50px',
          maxWidth: '1066px',
        },
        xlarge: {
          size: '53px',
          height: '59px',
          maxWidth: '1277px',
        },
      },
      '4': {
        small: {
          size: '22px',
          height: '28px',
          maxWidth: '538px',
        },
        medium: {
          size: '27px',
          height: '33px',
          maxWidth: '643px',
        },
        large: {
          size: '31px',
          height: '37px',
          maxWidth: '749px',
        },
        xlarge: {
          size: '36px',
          height: '42px',
          maxWidth: '854px',
        },
      },
      '5': {
        small: {
          size: '16px',
          height: '22px',
          maxWidth: '379px',
        },
        medium: {
          size: '16px',
          height: '22px',
          maxWidth: '379px',
        },
        large: {
          size: '16px',
          height: '22px',
          maxWidth: '379px',
        },
        xlarge: {
          size: '16px',
          height: '22px',
          maxWidth: '379px',
        },
      },
      '6': {
        small: {
          size: '14px',
          height: '20px',
          maxWidth: '326px',
        },
        medium: {
          size: '14px',
          height: '20px',
          maxWidth: '326px',
        },
        large: {
          size: '14px',
          height: '20px',
          maxWidth: '326px',
        },
        xlarge: {
          size: '14px',
          height: '20px',
          maxWidth: '326px',
        },
      },
    },
    weight: 700,
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
    icons: {
      color: 'text-strong',
    },
  },
  paragraph: {
    small: {
      size: '16px',
      height: '22px',
      maxWidth: '379px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '22px',
      height: '28px',
      maxWidth: '538px',
    },
    xlarge: {
      size: '27px',
      height: '33px',
      maxWidth: '643px',
    },
    xxlarge: {
      size: '36px',
      height: '42px',
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
      :not(div):hover {
        background-color: ${
          theme.global.colors['background-contrast'][
            theme.dark ? 'dark' : 'light'
          ]
        };
      }
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
      color: 'background',
      extend: ({ theme }) => `
        border: 1px solid ${
          theme.global.colors.border[theme.dark ? 'dark' : 'light']
        };
        box-shadow: ${
          theme.global.elevation[theme.dark ? 'dark' : 'light'].small
        };
      `,
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
      color: 'border',
      active: {
        color: 'border-strong',
      },
      disabled: {
        color: 'border-weak',
      },
      hover: {
        color: 'border',
      },
    },
    disabled: {
      color: 'text-weak',
    },
    pad: 'small',
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
      extend: ({ theme }) => {
        return `
          :hover {
            button {
              background: ${
                theme.global.colors['background-contrast'][
                  theme.dark ? 'dark' : 'light'
                ]
              }
            }
          }
        `;
      },
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
      height: '20px',
      maxWidth: '326px',
    },
    small: {
      size: '16px',
      height: '22px',
      maxWidth: '379px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '22px',
      height: '28px',
      maxWidth: '538px',
    },
    xlarge: {
      size: '27px',
      height: '33px',
      maxWidth: '643px',
    },
    xxlarge: {
      size: '36px',
      height: '42px',
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
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24,
});

export const { colors } = hpe.global;
