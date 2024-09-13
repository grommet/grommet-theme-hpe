"use strict";

exports.__esModule = true;
exports.hpe = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _hpeDesignTokens = require("hpe-design-tokens");
var _Ascending = require("grommet-icons/icons/Ascending");
var _Blank = require("grommet-icons/icons/Blank");
var _CircleAlert = require("grommet-icons/icons/CircleAlert");
var _Close = require("grommet-icons/icons/Close");
var _Descending = require("grommet-icons/icons/Descending");
var _Down = require("grommet-icons/icons/Down");
var _Next = require("grommet-icons/icons/Next");
var _Previous = require("grommet-icons/icons/Previous");
var _Unsorted = require("grommet-icons/icons/Unsorted");
var _Up = require("grommet-icons/icons/Up");
var _Hpe = require("grommet-icons/icons/Hpe");
var _backgrounds = require("./backgrounds");
var _colors = require("./colors");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
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
  return !props.active ? "background: " + _hpeDesignTokens.components.hpe.button.primary.enabled.background + "; background-color: " + props.theme.global.colors[_hpeDesignTokens.components.hpe.button.primary.enabled.backgroundColor][props.theme.dark ? 'dark' : 'light'] + ";" : '';
};

// necessary to adjust the background color
// of button to darker green to expose gradient on hover
var primaryHoverBackground = function primaryHoverBackground(props) {
  return !props.active ? "background-color: " + _hpeDesignTokens.components.hpe.button.primary.hover.background + ";" : "color: " + props.theme.global.colors[_hpeDesignTokens.components.hpe.button.primary.selected.enabled.textColor][props.theme.dark ? 'dark' : 'light'];
};
var dimensions = {
  borderSize: {
    xsmall: _hpeDesignTokens.large.hpe.borderWidth.xsmall,
    small: _hpeDesignTokens.large.hpe.borderWidth.small,
    medium: _hpeDesignTokens.large.hpe.borderWidth.medium,
    "default": _hpeDesignTokens.large.hpe.borderWidth["default"],
    large: _hpeDesignTokens.large.hpe.borderWidth.large,
    xlarge: _hpeDesignTokens.large.hpe.borderWidth.xlarge
  },
  edgeSize: {
    none: _hpeDesignTokens.large.hpe.spacing.none,
    hair: _hpeDesignTokens.large.hpe.spacing.hair,
    xxsmall: _hpeDesignTokens.large.hpe.spacing.xxsmall,
    xsmall: _hpeDesignTokens.large.hpe.spacing.xsmall,
    small: _hpeDesignTokens.large.hpe.spacing.small,
    medium: _hpeDesignTokens.large.hpe.spacing.medium,
    large: _hpeDesignTokens.large.hpe.spacing.large,
    xlarge: _hpeDesignTokens.large.hpe.spacing.xlarge,
    responsiveBreakpoint: 'small'
  },
  size: {
    xxsmall: _hpeDesignTokens.large.hpe.size.content.xxsmall,
    xsmall: _hpeDesignTokens.large.hpe.size.content.xsmall,
    small: _hpeDesignTokens.large.hpe.size.content.small,
    medium: _hpeDesignTokens.large.hpe.size.content.medium,
    large: _hpeDesignTokens.large.hpe.size.content.large,
    xlarge: _hpeDesignTokens.large.hpe.size.content.xlarge,
    xxlarge: _hpeDesignTokens.large.hpe.size.content.xxlarge,
    full: '100%'
  },
  breakpoints: {
    xsmall: {
      borderSize: {
        xsmall: _hpeDesignTokens.small.hpe.borderWidth.xsmall,
        small: _hpeDesignTokens.small.hpe.borderWidth.small,
        medium: _hpeDesignTokens.small.hpe.borderWidth.medium,
        "default": _hpeDesignTokens.small.hpe.borderWidth["default"],
        large: _hpeDesignTokens.small.hpe.borderWidth.large,
        xlarge: _hpeDesignTokens.small.hpe.borderWidth.xlarge
      },
      edgeSize: {
        none: _hpeDesignTokens.small.hpe.spacing.none,
        hair: _hpeDesignTokens.small.hpe.spacing.hair,
        xxsmall: _hpeDesignTokens.small.hpe.spacing.xxsmall,
        xsmall: _hpeDesignTokens.small.hpe.spacing.xsmall,
        small: _hpeDesignTokens.small.hpe.spacing.small,
        medium: _hpeDesignTokens.small.hpe.spacing.medium,
        large: _hpeDesignTokens.small.hpe.spacing.large,
        xlarge: _hpeDesignTokens.small.hpe.spacing.xlarge,
        responsiveBreakpoint: 'small'
      },
      size: {
        xxsmall: _hpeDesignTokens.small.hpe.size.content.xxsmall,
        xsmall: _hpeDesignTokens.small.hpe.size.content.xsmall,
        small: _hpeDesignTokens.small.hpe.size.content.small,
        medium: _hpeDesignTokens.small.hpe.size.content.medium,
        large: _hpeDesignTokens.small.hpe.size.content.large,
        xlarge: _hpeDesignTokens.small.hpe.size.content.xlarge,
        xxlarge: _hpeDesignTokens.small.hpe.size.content.xxlarge,
        full: '100%'
      },
      value: _hpeDesignTokens.global.hpe.breakpoint.xsmall
    },
    small: {
      borderSize: {
        xsmall: _hpeDesignTokens.small.hpe.borderWidth.xsmall,
        small: _hpeDesignTokens.small.hpe.borderWidth.small,
        medium: _hpeDesignTokens.small.hpe.borderWidth.medium,
        "default": _hpeDesignTokens.small.hpe.borderWidth["default"],
        large: _hpeDesignTokens.small.hpe.borderWidth.large,
        xlarge: _hpeDesignTokens.small.hpe.borderWidth.xlarge
      },
      edgeSize: {
        none: _hpeDesignTokens.small.hpe.spacing.none,
        hair: _hpeDesignTokens.small.hpe.spacing.hair,
        xxsmall: _hpeDesignTokens.small.hpe.spacing.xxsmall,
        xsmall: _hpeDesignTokens.small.hpe.spacing.xsmall,
        small: _hpeDesignTokens.small.hpe.spacing.small,
        medium: _hpeDesignTokens.small.hpe.spacing.medium,
        large: _hpeDesignTokens.small.hpe.spacing.large,
        xlarge: _hpeDesignTokens.small.hpe.spacing.xlarge,
        responsiveBreakpoint: 'small'
      },
      size: {
        xxsmall: _hpeDesignTokens.small.hpe.size.content.xxsmall,
        xsmall: _hpeDesignTokens.small.hpe.size.content.xsmall,
        small: _hpeDesignTokens.small.hpe.size.content.small,
        medium: _hpeDesignTokens.small.hpe.size.content.medium,
        large: _hpeDesignTokens.small.hpe.size.content.large,
        xlarge: _hpeDesignTokens.small.hpe.size.content.xlarge,
        xxlarge: _hpeDesignTokens.small.hpe.size.content.xxlarge,
        full: '100%'
      },
      value: _hpeDesignTokens.global.hpe.breakpoint.small
    },
    medium: {
      value: _hpeDesignTokens.global.hpe.breakpoint.medium
    },
    large: {
      value: _hpeDesignTokens.global.hpe.breakpoint.large
    },
    xlarge: {}
  }
};

// option button kind styles. abstracted so select.emptySearchMessage
// can reference pad value
var option = {
  color: _hpeDesignTokens.components.hpe.select.option.enabled.textColor,
  border: {
    radius: dimensions.edgeSize[_hpeDesignTokens.components.hpe.select.medium.option.borderRadius] || _hpeDesignTokens.components.hpe.select.medium.option.borderRadius,
    width: dimensions.borderSize[_hpeDesignTokens.components.hpe.select.medium.option.borderWidth] || _hpeDesignTokens.components.hpe.select.medium.option.borderWidth,
    color: _hpeDesignTokens.components.hpe.select.option.enabled.borderColor
  },
  pad: {
    horizontal: _hpeDesignTokens.components.hpe.select.medium.option.paddingX,
    vertical: _hpeDesignTokens.components.hpe.select.medium.option.paddingY
  },
  font: {
    weight: _hpeDesignTokens.components.hpe.select.option.enabled.fontWeight
  }
};

// abstracted so button and pinned list icon can reference
var mediumIconOnlyPad = {
  vertical: _hpeDesignTokens.components.hpe.button.medium["default"].iconOnly.paddingY,
  horizontal: _hpeDesignTokens.components.hpe.button.medium["default"].iconOnly.paddingX
};
var hpe = exports.hpe = deepFreeze({
  defaultMode: 'light',
  global: _extends({
    backgrounds: _backgrounds.backgrounds
  }, dimensions, {
    colors: _colors.colors,
    control: {
      border: {
        radius: _hpeDesignTokens.components.hpe.formField.medium.input.container.borderRadius,
        color: _hpeDesignTokens.components.hpe.formField.input.container.enabled.borderColor
      }
    },
    input: {
      font: {
        height: 'inherit',
        weight: _hpeDesignTokens.components.hpe.formField.medium.valueText.fontWeight
      },
      padding: {
        horizontal: _hpeDesignTokens.components.hpe.formField.medium.input.container.paddingX,
        vertical: _hpeDesignTokens.components.hpe.formField.medium.input.container.paddingY
      },
      readOnly: {
        background: _hpeDesignTokens.components.hpe.formField.input.container.readOnly.background,
        border: {
          color: _hpeDesignTokens.components.hpe.formField.input.container.readOnly.borderColor
        }
      },
      extend: "\n        &::-webkit-input-placeholder {\n        font-weight: " + _hpeDesignTokens.components.hpe.formField.medium.placeholderText.fontWeight + ";\n      }\n    \n      &::-moz-placeholder {\n        font-weight: " + _hpeDesignTokens.components.hpe.formField.medium.placeholderText.fontWeight + ";\n      }\n    \n      &:-ms-input-placeholder {\n        font-weight: " + _hpeDesignTokens.components.hpe.formField.medium.placeholderText.fontWeight + ";\n      }\n      "
    },
    font: {
      family: _hpeDesignTokens.global.hpe.fontStack.primary,
      face: "\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n          font-weight: 400;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff\") format('woff');\n          font-weight: 700;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff\") format('woff');\n          font-weight: 600;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff\") format('woff');\n          font-weight: 500;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff\") format('woff');\n          font-weight: 100;\n        }",
      size: _hpeDesignTokens.large.hpe.text.medium.fontSize
    },
    focus: {
      border: undefined
    },
    active: {
      background: 'background-active',
      color: 'active-text'
    },
    drop: {
      background: _hpeDesignTokens.components.hpe.drop.background,
      border: {
        radius: dimensions.edgeSize[_hpeDesignTokens.components.hpe.drop.borderRadius] || _hpeDesignTokens.components.hpe.drop.borderRadius
      },
      margin: _hpeDesignTokens.components.hpe.drop.margin,
      intelligentMargin: true,
      shadowSize: 'medium',
      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment brings Drop in alignment with Layer
       * which needs an elevated z-index to sit atop the Global header. */
      zIndex: _hpeDesignTokens.components.hpe.drop.zIndex
    },
    elevation: {
      // Elevation values were derived from this Figma file.
      // https://www.figma.com/file/eZYR3dtWdb9U90QvJ7p3T9/HPE-Color-Styles?node-id=405%3A25
      // Naming in Figma file is strong/default/weak vs. Grommet t-shirt sizing.
      // As defined here, default is currently mapping to medium.
      light: {
        small: _hpeDesignTokens.light.hpe.elevation.small,
        medium: _hpeDesignTokens.light.hpe.elevation.medium,
        large: _hpeDesignTokens.light.hpe.elevation.large
      },
      dark: {
        small: _hpeDesignTokens.dark.hpe.elevation.small,
        medium: _hpeDesignTokens.dark.hpe.elevation.medium,
        large: _hpeDesignTokens.dark.hpe.elevation.large
      }
    },
    hover: {
      background: 'background-hover',
      color: 'text-strong' // TO DO
    },
    selected: {
      background: 'background-selected-strong-enabled',
      color: 'text-onSelectedStrong'
    }
  }),
  accordion: {
    panel: {
      border: {
        side: 'horizontal',
        color: 'border'
      }
    },
    heading: {
      level: 3,
      margin: {
        vertical: 'medium',
        horizontal: 'xsmall'
      }
    },
    hover: {
      background: 'background-hover',
      heading: {
        color: undefined
      }
    },
    border: undefined,
    icons: {
      collapse: _Up.Up,
      expand: _Down.Down,
      color: 'text'
    }
  },
  anchor: {
    color: _hpeDesignTokens.components.hpe.anchor["default"].enabled.textColor,
    textDecoration: _hpeDesignTokens.components.hpe.anchor["default"].enabled.textDecoration,
    fontWeight: _hpeDesignTokens.components.hpe.anchor["default"].enabled.fontWeight,
    gap: _hpeDesignTokens.components.hpe.anchor.medium["default"].gapX,
    hover: {
      textDecoration: _hpeDesignTokens.components.hpe.anchor["default"].hover.textDecoration
    },
    size: {
      // Q: missing tokens
      // A: Our approach to anchor styling makes it difficult to automate
      // because we've blended "size" and "kind into single variables"
      large: {
        color: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.fontWeight
      },
      xlarge: {
        color: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.fontWeight
      },
      xxlarge: {
        color: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.fontWeight
      },
      '3xl': {
        color: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.fontWeight
      },
      '4xl': {
        color: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.fontWeight
      },
      '5xl': {
        color: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.fontWeight
      },
      '6xl': {
        color: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: _hpeDesignTokens.components.hpe.anchor.emphasized.enabled.fontWeight
      }
    }
  },
  avatar: {
    size: {
      // At this point in time we hadn't standardized on component sizes, so the sizing is off
      // but these feel like the right tokens
      xsmall: _hpeDesignTokens.components.hpe.component.xsmall.minHeight,
      small: _hpeDesignTokens.components.hpe.component.small.minHeight,
      // 24px
      medium: _hpeDesignTokens.components.hpe.component.medium.minHeight,
      // default 48px
      large: _hpeDesignTokens.components.hpe.component.large.minHeight,
      // 72px
      xlarge: _hpeDesignTokens.components.hpe.component.xlarge.minHeight,
      // 96px
      '2xl': baseSpacing * 5 + "px",
      // TO DO no component size, is this a one off?
      '3xl': baseSpacing * 6 + "px",
      // TO DO no component size, is this a one off?
      '4xl': baseSpacing * 7 + "px",
      // TO DO no component size, is this a one off?
      '5xl': baseSpacing * 8 + "px" // TO DO no component size, is this a one off?
    },
    text: {
      size: {
        xsmall: 'small',
        // TO DO no component size, is this a one off?
        // At this point in time we hadn't standardized on component sizes, so the sizing is off
        // TO DO this feels like it should be able to point to components.hpe.component.medium.fontSize, etc.
        small: 'small',
        medium: 'medium',
        large: 'large',
        xlarge: 'xlarge',
        '2xl': '3xl',
        // TO DO no component size, is this a one off?
        '3xl': '4xl',
        // TO DO no component size, is this a one off?
        '4xl': '5xl',
        // TO DO no component size, is this a one off?
        '5xl': '6xl' // TO DO no component size, is this a one off?
      }
    }
  },
  button: {
    badge: {
      align: 'container',
      container: {
        background: 'text-strong'
      },
      size: {
        medium: '18px'
      },
      text: {
        size: {
          medium: 'xsmall'
        }
      }
    },
    // TO DO add cta-primary variant
    'cta-primary': {
      background: {
        color: 'brand'
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
    // TO DO add cta-alternate variant
    'cta-alternate': {
      background: 'background-cta-alternate',
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
      color: _hpeDesignTokens.components.hpe.button["default"].enabled.textColor,
      border: {
        width: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.medium["default"].borderWidth] || _hpeDesignTokens.components.hpe.button.medium["default"].borderWidth,
        color: _hpeDesignTokens.components.hpe.button["default"].enabled.borderColor
      },
      font: {
        weight: _hpeDesignTokens.components.hpe.button["default"].enabled.fontWeight
      }
    },
    gap: _hpeDesignTokens.components.hpe.button.medium["default"].gapX,
    primary: {
      background: '',
      border: {
        width: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.medium.primary.borderWidth] || _hpeDesignTokens.components.hpe.button.medium.primary.borderWidth,
        color: _hpeDesignTokens.components.hpe.button.primary.enabled.borderColor
      },
      color: _hpeDesignTokens.components.hpe.button.primary.enabled.textColor,
      font: {
        weight: _hpeDesignTokens.components.hpe.button.primary.enabled.fontWeight
      },
      extend: function extend(props) {
        return primaryBackground(props);
      }
    },
    secondary: {
      background: _hpeDesignTokens.components.hpe.button.secondary.enabled.background,
      border: {
        width: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.medium.secondary.borderWidth] || _hpeDesignTokens.components.hpe.button.medium.secondary.borderWidth,
        color: _hpeDesignTokens.components.hpe.button.secondary.enabled.borderColor
      },
      color: _hpeDesignTokens.components.hpe.button.secondary.enabled.textColor,
      font: {
        weight: _hpeDesignTokens.components.hpe.button.secondary.enabled.fontWeight
      }
    },
    toolbar: {
      border: {
        width: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.medium.toolbar.borderWidth] || _hpeDesignTokens.components.hpe.button.medium.toolbar.borderWidth,
        color: _hpeDesignTokens.components.hpe.button.toolbar.enabled.borderColor,
        radius: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.medium.toolbar.borderRadius] || _hpeDesignTokens.components.hpe.button.medium.toolbar.borderRadius
      },
      color: _hpeDesignTokens.components.hpe.button.toolbar.enabled.textColor,
      font: {
        weight: _hpeDesignTokens.components.hpe.button.toolbar.enabled.fontWeight
      }
    },
    option: option,
    active: {
      background: {
        color: _hpeDesignTokens.components.hpe.button["default"].selected.enabled.background
      },
      color: _hpeDesignTokens.components.hpe.button["default"].selected.enabled.textColor,
      secondary: {
        background: {
          color: _hpeDesignTokens.components.hpe.button.secondary.selected.enabled.background
        },
        border: {
          color: _hpeDesignTokens.components.hpe.button.secondary.selected.enabled.borderColor
        },
        color: _hpeDesignTokens.components.hpe.button.secondary.selected.enabled.textColor
      },
      primary: {
        background: {
          color: _hpeDesignTokens.components.hpe.button.primary.selected.enabled.background
        },
        border: {
          color: _hpeDesignTokens.components.hpe.button.primary.selected.enabled.borderColor
        },
        color: _hpeDesignTokens.components.hpe.button.primary.selected.enabled.textColor
      },
      toolbar: {
        background: {
          color: _hpeDesignTokens.components.hpe.button.toolbar.selected.enabled.background
        },
        border: {
          color: _hpeDesignTokens.components.hpe.button.toolbar.selected.enabled.borderColor
        },
        color: _hpeDesignTokens.components.hpe.button.toolbar.selected.enabled.textColor
      },
      option: {
        background: {
          color: _hpeDesignTokens.components.hpe.select.option.selected.background
        },
        border: {
          color: _hpeDesignTokens.components.hpe.select.option.selected.borderColor
        },
        color: _hpeDesignTokens.components.hpe.select.option.selected.textColor
      }
    },
    selected: {
      option: {
        background: _hpeDesignTokens.components.hpe.select.option.selected.enabled.background,
        color: _hpeDesignTokens.components.hpe.select.option.selected.textColor,
        font: {
          weight: _hpeDesignTokens.components.hpe.select.option.selected.enabled.fontWeight
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
        background: _hpeDesignTokens.components.hpe.button["default"].hover.background,
        border: {
          color: _hpeDesignTokens.components.hpe.button["default"].hover.borderColor
        },
        color: _hpeDesignTokens.components.hpe.button["default"].hover.textColor
      },
      option: {
        background: _hpeDesignTokens.components.hpe.select.option.hover.background,
        border: {
          color: _hpeDesignTokens.components.hpe.select.option.hover.borderColor
        },
        color: _hpeDesignTokens.components.hpe.select.option.hover.textColor
      },
      primary: {
        background: '',
        border: {
          color: _hpeDesignTokens.components.hpe.button.primary.hover.borderColor
        },
        color: _hpeDesignTokens.components.hpe.button.primary.hover.textColor,
        extend: function extend(props) {
          return primaryHoverBackground(props);
        }
      },
      secondary: {
        background: _hpeDesignTokens.components.hpe.button.secondary.hover.background,
        border: {
          color: _hpeDesignTokens.components.hpe.button.secondary.hover.borderColor,
          width: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.medium.secondary.borderWidth] || _hpeDesignTokens.components.hpe.button.medium.secondary.borderWidth
        },
        color: _hpeDesignTokens.components.hpe.button.secondary.hover.textColor
      },
      toolbar: {
        background: _hpeDesignTokens.components.hpe.button.toolbar.hover.background,
        border: {
          color: _hpeDesignTokens.components.hpe.button.toolbar.hover.borderColor
        },
        color: _hpeDesignTokens.components.hpe.button.toolbar.hover.textColor
      }
    },
    color: _hpeDesignTokens.components.hpe.button["default"].enabled.textColor,
    size: {
      small: {
        border: {
          radius: _hpeDesignTokens.components.hpe.button.small["default"].borderRadius
        },
        pad: {
          vertical: _hpeDesignTokens.components.hpe.button.small["default"].paddingY,
          horizontal: _hpeDesignTokens.components.hpe.button.small["default"].paddingX
        },
        iconOnly: {
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.small["default"].iconOnly.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.small["default"].iconOnly.paddingX
          }
        },
        secondary: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.small.secondary.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.small.secondary.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.small["default"].paddingX
          }
        },
        primary: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.small.primary.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.small.primary.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.small["default"].paddingX
          }
        },
        toolbar: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.small.toolbar.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.small.toolbar.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.small.toolbar.paddingX
          }
        }
      },
      medium: {
        border: {
          radius: _hpeDesignTokens.components.hpe.button.medium["default"].borderRadius
        },
        pad: {
          vertical: _hpeDesignTokens.components.hpe.button.medium["default"].paddingY,
          horizontal: _hpeDesignTokens.components.hpe.button.medium["default"].paddingX
        },
        iconOnly: {
          pad: mediumIconOnlyPad
        },
        secondary: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.medium.secondary.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.medium.secondary.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.medium["default"].paddingX
          }
        },
        primary: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.medium.primary.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.medium.primary.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.medium["default"].paddingX
          }
        },
        toolbar: {
          border: {
            radius: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.medium.toolbar.borderRadius] || _hpeDesignTokens.components.hpe.button.medium.toolbar.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.medium.toolbar.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.medium.toolbar.paddingX
          }
        }
      },
      large: {
        border: {
          radius: _hpeDesignTokens.components.hpe.button.large["default"].borderRadius
        },
        pad: {
          vertical: _hpeDesignTokens.components.hpe.button.large["default"].paddingY,
          horizontal: _hpeDesignTokens.components.hpe.button.large["default"].paddingX
        },
        iconOnly: {
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.large["default"].iconOnly.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.large["default"].iconOnly.paddingX
          }
        },
        secondary: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.large.secondary.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.large.secondary.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.large["default"].paddingX
          }
        },
        primary: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.large.primary.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.large.primary.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.large["default"].paddingX
          }
        },
        toolbar: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.large.toolbar.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.large.toolbar.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.large.toolbar.paddingX
          }
        }
      },
      xlarge: {
        border: {
          radius: _hpeDesignTokens.components.hpe.button.xlarge["default"].borderRadius
        },
        pad: {
          vertical: _hpeDesignTokens.components.hpe.button.xlarge["default"].paddingY,
          horizontal: _hpeDesignTokens.components.hpe.button.xlarge["default"].paddingX
        },
        iconOnly: {
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.xlarge["default"].iconOnly.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.xlarge["default"].iconOnly.paddingX
          }
        },
        secondary: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.xlarge.secondary.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.xlarge.secondary.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.xlarge["default"].paddingX
          }
        },
        primary: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.xlarge.primary.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.xlarge.primary.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.xlarge["default"].paddingX
          }
        },
        toolbar: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.xlarge.toolbar.borderRadius
          },
          pad: {
            vertical: _hpeDesignTokens.components.hpe.button.xlarge.toolbar.paddingY,
            horizontal: _hpeDesignTokens.components.hpe.button.xlarge.toolbar.paddingX
          }
        }
      }
    },
    extend: function extend(_ref2) {
      var _components$hpe$butto, _components$hpe$butto2;
      var hasIcon = _ref2.hasIcon,
        hasLabel = _ref2.hasLabel,
        kind = _ref2.kind,
        sizeProp = _ref2.sizeProp;
      // necessary so primary label is accessible on HPE green background
      var fontSize = (_components$hpe$butto = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto = _components$hpe$butto[sizeProp]) == null || (_components$hpe$butto = _components$hpe$butto[kind]) == null ? void 0 : _components$hpe$butto.fontSize;
      var lineHeight = (_components$hpe$butto2 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto2 = _components$hpe$butto2[sizeProp]) == null || (_components$hpe$butto2 = _components$hpe$butto2[kind]) == null ? void 0 : _components$hpe$butto2.lineHeight;
      var style = '';
      var iconOnly = hasIcon && !hasLabel;
      if ((sizeProp === 'medium' || sizeProp === undefined) && !iconOnly) {
        style += "font-size: " + fontSize + ";\n        line-height: " + lineHeight + ";";
      }
      if (kind === 'secondary') {
        var _components$hpe$butto3;
        style += "&:hover { box-shadow: " + ((_components$hpe$butto3 = _hpeDesignTokens.components.hpe.button[sizeProp].secondary) == null || (_components$hpe$butto3 = _components$hpe$butto3.hover) == null ? void 0 : _components$hpe$butto3.boxShadow) + "; }";
      }
      return style;
    }
  },
  calendar: {
    day: {
      extend: function extend(_ref3) {
        var _theme$global$colors$, _theme$global$colors$2;
        var isSelected = _ref3.isSelected,
          theme = _ref3.theme;
        return isSelected && "\n        background: " + ((_theme$global$colors$ = theme.global.colors[theme.global.selected.background]) == null ? void 0 : _theme$global$colors$[theme.dark ? 'dark' : 'light']) + ";\n        color: " + ((_theme$global$colors$2 = theme.global.colors[theme.global.selected.color]) == null ? void 0 : _theme$global$colors$2[theme.dark ? 'dark' : 'light']) + ";";
      }
    },
    icons: {
      next: _Next.Next,
      previous: _Previous.Previous
    },
    small: {
      fontSize: '13.6px',
      lineHeight: 1.375,
      daySize: '27.43px',
      title: {
        size: 'medium',
        weight: _hpeDesignTokens.global.hpe.fontWeight.medium,
        color: 'text-strong'
      }
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
      title: {
        size: 'large',
        weight: _hpeDesignTokens.global.hpe.fontWeight.medium,
        color: 'text-strong'
      }
    },
    large: {
      fontSize: '31.2px',
      lineHeight: 1.11,
      daySize: '109.71px',
      title: {
        size: 'xlarge',
        weight: _hpeDesignTokens.global.hpe.fontWeight.medium,
        color: 'text-strong'
      }
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
        color: _hpeDesignTokens.components.hpe.checkbox.control.hover.borderColor,
        width: _hpeDesignTokens.components.hpe.checkbox.control.hover.borderWidth
      },
      background: {
        color: _hpeDesignTokens.components.hpe.formField.input.group.item.hover.background
      },
      // HPE Design System guidance states that pad="none" should be applied on CheckBox
      // when its used outside of a FormField. We will apply this hover treatment in
      // those instances.
      extend: function extend(_ref4) {
        var disabled = _ref4.disabled,
          pad = _ref4.pad,
          theme = _ref4.theme,
          toggle = _ref4.toggle;
        return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        ", "\n      "])), !disabled && pad === 'none' && !toggle && "border: 2px solid " + theme.global.colors[_hpeDesignTokens.components.hpe.checkbox.control.hover.borderColor][theme.dark ? 'dark' : 'light'] + ";");
      } // Q: missing token for hover borderWidth? this falls into similar boat as secondary button
    },
    color: _hpeDesignTokens.components.hpe["switch"].control.handle.enabled.background,
    border: {
      color: _hpeDesignTokens.components.hpe.checkbox.control.enabled.borderColor,
      width: dimensions.borderSize[_hpeDesignTokens.components.hpe.checkbox.medium.control.borderWidth] || _hpeDesignTokens.components.hpe.checkbox.medium.control.borderWidth
    },
    check: {
      radius: _hpeDesignTokens.components.hpe.checkbox.medium.control.borderRadius,
      thickness: _hpeDesignTokens.components.hpe.checkbox.control.hover.borderWidth,
      extend: function extend(_ref5) {
        var _theme$global$colors$3;
        var theme = _ref5.theme,
          checked = _ref5.checked,
          indeterminate = _ref5.indeterminate;
        return "\n      margin-block: " + (parseFloat(_hpeDesignTokens.large.hpe.text.medium.lineHeight, 10) * 16 - parseFloat(_hpeDesignTokens.components.hpe.checkbox.medium.control.height, 10) * 16) / 2 + "px;\n      background-color: " + (checked || indeterminate ? (_theme$global$colors$3 = theme.global.colors[_hpeDesignTokens.components.hpe.checkbox.control.selected.enabled.background]) == null ? void 0 : _theme$global$colors$3[theme.dark ? 'dark' : 'light'] : theme.global.colors.background[theme.dark ? 'dark' : 'light']) + ";\n      " + ((checked || indeterminate) && 'border: none;') + "\n        ";
      }
    },
    icon: {
      extend: function extend(_ref6) {
        var _theme$global$colors$4;
        var theme = _ref6.theme;
        return "stroke-width: 2px;\n      stroke: " + ((_theme$global$colors$4 = theme.global.colors[_hpeDesignTokens.components.hpe.checkbox.control.selected.enabled.iconColor]) == null ? void 0 : _theme$global$colors$4[theme.dark ? 'dark' : 'light']);
      }
    },
    gap: _hpeDesignTokens.components.hpe.checkbox.medium.gapX,
    label: {
      align: 'start'
    },
    pad: {
      vertical: _hpeDesignTokens.components.hpe.component.medium.paddingY,
      horizontal: _hpeDesignTokens.components.hpe.formField.medium.input.container.paddingX
    },
    size: _hpeDesignTokens.components.hpe.checkbox.medium.control.width,
    toggle: {
      background: _hpeDesignTokens.components.hpe["switch"].control.track.enabled.background,
      color: _hpeDesignTokens.components.hpe["switch"].control.handle.enabled.background,
      knob: {
        extend: function extend(_ref7) {
          var theme = _ref7.theme;
          return "\n           box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'].small + ";\n           border: " + dimensions.borderSize[_hpeDesignTokens.components.hpe["switch"].medium.control.handle.borderWidth] + " solid " + theme.global.colors[_hpeDesignTokens.components.hpe["switch"].control.handle.enabled.borderColor][theme.dark ? 'dark' : 'light'] + ";\n        ";
        }
      },
      extend: function extend(_ref8) {
        var _theme$global$colors$5;
        var checked = _ref8.checked,
          theme = _ref8.theme;
        return "\n        " + (checked && "background-color: " + ((_theme$global$colors$5 = theme.global.colors[_hpeDesignTokens.components.hpe["switch"].control.track.selected.enabled.background]) == null ? void 0 : _theme$global$colors$5[theme.dark ? 'dark' : 'light']) + ";") + "\n      ";
      }
    },
    // HPE Design System guidance states that pad="none" should be applied on CheckBox
    // when its used outside of a FormField. We will apply this hover treatment in
    // those instances.
    extend: function extend(_ref9) {
      var disabled = _ref9.disabled,
        pad = _ref9.pad;
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    ", "\n    font-weight: ", ";\n    width: auto;\n  };\n  "])), !disabled && pad === 'none' && "&:hover {\n      background-color: unset;\n    }", _hpeDesignTokens.components.hpe.checkbox.medium.label.fontWeight);
    }
  },
  checkBoxGroup: {
    container: {
      gap: 'none',
      // TO DO missing token
      margin: {
        vertical: _hpeDesignTokens.components.hpe.formField.medium.input.group.container.paddingY
      }
    }
  },
  data: {
    button: {
      kind: 'toolbar'
    }
  },
  dateInput: {
    container: {
      round: _hpeDesignTokens.components.hpe.formField.medium.input.container.borderRadius
    },
    icon: {
      size: 'small'
    }
  },
  dataTable: {
    body: {
      extend: function extend(_ref10) {
        var theme = _ref10.theme;
        return "\n        /* Margin and padding allow room for focus on table body */\n        // TO DO missing tokens (is this grommet-ism?)\n        margin: " + theme.global.edgeSize.xxsmall + " 0px;\n        padding: 0px " + theme.global.edgeSize.xxsmall + ";\n      ";
      }
    },
    groupHeader: {
      // background: undefined,
      // border: undefined,
      // pad: undefined,
    },
    groupEnd: {
      border: {
        side: 'bottom',
        size: 'xsmall'
      }
    },
    header: {
      border: {
        side: 'bottom'
      },
      color: _hpeDesignTokens.components.hpe.headerCell.enabled.textColor,
      extend: function extend(_ref11) {
        var column = _ref11.column,
          sort = _ref11.sort,
          sortable = _ref11.sortable,
          theme = _ref11.theme;
        return "\n          " + (sort && sort.property === column && "\n            background: " + theme.global.colors['background-active'][theme.dark ? 'dark' : 'light'] + "\n          ") + ";\n          " + (sortable && sort && sort.property !== column && "\n              svg {\n                opacity: 0;\n              }\n              &:hover {\n                svg {\n                  opacity: 1;\n                }\n              }\n            ") + ";\n        ";
      },
      font: {
        weight: _hpeDesignTokens.components.hpe.headerCell.fontWeight
      },
      gap: 'none',
      // TO DO missing token
      hover: {
        background: {
          color: _hpeDesignTokens.components.hpe.headerCell.hover.background
        }
      },
      units: {
        color: _hpeDesignTokens.components.hpe.headerCell.units.enabled.textColor
      }
    },
    icons: {
      ascending: function ascending() {
        return /*#__PURE__*/_react["default"].createElement(_Ascending.Ascending, null);
      },
      descending: function descending() {
        return /*#__PURE__*/_react["default"].createElement(_Descending.Descending, null);
      },
      contract: function contract() {
        return /*#__PURE__*/_react["default"].createElement(_Up.Up, {
          height: "medium"
        });
      },
      expand: function expand() {
        return /*#__PURE__*/_react["default"].createElement(_Down.Down, {
          height: "medium"
        });
      },
      sortable: function sortable() {
        return /*#__PURE__*/_react["default"].createElement(_Unsorted.Unsorted, null);
      }
    },
    pinned: {
      header: {
        background: {
          opacity: 'strong'
        },
        extend: 'backdrop-filter: blur(12px);'
      },
      body: {
        background: {
          opacity: 'strong'
        },
        extend: 'backdrop-filter: blur(12px);'
      },
      footer: {
        background: {
          opacity: 'strong'
        },
        extend: 'backdrop-filter: blur(12px);'
      }
    },
    primary: {
      // Q: missing tokens
      weight: _hpeDesignTokens.components.hpe.dataCell.primary.fontWeight,
      color: _hpeDesignTokens.components.hpe.dataCell.primary.enabled.textColor
    },
    resize: {
      // Q: missing tokens
      border: {
        color: 'border',
        side: 'end'
      },
      hover: {
        border: {
          color: 'border-strong',
          size: 'small'
        }
      }
    }
  },
  fileInput: {
    border: {
      color: _hpeDesignTokens.components.hpe.formField.input.container.enabled.borderColor,
      side: 'all',
      style: 'dashed',
      size: _hpeDesignTokens.components.hpe.formField.medium.input.container.borderWidth
    },
    button: {
      border: {
        radius: _hpeDesignTokens.components.hpe.button.medium["default"].borderRadius
      },
      pad: {
        vertical: _hpeDesignTokens.components.hpe.button.medium["default"].paddingY,
        horizontal: _hpeDesignTokens.components.hpe.button.medium["default"].paddingX
      },
      color: _hpeDesignTokens.components.hpe.button["default"].enabled.textColor,
      font: {
        weight: _hpeDesignTokens.components.hpe.button["default"].enabled.fontWeight
      },
      hover: {
        background: _hpeDesignTokens.components.hpe.button["default"].hover.background,
        color: _hpeDesignTokens.components.hpe.button["default"].hover.textColor
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
    icons: {
      remove: _Close.Close
    },
    label: {
      margin: 'small'
    },
    message: {
      color: 'placeholder',
      margin: 'small'
    },
    pad: {
      horizontal: 'xsmall'
    },
    extend: "border-radius: " + _hpeDesignTokens.components.hpe.formField.medium.input.container.borderRadius + ";"
  },
  formField: {
    content: {
      // Q: missing tokens
      margin: {
        vertical: 'xsmall'
      },
      pad: 'none'
    },
    border: {
      error: {
        color: _hpeDesignTokens.components.hpe.formField.input.container.status.critical.borderColor
      },
      color: _hpeDesignTokens.components.hpe.formField.input.container.enabled.borderColor,
      side: 'all'
    },
    disabled: {
      background: _hpeDesignTokens.components.hpe.formField.input.group.container.disabled.background,
      border: {
        color: _hpeDesignTokens.components.hpe.formField.input.container.disabled.borderColor
      },
      label: {
        color: _hpeDesignTokens.components.hpe.formField.labelText.disabled.textColor
      }
    },
    error: {
      background: {
        color: _hpeDesignTokens.components.hpe.formField.input.container.status.critical.background
      },
      container: {
        gap: 'xsmall' // Q: missing token
      },
      icon: /*#__PURE__*/_react["default"].createElement(_CircleAlert.CircleAlert, {
        size: "small"
      }),
      size: 'xsmall',
      // Q: missing token
      color: _hpeDesignTokens.components.hpe.formField.errorText.enabled.textColor,
      margin: {
        // Q: missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none'
      }
    },
    focus: {
      background: _hpeDesignTokens.components.hpe.formField.input.container.focus.background,
      border: {
        color: _hpeDesignTokens.components.hpe.formField.input.container.focus.borderColor
      }
    },
    help: {
      size: 'xsmall',
      color: _hpeDesignTokens.components.hpe.formField.helpText.enabled.color,
      margin: 'none' // TO DO missing token
    },
    info: {
      size: 'xsmall',
      color: _hpeDesignTokens.components.hpe.formField.infoText.enabled.color,
      margin: {
        // Q: missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none'
      }
    },
    label: {
      size: 'xsmall',
      // TO DO how to capture this as token, currently we have "fontSize", "lineHeight", "..."
      color: _hpeDesignTokens.components.hpe.formField.labelText.enabled.color,
      margin: {
        // Q: missing token
        bottom: 'none',
        top: 'xsmall',
        horizontal: 'none'
      },
      requiredIndicator: true,
      weight: _hpeDesignTokens.components.hpe.formField.medium.labelText.fontWeight
    },
    margin: {
      bottom: 'none' // TO DO missing token
    },
    round: _hpeDesignTokens.components.hpe.formField.medium.input.container.borderRadius,
    survey: {
      label: {
        margin: {
          bottom: 'none'
        },
        size: 'medium',
        weight: _hpeDesignTokens.global.hpe.fontWeight.regular
      }
    }
  },
  heading: {
    color: 'heading',
    weight: _hpeDesignTokens.large.hpe.heading.xlarge.fontWeight,
    level: {
      1: {
        font: {
          weight: _hpeDesignTokens.large.hpe.heading.xlarge.fontWeight
        },
        small: {
          size: _hpeDesignTokens.large.hpe.heading.large.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.large.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.large.hpe.heading.xlarge.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.xlarge.lineHeight
        },
        large: {
          size: '48px',
          // with new typography system no "large" size to point to
          height: '48px' // with new typography system no "large" size to point to
        },
        xlarge: {
          size: '60px',
          // with new typography system no "large" size to point to
          height: '60px' // with new typography system no "large" size to point to
        }
      },
      2: {
        font: {
          weight: _hpeDesignTokens.large.hpe.heading.large.fontWeight
        },
        small: {
          size: _hpeDesignTokens.large.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.medium.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.large.hpe.heading.large.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.large.lineHeight
        },
        large: {
          size: _hpeDesignTokens.large.hpe.heading.xlarge.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.xlarge.lineHeight
        },
        xlarge: {
          size: '48px',
          // With new typography system no "larger" size to point to
          height: '48px' // With new typography system no "larger" size to point to
        }
      },
      3: {
        font: {
          weight: _hpeDesignTokens.large.hpe.heading.medium.fontWeight
        },
        small: {
          size: _hpeDesignTokens.large.hpe.heading.small.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.small.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.large.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.medium.lineHeight
        },
        large: {
          size: _hpeDesignTokens.large.hpe.heading.large.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.large.lineHeight
        },
        xlarge: {
          size: _hpeDesignTokens.large.hpe.heading.xlarge.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.xlarge.lineHeight
        }
      },
      4: {
        font: {
          weight: _hpeDesignTokens.large.hpe.heading.small.fontWeight
        },
        small: {
          size: _hpeDesignTokens.large.hpe.heading.xsmall.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.xsmall.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.large.hpe.heading.small.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.small.lineHeight
        },
        large: {
          size: _hpeDesignTokens.large.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.medium.lineHeight
        },
        xlarge: {
          size: _hpeDesignTokens.large.hpe.heading.large.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.large.lineHeight
        }
      },
      5: {
        font: {
          weight: _hpeDesignTokens.large.hpe.heading.xsmall.fontWeight
        },
        small: {
          size: _hpeDesignTokens.large.hpe.heading.xxsmall.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.xxsmall.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.large.hpe.heading.xsmall.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.xsmall.lineHeight
        },
        large: {
          size: _hpeDesignTokens.large.hpe.heading.small.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.small.lineHeight
        },
        xlarge: {
          size: _hpeDesignTokens.large.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.medium.lineHeight
        }
      },
      6: {
        font: {
          weight: _hpeDesignTokens.large.hpe.heading.xxsmall.fontWeight
        },
        small: {
          size: _hpeDesignTokens.large.hpe.heading.xxsmall.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.xxsmall.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.large.hpe.heading.xxsmall.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.xxsmall.lineHeight
        },
        large: {
          size: _hpeDesignTokens.large.hpe.heading.small.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.small.lineHeight
        },
        xlarge: {
          size: _hpeDesignTokens.large.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.large.hpe.heading.medium.lineHeight
        }
      }
    },
    // This block applies size-specific weights to headings to ensure
    // that as heading sizes get small, the weight increases and as they
    // get large, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support level and size-specific weights.
    extend: function extend(_ref12) {
      var level = _ref12.level,
        size = _ref12.size;
      var fontWeight = '';
      if (level === 3 && size === 'small') {
        fontWeight = "font-weight: " + _hpeDesignTokens.large.hpe.heading.small.fontWeight + ";";
        // undefined necessary so an h4 without size prop explicitly defined
        // still renders as weight 600
      } else if (level === 4 && ['small', 'medium', undefined].includes(size)) {
        fontWeight = "font-weight: " + _hpeDesignTokens.large.hpe.heading.small.fontWeight + ";";
      } else if (level === 5 && size === 'xlarge') {
        fontWeight = "font-weight: " + _hpeDesignTokens.large.hpe.heading.small.fontWeight + ";";
      }
      return fontWeight;
    }
  },
  icon: {
    disableScaleDown: true,
    matchSize: true,
    size: {
      small: _hpeDesignTokens.large.hpe.size.icon.small,
      medium: _hpeDesignTokens.large.hpe.size.icon.medium,
      large: _hpeDesignTokens.large.hpe.size.icon.large,
      xlarge: _hpeDesignTokens.large.hpe.size.icon.xlarge,
      xxlarge: _hpeDesignTokens.large.hpe.size.icon.xxlarge
    }
  },
  layer: {
    background: 'background-floating',
    border: {
      radius: 'small',
      // TO DO no specific semantic token
      intelligentRounding: true
    },
    container: {
      elevation: 'large' // TO DO no specific semantic token
    },
    overlay: {
      background: 'background-layer-overlay'
    },
    /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
     * at a z-index of 101. This adjustment allows for Layer modals and side-drawers
     * to sit atop the Global header. */
    zIndex: '110' // TO DO no token
  },
  list: {
    container: {
      // any box props
      gap: 'xsmall'
      // extend: undefined,
    },
    item: {
      border: undefined,
      disabled: {
        color: 'text-disabled',
        cursor: 'default'
      },
      pinned: {
        background: 'background-active',
        icon: {
          pad: mediumIconOnlyPad
        }
      }
    }
  },
  maskedInput: {
    container: {
      extend: function extend(_ref13) {
        var theme = _ref13.theme;
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
        pad: {
          vertical: _hpeDesignTokens.components.hpe.menu.medium.group.container.paddingY
        }
      },
      separator: {
        color: _hpeDesignTokens.components.hpe.menu.group.separator.background,
        size: _hpeDesignTokens.components.hpe.menu.medium.group.separator.height,
        pad: 'none' // TO DO token?
      }
    },
    icons: {
      color: _hpeDesignTokens.components.hpe.menu.item.enabled.iconColor,
      down: _Down.Down
    },
    item: {
      pad: {
        horizontal: _hpeDesignTokens.components.hpe.menu.medium.item.paddingX,
        vertical: _hpeDesignTokens.components.hpe.menu.medium.item.paddingY
      }
    }
  },
  nameValuePair: {
    name: {
      // TO DO would need to manually adjust, semantic tokens were too generic
      // should we have a `text-emphasis` and `weight-emphasis`?
      color: 'text-strong',
      weight: _hpeDesignTokens.global.hpe.fontWeight.medium
    }
  },
  notification: {
    close: {
      icon: _Close.Close
    },
    container: {
      round: 'xsmall'
    },
    direction: 'row',
    global: {
      direction: 'row',
      container: {
        round: 'none'
      }
    },
    message: {
      color: 'text-onStatus'
    },
    title: {
      // any text props
      color: 'text-onStatus',
      weight: _hpeDesignTokens.global.hpe.fontWeight.medium
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
    responsive: {
      breakpoints: ['xsmall', 'small']
    },
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
        radius: _hpeDesignTokens.components.hpe.button.medium["default"].borderRadius
      },
      font: {
        weight: _hpeDesignTokens.components.hpe.button["default"].enabled.fontWeight
      },
      active: {
        background: _hpeDesignTokens.components.hpe.button["default"].selected.enabled.background,
        border: {
          radius: _hpeDesignTokens.components.hpe.button.medium["default"].borderRadius
        },
        color: _hpeDesignTokens.components.hpe.button["default"].selected.enabled.textColor,
        font: {
          weight: _hpeDesignTokens.components.hpe.button["default"].selected.enabled.fontWeight
        }
      },
      hover: {
        background: _hpeDesignTokens.components.hpe.button["default"].hover.background,
        border: {
          radius: _hpeDesignTokens.components.hpe.button.medium["default"].borderRadius
        },
        color: _hpeDesignTokens.components.hpe.button["default"].hover.textColor,
        font: {
          weight: _hpeDesignTokens.components.hpe.button["default"].hover.fontWeight
        }
      },
      disabled: {
        background: _hpeDesignTokens.components.hpe.button["default"].disabled.background,
        border: {
          radius: _hpeDesignTokens.components.hpe.button.medium["default"].borderRadius
        },
        color: _hpeDesignTokens.components.hpe.button["default"].disabled.textColor,
        font: {
          weight: _hpeDesignTokens.components.hpe.button["default"].disabled.fontWeight
        }
      },
      size: {
        small: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.small["default"].borderRadius,
            width: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.small["default"].borderWidth] || _hpeDesignTokens.components.hpe.button.small["default"].borderWidth
          },
          pad: {
            vertical: '4px',
            horizontal: '4px'
          },
          font: {
            size: _hpeDesignTokens.components.hpe.component.small.fontSize,
            height: _hpeDesignTokens.components.hpe.component.small.lineHeight
          },
          height: _hpeDesignTokens.components.hpe.component.small.minHeight,
          width: _hpeDesignTokens.components.hpe.component.small.minHeight
        },
        medium: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.medium["default"].borderRadius,
            width: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.medium["default"].borderWidth] || _hpeDesignTokens.components.hpe.button.medium["default"].borderWidth
          },
          pad: {
            vertical: "4px",
            horizontal: "4px"
          },
          font: {
            size: _hpeDesignTokens.components.hpe.component.medium.fontSize,
            height: _hpeDesignTokens.components.hpe.component.medium.lineHeight
          },
          height: _hpeDesignTokens.components.hpe.component.medium.minHeight,
          width: _hpeDesignTokens.components.hpe.component.medium.minHeight
        },
        large: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.large["default"].borderRadius,
            width: dimensions.borderSize[_hpeDesignTokens.components.hpe.button.large["default"].borderWidth] || _hpeDesignTokens.components.hpe.button.large["default"].borderWidth
          },
          pad: {
            vertical: "4px",
            horizontal: "4px"
          },
          font: {
            size: _hpeDesignTokens.components.hpe.component.large.fontSize,
            height: _hpeDesignTokens.components.hpe.component.large.lineHeight
          },
          height: _hpeDesignTokens.components.hpe.component.large.minHeight,
          width: _hpeDesignTokens.components.hpe.component.large.minHeight
        }
      }
    }
  },
  paragraph: {
    xsmall: {
      size: _hpeDesignTokens.large.hpe.text.xsmall.fontSize,
      // NOTE: using "text" tokens here, see: https://github.com/grommet/hpe-design-system/issues/4111
      height: _hpeDesignTokens.large.hpe.text.xsmall.lineHeight,
      maxWidth: _hpeDesignTokens.large.hpe.paragraph.xsmall.maxWidth
    },
    small: {
      size: _hpeDesignTokens.large.hpe.text.small.fontSize,
      height: _hpeDesignTokens.large.hpe.text.small.lineHeight,
      maxWidth: _hpeDesignTokens.large.hpe.paragraph.small.maxWidth
    },
    medium: {
      size: _hpeDesignTokens.large.hpe.text.medium.fontSize,
      height: _hpeDesignTokens.large.hpe.text.medium.lineHeight,
      maxWidth: _hpeDesignTokens.large.hpe.paragraph.medium.maxWidth
    },
    large: {
      size: _hpeDesignTokens.large.hpe.text.large.fontSize,
      height: _hpeDesignTokens.large.hpe.text.large.lineHeight,
      maxWidth: _hpeDesignTokens.large.hpe.paragraph.large.maxWidth
    },
    xlarge: {
      size: _hpeDesignTokens.large.hpe.text.xlarge.fontSize,
      height: _hpeDesignTokens.large.hpe.text.xlarge.lineHeight,
      maxWidth: _hpeDesignTokens.large.hpe.paragraph.xlarge.maxWidth
    },
    xxlarge: {
      size: _hpeDesignTokens.large.hpe.text.xxlarge.fontSize,
      height: _hpeDesignTokens.large.hpe.text.xxlarge.lineHeight,
      maxWidth: _hpeDesignTokens.large.hpe.paragraph.xxlarge.maxWidth
    },
    // This block applies size-specific weights to paragraph to ensure
    // that as paragraph sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: function extend(_ref14) {
      var size = _ref14.size;
      return "\n      " + (['xxlarge'].includes(size) ? "font-weight: " + _hpeDesignTokens.large.hpe.text[size].fontWeight + ";" : '') + ";\n    ";
    }
  },
  radioButton: {
    border: {
      color: _hpeDesignTokens.components.hpe.radioButton.control.enabled.borderColor,
      width: _hpeDesignTokens.components.hpe.radioButton.medium.control.borderWidth
    },
    color: _hpeDesignTokens.components.hpe.radioButton.control.selected.enabled.borderColor,
    container: {
      extend: function extend() {
        return "\n      width: auto;\n      padding-inline: " + _hpeDesignTokens.components.hpe.formField.medium.input.group.item.paddingX + ";\n    ";
      }
    },
    extend: function extend() {
      return "\n      padding-block: " + _hpeDesignTokens.components.hpe.formField.medium.input.group.item.paddingY + ";\n    ";
    },
    gap: _hpeDesignTokens.components.hpe.radioButton.medium.gapX,
    hover: {
      background: {
        color: _hpeDesignTokens.components.hpe.formField.input.group.item.hover.background
      },
      border: {
        color: _hpeDesignTokens.components.hpe.radioButton.control.hover.borderColor
      }
    },
    size: _hpeDesignTokens.components.hpe.radioButton.medium.control.height,
    font: {
      weight: _hpeDesignTokens.components.hpe.radioButton.medium.label.fontWeight
    },
    icons: {
      circle: function circle() {
        return /*#__PURE__*/_react["default"].createElement(_Blank.Blank, {
          color: _hpeDesignTokens.components.hpe.radioButton.control.selected.enabled.iconColor
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
      // TO DO should be token?
      margin: {
        vertical: _hpeDesignTokens.components.hpe.formField.medium.input.group.container.paddingY
      }
    }
  },
  rangeInput: {
    thumb: {
      color: 'background-primary-default'
    },
    track: {
      lower: {
        color: 'background-primary-default'
      },
      upper: {
        color: 'border'
      }
    }
  },
  select: {
    control: {
      extend: function extend(_ref15) {
        var disabled = _ref15.disabled;
        return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        ", "\n      "])), disabled && "\n        opacity: 0.3;\n        input {\n          cursor: default;\n        }");
      }
    },
    emptySearchMessage: {
      container: {
        pad: option.pad
      }
    },
    icons: {
      color: 'icon',
      down: _Down.Down,
      margin: {
        left: 'small',
        // setting right margin to 12px because on small
        // screens, Select responsive padding sizes down
        // which brings the icon too tight with edge of
        // control.
        right: _hpeDesignTokens.components.hpe.formField.medium.input.container.paddingX
      },
      up: _Up.Up
    },
    options: undefined
  },
  spinner: {
    container: {
      pad: 'none',
      color: 'background-primary-default',
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
    },
    size: {
      xsmall: _hpeDesignTokens.components.hpe.component.xsmall.minHeight,
      small: _hpeDesignTokens.components.hpe.component.small.minHeight,
      medium: _hpeDesignTokens.components.hpe.component.medium.minHeight,
      large: _hpeDesignTokens.components.hpe.component.large.minHeight,
      xlarge: _hpeDesignTokens.components.hpe.component.xlarge.minHeight
    }
  },
  starRating: {
    color: 'background-selected-strong'
  },
  // NOTE all of these would have to be adjusted manually because the semantic color was too generic
  tab: {
    color: 'text',
    active: {
      background: undefined,
      color: 'text-strong',
      weight: 600
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
        color: 'brand'
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
      bottom: _hpeDesignTokens.components.hpe.component.medium.paddingY,
      // NOTE this brings the Tab height into alignment with other "medium" components
      top: _hpeDesignTokens.components.hpe.component.medium.paddingY,
      // NOTE this brings the Tab height into alignment with other "medium" components
      horizontal: _hpeDesignTokens.components.hpe.component.medium.paddingX.wide // NOTE this is slightly narrower than current tabs
    },
    margin: {
      // bring the overall tabs border behind invidual tab borders
      vertical: '-1px',
      horizontal: 'none'
    }
  },
  tabs: {
    header: {
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
      // alot in extend here
      extend: "\n        > div { \n          height: 100%;\n          justify-content: center;\n        }\n        // align onSelect checkbox to center of header cell\n        label { \n          justify-content: center;\n        }\n      "
    },
    body: {
      pad: {
        top: _hpeDesignTokens.components.hpe.dataCell.paddingTop,
        bottom: _hpeDesignTokens.components.hpe.dataCell.paddingBottom,
        horizontal: _hpeDesignTokens.components.hpe.dataCell.paddingX
      },
      border: {
        side: 'bottom',
        color: _hpeDesignTokens.components.hpe.dataCell.enabled.borderColor
      },
      extend: function extend(_ref16) {
        var theme = _ref16.theme;
        return "\n          &:hover {\n            button {\n              background: " + theme.global.colors['background-hover'][theme.dark ? 'dark' : 'light'] + "\n            }\n          }\n        ";
      }
    },
    row: {
      hover: {
        background: 'background-hover'
      }
    },
    footer: {
      extend: "\n        font-weight: " + _hpeDesignTokens.global.hpe.fontWeight.medium + ";\n      "
    }
  },
  tag: {
    pad: {
      horizontal: 'small',
      // TO components.hpe.component.medium.paddingX.default/wide are off from what's desired here
      vertical: _hpeDesignTokens.components.hpe.component.medium.paddingY // 5px pad + 1px border = 6px 'xsmall'
    },
    value: {
      weight: _hpeDesignTokens.global.hpe.fontWeight.medium
    }
  },
  text: {
    xsmall: {
      size: _hpeDesignTokens.large.hpe.text.xsmall.fontSize,
      height: _hpeDesignTokens.large.hpe.text.xsmall.lineHeight
    },
    small: {
      size: _hpeDesignTokens.large.hpe.text.small.fontSize,
      height: _hpeDesignTokens.large.hpe.text.small.lineHeight
    },
    medium: {
      size: _hpeDesignTokens.large.hpe.text.medium.fontSize,
      height: _hpeDesignTokens.large.hpe.text.medium.lineHeight
    },
    large: {
      size: _hpeDesignTokens.large.hpe.text.large.fontSize,
      height: _hpeDesignTokens.large.hpe.text.large.lineHeight
    },
    xlarge: {
      size: _hpeDesignTokens.large.hpe.text.xlarge.fontSize,
      height: _hpeDesignTokens.large.hpe.text.xlarge.lineHeight
    },
    xxlarge: {
      size: _hpeDesignTokens.large.hpe.text.xxlarge.fontSize,
      height: _hpeDesignTokens.large.hpe.text.xxlarge.lineHeight
    },
    '3xl': {
      size: _hpeDesignTokens.large.hpe.text['3xl'].fontSize,
      height: _hpeDesignTokens.large.hpe.text['3xl'].lineHeight
    },
    '4xl': {
      size: _hpeDesignTokens.large.hpe.text['4xl'].fontSize,
      height: _hpeDesignTokens.large.hpe.text['4xl'].lineHeight
    },
    '5xl': {
      size: _hpeDesignTokens.large.hpe.text['5xl'].fontSize,
      height: _hpeDesignTokens.large.hpe.text['5xl'].lineHeight
    },
    '6xl': {
      size: _hpeDesignTokens.large.hpe.text['6xl'].fontSize,
      height: _hpeDesignTokens.large.hpe.text['6xl'].lineHeight
    },
    // This block applies size-specific weights to text to ensure
    // that as text sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: function extend(_ref17) {
      var size = _ref17.size;
      return "\n      " + (['xxlarge', '3xl', '4xl', '5xl', '6xl'].includes(size) ? "font-weight: " + _hpeDesignTokens.large.hpe.text[size].fontWeight + ";" : '') + ";\n    ";
    }
  },
  textInput: {
    container: {
      extend: function extend(_ref18) {
        var theme = _ref18.theme;
        return "\n        svg {\n          fill: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n          stroke: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n        }\n      ";
      }
    }
  },
  tip: {
    content: {
      background: 'background-floating',
      border: {
        color: 'border-weak' // TO DO this isn't specific enough to update automatically in future
      },
      margin: 'xxsmall',
      elevation: 'small',
      // TO DO this isn't specific enough to update automatically in future
      pad: {
        vertical: 'none',
        horizontal: 'small'
      },
      round: _hpeDesignTokens.components.hpe.drop.borderRadius // TO DO does it make sense to use drop here?
    }
  },
  thumbsRating: {
    like: {
      color: 'background-selected-strong'
    },
    dislike: {
      color: 'background-selected-strong'
    }
  },
  toggleGroup: {
    button: {
      pad: {
        vertical: 'xsmall',
        horizontal: 'small'
      },
      iconOnly: {
        pad: {
          vertical: mediumIconOnlyPad,
          horizontal: mediumIconOnlyPad
        }
      }
    }
  },
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24
});