"use strict";

exports.__esModule = true;
exports.colors = exports.hpe = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _Ascending = require("grommet-icons/icons/Ascending");

var _Blank = require("grommet-icons/icons/Blank");

var _CircleAlert = require("grommet-icons/icons/CircleAlert");

var _Descending = require("grommet-icons/icons/Descending");

var _FormDown = require("grommet-icons/icons/FormDown");

var _FormUp = require("grommet-icons/icons/FormUp");

var _Unsorted = require("grommet-icons/icons/Unsorted");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
        light: '#FFFFFF'
      },
      'background-back': {
        dark: '#263040',
        light: '#EFEFEF'
      },
      'background-front': {
        dark: '#404B5C',
        light: '#FFFFFF'
      },
      'background-contrast': {
        dark: '#FFFFFF14',
        light: '#0000000A'
      },
      icon: 'text',
      text: {
        dark: '#C0CADC',
        light: '#444444'
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000'
      },
      'text-weak': {
        dark: '#606B7D',
        light: '#BBBBBB'
      },
      'text-xweak': 'text-weak',
      border: {
        dark: '#7887A1',
        light: '#999999'
      },
      'border-strong': {
        dark: '#AFBCD2',
        light: '#666666'
      },
      'border-weak': {
        dark: '#606B7D',
        light: '#BBBBBB'
      },
      control: 'green',
      'active-background': 'background-contrast',
      'active-text': 'text',
      'disabled-text': 'text-weak',
      // deprecated, use text-weak instead
      'selected-background': 'green',
      'selected-text': 'text-strong',
      'status-critical': {
        dark: '#D04F4E',
        light: '#FC5A5A'
      },
      'status-warning': {
        dark: '#9B6310',
        light: '#FFBC44'
      },
      'status-ok': {
        dark: '#008567',
        light: '#17EBA0'
      },
      'status-unknown': {
        dark: '#4F5F76',
        light: '#CCCCCC'
      },
      'status-disabled': '#CCCCCC',
      // deprecated, does not support light and dark. use text-weak instead
      blue: {
        dark: '#00567A',
        light: '#00C8FF'
      },
      'blue!': '#00739D',
      green: {
        dark: '#008567',
        light: '#17EBA0'
      },
      'green!': '#01A982',
      teal: {
        dark: '#117B82',
        light: '#82FFF2'
      },
      'teal!': '#00E8CF',
      purple: {
        dark: '#6633BC',
        light: '#F740FF'
      },
      'purple!': '#7630EA',
      red: {
        dark: '#A2423D',
        light: '#FC6161'
      },
      'red!': '#C54E4B',
      orange: {
        dark: '#9B6310',
        light: '#FFBC44'
      },
      'orange!': '#FF8300',
      yellow: {
        dark: '#8D741C',
        light: '#FFEB59'
      },
      'yellow!': '#FEC901',
      'validation-critical': {
        light: '#FC61613D',
        dark: '#C54E4B5C'
      },
      'validation-ok': {
        light: '#17EBA03D',
        dark: '#00856759'
      },
      'validation-warning': {
        light: '#FFBC443D',
        dark: '#9B63105C'
      },
      'graph-0': 'orange!',
      'graph-1': 'blue!',
      'graph-2': 'purple!',
      'graph-3': 'yellow!',
      'graph-4': 'teal!',
      focus: 'teal!',
      placeholder: 'text-weak'
    },
    input: {
      font: {
        height: 'inherit',
        weight: 500
      },
      padding: {
        horizontal: 'small',
        vertical: 'xsmall'
      },
      extend: "\n        &::-webkit-input-placeholder {\n          font-weight: 400;\n        }\n      \n        &::-moz-placeholder {\n          font-weight: 400;\n        }\n      \n        &:-ms-input-placeholder {\n          font-weight: 400;\n        }\n      "
    },
    font: {
      family: "'Metric', Arial, sans-serif",
      face: "\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Regular.woff2\") format('woff2'),\n               url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Regular.woff\") format('woff');\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Bold.woff2\") format('woff2'),\n               url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXS-Bold.woff\") format('woff');\n          font-weight: 700;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSSemibold-Regular.woff2\") format('woff2'),\n               url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSSemibold-Regular.woff\") format('woff');\n          font-weight: 600;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSMedium-Regular.woff2\") format('woff2'),\n               url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSMedium-Regular.woff\") format('woff');\n          font-weight: 500;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSLight-Regular.woff2\") format('woff2'),\n               url(\"https://d3hq6blov2iije.cloudfront.net/fonts/HPEXS-Metric-Fonts/MetricHPEXSLight-Regular.woff\") format('woff');\n          font-weight: 100;\n        }"
    },
    focus: {
      border: undefined
    },
    active: {
      background: 'active-background',
      color: 'active-text'
    },
    drop: {
      background: 'background-front',
      border: {
        radius: '4px'
      },
      margin: 'xsmall',
      intelligentMargin: true,
      shadowSize: 'medium',

      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment brings Drop in alignment with Layer
       * which needs an elevated z-index to sit atop the Global header. */
      zIndex: '110'
    },
    elevation: {
      // Elevation values were derived from this Figma file.
      // https://www.figma.com/file/eZYR3dtWdb9U90QvJ7p3T9/HPE-Color-Styles?node-id=405%3A25
      // Naming in Figma file is strong/default/weak vs. Grommet t-shirt sizing.
      // As defined here, default is currently mapping to medium.
      light: {
        small: '0px 2px 4px #0000001F;',
        medium: '0px 6px 12px #0000001F;',
        large: '0px 12px 24px #0000003D;'
      },
      dark: {
        small: '0px 2px 4px #0000003D;',
        medium: '0px 6px 12px #0000005C;',
        large: '0px 12px 24px #0000007A;'
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
    panel: {
      border: {
        side: 'horizontal',
        color: 'text'
      }
    },
    heading: {
      margin: {
        vertical: 'medium',
        horizontal: 'xsmall'
      }
    },
    hover: {
      heading: {
        color: undefined
      }
    },
    border: undefined,
    icons: {
      color: 'text'
    }
  },
  anchor: {
    color: 'text',
    textDecoration: 'underline',
    fontWeight: 500,
    hover: {
      textDecoration: 'underline'
    }
  },
  button: {
    "default": {
      color: 'text-strong',
      border: undefined,
      font: {
        weight: 700
      }
    },
    primary: {
      background: {
        color: 'green'
      },
      border: undefined,
      color: 'text-strong',
      font: {
        weight: 700
      }
    },
    secondary: {
      border: {
        color: 'green',
        width: '2px'
      },
      color: 'text-strong',
      font: {
        weight: 700
      }
    },
    option: {
      color: 'text',
      border: {
        radius: '0px'
      },
      font: {
        weight: 400
      }
    },
    active: {
      background: {
        color: 'background-contrast'
      },
      color: 'text',
      secondary: {
        border: {
          color: 'transparent'
        }
      },
      option: {
        background: {
          color: 'active-background'
        }
      }
    },
    selected: {
      option: {
        background: 'selected-background',
        color: 'selected-text'
      }
    },
    disabled: {
      background: {
        color: 'transparent'
      },
      color: 'text-weak',
      primary: {
        border: {
          color: 'border-weak',
          width: '2px'
        }
      },
      secondary: {
        border: {
          color: 'border-weak'
        }
      },
      opacity: 1.0
    },
    hover: {
      "default": {
        background: {
          color: 'background-contrast'
        },
        color: undefined
      },
      secondary: {
        border: {
          width: '3px'
        }
      },
      option: {
        background: 'active-background',
        color: 'active-text'
      }
    },
    size: {
      small: {
        border: {
          radius: '4px'
        },
        pad: {
          vertical: '4px',
          horizontal: '8px'
        }
      },
      medium: {
        border: {
          radius: '4px'
        },
        pad: {
          vertical: '6px',
          horizontal: '12px'
        }
      },
      large: {
        border: {
          radius: '6px'
        },
        pad: {
          vertical: '6px',
          horizontal: '16px'
        }
      }
    },
    border: {
      radius: '4px'
    },
    color: 'text-strong',
    padding: {
      vertical: '4px',
      horizontal: '10px'
    }
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
  card: {
    container: {
      background: 'background-front',
      elevation: 'medium'
    },
    body: {
      pad: 'medium'
    },
    footer: {
      pad: {
        horizontal: 'medium',
        vertical: 'small'
      }
    },
    header: {
      pad: 'medium'
    }
  },
  checkBox: {
    hover: {
      border: {
        color: undefined
      },
      background: {
        color: 'background-contrast'
      }
    },
    color: 'background',
    border: {
      color: 'border',
      width: '1px'
    },
    check: {
      radius: '2px',
      extend: function extend(_ref) {
        var theme = _ref.theme,
            checked = _ref.checked,
            indeterminate = _ref.indeterminate;
        return "\n      box-shadow: none;\n      background-color: " + (checked || indeterminate ? theme.global.colors.green[theme.dark ? 'dark' : 'light'] : theme.global.colors.background[theme.dark ? 'dark' : 'light']) + ";\n      " + ((checked || indeterminate) && 'border: none;') + "\n        ";
      }
    },
    icon: {
      extend: function extend(_ref2) {
        var theme = _ref2.theme;
        return "stroke-width: 2px;\n      stroke: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'];
      }
    },
    gap: 'small',
    toggle: {
      background: 'background',
      color: 'background',
      knob: {
        extend: function extend(_ref3) {
          var theme = _ref3.theme;
          return "\n           box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'].small + ";\n           border: 1px solid " + theme.global.colors.border[theme.dark ? 'dark' : 'light'] + "\n        ";
        }
      },
      extend: function extend(_ref4) {
        var checked = _ref4.checked,
            theme = _ref4.theme;
        return "\n        " + (checked && "background-color: " + theme.global.colors.green[theme.dark ? 'dark' : 'light'] + ";") + "\n      ";
      }
    },
    extend: function extend(_ref5) {
      var disabled = _ref5.disabled,
          theme = _ref5.theme;
      return "\n      " + (!disabled && ":hover {\n        background-color: " + theme.global.colors['background-contrast'][theme.dark ? 'dark' : 'light'] + ";\n      }") + "\n      font-weight: 500;\n      width: auto;\n      padding: " + theme.global.edgeSize.xsmall + " " + theme.global.edgeSize.small + ";\n    ";
    }
  },
  checkBoxGroup: {
    container: {
      gap: 'none',
      margin: {
        vertical: 'xsmall'
      }
    }
  },
  dataTable: {
    body: {
      extend: function extend(_ref6) {
        var theme = _ref6.theme;
        return "\n        /* Margin and padding allow room for focus on table body */\n        margin: " + theme.global.edgeSize.xxsmall + " 0px;\n        padding: 0px " + theme.global.edgeSize.xxsmall + ";\n      ";
      }
    },
    header: {
      border: {
        side: 'bottom'
      },
      color: 'text-strong',
      extend: function extend(_ref7) {
        var column = _ref7.column,
            sort = _ref7.sort,
            sortable = _ref7.sortable,
            theme = _ref7.theme;
        return "\n          " + (sort && sort.property === column && "\n            background: " + theme.global.colors['background-contrast'][theme.dark ? 'dark' : 'light'] + "\n          ") + ";\n          " + (sortable && sort && sort.property !== column && "\n              svg {\n                opacity: 0;\n              }\n              :hover {\n                svg {\n                  opacity: 1;\n                }\n              }\n            ") + ";\n         ";
      },
      font: {
        weight: 'bold'
      },
      gap: 'none',
      hover: {
        background: {
          color: 'background-contrast'
        }
      },
      pad: {
        horizontal: 'small',
        vertical: 'xsmall'
      }
    },
    icons: {
      ascending: _Ascending.Ascending,
      descending: _Descending.Descending,
      sortable: _Unsorted.Unsorted
    },
    pinned: {
      header: {
        background: {
          color: 'background-front',
          opacity: 'strong'
        },
        extend: 'backdrop-filter: blur(8px);'
      },
      body: {
        background: {
          color: 'background-front',
          opacity: 'strong'
        },
        extend: 'backdrop-filter: blur(8px);'
      },
      footer: {
        background: {
          color: 'background-front',
          opacity: 'strong'
        },
        extend: 'backdrop-filter: blur(8px);'
      }
    },
    resize: {
      hover: {
        border: {
          color: 'border-strong',
          size: 'small'
        }
      }
    }
  },
  dateInput: {
    icon: {
      size: 'small'
    }
  },
  formField: {
    content: {
      margin: {
        vertical: 'xsmall'
      },
      pad: undefined
    },
    border: {
      error: {
        color: 'border-strong'
      },
      color: 'border',
      side: 'all'
    },
    disabled: {
      background: {
        color: undefined
      },
      border: {
        color: 'border-weak'
      },
      label: {
        color: 'text-weak'
      }
    },
    error: {
      background: {
        color: 'validation-critical'
      },
      container: {
        gap: 'xsmall'
      },
      icon: /*#__PURE__*/_react["default"].createElement(_CircleAlert.CircleAlert, {
        size: "small",
        style: {
          marginTop: '4px'
        }
      }),
      size: 'xsmall',
      color: 'text',
      margin: {
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none'
      }
    },
    focus: {
      border: {
        color: 'border-strong'
      }
    },
    help: {
      size: 'xsmall',
      color: 'text',
      margin: 'none'
    },
    info: {
      size: 'xsmall',
      color: 'text',
      margin: {
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none'
      }
    },
    label: {
      size: 'xsmall',
      color: 'text',
      margin: {
        bottom: 'none',
        top: 'xsmall',
        horizontal: 'none'
      },
      requiredIndicator: true,
      weight: 500
    },
    margin: {
      bottom: 'none'
    },
    round: '4px'
  },
  heading: {
    color: 'text-strong',
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
  layer: {
    background: 'background',
    border: {
      radius: 'small',
      intelligentRounding: true
    },
    container: {
      elevation: 'large'
    },
    overlay: {
      background: '#00000080'
    },

    /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
     * at a z-index of 101. This adjustment allows for Layer modals and side-drawers
     * to sit atop the Global header. */
    zIndex: '110'
  },
  list: {
    item: {
      border: undefined
    }
  },
  maskedInput: {
    container: {
      extend: function extend(_ref8) {
        var theme = _ref8.theme;
        return "\n        svg {\n          fill: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n          stroke: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n        }\n      ";
      }
    }
  },
  menu: {
    drop: {
      align: {
        top: 'bottom',
        left: 'left'
      }
    },
    icons: {
      color: 'text-strong'
    }
  },
  pagination: {
    button: {
      font: {
        weight: 700
      },
      active: {
        font: {
          weight: 700
        }
      },
      disabled: {
        color: 'text-weak'
      }
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
    border: {
      color: 'border',
      width: 'xsmall'
    },
    check: {
      color: 'selected-background',
      background: {
        color: 'background-front'
      }
    },
    color: 'selected-background',
    container: {
      extend: function extend(_ref9) {
        var theme = _ref9.theme;
        return "\n      :not(div):hover {\n        background-color: " + theme.global.colors['background-contrast'][theme.dark ? 'dark' : 'light'] + ";\n      }\n      font-weight: 500;\n      width: auto;\n      padding: " + theme.global.edgeSize.xxsmall + " " + theme.global.edgeSize.xsmall + ";\n    ";
      }
    },
    extend: function extend(_ref10) {
      var theme = _ref10.theme;
      return "\n      padding: " + theme.global.edgeSize.xxsmall + " " + theme.global.edgeSize.xsmall + ";\n    ";
    },
    gap: 'xsmall',
    hover: {
      border: {
        color: undefined
      }
    },
    icons: {
      circle: function circle() {
        return /*#__PURE__*/_react["default"].createElement(_Blank.Blank, {
          color: "selected-background"
        }, /*#__PURE__*/_react["default"].createElement("circle", {
          cx: "12",
          cy: "12",
          r: "8"
        }));
      }
    }
  },
  radioButtonGroup: {
    container: {
      gap: 'none',
      margin: {
        vertical: 'xsmall'
      }
    }
  },
  rangeInput: {
    thumb: {
      color: 'background',
      extend: function extend(_ref11) {
        var theme = _ref11.theme;
        return "\n        border: 1px solid " + theme.global.colors.border[theme.dark ? 'dark' : 'light'] + ";\n        box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'].small + ";\n      ";
      }
    },
    track: {
      lower: {
        color: 'green'
      },
      upper: {
        color: 'border'
      }
    }
  },
  select: {
    control: {
      extend: function extend(_ref12) {
        var disabled = _ref12.disabled;
        return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        ", "\n      "])), disabled && "\n        opacity: 0.3;\n        input {\n          cursor: default;\n        }");
      }
    },
    icons: {
      color: 'text',
      down: _FormDown.FormDown,
      up: _FormUp.FormUp
    },
    options: undefined
  },
  spinner: {
    container: {
      border: [{
        side: 'all',
        color: 'background-contrast',
        size: 'medium'
      }, {
        side: 'right',
        color: 'green',
        size: 'medium'
      }, {
        side: 'top',
        color: 'green',
        size: 'medium'
      }, {
        side: 'left',
        color: 'green',
        size: 'medium'
      }]
    }
  },
  tab: {
    color: 'text-strong',
    active: {
      background: 'background-contrast',
      color: 'text-strong'
    },
    hover: {
      background: 'background-contrast',
      color: 'text-strong'
    },
    border: {
      side: 'bottom',
      color: 'transparent',
      size: 'medium',
      active: {
        color: 'border-strong'
      },
      disabled: {
        color: undefined
      },
      hover: {
        color: undefined
      }
    },
    disabled: {
      color: 'text-weak'
    },
    pad: {
      // top and bottom pad need to be defined individually, specifying
      // "vertical" only applies to top
      bottom: 'small',
      top: 'small',
      horizontal: 'medium'
    },
    margin: {
      // bring the overall tabs border behind invidual tab borders
      vertical: '-2px',
      horizontal: 'none'
    },
    extend: function extend(_ref13) {
      var theme = _ref13.theme;
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      border-top-left-radius: ", "; // should use radius property of border\n      border-top-right-radius: ", "; // should use radius property of border\n      font-weight: bold;\n    "])), theme.global.control.border.radius, theme.global.control.border.radius);
    }
  },
  tabs: {
    header: {
      border: {
        side: 'bottom',
        size: 'small',
        color: 'border'
      }
    }
  },
  table: {
    header: {
      extend: "\n        > div { \n          height: 100%;\n          justify-content: center;\n        }\n        // align onSelect checkbox to center of header cell\n        label { \n          justify-content: center;\n        }\n      ",
      // space for focus indicator on sortable columns
      pad: {
        left: 'none',
        vertical: 'none',
        right: 'xxsmall'
      }
    },
    body: {
      extend: function extend(_ref14) {
        var theme = _ref14.theme;
        return "\n          :hover {\n            button {\n              background: " + theme.global.colors['background-contrast'][theme.dark ? 'dark' : 'light'] + "\n            }\n          }\n        ";
      }
    },
    row: {
      hover: {
        background: 'background-contrast'
      }
    },
    footer: {
      extend: "\n        font-weight: bold;\n      "
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
  textInput: {
    container: {
      extend: function extend(_ref15) {
        var theme = _ref15.theme;
        return "\n        svg {\n          fill: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n          stroke: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n        }\n      ";
      }
    }
  },
  tip: {
    content: {
      background: 'background',
      border: {
        color: 'border-weak'
      },
      margin: 'xxsmall',
      elevation: 'small',
      pad: {
        vertical: 'none',
        horizontal: 'small'
      },
      round: 'xsmall'
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