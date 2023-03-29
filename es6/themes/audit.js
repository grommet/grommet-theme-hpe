import { hpe } from './hpe';
import { deepMerge } from '../utils';
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
var _hpe$global = hpe.global,
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
var icons = {
  color: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\">\n    <path fill=\"none\" stroke=\"deeppink\" stroke-width=\"2\" d=\"M4,10 L2,10 C2,4.4771525 2,1 12,1 C22,1 22,4.4771525 22,10 L20,10 M12,10 C16.418278,10 20,9.1045695 20,8 C20,6.8954305 16.418278,6 12,6 C7.581722,6 4,6.8954305 4,8 C4,9.1045695 7.581722,10 12,10 Z M4,20 C4,21.6568542 7.581722,23 12,23 C16.418278,23 20,21.6568542 20,20 M20,8 L20,20 L20,8 Z M4,20 L4,8 L4,20 Z M8,13 L8,17 M13,13 L13,17 M7,12 C5.5,12 4,11 4,8 M18,13.5 C18,13.5 18,14 18,12 C18,10 20,11 20,8 M8,13 C8,12.4477153 7.55228475,12 7,12 M13,13 C13,12.4477153 13.4477153,12 14,12 C14.5522847,12 15,12.4477153 15,13 L15,13.5 M15,13.5 C15,14.3284271 15.6715729,15 16.5,15 C17.3284271,15 18,14.3284271 18,13.5 M8,17 C8,18.3807119 9.11928813,19.5 10.5,19.5 C11.8807119,19.5 13,18.3807119 13,17\"/>\n  </svg>",
  info: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\">\n    <path fill=\"none\" stroke=\"deeppink\" stroke-width=\"2\" d=\"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,10 L12,18 M12,6 L12,8\"/>\n  </svg>",
  font: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\">\n    <path d='M18.74,3.63l.19,4.07h-.49a4.92,4.92,0,0,0-.38-1.54A2.58,2.58,0,0,0,17,5.07a3.68,3.68,0,0,0-1.73-.35H12.83V18a3.54,3.54,0,0,0,.35,2,1.92,1.92,0,0,0,1.5.54h.6V21H7.92V20.5h.61a1.76,1.76,0,0,0,1.56-.67A3.88,3.88,0,0,0,10.38,18V4.72H8.29a5.79,5.79,0,0,0-1.73.18,2.37,2.37,0,0,0-1.14.93A3.78,3.78,0,0,0,4.86,7.7H4.38l.21-4.07Z' />\n    <path d='M22.48,16.68h.33v5.59a1.13,1.13,0,0,0,.06.4.41.41,0,0,0,.17.21.63.63,0,0,0,.28.08h.4v.27H20.76V23l.45,0a.62.62,0,0,0,.29-.1.38.38,0,0,0,.15-.22,1.4,1.4,0,0,0,0-.37V18.42a4.45,4.45,0,0,0,0-.64c0-.15-.1-.23-.24-.23a.82.82,0,0,0-.28,0l-.3.13-.18-.25Z' />\n  </svg>",
  size: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\">\n    <path fill=\"none\" stroke=\"deeppink\" stroke-width=\"2\" d=\"M10,14 L2,22 M1,15 L1,23 L9,23 M22,2 L14,10 M15,1 L23,1 L23,9\"/>\n  </svg>",
  styleTag: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\">\n    <path fill=\"none\" stroke=\"deeppink  \" stroke-width=\"2\" d=\"M11.7058543,22.2941457 C11.3160217,22.6839783 10.6897542,22.6897542 10.2968194,22.2968194 L1.70318058,13.7031806 C1.31482467,13.3148247 1.32097101,12.679029 1.70585426,12.2941457 L13,1 L23,1 L23,11 L11.7058543,22.2941457 Z M6,12 L12,18 M9,9 L15,15 M17,6 C17,5.4475 17.4475,5 18,5 C18.5525,5 19,5.4475 19,6 C19,6.5525 18.5525,7 18,7 C17.4475,7 17,6.5525 17,6\"/>\n  </svg>",
  weight: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\">\n    <path d='M14,11.57a7.93,7.93,0,0,1,3.11,1.25,3.32,3.32,0,0,1,1.28,2.71A3.58,3.58,0,0,1,17,18.42a7.9,7.9,0,0,1-5,1.39H4.07v-.42a3.57,3.57,0,0,0,1.46-.2,1.17,1.17,0,0,0,.54-.52,4.75,4.75,0,0,0,.15-1.58V7A4.81,4.81,0,0,0,6.07,5.4a1.13,1.13,0,0,0-.54-.52,3.67,3.67,0,0,0-1.46-.2V4.26h7.45a10.57,10.57,0,0,1,3.78.48,3.94,3.94,0,0,1,1.75,1.42,3.52,3.52,0,0,1,.64,2,2.86,2.86,0,0,1-.81,2A5.84,5.84,0,0,1,14,11.57Zm-4.17.58v5.56a1.27,1.27,0,0,0,.32.93,1.27,1.27,0,0,0,.93.31,3.57,3.57,0,0,0,1.69-.41A2.79,2.79,0,0,0,14,17.37a3.61,3.61,0,0,0,.41-1.73,3.81,3.81,0,0,0-.5-2,2.72,2.72,0,0,0-1.39-1.21A7.52,7.52,0,0,0,9.85,12.15Zm0-.89a5.92,5.92,0,0,0,2.4-.37,2.73,2.73,0,0,0,1.19-1,3.17,3.17,0,0,0,.41-1.7,3.18,3.18,0,0,0-.41-1.69,2.59,2.59,0,0,0-1.16-1,6.2,6.2,0,0,0-2.43-.33Z' />\n  </svg>"
};
var legendColors = {
  backgroundToken: colors.purple.light + "40",
  buttonToken: colors.blue.light,
  colorProp: colors.teal.light + "40",
  colorToken: colors.teal.dark + "40",
  "default": colors.orange.light + "40",
  issue: "" + colors['background-back'].light,
  sizeProp: colors.purple.light + "40",
  weightProp: colors.yellow.light + "40",
  styleProp: colors.red.light + "40"
};
var legend = {
  anchor: {
    'color value': {
      rule: function rule(props) {
        return props.colorProp;
      },
      highlight: "background-color: " + legendColors["default"] + ";",
      issue: {
        category: "Anchor override",
        description: "Color value is set by prop rather than theme.",
        icon: icons.color
      },
      resolution: ""
    },
    'size override': {
      rule: function rule(props) {
        return props.size;
      },
      highlight: "background-color: " + legendColors["default"] + ";",
      issue: {
        category: "Anchor override",
        description: "Size value is set by prop. Instead size should be inherited from its parent.",
        icon: icons.size
      },
      resolution: ""
    },
    'weight override': {
      rule: function rule(props) {
        return props.weight;
      },
      highlight: "background-color: " + legendColors["default"] + ";",
      issue: {
        category: "Anchor override",
        description: "Weight value is set by prop rather than theme.",
        icon: icons.weight
      },
      resolution: ""
    }
  },
  box: {
    'border design token': {
      rule: function rule(props) {
        return props.border && isColorToken(props.border) === false && !borderValues.includes(props.border);
      },
      highlight: "border: " + legendColors.colorToken + " 2px dotted;",
      issue: {
        category: "Color override",
        description: "Border value is not a design token color.",
        icon: icons.color
      },
      resolution: ""
    },
    'background design token': {
      rule: function rule(props) {
        return props.background && isColorToken(props.background) === false && isBackgroundToken(props.background) === false;
      },
      highlight: "\n        background-color: " + legendColors.backgroundToken + ";\n        border: " + legendColors.colorToken + " dotted 2px;\n      ",
      issue: {
        category: "Color override",
        description: "Background value is not a design token color or design token background.",
        icon: icons.color
      },
      resolution: ""
    }
  },
  button: {
    'color value': {
      rule: function rule(props) {
        return props.colorValue;
      },
      highlight: "\n        border: " + legendColors.colorProp + " dotted 2px;\n      ",
      issue: {
        category: "Button override",
        description: "Color value is set by prop rather than theme.",
        icon: icons.color
      },
      resolution: ""
    },
    'custom button': {
      rule: function rule(props) {
        var _props$className, _props$className2;
        return !props.hasIcon && !props.hasLabel && !((_props$className = props.className) != null && _props$className.includes('Header')) || props.plain && ((_props$className2 = props.className) == null ? void 0 : _props$className2.includes('Header')) === false;
      },
      highlight: "\n        border: " + legendColors.buttonToken + " dotted 2px;\n      ",
      issue: {
        category: "Custom button",
        description: "Button is not a button supplied by the hpe theme.",
        icon: icons.info
      },
      resolution: ""
    }
  },
  heading: {
    'color value': {
      rule: function rule(props) {
        return props.colorProp;
      },
      highlight: "\n        background-color: " + legendColors["default"] + ";\n    ",
      issue: {
        category: "Heading override",
        description: "Color value is set by prop rather than theme.",
        icon: icons.color
      },
      resolution: ""
    },
    'size value': {
      rule: function rule(props) {
        return props.size && props.size !== 'medium';
      },
      highlight: "\n        background-color: " + legendColors["default"] + ";\n    ",
      issue: {
        category: "Heading override",
        description: "Size value is set by prop rather than theme.",
        icon: icons.size
      },
      resolution: ""
    },
    'weight value': {
      rule: function rule(props) {
        return props.weight;
      },
      highlight: "\n        background-color: " + legendColors["default"] + ";\n    ",
      issue: {
        category: 'Heading override',
        description: "Weight value is set by prop rather than theme.",
        icon: icons.weight
      },
      resolution: ""
    }
  },
  paragraph: {
    'color value': {
      rule: function rule(props) {
        return props.colorProp;
      },
      highlight: "\n        background-color: " + legendColors["default"] + ";\n    ",
      issue: {
        category: "Paragraph override",
        description: "Color value is set by prop rather than theme.",
        icon: icons.color
      },
      resolution: ""
    },
    'color design token': {
      rule: function rule(props) {
        return props.colorProp && !isColorToken(props.colorProp);
      },
      highlight: "\n        background-color: " + legendColors["default"] + ";\n    ",
      issue: {
        category: "Paragraph override",
        description: "Color value is not a design token color.",
        icon: icons.color
      },
      resolution: ""
    },
    'size value': {
      rule: function rule(props) {
        return props.size && props.size !== 'medium';
      },
      highlight: "\n        background-color: " + legendColors["default"] + ";\n    ",
      issue: {
        category: "Paragraph override",
        description: "Size value is set by prop rather than theme.",
        icon: icons.size
      },
      resolution: ""
    },
    'weight value': {
      rule: function rule(props) {
        return props.weight;
      },
      highlight: "\n        background-color: " + legendColors["default"] + ";\n    ",
      issue: {
        category: "Paragraph override",
        description: "Weight value is set by prop rather than theme.",
        icon: icons.weight
      },
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
      highlight: "\n        background-color: " + legendColors["default"] + ";\n    ",
      issue: {
        category: "Text override",
        description: "Color value is not a design token color.",
        icon: icons.color
      },
      resolution: ""
    },
    'size value': {
      rule: function rule(props) {
        return props.size && props.size !== 'medium';
      },
      highlight: "\n        background-color: " + legendColors["default"] + ";\n        :before {\n          background-color: inherit;\n        ]\n    ",
      issue: {
        category: "Text override",
        description: "Size value is set by prop rather than theme.",
        icon: icons.size
      },
      resolution: ""
    },
    'weight value': {
      rule: function rule(props) {
        return props.weight;
      },
      highlight: "\n        background-color: " + legendColors["default"] + ";\n    ",
      issue: {
        category: "Text override",
        description: "Weight value is set by prop rather than theme.",
        icon: icons.weight
      },
      resolution: "remove weight prop and use default weight provided by the HPE theme."
    }
  },
  styleProp: {
    highlight: "\n      background-color: " + legendColors["default"] + " !important;\n    ",
    issue: {
      category: "Use of inline style",
      description: "Style prop is present on the component.\n      Inline styles override styling provided by the HPE theme.",
      icon: icons.styleTag
    }
  }
};
var annotation = function annotation(issue) {
  var issueText = typeof issue === 'object' ? issue.category + " - " + issue.description : issue;
  return "\n    :before {\n      content: url('\n      data:image/svg+xml;\n      utf8,\n      " + issue.icon + "\n      ') ' " + issueText + "' / '" + issueText + "';\n      display: flex;\n      font-size: 16px;\n      font-weight: normal;\n      color: " + colors.text.light + ";\n      background-color: " + legendColors.issue + ";\n      padding: 6px;\n      border: solid 1px " + colors['border-weak'].light + ";\n      border-radius: 6px;\n      margin: 6px;\n    }\n  ";
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
export var audit = deepMerge(hpe, {
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