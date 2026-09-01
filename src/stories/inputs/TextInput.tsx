// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { FormField, TextInput } from 'grommet';
import {
  StateMatrix,
  type ApplicationState,
  type InteractiveState,
  type StateMatrixStateItem,
  applicationStateItems,
  interactiveStateItems,
} from './StateMatrix';

type TextInputStoryProps = React.ComponentProps<typeof TextInput> & {
  focus?: boolean;
  focusIndicator?: boolean;
};

const StoryTextInput = TextInput as React.FC<TextInputStoryProps>;

type TextInputRowItem = StateMatrixStateItem<ApplicationState>;
type TextInputColumnItem = StateMatrixStateItem<InteractiveState>;

const renderTextInput = (
  applicationState: TextInputRowItem,
  interactiveState: TextInputColumnItem,
) => {
  if (
    interactiveState.state === 'active' ||
    applicationState.state === 'indeterminate' ||
    applicationState.state === 'pinned'
  ) {
    return null;
  }

  if (
    applicationState.state === 'disabled' &&
    interactiveState.state !== 'rest'
  ) {
    return null;
  }

  const input = (
    <StoryTextInput
      id={`${applicationState.state}-${interactiveState.state}`}
      disabled={applicationState.state === 'disabled'}
      readOnly={applicationState.state === 'readonly'}
      value={
        applicationState.state === 'selected'
          ? 'Selected value'
          : 'HPE Design System'
      }
    />
  );

  return (
    <FormField
      label="Label"
      htmlFor={`${applicationState.state}-${interactiveState.state}`}
      disabled={applicationState.state === 'disabled'}
      error={applicationState.state === 'error' ? 'Error' : undefined}
    >
      {input}
    </FormField>
  );
};

export const TextInputMatrix = () => (
  <StateMatrix
    rows={applicationStateItems}
    columns={interactiveStateItems}
    renderCell={renderTextInput}
  />
);
