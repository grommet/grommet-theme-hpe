function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import { primitives as localPrimitives, dark as localDark, light as localLight, dimension as localDimension, small as localSmall, global as localGlobal, components as localComponents } from 'hpe-design-tokens/grommet';
import { Checkmark } from '@hpe-design/icons-grommet/icons/Checkmark';
import { Clock } from '@hpe-design/icons-grommet/icons/Clock';
import { CircleFill } from '@hpe-design/icons-grommet/icons/CircleFill';
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

// ignore unresolved for CI lint
// eslint-disable-next-line import/no-unresolved, import/extensions
import { themeVersion } from './themeVersion';
var buildTheme = function buildTheme(tokens, flags) {
  var light = tokens.light,
    dark = tokens.dark,
    global = tokens.global,
    components = tokens.components;
  var colors = buildColors(tokens);
  var dimensions = buildDimensions(tokens, flags);
  var typography = buildTypography(tokens);
  var _buildButtonTheme = buildButtonTheme(tokens, dimensions),
    option = _buildButtonTheme.option,
    mediumIconOnlyPad = _buildButtonTheme.mediumIconOnlyPad,
    buttonKindTheme = _buildButtonTheme.buttonKindTheme,
    buttonStatesTheme = _buildButtonTheme.buttonStatesTheme,
    buttonSizesTheme = _buildButtonTheme.buttonSizesTheme;
  var feedbackTheme = buildFeedbackTheme(tokens, {
    Close: Close,
    Info: Info,
    StatusCritical: StatusCritical,
    StatusGood: StatusGood,
    StatusUnknown: StatusUnknown,
    StatusWarning: StatusWarning
  });
  var navigationTheme = buildNavigationTheme(tokens, {
    dimensions: dimensions,
    icons: {
      Down: Down,
      Left: Left,
      Right: Right,
      Up: Up
    }
  });
  var dataTheme = buildDataTheme(tokens, {
    icons: {
      Add: Add,
      Ascending: Ascending,
      Close: Close,
      Descend: Descend,
      Descending: Descending,
      Down: Down,
      Filter: Filter,
      Lock: Lock,
      Search: Search,
      Splits: Splits,
      Subtract: Subtract,
      Unsorted: Unsorted,
      Up: Up
    }
  });
  var miscTheme = buildMiscTheme(tokens, {
    icons: {
      Checkmark: Checkmark,
      CircleFill: CircleFill,
      Close: Close,
      StatusCritical: StatusCritical
    }
  });
  var contentTheme = buildContentTheme(tokens, {
    baseSpacing: baseSpacing,
    mediumIconOnlyPad: mediumIconOnlyPad,
    icons: {
      Down: Down,
      Left: Left,
      Pin: Pin,
      Right: Right,
      Subtract: Subtract,
      Up: Up
    }
  });
  var formTheme = buildFormTheme(tokens, {
    dimensions: dimensions,
    option: option,
    icons: {
      Alert: Alert,
      Blank: Blank,
      Calendar: Calendar,
      Clock: Clock,
      Close: Close,
      Copy: Copy,
      Dislike: Dislike,
      DislikeFill: DislikeFill,
      Down: Down,
      Like: Like,
      LikeFill: LikeFill,
      Search: Search,
      Star: Star,
      StarFill: StarFill,
      Up: Up
    }
  });
  var layoutTheme = buildLayoutTheme(tokens);
  var deprecations = buildDeprecations();
  var family = getGraphikFamily(global.hpe.fontStack.primary);
  return deepFreeze({
    defaultMode: 'light',
    global: buildGlobalTheme(tokens, {
      backgrounds: backgrounds,
      colors: colors,
      dimensions: dimensions,
      deprecations: deprecations,
      getThemeColor: getThemeColor,
      fontFaceFamily: family,
      getGraphikFontFaces: getGraphikFontFaces
    }),
    accordion: navigationTheme.accordion,
    anchor: typography.anchor,
    avatar: contentTheme.avatar,
    box: miscTheme.box,
    button: _extends({
      intelligentPad: false,
      color: components.hpe.button["default"].rest.textColor,
      gap: components.hpe.button["default"].medium.gapX,
      badge: {
        align: 'container',
        container: {
          background: 'background-neutral-xstrong'
        },
        size: {
          medium: '18px'
        },
        text: {
          size: {
            medium: 'xsmall'
          }
        }
      },
      busy: {
        gap: 'xsmall',
        icons: {
          success: Checkmark
        }
      },
      'cta-primary': _extends({}, buttonKindTheme.primary, {
        icon: /*#__PURE__*/React.createElement(Element, null),
        reverse: true
      }),
      'cta-alternate': _extends({}, buttonKindTheme.secondary, {
        icon: /*#__PURE__*/React.createElement(Element, null),
        reverse: true
      })
    }, buttonKindTheme, {
      option: option,
      active: _extends({}, buttonStatesTheme.active, {
        'cta-primary': buttonStatesTheme.active.primary,
        'cta-alternate': buttonStatesTheme.active.secondary,
        extend: function extend(_ref) {
          var kind = _ref.kind,
            theme = _ref.theme,
            keyboard = _ref.keyboard;
          var style = '';
          // applies when option is in focus
          if (kind === 'option') {
            style += "\n            &[aria-selected=\"true\"] { background: " + getThemeColor(components.hpe.select["default"].option.selected.rest.background, theme) + "; }";
          }
          // keyboard specific styling for TextInput and MaskedInput suggestions
          if (keyboard) {
            style += "\n            position: relative;\n            &::before {\n              display: block;\n              position: absolute;\n              content: '';\n              width: " + components.hpe.select["default"].medium.option.marker.width + ";\n              border-top-left-radius: " + components.hpe.select["default"].medium.option.marker.borderTopLeftRadius + ";\n              border-bottom-left-radius: " + components.hpe.select["default"].medium.option.marker.borderBottomLeftRadius + ";\n              top: " + components.hpe.select["default"].medium.option.marker.top + ";\n              bottom: " + components.hpe.select["default"].medium.option.marker.bottom + ";\n              left: " + components.hpe.select["default"].medium.option.marker.left + ";\n              background: " + getThemeColor('border-selected', theme) + ";\n            }";
          }
          return style;
        }
      }),
      disabled: _extends({}, buttonStatesTheme.disabled["default"], {
        opacity: 1
      }, buttonStatesTheme.disabled, {
        option: {
          background: components.hpe.select["default"].option.disabled.rest.background,
          border: {
            color: components.hpe.select["default"].option.disabled.rest.borderColor
          },
          color: components.hpe.select["default"].option.disabled.rest.textColor,
          font: {
            weight: components.hpe.select["default"].option.disabled.rest.fontWeight
          }
        },
        'cta-primary': buttonStatesTheme.disabled.primary,
        'cta-alternate': buttonStatesTheme.disabled.secondary
      }),
      selected: {
        option: {
          background: components.hpe.select["default"].option.selected.rest.background,
          border: {
            color: components.hpe.select["default"].option.selected.rest.borderColor
          },
          color: components.hpe.select["default"].option.selected.rest.textColor,
          font: {
            weight: components.hpe.select["default"].option.selected.rest.fontWeight
          },
          extend: function extend(_ref2) {
            var theme = _ref2.theme,
              disabled = _ref2.disabled;
            return "\n            position: relative;\n            &::before {\n              display: block;\n              position: absolute;\n              content: '';\n              width: " + components.hpe.select["default"].medium.option.marker.width + ";\n              border-top-left-radius: " + components.hpe.select["default"].medium.option.marker.borderTopLeftRadius + ";\n              border-bottom-left-radius: " + components.hpe.select["default"].medium.option.marker.borderBottomLeftRadius + ";\n              top: " + components.hpe.select["default"].medium.option.marker.top + ";\n              bottom: " + components.hpe.select["default"].medium.option.marker.bottom + ";\n              left: " + components.hpe.select["default"].medium.option.marker.left + ";\n              background: " + getThemeColor(!disabled ? components.hpe.select["default"].option.marker.rest.background : 'border-disabled', theme) + ";\n            }\n          ";
          }
        }
      },
      hover: _extends({
        'cta-primary': buttonStatesTheme.hover.primary,
        'cta-alternate': buttonStatesTheme.hover.secondary
      }, buttonStatesTheme.hover, {
        active: _extends({}, buttonStatesTheme.hover.active, {
          'cta-primary': buttonStatesTheme.hover.active.primary,
          'cta-alternate': buttonStatesTheme.hover.active.secondary
        }),
        option: {
          background: components.hpe.select["default"].option.hover.background,
          border: {
            color: components.hpe.select["default"].option.hover.borderColor
          },
          color: components.hpe.select["default"].option.hover.textColor,
          extend: function extend(props) {
            return props['aria-selected'] && "\n           background: " + getThemeColor(components.hpe.select["default"].option.selected.hover.background, props.theme) + ";\n          color: " + getThemeColor(components.hpe.select["default"].option.selected.hover.textColor, props.theme) + "\n          ";
          }
        }
      }),
      size: _extends({}, buttonSizesTheme, {
        medium: _extends({}, buttonSizesTheme.medium, {
          option: {
            pad: {
              horizontal: components.hpe.select["default"].medium.option.paddingX,
              vertical: components.hpe.select["default"].medium.option.paddingY
            }
          }
        })
      }),
      extend: function extend(_ref3) {
        var colorValue = _ref3.colorValue,
          theme = _ref3.theme,
          kind = _ref3.kind,
          disabled = _ref3.disabled,
          active = _ref3.active;
        var style = '';
        if ((kind === 'primary' || kind === 'cta-primary') && !disabled && !active) {
          // Temporary fix for grommet bug with light/dark logic. This temp fix will override the color prop on an icon, so this is
          // not a long term solution. Also, reliance on !important is not ideal.
          style += "color: " + getThemeColor('text-onStrong', theme) + " !important;";
          var iconColor = theme.dark ? dark.hpe.color.icon.onStrong : light.hpe.color.icon.onStrong;
          style += "svg { fill: " + iconColor + "; }";
        }
        if (colorValue) {
          // color prop is not recommended to be used, but providing
          // a better fallback behavior for hover styles to avoid
          // "kind" hover background from applying
          // https://github.com/grommet/grommet/issues/7504
          style += "\n            &:hover { background: " + getThemeColor(colorValue, theme) + "; }\n          ";
        }
        return style;
      }
    }),
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
    dateTimeInput: formTheme.dateTimeInput,
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
    paragraph: _extends({}, typography.paragraph, {
      skeleton: {
        gap: '3xsmall'
      }
    }),
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
    text: _extends({}, typography.text, {
      skeleton: {
        margin: {
          vertical: '3xsmall'
        }
      }
    }),
    textInput: formTheme.textInput,
    timeInput: formTheme.timeInput,
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
    version: themeVersion
  });
};
export { buildTheme };
export var hpe = buildTheme({
  primitives: localPrimitives,
  light: localLight,
  dark: localDark,
  small: localSmall,
  large: localDimension,
  global: localGlobal,
  components: localComponents
}, {
  // For grommet-theme-hpe v6.0.0, maintain backwards compatibility
  // with old t-shirt sizes
  'v6-backwards-compatibility': false
});