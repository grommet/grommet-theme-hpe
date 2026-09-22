// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, FormField, Heading, TextInput, Text } from 'grommet';
import {
  StateMatrix,
  type ApplicationState,
  type ApplicationStates,
} from '../shared/StateMatrix';

const StoryTextInput = ({
  formField,
  gridArea,
  disabled,
  error,
  ...rest
}: {
  formField?: boolean;
  gridArea: string;
  disabled?: boolean;
  error?: string;
  [key: string]: any;
}) => {
  const id = `${gridArea}-password-input`;
  const input = <TextInput id={id} disabled={disabled} {...rest} />;

  return (
    <Box gridArea={gridArea} width="xsmall">
      {formField ? (
        <FormField disabled={disabled} error={error} htmlFor={id} label="Label">
          {input}
        </FormField>
      ) : (
        input
      )}
    </Box>
  );
};

type PasswordStateProps = {
  formField?: boolean;
};

const applicationStates: ApplicationStates = {
  default: true,
  disabled: true,
  readonly: true,
};

const formFieldApplicationStates: ApplicationStates = {
  ...applicationStates,
  error: true,
};

const interactiveStates: Record<string, boolean> = {
  rest: true,
  hover: true,
  focus: true,
  active: false,
};

// for each application state, determine non-applicable interactive states
const getNonApplicableStates = (states: ApplicationStates) => {
  const nonApplicableStates: Record<string, boolean> = {};

  (Object.keys(states) as ApplicationState[]).forEach((appState) => {
    Object.keys(interactiveStates).forEach((interactiveState: string) => {
      if (states[appState] && !interactiveStates[interactiveState]) {
        nonApplicableStates[`${appState}-${interactiveState}`] = true;
      }
    });
  });

  return nonApplicableStates;
};

const nonApplicableStates = getNonApplicableStates(applicationStates);
const formFieldNonApplicableStates = getNonApplicableStates(
  formFieldApplicationStates,
);

const DefaultStates = ({ formField }: PasswordStateProps) => {
  const [passwordNone, setPasswordNone] = React.useState('mySecret123!');

  return (
    <>
      <StoryTextInput
        formField={formField}
        gridArea="default-rest"
        placeholder="Type here"
        password
        value={passwordNone}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordNone(event.target.value)
        }
      />
      <StoryTextInput
        formField={formField}
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
        formField={formField}
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

const ErrorStates = ({ formField }: PasswordStateProps) => {
  const [passwordError, setPasswordError] = React.useState('mySecret123!');

  return (
    <>
      <StoryTextInput
        formField={formField}
        gridArea="error-rest"
        placeholder="Type here"
        password
        value={passwordError}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordError(event.target.value)
        }
        error="Error"
      />
      <StoryTextInput
        formField={formField}
        className="pseudo-hover"
        gridArea="error-hover"
        placeholder="Type here"
        password
        value={passwordError}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordError(event.target.value)
        }
        error="Error"
      />
      <StoryTextInput
        formField={formField}
        className="pseudo-focus pseudo-focus-visible"
        gridArea="error-focus"
        placeholder="Type here"
        password
        value={passwordError}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordError(event.target.value)
        }
        error="Error"
      />
    </>
  );
};

const DisabledStates = ({ formField }: PasswordStateProps) => {
  const [passwordDisabled, setPasswordDisabled] =
    React.useState('mySecret123!');

  return (
    <>
      <StoryTextInput
        formField={formField}
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
        formField={formField}
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
        formField={formField}
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

const ReadOnlyStates = ({ formField }: PasswordStateProps) => {
  const [passwordReadOnly, setPasswordReadOnly] =
    React.useState('mySecret123!');

  return (
    <>
      <StoryTextInput
        formField={formField}
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
        formField={formField}
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
        formField={formField}
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
      <>
        <Heading level={2}>FormField</Heading>
        <StateMatrix applicationStates={formFieldApplicationStates}>
          <DefaultStates formField />
          <ErrorStates formField />
          <DisabledStates formField />
          <ReadOnlyStates formField />
          {Object.keys(formFieldNonApplicableStates).map((state) => (
            <Text key={state} gridArea={state} aria-label="Not applicable">
              {'--'}
            </Text>
          ))}
        </StateMatrix>
      </>
    </Box>
  );
};
