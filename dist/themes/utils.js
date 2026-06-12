"use strict";

exports.__esModule = true;
exports.textSizes = exports.isObject = exports.headingLevelToSize = exports.getThemeColor = exports.getTextSize = exports.getHeadingSize = exports.deepFreeze = exports.componentSizes = exports.buttonStates = exports.buttonKinds = exports.breakpointStyle = exports.baseSpacing = void 0;
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2;
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
var baseSpacing = exports.baseSpacing = 24;
var isObject = exports.isObject = function isObject(item) {
  return !!item && typeof item === 'object' && !Array.isArray(item);
};
var deepFreeze = exports.deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};
var componentSizes = exports.componentSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
var buttonKinds = exports.buttonKinds = ['default', 'secondary', 'primary', 'toolbar'];
var buttonStates = exports.buttonStates = ['hover', 'active', 'disabled'];
var textSizes = exports.textSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', '3xlarge', '4xlarge', '5xlarge', '6xlarge'];
var headingLevelToSize = exports.headingLevelToSize = {
  1: 'xlarge',
  2: 'large',
  3: 'medium',
  4: 'small',
  5: 'xsmall',
  6: 'xxsmall'
};
var breakpointStyle = exports.breakpointStyle = function breakpointStyle(global, content, responsive) {
  var breakpoint = global.hpe.breakpoint.small;
  var st = responsive === 'container' ? (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n          @container ", " {\n            ", "\n          }\n        "])), breakpoint && "(max-width: " + breakpoint + ")", content) : (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n          @media only screen ", " {\n            ", "\n          }\n        "])), breakpoint && "and (max-width: " + breakpoint + ")", content);
  return st.join('');
};
var getHeadingSize = exports.getHeadingSize = function getHeadingSize(breakpointTokens, size, level) {
  var fallbackSize = headingLevelToSize[level || 1];
  var resolvedSize = size && breakpointTokens.hpe.heading[size] ? size : fallbackSize;
  return breakpointTokens.hpe.heading[resolvedSize];
};
var getThemeColor = exports.getThemeColor = function getThemeColor(color, theme) {
  var _theme$global$colors$;
  return typeof theme.global.colors[color] === 'string' ? theme.global.colors[color] : ((_theme$global$colors$ = theme.global.colors[color]) == null ? void 0 : _theme$global$colors$[theme.dark ? 'dark' : 'light']) || color;
};
var getTextSize = exports.getTextSize = function getTextSize(size) {
  if (size === '3xlarge') return '3xl';
  if (size === '4xlarge') return '4xl';
  if (size === '5xlarge') return '5xl';
  if (size === '6xlarge') return '6xl';
  return size;
};