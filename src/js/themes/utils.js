// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import { css } from 'styled-components';

const baseSpacing = 24;

const isObject = (item) =>
  !!item && typeof item === 'object' && !Array.isArray(item);

const deepFreeze = (obj) => {
  Object.keys(obj).forEach(
    (key) => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

const componentSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
const buttonKinds = ['default', 'secondary', 'primary', 'toolbar'];
const buttonStates = ['hover', 'active', 'disabled'];

const textSizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  '3xlarge',
  '4xlarge',
  '5xlarge',
  '6xlarge',
];

const headingLevelToSize = {
  1: 'xlarge',
  2: 'large',
  3: 'medium',
  4: 'small',
  5: 'xsmall',
  6: 'xxsmall',
};

const breakpointStyle = (global, content, responsive) => {
  const breakpoint = global.hpe.breakpoint.small;
  const st =
    responsive === 'container'
      ? css`
          @container ${breakpoint && `(max-width: ${breakpoint})`} {
            ${content}
          }
        `
      : css`
          @media only screen ${breakpoint && `and (max-width: ${breakpoint})`} {
            ${content}
          }
        `;
  return st.join('');
};

const getHeadingSize = (breakpointTokens, size, level) => {
  const fallbackSize = headingLevelToSize[level || 1];
  const resolvedSize =
    size && breakpointTokens.hpe.heading[size] ? size : fallbackSize;
  return breakpointTokens.hpe.heading[resolvedSize];
};

const getThemeColor = (color, theme) =>
  typeof theme.global.colors[color] === 'string'
    ? theme.global.colors[color]
    : theme.global.colors[color]?.[theme.dark ? 'dark' : 'light'] || color;

const getTokenValue = (path, tokenSet) =>
  path.split('.').reduce((object, key) => object?.[key], tokenSet);

const getTokenColorPair = (path, tokens) => ({
  dark: getTokenValue(`hpe.${path}`, tokens.dark),
  light: getTokenValue(`hpe.${path}`, tokens.light),
});

const getTextSize = (size) => {
  if (size === '3xlarge') return '3xl';
  if (size === '4xlarge') return '4xl';
  if (size === '5xlarge') return '5xl';
  if (size === '6xlarge') return '6xl';
  return size;
};

export {
  baseSpacing,
  isObject,
  deepFreeze,
  componentSizes,
  buttonKinds,
  buttonStates,
  textSizes,
  headingLevelToSize,
  breakpointStyle,
  getHeadingSize,
  getThemeColor,
  getTokenColorPair,
  getTextSize,
};
