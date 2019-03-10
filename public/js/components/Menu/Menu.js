import {BaseComponent} from '../Base/Base.js';

export class MenuComponent extends BaseComponent {
	__renderTmpl() {
		this._el.innerHTML = Handlebars.templates.Menu();
	}
}