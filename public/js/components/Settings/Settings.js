export class SettingsComponent {
	constructor({
		el = document.body
	} = {}) {
		this._el = el;
	}

	render() {
		this.__renderTmpl();
	}

	__renderTmpl() {
		this._el.innerHTML = Handlebars.templates.Settings();
	}
}