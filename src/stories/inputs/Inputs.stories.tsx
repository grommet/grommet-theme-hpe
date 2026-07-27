import React from 'react';
import { CheckboxInput } from './Checkbox';
import { Page, PageContent, PageHeader } from 'grommet';

const StoryWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <Page>
    <PageContent>
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
    <StoryWrapper title="Checkbox">
      <CheckboxInput />
    </StoryWrapper>
  ),
};
