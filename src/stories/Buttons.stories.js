// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, Button, Heading, Text } from 'grommet';

const ButtonRow = ({ label, kind }) => (
  <Box direction="row" wrap gap="small" align="center">
    <Box width="150px">
      <Text size="small">{label}</Text>
    </Box>
    <Button label="Default" kind={kind} onClick={() => {}} />
    <Button
      label="With icon"
      kind={kind}
      icon={<span>+</span>}
      onClick={() => {}}
    />
    <Button label="Disabled" kind={kind} disabled />
  </Box>
);

const Template = () => (
  <Box pad="large" gap="medium">
    <Heading margin="none">Button Variants</Heading>
    <Text size="small" color="text-weak">
      Validate button kind, size, and disabled styling.
    </Text>

    <ButtonRow label="Default kind" />
    <ButtonRow label="Primary" kind="primary" />
    <ButtonRow label="Secondary" kind="secondary" />

    <Box direction="row" gap="small" align="center">
      <Text size="small" width="150px">
        Sizes
      </Text>
      <Button label="Small" size="small" onClick={() => {}} />
      <Button label="Medium" size="medium" onClick={() => {}} />
      <Button label="Large" size="large" onClick={() => {}} />
    </Box>
  </Box>
);

const meta = {
  title: 'Theme/Buttons',
  tags: ['autodocs'],
};

export default meta;

export const Overview = {
  render: Template,
};
