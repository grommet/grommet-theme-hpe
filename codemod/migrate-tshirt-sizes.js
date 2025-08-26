/**
 * Codemod for migrating t-shirt size props from v6 to v7
 * Usage: jscodeshift -t migrate-tshirt-sizes.js <path>
 */

// are we missing any props here?
const SPACING_PROPS = ['gap', 'margin', 'pad'];
// “size” on Grid object and box border size, but not on other components
// need to ask Taylor about this box border size
const BORDER_PROPS = ['border'];
const CONTAINER_PROPS = ['height', 'width'];
const RADIUS_PROPS = ['round', 'radius'];

// each category will be taken care of
const MAPS = {
  spacing: {
    xxsmall: '5xsmall',
    xsmall: '3xsmall',
    small: 'xsmall',
    large: 'xlarge',
    xlarge: '3xlarge',
  },
  border: {
    xlarge: 'large',
  },
  container: {
    xxsmall: '5xsmall',
    xsmall: '3xsmall',
    small: 'xsmall',
    large: 'xlarge',
    xlarge: 'xxlarge',
    xxlarge: '3xlarge',
  },
  radius: {
    small: 'medium',
    medium: 'xlarge',
    large: 'xxlarge',
    xlarge: 'xxlarge',
  },
};

//  pick correct map
function getMapForProp(prop) {
  if (SPACING_PROPS.includes(prop)) return MAPS.spacing;
  if (BORDER_PROPS.includes(prop)) return MAPS.border;
  if (CONTAINER_PROPS.includes(prop)) return MAPS.container;
  if (RADIUS_PROPS.includes(prop)) return MAPS.radius;
  return null;
}

function replaceSize(prop, value) {
  const map = getMapForProp(prop);
  if (!map) return value;
  
  const newValue = map[value] || value;
  
  // Show deprecation warnings for radius props
  if (RADIUS_PROPS.includes(prop) && (value === 'large' || value === 'xlarge')) {
    console.warn(`⚠️  DEPRECATION: radius="${value}" (${value === 'large' ? '48px' : '96px'}) is deprecated and now maps to "xxlarge" (32px). Consider reviewing this design change.`);
  }
  
  return newValue;
}

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Replace theme.global.edgeSize.xxx references
root.find(j.MemberExpression, {
  object: {
    object: { object: { name: 'theme' }, property: { name: 'global' } },
    property: { name: 'edgeSize' },
  },
}).forEach((path) => {
  const prop = path.node.property;

  // Only transform identifiers (e.g., theme.global.edgeSize.small)
  if (prop.type === 'Identifier') {
    const oldKey = prop.name;
    const newKey = MAPS.spacing[oldKey]; // spacing map applies here
    if (newKey && newKey !== oldKey) {
      if (/^\d/.test(newKey)) {
        // starts with a number → use bracket notation
        path.node.property = j.literal(newKey);
        path.node.computed = true; // theme.global.edgeSize['5xsmall']
      } else {
        // safe identifier
        path.node.property = j.identifier(newKey);
      }
    }
  }

  // Also handle string literals: theme.global.edgeSize['small']
  if (prop.type === 'Literal' && typeof prop.value === 'string') {
    const oldKey = prop.value;
    const newKey = MAPS.spacing[oldKey];
    if (newKey && newKey !== oldKey) {
      if (/^\d/.test(newKey)) {
        // starts with a number → use bracket notation
        path.node.property = j.literal(newKey);
        path.node.computed = true;
      } else {
        // safe identifier → use dot notation
        path.node.property = j.identifier(newKey);
        path.node.computed = false;
      }
    }
  }
});

  const ALL_PROPS = [
    ...SPACING_PROPS,
    ...BORDER_PROPS,
    ...CONTAINER_PROPS,
    ...RADIUS_PROPS,
  ];

  // Replace string literal props
  ALL_PROPS.forEach((prop) => {
    root.find(j.JSXAttribute, { name: { name: prop } }).forEach((path) => {
      const val = path.node.value;
      if (val && val.type === 'Literal' && typeof val.value === 'string') {
        const newValue = replaceSize(prop, val.value);
        if (newValue !== val.value) {
          path.get('value').replace(j.literal(newValue));
        }
      }
    });
  });

  // Replace object props (e.g., pad={{ horizontal: 'small', vertical: 'large' }})
  ALL_PROPS.forEach((prop) => {
    root.find(j.JSXAttribute, { name: { name: prop } }).forEach((path) => {
      const val = path.node.value;
      if (
        val &&
        val.type === 'JSXExpressionContainer' &&
        val.expression.type === 'ObjectExpression'
      ) {
        val.expression.properties.forEach((propNode, index) => {
          if (
            propNode.value.type === 'Literal' &&
            typeof propNode.value.value === 'string'
          ) {
            const newValue = replaceSize(prop, propNode.value.value);
            if (newValue !== propNode.value.value) {
              val.expression.properties[index] = j.property(
                'init',
                propNode.key,
                j.literal(newValue),
              );
            }
          }
        });
      }
    });
  });

  return root.toSource();
};
