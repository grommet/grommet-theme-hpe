// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
export var buildFeedbackTheme = function buildFeedbackTheme(tokens, icons) {
  var _components$hpe$eleme, _components$hpe$eleme2, _components$hpe$eleme3, _components$hpe$eleme4, _components$hpe$eleme5;
  var global = tokens.global,
    components = tokens.components;
  var Close = icons.Close,
    Info = icons.Info,
    StatusCritical = icons.StatusCritical,
    StatusGood = icons.StatusGood,
    StatusUnknown = icons.StatusUnknown,
    StatusWarning = icons.StatusWarning;
  return {
    layer: {
      background: 'background-floating',
      border: {
        radius: 'medium',
        intelligentRounding: true
      },
      container: {
        elevation: 'large',
        height: {
          min: '5xsmall'
        }
      },
      overlay: {
        background: 'background-screenOverlay'
      },
      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment allows for Layer modals and side-drawers
       * to sit atop the Global header. */
      zIndex: '110'
    },
    notification: {
      close: {
        icon: Close
      },
      container: {
        round: 'xsmall',
        pad: {
          horizontal: 'xsmall',
          vertical: '3xsmall'
        }
      },
      direction: 'column',
      gap: 'xsmall',
      global: {
        direction: 'row',
        container: {
          round: 'none',
          pad: {
            horizontal: 'xlarge',
            vertical: '3xsmall'
          }
        }
      },
      iconContainer: {
        pad: {
          right: 'xsmall'
        }
      },
      textContainer: {
        gap: 'medium'
      },
      message: {
        color: 'text',
        fill: true,
        text: {
          margin: {
            right: '3xsmall'
          }
        }
      },
      title: {
        color: 'text-strong',
        weight: global.hpe.fontWeight.medium
      },
      critical: {
        icon: StatusCritical,
        background: 'background-critical',
        color: 'icon-critical',
        message: {
          color: 'text-onCritical'
        },
        title: {
          color: 'text-onCritical-strong'
        },
        global: {
          background: 'background-critical',
          message: {
            color: 'text-onCritical'
          },
          title: {
            color: 'text-onCritical-strong'
          }
        },
        toast: {
          background: 'background-front',
          message: {
            color: 'text'
          },
          title: {
            color: 'text-strong'
          }
        }
      },
      warning: {
        icon: StatusWarning,
        background: 'background-warning',
        color: 'icon-warning',
        message: {
          color: 'text-onWarning'
        },
        title: {
          color: 'text-onWarning-strong'
        },
        global: {
          background: 'background-warning',
          message: {
            color: 'text-onWarning'
          },
          title: {
            color: 'text-onWarning-strong'
          }
        },
        toast: {
          background: 'background-front',
          message: {
            color: 'text'
          },
          title: {
            color: 'text-strong'
          }
        }
      },
      normal: {
        icon: StatusGood,
        background: 'background-ok',
        color: 'icon-ok',
        message: {
          color: 'text-onOk'
        },
        title: {
          color: 'text-onOk-strong'
        },
        global: {
          background: 'background-ok',
          message: {
            color: 'text-onOk'
          },
          title: {
            color: 'text-onOk-strong'
          }
        },
        toast: {
          background: 'background-front',
          message: {
            color: 'text'
          },
          title: {
            color: 'text-strong'
          }
        }
      },
      unknown: {
        icon: StatusUnknown,
        background: 'background-unknown',
        color: 'icon-unknown',
        message: {
          color: 'text-onUnknown'
        },
        title: {
          color: 'text-onUnknown-strong'
        },
        global: {
          background: 'background-unknown',
          message: {
            color: 'text-onUnknown'
          },
          title: {
            color: 'text-onUnknown-strong'
          }
        },
        toast: {
          background: 'background-front',
          message: {
            color: 'text'
          },
          title: {
            color: 'text-strong'
          }
        }
      },
      info: {
        icon: Info,
        background: 'background-info',
        color: 'icon-info',
        message: {
          color: 'text-onInfo'
        },
        title: {
          color: 'text-onInfo-strong'
        },
        global: {
          background: 'background-info',
          message: {
            color: 'text-onInfo'
          },
          title: {
            color: 'text-onInfo-strong'
          }
        },
        toast: {
          background: 'background-front',
          message: {
            color: 'text'
          },
          title: {
            color: 'text-strong'
          }
        }
      },
      undefined: {
        icon: StatusUnknown,
        background: 'background-unknown',
        message: {
          color: 'text-onUnknown'
        },
        title: {
          color: 'text-onUnknown-strong'
        },
        global: {
          background: 'background-ok',
          message: {
            color: 'text-onUnknown'
          },
          title: {
            color: 'text-onUnknown-strong'
          }
        },
        toast: {
          background: 'background-front',
          message: {
            color: 'text'
          },
          title: {
            color: 'text-strong'
          }
        }
      },
      actions: {
        margin: {
          right: '3xsmall'
        }
      }
    },
    spinner: {
      container: {
        pad: 'none',
        color: 'foreground-primary',
        border: [{
          color: 'transparent',
          side: 'all',
          size: 'medium'
        }, {
          color: 'transparent',
          side: 'right',
          size: 'medium'
        }, {
          color: 'transparent',
          side: 'top',
          size: 'medium'
        }, {
          color: 'transparent',
          side: 'left',
          size: 'medium'
        }]
      },
      responsive: false,
      size: {
        xsmall: (_components$hpe$eleme = components.hpe.element) == null ? void 0 : _components$hpe$eleme.xsmall.minHeight,
        small: (_components$hpe$eleme2 = components.hpe.element) == null ? void 0 : _components$hpe$eleme2.small.minHeight,
        medium: (_components$hpe$eleme3 = components.hpe.element) == null ? void 0 : _components$hpe$eleme3.medium.minHeight,
        large: (_components$hpe$eleme4 = components.hpe.element) == null ? void 0 : _components$hpe$eleme4.large.minHeight,
        xlarge: (_components$hpe$eleme5 = components.hpe.element) == null ? void 0 : _components$hpe$eleme5.xlarge.minHeight
      }
    }
  };
};