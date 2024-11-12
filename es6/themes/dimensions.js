import { global, large, small } from 'hpe-design-tokens';
export var dimensions = {
  borderSize: {
    xsmall: large.hpe.borderWidth.xsmall,
    small: large.hpe.borderWidth.small,
    medium: large.hpe.borderWidth.medium,
    "default": large.hpe.borderWidth["default"],
    large: large.hpe.borderWidth.large,
    xlarge: large.hpe.borderWidth.xlarge
  },
  edgeSize: {
    none: large.hpe.spacing.none,
    hair: large.hpe.spacing.hair,
    xxsmall: large.hpe.spacing.xxsmall,
    xsmall: large.hpe.spacing.xsmall,
    small: large.hpe.spacing.small,
    medium: large.hpe.spacing.medium,
    large: large.hpe.spacing.large,
    xlarge: large.hpe.spacing.xlarge,
    responsiveBreakpoint: 'small'
  },
  size: {
    xxsmall: large.hpe.size.content.xxsmall,
    xsmall: large.hpe.size.content.xsmall,
    small: large.hpe.size.content.small,
    medium: large.hpe.size.content.medium,
    large: large.hpe.size.content.large,
    xlarge: large.hpe.size.content.xlarge,
    xxlarge: large.hpe.size.content.xxlarge,
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