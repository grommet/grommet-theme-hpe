"use strict";

exports.__esModule = true;
exports.buildTypography = void 0;
var _utils = require("./utils");
var buildTypography = exports.buildTypography = function buildTypography(tokens) {
  var small = tokens.small,
    large = tokens.large,
    components = tokens.components,
    global = tokens.global;
  var anchorSizeTheme = {};
  _utils.textSizes.forEach(function (sizeArg) {
    var textSize = sizeArg === '6xlarge' ? '5xlarge' : sizeArg;
    var themeSize = (0, _utils.getTextSize)(textSize);
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
  _utils.textSizes.forEach(function (textSize) {
    var _large$hpe$text, _large$hpe$text5, _large$hpe$text6, _large$hpe$text7, _large$hpe$text8, _large$hpe$text9, _large$hpe$text0;
    var fontSize = (_large$hpe$text = large.hpe.text) == null || (_large$hpe$text = _large$hpe$text[textSize]) == null ? void 0 : _large$hpe$text.fontSize;
    var fontSizeValue = fontSize ? parseFloat(fontSize.replace('rem', '')) : 0;
    var fallbackValue = parseFloat(fallback.size.replace('rem', '')) || 0;
    if (fontSizeValue > fallbackValue) {
      var _large$hpe$text2, _large$hpe$text3, _large$hpe$text4;
      fallback.size = fontSize;
      fallback.height = (_large$hpe$text2 = large.hpe.text) == null || (_large$hpe$text2 = _large$hpe$text2[textSize]) == null ? void 0 : _large$hpe$text2.lineHeight;
      fallback.maxWidth = (_large$hpe$text3 = large.hpe.text) == null || (_large$hpe$text3 = _large$hpe$text3[textSize]) == null ? void 0 : _large$hpe$text3.maxWidth;
      fallback.weight = (_large$hpe$text4 = large.hpe.text) == null || (_large$hpe$text4 = _large$hpe$text4[textSize]) == null ? void 0 : _large$hpe$text4.fontWeight;
    }
    var themeSize = (0, _utils.getTextSize)(textSize);
    paragraphTheme[themeSize] = {
      size: ((_large$hpe$text5 = large.hpe.text) == null || (_large$hpe$text5 = _large$hpe$text5[textSize]) == null ? void 0 : _large$hpe$text5.fontSize) || fallback.size,
      height: ((_large$hpe$text6 = large.hpe.text) == null || (_large$hpe$text6 = _large$hpe$text6[textSize]) == null ? void 0 : _large$hpe$text6.lineHeight) || fallback.height,
      maxWidth: ((_large$hpe$text7 = large.hpe.text) == null || (_large$hpe$text7 = _large$hpe$text7[textSize]) == null ? void 0 : _large$hpe$text7.maxWidth) || fallback.maxWidth
    };
    textTheme[themeSize] = {
      size: ((_large$hpe$text8 = large.hpe.text) == null || (_large$hpe$text8 = _large$hpe$text8[textSize]) == null ? void 0 : _large$hpe$text8.fontSize) || fallback.size,
      height: ((_large$hpe$text9 = large.hpe.text) == null || (_large$hpe$text9 = _large$hpe$text9[textSize]) == null ? void 0 : _large$hpe$text9.lineHeight) || fallback.height
    };
    fontWeights[themeSize] = ((_large$hpe$text0 = large.hpe.text) == null || (_large$hpe$text0 = _large$hpe$text0[textSize]) == null ? void 0 : _large$hpe$text0.fontWeight) || fallback.weight;
  });
  textTheme.extend = function (_ref) {
    var textSize = _ref.size,
      weight = _ref.weight;
    if (!weight) return "font-weight: " + fontWeights[textSize] + ";";
    if (weight === 'bold') return 'font-weight: 500;';
    return '';
  };
  paragraphTheme.extend = function (_ref2) {
    var textSize = _ref2.size,
      weight = _ref2.weight;
    if (!weight) return "font-weight: " + fontWeights[textSize] + ";";
    if (weight === 'bold') return 'font-weight: 500;';
    return '';
  };
  var heading = {
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
    extend: function extend(_ref3) {
      var headingSize = _ref3.size,
        level = _ref3.level,
        weight = _ref3.weight,
        responsive = _ref3.responsive;
      var style = '';
      // Only apply token-based sizing when a valid size prop was explicitly passed.
      // When no size is given, the level[1..6].medium mapping controls sizing instead.
      if (headingSize && large.hpe.heading[headingSize]) {
        var _large$hpe$heading$he = large.hpe.heading[headingSize],
          fontSize = _large$hpe$heading$he.fontSize,
          lineHeight = _large$hpe$heading$he.lineHeight,
          fontWeight = _large$hpe$heading$he.fontWeight;
        if (fontWeight && !weight) style += "font-weight: " + fontWeight + ";";
        if (fontSize) style += "font-size: " + fontSize + ";";
        if (lineHeight) style += "line-height: " + lineHeight + ";";
      }
      // The max desired weight in the theme is 500; however, a common convention is for
      // implementers to choose "bold" to style text. This ensures "bold" resolves to the desired weight.
      if (weight === 'bold') style += 'font-weight: 500;';
      if (responsive) {
        var responsiveSize = headingSize || _utils.headingLevelToSize[level || 1];
        var responsiveHeadingSize = (0, _utils.getHeadingSize)(small, responsiveSize);
        style += (0, _utils.breakpointStyle)(global, "\n        font-size: " + responsiveHeadingSize.fontSize + ";\n        line-height: " + responsiveHeadingSize.lineHeight + ";\n        " + (!weight ? "font-weight: " + responsiveHeadingSize.fontWeight : '') + ";\n      ", responsive);
      }
      return style;
    }
  };
  var anchor = {
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
        return "color: " + (0, _utils.getThemeColor)(components.hpe.anchor["default"].hover.textColor, theme) + ";";
      }
    },
    iconOnly: {
      pad: 'xsmall'
    },
    size: anchorSizeTheme
  };
  return {
    anchor: anchor,
    paragraph: paragraphTheme,
    text: textTheme,
    heading: heading
  };
};