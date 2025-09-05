/**
 * Codemod for migrating t-shirt size props from v6 to v7
 * Usage: node node_modules/grommet-theme-hpe/codemod <transform> <path>
 */

const SPACING_PROPS = ['gap', 'margin', 'pad'];
const BORDER_PROPS = ['border'];
const CONTAINER_PROPS = ['height', 'width'];
const RADIUS_PROPS = ['round'];
const OTHER_PROPS = ['nameProps', 'valueProps'];

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

// Recursively traverse and replace t-shirt sizes in complex data structures
// Handles arrays, objects, conditionals, logical expressions, etc.
const deepReplaceSize = (prop, node, fileInfo) => {
  if (!node) return node;

  // String literal
  if (isStringLiteral(node)) {
    const newValue = replaceSize(prop, node.value, fileInfo);
    if (newValue !== node.value) {
      node.value = newValue;
      node.raw = `'${newValue}'`;
    }
    return node;
  }
  if (node.type === 'ArrayExpression') {
    // Use container map for columns/rows arrays
    let arrayProp = prop;
    if (prop === 'columns' || prop === 'rows') arrayProp = 'width';
    node.elements = node.elements.map((el) =>
      deepReplaceSize(arrayProp, el, fileInfo),
    );
    return node;
  }

  // CallExpression - handle .includes() specially
  if (node.type === 'CallExpression') {
    // If this is a .includes() call, don't transform the array argument
    if (
      node.callee &&
      node.callee.type === 'MemberExpression' &&
      node.callee.property &&
      node.callee.property.name === 'includes'
    ) {
      // Don't transform the array (callee.object) or the arguments
      // Just return the node as-is
      return node;
    }
    // For other call expressions, transform arguments normally
    if (node.arguments) {
      node.arguments = node.arguments.map((arg) =>
        deepReplaceSize(prop, arg, fileInfo),
      );
    }
    return node;
  }

  // Object
  if (node.type === 'ObjectExpression') {
    node.properties.forEach((p) => {
      // Key-based mapping for container props (e.g., width, height)
      const keyName = p.key && (p.key.name || p.key.value);
      let valueProp = prop;
      if (CONTAINER_PROPS.includes(keyName)) valueProp = keyName;
      if (p.value) p.value = deepReplaceSize(valueProp, p.value, fileInfo);
    });
    return node;
  }
  // Conditional
  if (node.type === 'ConditionalExpression') {
    node.consequent = deepReplaceSize(prop, node.consequent, fileInfo);
    node.alternate = deepReplaceSize(prop, node.alternate, fileInfo);
    return node;
  }
  // Logical expression (e.g., a && 'small')
  if (node.type === 'LogicalExpression') {
    node.left = deepReplaceSize(prop, node.left, fileInfo);
    node.right = deepReplaceSize(prop, node.right, fileInfo);
    return node;
  }
  // MemberExpression (e.g., pad.small)
  if (node.type === 'MemberExpression') {
    node.object = deepReplaceSize(prop, node.object, fileInfo);
    node.property = deepReplaceSize(prop, node.property, fileInfo);
    return node;
  }
  // Identifier
  return node;
};

// Determine which size mapping to use based on the prop name
const getMapForProp = (prop) => {
  if (SPACING_PROPS.includes(prop)) return MAPS.spacing;
  if (BORDER_PROPS.includes(prop)) return MAPS.border;
  if (CONTAINER_PROPS.includes(prop) || prop === 'columns' || prop === 'rows')
    return MAPS.container;
  if (RADIUS_PROPS.includes(prop)) return MAPS.radius;
  return null;
};

// Helper to get file information for error reporting
const getFileInfo = (file, node) => ({
  file: file.path,
  line: node.loc ? node.loc.start.line : undefined,
});

// Replaces old size with new size and shows deprecation warnings with file location
const replaceSize = (prop, value, fileInfo = {}) => {
  const map = getMapForProp(prop);
  if (!map) return value;

  const newValue = map[value] || value;

  const fileLocation = fileInfo.file ? ` in ${fileInfo.file}` : '';
  const lineLocation = fileInfo.line ? ` at line ${fileInfo.line}` : '';

  // Show deprecation warnings for radius props
  if (
    RADIUS_PROPS.includes(prop) &&
    (value === 'large' || value === 'xlarge')
  ) {
    console.warn(
      `⚠️  DEPRECATION: radius="${value}" (${
        value === 'large' ? '48px' : '96px'
      }) is deprecated and now maps to "xxlarge" (32px)${fileLocation}${lineLocation}.`,
    );
  }

  // Show deprecation warnings for border props
  if (
    BORDER_PROPS.includes(prop) &&
    (value === 'large' || value === 'xlarge')
  ) {
    const oldSize = value === 'large' ? '12px' : '24px';
    console.warn(
      `⚠️  DEPRECATION: border="${value}" (${oldSize}) is deprecated and now maps to "large" (6px)${fileLocation}${lineLocation}.`,
    );
  }

  // Show deprecation warnings for container props
  if (CONTAINER_PROPS.includes(prop) && value === 'xlarge') {
    console.warn(
      `⚠️  DEPRECATION: ${prop}="${value}" (1152px) is deprecated and now maps to "xxlarge" (1024px)${fileLocation}${lineLocation}.`,
    );
  }

  return newValue;
};

export default (file, api, options) => {
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
    ...OTHER_PROPS,
    // Add special container props that can contain pad, margin, round, height, width
    'dropProps',
    'defaultItemProps',
    'boxProp',
    'buttonProps',
    'paginate',
    'contentProps',
  ];

  // Replace string literal, object, array, and conditional props (deep traversal)
  ALL_PROPS.forEach((prop) => {
    root.find(j.JSXAttribute, { name: { name: prop } }).forEach((path) => {
      const val = path.node.value;
      if (val) {
        const fileInfo = getFileInfo(file, path.node);

        // Handle special container props differently
        const isSpecialContainer = [
          'dropProps',
          'defaultItemProps',
          'boxProp',
          'buttonProps',
          'paginate',
          'contentProps',
        ].includes(prop);

        // String literal
        if (isStringLiteral(val) && !isSpecialContainer) {
          const newValue = replaceSize(prop, val.value, fileInfo);
          if (newValue !== val.value) {
            path.get('value').replace(j.stringLiteral(newValue));
          }
        }

        // Deep traverse expression containers
        if (val.type === 'JSXExpressionContainer') {
          if (isSpecialContainer) {
            // For special containers, only transform nested pad, margin, round, height, width
            if (val.expression.type === 'ObjectExpression') {
              val.expression.properties.forEach((propNode) => {
                if (propNode.type === 'Property') {
                  const keyName =
                    propNode.key && (propNode.key.name || propNode.key.value);

                  // Only transform specific nested properties
                  if (
                    ['pad', 'margin', 'round', 'height', 'width'].includes(
                      keyName,
                    )
                  ) {
                    if (isStringLiteral(propNode.value)) {
                      const newValue = replaceSize(
                        keyName,
                        propNode.value.value,
                        fileInfo,
                      );
                      if (newValue !== propNode.value.value) {
                        propNode.value = j.stringLiteral(newValue);
                      }
                    } else {
                      // Handle complex structures (arrays, objects, conditionals)
                      propNode.value = deepReplaceSize(
                        keyName,
                        propNode.value,
                        fileInfo,
                      );
                    }
                  }
                }
              });
            }
          } else {
            val.expression = deepReplaceSize(prop, val.expression, fileInfo);
          }
        }
      }
    });
  });

  // Replace variable assignments and array/string/object literals
  root.find(j.VariableDeclarator).forEach((path) => {
    const { id } = path.node;
    const { init } = path.node;
    // Only handle variables named after known props or common names (pad, columns, rows, etc.)
    const varNames = [
      ...ALL_PROPS,
      'columns',
      'rows',
      'thickness',
      'size',
      'width',
      'height',
      'round',
      'nameProps',
      'valueProps',
    ];
    let prop = null;
    if (id.type === 'Identifier' && varNames.includes(id.name)) {
      prop = id.name;
    }
    // For destructured assignment: const { pad } = ...
    if (id.type === 'ObjectPattern') {
      id.properties.forEach((p) => {
        if (p.key && varNames.includes(p.key.name)) {
          prop = p.key.name;
        }
      });
    }
    if (prop && init) {
      const fileInfo = getFileInfo(file, path.node);
      path.node.init = deepReplaceSize(prop, init, fileInfo);
    }
  });

  // Replace assignment expressions (e.g., pad = ...)
  root.find(j.AssignmentExpression).forEach((path) => {
    const { left } = path.node;
    const { right } = path.node;
    const varNames = [
      ...ALL_PROPS,
      'columns',
      'rows',
      'thickness',
      'size',
      'width',
      'height',
      'round',
      'nameProps',
    ];
    let prop = null;
    if (left.type === 'Identifier' && varNames.includes(left.name)) {
      prop = left.name;
    }
    if (prop && right) {
      const fileInfo = getFileInfo(file, path.node);
      path.node.right = deepReplaceSize(prop, right, fileInfo);
    }
  });

  // Handle components with container size mapping (Meter, TableCell, Cards)
  //  test -> <Chart size="small" />
  ['Meter', 'TableCell', 'Cards', 'DataCahrt', 'Chart'].forEach(
    (componentName) => {
      root
        .find(j.JSXElement, {
          openingElement: {
            name: { name: componentName },
          },
        })
        .forEach((path) => {
          const { attributes } = path.node.openingElement;
          attributes.forEach((attr, index) => {
            if (attr.type === 'JSXAttribute' && attr.name.name === 'size') {
              if (attr.value && isStringLiteral(attr.value)) {
                const newValue =
                  MAPS.container[attr.value.value] || attr.value.value;
                if (newValue !== attr.value.value) {
                  attributes[index] = j.jsxAttribute(
                    j.jsxIdentifier('size'),
                    j.stringLiteral(newValue),
                  );
                }
              }
            }
          });
        });
    },
  );

  // Handle components with spacing size mapping (RangeSelector)
  ['RangeSelector'].forEach((componentName) => {
    root
      .find(j.JSXElement, {
        openingElement: {
          name: { name: componentName },
        },
      })
      .forEach((path) => {
        const { attributes } = path.node.openingElement;
        attributes.forEach((attr, index) => {
          if (attr.type === 'JSXAttribute' && attr.name.name === 'size') {
            if (attr.value && isStringLiteral(attr.value)) {
              const newValue =
                MAPS.spacing[attr.value.value] || attr.value.value;
              if (newValue !== attr.value.value) {
                attributes[index] = j.jsxAttribute(
                  j.jsxIdentifier('size'),
                  j.stringLiteral(newValue),
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
      const { attributes } = path.node.openingElement;
      attributes.forEach((attr, index) => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'size') {
          if (attr.value && isStringLiteral(attr.value)) {
            const newValue =
              MAPS.container[attr.value.value] || attr.value.value;
            if (newValue !== attr.value.value) {
              attributes[index] = j.jsxAttribute(
                j.jsxIdentifier('size'),
                j.stringLiteral(newValue),
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
                    j.stringLiteral(newValue),
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
      const { attributes } = path.node.openingElement;
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
                j.stringLiteral(newValue),
              );
            }
          }

          if (attr.value && attr.value.type === 'JSXExpressionContainer') {
            const { expression } = attr.value;

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
                if (propNode.key && propNode.key.name === 'size') {
                  if (isStringLiteral(propNode.value)) {
                    const newValue =
                      MAPS.container[propNode.value.value] ||
                      propNode.value.value;
                    if (newValue !== propNode.value.value) {
                      expression.properties[propIndex] = j.property(
                        'init',
                        propNode.key,
                        j.stringLiteral(newValue),
                      );
                    }
                  }

                  // Handle array: size: ["small", "flex"]
                  if (propNode.value.type === 'ArrayExpression') {
                    propNode.value.elements.forEach((element, elemIndex) => {
                      if (element && isStringLiteral(element)) {
                        const newValue =
                          MAPS.container[element.value] || element.value;
                        if (newValue !== element.value) {
                          propNode.value.elements[elemIndex] =
                            j.stringLiteral(newValue);
                        }
                      }
                    });
                  }
                }
              });
            }
          }
        }
      });
    });

  // Handle Chart and Meter component thickness prop
  // test -> <Meter thickness="small" />
  ['Chart', 'Meter'].forEach((componentName) => {
    root
      .find(j.JSXElement, {
        openingElement: { name: { name: componentName } },
      })
      .forEach((path) => {
        const { attributes } = path.node.openingElement;
        attributes.forEach((attr, index) => {
          if (attr.type === 'JSXAttribute' && attr.name.name === 'thickness') {
            if (attr.value && isStringLiteral(attr.value)) {
              const newValue =
                MAPS.spacing[attr.value.value] || attr.value.value;
              if (newValue !== attr.value.value) {
                attributes[index] = j.jsxAttribute(
                  j.jsxIdentifier('thickness'),
                  j.stringLiteral(newValue),
                );
              }
            }
          }
        });
      });
  });

  // Transform default parameter values for both arrow and function declarations
  root.find(j.AssignmentPattern).forEach((path) => {
    const { left } = path.node;
    const { right } = path.node;
    if (
      left.type === 'Identifier' &&
      ALL_PROPS.includes(left.name) &&
      isStringLiteral(right)
    ) {
      const fileInfo = getFileInfo(file, path.node);
      const newValue = replaceSize(left.name, right.value, fileInfo);
      if (newValue !== right.value) {
        path.node.right = j.stringLiteral(newValue);
      }
    } else if (left.type === 'Identifier' && ALL_PROPS.includes(left.name)) {
      const fileInfo = getFileInfo(file, path.node);
      path.node.right = deepReplaceSize(left.name, right, fileInfo);
    }
  });

  // get --quote flag from options argument
  const quote = options.quote === 'single' ? 'single' : 'double';
  return root.toSource({ quote });
};
