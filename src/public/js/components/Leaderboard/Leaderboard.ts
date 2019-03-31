import {BaseComponent} from '../Base/Base';
// @ts-ignore
import * as leaderboardTemplate from './Leaderboard.handlebars'

export class LeaderboardComponent extends BaseComponent {
    private _data: any[];

    get data() {
        return this._data;
    }

    set data(value: any[]) {
        this._data = value;
    }

    renderTmpl() {
        this.el.innerHTML = leaderboardTemplate(this._data);
    }
}
