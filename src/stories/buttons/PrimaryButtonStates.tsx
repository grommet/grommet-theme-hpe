// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, Button } from 'grommet';
import { ButtonStates } from './ButtonStates';
import { AIGenFill } from '@hpe-design/icons-grommet';

export const PrimaryButtonStates = () => {
  return (
    <Box gap="large">
      <ButtonStates>
        <Button
          gridArea="none-rest"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          className="pseudo-hover"
          gridArea="none-hover"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="none-focus"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="none-active"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
          active
        />
        <Button
          gridArea="disabled-rest"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-hover"
          gridArea="disabled-hover"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-focus"
          gridArea="disabled-focus"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          gridArea="disabled-active"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
      </ButtonStates>
      <ButtonStates columnHeadings={false}>
        <Button
          gridArea="none-rest"
          kind="primary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Primary"
        />
        <Button
          className="pseudo-hover"
          gridArea="none-hover"
          kind="primary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Primary"
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="none-focus"
          kind="primary"
          aria-label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="none-active"
          kind="primary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Primary"
          active
        />
        <Button
          gridArea="disabled-rest"
          kind="primary"
          aria-label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-hover"
          gridArea="disabled-hover"
          kind="primary"
          aria-label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-focus"
          gridArea="disabled-focus"
          kind="primary"
          aria-label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          gridArea="disabled-active"
          kind="primary"
          aria-label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
      </ButtonStates>
    </Box>
  );
};
