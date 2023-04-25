"use strict";

exports.__esModule = true;
exports.colors = void 0;
var _hpeDesignTokens = require("hpe-design-tokens");
var colors = {
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
  brand: _hpeDesignTokens.tokens['color.brand'],
  background: {
    dark: _hpeDesignTokens.tokens['color.background.dark'],
    light: _hpeDesignTokens.tokens['color.background.light']
  },
  'background-back': {
    dark: _hpeDesignTokens.tokens['color.background.back.dark'],
    light: _hpeDesignTokens.tokens['color.background.back.light']
  },
  'background-front': {
    dark: _hpeDesignTokens.tokens['color.background.front.dark'],
    light: _hpeDesignTokens.tokens['color.background.front.light']
  },
  'background-contrast': {
    dark: _hpeDesignTokens.tokens['color.background.contrast.dark'],
    // 6%
    light: _hpeDesignTokens.tokens['color.background.contrast.light']
  },
  'background-layer-overlay': _hpeDesignTokens.tokens['color.background.layer.overlay'],
  icon: 'text',
  text: {
    dark: _hpeDesignTokens.tokens['color.text.dark'],
    // 90%
    light: _hpeDesignTokens.tokens['color.text.light']
  },
  'text-strong': {
    dark: _hpeDesignTokens.tokens['color.text.strong.dark'],
    // 96%
    light: _hpeDesignTokens.tokens['color.text.strong.light']
  },
  'text-weak': {
    dark: _hpeDesignTokens.tokens['color.text.weak.dark'],
    // 50%
    light: _hpeDesignTokens.tokens['color.text.weak.light']
  },
  'text-xweak': {
    dark: _hpeDesignTokens.tokens['color.text.xweak.dark'],
    // 20%
    light: _hpeDesignTokens.tokens['color.text.xweak.light']
  },
  border: {
    dark: _hpeDesignTokens.tokens['color.border.dark'],
    // 36%
    light: _hpeDesignTokens.tokens['color.border.light'] // 36%
  },

  'border-strong': {
    dark: _hpeDesignTokens.tokens['color.border.strong.dark'],
    // 72%
    light: _hpeDesignTokens.tokens['color.border.strong.light'] // 72%
  },

  'border-weak': {
    dark: _hpeDesignTokens.tokens['color.border.weak.dark'],
    // 12%
    light: _hpeDesignTokens.tokens['color.border.weak.light'] // 12%
  },

  control: 'brand',
  'active-background': 'background-contrast',
  'active-text': 'text',
  'disabled-text': 'text-weak',
  // deprecated, use text-weak instead
  'selected-background': 'green!',
  'selected-text': 'text-primary-button',
  // necessary to meet color contrast on HPE green background
  'status-critical': {
    dark: _hpeDesignTokens.tokens['color.status.critical.dark'],
    light: _hpeDesignTokens.tokens['color.status.critical.light']
  },
  'status-warning': {
    dark: _hpeDesignTokens.tokens['color.status.warning.dark'],
    light: _hpeDesignTokens.tokens['color.status.warning.light']
  },
  'status-ok': {
    dark: _hpeDesignTokens.tokens['color.status.ok.dark'],
    light: _hpeDesignTokens.tokens['color.status.ok.light']
  },
  'status-unknown': {
    dark: _hpeDesignTokens.tokens['color.status.unknown.dark'],
    light: _hpeDesignTokens.tokens['color.status.unknown.light']
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
    light: _hpeDesignTokens.tokens['color.validation.critical'],
    dark: '#CC1F1A4D' // 30%
  },

  'validation-ok': {
    light: _hpeDesignTokens.tokens['color.validation.ok'],
    dark: '#17D0A64D'
  },
  'validation-warning': {
    light: _hpeDesignTokens.tokens['color.validation.warning'],
    dark: '#D891284D'
  },
  'graph-0': 'orange!',
  'graph-1': 'blue!',
  'graph-2': 'purple!',
  'graph-3': 'yellow!',
  'graph-4': 'teal!',
  focus: 'teal!',
  placeholder: 'text-weak',
  'text-primary-button': '#FFFFFF',
  'background-cta-alternate': '#F2F2F2'
};
exports.colors = colors;