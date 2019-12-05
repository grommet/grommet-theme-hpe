// (C) Copyright 2017-2018 Hewlett Packard Enterprise Development LP
const isObject = item => (
  item && typeof item === 'object' && !Array.isArray(item));

const deepFreeze = (obj) => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

const accentColors = ['#2AD2C9', '#614767', '#ff8d6d'];
const neutralColors = ['#425563', '#5F7A76', '#80746E', '#767676'];
const statusColors = {
  critical: '#F04953',
  error: '#F04953',
  warning: '#FFD144',
  ok: '#01a982',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
};

const colors = {
  brand: '#01a982',
  focus: accentColors[0],
};

const colorArray = (array, prefix) => (
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  }));

colorArray(accentColors, 'accent');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach((color) => {
  colors[`status-${color}`] = statusColors[color];
});

export const hpe = deepFreeze({
  global: {
    colors,
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
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Medium.woff") format('woff');
          font-weight: 500;
        }

        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format('woff');
          font-weight: 100;
        }
      `,
    },
  },
  anchor: {
    textDecoration: 'underline',
    color: {
      dark: '#FFFFFF',
      light: '#000000',
    },
  },
  button: {
    border: {
      radius: '0px',
    },
    colors: {
      accent: '#ff8d6d',
      secondary: 'rgba(51,51,51,0.6)',
    },
    extend: 'letter-spacing: 0.04167em;',
  },
  clock: {
    analog: {
      second: {
        color: {
          dark: '#01a982',
          light: '#01a982',
        },
      },
    },
  },
  icon: {
    colors,
  },
});
