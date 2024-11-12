import { dark, light, components } from 'hpe-design-tokens';

const flattenObject = (obj, delimiter = '.', prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : '';
    if (
      typeof obj[k] === 'object' &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0 &&
      !('$value' in obj[k])
    )
      Object.assign(
        acc,
        flattenObject(
          obj[k],
          delimiter,
          !['hpe', 'color'].includes(k) ? pre + k : '',
        ),
      );
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

const access = (path, object) => path.split('.').reduce((o, i) => o[i], object);

const colorNames = flattenObject(light, '-');
const colorTokens = {};
Object.keys(colorNames).forEach((color) => {
  if (!color.includes('elevation')) {
    const adjustedColor = color.split('-').join('.');
    colorTokens[color] = {
      light: access(`hpe.color.${adjustedColor}`, light),
      dark: access(`hpe.color.${adjustedColor}`, dark),
    };
  }
});

const MISSING = {
  color: 'red',
  weight: 700,
};

export const colors = {
  // passing through all the colors from hpe-design-tokens
  ...colorTokens,
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
  brand: MISSING.color,
  control: MISSING.color,
  'active-text': MISSING.color,
  'disabled-text': MISSING.color, // deprecated, use text-weak instead

  'text-primary-button': components.hpe.button.primary.enabled.textColor,
  'background-cta-alternate': MISSING.color,

  // ----------- These ones we need to map manually for backwards compatibility -----------
  // ----------- with current color namespace ---------------
  'background-layer-overlay': {
    dark: dark.hpe.color.background.screenOverlay,
    light: light.hpe.color.background.screenOverlay,
  },
  'active-background': {
    dark: dark.hpe.color.background.active,
    light: light.hpe.color.background.active,
  },
  background: {
    dark: dark.hpe.color.background.default,
    light: light.hpe.color.background.default,
  },
  text: {
    dark: dark.hpe.color.text.default,
    light: light.hpe.color.text.default,
  },
  border: {
    dark: dark.hpe.color.border.default,
    light: light.hpe.color.border.default,
  },
  blue: {
    dark: dark.hpe.color.decorative.blue,
    light: light.hpe.color.decorative.blue,
  },
  'blue!': {
    dark: dark.hpe.color.decorative['blue!'],
    light: light.hpe.color.decorative['blue!'],
  },
  green: {
    dark: dark.hpe.color.decorative.green,
    light: light.hpe.color.decorative.green,
  },
  'green!': {
    dark: dark.hpe.color.decorative['green!'],
    light: light.hpe.color.decorative['green!'],
  },
  teal: {
    dark: dark.hpe.color.decorative.teal,
    light: light.hpe.color.decorative.teal,
  },
  'teal!': {
    dark: dark.hpe.color.decorative['teal!'],
    light: light.hpe.color.decorative['teal!'],
  },
  purple: {
    dark: dark.hpe.color.decorative.purple,
    light: light.hpe.color.decorative.purple,
  },
  'purple!': {
    dark: dark.hpe.color.decorative['purple!'],
    light: light.hpe.color.decorative['purple!'],
  },
  red: {
    dark: dark.hpe.color.decorative.red,
    light: light.hpe.color.decorative.red,
  },
  'red!': {
    dark: dark.hpe.color.decorative['red!'],
    light: light.hpe.color.decorative['red!'],
  },
  orange: {
    dark: dark.hpe.color.decorative.orange,
    light: light.hpe.color.decorative.orange,
  },
  'orange!': {
    dark: dark.hpe.color.decorative['orange!'],
    light: light.hpe.color.decorative['orange!'],
  },
  yellow: {
    dark: dark.hpe.color.decorative.yellow,
    light: light.hpe.color.decorative.yellow,
  },
  'yellow!': {
    dark: dark.hpe.color.decorative['yellow!'],
    light: light.hpe.color.decorative['yellow!'],
  },
  'graph-0': {
    light: light.hpe.color.dataVis.categorical[10],
    dark: dark.hpe.color.dataVis.categorical[10],
  },
  'graph-1': {
    light: light.hpe.color.dataVis.categorical[20],
    dark: dark.hpe.color.dataVis.categorical[20],
  },
  'graph-2': {
    light: light.hpe.color.dataVis.categorical[30],
    dark: dark.hpe.color.dataVis.categorical[30],
  },
  'graph-3': {
    light: light.hpe.color.dataVis.categorical[40],
    dark: dark.hpe.color.dataVis.categorical[40],
  },
  'graph-4': {
    light: light.hpe.color.dataVis.categorical[50],
    dark: dark.hpe.color.dataVis.categorical[50],
  },
  'graph-5': {
    light: light.hpe.color.dataVis.categorical[60],
    dark: dark.hpe.color.dataVis.categorical[60],
  },
  'graph-6': {
    light: light.hpe.color.dataVis.categorical[70],
    dark: dark.hpe.color.dataVis.categorical[70],
  },
  'status-critical': {
    dark: dark.hpe.color.icon.critical,
    light: light.hpe.color.icon.critical,
  },
  'status-warning': {
    dark: dark.hpe.color.icon.warning,
    light: light.hpe.color.icon.warning,
  },
  'status-ok': {
    dark: dark.hpe.color.icon.ok,
    light: light.hpe.color.icon.ok,
  },
  'status-unknown': {
    dark: dark.hpe.color.icon.unknown,
    light: light.hpe.color.icon.unknown,
  },
  'status-disabled': '#CCCCCC', // deprecated, does not support light and dark. use text-disabled instead
  'validation-critical': {
    light: light.hpe.color.background.critical,
    dark: dark.hpe.color.background.critical,
  },
  'validation-ok': {
    light: light.hpe.color.background.ok,
    dark: dark.hpe.color.background.ok,
  },
  'validation-warning': {
    light: light.hpe.color.background.warning,
    dark: dark.hpe.color.background.critical,
  },
  icon: {
    light: light.hpe.color.icon.default,
    dark: dark.hpe.color.icon.default,
  },
  'selected-background': 'background-selected-strong-enabled',
  'selected-text': 'text-onSelectedStrong',
  placeholder: {
    light: light.hpe.color.text.placeholder,
    dark: dark.hpe.color.text.placeholder,
  },
};
