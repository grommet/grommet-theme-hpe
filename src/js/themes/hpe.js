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
import { buildDeprecations } from './deprecations';
import { getGraphikFamily, getGraphikFontFaces } from './fonts';
import { buildGlobalTheme } from './global';
import { buildColors } from './colors';

const buildTheme = (tokens, flags) => {
  const { light, dark, global, components } = tokens;
  const colors = buildColors(tokens);

  const dimensions = buildDimensions(tokens, flags);

  const typography = buildTypography(tokens);
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
  const deprecations = buildDeprecations();
  const family = getGraphikFamily(global.hpe.fontStack.primary);

  return deepFreeze({
    defaultMode: 'light',
    global: buildGlobalTheme(tokens, {
      backgrounds,
      colors,
      dimensions,
      deprecations,
      getThemeColor,
      fontFaceFamily: family,
      getGraphikFontFaces,
    }),
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
    stepper: miscTheme.stepper,
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
