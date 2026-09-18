// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Button, Grid, Text } from 'grommet';

const gridAreas = [
  ['blank', 'rest', 'hover', 'focus', 'active'],
  ['none', 'none-rest', 'none-hover', 'none-focus', 'none-active'],
  [
    'disabled',
    'disabled-rest',
    'disabled-hover',
    'disabled-focus',
    'disabled-active',
  ],
];

const StateMatrix = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid gap="small" areas={gridAreas}>
      <Text gridArea="rest">Rest</Text>
      <Text gridArea="hover">Hover</Text>
      <Text gridArea="focus">Focus</Text>
      <Text gridArea="active">Active</Text>
      <Text gridArea="none">None</Text>
      <Text gridArea="disabled">Disabled</Text>
      {children}
    </Grid>
  );
};

export const PrimaryButtonStates = () => {
  return (
    <StateMatrix>
      <Button gridArea="none-rest" kind="primary" label="Primary" />
      <Button gridArea="none-hover" kind="primary" label="Primary" />
      <Button
        gridArea="none-focus"
        kind="primary"
        label="Primary"
        focusIndicator
      />
      <Button gridArea="none-active" kind="primary" label="Primary" active />
      <Button
        gridArea="disabled-rest"
        kind="primary"
        label="Primary"
        disabled
      />
    </StateMatrix>
  );
};
