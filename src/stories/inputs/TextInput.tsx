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
      aria-label={`${applicationState.label} ${interactiveState.label}`}
      disabled={applicationState.state === 'disabled'}
      focus={interactiveState.state !== 'rest'}
      focusIndicator={interactiveState.state === 'focus'}
      readOnly={applicationState.state === 'readonly'}
      value={applicationState.state === 'selected' ? 'Selected value' : ''}
    />
  );

  if (applicationState.state === 'error') {
    return <FormField error="Error">{input}</FormField>;
  }

  return input;
};

export const TextInputInput = () => (
  <StateMatrix
    rows={applicationStateItems}
    columns={interactiveStateItems}
    renderCell={renderTextInput}
  />
);
