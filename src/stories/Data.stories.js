import React from 'react';
import { Box, DataTable, Heading, Meter, Text } from 'grommet';

const data = [
  { name: 'Apollo', status: 'ok', usage: 78, nodes: 12 },
  { name: 'Borealis', status: 'warning', usage: 56, nodes: 8 },
  { name: 'Cygnus', status: 'critical', usage: 91, nodes: 15 },
];

const columns = [
  { property: 'name', header: 'Cluster', primary: true },
  { property: 'status', header: 'Status' },
  {
    property: 'usage',
    header: 'Capacity',
    render: (datum) => (
      <Box direction="row" gap="small" align="center" width="small">
        <Meter values={[{ value: datum.usage }]} thickness="small" />
        <Text size="small">{datum.usage}%</Text>
      </Box>
    ),
  },
  { property: 'nodes', header: 'Nodes', align: 'end' },
];

const Template = () => (
  <Box pad="large" gap="medium">
    <Heading margin="none">Data Components</Heading>
    <Text size="small" color="text-weak">
      Validate table, meter, and data-focused token usage.
    </Text>

    <DataTable columns={columns} data={data} pin />
  </Box>
);

const meta = {
  title: 'Theme/Data',
  tags: ['autodocs'],
};

export default meta;

export const Overview = {
  render: Template,
};
