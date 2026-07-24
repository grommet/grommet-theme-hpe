import React from 'react';
import { Box, Heading, Paragraph, Text, ThemeContext } from 'grommet';

const ColorSwatches = () => {
  const theme = React.useContext(ThemeContext);
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
                {typeof theme.global.colors[token] === 'string'
                  ? theme.global.colors[token]
                  : `${theme.global.colors[token].light} / ${theme.global.colors[token].dark}`}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const SpacingScale = () => {
  const theme = React.useContext(ThemeContext);
  const sizes = [
    'hair',
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
  ];

  return (
    <Box gap="small">
      <Heading level={3} margin="none">
        Edge Size Scale
      </Heading>
      {sizes.map((size) => (
        <Box key={size} direction="row" gap="small" align="center">
          <Box width="120px">
            <Text size="small">{size}</Text>
          </Box>
          <Box
            background="border"
            height="10px"
            width={theme.global.edgeSize[size]}
            round="xsmall"
          />
          <Text size="xsmall" color="text-weak">
            {theme.global.edgeSize[size]}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

const Template = () => (
  <Box pad="large" gap="large">
    <Heading margin="none">HPE Theme Global Tokens</Heading>
    <Paragraph margin={{ top: 'none', bottom: 'small' }}>
      Visual check for generated colors, spacing, and global token behavior.
    </Paragraph>
    <ColorSwatches />
    <SpacingScale />
  </Box>
);

const meta = {
  title: 'Theme/Global Tokens',
  tags: ['autodocs'],
};

export default meta;

export const Overview = {
  render: Template,
};
