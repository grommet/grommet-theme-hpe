import { components, light, dark } from 'hpe-design-tokens/grommet';
import { hpe } from './hpe';

export const isObject = (item) =>
  item && typeof item === 'object' && !Array.isArray(item);

export const deepMerge = (target, ...sources) => {
  if (!sources.length) {
    return target;
  }

  const output = { ...target };

  sources.forEach((source) => {
    if (isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = { ...source[key] };
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

const getThemeColor = (color, theme) =>
  typeof theme.global.colors[color] === 'string'
    ? theme.global.colors[color]
    : theme.global.colors[color]?.[theme.dark ? 'dark' : 'light'] || color;

const defaultPad = {
  small: { horizontal: '23px', vertical: '15px', iconOnly: '19px' },
  medium: { horizontal: '35px', vertical: '19px', iconOnly: '21px' },
  large: { horizontal: '39px', vertical: '21px', iconOnly: '23px' },
};

const createButtonSizes = (size) => ({
  default: {
    pad: {
      horizontal: defaultPad[size].horizontal,
      vertical: defaultPad[size].vertical,
    },
  },
  secondary: {
    pad: {
      // adjustment needed to accommodate border
      horizontal: `${parseInt(defaultPad[size].horizontal, 10) - 3}px`,
      vertical: `${parseInt(defaultPad[size].vertical, 10) - 3}px`,
    },
  },
  primary: {
    pad: {
      horizontal: defaultPad[size].horizontal,
      vertical: defaultPad[size].vertical,
    },
  },
  toolbar: {
    pad: {
      horizontal: defaultPad[size].vertical,
      vertical: defaultPad[size].vertical,
    },
  },
  iconOnly: {
    pad: {
      horizontal: defaultPad[size].iconOnly,
      vertical: defaultPad[size].iconOnly,
    },
    secondary: {
      pad: {
        // adjustment needed to accommodate border
        horizontal: `${parseInt(defaultPad[size].iconOnly, 10) - 3}px`,
        vertical: `${parseInt(defaultPad[size].iconOnly, 10) - 3}px`,
      },
    },
  },
});

const popButtonSizes = {
  small: createButtonSizes('small'),
  medium: createButtonSizes('medium'),
  large: createButtonSizes('large'),
};

export const hpePop = deepMerge(hpe, {
  button: {
    secondary: {
      border: {
        width: components.hpe.button.secondary.medium.borderWidth,
      },
    },
    size: {
      ...popButtonSizes,
    },
    extend: ({ sizeProp, hasLabel, hasIcon, kind, theme, colorValue }) => {
      let style = '';
      if (sizeProp === 'large')
        // 24px, 28px (custom instead of "large" text size)
        style += 'font-size: 1.5rem; line-height: 1.75rem;';
      else if (sizeProp === 'medium') style += 'line-height: 1.5rem;'; // 24px (custom instead of "medium" line-height)
      // Grommet doesn't support kind-specific iconOnly padding, so we define it here.
      if (kind === 'secondary' && hasIcon && !hasLabel) {
        style += `padding: ${popButtonSizes[sizeProp].iconOnly.secondary.pad.vertical};`;
      }
      if (kind === 'primary') {
        // Temporary fix for grommet bug with light/dark logic. This temp fix will override the color prop on an icon, so this is
        // not a long term solution. Also, reliance on !important is not ideal.
        style += `color: ${getThemeColor(
          'text-onSecondaryStrong',
          theme,
        )} !important;`;
        const iconColor = theme.dark
          ? dark.hpe.color.icon.onSecondaryStrong
          : light.hpe.color.icon.onSecondaryStrong;
        style += `svg { stroke: ${iconColor}; fill: ${iconColor}; }`;
      }
      if (colorValue) {
        // color prop is not recommended to be used, but providing
        // a better fallback behavior for hover styles to avoid
        // "kind" hover background from applying
        // https://github.com/grommet/grommet/issues/7504
        style += `
          &:hover { background: ${getThemeColor(colorValue, theme)}; }
        `;
      }
      return style;
    },
  },
  icon: {
    size: {
      small: '16px',
      medium: '20px',
      large: '24px',
    },
  },
  heading: {
    color: 'text-strong',
    weight: 500,
    level: {
      1: {
        small: {
          size: '3rem', // 48px
          height: '3rem', // 48px
        },
        medium: {
          size: '4.25rem', // 68px
          height: '4.625rem', // 74px
        },
        large: {
          size: '5.25rem', // 84px
          height: '5.625rem', // 90px
        },
        xlarge: {
          // Heading condensed
          size: '6rem', // 96px
          height: '6rem', // 96px
        },
        xxlarge: {
          // Heading large condensed
          size: '7rem', // 112px
          height: '7rem', // 112px
        },
      },
      2: {
        small: {
          size: '2.25rem', // 36px
          height: '2.625rem', // 42px
        },
        medium: {
          size: '3.25rem', // 52px
          height: '3.625rem', // 58px
        },
        large: {
          size: '4.25rem', // 68px
          height: '4.625rem', // 74px
        },
        xlarge: {
          // Heading condensed
          size: '5.25rem', // 84px
          height: '5.625rem', // 90px
        },
        xxlarge: {
          // Heading large condensed
          size: '6rem', // 96px
          height: '6rem', // 96px
        },
      },
      3: {
        small: {
          size: '1.75rem', // 28px
          height: '2.125rem', // 34px
        },
        medium: {
          size: '2.25rem', // 36px
          height: '2.625rem', // 42px
        },
        large: {
          size: '3.25rem', // 52px
          height: '3.625rem', // 58px
        },
        xlarge: {
          // Heading condensed
          size: '4.25rem', // 68px
          height: '4.625rem', // 74px
        },
        xxlarge: {
          // Heading large condensed
          size: '5.25rem', // 84px
          height: '5.625rem', // 90px
        },
      },
      4: {
        small: {
          size: '1.25rem', // 20px
          height: '1.625rem', // 26px
        },
        medium: {
          size: '1.75rem', // 28px
          height: '2.125rem', // 34px
        },
        large: {
          size: '2.25rem', // 36px
          height: '2.625rem', // 42px
        },
        xlarge: {
          size: '3.25rem', // 52px
          height: '3.625rem', // 58px
        },
      },
      5: {
        small: {
          size: '1rem', // 16px
          height: '1.375rem', // 22px
        },
        medium: {
          size: '1.25rem', // 20px
          height: '1.625rem', // 26px
        },
        large: {
          size: '1.75rem', // 28px
          height: '2.125rem', // 34px
        },
        xlarge: {
          size: '2.25rem', // 36px
          height: '2.625rem', // 42px
        },
      },
      6: {
        small: {
          size: '1rem', // 16px
          height: '1.375rem', // 22px
        },
        medium: {
          size: '1rem', // 16px
          height: '1.375rem', // 22px
        },
        large: {
          size: '1.25rem', // 20px
          height: '1.625rem', // 26px
        },
        xlarge: {
          size: '1.75rem', // 28px
          height: '2.125rem', // 34px
        },
      },
    },
    extend: ({ level, size }) => {
      let font = '';
      // Brand direction makes use of Graphik Condensed font for marquee page titles
      // Reserving H1 xlarge and xxlarge sizes for Condensed.
      // Levels 2 and 3 are included for how Grommet handles responsive typography,
      // for example enabling an H1 xlarge to downsize to an H2 xlarge at a breakpoint.
      if ([1, 2, 3].includes(level) && ['xlarge', 'xxlarge'].includes(size)) {
        font = 'font-weight: 700; font-family: GraphikXXCondensed;';
      }
      return font;
    },
  },
  paragraph: {
    xsmall: {
      // disclaimer
      size: '0.875rem', // 14px
      height: '1.25rem', // 20px
    },
    small: {
      // small body
      size: '1rem', // 16px
      height: '1.5rem', // 24px
    },
    medium: {
      // body
      size: '1.25rem', // 20px
      height: '1.875rem', // 30px
    },
    large: {
      // large body
      size: '1.75rem', // 28px
      height: '2.375rem', // 38px
    },
    xlarge: {
      // small quote
      size: '2.25rem', // 36px
      height: '2.875rem', // 46px
    },
    xxlarge: {
      // quote
      size: '2.75rem', // 44px
      height: '3.375rem', // 54px
    },
    xxxlarge: {
      // large quote
      size: '3.25rem', // 52px
      height: '3.875rem', // 62px
    },
  },
  text: {
    xsmall: {
      // disclaimer
      size: '0.875rem', // 14px
      height: '1.25rem', // 20px
    },
    small: {
      // small body
      size: '1rem', // 16px
      height: '1.5rem', // 24px
    },
    medium: {
      // body
      size: '1.25rem', // 20px
      height: '1.875rem', // 30px
    },
    large: {
      // large body
      size: '1.75rem', // 28px
      height: '2.375rem', // 38px
    },
    xlarge: {
      // small quote
      size: '2.25rem', // 36px
      height: '2.875rem', // 46px
    },
    xxlarge: {
      // quote
      size: '2.75rem', // 44px
      height: '3.375rem', // 54px
    },
    xxxlarge: {
      // large quote
      size: '3.25rem', // 52px
      height: '3.875rem', // 62px
    },
  },
});
