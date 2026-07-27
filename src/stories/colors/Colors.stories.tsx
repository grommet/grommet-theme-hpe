import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { ThemeContext } from 'styled-components';
import { BackgroundColors } from './BackgroundColors';

type ThemeColors = Record<string, string | { light: string; dark: string }>;

const ColorSwatches = () => {
  const theme = React.useContext(ThemeContext) as
    | { global?: { colors?: ThemeColors } }
    | undefined;
  const globalColors = theme?.global?.colors ?? {};
  const palette = [
    'background',
    'background-front',
    'background-back',
    'text',
    'text-strong',
    'border',
    'brand',
    'focus',
    'status-ok',
    'status-warning',
    'status-critical',
  ];

  return (
    <Box gap="small">
      <Heading level={3} margin="none">
        Color Tokens
      </Heading>
      <Box direction="row" wrap gap="small">
        {palette.map((token) => (
          <Box key={token} width="small" round="xsmall" border>
            <Box
              background={token}
              height="48px"
              round={{ corner: 'top', size: 'xsmall' }}
            />
            <Box pad="xsmall">
              <Text size="xsmall">{token}</Text>
              <Text size="xsmall" color="text-weak">
                {typeof globalColors[token] === 'string'
                  ? globalColors[token]
                  : `${globalColors[token]?.light ?? ''} / ${globalColors[token]?.dark ?? ''}`}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const meta = {
  title: 'Theme/Colors',
};

export default meta;

export const Overview = {
  render: ColorSwatches,
};

export const Colors = {
  render: ColorSwatches,
};

export const Background = {
  render: BackgroundColors,
};
