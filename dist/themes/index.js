"use strict";
// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0

'use client';

exports.__esModule = true;
var _exportNames = {
  hpe: true,
  colors: true,
  prism: true
};
exports.prism = exports.hpe = exports.colors = void 0;
var _hpe = require("./hpe");
exports.hpe = _hpe.hpe;
var _hpePop = require("./hpePop");
Object.keys(_hpePop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hpePop[key]) return;
  exports[key] = _hpePop[key];
});
var _backgrounds = require("./backgrounds");
Object.keys(_backgrounds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _backgrounds[key]) return;
  exports[key] = _backgrounds[key];
});
var _colors = require("./colors");
exports.colors = _colors.colors;
var _prism = require("./prism");
exports.prism = _prism.prism;