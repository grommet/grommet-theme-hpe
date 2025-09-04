/**
 * Codemod for migrating t-shirt size props from v6 to v7
 * Usage: node node_modules/grommet-theme-hpe/codemod <transform> <path>
 */

const SPACING_PROPS = ['gap', 'margin', 'pad', 'thickness'];
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

// pick correct map
const getMapForProp = (prop) => {
  if (SPACING_PROPS.includes(prop)) return MAPS.spacing;
  if (BORDER_PROPS.includes(prop)) return MAPS.border;
  if (CONTAINER_PROPS.includes(prop)) return MAPS.container;
  if (RADIUS_PROPS.includes(prop)) return MAPS.radius;
  return null;
};

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
      }) is deprecated and now maps to "xxlarge" (32px)${fileLocation}${lineLocation}.`
    );
  }

  // Show deprecation warnings for border props
  if (
    BORDER_PROPS.includes(prop) &&
    (value === 'large' || value === 'xlarge')
  ) {
    const oldSize = value === 'large' ? '12px' : '24px';
    console.warn(
      `⚠️  DEPRECATION: border="${value}" (${oldSize}) is deprecated and now maps to "large" (6px)${fileLocation}${lineLocation}.`
    );
  }

  // Show deprecation warnings for container props
  if (CONTAINER_PROPS.includes(prop) && value === 'xlarge') {
    console.warn(
      `⚠️  DEPRECATION: ${prop}="${value}" (1152px) is deprecated and now maps to "xxlarge" (1024px)${fileLocation}${lineLocation}.`
    );
  }

  return newValue;
};

const transformNestedObject = (objExpr, propName, j, fileInfo = {}) => {
  objExpr.properties.forEach((propNode) => {
    if (!propNode.value) return;
    if (isStringLiteral(propNode.value)) {
      const oldValue = propNode.value.value;
      const newValue = replaceSize(propName, oldValue, fileInfo);
      if (newValue !== oldValue) {
        propNode.value = j.stringLiteral(newValue);
      }
    } else if (propNode.value.type === 'ObjectExpression') {
      transformNestedObject(propNode.value, propName, j, fileInfo);
    }
  });
};

// Refactored handlers for nested pad, margin, round
const transformPropsWithPadMarginRound = (root, j, propNames, file) => {
  propNames.forEach((propName) => {
    root.find(j.JSXAttribute, { name: { name: propName } }).forEach((attrPath) => {
      const propValue = attrPath.node.value;
      if (
        propValue &&
        propValue.type === 'JSXExpressionContainer' &&
        propValue.expression.type === 'ObjectExpression'
      ) {
        propValue.expression.properties.forEach((propNode) => {
          // pad or margin
          if (
            propNode.type === 'Property' &&
            (propNode.key.name === 'pad' || propNode.key.name === 'margin')
          ) {
            if (isStringLiteral(propNode.value)) {
              const newValue = replaceSize(propNode.key.name, propNode.value.value, { file: file.path, line: propNode.loc?.start.line });
              if (newValue !== propNode.value.value) {
                propNode.value = j.stringLiteral(newValue);
              }
            } else if (propNode.value.type === 'ObjectExpression') {
              transformNestedObject(propNode.value, propNode.key.name, j, { file: file.path, line: propNode.value.loc?.start.line });
            }
          }
          // round
          if (
            propNode.type === 'Property' &&
            propNode.key.name === 'round'
          ) {
            if (isStringLiteral(propNode.value)) {
              const newValue = replaceSize('round', propNode.value.value, { file: file.path, line: propNode.loc?.start.line });
              if (newValue !== propNode.value.value) {
                propNode.value = j.stringLiteral(newValue);
              }
            } else if (propNode.value.type === 'ObjectExpression') {
              transformNestedObject(propNode.value, 'round', j, { file: file.path, line: propNode.value.loc?.start.line });
            }
          }
        });
      }
    });
  });
};

// Dedicated handler for itemProps (pad only)
const transformPropsWithPadOnly = (root, j, propNames, file) => {
  propNames.forEach((propName) => {
    root.find(j.JSXAttribute, { name: { name: propName } }).forEach((attrPath) => {
      const propValue = attrPath.node.value;
      if (
        propValue &&
        propValue.type === 'JSXExpressionContainer' &&
        propValue.expression.type === 'ObjectExpression'
      ) {
        propValue.expression.properties.forEach((propNode) => {
          if (
            propNode.type === 'Property' &&
            propNode.key.name === 'pad'
          ) {
            if (isStringLiteral(propNode.value)) {
              const newValue = replaceSize('pad', propNode.value.value, { file: file.path, line: propNode.loc?.start.line });
              if (newValue !== propNode.value.value) {
                propNode.value = j.stringLiteral(newValue);
              }
            } else if (propNode.value.type === 'ObjectExpression') {
              transformNestedObject(propNode.value, 'pad', j, { file: file.path, line: propNode.value.loc?.start.line });
            }
          }
        });
      }
    });
  });
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
        const newKey = MAPS.spacing[oldKey];
        if (newKey && newKey !== oldKey) {
          if (/^\d/.test(newKey)) {
            path.node.property = j.stringLiteral(newKey);
            path.node.computed = true;
          } else {
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
            path.node.property = j.stringLiteral(newKey);
            path.node.computed = true;
          } else {
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
        const newValue = replaceSize(prop, val.value, { file: file.path, line: path.node.loc?.start.line });
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
        transformNestedObject(val.expression, prop, j, { file: file.path, line: path.node.loc?.start.line });
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
                if (propNode.key && propNode.key.name === 'size') {
                  if (isStringLiteral(propNode.value)) {
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
                  
                  // Handle array: size: ["small", "flex"]
                  if (propNode.value.type === 'ArrayExpression') {
                    propNode.value.elements.forEach((element, elemIndex) => {
                      if (element && isStringLiteral(element)) {
                        const newValue =
                          MAPS.container[element.value] || element.value;
                        if (newValue !== element.value) {
                          propNode.value.elements[elemIndex] = j.stringLiteral(newValue);
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
  ['Chart', 'Meter'].forEach((componentName) => {
    root
      .find(j.JSXElement, {
        openingElement: { name: { name: componentName } },
      })
      .forEach((path) => {
        const attributes = path.node.openingElement.attributes;
        attributes.forEach((attr, index) => {
          if (attr.type === 'JSXAttribute' && attr.name.name === 'thickness') {
            if (attr.value && isStringLiteral(attr.value)) {
              const newValue =
                MAPS.spacing[attr.value.value] || attr.value.value;
              if (newValue !== attr.value.value) {
                attributes[index] = j.jsxAttribute(
                  j.jsxIdentifier('thickness'),
                  j.stringLiteral(newValue)
                );
              }
            }
          }
        });
      });
  });

  // Handle function parameter default values (e.g., const Component = ({ pad = 'small' }) => {})
  // Handle both regular functions and arrow functions
  const handleFunctionParams = (path) => {
    const params = path.node.params;
    if (params && params.length > 0) {
      params.forEach((param) => {
        if (param.type === 'ObjectPattern') {
          param.properties.forEach((prop) => {
            // Handle the correct AST structure: { pad = 'small' }
            if (prop.type === 'Property' && prop.value.type === 'AssignmentPattern') {
              const propName = prop.key.name;
              if (ALL_PROPS.includes(propName) && isStringLiteral(prop.value.right)) {
                const newValue = replaceSize(propName, prop.value.right.value, { file: file.path, line: prop.loc?.start.line });
                if (newValue !== prop.value.right.value) {
                  prop.value.right = j.stringLiteral(newValue);
                }
              }
            }
            // Keep the original logic for direct assignment patterns (less common)
            else if (prop.type === 'AssignmentPattern' && prop.left.type === 'Identifier') {
              const propName = prop.left.name;
              if (ALL_PROPS.includes(propName) && isStringLiteral(prop.right)) {
                const newValue = replaceSize(propName, prop.right.value, { file: file.path, line: prop.loc?.start.line });
                if (newValue !== prop.right.value) {
                  prop.right = j.stringLiteral(newValue);
                }
              }
            }
          });
        }
      });
    }
  };

  // Handle regular functions
  root.find(j.Function).forEach(handleFunctionParams);
  
  // Handle arrow functions
  root.find(j.ArrowFunctionExpression).forEach(handleFunctionParams);

  // Handle columns and rows when passed inside gridProps (e.g. <PageHeader gridProps={{ columns: { count: "fit", size: "large" } }} />)
  root.find(j.JSXAttribute, { name: { name: 'gridProps' } }).forEach((attrPath) => {
    const gridPropsValue = attrPath.node.value;
    if (
      gridPropsValue &&
      gridPropsValue.type === 'JSXExpressionContainer' &&
      gridPropsValue.expression.type === 'ObjectExpression'
    ) {
      gridPropsValue.expression.properties.forEach((gpProp) => {
        if (
          gpProp.type === 'Property' &&
          (gpProp.key.name === 'columns' || gpProp.key.name === 'rows')
        ) {
          const colRowValue = gpProp.value;
          // Handle string: gridProps={{ columns: "large" }}
          if (isStringLiteral(colRowValue)) {
            const newValue = MAPS.container[colRowValue.value] || colRowValue.value;
            if (newValue !== colRowValue.value) {
              gpProp.value = j.stringLiteral(newValue);
            }
          }
          // Handle array: gridProps={{ columns: ["small", "large"] }}
          else if (colRowValue.type === 'ArrayExpression') {
            colRowValue.elements.forEach((element, elemIndex) => {
              if (element && isStringLiteral(element)) {
                const newValue = MAPS.container[element.value] || element.value;
                if (newValue !== element.value) {
                  colRowValue.elements[elemIndex] = j.stringLiteral(newValue);
                }
              }
            });
          }
          // Handle object: gridProps={{ columns: { count: "fit", size: "large" } }}
          else if (colRowValue.type === 'ObjectExpression') {
            colRowValue.properties.forEach((propNode, propIndex) => {
              if (propNode.key && propNode.key.name === 'size') {
                if (isStringLiteral(propNode.value)) {
                  const newValue = MAPS.container[propNode.value.value] || propNode.value.value;
                  if (newValue !== propNode.value.value) {
                    colRowValue.properties[propIndex] = j.property(
                      'init',
                      propNode.key,
                      j.stringLiteral(newValue)
                    );
                  }
                }
                // Handle array: size: ["small", "flex"]
                if (propNode.value.type === 'ArrayExpression') {
                  propNode.value.elements.forEach((element, elemIndex) => {
                    if (element && isStringLiteral(element)) {
                      const newValue = MAPS.container[element.value] || element.value;
                      if (newValue !== element.value) {
                        propNode.value.elements[elemIndex] = j.stringLiteral(newValue);
                      }
                    }
                  });
                }
              }
            });
          }
        }
      });
    }
  });

  // Handle Diagram component connections prop for thickness
root
  .find(j.JSXElement, {
    openingElement: { name: { name: 'Diagram' } },
  })
  .forEach((path) => {
    const attributes = path.node.openingElement.attributes;
    attributes.forEach((attr) => {
      if (attr.type === 'JSXAttribute' && attr.name.name === 'connections') {
        // <Diagram connections={[ ... ]} />
        if (
          attr.value &&
          attr.value.type === 'JSXExpressionContainer' &&
          attr.value.expression.type === 'ArrayExpression'
        ) {
          attr.value.expression.elements.forEach((element) => {
            if (
              element &&
              element.type === 'ObjectExpression'
            ) {
              element.properties.forEach((propNode) => {
                if (
                  propNode.type === 'Property' &&
                  propNode.key.name === 'thickness' &&
                  isStringLiteral(propNode.value)
                ) {
                  const newValue = replaceSize('thickness', propNode.value.value, { file: file.path, line: propNode.loc?.start.line });
                  if (newValue !== propNode.value.value) {
                    propNode.value = j.stringLiteral(newValue);
                  }
                }
              });
            }
          });
        }
      }
    });
  });

  // Handle NameValueList nameProps and valueProps
root
  .find(j.JSXElement, {
    openingElement: { name: { name: 'NameValueList' } },
  })
  .forEach((path) => {
    const attributes = path.node.openingElement.attributes;
    attributes.forEach((attr) => {
      if (
        attr.type === 'JSXAttribute' &&
        (attr.name.name === 'nameProps' || attr.name.name === 'valueProps') &&
        attr.value &&
        attr.value.type === 'JSXExpressionContainer' &&
        attr.value.expression.type === 'ObjectExpression'
      ) {
        attr.value.expression.properties.forEach((propNode) => {
          if (
            propNode.type === 'Property' &&
            propNode.key.name === 'width'
          ) {
            if (isStringLiteral(propNode.value)) {
              const newValue = replaceSize(
                'width',
                propNode.value.value 
              );
              if (newValue !== propNode.value.value) {
                propNode.value = j.stringLiteral(newValue);
              }
            }
            else if (propNode.value.type === 'ArrayExpression') {
              propNode.value.elements.forEach((element, idx) => {
                if (element && isStringLiteral(element)) {
                  const newValue = replaceSize(
                    'width',
                    element.value,
                  );
                  if (newValue !== element.value) {
                    propNode.value.elements[idx] = j.stringLiteral(newValue);
                  }
                }
              });
            }
            else if (propNode.value.type === 'ObjectExpression') {
              propNode.value.properties.forEach((wProp) => {
                if (
                  wProp.type === 'Property' &&
                  (wProp.key.name === 'min' || wProp.key.name === 'max') &&
                  isStringLiteral(wProp.value)
                ) {
                  const newValue = replaceSize(
                    'width',
                    wProp.value.value,
                  );
                  if (newValue !== wProp.value.value) {
                    wProp.value = j.stringLiteral(newValue);
                  }
                }
              });
            }
          }
        });
      }
    });
  });

  // Refactored: handle dropProps, defaultItemProps, boxProp, buttonProps for pad, margin, round
  transformPropsWithPadMarginRound(root, j, [
    'dropProps',
    'defaultItemProps',
    'boxProp',
    'buttonProps',
  ], file);

  // Refactored: handle itemProps for pad only
  transformPropsWithPadOnly(root, j, ['itemProps'], file);

  // get --quote flag from options argument
  const quote = options.quote === 'single' ? 'single' : 'double';
  return root.toSource({ quote });
};