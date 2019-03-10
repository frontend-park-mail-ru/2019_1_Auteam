import {BaseComponent} from '../Base/Base.js';

export class RegistrationComponent extends BaseComponent {
  __renderTmpl() {
    const {Registration: registrationTemplate} = Handlebars.templates;
    this._el.innerHTML = registrationTemplate();
  }
}
