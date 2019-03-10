import {BaseComponent} from '../Base/Base.js';

export class PlayComponent extends BaseComponent {
	__renderTmpl() {
		this._el.innerHTML = Handlebars.templates.Play();
	}
}
