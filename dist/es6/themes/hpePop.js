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
    weight: 400,
    level: {
      1: {
        font: {
          weight: 400
        },
        small: {
          size: '3rem',
          // 48px
          height: '3rem' // 48px
        },
        medium: {
          size: '4.5rem',
          // 72px
          height: '4.5rem' // 72px
        },
        large: {
          size: '6rem',
          // 96px
          height: '6rem' // 96px
        },
        xlarge: {
          size: '7.5rem',
          // 120px
          height: '7.5rem' // 120px
        }
      },
      2: {
        small: {
          size: '2.25rem',
          // 36px
          height: '2.25rem' // 36px
        },
        medium: {
          size: '3rem',
          // 48px
          height: '3rem' // 48px
        },
        large: {
          size: '4.5rem',
          // 72px
          height: '4.5rem' // 72px
        },
        xlarge: {
          size: '6rem',
          // 96px
          height: '6rem' // 96px
        }
      },
      3: {
        small: {
          size: '1.5rem',
          // 24px
          height: '1.5rem' // 24px
        },
        medium: {
          size: '2.25rem',
          // 36px
          height: '2.25rem' // 36px
        },
        large: {
          size: '3rem',
          // 48px
          height: '3rem' // 48px
        },
        xlarge: {
          size: '4.5rem',
          // 72px
          height: '4.5rem' // 72px
        }
      },
      4: {
        font: {
          weight: 500
        },
        small: {
          size: '1.125rem',
          // 18px
          height: '1.125rem' // 18px
        },
        medium: {
          size: '1.5rem',
          // 24px
          height: '1.5rem' // 24px
        },
        large: {
          size: '2.25rem',
          // 36px
          height: '2.25rem' // 36px
        },
        xlarge: {
          size: '3rem',
          // 48px
          height: '3rem' // 48px
        }
      },
      5: {
        font: {
          weight: 500
        },
        small: {
          size: '1rem',
          // 16px
          height: '1rem' // 16px
        },
        medium: {
          size: '1.125rem',
          // 18px
          height: '1.125rem' // 18px
        },
        large: {
          size: '1.5rem',
          // 24px
          height: '1.5rem' // 24px
        },
        xlarge: {
          size: '2.25rem',
          // 36px
          height: '2.25rem' // 36px
        }
      },
      6: {
        font: {
          weight: 500
        },
        small: {
          size: '0.875rem',
          // 14px
          height: '0.875rem' // 14px
        },
        medium: {
          size: '1rem',
          // 16px
          height: '1rem' // 16px
        },
        large: {
          size: '1.125rem',
          // 18px
          height: '1.125rem' // 18px
        },
        xlarge: {
          size: '1.5rem',
          // 24px
          height: '1.5rem' // 24px
        }
      }
    }
  },
  paragraph: {
    small: {
      size: '1rem',
      // 16px
      height: '1.25rem' // 20px
    },
    medium: {
      size: '1.125rem',
      // 18px
      height: '1.375rem' // 22px
    },
    large: {
      size: '1.5rem',
      // 24px
      height: '1.875rem' // 30px
    },
    xlarge: {
      size: '2.25rem',
      // 36px
      height: '2.625rem' // 42px
    },
    xxlarge: {
      size: '2.625rem',
      // 42px
      height: '3rem' // 48px
    }
  },
  text: {
    xsmall: {
      // weight needs to be modified at the size level
      size: '0.875rem',
      // 14px
      height: '1.125rem' // 18px
    },
    small: {
      // weight needs to be modified at the size level
      size: '1rem',
      // 16px
      height: '1.25rem' // 20px
    },
    medium: {
      // weight needs to be modified at the size level
      size: '1.125rem',
      // 18px
      height: '1.375rem' // 22px
    },
    large: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '1.5rem',
      // 24px
      height: '1.875rem' // 30px
    },
    xlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '2.25rem',
      // 36px
      height: '2.625rem' // 42px
    },
    // xxlarge is not part of Chris's type exploration
    xxlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '2.625rem',
      // 42px
      height: '3rem' // 48px
    }
  }
});