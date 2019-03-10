export function before(end_index, context, options) {
	const ret = context.reduce((accumulator, curr, index) => {
		if (index < end_index) {
			return accumulator + options.fn(curr);
		}
		return accumulator;
	}, '');
	return ret;
};
