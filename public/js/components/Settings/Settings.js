import {BaseComponent} from '../Base/Base.js';

export class SettingsComponent extends BaseComponent {
	__renderTmpl() {
		this._el.innerHTML = Handlebars.templates.Settings();
	}
}