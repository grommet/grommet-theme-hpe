import React from 'react';
import { Box, Grid, Text } from 'grommet';

export type StateMatrixItem = {
  key: string;
  label: React.ReactNode;
};

export type StateMatrixStateItem<StateType extends string> = StateMatrixItem & {
  state: StateType;
};

export type InteractiveState = 'rest' | 'hover' | 'focus' | 'active';
export type ApplicationState =
  | 'none'
  | 'error'
  | 'disabled'
  | 'readonly'
  | 'selected'
  | 'indeterminate'
  | 'pinned';

export const interactiveStateItems: StateMatrixStateItem<InteractiveState>[] = [
  { key: 'rest', label: 'Rest', state: 'rest' },
  { key: 'hover', label: 'Hover', state: 'hover' },
  { key: 'focus', label: 'Focus', state: 'focus' },
  { key: 'active', label: 'Active', state: 'active' },
];

export const applicationStateItems: StateMatrixStateItem<ApplicationState>[] = [
  { key: 'none', label: 'None', state: 'none' },
  { key: 'error', label: 'Error', state: 'error' },
  { key: 'disabled', label: 'Disabled', state: 'disabled' },
  { key: 'readonly', label: 'Readonly', state: 'readonly' },
  { key: 'selected', label: 'Selected', state: 'selected' },
  { key: 'indeterminate', label: 'Indeterminate', state: 'indeterminate' },
  { key: 'pinned', label: 'Pinned', state: 'pinned' },
];

type StateMatrixProps<
  RowType extends StateMatrixItem,
  ColumnType extends StateMatrixItem,
> = {
  rows: RowType[];
  columns: ColumnType[];
  renderCell: (row: RowType, column: ColumnType) => React.ReactNode;
  fallback?: React.ReactNode;
  rowLabelWidth?: string;
  cellWidth?: string | [string, string];
};

export function StateMatrix<
  RowType extends StateMatrixItem,
  ColumnType extends StateMatrixItem,
>({
  rows,
  columns,
  renderCell,
  fallback = '--',
  rowLabelWidth = 'max-content',
  cellWidth = ['3xsmall', 'min-content'],
}: StateMatrixProps<RowType, ColumnType>) {
  return (
    <Grid
      columns={[
        rowLabelWidth,
        ...columns.map(() =>
          Array.isArray(cellWidth) ? cellWidth[0] : cellWidth,
        ),
      ]}
    >
      {/* This empty box is for the top-left corner of the grid, where the row and column headers meet. */}
      <Box border={{ color: 'border-weak', side: 'bottom' }} />
      {columns.map((column) => (
        <Box
          key={column.key}
          pad="xsmall"
          align="center"
          justify="center"
          border={{ color: 'border-weak', side: 'bottom' }}
        >
          <Text weight="bold" size="small" textAlign="center">
            {column.label}
          </Text>
        </Box>
      ))}
      {rows.map((row) => (
        <React.Fragment key={row.key}>
          <Box
            pad="xsmall"
            justify="center"
            border={{ color: 'border-weak', side: 'bottom' }}
          >
            <Text weight="bold" size="small">
              {row.label}
            </Text>
          </Box>
          {columns.map((column) => (
            <Box
              key={`${row.key}-${column.key}`}
              pad="xsmall"
              align="center"
              justify="center"
              border={{ color: 'border-weak', side: 'bottom' }}
            >
              {renderCell(row, column) ?? fallback}
            </Box>
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
}
