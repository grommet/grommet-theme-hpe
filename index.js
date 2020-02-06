"use strict";

exports.__esModule = true;
exports.hpe = void 0;

// (C) Copyright 2017-2018 Hewlett Packard Enterprise Development LP
var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};

var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};

var accentColors = ['#2AD2C9', '#614767', '#ff8d6d'];
var neutralColors = ['#425563', '#5F7A76', '#80746E', '#767676'];
var statusColors = {
  critical: '#F04953',
  error: '#F04953',
  warning: '#FFD144',
  ok: '#01a982',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC'
};
var colors = {
  brand: '#01a982',
  focus: accentColors[0]
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});
var hpe = deepFreeze({
  global: {
    colors: colors,
    font: {
      family: "'Metric', Arial, sans-serif",
      face: "\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff\") format('woff');\n        }\n\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff\") format('woff');\n          font-weight: 700;\n        }\n\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff\") format('woff');\n          font-weight: 600;\n        }\n\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff\") format('woff');\n          font-weight: 100;\n        }\n      "
    }
  },
  anchor: {
    textDecoration: 'underline',
    color: {
      dark: '#FFFFFF',
      light: '#000000'
    }
  },
  button: {
    border: {
      radius: '0px'
    },
    colors: {
      accent: '#ff8d6d',
      secondary: 'rgba(51,51,51,0.6)'
    },
    extend: 'letter-spacing: 0.04167em;'
  },
  clock: {
    analog: {
      second: {
        color: {
          dark: '#01a982',
          light: '#01a982'
        }
      }
    }
  },
  icon: {
    colors: colors
  }
});
exports.hpe = hpe;