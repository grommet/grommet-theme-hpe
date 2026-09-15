// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { FormField, RadioButtonGroup } from 'grommet';
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
  focusIndicator?: boolean;
  label: string;
  value: string;
};

type RadioButtonGroupStoryProps = React.ComponentProps<
  typeof RadioButtonGroup
> & {
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

const applyInteractiveState = (
  options: RadioButtonGroupOption[],
  interactiveState: InteractiveState,
) => {
  if (interactiveState === 'rest') {
    return options;
  }

  if (interactiveState === 'active') {
    return null;
  }

  return options.map((option, index) => {
    if (index !== 0) {
      return option;
    }

    return {
      ...option,
      focus: true,
      focusIndicator: interactiveState === 'focus',
    };
  });
};

const renderRadioButtonGroup = (
  applicationState: RadioButtonGroupRowItem,
  interactiveState: RadioButtonGroupColumnItem,
) => {
  if (
    applicationState.state === 'pinned' ||
    applicationState.state === 'indeterminate' ||
    applicationState.state === 'readonly'
  ) {
    return null;
  }

  if (
    applicationState.state === 'disabled' &&
    interactiveState.state !== 'rest'
  ) {
    return null;
  }

  const options = applyInteractiveState(baseOptions, interactiveState.state);
  if (!options) {
    return null;
  }

  const group = (
    <StoryRadioButtonGroup
      aria-label={`${applicationState.label} ${interactiveState.label}`}
      disabled={applicationState.state === 'disabled'}
      name={`radio-group-${applicationState.key}-${interactiveState.key}`}
      options={options}
      value={applicationState.state === 'selected' ? 'option-a' : ''}
    />
  );

  if (applicationState.state === 'error') {
    return <FormField error="Error">{group}</FormField>;
  }

  return group;
};

export const RadioButtonGroupInput = () => (
  <StateMatrix
    rows={applicationStateItems}
    columns={interactiveStateItems}
    renderCell={renderRadioButtonGroup}
  />
);
