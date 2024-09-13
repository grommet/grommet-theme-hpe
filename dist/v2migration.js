"use strict";

exports.__esModule = true;
exports.v2migration = void 0;
/**
 * In the event your application relies on color names that have been deprecated, 
 * use this theme to restore the deprecated color names.
 * The following theme has transitional properties to 
 * mitigate the upgrade to the design-system theme, i.e. migrating from hpe
 * theme version ^1.0.0 to ^2.0.0
 * Using the v2migration interim theme support will help you avoid critical
 * and immediate breaking changes.
 *
 * How does it work?
 * After upgrading your official HPE theme to point to the new HPE
 * design-system theme 2.0.0 (via your package.json), 
 * copy the content of this file to your local theme file. 
 * Copying the content of this file will help you avoid immediate
 * breaking changes behavior (such as undefined colors)
 * However the main goal is for your theme to work independently without
 * this interim theme support.
 *
 */

var v2migration = exports.v2migration = {
  global: {
    colors: {
      // accent-1 will need to be replaced with either 'graph-0', 'graph-1', 'control', 'brand' and more generic colors.
      'accent-1': 'graph-0',
      // All accent and neutral colors should be replaced with 'graph-*', 'control', 'brand' colors,
      'accent-2': '#FD6FFF',
      'accent-3': '#81FCED',
      'accent-4': '#FFCA58',
      'neutral-1': '#00873D',
      'neutral-2': '#3D138D',
      'neutral-3': '#00739D',
      'neutral-4': '#A2423D',
      // Any references to status-error, should change to status-critical.
      'status-error': {
        dark: '#FC5A5A',
        light: '#D04F4E'
      }
    }
  }
};