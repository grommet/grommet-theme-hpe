"use strict";
'use client';

exports.__esModule = true;
var _hpe = require("./hpe");
Object.keys(_hpe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hpe[key]) return;
  exports[key] = _hpe[key];
});
var _hpePop = require("./hpePop");
Object.keys(_hpePop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hpePop[key]) return;
  exports[key] = _hpePop[key];
});
var _backgrounds = require("./backgrounds");
Object.keys(_backgrounds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _backgrounds[key]) return;
  exports[key] = _backgrounds[key];
});
var _colors = require("./colors");
Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _colors[key]) return;
  exports[key] = _colors[key];
});
var _prism = require("./prism");
Object.keys(_prism).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _prism[key]) return;
  exports[key] = _prism[key];
});