// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import {
  Box,
  CheckBox,
  CheckBoxGroup,
  DateInput,
  DateTimeInput,
  FileInput,
  MaskedInput,
  RadioButton,
  RadioButtonGroup,
  RangeInput,
  RangeSelector,
  Select,
  SelectMultiple,
  StarRating,
  Text,
  TextArea,
  TextInput,
  ThumbsRating,
  TimeInput,
  ToggleGroup,
} from 'grommet';

const phoneMask = [
  { fixed: '(' },
  { length: 3, regexp: /^[0-9]{1,3}$/, placeholder: 'xxx' },
  { fixed: ') ' },
  { length: 3, regexp: /^[0-9]{1,3}$/, placeholder: 'xxx' },
  { fixed: '-' },
  { length: 4, regexp: /^[0-9]{1,4}$/, placeholder: 'xxxx' },
];

const InputExample = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <Box gap="xsmall">
    <Text>{label}</Text>
    {children}
  </Box>
);

export const AllInputs = () => {
  const [disabled, setDisabled] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [radioChecked, setRadioChecked] = React.useState(false);
  const [range, setRange] = React.useState(45);

  return (
    <Box gap="medium">
      <Box direction="row" gap="medium">
        <CheckBox
          toggle
          label="Disabled"
          checked={disabled}
          onChange={({ target: { checked } }) => setDisabled(checked)}
        />
        <CheckBox
          toggle
          label="Hover"
          checked={hover}
          onChange={({ target: { checked } }) => setHover(checked)}
        />
      </Box>
      <Box
        width="medium"
        gap="medium"
        className={hover ? 'pseudo-hover-all' : undefined}
      >
        <InputExample label="Text input">
          <TextInput
            aria-label="Text input"
            defaultValue="Theme Inspector"
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="Password">
          <TextInput
            aria-label="Password"
            password
            placeholder="Type here"
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="Text area">
          <TextArea
            aria-label="Text area"
            defaultValue="Sample text for spacing and typography checks."
            resize={false}
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="Select">
          <Select
            aria-label="Select"
            defaultValue="Option 1"
            disabled={disabled}
            options={['Option 1', 'Option 2', 'Option 3']}
          />
        </InputExample>
        <InputExample label="Select multiple">
          <SelectMultiple
            aria-label="Select multiple"
            defaultValue={['North America']}
            disabled={disabled}
            options={['North America', 'South America', 'Europe', 'Asia']}
          />
        </InputExample>
        <InputExample label="Masked input">
          <MaskedInput
            aria-label="Masked input"
            mask={phoneMask}
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="Radio button">
          <RadioButton
            name="standalone-radio"
            label="Choose me"
            checked={radioChecked}
            onChange={() => setRadioChecked(true)}
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="Radio button group">
          <RadioButtonGroup
            aria-label="Radio button group"
            name="standalone-choice"
            defaultValue="A"
            disabled={disabled}
            options={['A', 'B', 'C']}
          />
        </InputExample>
        <InputExample label="Toggle group">
          <ToggleGroup
            aria-label="Toggle group"
            defaultValue="Option 1"
            options={['Option 1', 'Option 2', 'Option 3']}
          />
        </InputExample>
        <InputExample label="CheckBox group">
          <CheckBoxGroup
            aria-label="CheckBox group"
            defaultValue={['Apples']}
            disabled={disabled}
            options={['Apples', 'Bananas', 'Cherries']}
          />
        </InputExample>
        <InputExample label="Date input">
          <DateInput
            aria-label="Date input"
            defaultValue="2026-01-15"
            format="mm/dd/yyyy"
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="Range input">
          <RangeInput
            aria-label="Range input"
            value={range}
            onChange={(event) => setRange(Number(event.target.value))}
            disabled={disabled}
            min={0}
            max={100}
            step={1}
          />
        </InputExample>
        <InputExample label="Range selector">
          <RangeSelector
            defaultValues={[20, 80]}
            label
            min={0}
            max={100}
            step={1}
          />
          <Text size="small">RangeSelector does not support disabled.</Text>
        </InputExample>
        <InputExample label="Date and time input">
          <DateTimeInput
            messages={{ inputLabel: 'Date and time input' }}
            disabled={disabled}
            format="12"
          />
        </InputExample>
        <InputExample label="Time input">
          <TimeInput
            messages={{ inputLabel: 'Time input' }}
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="File input">
          <FileInput aria-label="File input" multiple disabled={disabled} />
        </InputExample>
        <InputExample label="Star rating">
          <StarRating
            aria-label="Star rating"
            name="standalone-rating"
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="Thumbs rating">
          <ThumbsRating
            aria-label="Thumbs rating"
            name="standalone-like"
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="CheckBox">
          <CheckBox
            label="I accept all terms"
            defaultChecked
            disabled={disabled}
          />
        </InputExample>
        <InputExample label="Toggle">
          <CheckBox
            toggle
            label="Email notifications"
            defaultChecked
            disabled={disabled}
          />
        </InputExample>
      </Box>
    </Box>
  );
};
