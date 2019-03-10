import {BaseComponent} from '../Base/Base.js';

export class PlayComponent extends BaseComponent {
  __renderTmpl() {
    const {Play: playTemplate} = Handlebars.templates;
    this._el.innerHTML = playTemplate();
  }
}
