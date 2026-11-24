"use strict";

var _hpe = require("../../themes/hpe");
var _hpePop = require("../../themes/hpePop");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
describe('Pop button styling', function () {
  describe.each([false, true])('dark: %s', function (dark) {
    it.each([['primary', false, false], ['primary', true, false], ['primary', false, true], ['cta-primary', false, false]])('inherits HPE colors for %s (disabled: %s, active: %s)', function (kind, disabled, active) {
      var props = {
        theme: _extends({}, _hpePop.hpePop, {
          dark: dark
        }),
        sizeProp: 'small',
        kind: kind,
        disabled: disabled,
        active: active
      };
      expect(_hpePop.hpePop.button.extend(props)).toBe(_hpe.hpe.button.extend(props));
    });
  });
  it('preserves Pop sizing alongside the inherited primary hover styling', function () {
    var props = {
      theme: _extends({}, _hpePop.hpePop, {
        dark: false
      }),
      sizeProp: 'large',
      kind: 'primary'
    };
    expect(_hpePop.hpePop.button.extend(props)).toBe(_hpe.hpe.button.extend(props) + "font-size: 1.5rem; line-height: 1.75rem;");
  });
});