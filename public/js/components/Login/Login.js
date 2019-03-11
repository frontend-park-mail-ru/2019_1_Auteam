import {BaseComponent} from '../Base/Base.js';

export class LoginComponent extends BaseComponent {
  __renderTmpl() {
    const {Login: loginTemplate} = Handlebars.templates;
    this._el.innerHTML = loginTemplate();
  }
}
