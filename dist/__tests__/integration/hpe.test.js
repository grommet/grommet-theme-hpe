"use strict";

var _react = _interopRequireDefault(require("react"));
var _server = require("react-dom/server.node");
var _grommet = require("grommet");
var _styledComponents = require("styled-components");
var _grommet2 = require("hpe-design-tokens/grommet");
var _hpe = require("../../themes/hpe");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
/* eslint-env browser */
describe('Structural and Contract Tests', function () {
  var tokens = {
    primitives: _grommet2.primitives,
    light: _grommet2.light,
    dark: _grommet2.dark,
    small: _grommet2.small,
    large: _grommet2.dimension,
    global: _grommet2.global,
    components: _grommet2.components
  };
  var theme;
  beforeAll(function () {
    theme = (0, _hpe.buildTheme)(tokens, {
      'v6-backwards-compatibility': false
    });
  });
  describe('Checkbox hover backgrounds', function () {
    var renderCheckbox = function renderCheckbox(formField, disabled) {
      var sheet = new _styledComponents.ServerStyleSheet();
      var checkbox = /*#__PURE__*/_react["default"].createElement(_grommet.CheckBox, {
        label: "Option",
        disabled: disabled
      });
      try {
        var html = (0, _server.renderToString)(sheet.collectStyles(/*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
          theme: theme
        }, formField ? /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
          disabled: disabled
        }, checkbox) : checkbox)));
        var document = new DOMParser().parseFromString(html, 'text/html');
        return {
          label: document.querySelector('label'),
          css: sheet.getStyleTags()
        };
      } finally {
        sheet.seal();
      }
    };
    var hoverStyles = function hoverStyles(element, css) {
      return Array.from(element.classList).map(function (name) {
        return css.match(new RegExp("\\." + name + ":hover\\{([^}]*)\\}"));
      }).filter(Boolean).map(function (match) {
        return match[1];
      }).join(' ');
    };
    it('only applies the container hover background inside FormField', function () {
      var standalone = renderCheckbox(false, false);
      var field = renderCheckbox(true, false);
      var hoverColor = theme.global.colors[_grommet2.components.hpe.formField["default"].input.group.item.hover.background].light;
      expect(hoverStyles(standalone.label, standalone.css)).not.toContain('background-color');
      expect(hoverStyles(field.label, field.css)).not.toContain('background-color');
      expect(hoverStyles(field.label.parentElement, field.css)).toContain("background-color:" + hoverColor);
    });
    it('does not apply the FormField hover background when disabled', function () {
      var field = renderCheckbox(true, true);
      expect(hoverStyles(field.label.parentElement, field.css)).not.toContain('background-color');
    });
  });
  describe('CheckBoxGroup item hover backgrounds', function () {
    var renderGroup = function renderGroup(formField, disabled, mode) {
      var sheet = new _styledComponents.ServerStyleSheet();
      var group = /*#__PURE__*/_react["default"].createElement(_grommet.CheckBoxGroup, {
        options: [{
          label: 'Enabled',
          value: 'enabled'
        }, {
          label: 'Disabled',
          value: 'disabled',
          disabled: true
        }]
      });
      try {
        var html = (0, _server.renderToString)(sheet.collectStyles(/*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
          theme: theme,
          themeMode: mode
        }, formField ? /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
          disabled: disabled
        }, group) : group)));
        return {
          document: new DOMParser().parseFromString(html, 'text/html'),
          css: sheet.getStyleTags()
        };
      } finally {
        sheet.seal();
      }
    };
    var itemHoverRule = function itemHoverRule(css) {
      return css.match(/([^{}]+?\[role=["']?group["']?\]\s*>\s*label:not\(\[disabled\]\):hover)\s*\{([^}]*)\}/);
    };
    it.each(['light', 'dark'])('highlights enabled FormField items using the %s token color', function (mode) {
      var field = renderGroup(true, false, mode);
      var standalone = renderGroup(false, false, mode);
      var _field$document$query = field.document.querySelectorAll('[role="group"] > label'),
        enabled = _field$document$query[0],
        disabled = _field$document$query[1];
      var rule = itemHoverRule(field.css);
      var token = _grommet2.components.hpe.formField["default"].input.group.item.hover.background;
      expect(rule).not.toBeNull();
      expect(rule[2]).toContain("background-color:" + theme.global.colors[token][mode]);
      enabled.setAttribute('data-hover', '');
      disabled.setAttribute('data-hover', '');
      var selector = rule[1].replace(/^.*\*\//, '').trim().replace(':hover', '[data-hover]');
      expect(enabled.matches(selector)).toBe(true);
      expect(disabled.matches(selector)).toBe(false);
      expect(itemHoverRule(standalone.css)).toBeNull();
    });
    it('does not highlight items in a disabled FormField', function () {
      expect(itemHoverRule(renderGroup(true, true, 'light').css)).toBeNull();
    });
  });
  describe('Disabled FormField borders', function () {
    var renderField = function renderField(Component, props, disabled, mode) {
      var sheet = new _styledComponents.ServerStyleSheet();
      try {
        var html = (0, _server.renderToString)(sheet.collectStyles(/*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
          theme: theme,
          themeMode: mode
        }, /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
          disabled: disabled
        }, /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
          disabled: disabled
        }))))));
        var document = new DOMParser().parseFromString(html, 'text/html');
        return {
          content: document.querySelector('[class*="FormField__FormFieldContentBox"]'),
          css: sheet.getStyleTags()
        };
      } finally {
        sheet.seal();
      }
    };
    var hasBorderOverride = function hasBorderOverride(_ref, color) {
      var content = _ref.content,
        css = _ref.css;
      return Array.from(content.classList).some(function (name) {
        return css.includes("." + name + "." + name + "{border-color:" + color + ";}");
      });
    };
    var fields = [['CheckBox', _grommet.CheckBox, {
      label: 'Option'
    }, 'item'], ['CheckBoxGroup', _grommet.CheckBoxGroup, {
      options: ['A', 'B']
    }, 'container'], ['RadioButtonGroup', _grommet.RadioButtonGroup, {
      options: ['A', 'B']
    }, 'container'], ['StarRating', _grommet.StarRating, {}, 'container'], ['ThumbsRating', _grommet.ThumbsRating, {}, 'container']];
    it.each(fields)('%s overrides only its disabled FormField border', function (name, Component, props, part) {
      var token = _grommet2.components.hpe.formField["default"].input.group[part].disabled.rest.borderColor;
      ['light', 'dark'].forEach(function (mode) {
        var color = theme.global.colors[token][mode];
        expect(hasBorderOverride(renderField(Component, props, true, mode), color)).toBe(true);
        expect(hasBorderOverride(renderField(Component, props, false, mode), color)).toBe(false);
      });
    });
    it('does not override the disabled border of a TextInput FormField', function () {
      var field = renderField(_grommet.TextInput, {}, true, 'light');
      var color = theme.global.colors['border-disabled'].light;
      var contentStyles = Array.from(field.content.classList).map(function (name) {
        return field.css.match(new RegExp("\\." + name + "\\{([^}]*)\\}"));
      }).filter(Boolean).map(function (match) {
        return match[1];
      }).join(' ');
      expect(contentStyles).toContain(color);
      expect(hasBorderOverride(field, 'rgba(0, 0, 0, 0)')).toBe(false);
    });
  });
  describe('Toggle track', function () {
    it('sets the track height independently of the shared checkbox size', function () {
      var track = _grommet2.components.hpe["switch"]["default"].medium.control.track;
      var customTheme = _extends({}, theme, {
        checkBox: _extends({}, theme.checkBox, {
          size: '40px'
        })
      });
      expect(theme.checkBox.toggle.extend({
        theme: customTheme
      })).toContain("height: " + track.height + ";");
    });
    it.each([false, true])('uses the switch token when checked is %s', function (checked) {
      var _extends2;
      var track = _grommet2.components.hpe["switch"]["default"].control.track;
      var color = (checked ? track.selected.hover : track.hover).borderColor;
      var hoverTheme = _extends({}, theme, {
        global: _extends({}, theme.global, {
          colors: _extends({}, theme.global.colors, (_extends2 = {}, _extends2[color] = '#123456', _extends2))
        })
      });
      expect(theme.checkBox.toggle.extend({
        checked: checked,
        theme: hoverTheme
      })).toMatch(/label:hover[^{}]+\{\s*border-color: #123456;/);
    });
    it('does not style the track on hover when disabled', function () {
      expect(theme.checkBox.toggle.extend({
        disabled: true,
        theme: theme
      })).not.toContain('label:hover');
    });
  });
  describe('Critical property paths', function () {
    it('should have global.colors object', function () {
      expect(theme.global).toBeDefined();
      expect(theme.global.colors).toBeDefined();
      expect(typeof theme.global.colors).toBe('object');
    });
    it('should have global.focus definition', function () {
      expect(theme.global.focus).toBeDefined();
      expect(typeof theme.global.focus).toBe('object');
    });
    it('should have global.edgeSize definition', function () {
      expect(theme.global.edgeSize).toBeDefined();
      expect(typeof theme.global.edgeSize).toBe('object');
    });
    it('should have global.font definition', function () {
      expect(theme.global.font).toBeDefined();
      expect(typeof theme.global.font).toBe('object');
    });
    it('should have global.breakpoints definition', function () {
      expect(theme.global.breakpoints).toBeDefined();
      expect(typeof theme.global.breakpoints).toBe('object');
    });
    it('should have button.primary definition', function () {
      expect(theme.button).toBeDefined();
      expect(theme.button.primary).toBeDefined();
      expect(typeof theme.button.primary).toBe('object');
    });
    it('should have text and heading definitions', function () {
      expect(theme.text).toBeDefined();
      expect(theme.heading).toBeDefined();
      expect(typeof theme.text).toBe('object');
      expect(typeof theme.heading).toBe('object');
    });
    it('should have form field definitions', function () {
      expect(theme.formField).toBeDefined();
      expect(typeof theme.formField).toBe('object');
    });
    it('should have dateTimeInput definitions', function () {
      expect(theme.dateTimeInput).toBeDefined();
      expect(theme.dateTimeInput.container.round).toBeDefined();
      expect(theme.dateTimeInput.button.margin).toBeDefined();
      expect(theme.dateTimeInput.active.background).toBeDefined();
      expect(theme.dateTimeInput.active.indicator.color).toBeDefined();
      expect(theme.dateTimeInput.drop.border.size).toBeDefined();
      expect(theme.dateTimeInput.separator.pad).toBeDefined();
      expect(theme.dateTimeInput.icon.calendar).toBeDefined();
    });
    it('should have timeInput definitions', function () {
      expect(theme.timeInput).toBeDefined();
      expect(theme.timeInput.container.round).toBeDefined();
      expect(theme.timeInput.segment.pad.left).toBeDefined();
      expect(theme.timeInput.segment.active.background).toBeDefined();
      expect(theme.timeInput.segment.active.border.size).toBeDefined();
      expect(theme.timeInput.segment.active.border.color).toBeDefined();
      expect(theme.timeInput.drop.column.gap).toBeDefined();
      expect(theme.timeInput.drop.pad.horizontal).toBeDefined();
      expect(theme.timeInput.drop.option.container.pad.vertical).toBeDefined();
      expect(theme.timeInput.drop.option.container.round).toBeDefined();
      expect(theme.timeInput.drop.option.text.size).toBeDefined();
      expect(theme.timeInput.dropButton.icon).toBeDefined();
    });
  });
  describe('Color definitions', function () {
    it('should have text-strong color defined', function () {
      expect(theme.global.colors['text-strong']).toBeDefined();
    });
    it('should have focus color defined', function () {
      expect(theme.global.colors.focus).toBeDefined();
    });
    it('should have all required color keys', function () {
      var requiredColors = ['text', 'text-strong', 'focus', 'background', 'control'];
      requiredColors.forEach(function (color) {
        expect(theme.global.colors[color]).toBeDefined();
      });
    });
  });
  describe('Breakpoint definitions', function () {
    it('should have all required breakpoints', function () {
      var requiredBreakpoints = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
      requiredBreakpoints.forEach(function (bp) {
        expect(theme.global.breakpoints[bp]).toBeDefined();
        expect(typeof theme.global.breakpoints[bp]).toBe('object');
      });
    });
    it('should have breakpoint properties', function () {
      var breakpoints = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
      breakpoints.forEach(function (bp) {
        expect(theme.global.breakpoints[bp]).toBeDefined();
        // value is optional (xlarge omits it), but must be a number when present
        var value = theme.global.breakpoints[bp].value;
        if (value !== undefined) {
          expect(typeof value).toBe('number');
        }
      });
    });
    it('should use caller-provided global breakpoint for responsive heading styles', function () {
      var customTokens = _extends({}, tokens, {
        global: _extends({}, tokens.global, {
          hpe: _extends({}, tokens.global.hpe, {
            breakpoint: _extends({}, tokens.global.hpe.breakpoint, {
              small: '1234px'
            })
          })
        })
      });
      var customTheme = (0, _hpe.buildTheme)(customTokens, {
        'v6-backwards-compatibility': false
      });
      var responsiveStyle = customTheme.heading.extend({
        level: 1,
        responsive: true
      });
      expect(responsiveStyle).toContain('(max-width: 1234px)');
    });
  });
  describe('Spacing and sizing', function () {
    it('should have all edgeSize values', function () {
      var requiredSizes = ['none', 'hair', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
      requiredSizes.forEach(function (size) {
        expect(theme.global.edgeSize[size]).toBeDefined();
      });
    });
    it('should have borderSize values defined', function () {
      // Check that borderSize object exists and has at least some values
      expect(theme.global.borderSize).toBeDefined();
      expect(typeof theme.global.borderSize).toBe('object');
      // At least one size should be defined
      expect(Object.keys(theme.global.borderSize).length).toBeGreaterThan(0);
    });
  });
});