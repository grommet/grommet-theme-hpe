"use strict";

exports.__esModule = true;
var _deepMerge = require("./deepMerge");
Object.keys(_deepMerge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _deepMerge[key]) return;
  exports[key] = _deepMerge[key];
});