/**
 * Codemod for migrating t-shirt size props from v6 to v7
 * Usage: node node_modules/grommet-theme-hpe/codemod <transform> <path>
 */

const SPACING_PROPS = ['gap', 'margin', 'pad'];
const BORDER_PROPS = ['border'];
const CONTAINER_PROPS = ['height', 'width'];
const RADIUS_PROPS = ['round'];

// maps for each category
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

// helper for compatibility with JS + TS parser
const isStringLiteral = (n) =>
  n &&
  ((n.type === 'Literal' && typeof n.value === 'string') ||
    n.type === 'StringLiteral');

//  pick correct map
const getMapForProp = (prop) => {
  if (SPACING_PROPS.includes(prop)) return MAPS.spacing;
  if (BORDER_PROPS.includes(prop)) return MAPS.border;
  if (CONTAINER_PROPS.includes(prop)) return MAPS.container;
  if (RADIUS_PROPS.includes(prop)) return MAPS.radius;
  return null;
};

const replaceSize = (prop, value) => {
  const map = getMapForProp(prop);
  if (!map) return value;

  const newValue = map[value] || value;

  // Show deprecation warnings for radius props
  if (
    RADIUS_PROPS.includes(prop) &&
    (value === 'large' || value === 'xlarge')
  ) {
    console.warn(
      `⚠️  DEPRECATION: radius="${value}" (${
        value === 'large' ? '48px' : '96px'
      }) is deprecated and now maps to "xxlarge" (32px).`
    );
  }

  // Show deprecation warnings for border props
  if (
    BORDER_PROPS.includes(prop) &&
    (value === 'large' || value === 'xlarge')
  ) {
    const oldSize = value === 'large' ? '12px' : '24px';
    console.warn(
      `⚠️  DEPRECATION: border="${value}" (${oldSize}) is deprecated and now maps to "large" (6px).`
    );
  }

  // Show deprecation warnings for container props
  if (CONTAINER_PROPS.includes(prop) && value === 'xlarge') {
    console.warn(
      `⚠️  DEPRECATION: ${prop}="${value}" (1152px) is deprecated and now maps to "xxlarge" (1024px).`
    );
  }

  return newValue;
};

export default (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Replace theme.global.edgeSize.xxx references
  root
    .find(j.MemberExpression, {
      object: {
        object: { object: { name: 'theme' }, property: { name: 'global' } },
        property: { name: 'edgeSize' },
      },
    })
    .forEach((path) => {
      const prop = path.node.property;

      // Only transform identifiers (e.g., theme.global.edgeSize.small)
      if (prop.type === 'Identifier') {
        const oldKey = prop.name;
        const newKey = MAPS.spacing[oldKey]; // spacing map applies here
        if (newKey && newKey !== oldKey) {
          if (/^\d/.test(newKey)) {
            // starts with a number → use bracket notation
            path.node.property = j.stringLiteral(newKey);
            path.node.computed = true; // theme.global.edgeSize['5xsmall']
          } else {
            // safe identifier
            path.node.property = j.identifier(newKey);
            path.node.computed = false;
          }
        }
      }

      // Literal or StringLiteral: theme.global.edgeSize['small']
      if (isStringLiteral(prop)) {
        const oldKey = prop.value;
        const newKey = MAPS.spacing[oldKey];
        if (newKey && newKey !== oldKey) {
          if (/^\d/.test(newKey)) {
            // starts with a number → use bracket notation
            // by setting computed to true, jscodeshift will convert to bracket notation
            // stringLiteral ensure it's a string type
            path.node.property = j.stringLiteral(newKey);
            path.node.computed = true;
          } else {
            // safe identifier → use dot notation
            // ensure consistency by explicity setting computed to false
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
      if (val && isStringLiteral(val)) {
        const newValue = replaceSize(prop, val.value);
        if (newValue !== val.value) {
          path.get('value').replace(j.stringLiteral(newValue));
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
          if (isStringLiteral(propNode.value)) {
            const oldValue = propNode.value.value;
            const newValue = replaceSize(prop, oldValue);
            if (newValue !== oldValue) {
              val.expression.properties[index] = j.property(
                'init',
                propNode.key,
                j.stringLiteral(newValue)
              );
            }
          }
        });
      }
    });
  });

  // Handle components with container size mapping (Meter, TableCell, Cards)
  ['Meter', 'TableCell', 'Cards'].forEach((componentName) => {
    root
      .find(j.JSXElement, {
        openingElement: {
          name: { name: componentName },
        },
      })
      .forEach((path) => {
        const attributes = path.node.openingElement.attributes;
        attributes.forEach((attr, index) => {
          if (attr.type === 'JSXAttribute' && attr.name.name === 'size') {
            if (attr.value && isStringLiteral(attr.value)) {
              const newValue =
                MAPS.container[attr.value.value] || attr.value.value;
              if (newValue !== attr.value.value) {
                attributes[index] = j.jsxAttribute(
                  j.jsxIdentifier('size'),
                  j.stringLiteral(newValue)
                );
              }
            }
          }
        });
      });
  });

  // Handle components with spacing size mapping (RangeSelector)
  ['RangeSelector'].forEach((componentName) => {
    root
      .find(j.JSXElement, {
        openingElement: {
          name: { name: componentName },
        },
      })
      .forEach((path) => {
        const attributes = path.node.openingElement.attributes;
        attributes.forEach((attr, index) => {
          if (attr.type === 'JSXAttribute' && attr.name.name === 'size') {
            if (attr.value && isStringLiteral(attr.value)) {
              const newValue =
                MAPS.spacing[attr.value.value] || attr.value.value;
              if (newValue !== attr.value.value) {
                attributes[index] = j.jsxAttribute(
                  j.jsxIdentifier('size'),
                  j.stringLiteral(newValue)
                );
              }
            }
          }
        });
      });
  });

  // Handle DataChart component size prop
  root
    .find(j.JSXElement, {
      openingElement: {
        name: { name: 'DataChart' },
      },
    })
    .forEach((path) => {
      const attributes = path.node.openingElement.attributes;
      attributes.forEach((attr, index) => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'size') {
          if (attr.value && isStringLiteral(attr.value)) {
            const newValue =
              MAPS.container[attr.value.value] || attr.value.value;
            if (newValue !== attr.value.value) {
              attributes[index] = j.jsxAttribute(
                j.jsxIdentifier('size'),
                j.stringLiteral(newValue)
              );
            }
          }

          // Handle object: <DataChart size={{ height: "small", width: "large" }} />
          if (
            attr.value &&
            attr.value.type === 'JSXExpressionContainer' &&
            attr.value.expression.type === 'ObjectExpression'
          ) {
            attr.value.expression.properties.forEach((propNode, propIndex) => {
              if (
                isStringLiteral(propNode.value) &&
                (propNode.key.name === 'height' ||
                  propNode.key.name === 'width')
              ) {
                const newValue =
                  MAPS.container[propNode.value.value] || propNode.value.value;
                if (newValue !== propNode.value.value) {
                  attr.value.expression.properties[propIndex] = j.property(
                    'init',
                    propNode.key,
                    j.stringLiteral(newValue)
                  );
                }
              }
            });
          }
        }
      });
    });

  // Handle Grid component columns and rows prop
  root
    .find(j.JSXElement, {
      openingElement: {
        name: { name: 'Grid' },
      },
    })
    .forEach((path) => {
      const attributes = path.node.openingElement.attributes;
      attributes.forEach((attr, index) => {
        if (
          attr.type === 'JSXAttribute' &&
          (attr.name.name === 'columns' || attr.name.name === 'rows')
        ) {
          // Handle string: <Grid columns="large" /> or <Grid rows="large" />
          if (attr.value && isStringLiteral(attr.value)) {
            const newValue =
              MAPS.container[attr.value.value] || attr.value.value;
            if (newValue !== attr.value.value) {
              attributes[index] = j.jsxAttribute(
                j.jsxIdentifier(attr.name.name),
                j.stringLiteral(newValue)
              );
            }
          }

          if (attr.value && attr.value.type === 'JSXExpressionContainer') {
            const expression = attr.value.expression;

            // Handle array: <Grid columns={["small", "large"]} /> or <Grid rows={["small", "large"]} />
            if (expression.type === 'ArrayExpression') {
              expression.elements.forEach((element, elemIndex) => {
                if (element && isStringLiteral(element)) {
                  const newValue =
                    MAPS.container[element.value] || element.value;
                  if (newValue !== element.value) {
                    expression.elements[elemIndex] = j.stringLiteral(newValue);
                  }
                }
              });
            }

            // Handle object: <Grid columns={{ count: "fit", size: "large" }} /> or <Grid rows={{ count: "fit", size: "large" }} />
            if (expression.type === 'ObjectExpression') {
              expression.properties.forEach((propNode, propIndex) => {
                if (
                  propNode.key &&
                  propNode.key.name === 'size' &&
                  isStringLiteral(propNode.value)
                ) {
                  const newValue =
                    MAPS.container[propNode.value.value] ||
                    propNode.value.value;
                  if (newValue !== propNode.value.value) {
                    expression.properties[propIndex] = j.property(
                      'init',
                      propNode.key,
                      j.stringLiteral(newValue)
                    );
                  }
                }
              });
            }
          }
        }
      });
    });

  return root.toSource();
};
