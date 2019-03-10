import {BaseComponent} from '../Base/Base.js';

export class LeaderboardComponent extends BaseComponent {
  get data() {
    return this._data;
  }

  set data(data = []) {
    this._data = data;
  }

  render() {
    if (!this._data) {
      return;
    }

    this.__renderTmpl();
  }

  __renderTmpl() {
    this._el.innerHTML = Handlebars.templates.Leaderboard(this._data);
  }
}
