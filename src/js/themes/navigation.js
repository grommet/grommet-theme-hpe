import { getThemeColor } from './utils';

export const buildNavigationTheme = (tokens, context) => {
  const { components, large } = tokens;
  const { dimensions } = context;
  const { Down, Left, Right, Up } = context.icons;

  return {
    accordion: {
      panel: { border: { side: 'horizontal', color: 'border' } },
      heading: {
        level: 3,
        margin: { vertical: 'medium', horizontal: '3xsmall' },
      },
      hover: { background: 'background-hover', heading: { color: undefined } },
      border: undefined,
      icons: { collapse: Up, expand: Down, color: 'text' },
      icon: { container: { pad: { horizontal: 'xsmall' } } },
      label: { container: { pad: { horizontal: '3xsmall' } } },
    },
    menu: {
      drop: { align: { top: 'bottom', left: 'left' } },
      container: {
        pad: {
          vertical: components.hpe.menu.default.medium.group.container.paddingY,
          horizontal:
            components.hpe.menu.default.medium.group.container.paddingX,
        },
        gap: components.hpe.menu.default.medium.group.container.gapY,
      },
      group: {
        drop: {},
        container: {
          pad: {
            horizontal:
              components.hpe.menu.default.medium.group.container.paddingX,
            vertical:
              components.hpe.menu.default.medium.group.container.paddingY,
          },
          gap: components.hpe.menu.default.medium.group.container.gapY,
        },
        separator: {
          color: components.hpe.menu.default.group.separator.background,
          size: components.hpe.menu.default.medium.group.separator.height,
          pad: 'none',
        },
      },
      icons: {
        color: components.hpe.menu.default.item.rest.iconColor,
        down: Down,
      },
      item: {
        pad: {
          horizontal: components.hpe.menu.default.medium.item.paddingX,
          vertical: components.hpe.menu.default.medium.item.paddingY,
        },
      },
      disabled: {
        icons: {
          color: components.hpe.menu.default.item.disabled.rest.iconColor,
        },
      },
    },
    nav: { gap: 'medium' },
    pagination: {
      button: {
        color: components.hpe.button.default.rest.textColor,
        border: { radius: components.hpe.button.default.medium.borderRadius },
        font: { weight: components.hpe.button.default.rest.fontWeight },
        active: {
          background: components.hpe.button.default.selected.rest.background,
          border: {
            radius: components.hpe.button.default.medium.borderRadius,
            color: components.hpe.button.default.selected.rest.borderColor,
            width: components.hpe.button.default.medium.borderWidth,
          },
          color: components.hpe.button.default.selected.rest.textColor,
          font: {
            weight: components.hpe.button.default.selected.rest.fontWeight,
          },
        },
        hover: {
          background: components.hpe.button.default.hover.background,
          border: { radius: components.hpe.button.default.medium.borderRadius },
          color: components.hpe.button.default.hover.textColor,
          font: { weight: components.hpe.button.default.hover.fontWeight },
          active: {
            background: components.hpe.button.default.selected.hover.background,
            color: components.hpe.button.default.selected.hover.textColor,
            font: {
              weight: components.hpe.button.default.selected.hover.fontWeight,
            },
          },
        },
        disabled: {
          background: components.hpe.button.default.disabled.rest.background,
          border: { radius: components.hpe.button.default.medium.borderRadius },
          color: components.hpe.button.default.disabled.rest.textColor,
          font: {
            weight: components.hpe.button.default.disabled.rest.fontWeight,
          },
        },
        size: {
          small: {
            border: {
              radius: components.hpe.button.default.small.borderRadius,
              width:
                dimensions.borderSize[
                  components.hpe.button.default.small.borderWidth
                ] || components.hpe.button.default.small.borderWidth,
            },
            pad: { vertical: '4px', horizontal: '4px' },
            font: {
              size: components.hpe.element?.small.fontSize,
              height: components.hpe.element?.small.lineHeight,
            },
            height: components.hpe.element?.small.minHeight,
            width: components.hpe.element?.small.minHeight,
          },
          medium: {
            border: {
              radius: components.hpe.button.default.medium.borderRadius,
              width:
                dimensions.borderSize[
                  components.hpe.button.default.medium.borderWidth
                ] || components.hpe.button.default.medium.borderWidth,
            },
            pad: { vertical: '4px', horizontal: '4px' },
            font: {
              size: components.hpe.element?.medium.fontSize,
              height: components.hpe.element?.medium.lineHeight,
            },
            height: components.hpe.element?.medium.minHeight,
            width: components.hpe.element?.medium.minHeight,
          },
          large: {
            border: {
              radius: components.hpe.button.default.large.borderRadius,
              width:
                dimensions.borderSize[
                  components.hpe.button.default.large.borderWidth
                ] || components.hpe.button.default.large.borderWidth,
            },
            pad: { vertical: '4px', horizontal: '4px' },
            font: {
              size: components.hpe.element?.large.fontSize,
              height: components.hpe.element?.large.lineHeight,
            },
            height: components.hpe.element?.large.minHeight,
            width: components.hpe.element?.large.minHeight,
          },
        },
      },
      container: {
        gap: {
          column: '3xsmall',
          row: 'xsmall',
        },
      },
      controls: {
        gap: '5xsmall',
      },
      icons: {
        next: Right,
        previous: Left,
      },
      step: {
        container: {
          gap: '3xsmall',
        },
      },
    },
    sidebar: { gap: 'xlarge', pad: 'xsmall' },
    tab: {
      color: 'text',
      active: {
        background: undefined,
        color: 'text-primary',
        weight: 600,
      },
      hover: { background: 'transparent', color: 'text-strong' },
      border: {
        side: 'all',
        color: 'transparent',
        size: components.hpe.element.medium.borderWidth,
        active: { color: undefined },
        disabled: { color: undefined },
        hover: { color: undefined },
      },
      disabled: { background: 'background-disabled', color: 'text-disabled' },
      pad: {
        bottom: components.hpe.element?.medium.paddingY,
        top: components.hpe.element?.medium.paddingY,
        horizontal: components.hpe.element?.medium?.paddingX?.narrow,
      },
      margin: { vertical: 'none', horizontal: 'none' },
      extend: 'font-weight: 500;',
      gap: 'xsmall',
    },
    tabs: {
      gap: 'small',
      header: {
        border: undefined,
        // padding-bottom ensures the marker is not cut off by subsequent
        // page elements.
        extend: ({ theme }) => `
        padding-bottom: ${large.hpe.borderWidth.medium};
        & button {
          border-radius: ${large.hpe.radius.xsmall}; // radius on focus
        }
        & button[aria-selected="true"] {
            position: relative;
            &::before {
              display: block;
              position: absolute;
              content: '';
              height: ${large.hpe.borderWidth.medium};
              border-radius: ${large.hpe.radius.full};
              bottom: -${large.hpe.borderWidth.medium};
              left: 0;
              right: 0;
              background: ${getThemeColor('border-selected', theme)};
            }
        }`,
        previousButton: {
          icon: Left,
          pad: { vertical: '3xsmall', horizontal: 'xsmall' },
        },
        nextButton: {
          icon: Right,
          pad: { vertical: '3xsmall', horizontal: 'xsmall' },
        },
      },
      nextButton: {
        pad: { horizontal: 'xsmall', vertical: '3xsmall' },
      },
      previousButton: {
        pad: { horizontal: 'xsmall', vertical: '3xsmall' },
      },
      step: { xsmall: 1, xlarge: 3 },
    },
  };
};
