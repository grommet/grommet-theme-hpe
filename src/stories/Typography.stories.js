// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Anchor, Box, Heading, Paragraph, Text } from 'grommet';

const Template = () => (
  <Box pad="large" gap="medium" width={{ max: '800px' }}>
    <Heading margin="none">Typography</Heading>
    <Text size="small" color="text-weak">
      Validate heading, text, paragraph, and anchor theme styles.
    </Text>

    <Box gap="small">
      <Heading level={1} margin="none">
        Heading level 1
      </Heading>
      <Heading level={2} margin="none">
        Heading level 2
      </Heading>
      <Heading level={3} margin="none">
        Heading level 3
      </Heading>
      <Heading level={4} margin="none">
        Heading level 4
      </Heading>
    </Box>

    <Box gap="xsmall">
      <Text size="small">Text small</Text>
      <Text size="medium">Text medium</Text>
      <Text size="large">Text large</Text>
      <Text weight="bold">Text bold</Text>
    </Box>

    <Paragraph margin="none">
      Paragraph body text should reflect the generated type scale, font family,
      and line height.
      <Anchor
        href="#"
        margin={{ left: 'xsmall' }}
        onClick={(event) => event.preventDefault()}
      >
        Link styles are themed too.
      </Anchor>
    </Paragraph>
  </Box>
);

const meta = {
  title: 'Theme/Typography',
  tags: ['autodocs'],
};

export default meta;

export const Overview = {
  render: Template,
};
