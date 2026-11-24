var _templateObject;
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { css } from 'styled-components';
import { getThemeColor, getTokenColorPair, swapped } from './utils';

// The token package ships untyped exports. Describe only the fields read here.

// Keep runtime-supported fields that Grommet's declarations do not yet cover.

export var buildFormTheme = function buildFormTheme(tokens, context) {
  var primitives = tokens.primitives,
    light = tokens.light,
    dark = tokens.dark,
    large = tokens.large,
    global = tokens.global,
    components = tokens.components;
  var dimensions = context.dimensions,
    option = context.option;
  var _context$icons = context.icons,
    Alert = _context$icons.Alert,
    Blank = _context$icons.Blank,
    Calendar = _context$icons.Calendar,
    ClockIcon = _context$icons.Clock,
    Close = _context$icons.Close,
    Copy = _context$icons.Copy,
    Dislike = _context$icons.Dislike,
    DislikeFill = _context$icons.DislikeFill,
    Down = _context$icons.Down,
    Hide = _context$icons.Hide,
    Like = _context$icons.Like,
    LikeFill = _context$icons.LikeFill,
    Search = _context$icons.Search,
    Star = _context$icons.Star,
    StarFill = _context$icons.StarFill,
    Up = _context$icons.Up,
    View = _context$icons.View;
  // Pulling the raw values directly from the token files gives us the color
  // exactly as authored.
  var backgroundActive = getTokenColorPair('color.background.active', tokens);
  var backgroundHover = getTokenColorPair('color.background.hover', tokens);
  var focusColor = getTokenColorPair('color.focus', tokens);
  var backgroundSelectedPrimaryStrong = getTokenColorPair('color.background.selected-primary-strong', tokens);
  var backgroundSelectedPrimaryStrongHover = getTokenColorPair('color.background.selected-primary-strong-hover', tokens);
  // text-onSelectedPrimaryStrong is authored with light/dark swapped.
  // See https://github.com/grommet/grommet/issues/7818
  var textOnSelectedPrimaryStrong = swapped('hpe.color.text.onSelectedPrimaryStrong', dark, light);
  var textDefaultColor = getTokenColorPair('color.text.default', tokens);
  var disabledBorder = function disabledBorder(color, _ref) {
    var disabledProp = _ref.disabledProp,
      theme = _ref.theme;
    return disabledProp ? "&& { border-color: " + getThemeColor(color, theme) + "; }" : '';
  };
  var disabledGroupBorder = function disabledGroupBorder(props) {
    return disabledBorder(components.hpe.formField["default"].input.group.container.disabled.rest.borderColor, props);
  };
  return {
    checkBox: {
      container: {
        border: {
          color: components.hpe.formField["default"].input.group.item.rest.borderColor,
          size: components.hpe.formField["default"].medium.input.group.item.borderWidth
        },
        pad: {
          horizontal: components.hpe.formField["default"].medium.input.group.item.paddingX,
          vertical: components.hpe.formField["default"].medium.input.group.item.paddingY
        },
        round: components.hpe.formField["default"].medium.input.group.item.borderRadius,
        width: 'auto'
      },
      control: {
        background: components.hpe.checkbox["default"].control.rest.background,
        border: {
          color: components.hpe.checkbox["default"].control.rest.borderColor,
          size: components.hpe.checkbox["default"].medium.control.borderWidth
        },
        height: components.hpe.checkbox["default"].medium.control.height,
        round: components.hpe.checkbox["default"].medium.control.borderRadius,
        width: components.hpe.checkbox["default"].medium.control.width,
        hover: {
          background: {
            color: components.hpe.checkbox["default"].control.hover.background
          },
          border: {
            color: components.hpe.checkbox["default"].control.hover.borderColor
          }
        },
        selected: {
          background: components.hpe.checkbox["default"].control.selected.rest.background,
          border: {
            color: components.hpe.checkbox["default"].control.selected.rest.borderColor
          },
          hover: {
            background: {
              color: components.hpe.checkbox["default"].control.selected.hover.background
            },
            border: {
              color: components.hpe.checkbox["default"].control.selected.hover.borderColor
            }
          }
        }
      },
      color: components.hpe["switch"]["default"].control.handle.rest.background,
      check: {
        thickness: large.hpe.borderWidth.small
      },
      gap: components.hpe.checkbox["default"].medium.gapX,
      label: {
        align: 'start'
      },
      pad: 'none',
      toggle: {
        background: components.hpe["switch"]["default"].control.track.rest.background,
        color: components.hpe["switch"]["default"].control.handle.rest.background,
        size: components.hpe["switch"]["default"].medium.control.track.width,
        knob: {
          extend: function extend(_ref2) {
            var _theme$global;
            var theme = _ref2.theme,
              checked = _ref2.checked,
              disabled = _ref2.disabled;
            var borderWidth = components.hpe["switch"]["default"].medium.control.handle.borderWidth;
            var insetHandle = dimensions.borderSize[borderWidth] || borderWidth;
            return "\n              box-shadow: " + ((_theme$global = theme.global) == null || (_theme$global = _theme$global.elevation) == null || (_theme$global = _theme$global[theme.dark ? 'dark' : 'light']) == null ? void 0 : _theme$global[components.hpe["switch"]["default"].control.handle.rest.boxShadow]) + ";\n              border: " + (dimensions.borderSize[borderWidth] || borderWidth) + " solid " + getThemeColor(disabled ? components.hpe["switch"]["default"].control.handle.disabled.rest.borderColor : components.hpe["switch"]["default"].control.handle.rest.borderColor, theme) + ";\n              width: " + components.hpe["switch"]["default"].medium.control.handle.width + ";\n              height: " + components.hpe["switch"]["default"].medium.control.handle.height + ";\n              top: " + insetHandle + ";\n              left: " + (!checked ? insetHandle : '25px') + ";\n          ";
          }
        },
        // applies to track around handle
        extend: function extend(_ref3) {
          var checked = _ref3.checked,
            theme = _ref3.theme,
            disabled = _ref3.disabled;
          var track = components.hpe["switch"]["default"].control.track;
          var hover = checked ? track.selected.hover : track.hover;
          var hoverBackground = getThemeColor(hover.background, theme);
          var background;
          var borderColor = getThemeColor(track.rest.borderColor, theme);
          if (checked) {
            background = getThemeColor(track.selected.rest.background, theme);
          }
          if (disabled) {
            background = getThemeColor(track.disabled.rest.background, theme);
            borderColor = getThemeColor(components.hpe["switch"]["default"].control.handle.disabled.rest.borderColor, theme);
          }
          return "\n            height: " + components.hpe["switch"]["default"].medium.control.track.height + ";\n            border-width: " + components.hpe["switch"]["default"].medium.control.track.borderWidth + ";\n            border-color: " + borderColor + ";\n            background: " + background + ";\n            &:hover {\n              " + (!disabled ? "background: " + hoverBackground + ";" : '') + "\n            }\n            " + (
          // Match label hover and outrank Grommet's shared hover rule.
          !disabled ? "label:hover input:not([disabled]) + && {\n                    border-color: " + getThemeColor(hover.borderColor, theme) + ";\n                  }" : '') + "\n        ";
        }
      }
    },
    checkBoxGroup: {
      container: {
        cssGap: true,
        gap: 'none',
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
    dateTimeInput: {
      button: {
        margin: {
          right: '3xsmall'
        }
      },
      container: {
        round: components.hpe.formField["default"].medium.input.container.borderRadius
      },
      active: {
        background: 'background-active',
        pad: '5xsmall',
        indicator: {
          color: 'focus'
        }
      },
      drop: {
        pad: 'small',
        gap: 'small',
        border: {
          color: 'border',
          size: 'xsmall'
        }
      },
      separator: {
        pad: '5xsmall'
      },
      icon: {
        calendar: Calendar
      },
      calendar: {
        day: {
          selected: {
            background: 'background-selected-primary-strong'
          }
        }
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
        border: {
          color: 'border-strong'
        }
      },
      hover: {
        border: {
          color: 'border-strong'
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
      background: components.hpe.formField["default"].input.container.rest.background,
      border: {
        color: components.hpe.formField["default"].input.container.rest.borderColor,
        side: 'all',
        size: components.hpe.formField["default"].medium.input.container.borderWidth
      },
      content: {
        margin: {
          vertical: '3xsmall'
        },
        pad: {
          vertical: components.hpe.formField["default"].medium.input.container.paddingY,
          horizontal: components.hpe.formField["default"].medium.input.container.paddingX
        }
      },
      help: {
        color: components.hpe.formField["default"].help.rest.textColor,
        margin: 'none',
        size: components.hpe.formField["default"].medium.help.fontSize
      },
      info: {
        color: components.hpe.formField["default"].info.rest.textColor,
        margin: {
          bottom: '3xsmall',
          top: 'none',
          horizontal: 'none'
        },
        size: components.hpe.formField["default"].medium.info.fontSize
      },
      label: {
        color: components.hpe.formField["default"].label.rest.textColor,
        margin: {
          bottom: 'none',
          top: '3xsmall',
          horizontal: 'none'
        },
        requiredIndicator: true,
        size: components.hpe.formField["default"].medium.label.fontSize,
        weight: Number(components.hpe.formField["default"].medium.label.fontWeight)
      },
      margin: {
        bottom: 'none'
      },
      round: components.hpe.formField["default"].medium.input.container.borderRadius,
      /* FormField states */
      disabled: {
        background: components.hpe.formField["default"].input.container.disabled.rest.background,
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
        background: components.hpe.formField["default"].input.container.error.rest.background,
        border: {
          color: components.hpe.formField["default"].input.container.error.rest.borderColor
        },
        color: components.hpe.formField["default"].error.rest.textColor,
        container: {
          gap: large.hpe.spacing['3xsmall']
        },
        icon: /*#__PURE__*/React.createElement(Alert, {
          size: "small",
          color: getTokenColorPair('color.icon.critical', tokens)
        }),
        size: components.hpe.formField["default"].medium.error.fontSize,
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
      hover: {
        background: components.hpe.formField["default"].input.container.hover.background,
        border: {
          color: components.hpe.formField["default"].input.container.hover.borderColor
        }
      },
      /* Input specific styles */
      checkBox: {
        background: components.hpe.formField["default"].input.group.item.rest.background,
        border: {
          color: components.hpe.formField["default"].input.group.item.rest.borderColor
        },
        pad: {
          horizontal: components.hpe.formField["default"].medium.input.group.container.paddingX,
          vertical: components.hpe.formField["default"].medium.input.group.container.paddingY
        },
        container: {
          extend: function extend(props) {
            return disabledBorder(components.hpe.formField["default"].input.group.item.disabled.rest.borderColor, props);
          }
        },
        hover: {
          background: components.hpe.formField["default"].input.group.item.hover.background,
          border: {
            color: components.hpe.formField["default"].input.group.item.hover.borderColor
          }
        }
      },
      checkBoxGroup: {
        background: components.hpe.formField["default"].input.group.container.rest.background,
        border: {
          color: components.hpe.formField["default"].input.group.container.rest.borderColor
        },
        pad: {
          // horizontal handled by each item individually
          vertical: components.hpe.formField["default"].medium.input.group.container.paddingY
        },
        container: {
          extend: function extend(_ref4) {
            var theme = _ref4.theme,
              disabledProp = _ref4.disabledProp;
            return !disabledProp ? "\n                [role='group'] > label:not([disabled]):hover {\n                  background-color: " + getThemeColor(components.hpe.formField["default"].input.group.item.hover.background, theme) + ";\n                }\n              " : disabledGroupBorder({
              theme: theme,
              disabledProp: disabledProp
            });
          }
        },
        hover: {
          background: components.hpe.formField["default"].input.group.container.hover.background,
          border: {
            color: components.hpe.formField["default"].input.group.container.hover.borderColor
          }
        }
      },
      radioButtonGroup: {
        background: components.hpe.formField["default"].input.group.container.rest.background,
        border: {
          color: components.hpe.formField["default"].input.group.container.rest.borderColor
        },
        pad: {
          // horizontal handled by each item individually
          vertical: components.hpe.formField["default"].medium.input.group.container.paddingY
        },
        container: {
          extend: disabledGroupBorder
        },
        hover: {
          background: components.hpe.formField["default"].input.group.container.hover.background,
          border: {
            color: components.hpe.formField["default"].input.group.container.hover.borderColor
          }
        }
      },
      starRating: {
        background: components.hpe.formField["default"].input.group.container.rest.background,
        border: {
          color: components.hpe.formField["default"].input.group.container.rest.borderColor
        },
        pad: {
          // horizontal handled by each item individually
          vertical: components.hpe.formField["default"].medium.input.container.paddingY
        },
        container: {
          extend: disabledGroupBorder
        },
        hover: {
          background: components.hpe.formField["default"].input.group.container.hover.background,
          border: {
            color: components.hpe.formField["default"].input.group.container.hover.borderColor
          }
        }
      },
      survey: {
        label: {
          margin: {
            bottom: 'none'
          },
          size: 'medium',
          weight: 500
        }
      },
      thumbsRating: {
        background: components.hpe.formField["default"].input.group.container.rest.background,
        border: {
          color: components.hpe.formField["default"].input.group.container.rest.borderColor
        },
        pad: {
          // horizontal handled by each item individually
          vertical: components.hpe.formField["default"].medium.input.container.paddingY
        },
        container: {
          extend: disabledGroupBorder
        },
        hover: {
          background: components.hpe.formField["default"].input.group.container.hover.background,
          border: {
            color: components.hpe.formField["default"].input.group.container.hover.borderColor
          }
        }
      }
    },
    radioButton: {
      check: {
        background: {
          color: components.hpe.radioButton["default"].control.selected.rest.background
        }
      },
      container: {
        border: {
          color: components.hpe.formField["default"].input.group.item.rest.borderColor,
          size: components.hpe.formField["default"].medium.input.group.item.borderWidth
        },
        pad: {
          horizontal: components.hpe.formField["default"].medium.input.group.item.paddingX,
          vertical: components.hpe.formField["default"].medium.input.group.item.paddingY
        },
        round: components.hpe.formField["default"].medium.input.group.item.borderRadius,
        width: 'auto',
        hover: {
          background: components.hpe.formField["default"].input.group.item.hover.background,
          border: {
            color: components.hpe.formField["default"].input.group.item.hover.borderColor
          }
        }
      },
      control: {
        background: {
          color: components.hpe.radioButton["default"].control.rest.background
        },
        border: {
          color: components.hpe.radioButton["default"].control.rest.borderColor,
          size: components.hpe.radioButton["default"].medium.control.borderWidth
        },
        hover: {
          background: components.hpe.radioButton["default"].control.hover.background,
          border: {
            color: components.hpe.radioButton["default"].control.hover.borderColor
          }
        },
        selected: {
          background: components.hpe.radioButton["default"].control.selected.rest.background,
          border: {
            color: components.hpe.radioButton["default"].control.selected.rest.borderColor
          },
          hover: {
            background: components.hpe.radioButton["default"].control.selected.hover.background,
            border: {
              color: components.hpe.radioButton["default"].control.selected.hover.borderColor
            }
          }
        }
      },
      gap: components.hpe.radioButton["default"].medium.gapX,
      size: components.hpe.radioButton["default"].medium.control.height,
      font: {
        weight: components.hpe.radioButton["default"].label.rest.fontWeight
      },
      icons: {
        circle: function circle(_ref5) {
          var theme = _ref5.theme;
          return /*#__PURE__*/React.createElement(Blank, {
            preserveAspectRatio: "xMidYMid meet",
            color: getThemeColor(components.hpe.radioButton["default"].control.selected.rest.iconColor, _extends({}, theme, {
              dark: !theme.dark
            })),
            size: components.hpe.radioButton["default"].medium.control.width
          }, /*#__PURE__*/React.createElement("circle", {
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
        gap: 'none',
        margin: 'none'
      }
    },
    maskedInput: {
      container: {
        extend: function extend(_ref6) {
          var theme = _ref6.theme;
          return "\n          svg {\n            fill: " + getThemeColor('text-strong', theme) + ";\n            stroke: " + getThemeColor('text-strong', theme) + ";\n          }\n        ";
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
        extend: function extend(_ref7) {
          var theme = _ref7.theme;
          return "\n        border-radius: " + large.hpe.radius.full + ";\n        // firefox only selector, since pseudo-element\n        // isn't supported\n        @-moz-document url-prefix() {\n          border: 1px solid " + getThemeColor('border-strong', theme) + ";\n        }";
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
      extend: function extend(_ref8) {
        var disabled = _ref8.disabled,
          theme = _ref8.theme;
        return "\n        &::before {\n          display: block;\n          position: absolute;\n          content: '';\n          width: " + primitives.hpe.base.dimension[100] + ";\n          height: " + primitives.hpe.base.dimension[100] + ";\n          border-radius: " + large.hpe.radius.full + ";\n          right: 0;\n          top: 50%;\n          transform: translateY(-50%);\n          background: " + getThemeColor(disabled ? 'background-disabled' : 'background-neutral-xstrong', theme) + ";\n        }\n    ";
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
        extend: function extend(_ref9) {
          var disabled = _ref9.disabled;
          return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n          ", "\n\n          &[class*=\"SelectMultiple\"] [role=\"listbox\"] {\n            padding-block: ", ";\n            padding-inline: ", ";\n            & [role='option'] {\n              border-radius: ", ";\n            }\n          }\n        "])), disabled && "\n          opacity: 0.3;\n          input {\n            cursor: default;\n          }", components.hpe.select["default"].medium.drop.paddingY, components.hpe.select["default"].medium.drop.paddingX, dimensions.edgeSize[components.hpe.select["default"].medium.option.borderRadius] || components.hpe.select["default"].medium.option.borderRadius);
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
        search: /*#__PURE__*/React.createElement(Search, {
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
        extend: function extend(_ref0) {
          var theme = _ref0.theme;
          return "\n          svg {\n            fill: " + getThemeColor('icon-strong', theme) + ";\n            stroke: " + getThemeColor('icon-strong', theme) + ";\n          }\n        ";
        }
      },
      icons: {
        clear: Close,
        copy: Copy,
        hidePassword: Hide,
        showPassword: View
      },
      suggestions: {
        extend: function extend(_ref1) {
          var theme = _ref1.theme;
          return "\n          padding-block: " + components.hpe.select["default"].medium.drop.paddingY + ";\n          padding-inline: " + components.hpe.select["default"].medium.drop.paddingX + ";\n          gap: " + components.hpe.select["default"].medium.drop.gapY + ";\n          display: flex;\n          flex-direction: column;\n          [role=\"option\"]:hover {\n            background: " + getThemeColor(components.hpe.select["default"].option.hover.background, theme) + ";\n          }\n        ";
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
    },
    timeInput: {
      container: {
        round: components.hpe.formField["default"].medium.input.container.borderRadius
      },
      segment: {
        pad: {
          left: large.hpe.spacing['6xsmall'],
          right: large.hpe.spacing['6xsmall']
        },
        active: {
          background: backgroundActive,
          border: {
            size: large.hpe.borderWidth.small,
            color: focusColor
          }
        }
      },
      drop: {
        column: {
          gap: large.hpe.spacing['4xsmall'],
          pad: {
            horizontal: large.hpe.spacing['3xsmall']
          }
        },
        pad: {
          horizontal: large.hpe.spacing['3xsmall'],
          vertical: large.hpe.spacing.xsmall
        },
        option: {
          container: {
            pad: {
              vertical: components.hpe.element.medium.paddingY,
              horizontal: components.hpe.element.medium.paddingX["default"]
            },
            round: large.hpe.radius.xxsmall,
            hover: {
              background: backgroundHover
            },
            selected: {
              background: backgroundSelectedPrimaryStrong,
              hover: {
                background: backgroundSelectedPrimaryStrongHover
              }
            }
          },
          text: {
            size: large.hpe.text.medium.fontSize,
            color: textDefaultColor,
            selected: {
              color: textOnSelectedPrimaryStrong,
              weight: Number(global.hpe.fontWeight.medium)
            }
          }
        }
      },
      dropButton: {
        icon: ClockIcon
      }
    }
  };
};