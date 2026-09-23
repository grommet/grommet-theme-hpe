// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Box, Form, FormField, Heading, Text, TimeInput } from 'grommet';

const Template = () => (
  <Box pad="large" gap="large" width={{ max: '500px' }}>
    <Heading margin="none">TimeInput</Heading>

    <Box gap="medium">
      <Text size="small" color="text-weak" weight="bold">
        12-hour format
      </Text>
      <Form>
        <FormField htmlFor="time-12h" label="Appointment time" name="time12h">
          <TimeInput id="time-12h" name="time12h" format="12" />
        </FormField>
      </Form>
    </Box>

    <Box gap="medium">
      <Text size="small" color="text-weak" weight="bold">
        24-hour format
      </Text>
      <Form>
        <FormField htmlFor="time-24h" label="Meeting time" name="time24h">
          <TimeInput id="time-24h" name="time24h" format="24" />
        </FormField>
      </Form>
    </Box>

    <Box gap="medium">
      <Text size="small" color="text-weak" weight="bold">
        With seconds
      </Text>
      <Form>
        <FormField htmlFor="time-seconds" label="Duration" name="timeSeconds">
          <TimeInput
            id="time-seconds"
            name="timeSeconds"
            format="24"
            showSeconds
          />
        </FormField>
      </Form>
    </Box>

    <Box gap="medium">
      <Text size="small" color="text-weak" weight="bold">
        Disabled
      </Text>
      <Form>
        <FormField htmlFor="time-disabled" label="Disabled" name="timeDisabled">
          <TimeInput
            id="time-disabled"
            name="timeDisabled"
            format="12"
            value="02:30 PM"
            disabled
          />
        </FormField>
      </Form>
    </Box>

    <Box gap="medium">
      <Text size="small" color="text-weak" weight="bold">
        Read only
      </Text>
      <Form>
        <FormField
          htmlFor="time-readonly"
          label="Read only"
          name="timeReadonly"
        >
          <TimeInput
            id="time-readonly"
            name="timeReadonly"
            format="12"
            value="09:00 AM"
            readOnly
          />
        </FormField>
      </Form>
    </Box>
  </Box>
);

const meta = {
  title: 'Theme/TimeInput',
  tags: ['autodocs'],
};

export default meta;

export const Overview = {
  render: Template,
};
