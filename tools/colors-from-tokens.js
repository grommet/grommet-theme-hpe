/* eslint-disable import/no-extraneous-dependencies */
import { light, dark, components } from 'hpe-design-tokens';
import fs from 'fs-extra';

const MISSING = {
  color: 'red',
};

const flattenObject = (obj, delimiter = '.', prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : '';
    if (
      typeof obj[k] === 'object' &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    )
      Object.assign(acc, flattenObject(obj[k], delimiter, pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

const access = (path, object) => path.split('.').reduce((o, i) => o[i], object);

const flatColors = flattenObject(light.hpe.color, '-');
const tokenColors = {};

Object.keys(flatColors).forEach((color) => {
  if (!color.includes('elevation')) {
    const adjustedColor = color.split('-').join('.');
    tokenColors[color] = {
      light: access(`hpe.color.${adjustedColor}`, light),
      dark: access(`hpe.color.${adjustedColor}`, dark),
    };
  }
});

const colors = {
  ...tokenColors,
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
  'active-text': MISSING.color,

  'background-cta-alternate': MISSING.color,

  // ----------- These colors are mapped manually for backwards compatibility ----------- //
  'active-background': {
    dark: dark.hpe.color.background.active,
    light: light.hpe.color.background.active,
  },
  background: {
    dark: dark.hpe.color.background.default,
    light: light.hpe.color.background.default,
  },
  'background-layer-overlay': {
    light: light.hpe.color.background.overlay,
    dark: dark.hpe.color.background.overlay,
  },
  'disabled-text': {
    light: light.hpe.color.text.disabled,
    dark: dark.hpe.color.text.disabled,
  }, // deprecated, use text-weak instead
  border: {
    dark: dark.hpe.color.border.default,
    light: light.hpe.color.border.default,
  },
  control: {
    light: light.hpe.color.background.primary.default,
    dark: dark.hpe.color.background.primary.default,
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
  'status-critical': {
    dark: dark.hpe.color.icon.status.critical,
    light: light.hpe.color.icon.status.critical,
  },
  'status-warning': {
    dark: dark.hpe.color.icon.status.warning,
    light: light.hpe.color.icon.status.warning,
  },
  'status-ok': {
    dark: dark.hpe.color.icon.status.ok,
    light: light.hpe.color.icon.status.ok,
  },
  'status-unknown': {
    dark: dark.hpe.color.icon.status.unknown,
    light: light.hpe.color.icon.status.unknown,
  },
  'status-disabled': '#CCCCCC', // deprecated, does not support light and dark. use text-weak instead
  text: {
    dark: dark.hpe.color.text.default,
    light: light.hpe.color.text.default,
  },
  'text-primary-button': components.hpe.button.primary.enabled.textColor,
  'validation-critical': {
    light: light.hpe.color.background.status.critical,
    dark: dark.hpe.color.background.status.critical,
  },
  'validation-ok': {
    light: light.hpe.color.background.status.ok,
    dark: dark.hpe.color.background.status.ok,
  },
  'validation-warning': {
    light: light.hpe.color.background.status.warning,
    dark: dark.hpe.color.background.status.critical,
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

const compileFileHeader = () => {
  let line = '/**\n';

  line += ' * Do not edit directly\n';
  line += ` * Generated on ${new Date().toUTCString()}\n`;
  line += ' */\n';

  return line;
};

fs.writeFileSync(
  './src/js/themes/colors.js',
  `${compileFileHeader()}\nexport const colors = ${JSON.stringify(colors, null, 2)};\n `,
);
