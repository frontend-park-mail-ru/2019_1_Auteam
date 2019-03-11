import {BaseComponent} from '../Base/Base.js';

export class MenuComponent extends BaseComponent {
	get data() {
		return this._data;
	}

	set data(page = '') {
		this._data = page;
	}

  __renderTmpl() {
    const {Menu: menuTemplate} = Handlebars.templates;
    this._el.innerHTML = menuTemplate(this._data);
  }
}
