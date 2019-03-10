import {BaseComponent} from '../Base/Base.js';

export class LoginComponent extends BaseComponent {
  __renderTmpl() {
    this._el.innerHTML = Handlebars.templates.Login();
  }
}
