export function after(start_index, context, options) {
	const ret = context.reduce((accumulator, curr, index) => {
		if (index >= start_index) {
			return accumulator + options.fn(curr);
		}
		return accumulator;
	}, '');
	return ret;
};
