// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, Button } from 'grommet';
import { AIGenFill } from '@hpe-design/icons-grommet';
import { StateMatrix, type ApplicationStates } from '../shared/StateMatrix';

const applicationStates: ApplicationStates = {
  default: true,
  disabled: true,
};

export const SecondaryButtonStates = () => {
  return (
    <Box gap="large">
      <StateMatrix applicationStates={applicationStates}>
        <Button
          gridArea="default-rest"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
        />
        <Button
          className="pseudo-hover"
          gridArea="default-hover"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="default-focus"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
        />
        <Button
          gridArea="default-active"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
          active
        />
        <Button
          gridArea="disabled-rest"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
          disabled
        />
        <Button
          className="pseudo-hover"
          gridArea="disabled-hover"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
          disabled
        />
        <Button
          className="pseudo-focus"
          gridArea="disabled-focus"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
          disabled
        />
        <Button
          gridArea="disabled-active"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
          disabled
        />
      </StateMatrix>
      <StateMatrix applicationStates={applicationStates} columnHeadings={false}>
        <Button
          gridArea="default-rest"
          kind="secondary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Secondary"
        />
        <Button
          className="pseudo-hover"
          gridArea="default-hover"
          kind="secondary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Secondary"
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="default-focus"
          kind="secondary"
          aria-label="Secondary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="default-active"
          kind="secondary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Secondary"
          active
        />
        <Button
          gridArea="disabled-rest"
          kind="secondary"
          aria-label="Secondary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-hover"
          gridArea="disabled-hover"
          kind="secondary"
          aria-label="Secondary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-focus"
          gridArea="disabled-focus"
          kind="secondary"
          aria-label="Secondary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          gridArea="disabled-active"
          kind="secondary"
          aria-label="Secondary"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
      </StateMatrix>
    </Box>
  );
};
