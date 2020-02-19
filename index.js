"use strict";

exports.__esModule = true;
exports.colors = exports.hpe = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n      ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};

var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};

var hpe = deepFreeze({
  defaultMode: 'light',
  global: {
    colors: {
      icon: 'text',
      brand: 'green!',
      background: {
        dark: '#1A1F2B',
        light: '#FFFFFF'
      },
      'background-back': {
        dark: '#1A1F2B',
        light: '#EFEFEF'
      },
      'background-front': {
        dark: '#222938',
        light: '#FFFFFF'
      },
      'background-contrast': {
        dark: '#FFFFFF08',
        light: '#11111108'
      },
      text: {
        dark: '#EEEEEE',
        light: '#333333'
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000'
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444'
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666'
      },
      border: {
        light: '#CCCCCC',
        dark: '#444444'
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
        light: '#00C8FF'
      },
      'blue!': '#00739D',
      green: {
        dark: '#007A5E',
        light: '#6FFFB0'
      },
      'green!': '#01A982',
      teal: {
        dark: '#007366',
        light: '#82FFF2'
      },
      'teal!': '#00E8CF',
      purple: {
        dark: '#371177',
        light: '#F740FF'
      },
      'purple!': '#7630EA',
      red: {
        dark: '#4B1916',
        light: '#FF4F4F'
      },
      'red!': '#FF0000',
      orange: {
        dark: '#CC4B00',
        light: '#FFB024'
      },
      'orange!': '#FF8300',
      yellow: {
        dark: '#D78F00',
        light: '#FFEB59'
      },
      'yellow!': '#FEC901',
      'graph-0': 'orange',
      'graph-1': 'blue',
      'graph-2': 'purple',
      focus: 'green',
      placeholder: 'text-weak'
    },
    font: {
      family: "'Metric', Arial, sans-serif",
      face: "\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff\") format('woff');\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff\") format('woff');\n          font-weight: 700;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff\") format('woff');\n          font-weight: 600;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff\") format('woff');\n          font-weight: 100;\n        }"
    },
    active: {
      background: 'active-background',
      color: 'active-text'
    },
    drop: {
      background: 'background-front',
      border: {
        radius: '8px'
      },
      shadowSize: 'medium'
    },
    elevation: {
      dark: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      }
    },
    hover: {
      background: 'active-background',
      color: 'active-text'
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text'
    }
  },
  accordion: {
    border: {
      color: 'text'
    },
    icons: {
      color: 'text'
    }
  },
  anchor: {
    color: 'text',
    fontWeight: 700,
    textDecoration: 'none',
    hover: {
      textDecoration: 'none'
    }
  },
  button: {
    size: {
      small: {
        border: {
          radius: '5px'
        },
        pad: {
          vertical: '4px',
          horizontal: '20px'
        }
      },
      medium: {
        border: {
          radius: '6px'
        },
        pad: {
          vertical: '4px',
          horizontal: '22px'
        }
      },
      large: {
        border: {
          radius: '7px'
        },
        pad: {
          vertical: '8px',
          horizontal: '26px'
        }
      }
    },
    border: {
      radius: '6px'
    },
    extend: (0, _styledComponents.css)(_templateObject(), function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  },
  calendar: {
    small: {
      fontSize: '13.6px',
      lineHeight: 1.375,
      daySize: '27.43px'
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px'
    },
    large: {
      fontSize: '31.2px',
      lineHeight: 1.11,
      daySize: '109.71px'
    }
  },
  checkBox: {
    gap: 'medium',
    color: 'text-strong'
  },
  formField: {
    border: {
      side: 'all'
    },
    round: '4px'
  },
  heading: {
    level: {
      '1': {
        small: {
          size: '36px',
          height: '42px',
          maxWidth: '854px'
        },
        medium: {
          size: '53px',
          height: '59px',
          maxWidth: '1277px'
        },
        large: {
          size: '88px',
          height: '94px',
          maxWidth: '2122px'
        },
        xlarge: {
          size: '124px',
          height: '130px',
          maxWidth: '2966px'
        }
      },
      '2': {
        small: {
          size: '31px',
          height: '37px',
          maxWidth: '749px'
        },
        medium: {
          size: '44px',
          height: '50px',
          maxWidth: '1066px'
        },
        large: {
          size: '58px',
          height: '64px',
          maxWidth: '1382px'
        },
        xlarge: {
          size: '71px',
          height: '77px',
          maxWidth: '1699px'
        }
      },
      '3': {
        small: {
          size: '27px',
          height: '33px',
          maxWidth: '643px'
        },
        medium: {
          size: '36px',
          height: '42px',
          maxWidth: '854px'
        },
        large: {
          size: '44px',
          height: '50px',
          maxWidth: '1066px'
        },
        xlarge: {
          size: '53px',
          height: '59px',
          maxWidth: '1277px'
        }
      },
      '4': {
        small: {
          size: '22px',
          height: '28px',
          maxWidth: '538px'
        },
        medium: {
          size: '27px',
          height: '33px',
          maxWidth: '643px'
        },
        large: {
          size: '31px',
          height: '37px',
          maxWidth: '749px'
        },
        xlarge: {
          size: '36px',
          height: '42px',
          maxWidth: '854px'
        }
      },
      '5': {
        small: {
          size: '16px',
          height: '22px',
          maxWidth: '379px'
        },
        medium: {
          size: '16px',
          height: '22px',
          maxWidth: '379px'
        },
        large: {
          size: '16px',
          height: '22px',
          maxWidth: '379px'
        },
        xlarge: {
          size: '16px',
          height: '22px',
          maxWidth: '379px'
        }
      },
      '6': {
        small: {
          size: '14px',
          height: '20px',
          maxWidth: '326px'
        },
        medium: {
          size: '14px',
          height: '20px',
          maxWidth: '326px'
        },
        large: {
          size: '14px',
          height: '20px',
          maxWidth: '326px'
        },
        xlarge: {
          size: '14px',
          height: '20px',
          maxWidth: '326px'
        }
      }
    },
    weight: 700
  },
  icon: {
    size: {
      xxlarge: '166px'
    }
  },
  paragraph: {
    small: {
      size: '16px',
      height: '22px',
      maxWidth: '379px'
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px'
    },
    large: {
      size: '22px',
      height: '28px',
      maxWidth: '538px'
    },
    xlarge: {
      size: '27px',
      height: '33px',
      maxWidth: '643px'
    },
    xxlarge: {
      size: '36px',
      height: '42px',
      maxWidth: '854px'
    }
  },
  radioButton: {
    color: 'text-strong',
    check: {
      color: 'text-strong'
    },
    gap: 'medium'
  },
  rangeInput: {
    track: {
      color: 'background-contrast'
    },
    thumb: {
      color: 'text'
    }
  },
  select: {
    icons: {
      color: 'text'
    },
    options: {
      text: {
        size: 'small'
      }
    }
  },
  tab: {
    border: {
      color: 'text-xweak'
    },
    color: 'text-xweak',
    margin: {
      horizontal: 'none'
    },
    pad: {
      horizontal: 'small'
    }
  },
  text: {
    xsmall: {
      size: '14px',
      height: '20px',
      maxWidth: '326px'
    },
    small: {
      size: '16px',
      height: '22px',
      maxWidth: '379px'
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px'
    },
    large: {
      size: '22px',
      height: '28px',
      maxWidth: '538px'
    },
    xlarge: {
      size: '27px',
      height: '33px',
      maxWidth: '643px'
    },
    xxlarge: {
      size: '36px',
      height: '42px',
      maxWidth: '854px'
    }
  },
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24
});
exports.hpe = hpe;
var colors = hpe.global.colors;
exports.colors = colors;