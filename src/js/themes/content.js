export const buildContentTheme = (tokens, context) => {
  const { components, global } = tokens;
  const { baseSpacing, mediumIconOnlyPad } = context;
  const { Down, Left, Pin, Right, Subtract, Up } = context.icons;

  return {
    avatar: {
      size: {
        xsmall: components.hpe.element?.xsmall.minHeight,
        small: components.hpe.element?.small.minHeight,
        medium: components.hpe.element?.medium.minHeight,
        large: components.hpe.element?.large.minHeight,
        xlarge: components.hpe.element?.xlarge.minHeight,
        '2xl': `${baseSpacing * 5}px`,
        '3xl': `${baseSpacing * 6}px`,
        '4xl': `${baseSpacing * 7}px`,
        '5xl': `${baseSpacing * 8}px`,
      },
      text: {
        size: {
          xsmall: 'xsmall',
          small: 'small',
          medium: 'medium',
          large: 'large',
          xlarge: 'xlarge',
          '2xl': '3xl',
          '3xl': '4xl',
          '4xl': '5xl',
          '5xl': '6xl',
        },
      },
    },
    calendar: {
      day: {
        adjacent: { color: 'text-weak' },
        hover: { background: 'background-hover', color: 'text-strong' },
        selected: {
          background: 'background-selected-primary-strong',
          color: 'text-onSelectedPrimaryStrong',
          hover: { background: 'background-selected-primary-strong-hover' },
          font: { weight: global.hpe.fontWeight.medium },
        },
        inRange: {
          color: 'text-onSelectedPrimary',
          hover: {
            background: 'background-selected-primary-hover',
            color: 'text-onSelectedPrimary',
          },
          font: { weight: global.hpe.fontWeight.medium },
        },
        extend: ({ isSelected, theme }) =>
          isSelected
            ? `color: ${
                theme.global.colors['text-onSelectedPrimaryStrong'][
                  theme.dark ? 'light' : 'dark'
                ]
              };`
            : '',
      },
      range: { background: 'background-selected-primary' },
      icons: {
        next: Right,
        previous: Left,
        small: {
          previous: Left,
          next: Right,
        },
      },
      small: {
        fontSize: '13.6px',
        lineHeight: 1.375,
        daySize: '27.43px',
        day: { round: 'full' },
        range: {
          round: 'none',
          start: { round: { corner: 'left', size: 'full' } },
          end: { round: { corner: 'right', size: 'full' } },
        },
        title: {
          size: 'medium',
          weight: global.hpe.fontWeight.normal,
          color: 'text-strong',
          container: {
            pad: {
              horizontal: '3xsmall',
            },
          },
        },
      },
      medium: {
        fontSize: '18px',
        lineHeight: 1.45,
        daySize: '54.86px',
        day: { round: 'full' },
        range: {
          round: 'none',
          start: { round: { corner: 'left', size: 'full' } },
          end: { round: { corner: 'right', size: 'full' } },
        },
        title: {
          size: 'large',
          weight: global.hpe.fontWeight.normal,
          color: 'text-strong',
          container: {
            pad: {
              horizontal: 'xsmall',
            },
          },
        },
      },
      large: {
        fontSize: '31.2px',
        lineHeight: 1.11,
        daySize: '109.71px',
        day: { round: 'full' },
        range: {
          round: 'none',
          start: { round: { corner: 'left', size: 'full' } },
          end: { round: { corner: 'right', size: 'full' } },
        },
        title: {
          size: 'xlarge',
          weight: global.hpe.fontWeight.normal,
          color: 'text-strong',
          container: {
            pad: {
              horizontal: 'medium',
            },
          },
        },
      },
    },
    card: {
      container: {
        background: 'background-front',
        elevation: 'none',
        round: 'medium',
        extend: 'transition: box-shadow 0.3s ease-in-out;',
      },
      body: { pad: 'medium' },
      footer: { pad: { horizontal: 'medium', vertical: 'xsmall' } },
      header: { pad: 'medium' },
      hover: { container: { elevation: 'medium' } },
    },
    cards: { grid: { columns: 'xsmall', gap: 'medium' } },
    carousel: {
      icons: {
        current: Subtract,
        next: Right,
        previous: Left,
      },
      disabled: {
        icons: {
          color: 'icon-disabled',
        },
      },
    },
    chart: {
      color: 'dataVis-categorical-10',
      height: 'xsmall',
      thickness: 'medium',
      width: 'medium',
    },
    list: {
      container: {
        // any box props
        gap: '3xsmall',
        // extend: undefined,
      },
      item: {
        border: undefined,
        disabled: { color: 'text-disabled', cursor: 'default' },
        pinned: {
          background: 'background-active',
          icon: { pad: mediumIconOnlyPad },
        },
        pad: { horizontal: 'medium', vertical: 'xsmall' },
        gap: 'medium',
      },
      primaryKey: { weight: global.hpe.fontWeight.medium },
      icons: {
        down: Down,
        up: Up,
        pin: Pin,
      },
    },
    nameValueList: {
      gap: {
        column: 'xlarge',
        row: 'xsmall',
      },
      pair: {
        column: {
          gap: {
            column: 'xlarge',
            row: 'medium',
          },
        },
      },
      name: {
        width: 'xsmall',
      },
      value: {
        width: 'medium',
      },
    },
    table: {
      caption: {
        margin: { bottom: '5xsmall' },
      },
      header: {
        border: {
          side: 'bottom',
          color: components.hpe.headerCell.default.rest.borderColor,
        },
        pad: {
          horizontal: components.hpe.headerCell.default.medium.paddingX,
          top: components.hpe.headerCell.default.medium.paddingTop,
          bottom: components.hpe.headerCell.default.medium.paddingBottom,
        },
        extend: `
          > div { 
            height: 100%;
            justify-content: center;
          }
          // align onSelect checkbox to center of header cell
          label { 
            justify-content: center;
          }
        `,
      },
      body: {
        pad: {
          top: components.hpe.dataCell.default.medium.paddingTop,
          bottom: components.hpe.dataCell.default.medium.paddingBottom,
          horizontal: components.hpe.dataCell.default.medium.paddingX,
        },
        border: {
          side: 'bottom',
          color: components.hpe.dataCell.default.rest.borderColor,
        },
      },
      row: { hover: { background: 'background-hover' } },
      footer: {
        pad: {
          horizontal: components.hpe.footerCell.default.medium.paddingX,
          top: components.hpe.footerCell.default.medium.paddingTop,
          bottom: components.hpe.footerCell.default.medium.paddingBottom,
        },
        extend: `
          font-weight: ${components.hpe.footerCell.default.fontWeight};
        `,
      },
      extend: () => `& tbody tr:last-child td {
        border-color: transparent;
      }
      & tbody tr:last-child th {
        border-color: transparent;
      }`,
    },
  };
};
