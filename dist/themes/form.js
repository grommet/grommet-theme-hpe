"use strict";

exports.__esModule = true;
exports.buildFormTheme = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _utils = require("./utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
var buildFormTheme = exports.buildFormTheme = function buildFormTheme(tokens, context) {
  var primitives = tokens.primitives,
    light = tokens.light,
    large = tokens.large,
    components = tokens.components;
  var dimensions = context.dimensions,
    option = context.option;
  var _context$icons = context.icons,
    Alert = _context$icons.Alert,
    Blank = _context$icons.Blank,
    Calendar = _context$icons.Calendar,
    Close = _context$icons.Close,
    Copy = _context$icons.Copy,
    Dislike = _context$icons.Dislike,
    DislikeFill = _context$icons.DislikeFill,
    Down = _context$icons.Down,
    Like = _context$icons.Like,
    LikeFill = _context$icons.LikeFill,
    Search = _context$icons.Search,
    Star = _context$icons.Star,
    StarFill = _context$icons.StarFill,
    Up = _context$icons.Up;
  return {
    checkBox: {
      hover: {
        border: {
          color: undefined,
          width: dimensions.borderSize[components.hpe.checkbox["default"].medium.control.borderWidth] || components.hpe.checkbox["default"].medium.control.borderWidth
        },
        // applies to container around control and label
        background: {
          color: undefined
        },
        extend: function extend(_ref) {
          var theme = _ref.theme,
            toggle = _ref.toggle,
            checked = _ref.checked;
          if (!checked) {
            return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose([""])));
          }
          var borderColor = toggle ? (0, _utils.getThemeColor)(components.hpe["switch"]["default"].control.track.selected.hover.borderColor, theme) : (0, _utils.getThemeColor)(components.hpe.checkbox["default"].control.selected.hover.borderColor, theme);
          return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n            border-color: ", ";\n          "])), borderColor);
        }
      },
      color: components.hpe["switch"]["default"].control.handle.rest.background,
      border: {
        color: components.hpe.checkbox["default"].control.rest.borderColor,
        width: dimensions.borderSize[components.hpe.checkbox["default"].medium.control.borderWidth] || components.hpe.checkbox["default"].medium.control.borderWidth
      },
      check: {
        radius: components.hpe.checkbox["default"].medium.control.borderRadius,
        thickness: '2px',
        extend: function extend(_ref2) {
          var theme = _ref2.theme,
            checked = _ref2.checked,
            indeterminate = _ref2.indeterminate,
            disabled = _ref2.disabled;
          var background = (0, _utils.getThemeColor)(components.hpe.checkbox["default"].control.rest.background, theme);
          var hoverBackground = (0, _utils.getThemeColor)(components.hpe.checkbox["default"].control.hover.background, theme);
          var borderColor = (0, _utils.getThemeColor)(components.hpe.checkbox["default"].control.rest.borderColor, theme);
          if (checked || indeterminate) {
            background = (0, _utils.getThemeColor)(components.hpe.checkbox["default"].control.selected.rest.background, theme);
            borderColor = (0, _utils.getThemeColor)(components.hpe.checkbox["default"].control.selected.rest.borderColor, theme);
          }
          if (checked || indeterminate) {
            hoverBackground = (0, _utils.getThemeColor)(components.hpe.checkbox["default"].control.selected.hover.background, theme);
          }
          if (disabled) {
            background = (0, _utils.getThemeColor)(components.hpe.checkbox["default"].control.disabled.rest.background, theme);
            borderColor = (0, _utils.getThemeColor)(components.hpe.checkbox["default"].control.disabled.rest.borderColor, theme);
          }
          return "\n            background: " + background + ";\n            border-color: " + borderColor + ";\n            &:hover {\n              " + (!disabled ? "background: " + hoverBackground + ";" : '') + "\n            }\n          ";
        }
      },
      icon: {
        extend: function extend(_ref3) {
          var theme = _ref3.theme,
            disabled = _ref3.disabled;
          // Grommet normally applies a "smart" background/foreground pairing that
          // selects foreground colors based on the background (light/dark) to keep
          // text and icons readable. Because the "icon-onSelectedPrimaryStrong" token's
          // light/dark values are intentionally swapped in our tokens, invert
          // theme.dark here so the token is resolved exactly as authored.
          var themeToUse = disabled ? theme : _extends({}, theme, {
            dark: !theme.dark
          });
          return "stroke-width: 2px;\n      stroke: " + (0, _utils.getThemeColor)(disabled ? components.hpe.checkbox["default"].control.disabled.rest.iconColor : components.hpe.checkbox["default"].control.selected.rest.iconColor, themeToUse);
        }
      },
      gap: components.hpe.checkbox["default"].medium.gapX,
      label: {
        align: 'start'
      },
      pad: 'none',
      size: components.hpe.checkbox["default"].medium.control.width,
      toggle: {
        background: components.hpe["switch"]["default"].control.track.rest.background,
        color: components.hpe["switch"]["default"].control.handle.rest.background,
        size: components.hpe["switch"]["default"].medium.control.track.width,
        knob: {
          extend: function extend(_ref4) {
            var theme = _ref4.theme,
              checked = _ref4.checked,
              disabled = _ref4.disabled;
            var borderWidth = components.hpe["switch"]["default"].medium.control.handle.borderWidth;
            var insetHandle = dimensions.borderSize[borderWidth] || borderWidth;
            return "\n          box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'][components.hpe["switch"]["default"].control.handle.rest.boxShadow] + ";\n          border: " + (dimensions.borderSize[borderWidth] || borderWidth) + " solid " + (0, _utils.getThemeColor)(disabled ? components.hpe["switch"]["default"].control.handle.disabled.rest.borderColor : components.hpe["switch"]["default"].control.handle.rest.borderColor, theme) + ";\n          width: " + components.hpe["switch"]["default"].medium.control.handle.width + ";\n          height: " + components.hpe["switch"]["default"].medium.control.handle.height + ";\n          top: " + insetHandle + ";\n          left: " + (!checked ? insetHandle : '25px') + ";\n          ";
          }
        },
        // applies to track around handle
        extend: function extend(_ref5) {
          var checked = _ref5.checked,
            theme = _ref5.theme,
            disabled = _ref5.disabled;
          var background;
          var hoverBackground = (0, _utils.getThemeColor)(components.hpe["switch"]["default"].control.track.hover.background, theme);
          var borderColor = (0, _utils.getThemeColor)(components.hpe["switch"]["default"].control.track.rest.borderColor, theme);
          if (checked) {
            background = (0, _utils.getThemeColor)(components.hpe["switch"]["default"].control.track.selected.rest.background, theme);
            hoverBackground = (0, _utils.getThemeColor)(components.hpe["switch"]["default"].control.track.selected.hover.background, theme);
          }
          if (disabled) {
            background = (0, _utils.getThemeColor)(components.hpe["switch"]["default"].control.track.disabled.rest.background, theme);
            borderColor = (0, _utils.getThemeColor)(components.hpe["switch"]["default"].control.handle.disabled.rest.borderColor, theme);
          }
          return "\n            border-color: " + borderColor + ";\n            background: " + background + ";\n            &:hover {\n              " + (!disabled ? "background: " + hoverBackground + ";" : '') + "\n            }\n        ";
        }
      },
      extend: function extend(_ref6) {
        var disabled = _ref6.disabled,
          theme = _ref6.theme;
        return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        font-weight: ", ";\n        width: auto;\n        border: ", "\n          solid\n          ", ";\n        &\n          input:checked\n          + span[class*='CheckBoxToggle']\n          > span[class*='CheckBoxKnob'] {\n          left: 25px;\n        }\n        ", "\n      "])), components.hpe.checkbox["default"].label.rest.fontWeight, components.hpe.formField["default"].medium.input.container.borderWidth, (0, _utils.getThemeColor)(components.hpe.formField["default"].input.group.item.rest.borderColor, theme),
        // override built in disabled opacity: 0.5 from grommet
        disabled && "opacity: 1;\n        color: " + (0, _utils.getThemeColor)(components.hpe.checkbox["default"].label.disabled.rest.textColor, theme) + ";");
      }
    },
    checkBoxGroup: {
      container: {
        cssGap: true,
        gap: 'xsmall',
        margin: 'none'
      }
    },
    dateInput: {
      container: {
        round: components.hpe.formField["default"].medium.input.container.borderRadius
      },
      icon: {
        calendar: Calendar,
        size: 'small'
      },
      button: {
        margin: 'xsmall'
      }
    },
    fileInput: {
      anchor: {
        margin: 'xsmall'
      },
      border: {
        color: components.hpe.formField["default"].input.container.rest.borderColor,
        side: 'all',
        style: 'solid',
        size: components.hpe.formField["default"].medium.input.container.borderWidth
      },
      button: {
        background: components.hpe.button.secondary.rest.background,
        border: {
          radius: components.hpe.button.secondary.medium.borderRadius
        },
        pad: {
          vertical: components.hpe.button.secondary.medium.paddingY,
          horizontal: components.hpe.button.secondary.medium.paddingX
        },
        color: components.hpe.button.secondary.rest.textColor,
        font: {
          weight: components.hpe.button.secondary.rest.fontWeight
        },
        hover: {
          background: components.hpe.button.secondary.hover.background,
          color: components.hpe.button.secondary.hover.textColor
        }
      },
      dragOver: {
        background: 'background-hover',
        border: 'none'
      },
      hover: {
        border: {
          color: 'border'
        }
      },
      icons: {
        error: Alert,
        remove: Close
      },
      label: {
        margin: 'xsmall',
        gap: '3xsmall'
      },
      message: {
        color: 'placeholder',
        margin: 'xsmall'
      },
      pad: {
        horizontal: '3xsmall'
      },
      extend: "border-radius: " + components.hpe.formField["default"].medium.input.container.borderRadius + ";"
    },
    formField: {
      extend: function extend(_ref7) {
        var theme = _ref7.theme;
        return "\n          [class*=\"ContentBox\"] {\n            label {\n              padding-block: " + components.hpe.formField["default"].medium.input.group.item.paddingY + ";\n              padding-inline: " + components.hpe.formField["default"].medium.input.group.item.paddingX + ";\n              &:hover:not([disabled]) {\n                background: " + (0, _utils.getThemeColor)(components.hpe.formField["default"].input.container.hover.background, theme) + ";\n              }\n            }\n            [role=\"group\"], [role=\"radiogroup\"] {\n              gap: 0;\n              padding-block: " + components.hpe.formField["default"].medium.input.group.container.paddingY + ";\n              padding-inline: " + components.hpe.formField["default"].medium.input.group.container.paddingX + ";\n              label {\n                border: " + (dimensions.borderSize[components.hpe.formField["default"].medium.input.group.item.borderWidth] || components.hpe.formField["default"].medium.input.group.item.borderWidth) + " solid " + (0, _utils.getThemeColor)(components.hpe.formField["default"].input.group.item.rest.borderColor, theme) + ";\n                padding-block: " + components.hpe.formField["default"].medium.input.group.item.paddingY + ";\n                padding-inline: " + components.hpe.formField["default"].medium.input.group.item.paddingX + ";\n                border-radius: " + dimensions.radius[components.hpe.formField["default"].medium.input.group.item.borderRadius] + ";\n                &:hover:not([disabled]) {\n                  background: " + (0, _utils.getThemeColor)(components.hpe.formField["default"].input.group.item.hover.background, theme) + ";\n                }\n              }\n            }\n          }\n      ";
      },
      content: {
        margin: {
          vertical: '3xsmall'
        },
        pad: 'none'
      },
      border: {
        error: {
          color: components.hpe.formField["default"].input.container.error.rest.borderColor
        },
        color: components.hpe.formField["default"].input.container.rest.borderColor,
        side: 'all'
      },
      checkBox: {
        pad: {
          horizontal: components.hpe.formField["default"].medium.input.group.item.paddingX,
          vertical: components.hpe.formField["default"].medium.input.group.item.paddingY
        },
        container: {
          extend: function extend(_ref8) {
            var error = _ref8.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      checkBoxGroup: {
        container: {
          extend: function extend(_ref9) {
            var error = _ref9.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      radioButtonGroup: {
        container: {
          extend: function extend(_ref0) {
            var error = _ref0.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      thumbsRating: {
        container: {
          extend: function extend(_ref1) {
            var error = _ref1.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      starRating: {
        container: {
          extend: function extend(_ref10) {
            var error = _ref10.error;
            return "border-color: " + (error ? components.hpe.formField["default"].input.group.container.error.rest.borderColor : components.hpe.formField["default"].input.group.container.rest.borderColor) + "; ";
          }
        }
      },
      disabled: {
        background: components.hpe.formField["default"].input.group.container.disabled.rest.background,
        border: {
          color: components.hpe.formField["default"].input.container.disabled.rest.borderColor
        },
        label: {
          color: components.hpe.formField["default"].label.disabled.rest.textColor
        },
        help: {
          color: components.hpe.formField["default"].help.disabled.rest.textColor
        },
        info: {
          color: components.hpe.formField["default"].info.disabled.rest.textColor
        }
      },
      error: {
        background: {
          color: components.hpe.formField["default"].input.container.error.rest.background
        },
        container: {
          gap: '3xsmall'
        },
        icon: /*#__PURE__*/_react["default"].createElement(Alert, {
          size: "small",
          color: light.hpe.color.icon.critical
        }),
        size: 'xsmall',
        color: components.hpe.formField["default"].error.rest.textColor,
        margin: {
          bottom: '3xsmall',
          top: 'none',
          horizontal: 'none'
        }
      },
      focus: {
        containerFocus: false,
        background: undefined,
        border: {
          color: undefined
        }
      },
      help: {
        size: 'xsmall',
        color: components.hpe.formField["default"].help.rest.color,
        margin: 'none'
      },
      info: {
        size: 'xsmall',
        color: components.hpe.formField["default"].info.rest.color,
        margin: {
          bottom: '3xsmall',
          top: 'none',
          horizontal: 'none'
        }
      },
      label: {
        size: 'xsmall',
        color: components.hpe.formField["default"].label.rest.textColor,
        margin: {
          bottom: 'none',
          top: '3xsmall',
          horizontal: 'none'
        },
        requiredIndicator: true,
        weight: components.hpe.formField["default"].medium.label.fontWeight
      },
      margin: {
        bottom: 'none'
      },
      round: components.hpe.formField["default"].medium.input.container.borderRadius,
      survey: {
        label: {
          margin: {
            bottom: 'none'
          },
          size: 'medium',
          weight: 500
        }
      }
    },
    radioButton: {
      border: {
        color: components.hpe.radioButton["default"].control.rest.borderColor,
        width: components.hpe.radioButton["default"].medium.control.borderWidth
      },
      check: {
        background: {
          color: components.hpe.radioButton["default"].control.selected.rest.background
        }
      },
      color: components.hpe.radioButton["default"].control.selected.rest.borderColor,
      container: {
        extend: function extend(_ref11) {
          var theme = _ref11.theme;
          return "\n          width: auto;\n          &:has(input[checked]) {\n            & div:has(> svg[aria-hidden=\"true\"]) {\n              background: " + (0, _utils.getThemeColor)(components.hpe.radioButton["default"].control.selected.rest.background, theme) + ";\n              border-color: " + (0, _utils.getThemeColor)(components.hpe.radioButton["default"].control.selected.rest.borderColor, theme) + ";\n            }\n          }\n          &:has(input[checked]):hover:not([disabled]) {\n              & div:has(> svg[aria-hidden=\"true\"]) {\n                background: " + (0, _utils.getThemeColor)(components.hpe.radioButton["default"].control.selected.hover.background, theme) + ";\n                border-color: " + (0, _utils.getThemeColor)(components.hpe.radioButton["default"].control.selected.hover.borderColor, theme) + ";\n              }\n          }\n          ";
        }
      },
      gap: components.hpe.radioButton["default"].medium.gapX,
      hover: {
        background: {
          color: 'transparent'
        },
        border: {
          color: components.hpe.radioButton["default"].control.hover.borderColor
        }
      },
      size: components.hpe.radioButton["default"].medium.control.height,
      font: {
        weight: components.hpe.radioButton["default"].label.rest.fontWeight
      },
      icons: {
        circle: function circle(_ref12) {
          var theme = _ref12.theme;
          return /*#__PURE__*/_react["default"].createElement(Blank, {
            preserveAspectRatio: "xMidYMid meet",
            color: (0, _utils.getThemeColor)(components.hpe.radioButton["default"].control.selected.rest.iconColor, _extends({}, theme, {
              dark: !theme.dark
            })),
            size: components.hpe.radioButton["default"].medium.control.width
          }, /*#__PURE__*/_react["default"].createElement("circle", {
            cx: 12,
            cy: 12,
            r: 6
          }));
        }
      }
    },
    radioButtonGroup: {
      container: {
        cssGap: true,
        gap: 'xsmall',
        margin: 'none'
      }
    },
    maskedInput: {
      container: {
        extend: function extend(_ref13) {
          var theme = _ref13.theme;
          return "\n          svg {\n            fill: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n            stroke: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n          }\n        ";
        }
      }
    },
    rangeInput: {
      thumb: {
        color: 'background-primary-strong',
        extend: 'border-color: transparent;'
      },
      track: {
        lower: {
          color: 'background-primary-strong'
        },
        upper: {
          color: {
            light: '#e0e0e0',
            dark: '#616161'
          }
        },
        extend: function extend(_ref14) {
          var theme = _ref14.theme;
          return "\n        border-radius: " + large.hpe.radius.full + ";\n        // firefox only selector, since pseudo-element\n        // isn't supported\n        @-moz-document url-prefix() {\n          border: 1px solid " + (0, _utils.getThemeColor)('border-strong', theme) + ";\n        }";
        }
      },
      disabled: {
        opacity: 1,
        track: {
          color: 'background-disabled'
        },
        thumb: {
          color: {
            light: 'rgb(245, 245, 245)',
            dark: 'rgb(44, 44, 44)'
          }
        }
      },
      extend: function extend(_ref15) {
        var disabled = _ref15.disabled,
          theme = _ref15.theme;
        return "\n        &::before {\n          display: block;\n          position: absolute;\n          content: '';\n          width: " + primitives.hpe.base.dimension[100] + ";\n          height: " + primitives.hpe.base.dimension[100] + ";\n          border-radius: " + large.hpe.radius.full + ";\n          right: 0;\n          top: 50%;\n          transform: translateY(-50%);\n          background: " + (0, _utils.getThemeColor)(disabled ? 'background-disabled' : 'background-neutral-xstrong', theme) + ";\n        }\n    ";
      }
    },
    rangeSelector: {
      edge: {
        size: "" + primitives.hpe.base.dimension[600]
      },
      label: {
        margin: {
          horizontal: 'xsmall'
        }
      }
    },
    select: {
      clear: {
        container: {
          background: 'transparent',
          pad: components.hpe.select["default"].medium.drop.paddingX
        },
        text: undefined,
        button: {
          border: {
            radius: components.hpe.select["default"].medium.option.borderRadius,
            size: components.hpe.select["default"].medium.option.borderWidth
          },
          padding: {
            horizontal: components.hpe.select["default"].medium.option.paddingX,
            vertical: components.hpe.select["default"].medium.option.paddingY
          },
          hover: {
            background: components.hpe.select["default"].option.hover.background,
            color: 'text-strong'
          },
          color: 'text-strong',
          font: {
            weight: components.hpe.select["default"].option.rest.fontWeight
          }
        }
      },
      container: {
        extend: function extend() {
          return "\n          div:has(input[type=\"search\"]) {\n            padding-bottom: 0;\n          }\n        ";
        }
      },
      control: {
        extend: function extend(_ref16) {
          var disabled = _ref16.disabled;
          return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n          ", "\n\n          &[class*=\"SelectMultiple\"] [role=\"listbox\"] {\n            padding-block: ", ";\n            padding-inline: ", ";\n            & [role='option'] {\n              border-radius: ", ";\n            }\n          }\n        "])), disabled && "\n          opacity: 0.3;\n          input {\n            cursor: default;\n          }", components.hpe.select["default"].medium.drop.paddingY, components.hpe.select["default"].medium.drop.paddingX, dimensions.edgeSize[components.hpe.select["default"].medium.option.borderRadius] || components.hpe.select["default"].medium.option.borderRadius);
        }
      },
      emptySearchMessage: {
        container: {
          pad: option.pad
        }
      },
      icons: {
        color: 'icon',
        down: Down,
        search: /*#__PURE__*/_react["default"].createElement(Search, {
          "aria-hidden": true
        }),
        margin: {
          left: 'xsmall',
          right: '12px'
        },
        up: Up
      },
      options: undefined,
      listbox: {
        extend: function extend() {
          return "\n          padding-top: " + components.hpe.select["default"].medium.drop.paddingY + ";\n          padding-inline: " + components.hpe.select["default"].medium.drop.paddingX + ";\n          display: flex;\n          flex-direction: column;\n          gap: " + components.hpe.select["default"].medium.drop.gapY + ";\n          [role=\"option\"] {\n            border-radius: " + components.hpe.select["default"].medium.option.borderRadius + ";\n          }\n        ";
        }
      },
      search: {
        pad: '3xsmall'
      }
    },
    selectMultiple: {
      help: {
        container: {
          pad: '3xsmall'
        }
      },
      listbox: {
        extend: function extend() {
          return "\n          padding-block: " + components.hpe.select["default"].medium.drop.paddingY + ";\n          padding-inline: " + components.hpe.select["default"].medium.drop.paddingX + ";\n          display: flex;\n          flex-direction: column;\n          [role=\"option\"] {\n              border-radius: " + (dimensions.edgeSize[components.hpe.select["default"].medium.option.borderRadius] || components.hpe.select["default"].medium.option.borderRadius) + ";\n            }\n          }\n        ";
        }
      },
      option: {
        pad: '3xsmall'
      },
      search: {
        pad: '3xsmall'
      },
      showMore: {
        pad: {
          horizontal: 'xsmall',
          bottom: 'xsmall',
          top: '3xsmall'
        }
      },
      summary: {
        gap: 'xsmall',
        height: {
          min: '5xsmall'
        },
        pad: '3xsmall',
        showSelectedInline: {
          pad: {
            left: '3xsmall',
            vertical: '3xsmall'
          }
        }
      }
    },
    starRating: {
      color: 'background-selected-primary-strong',
      icons: {
        selected: StarFill,
        unselected: Star
      }
    },
    textInput: {
      container: {
        extend: function extend(_ref17) {
          var theme = _ref17.theme;
          return "\n          svg {\n            fill: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n            stroke: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n          }\n        ";
        }
      },
      icons: {
        copy: Copy
      },
      suggestions: {
        extend: function extend(_ref18) {
          var theme = _ref18.theme;
          return "\n          padding-block: " + components.hpe.select["default"].medium.drop.paddingY + ";\n          padding-inline: " + components.hpe.select["default"].medium.drop.paddingX + ";\n          gap: " + components.hpe.select["default"].medium.drop.gapY + ";\n          display: flex;\n          flex-direction: column;\n          [role=\"option\"]:hover {\n            background: " + (0, _utils.getThemeColor)(components.hpe.select["default"].option.hover.background, theme) + ";\n          }\n        ";
        }
      }
    },
    thumbsRating: {
      like: {
        color: 'background-selected-primary-strong'
      },
      dislike: {
        color: 'background-selected-primary-strong'
      },
      icons: {
        dislike: Dislike,
        dislikeSelected: DislikeFill,
        like: Like,
        likeSelected: LikeFill
      }
    }
  };
};