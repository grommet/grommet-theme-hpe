import { tokens } from 'hpe-design-tokens';
export var colors = {
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
  brand: tokens['color.brand'],
  background: {
    dark: '#1C1C1C',
    light: tokens['color.background']
  },
  'background-back': {
    dark: '#1C1C1C',
    light: tokens['color.background.back']
  },
  'background-front': {
    dark: '#222222',
    light: tokens['color.background.front']
  },
  'background-contrast': {
    dark: '#FFFFFF0F',
    // 6%
    light: tokens['color.background.contrast']
  },
  'background-layer-overlay': '#00000080',
  icon: 'text',
  text: {
    dark: '#FFFFFFE6',
    // 90%
    light: tokens['color.text']
  },
  'text-strong': {
    dark: '#FFFFFFF5',
    // 96%
    light: tokens['color.text.strong']
  },
  'text-weak': {
    dark: '#FFFFFF80',
    // 50%
    light: tokens['color.text.weak']
  },
  'text-xweak': {
    dark: '#FFFFFF33',
    // 20%
    light: [tokens['color.text.xweak']]
  },
  border: {
    dark: '#FFFFFF5C',
    // 36%
    light: tokens['color.border'] // 36%
  },

  'border-strong': {
    dark: '#FFFFFFB8',
    // 72%
    light: tokens['color.border.strong'] // 72%
  },

  'border-weak': {
    dark: '#FFFFFF1F',
    // 12%
    light: tokens['color.border.weak'] // 12%
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
    dark: '#D04F4E',
    light: tokens['color.status.critical']
  },
  'status-warning': {
    dark: '#9B6310',
    light: tokens['color.status.warning']
  },
  'status-ok': {
    dark: '#008567',
    light: tokens['color.status.ok']
  },
  'status-unknown': {
    dark: '#555555',
    light: tokens['color.status.unknown']
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
    light: tokens['color.validation.critical'],
    dark: '#CC1F1A4D' // 30%
  },

  'validation-ok': {
    light: tokens['color.validation.ok'],
    dark: '#17D0A64D'
  },
  'validation-warning': {
    light: tokens['color.validation.warning'],
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