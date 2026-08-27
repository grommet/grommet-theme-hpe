// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Grommet, Box } from 'grommet';
import {
  primitives,
  dark,
  light,
  dimension,
  small,
  global,
  components,
} from 'hpe-design-tokens/grommet';
import { buildTheme, hpe } from '../src/js/themes/hpe';
import {
  primitives as qaPrimitives,
  dark as qaDark,
  light as qaLight,
  dimension as qaDimension,
  small as qaSmall,
  global as qaGlobal,
  components as qaComponents,
} from '../.tmp/dist/grommet';

const tokens = {
  primitives,
  light,
  dark,
  small,
  large: dimension,
  global,
  components,
};

const storyThemes = {
  default: hpe,
  tokensQA: buildTheme(
    {
      primitives: qaPrimitives,
      light: qaLight,
      dark: qaDark,
      small: qaSmall,
      large: qaDimension,
      global: qaGlobal,
      components: qaComponents,
    },
    { 'v6-backwards-compatibility': false },
  ),
  v6Compatibility: buildTheme(tokens, { 'v6-backwards-compatibility': true }),
};

const withTheme = (Story, context) => {
  const theme =
    storyThemes[context.globals.themeVariant] || storyThemes.default;
  const themeMode = context.globals.colorMode || 'light';

  return (
    <Grommet full theme={theme} themeMode={themeMode}>
      <Box pad="medium" background="background">
        <Story />
      </Box>
    </Grommet>
  );
};

export const decorators = [withTheme];

export const globalTypes = {
  colorMode: {
    name: 'Color mode',
    description: 'Switch between light and dark theme modes',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
  themeVariant: {
    name: 'Theme variant',
    description: 'Switch generated theme variants',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'default', title: 'Default' },
        { value: 'tokensQA', title: 'Tokens QA' },
        { value: 'v6Compatibility', title: 'V6 compatibility' },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};
