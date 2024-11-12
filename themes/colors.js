"use strict";

exports.__esModule = true;
exports.colors = void 0;
var _hpeDesignTokens = require("hpe-design-tokens");
var _utils = require("../../../tools/utils");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var colorNames = (0, _utils.flattenObject)(_hpeDesignTokens.light, '-');
var colorTokens = {};
Object.keys(colorNames).forEach(function (color) {
  if (!color.includes('elevation')) {
    var adjustedColor = color.split('-').join('.');
    colorTokens[color] = {
      light: (0, _utils.access)("hpe.color." + adjustedColor, _hpeDesignTokens.light),
      dark: (0, _utils.access)("hpe.color." + adjustedColor, _hpeDesignTokens.dark)
    };
  }
});
var colors = exports.colors = _extends({}, colorTokens, {
  // ---- DEPRECATED ---- //
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
  // ---- TO DO: Tokens do not exist, should they? ---- //
  brand: _utils.MISSING.color,
  control: _utils.MISSING.color,
  'active-text': _utils.MISSING.color,
  'disabled-text': _utils.MISSING.color,
  // deprecated, use text-weak instead

  'text-primary-button': _hpeDesignTokens.components.hpe.button.primary.enabled.textColor,
  'background-cta-alternate': _utils.MISSING.color,
  // ----------- These ones we need to map manually for backwards compatibility -----------
  // ----------- with current color namespace ---------------
  'background-layer-overlay': {
    dark: _hpeDesignTokens.dark.hpe.color.background.screenOverlay,
    light: _hpeDesignTokens.light.hpe.color.background.screenOverlay
  },
  'active-background': {
    dark: _hpeDesignTokens.dark.hpe.color.background.active,
    light: _hpeDesignTokens.light.hpe.color.background.active
  },
  background: {
    dark: _hpeDesignTokens.dark.hpe.color.background["default"],
    light: _hpeDesignTokens.light.hpe.color.background["default"]
  },
  text: {
    dark: _hpeDesignTokens.dark.hpe.color.text["default"],
    light: _hpeDesignTokens.light.hpe.color.text["default"]
  },
  border: {
    dark: _hpeDesignTokens.dark.hpe.color.border["default"],
    light: _hpeDesignTokens.light.hpe.color.border["default"]
  },
  blue: {
    dark: _hpeDesignTokens.dark.hpe.color.decorative.blue,
    light: _hpeDesignTokens.light.hpe.color.decorative.blue
  },
  'blue!': {
    dark: _hpeDesignTokens.dark.hpe.color.decorative['blue!'],
    light: _hpeDesignTokens.light.hpe.color.decorative['blue!']
  },
  green: {
    dark: _hpeDesignTokens.dark.hpe.color.decorative.green,
    light: _hpeDesignTokens.light.hpe.color.decorative.green
  },
  'green!': {
    dark: _hpeDesignTokens.dark.hpe.color.decorative['green!'],
    light: _hpeDesignTokens.light.hpe.color.decorative['green!']
  },
  teal: {
    dark: _hpeDesignTokens.dark.hpe.color.decorative.teal,
    light: _hpeDesignTokens.light.hpe.color.decorative.teal
  },
  'teal!': {
    dark: _hpeDesignTokens.dark.hpe.color.decorative['teal!'],
    light: _hpeDesignTokens.light.hpe.color.decorative['teal!']
  },
  purple: {
    dark: _hpeDesignTokens.dark.hpe.color.decorative.purple,
    light: _hpeDesignTokens.light.hpe.color.decorative.purple
  },
  'purple!': {
    dark: _hpeDesignTokens.dark.hpe.color.decorative['purple!'],
    light: _hpeDesignTokens.light.hpe.color.decorative['purple!']
  },
  red: {
    dark: _hpeDesignTokens.dark.hpe.color.decorative.red,
    light: _hpeDesignTokens.light.hpe.color.decorative.red
  },
  'red!': {
    dark: _hpeDesignTokens.dark.hpe.color.decorative['red!'],
    light: _hpeDesignTokens.light.hpe.color.decorative['red!']
  },
  orange: {
    dark: _hpeDesignTokens.dark.hpe.color.decorative.orange,
    light: _hpeDesignTokens.light.hpe.color.decorative.orange
  },
  'orange!': {
    dark: _hpeDesignTokens.dark.hpe.color.decorative['orange!'],
    light: _hpeDesignTokens.light.hpe.color.decorative['orange!']
  },
  yellow: {
    dark: _hpeDesignTokens.dark.hpe.color.decorative.yellow,
    light: _hpeDesignTokens.light.hpe.color.decorative.yellow
  },
  'yellow!': {
    dark: _hpeDesignTokens.dark.hpe.color.decorative['yellow!'],
    light: _hpeDesignTokens.light.hpe.color.decorative['yellow!']
  },
  'graph-0': {
    light: _hpeDesignTokens.light.hpe.color.dataVis.categorical[10],
    dark: _hpeDesignTokens.dark.hpe.color.dataVis.categorical[10]
  },
  'graph-1': {
    light: _hpeDesignTokens.light.hpe.color.dataVis.categorical[20],
    dark: _hpeDesignTokens.dark.hpe.color.dataVis.categorical[20]
  },
  'graph-2': {
    light: _hpeDesignTokens.light.hpe.color.dataVis.categorical[30],
    dark: _hpeDesignTokens.dark.hpe.color.dataVis.categorical[30]
  },
  'graph-3': {
    light: _hpeDesignTokens.light.hpe.color.dataVis.categorical[40],
    dark: _hpeDesignTokens.dark.hpe.color.dataVis.categorical[40]
  },
  'graph-4': {
    light: _hpeDesignTokens.light.hpe.color.dataVis.categorical[50],
    dark: _hpeDesignTokens.dark.hpe.color.dataVis.categorical[50]
  },
  'graph-5': {
    light: _hpeDesignTokens.light.hpe.color.dataVis.categorical[60],
    dark: _hpeDesignTokens.dark.hpe.color.dataVis.categorical[60]
  },
  'graph-6': {
    light: _hpeDesignTokens.light.hpe.color.dataVis.categorical[70],
    dark: _hpeDesignTokens.dark.hpe.color.dataVis.categorical[70]
  },
  'status-critical': {
    dark: _hpeDesignTokens.dark.hpe.color.icon.critical,
    light: _hpeDesignTokens.light.hpe.color.icon.critical
  },
  'status-warning': {
    dark: _hpeDesignTokens.dark.hpe.color.icon.warning,
    light: _hpeDesignTokens.light.hpe.color.icon.warning
  },
  'status-ok': {
    dark: _hpeDesignTokens.dark.hpe.color.icon.ok,
    light: _hpeDesignTokens.light.hpe.color.icon.ok
  },
  'status-unknown': {
    dark: _hpeDesignTokens.dark.hpe.color.icon.unknown,
    light: _hpeDesignTokens.light.hpe.color.icon.unknown
  },
  'status-disabled': '#CCCCCC',
  // deprecated, does not support light and dark. use text-disabled instead
  'validation-critical': {
    light: _hpeDesignTokens.light.hpe.color.background.critical,
    dark: _hpeDesignTokens.dark.hpe.color.background.critical
  },
  'validation-ok': {
    light: _hpeDesignTokens.light.hpe.color.background.ok,
    dark: _hpeDesignTokens.dark.hpe.color.background.ok
  },
  'validation-warning': {
    light: _hpeDesignTokens.light.hpe.color.background.warning,
    dark: _hpeDesignTokens.dark.hpe.color.background.critical
  },
  icon: {
    light: _hpeDesignTokens.light.hpe.color.icon["default"],
    dark: _hpeDesignTokens.dark.hpe.color.icon["default"]
  },
  'selected-background': 'background-selected-strong-enabled',
  'selected-text': 'text-onSelectedStrong',
  placeholder: {
    light: _hpeDesignTokens.light.hpe.color.text.placeholder,
    dark: _hpeDesignTokens.dark.hpe.color.text.placeholder
  }
});