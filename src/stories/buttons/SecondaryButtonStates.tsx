// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Button } from 'grommet';
import { ButtonStates } from './ButtonStates';

export const SecondaryButtonStates = () => {
  return (
    <ButtonStates>
      <Button gridArea="none-rest" kind="secondary" label="Secondary" />
      <Button
        className="pseudo-hover"
        gridArea="none-hover"
        kind="secondary"
        label="Secondary"
      />
      <Button
        className="pseudo-focus pseudo-focus-visible"
        gridArea="none-focus"
        kind="secondary"
        label="Secondary"
      />
      <Button
        gridArea="none-active"
        kind="secondary"
        label="Secondary"
        active
      />
      <Button
        gridArea="disabled-rest"
        kind="secondary"
        label="Secondary"
        disabled
      />
      <Button
        className="pseudo-hover"
        gridArea="disabled-hover"
        kind="secondary"
        label="Secondary"
        disabled
      />
      <Button
        className="pseudo-focus"
        gridArea="disabled-focus"
        kind="secondary"
        label="Secondary"
        disabled
      />
      <Button
        gridArea="disabled-active"
        kind="secondary"
        label="Secondary"
        disabled
      />
    </ButtonStates>
  );
};
