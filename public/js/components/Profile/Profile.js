import {BaseComponent} from '../Base/Base.js';

export class ProfileComponent extends BaseComponent {
	__renderTmpl() {
		this._el.innerHTML = Handlebars.templates.Profile();
	}
}