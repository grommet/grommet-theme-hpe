// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, Button } from 'grommet';
import { AIGenFill } from '@hpe-design/icons-grommet';
import { StateMatrix } from '../shared/StateMatrix';

const applicationStates = {
  default: true,
  disabled: true,
};

export const PrimaryButtonStates = () => {
  return (
    <Box gap="large">
      <StateMatrix applicationStates={applicationStates}>
        <Button
          gridArea="default-rest"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          className="pseudo-hover"
          gridArea="default-hover"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="default-focus"
          kind="primary"
          label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="default-active"
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
      </StateMatrix>
      <StateMatrix applicationStates={applicationStates} columnHeadings={false}>
        <Button
          gridArea="default-rest"
          kind="primary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Primary"
        />
        <Button
          className="pseudo-hover"
          gridArea="default-hover"
          kind="primary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Primary"
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="default-focus"
          kind="primary"
          aria-label="Primary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="default-active"
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
      </StateMatrix>
    </Box>
  );
};
