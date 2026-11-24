// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, FormField, Heading, RadioButtonGroup } from 'grommet';
import {
  StateMatrix,
  type ApplicationState,
  type InteractiveState,
  type StateMatrixStateItem,
  applicationStateItems,
  interactiveStateItems,
} from './StateMatrix';

type RadioButtonGroupOption = {
  disabled?: boolean;
  focus?: boolean;
  label: string;
  value: string;
};

type RadioButtonGroupStoryProps = React.ComponentProps<
  typeof RadioButtonGroup
> & {
  className?: string;
  options: RadioButtonGroupOption[];
};

const StoryRadioButtonGroup =
  RadioButtonGroup as React.FC<RadioButtonGroupStoryProps>;

type RadioButtonGroupRowItem = StateMatrixStateItem<ApplicationState>;
type RadioButtonGroupColumnItem = StateMatrixStateItem<InteractiveState>;

const baseOptions: RadioButtonGroupOption[] = [
  { label: 'Option A', value: 'option-a' },
  { label: 'Option B', value: 'option-b' },
];

const unsupportedStates: ApplicationState[] = [
  'indeterminate',
  'pinned',
  'readonly',
];

const renderRadioButtonGroup = (
  applicationState: RadioButtonGroupRowItem,
  interactiveState: RadioButtonGroupColumnItem,
  formField: boolean,
) => {
  if (interactiveState.state === 'active') {
    return null;
  }

  if (
    applicationState.state === 'disabled' &&
    interactiveState.state !== 'rest'
  ) {
    return null;
  }

  const disabled = applicationState.state === 'disabled';
  const id = `radio-group-${applicationState.key}-${interactiveState.key}${
    formField ? '-form-field' : ''
  }`;
  // Grommet draws the focus ring from React state, not a CSS pseudo-class.
  const options =
    interactiveState.state === 'focus'
      ? baseOptions.map((option, index) =>
          index === 0 ? { ...option, focus: true } : option,
        )
      : baseOptions;

  const group = (
    <StoryRadioButtonGroup
      aria-label={`${applicationState.label} ${interactiveState.label}`}
      // Group props are spread onto its container, so hover applies to every
      // option, showing both unselected and selected hover treatments.
      className={
        interactiveState.state === 'hover' ? 'pseudo-hover-all' : undefined
      }
      disabled={disabled}
      id={id}
      name={id}
      options={options}
      value={applicationState.state === 'selected' ? 'option-a' : ''}
    />
  );

  if (formField) {
    return (
      <Box width="xsmall">
        <FormField
          label="Label"
          disabled={disabled}
          error={applicationState.state === 'error' ? 'Error' : undefined}
          htmlFor={id}
        >
          {group}
        </FormField>
      </Box>
    );
  }

  return group;
};

type RadioButtonGroupMatrixProps = { formField?: boolean };

const RadioButtonGroupMatrix = ({
  formField = false,
}: RadioButtonGroupMatrixProps) => (
  <StateMatrix
    rows={applicationStateItems.filter(
      ({ state }) =>
        !unsupportedStates.includes(state) && (formField || state !== 'error'),
    )}
    columns={interactiveStateItems}
    renderCell={(row, column) => renderRadioButtonGroup(row, column, formField)}
  />
);

export const RadioButtonGroupInput = () => (
  <Box gap="large">
    <Heading level={2}>Standard</Heading>
    <RadioButtonGroupMatrix />
    <Heading level={2}>FormField</Heading>
    <RadioButtonGroupMatrix formField />
  </Box>
);
