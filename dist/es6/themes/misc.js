export var buildMiscTheme = function buildMiscTheme(tokens, context) {
  var _components$hpe$eleme, _components$hpe$eleme2, _components$hpe$eleme3, _components$hpe$eleme4, _components$hpe$eleme5, _components$hpe$eleme6, _components$hpe$eleme7, _components$hpe$eleme8, _components$hpe$eleme9, _components$hpe$eleme0, _components$hpe$eleme1, _components$hpe$eleme10;
  var components = tokens.components,
    global = tokens.global,
    large = tokens.large,
    light = tokens.light,
    dark = tokens.dark;
  var _context$icons = context.icons,
    Close = _context$icons.Close,
    CircleFill = _context$icons.CircleFill,
    Checkmark = _context$icons.Checkmark,
    StatusCritical = _context$icons.StatusCritical;

  // `icon-onSelectedPrimaryStrong` in theme.global.colors (colors.js) has its
  // light/dark values intentionally swapped to compensate for Grommet's
  // background-driven smart color pairing (see colors.js `swapped()`).
  // Stepper's indicator.color is resolved via normalizeColor(color, theme),
  // which just picks light/dark off of theme.dark with no smart pairing, so
  // using the semantic token name here would render the swapped/wrong color.
  // Pulling the raw values directly from the token files gives us the color
  // exactly as authored.
  var iconOnSelectedPrimaryStrong = {
    light: light.hpe.color.icon.onSelectedPrimaryStrong,
    dark: dark.hpe.color.icon.onSelectedPrimaryStrong
  };
  return {
    box: {
      border: {
        offset: '3xsmall'
      }
    },
    diagram: {
      line: {
        color: 'dataVis-categorical-10'
      }
    },
    distribution: {
      gap: '3xsmall'
    },
    footer: {
      gap: 'medium'
    },
    header: {
      gap: 'medium'
    },
    icon: {
      disableScaleDown: true,
      matchSize: true,
      size: {
        xsmall: large.hpe.icon.xsmall.size,
        small: large.hpe.icon.small.size,
        medium: large.hpe.icon.medium.size,
        large: large.hpe.icon.large.size,
        xlarge: large.hpe.icon.xlarge.size,
        xxlarge: large.hpe.icon.xxlarge.size
      }
    },
    meter: {
      background: 'background-contrast',
      color: 'dataVis-categorical-10',
      colors: ['dataVis-categorical-10', 'dataVis-categorical-20', 'dataVis-categorical-30', 'dataVis-categorical-40', 'dataVis-categorical-50', 'dataVis-categorical-60', 'dataVis-categorical-70', 'dataVis-categorical-80'],
      gap: '5xsmall'
    },
    stepper: {
      description: {
        color: 'text-default'
      },
      button: {
        pad: '5xsmall'
      },
      horizontal: {
        connector: {
          margin: '5xsmall'
        },
        button: {
          gap: '3xsmall'
        }
      },
      vertical: {
        button: {
          gap: 'xsmall'
        }
      },
      pending: {
        indicator: {
          border: 'icon-weak',
          substep: {
            iconSize: 'xsmall'
          },
          hover: {
            border: 'icon-strong'
          }
        },
        label: {
          color: 'text-default',
          hover: {
            color: 'text-strong'
          }
        },
        connector: {
          color: 'border-default'
        }
      },
      current: {
        indicator: {
          icon: CircleFill,
          background: 'background-selected-primary-strong',
          color: iconOnSelectedPrimaryStrong,
          border: 'transparent',
          substep: {
            iconSize: 'xsmall'
          },
          hover: {
            background: 'background-selected-primary-strong-hover',
            color: iconOnSelectedPrimaryStrong,
            border: 'transparent'
          }
        },
        label: {
          color: 'text-primary'
        }
      },
      currentCompleted: {
        indicator: {
          icon: Checkmark,
          background: 'background-selected-primary-strong',
          color: iconOnSelectedPrimaryStrong,
          border: 'transparent',
          substep: {
            iconSize: 'xsmall'
          },
          hover: {
            background: 'background-selected-primary-strong-hover',
            color: iconOnSelectedPrimaryStrong,
            border: 'transparent'
          }
        },
        label: {
          color: 'text-primary'
        }
      },
      completed: {
        indicator: {
          icon: Checkmark,
          color: 'icon-primary',
          border: 'icon-primary',
          substep: {
            iconSize: 'xsmall'
          },
          hover: {
            border: 'icon-primary-hover',
            color: 'icon-primary-hover'
          }
        },
        label: {
          color: 'text-primary'
        },
        connector: {
          color: 'foreground-primary'
        }
      },
      error: {
        indicator: {
          icon: StatusCritical,
          border: 'icon-critical',
          color: 'icon-critical',
          substep: {
            iconSize: 'xsmall'
          }
        },
        label: {
          color: 'text-critical'
        },
        connector: {
          color: 'border-critical'
        },
        helperText: {
          color: 'text-critical'
        }
      },
      currentError: {
        indicator: {
          icon: StatusCritical,
          border: 'transparent',
          background: 'icon-critical',
          color: 'icon-onStrong',
          substep: {
            iconSize: 'xsmall'
          },
          hover: {
            color: 'icon-onStrong'
          }
        },
        label: {
          color: 'text-critical'
        },
        connector: {
          color: 'border-critical'
        },
        helperText: {
          color: 'text-critical'
        }
      },
      disabled: {
        indicator: {
          border: 'icon-disabled',
          background: 'transparent',
          hover: {
            border: 'icon-disabled',
            background: 'transparent'
          }
        },
        label: {
          color: 'text-default'
        },
        connector: {
          color: 'border-disabled'
        },
        helperText: {
          color: 'text-default'
        }
      }
    },
    tag: {
      border: {
        color: 'border-weak'
      },
      icons: {
        remove: Close
      },
      pad: {
        horizontal: (_components$hpe$eleme = components.hpe.element) == null || (_components$hpe$eleme = _components$hpe$eleme.medium) == null || (_components$hpe$eleme = _components$hpe$eleme.paddingX) == null ? void 0 : _components$hpe$eleme["default"],
        vertical: (_components$hpe$eleme2 = components.hpe.element) == null ? void 0 : _components$hpe$eleme2.medium.paddingY
      },
      remove: {
        kind: 'default',
        margin: {
          right: '3xsmall'
        }
      },
      value: {
        weight: global.hpe.fontWeight.medium
      },
      round: 'xsmall',
      size: {
        xsmall: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme3 = components.hpe.element) == null ? void 0 : _components$hpe$eleme3.small.paddingY,
            horizontal: (_components$hpe$eleme4 = components.hpe.element) == null || (_components$hpe$eleme4 = _components$hpe$eleme4.small) == null || (_components$hpe$eleme4 = _components$hpe$eleme4.paddingX) == null ? void 0 : _components$hpe$eleme4["default"]
          },
          remove: {
            size: 'xsmall',
            margin: {
              right: 'none',
              vertical: '-1px'
            }
          }
        },
        small: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme5 = components.hpe.element) == null ? void 0 : _components$hpe$eleme5.small.paddingY,
            horizontal: (_components$hpe$eleme6 = components.hpe.element) == null || (_components$hpe$eleme6 = _components$hpe$eleme6.small) == null || (_components$hpe$eleme6 = _components$hpe$eleme6.paddingX) == null ? void 0 : _components$hpe$eleme6["default"]
          },
          remove: {
            size: 'xsmall',
            margin: {
              right: '2px'
            }
          }
        },
        medium: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme7 = components.hpe.element) == null ? void 0 : _components$hpe$eleme7.medium.paddingY,
            horizontal: (_components$hpe$eleme8 = components.hpe.element) == null || (_components$hpe$eleme8 = _components$hpe$eleme8.medium) == null || (_components$hpe$eleme8 = _components$hpe$eleme8.paddingX) == null ? void 0 : _components$hpe$eleme8["default"]
          },
          remove: {
            size: 'small',
            margin: {
              right: '5xsmall'
            }
          }
        },
        large: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme9 = components.hpe.element) == null ? void 0 : _components$hpe$eleme9.large.paddingY,
            horizontal: (_components$hpe$eleme0 = components.hpe.element) == null || (_components$hpe$eleme0 = _components$hpe$eleme0.large) == null || (_components$hpe$eleme0 = _components$hpe$eleme0.paddingX) == null ? void 0 : _components$hpe$eleme0["default"]
          },
          remove: {
            size: 'medium',
            margin: {
              right: '5xsmall'
            }
          }
        },
        xlarge: {
          icon: undefined,
          pad: {
            vertical: (_components$hpe$eleme1 = components.hpe.element) == null ? void 0 : _components$hpe$eleme1.xlarge.paddingY,
            horizontal: (_components$hpe$eleme10 = components.hpe.element) == null || (_components$hpe$eleme10 = _components$hpe$eleme10.xlarge) == null || (_components$hpe$eleme10 = _components$hpe$eleme10.paddingX) == null ? void 0 : _components$hpe$eleme10["default"]
          },
          remove: {
            size: 'large',
            margin: {
              right: '3xsmall'
            }
          }
        }
      }
    }
  };
};