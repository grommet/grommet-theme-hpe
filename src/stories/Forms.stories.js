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
  FileInput,
  Form,
  FormField,
  Heading,
  MaskedInput,
  RadioButtonGroup,
  RangeInput,
  RangeSelector,
  Select,
  SelectMultiple,
  StarRating,
  TextArea,
  TextInput,
  ThumbsRating,
  TimeInput,
} from 'grommet';

const phoneMask = [
  { fixed: '(' },
  { length: 3, regexp: /^[0-9]{1,3}$/, placeholder: 'xxx' },
  { fixed: ') ' },
  { length: 3, regexp: /^[0-9]{1,3}$/, placeholder: 'xxx' },
  { fixed: '-' },
  { length: 4, regexp: /^[0-9]{1,4}$/, placeholder: 'xxxx' },
];

const initialValue = {
  name: 'Theme Inspector',
  notes: 'Sample text for spacing and typography checks.',
  category: 'Option 1',
  regions: ['North America'],
  phone: '',
  choice: 'A',
  active: true,
  fruits: ['Apples'],
  date: '2026-01-15',
  range: 45,
  priceRange: [20, 80],
  view: 'List',
  notifications: true,
};

const Template = () => {
  const [formValue, setFormValue] = React.useState(initialValue);
  const [error, setError] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return (
    <Box pad="large" gap="medium" background="background-back">
      <Heading margin="none">Form controls</Heading>
      <Box direction="row" gap="medium">
        <CheckBox
          toggle
          id="errorState"
          label="Error"
          onChange={({ target: { checked } }) =>
            setError(checked ? 'This field has an error' : '')
          }
        />
        <CheckBox
          toggle
          id="disabledState"
          label="Disabled"
          checked={disabled}
          onChange={({ target: { checked } }) => setDisabled(checked)}
        />
        <CheckBox
          toggle
          id="hoverState"
          label="Hover"
          checked={hover}
          onChange={({ target: { checked } }) => setHover(checked)}
        />
      </Box>
      <Form
        className={hover ? 'pseudo-hover-all' : undefined}
        value={formValue}
        onChange={({ value }) => setFormValue(value)}
        onSubmit={() => {}}
      >
        <Box width="medium" gap="medium">
          <>
            <FormField
              name="name"
              label="Name"
              htmlFor="name-input"
              error={error}
              disabled={disabled}
            >
              <TextInput id="name-input" name="name" disabled={disabled} />
            </FormField>
            <FormField
              name="notes"
              label="Notes"
              htmlFor="notes-input"
              error={error}
              disabled={disabled}
            >
              <TextArea
                id="notes-input"
                name="notes"
                resize={false}
                disabled={disabled}
              />
            </FormField>
            <FormField
              name="category"
              label="Select"
              htmlFor="category-select"
              error={error}
              disabled={disabled}
            >
              <Select
                id="category-select"
                name="category"
                disabled={disabled}
                options={['Option 1', 'Option 2', 'Option 3']}
              />
            </FormField>
            <FormField
              name="regions"
              label="Select multiple"
              htmlFor="regions-select"
              error={error}
              disabled={disabled}
            >
              <SelectMultiple
                id="regions-select"
                name="regions"
                disabled={disabled}
                options={['North America', 'South America', 'Europe', 'Asia']}
              />
            </FormField>
            <FormField
              name="phone"
              label="Masked input"
              htmlFor="phone-input"
              error={error}
              disabled={disabled}
            >
              <MaskedInput
                id="phone-input"
                name="phone"
                mask={phoneMask}
                disabled={disabled}
              />
            </FormField>
            <FormField
              name="choice"
              label="Radio options"
              htmlFor="choice-group"
              error={error}
              disabled={disabled}
            >
              <RadioButtonGroup
                id="choice-group"
                name="choice"
                disabled={disabled}
                options={['A', 'B', 'C']}
              />
            </FormField>
            <FormField
              name="fruits"
              label="CheckBoxGroup"
              htmlFor="fruits-group"
              error={error}
              disabled={disabled}
            >
              <CheckBoxGroup
                id="fruits-group"
                name="fruits"
                disabled={disabled}
                options={['Apples', 'Bananas', 'Cherries']}
              />
            </FormField>
            <FormField
              name="date"
              label="Date input"
              htmlFor="date-input"
              error={error}
              disabled={disabled}
            >
              <DateInput
                id="date-input"
                name="date"
                format="mm/dd/yyyy"
                disabled={disabled}
              />
            </FormField>
            <FormField
              name="range"
              label="Range input"
              htmlFor="range-input"
              error={error}
              disabled={disabled}
            >
              <RangeInput
                id="range-input"
                name="range"
                disabled={disabled}
                min={0}
                max={100}
                step={1}
              />
            </FormField>
            <FormField
              name="priceRange"
              label="Range selector"
              error={error}
              disabled={disabled}
            >
              {/* RangeSelector doesn't support a disabled state. */}
              <RangeSelector
                name="priceRange"
                label
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
              error={error}
              disabled={disabled}
            >
              <DateTimeInput
                id="appointment-date-time"
                name="appointment"
                disabled={disabled}
                format="12"
              />
            </FormField>
            <FormField
              name="time"
              label="Time input"
              htmlFor="time-input"
              error={error}
              disabled={disabled}
            >
              <TimeInput id="time-input" name="time" disabled={disabled} />
            </FormField>
            <FormField
              name="attachments"
              label="File input"
              htmlFor="attachments-input"
              error={error}
              disabled={disabled}
            >
              <FileInput
                id="attachments-input"
                name="attachments"
                multiple
                disabled={disabled}
              />
            </FormField>
            <FormField
              name="rating"
              label="Star rating"
              htmlFor="rating-input"
              error={error}
              disabled={disabled}
            >
              <StarRating id="rating-input" name="rating" disabled={disabled} />
            </FormField>
            <FormField
              name="like"
              label="Thumbs rating"
              htmlFor="like-input"
              error={error}
              disabled={disabled}
            >
              <ThumbsRating id="like-input" name="like" disabled={disabled} />
            </FormField>
            <FormField name="active" error={error} disabled={disabled}>
              <CheckBox
                id="active-checkbox"
                name="active"
                disabled={disabled}
                label="I accept all terms"
              />
            </FormField>
            <FormField name="notifications" error={error} disabled={disabled}>
              <CheckBox
                id="notifications-toggle"
                name="notifications"
                toggle
                disabled={disabled}
                label="Email notifications"
              />
            </FormField>
          </>
          <Box direction="row" gap="small">
            <Button
              type="submit"
              label="Submit"
              kind="primary"
              disabled={disabled}
            />
            <Button type="reset" label="Reset" disabled={disabled} />
          </Box>
        </Box>
      </Form>
    </Box>
  );
};

const meta = {
  title: 'Theme/Forms',
  tags: ['autodocs'],
};

export default meta;

export const Overview = {
  render: Template,
};
