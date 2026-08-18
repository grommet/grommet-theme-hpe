"use strict";

exports.__esModule = true;
exports.buildDeprecations = void 0;
// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
var referenceColorDocumentationMessage = 'Please reference the HPE Design System color documentation (https://design-system.hpe.design/foundation/color) for a list of available colors';
var backgroundDeprecationMessage = function backgroundDeprecationMessage(background) {
  return "The background '" + background + "' is deprecated and will be removed in v10 to ensure access to the latest Brand assets. Please replace this key by referencing an image URL directly. You can find approved backgrounds within HPE Brand Central (https://brandcentral.hpe.com/brand-central/content/imagery).";
};
var colorRemovedDeprecationMessage = function colorRemovedDeprecationMessage(color, alt) {
  return "The color '" + color + "' is deprecated and will be removed in v10. " + (alt ? "Please use '" + alt + "' instead" : referenceColorDocumentationMessage) + ".";
};
var colorUndefinedDeprecationMessage = function colorUndefinedDeprecationMessage(color, future, alt) {
  return "The color '" + color + "' is deprecated and " + (future ? "will be set to 'undefined' in v10" : "its value is set to 'undefined'") + ". " + (alt ? "Please use '" + alt + "' instead" : referenceColorDocumentationMessage) + ".";
};
var deprecationEntry = function deprecationEntry(name, message) {
  return {
    name: name,
    message: message
  };
};
var buildDeprecations = exports.buildDeprecations = function buildDeprecations() {
  var backgrounds = ['datawave-green-1', 'datawave-green-2', 'datawave-multi-1', 'datawave-multi-2', 'datawave-multi-3', 'datawave-multi-4', 'datawave-multi-5', 'datawave-multi-6', 'datawave-white-1', 'datawave-white-2', 'datawave-white-3', 'datawave-white-4', 'light-shadow-1', 'light-shadow-2', 'light-shadow-3', 'light-shadow-4', 'orange-yellow', 'purple-blue', 'purple-blue-yellow', 'purple-magenta-yellow'].map(function (name) {
    return deprecationEntry(name, backgroundDeprecationMessage(name));
  });
  var buttonKinds = [{
    name: 'cta-primary',
    alt: 'primary'
  }, {
    name: 'cta-alternate',
    alt: 'secondary'
  }].map(function (_ref) {
    var name = _ref.name,
      alt = _ref.alt;
    return deprecationEntry(name, "The \"" + name + "\" button kind is deprecated and will be removed in v10. Please use \"" + alt + "\" instead.");
  });
  var colors = [].concat(['accent-1', 'accent-2', 'accent-3', 'accent-4', 'neutral-1', 'neutral-2', 'neutral-3', 'neutral-4', 'neutral-5', 'status-error'].map(function (name) {
    return deprecationEntry(name, colorUndefinedDeprecationMessage(name));
  }), [0, 1, 2, 3, 4, 5, 6, 7].map(function (i) {
    return deprecationEntry("graph-" + i, colorUndefinedDeprecationMessage("graph-" + i, true, "dataVis-categorical-" + (i + 1) * 10));
  }), [deprecationEntry('status-disabled', colorUndefinedDeprecationMessage('status-disabled', true, 'text-weak')), deprecationEntry('disabled-text', colorRemovedDeprecationMessage('disabled-text', 'text-disabled')), deprecationEntry('background-cta-alternate', colorRemovedDeprecationMessage('background-cta-alternate'))]);
  return {
    backgrounds: backgrounds,
    buttonKinds: buttonKinds,
    colors: colors
  };
};