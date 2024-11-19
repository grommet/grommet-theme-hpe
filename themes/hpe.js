"use strict";

exports.__esModule = true;
exports.textSizes = exports.hpe = exports.componentSizes = exports.buttonStates = exports.buttonKinds = void 0;
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
var _dimensions = require("./dimensions");
var _components$hpe$eleme, _components$hpe$eleme2, _components$hpe$eleme3, _components$hpe$eleme4, _components$hpe$eleme5, _templateObject, _components$hpe$eleme6, _templateObject2, _components$hpe$dataC, _components$hpe$eleme7, _components$hpe$eleme8, _components$hpe$eleme9, _components$hpe$eleme10, _components$hpe$eleme11, _components$hpe$eleme12, _components$hpe$eleme13, _components$hpe$eleme14, _components$hpe$eleme15, _components$hpe$eleme16, _components$hpe$eleme17, _components$hpe$eleme18, _templateObject3, _components$hpe$eleme19, _components$hpe$eleme20, _components$hpe$eleme21, _components$hpe$eleme22, _components$hpe$eleme23, _components$hpe$eleme24, _components$hpe$eleme25, _components$hpe$eleme26, _components$hpe$eleme27, _components$hpe$eleme28, _components$hpe$eleme29, _components$hpe$eleme30, _components$hpe$eleme31, _components$hpe$eleme32, _components$hpe$eleme33, _components$hpe$eleme34, _components$hpe$eleme35, _components$hpe$eleme36, _components$hpe$eleme37, _components$hpe$eleme38, _components$hpe$eleme39, _components$hpe$eleme40;
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
var MISSING = {
  color: 'red',
  weight: 700
};
var componentSizes = exports.componentSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
var buttonKinds = exports.buttonKinds = ['default', 'secondary', 'primary', 'toolbar'];
var buttonStates = exports.buttonStates = ['hover', 'active', 'disabled'];
var textSizes = exports.textSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', '3xl', '4xl', '5xl', '6xl'];
var anchorSizeTheme = {};
textSizes.forEach(function (size) {
  anchorSizeTheme[size] = {
    color: _hpeDesignTokens.components.hpe.anchor["default"].enabled.textColor,
    textDecoration: _hpeDesignTokens.components.hpe.anchor["default"].enabled.textDecoration,
    fontWeight: _hpeDesignTokens.components.hpe.anchor["default"].enabled.fontWeight
  };
});
var paragraphTheme = {};
var textTheme = {};
textSizes.forEach(function (size) {
  var _medium$hpe$text, _medium$hpe$text2, _medium$hpe$paragraph, _medium$hpe$text3, _medium$hpe$text4;
  paragraphTheme[size] = {
    size: (_medium$hpe$text = _hpeDesignTokens.medium.hpe.text) == null || (_medium$hpe$text = _medium$hpe$text[size]) == null ? void 0 : _medium$hpe$text.fontSize,
    height: (_medium$hpe$text2 = _hpeDesignTokens.medium.hpe.text) == null || (_medium$hpe$text2 = _medium$hpe$text2[size]) == null ? void 0 : _medium$hpe$text2.lineHeight,
    maxWidth: (_medium$hpe$paragraph = _hpeDesignTokens.medium.hpe.paragraph) == null || (_medium$hpe$paragraph = _medium$hpe$paragraph[size]) == null ? void 0 : _medium$hpe$paragraph.maxWidth
  };
  textTheme[size] = {
    size: (_medium$hpe$text3 = _hpeDesignTokens.medium.hpe.text) == null ? void 0 : _medium$hpe$text3[size].fontSize,
    height: (_medium$hpe$text4 = _hpeDesignTokens.medium.hpe.text) == null ? void 0 : _medium$hpe$text4[size].lineHeight
  };
});
var buttonKindTheme = {};
buttonKinds.forEach(function (kind) {
  var _components$hpe$butto, _components$hpe$butto2, _components$hpe$butto3, _components$hpe$butto4, _components$hpe$butto5, _components$hpe$butto6, _components$hpe$butto7, _components$hpe$butto8;
  buttonKindTheme[kind] = {
    background: (_components$hpe$butto = _hpeDesignTokens.components.hpe.button) == null ? void 0 : _components$hpe$butto[kind].enabled.background,
    border: {
      width: _dimensions.dimensions.borderSize[(_components$hpe$butto2 = _hpeDesignTokens.components.hpe.button.medium) == null ? void 0 : _components$hpe$butto2[kind].borderWidth] || ((_components$hpe$butto3 = _hpeDesignTokens.components.hpe.button.medium) == null ? void 0 : _components$hpe$butto3[kind].borderWidth),
      color: (_components$hpe$butto4 = _hpeDesignTokens.components.hpe.button) == null ? void 0 : _components$hpe$butto4[kind].enabled.borderColor,
      radius: _dimensions.dimensions.borderSize[(_components$hpe$butto5 = _hpeDesignTokens.components.hpe.button.medium) == null ? void 0 : _components$hpe$butto5[kind].borderRadius] || ((_components$hpe$butto6 = _hpeDesignTokens.components.hpe.button.medium) == null ? void 0 : _components$hpe$butto6[kind].borderRadius)
    },
    color: (_components$hpe$butto7 = _hpeDesignTokens.components.hpe.button) == null ? void 0 : _components$hpe$butto7[kind].enabled.textColor,
    font: {
      weight: (_components$hpe$butto8 = _hpeDesignTokens.components.hpe.button) == null ? void 0 : _components$hpe$butto8[kind].enabled.fontWeight
    }
  };
});
var buttonStatesTheme = {};
buttonStates.forEach(function (state) {
  buttonStatesTheme[state] = {};
  buttonKinds.forEach(function (kind) {
    var adjustedState = state;
    if (state === 'active') {
      var _components$hpe$butto9, _components$hpe$butto10, _components$hpe$butto11, _components$hpe$butto12, _components$hpe$butto13, _components$hpe$butto14, _components$hpe$butto15, _components$hpe$butto16;
      adjustedState = 'selected';
      buttonStatesTheme[state][kind] = {
        background: {
          color: (_components$hpe$butto9 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto9 = _components$hpe$butto9[kind]) == null ? void 0 : _components$hpe$butto9[adjustedState].enabled.background
        },
        border: {
          // Q: this token isn't correct
          color: (_components$hpe$butto10 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto10 = _components$hpe$butto10[kind]) == null ? void 0 : _components$hpe$butto10[adjustedState].enabled.borderColor
        },
        color: (_components$hpe$butto11 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto11 = _components$hpe$butto11[kind]) == null ? void 0 : _components$hpe$butto11[adjustedState].enabled.textColor,
        font: {
          weight: (_components$hpe$butto12 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto12 = _components$hpe$butto12[kind]) == null ? void 0 : _components$hpe$butto12[adjustedState].enabled.fontWeight
        }
      };
      if (!('active' in buttonStatesTheme.hover)) buttonStatesTheme.hover.active = {};
      buttonStatesTheme.hover[state][kind] = {
        background: {
          color: (_components$hpe$butto13 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto13 = _components$hpe$butto13[kind]) == null || (_components$hpe$butto13 = _components$hpe$butto13[adjustedState]) == null || (_components$hpe$butto13 = _components$hpe$butto13.hover) == null ? void 0 : _components$hpe$butto13.background
        },
        border: {
          color: (_components$hpe$butto14 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto14 = _components$hpe$butto14[kind]) == null || (_components$hpe$butto14 = _components$hpe$butto14[adjustedState]) == null || (_components$hpe$butto14 = _components$hpe$butto14.hover) == null ? void 0 : _components$hpe$butto14.borderColor
        },
        color: (_components$hpe$butto15 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto15 = _components$hpe$butto15[kind]) == null || (_components$hpe$butto15 = _components$hpe$butto15[adjustedState]) == null || (_components$hpe$butto15 = _components$hpe$butto15.hover) == null ? void 0 : _components$hpe$butto15.textColor,
        font: {
          weight: (_components$hpe$butto16 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto16 = _components$hpe$butto16[kind]) == null || (_components$hpe$butto16 = _components$hpe$butto16[adjustedState]) == null || (_components$hpe$butto16 = _components$hpe$butto16.hover) == null ? void 0 : _components$hpe$butto16.fontWeight
        }
      };
    } else if (kind === 'option') {
      var _components$hpe$selec, _components$hpe$selec2, _components$hpe$selec3;
      if (state === 'active') adjustedState = 'selected';
      buttonStatesTheme[state][kind] = {
        background: {
          color: (_components$hpe$selec = _hpeDesignTokens.components.hpe.select.option) == null ? void 0 : _components$hpe$selec[adjustedState].enabled.background
        },
        border: {
          color: (_components$hpe$selec2 = _hpeDesignTokens.components.hpe.select.option) == null ? void 0 : _components$hpe$selec2[adjustedState].borderColor
        },
        color: (_components$hpe$selec3 = _hpeDesignTokens.components.hpe.select.option) == null ? void 0 : _components$hpe$selec3[adjustedState].textColor
      };
    } else {
      var _components$hpe$butto17, _components$hpe$butto18, _components$hpe$butto19, _components$hpe$butto20;
      buttonStatesTheme[state][kind] = {
        background: {
          color: (_components$hpe$butto17 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto17 = _components$hpe$butto17[kind]) == null ? void 0 : _components$hpe$butto17[adjustedState].background
        },
        border: {
          width: '',
          color: (_components$hpe$butto18 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto18 = _components$hpe$butto18[kind]) == null ? void 0 : _components$hpe$butto18[adjustedState].borderColor
        },
        color: (_components$hpe$butto19 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto19 = _components$hpe$butto19[kind]) == null ? void 0 : _components$hpe$butto19[adjustedState].textColor,
        font: {
          weight: (_components$hpe$butto20 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto20 = _components$hpe$butto20[kind]) == null ? void 0 : _components$hpe$butto20[adjustedState].fontWeight
        }
      };
    }
  });
});
var buttonSizesTheme = {};
componentSizes.forEach(function (size) {
  var _components$hpe$butto24, _components$hpe$butto25, _components$hpe$butto26, _components$hpe$butto27, _components$hpe$butto28;
  var kindStyles = {};
  buttonKinds.forEach(function (kind) {
    var _components$hpe$butto21, _components$hpe$butto22, _components$hpe$butto23;
    kindStyles[kind] = {
      border: {
        radius: (_components$hpe$butto21 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto21 = _components$hpe$butto21[size]) == null ? void 0 : _components$hpe$butto21[kind].borderRadius
      },
      pad: {
        vertical: (_components$hpe$butto22 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto22 = _components$hpe$butto22[size]) == null ? void 0 : _components$hpe$butto22[kind].paddingY,
        horizontal: (_components$hpe$butto23 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto23 = _components$hpe$butto23[size]) == null ? void 0 : _components$hpe$butto23[kind].paddingX
      }
    };
  });
  buttonSizesTheme[size] = _extends({
    border: {
      radius: (_components$hpe$butto24 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto24 = _components$hpe$butto24[size]) == null ? void 0 : _components$hpe$butto24["default"].borderRadius
    },
    pad: {
      vertical: (_components$hpe$butto25 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto25 = _components$hpe$butto25[size]) == null ? void 0 : _components$hpe$butto25["default"].paddingY,
      horizontal: (_components$hpe$butto26 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto26 = _components$hpe$butto26[size]) == null ? void 0 : _components$hpe$butto26["default"].paddingX
    },
    iconOnly: {
      pad: {
        vertical: (_components$hpe$butto27 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto27 = _components$hpe$butto27[size]) == null ? void 0 : _components$hpe$butto27["default"].iconOnly.paddingY,
        horizontal: (_components$hpe$butto28 = _hpeDesignTokens.components.hpe.button) == null || (_components$hpe$butto28 = _components$hpe$butto28[size]) == null ? void 0 : _components$hpe$butto28["default"].iconOnly.paddingX
      }
    }
  }, kindStyles);
});

// option button kind styles. abstracted so select.emptySearchMessage
// can reference pad value
var option = {
  color: _hpeDesignTokens.components.hpe.select.option.enabled.textColor,
  border: {
    radius: _dimensions.dimensions.edgeSize[_hpeDesignTokens.components.hpe.select.medium.option.borderRadius] || _hpeDesignTokens.components.hpe.select.medium.option.borderRadius,
    width: _dimensions.dimensions.borderSize[_hpeDesignTokens.components.hpe.select.medium.option.borderWidth] || _hpeDesignTokens.components.hpe.select.medium.option.borderWidth,
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
  }, _dimensions.dimensions, {
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
        weight: _hpeDesignTokens.components.hpe.formField.medium.value.fontWeight
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
      extend: "\n        &::-webkit-input-placeholder {\n        font-weight: " + _hpeDesignTokens.components.hpe.formField.medium.placeholder.fontWeight + ";\n      }\n    \n      &::-moz-placeholder {\n        font-weight: " + _hpeDesignTokens.components.hpe.formField.medium.placeholder.fontWeight + ";\n      }\n    \n      &:-ms-input-placeholder {\n        font-weight: " + _hpeDesignTokens.components.hpe.formField.medium.placeholder.fontWeight + ";\n      }\n      "
    },
    font: {
      family: _hpeDesignTokens.global.hpe.fontStack.primary,
      face: "\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n          font-weight: 400;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff\") format('woff');\n          font-weight: 700;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff\") format('woff');\n          font-weight: 600;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff\") format('woff');\n          font-weight: 500;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff\") format('woff');\n          font-weight: 100;\n        }",
      size: _hpeDesignTokens.medium.hpe.text.medium.fontSize,
      height: _hpeDesignTokens.medium.hpe.text.medium.lineHeight
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
        radius: _dimensions.dimensions.edgeSize[_hpeDesignTokens.components.hpe.drop.borderRadius] || _hpeDesignTokens.components.hpe.drop.borderRadius
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
      light: {
        small: _hpeDesignTokens.light.hpe.shadow.small,
        medium: _hpeDesignTokens.light.hpe.shadow.medium,
        large: _hpeDesignTokens.light.hpe.shadow.large,
        'inset-selected': "inset 3px 0 " + _hpeDesignTokens.light.hpe.color.border.selected
      },
      dark: {
        small: _hpeDesignTokens.dark.hpe.shadow.small,
        medium: _hpeDesignTokens.dark.hpe.shadow.medium,
        large: _hpeDesignTokens.dark.hpe.shadow.large,
        'inset-selected': "inset 3px 0 " + _hpeDesignTokens.dark.hpe.color.border.selected
      }
    },
    hover: {
      background: 'background-hover',
      color: MISSING.color // TO DO
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
      level: 4,
      // NOTE: in v3 all accordions were h4
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
    // TO DO not size specific
    hover: {
      textDecoration: _hpeDesignTokens.components.hpe.anchor["default"].hover.textDecoration
    },
    size: anchorSizeTheme
  },
  avatar: {
    size: {
      xsmall: (_components$hpe$eleme = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme.xsmall.minHeight,
      small: (_components$hpe$eleme2 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme2.small.minHeight,
      // 24px
      medium: (_components$hpe$eleme3 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme3.medium.minHeight,
      // default 48px
      large: (_components$hpe$eleme4 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme4.large.minHeight,
      // 72px
      xlarge: (_components$hpe$eleme5 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme5.xlarge.minHeight,
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
        xsmall: 'xsmall',
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
  button: _extends({
    intelligentPad: false,
    color: _hpeDesignTokens.components.hpe.button["default"].enabled.textColor,
    gap: _hpeDesignTokens.components.hpe.button.medium["default"].gapX,
    badge: {
      align: 'container',
      // TO DO this is a grommet-ism?
      container: {
        // align badge background to button label color
        background: 'text-strong'
      },
      size: {
        medium: '18px' // Q: what token should be used here? no token for this at the moments
      },
      text: {
        size: {
          medium: 'xsmall' // TO DO how to do references for typography sizes
        }
      }
    },
    // TO DO add cta-primary variant
    'cta-primary': _extends({}, buttonKindTheme.primary, {
      icon: /*#__PURE__*/_react["default"].createElement(_Hpe.Hpe, null),
      reverse: true,
      extend: ''
    }),
    // TO DO add cta-alternate variant
    'cta-alternate': _extends({}, buttonKindTheme.secondary, {
      icon: /*#__PURE__*/_react["default"].createElement(_Hpe.Hpe, {
        color: "icon-brand"
      }),
      reverse: true
    })
  }, buttonKindTheme, {
    option: option,
    active: buttonStatesTheme.active,
    disabled: _extends({
      opacity: 1
    }, buttonStatesTheme.disabled),
    selected: {
      option: {
        background: _hpeDesignTokens.components.hpe.select.option.selected.enabled.background,
        color: _hpeDesignTokens.components.hpe.select.option.selected.textColor,
        font: {
          weight: _hpeDesignTokens.components.hpe.select.option.selected.enabled.fontWeight
        },
        elevation: 'inset-selected'
      }
    },
    hover: _extends({
      'cta-primary': buttonStatesTheme.hover.primary,
      'cta-alternate': _extends({}, buttonStatesTheme.hover.secondary, {
        extend: '' // TO DO can remove when merging, temp to override extend
      })
    }, buttonStatesTheme.hover),
    size: _extends({
      xsmall: {
        border: {
          radius: '2em'
        },
        iconOnly: {
          pad: {
            vertical: '3px',
            horizontal: '3px'
          }
        }
      }
    }, buttonSizesTheme)
  }),
  calendar: {
    day: {
      hover: {
        background: 'background-hover',
        color: 'text-strong'
      },
      selected: {
        background: 'background-selected-strong-enabled',
        color: 'text-onSelectedStrong',
        hover: {
          background: 'background-selected-strong-hover'
        },
        font: {
          weight: _hpeDesignTokens.global.hpe.fontWeight.medium
        }
      },
      inRange: {
        color: 'text-onSelectedWeak',
        hover: {
          background: 'background-selected-weak-hover'
        },
        font: {
          weight: _hpeDesignTokens.global.hpe.fontWeight.medium
        }
      },
      extend: ''
    },
    range: {
      background: 'background-selected-weak-enabled'
    },
    icons: {
      next: _Next.Next,
      previous: _Previous.Previous
    },
    small: {
      // TO DO should we use t-shirt size element tokens here?
      fontSize: '13.6px',
      lineHeight: 1.375,
      daySize: '27.43px',
      title: {
        size: 'medium',
        weight: _hpeDesignTokens.global.hpe.fontWeight.normal,
        color: 'text-strong'
      }
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
      day: {
        round: 'full'
      },
      range: {
        round: 'none',
        start: {
          round: {
            corner: 'left',
            size: 'full'
          }
        },
        end: {
          round: {
            corner: 'right',
            size: 'full'
          }
        }
      },
      title: {
        size: 'large',
        weight: _hpeDesignTokens.global.hpe.fontWeight.normal,
        color: 'text-strong'
      }
    },
    large: {
      fontSize: '31.2px',
      lineHeight: 1.11,
      daySize: '109.71px',
      title: {
        size: 'xlarge',
        weight: _hpeDesignTokens.global.hpe.fontWeight.normal,
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
        color: 'transparent'
      },
      // HPE Design System guidance states that pad="none" should be applied on CheckBox
      // when its used outside of a FormField. We will apply this hover treatment in
      // those instances.
      extend: function extend(_ref) {
        var disabled = _ref.disabled,
          pad = _ref.pad,
          theme = _ref.theme,
          toggle = _ref.toggle;
        return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        ", "\n      "])), !disabled && pad === 'none' && !toggle && "border: 2px solid " + theme.global.colors[_hpeDesignTokens.components.hpe.checkbox.control.hover.borderColor][theme.dark ? 'dark' : 'light'] + ";");
      } // Q: missing token for hover borderWidth? this falls into similar boat as secondary button
    },
    color: _hpeDesignTokens.components.hpe["switch"].control.handle.enabled.background,
    border: {
      color: _hpeDesignTokens.components.hpe.checkbox.control.enabled.borderColor,
      width: _dimensions.dimensions.borderSize[_hpeDesignTokens.components.hpe.checkbox.medium.control.borderWidth] || _hpeDesignTokens.components.hpe.checkbox.medium.control.borderWidth
    },
    check: {
      radius: _hpeDesignTokens.components.hpe.checkbox.medium.control.borderRadius,
      thickness: _hpeDesignTokens.components.hpe.checkbox.control.hover.borderWidth,
      extend: function extend(_ref2) {
        var _theme$global$colors$, _theme$global$colors$2, _theme$global$colors$3, _theme$global$colors$4;
        var theme = _ref2.theme,
          checked = _ref2.checked,
          indeterminate = _ref2.indeterminate;
        return "\n      margin-block: " + (_dimensions.dimensions.borderSize[_hpeDesignTokens.components.hpe.checkbox.medium.control.marginY] || _hpeDesignTokens.components.hpe.checkbox.medium.control.marginY) + "px;\n      background: " + ((_theme$global$colors$ = theme.global.colors[_hpeDesignTokens.components.hpe.checkbox.control.enabled.background]) == null ? void 0 : _theme$global$colors$[theme.dark ? 'dark' : 'light']) + ";\n      background-color: " + (checked || indeterminate ? (_theme$global$colors$2 = theme.global.colors[_hpeDesignTokens.components.hpe.checkbox.control.selected.enabled.background]) == null ? void 0 : _theme$global$colors$2[theme.dark ? 'dark' : 'light'] : '') + ";\n      &:hover {\n        background: " + (checked || indeterminate ? (_theme$global$colors$3 = theme.global.colors[_hpeDesignTokens.components.hpe.checkbox.control.selected.hover.background]) == null ? void 0 : _theme$global$colors$3[theme.dark ? 'dark' : 'light'] : (_theme$global$colors$4 = theme.global.colors[_hpeDesignTokens.components.hpe.checkbox.control.hover.background]) == null ? void 0 : _theme$global$colors$4[theme.dark ? 'dark' : 'light']) + ";\n      }\n      " + ((checked || indeterminate) && 'border: none;') + "\n        ";
      }
    },
    icon: {
      extend: function extend(_ref3) {
        var _theme$global$colors$5;
        var theme = _ref3.theme;
        return "stroke-width: 2px;\n      stroke: " + ((_theme$global$colors$5 = theme.global.colors[_hpeDesignTokens.components.hpe.checkbox.control.selected.enabled.iconColor]) == null ? void 0 : _theme$global$colors$5[theme.dark ? 'dark' : 'light']);
      }
    },
    gap: _hpeDesignTokens.components.hpe.checkbox.medium.gapX,
    label: {
      align: 'start'
    },
    pad: {
      vertical: (_components$hpe$eleme6 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme6.medium.paddingY,
      horizontal: _hpeDesignTokens.components.hpe.formField.medium.input.container.paddingX
    },
    size: _hpeDesignTokens.components.hpe.checkbox.medium.control.width,
    toggle: {
      background: _hpeDesignTokens.components.hpe["switch"].control.track.enabled.background,
      color: _hpeDesignTokens.components.hpe["switch"].control.handle.enabled.background,
      size: _hpeDesignTokens.components.hpe["switch"].medium.control.track.width,
      knob: {
        extend: function extend(_ref4) {
          var theme = _ref4.theme,
            checked = _ref4.checked;
          return "\n           box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'].small + ";\n           border: " + _dimensions.dimensions.borderSize[_hpeDesignTokens.components.hpe["switch"].medium.control.handle.borderWidth] + " solid " + theme.global.colors[_hpeDesignTokens.components.hpe["switch"].control.handle.enabled.borderColor][theme.dark ? 'dark' : 'light'] + ";\n        width: " + _hpeDesignTokens.components.hpe["switch"].medium.control.handle.width + ";\n        height: " + _hpeDesignTokens.components.hpe["switch"].medium.control.handle.height + ";\n        top: 1px; // TO DO token?\n        " + (!checked ? 'left: 1px;' : '') + " // TO DO token?\n        ";
        }
      },
      extend: function extend(_ref5) {
        var _theme$global$colors$6, _theme$global$colors$7;
        var checked = _ref5.checked,
          theme = _ref5.theme;
        return "\n        " + (checked && "background-color: " + ((_theme$global$colors$6 = theme.global.colors[_hpeDesignTokens.components.hpe["switch"].control.track.selected.enabled.background]) == null ? void 0 : _theme$global$colors$6[theme.dark ? 'dark' : 'light']) + ";") + "\n         margin-block: " + (_dimensions.dimensions.borderSize[_hpeDesignTokens.components.hpe["switch"].medium.control.track.marginY] || _hpeDesignTokens.components.hpe["switch"].medium.control.track.marginY) + "px;\n         border-color: " + ((_theme$global$colors$7 = theme.global.colors[_hpeDesignTokens.components.hpe["switch"].control.track.enabled.borderColor]) == null ? void 0 : _theme$global$colors$7[theme.dark ? 'dark' : 'light']) + ";\n      ";
      }
    },
    // HPE Design System guidance states that pad="none" should be applied on CheckBox
    // when its used outside of a FormField. We will apply this hover treatment in
    // those instances.
    extend: function extend(_ref6) {
      var disabled = _ref6.disabled,
        pad = _ref6.pad;
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    ", "\n    font-weight: ", ";\n    width: auto;\n  };\n  "])), !disabled && pad === 'none' && "&:hover {\n      background-color: unset;\n    }", _hpeDesignTokens.components.hpe.checkbox.medium.label.fontWeight);
    }
  },
  checkBoxGroup: {
    container: {
      gap: 'none',
      // TO DO token ?
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
    }
  },
  dataTable: {
    body: {
      // TO DO should there be a token?
      extend: function extend(_ref7) {
        var theme = _ref7.theme;
        return "\n        /* Margin and padding allow room for focus on table body */\n        margin: " + theme.global.edgeSize.xxsmall + " 0px;\n        padding: 0px " + theme.global.edgeSize.xxsmall + ";\n      ";
      },
      selected: {
        background: (_components$hpe$dataC = _hpeDesignTokens.components.hpe.dataCell.selected) == null || (_components$hpe$dataC = _components$hpe$dataC.enabled) == null ? void 0 : _components$hpe$dataC.background
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
      extend: function extend(_ref8) {
        var column = _ref8.column,
          sort = _ref8.sort,
          sortable = _ref8.sortable,
          theme = _ref8.theme;
        return "\n          " + (sort && sort.property === column && "\n            background: " + theme.global.colors['background-active'][theme.dark ? 'dark' : 'light'] + "\n          ") + ";\n          " + (sortable && sort && sort.property !== column && "\n              svg {\n                opacity: 0;\n              }\n              &:hover {\n                svg {\n                  opacity: 1;\n                }\n              }\n            ") + ";\n        ";
      },
      font: {
        weight: _hpeDesignTokens.components.hpe.headerCell.fontWeight
      },
      gap: _hpeDesignTokens.components.hpe.headerCell.gapX,
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
        return /*#__PURE__*/_react["default"].createElement(_Ascending.Ascending, {
          height: "medium"
        });
      },
      descending: function descending() {
        return /*#__PURE__*/_react["default"].createElement(_Descending.Descending, {
          height: "medium"
        });
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
        return /*#__PURE__*/_react["default"].createElement(_Unsorted.Unsorted, {
          height: "medium"
        });
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
      weight: _hpeDesignTokens.components.hpe.dataCell.primary.fontWeight,
      color: _hpeDesignTokens.components.hpe.dataCell.primary.enabled.textColor
    },
    resize: {
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
      style: 'solid',
      size: _hpeDesignTokens.components.hpe.formField.medium.input.container.borderWidth
    },
    button: {
      background: _hpeDesignTokens.components.hpe.button.secondary.enabled.background,
      border: {
        radius: _hpeDesignTokens.components.hpe.button.medium.secondary.borderRadius
      },
      pad: {
        vertical: _hpeDesignTokens.components.hpe.button.medium.secondary.paddingY,
        horizontal: _hpeDesignTokens.components.hpe.button.medium.secondary.paddingX
      },
      color: _hpeDesignTokens.components.hpe.button.secondary.enabled.textColor,
      font: {
        weight: _hpeDesignTokens.components.hpe.button.secondary.enabled.fontWeight
      },
      hover: {
        background: _hpeDesignTokens.components.hpe.button.secondary.hover.background,
        color: _hpeDesignTokens.components.hpe.button.secondary.hover.textColor
      }
    },
    dragOver: {
      background: MISSING.color,
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
        color: _hpeDesignTokens.components.hpe.formField.label.disabled.textColor
      }
    },
    error: {
      background: {
        color: _hpeDesignTokens.components.hpe.formField.input.container.status.critical.background
      },
      container: {
        gap: 'xsmall' // TO DO missing token
      },
      icon: /*#__PURE__*/_react["default"].createElement(_CircleAlert.CircleAlert, {
        size: "small",
        color: _hpeDesignTokens.light.hpe.color.icon.critical
      }),
      // TO DO need to handle modes
      size: 'xsmall',
      // TO DO we have a token but it's not a t-shirt size reference but fontSize, lineHeight directly
      color: _hpeDesignTokens.components.hpe.formField.error.enabled.textColor,
      margin: {
        // TO DO missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none'
      }
    },
    focus: {
      background: _hpeDesignTokens.components.hpe.formField.input.container.background,
      border: {
        color: _hpeDesignTokens.components.hpe.formField.input.container.borderColor
      }
    },
    help: {
      size: 'xsmall',
      color: _hpeDesignTokens.components.hpe.formField.help.enabled.color,
      margin: 'none' // TO DO missing token
    },
    info: {
      size: 'xsmall',
      color: _hpeDesignTokens.components.hpe.formField.info.enabled.color,
      margin: {
        // TO DO missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none'
      }
    },
    label: {
      size: 'xsmall',
      // TO DO how to capture this as token, currently we have "fontSize", "lineHeight", "..."
      color: _hpeDesignTokens.components.hpe.formField.label.enabled.color,
      margin: {
        // TO DO missing token
        bottom: 'none',
        top: 'xsmall',
        horizontal: 'none'
      },
      requiredIndicator: true,
      weight: _hpeDesignTokens.components.hpe.formField.medium.label.fontWeight
    },
    margin: {
      bottom: 'none' // TO DO missing token
    },
    round: _hpeDesignTokens.components.hpe.formField.medium.input.container.borderRadius,
    // TO DO no tokens
    survey: {
      label: {
        margin: {
          bottom: 'none'
        },
        size: 'medium'
      }
    }
  },
  heading: {
    color: 'heading',
    weight: _hpeDesignTokens.medium.hpe.heading.xlarge.fontWeight,
    level: {
      1: {
        font: {
          weight: _hpeDesignTokens.medium.hpe.heading.xlarge.fontWeight
        },
        small: {
          size: _hpeDesignTokens.medium.hpe.heading.large.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.large.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.medium.hpe.heading.xlarge.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.xlarge.lineHeight
        },
        large: {
          // TO DO what tokens?
          size: '48px',
          height: '48px'
        },
        xlarge: {
          // TO DO what tokens?
          size: '60px',
          height: '60px'
        }
      },
      2: {
        font: {
          weight: _hpeDesignTokens.medium.hpe.heading.large.fontWeight
        },
        small: {
          size: _hpeDesignTokens.medium.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.medium.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.medium.hpe.heading.large.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.large.lineHeight
        },
        large: {
          size: _hpeDesignTokens.medium.hpe.heading.xlarge.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.xlarge.lineHeight
        },
        xlarge: {
          // TO DO what tokens?
          size: '48px',
          height: '48px'
        }
      },
      3: {
        font: {
          weight: _hpeDesignTokens.medium.hpe.heading.medium.fontWeight
        },
        small: {
          size: _hpeDesignTokens.medium.hpe.heading.small.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.small.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.medium.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.medium.lineHeight
        },
        large: {
          size: _hpeDesignTokens.medium.hpe.heading.large.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.large.lineHeight
        },
        xlarge: {
          size: _hpeDesignTokens.medium.hpe.heading.xlarge.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.xlarge.lineHeight
        }
      },
      4: {
        font: {
          weight: _hpeDesignTokens.medium.hpe.heading.small.fontWeight
        },
        small: {
          size: _hpeDesignTokens.medium.hpe.heading.xsmall.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.xsmall.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.medium.hpe.heading.small.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.small.lineHeight
        },
        large: {
          size: _hpeDesignTokens.medium.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.medium.lineHeight
        },
        xlarge: {
          size: _hpeDesignTokens.medium.hpe.heading.large.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.large.lineHeight
        }
      },
      5: {
        font: {
          weight: _hpeDesignTokens.medium.hpe.heading.xsmall.fontWeight
        },
        small: {
          size: _hpeDesignTokens.medium.hpe.heading.xxsmall.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.xxsmall.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.medium.hpe.heading.xsmall.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.xsmall.lineHeight
        },
        large: {
          size: _hpeDesignTokens.medium.hpe.heading.small.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.small.lineHeight
        },
        xlarge: {
          size: _hpeDesignTokens.medium.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.medium.lineHeight
        }
      },
      6: {
        font: {
          weight: _hpeDesignTokens.medium.hpe.heading.xxsmall.fontWeight
        },
        small: {
          size: _hpeDesignTokens.medium.hpe.heading.xxsmall.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.xxsmall.lineHeight
        },
        medium: {
          size: _hpeDesignTokens.medium.hpe.heading.xxsmall.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.xxsmall.lineHeight
        },
        large: {
          size: _hpeDesignTokens.medium.hpe.heading.small.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.small.lineHeight
        },
        xlarge: {
          size: _hpeDesignTokens.medium.hpe.heading.medium.fontSize,
          height: _hpeDesignTokens.medium.hpe.heading.medium.lineHeight
        }
      }
    },
    // This block applies size-specific weights to headings to ensure
    // that as heading sizes get small, the weight increases and as they
    // get large, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support level and size-specific weights.
    extend: function extend(_ref9) {
      var level = _ref9.level,
        size = _ref9.size;
      var fontWeight = '';
      if (level === 3 && size === 'small') {
        fontWeight = "font-weight: " + _hpeDesignTokens.medium.hpe.heading.small.fontWeight + ";";
        // undefined necessary so an h4 without size prop explicitly defined
        // still renders as weight 600
      } else if (level === 4 && ['small', 'medium', undefined].includes(size)) {
        fontWeight = "font-weight: " + _hpeDesignTokens.medium.hpe.heading.small.fontWeight + ";";
      } else if (level === 5 && size === 'xlarge') {
        fontWeight = "font-weight: " + _hpeDesignTokens.medium.hpe.heading.small.fontWeight + ";";
      }
      return fontWeight;
    }
  },
  icon: {
    disableScaleDown: true,
    matchSize: true,
    size: {
      xsmall: _hpeDesignTokens.medium.hpe.size.icon.xsmall,
      small: _hpeDesignTokens.medium.hpe.size.icon.small,
      medium: _hpeDesignTokens.medium.hpe.size.icon.medium,
      large: _hpeDesignTokens.medium.hpe.size.icon.large,
      xlarge: _hpeDesignTokens.medium.hpe.size.icon.xlarge,
      xxlarge: _hpeDesignTokens.medium.hpe.size.icon.xxlarge
    }
  },
  layer: {
    background: 'background-floating',
    border: {
      radius: 'small',
      intelligentRounding: true
    },
    container: {
      elevation: 'large'
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
      extend: function extend(_ref10) {
        var theme = _ref10.theme;
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
        pad: 'none' // TO DO no token
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
    direction: 'column',
    global: {
      direction: 'row',
      container: {
        round: 'none'
      }
    },
    message: {
      color: 'text'
    },
    title: {
      color: 'text-strong',
      weight: _hpeDesignTokens.global.hpe.fontWeight.medium
    },
    critical: {
      background: 'background-critical',
      message: {
        color: 'text-onCritical-default'
      },
      title: {
        color: 'text-onCritical-strong'
      },
      global: {
        background: 'background-critical',
        message: {
          color: 'text-onCritical-default'
        },
        title: {
          color: 'text-onCritical-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    warning: {
      background: 'background-warning',
      message: {
        color: 'text-onWarning-default'
      },
      title: {
        color: 'text-onWarning-strong'
      },
      global: {
        background: 'background-warning',
        message: {
          color: 'text-onWarning-default'
        },
        title: {
          color: 'text-onWarning-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    normal: {
      background: 'background-ok',
      message: {
        color: 'text-onOk-default'
      },
      title: {
        color: 'text-onOk-strong'
      },
      global: {
        background: 'background-ok',
        message: {
          color: 'text-onOk-default'
        },
        title: {
          color: 'text-onOk-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    unknown: {
      background: 'background-unknown',
      message: {
        color: 'text-onUnknown-default'
      },
      title: {
        color: 'text-onUnknown-strong'
      },
      global: {
        background: 'background-unknown',
        message: {
          color: 'text-onUnknown-default'
        },
        title: {
          color: 'text-onUnknown-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    info: {
      background: 'background-info',
      message: {
        color: 'text-onInfo-default'
      },
      title: {
        color: 'text-onInfo-strong'
      },
      global: {
        background: 'background-info',
        message: {
          color: 'text-onInfo-default'
        },
        title: {
          color: 'text-onInfo-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    undefined: {
      background: 'background-unknown',
      message: {
        color: 'text-onUnknown-default'
      },
      title: {
        color: 'text-onUnknown-strong'
      },
      global: {
        background: 'background-ok',
        message: {
          color: 'text-onUnknown-default'
        },
        title: {
          color: 'text-onUnknown-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
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
    // title: {
    //   size: undefined,
    // },
    subtitle: {
      size: 'large'
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
      color: _hpeDesignTokens.components.hpe.button["default"].enabled.textColor,
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
            width: _dimensions.dimensions.borderSize[_hpeDesignTokens.components.hpe.button.small["default"].borderWidth] || _hpeDesignTokens.components.hpe.button.small["default"].borderWidth
          },
          pad: {
            vertical: '4px',
            horizontal: '4px'
          },
          font: {
            size: (_components$hpe$eleme7 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme7.small.fontSize,
            height: (_components$hpe$eleme8 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme8.small.lineHeight
          },
          height: (_components$hpe$eleme9 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme9.small.minHeight,
          width: (_components$hpe$eleme10 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme10.small.minHeight
        },
        medium: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.medium["default"].borderRadius,
            width: _dimensions.dimensions.borderSize[_hpeDesignTokens.components.hpe.button.medium["default"].borderWidth] || _hpeDesignTokens.components.hpe.button.medium["default"].borderWidth
          },
          pad: {
            vertical: '4px',
            horizontal: '4px'
          },
          font: {
            size: (_components$hpe$eleme11 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme11.medium.fontSize,
            height: (_components$hpe$eleme12 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme12.medium.lineHeight
          },
          height: (_components$hpe$eleme13 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme13.medium.minHeight,
          width: (_components$hpe$eleme14 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme14.medium.minHeight
        },
        large: {
          border: {
            radius: _hpeDesignTokens.components.hpe.button.large["default"].borderRadius,
            width: _dimensions.dimensions.borderSize[_hpeDesignTokens.components.hpe.button.large["default"].borderWidth] || _hpeDesignTokens.components.hpe.button.large["default"].borderWidth
          },
          pad: {
            vertical: '4px',
            horizontal: '4px'
          },
          font: {
            size: (_components$hpe$eleme15 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme15.large.fontSize,
            height: (_components$hpe$eleme16 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme16.large.lineHeight
          },
          height: (_components$hpe$eleme17 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme17.large.minHeight,
          width: (_components$hpe$eleme18 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme18.large.minHeight
        }
      }
    }
  },
  paragraph: _extends({}, paragraphTheme, {
    // This block applies size-specific weights to paragraph to ensure
    // that as paragraph sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: function extend(_ref11) {
      var size = _ref11.size;
      return "\n      " + (['xxlarge'].includes(size) ? "font-weight: " + _hpeDesignTokens.medium.hpe.text[size].fontWeight + ";" : '') + ";\n    ";
    }
  }),
  radioButton: {
    border: {
      color: _hpeDesignTokens.components.hpe.radioButton.control.enabled.borderColor,
      width: _hpeDesignTokens.components.hpe.radioButton.medium.control.borderWidth // TO DO want this narrower when not checked
    },
    color: _hpeDesignTokens.components.hpe.radioButton.control.selected.enabled.borderColor,
    container: {
      extend: function extend(_ref12) {
        var theme = _ref12.theme;
        return "\n      width: auto;\n      padding-inline: " + _hpeDesignTokens.components.hpe.formField.medium.input.group.item.paddingX + ";\n      &:has(input[checked]) {\n        background: " +
        // TO DO how to only do in FormField
        theme.global.colors['background-selected-weak-enabled'][theme.dark ? 'dark' : 'light'] + ";\n      }\n    ";
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
          r: "6"
        }));
      }
    }
  },
  radioButtonGroup: {
    container: {
      gap: 'none',
      // TO DO token?
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
      extend: function extend(_ref13) {
        var disabled = _ref13.disabled;
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
        right: '12px'
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
      xsmall: (_components$hpe$eleme19 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme19.xsmall.minHeight,
      small: (_components$hpe$eleme20 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme20.small.minHeight,
      medium: (_components$hpe$eleme21 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme21.medium.minHeight,
      large: (_components$hpe$eleme22 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme22.large.minHeight,
      xlarge: (_components$hpe$eleme23 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme23.xlarge.minHeight
    }
  },
  starRating: {
    color: 'background-selected-strong-enabled'
  },
  tab: {
    color: 'text',
    active: {
      background: 'background-selected-strong-enabled',
      color: 'text-onSelectedStrong',
      weight: 500
    },
    hover: {
      background: 'background-hover',
      color: 'text'
    },
    border: {
      side: 'all',
      color: 'transparent',
      size: _dimensions.dimensions[(_components$hpe$eleme24 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme24.medium.borderWidth] || ((_components$hpe$eleme25 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme25.medium.borderWidth),
      active: {
        color: 'transparent'
      },
      disabled: {
        color: undefined
      },
      hover: {
        color: undefined
      }
    },
    disabled: {
      background: 'background-disabled',
      color: 'text-disabled'
    },
    pad: {
      bottom: (_components$hpe$eleme26 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme26.medium.paddingY,
      top: (_components$hpe$eleme27 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme27.medium.paddingY,
      horizontal: (_components$hpe$eleme28 = _hpeDesignTokens.components.hpe.element) == null || (_components$hpe$eleme28 = _components$hpe$eleme28.medium) == null || (_components$hpe$eleme28 = _components$hpe$eleme28.paddingX) == null ? void 0 : _components$hpe$eleme28.wide
    },
    margin: {
      vertical: 'none',
      horizontal: 'none'
    },
    extend: function extend(_ref14) {
      var theme = _ref14.theme;
      return "border-radius: " + theme.global.edgeSize.xsmall + ";";
    }
  },
  tabs: {
    gap: 'small',
    header: {
      border: undefined,
      // TO DO these selectors could be improved on in future grommet theme enhancements
      extend: function extend(_ref15) {
        var theme = _ref15.theme;
        return "\n        border-radius: " + theme.global.edgeSize.xsmall + "; \n        & button[aria-selected=\"true\"]:hover > div {\n          background: " + theme.global.colors['background-selected-strong-hover'][theme.dark ? 'dark' : 'light'] + ";\n          color: " + theme.global.colors['text-onSelectedStrong'][theme.dark ? 'dark' : 'light'] + ";\n        }\n      ";
      }
    },
    step: {
      xsmall: 1,
      xlarge: 3
    }
  },
  table: {
    header: {
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
        // TO DO this causes issues on the last row with the footer border
        color: _hpeDesignTokens.components.hpe.dataCell.enabled.borderColor
      },
      extend: function extend(_ref16) {
        var theme = _ref16.theme;
        return "\n          &:hover {\n            button {\n              background: " + theme.global.colors['background-hover'][theme.dark ? 'dark' : 'light'] + ";\n            }\n          }\n        ";
      }
    },
    row: {
      hover: {
        background: 'background-hover'
      }
    },
    footer: {
      extend: "\n        font-weight: " + MISSING.weight + ";\n      "
    }
  },
  tag: {
    border: {
      color: 'border-weak'
    },
    icons: {
      remove: _Close.Close
    },
    pad: {
      horizontal: (_components$hpe$eleme29 = _hpeDesignTokens.components.hpe.element) == null || (_components$hpe$eleme29 = _components$hpe$eleme29.medium) == null || (_components$hpe$eleme29 = _components$hpe$eleme29.paddingX) == null ? void 0 : _components$hpe$eleme29["default"],
      vertical: (_components$hpe$eleme30 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme30.medium.paddingY
    },
    remove: {
      kind: 'default'
    },
    value: {
      weight: _hpeDesignTokens.global.hpe.fontWeight.medium
    },
    round: 'xsmall',
    size: {
      xsmall: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme31 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme31.small.paddingY,
          horizontal: (_components$hpe$eleme32 = _hpeDesignTokens.components.hpe.element) == null || (_components$hpe$eleme32 = _components$hpe$eleme32.small) == null || (_components$hpe$eleme32 = _components$hpe$eleme32.paddingX) == null ? void 0 : _components$hpe$eleme32["default"]
        },
        remove: {
          size: 'xsmall',
          margin: {
            right: 'none',
            vertical: '-1px' // account for border
          }
        }
      },
      small: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme33 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme33.small.paddingY,
          horizontal: (_components$hpe$eleme34 = _hpeDesignTokens.components.hpe.element) == null || (_components$hpe$eleme34 = _components$hpe$eleme34.small) == null || (_components$hpe$eleme34 = _components$hpe$eleme34.paddingX) == null ? void 0 : _components$hpe$eleme34["default"]
        },
        remove: {
          size: 'xsmall',
          margin: {
            right: '2px'
          }
        }
      },
      // TO DO tag rounding is overriding "default" rounding, do we expect this?
      medium: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme35 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme35.medium.paddingY,
          horizontal: (_components$hpe$eleme36 = _hpeDesignTokens.components.hpe.element) == null || (_components$hpe$eleme36 = _components$hpe$eleme36.medium) == null || (_components$hpe$eleme36 = _components$hpe$eleme36.paddingX) == null ? void 0 : _components$hpe$eleme36["default"]
        },
        remove: {
          size: 'small',
          margin: {
            right: 'xxsmall'
          }
        }
      },
      large: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme37 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme37.large.paddingY,
          horizontal: (_components$hpe$eleme38 = _hpeDesignTokens.components.hpe.element) == null || (_components$hpe$eleme38 = _components$hpe$eleme38.large) == null || (_components$hpe$eleme38 = _components$hpe$eleme38.paddingX) == null ? void 0 : _components$hpe$eleme38["default"]
        },
        remove: {
          size: 'medium',
          margin: {
            right: 'xxsmall'
          }
        }
      },
      xlarge: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme39 = _hpeDesignTokens.components.hpe.element) == null ? void 0 : _components$hpe$eleme39.xlarge.paddingY,
          horizontal: (_components$hpe$eleme40 = _hpeDesignTokens.components.hpe.element) == null || (_components$hpe$eleme40 = _components$hpe$eleme40.xlarge) == null || (_components$hpe$eleme40 = _components$hpe$eleme40.paddingX) == null ? void 0 : _components$hpe$eleme40["default"]
        },
        remove: {
          size: 'large',
          margin: {
            right: 'xsmall'
          }
        }
      }
    }
  },
  text: textTheme,
  textInput: {
    container: {
      extend: function extend(_ref17) {
        var theme = _ref17.theme;
        return "\n        svg {\n          fill: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n          stroke: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n        }\n      ";
      }
    }
  },
  tip: {
    content: {
      background: 'background-floating',
      border: {
        color: 'border-weak'
      },
      margin: 'xxsmall',
      elevation: 'small',
      pad: {
        vertical: 'none',
        horizontal: 'small'
      },
      round: _hpeDesignTokens.components.hpe.drop.borderRadius
    }
  },
  thumbsRating: {
    like: {
      color: 'background-selected-strong-enabled'
    },
    dislike: {
      color: 'background-selected-strong-enabled'
    }
  },
  toggleGroup: {
    button: {
      kind: 'toolbar'
    },
    container: {
      border: false
    },
    divider: false
  },
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24
});