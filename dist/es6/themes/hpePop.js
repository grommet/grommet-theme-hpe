function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { hpe } from './hpe';
export var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};
var _deepMerge = function deepMerge(target) {
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
export { _deepMerge as deepMerge };
export var hpePop = _deepMerge(hpe, {
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
    extend: function extend(_ref) {
      var level = _ref.level,
        size = _ref.size;
      var font = '';
      // Brand direction makes use of Graphik Condensed font for marquee page titles
      // Reserving H1 xlarge and xxlarge sizes for Condensed.
      // Levels 2 and 3 are included for how Grommet handles responsive typography,
      // for example enabling an H1 xlarge to downsize to an H2 xlarge at a breakpoint.
      if ([1, 2, 3].includes(level) && ['xlarge', 'xxlarge'].includes(size)) {
        font = 'font-weight: 700; font-family: GraphikXXCondensed;';
      }
      return font;
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