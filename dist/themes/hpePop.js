"use strict";

exports.__esModule = true;
exports.isObject = exports.hpePop = exports.deepMerge = void 0;
var _grommet = require("hpe-design-tokens/grommet");
var _hpe = require("./hpe");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var isObject = exports.isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};
var _deepMerge = exports.deepMerge = function deepMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) {
    return target;
  }
  var output = _extends({}, target);
  sources.forEach(function (source) {
    if (isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = _extends({}, source[key]);
          } else {
            output[key] = _deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
};
var getThemeColor = function getThemeColor(color, theme) {
  var _theme$global$colors$;
  return typeof theme.global.colors[color] === 'string' ? theme.global.colors[color] : ((_theme$global$colors$ = theme.global.colors[color]) == null ? void 0 : _theme$global$colors$[theme.dark ? 'dark' : 'light']) || color;
};
var defaultPad = {
  small: {
    horizontal: '23px',
    vertical: '15px',
    iconOnly: '19px'
  },
  medium: {
    horizontal: '35px',
    vertical: '19px',
    iconOnly: '21px'
  },
  large: {
    horizontal: '39px',
    vertical: '21px',
    iconOnly: '23px'
  }
};
var createButtonSizes = function createButtonSizes(size) {
  return {
    "default": {
      pad: {
        horizontal: defaultPad[size].horizontal,
        vertical: defaultPad[size].vertical
      }
    },
    secondary: {
      pad: {
        // adjustment needed to accommodate border
        horizontal: parseInt(defaultPad[size].horizontal, 10) - 3 + "px",
        vertical: parseInt(defaultPad[size].vertical, 10) - 3 + "px"
      }
    },
    primary: {
      pad: {
        horizontal: defaultPad[size].horizontal,
        vertical: defaultPad[size].vertical
      }
    },
    toolbar: {
      pad: {
        horizontal: defaultPad[size].vertical,
        vertical: defaultPad[size].vertical
      }
    },
    iconOnly: {
      pad: {
        horizontal: defaultPad[size].iconOnly,
        vertical: defaultPad[size].iconOnly
      },
      secondary: {
        pad: {
          // adjustment needed to accommodate border
          horizontal: parseInt(defaultPad[size].iconOnly, 10) - 3 + "px",
          vertical: parseInt(defaultPad[size].iconOnly, 10) - 3 + "px"
        }
      }
    }
  };
};
var popButtonSizes = {
  small: createButtonSizes('small'),
  medium: createButtonSizes('medium'),
  large: createButtonSizes('large')
};
var hpePop = exports.hpePop = _deepMerge(_hpe.hpe, {
  anchor: {
    textDecoration: 'none'
  },
  button: {
    secondary: {
      border: {
        width: '4px' // TO DO update root theme border width?
      }
    },
    size: _extends({}, popButtonSizes),
    extend: function extend(_ref) {
      var sizeProp = _ref.sizeProp,
        hasLabel = _ref.hasLabel,
        hasIcon = _ref.hasIcon,
        kind = _ref.kind,
        theme = _ref.theme,
        colorValue = _ref.colorValue,
        disabled = _ref.disabled;
      var style = '';
      if (sizeProp === 'large')
        // 24px, 28px (custom instead of "large" text size)
        style += 'font-size: 1.5rem; line-height: 1.75rem;';else if (sizeProp === 'medium') style += 'line-height: 1.5rem;'; // 24px (custom instead of "medium" line-height)
      // Grommet doesn't support kind-specific iconOnly padding, so we define it here.
      if (kind === 'secondary' && hasIcon && !hasLabel) {
        style += "padding: " + popButtonSizes[sizeProp].iconOnly.secondary.pad.vertical + ";";
      }
      if (kind === 'primary' && !disabled) {
        // Temporary fix for grommet bug with light/dark logic. This temp fix will override the color prop on an icon, so this is
        // not a long term solution. Also, reliance on !important is not ideal.
        style += "color: " + getThemeColor('text-onSecondaryStrong', theme) + " !important;";
        var iconColor = theme.dark ? _grommet.dark.hpe.color.icon.onSecondaryStrong : _grommet.light.hpe.color.icon.onSecondaryStrong;
        style += "svg { stroke: " + iconColor + "; fill: " + iconColor + "; }";
      }
      if (colorValue) {
        // color prop is not recommended to be used, but providing
        // a better fallback behavior for hover styles to avoid
        // "kind" hover background from applying
        // https://github.com/grommet/grommet/issues/7504
        style += "\n          &:hover { background: " + getThemeColor(colorValue, theme) + "; }\n        ";
      }
      return style;
    }
  },
  icon: {
    size: {
      small: '16px',
      medium: '20px',
      large: '24px'
    }
  },
  heading: {
    color: 'text-strong',
    weight: 500,
    level: {
      1: {
        small: {
          size: '3rem',
          // 48px
          height: '3rem' // 48px
        },
        medium: {
          size: '4.25rem',
          // 68px
          height: '4.625rem' // 74px
        },
        large: {
          size: '5.25rem',
          // 84px
          height: '5.625rem' // 90px
        },
        xlarge: {
          // Heading condensed
          size: '6rem',
          // 96px
          height: '6rem' // 96px
        },
        xxlarge: {
          // Heading large condensed
          size: '7rem',
          // 112px
          height: '7rem' // 112px
        }
      },
      2: {
        small: {
          size: '2.25rem',
          // 36px
          height: '2.625rem' // 42px
        },
        medium: {
          size: '3.25rem',
          // 52px
          height: '3.625rem' // 58px
        },
        large: {
          size: '4.25rem',
          // 68px
          height: '4.625rem' // 74px
        },
        xlarge: {
          // Heading condensed
          size: '5.25rem',
          // 84px
          height: '5.625rem' // 90px
        },
        xxlarge: {
          // Heading large condensed
          size: '6rem',
          // 96px
          height: '6rem' // 96px
        }
      },
      3: {
        small: {
          size: '1.75rem',
          // 28px
          height: '2.125rem' // 34px
        },
        medium: {
          size: '2.25rem',
          // 36px
          height: '2.625rem' // 42px
        },
        large: {
          size: '3.25rem',
          // 52px
          height: '3.625rem' // 58px
        },
        xlarge: {
          // Heading condensed
          size: '4.25rem',
          // 68px
          height: '4.625rem' // 74px
        },
        xxlarge: {
          // Heading large condensed
          size: '5.25rem',
          // 84px
          height: '5.625rem' // 90px
        }
      },
      4: {
        small: {
          size: '1.25rem',
          // 20px
          height: '1.625rem' // 26px
        },
        medium: {
          size: '1.75rem',
          // 28px
          height: '2.125rem' // 34px
        },
        large: {
          size: '2.25rem',
          // 36px
          height: '2.625rem' // 42px
        },
        xlarge: {
          size: '3.25rem',
          // 52px
          height: '3.625rem' // 58px
        }
      },
      5: {
        small: {
          size: '1rem',
          // 16px
          height: '1.375rem' // 22px
        },
        medium: {
          size: '1.25rem',
          // 20px
          height: '1.625rem' // 26px
        },
        large: {
          size: '1.75rem',
          // 28px
          height: '2.125rem' // 34px
        },
        xlarge: {
          size: '2.25rem',
          // 36px
          height: '2.625rem' // 42px
        }
      },
      6: {
        small: {
          size: '1rem',
          // 16px
          height: '1.375rem' // 22px
        },
        medium: {
          size: '1rem',
          // 16px
          height: '1.375rem' // 22px
        },
        large: {
          size: '1.25rem',
          // 20px
          height: '1.625rem' // 26px
        },
        xlarge: {
          size: '1.75rem',
          // 28px
          height: '2.125rem' // 34px
        }
      }
    },
    extend: function extend(_ref2) {
      var level = _ref2.level,
        size = _ref2.size;
      var fontStyle = '';
      // Brand direction makes use of Graphik Condensed font for marquee page titles
      // Reserving H1 xlarge and xxlarge sizes for Condensed.
      // Levels 2 and 3 are included for how Grommet handles responsive typography,
      // for example enabling an H1 xlarge to downsize to an H2 xlarge at a breakpoint.
      if ([1, 2, 3].includes(level) && ['xlarge', 'xxlarge'].includes(size)) {
        fontStyle = "\n          font-weight: 700; \n          font-family: GraphikXXCondensed;\n          text-transform: uppercase;\n        ";
      }
      return fontStyle;
    }
  },
  paragraph: {
    xsmall: {
      // disclaimer
      size: '0.875rem',
      // 14px
      height: '1.25rem' // 20px
    },
    small: {
      // small body
      size: '1rem',
      // 16px
      height: '1.5rem' // 24px
    },
    medium: {
      // body
      size: '1.25rem',
      // 20px
      height: '1.875rem' // 30px
    },
    large: {
      // large body
      size: '1.75rem',
      // 28px
      height: '2.375rem' // 38px
    },
    xlarge: {
      // small quote
      size: '2.25rem',
      // 36px
      height: '2.875rem' // 46px
    },
    xxlarge: {
      // quote
      size: '2.75rem',
      // 44px
      height: '3.375rem' // 54px
    },
    xxxlarge: {
      // large quote
      size: '3.25rem',
      // 52px
      height: '3.875rem' // 62px
    }
  },
  text: {
    xsmall: {
      // disclaimer
      size: '0.875rem',
      // 14px
      height: '1.25rem' // 20px
    },
    small: {
      // small body
      size: '1rem',
      // 16px
      height: '1.5rem' // 24px
    },
    medium: {
      // body
      size: '1.25rem',
      // 20px
      height: '1.875rem' // 30px
    },
    large: {
      // large body
      size: '1.75rem',
      // 28px
      height: '2.375rem' // 38px
    },
    xlarge: {
      // small quote
      size: '2.25rem',
      // 36px
      height: '2.875rem' // 46px
    },
    xxlarge: {
      // quote
      size: '2.75rem',
      // 44px
      height: '3.375rem' // 54px
    },
    xxxlarge: {
      // large quote
      size: '3.25rem',
      // 52px
      height: '3.875rem' // 62px
    }
  }
});