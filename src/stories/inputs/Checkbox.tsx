// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, CheckBox, FormField, Heading } from 'grommet';
import {
  StateMatrix,
  type ApplicationState,
  type InteractiveState,
  type StateMatrixStateItem,
  applicationStateItems,
  interactiveStateItems,
} from './StateMatrix';

type CheckboxStoryProps = React.ComponentProps<typeof CheckBox> & {
  containerProps?: React.ComponentPropsWithoutRef<'label'>;
  focus?: boolean;
};

const StoryCheckBox = CheckBox as React.FC<CheckboxStoryProps>;

type CheckboxRowItem = StateMatrixStateItem<ApplicationState>;
type CheckboxColumnItem = StateMatrixStateItem<InteractiveState>;

const renderCheckbox = (
  applicationState: CheckboxRowItem,
  interactiveState: CheckboxColumnItem,
  formField: boolean,
  toggle: boolean,
) => {
  if (interactiveState.state === 'active') {
    return null;
  }

  if (
    applicationState.state === 'pinned' ||
    (applicationState.state === 'disabled' && interactiveState.state !== 'rest')
  ) {
    return null;
  }

  const checkboxProps = {
    checked: applicationState.state === 'selected',
    disabled: applicationState.state === 'disabled',
    indeterminate: applicationState.state === 'indeterminate',
    readOnly: applicationState.state === 'readonly',
  };
  const id = formField
    ? `form-field-${applicationState.key}-${interactiveState.key}-${toggle ? 'toggle' : 'checkbox'}`
    : undefined;

  const checkbox = (
    <StoryCheckBox
      aria-label={`${applicationState.label} ${interactiveState.label}`}
      containerProps={
        interactiveState.state === 'hover'
          ? { className: 'pseudo-hover pseudo-hover-all' }
          : undefined
      }
      // Grommet draws the focus ring from React state, not a CSS pseudo-class.
      focus={interactiveState.state === 'focus'}
      id={id}
      label={toggle ? 'Toggle me' : 'Check me'}
      toggle={toggle}
      {...checkboxProps}
    />
  );

  if (formField) {
    return (
      <Box width="xsmall">
        <FormField
          label="Label"
          disabled={checkboxProps.disabled}
          error={applicationState.state === 'error' ? 'Error' : undefined}
          htmlFor={id}
        >
          {checkbox}
        </FormField>
      </Box>
    );
  }

  return checkbox;
};

type CheckboxMatrixProps = { formField?: boolean; toggle?: boolean };

const CheckboxMatrix = ({
  formField = false,
  toggle = false,
}: CheckboxMatrixProps) => (
  <StateMatrix
    rows={applicationStateItems.filter(
      ({ state }) =>
        (formField || state !== 'error') &&
        (!toggle || state !== 'indeterminate'),
    )}
    columns={interactiveStateItems}
    renderCell={(row, column) => renderCheckbox(row, column, formField, toggle)}
  />
);

export const CheckboxInput = ({
  toggle,
}: Pick<CheckboxMatrixProps, 'toggle'>) => (
  <Box gap="large">
    <Heading level={2}>Standard</Heading>
    <CheckboxMatrix toggle={toggle} />
    <Heading level={2}>FormField</Heading>
    <CheckboxMatrix formField toggle={toggle} />
  </Box>
);
