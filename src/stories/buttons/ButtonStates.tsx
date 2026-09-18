// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Grid, Text } from 'grommet';

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

const StateMatrix = ({
  children,
  columnHeadings = true,
  ...rest
}: {
  children: React.ReactNode;
  columnHeadings?: boolean;
  [key: string]: any;
}) => {
  return (
    <Grid
      gap={{ row: 'small', column: 'xsmall' }}
      areas={gridAreas}
      columns={['3xsmall', 'auto', 'auto', 'auto', 'auto']}
      rows={['auto']}
      align="center"
      justify="center"
      {...rest}
    >
      {columnHeadings && (
        <>
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
        </>
      )}
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

export const ButtonStates = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return <StateMatrix {...rest}>{children}</StateMatrix>;
};
