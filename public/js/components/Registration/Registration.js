import {BaseComponent} from '../Base/Base.js';

export class RegistrationComponent extends BaseComponent {
	__renderTmpl() {
		this._el.innerHTML = Handlebars.templates.Registration();
	}
}