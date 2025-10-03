// Theme for code syntax highlighting
// Exported theme object is consumed by ReactSyntaxHighlighter + PrismJS
// https://github.com/react-syntax-highlighter/react-syntax-highlighter#prism
import { primitives, dark, light } from 'hpe-design-tokens/grommet';
import { colors as hpeColors } from './colors';
var colors = {
  atrule: {
    dark: primitives.hpe.base.color['fuschia-200'],
    light: primitives.hpe.base.color['fuschia-700']
  },
  'attr-name': {
    dark: primitives.hpe.base.color['plum-100'],
    light: primitives.hpe.base.color['plum-600']
  },
  'attr-value': {
    dark: primitives.hpe.base.color['fuschia-200'],
    light: primitives.hpe.base.color['fuschia-700']
  },
  background: {
    dark: 'black',
    light: hpeColors['background-contrast'].light
  },
  "boolean": {
    dark: primitives.hpe.base.color['plum-100'],
    light: primitives.hpe.base.color['plum-600']
  },
  'class-name': {
    dark: primitives.hpe.base.color['coral-200'],
    light: primitives.hpe.base.color['coral-500']
  },
  builtin: {
    dark: primitives.hpe.base.color['plum-100'],
    light: primitives.hpe.base.color['plum-600']
  },
  "char": {
    dark: primitives.hpe.base.color['plum-100'],
    light: primitives.hpe.base.color['plum-600']
  },
  code: {
    dark: dark.hpe.color.text["default"],
    light: light.hpe.color.text["default"]
  },
  comment: {
    dark: primitives.hpe.base.color['green-550'],
    light: primitives.hpe.base.color['green-800']
  },
  entity: {
    dark: primitives.hpe.base.color['blue-200'],
    light: primitives.hpe.base.color['blue-700']
  },
  "function": {
    dark: primitives.hpe.base.color['coral-200'],
    light: primitives.hpe.base.color['coral-500']
  },
  important: {
    dark: primitives.hpe.base.color['fuschia-200'],
    light: primitives.hpe.base.color['fuschia-700']
  },
  inserted: {
    dark: primitives.hpe.base.color['plum-100'],
    light: primitives.hpe.base.color['plum-600']
  },
  keyword: {
    dark: primitives.hpe.base.color['blue-200'],
    light: primitives.hpe.base.color['blue-700']
  },
  'maybe-class-name': {
    dark: primitives.hpe.base.color['purple-200'],
    light: primitives.hpe.base.color['purple-700']
  },
  number: {
    dark: primitives.hpe.base.color['plum-100'],
    light: primitives.hpe.base.color['plum-600']
  },
  operator: {
    dark: primitives.hpe.base.color['fuschia-200'],
    light: primitives.hpe.base.color['fuschia-700']
  },
  regex: {
    dark: primitives.hpe.base.color['fuschia-200'],
    light: primitives.hpe.base.color['fuschia-700']
  },
  selector: {
    dark: primitives.hpe.base.color['plum-100'],
    light: primitives.hpe.base.color['plum-600']
  },
  string: {
    dark: primitives.hpe.base.color['plum-100'],
    light: primitives.hpe.base.color['plum-600']
  },
  url: {
    dark: primitives.hpe.base.color['blue-200'],
    light: primitives.hpe.base.color['blue-700']
  },
  variable: {
    dark: primitives.hpe.base.color['blue-200'],
    light: primitives.hpe.base.color['blue-700']
  },
  '.language-css .token.string': {
    dark: primitives.hpe.base.color['blue-200'],
    light: primitives.hpe.base.color['blue-700']
  },
  '.style .token.string': {
    dark: primitives.hpe.base.color['blue-200'],
    light: primitives.hpe.base.color['blue-700']
  }
};

// PrismJs + ReactSyntaxHighlighter implementation references:
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/prism/a11y-dark.js
// Prism selectors: https://github.com/PrismJS/prism/blob/master/themes/prism.css
var themeMode = function themeMode(mode) {
  return {
    'code[class*="language-"]': {
      color: colors.code[mode],
      background: 'none',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none'
    },
    'pre[class*="language-"]': {
      color: colors.code[mode],
      background: colors.background[mode],
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
      padding: '1em',
      margin: '0',
      overflow: 'auto',
      borderRadius: '0.3em'
    },
    ':not(pre) > code[class*="language-"]': {
      background: colors.background[mode],
      padding: '0.1em',
      borderRadius: '0.3em',
      whiteSpace: 'normal'
    },
    'class-name': {
      color: colors['class-name'][mode]
    },
    'maybe-class-name': {
      color: colors['maybe-class-name'][mode]
    },
    comment: {
      color: colors.comment[mode]
    },
    "function": {
      color: colors["function"][mode]
    },
    operator: {
      color: colors.operator[mode]
    },
    string: {
      color: colors.string[mode]
    },
    "boolean": {
      color: colors["boolean"][mode]
    },
    number: {
      color: colors.number[mode]
    },
    keyword: {
      color: colors.keyword[mode]
    },
    selector: {
      color: colors.selector[mode]
    },
    'attr-name': {
      color: colors['attr-name'][mode]
    },
    "char": {
      color: colors["char"][mode]
    },
    builtin: {
      color: colors.builtin[mode]
    },
    inserted: {
      color: colors.inserted[mode]
    },
    entity: {
      color: colors.entity[mode],
      cursor: 'help'
    },
    url: {
      color: colors.url[mode]
    },
    '.language-css .token.string': {
      color: colors['.language-css .token.string'][mode]
    },
    '.style .token.string': {
      color: colors['.style .token.string'][mode]
    },
    variable: {
      color: colors.variable[mode]
    },
    atrule: {
      color: colors.atrule[mode]
    },
    'attr-value': {
      color: colors['attr-value'][mode]
    },
    regex: {
      color: colors.regex[mode]
    },
    important: {
      color: colors.important[mode],
      fontWeight: 'bold'
    },
    bold: {
      fontWeight: 'bold'
    },
    italic: {
      fontStyle: 'italic'
    }
  };
};
export var prism = {
  dark: themeMode('dark'),
  light: themeMode('light')
};