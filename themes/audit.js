"use strict";

exports.__esModule = true;
exports.audit = void 0;
var _hpe = require("./hpe");
var _utils = require("../utils");
var flatten = function flatten(obj, parent) {
  var flattened = {};
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flatten(value, key));
    } else {
      flattened[parent + key] = value;
    }
  });
  return flattened;
};
var _hpe$global = _hpe.hpe.global,
  backgrounds = _hpe$global.backgrounds,
  colors = _hpe$global.colors;
var backgroundTokens = Object.keys(backgrounds);
var colorTokens = Object.keys(colors);
var colorValues = Object.values(flatten(colors)).reduce(function (previous, current) {
  if (current && !previous.includes(current)) {
    previous.push(current);
  }
  return previous;
}, []).sort();
function isColorToken(value) {
  var result;
  if (typeof value === 'string') {
    result = colorTokens.includes(value) || colorValues.includes(value) || ['none', 'transparent'].includes(value);
  } else if (typeof value === 'object' && value.color) {
    result = isColorToken(value.color);
  } else if (value.dark && value.light) {
    result = isColorToken(value.dark) && isColorToken(value.light);
  }
  return result;
}
var isBackgroundToken = function isBackgroundToken(value) {
  return backgroundTokens.includes(value);
};
var borderValues = ['top', 'right', 'bottom', 'left', 'vertical', 'horizontal'];
var legendColors = {
  backgroundToken: colors.purple.light + "40",
  buttonToken: colors.blue.light,
  colorProp: colors.teal.light + "40",
  colorToken: colors.teal.dark + "40",
  sizeProp: colors.orange.light + "40",
  weightProp: colors.yellow.light + "40",
  styleProp: colors.red.light + "40"
};
var legend = {
  anchor: {
    'color value': {
      rule: function rule(props) {
        return props.colorProp;
      },
      highlight: "background-color: " + legendColors.colorProp + ";",
      issue: "color value is set by prop rather than theme",
      resolution: ""
    },
    'size override': {
      rule: function rule(props) {
        return props.size;
      },
      highlight: "background-color: " + legendColors.sizeProp + ";",
      issue: "size value is set by prop; instead size should be inherited from its parent",
      resolution: ""
    },
    'weight override': {
      rule: function rule(props) {
        return props.weight;
      },
      highlight: "background-color: " + legendColors.weightProp + ";",
      issue: "weight value is set by prop rather than theme",
      resolution: ""
    }
  },
  box: {
    'border design token': {
      rule: function rule(props) {
        return props.border && isColorToken(props.border) === false && !borderValues.includes(props.border);
      },
      highlight: "border: " + legendColors.colorToken + " 2px dotted;",
      issue: "Color override - border value is not a design token color.",
      resolution: ""
    },
    'background design token': {
      rule: function rule(props) {
        return props.background && isColorToken(props.background) === false && isBackgroundToken(props.background) === false;
      },
      highlight: "\n        background-color: " + legendColors.backgroundToken + ";\n        border: " + legendColors.colorToken + " dotted 2px;\n      ",
      issue: "background value is not a design token color or background",
      resolution: ""
    }
  },
  button: {
    'color value': {
      rule: function rule(props) {
        return props.colorValue;
      },
      highlight: "\n        border: " + legendColors.colorProp + " dotted 2px;\n      ",
      issue: "Button color - color value is set by prop rather than theme",
      resolution: ""
    },
    'custom button': {
      rule: function rule(props) {
        var _props$className, _props$className2;
        return !props.hasIcon && !props.hasLabel && !((_props$className = props.className) != null && _props$className.includes('Header')) || props.plain && ((_props$className2 = props.className) == null ? void 0 : _props$className2.includes('Header')) === false;
      },
      highlight: "\n        border: " + legendColors.buttonToken + " dotted 2px;\n      ",
      issue: "Custom button - button is not a button supplied by the hpe theme.",
      resolution: ""
    }
  },
  heading: {
    'color value': {
      rule: function rule(props) {
        return props.colorProp;
      },
      highlight: "\n        background-color: " + legendColors.colorProp + ";\n    ",
      issue: "Heading override - color value is set by prop rather than theme.",
      resolution: ""
    },
    'size value': {
      rule: function rule(props) {
        return props.size && props.size !== 'medium';
      },
      highlight: "\n        background-color: " + legendColors.sizeProp + ";\n    ",
      issue: "Heading override - size value is set by prop rather than theme.",
      resolution: ""
    },
    'weight value': {
      rule: function rule(props) {
        return props.weight;
      },
      highlight: "\n        background-color: " + legendColors.weightProp + ";\n    ",
      issue: "Heading override - weight value is set by prop rather than theme.",
      resolution: ""
    }
  },
  paragraph: {
    'color value': {
      rule: function rule(props) {
        return props.colorProp;
      },
      highlight: "\n        background-color: " + legendColors.colorProp + ";\n    ",
      issue: "color value is set by prop rather than theme",
      resolution: ""
    },
    'color design token': {
      rule: function rule(props) {
        return props.colorProp && !isColorToken(props.colorProp);
      },
      highlight: "\n        background-color: " + legendColors.colorToken + ";\n    ",
      issue: "color value is not a design token color",
      resolution: ""
    },
    'size value': {
      rule: function rule(props) {
        return props.size && props.size !== 'medium';
      },
      highlight: "\n        background-color: " + legendColors.sizeProp + ";\n    ",
      issue: "Size override - size value is set by prop rather than theme.",
      resolution: ""
    },
    'weight value': {
      rule: function rule(props) {
        return props.weight;
      },
      highlight: "\n        background-color: " + legendColors.weightProp + ";\n    ",
      issue: "weight value is set by prop rather than theme",
      resolution: "remove weight prop and use default weight provided by the HPE theme."
    }
  },
  text: {
    // 'color value': {
    //   rule: props => props.colorProp,
    //   highlight: `
    //     background-color: ${legendColors.colorProp};
    // `,
    //   issue: `Color override - color value is set by prop rather than theme.`,
    //   resolution: ``,
    // },
    'color design token': {
      rule: function rule(props) {
        return props.colorProp && !isColorToken(props.colorProp);
      },
      highlight: "\n        background-color: " + legendColors.colorToken + ";\n    ",
      issue: "Color override - color value is not a design token color.",
      resolution: ""
    },
    'size value': {
      rule: function rule(props) {
        return props.size && props.size !== 'medium';
      },
      highlight: "\n        background-color: " + legendColors.sizeProp + ";\n    ",
      issue: "Size override - size value is set by prop rather than theme.",
      resolution: ""
    },
    'weight value': {
      rule: function rule(props) {
        return props.weight;
      },
      highlight: "\n        background-color: " + legendColors.weightProp + ";\n    ",
      issue: "Weight override - weight value is set by prop rather than theme",
      resolution: "remove weight prop and use default weight provided by the HPE theme."
    }
  },
  styleProp: {
    highlight: "\n      background-color: " + legendColors.styleProp + " !important;\n    ",
    issue: "Inline style override - Style prop is present on the component. \n    Inline styles override styling provided by the HPE theme."
  }
};
var annotation = function annotation(issue) {
  return "\n  :after { \n    display: flex;\n    content: '" + issue + "';\n    background-color: " + colors['background-contrast'].light + ";\n    border-radius: 0.5em;\n    color: " + colors.text.light + ";\n    font-size: 16px;\n    margin: 6px;\n    padding: 6px 12px;\n    max-width: 100%;\n    width: fit-content;\n  }\n";
};
var runAudit = function runAudit(component, props, options) {
  if (options === void 0) {
    options = true;
  }
  var result = [];
  var showAnnotations = Object.hasOwn(options, 'issue') ? options.issue : options;
  if (legend[component]) {
    Object.entries(legend[component]).forEach(function (_ref) {
      var value = _ref[1];
      if (value.rule(props)) {
        result.push(value.highlight);
        if (showAnnotations) {
          result.push(annotation(value.issue));
        }
      }
    });
  }
  if (props.style && props.as !== 'a') {
    result.push(legend.styleProp.highlight);
    if (showAnnotations) {
      result.push(annotation(legend.styleProp.issue));
    }
  }
  return result;
};
var audit = (0, _utils.deepMerge)(_hpe.hpe, {
  anchor: {
    extend: function extend(props) {
      return runAudit('anchor', props, {
        issue: true
      });
    }
  },
  box: {
    extend: function extend(props) {
      return runAudit('box', props);
    }
  },
  button: {
    extend: function extend(props) {
      return runAudit('button', props);
    }
  },
  heading: {
    extend: function extend(props) {
      return runAudit('heading', props);
    }
  },
  paragraph: {
    extend: function extend(props) {
      return runAudit('paragraph', props);
    }
  },
  text: {
    extend: function extend(props) {
      return runAudit('text', props);
    }
  }
});
exports.audit = audit;