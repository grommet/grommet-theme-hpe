// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import { css } from 'styled-components';
import { FormDown, FormUp } from 'grommet-icons';

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
      control: 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text',
      'disabled-text': {
        dark: '#777777',
        light: '#999999',
      },
      'selected-background': 'green',
      'selected-text': 'text-strong',
      'status-critical': {
        dark: 'red!',
        light: 'red',
      },
      'status-warning': 'orange',
      'status-ok': 'green',
      'status-unknown': {
        dark: '#4F5F76',
        light: '#CCCCCC',
      },
      'status-disabled': '#CCCCCC',
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
      'graph-0': 'orange!',
      'graph-1': 'blue!',
      'graph-2': 'purple!',
      'graph-3': 'yellow!',
      'graph-4': 'teal!',
      focus: 'teal!',
      placeholder: 'disabled-text',
    },
    input: {
      font: {
        height: 'inherit',
        weight: 400,
      },
      padding: {
        horizontal: 'small',
        vertical: 'xsmall',
      },
    },
    font: {
      family: "'Metric', Arial, sans-serif",
      face: `
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
        }
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format('woff');
          font-weight: 700;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format('woff');
          font-weight: 600;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format('woff');
          font-weight: 100;
        }`,
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
      extend: ({ theme }) => `
        margin-top: ${theme.global.edgeSize.xxsmall};
      `,
      shadowSize: 'medium',
    },
    elevation: {
      // Elevation values were derived from this Figma file.
      // https://www.figma.com/file/eZYR3dtWdb9U90QvJ7p3T9/HPE-Color-Styles?node-id=405%3A25
      // Naming in Figma file is strong/default/weak vs. Grommet t-shirt sizing.
      // As defined here, default is currently mapping to medium.
      light: {
        small: '0px 2px 4px #0000001F;',
        medium: '0px 6px 12px #0000003D;',
        large: '0px 12px 24px #0000001F;',
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
    border: {
      color: 'text',
    },
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
    extend: css`
      ${props => !props.plain && 'font-weight: bold;'}
    `,
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
  checkBox: {
    color: 'selected-text',
    gap: 'small',
    check: {
      radius: '2px',
    },
    border: {
      width: '1px',
    },
  },
  formField: {
    border: {
      error: {
        color: 'border',
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
        color: { light: '#FC61613D', dark: '#C54E4B5C' },
      },
      size: 'xsmall',
      color: 'text',
      margin: {
        start: 'none',
      },
    },
    help: {
      size: 'xsmall',
      color: 'text',
      margin: {
        start: 'none',
        bottom: 'xsmall',
      },
    },
    info: {
      size: 'xsmall',
      color: 'text',
      margin: {
        start: 'none',
      },
    },
    label: {
      size: 'xsmall',
      color: 'text',
      margin: {
        horizontal: 'none',
      },
      weight: 600,
    },
    round: '4px',
  },
  heading: {
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
    color: 'text-strong',
    check: {
      color: 'text-strong',
    },
    gap: 'medium',
  },
  rangeInput: {
    track: {
      color: 'background-contrast',
    },
    thumb: {
      color: 'text',
    },
  },
  select: {
    icons: {
      color: 'text',
      down: FormDown,
      up: FormUp,
    },
    options: {
      container: {
        pad: { horizontal: 'small', vertical: 'xsmall' },
      },
      text: {
        size: 'small',
      },
    },
  },
  tab: {
    color: 'text',
    active: {
      background: 'background-contrast',
    },
    hover: {
      background: 'background-contrast',
      color: 'text',
    },
    border: {
      side: 'bottom',
      color: 'border',
      active: {
        color: 'border-strong',
      },
      hover: {
        color: 'border',
      },
    },
    pad: 'small',
    margin: 'none',
    extend: ({ theme }) => css`
      border-top-left-radius: ${theme.global.control.border
        .radius}; // should use radius property of border
      border-top-right-radius: ${theme.global.control.border
        .radius}; // should use radius property of border
      font-weight: bold;
    `,
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
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24,
});

export const { colors } = hpe.global;
