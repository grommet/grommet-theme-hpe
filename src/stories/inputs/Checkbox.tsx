import React from 'react';
import { Box, CheckBox, FormField } from 'grommet';
import {
  StateMatrix,
  type ApplicationState,
  type InteractiveState,
  type StateMatrixStateItem,
  applicationStateItems,
  interactiveStateItems,
} from './StateMatrix';

type CheckboxStoryProps = React.ComponentProps<typeof CheckBox> & {
  focus?: boolean;
  focusIndicator?: boolean;
};

const StoryCheckBox = CheckBox as React.FC<CheckboxStoryProps>;

type CheckboxRowItem = StateMatrixStateItem<ApplicationState>;
type CheckboxColumnItem = StateMatrixStateItem<InteractiveState>;

const renderCheckbox = (
  applicationState: CheckboxRowItem,
  interactiveState: CheckboxColumnItem,
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

  const checkbox = (
    <StoryCheckBox
      a11yTitle={`${applicationState.label} ${interactiveState.label}`}
      focus={interactiveState.state !== 'rest'}
      focusIndicator={interactiveState.state === 'focus'}
      label={undefined}
      {...checkboxProps}
    />
  );

  if (applicationState.state === 'error') {
    return (
      <FormField error="Error">
        <Box>{checkbox}</Box>
      </FormField>
    );
  }

  return checkbox;
};

export const CheckboxInput = () => (
  <StateMatrix
    rows={applicationStateItems}
    columns={interactiveStateItems}
    renderCell={renderCheckbox}
  />
);
