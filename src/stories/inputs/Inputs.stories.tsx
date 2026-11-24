// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { CheckboxInput } from './Checkbox';
import { RadioButtonGroupInput } from './RadioButtonGroup';
import { TextInputMatrix } from './TextInput';
import { TextInputPassword as TextInputPasswordStory } from './TextInputPassword';
import { ToggleInput } from './Toggle';
import { Page, PageContent, PageHeader, type PageContentProps } from 'grommet';

const StoryWrapper = ({
  children,
  title,
  ...pageContentProps
}: {
  children: React.ReactNode;
  title: string;
} & Omit<PageContentProps, 'children'>) => (
  <Page>
    <PageContent {...pageContentProps}>
      <PageHeader title={title} />
      {children}
    </PageContent>
  </Page>
);

const meta = {
  title: 'Theme/Inputs',
};

export default meta;

export const Checkbox = {
  render: () => (
    <StoryWrapper title="Checkbox" background="background-back">
      <CheckboxInput />
    </StoryWrapper>
  ),
};

export const Toggle = {
  render: () => (
    <StoryWrapper title="Toggle" background="background-back">
      <ToggleInput />
    </StoryWrapper>
  ),
};

export const RadioButtonGroup = {
  render: () => (
    <StoryWrapper title="RadioButtonGroup" background="background-back">
      <RadioButtonGroupInput />
    </StoryWrapper>
  ),
};

export const TextInput = {
  render: () => (
    <StoryWrapper title="TextInput" background="background-back">
      <TextInputMatrix />
    </StoryWrapper>
  ),
};

export const TextInputPassword = {
  render: () => (
    <StoryWrapper title="TextInput w/ Password">
      <TextInputPasswordStory />
    </StoryWrapper>
  ),
};
