export const isObject = (item) =>
  item && typeof item === 'object' && !Array.isArray(item);

export const deepMerge = (target, ...sources) => {
  if (!sources.length) {
    return target;
  }

  const output = { ...target };

  sources.forEach((source) => {
    if (isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = { ...source[key] };
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });

  return output;
};
