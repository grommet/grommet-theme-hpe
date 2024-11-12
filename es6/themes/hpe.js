var _components$hpe$eleme, _components$hpe$eleme2, _components$hpe$eleme3, _components$hpe$eleme4, _components$hpe$eleme5, _templateObject, _components$hpe$eleme6, _templateObject2, _components$hpe$dataC, _components$hpe$eleme7, _components$hpe$eleme8, _components$hpe$eleme9, _components$hpe$eleme10, _components$hpe$eleme11, _components$hpe$eleme12, _components$hpe$eleme13, _components$hpe$eleme14, _components$hpe$eleme15, _components$hpe$eleme16, _components$hpe$eleme17, _components$hpe$eleme18, _templateObject3, _components$hpe$eleme19, _components$hpe$eleme20, _components$hpe$eleme21, _components$hpe$eleme22, _components$hpe$eleme23, _components$hpe$eleme24, _components$hpe$eleme25, _components$hpe$eleme26, _components$hpe$eleme27, _components$hpe$eleme28, _components$hpe$eleme29, _components$hpe$eleme30, _components$hpe$eleme31, _components$hpe$eleme32, _components$hpe$eleme33, _components$hpe$eleme34, _components$hpe$eleme35, _components$hpe$eleme36, _components$hpe$eleme37, _components$hpe$eleme38, _components$hpe$eleme39, _components$hpe$eleme40;
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// (C) Copyright 2020-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import { css } from 'styled-components';
import { components, global, dark, light, large } from 'hpe-design-tokens';
import { Ascending } from 'grommet-icons/icons/Ascending';
import { Blank } from 'grommet-icons/icons/Blank';
import { CircleAlert } from 'grommet-icons/icons/CircleAlert';
import { Close } from 'grommet-icons/icons/Close';
import { Descending } from 'grommet-icons/icons/Descending';
import { Down } from 'grommet-icons/icons/Down';
import { Next } from 'grommet-icons/icons/Next';
import { Previous } from 'grommet-icons/icons/Previous';
import { Unsorted } from 'grommet-icons/icons/Unsorted';
import { Up } from 'grommet-icons/icons/Up';
import { Hpe } from 'grommet-icons/icons/Hpe';
import { backgrounds } from './backgrounds';
import { colors } from './colors';
import { dimensions } from './dimensions';
import { anchorSizeTheme, paragraphTheme, textTheme, buttonKindTheme, buttonStatesTheme, buttonSizesTheme, MISSING } from '../../../tools/utils';
var baseSpacing = 24;
var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};
var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};

// option button kind styles. abstracted so select.emptySearchMessage
// can reference pad value
var option = {
  color: components.hpe.select.option.enabled.textColor,
  border: {
    radius: dimensions.edgeSize[components.hpe.select.medium.option.borderRadius] || components.hpe.select.medium.option.borderRadius,
    width: dimensions.borderSize[components.hpe.select.medium.option.borderWidth] || components.hpe.select.medium.option.borderWidth,
    color: components.hpe.select.option.enabled.borderColor
  },
  pad: {
    horizontal: components.hpe.select.medium.option.paddingX,
    vertical: components.hpe.select.medium.option.paddingY
  },
  font: {
    weight: components.hpe.select.option.enabled.fontWeight
  }
};

// abstracted so button and pinned list icon can reference
var mediumIconOnlyPad = {
  vertical: components.hpe.button.medium["default"].iconOnly.paddingY,
  horizontal: components.hpe.button.medium["default"].iconOnly.paddingX
};
export var hpe = deepFreeze({
  defaultMode: 'light',
  global: _extends({
    backgrounds: backgrounds
  }, dimensions, {
    colors: colors,
    control: {
      border: {
        radius: components.hpe.formField.medium.input.container.borderRadius,
        color: components.hpe.formField.input.container.enabled.borderColor
      }
    },
    input: {
      font: {
        height: 'inherit',
        weight: components.hpe.formField.medium.valueText.fontWeight
      },
      padding: {
        horizontal: components.hpe.formField.medium.input.container.paddingX,
        vertical: components.hpe.formField.medium.input.container.paddingY
      },
      readOnly: {
        background: components.hpe.formField.input.container.readOnly.background,
        border: {
          color: components.hpe.formField.input.container.readOnly.borderColor
        }
      },
      extend: "\n        &::-webkit-input-placeholder {\n        font-weight: " + components.hpe.formField.medium.placeholderText.fontWeight + ";\n      }\n    \n      &::-moz-placeholder {\n        font-weight: " + components.hpe.formField.medium.placeholderText.fontWeight + ";\n      }\n    \n      &:-ms-input-placeholder {\n        font-weight: " + components.hpe.formField.medium.placeholderText.fontWeight + ";\n      }\n      "
    },
    font: {
      family: global.hpe.fontStack.primary,
      face: "\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Regular.woff\") format('woff');\n          font-weight: 400;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Bold.woff\") format('woff');\n          font-weight: 700;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Semibold.woff\") format('woff');\n          font-weight: 600;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Medium.woff\") format('woff');\n          font-weight: 500;\n        }\n        @font-face {\n          font-family: \"Metric\";\n          src: url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff2\") format('woff2'),\n               url(\"https://www.hpe.com/h41225/hfws-static/fonts/metric-hpe-web/MetricHPE-Web-Light.woff\") format('woff');\n          font-weight: 100;\n        }",
      size: large.hpe.text.medium.fontSize,
      height: large.hpe.text.medium.lineHeight
    },
    focus: {
      border: undefined
    },
    active: {
      background: 'background-active',
      color: 'active-text'
    },
    drop: {
      background: components.hpe.drop.background,
      border: {
        radius: dimensions.edgeSize[components.hpe.drop.borderRadius] || components.hpe.drop.borderRadius
      },
      margin: components.hpe.drop.margin,
      intelligentMargin: true,
      shadowSize: 'medium',
      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment brings Drop in alignment with Layer
       * which needs an elevated z-index to sit atop the Global header. */
      zIndex: components.hpe.drop.zIndex
    },
    elevation: {
      light: {
        small: light.hpe.shadow.small,
        medium: light.hpe.shadow.medium,
        large: light.hpe.shadow.large,
        'inset-selected': "inset 3px 0 " + light.hpe.color.border.selected
      },
      dark: {
        small: dark.hpe.shadow.small,
        medium: dark.hpe.shadow.medium,
        large: dark.hpe.shadow.large,
        'inset-selected': "inset 3px 0 " + dark.hpe.color.border.selected
      }
    },
    hover: {
      background: 'background-hover',
      color: MISSING.color // TO DO
    },
    selected: {
      background: 'background-selected-strong-enabled',
      color: 'text-onSelectedStrong'
    }
  }),
  accordion: {
    panel: {
      border: {
        side: 'horizontal',
        color: 'border'
      }
    },
    heading: {
      level: 4,
      // NOTE: in v3 all accordions were h4
      margin: {
        vertical: 'medium',
        horizontal: 'xsmall'
      }
    },
    hover: {
      background: 'background-hover',
      heading: {
        color: undefined
      }
    },
    border: undefined,
    icons: {
      collapse: Up,
      expand: Down,
      color: 'text'
    }
  },
  anchor: {
    color: components.hpe.anchor["default"].enabled.textColor,
    textDecoration: components.hpe.anchor["default"].enabled.textDecoration,
    fontWeight: components.hpe.anchor["default"].enabled.fontWeight,
    gap: components.hpe.anchor.medium["default"].gapX,
    // TO DO not size specific
    hover: {
      textDecoration: components.hpe.anchor["default"].hover.textDecoration
    },
    size: anchorSizeTheme
  },
  avatar: {
    size: {
      xsmall: (_components$hpe$eleme = components.hpe.element) == null ? void 0 : _components$hpe$eleme.xsmall.minHeight,
      small: (_components$hpe$eleme2 = components.hpe.element) == null ? void 0 : _components$hpe$eleme2.small.minHeight,
      // 24px
      medium: (_components$hpe$eleme3 = components.hpe.element) == null ? void 0 : _components$hpe$eleme3.medium.minHeight,
      // default 48px
      large: (_components$hpe$eleme4 = components.hpe.element) == null ? void 0 : _components$hpe$eleme4.large.minHeight,
      // 72px
      xlarge: (_components$hpe$eleme5 = components.hpe.element) == null ? void 0 : _components$hpe$eleme5.xlarge.minHeight,
      // 96px
      '2xl': baseSpacing * 5 + "px",
      // TO DO no component size, is this a one off?
      '3xl': baseSpacing * 6 + "px",
      // TO DO no component size, is this a one off?
      '4xl': baseSpacing * 7 + "px",
      // TO DO no component size, is this a one off?
      '5xl': baseSpacing * 8 + "px" // TO DO no component size, is this a one off?
    },
    text: {
      size: {
        xsmall: 'xsmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        xlarge: 'xlarge',
        '2xl': '3xl',
        // TO DO no component size, is this a one off?
        '3xl': '4xl',
        // TO DO no component size, is this a one off?
        '4xl': '5xl',
        // TO DO no component size, is this a one off?
        '5xl': '6xl' // TO DO no component size, is this a one off?
      }
    }
  },
  button: _extends({
    intelligentPad: false,
    color: components.hpe.button["default"].enabled.textColor,
    gap: components.hpe.button.medium["default"].gapX,
    badge: {
      align: 'container',
      // TO DO this is a grommet-ism?
      container: {
        // align badge background to button label color
        background: 'text-strong'
      },
      size: {
        medium: '18px' // Q: what token should be used here? no token for this at the moments
      },
      text: {
        size: {
          medium: 'xsmall' // TO DO how to do references for typography sizes
        }
      }
    },
    // TO DO add cta-primary variant
    'cta-primary': _extends({}, buttonKindTheme.primary, {
      icon: /*#__PURE__*/React.createElement(Hpe, null),
      reverse: true,
      extend: ''
    }),
    // TO DO add cta-alternate variant
    'cta-alternate': _extends({}, buttonKindTheme.secondary, {
      icon: /*#__PURE__*/React.createElement(Hpe, {
        color: "icon-brand"
      }),
      reverse: true
    })
  }, buttonKindTheme, {
    option: option,
    active: buttonStatesTheme.active,
    disabled: _extends({
      opacity: 1
    }, buttonStatesTheme.disabled),
    selected: {
      option: {
        background: components.hpe.select.option.selected.enabled.background,
        color: components.hpe.select.option.selected.textColor,
        font: {
          weight: components.hpe.select.option.selected.enabled.fontWeight
        },
        elevation: 'inset-selected'
      }
    },
    hover: _extends({
      'cta-primary': buttonStatesTheme.hover.primary,
      'cta-alternate': _extends({}, buttonStatesTheme.hover.secondary, {
        extend: '' // TO DO can remove when merging, temp to override extend
      })
    }, buttonStatesTheme.hover),
    size: _extends({
      xsmall: {
        border: {
          radius: '2em'
        },
        iconOnly: {
          pad: {
            vertical: '3px',
            horizontal: '3px'
          }
        }
      }
    }, buttonSizesTheme)
  }),
  calendar: {
    day: {
      hover: {
        background: 'background-hover',
        color: 'text-strong'
      },
      selected: {
        background: 'background-selected-strong-enabled',
        color: 'text-onSelectedStrong',
        hover: {
          background: 'background-selected-strong-hover'
        },
        font: {
          weight: global.hpe.fontWeight.medium
        }
      },
      inRange: {
        color: 'text-onSelectedWeak',
        hover: {
          background: 'background-selected-weak-hover'
        },
        font: {
          weight: global.hpe.fontWeight.medium
        }
      },
      extend: ''
    },
    range: {
      background: 'background-selected-weak-enabled'
    },
    icons: {
      next: Next,
      previous: Previous
    },
    small: {
      // TO DO should we use t-shirt size element tokens here?
      fontSize: '13.6px',
      lineHeight: 1.375,
      daySize: '27.43px',
      title: {
        size: 'medium',
        weight: global.hpe.fontWeight.normal,
        color: 'text-strong'
      }
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
      day: {
        round: 'full'
      },
      range: {
        round: 'none',
        start: {
          round: {
            corner: 'left',
            size: 'full'
          }
        },
        end: {
          round: {
            corner: 'right',
            size: 'full'
          }
        }
      },
      title: {
        size: 'large',
        weight: global.hpe.fontWeight.normal,
        color: 'text-strong'
      }
    },
    large: {
      fontSize: '31.2px',
      lineHeight: 1.11,
      daySize: '109.71px',
      title: {
        size: 'xlarge',
        weight: global.hpe.fontWeight.normal,
        color: 'text-strong'
      }
    }
  },
  card: {
    container: {
      background: 'background-front',
      elevation: 'medium',
      extend: 'transition: all 0.3s ease-in-out;'
    },
    body: {
      pad: 'medium'
    },
    footer: {
      pad: {
        horizontal: 'medium',
        vertical: 'small'
      }
    },
    header: {
      pad: 'medium'
    },
    hover: {
      container: {
        elevation: 'large'
      }
    }
  },
  checkBox: {
    hover: {
      border: {
        color: components.hpe.checkbox.control.hover.borderColor,
        width: components.hpe.checkbox.control.hover.borderWidth
      },
      background: {
        color: 'transparent'
      },
      // HPE Design System guidance states that pad="none" should be applied on CheckBox
      // when its used outside of a FormField. We will apply this hover treatment in
      // those instances.
      extend: function extend(_ref) {
        var disabled = _ref.disabled,
          pad = _ref.pad,
          theme = _ref.theme,
          toggle = _ref.toggle;
        return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        ", "\n      "])), !disabled && pad === 'none' && !toggle && "border: 2px solid " + theme.global.colors[components.hpe.checkbox.control.hover.borderColor][theme.dark ? 'dark' : 'light'] + ";");
      } // Q: missing token for hover borderWidth? this falls into similar boat as secondary button
    },
    color: components.hpe["switch"].control.handle.enabled.background,
    border: {
      color: components.hpe.checkbox.control.enabled.borderColor,
      width: dimensions.borderSize[components.hpe.checkbox.medium.control.borderWidth] || components.hpe.checkbox.medium.control.borderWidth
    },
    check: {
      radius: components.hpe.checkbox.medium.control.borderRadius,
      thickness: components.hpe.checkbox.control.hover.borderWidth,
      extend: function extend(_ref2) {
        var _theme$global$colors$, _theme$global$colors$2, _theme$global$colors$3, _theme$global$colors$4;
        var theme = _ref2.theme,
          checked = _ref2.checked,
          indeterminate = _ref2.indeterminate;
        return "\n      margin-block: " + (dimensions.borderSize[components.hpe.checkbox.medium.control.marginY] || components.hpe.checkbox.medium.control.marginY) + "px;\n      background: " + ((_theme$global$colors$ = theme.global.colors[components.hpe.checkbox.control.enabled.background]) == null ? void 0 : _theme$global$colors$[theme.dark ? 'dark' : 'light']) + ";\n      background-color: " + (checked || indeterminate ? (_theme$global$colors$2 = theme.global.colors[components.hpe.checkbox.control.selected.enabled.background]) == null ? void 0 : _theme$global$colors$2[theme.dark ? 'dark' : 'light'] : '') + ";\n      &:hover {\n        background: " + (checked || indeterminate ? (_theme$global$colors$3 = theme.global.colors[components.hpe.checkbox.control.selected.hover.background]) == null ? void 0 : _theme$global$colors$3[theme.dark ? 'dark' : 'light'] : (_theme$global$colors$4 = theme.global.colors[components.hpe.checkbox.control.hover.background]) == null ? void 0 : _theme$global$colors$4[theme.dark ? 'dark' : 'light']) + ";\n      }\n      " + ((checked || indeterminate) && 'border: none;') + "\n        ";
      }
    },
    icon: {
      extend: function extend(_ref3) {
        var _theme$global$colors$5;
        var theme = _ref3.theme;
        return "stroke-width: 2px;\n      stroke: " + ((_theme$global$colors$5 = theme.global.colors[components.hpe.checkbox.control.selected.enabled.iconColor]) == null ? void 0 : _theme$global$colors$5[theme.dark ? 'dark' : 'light']);
      }
    },
    gap: components.hpe.checkbox.medium.gapX,
    label: {
      align: 'start'
    },
    pad: {
      vertical: (_components$hpe$eleme6 = components.hpe.element) == null ? void 0 : _components$hpe$eleme6.medium.paddingY,
      horizontal: components.hpe.formField.medium.input.container.paddingX
    },
    size: components.hpe.checkbox.medium.control.width,
    toggle: {
      background: components.hpe["switch"].control.track.enabled.background,
      color: components.hpe["switch"].control.handle.enabled.background,
      size: components.hpe["switch"].medium.control.track.width,
      knob: {
        extend: function extend(_ref4) {
          var theme = _ref4.theme,
            checked = _ref4.checked;
          return "\n           box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'].small + ";\n           border: " + dimensions.borderSize[components.hpe["switch"].medium.control.handle.borderWidth] + " solid " + theme.global.colors[components.hpe["switch"].control.handle.enabled.borderColor][theme.dark ? 'dark' : 'light'] + ";\n        width: " + components.hpe["switch"].medium.control.handle.width + ";\n        height: " + components.hpe["switch"].medium.control.handle.height + ";\n        top: 1px; // TO DO token?\n        " + (!checked ? 'left: 1px;' : '') + " // TO DO token?\n        ";
        }
      },
      extend: function extend(_ref5) {
        var _theme$global$colors$6, _theme$global$colors$7;
        var checked = _ref5.checked,
          theme = _ref5.theme;
        return "\n        " + (checked && "background-color: " + ((_theme$global$colors$6 = theme.global.colors[components.hpe["switch"].control.track.selected.enabled.background]) == null ? void 0 : _theme$global$colors$6[theme.dark ? 'dark' : 'light']) + ";") + "\n         margin-block: " + (dimensions.borderSize[components.hpe["switch"].medium.control.track.marginY] || components.hpe["switch"].medium.control.track.marginY) + "px;\n         border-color: " + ((_theme$global$colors$7 = theme.global.colors[components.hpe["switch"].control.track.enabled.borderColor]) == null ? void 0 : _theme$global$colors$7[theme.dark ? 'dark' : 'light']) + ";\n      ";
      }
    },
    // HPE Design System guidance states that pad="none" should be applied on CheckBox
    // when its used outside of a FormField. We will apply this hover treatment in
    // those instances.
    extend: function extend(_ref6) {
      var disabled = _ref6.disabled,
        pad = _ref6.pad;
      return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    ", "\n    font-weight: ", ";\n    width: auto;\n  };\n  "])), !disabled && pad === 'none' && "&:hover {\n      background-color: unset;\n    }", components.hpe.checkbox.medium.label.fontWeight);
    }
  },
  checkBoxGroup: {
    container: {
      gap: 'none',
      // TO DO token ?
      margin: {
        vertical: components.hpe.formField.medium.input.group.container.paddingY
      }
    }
  },
  data: {
    button: {
      kind: 'toolbar'
    }
  },
  dateInput: {
    container: {
      round: components.hpe.formField.medium.input.container.borderRadius
    }
  },
  dataTable: {
    body: {
      // TO DO should there be a token?
      extend: function extend(_ref7) {
        var theme = _ref7.theme;
        return "\n        /* Margin and padding allow room for focus on table body */\n        margin: " + theme.global.edgeSize.xxsmall + " 0px;\n        padding: 0px " + theme.global.edgeSize.xxsmall + ";\n      ";
      },
      selected: {
        background: (_components$hpe$dataC = components.hpe.dataCell.selected) == null || (_components$hpe$dataC = _components$hpe$dataC.enabled) == null ? void 0 : _components$hpe$dataC.background
      }
    },
    groupHeader: {
      // background: undefined,
      // border: undefined,
      // pad: undefined,
    },
    groupEnd: {
      border: {
        side: 'bottom',
        size: 'xsmall'
      }
    },
    header: {
      border: {
        side: 'bottom'
      },
      color: components.hpe.headerCell.enabled.textColor,
      extend: function extend(_ref8) {
        var column = _ref8.column,
          sort = _ref8.sort,
          sortable = _ref8.sortable,
          theme = _ref8.theme;
        return "\n          " + (sort && sort.property === column && "\n            background: " + theme.global.colors['background-active'][theme.dark ? 'dark' : 'light'] + "\n          ") + ";\n          " + (sortable && sort && sort.property !== column && "\n              svg {\n                opacity: 0;\n              }\n              &:hover {\n                svg {\n                  opacity: 1;\n                }\n              }\n            ") + ";\n        ";
      },
      font: {
        weight: components.hpe.headerCell.fontWeight
      },
      gap: components.hpe.headerCell.gapX,
      hover: {
        background: {
          color: components.hpe.headerCell.hover.background
        }
      },
      units: {
        color: components.hpe.headerCell.units.enabled.textColor
      }
    },
    icons: {
      ascending: function ascending() {
        return /*#__PURE__*/React.createElement(Ascending, {
          height: "medium"
        });
      },
      descending: function descending() {
        return /*#__PURE__*/React.createElement(Descending, {
          height: "medium"
        });
      },
      contract: function contract() {
        return /*#__PURE__*/React.createElement(Up, {
          height: "medium"
        });
      },
      expand: function expand() {
        return /*#__PURE__*/React.createElement(Down, {
          height: "medium"
        });
      },
      sortable: function sortable() {
        return /*#__PURE__*/React.createElement(Unsorted, {
          height: "medium"
        });
      }
    },
    pinned: {
      header: {
        background: {
          opacity: 'strong'
        },
        extend: 'backdrop-filter: blur(12px);'
      },
      body: {
        background: {
          opacity: 'strong'
        },
        extend: 'backdrop-filter: blur(12px);'
      },
      footer: {
        background: {
          opacity: 'strong'
        },
        extend: 'backdrop-filter: blur(12px);'
      }
    },
    primary: {
      weight: components.hpe.dataCell.primary.fontWeight,
      color: components.hpe.dataCell.primary.enabled.textColor
    },
    resize: {
      border: {
        color: 'border',
        side: 'end'
      },
      hover: {
        border: {
          color: 'border-strong',
          size: 'small'
        }
      }
    }
  },
  fileInput: {
    border: {
      color: components.hpe.formField.input.container.enabled.borderColor,
      side: 'all',
      style: 'solid',
      size: components.hpe.formField.medium.input.container.borderWidth
    },
    button: {
      background: components.hpe.button.secondary.enabled.background,
      border: {
        radius: components.hpe.button.medium.secondary.borderRadius
      },
      pad: {
        vertical: components.hpe.button.medium.secondary.paddingY,
        horizontal: components.hpe.button.medium.secondary.paddingX
      },
      color: components.hpe.button.secondary.enabled.textColor,
      font: {
        weight: components.hpe.button.secondary.enabled.fontWeight
      },
      hover: {
        background: components.hpe.button.secondary.hover.background,
        color: components.hpe.button.secondary.hover.textColor
      }
    },
    dragOver: {
      background: MISSING.color,
      border: 'none'
    },
    hover: {
      border: {
        color: 'border'
      }
    },
    icons: {
      remove: Close
    },
    label: {
      margin: 'small'
    },
    message: {
      color: 'placeholder',
      margin: 'small'
    },
    pad: {
      horizontal: 'xsmall'
    },
    extend: "border-radius: " + components.hpe.formField.medium.input.container.borderRadius + ";"
  },
  formField: {
    content: {
      margin: {
        vertical: 'xsmall'
      },
      pad: 'none'
    },
    border: {
      error: {
        color: components.hpe.formField.input.container.status.critical.borderColor
      },
      color: components.hpe.formField.input.container.enabled.borderColor,
      side: 'all'
    },
    disabled: {
      background: components.hpe.formField.input.group.container.disabled.background,
      border: {
        color: components.hpe.formField.input.container.disabled.borderColor
      },
      label: {
        color: components.hpe.formField.labelText.disabled.textColor
      }
    },
    error: {
      background: {
        color: components.hpe.formField.input.container.status.critical.background
      },
      container: {
        gap: 'xsmall' // TO DO missing token
      },
      icon: /*#__PURE__*/React.createElement(CircleAlert, {
        size: "small",
        color: light.hpe.color.icon.critical
      }),
      // TO DO need to handle modes
      size: 'xsmall',
      // TO DO we have a token but it's not a t-shirt size reference but fontSize, lineHeight directly
      color: components.hpe.formField.errorText.enabled.textColor,
      margin: {
        // TO DO missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none'
      }
    },
    focus: {
      background: components.hpe.formField.input.container.background,
      border: {
        color: components.hpe.formField.input.container.borderColor
      }
    },
    help: {
      size: 'xsmall',
      color: components.hpe.formField.helpText.enabled.color,
      margin: 'none' // TO DO missing token
    },
    info: {
      size: 'xsmall',
      color: components.hpe.formField.infoText.enabled.color,
      margin: {
        // TO DO missing token
        bottom: 'xsmall',
        top: 'none',
        horizontal: 'none'
      }
    },
    label: {
      size: 'xsmall',
      // TO DO how to capture this as token, currently we have "fontSize", "lineHeight", "..."
      color: components.hpe.formField.labelText.enabled.color,
      margin: {
        // TO DO missing token
        bottom: 'none',
        top: 'xsmall',
        horizontal: 'none'
      },
      requiredIndicator: true,
      weight: components.hpe.formField.medium.labelText.fontWeight
    },
    margin: {
      bottom: 'none' // TO DO missing token
    },
    round: components.hpe.formField.medium.input.container.borderRadius,
    // TO DO no tokens
    survey: {
      label: {
        margin: {
          bottom: 'none'
        },
        size: 'medium'
      }
    }
  },
  heading: {
    color: 'heading',
    weight: large.hpe.heading.xlarge.fontWeight,
    level: {
      1: {
        font: {
          weight: large.hpe.heading.xlarge.fontWeight
        },
        small: {
          size: large.hpe.heading.large.fontSize,
          height: large.hpe.heading.large.lineHeight
        },
        medium: {
          size: large.hpe.heading.xlarge.fontSize,
          height: large.hpe.heading.xlarge.lineHeight
        },
        large: {
          // TO DO what tokens?
          size: '48px',
          height: '48px'
        },
        xlarge: {
          // TO DO what tokens?
          size: '60px',
          height: '60px'
        }
      },
      2: {
        font: {
          weight: large.hpe.heading.large.fontWeight
        },
        small: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight
        },
        medium: {
          size: large.hpe.heading.large.fontSize,
          height: large.hpe.heading.large.lineHeight
        },
        large: {
          size: large.hpe.heading.xlarge.fontSize,
          height: large.hpe.heading.xlarge.lineHeight
        },
        xlarge: {
          // TO DO what tokens?
          size: '48px',
          height: '48px'
        }
      },
      3: {
        font: {
          weight: large.hpe.heading.medium.fontWeight
        },
        small: {
          size: large.hpe.heading.small.fontSize,
          height: large.hpe.heading.small.lineHeight
        },
        medium: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight
        },
        large: {
          size: large.hpe.heading.large.fontSize,
          height: large.hpe.heading.large.lineHeight
        },
        xlarge: {
          size: large.hpe.heading.xlarge.fontSize,
          height: large.hpe.heading.xlarge.lineHeight
        }
      },
      4: {
        font: {
          weight: large.hpe.heading.small.fontWeight
        },
        small: {
          size: large.hpe.heading.xsmall.fontSize,
          height: large.hpe.heading.xsmall.lineHeight
        },
        medium: {
          size: large.hpe.heading.small.fontSize,
          height: large.hpe.heading.small.lineHeight
        },
        large: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight
        },
        xlarge: {
          size: large.hpe.heading.large.fontSize,
          height: large.hpe.heading.large.lineHeight
        }
      },
      5: {
        font: {
          weight: large.hpe.heading.xsmall.fontWeight
        },
        small: {
          size: large.hpe.heading.xxsmall.fontSize,
          height: large.hpe.heading.xxsmall.lineHeight
        },
        medium: {
          size: large.hpe.heading.xsmall.fontSize,
          height: large.hpe.heading.xsmall.lineHeight
        },
        large: {
          size: large.hpe.heading.small.fontSize,
          height: large.hpe.heading.small.lineHeight
        },
        xlarge: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight
        }
      },
      6: {
        font: {
          weight: large.hpe.heading.xxsmall.fontWeight
        },
        small: {
          size: large.hpe.heading.xxsmall.fontSize,
          height: large.hpe.heading.xxsmall.lineHeight
        },
        medium: {
          size: large.hpe.heading.xxsmall.fontSize,
          height: large.hpe.heading.xxsmall.lineHeight
        },
        large: {
          size: large.hpe.heading.small.fontSize,
          height: large.hpe.heading.small.lineHeight
        },
        xlarge: {
          size: large.hpe.heading.medium.fontSize,
          height: large.hpe.heading.medium.lineHeight
        }
      }
    },
    // This block applies size-specific weights to headings to ensure
    // that as heading sizes get small, the weight increases and as they
    // get large, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support level and size-specific weights.
    extend: function extend(_ref9) {
      var level = _ref9.level,
        size = _ref9.size;
      var fontWeight = '';
      if (level === 3 && size === 'small') {
        fontWeight = "font-weight: " + large.hpe.heading.small.fontWeight + ";";
        // undefined necessary so an h4 without size prop explicitly defined
        // still renders as weight 600
      } else if (level === 4 && ['small', 'medium', undefined].includes(size)) {
        fontWeight = "font-weight: " + large.hpe.heading.small.fontWeight + ";";
      } else if (level === 5 && size === 'xlarge') {
        fontWeight = "font-weight: " + large.hpe.heading.small.fontWeight + ";";
      }
      return fontWeight;
    }
  },
  icon: {
    disableScaleDown: true,
    matchSize: true,
    size: {
      xsmall: large.hpe.size.icon.xsmall,
      small: large.hpe.size.icon.small,
      medium: large.hpe.size.icon.medium,
      large: large.hpe.size.icon.large,
      xlarge: large.hpe.size.icon.xlarge,
      xxlarge: large.hpe.size.icon.xxlarge
    }
  },
  layer: {
    background: 'background-floating',
    border: {
      radius: 'small',
      intelligentRounding: true
    },
    container: {
      elevation: 'large'
    },
    overlay: {
      background: 'background-layer-overlay'
    },
    /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
     * at a z-index of 101. This adjustment allows for Layer modals and side-drawers
     * to sit atop the Global header. */
    zIndex: '110' // TO DO no token
  },
  list: {
    container: {
      // any box props
      gap: 'xsmall'
      // extend: undefined,
    },
    item: {
      border: undefined,
      disabled: {
        color: 'text-disabled',
        cursor: 'default'
      },
      pinned: {
        background: 'background-active',
        icon: {
          pad: mediumIconOnlyPad
        }
      }
    }
  },
  maskedInput: {
    container: {
      extend: function extend(_ref10) {
        var theme = _ref10.theme;
        return "\n        svg {\n          fill: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n          stroke: " + theme.global.colors['text-strong'][theme.dark ? 'dark' : 'light'] + ";\n        }\n      ";
      }
    }
  },
  menu: {
    drop: {
      align: {
        top: 'bottom',
        left: 'left'
      }
    },
    group: {
      container: {
        pad: {
          vertical: components.hpe.menu.medium.group.container.paddingY
        }
      },
      separator: {
        color: components.hpe.menu.group.separator.background,
        size: components.hpe.menu.medium.group.separator.height,
        pad: 'none' // TO DO no token
      }
    },
    icons: {
      color: components.hpe.menu.item.enabled.iconColor,
      down: Down
    },
    item: {
      pad: {
        horizontal: components.hpe.menu.medium.item.paddingX,
        vertical: components.hpe.menu.medium.item.paddingY
      }
    }
  },
  nameValuePair: {
    name: {
      color: 'text-strong',
      weight: global.hpe.fontWeight.medium
    }
  },
  notification: {
    close: {
      icon: Close
    },
    container: {
      round: 'xsmall'
    },
    direction: 'column',
    global: {
      direction: 'row',
      container: {
        round: 'none'
      }
    },
    message: {
      color: 'text'
    },
    title: {
      color: 'text-strong',
      weight: global.hpe.fontWeight.medium
    },
    critical: {
      background: 'background-critical',
      message: {
        color: 'text-onCritical-default'
      },
      title: {
        color: 'text-onCritical-strong'
      },
      global: {
        background: 'background-critical',
        message: {
          color: 'text-onCritical-default'
        },
        title: {
          color: 'text-onCritical-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    warning: {
      background: 'background-warning',
      message: {
        color: 'text-onWarning-default'
      },
      title: {
        color: 'text-onWarning-strong'
      },
      global: {
        background: 'background-warning',
        message: {
          color: 'text-onWarning-default'
        },
        title: {
          color: 'text-onWarning-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    normal: {
      background: 'background-ok',
      message: {
        color: 'text-onOk-default'
      },
      title: {
        color: 'text-onOk-strong'
      },
      global: {
        background: 'background-ok',
        message: {
          color: 'text-onOk-default'
        },
        title: {
          color: 'text-onOk-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    unknown: {
      background: 'background-unknown',
      message: {
        color: 'text-onUnknown-default'
      },
      title: {
        color: 'text-onUnknown-strong'
      },
      global: {
        background: 'background-unknown',
        message: {
          color: 'text-onUnknown-default'
        },
        title: {
          color: 'text-onUnknown-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    info: {
      background: 'background-info',
      message: {
        color: 'text-onInfo-default'
      },
      title: {
        color: 'text-onInfo-strong'
      },
      global: {
        background: 'background-info',
        message: {
          color: 'text-onInfo-default'
        },
        title: {
          color: 'text-onInfo-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    },
    undefined: {
      background: 'background-unknown',
      message: {
        color: 'text-onUnknown-default'
      },
      title: {
        color: 'text-onUnknown-strong'
      },
      global: {
        background: 'background-ok',
        message: {
          color: 'text-onUnknown-default'
        },
        title: {
          color: 'text-onUnknown-strong'
        }
      },
      toast: {
        background: 'background-front',
        message: {
          color: 'text'
        },
        title: {
          color: 'text-strong'
        }
      }
    }
  },
  page: {
    wide: {
      width: {
        min: '336px',
        // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: 'xxlarge'
      },
      xsmall: {
        pad: {
          horizontal: 'large'
        }
      },
      xlarge: {
        pad: {
          horizontal: 'large'
        }
      }
    },
    narrow: {
      width: {
        min: '336px',
        // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: 'large'
      },
      xsmall: {
        pad: {
          horizontal: 'large'
        }
      },
      xlarge: {
        pad: {
          horizontal: 'large'
        }
      }
    },
    full: {
      width: {
        min: '336px',
        // 336 + 24 (margin) + 24 (margin) = 384 (e.g. 'medium')
        max: '100%'
      },
      xsmall: {
        pad: {
          horizontal: 'large'
        }
      },
      xlarge: {
        pad: {
          horizontal: 'large'
        }
      }
    }
  },
  pageHeader: {
    responsive: {
      breakpoints: ['xsmall', 'small']
    },
    // title: {
    //   size: undefined,
    // },
    subtitle: {
      size: 'large'
    },
    xsmall: {
      areas: [['parent', 'parent'], ['title', 'actions'], ['subtitle', 'actions']],
      columns: [['small', 'flex'], 'auto'],
      rows: ['auto', 'auto', 'auto'],
      gap: {
        row: 'xsmall',
        column: 'medium'
      }
    },
    xlarge: {
      areas: [['parent', 'parent'], ['title', 'actions'], ['subtitle', 'actions']],
      columns: [['medium', 'large'], 'auto'],
      rows: ['auto', 'auto', 'auto'],
      gap: {
        row: 'xsmall',
        column: 'large'
      }
    }
  },
  pagination: {
    button: {
      color: components.hpe.button["default"].enabled.textColor,
      border: {
        radius: components.hpe.button.medium["default"].borderRadius
      },
      font: {
        weight: components.hpe.button["default"].enabled.fontWeight
      },
      active: {
        background: components.hpe.button["default"].selected.enabled.background,
        border: {
          radius: components.hpe.button.medium["default"].borderRadius
        },
        color: components.hpe.button["default"].selected.enabled.textColor,
        font: {
          weight: components.hpe.button["default"].selected.enabled.fontWeight
        }
      },
      hover: {
        background: components.hpe.button["default"].hover.background,
        border: {
          radius: components.hpe.button.medium["default"].borderRadius
        },
        color: components.hpe.button["default"].hover.textColor,
        font: {
          weight: components.hpe.button["default"].hover.fontWeight
        }
      },
      disabled: {
        background: components.hpe.button["default"].disabled.background,
        border: {
          radius: components.hpe.button.medium["default"].borderRadius
        },
        color: components.hpe.button["default"].disabled.textColor,
        font: {
          weight: components.hpe.button["default"].disabled.fontWeight
        }
      },
      size: {
        small: {
          border: {
            radius: components.hpe.button.small["default"].borderRadius,
            width: dimensions.borderSize[components.hpe.button.small["default"].borderWidth] || components.hpe.button.small["default"].borderWidth
          },
          pad: {
            vertical: '4px',
            horizontal: '4px'
          },
          font: {
            size: (_components$hpe$eleme7 = components.hpe.element) == null ? void 0 : _components$hpe$eleme7.small.fontSize,
            height: (_components$hpe$eleme8 = components.hpe.element) == null ? void 0 : _components$hpe$eleme8.small.lineHeight
          },
          height: (_components$hpe$eleme9 = components.hpe.element) == null ? void 0 : _components$hpe$eleme9.small.minHeight,
          width: (_components$hpe$eleme10 = components.hpe.element) == null ? void 0 : _components$hpe$eleme10.small.minHeight
        },
        medium: {
          border: {
            radius: components.hpe.button.medium["default"].borderRadius,
            width: dimensions.borderSize[components.hpe.button.medium["default"].borderWidth] || components.hpe.button.medium["default"].borderWidth
          },
          pad: {
            vertical: '4px',
            horizontal: '4px'
          },
          font: {
            size: (_components$hpe$eleme11 = components.hpe.element) == null ? void 0 : _components$hpe$eleme11.medium.fontSize,
            height: (_components$hpe$eleme12 = components.hpe.element) == null ? void 0 : _components$hpe$eleme12.medium.lineHeight
          },
          height: (_components$hpe$eleme13 = components.hpe.element) == null ? void 0 : _components$hpe$eleme13.medium.minHeight,
          width: (_components$hpe$eleme14 = components.hpe.element) == null ? void 0 : _components$hpe$eleme14.medium.minHeight
        },
        large: {
          border: {
            radius: components.hpe.button.large["default"].borderRadius,
            width: dimensions.borderSize[components.hpe.button.large["default"].borderWidth] || components.hpe.button.large["default"].borderWidth
          },
          pad: {
            vertical: '4px',
            horizontal: '4px'
          },
          font: {
            size: (_components$hpe$eleme15 = components.hpe.element) == null ? void 0 : _components$hpe$eleme15.large.fontSize,
            height: (_components$hpe$eleme16 = components.hpe.element) == null ? void 0 : _components$hpe$eleme16.large.lineHeight
          },
          height: (_components$hpe$eleme17 = components.hpe.element) == null ? void 0 : _components$hpe$eleme17.large.minHeight,
          width: (_components$hpe$eleme18 = components.hpe.element) == null ? void 0 : _components$hpe$eleme18.large.minHeight
        }
      }
    }
  },
  paragraph: _extends({}, paragraphTheme, {
    // This block applies size-specific weights to paragraph to ensure
    // that as paragraph sizes get larger, the weight decreases.
    // This block can be removed once grommet theme structure is enhanced
    // to support size-specific weights.
    extend: function extend(_ref11) {
      var size = _ref11.size;
      return "\n      " + (['xxlarge'].includes(size) ? "font-weight: " + large.hpe.text[size].fontWeight + ";" : '') + ";\n    ";
    }
  }),
  radioButton: {
    border: {
      color: components.hpe.radioButton.control.enabled.borderColor,
      width: components.hpe.radioButton.medium.control.borderWidth // TO DO want this narrower when not checked
    },
    color: components.hpe.radioButton.control.selected.enabled.borderColor,
    container: {
      extend: function extend(_ref12) {
        var theme = _ref12.theme;
        return "\n      width: auto;\n      padding-inline: " + components.hpe.formField.medium.input.group.item.paddingX + ";\n      &:has(input[checked]) {\n        background: " +
        // TO DO how to only do in FormField
        theme.global.colors['background-selected-weak-enabled'][theme.dark ? 'dark' : 'light'] + ";\n      }\n    ";
      }
    },
    extend: function extend() {
      return "\n      padding-block: " + components.hpe.formField.medium.input.group.item.paddingY + ";\n    ";
    },
    gap: components.hpe.radioButton.medium.gapX,
    hover: {
      background: {
        color: components.hpe.formField.input.group.item.hover.background
      },
      border: {
        color: components.hpe.radioButton.control.hover.borderColor
      }
    },
    size: components.hpe.radioButton.medium.control.height,
    font: {
      weight: components.hpe.radioButton.medium.label.fontWeight
    },
    icons: {
      circle: function circle() {
        return /*#__PURE__*/React.createElement(Blank, {
          color: components.hpe.radioButton.control.selected.enabled.iconColor
        }, /*#__PURE__*/React.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "6"
        }));
      }
    }
  },
  radioButtonGroup: {
    container: {
      gap: 'none',
      // TO DO token?
      margin: {
        vertical: components.hpe.formField.medium.input.group.container.paddingY
      }
    }
  },
  rangeInput: {
    thumb: {
      color: 'background-primary-default'
    },
    track: {
      lower: {
        color: 'background-primary-default'
      },
      upper: {
        color: 'border'
      }
    }
  },
  select: {
    control: {
      extend: function extend(_ref13) {
        var disabled = _ref13.disabled;
        return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        ", "\n      "])), disabled && "\n        opacity: 0.3;\n        input {\n          cursor: default;\n        }");
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
      margin: {
        left: 'small',
        // setting right margin to 12px because on small
        // screens, Select responsive padding sizes down
        // which brings the icon too tight with edge of
        // control.
        right: '12px'
      },
      up: Up
    },
    options: undefined
  },
  spinner: {
    container: {
      pad: 'none',
      color: 'background-primary-default',
      border: [{
        color: 'border-weak',
        side: 'all',
        size: 'medium'
      }, {
        color: 'border-weak',
        side: 'right',
        size: 'medium'
      }, {
        color: 'border-weak',
        side: 'top',
        size: 'medium'
      }, {
        color: 'border-weak',
        side: 'left',
        size: 'medium'
      }]
    },
    size: {
      xsmall: (_components$hpe$eleme19 = components.hpe.element) == null ? void 0 : _components$hpe$eleme19.xsmall.minHeight,
      small: (_components$hpe$eleme20 = components.hpe.element) == null ? void 0 : _components$hpe$eleme20.small.minHeight,
      medium: (_components$hpe$eleme21 = components.hpe.element) == null ? void 0 : _components$hpe$eleme21.medium.minHeight,
      large: (_components$hpe$eleme22 = components.hpe.element) == null ? void 0 : _components$hpe$eleme22.large.minHeight,
      xlarge: (_components$hpe$eleme23 = components.hpe.element) == null ? void 0 : _components$hpe$eleme23.xlarge.minHeight
    }
  },
  starRating: {
    color: 'background-selected-strong-enabled'
  },
  tab: {
    color: 'text',
    active: {
      background: 'background-selected-strong-enabled',
      color: 'text-onSelectedStrong',
      weight: 500
    },
    hover: {
      background: 'background-hover',
      color: 'text'
    },
    border: {
      side: 'all',
      color: 'transparent',
      size: dimensions[(_components$hpe$eleme24 = components.hpe.element) == null ? void 0 : _components$hpe$eleme24.medium.borderWidth] || ((_components$hpe$eleme25 = components.hpe.element) == null ? void 0 : _components$hpe$eleme25.medium.borderWidth),
      active: {
        color: 'transparent'
      },
      disabled: {
        color: undefined
      },
      hover: {
        color: undefined
      }
    },
    disabled: {
      background: 'background-disabled',
      color: 'text-disabled'
    },
    pad: {
      bottom: (_components$hpe$eleme26 = components.hpe.element) == null ? void 0 : _components$hpe$eleme26.medium.paddingY,
      top: (_components$hpe$eleme27 = components.hpe.element) == null ? void 0 : _components$hpe$eleme27.medium.paddingY,
      horizontal: (_components$hpe$eleme28 = components.hpe.element) == null || (_components$hpe$eleme28 = _components$hpe$eleme28.medium) == null || (_components$hpe$eleme28 = _components$hpe$eleme28.paddingX) == null ? void 0 : _components$hpe$eleme28.wide
    },
    margin: {
      vertical: 'none',
      horizontal: 'none'
    },
    extend: function extend(_ref14) {
      var theme = _ref14.theme;
      return "border-radius: " + theme.global.edgeSize.xsmall + ";";
    }
  },
  tabs: {
    gap: 'small',
    header: {
      border: undefined,
      // TO DO these selectors could be improved on in future grommet theme enhancements
      extend: function extend(_ref15) {
        var theme = _ref15.theme;
        return "\n        border-radius: " + theme.global.edgeSize.xsmall + "; \n        & button[aria-selected=\"true\"]:hover > div {\n          background: " + theme.global.colors['background-selected-strong-hover'][theme.dark ? 'dark' : 'light'] + ";\n          color: " + theme.global.colors['text-onSelectedStrong'][theme.dark ? 'dark' : 'light'] + ";\n        }\n      ";
      }
    },
    step: {
      xsmall: 1,
      xlarge: 3
    }
  },
  table: {
    header: {
      extend: "\n        > div { \n          height: 100%;\n          justify-content: center;\n        }\n        // align onSelect checkbox to center of header cell\n        label { \n          justify-content: center;\n        }\n      "
    },
    body: {
      pad: {
        top: components.hpe.dataCell.paddingTop,
        bottom: components.hpe.dataCell.paddingBottom,
        horizontal: components.hpe.dataCell.paddingX
      },
      border: {
        side: 'bottom',
        // TO DO this causes issues on the last row with the footer border
        color: components.hpe.dataCell.enabled.borderColor
      },
      extend: function extend(_ref16) {
        var theme = _ref16.theme;
        return "\n          &:hover {\n            button {\n              background: " + theme.global.colors['background-hover'][theme.dark ? 'dark' : 'light'] + ";\n            }\n          }\n        ";
      }
    },
    row: {
      hover: {
        background: 'background-hover'
      }
    },
    footer: {
      extend: "\n        font-weight: " + MISSING.weight + ";\n      "
    }
  },
  tag: {
    border: {
      color: 'border-weak'
    },
    icons: {
      remove: Close
    },
    pad: {
      horizontal: (_components$hpe$eleme29 = components.hpe.element) == null || (_components$hpe$eleme29 = _components$hpe$eleme29.medium) == null || (_components$hpe$eleme29 = _components$hpe$eleme29.paddingX) == null ? void 0 : _components$hpe$eleme29["default"],
      vertical: (_components$hpe$eleme30 = components.hpe.element) == null ? void 0 : _components$hpe$eleme30.medium.paddingY
    },
    remove: {
      kind: 'default'
    },
    value: {
      weight: global.hpe.fontWeight.medium
    },
    round: 'xsmall',
    size: {
      xsmall: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme31 = components.hpe.element) == null ? void 0 : _components$hpe$eleme31.small.paddingY,
          horizontal: (_components$hpe$eleme32 = components.hpe.element) == null || (_components$hpe$eleme32 = _components$hpe$eleme32.small) == null || (_components$hpe$eleme32 = _components$hpe$eleme32.paddingX) == null ? void 0 : _components$hpe$eleme32["default"]
        },
        remove: {
          size: 'xsmall',
          margin: {
            right: 'none',
            vertical: '-1px' // account for border
          }
        }
      },
      small: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme33 = components.hpe.element) == null ? void 0 : _components$hpe$eleme33.small.paddingY,
          horizontal: (_components$hpe$eleme34 = components.hpe.element) == null || (_components$hpe$eleme34 = _components$hpe$eleme34.small) == null || (_components$hpe$eleme34 = _components$hpe$eleme34.paddingX) == null ? void 0 : _components$hpe$eleme34["default"]
        },
        remove: {
          size: 'xsmall',
          margin: {
            right: '2px'
          }
        }
      },
      // TO DO tag rounding is overriding "default" rounding, do we expect this?
      medium: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme35 = components.hpe.element) == null ? void 0 : _components$hpe$eleme35.medium.paddingY,
          horizontal: (_components$hpe$eleme36 = components.hpe.element) == null || (_components$hpe$eleme36 = _components$hpe$eleme36.medium) == null || (_components$hpe$eleme36 = _components$hpe$eleme36.paddingX) == null ? void 0 : _components$hpe$eleme36["default"]
        },
        remove: {
          size: 'small',
          margin: {
            right: 'xxsmall'
          }
        }
      },
      large: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme37 = components.hpe.element) == null ? void 0 : _components$hpe$eleme37.large.paddingY,
          horizontal: (_components$hpe$eleme38 = components.hpe.element) == null || (_components$hpe$eleme38 = _components$hpe$eleme38.large) == null || (_components$hpe$eleme38 = _components$hpe$eleme38.paddingX) == null ? void 0 : _components$hpe$eleme38["default"]
        },
        remove: {
          size: 'medium',
          margin: {
            right: 'xxsmall'
          }
        }
      },
      xlarge: {
        icon: undefined,
        pad: {
          vertical: (_components$hpe$eleme39 = components.hpe.element) == null ? void 0 : _components$hpe$eleme39.xlarge.paddingY,
          horizontal: (_components$hpe$eleme40 = components.hpe.element) == null || (_components$hpe$eleme40 = _components$hpe$eleme40.xlarge) == null || (_components$hpe$eleme40 = _components$hpe$eleme40.paddingX) == null ? void 0 : _components$hpe$eleme40["default"]
        },
        remove: {
          size: 'large',
          margin: {
            right: 'xsmall'
          }
        }
      }
    }
  },
  text: textTheme,
  textInput: {
    container: {
      extend: function extend(_ref17) {
        var theme = _ref17.theme;
        return "\n        svg {\n          fill: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n          stroke: " + theme.global.colors['icon-strong'][theme.dark ? 'dark' : 'light'] + ";\n        }\n      ";
      }
    }
  },
  tip: {
    content: {
      background: 'background-floating',
      border: {
        color: 'border-weak'
      },
      margin: 'xxsmall',
      elevation: 'small',
      pad: {
        vertical: 'none',
        horizontal: 'small'
      },
      round: components.hpe.drop.borderRadius
    }
  },
  thumbsRating: {
    like: {
      color: 'background-selected-strong-enabled'
    },
    dislike: {
      color: 'background-selected-strong-enabled'
    }
  },
  toggleGroup: {
    button: {
      kind: 'toolbar'
    },
    container: {
      border: false
    },
    divider: false
  },
  buttonGroup: {
    gap: 'small'
  },
  // Theme-Designer only parameters
  name: 'HPE 1',
  rounding: 4,
  scale: 1.1,
  spacing: 24
});