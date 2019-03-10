import {BaseComponent} from '../Base/Base.js';

export class ProfileComponent extends BaseComponent {
  __renderTmpl() {
    const {Profile: profileTemplate} = Handlebars.templates;
    this._el.innerHTML = profileTemplate();
  }
}
