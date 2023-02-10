"use strict";

exports.__esModule = true;
var _themes = require("./themes");
Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _themes[key]) return;
  exports[key] = _themes[key];
});