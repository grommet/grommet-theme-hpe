import { getThemeColor } from './utils';

export const buildMiscTheme = (tokens, context) => {
  const { components, global, large } = tokens;
  const { dimensions } = context;
  const { Close, Copy, Dislike, DislikeFill, Like, LikeFill, Star, StarFill } =
    context.icons;

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
    maskedInput: {
      container: {
        extend: ({ theme }) => `
          svg {
            fill: ${
              theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light']
            };
            stroke: ${
              theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light']
            };
          }
        `,
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
    starRating: {
      color: 'background-selected-primary-strong',
      icons: {
        selected: StarFill,
        unselected: Star,
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
    textInput: {
      container: {
        extend: ({ theme }) => `
          svg {
            fill: ${
              theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light']
            };
            stroke: ${
              theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light']
            };
          }
        `,
      },
      icons: {
        copy: Copy,
      },
      suggestions: {
        extend: ({ theme }) => `
          padding-block: ${components.hpe.select.default.medium.drop.paddingY};
          padding-inline: ${components.hpe.select.default.medium.drop.paddingX};
          gap: ${components.hpe.select.default.medium.drop.gapY};
          display: flex;
          flex-direction: column;
          [role="option"]:hover {
            background: ${getThemeColor(
              components.hpe.select.default.option.hover.background,
              theme,
            )};
          }
        `,
      },
    },
    thumbsRating: {
      like: { color: 'background-selected-primary-strong' },
      dislike: { color: 'background-selected-primary-strong' },
      icons: {
        dislike: Dislike,
        dislikeSelected: DislikeFill,
        like: Like,
        likeSelected: LikeFill,
      },
    },
    toggleGroup: {
      button: { kind: 'toolbar' },
      container: {
        border: false,
        round: 'xsmall',
        extend: ({ theme }) => `
        gap: ${
          dimensions.edgeSize[large.hpe.spacing['5xsmall']] ||
          large.hpe.spacing['5xsmall']
        };
        &:hover {
          background: ${getThemeColor('background-hover', theme)};
        }`,
      },
      divider: false,
    },
    toolbar: {
      gap: 'xsmall',
      small: {
        gap: 'xsmall',
      },
    },
  };
};
