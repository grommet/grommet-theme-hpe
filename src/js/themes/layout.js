export const buildLayoutTheme = (tokens) => {
  const { global } = tokens;

  return {
    nameValuePair: {
      column: {
        gap: '5xsmall',
      },
      name: { color: 'text-strong', weight: global.hpe.fontWeight.medium },
    },
    page: {
      wide: {
        width: {
          min: '336px',
          max: '3xlarge',
        },
        xsmall: { pad: { horizontal: 'xlarge' } },
        small: {
          pad: { horizontal: 'xlarge' },
        },
        medium: {
          pad: { horizontal: 'medium' },
        },
        large: {
          pad: { horizontal: 'xlarge' },
        },
        xlarge: { pad: { horizontal: 'xlarge' } },
      },
      narrow: {
        width: {
          min: '336px',
          max: 'xlarge',
        },
        xsmall: { pad: { horizontal: 'xlarge' } },
        small: {
          pad: { horizontal: 'xlarge' },
        },
        medium: {
          pad: { horizontal: 'medium' },
        },
        large: {
          pad: { horizontal: 'xlarge' },
        },
        xlarge: { pad: { horizontal: 'xlarge' } },
      },
      full: {
        width: {
          min: '336px',
          max: '100%',
        },
        xsmall: { pad: { horizontal: 'xlarge' } },
        small: {
          pad: { horizontal: 'xlarge' },
        },
        medium: {
          pad: { horizontal: 'medium' },
        },
        large: {
          pad: { horizontal: 'xlarge' },
        },
        xlarge: { pad: { horizontal: 'xlarge' } },
      },
    },
    pageHeader: {
      pad: {
        top: 'xlarge',
        bottom: 'medium',
      },
      responsive: {
        actions: {
          pad: {
            top: 'xsmall',
          },
        },
        breakpoints: ['xsmall', 'small'],
      },
      subtitle: { size: 'large' },
      size: {
        small: {
          pad: {
            top: 'medium',
            bottom: 'xsmall',
          },
          subtitle: {
            size: 'small',
          },
          title: {
            size: 'small',
          },
        },
        large: {
          pad: {
            top: '3xlarge',
            bottom: 'xlarge',
          },
          subtitle: {
            size: 'large',
          },
          title: {
            size: 'large',
          },
        },
      },
      xsmall: {
        areas: [
          ['parent', 'parent'],
          ['title', 'actions'],
          ['subtitle', 'actions'],
        ],
        columns: [['xsmall', 'flex'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: { row: '3xsmall', column: 'medium' },
      },
      small: {
        areas: [
          ['parent', 'parent'],
          ['title', 'actions'],
          ['subtitle', 'actions'],
        ],
        columns: [['xsmall', 'flex'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: { row: '3xsmall', column: 'xlarge' },
      },
      medium: {
        areas: [
          ['parent', 'parent'],
          ['title', 'actions'],
          ['subtitle', 'actions'],
        ],
        columns: [['medium', 'flex'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: { row: '3xsmall', column: 'medium' },
      },
      large: {
        areas: [
          ['parent', 'parent'],
          ['title', 'actions'],
          ['subtitle', 'actions'],
        ],
        columns: [['medium', 'flex'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: { row: '3xsmall', column: 'xlarge' },
      },
      xlarge: {
        areas: [
          ['parent', 'parent'],
          ['title', 'actions'],
          ['subtitle', 'actions'],
        ],
        columns: [['medium', 'xlarge'], 'auto'],
        rows: ['auto', 'auto', 'auto'],
        gap: { row: '3xsmall', column: 'xlarge' },
      },
    },
    video: {
      scrubber: {
        thickness: 'xsmall',
      },
      time: {
        container: {
          pad: { horizontal: 'xsmall' },
        },
      },
    },
  };
};
