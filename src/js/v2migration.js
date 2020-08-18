/**
 * The following theme has transitional properties to
 * mitigate the upgrade to the design-system theme, i.e. migrating from hpe
 * theme version ^1.0.0 to ^2.0.0
 * Using the v2migration interim theme support will help you avoid critical
 * and immediate breaking changes.
 *
 * How does it work?
 * Copy the content of the interimTheme file to your local theme file
 * and update your official HPE theme to point to the new HPE
 * design-system theme (via your package.json).
 * Copying the content of this file will help you avoid immediate
 * breaking changes behavior.
 * However the main goal is for your theme to work independently without
 * this interim theme support.
 *
 */

export const v2migration = {
  global: {
    colors: {
      // accent-1 used to be the focus color, use 'green' color instead.
      'accent-1': '#6FFFB0',
      // All accent and neutral colors should be replaced with 'graph-*' colors,
      // or with the branded HPE colors from the design-system
      // theme (grommet-theme-hpe v2).
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
        light: '#D04F4E',
      },
    },
  },
};
