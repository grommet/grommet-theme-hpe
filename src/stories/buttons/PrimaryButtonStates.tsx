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
    <Grid
      gap={{ row: 'small', column: 'xsmall' }}
      areas={gridAreas}
      align="center"
    >
      <Text gridArea="rest" textAlign="center" weight="bold">
        Rest
      </Text>
      <Text gridArea="hover" textAlign="center" weight="bold">
        Hover
      </Text>
      <Text gridArea="focus" textAlign="center" weight="bold">
        Focus
      </Text>
      <Text gridArea="active" textAlign="center" weight="bold">
        Active
      </Text>
      <Text gridArea="none" textAlign="end" weight="bold">
        None
      </Text>
      <Text gridArea="disabled" textAlign="end" weight="bold">
        Disabled
      </Text>
      {children}
    </Grid>
  );
};

export const PrimaryButtonStates = () => {
  return (
    <StateMatrix>
      <Button gridArea="none-rest" kind="primary" label="Primary" />
      <Button
        className="pseudo-hover"
        gridArea="none-hover"
        kind="primary"
        label="Primary"
      />
      <Button
        className="pseudo-focus pseudo-focus-visible"
        gridArea="none-focus"
        kind="primary"
        label="Primary"
      />
      <Button gridArea="none-active" kind="primary" label="Primary" active />
      <Button
        gridArea="disabled-rest"
        kind="primary"
        label="Primary"
        disabled
      />
      <Button
        className="pseudo-hover"
        gridArea="disabled-hover"
        kind="primary"
        label="Primary"
        disabled
      />
      <Button
        className="pseudo-focus"
        gridArea="disabled-focus"
        kind="primary"
        label="Primary"
        disabled
      />
      <Button
        gridArea="disabled-active"
        kind="primary"
        label="Primary"
        disabled
      />
    </StateMatrix>
  );
};
