// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, Text } from 'grommet';
import { User } from '@hpe-design/icons-grommet';

type ColorValue = string | { light: string; dark: string };

type ColorSwatchProps = {
  token: string;
  color: ColorValue;
};

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  token,
  color,
  ...rest
}) => {
  const STATUSES = ['critical', 'warning', 'ok', 'info', 'unknown'];

  const colorParts = token.split('-');
  const isStrong =
    colorParts.includes('strong') || colorParts.includes('xstrong');
  const isPrimary = colorParts.includes('primary');
  const isSelected = colorParts.includes('selected');
  const status = STATUSES.find((s) => colorParts.includes(s));

  // Most specific match wins: selected+primary > primary > plain strong/xstrong > status.
  let onSuffix;
  if (isSelected && isPrimary && colorParts.includes('strong')) {
    onSuffix = 'SelectedPrimaryStrong';
  } else if (isPrimary && isStrong) {
    onSuffix = 'PrimaryStrong';
  } else if (isStrong) {
    onSuffix = 'Strong';
  } else if (status) {
    onSuffix = status.charAt(0).toUpperCase() + status.slice(1);
  }

  const textColor = onSuffix ? `text-on${onSuffix}` : undefined;
  // status icons use icon-{status}, not icon-on{Status}
  const iconColor = status
    ? `icon-${status}`
    : onSuffix
      ? `icon-on${onSuffix}`
      : undefined;

  return (
    <Box direction="row" gap="small" align="center" {...rest}>
      <Box
        background={token}
        border={{ color: 'border-weak' }}
        width="4xsmall"
        height="4xsmall"
        round="small"
        align="center"
        justify="center"
      >
        <User color={iconColor} />
        <Text color={textColor} size="xlarge" weight="bold">
          Aa
        </Text>
      </Box>
      <Box>
        <Text color="text-strong">{token}</Text>
        <Text color="text-weak" size="small">
          {typeof color === 'string' ? color : `${color.light} / ${color.dark}`}
        </Text>
        <Text color="text-weak" size="small">
          {textColor || 'default'} / {iconColor || 'default'}
        </Text>
      </Box>
    </Box>
  );
};
