"use strict";

exports.__esModule = true;
exports.hpe = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Ascending = require("grommet-icons/icons/Ascending");
var _Blank = require("grommet-icons/icons/Blank");
var _CircleAlert = require("grommet-icons/icons/CircleAlert");
var _Descending = require("grommet-icons/icons/Descending");
var _FormDown = require("grommet-icons/icons/FormDown");
var _FormNext = require("grommet-icons/icons/FormNext");
var _FormPrevious = require("grommet-icons/icons/FormPrevious");
var _FormUp = require("grommet-icons/icons/FormUp");
var _Unsorted = require("grommet-icons/icons/Unsorted");
var _Hpe = require("grommet-icons/icons/Hpe");
var _backgrounds = require("./backgrounds");
var _colors = require("./colors");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var baseSpacing = 24;
var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};
var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};

// necessary to apply a linear gradient for primary button background
var primaryBackground = function primaryBackground(props) {
  var style = '';
  if (!props.active) {
    style += !props.colorValue ? "background:\nlinear-gradient(70deg, transparent,\n  " + props.theme.global.colors['green!'] + " 35%, transparent 70%)\n  " + props.theme.global.colors['green!'] + ";" : "\n  color: " + props.theme.global.colors['text-strong'][props.theme.dark ? 'dark' : 'light'] + ";\n";
  }
  return style;
};

// necessary to adjust the background color
// of button to darker green to expose gradient on hover
var primaryHoverBackground = function primaryHoverBackground(props) {
  return !props.active && !props.colorValue ? 'background-color: rgb(16, 116, 85);' : '';
};
var hpe = deepFreeze({
  defaultMode: 'light',
  global: {
    backgrounds: _backgrounds.backgrounds,
    breakpoints: {
      xsmall: {
        value: baseSpacing * 24,
        // 576
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: baseSpacing / 6 + "px",
          // 4
          large: baseSpacing / 4 + "px",
          // 6
          xlarge: baseSpacing / 2 + "px" // 12
        },

        edgeSize: {
          none: '0px',
          hair: '1px',
          // for Chart
          xxsmall: '2px',
          xsmall: baseSpacing / 8 + "px",
          // 3
          small: baseSpacing / 4 + "px",
          // 6
          medium: baseSpacing / 2 + "px",
          // 12
          large: baseSpacing + "px",
          // 24
          xlarge: baseSpacing * 2 + "px" // 48
        },

        size: {
          xxsmall: baseSpacing + "px",
          // 24
          xsmall: baseSpacing * 2 + "px",
          // 48
          small: baseSpacing * 4 + "px",
          // 96
          medium: baseSpacing * 8 + "px",
          // 192
          large: baseSpacing * 16 + "px",
          // 384
          xlarge: baseSpacing * 32 + "px",
          // 768
          full: '100%'
        }
      },
      small: {
        value: baseSpacing * 32 // 768
      },

      medium: {
        value: baseSpacing * 45 // 1080
      },

      large: {
        value: baseSpacing * 60 // 1440
      },

      xlarge: {} // anything larger than 1440,
    },

    colors: _colors.colors,
    control: {
      border: {
        radius: '6px'
      }
    },
    input: {
      font: {
        height: 'inherit',
        weight: 500
      },
      padding: {
        horizontal: '11px',
        // equivalent to 'small' when combined with 1px border
        vertical: '5px' // equivalent to 'xsmall' when combined with 1px border
      },

      extend: "\n        &::-webkit-input-placeholder {\n          font-weight: 400;\n        }\n      \n        &::-moz-placeholder {\n          font-weight: 400;\n        }\n      \n        &:-ms-input-placeholder {\n          font-weight: 400;\n        }\n      "
    },
    font: {
      family: "'Metric', Arial, sans-serif",
      face: "\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n          font-weight: 400;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff\") format('woff');\n          font-weight: 700;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff\") format('woff');\n          font-weight: 600;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff\") format('woff');\n          font-weight: 500;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff\") format('woff');\n          font-weight: 100;\n        }"
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
        color: 'border'
      }
    },
    heading: {
      // using level as a means of styling doesn't seem like the best...
      // need to file an issue against Grommet
      level: 3,
      margin: {
        vertical: 'medium',
        horizontal: 'xsmall'
      }
    },
    hover: {
      background: 'background-contrast',
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
    color: 'text-strong',
    textDecoration: 'underline',
    fontWeight: 700,
    gap: 'xsmall',
    hover: {
      textDecoration: 'underline'
    },
    size: {
      large: {
        color: 'brand',
        textDecoration: 'none'
      },
      xlarge: {
        color: 'brand',
        textDecoration: 'none'
      },
      xxlarge: {
        color: 'brand',
        textDecoration: 'none'
      },
      '3xl': {
        color: 'brand',
        textDecoration: 'none'
      },
      '4xl': {
        color: 'brand',
        textDecoration: 'none'
      },
      '5xl': {
        color: 'brand',
        textDecoration: 'none'
      },
      '6xl': {
        color: 'brand',
        textDecoration: 'none'
      }
    }
  },
  avatar: {
    size: {
      large: baseSpacing * 4 + "px" // 96px
    },

    text: {
      size: {
        large: 'xxlarge' // 36px
      }
    }
  },

  button: {
    'cta-primary': {
      background: {
        color: 'brand'
      },
      border: {
        radius: '2em'
      },
      color: 'text-primary-button',
      font: {
        weight: 'bold'
      },
      icon: /*#__PURE__*/_react["default"].createElement(_Hpe.Hpe, null),
      reverse: true,
      extend: function extend(props) {
        return primaryBackground(props);
      }
    },
    'cta-alternate': {
      background: 'background-cta-alternate',
      border: {
        radius: '2em'
      },
      color: 'text-strong',
      font: {
        weight: 'bold'
      },
      icon: /*#__PURE__*/_react["default"].createElement(_Hpe.Hpe, {
        color: "brand"
      }),
      reverse: true
    },
    "default": {
      color: 'text-strong',
      border: {
        radius: '2em'
      },
      font: {
        weight: 700
      }
    },
    gap: 'xsmall',
    primary: {
      background: {
        color: 'brand'
      },
      border: {
        radius: '2em'
      },
      color: 'text-primary-button',
      font: {
        weight: 700
      },
      // for primary button with color, use text-strong
      // instead of text-primary-button which is hard-coded
      // to "white" specifically for HPE green.
      extend: function extend(props) {
        return primaryBackground(props);
      }
    },
    secondary: {
      border: {
        color: 'brand',
        radius: '2em',
        width: '2px'
      },
      color: 'text-strong',
      font: {
        weight: 700
      }
    },
    toolbar: {
      border: {
        radius: '6px'
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
        weight: 500
      }
    },
    active: {
      background: {
        color: 'background-contrast'
      },
      color: 'text-strong',
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
        color: 'selected-text',
        font: {
          weight: 700
        }
      }
    },
    hover: {
      'cta-primary': {
        extend: function extend(props) {
          return primaryHoverBackground(props);
        }
      },
      'cta-alternate': {
        extend: function extend(_ref) {
          var active = _ref.active,
            colorValue = _ref.colorValue,
            theme = _ref.theme;
          var color;
          if (!colorValue && !active) {
            if (theme.dark) {
              color = 'rgba(0, 0, 0, 0.2)'; // TBD
            } else color = 'rgba(0, 0, 0, 0.2)'; // TBD
          }

          var style = "inset 0 0 100px 100px " + color;
          return "-moz-box-shadow: " + style + ";\n            -webkit-box-shadow: " + style + ";\n            box-shadow: " + style + ";";
        }
      },
      "default": {
        background: {
          color: 'background-contrast'
        },
        color: undefined
      },
      option: {
        background: 'active-background',
        color: 'active-text'
      },
      primary: {
        extend: function extend(props) {
          return primaryHoverBackground(props);
        }
      },
      secondary: {
        border: {
          width: '3px'
        }
      },
      toolbar: {
        background: {
          color: 'background-contrast'
        },
        color: undefined
      }
    },
    color: 'text-strong',
    border: {
      radius: '6px'
    },
    padding: {
      vertical: '4px',
      horizontal: '22px'
    },
    size: {
      small: {
        border: {
          radius: '6px'
        },
        pad: {
          vertical: '6px',
          horizontal: '18px'
        },
        iconOnly: {
          pad: '9px'
        },
        toolbar: {
          pad: {
            vertical: '4px',
            horizontal: '8px'
          }
        }
      },
      medium: {
        border: {
          radius: '6px'
        },
        pad: {
          vertical: '6px',
          horizontal: '18px'
        },
        iconOnly: {
          pad: '9px'
        },
        toolbar: {
          border: {
            radius: '6px'
          },
          pad: {
            vertical: '6px',
            horizontal: '12px'
          }
        }
      },
      large: {
        border: {
          radius: '8px'
        },
        pad: {
          vertical: '8px',
          horizontal: '24px'
        },
        iconOnly: {
          pad: '15px'
        },
        toolbar: {
          pad: {
            vertical: '8px',
            horizontal: '16px'
          }
        }
      },
      xlarge: {
        border: {
          radius: '10px'
        },
        pad: {
          vertical: '10px',
          horizontal: '20px'
        },
        'cta-primary': {
          pad: {
            vertical: '10px',
            horizontal: '28px'
          }
        },
        'cta-alternate': {
          pad: {
            vertical: '10px',
            horizontal: '28px'
          }
        }
      }
    },
    extend: function extend(_ref2) {
      var sizeProp = _ref2.sizeProp;
      // necessary so primary label is accessible on HPE green background
      var fontSize = '19px';
      var lineHeight = '24px';
      var style = '';
      // keep reasonable click target for small button
      if (sizeProp === 'small') {
        style += "line-height: " + lineHeight + ";";
      }
      if (sizeProp === 'medium' || sizeProp === undefined) {
        style += "font-size: " + fontSize + ";\n        line-height: " + lineHeight + ";";
      }
      return style;
    }
  },
  calendar: {
    // using level as a means of styling doesn't seem like the best...
    // need to file an issue against Grommet
    heading: {
      level: 3
    },
    icons: {
      next: _FormNext.FormNext,
      previous: _FormPrevious.FormPrevious
    },
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
      elevation: 'medium',
      extend: 'transition: all 0.3s ease-in-out;'
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
    },
    hover: {
      container: {
        elevation: 'large'
      }
    }
  },
  checkBox: {
    hover: {
      border: {
        color: 'border-strong'
      },
      background: {
        color: 'background-contrast'
      },
      // HPE Design System guidance states that pad="none" should be applied on CheckBox
      // when its used outside of a FormField. We will apply this hover treatment in
      // those instances.
      extend: function extend(_ref3) {
        var disabled = _ref3.disabled,
          pad = _ref3.pad,
          theme = _ref3.theme;
        return "\n      " + (!disabled && pad === 'none' && "border: 2px solid " + theme.global.colors['border-strong'][theme.dark ? 'dark' : 'light'] + ";") + "\n    ";
      }
    },
    color: 'background',
    border: {
      color: 'border',
      width: '1px'
    },
    check: {
      radius: '4px',
      extend: function extend(_ref4) {
        var theme = _ref4.theme,
          checked = _ref4.checked,
          indeterminate = _ref4.indeterminate;
        return "\n      background-color: " + (checked || indeterminate ? theme.global.colors['green!'] : theme.global.colors.background[theme.dark ? 'dark' : 'light']) + ";\n      " + ((checked || indeterminate) && 'border: none;') + "\n        ";
      }
    },
    icon: {
      extend: function extend(_ref5) {
        var theme = _ref5.theme;
        return "stroke-width: 2px;\n      stroke: " + theme.global.colors['text-primary-button'];
      }
    },
    gap: 'small',
    label: {
      align: 'start'
    },
    pad: {
      vertical: 'xsmall',
      horizontal: 'small'
    },
    toggle: {
      background: 'background',
      color: 'background',
      knob: {
        extend: function extend(_ref6) {
          var theme = _ref6.theme;
          return "\n           box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'].small + ";\n           border: 1px solid " + theme.global.colors.border[theme.dark ? 'dark' : 'light'] + "\n        ";
        }
      },
      extend: function extend(_ref7) {
        var checked = _ref7.checked,
          theme = _ref7.theme;
        return "\n        " + (checked && "background-color: " + theme.global.colors.green[theme.dark ? 'dark' : 'light'] + ";") + "\n      ";
      }
    },
    // HPE Design System guidance states that pad="none" should be applied on CheckBox
    // when its used outside of a FormField. We will apply this hover treatment in
    // those instances.
    extend: function extend(_ref8) {
      var disabled = _ref8.disabled,
        pad = _ref8.pad;
      return "\n    " + (!disabled && pad === 'none' && ":hover {\n      background-color: unset;\n    }") + "\n    font-weight: 500;\n    width: auto;\n  };\n  ";
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
      extend: function extend(_ref9) {
        var theme = _ref9.theme;
        return "\n        /* Margin and padding allow room for focus on table body */\n        margin: " + theme.global.edgeSize.xxsmall + " 0px;\n        padding: 0px " + theme.global.edgeSize.xxsmall + ";\n      ";
      }
    },
    header: {
      border: {
        side: 'bottom'
      },
      color: 'text-strong',
      extend: function extend(_ref10) {
        var column = _ref10.column,
          sort = _ref10.sort,
          sortable = _ref10.sortable,
          theme = _ref10.theme;
        return "\n          " + (sort && sort.property === column && "\n            background: " + theme.global.colors['background-contrast'][theme.dark ? 'dark' : 'light'] + "\n          ") + ";\n          " + (sortable && sort && sort.property !== column && "\n              svg {\n                opacity: 0;\n              }\n              :hover {\n                svg {\n                  opacity: 1;\n                }\n              }\n            ") + ";\n        ";
      },
      font: {
        weight: 500
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
        extend: 'backdrop-filter: blur(12px);'
      },
      body: {
        extend: 'backdrop-filter: blur(12px);'
      },
      footer: {
        extend: 'backdrop-filter: blur(12px);'
      }
    },
    primary: {
      weight: 400,
      color: 'text-strong'
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
    container: {
      round: 'xsmall'
    },
    icon: {
      size: 'small'
    }
  },
  fileInput: {
    border: {
      size: 'xsmall'
    },
    button: {
      border: {
        radius: '24px'
      },
      pad: {
        vertical: '6px',
        horizontal: '12px'
      },
      color: 'text-strong',
      font: {
        weight: 'bold'
      },
      hover: {
        background: 'background-contrast'
      }
    },
    dragOver: {
      background: 'background-contrast',
      border: 'none'
    },
    hover: {
      border: {
        color: 'border'
      }
    },
    message: {
      color: 'placeholder'
    },
    pad: {
      horizontal: 'xsmall'
    },
    extend: 'border-radius: 4px;'
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
        color: 'text-xweak'
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
    round: '6px',
    survey: {
      label: {
        margin: {
          bottom: 'none'
        }
      }
    }
  },
  heading: {
    color: 'text-strong',
    weight: 500,
    level: {
      1: {
        font: {
          weight: 400
        },
        small: {
          size: '24px',
          height: '24px'
        },
        medium: {
          size: '36px',
          height: '36px'
        },
        large: {
          size: '48px',
          height: '48px'
        },
        xlarge: {
          size: '60px',
          height: '60px'
        }
      },
      2: {
        small: {
          size: '20px',
          height: '20px'
        },
        medium: {
          size: '24px',
          height: '24px'
        },
        large: {
          size: '36px',
          height: '36px'
        },
        xlarge: {
          size: '48px',
          height: '48px'
        }
      },
      3: {
        font: {
          weight: 500
        },
        small: {
          size: '16px',
          height: '16px'
        },
        medium: {
          size: '20px',
          height: '20px'
        },
        large: {
          size: '24px',
          height: '24px'
        },
        xlarge: {
          size: '36px',
          height: '36px'
        }
      },
      4: {
        font: {
          weight: 500
        },
        small: {
          size: '12px',
          height: '12px'
        },
        medium: {
          size: '16px',
          height: '16px'
        },
        large: {
          size: '20px',
          height: '20px'
        },
        xlarge: {
          size: '24px',
          height: '24px'
        }
      },
      5: {
        font: {
          weight: 600
        },
        small: {
          size: '12px',
          height: '12px'
        },
        medium: {
          size: '12px',
          height: '12px'
        },
        large: {
          size: '16px',
          height: '16px'
        },
        xlarge: {
          size: '20px',
          height: '20px'
        }
      },
      6: {
        font: {
          weight: 600
        },
        small: {
          size: '12px',
          height: '12px'
        },
        medium: {
          size: '12px',
          height: '12px'
        },
        large: {
          size: '12px',
          height: '12px'
        },
        xlarge: {
          size: '16px',
          height: '16px'
        }
      }
    },
    // This block applies size-specific weights to headings to ensure
    // that as heading sizes get small, the weight increases and as they
    // get large, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support level and size specific weights.
    extend: function extend(_ref11) {
      var level = _ref11.level,
        size = _ref11.size;
      var fontWeight = '';
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
    }
  },
  icon: {
    size: {
      small: '16px',
      medium: '18px',
      large: '24px',
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
      background: '#0000001F',
      backdropFilter: "blur(12px)"
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
      extend: function extend(_ref12) {
        var theme = _ref12.theme;
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
    group: {
      container: {
        pad: 'none'
      },
      separator: {
        color: 'border',
        pad: 'none'
      }
    },
    icons: {
      color: 'text-strong'
    }
  },
  nameValuePair: {
    name: {
      color: 'text-strong',
      weight: 500
    }
  },
  notification: {
    actions: {
      color: {
        light: 'text',
        dark: 'text-strong'
      }
    },
    direction: 'row',
    container: {
      round: 'xsmall'
    },
    global: {
      container: {
        round: 'none'
      }
    },
    message: {
      color: {
        dark: 'text-strong'
      }
    },
    title: {
      // any text props
      color: 'text-strong',
      weight: 500
    },
    critical: {
      background: 'validation-critical',
      global: {
        background: 'validation-critical'
      },
      toast: {
        background: 'background-front'
      }
    },
    warning: {
      background: 'validation-warning',
      global: {
        background: 'validation-warning'
      },
      toast: {
        background: 'background-front'
      }
    },
    normal: {
      background: 'validation-ok',
      global: {
        background: 'validation-ok'
      },
      toast: {
        background: 'background-front'
      }
    },
    unknown: {
      background: 'background-contrast',
      global: {
        background: 'background-contrast'
      },
      toast: {
        background: 'background-front'
      }
    },
    info: {
      background: 'background-contrast',
      global: {
        background: 'background-contrast'
      },
      toast: {
        background: 'background-front'
      }
    },
    undefined: {
      background: 'background-contrast',
      global: {
        background: 'background-contrast'
      },
      toast: {
        background: 'background-front'
      }
    },
    toast: {
      direction: 'column'
    }
  },
  page: {
    wide: {
      width: {
        min: '336px',
        // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: 'xxlarge'
      },
      xsmall: {
        pad: {
          horizontal: 'large'
        }
      },
      xlarge: {
        pad: {
          horizontal: 'large'
        }
      }
    },
    narrow: {
      width: {
        min: '336px',
        // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: 'large'
      },
      xsmall: {
        pad: {
          horizontal: 'large'
        }
      },
      xlarge: {
        pad: {
          horizontal: 'large'
        }
      }
    },
    full: {
      width: {
        min: '336px',
        // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: '100%'
      },
      xsmall: {
        pad: {
          horizontal: 'large'
        }
      },
      xlarge: {
        pad: {
          horizontal: 'large'
        }
      }
    }
  },
  pageHeader: {
    subtitle: {
      size: 'xlarge'
    },
    xsmall: {
      areas: [['parent', 'parent'], ['title', 'actions'], ['subtitle', 'actions']],
      columns: [['small', 'flex'], 'auto'],
      rows: ['auto', 'auto', 'auto'],
      gap: {
        row: 'xsmall',
        column: 'medium'
      }
    },
    xlarge: {
      areas: [['parent', 'parent'], ['title', 'actions'], ['subtitle', 'actions']],
      columns: [['medium', 'large'], 'auto'],
      rows: ['auto', 'auto', 'auto'],
      gap: {
        row: 'xsmall',
        column: 'large'
      }
    }
  },
  pagination: {
    button: {
      border: {
        radius: '2em'
      },
      font: {
        weight: 700
      },
      active: {
        border: {
          radius: '100px'
        },
        font: {
          weight: 700
        }
      },
      disabled: {
        color: 'text-xweak'
      }
    }
  },
  paragraph: {
    xsmall: {
      size: '14px',
      height: '16px'
    },
    small: {
      size: '16px',
      height: '18px'
    },
    medium: {
      size: '18px',
      height: '24px'
    },
    large: {
      size: '24px',
      height: '32px'
    },
    xlarge: {
      size: '30px',
      height: '36px'
    },
    // xxlarge is not part of Chris's type exploration
    xxlarge: {
      size: '36px',
      height: '40px'
    },
    // This block applies size-specific weights to paragraph to ensure
    // that as paragraph sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: function extend(_ref13) {
      var size = _ref13.size;
      return "\n      " + (['xlarge', 'xxlarge'].includes(size) ? 'font-weight: 300;' : '') + ";\n    ";
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
      extend: function extend(_ref14) {
        var theme = _ref14.theme;
        return "\n      font-weight: 500;\n      width: auto;\n      padding: " + theme.global.edgeSize.xxsmall + " " + theme.global.edgeSize.xsmall + ";\n    ";
      }
    },
    extend: function extend(_ref15) {
      var theme = _ref15.theme;
      return "\n      padding: " + theme.global.edgeSize.xxsmall + " " + theme.global.edgeSize.xsmall + ";\n    ";
    },
    gap: 'xsmall',
    hover: {
      background: {
        color: 'background-contrast'
      },
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
      color: 'green'
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
      extend: function extend(_ref16) {
        var disabled = _ref16.disabled;
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
      pad: 'none',
      color: 'green',
      border: [{
        color: 'border-weak',
        side: 'all',
        size: 'medium'
      }, {
        color: 'border-weak',
        side: 'right',
        size: 'medium'
      }, {
        color: 'border-weak',
        side: 'top',
        size: 'medium'
      }, {
        color: 'border-weak',
        side: 'left',
        size: 'medium'
      }]
    }
  },
  starRating: {
    color: 'purple!'
  },
  tab: {
    color: 'text',
    active: {
      background: undefined,
      color: 'text-strong',
      weight: 'bold'
    },
    hover: {
      background: 'transparent',
      color: 'text'
    },
    border: {
      side: 'bottom',
      color: 'transparent',
      size: 'medium',
      active: {
        color: 'green!'
      },
      disabled: {
        color: undefined
      },
      hover: {
        color: 'border-weak'
      }
    },
    disabled: {
      color: 'text-xweak'
    },
    pad: {
      // top and bottom pad need to be defined individually, specifying
      // "vertical" only applies to top
      bottom: 'small',
      top: 'small',
      // align horizontal pad with button
      horizontal: '18px'
    },
    margin: {
      // bring the overall tabs border behind invidual tab borders
      vertical: '-1px',
      horizontal: 'none'
    },
    extend: "\n        // necessary to remove default line-height of 24px\n        // how will this behave if tab has an icon?\n        // is that allowed?\n        // grommet enhancement should be considered if so\n        > span { line-height: 18px; }\n      "
  },
  tabs: {
    header: {
      alignSelf: 'start',
      border: {
        side: 'bottom',
        size: 'xsmall',
        color: 'border-weak'
      }
    },
    step: {
      xsmall: 1,
      xlarge: 3
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
      extend: function extend(_ref17) {
        var theme = _ref17.theme;
        return "\n          :hover {\n            button {\n              background: " + theme.global.colors['background-contrast'][theme.dark ? 'dark' : 'light'] + "\n            }\n          }\n        ";
      }
    },
    row: {
      hover: {
        background: 'background-contrast'
      }
    },
    footer: {
      extend: "\n        font-weight: 500;\n      "
    }
  },
  tag: {
    value: {
      weight: 500
    }
  },
  text: {
    xsmall: {
      // weight needs to be modified at the size level
      size: '14px',
      height: '16px'
    },
    small: {
      // weight needs to be modified at the size level
      size: '16px',
      height: '20px'
    },
    medium: {
      // weight needs to be modified at the size level
      size: '18px',
      height: '24px'
    },
    large: {
      size: '24px',
      height: '32px'
    },
    xlarge: {
      size: '30px',
      height: '36px'
    },
    // xxlarge is not part of Chris's type exploration
    xxlarge: {
      size: '36px',
      height: '40px'
    },
    '3xl': {
      size: '42px',
      height: '46px'
    },
    '4xl': {
      size: '48px',
      height: '48px'
    },
    '5xl': {
      size: '72px',
      height: '72px'
    },
    '6xl': {
      size: '72px',
      height: '72px'
    },
    // This block applies size-specific weights to text to ensure
    // that as text sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: function extend(_ref18) {
      var size = _ref18.size;
      return "\n      " + (['xlarge', 'xxlarge', '3xl', '4xl', '5xl', '6xl'].includes(size) ? 'font-weight: 300;' : '') + ";\n    ";
    }
  },
  textInput: {
    container: {
      extend: function extend(_ref19) {
        var theme = _ref19.theme;
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
  thumbsRating: {
    like: {
      color: 'purple!'
    },
    dislike: {
      color: 'purple!'
    }
  },
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24
});
exports.hpe = hpe;