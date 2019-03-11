import {BaseComponent} from '../Base/Base.js';

export class SettingsComponent extends BaseComponent {
  __renderTmpl() {
    const {Settings: settingsTemplate} = Handlebars.templates;
    this._el.innerHTML = settingsTemplate();
  }
}
