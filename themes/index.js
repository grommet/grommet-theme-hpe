"use strict";

exports.__esModule = true;
var _exportNames = {
  hpe: true
};
exports.hpe = void 0;
var _audit = require("./audit");
exports.hpe = _audit.audit;
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
Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _colors[key]) return;
  exports[key] = _colors[key];
});
var _prism = require("./prism");
Object.keys(_prism).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _prism[key]) return;
  exports[key] = _prism[key];
});