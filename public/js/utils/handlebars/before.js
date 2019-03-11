/**
 * Handlebars helper for getting slice.
 * @param {int} - End index.
 * @param {Object} - Template context.
 * @param {Object} - Handlebars options.
 */
export function before(end, context, options) {
  const ret = context.reduce((accumulator, curr, index) => {
    if (index < end) {
      return accumulator + options.fn(curr);
    }
    return accumulator;
  }, '');
  return ret;
};
