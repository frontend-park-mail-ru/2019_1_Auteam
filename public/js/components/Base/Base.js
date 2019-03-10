export class BaseComponent {
	constructor({
		el = document.body
	} = {}) {
		this._el = el;
	}

	render() {
		this.__renderTmpl();
	}

	__renderTmpl() {
	}
}
