"use strict";

exports.__esModule = true;
exports.prism = void 0;
var _grommet = require("hpe-design-tokens/grommet");
var _colors = require("./colors");
// Theme for code syntax highlighting
// Exported theme object is consumed by ReactSyntaxHighlighter + PrismJS
// https://github.com/react-syntax-highlighter/react-syntax-highlighter#prism

var colors = {
  atrule: {
    dark: _colors.colors.orange.light,
    light: _colors.colors.orange.dark
  },
  'attr-name': {
    dark: _colors.colors['teal!'],
    light: _colors.colors.teal.dark
  },
  'attr-value': {
    dark: _colors.colors.orange.light,
    light: _colors.colors.orange.dark
  },
  background: {
    dark: 'black',
    light: _colors.colors['background-contrast'].light
  },
  "boolean": {
    dark: _colors.colors['teal!'],
    light: _colors.colors.teal.dark
  },
  'class-name': {
    dark: _colors.colors['status-critical'].light,
    light: _colors.colors.red.dark
  },
  builtin: {
    dark: _colors.colors['teal!'],
    light: _colors.colors.teal.dark
  },
  "char": {
    dark: _colors.colors['teal!'],
    light: _colors.colors.teal.dark
  },
  code: _colors.colors.text,
  comment: {
    dark: _colors.colors.green.light,
    light: _grommet.primitives.hpe.base.color['green-800']
  },
  entity: {
    dark: _colors.colors.blue.light,
    light: _colors.colors.blue.dark
  },
  "function": {
    dark: _colors.colors['status-critical'].light,
    light: _colors.colors.red.dark
  },
  important: {
    dark: _colors.colors.orange.light,
    light: _colors.colors.orange.dark
  },
  inserted: {
    dark: _colors.colors['teal!'],
    light: _colors.colors.teal.dark
  },
  keyword: {
    dark: _colors.colors.blue.light,
    light: _colors.colors.blue.dark
  },
  'maybe-class-name': {
    dark: _colors.colors.purple.light,
    light: _colors.colors['purple!']
  },
  number: {
    dark: _colors.colors['teal!'],
    light: _colors.colors.teal.dark
  },
  operator: {
    dark: _colors.colors.orange.light,
    light: _colors.colors.orange.dark
  },
  regex: {
    dark: _colors.colors.orange.light,
    light: _colors.colors.orange.dark
  },
  selector: {
    dark: _colors.colors['teal!'],
    light: _colors.colors.teal.dark
  },
  string: {
    dark: _colors.colors['teal!'],
    light: _colors.colors.teal.dark
  },
  url: {
    dark: _colors.colors.blue.light,
    light: _colors.colors.blue.dark
  },
  variable: {
    dark: _colors.colors.blue.light,
    light: _colors.colors.blue.dark
  },
  '.language-css .token.string': {
    dark: _colors.colors.blue.light,
    light: _colors.colors.blue.dark
  },
  '.style .token.string': {
    dark: _colors.colors.blue.light,
    light: _colors.colors.blue.dark
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
var prism = exports.prism = {
  dark: themeMode('dark'),
  light: themeMode('light')
};