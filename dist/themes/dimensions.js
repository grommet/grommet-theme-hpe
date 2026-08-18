"use strict";

exports.__esModule = true;
exports.buildDimensions = void 0;
var _utils = require("./utils");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
// static global sizes for backwards compatibility with v6 theme. Dimension tokens
// were introduced in v7 as the new spacing system was introduced, requiring
// consumers to remap t-shirt sizes for layout parity.
var globalSizes = {
  borderSize: {
    xsmall: '1px',
    small: '2px',
    medium: _utils.baseSpacing / 6 + "px",
    // 4
    large: _utils.baseSpacing / 2 + "px",
    // 12
    xlarge: _utils.baseSpacing + "px",
    // 24
    "default": '1px'
  },
  edgeSize: {
    none: '0px',
    hair: '1px',
    // for Chart
    xxsmall: _utils.baseSpacing / 8 + "px",
    // 3
    xsmall: _utils.baseSpacing / 4 + "px",
    // 6
    small: _utils.baseSpacing / 2 + "px",
    // 12
    medium: _utils.baseSpacing + "px",
    // 24
    large: _utils.baseSpacing * 2 + "px",
    // 48
    xlarge: _utils.baseSpacing * 4 + "px",
    // 96
    responsiveBreakpoint: 'small'
  },
  // same as edgeSize for backwards compatibility
  radius: {
    none: '0px',
    hair: '1px',
    // for Chart
    xxsmall: _utils.baseSpacing / 8 + "px",
    // 3
    xsmall: _utils.baseSpacing / 4 + "px",
    // 6
    small: _utils.baseSpacing / 2 + "px",
    // 12
    medium: _utils.baseSpacing + "px",
    // 24
    large: _utils.baseSpacing * 2 + "px",
    // 48
    xlarge: _utils.baseSpacing * 4 + "px",
    // 96
    responsiveBreakpoint: 'small'
  },
  size: {
    xxsmall: _utils.baseSpacing * 2 + "px",
    // 48
    xsmall: _utils.baseSpacing * 4 + "px",
    // 96
    small: _utils.baseSpacing * 8 + "px",
    // 192
    medium: _utils.baseSpacing * 16 + "px",
    // 384
    large: _utils.baseSpacing * 32 + "px",
    // 768
    xlarge: _utils.baseSpacing * 48 + "px",
    // 1152
    xxlarge: _utils.baseSpacing * 64 + "px",
    // 1536
    full: '100%'
  }
};

// static responsive global sizes for backwards compatibility with v6 theme.
// Dimension tokens were introduced in v7 as the new spacing system was introduced,
// requiring consumers to remap t-shirt sizes for layout parity.
var responsiveGlobalSizes = {
  borderSize: {
    xsmall: '1px',
    small: '2px',
    medium: _utils.baseSpacing / 6 + "px",
    // 4
    large: _utils.baseSpacing / 4 + "px",
    // 6
    xlarge: _utils.baseSpacing / 2 + "px",
    // 12
    "default": '1px'
  },
  edgeSize: {
    none: '0px',
    hair: '1px',
    // for Chart
    xxsmall: '2px',
    xsmall: _utils.baseSpacing / 8 + "px",
    // 3
    small: _utils.baseSpacing / 4 + "px",
    // 6
    medium: _utils.baseSpacing / 2 + "px",
    // 12
    large: _utils.baseSpacing + "px",
    // 24
    xlarge: _utils.baseSpacing * 2 + "px" // 48
  },
  // same as edgeSize for backwards compatibility
  radius: {
    none: '0px',
    hair: '1px',
    // for Chart
    xxsmall: '2px',
    xsmall: _utils.baseSpacing / 8 + "px",
    // 3
    small: _utils.baseSpacing / 4 + "px",
    // 6
    medium: _utils.baseSpacing / 2 + "px",
    // 12
    large: _utils.baseSpacing + "px",
    // 24
    xlarge: _utils.baseSpacing * 2 + "px" // 48
  },
  size: {
    xxsmall: _utils.baseSpacing + "px",
    // 24
    xsmall: _utils.baseSpacing * 2 + "px",
    // 48
    small: _utils.baseSpacing * 4 + "px",
    // 96
    medium: _utils.baseSpacing * 8 + "px",
    // 192
    large: _utils.baseSpacing * 16 + "px",
    // 384
    xlarge: _utils.baseSpacing * 32 + "px",
    // 768
    full: '100%'
  }
};
var buildDimensions = exports.buildDimensions = function buildDimensions(tokens, flags) {
  var small = tokens.small,
    large = tokens.large,
    global = tokens.global;
  var size = function size(breakpoint) {
    return {
      '5xsmall': breakpoint.hpe.container['5xsmall'],
      '4xsmall': breakpoint.hpe.container['4xsmall'],
      '3xsmall': breakpoint.hpe.container['3xsmall'],
      xxsmall: breakpoint.hpe.container.xxsmall,
      xsmall: breakpoint.hpe.container.xsmall,
      small: breakpoint.hpe.container.small,
      medium: breakpoint.hpe.container.medium,
      large: breakpoint.hpe.container.large,
      xlarge: breakpoint.hpe.container.xlarge,
      xxlarge: breakpoint.hpe.container.xxlarge,
      '3xlarge': breakpoint.hpe.container['3xlarge'],
      full: '100%'
    };
  };
  return _extends({}, flags['v6-backwards-compatibility'] ? globalSizes : {
    borderSize: {
      xsmall: large.hpe.borderWidth.xsmall,
      small: large.hpe.borderWidth.small,
      medium: large.hpe.borderWidth.medium,
      "default": large.hpe.borderWidth["default"],
      large: large.hpe.borderWidth.large
    },
    edgeSize: {
      none: large.hpe.spacing.none,
      hair: large.hpe.spacing.hair,
      '5xsmall': large.hpe.spacing['5xsmall'],
      '4xsmall': large.hpe.spacing['4xsmall'],
      '3xsmall': large.hpe.spacing['3xsmall'],
      xxsmall: large.hpe.spacing.xxsmall,
      xsmall: large.hpe.spacing.xsmall,
      small: large.hpe.spacing.small,
      medium: large.hpe.spacing.medium,
      large: large.hpe.spacing.large,
      xlarge: large.hpe.spacing.xlarge,
      xxlarge: large.hpe.spacing.xxlarge,
      '3xlarge': large.hpe.spacing['3xlarge'],
      responsiveBreakpoint: 'small'
    },
    radius: {
      none: large.hpe.radius.none,
      hair: large.hpe.radius.hair,
      xxsmall: large.hpe.radius.xxsmall,
      xsmall: large.hpe.radius.xsmall,
      small: large.hpe.radius.small,
      medium: large.hpe.radius.medium,
      large: large.hpe.radius.large,
      xlarge: large.hpe.radius.xlarge,
      xxlarge: large.hpe.radius.xxlarge,
      full: large.hpe.radius.full,
      responsiveBreakpoint: 'small'
    },
    size: size(large)
  }, {
    breakpoints: {
      xsmall: _extends({}, flags['v6-backwards-compatibility'] ? responsiveGlobalSizes : {
        borderSize: {
          xsmall: small.hpe.borderWidth.xsmall,
          small: small.hpe.borderWidth.small,
          medium: small.hpe.borderWidth.medium,
          "default": small.hpe.borderWidth["default"],
          large: small.hpe.borderWidth.large
        },
        edgeSize: {
          none: small.hpe.spacing.none,
          hair: small.hpe.spacing.hair,
          '5xsmall': small.hpe.spacing['5xsmall'],
          '4xsmall': small.hpe.spacing['4xsmall'],
          '3xsmall': small.hpe.spacing['3xsmall'],
          xxsmall: small.hpe.spacing.xxsmall,
          xsmall: small.hpe.spacing.xsmall,
          small: small.hpe.spacing.small,
          medium: small.hpe.spacing.medium,
          large: small.hpe.spacing.large,
          xlarge: small.hpe.spacing.xlarge,
          xxlarge: small.hpe.spacing.xxlarge,
          '3xlarge': small.hpe.spacing['3xlarge'],
          responsiveBreakpoint: 'small'
        },
        radius: {
          none: small.hpe.radius.none,
          hair: small.hpe.radius.hair,
          xxsmall: small.hpe.radius.xxsmall,
          xsmall: small.hpe.radius.xsmall,
          small: small.hpe.radius.small,
          medium: small.hpe.radius.medium,
          large: small.hpe.radius.large,
          xlarge: small.hpe.radius.xlarge,
          xxlarge: small.hpe.radius.xxlarge,
          full: small.hpe.radius.full,
          responsiveBreakpoint: 'small'
        },
        size: size(small)
      }, {
        value: parseInt(global.hpe.breakpoint.xsmall, 10)
      }),
      small: _extends({}, flags['v6-backwards-compatibility'] ? responsiveGlobalSizes : {
        borderSize: {
          xsmall: small.hpe.borderWidth.xsmall,
          small: small.hpe.borderWidth.small,
          medium: small.hpe.borderWidth.medium,
          "default": small.hpe.borderWidth["default"],
          large: small.hpe.borderWidth.large
        },
        edgeSize: {
          none: small.hpe.spacing.none,
          hair: small.hpe.spacing.hair,
          '5xsmall': small.hpe.spacing['5xsmall'],
          '4xsmall': small.hpe.spacing['4xsmall'],
          '3xsmall': small.hpe.spacing['3xsmall'],
          xxsmall: small.hpe.spacing.xxsmall,
          xsmall: small.hpe.spacing.xsmall,
          small: small.hpe.spacing.small,
          medium: small.hpe.spacing.medium,
          large: small.hpe.spacing.large,
          xlarge: small.hpe.spacing.xlarge,
          xxlarge: small.hpe.spacing.xxlarge,
          '3xlarge': small.hpe.spacing['3xlarge'],
          responsiveBreakpoint: 'small'
        },
        radius: {
          none: small.hpe.radius.none,
          hair: small.hpe.radius.hair,
          xxsmall: small.hpe.radius.xxsmall,
          xsmall: small.hpe.radius.xsmall,
          small: small.hpe.radius.small,
          medium: small.hpe.radius.medium,
          large: small.hpe.radius.large,
          xlarge: small.hpe.radius.xlarge,
          xxlarge: small.hpe.radius.xxlarge,
          full: small.hpe.radius.full,
          responsiveBreakpoint: 'small'
        },
        size: size(small)
      }, {
        value: parseInt(global.hpe.breakpoint.small, 10)
      }),
      medium: {
        value: parseInt(global.hpe.breakpoint.medium, 10)
      },
      large: {
        value: parseInt(global.hpe.breakpoint.large, 10)
      },
      xlarge: {}
    }
  });
};