"use strict";

exports.__esModule = true;
exports.isObject = exports.hpeWeb = exports.deepMerge = void 0;
var _hpe = require("./hpe");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};
exports.isObject = isObject;
var deepMerge = function deepMerge(target) {
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
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
};
exports.deepMerge = deepMerge;
var hpeWeb = deepMerge(_hpe.hpe, {
  heading: {
    color: 'text-strong',
    weight: 400,
    level: {
      1: {
        small: {
          size: '48px',
          height: '48px'
        },
        medium: {
          size: '72px',
          height: '72px'
        },
        large: {
          size: '96px',
          height: '96px'
        },
        xlarge: {
          size: '120px',
          height: '120px'
        }
      },
      2: {
        small: {
          size: '36px',
          height: '36px'
        },
        medium: {
          size: '48px',
          height: '48px'
        },
        large: {
          size: '72px',
          height: '72px'
        },
        xlarge: {
          size: '96px',
          height: '96px'
        }
      },
      3: {
        small: {
          size: '24px',
          height: '24px'
        },
        medium: {
          size: '36px',
          height: '36px'
        },
        large: {
          size: '48px',
          height: '48px'
        },
        xlarge: {
          size: '72px',
          height: '72px'
        }
      },
      4: {
        font: {
          weight: 500
        },
        small: {
          size: '18px',
          height: '18px'
        },
        medium: {
          size: '24px',
          height: '24px'
        },
        large: {
          size: '36px',
          height: '36px'
        },
        xlarge: {
          size: '48px',
          height: '48px'
        }
      },
      5: {
        font: {
          weight: 500
        },
        small: {
          size: '16px',
          height: '16px'
        },
        medium: {
          size: '18px',
          height: '18px'
        },
        large: {
          size: '24px',
          height: '24px'
        },
        xlarge: {
          size: '36px',
          height: '36px'
        }
      },
      6: {
        font: {
          weight: 500
        },
        small: {
          size: '14px',
          height: '14px'
        },
        medium: {
          size: '16px',
          height: '16px'
        },
        large: {
          size: '18px',
          height: '18px'
        },
        xlarge: {
          size: '24px',
          height: '24px'
        }
      }
    },
    extend: function extend(_ref) {
      var level = _ref.level,
        size = _ref.size;
      var fontWeight = '';
      if (level === 3 && size === 'small') {
        fontWeight = 'font-weight: 500;';
      } else if (level === 4 && ['large', 'xlarge'].includes(size)) {
        fontWeight = 'font-weight: 400;';
      } else if (level === 5 && size === 'xlarge') {
        fontWeight = 'font-weight: 400;';
      } else if (level === 6 && size === 'small') {
        fontWeight = 'font-weight: 600;';
      }
      return fontWeight;
    }
  },
  paragraph: {
    small: {
      size: '16px',
      height: '20px'
    },
    medium: {
      size: '18px',
      height: '22px'
    },
    large: {
      size: '24px',
      height: '30px'
    },
    xlarge: {
      size: '36px',
      height: '42px'
    },
    xxlarge: {
      size: '42px',
      height: '48px'
    },
    extend: function extend(_ref2) {
      var size = _ref2.size;
      if (['large', 'xlarge', 'xxlarge'].includes(size)) return 'font-weight: 300;';
      return '';
    }
  },
  text: {
    xsmall: {
      // weight needs to be modified at the size level
      size: '14px',
      height: '18px'
    },
    small: {
      // weight needs to be modified at the size level
      size: '16px',
      height: '20px'
    },
    medium: {
      // weight needs to be modified at the size level
      size: '18px',
      height: '22px'
    },
    large: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '24px',
      height: '30px'
    },
    xlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '36px',
      height: '42px'
    },
    // xxlarge is not part of Chris's type exploration
    xxlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '42px',
      height: '48px'
    },
    extend: function extend(_ref3) {
      var size = _ref3.size;
      if (['large', 'xlarge', 'xxlarge', '3xl', '4xl', '5xl', '6xl'].includes(size)) return 'font-weight: 300;';
      return '';
    }
  }
});
exports.hpeWeb = hpeWeb;