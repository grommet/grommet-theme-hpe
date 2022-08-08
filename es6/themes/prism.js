// Theme for code syntax highlighting
// Exported theme object is consumed by ReactSyntaxHighlighter + PrismJS
// https://github.com/react-syntax-highlighter/react-syntax-highlighter#prism
import { colors as hpeColors } from './colors';
var colors = {
  atrule: {
    dark: hpeColors.orange.light,
    light: hpeColors.orange.dark
  },
  'attr-name': {
    dark: hpeColors['teal!'],
    light: hpeColors.teal.dark
  },
  'attr-value': {
    dark: hpeColors.orange.light,
    light: hpeColors.orange.dark
  },
  background: {
    dark: 'black',
    light: hpeColors['background-contrast'].light
  },
  "boolean": {
    dark: hpeColors['teal!'],
    light: hpeColors.teal.dark
  },
  'class-name': {
    dark: hpeColors['status-critical'].light,
    light: hpeColors.red.dark
  },
  builtin: {
    dark: hpeColors['teal!'],
    light: hpeColors.teal.dark
  },
  "char": {
    dark: hpeColors['teal!'],
    light: hpeColors.teal.dark
  },
  code: hpeColors.text,
  comment: {
    dark: hpeColors.green.light,
    light: hpeColors.green.dark
  },
  entity: {
    dark: hpeColors.blue.light,
    light: hpeColors.blue.dark
  },
  "function": {
    dark: hpeColors['status-critical'].light,
    light: hpeColors.red.dark
  },
  important: {
    dark: hpeColors.orange.light,
    light: hpeColors.orange.dark
  },
  inserted: {
    dark: hpeColors['teal!'],
    light: hpeColors.teal.dark
  },
  keyword: {
    dark: hpeColors.blue.light,
    light: hpeColors.blue.dark
  },
  'maybe-class-name': {
    dark: hpeColors.purple.light,
    light: hpeColors['purple!']
  },
  number: {
    dark: hpeColors['teal!'],
    light: hpeColors.teal.dark
  },
  operator: {
    dark: hpeColors.orange.light,
    light: hpeColors.orange.dark
  },
  regex: {
    dark: hpeColors.orange.light,
    light: hpeColors.orange.dark
  },
  selector: {
    dark: hpeColors['teal!'],
    light: hpeColors.teal.dark
  },
  string: {
    dark: hpeColors['teal!'],
    light: hpeColors.teal.dark
  },
  url: {
    dark: hpeColors.blue.light,
    light: hpeColors.blue.dark
  },
  variable: {
    dark: hpeColors.blue.light,
    light: hpeColors.blue.dark
  },
  '.language-css .token.string': {
    dark: hpeColors.blue.light,
    light: hpeColors.blue.dark
  },
  '.style .token.string': {
    dark: hpeColors.blue.light,
    light: hpeColors.blue.dark
  }
}; // PrismJs + ReactSyntaxHighlighter implementation references:
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