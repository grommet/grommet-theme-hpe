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

export const hpePop = deepMerge(hpe, {
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
