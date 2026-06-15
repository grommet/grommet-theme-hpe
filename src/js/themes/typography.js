import {
  breakpointStyle,
  getHeadingSize,
  getTextSize,
  getThemeColor,
  headingLevelToSize,
  textSizes,
} from './utils';

export const buildTypography = (tokens) => {
  const { small, large, components, global } = tokens;

  const anchorSizeTheme = {};
  textSizes.forEach((sizeArg) => {
    const textSize = sizeArg === '6xlarge' ? '5xlarge' : sizeArg;
    const themeSize = getTextSize(textSize);
    anchorSizeTheme[themeSize] = {
      color: components.hpe.anchor.default.rest.textColor,
      textDecoration: components.hpe.anchor.default.rest.textDecoration,
      fontWeight: components.hpe.anchor.default.rest.fontWeight,
      gap: components.hpe.anchor.default[textSize].gapX,
    };
  });

  const paragraphTheme = {};
  const textTheme = {};
  const fontWeights = {};
  // Keep track of the largest text size to use as a fallback
  // because grommet theme has a max size of 6xl, but design tokens
  // only supports up to 5xl.
  const fallback = {
    size: '0rem',
    height: '0rem',
    maxWidth: '0rem',
    weight: 0,
  };

  textSizes.forEach((textSize) => {
    const fontSize = large.hpe.text?.[textSize]?.fontSize;
    const fontSizeValue = fontSize
      ? parseFloat(fontSize.replace('rem', ''))
      : 0;
    const fallbackValue = parseFloat(fallback.size.replace('rem', '')) || 0;

    if (fontSizeValue > fallbackValue) {
      fallback.size = fontSize;
      fallback.height = large.hpe.text?.[textSize]?.lineHeight;
      fallback.maxWidth = large.hpe.text?.[textSize]?.maxWidth;
      fallback.weight = large.hpe.text?.[textSize]?.fontWeight;
    }

    const themeSize = getTextSize(textSize);
    paragraphTheme[themeSize] = {
      size: large.hpe.text?.[textSize]?.fontSize || fallback.size,
      height: large.hpe.text?.[textSize]?.lineHeight || fallback.height,
      maxWidth: large.hpe.text?.[textSize]?.maxWidth || fallback.maxWidth,
    };
    textTheme[themeSize] = {
      size: large.hpe.text?.[textSize]?.fontSize || fallback.size,
      height: large.hpe.text?.[textSize]?.lineHeight || fallback.height,
    };
    fontWeights[themeSize] =
      large.hpe.text?.[textSize]?.fontWeight || fallback.weight;
  });

  textTheme.extend = ({ size: textSize, weight }) => {
    if (!weight) return `font-weight: ${fontWeights[textSize]};`;
    if (weight === 'bold') return 'font-weight: 500;';
    return '';
  };

  paragraphTheme.extend = ({ size: textSize, weight }) => {
    if (!weight) return `font-weight: ${fontWeights[textSize]};`;
    if (weight === 'bold') return 'font-weight: 500;';
    return '';
  };

  const heading = {
    color: 'text-heading',
    weight: large.hpe.heading.xlarge.fontWeight,
    // medium size object per level is the default styling for the level
    // and will apply when no `size` prop is applied to heading.
    // if size prop is applied, we will apply the standardized heading size tokens.
    level: {
      1: {
        font: {
          weight: large.hpe.heading.xlarge.fontWeight,
        },
        xsmall: undefined,
        small: undefined,
        medium: {
          size: large.hpe.heading.xlarge.fontSize,
          height: large.hpe.heading.xlarge.lineHeight,
        },
        large: undefined,
        xlarge: undefined,
      },
      2: {
        font: {
          weight: large.hpe.heading.large.fontWeight,
        },
        xsmall: undefined,
        small: undefined,
        medium: {
          size: large.hpe.heading.large.fontSize,
          height: large.hpe.heading.large.lineHeight,
        },
        large: undefined,
        xlarge: undefined,
      },
      3: {
        font: {
          weight: large.hpe.heading.medium.fontWeight,
        },
        xsmall: undefined,
        small: undefined,
        medium: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight,
        },
        large: undefined,
        xlarge: undefined,
      },
      4: {
        font: {
          weight: large.hpe.heading.small.fontWeight,
        },
        xsmall: undefined,
        small: undefined,
        medium: {
          size: large.hpe.heading.small.fontSize,
          height: large.hpe.heading.small.lineHeight,
        },
        large: undefined,
        xlarge: undefined,
      },
      5: {
        font: {
          weight: large.hpe.heading.xsmall.fontWeight,
        },
        xsmall: undefined,
        small: undefined,
        medium: {
          size: large.hpe.heading.xsmall.fontSize,
          height: large.hpe.heading.xsmall.lineHeight,
        },
        large: undefined,
        xlarge: undefined,
      },
      6: {
        font: {
          weight: large.hpe.heading.xxsmall.fontWeight,
        },
        xsmall: undefined,
        small: undefined,
        medium: {
          size: large.hpe.heading.xxsmall.fontSize,
          height: large.hpe.heading.xxsmall.lineHeight,
        },
        large: undefined,
        xlarge: undefined,
      },
    },
    extend: ({ size: headingSize, level, weight, responsive }) => {
      let style = '';
      // Only apply token-based sizing when a valid size prop was explicitly passed.
      // When no size is given, the level[1..6].medium mapping controls sizing instead.
      if (headingSize && large.hpe.heading[headingSize]) {
        const { fontSize, lineHeight, fontWeight } =
          large.hpe.heading[headingSize];

        if (fontWeight && !weight) style += `font-weight: ${fontWeight};`;
        if (fontSize) style += `font-size: ${fontSize};`;
        if (lineHeight) style += `line-height: ${lineHeight};`;
      }
      // The max desired weight in the theme is 500; however, a common convention is for
      // implementers to choose "bold" to style text. This ensures "bold" resolves to the desired weight.
      if (weight === 'bold') style += 'font-weight: 500;';

      if (responsive) {
        const responsiveSize = headingSize || headingLevelToSize[level || 1];
        const responsiveHeadingSize = getHeadingSize(small, responsiveSize);

        style += breakpointStyle(
          global,
          `
        font-size: ${responsiveHeadingSize.fontSize};
        line-height: ${responsiveHeadingSize.lineHeight};
        ${!weight ? `font-weight: ${responsiveHeadingSize.fontWeight}` : ''};
      `,
          responsive,
        );
      }
      return style;
    },
  };

  const anchor = {
    color: components.hpe.anchor.default.rest.textColor,
    textDecoration: components.hpe.anchor.default.rest.textDecoration,
    fontWeight: components.hpe.anchor.default.rest.fontWeight,
    gap: components.hpe.anchor.default.medium.gapX,
    icon: { color: 'icon-primary' },
    hover: {
      textDecoration: components.hpe.anchor.default.hover.textDecoration,
      extend: ({ theme }) =>
        `color: ${getThemeColor(
          components.hpe.anchor.default.hover.textColor,
          theme,
        )};`,
    },
    iconOnly: {
      pad: 'xsmall',
    },
    size: anchorSizeTheme,
  };

  return { anchor, paragraph: paragraphTheme, text: textTheme, heading };
};
