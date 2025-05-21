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
    weight: 400,
    level: {
      1: {
        font: { weight: 400 },
        small: {
          size: '3rem', // 48px
          height: '3rem', // 48px
        },
        medium: {
          size: '4.5rem', // 72px
          height: '4.5rem', // 72px
        },
        large: {
          size: '6rem', // 96px
          height: '6rem', // 96px
        },
        xlarge: {
          size: '7.5rem', // 120px
          height: '7.5rem', // 120px
        },
      },
      2: {
        small: {
          size: '2.25rem', // 36px
          height: '2.25rem', // 36px
        },
        medium: {
          size: '3rem', // 48px
          height: '3rem', // 48px
        },
        large: {
          size: '4.5rem', // 72px
          height: '4.5rem', // 72px
        },
        xlarge: {
          size: '6rem', // 96px
          height: '6rem', // 96px
        },
      },
      3: {
        small: {
          size: '1.5rem', // 24px
          height: '1.5rem', // 24px
        },
        medium: {
          size: '2.25rem', // 36px
          height: '2.25rem', // 36px
        },
        large: {
          size: '3rem', // 48px
          height: '3rem', // 48px
        },
        xlarge: {
          size: '4.5rem', // 72px
          height: '4.5rem', // 72px
        },
      },
      4: {
        font: { weight: 500 },
        small: {
          size: '1.125rem', // 18px
          height: '1.125rem', // 18px
        },
        medium: {
          size: '1.5rem', // 24px
          height: '1.5rem', // 24px
        },
        large: {
          size: '2.25rem', // 36px
          height: '2.25rem', // 36px
        },
        xlarge: {
          size: '3rem', // 48px
          height: '3rem', // 48px
        },
      },
      5: {
        font: { weight: 500 },
        small: {
          size: '1rem', // 16px
          height: '1rem', // 16px
        },
        medium: {
          size: '1.125rem', // 18px
          height: '1.125rem', // 18px
        },
        large: {
          size: '1.5rem', // 24px
          height: '1.5rem', // 24px
        },
        xlarge: {
          size: '2.25rem', // 36px
          height: '2.25rem', // 36px
        },
      },
      6: {
        font: { weight: 500 },
        small: {
          size: '0.875rem', // 14px
          height: '0.875rem', // 14px
        },
        medium: {
          size: '1rem', // 16px
          height: '1rem', // 16px
        },
        large: {
          size: '1.125rem', // 18px
          height: '1.125rem', // 18px
        },
        xlarge: {
          size: '1.5rem', // 24px
          height: '1.5rem', // 24px
        },
      },
    },
    extend: ({ level, size }) => {
      let fontWeight = '';
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
    },
  },
  paragraph: {
    small: {
      size: '1rem', // 16px
      height: '1.25rem', // 20px
    },
    medium: {
      size: '1.125rem', // 18px
      height: '1.375rem', // 22px
    },
    large: {
      size: '1.5rem', // 24px
      height: '1.875rem', // 30px
    },
    xlarge: {
      size: '2.25rem', // 36px
      height: '2.625rem', // 42px
    },
    xxlarge: {
      size: '2.625rem', // 42px
      height: '3rem', // 48px
    },
    extend: ({ size }) => {
      if (['large', 'xlarge', 'xxlarge'].includes(size))
        return 'font-weight: 300;';
      return '';
    },
  },
  text: {
    xsmall: {
      // weight needs to be modified at the size level
      size: '0.875rem', // 14px
      height: '1.125rem', // 18px
    },
    small: {
      // weight needs to be modified at the size level
      size: '1rem', // 16px
      height: '1.25rem', // 20px
    },
    medium: {
      // weight needs to be modified at the size level
      size: '1.125rem', // 18px
      height: '1.375rem', // 22px
    },
    large: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '1.5rem', // 24px
      height: '1.875rem', // 30px
    },
    xlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '2.25rem', // 36px
      height: '2.625rem', // 42px
    },
    // xxlarge is not part of Chris's type exploration
    xxlarge: {
      // weight needs to be modified at the size level by bumping down to 300
      size: '2.625rem', // 42px
      height: '3rem', // 48px
    },
    extend: ({ size }) => {
      if (
        ['large', 'xlarge', 'xxlarge', '3xl', '4xl', '5xl', '6xl'].includes(
          size,
        )
      )
        return 'font-weight: 300;';
      return '';
    },
  },
});
