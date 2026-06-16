import { getThemeColor } from './utils';
export var buildNavigationTheme = function buildNavigationTheme(tokens, context) {
  var _components$hpe$eleme, _components$hpe$eleme2, _components$hpe$eleme3, _components$hpe$eleme4, _components$hpe$eleme5, _components$hpe$eleme6, _components$hpe$eleme7, _components$hpe$eleme8, _components$hpe$eleme9, _components$hpe$eleme0, _components$hpe$eleme1, _components$hpe$eleme10, _components$hpe$eleme11, _components$hpe$eleme12, _components$hpe$eleme13;
  var components = tokens.components,
    large = tokens.large;
  var dimensions = context.dimensions;
  var _context$icons = context.icons,
    Down = _context$icons.Down,
    Left = _context$icons.Left,
    Right = _context$icons.Right,
    Up = _context$icons.Up;
  return {
    accordion: {
      panel: {
        border: {
          side: 'horizontal',
          color: 'border'
        }
      },
      heading: {
        level: 3,
        margin: {
          vertical: 'medium',
          horizontal: '3xsmall'
        }
      },
      hover: {
        background: 'background-hover',
        heading: {
          color: undefined
        }
      },
      border: undefined,
      icons: {
        collapse: Up,
        expand: Down,
        color: 'text'
      },
      icon: {
        container: {
          pad: {
            horizontal: 'xsmall'
          }
        }
      },
      label: {
        container: {
          pad: {
            horizontal: '3xsmall'
          }
        }
      }
    },
    menu: {
      drop: {
        align: {
          top: 'bottom',
          left: 'left'
        }
      },
      container: {
        pad: {
          vertical: components.hpe.menu["default"].medium.group.container.paddingY,
          horizontal: components.hpe.menu["default"].medium.group.container.paddingX
        },
        gap: components.hpe.menu["default"].medium.group.container.gapY
      },
      group: {
        drop: {},
        container: {
          pad: {
            horizontal: components.hpe.menu["default"].medium.group.container.paddingX,
            vertical: components.hpe.menu["default"].medium.group.container.paddingY
          },
          gap: components.hpe.menu["default"].medium.group.container.gapY
        },
        separator: {
          color: components.hpe.menu["default"].group.separator.background,
          size: components.hpe.menu["default"].medium.group.separator.height,
          pad: 'none'
        }
      },
      icons: {
        color: components.hpe.menu["default"].item.rest.iconColor,
        down: Down
      },
      item: {
        pad: {
          horizontal: components.hpe.menu["default"].medium.item.paddingX,
          vertical: components.hpe.menu["default"].medium.item.paddingY
        }
      },
      disabled: {
        icons: {
          color: components.hpe.menu["default"].item.disabled.rest.iconColor
        }
      }
    },
    nav: {
      gap: 'medium'
    },
    pagination: {
      button: {
        color: components.hpe.button["default"].rest.textColor,
        border: {
          radius: components.hpe.button["default"].medium.borderRadius
        },
        font: {
          weight: components.hpe.button["default"].rest.fontWeight
        },
        active: {
          background: components.hpe.button["default"].selected.rest.background,
          border: {
            radius: components.hpe.button["default"].medium.borderRadius,
            color: components.hpe.button["default"].selected.rest.borderColor,
            width: components.hpe.button["default"].medium.borderWidth
          },
          color: components.hpe.button["default"].selected.rest.textColor,
          font: {
            weight: components.hpe.button["default"].selected.rest.fontWeight
          }
        },
        hover: {
          background: components.hpe.button["default"].hover.background,
          border: {
            radius: components.hpe.button["default"].medium.borderRadius
          },
          color: components.hpe.button["default"].hover.textColor,
          font: {
            weight: components.hpe.button["default"].hover.fontWeight
          },
          active: {
            background: components.hpe.button["default"].selected.hover.background,
            color: components.hpe.button["default"].selected.hover.textColor,
            font: {
              weight: components.hpe.button["default"].selected.hover.fontWeight
            }
          }
        },
        disabled: {
          background: components.hpe.button["default"].disabled.rest.background,
          border: {
            radius: components.hpe.button["default"].medium.borderRadius
          },
          color: components.hpe.button["default"].disabled.rest.textColor,
          font: {
            weight: components.hpe.button["default"].disabled.rest.fontWeight
          }
        },
        size: {
          small: {
            border: {
              radius: components.hpe.button["default"].small.borderRadius,
              width: dimensions.borderSize[components.hpe.button["default"].small.borderWidth] || components.hpe.button["default"].small.borderWidth
            },
            pad: {
              vertical: '4px',
              horizontal: '4px'
            },
            font: {
              size: (_components$hpe$eleme = components.hpe.element) == null ? void 0 : _components$hpe$eleme.small.fontSize,
              height: (_components$hpe$eleme2 = components.hpe.element) == null ? void 0 : _components$hpe$eleme2.small.lineHeight
            },
            height: (_components$hpe$eleme3 = components.hpe.element) == null ? void 0 : _components$hpe$eleme3.small.minHeight,
            width: (_components$hpe$eleme4 = components.hpe.element) == null ? void 0 : _components$hpe$eleme4.small.minHeight
          },
          medium: {
            border: {
              radius: components.hpe.button["default"].medium.borderRadius,
              width: dimensions.borderSize[components.hpe.button["default"].medium.borderWidth] || components.hpe.button["default"].medium.borderWidth
            },
            pad: {
              vertical: '4px',
              horizontal: '4px'
            },
            font: {
              size: (_components$hpe$eleme5 = components.hpe.element) == null ? void 0 : _components$hpe$eleme5.medium.fontSize,
              height: (_components$hpe$eleme6 = components.hpe.element) == null ? void 0 : _components$hpe$eleme6.medium.lineHeight
            },
            height: (_components$hpe$eleme7 = components.hpe.element) == null ? void 0 : _components$hpe$eleme7.medium.minHeight,
            width: (_components$hpe$eleme8 = components.hpe.element) == null ? void 0 : _components$hpe$eleme8.medium.minHeight
          },
          large: {
            border: {
              radius: components.hpe.button["default"].large.borderRadius,
              width: dimensions.borderSize[components.hpe.button["default"].large.borderWidth] || components.hpe.button["default"].large.borderWidth
            },
            pad: {
              vertical: '4px',
              horizontal: '4px'
            },
            font: {
              size: (_components$hpe$eleme9 = components.hpe.element) == null ? void 0 : _components$hpe$eleme9.large.fontSize,
              height: (_components$hpe$eleme0 = components.hpe.element) == null ? void 0 : _components$hpe$eleme0.large.lineHeight
            },
            height: (_components$hpe$eleme1 = components.hpe.element) == null ? void 0 : _components$hpe$eleme1.large.minHeight,
            width: (_components$hpe$eleme10 = components.hpe.element) == null ? void 0 : _components$hpe$eleme10.large.minHeight
          }
        }
      },
      container: {
        gap: {
          column: '3xsmall',
          row: 'xsmall'
        }
      },
      controls: {
        gap: '5xsmall'
      },
      icons: {
        next: Right,
        previous: Left
      },
      step: {
        container: {
          gap: '3xsmall'
        }
      }
    },
    sidebar: {
      gap: 'xlarge',
      pad: 'xsmall'
    },
    tab: {
      color: 'text',
      active: {
        background: undefined,
        color: 'text-primary',
        weight: 600
      },
      hover: {
        background: 'transparent',
        color: 'text-strong'
      },
      border: {
        side: 'all',
        color: 'transparent',
        size: components.hpe.element.medium.borderWidth,
        active: {
          color: undefined
        },
        disabled: {
          color: undefined
        },
        hover: {
          color: undefined
        }
      },
      disabled: {
        background: 'background-disabled',
        color: 'text-disabled'
      },
      pad: {
        bottom: (_components$hpe$eleme11 = components.hpe.element) == null ? void 0 : _components$hpe$eleme11.medium.paddingY,
        top: (_components$hpe$eleme12 = components.hpe.element) == null ? void 0 : _components$hpe$eleme12.medium.paddingY,
        horizontal: (_components$hpe$eleme13 = components.hpe.element) == null || (_components$hpe$eleme13 = _components$hpe$eleme13.medium) == null || (_components$hpe$eleme13 = _components$hpe$eleme13.paddingX) == null ? void 0 : _components$hpe$eleme13.narrow
      },
      margin: {
        vertical: 'none',
        horizontal: 'none'
      },
      extend: 'font-weight: 500;',
      gap: 'xsmall'
    },
    tabs: {
      gap: 'small',
      header: {
        border: undefined,
        // padding-bottom ensures the marker is not cut off by subsequent
        // page elements.
        extend: function extend(_ref) {
          var theme = _ref.theme;
          return "\n        padding-bottom: " + large.hpe.borderWidth.medium + ";\n        & button {\n          border-radius: " + large.hpe.radius.xsmall + "; // radius on focus\n        }\n        & button[aria-selected=\"true\"] {\n            position: relative;\n            &::before {\n              display: block;\n              position: absolute;\n              content: '';\n              height: " + large.hpe.borderWidth.medium + ";\n              border-radius: " + large.hpe.radius.full + ";\n              bottom: -" + large.hpe.borderWidth.medium + ";\n              left: 0;\n              right: 0;\n              background: " + getThemeColor('border-selected', theme) + ";\n            }\n        }";
        },
        previousButton: {
          icon: Left,
          pad: {
            vertical: '3xsmall',
            horizontal: 'xsmall'
          }
        },
        nextButton: {
          icon: Right,
          pad: {
            vertical: '3xsmall',
            horizontal: 'xsmall'
          }
        }
      },
      nextButton: {
        pad: {
          horizontal: 'xsmall',
          vertical: '3xsmall'
        }
      },
      previousButton: {
        pad: {
          horizontal: 'xsmall',
          vertical: '3xsmall'
        }
      },
      step: {
        xsmall: 1,
        xlarge: 3
      }
    },
    tip: {
      content: {
        background: 'background-floating',
        border: {
          color: 'border-weak'
        },
        margin: '5xsmall',
        elevation: 'small',
        pad: {
          vertical: 'none',
          horizontal: 'xsmall'
        },
        round: components.hpe.drop["default"].borderRadius
      }
    },
    toggleGroup: {
      button: {
        kind: 'toolbar'
      },
      container: {
        border: false,
        round: 'xsmall',
        extend: function extend(_ref2) {
          var theme = _ref2.theme;
          return "\n        gap: " + (dimensions.edgeSize[large.hpe.spacing['5xsmall']] || large.hpe.spacing['5xsmall']) + ";\n        &:hover {\n          background: " + getThemeColor('background-hover', theme) + ";\n        }";
        }
      },
      divider: false
    }
  };
};