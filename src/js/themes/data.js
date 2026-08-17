// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

export const buildDataTheme = (tokens, context) => {
  const { components } = tokens;
  const {
    Add,
    Ascending,
    Close,
    Descend,
    Descending,
    Down,
    Filter,
    Lock,
    Search,
    Splits,
    Subtract,
    Unsorted,
    Up,
  } = context.icons;

  return {
    data: {
      button: { kind: 'toolbar' },
      toolbar: {
        gap: 'medium',
      },
    },
    dataChart: {
      colors: [
        'dataVis-categorical-10',
        'dataVis-categorical-20',
        'dataVis-categorical-30',
        'dataVis-categorical-40',
        'dataVis-categorical-50',
        'dataVis-categorical-60',
        'dataVis-categorical-70',
        'dataVis-categorical-80',
      ],
      gap: 'xsmall',
      granularity: {
        y: {
          '5xsmall': { fine: 2, medium: 2 },
          '4xsmall': { fine: 2, medium: 2 },
          '3xsmall': { fine: 3, medium: 2 },
          xxsmall: { fine: 3, medium: 2 },
          xsmall: { fine: 5, medium: 3 },
          small: { fine: 5, medium: 3 },
          medium: { fine: 7, medium: 5 },
          large: { fine: 7, medium: 5 },
          xlarge: { fine: 9, medium: 5 },
          xxlarge: { fine: 9, medium: 5 },
          '3xlarge': { fine: 11, medium: 5 },
        },
      },
      detail: {
        gap: '3xsmall',
        pad: 'xsmall',
      },
      halfPad: {
        '3xlarge': 'xlarge',
        xxlarge: 'large',
        xlarge: 'medium',
        large: 'small',
        medium: 'xsmall',
        small: 'xxsmall',
        xsmall: '3xsmall',
        xxsmall: '4xsmall',
        '3xsmall': '5xsmall',
        '4xsmall': '2px',
        '5xsmall': 'hair',
      },
      legend: {
        margin: { top: 'xsmall' },
        gap: 'xsmall',
        item: {
          gap: '3xsmall',
          pad: { horizontal: 'xsmall', vertical: '3xsmall' },
        },
      },
      orderedSizes: [
        '3xlarge',
        'xxlarge',
        'xlarge',
        'large',
        'medium',
        'small',
        'xsmall',
        'xxsmall',
        '3xsmall',
        '4xsmall',
        '5xsmall',
      ],
      size: {
        height: 'xsmall',
      },
      thickness: {
        veryDense: 'hair',
        dense: '3xsmall',
        heavy: 'xsmall',
        moderate: 'medium',
        light: 'xlarge',
        sparse: '3xlarge',
      },
      thicknessPad: {
        xlarge: 'xlarge',
        large: 'medium',
        medium: 'xsmall',
        small: '3xsmall',
        xsmall: '5xsmall',
      },
    },
    dataFilter: {
      rangeSelector: {
        size: 'full',
        round: 'medium',
      },
      selectMultiple: {
        dropHeight: 'medium',
      },
    },
    dataFilters: {
      clearControl: {
        margin: { start: 'xsmall' },
      },
      footer: {
        actions: {
          margin: { top: 'medium' },
          gap: 'xsmall',
        },
      },
      icons: {
        close: Close,
        filter: Filter,
      },
      pad: 'medium',
      width: {
        min: 'medium',
      },
    },
    dataSearch: {
      icons: {
        search: Search,
      },
    },
    dataSort: {
      icons: {
        control: Descend,
      },
    },
    dataSummary: {
      margin: { vertical: '3xsmall' },
      separator: { margin: { horizontal: 'xsmall' } },
    },
    dataTable: {
      body: {
        extend: ({ theme }) => `
          /* Margin and padding allow room for focus on table body */
          margin: ${theme.global.edgeSize['5xsmall']} 0px;
          padding: 0px ${theme.global.edgeSize['5xsmall']};
        `,
        selected: {
          background:
            components.hpe.dataCell.default.selected?.rest?.background,
        },
        row: {
          extend: `&:last-child td {
              border-color: transparent;
            }
            &:last-child th {
              border-color: transparent;
            }`,
        },
      },
      expand: {
        size: '5xsmall',
      },
      icons: {
        ascending: () => <Descending size="large" />,
        descending: () => <Ascending size="large" />,
        contract: () => <Up height="medium" />,
        expand: () => <Down height="medium" />,
        sortable: () => <Unsorted size="large" />,
        resizeIncrease: Add,
        resizeDecrease: Subtract,
        search: Search,
      },
      groupHeader: {},
      groupEnd: { border: { side: 'bottom', size: 'xsmall' } },
      header: {
        border: { side: 'bottom' },
        color: components.hpe.headerCell.default.rest.textColor,
        extend: ({ column, sort, sortable, theme }) =>
          `
            ${
              sort &&
              sort.property === column &&
              `
              background: ${
                theme.global.colors['background-active'][
                  theme.dark ? 'dark' : 'light'
                ]
              }
            `
            };
            ${
              sortable &&
              sort &&
              sort.property !== column &&
              `
                svg {
                  opacity: 0;
                }
                &:hover {
                  svg {
                    opacity: 1;
                  }
                }
              `
            };
          `,
        font: { weight: components.hpe.headerCell.default.medium.fontWeight },
        gap: components.hpe.headerCell.default.medium.gapX,
        hover: {
          background: {
            color: components.hpe.headerCell.default.hover.background,
          },
        },
        units: {
          color: components.hpe.headerCell.default.units.rest.textColor,
          margin: {
            left: '3xsmall',
          },
        },
      },
      pinned: {
        header: {
          background: { opacity: 'strong' },
          extend: 'backdrop-filter: blur(12px);',
        },
        body: {
          background: { opacity: 'strong' },
          extend: 'backdrop-filter: blur(12px);',
        },
        footer: {
          background: { opacity: 'strong' },
          extend: 'backdrop-filter: blur(12px);',
        },
      },
      primary: {
        weight: components.hpe.dataCell.primary.medium.fontWeight,
        color: components.hpe.dataCell.primary.rest.textColor,
      },
      resize: {
        border: { color: 'border', side: 'end' },
        hover: { border: { color: 'border-strong', size: 'small' } },
        padding: {
          vertical: '3xsmall',
        },
      },
      search: {
        pad: {
          left: 'xsmall',
        },
        text: {
          pad: {
            horizontal: 'xsmall',
          },
        },
      },
      sort: {
        gap: '3xsmall',
      },
    },
    dataTableColumns: {
      icons: {
        control: Splits,
        pinned: Lock,
        search: Search,
      },
      tabs: {
        pad: 'xsmall',
      },
      selectColumns: {
        pad: {
          vertical: 'xsmall',
        },
        gap: '3xsmall',
      },
      orderColumns: {
        pad: {
          top: 'xsmall',
        },
      },
    },
    toolbar: {
      gap: 'xsmall',
      small: {
        gap: 'xsmall',
      },
    },
  };
};
