import { buttonKinds, buttonStates, componentSizes } from './utils';

export const buildButtonTheme = (tokens, dimensions) => {
  const { components } = tokens;

  // Option button kind styles. Abstracted so select.emptySearchMessage
  // can reference pad value.
  const option = {
    color: components.hpe.select.default.option.rest.textColor,
    border: {
      radius:
        dimensions.edgeSize[
          components.hpe.select.default.medium.option.borderRadius
        ] || components.hpe.select.default.medium.option.borderRadius,
      width:
        dimensions.borderSize[
          components.hpe.select.default.medium.option.borderWidth
        ] || components.hpe.select.default.medium.option.borderWidth,
      color: components.hpe.select.default.option.rest.borderColor,
    },
    pad: {
      horizontal: components.hpe.select.default.medium.option.paddingX,
      vertical: components.hpe.select.default.medium.option.paddingY,
    },
    font: { weight: components.hpe.select.default.option.rest.fontWeight },
  };

  // Abstracted so button and pinned list icon can reference.
  const mediumIconOnlyPad = {
    vertical: components.hpe.button.default.medium.iconOnly.paddingY,
    horizontal: components.hpe.button.default.medium.iconOnly.paddingY,
  };

  const buttonKindTheme = {};
  buttonKinds.forEach((kind) => {
    const borderWidth = components.hpe.button[kind]?.medium.borderWidth;
    const borderRadius = components.hpe.button[kind]?.medium.borderRadius;
    buttonKindTheme[kind] = {
      background: components.hpe.button?.[kind].rest.background,
      border: {
        width: dimensions.borderSize[borderWidth] || borderWidth,
        color: components.hpe.button?.[kind].rest.borderColor,
        radius: dimensions.borderSize[borderRadius] || borderRadius,
      },
      color: components.hpe.button?.[kind].rest.textColor,
      font: { weight: components.hpe.button?.[kind].rest.fontWeight },
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
              components.hpe.button?.[kind]?.[adjustedState].rest.background,
          },
          border: {
            color:
              components.hpe.button?.[kind]?.[adjustedState].rest.borderColor,
          },
          color: components.hpe.button?.[kind]?.[adjustedState].rest.textColor,
          font: {
            weight:
              components.hpe.button?.[kind]?.[adjustedState].rest.fontWeight,
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
              components.hpe.button?.[kind]?.[adjustedState]?.hover
                ?.borderColor,
          },
          color:
            components.hpe.button?.[kind]?.[adjustedState]?.hover?.textColor,
          font: {
            weight:
              components.hpe.button?.[kind]?.[adjustedState]?.hover?.fontWeight,
          },
        };
      } else if (state === 'disabled') {
        buttonStatesTheme[state][kind] = {
          background: {
            color:
              components.hpe.button?.[kind]?.[adjustedState].rest.background,
          },
          border: {
            width: '',
            color:
              components.hpe.button?.[kind]?.[adjustedState].rest.borderColor,
          },
          color: components.hpe.button?.[kind]?.[adjustedState].rest.textColor,
          font: {
            weight:
              components.hpe.button?.[kind]?.[adjustedState].rest.fontWeight,
          },
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
  componentSizes.forEach((buttonSize) => {
    const kindStyles = {};
    buttonKinds.forEach((kind) => {
      kindStyles[kind] = {
        border: {
          radius: components.hpe.button?.[kind]?.[buttonSize]?.borderRadius,
        },
        pad: {
          vertical: components.hpe.button?.[kind]?.[buttonSize]?.paddingY,
          horizontal: components.hpe.button?.[kind]?.[buttonSize]?.paddingX,
        },
      };
    });
    buttonSizesTheme[buttonSize] = {
      border: {
        radius: components.hpe.button?.default?.[buttonSize]?.borderRadius,
      },
      pad: {
        vertical: components.hpe.button?.default?.[buttonSize]?.paddingY,
        horizontal: components.hpe.button?.default?.[buttonSize]?.paddingX,
      },
      iconOnly: {
        pad: {
          vertical:
            components.hpe.button?.default?.[buttonSize]?.iconOnly.paddingY,
          horizontal:
            components.hpe.button?.default?.[buttonSize]?.iconOnly.paddingX,
        },
      },
      ...kindStyles,
    };
  });

  return {
    option,
    mediumIconOnlyPad,
    buttonKindTheme,
    buttonStatesTheme,
    buttonSizesTheme,
  };
};
