import React from 'react';
import { Box, Text } from 'grommet';

type ColorValue = string | { light: string; dark: string };

type ColorSwatchProps = {
  token: string;
  color: ColorValue;
};

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  token,
  color,
  ...rest
}) => (
  <Box direction="row" gap="small" align="center" {...rest}>
    <Box
      background={token}
      border={{ color: 'border-weak' }}
      width="4xsmall"
      height="4xsmall"
      round="small"
    />
    <Box>
      <Text color="text-strong">{token}</Text>
      <Text color="text-weak" size="small">
        {typeof color === 'string' ? color : `${color.light} / ${color.dark}`}
      </Text>
    </Box>
  </Box>
);
