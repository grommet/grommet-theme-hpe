// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, Heading, TextInput, Text } from 'grommet';
import {
  StateMatrix,
  type ApplicationState,
  type ApplicationStates,
} from '../shared/StateMatrix';

const StoryTextInput = ({
  gridArea,
  ...rest
}: {
  gridArea: string;
  [key: string]: any;
}) => {
  return (
    <Box gridArea={gridArea} width="xsmall">
      <TextInput {...rest} />
    </Box>
  );
};

const applicationStates: ApplicationStates = {
  default: true,
  disabled: true,
  readonly: true,
};

const interactiveStates: Record<string, boolean> = {
  rest: true,
  hover: true,
  focus: true,
  active: false,
};

const nonApplicableStates: Record<string, boolean> = {};

// for each application state, determine non-applicable interactive states
(Object.keys(applicationStates) as ApplicationState[]).forEach((appState) => {
  Object.keys(interactiveStates).forEach((interactiveState: string) => {
    if (applicationStates[appState] && !interactiveStates[interactiveState]) {
      nonApplicableStates[`${appState}-${interactiveState}`] = true;
    }
  });
});

const DefaultStates = () => {
  const [passwordNone, setPasswordNone] = React.useState('mySecret123!');

  return (
    <>
      <StoryTextInput
        gridArea="default-rest"
        placeholder="Type here"
        password
        value={passwordNone}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordNone(event.target.value)
        }
      />
      <StoryTextInput
        className="pseudo-hover"
        gridArea="default-hover"
        placeholder="Type here"
        password
        value={passwordNone}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordNone(event.target.value)
        }
      />
      <StoryTextInput
        className="pseudo-focus pseudo-focus-visible"
        gridArea="default-focus"
        placeholder="Type here"
        password
        value={passwordNone}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordNone(event.target.value)
        }
      />
    </>
  );
};

const DisabledStates = () => {
  const [passwordDisabled, setPasswordDisabled] =
    React.useState('mySecret123!');

  return (
    <>
      <StoryTextInput
        gridArea="disabled-rest"
        placeholder="Type here"
        password
        value={passwordDisabled}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordDisabled(event.target.value)
        }
        disabled
      />
      <StoryTextInput
        className="pseudo-hover"
        gridArea="disabled-hover"
        placeholder="Type here"
        password
        value={passwordDisabled}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordDisabled(event.target.value)
        }
        disabled
      />
      <StoryTextInput
        className="pseudo-focus pseudo-focus-visible"
        gridArea="disabled-focus"
        placeholder="Type here"
        password
        value={passwordDisabled}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordDisabled(event.target.value)
        }
        disabled
      />
    </>
  );
};

const ReadOnlyStates = () => {
  const [passwordReadOnly, setPasswordReadOnly] =
    React.useState('mySecret123!');

  return (
    <>
      <StoryTextInput
        gridArea="readonly-rest"
        placeholder="Type here"
        password
        value={passwordReadOnly}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordReadOnly(event.target.value)
        }
        readOnly
      />
      <StoryTextInput
        className="pseudo-hover"
        gridArea="readonly-hover"
        placeholder="Type here"
        password
        value={passwordReadOnly}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordReadOnly(event.target.value)
        }
        readOnly
      />
      <StoryTextInput
        className="pseudo-focus pseudo-focus-visible"
        gridArea="readonly-focus"
        placeholder="Type here"
        password
        value={passwordReadOnly}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordReadOnly(event.target.value)
        }
        readOnly
      />
    </>
  );
};

export const TextInputPassword = () => {
  return (
    <Box gap="large">
      <>
        <Heading level={2}>Standard</Heading>
        <Heading level={3}>Hidden</Heading>
        <StateMatrix applicationStates={applicationStates}>
          <DefaultStates />
          <DisabledStates />
          <ReadOnlyStates />
          {Object.keys(nonApplicableStates).map((state) => (
            <Text key={state} gridArea={state} aria-label="Not applicable">
              {'--'}
            </Text>
          ))}
        </StateMatrix>
      </>
    </Box>
  );
};
