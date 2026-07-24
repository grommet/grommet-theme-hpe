import React from 'react';
import { Grommet, Box } from 'grommet';
import {
  primitives as localPrimitives,
  dark as localDark,
  light as localLight,
  dimension as localDimension,
  small as localSmall,
  global as localGlobal,
  components as localComponents,
} from 'hpe-design-tokens/grommet';
import { buildTheme, hpe } from '../src/js/themes/hpe';

const tokens = {
  primitives: localPrimitives,
  light: localLight,
  dark: localDark,
  small: localSmall,
  large: localDimension,
  global: localGlobal,
  components: localComponents,
};

const storyThemes = {
  default: hpe,
  compatibility: buildTheme(tokens, { 'v6-backwards-compatibility': true }),
};

const withTheme = (Story, context) => {
  const theme =
    storyThemes[context.globals.themeVariant] || storyThemes.default;

  return (
    <Grommet full theme={theme}>
      <Box pad="medium" background="background">
        <Story />
      </Box>
    </Grommet>
  );
};

export const decorators = [withTheme];

export const globalTypes = {
  themeVariant: {
    name: 'Theme variant',
    description: 'Switch generated theme variants',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'default', title: 'Default' },
        { value: 'compatibility', title: 'V6 compatibility' },
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
