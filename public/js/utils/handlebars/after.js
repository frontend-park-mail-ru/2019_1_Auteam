/**
 * Handlebars helper for getting slice.
 * @param {int} - Start index.
 * @param {Object} - Template context.
 * @param {Object} - Handlebars options.
 */
export function after(start, context, options) {
  const ret = context.reduce((accumulator, curr, index) => {
    if (index >= start) {
      return accumulator + options.fn(curr);
    }
    return accumulator;
  }, '');
  return ret;
};
