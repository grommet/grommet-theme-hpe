// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import {
  Box,
  Button,
  CheckBox,
  DateInput,
  Form,
  FormField,
  Heading,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
  TextInput,
} from 'grommet';

const initialValue = {
  name: 'Theme Inspector',
  notes: 'Sample text for spacing and typography checks.',
  category: 'Option 1',
  choice: 'A',
  active: true,
  date: '2026-01-15',
  range: 45,
};

const Template = () => (
  <Box pad="large" gap="medium" width={{ max: '700px' }}>
    <Heading margin="none">Form Controls</Heading>

    <Form value={initialValue} onSubmit={() => {}}>
      <FormField name="name" label="Name">
        <TextInput name="name" />
      </FormField>

      <FormField name="notes" label="Notes">
        <TextArea name="notes" resize={false} />
      </FormField>

      <FormField name="category" label="Select">
        <Select
          name="category"
          options={['Option 1', 'Option 2', 'Option 3']}
        />
      </FormField>

      <FormField name="choice" label="Radio options">
        <RadioButtonGroup name="choice" options={['A', 'B', 'C']} />
      </FormField>

      <FormField name="active" label="CheckBox">
        <CheckBox name="active" label="Enabled" />
      </FormField>

      <FormField name="date" label="Date input">
        <DateInput name="date" format="mm/dd/yyyy" />
      </FormField>

      <FormField name="range" label="Range input">
        <RangeInput name="range" min={0} max={100} step={1} />
      </FormField>

      <Box direction="row" gap="small" margin={{ top: 'small' }}>
        <Button type="submit" label="Submit" kind="primary" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  </Box>
);

const meta = {
  title: 'Theme/Forms',
  tags: ['autodocs'],
};

export default meta;

export const Overview = {
  render: Template,
};
