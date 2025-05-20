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
        xlarge: {  // Heading condensed
          size: '6rem', // 96px
          height: '6rem', // 96px
        },
        xxlarge: { // Heading large condensed
          size: '7rem', // 112px
          height: '7rem', // 112px
        }
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
        xlarge: { // Heading condensed
          size: '5.25rem', // 84px
          height: '5.625rem', // 90px
        },
        xxlarge: { // Heading large condensed
          size: '6rem', // 96px
          height: '6rem', // 96px
        }
      },
      3: {
        small: {
   
        },
        medium: {
          size: '2.25rem', // 36px
          height: '2.625rem', // 42px
        },
        large: {
          size: '3.25rem', // 52px
          height: '3.625rem', // 58px
        },
        xlarge: { // Heading condensed
          size: '4.25rem', // 68px
          height: '4.625rem', // 74px
        },
        xxlarge: { // Heading large condensed
          size: '5.25rem', // 84px
          height: '5.625rem', // 90px
        }
      },
      4: {
        small: {
          size: '1.125rem', // 20px
          height: '1.125rem', // 26px
        },
        medium: {
          size: '1.5rem', // 28px
          height: '1.5rem', // 34px
        },
        large: {
          size: '2.25rem', // 36px
          height: '2.625rem', // 42px
        },
        xlarge: {
          size: '3.25rem', // 52px
          height: '3.625rem', // 58px
        }
      },
      5: {
        small: {
          size: '1rem', // 16px
          height: '1.375rem', // 22px
        },
        medium: {
          size: '1.125rem', // 20px
          height: '1.125rem', // 26px
        },
        large: {
          size: '1.5rem', // 28px
          height: '1.5rem', // 34px
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
          size: '1.125rem', // 20px
          height: '1.125rem', // 26px
        },
        xlarge: {
          size: '2.25rem', // 36px
          height: '2.625rem', // 42px
        },
      },
    },
    extend: ({ level, size }) => {
      let font = '';
      if ([1, 2, 3].includes(level) && ['xlarge', 'xxlarge'].includes(size)) {
        font = 'font-weight: 700; font-family: GraphikXXCondensed;';
      }
      return font;
    },
  },
  paragraph: {
    xsmall: { // disclaimer
      size: '0.875rem', // 14px
      height: '1.25rem', // 20px
    },
    small: { // small body
      size: '1rem', // 16px
      height: '1.5rem', // 24px
    },
    medium: { // body
      size: '1.25rem', // 20px
      height: '1.875rem', // 30px
    },
    large: { // large body
      size: '1.75rem', // 28px
      height: '2.375rem', // 38px
    },
    xlarge: { // small quote
      size: '2.25rem', // 36px
      height: '2.875rem', // 46px
    },
    xxlarge: { // quote
      size: '2.75rem', // 44px
      height: '3.375rem', // 54px
    },
    xxxlarge: { // large quote
      size: '3.25rem', // 52px
      height: '3.875rem', // 62px
    },
  },
  text: {
    xsmall: { // disclaimer
      size: '0.875rem', // 14px
      height: '1.25rem', // 20px
    },
    small: { // small body
      size: '1rem', // 16px
      height: '1.5rem', // 24px
    },
    medium: { // body
      size: '1.25rem', // 20px
      height: '1.875rem', // 30px
    },
    large: { // large body
      size: '1.75rem', // 28px
      height: '2.375rem', // 38px
    },
    xlarge: { // small quote
      size: '2.25rem', // 36px
      height: '2.875rem', // 46px
    },
    xxlarge: { // quote
      size: '2.75rem', // 44px
      height: '3.375rem', // 54px
    },
    xxxlarge: { // large quote
      size: '3.25rem', // 52px
      height: '3.875rem', // 62px
    },
  },
});
