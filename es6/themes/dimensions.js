import { global, medium, small } from 'hpe-design-tokens';
export var dimensions = {
  borderSize: {
    xsmall: medium.hpe.borderWidth.xsmall,
    small: medium.hpe.borderWidth.small,
    medium: medium.hpe.borderWidth.medium,
    "default": medium.hpe.borderWidth["default"],
    large: medium.hpe.borderWidth.large,
    xlarge: medium.hpe.borderWidth.xlarge
  },
  edgeSize: {
    none: medium.hpe.spacing.none,
    hair: medium.hpe.spacing.hair,
    xxsmall: medium.hpe.spacing.xxsmall,
    xsmall: medium.hpe.spacing.xsmall,
    small: medium.hpe.spacing.small,
    medium: medium.hpe.spacing.medium,
    large: medium.hpe.spacing.large,
    xlarge: medium.hpe.spacing.xlarge,
    responsiveBreakpoint: 'small'
  },
  size: {
    xxsmall: medium.hpe.size.content.xxsmall,
    xsmall: medium.hpe.size.content.xsmall,
    small: medium.hpe.size.content.small,
    medium: medium.hpe.size.content.medium,
    large: medium.hpe.size.content.large,
    xlarge: medium.hpe.size.content.xlarge,
    xxlarge: medium.hpe.size.content.xxlarge,
    full: '100%'
  },
  breakpoints: {
    xsmall: {
      borderSize: {
        xsmall: small.hpe.borderWidth.xsmall,
        small: small.hpe.borderWidth.small,
        medium: small.hpe.borderWidth.medium,
        "default": small.hpe.borderWidth["default"],
        large: small.hpe.borderWidth.large,
        xlarge: small.hpe.borderWidth.xlarge
      },
      edgeSize: {
        none: small.hpe.spacing.none,
        hair: small.hpe.spacing.hair,
        xxsmall: small.hpe.spacing.xxsmall,
        xsmall: small.hpe.spacing.xsmall,
        small: small.hpe.spacing.small,
        medium: small.hpe.spacing.medium,
        large: small.hpe.spacing.large,
        xlarge: small.hpe.spacing.xlarge,
        responsiveBreakpoint: 'small'
      },
      size: {
        xxsmall: small.hpe.size.content.xxsmall,
        xsmall: small.hpe.size.content.xsmall,
        small: small.hpe.size.content.small,
        medium: small.hpe.size.content.medium,
        large: small.hpe.size.content.large,
        xlarge: small.hpe.size.content.xlarge,
        xxlarge: small.hpe.size.content.xxlarge,
        full: '100%'
      },
      value: global.hpe.breakpoint.xsmall
    },
    small: {
      borderSize: {
        xsmall: small.hpe.borderWidth.xsmall,
        small: small.hpe.borderWidth.small,
        medium: small.hpe.borderWidth.medium,
        "default": small.hpe.borderWidth["default"],
        large: small.hpe.borderWidth.large,
        xlarge: small.hpe.borderWidth.xlarge
      },
      edgeSize: {
        none: small.hpe.spacing.none,
        hair: small.hpe.spacing.hair,
        xxsmall: small.hpe.spacing.xxsmall,
        xsmall: small.hpe.spacing.xsmall,
        small: small.hpe.spacing.small,
        medium: small.hpe.spacing.medium,
        large: small.hpe.spacing.large,
        xlarge: small.hpe.spacing.xlarge,
        responsiveBreakpoint: 'small'
      },
      size: {
        xxsmall: small.hpe.size.content.xxsmall,
        xsmall: small.hpe.size.content.xsmall,
        small: small.hpe.size.content.small,
        medium: small.hpe.size.content.medium,
        large: small.hpe.size.content.large,
        xlarge: small.hpe.size.content.xlarge,
        xxlarge: small.hpe.size.content.xxlarge,
        full: '100%'
      },
      value: global.hpe.breakpoint.small
    },
    medium: {
      value: global.hpe.breakpoint.medium
    },
    large: {
      value: global.hpe.breakpoint.large
    },
    xlarge: {}
  }
};