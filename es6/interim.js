/**
 * The following theme has transitional properties to
 * mitigate the upgrade to the design-system theme.
 * Using the interim theme will help you avoid critical
 * and immediate breaking changes.
 *
 * How does it work?
 * Copy the content of the interimTheme file to your local theme file
 * and update your official HPE theme to point to the new HPE
 * design-system theme (via your package.json).
 * Copying the content of this file will help you avoid immediate
 * breaking changes behavior.
 * However the main goal is for your theme to work independently without
 * the interim file support.
 *
 */
export var interimTheme = {
  global: {
    colors: {
      'accent-1': '#6FFFB0',
      'accent-2': '#FD6FFF',
      'accent-3': '#81FCED',
      'accent-4': '#FFCA58',
      'neutral-1': '#00873D',
      'neutral-2': '#3D138D',
      'neutral-3': '#00739D',
      'neutral-4': '#A2423D'
    }
  }
};