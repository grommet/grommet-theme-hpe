// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import { css } from 'styled-components';

const isObject = item =>
  item && typeof item === 'object' && !Array.isArray(item);

const deepFreeze = obj => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

export const hpe = deepFreeze({
  // name: 'HPE 2',
  // rounding: 4,
  // spacing: 24,
  // defaultMode: 'light',
  global: {
    colors: {
      icon: 'text',
      brand: 'green!',
      background: {
        dark: '#1A1F2B',
        light: '#FFFFFF',
      },
      'background-back': {
        dark: '#1A1F2B',
        light: '#EFEFEF',
      },
      'background-front': {
        dark: '#222938',
        light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#FFFFFF08',
        light: '#11111108',
      },
      text: {
        dark: '#EEEEEE',
        light: '#333333',
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000',
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444',
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666',
      },
      border: {
        light: '#CCCCCC',
        dark: '#444444',
      },
      control: 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      blue: {
        dark: '#0E5265',
        light: '#00C8FF',
      },
      'blue!': '#00739D',
      green: {
        dark: '#007A5E',
        light: '#6FFFB0',
      },
      'green!': '#00C781',
      teal: {
        dark: '#007366',
        light: '#82FFF2',
      },
      'teal!': '#00E8CF',
      purple: {
        dark: '#371177',
        light: '#F740FF',
      },
      'purple!': '#7630EA',
      red: {
        dark: '#4B1916',
        light: '#FF4F4F',
      },
      'red!': '#FF0000',
      orange: {
        dark: '#CC4B00',
        light: '#FFB024',
      },
      'orange!': '#FF8300',
      yellow: {
        dark: '#D78F00',
        light: '#FFEB59',
      },
      'yellow!': '#FEC901',
      'graph-0': 'orange',
      'graph-1': 'blue',
      'graph-2': 'purple',
      focus: 'green',
      placeholder: 'text-weak',
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
        radius: '8px',
      },
      shadowSize: 'medium',
    },
    elevation: {
      dark: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
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
  // Missing from the Designer
  accordion: {
    border: {
      color: 'text',
    },
    icons: {
      color: 'text',
    },
  },
  // Missing from the Designer
  anchor: {
    color: 'text',
    fontWeight: 700,
    textDecoration: 'none',
    hover: {
      textDecoration: 'none',
    },
  },
  // Radius + font is missing from the designer
  button: {
    border: {
      radius: '6px',
    },
    extend: css`
      ${props => !props.plain && 'font-weight: bold;'}
    `,
  },
  calendar: {
    small: {
      fontSize: '11.6px',
      lineHeight: 1.375,
      daySize: '27.43px',
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
    },
  },
  // Designer defaults to base.js, the following is extra
  checkBox: {
    gap: 'medium',
    color: 'text-strong',
  },
  formField: {
    border: {
      side: 'all',
    },
  },
  heading: {
    level: {
      '1': {
        small: {
          size: '43.6px',
          height: '49.6px',
          maxWidth: '1046.4px',
        },
        medium: {
          size: '69.2px',
          height: '75.2px',
          maxWidth: '1660.8px',
        },
        large: {
          size: '120.4px',
          height: '126.4px',
          maxWidth: '2889.6px',
        },
        xlarge: {
          size: '171.6px',
          height: '177.6px',
          maxWidth: '4118.4px',
        },
      },
      '2': {
        small: {
          size: '30.8px',
          height: '36.8px',
          maxWidth: '739.2px',
        },
        medium: {
          size: '43.6px',
          height: '49.6px',
          maxWidth: '1046.4px',
        },
        large: {
          size: '69.2px',
          height: '75.2px',
          maxWidth: '1660.8px',
        },
        xlarge: {
          size: '94.8px',
          height: '100.8px',
          maxWidth: '2275.2px',
        },
      },
      '3': {
        small: {
          size: '24.4px',
          height: '30.4px',
          maxWidth: '585.6px',
        },
        medium: {
          size: '30.8px',
          height: '36.8px',
          maxWidth: '739.2px',
        },
        large: {
          size: '43.6px',
          height: '49.6px',
          maxWidth: '1046.4px',
        },
        xlarge: {
          size: '56.4px',
          height: '62.4px',
          maxWidth: '1353.6px',
        },
      },
      '4': {
        small: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
        medium: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
        large: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
        xlarge: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
      },
      '5': {
        small: {
          size: '14.8px',
          height: '20.8px',
          maxWidth: '355.2px',
        },
        medium: {
          size: '14.8px',
          height: '20.8px',
          maxWidth: '355.2px',
        },
        large: {
          size: '14.8px',
          height: '20.8px',
          maxWidth: '355.2px',
        },
        xlarge: {
          size: '14.8px',
          height: '20.8px',
          maxWidth: '355.2px',
        },
      },
      '6': {
        small: {
          size: '11.6px',
          height: '17.6px',
          maxWidth: '278.4px',
        },
        medium: {
          size: '11.6px',
          height: '17.6px',
          maxWidth: '278.4px',
        },
        large: {
          size: '11.6px',
          height: '17.6px',
          maxWidth: '278.4px',
        },
        xlarge: {
          size: '11.6px',
          height: '17.6px',
          maxWidth: '278.4px',
        },
      },
    },
  },
  // Missing from the designer
  icon: {
    size: {
      xxlarge: '166px',
    },
  },
  paragraph: {
    small: {
      size: '11.6px',
      height: '17.6px',
      maxWidth: '278.4px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '24.4px',
      height: '30.4px',
      maxWidth: '585.6px',
    },
    xlarge: {
      size: '30.8px',
      height: '36.8px',
      maxWidth: '739.2px',
    },
    xxlarge: {
      size: '43.6px',
      height: '49.6px',
      maxWidth: '1046.4px',
    },
  },
  // Missing from the designer
  radioButton: {
    color: 'text-strong',
    check: {
      color: 'text-strong',
    },
    gap: 'medium',
  },
  // Missing from the Designer
  rangeInput: {
    track: {
      color: 'background-contrast',
    },
    thumb: {
      color: 'text',
    },
  },
  // Missing from the Designer
  select: {
    icons: {
      color: 'text',
    },
    options: {
      text: {
        size: 'small',
      },
    },
  },
  // Missing from the Designer
  tab: {
    border: {
      color: 'text-xweak',
    },
    color: 'text-xweak',
    margin: {
      horizontal: 'none',
    },
    pad: {
      horizontal: 'small',
    },
  },
  // Replaced aries text with the designer text
  text: {
    xsmall: {
      size: '8.4px',
      height: '14.4px',
      maxWidth: '201.6px',
    },
    small: {
      size: '11.6px',
      height: '17.6px',
      maxWidth: '278.4px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '24.4px',
      height: '30.4px',
      maxWidth: '585.6px',
    },
    xlarge: {
      size: '30.8px',
      height: '36.8px',
      maxWidth: '739.2px',
    },
    xxlarge: {
      size: '43.6px',
      height: '49.6px',
      maxWidth: '1046.4px',
    },
  },
});

export const { colors } = hpe.global;
