import React from 'react';
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  List,
  Menu,
  Paragraph,
  Tab,
  Tabs,
  Text,
} from 'grommet';

const listData = [
  { name: 'Design token updates', owner: 'UI Platform' },
  { name: 'Form field cleanup', owner: 'Core UX' },
  { name: 'Data table states', owner: 'Cloud Console' },
];

const Template = () => (
  <Box pad="large" gap="large">
    <Heading margin="none">Navigation and Content</Heading>

    <Box gap="medium">
      <Heading level={3} margin="none">
        Navigation
      </Heading>
      <Box direction="row" gap="medium" align="center">
        <Menu
          label="Actions"
          items={[{ label: 'Create' }, { label: 'Edit' }, { label: 'Archive' }]}
        />
        <Anchor href="#" onClick={(event) => event.preventDefault()}>
          Quick link
        </Anchor>
      </Box>

      <Tabs>
        <Tab title="Overview">
          <Box pad="medium">
            <Text>Overview tab content</Text>
          </Box>
        </Tab>
        <Tab title="Details">
          <Box pad="medium">
            <Text>Details tab content</Text>
          </Box>
        </Tab>
      </Tabs>

      <Accordion>
        <AccordionPanel label="Section one">
          <Box pad="medium">
            <Text>Accordion content one</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Section two">
          <Box pad="medium">
            <Text>Accordion content two</Text>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>

    <Box gap="medium">
      <Heading level={3} margin="none">
        Content
      </Heading>

      <Box direction="row-responsive" gap="medium">
        <Card width="medium">
          <CardBody pad="medium" gap="small">
            <Avatar background="brand">TH</Avatar>
            <Heading level={4} margin="none">
              Theme card example
            </Heading>
            <Paragraph margin="none">
              Card spacing, typography, and border styles should align with the
              generated theme.
            </Paragraph>
          </CardBody>
          <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Text size="small" color="text-weak">
              Last updated: today
            </Text>
          </CardFooter>
        </Card>

        <Box width="medium" border round="small" pad="small">
          <List data={listData} primaryKey="name" secondaryKey="owner" />
        </Box>
      </Box>
    </Box>
  </Box>
);

const meta = {
  title: 'Theme/Navigation and Content',
  tags: ['autodocs'],
};

export default meta;

export const Overview = {
  render: Template,
};
