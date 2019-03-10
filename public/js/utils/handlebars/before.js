export function before(end, context, options) {
  const ret = context.reduce((accumulator, curr, index) => {
    if (index < end) {
      return accumulator + options.fn(curr);
    }
    return accumulator;
  }, '');
  return ret;
};
