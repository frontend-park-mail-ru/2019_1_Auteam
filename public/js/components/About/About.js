import {BaseComponent} from '../Base/Base.js';

export class AboutComponent extends BaseComponent {
  __renderTmpl() {
    const {About: aboutTemplate} = Handlebars.templates;
    this._el.innerHTML = aboutTemplate();
  }
}
