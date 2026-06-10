// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import {
  primitives as localPrimitives,
  dark as localDark,
  light as localLight,
  dimension as localDimension,
  small as localSmall,
  global as localGlobal,
  components as localComponents,
} from 'hpe-design-tokens/grommet';

import { Checkmark } from '@hpe-design/icons-grommet/icons/Checkmark';
import { Close } from '@hpe-design/icons-grommet/icons/Close';
import { Element } from '@hpe-design/icons-grommet/icons/Element';
import { Filter } from '@hpe-design/icons-grommet/icons/Filter';
import { Search } from '@hpe-design/icons-grommet/icons/Search';
import { Descend } from '@hpe-design/icons-grommet/icons/Descend';
import { Add } from '@hpe-design/icons-grommet/icons/Add';
import { Subtract } from '@hpe-design/icons-grommet/icons/Subtract';
import { Lock } from '@hpe-design/icons-grommet/icons/Lock';
import { Splits } from '@hpe-design/icons-grommet/icons/Splits';
import { Calendar } from '@hpe-design/icons-grommet/icons/Calendar';
import { Alert } from '@hpe-design/icons-grommet/icons/Alert';
import { Star } from '@hpe-design/icons-grommet/icons/Star';
import { StarFill } from '@hpe-design/icons-grommet/icons/StarFill';
import { Left } from '@hpe-design/icons-grommet/icons/Left';
import { Right } from '@hpe-design/icons-grommet/icons/Right';
import { Copy } from '@hpe-design/icons-grommet/icons/Copy';
import { Like } from '@hpe-design/icons-grommet/icons/Like';
import { LikeFill } from '@hpe-design/icons-grommet/icons/LikeFill';
import { Dislike } from '@hpe-design/icons-grommet/icons/Dislike';
import { DislikeFill } from '@hpe-design/icons-grommet/icons/DislikeFill';
import { Ascending } from '@hpe-design/icons-grommet/icons/Ascending';
import { Blank } from '@hpe-design/icons-grommet/icons/Blank';
import { Descending } from '@hpe-design/icons-grommet/icons/Descending';
import { Down } from '@hpe-design/icons-grommet/icons/Down';
import { Unsorted } from '@hpe-design/icons-grommet/icons/Unsorted';
import { Up } from '@hpe-design/icons-grommet/icons/Up';
import { Pin } from '@hpe-design/icons-grommet/icons/Pin';
import { StatusWarning } from '@hpe-design/icons-grommet/icons/StatusWarning';
import { StatusGood } from '@hpe-design/icons-grommet/icons/StatusGood';
import { StatusUnknown } from '@hpe-design/icons-grommet/icons/StatusUnknown';
import { Info } from '@hpe-design/icons-grommet/icons/Info';
import { StatusCritical } from '@hpe-design/icons-grommet/icons/StatusCritical';
import { baseSpacing, deepFreeze, getThemeColor } from './utils';

import { backgrounds } from './backgrounds';
import { colors } from './colors';
import { buildDimensions } from './dimensions';
import { buildTypography } from './typography';
import { buildButtonTheme } from './button';
import { buildFeedbackTheme } from './feedback';
import { buildNavigationTheme } from './navigation';
import { buildDataTheme } from './data';
import { buildMiscTheme } from './misc';
import { buildContentTheme } from './content';
import { buildFormTheme } from './form';
import { buildLayoutTheme } from './layout';

const buildTheme = (tokens, flags) => {
  const { light, dark, large, global, components } = tokens;

  const dimensions = buildDimensions(tokens, flags);

  const typography = buildTypography(tokens, { localGlobal });
  const {
    option,
    mediumIconOnlyPad,
    buttonKindTheme,
    buttonStatesTheme,
    buttonSizesTheme,
  } = buildButtonTheme(tokens, dimensions);
  const feedbackTheme = buildFeedbackTheme(tokens, {
    Close,
    Info,
    StatusCritical,
    StatusGood,
    StatusUnknown,
    StatusWarning,
  });
  const navigationTheme = buildNavigationTheme(tokens, {
    dimensions,
    icons: { Down, Left, Right, Up },
  });
  const dataTheme = buildDataTheme(tokens, {
    icons: {
      Add,
      Ascending,
      Close,
      Descend,
      Descending,
      Down,
      Filter,
      Lock,
      Search,
      Splits,
      Subtract,
      Unsorted,
      Up,
    },
  });
  const miscTheme = buildMiscTheme(tokens, {
    icons: {
      Close,
    },
  });
  const contentTheme = buildContentTheme(tokens, {
    baseSpacing,
    mediumIconOnlyPad,
    icons: {
      Down,
      Left,
      Pin,
      Right,
      Subtract,
      Up,
    },
  });
  const formTheme = buildFormTheme(tokens, {
    dimensions,
    option,
    icons: {
      Alert,
      Blank,
      Calendar,
      Close,
      Copy,
      Dislike,
      DislikeFill,
      Down,
      Like,
      LikeFill,
      Search,
      Star,
      StarFill,
      Up,
    },
  });
  const layoutTheme = buildLayoutTheme(tokens);

  const referenceColorDocumentationMessage =
    'Please reference the HPE Design System color documentation (https://design-system.hpe.design/foundation/color) for a list of available colors';

  const backgroundDeprecationMessage = (background) =>
    `The background '${background}' is deprecated and will be removed in v10 to ensure access to the latest Brand assets. Please replace this key by referencing an image URL directly. You can find approved backgrounds within HPE Brand Central (https://brandcentral.hpe.com/brand-central/content/imagery).`;

  const colorRemovedDeprecationMessage = (color, alt) =>
    `The color '${color}' is deprecated and will be removed in v10. ${alt ? `Please use '${alt}' instead` : referenceColorDocumentationMessage}.`;

  const colorUndefinedDeprecationMessage = (color, future, alt) =>
    `The color '${color}' is deprecated and ${future ? "will be set to 'undefined' in v10" : "its value is set to 'undefined'"}. ${alt ? `Please use '${alt}' instead` : referenceColorDocumentationMessage}.`;

  const deprecationEntry = (name, message) => ({ name, message });

  // Deprecated backgrounds
  const deprecatedBackgrounds = [
    'datawave-green-1',
    'datawave-green-2',
    'datawave-multi-1',
    'datawave-multi-2',
    'datawave-multi-3',
    'datawave-multi-4',
    'datawave-multi-5',
    'datawave-multi-6',
    'datawave-white-1',
    'datawave-white-2',
    'datawave-white-3',
    'datawave-white-4',
    'light-shadow-1',
    'light-shadow-2',
    'light-shadow-3',
    'light-shadow-4',
    'orange-yellow',
    'purple-blue',
    'purple-blue-yellow',
    'purple-magenta-yellow',
  ].map((name) => deprecationEntry(name, backgroundDeprecationMessage(name)));

  // Deprecated button kinds
  const deprecatedButtonKinds = [
    { name: 'cta-primary', alt: 'primary' },
    { name: 'cta-alternate', alt: 'secondary' },
  ].map(({ name, alt }) =>
    deprecationEntry(
      name,
      `The "${name}" button kind is deprecated and will be removed in v10. Please use "${alt}" instead.`,
    ),
  );

  // Deprecated colors
  const deprecatedColors = [
    // Undefined without alternative
    ...[
      'accent-1',
      'accent-2',
      'accent-3',
      'accent-4',
      'neutral-1',
      'neutral-2',
      'neutral-3',
      'neutral-4',
      'neutral-5',
      'status-error',
    ].map((name) =>
      deprecationEntry(name, colorUndefinedDeprecationMessage(name)),
    ),
    // Undefined (future) with alternative - graph colors
    ...[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
      deprecationEntry(
        `graph-${i}`,
        colorUndefinedDeprecationMessage(
          `graph-${i}`,
          true,
          `dataVis-categorical-${(i + 1) * 10}`,
        ),
      ),
    ),
    // Undefined (future) with alternative - other
    deprecationEntry(
      'status-disabled',
      colorUndefinedDeprecationMessage('status-disabled', true, 'text-weak'),
    ),
    // Removed with alternative
    deprecationEntry(
      'disabled-text',
      colorRemovedDeprecationMessage('disabled-text', 'text-disabled'),
    ),
    // Removed without alternative
    deprecationEntry(
      'background-cta-alternate',
      colorRemovedDeprecationMessage('background-cta-alternate'),
    ),
  ];

  // Figure out what name is being used for the Graphik font in the family list.
  // Since we're going to map the font-faces to Graphik font files we specifically
  // look for something containing "Graphik"
  const family =
    global.hpe.fontStack.primary
      .split(',')
      .map((s) => s.trim().replace(/['"]/g, ''))
      .find((f) => f.includes('Graphik')) || 'HPE Graphik';

  return deepFreeze({
    defaultMode: 'light',
    global: {
      backgrounds,
      ...dimensions,
      colors,
      control: {
        border: {
          radius:
            components.hpe.formField.default.medium.input.container
              .borderRadius,
          color:
            components.hpe.formField.default.input.container.rest.borderColor,
        },
        disabled: { opacity: 0.3 },
      },
      deprecated: {
        backgrounds: deprecatedBackgrounds,
        button: {
          kind: deprecatedButtonKinds,
        },
        colors: deprecatedColors,
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
        face: `
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Regular-Web.woff2") format('woff2');
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Regular-Web.woff2") format('woff2');
            font-weight: 400;
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Bold-Web.woff2") format('woff2');
            font-weight: 700;
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Semibold-Web.woff2") format('woff2');
            font-weight: 600;
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Medium-Web.woff2") format('woff2');
            font-weight: 500;
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Extralight-Web.woff2") format('woff2');
            font-weight: 100;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Regular-Web.woff2") format('woff2');
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Regular-Web.woff2") format('woff2');
            font-weight: 400;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Bold-Web.woff2") format('woff2');
            font-weight: 700;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Semibold-Web.woff2") format('woff2');
            font-weight: 600;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Medium-Web.woff2") format('woff2');
            font-weight: 500;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Extralight-Web.woff2") format('woff2');
            font-weight: 100;
          }`,
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
    },
    accordion: navigationTheme.accordion,
    anchor: typography.anchor,
    avatar: contentTheme.avatar,
    box: miscTheme.box,
    button: {
      intelligentPad: false,
      color: components.hpe.button.default.rest.textColor,
      gap: components.hpe.button.default.medium.gapX,
      badge: {
        align: 'container',
        container: { background: 'background-neutral-xstrong' },
        size: { medium: '18px' },
        text: { size: { medium: 'xsmall' } },
      },
      busy: {
        gap: 'xsmall',
        icons: {
          success: Checkmark,
        },
      },
      'cta-primary': {
        ...buttonKindTheme.primary,
        icon: <Element />,
        reverse: true,
      },
      'cta-alternate': {
        ...buttonKindTheme.secondary,
        icon: <Element />,
        reverse: true,
      },
      ...buttonKindTheme,
      option,
      active: {
        ...buttonStatesTheme.active,
        'cta-primary': buttonStatesTheme.active.primary,
        'cta-alternate': buttonStatesTheme.active.secondary,
        extend: ({ kind, theme, keyboard }) => {
          let style = '';
          // applies when option is in focus
          if (kind === 'option') {
            style += `
            &[aria-selected="true"] { background: ${getThemeColor(
              components.hpe.select.default.option.selected.rest.background,
              theme,
            )}; }`;
          }
          // keyboard specific styling for TextInput and MaskedInput suggestions
          if (keyboard) {
            style += `
            position: relative;
            &::before {
              display: block;
              position: absolute;
              content: '';
              width: ${
                components.hpe.select.default.medium.option.marker.width
              };
              border-top-left-radius: ${
                components.hpe.select.default.medium.option.marker
                  .borderTopLeftRadius
              };
              border-bottom-left-radius: ${
                components.hpe.select.default.medium.option.marker
                  .borderBottomLeftRadius
              };
              top: ${components.hpe.select.default.medium.option.marker.top};
              bottom: ${
                components.hpe.select.default.medium.option.marker.bottom
              };
              left: ${components.hpe.select.default.medium.option.marker.left};
              background: ${getThemeColor('border-selected', theme)};
            }`;
          }
          return style;
        },
      },
      disabled: {
        ...buttonStatesTheme.disabled.default,
        opacity: 1,
        ...buttonStatesTheme.disabled,
        option: {
          background:
            components.hpe.select.default.option.disabled.rest.background,
          border: {
            color:
              components.hpe.select.default.option.disabled.rest.borderColor,
          },
          color: components.hpe.select.default.option.disabled.rest.textColor,
          font: {
            weight:
              components.hpe.select.default.option.disabled.rest.fontWeight,
          },
        },
        'cta-primary': buttonStatesTheme.disabled.primary,
        'cta-alternate': buttonStatesTheme.disabled.secondary,
      },
      selected: {
        option: {
          background:
            components.hpe.select.default.option.selected.rest.background,
          border: {
            color:
              components.hpe.select.default.option.selected.rest.borderColor,
          },
          color: components.hpe.select.default.option.selected.rest.textColor,
          font: {
            weight:
              components.hpe.select.default.option.selected.rest.fontWeight,
          },
          extend: ({ theme, disabled }) =>
            `
            position: relative;
            &::before {
              display: block;
              position: absolute;
              content: '';
              width: ${
                components.hpe.select.default.medium.option.marker.width
              };
              border-top-left-radius: ${
                components.hpe.select.default.medium.option.marker
                  .borderTopLeftRadius
              };
              border-bottom-left-radius: ${
                components.hpe.select.default.medium.option.marker
                  .borderBottomLeftRadius
              };
              top: ${components.hpe.select.default.medium.option.marker.top};
              bottom: ${
                components.hpe.select.default.medium.option.marker.bottom
              };
              left: ${components.hpe.select.default.medium.option.marker.left};
              background: ${getThemeColor(
                !disabled
                  ? components.hpe.select.default.option.marker.rest.background
                  : 'border-disabled',
                theme,
              )};
            }
          `,
        },
      },
      hover: {
        'cta-primary': buttonStatesTheme.hover.primary,
        'cta-alternate': buttonStatesTheme.hover.secondary,
        ...buttonStatesTheme.hover,
        active: {
          ...buttonStatesTheme.hover.active,
          'cta-primary': buttonStatesTheme.hover.active.primary,
          'cta-alternate': buttonStatesTheme.hover.active.secondary,
        },
        option: {
          background: components.hpe.select.default.option.hover.background,
          border: {
            color: components.hpe.select.default.option.hover.borderColor,
          },
          color: components.hpe.select.default.option.hover.textColor,
          extend: (props) =>
            props['aria-selected'] &&
            `
           background: ${getThemeColor(
             components.hpe.select.default.option.selected.hover.background,
             props.theme,
           )};
          color: ${getThemeColor(
            components.hpe.select.default.option.selected.hover.textColor,
            props.theme,
          )}
          `,
        },
      },
      size: {
        ...buttonSizesTheme,
        medium: {
          ...buttonSizesTheme.medium,
          option: {
            pad: {
              horizontal: components.hpe.select.default.medium.option.paddingX,
              vertical: components.hpe.select.default.medium.option.paddingY,
            },
          },
        },
      },
      extend: ({ colorValue, theme, kind, disabled, active }) => {
        let style = '';
        if (
          (kind === 'primary' || kind === 'cta-primary') &&
          !disabled &&
          !active
        ) {
          // Temporary fix for grommet bug with light/dark logic. This temp fix will override the color prop on an icon, so this is
          // not a long term solution. Also, reliance on !important is not ideal.
          style += `color: ${getThemeColor(
            'text-onStrong',
            theme,
          )} !important;`;
          const iconColor = theme.dark
            ? dark.hpe.color.icon.onStrong
            : light.hpe.color.icon.onStrong;
          style += `svg { fill: ${iconColor}; }`;
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
    calendar: contentTheme.calendar,
    card: contentTheme.card,
    cards: contentTheme.cards,
    carousel: contentTheme.carousel,
    chart: contentTheme.chart,
    checkBox: formTheme.checkBox,
    checkBoxGroup: formTheme.checkBoxGroup,
    data: dataTheme.data,
    dataChart: dataTheme.dataChart,
    dataFilter: dataTheme.dataFilter,
    dataFilters: dataTheme.dataFilters,
    dateInput: formTheme.dateInput,
    dataSearch: dataTheme.dataSearch,
    dataSort: dataTheme.dataSort,
    dataSummary: dataTheme.dataSummary,
    dataTable: dataTheme.dataTable,
    diagram: miscTheme.diagram,
    distribution: miscTheme.distribution,
    dataTableColumns: dataTheme.dataTableColumns,
    fileInput: formTheme.fileInput,
    footer: miscTheme.footer,
    formField: formTheme.formField,
    header: miscTheme.header,
    heading: typography.heading,
    icon: miscTheme.icon,
    layer: feedbackTheme.layer,
    list: contentTheme.list,
    maskedInput: formTheme.maskedInput,
    menu: navigationTheme.menu,
    meter: miscTheme.meter,
    nameValueList: contentTheme.nameValueList,
    nameValuePair: layoutTheme.nameValuePair,
    nav: navigationTheme.nav,
    notification: feedbackTheme.notification,
    page: layoutTheme.page,
    pageHeader: layoutTheme.pageHeader,
    pagination: navigationTheme.pagination,
    paragraph: { ...typography.paragraph, skeleton: { gap: '3xsmall' } },
    radioButton: formTheme.radioButton,
    radioButtonGroup: formTheme.radioButtonGroup,
    rangeInput: formTheme.rangeInput,
    rangeSelector: formTheme.rangeSelector,
    select: formTheme.select,
    selectMultiple: formTheme.selectMultiple,
    sidebar: navigationTheme.sidebar,
    spinner: feedbackTheme.spinner,
    starRating: formTheme.starRating,
    tab: navigationTheme.tab,
    tabs: navigationTheme.tabs,
    table: contentTheme.table,
    tag: miscTheme.tag,
    text: {
      ...typography.text,
      skeleton: {
        margin: { vertical: '3xsmall' },
      },
    },
    textInput: formTheme.textInput,
    tip: navigationTheme.tip,
    thumbsRating: formTheme.thumbsRating,
    toggleGroup: navigationTheme.toggleGroup,
    toolbar: dataTheme.toolbar,
    video: layoutTheme.video,
    // Theme-Designer only parameters
    name: 'HPE 1',
    rounding: 4,
    scale: 1.1,
    spacing: 24,
  });
};

export { buildTheme };

export const hpe = buildTheme(
  {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    small: localSmall,
    large: localDimension,
    global: localGlobal,
    components: localComponents,
  },
  {
    // For grommet-theme-hpe v6.0.0, maintain backwards compatibility
    // with old t-shirt sizes
    'v6-backwards-compatibility': false,
  },
);
