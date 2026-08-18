// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
export const buildGlobalTheme = (
  tokens,
  {
    backgrounds,
    colors,
    dimensions,
    deprecations,
    getThemeColor,
    fontFaceFamily,
    getGraphikFontFaces,
  },
) => {
  const { light, dark, large, global, components } = tokens;

  return {
    backgrounds,
    ...dimensions,
    colors,
    control: {
      border: {
        radius:
          components.hpe.formField.default.medium.input.container.borderRadius,
        color:
          components.hpe.formField.default.input.container.rest.borderColor,
      },
      disabled: { opacity: 0.3 },
    },
    deprecated: {
      backgrounds: deprecations.backgrounds,
      button: {
        kind: deprecations.buttonKinds,
      },
      colors: deprecations.colors,
    },
    input: {
      font: {
        height: 'inherit',
        weight: components.hpe.formField.default.medium.value.fontWeight,
      },
      padding: {
        horizontal:
          components.hpe.formField.default.medium.input.container.paddingX,
        vertical:
          components.hpe.formField.default.medium.input.container.paddingY,
      },
      readOnly: {
        background:
          components.hpe.formField.default.input.container.readOnly.rest
            .background,
        border: {
          color:
            components.hpe.formField.default.input.container.readOnly.rest
              .borderColor,
        },
      },
      extend: ({ theme }) => `
          color: ${getThemeColor(
            components.hpe.formField.default.value.rest.textColor,
            theme,
          )};
          &::-webkit-input-placeholder {
          font-weight: ${
            components.hpe.formField.default.medium.placeholder.fontWeight
          };
        }
      
        &::-moz-placeholder {
          font-weight: ${
            components.hpe.formField.default.medium.placeholder.fontWeight
          };
        }
      
        &:-ms-input-placeholder {
          font-weight: ${
            components.hpe.formField.default.medium.placeholder.fontWeight
          };
        }
        `,
    },
    font: {
      family: global.hpe.fontStack.primary,
      face: getGraphikFontFaces(fontFaceFamily),
      size: large.hpe.text.medium.fontSize,
      height: large.hpe.text.medium.lineHeight,
    },
    focus: {
      border: undefined,
      outline: {
        color: global.hpe.focusIndicator.outline.color,
        size: global.hpe.focusIndicator.outline.width,
        offset: global.hpe.focusIndicator.outlineOffset,
      },
      shadow: {
        color: 'focus-support',
        size: '2px',
        blur: '0px',
      },
      twoColor: true,
      inset: {
        border: undefined,
        outline: {
          color: global.hpe.focusIndicator.outline.color,
          size: global.hpe.focusIndicator.outline.width,
          offset: `-${global.hpe.focusIndicator.outline.width}`,
        },
        shadow: {
          color: 'focus-support',
          size: '4px',
          blur: '0px',
          inset: true,
        },
        twoColor: true,
      },
    },
    active: { background: 'background-active', color: 'active-text' },
    drop: {
      background: components.hpe.drop.default.background,
      border: {
        radius:
          dimensions.radius[components.hpe.drop.default.borderRadius] ||
          components.hpe.drop.default.borderRadius,
      },
      margin: components.hpe.drop.default.margin,
      intelligentMargin: true,
      shadowSize: 'medium',
      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment brings Drop in alignment with Layer
       * which needs an elevated z-index to sit atop the Global header. */
      zIndex: components.hpe.drop.default.zIndex,
      extend: () => `
          [class*=MaskedInput__ContainerBox] {
            padding-block: ${components.hpe.select.default.medium.drop.paddingY};
            padding-inline: ${components.hpe.select.default.medium.drop.paddingX};
            gap: ${components.hpe.select.default.medium.drop.gapY};
            display: flex;
            flex-direction: column;
          }
        `,
    },
    elevation: {
      // Elevation values were derived from this Figma file.
      // https://www.figma.com/file/eZYR3dtWdb9U90QvJ7p3T9/HPE-Color-Styles?node-id=405%3A25
      // Naming in Figma file is strong/default/weak vs. Grommet t-shirt sizing.
      // As defined here, default is currently mapping to medium.
      light: {
        small: light.hpe.shadow.small,
        medium: light.hpe.shadow.medium,
        large: light.hpe.shadow.large,
      },
      dark: {
        small: dark.hpe.shadow.small,
        medium: dark.hpe.shadow.medium,
        large: dark.hpe.shadow.large,
      },
    },
    hover: { background: 'background-hover', color: 'text-default' },
    selected: {
      background: 'background-selected-primary-strong',
      color: 'text-onSelectedPrimaryStrong',
    },
  };
};
