import { hpe } from './hpe';
import { deepMerge } from '../utils';

const flatten = (obj, parent) => {
  const flattened = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flatten(value, key));
    } else {
      flattened[parent + key] = value;
    }
  });
  return flattened;
};

const { backgrounds, colors } = hpe.global;
const backgroundTokens = Object.keys(backgrounds);
const colorTokens = Object.keys(colors);
const colorValues = Object.values(flatten(colors))
  .reduce((previous, current) => {
    if (current && !previous.includes(current)) {
      previous.push(current);
    }
    return previous;
  }, [])
  .sort();

function isColorToken(value) {
  let result;
  if (typeof value === 'string') {
    result =
      colorTokens.includes(value) ||
      colorValues.includes(value) ||
      ['none', 'transparent'].includes(value);
  } else if (typeof value === 'object' && value.color) {
    result = isColorToken(value.color);
  } else if (value.dark && value.light) {
    result = isColorToken(value.dark) && isColorToken(value.light);
  }
  return result;
}

const isBackgroundToken = (value) => backgroundTokens.includes(value);

const borderValues = [
  'top',
  'right',
  'bottom',
  'left',
  'vertical',
  'horizontal',
];

const legendColors = {
  backgroundToken: `${colors.purple.light}40`,
  buttonToken: colors.blue.light,
  colorProp: `${colors.teal.light}40`,
  colorToken: `${colors.teal.dark}40`,
  default: `${colors.orange.light}40`,
  issue: `${colors['background-back'].light}`,
  sizeProp: `${colors.purple.light}40`,
  weightProp: `${colors.yellow.light}40`,
  styleProp: `${colors.red.light}40`,
};

const legend = {
  anchor: {
    'color value': {
      rule: (props) => props.colorProp,
      highlight: `background-color: ${legendColors.default};`,
      issue: `color value is set by prop rather than theme`,
      resolution: ``,
    },
    'size override': {
      rule: (props) => props.size,
      highlight: `background-color: ${legendColors.default};`,
      issue: `size value is set by prop; instead size should be inherited from its parent`,
      resolution: ``,
    },
    'weight override': {
      rule: (props) => props.weight,
      highlight: `background-color: ${legendColors.default};`,
      issue: `weight value is set by prop rather than theme`,
      resolution: ``,
    },
  },
  box: {
    'border design token': {
      rule: (props) =>
        props.border &&
        isColorToken(props.border) === false &&
        !borderValues.includes(props.border),
      highlight: `border: ${legendColors.colorToken} 2px dotted;`,
      issue: `Color override - border value is not a design token color.`,
      resolution: ``,
    },
    'background design token': {
      rule: (props) =>
        props.background &&
        isColorToken(props.background) === false &&
        isBackgroundToken(props.background) === false,
      highlight: `
        background-color: ${legendColors.backgroundToken};
        border: ${legendColors.colorToken} dotted 2px;
      `,
      issue: `background value is not a design token color or background`,
      resolution: ``,
    },
  },
  button: {
    'color value': {
      rule: (props) => props.colorValue,
      highlight: `
        border: ${legendColors.colorProp} dotted 2px;
      `,
      issue: `Button color - color value is set by prop rather than theme`,
      resolution: ``,
    },
    'custom button': {
      rule: (props) =>
        (!props.hasIcon &&
          !props.hasLabel &&
          !props.className?.includes('Header')) ||
        (props.plain && props.className?.includes('Header') === false),
      highlight: `
        border: ${legendColors.buttonToken} dotted 2px;
      `,
      issue: `Custom button - button is not a button supplied by the hpe theme.`,
      resolution: ``,
    },
  },
  heading: {
    'color value': {
      rule: (props) => props.colorProp,
      highlight: `
        background-color: ${legendColors.default};
    `,
      issue: `Heading override - color value is set by prop rather than theme.`,
      resolution: ``,
    },
    'size value': {
      rule: (props) => props.size && props.size !== 'medium',
      highlight: `
        background-color: ${legendColors.default};
    `,
      issue: {
        category: `Heading override`,
        description: `Size value is set by prop rather than theme.`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="deeppink" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle">
          <path d="M10 8L12 12 10 16"></path><path d="M12 2L1 21h22L12 2z"></path>
        </svg>`,
      },
      resolution: ``,
    },
    'weight value': {
      rule: (props) => props.weight,
      highlight: `
        background-color: ${legendColors.default};
    `,
      issue: {
        category: 'Heading override',
        description: `Heading override - weight value is set by prop rather than theme.`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="deeppink" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle">
          <path d="M10 8L12 12 10 16"></path><path d="M12 2L1 21h22L12 2z"></path>
        </svg>`,
      },
      resolution: ``,
    },
  },
  paragraph: {
    'color value': {
      rule: (props) => props.colorProp,
      highlight: `
        background-color: ${legendColors.default};
    `,
      issue: `color value is set by prop rather than theme`,
      resolution: ``,
    },
    'color design token': {
      rule: (props) => props.colorProp && !isColorToken(props.colorProp),
      highlight: `
        background-color: ${legendColors.default};
    `,
      issue: `color value is not a design token color`,
      resolution: ``,
    },
    'size value': {
      rule: (props) => props.size && props.size !== 'medium',
      highlight: `
        background-color: ${legendColors.default};
    `,
      issue: `Size override - size value is set by prop rather than theme.`,
      resolution: ``,
    },
    'weight value': {
      rule: (props) => props.weight,
      highlight: `
        background-color: ${legendColors.default};
    `,
      issue: `weight value is set by prop rather than theme`,
      resolution: `remove weight prop and use default weight provided by the HPE theme.`,
    },
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
      rule: (props) => props.colorProp && !isColorToken(props.colorProp),
      highlight: `
        background-color: ${legendColors.default};
    `,
      issue: `Color override - color value is not a design token color.`,
      resolution: ``,
    },
    'size value': {
      rule: (props) => props.size && props.size !== 'medium',
      highlight: `
        background-color: ${legendColors.default};
        :before {
          background-color: inherit;
        ]
    `,
      issue: `Size override - size value is set by prop rather than theme.`,
      resolution: ``,
    },
    'weight value': {
      rule: (props) => props.weight,
      highlight: `
        background-color: ${legendColors.default};
    `,
      issue: `Weight override - weight value is set by prop rather than theme`,
      resolution: `remove weight prop and use default weight provided by the HPE theme.`,
    },
  },
  styleProp: {
    highlight: `
      background-color: ${legendColors.default} !important;
    `,
    issue: `Inline style override - Style prop is present on the component. 
    Inline styles override styling provided by the HPE theme.`,
  },
};

const annotation = (issue) => {
  const issueText =
    typeof issue === 'object'
      ? `${issue.category} - ${issue.description}`
      : issue;
  return `
    :before {
      content: url('
      data:image/svg+xml;
      utf8,
      ${issue.icon}
      ') '  ${issueText}' / '${issueText}';
      display: flex;
      font-size: 16px;
      font-weight: normal;
      color: ${colors.text.light};
      background-color: ${legendColors.issue};
      padding: 6px;
      border: solid 1px ${colors['border-weak'].light};
      border-radius: 6px;
      margin: 6px;
    }
  `;
};

const runAudit = (component, props, options = true) => {
  const result = [];
  const showAnnotations = Object.hasOwn(options, 'issue')
    ? options.issue
    : options;

  if (legend[component]) {
    Object.entries(legend[component]).forEach(([, value]) => {
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

export const audit = deepMerge(hpe, {
  anchor: {
    extend: (props) => runAudit('anchor', props, { issue: true }),
  },
  box: {
    extend: (props) => runAudit('box', props),
  },
  button: {
    extend: (props) => runAudit('button', props),
  },
  heading: {
    extend: (props) => runAudit('heading', props),
  },
  paragraph: {
    extend: (props) => runAudit('paragraph', props),
  },
  text: {
    extend: (props) => runAudit('text', props),
  },
});
