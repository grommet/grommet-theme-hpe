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

export const DefaultButtonStates = () => {
  return (
    <Box gap="large">
      <StateMatrix applicationStates={applicationStates}>
        <Button
          gridArea="default-rest"
          kind="default"
          label="Default"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          className="pseudo-hover"
          gridArea="default-hover"
          kind="default"
          label="Default"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="default-focus"
          kind="default"
          label="Default"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="default-active"
          kind="default"
          label="Default"
          icon={<AIGenFill aria-hidden="true" />}
          active
        />
        <Button
          gridArea="disabled-rest"
          kind="default"
          label="Default"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-hover"
          gridArea="disabled-hover"
          kind="default"
          label="Default"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-focus"
          gridArea="disabled-focus"
          kind="default"
          label="Default"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          gridArea="disabled-active"
          kind="default"
          label="Default"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
      </StateMatrix>
      <StateMatrix applicationStates={applicationStates} columnHeadings={false}>
        <Button
          gridArea="default-rest"
          kind="default"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Default"
        />
        <Button
          className="pseudo-hover"
          gridArea="default-hover"
          kind="default"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Default"
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="default-focus"
          kind="default"
          aria-label="Default"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="default-active"
          kind="default"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Default"
          active
        />
        <Button
          gridArea="disabled-rest"
          kind="default"
          aria-label="Default"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-hover"
          gridArea="disabled-hover"
          kind="default"
          aria-label="Default"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-focus"
          gridArea="disabled-focus"
          kind="default"
          aria-label="Default"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          gridArea="disabled-active"
          kind="default"
          aria-label="Default"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
      </StateMatrix>
    </Box>
  );
};
