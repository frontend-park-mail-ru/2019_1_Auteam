import {BaseComponent} from '../Base/Base.js';

export class MenuComponent extends BaseComponent {
  __renderTmpl() {
    const {Menu: menuTemplate} = Handlebars.templates;
    this._el.innerHTML = menuTemplate();
  }
}
