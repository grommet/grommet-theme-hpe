// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP

import React from 'react';
import { css } from 'styled-components';
import {
  light,
  dark,
  components,
  global,
  large,
  small,
} from 'hpe-design-tokens';
import { Ascending } from 'grommet-icons/icons/Ascending';
import { Blank } from 'grommet-icons/icons/Blank';
import { CircleAlert } from 'grommet-icons/icons/CircleAlert';
import { Close } from 'grommet-icons/icons/Close';
import { Descending } from 'grommet-icons/icons/Descending';
import { Down } from 'grommet-icons/icons/Down';
import { Next } from 'grommet-icons/icons/Next';
import { Previous } from 'grommet-icons/icons/Previous';
import { Unsorted } from 'grommet-icons/icons/Unsorted';
import { Up } from 'grommet-icons/icons/Up';
import { Hpe } from 'grommet-icons/icons/Hpe';

import { backgrounds } from './backgrounds';
import { colors } from './colors';

const baseSpacing = 24;

const isObject = (item) =>
  item && typeof item === 'object' && !Array.isArray(item);

const deepFreeze = (obj) => {
  Object.keys(obj).forEach(
    (key) => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

// necessary to apply a linear gradient for primary button background
const primaryBackground = (props) =>
  !props.active
    ? `background: ${
        components.hpe.button.primary.enabled.background
      }; background-color: ${
        props.theme.global.colors[
          components.hpe.button.primary.enabled.backgroundColor
        ][props.theme.dark ? 'dark' : 'light']
      };`
    : '';

// necessary to adjust the background color
// of button to darker green to expose gradient on hover
const primaryHoverBackground = (props) =>
  !props.active
    ? `background-color: ${components.hpe.button.primary.hover.background};`
    : `color: ${
        props.theme.global.colors[
          components.hpe.button.primary.selected.enabled.textColor
        ][props.theme.dark ? 'dark' : 'light']
      }`;

const dimensions = {
  borderSize: {
    xsmall: large.hpe.borderWidth.xsmall,
    small: large.hpe.borderWidth.small,
    medium: large.hpe.borderWidth.medium,
    default: large.hpe.borderWidth.default,
    large: large.hpe.borderWidth.large,
    xlarge: large.hpe.borderWidth.xlarge,
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
    responsiveBreakpoint: 'small',
  },
  size: {
    xxsmall: large.hpe.size.content.xxsmall,
    xsmall: large.hpe.size.content.xsmall,
    small: large.hpe.size.content.small,
    medium: large.hpe.size.content.medium,
    large: large.hpe.size.content.large,
    xlarge: large.hpe.size.content.xlarge,
    xxlarge: large.hpe.size.content.xxlarge,
    full: '100%',
  },
  breakpoints: {
    xsmall: {
      borderSize: {
        xsmall: small.hpe.borderWidth.xsmall,
        small: small.hpe.borderWidth.small,
        medium: small.hpe.borderWidth.medium,
        default: small.hpe.borderWidth.default,
        large: small.hpe.borderWidth.large,
        xlarge: small.hpe.borderWidth.xlarge,
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
        responsiveBreakpoint: 'small',
      },
      size: {
        xxsmall: small.hpe.size.content.xxsmall,
        xsmall: small.hpe.size.content.xsmall,
        small: small.hpe.size.content.small,
        medium: small.hpe.size.content.medium,
        large: small.hpe.size.content.large,
        xlarge: small.hpe.size.content.xlarge,
        xxlarge: small.hpe.size.content.xxlarge,
        full: '100%',
      },
      value: global.hpe.breakpoint.xsmall,
    },
    small: {
      borderSize: {
        xsmall: small.hpe.borderWidth.xsmall,
        small: small.hpe.borderWidth.small,
        medium: small.hpe.borderWidth.medium,
        default: small.hpe.borderWidth.default,
        large: small.hpe.borderWidth.large,
        xlarge: small.hpe.borderWidth.xlarge,
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
        responsiveBreakpoint: 'small',
      },
      size: {
        xxsmall: small.hpe.size.content.xxsmall,
        xsmall: small.hpe.size.content.xsmall,
        small: small.hpe.size.content.small,
        medium: small.hpe.size.content.medium,
        large: small.hpe.size.content.large,
        xlarge: small.hpe.size.content.xlarge,
        xxlarge: small.hpe.size.content.xxlarge,
        full: '100%',
      },
      value: global.hpe.breakpoint.small,
    },
    medium: {
      value: global.hpe.breakpoint.medium,
    },
    large: {
      value: global.hpe.breakpoint.large,
    },
    xlarge: {},
  },
};

// option button kind styles. abstracted so select.emptySearchMessage
// can reference pad value
const option = {
  color: components.hpe.select.option.enabled.textColor,
  border: {
    radius:
      dimensions.edgeSize[components.hpe.select.medium.option.borderRadius] ||
      components.hpe.select.medium.option.borderRadius,
    width:
      dimensions.borderSize[components.hpe.select.medium.option.borderWidth] ||
      components.hpe.select.medium.option.borderWidth,
    color: components.hpe.select.option.enabled.borderColor,
  },
  pad: {
    horizontal: components.hpe.select.medium.option.paddingX,
    vertical: components.hpe.select.medium.option.paddingY,
  },
  font: {
    weight: components.hpe.select.option.enabled.fontWeight,
  },
};

// abstracted so button and pinned list icon can reference
const mediumIconOnlyPad = {
  vertical: components.hpe.button.medium.default.iconOnly.paddingY,
  horizontal: components.hpe.button.medium.default.iconOnly.paddingX,
};

export const hpe = deepFreeze({
  defaultMode: 'light',
  global: {
    backgrounds, // TO DO backgrounds
    ...dimensions,
    colors,
    control: {
      border: {
        radius: components.hpe.formField.medium.input.container.borderRadius,
        color: components.hpe.formField.input.container.enabled.borderColor,
      },
    },
    input: {
      font: {
        height: 'inherit',
        weight: components.hpe.formField.medium.valueText.fontWeight,
      },
      padding: {
        horizontal: components.hpe.formField.medium.input.container.paddingX,
        vertical: components.hpe.formField.medium.input.container.paddingY,
      },
      readOnly: {
        background:
          components.hpe.formField.input.container.readOnly.background,
        border: {
          color: components.hpe.formField.input.container.readOnly.borderColor,
        },
      },
      extend: `
        &::-webkit-input-placeholder {
        font-weight: ${components.hpe.formField.medium.placeholderText.fontWeight};
      }
    
      &::-moz-placeholder {
        font-weight: ${components.hpe.formField.medium.placeholderText.fontWeight};
      }
    
      &:-ms-input-placeholder {
        font-weight: ${components.hpe.formField.medium.placeholderText.fontWeight};
      }
      `,
    },
    font: {
      family: global.hpe.fontStack.primary,
      face: `
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff") format('woff');
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff") format('woff');
          font-weight: 400;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff") format('woff');
          font-weight: 700;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff") format('woff');
          font-weight: 600;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff") format('woff');
          font-weight: 500;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff2") format('woff2'),
               url("https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff") format('woff');
          font-weight: 100;
        }`,
      size: large.hpe.text.medium.fontSize,
    },
    focus: {
      border: undefined,
    },
    active: {
      background: 'background-active',
      color: 'active-text',
    },
    drop: {
      background: components.hpe.drop.background,
      border: {
        radius:
          dimensions.edgeSize[components.hpe.drop.borderRadius] ||
          components.hpe.drop.borderRadius,
      },
      margin: components.hpe.drop.margin,
      intelligentMargin: true,
      shadowSize: 'medium',
      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment brings Drop in alignment with Layer
       * which needs an elevated z-index to sit atop the Global header. */
      zIndex: components.hpe.drop.zIndex,
    },
    elevation: {
      // Elevation values were derived from this Figma file.
      // https://www.figma.com/file/eZYR3dtWdb9U90QvJ7p3T9/HPE-Color-Styles?node-id=405%3A25
      // Naming in Figma file is strong/default/weak vs. Grommet t-shirt sizing.
      // As defined here, default is currently mapping to medium.
      light: {
        small: light.hpe.elevation.small,
        medium: light.hpe.elevation.medium,
        large: light.hpe.elevation.large,
      },
      dark: {
        small: dark.hpe.elevation.small,
        medium: dark.hpe.elevation.medium,
        large: dark.hpe.elevation.large,
      },
    },
    hover: {
      background: 'background-hover',
      color: 'text-strong', // TO DO
    },
    selected: {
      background: 'background-selected-strong-enabled',
      color: 'text-onSelectedStrong',
    },
  },
  accordion: {
    panel: {
      border: {
        side: 'horizontal',
        color: 'border',
      },
    },
    heading: {
      level: 3,
      margin: { vertical: 'medium', horizontal: 'xsmall' },
    },
    hover: {
      background: 'background-hover',
      heading: {
        color: undefined,
      },
    },
    border: undefined,
    icons: {
      collapse: Up,
      expand: Down,
      color: 'text',
    },
  },
  anchor: {
    color: components.hpe.anchor.default.enabled.textColor,
    textDecoration: components.hpe.anchor.default.enabled.textDecoration,
    fontWeight: components.hpe.anchor.default.enabled.fontWeight,
    gap: components.hpe.anchor.medium.default.gapX,
    hover: {
      textDecoration: components.hpe.anchor.default.hover.textDecoration,
    },
    size: {
      // Q: missing tokens
      // A: Our approach to anchor styling makes it difficult to automate
      // because we've blended "size" and "kind into single variables"
      large: {
        color: components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: components.hpe.anchor.emphasized.enabled.fontWeight,
      },
      xlarge: {
        color: components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: components.hpe.anchor.emphasized.enabled.fontWeight,
      },
      xxlarge: {
        color: components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: components.hpe.anchor.emphasized.enabled.fontWeight,
      },
      '3xl': {
        color: components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: components.hpe.anchor.emphasized.enabled.fontWeight,
      },
      '4xl': {
        color: components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: components.hpe.anchor.emphasized.enabled.fontWeight,
      },
      '5xl': {
        color: components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: components.hpe.anchor.emphasized.enabled.fontWeight,
      },
      '6xl': {
        color: components.hpe.anchor.emphasized.enabled.textColor,
        textDecoration: components.hpe.anchor.emphasized.enabled.textDecoration,
        fontWeight: components.hpe.anchor.emphasized.enabled.fontWeight,
      },
    },
  },
  avatar: {
    size: {
      // At this point in time we hadn't standardized on component sizes, so the sizing is off
      // but these feel like the right tokens
      xsmall: components.hpe.component.xsmall.minHeight,
      small: components.hpe.component.small.minHeight, // 24px
      medium: components.hpe.component.medium.minHeight, // default 48px
      large: components.hpe.component.large.minHeight, // 72px
      xlarge: components.hpe.component.xlarge.minHeight, // 96px
      '2xl': `${baseSpacing * 5}px`, // TO DO no component size, is this a one off?
      '3xl': `${baseSpacing * 6}px`, // TO DO no component size, is this a one off?
      '4xl': `${baseSpacing * 7}px`, // TO DO no component size, is this a one off?
      '5xl': `${baseSpacing * 8}px`, // TO DO no component size, is this a one off?
    },
    text: {
      size: {
        xsmall: 'small', // TO DO no component size, is this a one off?
        // At this point in time we hadn't standardized on component sizes, so the sizing is off
        // TO DO this feels like it should be able to point to components.hpe.component.medium.fontSize, etc.
        small: 'small',
        medium: 'medium',
        large: 'large',
        xlarge: 'xlarge',
        '2xl': '3xl', // TO DO no component size, is this a one off?
        '3xl': '4xl', // TO DO no component size, is this a one off?
        '4xl': '5xl', // TO DO no component size, is this a one off?
        '5xl': '6xl', // TO DO no component size, is this a one off?
      },
    },
  },
  button: {
    intelligentPad: false,
    badge: {
      align: 'container',
      container: {
        background: 'text-strong',
      },
      size: {
        medium: '18px',
      },
      text: {
        size: {
          medium: 'xsmall',
        },
      },
    },
    // TO DO add cta-primary variant
    'cta-primary': {
      background: { color: 'brand' },
      color: 'text-primary-button',
      font: { weight: 'bold' },
      icon: <Hpe />,
      reverse: true,
      extend: (props) => primaryBackground(props),
    },
    // TO DO add cta-alternate variant
    'cta-alternate': {
      background: 'background-cta-alternate',
      color: 'text-strong',
      font: {
        weight: 'bold',
      },
      icon: <Hpe color="brand" />,
      reverse: true,
    },
    default: {
      color: components.hpe.button.default.enabled.textColor,
      border: {
        width:
          dimensions.borderSize[
            components.hpe.button.medium.default.borderWidth
          ] || components.hpe.button.medium.default.borderWidth,
        color: components.hpe.button.default.enabled.borderColor,
      },
      font: {
        weight: components.hpe.button.default.enabled.fontWeight,
      },
    },
    gap: components.hpe.button.medium.default.gapX,
    primary: {
      background: '',
      border: {
        width:
          dimensions.borderSize[
            components.hpe.button.medium.primary.borderWidth
          ] || components.hpe.button.medium.primary.borderWidth,
        color: components.hpe.button.primary.enabled.borderColor,
      },
      color: components.hpe.button.primary.enabled.textColor,
      font: {
        weight: components.hpe.button.primary.enabled.fontWeight,
      },
      extend: (props) => primaryBackground(props),
    },
    secondary: {
      background: components.hpe.button.secondary.enabled.background,
      border: {
        width:
          dimensions.borderSize[
            components.hpe.button.medium.secondary.borderWidth
          ] || components.hpe.button.medium.secondary.borderWidth,
        color: components.hpe.button.secondary.enabled.borderColor,
      },
      color: components.hpe.button.secondary.enabled.textColor,
      font: {
        weight: components.hpe.button.secondary.enabled.fontWeight,
      },
    },
    toolbar: {
      border: {
        width:
          dimensions.borderSize[
            components.hpe.button.medium.toolbar.borderWidth
          ] || components.hpe.button.medium.toolbar.borderWidth,
        color: components.hpe.button.toolbar.enabled.borderColor,
        radius:
          dimensions.borderSize[
            components.hpe.button.medium.toolbar.borderRadius
          ] || components.hpe.button.medium.toolbar.borderRadius,
      },
      color: components.hpe.button.toolbar.enabled.textColor,
      font: {
        weight: components.hpe.button.toolbar.enabled.fontWeight,
      },
    },
    option,
    active: {
      background: {
        color: components.hpe.button.default.selected.enabled.background,
      },
      color: components.hpe.button.default.selected.enabled.textColor,
      secondary: {
        background: {
          color: components.hpe.button.secondary.selected.enabled.background,
        },
        border: {
          color: components.hpe.button.secondary.selected.enabled.borderColor,
        },
        color: components.hpe.button.secondary.selected.enabled.textColor,
      },
      primary: {
        background: {
          color: components.hpe.button.primary.selected.enabled.background,
        },
        border: {
          color: components.hpe.button.primary.selected.enabled.borderColor,
        },
        color: components.hpe.button.primary.selected.enabled.textColor,
      },
      toolbar: {
        background: {
          color: components.hpe.button.toolbar.selected.enabled.background,
        },
        border: {
          color: components.hpe.button.toolbar.selected.enabled.borderColor,
        },
        color: components.hpe.button.toolbar.selected.enabled.textColor,
      },
      option: {
        background: {
          color: components.hpe.select.option.selected.background,
        },
        border: {
          color: components.hpe.select.option.selected.borderColor,
        },
        color: components.hpe.select.option.selected.textColor,
      },
    },
    selected: {
      option: {
        background: components.hpe.select.option.selected.enabled.background,
        color: components.hpe.select.option.selected.textColor,
        font: {
          weight: components.hpe.select.option.selected.enabled.fontWeight,
        },
      },
    },
    hover: {
      'cta-primary': {
        extend: (props) => primaryHoverBackground(props),
      },
      'cta-alternate': {
        extend: ({ active, colorValue, theme }) => {
          let color;
          if (!colorValue && !active) {
            if (theme.dark) {
              color = 'rgba(0, 0, 0, 0.2)'; // TBD
            } else color = 'rgba(0, 0, 0, 0.2)'; // TBD
          }

          const style = `inset 0 0 100px 100px ${color}`;
          return `-moz-box-shadow: ${style};
            -webkit-box-shadow: ${style};
            box-shadow: ${style};`;
        },
      },
      default: {
        background: components.hpe.button.default.hover.background,
        border: {
          color: components.hpe.button.default.hover.borderColor,
        },
        color: components.hpe.button.default.hover.textColor,
      },
      option: {
        background: components.hpe.select.option.hover.background,
        border: {
          color: components.hpe.select.option.hover.borderColor,
        },
        color: components.hpe.select.option.hover.textColor,
      },
      primary: {
        background: '',
        border: {
          color: components.hpe.button.primary.hover.borderColor,
        },
        color: components.hpe.button.primary.hover.textColor,
        extend: (props) => primaryHoverBackground(props),
      },
      secondary: {
        background: components.hpe.button.secondary.hover.background,
        border: {
          color: components.hpe.button.secondary.hover.borderColor,
          width:
            dimensions.borderSize[
              components.hpe.button.medium.secondary.borderWidth
            ] || components.hpe.button.medium.secondary.borderWidth,
        },
        color: components.hpe.button.secondary.hover.textColor,
      },
      toolbar: {
        background: components.hpe.button.toolbar.hover.background,
        border: {
          color: components.hpe.button.toolbar.hover.borderColor,
        },
        color: components.hpe.button.toolbar.hover.textColor,
      },
    },
    color: components.hpe.button.default.enabled.textColor,
    size: {
      small: {
        border: {
          radius: components.hpe.button.small.default.borderRadius,
        },
        pad: {
          vertical: components.hpe.button.small.default.paddingY,
          horizontal: components.hpe.button.small.default.paddingX,
        },
        iconOnly: {
          pad: {
            vertical: components.hpe.button.small.default.iconOnly.paddingY,
            horizontal: components.hpe.button.small.default.iconOnly.paddingX,
          },
        },
        secondary: {
          border: {
            radius: components.hpe.button.small.secondary.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.small.secondary.paddingY,
            horizontal: components.hpe.button.small.default.paddingX,
          },
        },
        primary: {
          border: {
            radius: components.hpe.button.small.primary.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.small.primary.paddingY,
            horizontal: components.hpe.button.small.default.paddingX,
          },
        },
        toolbar: {
          border: {
            radius: components.hpe.button.small.toolbar.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.small.toolbar.paddingY,
            horizontal: components.hpe.button.small.toolbar.paddingX,
          },
        },
      },
      medium: {
        border: {
          radius: components.hpe.button.medium.default.borderRadius,
        },
        pad: {
          vertical: components.hpe.button.medium.default.paddingY,
          horizontal: components.hpe.button.medium.default.paddingX,
        },
        iconOnly: {
          pad: mediumIconOnlyPad,
        },
        secondary: {
          border: {
            radius: components.hpe.button.medium.secondary.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.medium.secondary.paddingY,
            horizontal: components.hpe.button.medium.default.paddingX,
          },
        },
        primary: {
          border: {
            radius: components.hpe.button.medium.primary.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.medium.primary.paddingY,
            horizontal: components.hpe.button.medium.default.paddingX,
          },
        },
        toolbar: {
          border: {
            radius:
              dimensions.borderSize[
                components.hpe.button.medium.toolbar.borderRadius
              ] || components.hpe.button.medium.toolbar.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.medium.toolbar.paddingY,
            horizontal: components.hpe.button.medium.toolbar.paddingX,
          },
        },
      },
      large: {
        border: {
          radius: components.hpe.button.large.default.borderRadius,
        },
        pad: {
          vertical: components.hpe.button.large.default.paddingY,
          horizontal: components.hpe.button.large.default.paddingX,
        },
        iconOnly: {
          pad: {
            vertical: components.hpe.button.large.default.iconOnly.paddingY,
            horizontal: components.hpe.button.large.default.iconOnly.paddingX,
          },
        },
        secondary: {
          border: {
            radius: components.hpe.button.large.secondary.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.large.secondary.paddingY,
            horizontal: components.hpe.button.large.default.paddingX,
          },
        },
        primary: {
          border: {
            radius: components.hpe.button.large.primary.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.large.primary.paddingY,
            horizontal: components.hpe.button.large.default.paddingX,
          },
        },
        toolbar: {
          border: {
            radius: components.hpe.button.large.toolbar.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.large.toolbar.paddingY,
            horizontal: components.hpe.button.large.toolbar.paddingX,
          },
        },
      },
      xlarge: {
        border: {
          radius: components.hpe.button.xlarge.default.borderRadius,
        },
        pad: {
          vertical: components.hpe.button.xlarge.default.paddingY,
          horizontal: components.hpe.button.xlarge.default.paddingX,
        },
        iconOnly: {
          pad: {
            vertical: components.hpe.button.xlarge.default.iconOnly.paddingY,
            horizontal: components.hpe.button.xlarge.default.iconOnly.paddingX,
          },
        },
        secondary: {
          border: {
            radius: components.hpe.button.xlarge.secondary.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.xlarge.secondary.paddingY,
            horizontal: components.hpe.button.xlarge.default.paddingX,
          },
        },
        primary: {
          border: {
            radius: components.hpe.button.xlarge.primary.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.xlarge.primary.paddingY,
            horizontal: components.hpe.button.xlarge.default.paddingX,
          },
        },
        toolbar: {
          border: {
            radius: components.hpe.button.xlarge.toolbar.borderRadius,
          },
          pad: {
            vertical: components.hpe.button.xlarge.toolbar.paddingY,
            horizontal: components.hpe.button.xlarge.toolbar.paddingX,
          },
        },
      },
    },
    extend: ({ hasIcon, hasLabel, kind, sizeProp }) => {
      // necessary so primary label is accessible on HPE green background
      const fontSize = components.hpe.button?.[sizeProp]?.[kind]?.fontSize;
      const lineHeight = components.hpe.button?.[sizeProp]?.[kind]?.lineHeight;
      let style = '';
      const iconOnly = hasIcon && !hasLabel;
      if ((sizeProp === 'medium' || sizeProp === undefined) && !iconOnly) {
        style += `font-size: ${fontSize};
        line-height: ${lineHeight};`;
      }
      if (kind === 'secondary') {
        style += `&:hover { box-shadow: ${components.hpe.button[sizeProp].secondary?.hover?.boxShadow}; }`;
      }
      return style;
    },
  },
  calendar: {
    day: {
      extend: ({ isSelected, theme }) =>
        isSelected &&
        `
        background: ${
          theme.global.colors[theme.global.selected.background]?.[
            theme.dark ? 'dark' : 'light'
          ]
        };
        color: ${
          theme.global.colors[theme.global.selected.color]?.[
            theme.dark ? 'dark' : 'light'
          ]
        };`,
    },
    icons: {
      next: Next,
      previous: Previous,
    },
    small: {
      fontSize: '13.6px',
      lineHeight: 1.375,
      daySize: '27.43px',
      title: {
        size: 'medium',
        weight: global.hpe.fontWeight.medium,
        color: 'text-strong',
      },
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
      title: {
        size: 'large',
        weight: global.hpe.fontWeight.medium,
        color: 'text-strong',
      },
    },
    large: {
      fontSize: '31.2px',
      lineHeight: 1.11,
      daySize: '109.71px',
      title: {
        size: 'xlarge',
        weight: global.hpe.fontWeight.medium,
        color: 'text-strong',
      },
    },
  },
  card: {
    container: {
      background: 'background-front',
      elevation: 'medium',
      extend: 'transition: all 0.3s ease-in-out;',
    },
    body: {
      pad: 'medium',
    },
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
    },
    header: {
      pad: 'medium',
    },
    hover: {
      container: {
        elevation: 'large',
      },
    },
  },
  checkBox: {
    hover: {
      border: {
        color: components.hpe.checkbox.control.hover.borderColor,
        width: components.hpe.checkbox.control.hover.borderWidth,
      },
      background: {
        color: components.hpe.formField.input.group.item.hover.background,
      },
      // HPE Design System guidance states that pad="none" should be applied on CheckBox
      // when its used outside of a FormField. We will apply this hover treatment in
      // those instances.
      extend: ({ disabled, pad, theme, toggle }) => css`
        ${!disabled &&
        pad === 'none' &&
        !toggle &&
        `border: 2px solid ${
          theme.global.colors[
            components.hpe.checkbox.control.hover.borderColor
          ][theme.dark ? 'dark' : 'light']
        };`}
      `, // Q: missing token for hover borderWidth? this falls into similar boat as secondary button
    },
    color: components.hpe.switch.control.handle.enabled.background,
    border: {
      color: components.hpe.checkbox.control.enabled.borderColor,
      width:
        dimensions.borderSize[
          components.hpe.checkbox.medium.control.borderWidth
        ] || components.hpe.checkbox.medium.control.borderWidth,
    },
    check: {
      radius: components.hpe.checkbox.medium.control.borderRadius,
      thickness: components.hpe.checkbox.control.hover.borderWidth,
      extend: ({ theme, checked, indeterminate }) => `
      margin-block: ${
        (parseFloat(large.hpe.text.medium.lineHeight, 10) * 16 -
          parseFloat(components.hpe.checkbox.medium.control.height, 10) * 16) /
        2
      }px;
      background-color: ${
        checked || indeterminate
          ? theme.global.colors[
              components.hpe.checkbox.control.selected.enabled.background
            ]?.[theme.dark ? 'dark' : 'light']
          : theme.global.colors.background[theme.dark ? 'dark' : 'light']
      };
      ${(checked || indeterminate) && 'border: none;'}
        `,
    },
    icon: {
      extend: ({ theme }) => `stroke-width: 2px;
      stroke: ${
        theme.global.colors[
          components.hpe.checkbox.control.selected.enabled.iconColor
        ]?.[theme.dark ? 'dark' : 'light']
      }`,
    },
    gap: components.hpe.checkbox.medium.gapX,
    label: {
      align: 'start',
    },
    pad: {
      vertical: components.hpe.component.medium.paddingY,
      horizontal: components.hpe.formField.medium.input.container.paddingX,
    },
    size: components.hpe.checkbox.medium.control.width,
    toggle: {
      background: components.hpe.switch.control.track.enabled.background,
      color: components.hpe.switch.control.handle.enabled.background,
      knob: {
        extend: ({ theme }) => `
           box-shadow: ${
             theme.global.elevation[theme.dark ? 'dark' : 'light'].small
           };
           border: ${
             dimensions.borderSize[
               components.hpe.switch.medium.control.handle.borderWidth
             ]
           } solid ${
             theme.global.colors[
               components.hpe.switch.control.handle.enabled.borderColor
             ][theme.dark ? 'dark' : 'light']
           };
        `,
      },
      extend: ({ checked, theme }) => `
        ${
          checked &&
          `background-color: ${
            theme.global.colors[
              components.hpe.switch.control.track.selected.enabled.background
            ]?.[theme.dark ? 'dark' : 'light']
          };`
        }
      `,
    },
    // HPE Design System guidance states that pad="none" should be applied on CheckBox
    // when its used outside of a FormField. We will apply this hover treatment in
    // those instances.
    extend: ({ disabled, pad }) => css`
    ${
      !disabled &&
      pad === 'none' &&
      `&:hover {
      background-color: unset;
    }`
    }
    font-weight: ${components.hpe.checkbox.medium.label.fontWeight};
    width: auto;
  };
  `,
  },
  checkBoxGroup: {
    container: {
      gap: 'none', // TO DO missing token
      margin: {
        vertical:
          components.hpe.formField.medium.input.group.container.paddingY,
      },
    },
  },
  data: {
    button: {
      kind: 'toolbar',
    },
  },
  dateInput: {
    container: {
      round: components.hpe.formField.medium.input.container.borderRadius,
    },
    icon: {
      size: 'small',
    },
  },
  dataTable: {
    body: {
      extend: ({ theme }) => `
        /* Margin and padding allow room for focus on table body */
        // TO DO missing tokens (is this grommet-ism?)
        margin: ${theme.global.edgeSize.xxsmall} 0px;
        padding: 0px ${theme.global.edgeSize.xxsmall};
      `,
    },
    groupHeader: {
      // background: undefined,
      // border: undefined,
      // pad: undefined,
    },
    groupEnd: {
      border: { side: 'bottom', size: 'xsmall' },
    },
    header: {
      border: { side: 'bottom' },
      color: components.hpe.headerCell.enabled.textColor,
      extend: ({ column, sort, sortable, theme }) =>
        `
          ${
            sort &&
            sort.property === column &&
            `
            background: ${
              theme.global.colors['background-active'][
                theme.dark ? 'dark' : 'light'
              ]
            }
          `
          };
          ${
            sortable &&
            sort &&
            sort.property !== column &&
            `
              svg {
                opacity: 0;
              }
              &:hover {
                svg {
                  opacity: 1;
                }
              }
            `
          };
        `,
      font: {
        weight: components.hpe.headerCell.fontWeight,
      },
      gap: 'none', // TO DO missing token
      hover: {
        background: {
          color: components.hpe.headerCell.hover.background,
        },
      },
      units: {
        color: components.hpe.headerCell.units.enabled.textColor,
      },
    },
    icons: {
      ascending: () => <Ascending />,
      descending: () => <Descending />,
      contract: () => <Up height="medium" />,
      expand: () => <Down height="medium" />,
      sortable: () => <Unsorted />,
    },
    pinned: {
      header: {
        background: { opacity: 'strong' },
        extend: 'backdrop-filter: blur(12px);',
      },
      body: {
        background: { opacity: 'strong' },
        extend: 'backdrop-filter: blur(12px);',
      },
      footer: {
        background: { opacity: 'strong' },
        extend: 'backdrop-filter: blur(12px);',
      },
    },
    primary: {
      // Q: missing tokens
      weight: components.hpe.dataCell.primary.fontWeight,
      color: components.hpe.dataCell.primary.enabled.textColor,
    },
    resize: {
      // Q: missing tokens
      border: {
        color: 'border',
        side: 'end',
      },
      hover: {
        border: {
          color: 'border-strong',
          size: 'small',
        },
      },
    },
  },
  fileInput: {
    border: {
      color: components.hpe.formField.input.container.enabled.borderColor,
      side: 'all',
      style: 'dashed',
      size: components.hpe.formField.medium.input.container.borderWidth,
    },
    button: {
      border: {
        radius: components.hpe.button.medium.default.borderRadius,
      },
      pad: {
        vertical: components.hpe.button.medium.default.paddingY,
        horizontal: components.hpe.button.medium.default.paddingX,
      },
      color: components.hpe.button.default.enabled.textColor,
      font: {
        weight: components.hpe.button.default.enabled.fontWeight,
      },
      hover: {
        background: components.hpe.button.default.hover.background,
        color: components.hpe.button.default.hover.textColor,
      },
    },
    dragOver: {
      background: 'background-contrast',
      border: 'none',
    },
    hover: {
      border: {
        color: 'border',
      },
    },
    icons: {
      remove: Close,
    },
    label: {
      margin: 'small',
    },
    message: {
      color: 'placeholder',
      margin: 'small',
    },
    pad: { horizontal: 'xsmall' },
    extend: `border-radius: ${components.hpe.formField.medium.input.container.borderRadius};`,
  },
  formField: {
    content: {
      // Q: missing tokens
      margin: { vertical: 'xsmall' },
      pad: 'none',
    },
    border: {
      error: {
        color:
          components.hpe.formField.input.container.status.critical.borderColor,
      },
      color: components.hpe.formField.input.container.enabled.borderColor,
      side: 'all',
    },
    disabled: {
      background:
        components.hpe.formField.input.group.container.disabled.background,
      border: {
        color: components.hpe.formField.input.container.disabled.borderColor,
      },
      label: {
        color: components.hpe.formField.labelText.disabled.textColor,
      },
    },
    error: {
      background: {
        color:
          components.hpe.formField.input.container.status.critical.background,
      },
      container: {
        gap: 'xsmall', // Q: missing token
      },
      icon: <CircleAlert size="small" />,
      size: 'xsmall', // Q: missing token
      color: components.hpe.formField.errorText.enabled.textColor,
      margin: {
        // Q: missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none',
      },
    },
    focus: {
      background: components.hpe.formField.input.container.focus.background,
      border: {
        color: components.hpe.formField.input.container.focus.borderColor,
      },
    },
    help: {
      size: 'xsmall',
      color: components.hpe.formField.helpText.enabled.color,
      margin: 'none', // TO DO missing token
    },
    info: {
      size: 'xsmall',
      color: components.hpe.formField.infoText.enabled.color,
      margin: {
        // Q: missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none',
      },
    },
    label: {
      size: 'xsmall', // TO DO how to capture this as token, currently we have "fontSize", "lineHeight", "..."
      color: components.hpe.formField.labelText.enabled.color,
      margin: {
        // Q: missing token
        bottom: 'none',
        top: 'xsmall',
        horizontal: 'none',
      },
      requiredIndicator: true,
      weight: components.hpe.formField.medium.labelText.fontWeight,
    },
    margin: {
      bottom: 'none', // TO DO missing token
    },
    round: components.hpe.formField.medium.input.container.borderRadius,
    survey: {
      label: {
        margin: { bottom: 'none' },
        size: 'medium',
        weight: global.hpe.fontWeight.regular,
      },
    },
  },
  heading: {
    color: 'heading',
    weight: large.hpe.heading.xlarge.fontWeight,
    level: {
      1: {
        font: {
          weight: large.hpe.heading.xlarge.fontWeight,
        },
        small: {
          size: large.hpe.heading.large.fontSize,
          height: large.hpe.heading.large.lineHeight,
        },
        medium: {
          size: large.hpe.heading.xlarge.fontSize,
          height: large.hpe.heading.xlarge.lineHeight,
        },
        large: {
          size: '48px', // with new typography system no "large" size to point to
          height: '48px', // with new typography system no "large" size to point to
        },
        xlarge: {
          size: '60px', // with new typography system no "large" size to point to
          height: '60px', // with new typography system no "large" size to point to
        },
      },
      2: {
        font: {
          weight: large.hpe.heading.large.fontWeight,
        },
        small: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight,
        },
        medium: {
          size: large.hpe.heading.large.fontSize,
          height: large.hpe.heading.large.lineHeight,
        },
        large: {
          size: large.hpe.heading.xlarge.fontSize,
          height: large.hpe.heading.xlarge.lineHeight,
        },
        xlarge: {
          size: '48px', // With new typography system no "larger" size to point to
          height: '48px', // With new typography system no "larger" size to point to
        },
      },
      3: {
        font: {
          weight: large.hpe.heading.medium.fontWeight,
        },
        small: {
          size: large.hpe.heading.small.fontSize,
          height: large.hpe.heading.small.lineHeight,
        },
        medium: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight,
        },
        large: {
          size: large.hpe.heading.large.fontSize,
          height: large.hpe.heading.large.lineHeight,
        },
        xlarge: {
          size: large.hpe.heading.xlarge.fontSize,
          height: large.hpe.heading.xlarge.lineHeight,
        },
      },
      4: {
        font: {
          weight: large.hpe.heading.small.fontWeight,
        },
        small: {
          size: large.hpe.heading.xsmall.fontSize,
          height: large.hpe.heading.xsmall.lineHeight,
        },
        medium: {
          size: large.hpe.heading.small.fontSize,
          height: large.hpe.heading.small.lineHeight,
        },
        large: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight,
        },
        xlarge: {
          size: large.hpe.heading.large.fontSize,
          height: large.hpe.heading.large.lineHeight,
        },
      },
      5: {
        font: {
          weight: large.hpe.heading.xsmall.fontWeight,
        },
        small: {
          size: large.hpe.heading.xxsmall.fontSize,
          height: large.hpe.heading.xxsmall.lineHeight,
        },
        medium: {
          size: large.hpe.heading.xsmall.fontSize,
          height: large.hpe.heading.xsmall.lineHeight,
        },
        large: {
          size: large.hpe.heading.small.fontSize,
          height: large.hpe.heading.small.lineHeight,
        },
        xlarge: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight,
        },
      },
      6: {
        font: {
          weight: large.hpe.heading.xxsmall.fontWeight,
        },
        small: {
          size: large.hpe.heading.xxsmall.fontSize,
          height: large.hpe.heading.xxsmall.lineHeight,
        },
        medium: {
          size: large.hpe.heading.xxsmall.fontSize,
          height: large.hpe.heading.xxsmall.lineHeight,
        },
        large: {
          size: large.hpe.heading.small.fontSize,
          height: large.hpe.heading.small.lineHeight,
        },
        xlarge: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight,
        },
      },
    },
    // This block applies size-specific weights to headings to ensure
    // that as heading sizes get small, the weight increases and as they
    // get large, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support level and size-specific weights.
    extend: ({ level, size }) => {
      let fontWeight = '';
      if (level === 3 && size === 'small') {
        fontWeight = `font-weight: ${large.hpe.heading.small.fontWeight};`;
        // undefined necessary so an h4 without size prop explicitly defined
        // still renders as weight 600
      } else if (level === 4 && ['small', 'medium', undefined].includes(size)) {
        fontWeight = `font-weight: ${large.hpe.heading.small.fontWeight};`;
      } else if (level === 5 && size === 'xlarge') {
        fontWeight = `font-weight: ${large.hpe.heading.small.fontWeight};`;
      }
      return fontWeight;
    },
  },
  icon: {
    disableScaleDown: true,
    matchSize: true,
    size: {
      small: large.hpe.size.icon.small,
      medium: large.hpe.size.icon.medium,
      large: large.hpe.size.icon.large,
      xlarge: large.hpe.size.icon.xlarge,
      xxlarge: large.hpe.size.icon.xxlarge,
    },
  },
  layer: {
    background: 'background-floating',
    border: {
      radius: 'small', // TO DO no specific semantic token
      intelligentRounding: true,
    },
    container: {
      elevation: 'large', // TO DO no specific semantic token
    },
    overlay: {
      background: 'background-layer-overlay',
    },
    /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
     * at a z-index of 101. This adjustment allows for Layer modals and side-drawers
     * to sit atop the Global header. */
    zIndex: '110', // TO DO no token
  },
  list: {
    container: {
      // any box props
      gap: 'xsmall',
      // extend: undefined,
    },
    item: {
      border: undefined,
      disabled: {
        color: 'text-disabled',
        cursor: 'default',
      },
      pinned: {
        background: 'background-active',
        icon: {
          pad: mediumIconOnlyPad,
        },
      },
    },
  },
  maskedInput: {
    container: {
      extend: ({ theme }) => `
        svg {
          fill: ${
            theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light']
          };
          stroke: ${
            theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light']
          };
        }
      `,
    },
  },
  menu: {
    drop: {
      align: {
        top: 'bottom',
        left: 'left',
      },
    },
    group: {
      container: {
        pad: {
          vertical: components.hpe.menu.medium.group.container.paddingY,
        },
      },
      separator: {
        color: components.hpe.menu.group.separator.background,
        size: components.hpe.menu.medium.group.separator.height,
        pad: 'none', // TO DO token?
      },
    },
    icons: {
      color: components.hpe.menu.item.enabled.iconColor,
      down: Down,
    },
    item: {
      pad: {
        horizontal: components.hpe.menu.medium.item.paddingX,
        vertical: components.hpe.menu.medium.item.paddingY,
      },
    },
  },
  nameValuePair: {
    name: {
      // TO DO would need to manually adjust, semantic tokens were too generic
      // should we have a `text-emphasis` and `weight-emphasis`?
      color: 'text-strong',
      weight: global.hpe.fontWeight.medium,
    },
  },
  notification: {
    close: {
      icon: Close,
    },
    container: {
      round: 'xsmall',
    },
    direction: 'row',
    global: {
      direction: 'row',
      container: {
        round: 'none',
      },
    },
    message: {
      color: 'text-onStatus',
    },
    title: {
      // any text props
      color: 'text-onStatus',
      weight: global.hpe.fontWeight.medium,
    },
    critical: {
      background: 'validation-critical',
      global: {
        background: 'validation-critical',
      },
      toast: {
        background: 'background-front',
      },
    },
    warning: {
      background: 'validation-warning',
      global: {
        background: 'validation-warning',
      },
      toast: {
        background: 'background-front',
      },
    },
    normal: {
      background: 'validation-ok',
      global: {
        background: 'validation-ok',
      },
      toast: {
        background: 'background-front',
      },
    },
    unknown: {
      background: 'background-contrast',
      global: {
        background: 'background-contrast',
      },
      toast: {
        background: 'background-front',
      },
    },
    info: {
      background: 'background-contrast',
      global: {
        background: 'background-contrast',
      },
      toast: {
        background: 'background-front',
      },
    },
    undefined: {
      background: 'background-contrast',
      global: {
        background: 'background-contrast',
      },
      toast: {
        background: 'background-front',
      },
    },
  },
  page: {
    wide: {
      width: {
        min: '336px', // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: 'xxlarge',
      },
      xsmall: {
        pad: { horizontal: 'large' },
      },
      xlarge: {
        pad: { horizontal: 'large' },
      },
    },
    narrow: {
      width: {
        min: '336px', // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: 'large',
      },
      xsmall: {
        pad: { horizontal: 'large' },
      },
      xlarge: {
        pad: { horizontal: 'large' },
      },
    },
    full: {
      width: {
        min: '336px', // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: '100%',
      },
      xsmall: {
        pad: { horizontal: 'large' },
      },
      xlarge: {
        pad: { horizontal: 'large' },
      },
    },
  },
  pageHeader: {
    responsive: {
      breakpoints: ['xsmall', 'small'],
    },
    subtitle: {
      size: 'xlarge',
    },
    xsmall: {
      areas: [
        ['parent', 'parent'],
        ['title', 'actions'],
        ['subtitle', 'actions'],
      ],
      columns: [['small', 'flex'], 'auto'],
      rows: ['auto', 'auto', 'auto'],
      gap: { row: 'xsmall', column: 'medium' },
    },
    xlarge: {
      areas: [
        ['parent', 'parent'],
        ['title', 'actions'],
        ['subtitle', 'actions'],
      ],
      columns: [['medium', 'large'], 'auto'],
      rows: ['auto', 'auto', 'auto'],
      gap: { row: 'xsmall', column: 'large' },
    },
  },
  pagination: {
    button: {
      border: {
        radius: components.hpe.button.medium.default.borderRadius,
      },
      font: {
        weight: components.hpe.button.default.enabled.fontWeight,
      },
      active: {
        background: components.hpe.button.default.selected.enabled.background,
        border: {
          radius: components.hpe.button.medium.default.borderRadius,
        },
        color: components.hpe.button.default.selected.enabled.textColor,
        font: {
          weight: components.hpe.button.default.selected.enabled.fontWeight,
        },
      },
      hover: {
        background: components.hpe.button.default.hover.background,
        border: {
          radius: components.hpe.button.medium.default.borderRadius,
        },
        color: components.hpe.button.default.hover.textColor,
        font: {
          weight: components.hpe.button.default.hover.fontWeight,
        },
      },
      disabled: {
        background: components.hpe.button.default.disabled.background,
        border: {
          radius: components.hpe.button.medium.default.borderRadius,
        },
        color: components.hpe.button.default.disabled.textColor,
        font: {
          weight: components.hpe.button.default.disabled.fontWeight,
        },
      },
      size: {
        small: {
          border: {
            radius: components.hpe.button.small.default.borderRadius,
            width:
              dimensions.borderSize[
                components.hpe.button.small.default.borderWidth
              ] || components.hpe.button.small.default.borderWidth,
          },
          pad: {
            vertical: '4px',
            horizontal: '4px',
          },
          font: {
            size: components.hpe.component.small.fontSize,
            height: components.hpe.component.small.lineHeight,
          },
          height: components.hpe.component.small.minHeight,
          width: components.hpe.component.small.minHeight,
        },
        medium: {
          border: {
            radius: components.hpe.button.medium.default.borderRadius,
            width:
              dimensions.borderSize[
                components.hpe.button.medium.default.borderWidth
              ] || components.hpe.button.medium.default.borderWidth,
          },
          pad: {
            vertical: `4px`,
            horizontal: `4px`,
          },
          font: {
            size: components.hpe.component.medium.fontSize,
            height: components.hpe.component.medium.lineHeight,
          },
          height: components.hpe.component.medium.minHeight,
          width: components.hpe.component.medium.minHeight,
        },
        large: {
          border: {
            radius: components.hpe.button.large.default.borderRadius,
            width:
              dimensions.borderSize[
                components.hpe.button.large.default.borderWidth
              ] || components.hpe.button.large.default.borderWidth,
          },
          pad: {
            vertical: `4px`,
            horizontal: `4px`,
          },
          font: {
            size: components.hpe.component.large.fontSize,
            height: components.hpe.component.large.lineHeight,
          },
          height: components.hpe.component.large.minHeight,
          width: components.hpe.component.large.minHeight,
        },
      },
    },
  },
  paragraph: {
    xsmall: {
      size: large.hpe.text.xsmall.fontSize, // NOTE: using "text" tokens here, see: https://github.com/grommet/hpe-design-system/issues/4111
      height: large.hpe.text.xsmall.lineHeight,
      maxWidth: large.hpe.paragraph.xsmall.maxWidth,
    },
    small: {
      size: large.hpe.text.small.fontSize,
      height: large.hpe.text.small.lineHeight,
      maxWidth: large.hpe.paragraph.small.maxWidth,
    },
    medium: {
      size: large.hpe.text.medium.fontSize,
      height: large.hpe.text.medium.lineHeight,
      maxWidth: large.hpe.paragraph.medium.maxWidth,
    },
    large: {
      size: large.hpe.text.large.fontSize,
      height: large.hpe.text.large.lineHeight,
      maxWidth: large.hpe.paragraph.large.maxWidth,
    },
    xlarge: {
      size: large.hpe.text.xlarge.fontSize,
      height: large.hpe.text.xlarge.lineHeight,
      maxWidth: large.hpe.paragraph.xlarge.maxWidth,
    },
    xxlarge: {
      size: large.hpe.text.xxlarge.fontSize,
      height: large.hpe.text.xxlarge.lineHeight,
      maxWidth: large.hpe.paragraph.xxlarge.maxWidth,
    },
    // This block applies size-specific weights to paragraph to ensure
    // that as paragraph sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: ({ size }) => `
      ${
        ['xxlarge'].includes(size)
          ? `font-weight: ${large.hpe.text[size].fontWeight};`
          : ''
      };
    `,
  },
  radioButton: {
    border: {
      color: components.hpe.radioButton.control.enabled.borderColor,
      width: components.hpe.radioButton.medium.control.borderWidth,
    },
    color: components.hpe.radioButton.control.selected.enabled.borderColor,
    container: {
      extend: () => `
      width: auto;
      padding-inline: ${components.hpe.formField.medium.input.group.item.paddingX};
    `,
    },
    extend: () => `
      padding-block: ${components.hpe.formField.medium.input.group.item.paddingY};
    `,
    gap: components.hpe.radioButton.medium.gapX,
    hover: {
      background: {
        color: components.hpe.formField.input.group.item.hover.background,
      },
      border: {
        color: components.hpe.radioButton.control.hover.borderColor,
      },
    },
    size: components.hpe.radioButton.medium.control.height,
    font: {
      weight: components.hpe.radioButton.medium.label.fontWeight,
    },
    icons: {
      circle: () => (
        <Blank
          color={components.hpe.radioButton.control.selected.enabled.iconColor}
        >
          <circle cx="12" cy="12" r="8" />
        </Blank>
      ),
    },
  },
  radioButtonGroup: {
    container: {
      gap: 'none', // TO DO should be token?
      margin: {
        vertical:
          components.hpe.formField.medium.input.group.container.paddingY,
      },
    },
  },
  rangeInput: {
    thumb: {
      color: 'background-primary-default',
    },
    track: {
      lower: {
        color: 'background-primary-default',
      },
      upper: {
        color: 'border',
      },
    },
  },
  select: {
    control: {
      extend: ({ disabled }) => css`
        ${disabled &&
        `
        opacity: 0.3;
        input {
          cursor: default;
        }`}
      `,
    },
    emptySearchMessage: {
      container: {
        pad: option.pad,
      },
    },
    icons: {
      color: 'icon',
      down: Down,
      margin: {
        left: 'small',
        // setting right margin to 12px because on small
        // screens, Select responsive padding sizes down
        // which brings the icon too tight with edge of
        // control.
        right: components.hpe.formField.medium.input.container.paddingX,
      },
      up: Up,
    },
    options: undefined,
  },
  spinner: {
    container: {
      pad: 'none',
      color: 'background-primary-default',
      border: [
        { color: 'border-weak', side: 'all', size: 'medium' },
        { color: 'border-weak', side: 'right', size: 'medium' },
        { color: 'border-weak', side: 'top', size: 'medium' },
        { color: 'border-weak', side: 'left', size: 'medium' },
      ],
    },
    size: {
      xsmall: components.hpe.component.xsmall.minHeight,
      small: components.hpe.component.small.minHeight,
      medium: components.hpe.component.medium.minHeight,
      large: components.hpe.component.large.minHeight,
      xlarge: components.hpe.component.xlarge.minHeight,
    },
  },
  starRating: {
    color: 'background-selected-strong',
  },
  // NOTE all of these would have to be adjusted manually because the semantic color was too generic
  tab: {
    color: 'text',
    active: {
      background: undefined,
      color: 'text-strong',
      weight: 600,
    },
    hover: {
      background: 'transparent',
      color: 'text',
    },
    border: {
      side: 'bottom',
      color: 'transparent',
      size: 'medium',
      active: {
        color: 'brand',
      },
      disabled: {
        color: undefined,
      },
      hover: {
        color: 'border-weak',
      },
    },
    disabled: {
      color: 'text-xweak',
    },
    pad: {
      bottom: components.hpe.component.medium.paddingY, // NOTE this brings the Tab height into alignment with other "medium" components
      top: components.hpe.component.medium.paddingY, // NOTE this brings the Tab height into alignment with other "medium" components
      horizontal: components.hpe.component.medium.paddingX.wide, // NOTE this is slightly narrower than current tabs
    },
    margin: {
      // bring the overall tabs border behind invidual tab borders
      vertical: '-1px',
      horizontal: 'none',
    },
  },
  tabs: {
    header: {
      border: {
        side: 'bottom',
        size: 'xsmall',
        color: 'border-weak',
      },
    },
    step: {
      xsmall: 1,
      xlarge: 3,
    },
  },
  table: {
    header: {
      // alot in extend here
      extend: `
        > div { 
          height: 100%;
          justify-content: center;
        }
        // align onSelect checkbox to center of header cell
        label { 
          justify-content: center;
        }
      `,
    },
    body: {
      pad: {
        top: components.hpe.dataCell.paddingTop,
        bottom: components.hpe.dataCell.paddingBottom,
        horizontal: components.hpe.dataCell.paddingX,
      },
      border: {
        side: 'bottom',
        color: components.hpe.dataCell.enabled.borderColor,
      },
      extend: ({ theme }) =>
        `
          &:hover {
            button {
              background: ${
                theme.global.colors['background-hover'][
                  theme.dark ? 'dark' : 'light'
                ]
              }
            }
          }
        `,
    },
    row: {
      hover: {
        background: 'background-hover',
      },
    },
    footer: {
      extend: `
        font-weight: ${global.hpe.fontWeight.medium};
      `,
    },
  },
  tag: {
    pad: {
      horizontal: 'small', // TO components.hpe.component.medium.paddingX.default/wide are off from what's desired here
      vertical: components.hpe.component.medium.paddingY, // 5px pad + 1px border = 6px 'xsmall'
    },
    value: {
      weight: global.hpe.fontWeight.medium,
    },
  },
  text: {
    xsmall: {
      size: large.hpe.text.xsmall.fontSize,
      height: large.hpe.text.xsmall.lineHeight,
    },
    small: {
      size: large.hpe.text.small.fontSize,
      height: large.hpe.text.small.lineHeight,
    },
    medium: {
      size: large.hpe.text.medium.fontSize,
      height: large.hpe.text.medium.lineHeight,
    },
    large: {
      size: large.hpe.text.large.fontSize,
      height: large.hpe.text.large.lineHeight,
    },
    xlarge: {
      size: large.hpe.text.xlarge.fontSize,
      height: large.hpe.text.xlarge.lineHeight,
    },
    xxlarge: {
      size: large.hpe.text.xxlarge.fontSize,
      height: large.hpe.text.xxlarge.lineHeight,
    },
    '3xl': {
      size: large.hpe.text['3xl'].fontSize,
      height: large.hpe.text['3xl'].lineHeight,
    },
    '4xl': {
      size: large.hpe.text['4xl'].fontSize,
      height: large.hpe.text['4xl'].lineHeight,
    },
    '5xl': {
      size: large.hpe.text['5xl'].fontSize,
      height: large.hpe.text['5xl'].lineHeight,
    },
    '6xl': {
      size: large.hpe.text['6xl'].fontSize,
      height: large.hpe.text['6xl'].lineHeight,
    },
    // This block applies size-specific weights to text to ensure
    // that as text sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: ({ size }) => `
      ${
        ['xxlarge', '3xl', '4xl', '5xl', '6xl'].includes(size)
          ? `font-weight: ${large.hpe.text[size].fontWeight};`
          : ''
      };
    `,
  },
  textInput: {
    container: {
      extend: ({ theme }) => `
        svg {
          fill: ${
            theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light']
          };
          stroke: ${
            theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light']
          };
        }
      `,
    },
  },
  tip: {
    content: {
      background: 'background-floating',
      border: {
        color: 'border-weak', // TO DO this isn't specific enough to update automatically in future
      },
      margin: 'xxsmall',
      elevation: 'small', // TO DO this isn't specific enough to update automatically in future
      pad: {
        vertical: 'none',
        horizontal: 'small',
      },
      round: components.hpe.drop.borderRadius, // TO DO does it make sense to use drop here?
    },
  },
  thumbsRating: {
    like: {
      color: 'background-selected-strong',
    },
    dislike: {
      color: 'background-selected-strong',
    },
  },
  toggleGroup: {
    button: {
      pad: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
      iconOnly: {
        pad: {
          vertical: mediumIconOnlyPad,
          horizontal: mediumIconOnlyPad,
        },
      },
    },
  },
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24,
});
