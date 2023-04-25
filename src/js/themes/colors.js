import { tokens } from 'hpe-design-tokens';

export const colors = {
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
    dark: tokens['color.background.dark'],
    light: tokens['color.background.light'],
  },
  'background-back': {
    dark: tokens['color.background.back.dark'],
    light: tokens['color.background.back.light'],
  },
  'background-front': {
    dark: tokens['color.background.front.dark'],
    light: tokens['color.background.front.light'],
  },
  'background-contrast': {
    dark: tokens['color.background.contrast.dark'], // 6%
    light: tokens['color.background.contrast.light'],
  },
  'background-layer-overlay': tokens['color.background.layer.overlay'],
  icon: 'text',
  text: {
    dark: tokens['color.text.dark'], // 90%
    light: tokens['color.text.light'],
  },
  'text-strong': {
    dark: tokens['color.text.strong.dark'], // 96%
    light: tokens['color.text.strong.light'],
  },
  'text-weak': {
    dark: tokens['color.text.weak.dark'], // 50%
    light: tokens['color.text.weak.light'],
  },
  'text-xweak': {
    dark: tokens['color.text.xweak.dark'], // 20%
    light: tokens['color.text.xweak.light'],
  },
  border: {
    dark: tokens['color.border.dark'], // 36%
    light: tokens['color.border.light'], // 36%
  },
  'border-strong': {
    dark: tokens['color.border.strong.dark'], // 72%
    light: tokens['color.border.strong.light'], // 72%
  },
  'border-weak': {
    dark: tokens['color.border.weak.dark'], // 12%
    light: tokens['color.border.weak.light'], // 12%
  },
  control: 'brand',
  'active-background': 'background-contrast',
  'active-text': 'text',
  'disabled-text': 'text-weak', // deprecated, use text-weak instead
  'selected-background': 'green!',
  'selected-text': 'text-primary-button', // necessary to meet color contrast on HPE green background
  'status-critical': {
    dark: tokens['color.status.critical.dark'],
    light: tokens['color.status.critical.light'],
  },
  'status-warning': {
    dark: tokens['color.status.warning.dark'],
    light: tokens['color.status.warning.light'],
  },
  'status-ok': {
    dark: tokens['color.status.ok.dark'],
    light: tokens['color.status.ok.light'],
  },
  'status-unknown': {
    dark: tokens['color.status.unknown.dark'],
    light: tokens['color.status.unknown.light'],
  },
  'status-disabled': '#CCCCCC', // deprecated, does not support light and dark. use text-weak instead
  blue: {
    dark: '#00567A',
    light: '#00C8FF',
  },
  'blue!': '#00739D',
  green: {
    dark: '#008567',
    light: '#17EBA0',
  },
  'green!': '#01A982',
  teal: {
    dark: '#117B82',
    light: '#82FFF2',
  },
  'teal!': '#00E8CF',
  purple: {
    dark: '#6633BC',
    light: '#F740FF',
  },
  'purple!': '#7630EA',
  red: {
    dark: '#A2423D',
    light: '#FC6161',
  },
  'red!': '#C54E4B',
  orange: {
    dark: '#9B6310',
    light: '#FFBC44',
  },
  'orange!': '#FF8300',
  yellow: {
    dark: '#8D741C',
    light: '#FFEB59',
  },
  'yellow!': '#FEC901',
  'validation-critical': {
    light: tokens['color.validation.critical'],
    dark: '#CC1F1A4D', // 30%
  },
  'validation-ok': {
    light: tokens['color.validation.ok'],
    dark: '#17D0A64D',
  },
  'validation-warning': {
    light: tokens['color.validation.warning'],
    dark: '#D891284D',
  },
  'graph-0': 'orange!',
  'graph-1': 'blue!',
  'graph-2': 'purple!',
  'graph-3': 'yellow!',
  'graph-4': 'teal!',
  focus: 'teal!',
  placeholder: 'text-weak',
  'text-primary-button': '#FFFFFF',
  'background-cta-alternate': '#F2F2F2',
};
