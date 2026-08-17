"use strict";

exports.__esModule = true;
exports.hpe = exports.buildTheme = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("hpe-design-tokens/grommet");
var _Checkmark = require("@hpe-design/icons-grommet/icons/Checkmark");
var _Clock = require("@hpe-design/icons-grommet/icons/Clock");
var _CircleFill = require("@hpe-design/icons-grommet/icons/CircleFill");
var _Close = require("@hpe-design/icons-grommet/icons/Close");
var _Element = require("@hpe-design/icons-grommet/icons/Element");
var _Filter = require("@hpe-design/icons-grommet/icons/Filter");
var _Search = require("@hpe-design/icons-grommet/icons/Search");
var _Descend = require("@hpe-design/icons-grommet/icons/Descend");
var _Add = require("@hpe-design/icons-grommet/icons/Add");
var _Subtract = require("@hpe-design/icons-grommet/icons/Subtract");
var _Lock = require("@hpe-design/icons-grommet/icons/Lock");
var _Splits = require("@hpe-design/icons-grommet/icons/Splits");
var _Calendar = require("@hpe-design/icons-grommet/icons/Calendar");
var _Alert = require("@hpe-design/icons-grommet/icons/Alert");
var _Star = require("@hpe-design/icons-grommet/icons/Star");
var _StarFill = require("@hpe-design/icons-grommet/icons/StarFill");
var _Left = require("@hpe-design/icons-grommet/icons/Left");
var _Right = require("@hpe-design/icons-grommet/icons/Right");
var _Copy = require("@hpe-design/icons-grommet/icons/Copy");
var _Like = require("@hpe-design/icons-grommet/icons/Like");
var _LikeFill = require("@hpe-design/icons-grommet/icons/LikeFill");
var _Dislike = require("@hpe-design/icons-grommet/icons/Dislike");
var _DislikeFill = require("@hpe-design/icons-grommet/icons/DislikeFill");
var _Ascending = require("@hpe-design/icons-grommet/icons/Ascending");
var _Blank = require("@hpe-design/icons-grommet/icons/Blank");
var _Descending = require("@hpe-design/icons-grommet/icons/Descending");
var _Down = require("@hpe-design/icons-grommet/icons/Down");
var _Unsorted = require("@hpe-design/icons-grommet/icons/Unsorted");
var _Up = require("@hpe-design/icons-grommet/icons/Up");
var _Pin = require("@hpe-design/icons-grommet/icons/Pin");
var _StatusWarning = require("@hpe-design/icons-grommet/icons/StatusWarning");
var _StatusGood = require("@hpe-design/icons-grommet/icons/StatusGood");
var _StatusUnknown = require("@hpe-design/icons-grommet/icons/StatusUnknown");
var _Info = require("@hpe-design/icons-grommet/icons/Info");
var _StatusCritical = require("@hpe-design/icons-grommet/icons/StatusCritical");
var _utils = require("./utils");
var _backgrounds = require("./backgrounds");
var _dimensions = require("./dimensions");
var _typography = require("./typography");
var _button = require("./button");
var _feedback = require("./feedback");
var _navigation = require("./navigation");
var _data = require("./data");
var _misc = require("./misc");
var _content = require("./content");
var _form = require("./form");
var _layout = require("./layout");
var _deprecations = require("./deprecations");
var _fonts = require("./fonts");
var _global = require("./global");
var _colors = require("./colors");
var _themeVersion = require("./themeVersion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
// ignore unresolved for CI lint
// eslint-disable-next-line import/no-unresolved, import/extensions
var buildTheme = exports.buildTheme = function buildTheme(tokens, flags) {
  var light = tokens.light,
    dark = tokens.dark,
    global = tokens.global,
    components = tokens.components;
  var colors = (0, _colors.buildColors)(tokens);
  var dimensions = (0, _dimensions.buildDimensions)(tokens, flags);
  var typography = (0, _typography.buildTypography)(tokens);
  var _buildButtonTheme = (0, _button.buildButtonTheme)(tokens, dimensions),
    option = _buildButtonTheme.option,
    mediumIconOnlyPad = _buildButtonTheme.mediumIconOnlyPad,
    buttonKindTheme = _buildButtonTheme.buttonKindTheme,
    buttonStatesTheme = _buildButtonTheme.buttonStatesTheme,
    buttonSizesTheme = _buildButtonTheme.buttonSizesTheme;
  var feedbackTheme = (0, _feedback.buildFeedbackTheme)(tokens, {
    Close: _Close.Close,
    Info: _Info.Info,
    StatusCritical: _StatusCritical.StatusCritical,
    StatusGood: _StatusGood.StatusGood,
    StatusUnknown: _StatusUnknown.StatusUnknown,
    StatusWarning: _StatusWarning.StatusWarning
  });
  var navigationTheme = (0, _navigation.buildNavigationTheme)(tokens, {
    dimensions: dimensions,
    icons: {
      Down: _Down.Down,
      Left: _Left.Left,
      Right: _Right.Right,
      Up: _Up.Up
    }
  });
  var dataTheme = (0, _data.buildDataTheme)(tokens, {
    icons: {
      Add: _Add.Add,
      Ascending: _Ascending.Ascending,
      Close: _Close.Close,
      Descend: _Descend.Descend,
      Descending: _Descending.Descending,
      Down: _Down.Down,
      Filter: _Filter.Filter,
      Lock: _Lock.Lock,
      Search: _Search.Search,
      Splits: _Splits.Splits,
      Subtract: _Subtract.Subtract,
      Unsorted: _Unsorted.Unsorted,
      Up: _Up.Up
    }
  });
  var miscTheme = (0, _misc.buildMiscTheme)(tokens, {
    icons: {
      Checkmark: _Checkmark.Checkmark,
      CircleFill: _CircleFill.CircleFill,
      Close: _Close.Close,
      Left: _Left.Left,
      Right: _Right.Right,
      StatusCritical: _StatusCritical.StatusCritical
    }
  });
  var contentTheme = (0, _content.buildContentTheme)(tokens, {
    baseSpacing: _utils.baseSpacing,
    mediumIconOnlyPad: mediumIconOnlyPad,
    icons: {
      Down: _Down.Down,
      Left: _Left.Left,
      Pin: _Pin.Pin,
      Right: _Right.Right,
      Subtract: _Subtract.Subtract,
      Up: _Up.Up
    }
  });
  var formTheme = (0, _form.buildFormTheme)(tokens, {
    dimensions: dimensions,
    option: option,
    icons: {
      Alert: _Alert.Alert,
      Blank: _Blank.Blank,
      Calendar: _Calendar.Calendar,
      Clock: _Clock.Clock,
      Close: _Close.Close,
      Copy: _Copy.Copy,
      Dislike: _Dislike.Dislike,
      DislikeFill: _DislikeFill.DislikeFill,
      Down: _Down.Down,
      Like: _Like.Like,
      LikeFill: _LikeFill.LikeFill,
      Search: _Search.Search,
      Star: _Star.Star,
      StarFill: _StarFill.StarFill,
      Up: _Up.Up
    }
  });
  var layoutTheme = (0, _layout.buildLayoutTheme)(tokens);
  var deprecations = (0, _deprecations.buildDeprecations)();
  var family = (0, _fonts.getGraphikFamily)(global.hpe.fontStack.primary);
  return (0, _utils.deepFreeze)({
    defaultMode: 'light',
    global: (0, _global.buildGlobalTheme)(tokens, {
      backgrounds: _backgrounds.backgrounds,
      colors: colors,
      dimensions: dimensions,
      deprecations: deprecations,
      getThemeColor: _utils.getThemeColor,
      fontFaceFamily: family,
      getGraphikFontFaces: _fonts.getGraphikFontFaces
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
          success: _Checkmark.Checkmark
        }
      },
      'cta-primary': _extends({}, buttonKindTheme.primary, {
        icon: /*#__PURE__*/_react["default"].createElement(_Element.Element, null),
        reverse: true
      }),
      'cta-alternate': _extends({}, buttonKindTheme.secondary, {
        icon: /*#__PURE__*/_react["default"].createElement(_Element.Element, null),
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
            style += "\n            &[aria-selected=\"true\"] { background: " + (0, _utils.getThemeColor)(components.hpe.select["default"].option.selected.rest.background, theme) + "; }";
          }
          // keyboard specific styling for TextInput and MaskedInput suggestions
          if (keyboard) {
            style += "\n            position: relative;\n            &::before {\n              display: block;\n              position: absolute;\n              content: '';\n              width: " + components.hpe.select["default"].medium.option.marker.width + ";\n              border-top-left-radius: " + components.hpe.select["default"].medium.option.marker.borderTopLeftRadius + ";\n              border-bottom-left-radius: " + components.hpe.select["default"].medium.option.marker.borderBottomLeftRadius + ";\n              top: " + components.hpe.select["default"].medium.option.marker.top + ";\n              bottom: " + components.hpe.select["default"].medium.option.marker.bottom + ";\n              left: " + components.hpe.select["default"].medium.option.marker.left + ";\n              background: " + (0, _utils.getThemeColor)('border-selected', theme) + ";\n            }";
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
            return "\n            position: relative;\n            &::before {\n              display: block;\n              position: absolute;\n              content: '';\n              width: " + components.hpe.select["default"].medium.option.marker.width + ";\n              border-top-left-radius: " + components.hpe.select["default"].medium.option.marker.borderTopLeftRadius + ";\n              border-bottom-left-radius: " + components.hpe.select["default"].medium.option.marker.borderBottomLeftRadius + ";\n              top: " + components.hpe.select["default"].medium.option.marker.top + ";\n              bottom: " + components.hpe.select["default"].medium.option.marker.bottom + ";\n              left: " + components.hpe.select["default"].medium.option.marker.left + ";\n              background: " + (0, _utils.getThemeColor)(!disabled ? components.hpe.select["default"].option.marker.rest.background : 'border-disabled', theme) + ";\n            }\n          ";
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
            return props['aria-selected'] && "\n           background: " + (0, _utils.getThemeColor)(components.hpe.select["default"].option.selected.hover.background, props.theme) + ";\n          color: " + (0, _utils.getThemeColor)(components.hpe.select["default"].option.selected.hover.textColor, props.theme) + "\n          ";
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
          style += "color: " + (0, _utils.getThemeColor)('text-onStrong', theme) + " !important;";
          var iconColor = theme.dark ? dark.hpe.color.icon.onStrong : light.hpe.color.icon.onStrong;
          style += "svg { fill: " + iconColor + "; }";
        }
        if (colorValue) {
          // color prop is not recommended to be used, but providing
          // a better fallback behavior for hover styles to avoid
          // "kind" hover background from applying
          // https://github.com/grommet/grommet/issues/7504
          style += "\n            &:hover { background: " + (0, _utils.getThemeColor)(colorValue, theme) + "; }\n          ";
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
    wizard: miscTheme.wizard,
    // Theme-Designer only parameters
    name: 'HPE 1',
    rounding: 4,
    scale: 1.1,
    spacing: 24,
    version: _themeVersion.themeVersion
  });
};
var hpe = exports.hpe = buildTheme({
  primitives: _grommet.primitives,
  light: _grommet.light,
  dark: _grommet.dark,
  small: _grommet.small,
  large: _grommet.dimension,
  global: _grommet.global,
  components: _grommet.components
}, {
  // For grommet-theme-hpe v6.0.0, maintain backwards compatibility
  // with old t-shirt sizes
  'v6-backwards-compatibility': false
});