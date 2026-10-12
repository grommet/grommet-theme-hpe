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

export const ToolbarButtonStates = () => {
  return (
    <Box gap="large">
      <StateMatrix applicationStates={applicationStates}>
        <Button
          gridArea="default-rest"
          kind="toolbar"
          label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          className="pseudo-hover"
          gridArea="default-hover"
          kind="toolbar"
          label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="default-focus"
          kind="toolbar"
          label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="default-active"
          kind="toolbar"
          label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          active
        />
        <Button
          gridArea="disabled-rest"
          kind="toolbar"
          label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-hover"
          gridArea="disabled-hover"
          kind="toolbar"
          label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-focus"
          gridArea="disabled-focus"
          kind="toolbar"
          label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          gridArea="disabled-active"
          kind="toolbar"
          label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
      </StateMatrix>
      <StateMatrix applicationStates={applicationStates} columnHeadings={false}>
        <Button
          gridArea="default-rest"
          kind="toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Toolbar"
        />
        <Button
          className="pseudo-hover"
          gridArea="default-hover"
          kind="toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Toolbar"
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="default-focus"
          kind="toolbar"
          aria-label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="default-active"
          kind="toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Toolbar"
          active
        />
        <Button
          gridArea="disabled-rest"
          kind="toolbar"
          aria-label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-hover"
          gridArea="disabled-hover"
          kind="toolbar"
          aria-label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          className="pseudo-focus"
          gridArea="disabled-focus"
          kind="toolbar"
          aria-label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
        <Button
          gridArea="disabled-active"
          kind="toolbar"
          aria-label="Toolbar"
          icon={<AIGenFill aria-hidden="true" />}
          disabled
        />
      </StateMatrix>
    </Box>
  );
};
