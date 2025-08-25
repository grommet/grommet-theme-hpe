/**
 * Codemod for migrating t-shirt size props from v6 to v7
 * Usage: jscodeshift -t migrate-tshirt-sizes.js <path>
 */

// each category will be taken care of

const SIZE_MAP = {
  xxsmall: '5xsmall',
  xsmall: '3xsmall',
  small: 'xsmall',
  medium: 'medium',
  large: 'xlarge',
  xlarge: '3xlarge',
};

const PROPS = ['pad', 'margin', 'gap', 'round', 'border', 'size'];
// const includeComponent = [''];

function replaceSize(value) {
  return SIZE_MAP[value] || value;
}

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Replace string literal props
  PROPS.forEach((prop) => {
    root.find(j.JSXAttribute, { name: { name: prop } }).forEach((path) => {
      const val = path.node.value;
      if (val && val.type === 'Literal' && typeof val.value === 'string') {
        const newValue = replaceSize(val.value);
        if (newValue !== val.value) {
          path.get('value').replace(j.literal(newValue));
        }
      }
    });
  });

  // Replace object props (e.g., pad={{ horizontal: 'small', vertical: 'large' }})
  PROPS.forEach((prop) => {
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
            const newValue = replaceSize(propNode.value.value);
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
