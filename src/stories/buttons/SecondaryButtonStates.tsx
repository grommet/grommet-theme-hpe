// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, Button } from 'grommet';
import { ButtonStates } from './ButtonStates';
import { AIGenFill } from '@hpe-design/icons-grommet';

export const SecondaryButtonStates = () => {
  return (
    <Box gap="large">
      <ButtonStates>
        <Button
          gridArea="none-rest"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
        />
        <Button
          className="pseudo-hover"
          gridArea="none-hover"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="none-focus"
          kind="secondary"
          label="Secondary"
          icon={<AIGenFill />}
        />
        <Button
          gridArea="none-active"
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
      </ButtonStates>
      <ButtonStates columnHeadings={false}>
        <Button
          gridArea="none-rest"
          kind="secondary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Secondary"
        />
        <Button
          className="pseudo-hover"
          gridArea="none-hover"
          kind="secondary"
          icon={<AIGenFill aria-hidden="true" />}
          aria-label="Secondary"
        />
        <Button
          className="pseudo-focus pseudo-focus-visible"
          gridArea="none-focus"
          kind="secondary"
          aria-label="Secondary"
          icon={<AIGenFill aria-hidden="true" />}
        />
        <Button
          gridArea="none-active"
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
      </ButtonStates>
    </Box>
  );
};
