import {BaseComponent} from '../Base/Base.js';

export class AboutComponent extends BaseComponent {
	__renderTmpl() {
		this._el.innerHTML = Handlebars.templates.About();
	}
}
