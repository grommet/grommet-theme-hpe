var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import { css } from 'styled-components';
import { primitives as localPrimitives, dark as localDark, light as localLight, dimension as localDimension, small as localSmall, global as localGlobal, components as localComponents } from 'hpe-design-tokens/grommet';
import { Ascending } from 'grommet-icons/icons/Ascending';
import { Blank } from 'grommet-icons/icons/Blank';
import { CircleAlert } from 'grommet-icons/icons/CircleAlert';
import { Close } from 'grommet-icons/icons/Close';
import { Descending } from 'grommet-icons/icons/Descending';
import { Down } from 'grommet-icons/icons/Down';
import { Next } from 'grommet-icons/icons/Next';
import { Previous } from 'grommet-icons/icons/Previous';
import { Unsorted } from 'grommet-icons/icons/Unsorted';
import { Up } from 'grommet-icons/icons/Up';
import { Hpe } from 'grommet-icons/icons/Hpe';
import { backgrounds } from './backgrounds';
import { colors } from './colors';
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
var componentSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
var buttonKinds = ['default', 'secondary', 'primary', 'toolbar'];
var buttonStates = ['hover', 'active', 'disabled'];
var textSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', '3xlarge', '4xlarge', '5xlarge', '6xlarge'];
var getThemeColor = function getThemeColor(color, theme) {
  var _theme$global$colors$;
  return ((_theme$global$colors$ = theme.global.colors[color]) == null ? void 0 : _theme$global$colors$[theme.dark ? 'dark' : 'light']) || color;
};
var globalSizes = {
  borderSize: {
    xsmall: '1px',
    small: '2px',
    medium: baseSpacing / 6 + "px",
    // 4
    large: baseSpacing / 2 + "px",
    // 12
    xlarge: baseSpacing + "px",
    // 24
    "default": '1px'
  },
  edgeSize: {
    none: '0px',
    hair: '1px',
    // for Chart
    xxsmall: baseSpacing / 8 + "px",
    // 3
    xsmall: baseSpacing / 4 + "px",
    // 6
    small: baseSpacing / 2 + "px",
    // 12
    medium: baseSpacing + "px",
    // 24
    large: baseSpacing * 2 + "px",
    // 48
    xlarge: baseSpacing * 4 + "px",
    // 96
    responsiveBreakpoint: 'small'
  },
  // same as edgeSize for backwards compatibility
  radius: {
    none: '0px',
    hair: '1px',
    // for Chart
    xxsmall: baseSpacing / 8 + "px",
    // 3
    xsmall: baseSpacing / 4 + "px",
    // 6
    small: baseSpacing / 2 + "px",
    // 12
    medium: baseSpacing + "px",
    // 24
    large: baseSpacing * 2 + "px",
    // 48
    xlarge: baseSpacing * 4 + "px",
    // 96
    responsiveBreakpoint: 'small'
  },
  size: {
    xxsmall: baseSpacing * 2 + "px",
    // 48
    xsmall: baseSpacing * 4 + "px",
    // 96
    small: baseSpacing * 8 + "px",
    // 192
    medium: baseSpacing * 16 + "px",
    // 384
    large: baseSpacing * 32 + "px",
    // 768
    xlarge: baseSpacing * 48 + "px",
    // 1152
    xxlarge: baseSpacing * 64 + "px",
    // 1536
    full: '100%'
  }
};
var responsiveGlobalSizes = {
  borderSize: {
    xsmall: '1px',
    small: '2px',
    medium: baseSpacing / 6 + "px",
    // 4
    large: baseSpacing / 4 + "px",
    // 6
    xlarge: baseSpacing / 2 + "px",
    // 12
    "default": '1px'
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
  // same as edgeSize for backwards compatibility
  radius: {
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
};
var getTextSize = function getTextSize(size) {
  if (size === '3xlarge') return '3xl';
  if (size === '4xlarge') return '4xl';
  if (size === '5xlarge') return '5xl';
  if (size === '6xlarge') return '6xl';
  return size;
};
var buildTheme = function buildTheme(tokens, flags) {
  var _components$hpe$eleme, _components$hpe$eleme2, _components$hpe$eleme3, _components$hpe$eleme4, _components$hpe$eleme5, _components$hpe$dataC, _components$hpe$eleme6, _components$hpe$eleme7, _components$hpe$eleme8, _components$hpe$eleme9, _components$hpe$eleme10, _components$hpe$eleme11, _components$hpe$eleme12, _components$hpe$eleme13, _components$hpe$eleme14, _components$hpe$eleme15, _components$hpe$eleme16, _components$hpe$eleme17, _components$hpe$eleme18, _components$hpe$eleme19, _components$hpe$eleme20, _components$hpe$eleme21, _components$hpe$eleme22, _components$hpe$eleme23, _components$hpe$eleme24, _components$hpe$eleme25, _components$hpe$eleme26, _components$hpe$eleme27, _components$hpe$eleme28, _components$hpe$eleme29, _components$hpe$eleme30, _components$hpe$eleme31, _components$hpe$eleme32, _components$hpe$eleme33, _components$hpe$eleme34, _components$hpe$eleme35, _components$hpe$eleme36, _components$hpe$eleme37, _components$hpe$eleme38, _components$hpe$eleme39;
  var primitives = tokens.primitives,
    light = tokens.light,
    dark = tokens.dark,
    small = tokens.small,
    large = tokens.large,
    elevationlight = tokens.elevationlight,
    elevationdark = tokens.elevationdark,
    global = tokens.global,
    components = tokens.components;
  var size = function size(breakpoint) {
    return {
      xxsmall: breakpoint.hpe.container.xxsmall,
      xsmall: breakpoint.hpe.container.xsmall,
      small: breakpoint.hpe.container.small,
      medium: breakpoint.hpe.container.medium,
      large: breakpoint.hpe.container.large,
      xlarge: breakpoint.hpe.container.xlarge,
      xxlarge: breakpoint.hpe.container.xxlarge,
      full: '100%'
    };
  };
  var dimensions = _extends({}, flags['v6-backwards-compatibility'] ? globalSizes : {
    borderSize: {
      xsmall: large.hpe.borderWidth.xsmall,
      small: large.hpe.borderWidth.small,
      medium: large.hpe.borderWidth.medium,
      "default": large.hpe.borderWidth["default"],
      large: large.hpe.borderWidth.large,
      xlarge: large.hpe.borderWidth.xlarge
    },
    edgeSize: {
      none: large.hpe.spacing.none,
      hair: large.hpe.spacing.hair,
      '5xsmall': large.hpe.spacing['5xsmall'],
      '4xsmall': large.hpe.spacing['4xsmall'],
      '3xsmall': large.hpe.spacing['3xsmall'],
      xxsmall: large.hpe.spacing.xxsmall,
      xsmall: large.hpe.spacing.xsmall,
      small: large.hpe.spacing.small,
      medium: large.hpe.spacing.medium,
      large: large.hpe.spacing.large,
      xlarge: large.hpe.spacing.xlarge,
      xxlarge: large.hpe.spacing.xxlarge,
      '3xlarge': large.hpe.spacing['3xlarge'],
      responsiveBreakpoint: 'small'
    },
    radius: {
      none: large.hpe.radius.none,
      hair: large.hpe.radius.hair,
      xxsmall: large.hpe.radius.xxsmall,
      xsmall: large.hpe.radius.xsmall,
      small: large.hpe.radius.small,
      medium: large.hpe.radius.medium,
      large: large.hpe.radius.large,
      xlarge: large.hpe.radius.xlarge,
      xxlarge: large.hpe.radius.xxlarge,
      responsiveBreakpoint: 'small'
    },
    size: size(large)
  }, {
    breakpoints: {
      xsmall: _extends({}, flags['v6-backwards-compatibility'] ? responsiveGlobalSizes : {
        borderSize: {
          xsmall: small.hpe.borderWidth.xsmall,
          small: small.hpe.borderWidth.small,
          medium: small.hpe.borderWidth.medium,
          "default": small.hpe.borderWidth["default"],
          large: small.hpe.borderWidth.large,
          xlarge: small.hpe.borderWidth.xlarge
        },
        edgeSize: {
          none: small.hpe.spacing.none,
          hair: small.hpe.spacing.hair,
          xxsmall: small.hpe.spacing.xxsmall,
          xsmall: small.hpe.spacing.xsmall,
          small: small.hpe.spacing.small,
          medium: small.hpe.spacing.medium,
          large: small.hpe.spacing.large,
          xlarge: small.hpe.spacing.xlarge,
          responsiveBreakpoint: 'small'
        },
        radius: {
          none: small.hpe.radius.none,
          hair: small.hpe.radius.hair,
          xxsmall: small.hpe.radius.xxsmall,
          xsmall: small.hpe.radius.xsmall,
          small: small.hpe.radius.small,
          medium: small.hpe.radius.medium,
          large: small.hpe.radius.large,
          xlarge: small.hpe.radius.xlarge,
          xxlarge: small.hpe.radius.xxlarge,
          responsiveBreakpoint: 'small'
        },
        size: size(small)
      }, {
        value: parseInt(global.hpe.breakpoint.xsmall, 10)
      }),
      small: _extends({}, flags['v6-backwards-compatibility'] ? responsiveGlobalSizes : {
        borderSize: {
          xsmall: small.hpe.borderWidth.xsmall,
          small: small.hpe.borderWidth.small,
          medium: small.hpe.borderWidth.medium,
          "default": small.hpe.borderWidth["default"],
          large: small.hpe.borderWidth.large,
          xlarge: small.hpe.borderWidth.xlarge
        },
        edgeSize: {
          none: small.hpe.spacing.none,
          hair: small.hpe.spacing.hair,
          xxsmall: small.hpe.spacing.xxsmall,
          xsmall: small.hpe.spacing.xsmall,
          small: small.hpe.spacing.small,
          medium: small.hpe.spacing.medium,
          large: small.hpe.spacing.large,
          xlarge: small.hpe.spacing.xlarge,
          responsiveBreakpoint: 'small'
        },
        radius: {
          none: small.hpe.radius.none,
          hair: small.hpe.radius.hair,
          xxsmall: small.hpe.radius.xxsmall,
          xsmall: small.hpe.radius.xsmall,
          small: small.hpe.radius.small,
          medium: small.hpe.radius.medium,
          large: small.hpe.radius.large,
          xlarge: small.hpe.radius.xlarge,
          xxlarge: small.hpe.radius.xxlarge,
          responsiveBreakpoint: 'small'
        },
        size: size(small)
      }, {
        value: parseInt(global.hpe.breakpoint.small, 10)
      }),
      medium: {
        value: parseInt(global.hpe.breakpoint.medium, 10)
      },
      large: {
        value: parseInt(global.hpe.breakpoint.large, 10)
      },
      xlarge: {}
    }
  });

  // option button kind styles. abstracted so select.emptySearchMessage
  // can reference pad value
  var option = {
    color: components.hpe.select["default"].option.rest.textColor,
    border: {
      radius: dimensions.edgeSize[components.hpe.select["default"].medium.option.borderRadius] || components.hpe.select["default"].medium.option.borderRadius,
      width: dimensions.borderSize[components.hpe.select["default"].medium.option.borderWidth] || components.hpe.select["default"].medium.option.borderWidth,
      color: components.hpe.select["default"].option.rest.borderColor
    },
    pad: {
      horizontal: components.hpe.select["default"].medium.option.paddingX,
      vertical: components.hpe.select["default"].medium.option.paddingY
    },
    font: {
      weight: components.hpe.select["default"].option.rest.fontWeight
    }
  };

  // abstracted so button and pinned list icon can reference
  var mediumIconOnlyPad = {
    vertical: components.hpe.button["default"].medium.iconOnly.paddingY,
    horizontal: components.hpe.button["default"].medium.iconOnly.paddingY
  };
  var anchorSizeTheme = {};
  textSizes.forEach(function (sizeArg) {
    var textSize = sizeArg === '6xlarge' ? '5xlarge' : sizeArg;
    var themeSize = getTextSize(textSize);
    anchorSizeTheme[themeSize] = {
      color: components.hpe.anchor["default"].rest.textColor,
      textDecoration: components.hpe.anchor["default"].rest.textDecoration,
      fontWeight: components.hpe.anchor["default"].rest.fontWeight,
      gap: components.hpe.anchor["default"][textSize].gapX
    };
  });
  var paragraphTheme = {};
  var textTheme = {};
  var fontWeights = {};
  // Keep track of the largest text size to use as a fallback
  // because grommet theme has a max size of 6xl, but design tokens
  // only supports up to 5xl.
  var fallback = {
    size: '0rem',
    height: '0rem',
    maxWidth: '0rem',
    weight: 0
  };
  textSizes.forEach(function (textSize) {
    var _large$hpe$text, _large$hpe$text6, _large$hpe$text7, _large$hpe$text8, _large$hpe$text9, _large$hpe$text10, _large$hpe$text11;
    if (parseInt((_large$hpe$text = large.hpe.text) == null || (_large$hpe$text = _large$hpe$text[textSize]) == null ? void 0 : _large$hpe$text.fontSize.replace('rem', ''), 10) > parseInt(fallback.size.replace('rem', ''), 10)) {
      var _large$hpe$text2, _large$hpe$text3, _large$hpe$text4, _large$hpe$text5;
      fallback.size = (_large$hpe$text2 = large.hpe.text) == null || (_large$hpe$text2 = _large$hpe$text2[textSize]) == null ? void 0 : _large$hpe$text2.fontSize;
      fallback.height = (_large$hpe$text3 = large.hpe.text) == null || (_large$hpe$text3 = _large$hpe$text3[textSize]) == null ? void 0 : _large$hpe$text3.lineHeight;
      fallback.maxWidth = (_large$hpe$text4 = large.hpe.text) == null || (_large$hpe$text4 = _large$hpe$text4[textSize]) == null ? void 0 : _large$hpe$text4.maxWidth;
      fallback.weight = (_large$hpe$text5 = large.hpe.text) == null || (_large$hpe$text5 = _large$hpe$text5[textSize]) == null ? void 0 : _large$hpe$text5.fontWeight;
    }
    var themeSize = getTextSize(textSize);
    paragraphTheme[themeSize] = {
      size: ((_large$hpe$text6 = large.hpe.text) == null || (_large$hpe$text6 = _large$hpe$text6[textSize]) == null ? void 0 : _large$hpe$text6.fontSize) || fallback.size,
      height: ((_large$hpe$text7 = large.hpe.text) == null || (_large$hpe$text7 = _large$hpe$text7[textSize]) == null ? void 0 : _large$hpe$text7.lineHeight) || fallback.height,
      maxWidth: ((_large$hpe$text8 = large.hpe.text) == null || (_large$hpe$text8 = _large$hpe$text8[textSize]) == null ? void 0 : _large$hpe$text8.maxWidth) || fallback.maxWidth
    };
    textTheme[themeSize] = {
      size: ((_large$hpe$text9 = large.hpe.text) == null || (_large$hpe$text9 = _large$hpe$text9[textSize]) == null ? void 0 : _large$hpe$text9.fontSize) || fallback.size,
      height: ((_large$hpe$text10 = large.hpe.text) == null || (_large$hpe$text10 = _large$hpe$text10[textSize]) == null ? void 0 : _large$hpe$text10.lineHeight) || fallback.height
    };
    fontWeights[themeSize] = ((_large$hpe$text11 = large.hpe.text) == null || (_large$hpe$text11 = _large$hpe$text11[textSize]) == null ? void 0 : _large$hpe$text11.fontWeight) || fallback.weight;
  });
  textTheme.extend = function (_ref) {
    var textSize = _ref.size,
      weight = _ref.weight;
    return !weight ? "font-weight: " + fontWeights[textSize] + ";" : '';
  };
  paragraphTheme.extend = function (_ref2) {
    var textSize = _ref2.size,
      weight = _ref2.weight;
    return !weight ? "font-weight: " + fontWeights[textSize] + ";" : '';
  };
  var buttonKindTheme = {};
  buttonKinds.forEach(function (kind) {
    var _components$hpe$butto, _components$hpe$butto2, _components$hpe$butto3, _components$hpe$butto4, _components$hpe$butto5, _components$hpe$butto6;
    var borderWidth = (_components$hpe$butto = components.hpe.button[kind]) == null ? void 0 : _components$hpe$butto.medium.borderWidth;
    var borderRadius = (_components$hpe$butto2 = components.hpe.button[kind]) == null ? void 0 : _components$hpe$butto2.medium.borderRadius;
    buttonKindTheme[kind] = {
      background: (_components$hpe$butto3 = components.hpe.button) == null ? void 0 : _components$hpe$butto3[kind].rest.background,
      border: {
        width: dimensions.borderSize[borderWidth] || borderWidth,
        color: (_components$hpe$butto4 = components.hpe.button) == null ? void 0 : _components$hpe$butto4[kind].rest.borderColor,
        radius: dimensions.borderSize[borderRadius] || borderRadius
      },
      color: (_components$hpe$butto5 = components.hpe.button) == null ? void 0 : _components$hpe$butto5[kind].rest.textColor,
      font: {
        weight: (_components$hpe$butto6 = components.hpe.button) == null ? void 0 : _components$hpe$butto6[kind].rest.fontWeight
      }
    };
  });
  var buttonStatesTheme = {};
  buttonStates.forEach(function (state) {
    buttonStatesTheme[state] = {};
    buttonKinds.forEach(function (kind) {
      var adjustedState = state;
      if (state === 'active') {
        var _components$hpe$butto7, _components$hpe$butto8, _components$hpe$butto9, _components$hpe$butto10, _components$hpe$butto11, _components$hpe$butto12, _components$hpe$butto13, _components$hpe$butto14;
        adjustedState = 'selected';
        buttonStatesTheme[state][kind] = {
          background: {
            color: (_components$hpe$butto7 = components.hpe.button) == null || (_components$hpe$butto7 = _components$hpe$butto7[kind]) == null ? void 0 : _components$hpe$butto7[adjustedState].rest.background
          },
          border: {
            color: (_components$hpe$butto8 = components.hpe.button) == null || (_components$hpe$butto8 = _components$hpe$butto8[kind]) == null ? void 0 : _components$hpe$butto8[adjustedState].rest.borderColor
          },
          color: (_components$hpe$butto9 = components.hpe.button) == null || (_components$hpe$butto9 = _components$hpe$butto9[kind]) == null ? void 0 : _components$hpe$butto9[adjustedState].rest.textColor,
          font: {
            weight: (_components$hpe$butto10 = components.hpe.button) == null || (_components$hpe$butto10 = _components$hpe$butto10[kind]) == null ? void 0 : _components$hpe$butto10[adjustedState].rest.fontWeight
          }
        };
        if (!('active' in buttonStatesTheme.hover)) buttonStatesTheme.hover.active = {};
        buttonStatesTheme.hover[state][kind] = {
          background: {
            color: (_components$hpe$butto11 = components.hpe.button) == null || (_components$hpe$butto11 = _components$hpe$butto11[kind]) == null || (_components$hpe$butto11 = _components$hpe$butto11[adjustedState]) == null || (_components$hpe$butto11 = _components$hpe$butto11.hover) == null ? void 0 : _components$hpe$butto11.background
          },
          border: {
            color: (_components$hpe$butto12 = components.hpe.button) == null || (_components$hpe$butto12 = _components$hpe$butto12[kind]) == null || (_components$hpe$butto12 = _components$hpe$butto12[adjustedState]) == null || (_components$hpe$butto12 = _components$hpe$butto12.hover) == null ? void 0 : _components$hpe$butto12.borderColor
          },
          color: (_components$hpe$butto13 = components.hpe.button) == null || (_components$hpe$butto13 = _components$hpe$butto13[kind]) == null || (_components$hpe$butto13 = _components$hpe$butto13[adjustedState]) == null || (_components$hpe$butto13 = _components$hpe$butto13.hover) == null ? void 0 : _components$hpe$butto13.textColor,
          font: {
            weight: (_components$hpe$butto14 = components.hpe.button) == null || (_components$hpe$butto14 = _components$hpe$butto14[kind]) == null || (_components$hpe$butto14 = _components$hpe$butto14[adjustedState]) == null || (_components$hpe$butto14 = _components$hpe$butto14.hover) == null ? void 0 : _components$hpe$butto14.fontWeight
          }
        };
      } else if (kind === 'option') {
        var _components$hpe$selec, _components$hpe$selec2, _components$hpe$selec3;
        if (state === 'active') adjustedState = 'selected';
        buttonStatesTheme[state][kind] = {
          background: {
            color: (_components$hpe$selec = components.hpe.select["default"].option) == null ? void 0 : _components$hpe$selec[adjustedState].rest.background
          },
          border: {
            color: (_components$hpe$selec2 = components.hpe.select["default"].option) == null ? void 0 : _components$hpe$selec2[adjustedState].borderColor
          },
          color: (_components$hpe$selec3 = components.hpe.select["default"].option) == null ? void 0 : _components$hpe$selec3[adjustedState].textColor
        };
      } else if (state === 'disabled') {
        var _components$hpe$butto15, _components$hpe$butto16, _components$hpe$butto17, _components$hpe$butto18;
        buttonStatesTheme[state][kind] = {
          background: {
            color: (_components$hpe$butto15 = components.hpe.button) == null || (_components$hpe$butto15 = _components$hpe$butto15[kind]) == null ? void 0 : _components$hpe$butto15[adjustedState].rest.background
          },
          border: {
            width: '',
            color: (_components$hpe$butto16 = components.hpe.button) == null || (_components$hpe$butto16 = _components$hpe$butto16[kind]) == null ? void 0 : _components$hpe$butto16[adjustedState].rest.borderColor
          },
          color: (_components$hpe$butto17 = components.hpe.button) == null || (_components$hpe$butto17 = _components$hpe$butto17[kind]) == null ? void 0 : _components$hpe$butto17[adjustedState].rest.textColor,
          font: {
            weight: (_components$hpe$butto18 = components.hpe.button) == null || (_components$hpe$butto18 = _components$hpe$butto18[kind]) == null ? void 0 : _components$hpe$butto18[adjustedState].rest.fontWeight
          }
        };
      } else {
        var _components$hpe$butto19, _components$hpe$butto20, _components$hpe$butto21, _components$hpe$butto22;
        buttonStatesTheme[state][kind] = {
          background: {
            color: (_components$hpe$butto19 = components.hpe.button) == null || (_components$hpe$butto19 = _components$hpe$butto19[kind]) == null ? void 0 : _components$hpe$butto19[adjustedState].background
          },
          border: {
            width: '',
            color: (_components$hpe$butto20 = components.hpe.button) == null || (_components$hpe$butto20 = _components$hpe$butto20[kind]) == null ? void 0 : _components$hpe$butto20[adjustedState].borderColor
          },
          color: (_components$hpe$butto21 = components.hpe.button) == null || (_components$hpe$butto21 = _components$hpe$butto21[kind]) == null ? void 0 : _components$hpe$butto21[adjustedState].textColor,
          font: {
            weight: (_components$hpe$butto22 = components.hpe.button) == null || (_components$hpe$butto22 = _components$hpe$butto22[kind]) == null ? void 0 : _components$hpe$butto22[adjustedState].fontWeight
          }
        };
      }
    });
  });
  var buttonSizesTheme = {};
  componentSizes.forEach(function (buttonSize) {
    var _components$hpe$butto26, _components$hpe$butto27, _components$hpe$butto28, _components$hpe$butto29, _components$hpe$butto30;
    var kindStyles = {};
    buttonKinds.forEach(function (kind) {
      var _components$hpe$butto23, _components$hpe$butto24, _components$hpe$butto25;
      kindStyles[kind] = {
        border: {
          radius: (_components$hpe$butto23 = components.hpe.button) == null || (_components$hpe$butto23 = _components$hpe$butto23[kind]) == null || (_components$hpe$butto23 = _components$hpe$butto23[buttonSize]) == null ? void 0 : _components$hpe$butto23.borderRadius
        },
        pad: {
          vertical: (_components$hpe$butto24 = components.hpe.button) == null || (_components$hpe$butto24 = _components$hpe$butto24[kind]) == null || (_components$hpe$butto24 = _components$hpe$butto24[buttonSize]) == null ? void 0 : _components$hpe$butto24.paddingY,
          horizontal: (_components$hpe$butto25 = components.hpe.button) == null || (_components$hpe$butto25 = _components$hpe$butto25[kind]) == null || (_components$hpe$butto25 = _components$hpe$butto25[buttonSize]) == null ? void 0 : _components$hpe$butto25.paddingX
        }
      };
    });
    buttonSizesTheme[buttonSize] = _extends({
      border: {
        radius: (_components$hpe$butto26 = components.hpe.button) == null || (_components$hpe$butto26 = _components$hpe$butto26["default"]) == null || (_components$hpe$butto26 = _components$hpe$butto26[buttonSize]) == null ? void 0 : _components$hpe$butto26.borderRadius
      },
      pad: {
        vertical: (_components$hpe$butto27 = components.hpe.button) == null || (_components$hpe$butto27 = _components$hpe$butto27["default"]) == null || (_components$hpe$butto27 = _components$hpe$butto27[buttonSize]) == null ? void 0 : _components$hpe$butto27.paddingY,
        horizontal: (_components$hpe$butto28 = components.hpe.button) == null || (_components$hpe$butto28 = _components$hpe$butto28["default"]) == null || (_components$hpe$butto28 = _components$hpe$butto28[buttonSize]) == null ? void 0 : _components$hpe$butto28.paddingX
      },
      iconOnly: {
        pad: {
          vertical: (_components$hpe$butto29 = components.hpe.button) == null || (_components$hpe$butto29 = _components$hpe$butto29["default"]) == null || (_components$hpe$butto29 = _components$hpe$butto29[buttonSize]) == null ? void 0 : _components$hpe$butto29.iconOnly.paddingY,
          horizontal: (_components$hpe$butto30 = components.hpe.button) == null || (_components$hpe$butto30 = _components$hpe$butto30["default"]) == null || (_components$hpe$butto30 = _components$hpe$butto30[buttonSize]) == null ? void 0 : _components$hpe$butto30.iconOnly.paddingX
        }
      }
    }, kindStyles);
  });
  var focusBoxShadowParts = global.hpe.focusIndicator.boxShadow.trim().split(' ');
  return deepFreeze({
    defaultMode: 'light',
    global: _extends({
      backgrounds: backgrounds
    }, dimensions, {
      colors: colors,
      control: {
        border: {
          radius: components.hpe.formField["default"].medium.input.container.borderRadius,
          color: components.hpe.formField["default"].input.container.rest.borderColor
        },
        disabled: {
          opacity: 1
        }
      },
      input: {
        font: {
          height: 'inherit',
          weight: components.hpe.formField["default"].medium.value.fontWeight
        },
        padding: {
          horizontal: components.hpe.formField["default"].medium.input.container.paddingX,
          vertical: components.hpe.formField["default"].medium.input.container.paddingY
        },
        readOnly: {
          background: components.hpe.formField["default"].input.container.readOnly.rest.background,
          border: {
            color: components.hpe.formField["default"].input.container.readOnly.rest.borderColor
          }
        },
        extend: function extend(_ref3) {
          var theme = _ref3.theme;
          return "\n          color: " + getThemeColor(components.hpe.formField["default"].value.rest.textColor, theme) + ";\n          &::-webkit-input-placeholder {\n          font-weight: " + components.hpe.formField["default"].medium.placeholder.fontWeight + ";\n        }\n      \n        &::-moz-placeholder {\n          font-weight: " + components.hpe.formField["default"].medium.placeholder.fontWeight + ";\n        }\n      \n        &:-ms-input-placeholder {\n          font-weight: " + components.hpe.formField["default"].medium.placeholder.fontWeight + ";\n        }\n        ";
        }
      },
      font: {
        family: global.hpe.fontStack.primary,
        face: "\n          @font-face {\n            font-family: \"Metric\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n                 url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n          }\n          @font-face {\n            font-family: \"Metric\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n                 url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n            font-weight: 400;\n          }\n          @font-face {\n            font-family: \"Metric\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff2\") format('woff2'),\n                 url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff\") format('woff');\n            font-weight: 700;\n          }\n          @font-face {\n            font-family: \"Metric\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff2\") format('woff2'),\n                 url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff\") format('woff');\n            font-weight: 600;\n          }\n          @font-face {\n            font-family: \"Metric\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff2\") format('woff2'),\n                 url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff\") format('woff');\n            font-weight: 500;\n          }\n          @font-face {\n            font-family: \"Metric\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Light.woff2\") format('woff2'),\n                 url(\"https://www.hpe.com/content/dam/hpe/fonts/metric-hpe-web/MetricHPE-Web-Light.woff\") format('woff');\n            font-weight: 100;\n          }",
        size: large.hpe.text.medium.fontSize,
        height: large.hpe.text.medium.lineHeight
      },
      focus: {
        border: undefined,
        outline: {
          color: global.hpe.focusIndicator.outline.color,
          size: global.hpe.focusIndicator.outline.width,
          offset: global.hpe.focusIndicator.outlineOffset
        },
        shadow: {
          color: focusBoxShadowParts[focusBoxShadowParts.length - 1],
          size: focusBoxShadowParts[focusBoxShadowParts.length - 2]
        },
        twoColor: true
      },
      active: {
        background: 'background-active',
        color: 'active-text'
      },
      drop: {
        background: components.hpe.drop["default"].background,
        border: {
          radius: dimensions.edgeSize[components.hpe.drop["default"].borderRadius] || components.hpe.drop["default"].borderRadius
        },
        margin: components.hpe.drop["default"].margin,
        intelligentMargin: true,
        shadowSize: 'medium',
        /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
         * at a z-index of 101. This adjustment brings Drop in alignment with Layer
         * which needs an elevated z-index to sit atop the Global header. */
        zIndex: components.hpe.drop["default"].zIndex
      },
      elevation: {
        // Elevation values were derived from this Figma file.
        // https://www.figma.com/file/eZYR3dtWdb9U90QvJ7p3T9/HPE-Color-Styles?node-id=405%3A25
        // Naming in Figma file is strong/default/weak vs. Grommet t-shirt sizing.
        // As defined here, default is currently mapping to medium.
        light: {
          small: elevationlight ? elevationlight.hpe.elevation.small : light.hpe.shadow.small,
          medium: elevationlight ? elevationlight.hpe.elevation.medium : light.hpe.shadow.medium,
          large: elevationlight ? elevationlight.hpe.elevation.large : light.hpe.shadow.large
        },
        dark: {
          small: elevationdark ? elevationdark.hpe.elevation.small : dark.hpe.shadow.small,
          medium: elevationdark ? elevationdark.hpe.elevation.medium : dark.hpe.shadow.medium,
          large: elevationdark ? elevationdark.hpe.elevation.large : dark.hpe.shadow.large
        }
      },
      hover: {
        background: 'background-hover',
        color: 'text-default'
      },
      selected: {
        background: 'background-selected-primary-strong',
        color: 'text-onSelectedPrimaryStrong'
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
        collapse: Up,
        expand: Down,
        color: 'text'
      }
    },
    anchor: {
      color: components.hpe.anchor["default"].rest.textColor,
      textDecoration: components.hpe.anchor["default"].rest.textDecoration,
      fontWeight: components.hpe.anchor["default"].rest.fontWeight,
      gap: components.hpe.anchor["default"].medium.gapX,
      icon: {
        color: 'icon-primary'
      },
      hover: {
        textDecoration: components.hpe.anchor["default"].hover.textDecoration,
        extend: function extend(_ref4) {
          var theme = _ref4.theme;
          return "color: " + getThemeColor(components.hpe.anchor["default"].hover.textColor, theme) + ";";
        }
      },
      size: anchorSizeTheme
    },
    avatar: {
      size: {
        xsmall: (_components$hpe$eleme = components.hpe.element) == null ? void 0 : _components$hpe$eleme.xsmall.minHeight,
        small: (_components$hpe$eleme2 = components.hpe.element) == null ? void 0 : _components$hpe$eleme2.small.minHeight,
        // 24px
        medium: (_components$hpe$eleme3 = components.hpe.element) == null ? void 0 : _components$hpe$eleme3.medium.minHeight,
        // default 48px
        large: (_components$hpe$eleme4 = components.hpe.element) == null ? void 0 : _components$hpe$eleme4.large.minHeight,
        // 72px
        xlarge: (_components$hpe$eleme5 = components.hpe.element) == null ? void 0 : _components$hpe$eleme5.xlarge.minHeight,
        // 96px
        '2xl': baseSpacing * 5 + "px",
        '3xl': baseSpacing * 6 + "px",
        '4xl': baseSpacing * 7 + "px",
        '5xl': baseSpacing * 8 + "px"
      },
      text: {
        size: {
          xsmall: 'xsmall',
          small: 'small',
          medium: 'medium',
          large: 'large',
          xlarge: 'xlarge',
          '2xl': '3xl',
          '3xl': '4xl',
          '4xl': '5xl',
          '5xl': '6xl'
        }
      }
    },
    button: _extends({
      intelligentPad: false,
      color: components.hpe.button["default"].rest.textColor,
      gap: components.hpe.button["default"].medium.gapX,
      badge: {
        align: 'container',
        container: {
          background: 'background-neutral-xstrong'
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
      'cta-primary': _extends({}, buttonKindTheme.primary, {
        icon: /*#__PURE__*/React.createElement(Hpe, null),
        reverse: true,
        extend: ''
      }),
      'cta-alternate': _extends({}, buttonKindTheme.secondary, {
        icon: /*#__PURE__*/React.createElement(Hpe, {
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
          background: components.hpe.select["default"].option.selected.rest.background,
          border: {
            color: components.hpe.select["default"].option.selected.rest.borderColor
          },
          color: components.hpe.select["default"].option.selected.textColor,
          font: {
            weight: components.hpe.select["default"].option.selected.rest.fontWeight
          },
          extend: function extend(_ref5) {
            var theme = _ref5.theme;
            return "\n            position: relative;\n            &::before {\n              display: block;\n              position: absolute;\n              content: '';\n              width: " + components.hpe.select["default"].medium.option.marker.width + ";\n              border-top-left-radius: " + components.hpe.select["default"].medium.option.marker.borderTopLeftRadius + ";\n              border-bottom-left-radius: " + components.hpe.select["default"].medium.option.marker.borderBottomLeftRadius + ";\n              top: " + components.hpe.select["default"].medium.option.marker.top + ";\n              bottom: " + components.hpe.select["default"].medium.option.marker.bottom + ";\n              left: " + components.hpe.select["default"].medium.option.marker.left + ";\n              background: " + getThemeColor(components.hpe.select["default"].option.marker.rest.background, theme) + ";\n            }\n          ";
          }
        }
      },
      hover: _extends({
        'cta-primary': buttonStatesTheme.hover.primary,
        'cta-alternate': buttonStatesTheme.hover.secondary
      }, buttonStatesTheme.hover, {
        option: {
          background: components.hpe.select["default"].option.hover.background,
          border: {
            color: components.hpe.select["default"].option.hover.borderColor
          },
          color: components.hpe.select["default"].option.hover.textColor,
          extend: function extend(props) {
            return props['aria-selected'] && "\n           background: " + getThemeColor(components.hpe.select["default"].option.selected.hover.background, props.theme) + ";\n          color: " + getThemeColor(components.hpe.select["default"].option.selected.hover.textColor, props.theme) + "\n          ";
          }
        }
      }),
      size: _extends({}, buttonSizesTheme, {
        medium: _extends({}, buttonSizesTheme.medium, {
          option: {
            pad: {
              horizontal: components.hpe.select["default"].medium.option.paddingX,
              vertical: components.hpe.select["default"].medium.option.paddingY
            }
          }
        })
      }),
      extend: function extend(_ref6) {
        var _components$hpe$butto31, _components$hpe$butto32;
        var sizeProp = _ref6.sizeProp,
          hasIcon = _ref6.hasIcon,
          hasLabel = _ref6.hasLabel,
          kind = _ref6.kind,
          plain = _ref6.plain;
        var style = '';
        var iconOnly = hasIcon && !hasLabel;
        // kind and size specific icon-only padding
        if (!plain && iconOnly && (_components$hpe$butto31 = components.hpe.button[kind]) != null && (_components$hpe$butto31 = _components$hpe$butto31[sizeProp]) != null && (_components$hpe$butto31 = _components$hpe$butto31.iconOnly) != null && _components$hpe$butto31.paddingY && (_components$hpe$butto32 = components.hpe.button[kind]) != null && (_components$hpe$butto32 = _components$hpe$butto32[sizeProp]) != null && (_components$hpe$butto32 = _components$hpe$butto32.iconOnly) != null && _components$hpe$butto32.paddingX) style += "padding: " + components.hpe.button[kind][sizeProp].iconOnly.paddingY + " " + components.hpe.button[kind][sizeProp].iconOnly.paddingX;
        return style;
      }
    }),
    calendar: {
      day: {
        adjacent: {
          color: 'text-weak'
        },
        hover: {
          background: 'background-hover',
          color: 'text-strong'
        },
        selected: {
          background: 'background-selected-primary-strong',
          color: 'text-onSelectedPrimaryStrong',
          hover: {
            background: 'background-selected-primary-strong-hover'
          },
          font: {
            weight: global.hpe.fontWeight.medium
          }
        },
        inRange: {
          color: 'text-onSelectedPrimary',
          hover: {
            background: 'background-selected-primary-hover',
            color: 'text-onSelectedPrimary'
          },
          font: {
            weight: global.hpe.fontWeight.medium
          }
        },
        extend: ''
      },
      range: {
        background: 'background-selected-primary'
      },
      icons: {
        next: Next,
        previous: Previous
      },
      small: {
        fontSize: '13.6px',
        lineHeight: 1.375,
        daySize: '27.43px',
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
          size: 'medium',
          weight: global.hpe.fontWeight.normal,
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
          weight: global.hpe.fontWeight.normal,
          color: 'text-strong'
        }
      },
      large: {
        fontSize: '31.2px',
        lineHeight: 1.11,
        daySize: '109.71px',
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
          size: 'xlarge',
          weight: global.hpe.fontWeight.normal,
          color: 'text-strong'
        }
      }
    },
    card: {
      container: {
        background: 'background-front',
        elevation: 'none',
        extend: 'transition: box-shadow 0.3s ease-in-out;'
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
          elevation: 'medium'
        }
      }
    },
    checkBox: {
      hover: {
        border: {
          color: undefined,
          width: dimensions.borderSize[components.hpe.checkbox["default"].medium.control.borderWidth] || components.hpe.checkbox["default"].medium.control.borderWidth
        },
        // applies to container around control and label
        background: {
          color: undefined
        },
        extend: function extend(_ref7) {
          var theme = _ref7.theme,
            toggle = _ref7.toggle,
            checked = _ref7.checked;
          var borderColor;
          if (toggle) {
            borderColor = getThemeColor(components.hpe["switch"]["default"].control.track.hover.borderColor, theme);
          } else if (checked) {
            if (toggle) {
              borderColor = getThemeColor(components.hpe["switch"]["default"].control.track.selected.hover.borderColor, theme);
            } else {
              borderColor = getThemeColor(components.hpe.checkbox["default"].control.selected.hover.borderColor, theme);
            }
          }
          return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n            ", "\n          "])), checked ? "border-color: " + borderColor + ";" : '');
        }
      },
      color: components.hpe["switch"]["default"].control.handle.rest.background,
      // The stroke color for the CheckBox icon, the toggle handle background when checked, and the border when checked. Setting to handle background since this is the only place to control this.
      border: {
        color: components.hpe.checkbox["default"].control.rest.borderColor,
        width: dimensions.borderSize[components.hpe.checkbox["default"].medium.control.borderWidth] || components.hpe.checkbox["default"].medium.control.borderWidth
      },
      check: {
        radius: components.hpe.checkbox["default"].medium.control.borderRadius,
        thickness: '2px',
        // The stroke width of the checked icon.
        extend: function extend(_ref8) {
          var theme = _ref8.theme,
            checked = _ref8.checked,
            indeterminate = _ref8.indeterminate,
            disabled = _ref8.disabled;
          var background = getThemeColor(components.hpe.checkbox["default"].control.rest.background, theme);
          var hoverBackground = getThemeColor(components.hpe.checkbox["default"].control.hover.background, theme);
          var borderColor = getThemeColor(components.hpe.checkbox["default"].control.rest.borderColor, theme);
          if (checked || indeterminate) {
            background = getThemeColor(components.hpe.checkbox["default"].control.selected.rest.background, theme);
            borderColor = getThemeColor(components.hpe.checkbox["default"].control.selected.rest.borderColor, theme);
          }
          if (checked || indeterminate) {
            hoverBackground = getThemeColor(components.hpe.checkbox["default"].control.selected.hover.background, theme);
          }
          if (disabled) {
            background = getThemeColor(components.hpe.checkbox["default"].control.disabled.rest.background, theme);
            borderColor = getThemeColor(components.hpe.checkbox["default"].control.disabled.rest.borderColor, theme);
          }
          return "\n            background: " + background + ";\n            border-color: " + borderColor + ";\n            &:hover {\n              " + (!disabled ? "background: " + hoverBackground + ";" : '') + "\n            }\n            " + ((checked || indeterminate) && 'border: none;') + "\n          ";
        }
      },
      icon: {
        extend: function extend(_ref9) {
          var theme = _ref9.theme;
          return "stroke-width: 2px;\n        stroke: " + getThemeColor(components.hpe.checkbox["default"].control.selected.rest.iconColor, theme);
        }
      },
      gap: components.hpe.checkbox["default"].medium.gapX,
      label: {
        align: 'start'
      },
      pad: 'none',
      size: components.hpe.checkbox["default"].medium.control.width,
      toggle: {
        background: components.hpe["switch"]["default"].control.track.rest.background,
        color: components.hpe["switch"]["default"].control.handle.rest.background,
        size: components.hpe["switch"]["default"].medium.control.track.width,
        knob: {
          extend: function extend(_ref10) {
            var theme = _ref10.theme,
              checked = _ref10.checked,
              disabled = _ref10.disabled;
            var insetHandle = dimensions.borderSize[components.hpe["switch"]["default"].medium.control.handle.borderWidth] || dimensions.borderSize[components.hpe["switch"]["default"].medium.control.handle.borderWidth];
            return "\n          box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'][components.hpe["switch"]["default"].control.handle.rest.boxShadow] + ";\n          border: " + dimensions.borderSize[components.hpe["switch"]["default"].medium.control.handle.borderWidth] + " solid " + getThemeColor(disabled ? components.hpe["switch"]["default"].control.handle.disabled.rest.borderColor : components.hpe["switch"]["default"].control.handle.rest.borderColor, theme) + ";\n          width: " + components.hpe["switch"]["default"].medium.control.handle.width + ";\n          height: " + components.hpe["switch"]["default"].medium.control.handle.height + ";\n          top: " + insetHandle + ";\n          left: " + (!checked ? insetHandle : '25px') + ";\n          ";
          }
        },
        // applies to track around handle
        extend: function extend(_ref11) {
          var checked = _ref11.checked,
            theme = _ref11.theme,
            disabled = _ref11.disabled;
          var background;
          var hoverBackground = getThemeColor(components.hpe["switch"]["default"].control.track.hover.background, theme);
          var borderColor = getThemeColor(components.hpe["switch"]["default"].control.track.rest.borderColor, theme);
          if (checked) {
            background = getThemeColor(components.hpe["switch"]["default"].control.track.selected.rest.background, theme);
            hoverBackground = getThemeColor(components.hpe["switch"]["default"].control.track.selected.hover.background, theme);
          }
          if (disabled) {
            background = getThemeColor(components.hpe["switch"]["default"].control.track.disabled.rest.background, theme);
            borderColor = getThemeColor(components.hpe["switch"]["default"].control.handle.disabled.rest.borderColor, theme);
          }
          return "\n            border-color: " + borderColor + ";\n            background: " + background + ";\n            &:hover {\n              " + (!disabled ? "background: " + hoverBackground + ";" : '') + "\n            }\n        ";
        }
      },
      extend: function extend(_ref12) {
        var disabled = _ref12.disabled,
          theme = _ref12.theme;
        return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      font-weight: ", ";\n      width: auto;\n      border: ", " solid ", ";\n      & input:checked + span[class*=CheckBoxToggle] > span[class*=CheckBoxKnob] {\n        left: 25px;\n      }\n      ", "\n    };\n    "])), components.hpe.checkbox["default"].label.rest.fontWeight, components.hpe.formField["default"].medium.input.container.borderWidth, getThemeColor(components.hpe.formField["default"].input.group.item.rest.borderColor, theme),
        // override built in disabled opacity: 0.5 from grommet
        disabled && "opacity: 1; \n        color: " + getThemeColor(components.hpe.checkbox["default"].label.disabled.rest.textColor, theme) + ";");
      }
    },
    checkBoxGroup: {
      container: {
        cssGap: true,
        gap: 'small',
        margin: 'none'
      }
    },
    data: {
      button: {
        kind: 'toolbar'
      }
    },
    dateInput: {
      container: {
        round: components.hpe.formField["default"].medium.input.container.borderRadius
      },
      icon: {
        size: 'small'
      }
    },
    dataTable: {
      body: {
        extend: function extend(_ref13) {
          var theme = _ref13.theme;
          return "\n          /* Margin and padding allow room for focus on table body */\n          margin: " + theme.global.edgeSize.xxsmall + " 0px;\n          padding: 0px " + theme.global.edgeSize.xxsmall + ";\n        ";
        },
        selected: {
          background: (_components$hpe$dataC = components.hpe.dataCell["default"].selected) == null || (_components$hpe$dataC = _components$hpe$dataC.rest) == null ? void 0 : _components$hpe$dataC.background
        },
        row: {
          extend: "&:last-child td {\n              border-color: transparent;\n            }\n            &:last-child th {\n              border-color: transparent;\n            }"
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
        color: components.hpe.headerCell["default"].rest.textColor,
        extend: function extend(_ref14) {
          var column = _ref14.column,
            sort = _ref14.sort,
            sortable = _ref14.sortable,
            theme = _ref14.theme;
          return "\n            " + (sort && sort.property === column && "\n              background: " + theme.global.colors['background-active'][theme.dark ? 'dark' : 'light'] + "\n            ") + ";\n            " + (sortable && sort && sort.property !== column && "\n                svg {\n                  opacity: 0;\n                }\n                &:hover {\n                  svg {\n                    opacity: 1;\n                  }\n                }\n              ") + ";\n          ";
        },
        font: {
          weight: components.hpe.headerCell["default"].medium.fontWeight
        },
        gap: components.hpe.headerCell["default"].medium.gapX,
        hover: {
          background: {
            color: components.hpe.headerCell["default"].hover.background
          }
        },
        units: {
          color: components.hpe.headerCell["default"].units.rest.textColor
        }
      },
      icons: {
        ascending: function ascending() {
          return /*#__PURE__*/React.createElement(Descending, {
            size: "large"
          });
        },
        descending: function descending() {
          return /*#__PURE__*/React.createElement(Ascending, {
            size: "large"
          });
        },
        contract: function contract() {
          return /*#__PURE__*/React.createElement(Up, {
            height: "medium"
          });
        },
        expand: function expand() {
          return /*#__PURE__*/React.createElement(Down, {
            height: "medium"
          });
        },
        sortable: function sortable() {
          return /*#__PURE__*/React.createElement(Unsorted, {
            size: "large"
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
        weight: components.hpe.dataCell.primary.medium.fontWeight,
        color: components.hpe.dataCell.primary.rest.textColor
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
        color: components.hpe.formField["default"].input.container.rest.borderColor,
        side: 'all',
        style: 'solid',
        size: components.hpe.formField["default"].medium.input.container.borderWidth
      },
      button: {
        background: components.hpe.button.secondary.rest.background,
        border: {
          radius: components.hpe.button["default"].medium.borderRadius
        },
        pad: {
          vertical: components.hpe.button["default"].medium.paddingY,
          horizontal: components.hpe.button["default"].medium.paddingX
        },
        color: components.hpe.button.secondary.rest.textColor,
        font: {
          weight: components.hpe.button.secondary.rest.fontWeight
        },
        hover: {
          background: components.hpe.button.secondary.hover.background,
          color: components.hpe.button.secondary.hover.textColor
        }
      },
      dragOver: {
        background: 'background-hover',
        border: 'none'
      },
      hover: {
        border: {
          color: 'border'
        }
      },
      icons: {
        remove: Close
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
      extend: "border-radius: " + components.hpe.formField["default"].medium.input.container.borderRadius + ";"
    },
    formField: {
      extend: function extend(_ref15) {
        var theme = _ref15.theme;
        return "\n          input:disabled {\n            color: " + getThemeColor(components.hpe.formField["default"].value.disabled.rest.textColor, theme) + ";\n          }\n          [class*=\"ContentBox\"] {\n            label {\n              padding-block: " + components.hpe.formField["default"].medium.input.group.item.paddingY + ";\n              padding-inline: " + components.hpe.formField["default"].medium.input.group.item.paddingX + ";\n              &:hover {\n                background: " + getThemeColor(components.hpe.formField["default"].input.container.hover.background, theme) + ";\n              }\n            }\n            [role=\"group\"], [role=\"radiogroup\"] {\n              gap: 0;\n              padding-block: " + components.hpe.formField["default"].medium.input.group.container.paddingY + ";\n              padding-inline: " + components.hpe.formField["default"].medium.input.group.container.paddingX + ";\n              label {\n                border: " + (dimensions.borderSize[components.hpe.formField["default"].medium.input.group.item.borderWidth] || components.hpe.formField["default"].medium.input.group.item.borderWidth) + " solid " + getThemeColor(components.hpe.formField["default"].input.group.item.rest.borderColor, theme) + ";\n                padding-block: " + components.hpe.formField["default"].medium.input.group.item.paddingY + ";\n                padding-inline: " + components.hpe.formField["default"].medium.input.group.item.paddingX + ";\n                border-radius: " + dimensions.edgeSize[components.hpe.formField["default"].medium.input.group.item.borderRadius] + ";\n                &:hover {\n                  background: " + getThemeColor(components.hpe.formField["default"].input.group.item.hover.background, theme) + ";\n                }\n              }\n            }\n          }\n      ";
      },
      content: {
        margin: {
          vertical: 'xsmall'
        },
        pad: 'none'
      },
      border: {
        error: {
          color: components.hpe.formField["default"].input.container.error.rest.borderColor
        },
        color: components.hpe.formField["default"].input.container.rest.borderColor,
        side: 'all'
      },
      checkBox: {
        pad: {
          horizontal: components.hpe.formField["default"].medium.input.group.item.paddingX,
          vertical: components.hpe.formField["default"].medium.input.group.item.paddingY
        },
        container: {
          extend: function extend(_ref16) {
            var error = _ref16.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      checkBoxGroup: {
        container: {
          extend: function extend(_ref17) {
            var error = _ref17.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      radioButtonGroup: {
        container: {
          extend: function extend(_ref18) {
            var error = _ref18.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      thumbsRating: {
        container: {
          extend: function extend(_ref19) {
            var error = _ref19.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      starRating: {
        container: {
          extend: function extend(_ref20) {
            var error = _ref20.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      disabled: {
        background: components.hpe.formField["default"].input.group.container.disabled.rest.background,
        border: {
          color: components.hpe.formField["default"].input.container.disabled.rest.borderColor
        },
        label: {
          color: components.hpe.formField["default"].label.disabled.rest.textColor
        },
        help: {
          color: components.hpe.formField["default"].help.disabled.rest.textColor
        },
        info: {
          color: components.hpe.formField["default"].info.disabled.rest.textColor
        }
      },
      error: {
        background: {
          color: components.hpe.formField["default"].input.container.error.rest.background
        },
        container: {
          gap: 'xsmall'
        },
        icon: /*#__PURE__*/React.createElement(CircleAlert, {
          size: "small",
          color: light.hpe.color.icon.critical
        }),
        size: 'xsmall',
        color: components.hpe.formField["default"].error.rest.textColor,
        margin: {
          bottom: 'xsmall',
          top: 'none',
          horizontal: 'none'
        }
      },
      focus: {
        containerFocus: false,
        background: undefined,
        // Intentionally not carrying this style through to tokens to rely on global focus indicator
        border: {
          color: undefined // Intentionally not carrying this style through to tokens to rely on global focus indicator
        }
      },
      help: {
        size: 'xsmall',
        color: components.hpe.formField["default"].help.rest.color,
        margin: 'none'
      },
      info: {
        size: 'xsmall',
        color: components.hpe.formField["default"].info.rest.color,
        margin: {
          bottom: 'xsmall',
          top: 'none',
          horizontal: 'none'
        }
      },
      label: {
        size: 'xsmall',
        color: components.hpe.formField["default"].label.rest.textColor,
        margin: {
          bottom: 'none',
          top: 'xsmall',
          horizontal: 'none'
        },
        requiredIndicator: true,
        weight: components.hpe.formField["default"].medium.label.fontWeight
      },
      margin: {
        bottom: 'none'
      },
      round: components.hpe.formField["default"].medium.input.container.borderRadius,
      survey: {
        label: {
          margin: {
            bottom: 'none'
          },
          size: 'medium',
          weight: 500
        }
      }
    },
    heading: {
      color: 'text-heading',
      weight: large.hpe.heading.xlarge.fontWeight,
      level: {
        1: {
          font: {
            weight: large.hpe.heading.xlarge.fontWeight
          },
          small: {
            // this value is off because we didn't have the same typography system before
            // TO DO could hard code with v6 backwards compatibility flag
            size: large.hpe.heading.large.fontSize,
            height: large.hpe.heading.large.lineHeight
          },
          medium: {
            size: large.hpe.heading.xlarge.fontSize,
            height: large.hpe.heading.xlarge.lineHeight
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
          font: {
            weight: large.hpe.heading.large.fontWeight
          },
          small: {
            size: large.hpe.heading.medium.fontSize,
            height: large.hpe.heading.medium.lineHeight
          },
          medium: {
            size: large.hpe.heading.large.fontSize,
            height: large.hpe.heading.large.lineHeight
          },
          large: {
            size: large.hpe.heading.xlarge.fontSize,
            height: large.hpe.heading.xlarge.lineHeight
          },
          xlarge: {
            size: '48px',
            height: '48px'
          }
        },
        3: {
          font: {
            weight: large.hpe.heading.medium.fontWeight
          },
          small: {
            size: large.hpe.heading.small.fontSize,
            height: large.hpe.heading.small.lineHeight
          },
          medium: {
            size: large.hpe.heading.medium.fontSize,
            height: large.hpe.heading.medium.lineHeight
          },
          large: {
            size: large.hpe.heading.large.fontSize,
            height: large.hpe.heading.large.lineHeight
          },
          xlarge: {
            size: large.hpe.heading.xlarge.fontSize,
            height: large.hpe.heading.xlarge.lineHeight
          }
        },
        4: {
          font: {
            weight: large.hpe.heading.small.fontWeight
          },
          small: {
            size: large.hpe.heading.xsmall.fontSize,
            height: large.hpe.heading.xsmall.lineHeight
          },
          medium: {
            size: large.hpe.heading.small.fontSize,
            height: large.hpe.heading.small.lineHeight
          },
          large: {
            size: large.hpe.heading.medium.fontSize,
            height: large.hpe.heading.medium.lineHeight
          },
          xlarge: {
            size: large.hpe.heading.large.fontSize,
            height: large.hpe.heading.large.lineHeight
          }
        },
        5: {
          font: {
            weight: large.hpe.heading.xsmall.fontWeight
          },
          small: {
            size: large.hpe.heading.xxsmall.fontSize,
            height: large.hpe.heading.xxsmall.lineHeight
          },
          medium: {
            size: large.hpe.heading.xsmall.fontSize,
            height: large.hpe.heading.xsmall.lineHeight
          },
          large: {
            size: large.hpe.heading.small.fontSize,
            height: large.hpe.heading.small.lineHeight
          },
          xlarge: {
            size: large.hpe.heading.medium.fontSize,
            height: large.hpe.heading.medium.lineHeight
          }
        },
        6: {
          font: {
            weight: large.hpe.heading.xxsmall.fontWeight
          },
          small: {
            size: large.hpe.heading.xxsmall.fontSize,
            height: large.hpe.heading.xxsmall.lineHeight
          },
          medium: {
            size: large.hpe.heading.xxsmall.fontSize,
            height: large.hpe.heading.xxsmall.lineHeight
          },
          large: {
            size: large.hpe.heading.small.fontSize,
            height: large.hpe.heading.small.lineHeight
          },
          xlarge: {
            size: large.hpe.heading.medium.fontSize,
            height: large.hpe.heading.medium.lineHeight
          }
        }
      },
      extend: function extend() {
        return '';
      }
    },
    icon: {
      disableScaleDown: true,
      matchSize: true,
      size: {
        xsmall: large.hpe.icon.xsmall.size,
        small: large.hpe.icon.small.size,
        medium: large.hpe.icon.medium.size,
        large: large.hpe.icon.large.size,
        xlarge: large.hpe.icon.xlarge.size,
        xxlarge: large.hpe.icon.xxlarge.size
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
        background: 'background-screenOverlay'
      },
      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment allows for Layer modals and side-drawers
       * to sit atop the Global header. */
      zIndex: '110'
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
        extend: function extend(_ref21) {
          var theme = _ref21.theme;
          return "\n          svg {\n            fill: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n            stroke: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n          }\n        ";
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
      container: {
        pad: {
          vertical: components.hpe.menu["default"].medium.group.container.paddingY,
          horizontal: components.hpe.menu["default"].medium.group.container.paddingX
        },
        gap: components.hpe.menu["default"].medium.group.container.gapY
      },
      group: {
        drop: {},
        container: {
          pad: {
            horizontal: components.hpe.menu["default"].medium.group.container.paddingX,
            vertical: components.hpe.menu["default"].medium.group.container.paddingY
          },
          gap: components.hpe.menu["default"].medium.group.container.gapY
        },
        separator: {
          color: components.hpe.menu["default"].group.separator.background,
          size: components.hpe.menu["default"].medium.group.separator.height,
          pad: 'none'
        }
      },
      icons: {
        color: components.hpe.menu["default"].item.rest.iconColor,
        down: Down
      },
      item: {
        pad: {
          horizontal: components.hpe.menu["default"].medium.item.paddingX,
          vertical: components.hpe.menu["default"].medium.item.paddingY
        }
      }
    },
    nameValuePair: {
      name: {
        color: 'text-strong',
        weight: global.hpe.fontWeight.medium
      }
    },
    notification: {
      close: {
        icon: Close
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
        // any text props
        color: 'text-strong',
        weight: global.hpe.fontWeight.medium
      },
      critical: {
        background: 'background-critical',
        color: 'icon-critical',
        message: {
          color: 'text-onCritical'
        },
        title: {
          color: 'text-onCritical-strong'
        },
        global: {
          background: 'background-critical',
          message: {
            color: 'text-onCritical'
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
        color: 'icon-warning',
        message: {
          color: 'text-onWarning'
        },
        title: {
          color: 'text-onWarning-strong'
        },
        global: {
          background: 'background-warning',
          message: {
            color: 'text-onWarning'
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
        color: 'icon-ok',
        message: {
          color: 'text-onOk'
        },
        title: {
          color: 'text-onOk-strong'
        },
        global: {
          background: 'background-ok',
          message: {
            color: 'text-onOk'
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
        color: 'icon-unknown',
        message: {
          color: 'text-onUnknown'
        },
        title: {
          color: 'text-onUnknown-strong'
        },
        global: {
          background: 'background-unknown',
          message: {
            color: 'text-onUnknown'
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
        color: 'icon-info',
        message: {
          color: 'text-onInfo'
        },
        title: {
          color: 'text-onInfo-strong'
        },
        global: {
          background: 'background-info',
          message: {
            color: 'text-onInfo'
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
          color: 'text-onUnknown'
        },
        title: {
          color: 'text-onUnknown-strong'
        },
        global: {
          background: 'background-ok',
          message: {
            color: 'text-onUnknown'
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
        color: components.hpe.button["default"].rest.textColor,
        border: {
          radius: components.hpe.button["default"].medium.borderRadius
        },
        font: {
          weight: components.hpe.button["default"].rest.fontWeight
        },
        active: {
          background: components.hpe.button["default"].selected.rest.background,
          border: {
            radius: components.hpe.button["default"].medium.borderRadius
          },
          color: components.hpe.button["default"].selected.rest.textColor,
          font: {
            weight: components.hpe.button["default"].selected.rest.fontWeight
          }
        },
        hover: {
          background: components.hpe.button["default"].hover.background,
          border: {
            radius: components.hpe.button["default"].medium.borderRadius
          },
          color: components.hpe.button["default"].hover.textColor,
          font: {
            weight: components.hpe.button["default"].hover.fontWeight
          }
        },
        disabled: {
          background: components.hpe.button["default"].disabled.rest.background,
          border: {
            radius: components.hpe.button["default"].medium.borderRadius
          },
          color: components.hpe.button["default"].disabled.rest.textColor,
          font: {
            weight: components.hpe.button["default"].disabled.rest.fontWeight
          }
        },
        size: {
          small: {
            border: {
              radius: components.hpe.button["default"].small.borderRadius,
              width: dimensions.borderSize[components.hpe.button["default"].small.borderWidth] || components.hpe.button["default"].small.borderWidth
            },
            pad: {
              vertical: '4px',
              horizontal: '4px'
            },
            font: {
              size: (_components$hpe$eleme6 = components.hpe.element) == null ? void 0 : _components$hpe$eleme6.small.fontSize,
              height: (_components$hpe$eleme7 = components.hpe.element) == null ? void 0 : _components$hpe$eleme7.small.lineHeight
            },
            height: (_components$hpe$eleme8 = components.hpe.element) == null ? void 0 : _components$hpe$eleme8.small.minHeight,
            width: (_components$hpe$eleme9 = components.hpe.element) == null ? void 0 : _components$hpe$eleme9.small.minHeight
          },
          medium: {
            border: {
              radius: components.hpe.button["default"].medium.borderRadius,
              width: dimensions.borderSize[components.hpe.button["default"].medium.borderWidth] || components.hpe.button["default"].medium.borderWidth
            },
            pad: {
              vertical: '4px',
              horizontal: '4px'
            },
            font: {
              size: (_components$hpe$eleme10 = components.hpe.element) == null ? void 0 : _components$hpe$eleme10.medium.fontSize,
              height: (_components$hpe$eleme11 = components.hpe.element) == null ? void 0 : _components$hpe$eleme11.medium.lineHeight
            },
            height: (_components$hpe$eleme12 = components.hpe.element) == null ? void 0 : _components$hpe$eleme12.medium.minHeight,
            width: (_components$hpe$eleme13 = components.hpe.element) == null ? void 0 : _components$hpe$eleme13.medium.minHeight
          },
          large: {
            border: {
              radius: components.hpe.button["default"].large.borderRadius,
              width: dimensions.borderSize[components.hpe.button["default"].large.borderWidth] || components.hpe.button["default"].large.borderWidth
            },
            pad: {
              vertical: '4px',
              horizontal: '4px'
            },
            font: {
              size: (_components$hpe$eleme14 = components.hpe.element) == null ? void 0 : _components$hpe$eleme14.large.fontSize,
              height: (_components$hpe$eleme15 = components.hpe.element) == null ? void 0 : _components$hpe$eleme15.large.lineHeight
            },
            height: (_components$hpe$eleme16 = components.hpe.element) == null ? void 0 : _components$hpe$eleme16.large.minHeight,
            width: (_components$hpe$eleme17 = components.hpe.element) == null ? void 0 : _components$hpe$eleme17.large.minHeight
          }
        }
      }
    },
    paragraph: _extends({}, paragraphTheme),
    radioButton: {
      border: {
        color: components.hpe.radioButton["default"].control.rest.borderColor,
        width: components.hpe.radioButton["default"].medium.control.borderWidth
      },
      check: {
        background: {
          color: components.hpe.radioButton["default"].control.selected.rest.background
        }
      },
      color: components.hpe.radioButton["default"].control.selected.rest.borderColor,
      container: {
        extend: function extend(_ref22) {
          var theme = _ref22.theme;
          return "\n          width: auto;\n          &:has(input[checked]) {\n            & div:has(> svg[aria-hidden=\"true\"]) {\n              background: " + getThemeColor(components.hpe.radioButton["default"].control.selected.rest.background, theme) + ";\n              border-color: " + getThemeColor(components.hpe.radioButton["default"].control.selected.rest.borderColor, theme) + ";\n            }\n          }\n          &:has(input[checked]):hover {\n              & div:has(> svg[aria-hidden=\"true\"]) {\n                background: " + getThemeColor(components.hpe.radioButton["default"].control.selected.hover.background, theme) + ";\n                border-color: " + getThemeColor(components.hpe.radioButton["default"].control.selected.hover.borderColor, theme) + ";\n              }\n          }\n          ";
        }
      },
      gap: components.hpe.radioButton["default"].medium.gapX,
      hover: {
        background: {
          color: 'transparent'
        },
        border: {
          color: components.hpe.radioButton["default"].control.hover.borderColor
        }
      },
      size: components.hpe.radioButton["default"].medium.control.height,
      font: {
        weight: components.hpe.radioButton["default"].label.rest.fontWeight
      },
      icons: {
        circle: function circle() {
          return /*#__PURE__*/React.createElement(Blank, {
            color: components.hpe.radioButton["default"].control.selected.rest.iconColor
          }, /*#__PURE__*/React.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "8"
          }));
        }
      }
    },
    radioButtonGroup: {
      container: {
        cssGap: true,
        gap: 'small',
        margin: 'none'
      }
    },
    rangeInput: {
      thumb: {
        color: 'background-primary-strong'
      },
      track: {
        lower: {
          color: 'background-primary-strong'
        },
        upper: {
          color: primitives.hpe.base.color['grey-500']
        },
        extend: function extend() {
          return "border-radius: " + large.hpe.radius.full + ";";
        }
      }
    },
    select: {
      clear: {
        container: {
          background: undefined,
          pad: {
            horizontal: '12px',
            vertical: '6px'
          },
          margin: {
            horizontal: components.hpe.select["default"].medium.drop.paddingX
          },
          hover: {
            background: 'background-hover'
          },
          round: 'xsmall'
        },
        text: {
          color: components.hpe.button["default"].rest.textColor,
          weight: components.hpe.button["default"].rest.fontWeight
        }
      },
      control: {
        extend: function extend(_ref23) {
          var disabled = _ref23.disabled,
            theme = _ref23.theme;
          return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n          ", "\n\n          &[class*=\"SelectMultiple\"] [role=\"listbox\"] {\n            padding-block: ", ";\n            padding-inline: ", ";\n            & [role='option'] {\n              border-radius: ", ";\n              &:hover {\n                background: ", ";\n              }\n            }\n          }\n        "])), disabled && "\n          opacity: 0.3;\n          input {\n            cursor: default;\n          }", components.hpe.select["default"].medium.drop.paddingY, components.hpe.select["default"].medium.drop.paddingX, dimensions.edgeSize[components.hpe.select["default"].medium.option.borderRadius] || components.hpe.select["default"].medium.option.borderRadius, getThemeColor(components.hpe.select["default"].option.hover.backgroud, theme));
        }
      },
      emptySearchMessage: {
        container: {
          pad: option.pad
        }
      },
      icons: {
        color: 'icon',
        down: Down,
        margin: {
          left: 'small',
          // setting right margin to 12px because on small
          // screens, Select responsive padding sizes down
          // which brings the icon too tight with edge of
          // control.
          right: '12px'
        },
        up: Up
      },
      options: undefined,
      listbox: {
        // only apply paddingY to paddingTop because gap caused by Infinite Scroll
        // adds an addition 6px on the bottom
        extend: function extend() {
          return "\n          padding-top: " + components.hpe.select["default"].medium.drop.paddingY + ";\n          padding-inline: " + components.hpe.select["default"].medium.drop.paddingX + ";\n          display: flex;\n          flex-direction: column;\n          gap: " + components.hpe.select["default"].medium.drop.gapY + ";\n          [role=\"option\"] {\n            border-radius: " + components.hpe.select["default"].medium.option.borderRadius + ";\n          }\n        ";
        }
      }
    },
    selectMultiple: {
      listbox: {
        extend: function extend() {
          return "\n          padding-block: " + components.hpe.select["default"].medium.drop.paddingY + ";\n          padding-inline: " + components.hpe.select["default"].medium.drop.paddingX + ";\n          display: flex;\n          flex-direction: column;\n          [role=\"option\"] {\n              border-radius: " + (dimensions.edgeSize[components.hpe.select["default"].medium.option.borderRadius] || components.hpe.select["default"].medium.option.borderRadius) + ";\n            }\n          }\n        ";
        }
      }
    },
    spinner: {
      container: {
        pad: 'none',
        color: 'foreground-primary',
        border: [{
          color: 'transparent',
          side: 'all',
          size: 'medium'
        }, {
          color: 'transparent',
          side: 'right',
          size: 'medium'
        }, {
          color: 'transparent',
          side: 'top',
          size: 'medium'
        }, {
          color: 'transparent',
          side: 'left',
          size: 'medium'
        }]
      },
      size: {
        xsmall: (_components$hpe$eleme18 = components.hpe.element) == null ? void 0 : _components$hpe$eleme18.xsmall.minHeight,
        small: (_components$hpe$eleme19 = components.hpe.element) == null ? void 0 : _components$hpe$eleme19.small.minHeight,
        medium: (_components$hpe$eleme20 = components.hpe.element) == null ? void 0 : _components$hpe$eleme20.medium.minHeight,
        large: (_components$hpe$eleme21 = components.hpe.element) == null ? void 0 : _components$hpe$eleme21.large.minHeight,
        xlarge: (_components$hpe$eleme22 = components.hpe.element) == null ? void 0 : _components$hpe$eleme22.xlarge.minHeight
      }
    },
    starRating: {
      color: 'background-selected-primary-strong'
    },
    tab: {
      color: 'text',
      active: {
        background: 'background-selected-primary-strong',
        color: 'text-onSelectedPrimaryStrong',
        weight: 500
      },
      hover: {
        background: 'background-hover',
        color: 'text'
      },
      border: {
        side: 'all',
        color: 'transparent',
        size: dimensions[(_components$hpe$eleme23 = components.hpe.element) == null ? void 0 : _components$hpe$eleme23.medium.borderWidth] || ((_components$hpe$eleme24 = components.hpe.element) == null ? void 0 : _components$hpe$eleme24.medium.borderWidth),
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
        bottom: (_components$hpe$eleme25 = components.hpe.element) == null ? void 0 : _components$hpe$eleme25.medium.paddingY,
        top: (_components$hpe$eleme26 = components.hpe.element) == null ? void 0 : _components$hpe$eleme26.medium.paddingY,
        horizontal: (_components$hpe$eleme27 = components.hpe.element) == null || (_components$hpe$eleme27 = _components$hpe$eleme27.medium) == null || (_components$hpe$eleme27 = _components$hpe$eleme27.paddingX) == null ? void 0 : _components$hpe$eleme27.wide
      },
      margin: {
        vertical: 'none',
        horizontal: 'none'
      },
      extend: function extend(_ref24) {
        var theme = _ref24.theme;
        return "border-radius: " + theme.global.edgeSize.xsmall + ";";
      }
    },
    tabs: {
      gap: 'xsmall',
      header: {
        border: undefined,
        extend: function extend(_ref25) {
          var theme = _ref25.theme;
          return "\n          border-radius: " + theme.global.edgeSize.xsmall + "; \n          & button[aria-selected=\"true\"]:hover > div {\n            background: " + getThemeColor('background-selected-primary-strong-hover', theme) + ";\n            color: " + getThemeColor('text-onSelectedPrimaryStrong', theme) + ";\n          }\n        ";
        }
      },
      step: {
        xsmall: 1,
        xlarge: 3
      }
    },
    table: {
      header: {
        extend: "\n          > div { \n            height: 100%;\n            justify-content: center;\n          }\n          // align onSelect checkbox to center of header cell\n          label { \n            justify-content: center;\n          }\n        "
      },
      body: {
        pad: {
          top: components.hpe.dataCell["default"].medium.paddingTop,
          bottom: components.hpe.dataCell["default"].medium.paddingBottom,
          horizontal: components.hpe.dataCell["default"].medium.paddingX
        },
        border: {
          side: 'bottom',
          color: components.hpe.dataCell["default"].rest.borderColor
        },
        extend: function extend(_ref26) {
          var theme = _ref26.theme;
          return "\n            &:hover {\n              button {\n                background: " + theme.global.colors['background-hover'][theme.dark ? 'dark' : 'light'] + ";\n              }\n            }\n          ";
        }
      },
      row: {
        hover: {
          background: 'background-hover'
        }
      },
      footer: {
        extend: "\n          font-weight: " + components.hpe.footerCell["default"].fontWeight + ";\n        "
      }
    },
    tag: {
      border: {
        color: 'border-weak'
      },
      icons: {
        remove: Close
      },
      pad: {
        horizontal: (_components$hpe$eleme28 = components.hpe.element) == null || (_components$hpe$eleme28 = _components$hpe$eleme28.medium) == null || (_components$hpe$eleme28 = _components$hpe$eleme28.paddingX) == null ? void 0 : _components$hpe$eleme28["default"],
        vertical: (_components$hpe$eleme29 = components.hpe.element) == null ? void 0 : _components$hpe$eleme29.medium.paddingY
      },
      remove: {
        kind: 'default'
      },
      value: {
        weight: global.hpe.fontWeight.medium
      },
      round: 'xsmall',
      size: {
        xsmall: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme30 = components.hpe.element) == null ? void 0 : _components$hpe$eleme30.small.paddingY,
            horizontal: (_components$hpe$eleme31 = components.hpe.element) == null || (_components$hpe$eleme31 = _components$hpe$eleme31.small) == null || (_components$hpe$eleme31 = _components$hpe$eleme31.paddingX) == null ? void 0 : _components$hpe$eleme31["default"]
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
            vertical: (_components$hpe$eleme32 = components.hpe.element) == null ? void 0 : _components$hpe$eleme32.small.paddingY,
            horizontal: (_components$hpe$eleme33 = components.hpe.element) == null || (_components$hpe$eleme33 = _components$hpe$eleme33.small) == null || (_components$hpe$eleme33 = _components$hpe$eleme33.paddingX) == null ? void 0 : _components$hpe$eleme33["default"]
          },
          remove: {
            size: 'xsmall',
            margin: {
              right: '2px'
            }
          }
        },
        medium: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme34 = components.hpe.element) == null ? void 0 : _components$hpe$eleme34.medium.paddingY,
            horizontal: (_components$hpe$eleme35 = components.hpe.element) == null || (_components$hpe$eleme35 = _components$hpe$eleme35.medium) == null || (_components$hpe$eleme35 = _components$hpe$eleme35.paddingX) == null ? void 0 : _components$hpe$eleme35["default"]
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
            vertical: (_components$hpe$eleme36 = components.hpe.element) == null ? void 0 : _components$hpe$eleme36.large.paddingY,
            horizontal: (_components$hpe$eleme37 = components.hpe.element) == null || (_components$hpe$eleme37 = _components$hpe$eleme37.large) == null || (_components$hpe$eleme37 = _components$hpe$eleme37.paddingX) == null ? void 0 : _components$hpe$eleme37["default"]
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
            vertical: (_components$hpe$eleme38 = components.hpe.element) == null ? void 0 : _components$hpe$eleme38.xlarge.paddingY,
            horizontal: (_components$hpe$eleme39 = components.hpe.element) == null || (_components$hpe$eleme39 = _components$hpe$eleme39.xlarge) == null || (_components$hpe$eleme39 = _components$hpe$eleme39.paddingX) == null ? void 0 : _components$hpe$eleme39["default"]
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
    text: _extends({}, textTheme),
    textInput: {
      container: {
        extend: function extend(_ref27) {
          var theme = _ref27.theme;
          return "\n          svg {\n            fill: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n            stroke: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n          }\n        ";
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
        round: components.hpe.drop["default"].borderRadius
      }
    },
    thumbsRating: {
      like: {
        color: 'background-selected-primary-strong'
      },
      dislike: {
        color: 'background-selected-primary-strong'
      }
    },
    toggleGroup: {
      button: {
        kind: 'toolbar'
      },
      container: {
        border: false,
        extend: function extend(_ref28) {
          var theme = _ref28.theme;
          return "\n        gap: " + (dimensions.edgeSize[large.hpe.spacing['5xsmall']] || large.hpe.spacing['5xsmall']) + ";\n        &:hover {\n          background: " + getThemeColor('background-hover', theme) + ";\n        }";
        }
      },
      divider: false
    },
    // Theme-Designer only parameters
    name: 'HPE 1',
    rounding: 4,
    scale: 1.1,
    spacing: 24
  });
};
export var hpe = buildTheme({
  primitives: localPrimitives,
  light: localLight,
  dark: localDark,
  small: localSmall,
  large: localDimension,
  global: localGlobal,
  components: localComponents
}, {
  // For grommet-theme-hpe v6.0.0, maintain backwards compatibility
  // with old t-shirt sizes
  'v6-backwards-compatibility': true
});