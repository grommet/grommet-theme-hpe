// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import {
  Box,
  Button,
  CheckBox,
  CheckBoxGroup,
  DateInput,
  DateTimeInput,
  Form,
  FormField,
  Heading,
  RadioButtonGroup,
  RangeInput,
  Select,
  StarRating,
  TextArea,
  TextInput,
  ThumbsRating,
} from 'grommet';

const initialValue = {
  name: 'Theme Inspector',
  notes: 'Sample text for spacing and typography checks.',
  category: 'Option 1',
  choice: 'A',
  active: true,
  fruits: ['Apples'],
  date: '2026-01-15',
  range: 45,
};

const Template = () => (
  <Box pad="large" gap="medium">
    <Heading margin="none">Form Controls</Heading>
    <Form value={initialValue} onSubmit={() => {}}>
      <Box width="medium" gap="medium">
        <>
          <FormField name="name" label="Name" htmlFor="name-input">
            <TextInput id="name-input" name="name" />
          </FormField>
          <FormField name="notes" label="Notes" htmlFor="notes-input">
            <TextArea id="notes-input" name="notes" resize={false} />
          </FormField>
          <FormField name="category" label="Select" htmlFor="category-select">
            <Select
              id="category-select"
              name="category"
              options={['Option 1', 'Option 2', 'Option 3']}
            />
          </FormField>
          <FormField name="choice" label="Radio options" htmlFor="choice-group">
            <RadioButtonGroup
              id="choice-group"
              name="choice"
              options={['A', 'B', 'C']}
            />
          </FormField>
          <FormField name="fruits" label="CheckBoxGroup" htmlFor="fruits-group">
            <CheckBoxGroup
              id="fruits-group"
              name="fruits"
              options={['Apples', 'Bananas', 'Cherries']}
            />
          </FormField>
          <FormField name="date" label="Date input" htmlFor="date-input">
            <DateInput id="date-input" name="date" format="mm/dd/yyyy" />
          </FormField>
          <FormField name="range" label="Range input" htmlFor="range-input">
            <RangeInput
              id="range-input"
              name="range"
              min={0}
              max={100}
              step={1}
            />
          </FormField>
          <FormField
            htmlFor="appointment-date-time"
            label="Choose an appointment date and time"
            name="appointment"
            required
          >
            <DateTimeInput
              id="appointment-date-time"
              name="appointment"
              format="12"
            />
          </FormField>
          <FormField name="rating" label="Star rating" htmlFor="rating-input">
            <StarRating id="rating-input" name="rating" />
          </FormField>
          <FormField name="like" label="Thumbs rating" htmlFor="like-input">
            <ThumbsRating id="like-input" name="like" />
          </FormField>
          <FormField name="active">
            <CheckBox
              id="active-checkbox"
              name="active"
              label="I accept all terms"
            />
          </FormField>
        </>
        <Box direction="row" gap="small">
          <Button type="submit" label="Submit" kind="primary" />
          <Button type="reset" label="Reset" />
        </Box>
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
