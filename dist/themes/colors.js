"use strict";

exports.__esModule = true;
exports.colors = void 0;
var _grommet = require("hpe-design-tokens/grommet");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var _flattenObject = function flattenObject(obj, delimiter, prefix) {
  if (delimiter === void 0) {
    delimiter = '.';
  }
  if (prefix === void 0) {
    prefix = '';
  }
  return Object.keys(obj).reduce(function (acc, k) {
    var pre = prefix.length ? "" + prefix + delimiter : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && Object.keys(obj[k]).length > 0 && !('$value' in obj[k])) Object.assign(acc, _flattenObject(obj[k], delimiter, !['hpe', 'color'].includes(k) ? pre + k : ''));else acc[pre + k] = obj[k];
    return acc;
  }, {});
};

// Utility to access nested object properties via dot-notation string path
// and swap light/dark theme values.
var access = function access(path, object) {
  return path.split('.').reduce(function (o, i) {
    return o[i];
  }, object);
};
var swapped = function swapped(path) {
  var lightValue = access("" + path, _grommet.dark);
  var darkValue = access("" + path, _grommet.light);
  return {
    light: lightValue,
    dark: darkValue
  };
};
var flatColors = _flattenObject(_grommet.light, '-');
var tokenColors = {};
Object.keys(flatColors).forEach(function (color) {
  if (!color.includes('shadow')) {
    if (color === 'focus-support') {
      // special case for 'focus-support' because it follows a different
      // naming pattern than other token colors. The change ensures that
      // focus-support is correctly added to the colors array
      tokenColors[color] = {
        light: _grommet.light.hpe.color['focus-support'],
        dark: _grommet.dark.hpe.color['focus-support']
      };
    } else {
      var _color$split = color.split('-'),
        category = _color$split[0];
      var flatName = color.split('-').slice(1).join('-');
      tokenColors[color] = {
        light: access("hpe.color." + category + (flatName ? "." + flatName : ''), _grommet.light),
        dark: access("hpe.color." + category + (flatName ? "." + flatName : ''), _grommet.dark)
      };
    }
  }
});
var colors = exports.colors = _extends({}, tokenColors, {
  // Override specific colors to swap light and dark.hpe values
  // See https://github.com/grommet/grommet/issues/7818
  'text-onPrimaryStrong': swapped('hpe.color.text.onPrimaryStrong'),
  'text-onSelectedPrimaryStrong': swapped('hpe.color.text.onSelectedPrimaryStrong'),
  'icon-onPrimaryStrong': swapped('hpe.color.icon.onPrimaryStrong'),
  'icon-onSelectedPrimaryStrong': swapped('hpe.color.icon.onSelectedPrimaryStrong'),
  control: 'background-primary-strong',
  'active-text': 'text-strong',
  'text-primary-button': _grommet.components.hpe.button.primary.rest.textColor,
  brand: {
    dark: _grommet.dark.hpe.color.decorative.brand,
    light: _grommet.light.hpe.color.decorative.brand
  },
  'background-layer-overlay': {
    dark: _grommet.dark.hpe.color.background.screenOverlay,
    light: _grommet.light.hpe.color.background.screenOverlay
  },
  'active-background': {
    dark: _grommet.dark.hpe.color.background.active,
    light: _grommet.light.hpe.color.background.active
  },
  background: {
    dark: _grommet.dark.hpe.color.background["default"],
    light: _grommet.light.hpe.color.background["default"]
  },
  text: {
    dark: _grommet.dark.hpe.color.text["default"],
    light: _grommet.light.hpe.color.text["default"]
  },
  // wanted to deprecate text-xweak but namespace is used
  // in grommet code
  'text-xweak': {
    dark: _grommet.dark.hpe.color.text.weak,
    light: _grommet.light.hpe.color.text.weak
  },
  border: {
    dark: _grommet.dark.hpe.color.border["default"],
    light: _grommet.light.hpe.color.border["default"]
  },
  blue: {
    dark: _grommet.dark.hpe.color.decorative.blue,
    light: _grommet.light.hpe.color.decorative.blue
  },
  'blue!': _grommet.primitives.hpe.base.color['blue-700'],
  green: {
    dark: _grommet.dark.hpe.color.decorative.green,
    light: _grommet.light.hpe.color.decorative.green
  },
  'green!': {
    dark: _grommet.dark.hpe.color.decorative.brand,
    light: _grommet.light.hpe.color.decorative.brand
  },
  purple: {
    dark: _grommet.dark.hpe.color.decorative.purple,
    light: _grommet.light.hpe.color.decorative.purple
  },
  'purple!': '#7630EA',
  'status-critical': {
    dark: _grommet.dark.hpe.color.icon.critical,
    light: _grommet.light.hpe.color.icon.critical
  },
  'status-warning': {
    dark: _grommet.dark.hpe.color.icon.warning,
    light: _grommet.light.hpe.color.icon.warning
  },
  'status-ok': {
    dark: _grommet.dark.hpe.color.icon.ok,
    light: _grommet.light.hpe.color.icon.ok
  },
  'status-unknown': {
    dark: _grommet.dark.hpe.color.icon.unknown,
    light: _grommet.light.hpe.color.icon.unknown
  },
  'validation-critical': {
    light: _grommet.light.hpe.color.background.critical,
    dark: _grommet.dark.hpe.color.background.critical
  },
  'validation-ok': {
    light: _grommet.light.hpe.color.background.ok,
    dark: _grommet.dark.hpe.color.background.ok
  },
  'validation-warning': {
    light: _grommet.light.hpe.color.background.warning,
    dark: _grommet.dark.hpe.color.background.warning
  },
  icon: {
    light: _grommet.light.hpe.color.icon["default"],
    dark: _grommet.dark.hpe.color.icon["default"]
  },
  'selected-background': 'background-selected-strong-enabled',
  'selected-text': 'text-onSelectedPrimaryStrong',
  placeholder: {
    light: _grommet.light.hpe.color.text.placeholder,
    dark: _grommet.dark.hpe.color.text.placeholder
  },
  // ---- DEPRECATED ---- //
  // Need to keep these deprecated keys (using undefined or aliases)
  // to avoid falling back to Grommet defaults
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
  'background-cta-alternate': 'background-contrast',
  'disabled-text': 'text-disabled',
  // In v10 change graph colors to undefined to avoid falling back to Grommet defaults
  'graph-0': {
    light: _grommet.light.hpe.color.dataVis['categorical-10'],
    dark: _grommet.dark.hpe.color.dataVis['categorical-10']
  },
  'graph-1': {
    light: _grommet.light.hpe.color.dataVis['categorical-20'],
    dark: _grommet.dark.hpe.color.dataVis['categorical-20']
  },
  'graph-2': {
    light: _grommet.light.hpe.color.dataVis['categorical-30'],
    dark: _grommet.dark.hpe.color.dataVis['categorical-30']
  },
  'graph-3': {
    light: _grommet.light.hpe.color.dataVis['categorical-40'],
    dark: _grommet.dark.hpe.color.dataVis['categorical-40']
  },
  'graph-4': {
    light: _grommet.light.hpe.color.dataVis['categorical-50'],
    dark: _grommet.dark.hpe.color.dataVis['categorical-50']
  },
  'graph-5': {
    light: _grommet.light.hpe.color.dataVis['categorical-60'],
    dark: _grommet.dark.hpe.color.dataVis['categorical-60']
  },
  'graph-6': {
    light: _grommet.light.hpe.color.dataVis['categorical-70'],
    dark: _grommet.dark.hpe.color.dataVis['categorical-70']
  },
  'graph-7': {
    light: _grommet.light.hpe.color.dataVis['categorical-80'],
    dark: _grommet.dark.hpe.color.dataVis['categorical-80']
  },
  'status-disabled': '#CCCCCC' // deprecated, does not support light and dark.hpe. use text-weak instead
  // -------------------- //
});