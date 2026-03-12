// (C) Copyright 2024 Hewlett Packard Enterprise Development LP
import {
  primitives as localPrimitives,
  dark as localDark,
  light as localLight,
  dimensionCompact as localDimension,
  dimensionCompactSmall as localSmall,
  global as localGlobal,
  components as localComponents,
} from 'hpe-design-tokens/grommet';

import { buildTheme } from '../utils/buildTheme';

export const hpeCompact = buildTheme(
  {
    primitives: localPrimitives,
    light: localLight,
    dark: localDark,
    small: localSmall,
    large: localDimension,
    global: localGlobal,
    components: localComponents,
  },
  {
    // For grommet-theme-hpe v6.0.0, maintain backwards compatibility
    // with old t-shirt sizes
    'v6-backwards-compatibility': false,
  },
);
