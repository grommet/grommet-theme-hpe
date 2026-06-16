export var buildMiscTheme = function buildMiscTheme(tokens, context) {
  var _components$hpe$eleme, _components$hpe$eleme2, _components$hpe$eleme3, _components$hpe$eleme4, _components$hpe$eleme5, _components$hpe$eleme6, _components$hpe$eleme7, _components$hpe$eleme8, _components$hpe$eleme9, _components$hpe$eleme0, _components$hpe$eleme1, _components$hpe$eleme10;
  var components = tokens.components,
    global = tokens.global,
    large = tokens.large;
  var Close = context.icons.Close;
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