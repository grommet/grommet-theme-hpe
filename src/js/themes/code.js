import { colors } from './colors';

const codeColors = {
  atrule: { dark: colors.orange.light, light: colors.orange.dark },
  'attr-name': { dark: colors['teal!'], light: colors.teal.dark },
  'attr-value': { dark: colors.orange.light, light: colors.orange.dark },
  background: {
    dark: 'black',
    light: colors['background-contrast'].light,
  },
  boolean: { dark: colors['teal!'], light: colors.teal.dark },
  'class-name': {
    dark: colors['status-critical'].light,
    light: colors.red.dark,
  },
  builtin: {
    dark: colors['teal!'],
    light: colors.teal.dark,
  },
  char: { dark: colors['teal!'], light: colors.teal.dark },
  code: colors.text,
  comment: colors['status-unknown'],
  entity: { dark: colors.blue.light, light: colors.blue.dark },
  function: { dark: colors['status-critical'].light, light: colors.red.dark },
  important: { dark: colors.orange.light, light: colors.orange.dark },
  inserted: { dark: colors['teal!'], light: colors.teal.dark },
  keyword: { dark: colors.blue.light, light: colors.blue.dark },
  'maybe-class-name': { dark: colors.purple.light, light: colors['purple!'] },
  number: { dark: colors['teal!'], light: colors.teal.dark },
  operator: { dark: colors.orange.light, light: colors.orange.dark },
  regex: { dark: colors.orange.light, light: colors.orange.dark },
  selector: { dark: colors['teal!'], light: colors.teal.dark },
  string: { dark: colors['teal!'], light: colors.teal.dark },
  url: { dark: colors.blue.light, light: colors.blue.dark },
  variable: { dark: colors.blue.light, light: colors.blue.dark },
  '.language-css .token.string': {
    dark: colors.blue.light,
    light: colors.blue.dark,
  },
  '.style .token.string': {
    dark: colors.blue.light,
    light: colors.blue.dark,
  },
};

const themeMode = (mode) => ({
  'code[class*="language-"]': {
    color: codeColors.code[mode],
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
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: codeColors.code[mode],
    background: codeColors.background[mode],
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
    margin: '0.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
  },
  ':not(pre) > code[class*="language-"]': {
    background: codeColors.background[mode],
    padding: '0.1em',
    borderRadius: '0.3em',
    whiteSpace: 'normal',
  },
  'class-name': {
    color: codeColors['class-name'][mode],
  },
  'maybe-class-name': {
    color: codeColors['maybe-class-name'][mode],
  },
  comment: {
    color: codeColors.comment[mode],
  },
  function: {
    color: codeColors.function[mode],
  },
  operator: {
    color: codeColors.operator[mode],
  },
  string: {
    color: codeColors.string[mode],
  },
  boolean: {
    color: codeColors.boolean[mode],
  },
  number: {
    color: codeColors.number[mode],
  },
  keyword: {
    color: codeColors.keyword[mode],
  },
  selector: {
    color: codeColors.selector[mode],
  },
  'attr-name': {
    color: codeColors['attr-name'][mode],
  },
  char: {
    color: codeColors.char[mode],
  },
  builtin: {
    color: codeColors.builtin[mode],
  },
  inserted: {
    color: codeColors.inserted[mode],
  },
  entity: {
    color: codeColors.entity[mode],
    cursor: 'help',
  },
  url: {
    color: codeColors.url[mode],
  },
  '.language-css .token.string': {
    color: codeColors['.language-css .token.string'][mode],
  },
  '.style .token.string': {
    color: codeColors['.style .token.string'][mode],
  },
  variable: {
    color: codeColors.variable[mode],
  },
  atrule: {
    color: codeColors.atrule[mode],
  },
  'attr-value': {
    color: codeColors['attr-value'][mode],
  },
  regex: {
    color: codeColors.regex[mode],
  },
  important: {
    color: codeColors.important[mode],
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});

export const code = {
  dark: themeMode('dark'),
  light: themeMode('light'),
};
