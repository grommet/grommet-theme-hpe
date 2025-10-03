var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
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
var headingLevelToSize = {
  1: 'xlarge',
  2: 'large',
  3: 'medium',
  4: 'small',
  5: 'xsmall',
  6: 'xxsmall'
};
var breakpointStyle = function breakpointStyle(global, content, responsive) {
  var breakpoint = global.hpe.breakpoint.small;
  var st = responsive === 'container' ? css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n          @container ", " {\n            ", "\n          }\n        "])), breakpoint && "(max-width: " + breakpoint + ")", content) : css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n          @media only screen ", " {\n            ", "\n          }\n        "])), breakpoint && "and (max-width: " + breakpoint + ")", content);
  return st.join('');
};
var getThemeColor = function getThemeColor(color, theme) {
  var _theme$global$colors$;
  return typeof theme.global.colors[color] === 'string' ? theme.global.colors[color] : ((_theme$global$colors$ = theme.global.colors[color]) == null ? void 0 : _theme$global$colors$[theme.dark ? 'dark' : 'light']) || color;
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
  var _components$hpe$eleme, _components$hpe$eleme2, _components$hpe$eleme3, _components$hpe$eleme4, _components$hpe$eleme5, _components$hpe$dataC, _components$hpe$eleme6, _components$hpe$eleme7, _components$hpe$eleme8, _components$hpe$eleme9, _components$hpe$eleme0, _components$hpe$eleme1, _components$hpe$eleme10, _components$hpe$eleme11, _components$hpe$eleme12, _components$hpe$eleme13, _components$hpe$eleme14, _components$hpe$eleme15, _components$hpe$eleme16, _components$hpe$eleme17, _components$hpe$eleme18, _components$hpe$eleme19, _components$hpe$eleme20, _components$hpe$eleme21, _components$hpe$eleme22, _components$hpe$eleme23, _components$hpe$eleme24, _components$hpe$eleme25, _components$hpe$eleme26, _components$hpe$eleme27, _components$hpe$eleme28, _components$hpe$eleme29, _components$hpe$eleme30, _components$hpe$eleme31, _components$hpe$eleme32, _components$hpe$eleme33, _components$hpe$eleme34, _components$hpe$eleme35;
  var primitives = tokens.primitives,
    light = tokens.light,
    dark = tokens.dark,
    small = tokens.small,
    large = tokens.large,
    global = tokens.global,
    components = tokens.components;
  var size = function size(breakpoint) {
    return {
      '5xsmall': breakpoint.hpe.container['5xsmall'],
      '4xsmall': breakpoint.hpe.container['4xsmall'],
      '3xsmall': breakpoint.hpe.container['3xsmall'],
      xxsmall: breakpoint.hpe.container.xxsmall,
      xsmall: breakpoint.hpe.container.xsmall,
      small: breakpoint.hpe.container.small,
      medium: breakpoint.hpe.container.medium,
      large: breakpoint.hpe.container.large,
      xlarge: breakpoint.hpe.container.xlarge,
      xxlarge: breakpoint.hpe.container.xxlarge,
      '3xlarge': breakpoint.hpe.container['3xlarge'],
      full: '100%'
    };
  };
  var dimensions = _extends({}, flags['v6-backwards-compatibility'] ? globalSizes : {
    borderSize: {
      xsmall: large.hpe.borderWidth.xsmall,
      small: large.hpe.borderWidth.small,
      medium: large.hpe.borderWidth.medium,
      "default": large.hpe.borderWidth["default"],
      large: large.hpe.borderWidth.large
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
      full: large.hpe.radius.full,
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
          large: small.hpe.borderWidth.large
        },
        edgeSize: {
          none: small.hpe.spacing.none,
          hair: small.hpe.spacing.hair,
          '5xsmall': small.hpe.spacing['5xsmall'],
          '4xsmall': small.hpe.spacing['4xsmall'],
          '3xsmall': small.hpe.spacing['3xsmall'],
          xxsmall: small.hpe.spacing.xxsmall,
          xsmall: small.hpe.spacing.xsmall,
          small: small.hpe.spacing.small,
          medium: small.hpe.spacing.medium,
          large: small.hpe.spacing.large,
          xlarge: small.hpe.spacing.xlarge,
          xxlarge: small.hpe.spacing.xxlarge,
          '3xlarge': small.hpe.spacing['3xlarge'],
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
          full: small.hpe.radius.full,
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
          large: small.hpe.borderWidth.large
        },
        edgeSize: {
          none: small.hpe.spacing.none,
          hair: small.hpe.spacing.hair,
          '5xsmall': small.hpe.spacing['5xsmall'],
          '4xsmall': small.hpe.spacing['4xsmall'],
          '3xsmall': small.hpe.spacing['3xsmall'],
          xxsmall: small.hpe.spacing.xxsmall,
          xsmall: small.hpe.spacing.xsmall,
          small: small.hpe.spacing.small,
          medium: small.hpe.spacing.medium,
          large: small.hpe.spacing.large,
          xlarge: small.hpe.spacing.xlarge,
          xxlarge: small.hpe.spacing.xxlarge,
          '3xlarge': small.hpe.spacing['3xlarge'],
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
          full: small.hpe.radius.full,
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
    var _large$hpe$text, _large$hpe$text6, _large$hpe$text7, _large$hpe$text8, _large$hpe$text9, _large$hpe$text0, _large$hpe$text1;
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
      height: ((_large$hpe$text0 = large.hpe.text) == null || (_large$hpe$text0 = _large$hpe$text0[textSize]) == null ? void 0 : _large$hpe$text0.lineHeight) || fallback.height
    };
    fontWeights[themeSize] = ((_large$hpe$text1 = large.hpe.text) == null || (_large$hpe$text1 = _large$hpe$text1[textSize]) == null ? void 0 : _large$hpe$text1.fontWeight) || fallback.weight;
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
        var _components$hpe$butto7, _components$hpe$butto8, _components$hpe$butto9, _components$hpe$butto0, _components$hpe$butto1, _components$hpe$butto10, _components$hpe$butto11, _components$hpe$butto12;
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
            weight: (_components$hpe$butto0 = components.hpe.button) == null || (_components$hpe$butto0 = _components$hpe$butto0[kind]) == null ? void 0 : _components$hpe$butto0[adjustedState].rest.fontWeight
          }
        };
        if (!('active' in buttonStatesTheme.hover)) buttonStatesTheme.hover.active = {};
        buttonStatesTheme.hover[state][kind] = {
          background: {
            color: (_components$hpe$butto1 = components.hpe.button) == null || (_components$hpe$butto1 = _components$hpe$butto1[kind]) == null || (_components$hpe$butto1 = _components$hpe$butto1[adjustedState]) == null || (_components$hpe$butto1 = _components$hpe$butto1.hover) == null ? void 0 : _components$hpe$butto1.background
          },
          border: {
            color: (_components$hpe$butto10 = components.hpe.button) == null || (_components$hpe$butto10 = _components$hpe$butto10[kind]) == null || (_components$hpe$butto10 = _components$hpe$butto10[adjustedState]) == null || (_components$hpe$butto10 = _components$hpe$butto10.hover) == null ? void 0 : _components$hpe$butto10.borderColor
          },
          color: (_components$hpe$butto11 = components.hpe.button) == null || (_components$hpe$butto11 = _components$hpe$butto11[kind]) == null || (_components$hpe$butto11 = _components$hpe$butto11[adjustedState]) == null || (_components$hpe$butto11 = _components$hpe$butto11.hover) == null ? void 0 : _components$hpe$butto11.textColor,
          font: {
            weight: (_components$hpe$butto12 = components.hpe.button) == null || (_components$hpe$butto12 = _components$hpe$butto12[kind]) == null || (_components$hpe$butto12 = _components$hpe$butto12[adjustedState]) == null || (_components$hpe$butto12 = _components$hpe$butto12.hover) == null ? void 0 : _components$hpe$butto12.fontWeight
          }
        };
      } else if (state === 'disabled') {
        var _components$hpe$butto13, _components$hpe$butto14, _components$hpe$butto15, _components$hpe$butto16;
        buttonStatesTheme[state][kind] = {
          background: {
            color: (_components$hpe$butto13 = components.hpe.button) == null || (_components$hpe$butto13 = _components$hpe$butto13[kind]) == null ? void 0 : _components$hpe$butto13[adjustedState].rest.background
          },
          border: {
            width: '',
            color: (_components$hpe$butto14 = components.hpe.button) == null || (_components$hpe$butto14 = _components$hpe$butto14[kind]) == null ? void 0 : _components$hpe$butto14[adjustedState].rest.borderColor
          },
          color: (_components$hpe$butto15 = components.hpe.button) == null || (_components$hpe$butto15 = _components$hpe$butto15[kind]) == null ? void 0 : _components$hpe$butto15[adjustedState].rest.textColor,
          font: {
            weight: (_components$hpe$butto16 = components.hpe.button) == null || (_components$hpe$butto16 = _components$hpe$butto16[kind]) == null ? void 0 : _components$hpe$butto16[adjustedState].rest.fontWeight
          }
        };
      } else {
        var _components$hpe$butto17, _components$hpe$butto18, _components$hpe$butto19, _components$hpe$butto20;
        buttonStatesTheme[state][kind] = {
          background: {
            color: (_components$hpe$butto17 = components.hpe.button) == null || (_components$hpe$butto17 = _components$hpe$butto17[kind]) == null ? void 0 : _components$hpe$butto17[adjustedState].background
          },
          border: {
            width: '',
            color: (_components$hpe$butto18 = components.hpe.button) == null || (_components$hpe$butto18 = _components$hpe$butto18[kind]) == null ? void 0 : _components$hpe$butto18[adjustedState].borderColor
          },
          color: (_components$hpe$butto19 = components.hpe.button) == null || (_components$hpe$butto19 = _components$hpe$butto19[kind]) == null ? void 0 : _components$hpe$butto19[adjustedState].textColor,
          font: {
            weight: (_components$hpe$butto20 = components.hpe.button) == null || (_components$hpe$butto20 = _components$hpe$butto20[kind]) == null ? void 0 : _components$hpe$butto20[adjustedState].fontWeight
          }
        };
      }
    });
  });
  var buttonSizesTheme = {};
  componentSizes.forEach(function (buttonSize) {
    var _components$hpe$butto24, _components$hpe$butto25, _components$hpe$butto26, _components$hpe$butto27, _components$hpe$butto28;
    var kindStyles = {};
    buttonKinds.forEach(function (kind) {
      var _components$hpe$butto21, _components$hpe$butto22, _components$hpe$butto23;
      kindStyles[kind] = {
        border: {
          radius: (_components$hpe$butto21 = components.hpe.button) == null || (_components$hpe$butto21 = _components$hpe$butto21[kind]) == null || (_components$hpe$butto21 = _components$hpe$butto21[buttonSize]) == null ? void 0 : _components$hpe$butto21.borderRadius
        },
        pad: {
          vertical: (_components$hpe$butto22 = components.hpe.button) == null || (_components$hpe$butto22 = _components$hpe$butto22[kind]) == null || (_components$hpe$butto22 = _components$hpe$butto22[buttonSize]) == null ? void 0 : _components$hpe$butto22.paddingY,
          horizontal: (_components$hpe$butto23 = components.hpe.button) == null || (_components$hpe$butto23 = _components$hpe$butto23[kind]) == null || (_components$hpe$butto23 = _components$hpe$butto23[buttonSize]) == null ? void 0 : _components$hpe$butto23.paddingX
        }
      };
    });
    buttonSizesTheme[buttonSize] = _extends({
      border: {
        radius: (_components$hpe$butto24 = components.hpe.button) == null || (_components$hpe$butto24 = _components$hpe$butto24["default"]) == null || (_components$hpe$butto24 = _components$hpe$butto24[buttonSize]) == null ? void 0 : _components$hpe$butto24.borderRadius
      },
      pad: {
        vertical: (_components$hpe$butto25 = components.hpe.button) == null || (_components$hpe$butto25 = _components$hpe$butto25["default"]) == null || (_components$hpe$butto25 = _components$hpe$butto25[buttonSize]) == null ? void 0 : _components$hpe$butto25.paddingY,
        horizontal: (_components$hpe$butto26 = components.hpe.button) == null || (_components$hpe$butto26 = _components$hpe$butto26["default"]) == null || (_components$hpe$butto26 = _components$hpe$butto26[buttonSize]) == null ? void 0 : _components$hpe$butto26.paddingX
      },
      iconOnly: {
        pad: {
          vertical: (_components$hpe$butto27 = components.hpe.button) == null || (_components$hpe$butto27 = _components$hpe$butto27["default"]) == null || (_components$hpe$butto27 = _components$hpe$butto27[buttonSize]) == null ? void 0 : _components$hpe$butto27.iconOnly.paddingY,
          horizontal: (_components$hpe$butto28 = components.hpe.button) == null || (_components$hpe$butto28 = _components$hpe$butto28["default"]) == null || (_components$hpe$butto28 = _components$hpe$butto28[buttonSize]) == null ? void 0 : _components$hpe$butto28.iconOnly.paddingX
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
          opacity: 0.3
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
        face: "\n          @font-face {\n            font-family: \"Graphik\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Regular-Web.woff2\") format('woff2');\n          }\n          @font-face {\n            font-family: \"Graphik\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Regular-Web.woff2\") format('woff2');\n            font-weight: 400;\n          }\n          @font-face {\n            font-family: \"Graphik\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Bold-Web.woff2\") format('woff2');\n            font-weight: 700;\n          }\n          @font-face {\n            font-family: \"Graphik\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Semibold-Web.woff2\") format('woff2');\n            font-weight: 600;\n          }\n          @font-face {\n            font-family: \"Graphik\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Medium-Web.woff2\") format('woff2');\n            font-weight: 500;\n          }\n          @font-face {\n            font-family: \"Graphik\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Extralight-Web.woff2\") format('woff2');\n            font-weight: 100;\n          }\n          @font-face {\n            font-family: \"GraphikXXCondensed\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Regular-Web.woff2\") format('woff2');\n          }\n          @font-face {\n            font-family: \"GraphikXXCondensed\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Regular-Web.woff2\") format('woff2');\n            font-weight: 400;\n          }\n          @font-face {\n            font-family: \"GraphikXXCondensed\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Bold-Web.woff2\") format('woff2');\n            font-weight: 700;\n          }\n          @font-face {\n            font-family: \"GraphikXXCondensed\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Semibold-Web.woff2\") format('woff2');\n            font-weight: 600;\n          }\n          @font-face {\n            font-family: \"GraphikXXCondensed\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Medium-Web.woff2\") format('woff2');\n            font-weight: 500;\n          }\n          @font-face {\n            font-family: \"GraphikXXCondensed\";\n            src: url(\"https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Extralight-Web.woff2\") format('woff2');\n            font-weight: 100;\n          }",
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
          size: focusBoxShadowParts[focusBoxShadowParts.length - 2],
          blur: '0px'
        },
        twoColor: true,
        inset: {
          border: undefined,
          outline: {
            color: global.hpe.focusIndicator.outline.color,
            size: global.hpe.focusIndicator.outline.width,
            offset: "-" + global.hpe.focusIndicator.outline.width
          },
          shadow: {
            color: focusBoxShadowParts[focusBoxShadowParts.length - 1],
            size: '4px',
            blur: '0px',
            inset: true
          },
          twoColor: true
        }
      },
      active: {
        background: 'background-active',
        color: 'active-text'
      },
      drop: {
        background: components.hpe.drop["default"].background,
        border: {
          radius: dimensions.radius[components.hpe.drop["default"].borderRadius] || components.hpe.drop["default"].borderRadius
        },
        margin: components.hpe.drop["default"].margin,
        intelligentMargin: true,
        shadowSize: 'medium',
        /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
         * at a z-index of 101. This adjustment brings Drop in alignment with Layer
         * which needs an elevated z-index to sit atop the Global header. */
        zIndex: components.hpe.drop["default"].zIndex,
        extend: function extend() {
          return "\n          [class*=MaskedInput__ContainerBox] {\n            padding-block: " + components.hpe.select["default"].medium.drop.paddingY + ";\n            padding-inline: " + components.hpe.select["default"].medium.drop.paddingX + ";\n            gap: " + components.hpe.select["default"].medium.drop.gapY + ";\n            display: flex;\n            flex-direction: column;\n          }\n        ";
        }
      },
      elevation: {
        // Elevation values were derived from this Figma file.
        // https://www.figma.com/file/eZYR3dtWdb9U90QvJ7p3T9/HPE-Color-Styles?node-id=405%3A25
        // Naming in Figma file is strong/default/weak vs. Grommet t-shirt sizing.
        // As defined here, default is currently mapping to medium.
        light: {
          small: light.hpe.shadow.small,
          medium: light.hpe.shadow.medium,
          large: light.hpe.shadow.large
        },
        dark: {
          small: dark.hpe.shadow.small,
          medium: dark.hpe.shadow.medium,
          large: dark.hpe.shadow.large
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
          horizontal: '3xsmall'
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
      },
      icon: {
        container: {
          pad: {
            horizontal: 'xsmall'
          }
        }
      },
      label: {
        container: {
          pad: {
            horizontal: '3xsmall'
          }
        }
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
      iconOnly: {
        pad: 'xsmall'
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
    box: {
      border: {
        offset: '3xsmall'
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
      busy: {
        gap: 'xsmall'
      },
      'cta-primary': _extends({}, buttonKindTheme.primary, {
        icon: /*#__PURE__*/React.createElement(Hpe, null),
        reverse: true
      }),
      'cta-alternate': _extends({}, buttonKindTheme.secondary, {
        icon: /*#__PURE__*/React.createElement(Hpe, {
          color: "brand"
        }),
        reverse: true
      })
    }, buttonKindTheme, {
      option: option,
      active: _extends({}, buttonStatesTheme.active, {
        'cta-primary': buttonStatesTheme.active.primary,
        'cta-alternate': buttonStatesTheme.active.secondary,
        extend: function extend(_ref5) {
          var kind = _ref5.kind,
            theme = _ref5.theme,
            keyboard = _ref5.keyboard;
          var style = '';
          // applies when option is in focus
          if (kind === 'option') {
            style += "\n            &[aria-selected=\"true\"] { background: " + getThemeColor(components.hpe.select["default"].option.selected.rest.background, theme) + "; }";
          }
          // keyboard specific styling for TextInput and MaskedInput suggestions
          if (keyboard) {
            style += "\n            position: relative;\n            &::before {\n              display: block;\n              position: absolute;\n              content: '';\n              width: " + components.hpe.select["default"].medium.option.marker.width + ";\n              border-top-left-radius: " + components.hpe.select["default"].medium.option.marker.borderTopLeftRadius + ";\n              border-bottom-left-radius: " + components.hpe.select["default"].medium.option.marker.borderBottomLeftRadius + ";\n              top: " + components.hpe.select["default"].medium.option.marker.top + ";\n              bottom: " + components.hpe.select["default"].medium.option.marker.bottom + ";\n              left: " + components.hpe.select["default"].medium.option.marker.left + ";\n              background: " + getThemeColor('border-selected', theme) + ";\n            }";
          }
          return style;
        }
      }),
      disabled: _extends({}, buttonStatesTheme.disabled["default"], {
        opacity: 1
      }, buttonStatesTheme.disabled, {
        option: {
          background: components.hpe.select["default"].option.disabled.rest.background,
          border: {
            color: components.hpe.select["default"].option.disabled.rest.borderColor
          },
          color: components.hpe.select["default"].option.disabled.rest.textColor,
          font: {
            weight: components.hpe.select["default"].option.disabled.rest.fontWeight
          }
        },
        'cta-primary': buttonStatesTheme.disabled.primary,
        'cta-alternate': buttonStatesTheme.disabled.secondary
      }),
      selected: {
        option: {
          background: components.hpe.select["default"].option.selected.rest.background,
          border: {
            color: components.hpe.select["default"].option.selected.rest.borderColor
          },
          color: components.hpe.select["default"].option.selected.rest.textColor,
          font: {
            weight: components.hpe.select["default"].option.selected.rest.fontWeight
          },
          extend: function extend(_ref6) {
            var theme = _ref6.theme,
              disabled = _ref6.disabled;
            return "\n            position: relative;\n            &::before {\n              display: block;\n              position: absolute;\n              content: '';\n              width: " + components.hpe.select["default"].medium.option.marker.width + ";\n              border-top-left-radius: " + components.hpe.select["default"].medium.option.marker.borderTopLeftRadius + ";\n              border-bottom-left-radius: " + components.hpe.select["default"].medium.option.marker.borderBottomLeftRadius + ";\n              top: " + components.hpe.select["default"].medium.option.marker.top + ";\n              bottom: " + components.hpe.select["default"].medium.option.marker.bottom + ";\n              left: " + components.hpe.select["default"].medium.option.marker.left + ";\n              background: " + getThemeColor(!disabled ? components.hpe.select["default"].option.marker.rest.background : 'border-disabled', theme) + ";\n            }\n          ";
          }
        }
      },
      hover: _extends({
        'cta-primary': buttonStatesTheme.hover.primary,
        'cta-alternate': buttonStatesTheme.hover.secondary
      }, buttonStatesTheme.hover, {
        active: _extends({}, buttonStatesTheme.hover.active, {
          'cta-primary': buttonStatesTheme.hover.active.primary,
          'cta-alternate': buttonStatesTheme.hover.active.secondary
        }),
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
      extend: function extend(_ref7) {
        var colorValue = _ref7.colorValue,
          theme = _ref7.theme,
          kind = _ref7.kind,
          disabled = _ref7.disabled;
        var style = '';
        if (kind === 'primary' && !disabled) {
          // Temporary fix for grommet bug with light/dark logic. This temp fix will override the color prop on an icon, so this is
          // not a long term solution. Also, reliance on !important is not ideal.
          style += "color: " + getThemeColor('text-onStrong', theme) + " !important;";
          var iconColor = theme.dark ? dark.hpe.color.icon.onStrong : light.hpe.color.icon.onStrong;
          style += "svg { stroke: " + iconColor + "; fill: " + iconColor + "; }";
        }
        if (colorValue) {
          // color prop is not recommended to be used, but providing
          // a better fallback behavior for hover styles to avoid
          // "kind" hover background from applying
          // https://github.com/grommet/grommet/issues/7504
          style += "\n            &:hover { background: " + getThemeColor(colorValue, theme) + "; }\n          ";
        }
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
        extend: function extend(_ref8) {
          var isSelected = _ref8.isSelected,
            theme = _ref8.theme;
          return (
            // grommet logic was incorrectly switching to wrong theme mode
            // so overriding in extend
            isSelected ? "color: " + theme.global.colors['text-onSelectedPrimaryStrong'][theme.dark ? 'dark' : 'light'] + ";" : ''
          );
        }
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
          color: 'text-strong',
          container: {
            pad: {
              horizontal: '3xsmall'
            }
          }
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
          color: 'text-strong',
          container: {
            pad: {
              horizontal: 'xsmall'
            }
          }
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
          color: 'text-strong',
          container: {
            pad: {
              horizontal: 'medium'
            }
          }
        }
      }
    },
    card: {
      container: {
        background: 'background-front',
        elevation: 'none',
        round: 'medium',
        extend: 'transition: box-shadow 0.3s ease-in-out;'
      },
      body: {
        pad: 'medium'
      },
      footer: {
        pad: {
          horizontal: 'medium',
          vertical: 'xsmall'
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
    cards: {
      grid: {
        columns: 'xsmall',
        gap: 'medium'
      }
    },
    carousel: {
      disabled: {
        icons: {
          color: 'icon-disabled'
        }
      }
    },
    chart: {
      height: 'xsmall',
      thickness: 'medium',
      width: 'medium'
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
        extend: function extend(_ref9) {
          var theme = _ref9.theme,
            toggle = _ref9.toggle,
            checked = _ref9.checked;
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
          return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n            ", "\n          "])), checked ? "border-color: " + borderColor + ";" : '');
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
        extend: function extend(_ref0) {
          var theme = _ref0.theme,
            checked = _ref0.checked,
            indeterminate = _ref0.indeterminate,
            disabled = _ref0.disabled;
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
          return "\n            background: " + background + ";\n            border-color: " + borderColor + ";\n            &:hover {\n              " + (!disabled ? "background: " + hoverBackground + ";" : '') + "\n            }\n          ";
        }
      },
      icon: {
        extend: function extend(_ref1) {
          var theme = _ref1.theme,
            disabled = _ref1.disabled;
          return "stroke-width: 2px;\n        stroke: " + getThemeColor(disabled ? components.hpe.checkbox["default"].control.disabled.rest.iconColor : components.hpe.checkbox["default"].control.selected.rest.iconColor, theme);
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
        return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      font-weight: ", ";\n      width: auto;\n      border: ", " solid ", ";\n      & input:checked + span[class*=CheckBoxToggle] > span[class*=CheckBoxKnob] {\n        left: 25px;\n      }\n      ", "\n    };\n    "])), components.hpe.checkbox["default"].label.rest.fontWeight, components.hpe.formField["default"].medium.input.container.borderWidth, getThemeColor(components.hpe.formField["default"].input.group.item.rest.borderColor, theme),
        // override built in disabled opacity: 0.5 from grommet
        disabled && "opacity: 1; \n        color: " + getThemeColor(components.hpe.checkbox["default"].label.disabled.rest.textColor, theme) + ";");
      }
    },
    checkBoxGroup: {
      container: {
        cssGap: true,
        gap: 'xsmall',
        margin: 'none'
      }
    },
    data: {
      button: {
        kind: 'toolbar'
      },
      toolbar: {
        gap: 'medium'
      }
    },
    dataChart: {
      gap: 'xsmall',
      granularity: {
        y: {
          '5xsmall': {
            fine: 2,
            medium: 2
          },
          '4xsmall': {
            fine: 2,
            medium: 2
          },
          '3xsmall': {
            fine: 3,
            medium: 2
          },
          xxsmall: {
            fine: 3,
            medium: 2
          },
          xsmall: {
            fine: 5,
            medium: 3
          },
          small: {
            fine: 5,
            medium: 3
          },
          medium: {
            fine: 7,
            medium: 5
          },
          large: {
            fine: 7,
            medium: 5
          },
          xlarge: {
            fine: 9,
            medium: 5
          },
          xxlarge: {
            fine: 9,
            medium: 5
          },
          '3xlarge': {
            fine: 11,
            medium: 5
          }
        }
      },
      detail: {
        gap: '3xsmall',
        pad: 'xsmall'
      },
      halfPad: {
        '3xlarge': 'xlarge',
        xxlarge: 'large',
        xlarge: 'medium',
        large: 'small',
        medium: 'xsmall',
        small: 'xxsmall',
        xsmall: '3xsmall',
        xxsmall: '4xsmall',
        '3xsmall': '5xsmall',
        '4xsmall': '2px',
        '5xsmall': 'hair'
      },
      legend: {
        margin: {
          top: 'xsmall'
        },
        gap: 'xsmall',
        item: {
          gap: '3xsmall',
          pad: {
            horizontal: 'xsmall',
            vertical: '3xsmall'
          }
        }
      },
      orderedSizes: ['3xlarge', 'xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall', '3xsmall', '4xsmall', '5xsmall'],
      size: {
        height: 'xsmall'
      },
      thickness: {
        veryDense: 'hair',
        dense: '3xsmall',
        heavy: 'xsmall',
        moderate: 'medium',
        light: 'xlarge',
        sparse: '3xlarge'
      },
      thicknessPad: {
        xlarge: 'xlarge',
        large: 'medium',
        medium: 'xsmall',
        small: '3xsmall',
        xsmall: '5xsmall'
      }
    },
    dataFilter: {
      rangeSelector: {
        size: 'full',
        round: 'medium'
      },
      selectMultiple: {
        dropHeight: 'medium'
      }
    },
    dataFilters: {
      clearControl: {
        margin: {
          start: 'xsmall'
        }
      },
      footer: {
        actions: {
          margin: {
            top: 'medium'
          },
          gap: 'xsmall'
        }
      },
      pad: 'medium',
      width: {
        min: 'medium'
      }
    },
    dateInput: {
      container: {
        round: components.hpe.formField["default"].medium.input.container.borderRadius
      },
      icon: {
        size: 'small'
      },
      button: {
        margin: 'xsmall'
      }
    },
    dataSummary: {
      margin: {
        vertical: '3xsmall'
      },
      separator: {
        margin: {
          horizontal: 'xsmall'
        }
      }
    },
    dataTable: {
      body: {
        extend: function extend(_ref13) {
          var theme = _ref13.theme;
          return "\n          /* Margin and padding allow room for focus on table body */\n          margin: " + theme.global.edgeSize['5xsmall'] + " 0px;\n          padding: 0px " + theme.global.edgeSize['5xsmall'] + ";\n        ";
        },
        selected: {
          background: (_components$hpe$dataC = components.hpe.dataCell["default"].selected) == null || (_components$hpe$dataC = _components$hpe$dataC.rest) == null ? void 0 : _components$hpe$dataC.background
        },
        row: {
          extend: "&:last-child td {\n              border-color: transparent;\n            }\n            &:last-child th {\n              border-color: transparent;\n            }"
        }
      },
      expand: {
        size: '5xsmall'
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
          color: components.hpe.headerCell["default"].units.rest.textColor,
          margin: {
            left: '3xsmall'
          }
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
        },
        padding: {
          vertical: '3xsmall'
        }
      },
      search: {
        pad: {
          left: 'xsmall'
        },
        text: {
          pad: {
            horizontal: 'xsmall'
          }
        }
      },
      sort: {
        gap: '3xsmall'
      }
    },
    distribution: {
      gap: '3xsmall'
    },
    dataTableColumns: {
      tabs: {
        pad: 'xsmall'
      },
      selectColumns: {
        pad: {
          vertical: 'xsmall'
        },
        gap: '3xsmall'
      },
      orderColumns: {
        pad: {
          top: 'xsmall'
        }
      }
    },
    fileInput: {
      anchor: {
        margin: 'xsmall'
      },
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
        margin: 'xsmall',
        gap: '3xsmall'
      },
      message: {
        color: 'placeholder',
        margin: 'xsmall'
      },
      pad: {
        horizontal: '3xsmall'
      },
      extend: "border-radius: " + components.hpe.formField["default"].medium.input.container.borderRadius + ";"
    },
    footer: {
      gap: 'medium'
    },
    formField: {
      extend: function extend(_ref15) {
        var theme = _ref15.theme;
        return "\n          [class*=\"ContentBox\"] {\n            label {\n              padding-block: " + components.hpe.formField["default"].medium.input.group.item.paddingY + ";\n              padding-inline: " + components.hpe.formField["default"].medium.input.group.item.paddingX + ";\n              &:hover:not([disabled]) {\n                background: " + getThemeColor(components.hpe.formField["default"].input.container.hover.background, theme) + ";\n              }\n            }\n            [role=\"group\"], [role=\"radiogroup\"] {\n              gap: 0;\n              padding-block: " + components.hpe.formField["default"].medium.input.group.container.paddingY + ";\n              padding-inline: " + components.hpe.formField["default"].medium.input.group.container.paddingX + ";\n              label {\n                border: " + (dimensions.borderSize[components.hpe.formField["default"].medium.input.group.item.borderWidth] || components.hpe.formField["default"].medium.input.group.item.borderWidth) + " solid " + getThemeColor(components.hpe.formField["default"].input.group.item.rest.borderColor, theme) + ";\n                padding-block: " + components.hpe.formField["default"].medium.input.group.item.paddingY + ";\n                padding-inline: " + components.hpe.formField["default"].medium.input.group.item.paddingX + ";\n                border-radius: " + dimensions.radius[components.hpe.formField["default"].medium.input.group.item.borderRadius] + ";\n                &:hover:not([disabled]) {\n                  background: " + getThemeColor(components.hpe.formField["default"].input.group.item.hover.background, theme) + ";\n                }\n              }\n            }\n          }\n      ";
      },
      content: {
        margin: {
          vertical: '3xsmall'
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
          gap: '3xsmall'
        },
        icon: /*#__PURE__*/React.createElement(CircleAlert, {
          size: "small",
          color: light.hpe.color.icon.critical
        }),
        size: 'xsmall',
        color: components.hpe.formField["default"].error.rest.textColor,
        margin: {
          bottom: '3xsmall',
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
          bottom: '3xsmall',
          top: 'none',
          horizontal: 'none'
        }
      },
      label: {
        size: 'xsmall',
        color: components.hpe.formField["default"].label.rest.textColor,
        margin: {
          bottom: 'none',
          top: '3xsmall',
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
    header: {
      gap: 'medium'
    },
    heading: {
      color: 'text-heading',
      weight: large.hpe.heading.xlarge.fontWeight,
      // medium size object per level is the default styling for the level
      // and will apply when no `size` prop is applied to heading.
      // if size prop is applied, we will apply the standardized heading size tokens.
      level: {
        1: {
          font: {
            weight: large.hpe.heading.xlarge.fontWeight
          },
          xsmall: undefined,
          small: undefined,
          medium: {
            size: large.hpe.heading.xlarge.fontSize,
            height: large.hpe.heading.xlarge.lineHeight
          },
          large: undefined,
          xlarge: undefined
        },
        2: {
          font: {
            weight: large.hpe.heading.large.fontWeight
          },
          xsmall: undefined,
          small: undefined,
          medium: {
            size: large.hpe.heading.large.fontSize,
            height: large.hpe.heading.large.lineHeight
          },
          large: undefined,
          xlarge: undefined
        },
        3: {
          font: {
            weight: large.hpe.heading.medium.fontWeight
          },
          xsmall: undefined,
          small: undefined,
          medium: {
            size: large.hpe.heading.medium.fontSize,
            height: large.hpe.heading.medium.lineHeight
          },
          large: undefined,
          xlarge: undefined
        },
        4: {
          font: {
            weight: large.hpe.heading.small.fontWeight
          },
          xsmall: undefined,
          small: undefined,
          medium: {
            size: large.hpe.heading.small.fontSize,
            height: large.hpe.heading.small.lineHeight
          },
          large: undefined,
          xlarge: undefined
        },
        5: {
          font: {
            weight: large.hpe.heading.xsmall.fontWeight
          },
          xsmall: undefined,
          small: undefined,
          medium: {
            size: large.hpe.heading.xsmall.fontSize,
            height: large.hpe.heading.xsmall.lineHeight
          },
          large: undefined,
          xlarge: undefined
        },
        6: {
          font: {
            weight: large.hpe.heading.xxsmall.fontWeight
          },
          xsmall: undefined,
          small: undefined,
          medium: {
            size: large.hpe.heading.xxsmall.fontSize,
            height: large.hpe.heading.xxsmall.lineHeight
          },
          large: undefined,
          xlarge: undefined
        }
      },
      extend: function extend(_ref21) {
        var _large$hpe$heading$he, _large$hpe$heading$he2, _large$hpe$heading$he3;
        var headingSize = _ref21.size,
          level = _ref21.level,
          weight = _ref21.weight,
          responsive = _ref21.responsive;
        var style = '';
        var fontSize = '';
        var lineHeight = '';
        var fontWeight = '';
        fontSize = (_large$hpe$heading$he = large.hpe.heading[headingSize]) == null ? void 0 : _large$hpe$heading$he.fontSize;
        lineHeight = (_large$hpe$heading$he2 = large.hpe.heading[headingSize]) == null ? void 0 : _large$hpe$heading$he2.lineHeight;
        fontWeight = (_large$hpe$heading$he3 = large.hpe.heading[headingSize]) == null ? void 0 : _large$hpe$heading$he3.fontWeight;
        if (fontWeight && !weight) style += "font-weight: " + fontWeight + ";";
        if (fontSize) style += "font-size: " + fontSize + ";";
        if (lineHeight) style += "line-height: " + lineHeight + ";";
        if (size) {
          var responsiveSize = headingSize || headingLevelToSize[level || 1];
          style += breakpointStyle(localGlobal, "\n              font-size: " + small.hpe.heading[responsiveSize].fontSize + ";\n              line-height: " + small.hpe.heading[responsiveSize].lineHeight + ";\n              " + (!weight ? "font-weight: " + small.hpe.heading[responsiveSize].fontWeight : '') + ";\n            ", responsive);
        }
        return style;
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
        radius: 'medium',
        intelligentRounding: true
      },
      container: {
        elevation: 'large',
        height: {
          min: '5xsmall'
        }
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
        gap: '3xsmall'
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
        },
        pad: {
          horizontal: 'medium',
          vertical: 'xsmall'
        },
        gap: 'medium'
      },
      primaryKey: {
        weight: global.hpe.fontWeight.medium
      }
    },
    maskedInput: {
      container: {
        extend: function extend(_ref22) {
          var theme = _ref22.theme;
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
    meter: {
      gap: '5xsmall'
    },
    nameValueList: {
      gap: {
        column: 'xlarge',
        row: 'xsmall'
      },
      pair: {
        column: {
          gap: {
            column: 'xlarge',
            row: 'medium'
          }
        }
      },
      name: {
        width: 'xsmall'
      },
      value: {
        width: 'medium'
      }
    },
    nameValuePair: {
      column: {
        gap: '5xsmall'
      },
      name: {
        color: 'text-strong',
        weight: global.hpe.fontWeight.medium
      }
    },
    nav: {
      gap: 'medium'
    },
    notification: {
      close: {
        icon: Close
      },
      container: {
        round: 'xsmall',
        pad: {
          horizontal: 'xsmall',
          vertical: '3xsmall'
        }
      },
      direction: 'column',
      gap: 'xsmall',
      global: {
        direction: 'row',
        container: {
          round: 'none',
          pad: {
            horizontal: 'xlarge',
            vertical: '3xsmall'
          }
        }
      },
      iconContainer: {
        pad: {
          right: 'xsmall'
        }
      },
      textContainer: {
        // any box props
        gap: 'medium'
      },
      message: {
        color: 'text',
        fill: true,
        text: {
          margin: {
            right: '3xsmall'
          }
        }
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
      },
      actions: {
        margin: {
          right: '3xsmall'
        }
      }
    },
    page: {
      wide: {
        width: {
          min: '336px',
          // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
          max: '3xlarge'
        },
        xsmall: {
          pad: {
            horizontal: 'xlarge'
          }
        },
        small: {
          pad: {
            horizontal: 'xlarge'
          }
        },
        medium: {
          pad: {
            horizontal: 'medium'
          }
        },
        large: {
          pad: {
            horizontal: 'xlarge'
          }
        },
        xlarge: {
          pad: {
            horizontal: 'xlarge'
          }
        }
      },
      narrow: {
        width: {
          min: '336px',
          // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
          max: 'xlarge'
        },
        xsmall: {
          pad: {
            horizontal: 'xlarge'
          }
        },
        small: {
          pad: {
            horizontal: 'xlarge'
          }
        },
        medium: {
          pad: {
            horizontal: 'medium'
          }
        },
        large: {
          pad: {
            horizontal: 'xlarge'
          }
        },
        xlarge: {
          pad: {
            horizontal: 'xlarge'
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
            horizontal: 'xlarge'
          }
        },
        small: {
          pad: {
            horizontal: 'xlarge'
          }
        },
        medium: {
          pad: {
            horizontal: 'medium'
          }
        },
        large: {
          pad: {
            horizontal: 'xlarge'
          }
        },
        xlarge: {
          pad: {
            horizontal: 'xlarge'
          }
        }
      }
    },
    pageHeader: {
      pad: {
        top: 'xlarge',
        bottom: 'medium'
      },
      responsive: {
        actions: {
          // any box props
          pad: {
            top: 'xsmall'
          }
        },
        breakpoints: ['xsmall', 'small']
      },
      // title: {
      //   size: undefined,
      // },
      subtitle: {
        size: 'large'
      },
      size: {
        small: {
          pad: {
            top: 'medium',
            bottom: 'xsmall'
          },
          subtitle: {
            size: 'small'
          },
          title: {
            size: 'small'
          }
        },
        // medium: {
        //   // pad: undefined,
        //   // subtitle: {},
        //   // title: {},
        // },
        large: {
          pad: {
            top: '3xlarge',
            bottom: 'xlarge'
          },
          subtitle: {
            size: 'large'
          },
          title: {
            size: 'large'
          }
        }
      },
      xsmall: {
        areas: [['parent', 'parent'], ['title', 'actions'], ['subtitle', 'actions']],
        columns: [['xsmall', 'flex'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: {
          row: '3xsmall',
          column: 'medium'
        }
      },
      small: {
        areas: [['parent', 'parent'], ['title', 'actions'], ['subtitle', 'actions']],
        columns: [['xsmall', 'flex'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: {
          row: '3xsmall',
          column: 'xlarge'
        }
      },
      medium: {
        areas: [['parent', 'parent'], ['title', 'actions'], ['subtitle', 'actions']],
        columns: [['medium', 'flex'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: {
          row: '3xsmall',
          column: 'medium'
        }
      },
      large: {
        areas: [['parent', 'parent'], ['title', 'actions'], ['subtitle', 'actions']],
        columns: [['medium', 'flex'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: {
          row: '3xsmall',
          column: 'xlarge'
        }
      },
      xlarge: {
        areas: [['parent', 'parent'], ['title', 'actions'], ['subtitle', 'actions']],
        columns: [['medium', 'xlarge'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: {
          row: '3xsmall',
          column: 'xlarge'
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
          },
          active: {
            background: components.hpe.button["default"].selected.hover.background,
            color: components.hpe.button["default"].selected.hover.textColor,
            font: {
              weight: components.hpe.button["default"].selected.hover.fontWeight
            }
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
              size: (_components$hpe$eleme0 = components.hpe.element) == null ? void 0 : _components$hpe$eleme0.medium.fontSize,
              height: (_components$hpe$eleme1 = components.hpe.element) == null ? void 0 : _components$hpe$eleme1.medium.lineHeight
            },
            height: (_components$hpe$eleme10 = components.hpe.element) == null ? void 0 : _components$hpe$eleme10.medium.minHeight,
            width: (_components$hpe$eleme11 = components.hpe.element) == null ? void 0 : _components$hpe$eleme11.medium.minHeight
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
              size: (_components$hpe$eleme12 = components.hpe.element) == null ? void 0 : _components$hpe$eleme12.large.fontSize,
              height: (_components$hpe$eleme13 = components.hpe.element) == null ? void 0 : _components$hpe$eleme13.large.lineHeight
            },
            height: (_components$hpe$eleme14 = components.hpe.element) == null ? void 0 : _components$hpe$eleme14.large.minHeight,
            width: (_components$hpe$eleme15 = components.hpe.element) == null ? void 0 : _components$hpe$eleme15.large.minHeight
          }
        }
      },
      container: {
        gap: {
          column: '3xsmall',
          row: 'xsmall'
        }
      },
      controls: {
        gap: '5xsmall'
      },
      step: {
        container: {
          gap: '3xsmall'
        }
      }
    },
    paragraph: _extends({}, paragraphTheme, {
      skeleton: {
        gap: '3xsmall'
      }
    }),
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
        extend: function extend(_ref23) {
          var theme = _ref23.theme;
          return "\n          width: auto;\n          &:has(input[checked]) {\n            & div:has(> svg[aria-hidden=\"true\"]) {\n              background: " + getThemeColor(components.hpe.radioButton["default"].control.selected.rest.background, theme) + ";\n              border-color: " + getThemeColor(components.hpe.radioButton["default"].control.selected.rest.borderColor, theme) + ";\n            }\n          }\n          &:has(input[checked]):hover:not([disabled]) {\n              & div:has(> svg[aria-hidden=\"true\"]) {\n                background: " + getThemeColor(components.hpe.radioButton["default"].control.selected.hover.background, theme) + ";\n                border-color: " + getThemeColor(components.hpe.radioButton["default"].control.selected.hover.borderColor, theme) + ";\n              }\n          }\n          ";
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
            preserveAspectRatio: "xMidYMid meet" // Forces uniform scaling. Part of grommet code but lost when passing custom icon.
            ,
            color: components.hpe.radioButton["default"].control.selected.rest.iconColor,
            size: components.hpe.radioButton["default"].medium.control.width // width and height are identical, so choosing one.
          }, /*#__PURE__*/React.createElement("circle", {
            cx: 12,
            cy: 12,
            r: 6
          }));
        }
      }
    },
    radioButtonGroup: {
      container: {
        cssGap: true,
        gap: 'xsmall',
        margin: 'none'
      }
    },
    rangeInput: {
      thumb: {
        color: 'background-primary-strong',
        extend: 'border-color: transparent;' // fix for FireFox
      },
      track: {
        lower: {
          color: 'background-primary-strong'
        },
        upper: {
          // hard-coding opaque version of 'border-weak' due to unresolved grommet bug
          // https://github.com/grommet/grommet/issues/6739
          color: {
            light: '#e0e0e0',
            dark: '#616161'
          }
        },
        extend: function extend(_ref24) {
          var theme = _ref24.theme;
          return "\n        border-radius: " + large.hpe.radius.full + ";\n        // firefox only selector, since pseudo-element\n        // isn't supported\n        @-moz-document url-prefix() {\n          border: 1px solid " + getThemeColor('border-strong', theme) + ";\n        }";
        }
      },
      disabled: {
        opacity: 1,
        track: {
          color: 'background-disabled'
        },
        thumb: {
          // opaque version of background-front + background-disabled
          // to avoid stacking transparencies
          color: {
            light: 'rgb(245, 245, 245)',
            dark: 'rgb(44, 44, 44)'
          }
        }
      },
      // primitives.hpe.base.dimension[100] = 4px which meets WCAG minimum size
      // for visual indicator (minimum 3px)
      extend: function extend(_ref25) {
        var disabled = _ref25.disabled,
          theme = _ref25.theme;
        return "\n        &::before {\n          display: block;\n          position: absolute;\n          content: '';\n          width: " + primitives.hpe.base.dimension[100] + ";\n          height: " + primitives.hpe.base.dimension[100] + ";\n          border-radius: " + large.hpe.radius.full + ";\n          right: 0;\n          top: 50%;\n          transform: translateY(-50%);\n          background: " + getThemeColor(disabled ? 'background-disabled' : 'background-neutral-xstrong', theme) + ";\n        }\n    ";
      }
    },
    rangeSelector: {
      edge: {
        size: "" + primitives.hpe.base.dimension[600]
      },
      label: {
        margin: {
          horizontal: 'xsmall'
        }
      }
    },
    select: {
      clear: {
        container: {
          background: 'transparent',
          pad: components.hpe.select["default"].medium.drop.paddingX
        },
        text: undefined,
        button: {
          border: {
            radius: components.hpe.select["default"].medium.option.borderRadius,
            size: components.hpe.select["default"].medium.option.borderWidth
          },
          padding: {
            horizontal: components.hpe.select["default"].medium.option.paddingX,
            vertical: components.hpe.select["default"].medium.option.paddingY
          },
          hover: {
            background: components.hpe.select["default"].option.hover.background,
            color: 'text-strong'
          },
          color: 'text-strong',
          font: {
            weight: components.hpe.select["default"].option.rest.fontWeight
          }
        }
      },
      container: {
        extend: function extend() {
          return "\n          div:has(input[type=\"search\"]) {\n            padding-bottom: 0;\n          }\n        ";
        }
      },
      control: {
        extend: function extend(_ref26) {
          var disabled = _ref26.disabled;
          return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n          ", "\n\n          &[class*=\"SelectMultiple\"] [role=\"listbox\"] {\n            padding-block: ", ";\n            padding-inline: ", ";\n            & [role='option'] {\n              border-radius: ", ";\n            }\n          }\n        "])), disabled && "\n          opacity: 0.3;\n          input {\n            cursor: default;\n          }", components.hpe.select["default"].medium.drop.paddingY, components.hpe.select["default"].medium.drop.paddingX, dimensions.edgeSize[components.hpe.select["default"].medium.option.borderRadius] || components.hpe.select["default"].medium.option.borderRadius);
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
          left: 'xsmall',
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
      },
      search: {
        pad: '3xsmall'
      }
    },
    selectMultiple: {
      help: {
        container: {
          pad: '3xsmall'
        }
      },
      listbox: {
        extend: function extend() {
          return "\n          padding-block: " + components.hpe.select["default"].medium.drop.paddingY + ";\n          padding-inline: " + components.hpe.select["default"].medium.drop.paddingX + ";\n          display: flex;\n          flex-direction: column;\n          [role=\"option\"] {\n              border-radius: " + (dimensions.edgeSize[components.hpe.select["default"].medium.option.borderRadius] || components.hpe.select["default"].medium.option.borderRadius) + ";\n            }\n          }\n        ";
        }
      },
      option: {
        pad: '3xsmall'
      },
      search: {
        pad: '3xsmall'
      },
      showMore: {
        pad: {
          horizontal: 'xsmall',
          bottom: 'xsmall',
          top: '3xsmall'
        }
      },
      summary: {
        gap: 'xsmall',
        height: {
          min: '5xsmall'
        },
        pad: '3xsmall',
        showSelectedInline: {
          pad: {
            left: '3xsmall',
            vertical: '3xsmall'
          }
        }
      }
    },
    sidebar: {
      gap: 'xlarge',
      pad: 'xsmall'
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
      responsive: false,
      size: {
        xsmall: (_components$hpe$eleme16 = components.hpe.element) == null ? void 0 : _components$hpe$eleme16.xsmall.minHeight,
        small: (_components$hpe$eleme17 = components.hpe.element) == null ? void 0 : _components$hpe$eleme17.small.minHeight,
        medium: (_components$hpe$eleme18 = components.hpe.element) == null ? void 0 : _components$hpe$eleme18.medium.minHeight,
        large: (_components$hpe$eleme19 = components.hpe.element) == null ? void 0 : _components$hpe$eleme19.large.minHeight,
        xlarge: (_components$hpe$eleme20 = components.hpe.element) == null ? void 0 : _components$hpe$eleme20.xlarge.minHeight
      }
    },
    starRating: {
      color: 'background-selected-primary-strong'
    },
    tab: {
      color: 'text',
      active: {
        background: undefined,
        color: 'text-primary',
        weight: 600
      },
      hover: {
        background: 'transparent',
        color: 'text-strong'
      },
      border: {
        side: 'all',
        color: 'transparent',
        size: components.hpe.element.medium.borderWidth,
        active: {
          color: undefined
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
        bottom: (_components$hpe$eleme21 = components.hpe.element) == null ? void 0 : _components$hpe$eleme21.medium.paddingY,
        top: (_components$hpe$eleme22 = components.hpe.element) == null ? void 0 : _components$hpe$eleme22.medium.paddingY,
        horizontal: (_components$hpe$eleme23 = components.hpe.element) == null || (_components$hpe$eleme23 = _components$hpe$eleme23.medium) == null || (_components$hpe$eleme23 = _components$hpe$eleme23.paddingX) == null ? void 0 : _components$hpe$eleme23.narrow
      },
      margin: {
        vertical: 'none',
        horizontal: 'none'
      },
      extend: 'font-weight: 500;',
      gap: 'xsmall'
    },
    tabs: {
      gap: 'small',
      header: {
        border: undefined,
        // padding-bottom ensures the marker is not cut off by subsequent
        // page elements.
        extend: function extend(_ref27) {
          var theme = _ref27.theme;
          return "\n        padding-bottom: " + large.hpe.borderWidth.medium + ";\n        & button {\n          border-radius: " + large.hpe.radius.xsmall + "; // radius on focus\n        }\n        & button[aria-selected=\"true\"] {\n            position: relative;\n            &::before {\n              display: block;\n              position: absolute;\n              content: '';\n              height: " + large.hpe.borderWidth.medium + ";\n              border-radius: " + large.hpe.radius.full + ";\n              bottom: -" + large.hpe.borderWidth.medium + ";\n              left: 0;\n              right: 0;\n              background: " + getThemeColor('border-selected', theme) + ";\n            }\n        }";
        },
        previousButton: {
          pad: {
            vertical: '3xsmall',
            horizontal: 'xsmall'
          }
        },
        nextButton: {
          pad: {
            vertical: '3xsmall',
            horizontal: 'xsmall'
          }
        }
      },
      nextButton: {
        pad: {
          horizontal: 'xsmall',
          vertical: '3xsmall'
        }
      },
      previousButton: {
        pad: {
          horizontal: 'xsmall',
          vertical: '3xsmall'
        }
      },
      step: {
        xsmall: 1,
        xlarge: 3
      }
    },
    table: {
      caption: {
        margin: {
          bottom: '5xsmall'
        }
      },
      header: {
        border: {
          side: 'bottom',
          color: components.hpe.headerCell["default"].rest.borderColor
        },
        pad: {
          horizontal: components.hpe.headerCell["default"].medium.paddingX,
          top: components.hpe.headerCell["default"].medium.paddingTop,
          bottom: components.hpe.headerCell["default"].medium.paddingBottom
        },
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
        }
      },
      row: {
        hover: {
          background: 'background-hover'
        }
      },
      footer: {
        pad: {
          horizontal: components.hpe.footerCell["default"].medium.paddingX,
          top: components.hpe.footerCell["default"].medium.paddingTop,
          bottom: components.hpe.footerCell["default"].medium.paddingBottom
        },
        extend: "\n          font-weight: " + components.hpe.footerCell["default"].fontWeight + ";\n        "
      },
      extend: function extend() {
        return "& tbody tr:last-child td {\n        border-color: transparent;\n      }\n      & tbody tr:last-child th {\n        border-color: transparent;\n      }";
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
        horizontal: (_components$hpe$eleme24 = components.hpe.element) == null || (_components$hpe$eleme24 = _components$hpe$eleme24.medium) == null || (_components$hpe$eleme24 = _components$hpe$eleme24.paddingX) == null ? void 0 : _components$hpe$eleme24["default"],
        vertical: (_components$hpe$eleme25 = components.hpe.element) == null ? void 0 : _components$hpe$eleme25.medium.paddingY
      },
      remove: {
        kind: 'default',
        margin: {
          right: '3xsmall'
        }
      },
      value: {
        weight: global.hpe.fontWeight.medium
      },
      round: 'xsmall',
      size: {
        xsmall: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme26 = components.hpe.element) == null ? void 0 : _components$hpe$eleme26.small.paddingY,
            horizontal: (_components$hpe$eleme27 = components.hpe.element) == null || (_components$hpe$eleme27 = _components$hpe$eleme27.small) == null || (_components$hpe$eleme27 = _components$hpe$eleme27.paddingX) == null ? void 0 : _components$hpe$eleme27["default"]
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
            vertical: (_components$hpe$eleme28 = components.hpe.element) == null ? void 0 : _components$hpe$eleme28.small.paddingY,
            horizontal: (_components$hpe$eleme29 = components.hpe.element) == null || (_components$hpe$eleme29 = _components$hpe$eleme29.small) == null || (_components$hpe$eleme29 = _components$hpe$eleme29.paddingX) == null ? void 0 : _components$hpe$eleme29["default"]
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
            vertical: (_components$hpe$eleme30 = components.hpe.element) == null ? void 0 : _components$hpe$eleme30.medium.paddingY,
            horizontal: (_components$hpe$eleme31 = components.hpe.element) == null || (_components$hpe$eleme31 = _components$hpe$eleme31.medium) == null || (_components$hpe$eleme31 = _components$hpe$eleme31.paddingX) == null ? void 0 : _components$hpe$eleme31["default"]
          },
          remove: {
            size: 'small',
            margin: {
              right: '5xsmall'
            }
          }
        },
        large: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme32 = components.hpe.element) == null ? void 0 : _components$hpe$eleme32.large.paddingY,
            horizontal: (_components$hpe$eleme33 = components.hpe.element) == null || (_components$hpe$eleme33 = _components$hpe$eleme33.large) == null || (_components$hpe$eleme33 = _components$hpe$eleme33.paddingX) == null ? void 0 : _components$hpe$eleme33["default"]
          },
          remove: {
            size: 'medium',
            margin: {
              right: '5xsmall'
            }
          }
        },
        xlarge: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme34 = components.hpe.element) == null ? void 0 : _components$hpe$eleme34.xlarge.paddingY,
            horizontal: (_components$hpe$eleme35 = components.hpe.element) == null || (_components$hpe$eleme35 = _components$hpe$eleme35.xlarge) == null || (_components$hpe$eleme35 = _components$hpe$eleme35.paddingX) == null ? void 0 : _components$hpe$eleme35["default"]
          },
          remove: {
            size: 'large',
            margin: {
              right: '3xsmall'
            }
          }
        }
      }
    },
    text: _extends({}, textTheme, {
      skeleton: {
        margin: {
          vertical: '3xsmall'
        }
      }
    }),
    textInput: {
      container: {
        extend: function extend(_ref28) {
          var theme = _ref28.theme;
          return "\n          svg {\n            fill: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n            stroke: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n          }\n        ";
        }
      },
      suggestions: {
        extend: function extend(_ref29) {
          var theme = _ref29.theme;
          return "\n          padding-block: " + components.hpe.select["default"].medium.drop.paddingY + ";\n          padding-inline: " + components.hpe.select["default"].medium.drop.paddingX + ";\n          gap: " + components.hpe.select["default"].medium.drop.gapY + ";\n          display: flex;\n          flex-direction: column;\n          [role=\"option\"]:hover {\n            background: " + getThemeColor(components.hpe.select["default"].option.hover.background, theme) + ";\n          }\n        ";
        }
      }
    },
    tip: {
      content: {
        background: 'background-floating',
        border: {
          color: 'border-weak'
        },
        margin: '5xsmall',
        elevation: 'small',
        pad: {
          vertical: 'none',
          horizontal: 'xsmall'
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
        round: 'xsmall',
        extend: function extend(_ref30) {
          var theme = _ref30.theme;
          return "\n        gap: " + (dimensions.edgeSize[large.hpe.spacing['5xsmall']] || large.hpe.spacing['5xsmall']) + ";\n        &:hover {\n          background: " + getThemeColor('background-hover', theme) + ";\n        }";
        }
      },
      divider: false
    },
    toolbar: {
      gap: 'xsmall',
      small: {
        gap: 'xsmall'
      }
    },
    video: {
      scrubber: {
        thickness: 'xsmall'
      },
      time: {
        container: {
          pad: {
            horizontal: 'xsmall'
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
  'v6-backwards-compatibility': false
});