// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Grid, Text } from 'grommet';

const gridAreas = [
  ['blank', 'rest', 'hover', 'focus', 'active'],
  [
    'default-label',
    'default-rest',
    'default-hover',
    'default-focus',
    'default-active',
  ],
  ['error', 'error-rest', 'error-hover', 'error-focus', 'error-active'],
  [
    'disabled',
    'disabled-rest',
    'disabled-hover',
    'disabled-focus',
    'disabled-active',
  ],
  [
    'readonly',
    'readonly-rest',
    'readonly-hover',
    'readonly-focus',
    'readonly-active',
  ],
  [
    'selected',
    'selected-rest',
    'selected-hover',
    'selected-focus',
    'selected-active',
  ],
  [
    'indeterminate',
    'indeterminate-rest',
    'indeterminate-hover',
    'indeterminate-focus',
    'indeterminate-active',
  ],
  ['pinned', 'pinned-rest', 'pinned-hover', 'pinned-focus', 'pinned-active'],
];

const defaultApplicationStates = {
  default: true,
  error: true,
  disabled: true,
  readonly: true,
  selected: true,
  indeterminate: false,
  pinned: false,
};

const gridAreaForApplicationState = (state: string) =>
  state === 'default' ? 'default-label' : state;

export const StateMatrix = ({
  children,
  applicationStates = defaultApplicationStates,
  columnHeadings = true,
  ...rest
}: {
  children: React.ReactNode;
  applicationStates?: { [key: string]: boolean };
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
      {Object.keys(applicationStates).map(
        (state) =>
          applicationStates[state] && (
            <Text
              key={state}
              gridArea={gridAreaForApplicationState(state)}
              textAlign="end"
              weight="bold"
            >
              {state.charAt(0).toUpperCase() + state.slice(1)}
            </Text>
          ),
      )}
      {children}
    </Grid>
  );
};
