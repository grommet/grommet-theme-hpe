// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
// Theme for code syntax highlighting
// Exported theme object is consumed by ReactSyntaxHighlighter + PrismJS
// https://github.com/react-syntax-highlighter/react-syntax-highlighter#prism
import { primitives as localPrimitives, dark as localDark, light as localLight, components as localComponents } from 'hpe-design-tokens/grommet';
import { buildColors } from './colors';
var createPrismColors = function createPrismColors(tokens) {
  var primitives = tokens.primitives,
    dark = tokens.dark,
    light = tokens.light;
  var hpeColors = buildColors(tokens);
  return {
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
};

// PrismJs + ReactSyntaxHighlighter implementation references:
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/prism/a11y-dark.js
// Prism selectors: https://github.com/PrismJS/prism/blob/master/themes/prism.css
var themeMode = function themeMode(mode, prismColors) {
  return {
    'code[class*="language-"]': {
      color: prismColors.code[mode],
      background: 'none',
      fontFamily: "'Fira Mono', monospace",
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
      color: prismColors.code[mode],
      background: prismColors.background[mode],
      fontFamily: "'Fira Mono', monospace",
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
      background: prismColors.background[mode],
      padding: '0.1em',
      borderRadius: '0.3em',
      whiteSpace: 'normal'
    },
    'class-name': {
      color: prismColors['class-name'][mode]
    },
    'maybe-class-name': {
      color: prismColors['maybe-class-name'][mode]
    },
    comment: {
      color: prismColors.comment[mode]
    },
    "function": {
      color: prismColors["function"][mode]
    },
    operator: {
      color: prismColors.operator[mode]
    },
    string: {
      color: prismColors.string[mode]
    },
    "boolean": {
      color: prismColors["boolean"][mode]
    },
    number: {
      color: prismColors.number[mode]
    },
    keyword: {
      color: prismColors.keyword[mode]
    },
    selector: {
      color: prismColors.selector[mode]
    },
    'attr-name': {
      color: prismColors['attr-name'][mode]
    },
    "char": {
      color: prismColors["char"][mode]
    },
    builtin: {
      color: prismColors.builtin[mode]
    },
    inserted: {
      color: prismColors.inserted[mode]
    },
    entity: {
      color: prismColors.entity[mode],
      cursor: 'help'
    },
    url: {
      color: prismColors.url[mode]
    },
    '.language-css .token.string': {
      color: prismColors['.language-css .token.string'][mode]
    },
    '.style .token.string': {
      color: prismColors['.style .token.string'][mode]
    },
    variable: {
      color: prismColors.variable[mode]
    },
    atrule: {
      color: prismColors.atrule[mode]
    },
    'attr-value': {
      color: prismColors['attr-value'][mode]
    },
    regex: {
      color: prismColors.regex[mode]
    },
    important: {
      color: prismColors.important[mode],
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
export var buildPrism = function buildPrism(tokens) {
  var prismColors = createPrismColors(tokens);
  return {
    dark: themeMode('dark', prismColors),
    light: themeMode('light', prismColors)
  };
};
export var prism = buildPrism({
  primitives: localPrimitives,
  dark: localDark,
  light: localLight,
  components: localComponents
});