export const buildMiscTheme = (tokens, context) => {
  const { components, global, large, light, dark } = tokens;
  const { Close, CircleFill, Checkmark, Left, Right, StatusCritical } =
    context.icons;

  // `icon-onSelectedPrimaryStrong` in theme.global.colors (colors.js) has its
  // light/dark values intentionally swapped to compensate for Grommet's
  // background-driven smart color pairing (see colors.js `swapped()`).
  // Stepper's indicator.color is resolved via normalizeColor(color, theme),
  // which just picks light/dark off of theme.dark with no smart pairing, so
  // using the semantic token name here would render the swapped/wrong color.
  // Pulling the raw values directly from the token files gives us the color
  // exactly as authored.
  const iconOnSelectedPrimaryStrong = {
    light: light.hpe.color.icon.onSelectedPrimaryStrong,
    dark: dark.hpe.color.icon.onSelectedPrimaryStrong,
  };

  return {
    box: {
      border: {
        offset: '3xsmall',
      },
    },
    diagram: {
      line: { color: 'dataVis-categorical-10' },
    },
    distribution: { gap: '3xsmall' },
    footer: { gap: 'medium' },
    header: { gap: 'medium' },
    icon: {
      disableScaleDown: true,
      matchSize: true,
      size: {
        xsmall: large.hpe.icon.xsmall.size,
        small: large.hpe.icon.small.size,
        medium: large.hpe.icon.medium.size,
        large: large.hpe.icon.large.size,
        xlarge: large.hpe.icon.xlarge.size,
        xxlarge: large.hpe.icon.xxlarge.size,
      },
    },
    meter: {
      background: 'background-contrast',
      color: 'dataVis-categorical-10',
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
      gap: '5xsmall',
    },
    stepper: {
      description: {
        color: 'text-default',
      },
      pending: {
        indicator: {
          border: 'icon-weak',
          substep: {
            iconSize: 'xsmall',
          },
          hover: {
            border: 'icon-strong',
          },
        },
        label: {
          color: 'text-default',
          hover: {
            color: 'text-strong',
          },
        },
        connector: {
          color: 'border-default',
        },
      },
      current: {
        indicator: {
          icon: CircleFill,
          background: 'background-selected-primary-strong',
          color: iconOnSelectedPrimaryStrong,
          border: 'transparent',
          substep: {
            iconSize: 'xsmall',
          },
          hover: {
            background: 'background-selected-primary-strong-hover',
            color: iconOnSelectedPrimaryStrong,
            border: 'transparent',
          },
        },
        label: {
          color: 'text-primary',
        },
      },
      currentCompleted: {
        indicator: {
          icon: Checkmark,
          background: 'background-selected-primary-strong',
          color: iconOnSelectedPrimaryStrong,
          border: 'transparent',
          substep: {
            iconSize: 'xsmall',
          },
          hover: {
            background: 'background-selected-primary-strong-hover',
            color: iconOnSelectedPrimaryStrong,
            border: 'transparent',
          },
        },
        label: {
          color: 'text-primary',
        },
      },
      completed: {
        indicator: {
          icon: Checkmark,
          color: 'icon-primary',
          border: 'icon-primary',
          substep: {
            iconSize: 'xsmall',
          },
          hover: {
            border: 'icon-primary-hover',
            color: 'icon-primary-hover',
          },
        },
        label: {
          color: 'text-primary',
        },
        connector: {
          color: 'foreground-primary',
        },
      },
      error: {
        indicator: {
          icon: StatusCritical,
          border: 'icon-critical',
          color: 'icon-critical',
          substep: {
            iconSize: 'xsmall',
          },
        },
        label: {
          color: 'text-critical',
        },
        connector: {
          color: 'border-critical',
        },
        helperText: {
          color: 'text-critical',
        },
      },
      currentError: {
        indicator: {
          icon: StatusCritical,
          border: 'transparent',
          background: 'icon-critical',
          color: 'icon-onStrong',
          substep: {
            iconSize: 'xsmall',
          },
          hover: {
            color: 'icon-onStrong',
          },
        },
        label: {
          color: 'text-critical',
        },
        connector: {
          color: 'border-critical',
        },
        helperText: {
          color: 'text-critical',
        },
      },
      disabled: {
        indicator: {
          border: 'icon-disabled',
          background: 'transparent',
          hover: {
            border: 'icon-disabled',
            background: 'transparent',
          },
        },
        label: {
          color: 'text-default',
        },
        connector: {
          color: 'border-disabled',
        },
        helperText: {
          color: 'text-default',
        },
      },
    },
    wizard: {
      body: {
        pad: 'xlarge',
      },
      header: {
        pad: { horizontal: 'xlarge', vertical: 'xsmall' },
        title: {
          size: 'large',
        },
        close: {
          icon: Close,
        },
      },
      progress: {
        vertical: {
          width: 'xsmall',
        },
      },
      stepHeader: {
        counter: {
          size: 'small',
          color: 'text-default',
        },
        title: {
          size: 'xlarge',
        },
        description: {
          size: 'large',
          color: 'text-default',
          margin: { top: '3xsmall' },
        },
      },
      content: {
        round: 'xsmall',
      },
      footer: {
        pad: { horizontal: 'xlarge', vertical: 'xsmall' },
        gap: { row: '3xsmall', column: 'xsmall' },
        background: 'background-front',
        button: {
          next: { icon: Right },
          previous: { icon: Left },
          skip: { icon: Right },
        },
      },
      error: {
        color: 'text-critical',
        size: 'small',
        margin: { top: '3xsmall' },
      },
    },
    tag: {
      border: { color: 'border-weak' },
      icons: { remove: Close },
      pad: {
        horizontal: components.hpe.element?.medium?.paddingX?.default,
        vertical: components.hpe.element?.medium.paddingY,
      },
      remove: { kind: 'default', margin: { right: '3xsmall' } },
      value: { weight: global.hpe.fontWeight.medium },
      round: 'xsmall',
      size: {
        xsmall: {
          icon: undefined,
          pad: {
            vertical: components.hpe.element?.small.paddingY,
            horizontal: components.hpe.element?.small?.paddingX?.default,
          },
          remove: {
            size: 'xsmall',
            margin: {
              right: 'none',
              vertical: '-1px',
            },
          },
        },
        small: {
          icon: undefined,
          pad: {
            vertical: components.hpe.element?.small.paddingY,
            horizontal: components.hpe.element?.small?.paddingX?.default,
          },
          remove: { size: 'xsmall', margin: { right: '2px' } },
        },
        medium: {
          icon: undefined,
          pad: {
            vertical: components.hpe.element?.medium.paddingY,
            horizontal: components.hpe.element?.medium?.paddingX?.default,
          },
          remove: { size: 'small', margin: { right: '5xsmall' } },
        },
        large: {
          icon: undefined,
          pad: {
            vertical: components.hpe.element?.large.paddingY,
            horizontal: components.hpe.element?.large?.paddingX?.default,
          },
          remove: { size: 'medium', margin: { right: '5xsmall' } },
        },
        xlarge: {
          icon: undefined,
          pad: {
            vertical: components.hpe.element?.xlarge.paddingY,
            horizontal: components.hpe.element?.xlarge?.paddingX?.default,
          },
          remove: { size: 'large', margin: { right: '3xsmall' } },
        },
      },
    },
  };
};
