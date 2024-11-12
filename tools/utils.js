import { large, components } from 'hpe-design-tokens';
import { dimensions } from '../src/js/themes/dimensions';

export const flattenObject = (obj, delimiter = '.', prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : '';
    if (
      typeof obj[k] === 'object' &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0 &&
      !('$value' in obj[k])
    )
      Object.assign(
        acc,
        flattenObject(
          obj[k],
          delimiter,
          !['hpe', 'color'].includes(k) ? pre + k : '',
        ),
      );
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

export const access = (path, object) =>
  path.split('.').reduce((o, i) => o[i], object);

export const MISSING = {
  color: 'red',
  weight: 700,
};

export const componentSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
export const buttonKinds = ['default', 'secondary', 'primary', 'toolbar'];
export const buttonStates = ['hover', 'active', 'disabled'];

export const textSizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
];

const anchorSizeTheme = {};
textSizes.forEach((size) => {
  anchorSizeTheme[size] = {
    color: components.hpe.anchor.default.enabled.textColor,
    textDecoration: components.hpe.anchor.default.enabled.textDecoration,
    fontWeight: components.hpe.anchor.default.enabled.fontWeight,
  };
});

const paragraphTheme = {};
const textTheme = {};
textSizes.forEach((size) => {
  paragraphTheme[size] = {
    size: large.hpe.text?.[size]?.fontSize,
    height: large.hpe.text?.[size]?.lineHeight,
    maxWidth: large.hpe.paragraph?.[size]?.maxWidth,
  };
  textTheme[size] = {
    size: large.hpe.text?.[size].fontSize,
    height: large.hpe.text?.[size].lineHeight,
  };
});

const buttonKindTheme = {};
buttonKinds.forEach((kind) => {
  buttonKindTheme[kind] = {
    background: components.hpe.button?.[kind].enabled.background,
    border: {
      width:
        dimensions.borderSize[
          components.hpe.button.medium?.[kind].borderWidth
        ] || components.hpe.button.medium?.[kind].borderWidth,
      color: components.hpe.button?.[kind].enabled.borderColor,
      radius:
        dimensions.borderSize[
          components.hpe.button.medium?.[kind].borderRadius
        ] || components.hpe.button.medium?.[kind].borderRadius,
    },
    color: components.hpe.button?.[kind].enabled.textColor,
    font: {
      weight: components.hpe.button?.[kind].enabled.fontWeight,
    },
  };
});

const buttonStatesTheme = {};
buttonStates.forEach((state) => {
  buttonStatesTheme[state] = {};
  buttonKinds.forEach((kind) => {
    let adjustedState = state;
    if (state === 'active') {
      adjustedState = 'selected';
      buttonStatesTheme[state][kind] = {
        background: {
          color:
            components.hpe.button?.[kind]?.[adjustedState].enabled.background,
        },
        border: {
          // Q: this token isn't correct
          color:
            components.hpe.button?.[kind]?.[adjustedState].enabled.borderColor,
        },
        color: components.hpe.button?.[kind]?.[adjustedState].enabled.textColor,
        font: {
          weight:
            components.hpe.button?.[kind]?.[adjustedState].enabled.fontWeight,
        },
      };
      if (!('active' in buttonStatesTheme.hover))
        buttonStatesTheme.hover.active = {};
      buttonStatesTheme.hover[state][kind] = {
        background: {
          color:
            components.hpe.button?.[kind]?.[adjustedState]?.hover?.background,
        },
        border: {
          color:
            components.hpe.button?.[kind]?.[adjustedState]?.hover?.borderColor,
        },
        color: components.hpe.button?.[kind]?.[adjustedState]?.hover?.textColor,
        font: {
          weight:
            components.hpe.button?.[kind]?.[adjustedState]?.hover?.fontWeight,
        },
      };
    } else if (kind === 'option') {
      if (state === 'active') adjustedState = 'selected';
      buttonStatesTheme[state][kind] = {
        background: {
          color:
            components.hpe.select.option?.[adjustedState].enabled.background,
        },
        border: {
          color: components.hpe.select.option?.[adjustedState].borderColor,
        },
        color: components.hpe.select.option?.[adjustedState].textColor,
      };
    } else {
      buttonStatesTheme[state][kind] = {
        background: {
          color: components.hpe.button?.[kind]?.[adjustedState].background,
        },
        border: {
          width: '',
          color: components.hpe.button?.[kind]?.[adjustedState].borderColor,
        },
        color: components.hpe.button?.[kind]?.[adjustedState].textColor,
        font: {
          weight: components.hpe.button?.[kind]?.[adjustedState].fontWeight,
        },
      };
    }
  });
});

const buttonSizesTheme = {};
componentSizes.forEach((size) => {
  const kindStyles = {};
  buttonKinds.forEach((kind) => {
    kindStyles[kind] = {
      border: {
        radius: components.hpe.button?.[size]?.[kind].borderRadius,
      },
      pad: {
        vertical: components.hpe.button?.[size]?.[kind].paddingY,
        horizontal: components.hpe.button?.[size]?.[kind].paddingX,
      },
    };
  });
  buttonSizesTheme[size] = {
    border: {
      radius: components.hpe.button?.[size]?.default.borderRadius,
    },
    pad: {
      vertical: components.hpe.button?.[size]?.default.paddingY,
      horizontal: components.hpe.button?.[size]?.default.paddingX,
    },
    iconOnly: {
      pad: {
        vertical: components.hpe.button?.[size]?.default.iconOnly.paddingY,
        horizontal: components.hpe.button?.[size]?.default.iconOnly.paddingX,
      },
    },
    ...kindStyles,
  };
});

export {
  anchorSizeTheme,
  paragraphTheme,
  textTheme,
  buttonKindTheme,
  buttonStatesTheme,
  buttonSizesTheme,
};
