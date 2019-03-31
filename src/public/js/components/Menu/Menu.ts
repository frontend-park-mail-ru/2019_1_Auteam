import {BaseComponent} from '../Base/Base';
// @ts-ignore
import * as menuTemplate from './Menu.handlebars'

export class MenuComponent extends BaseComponent {
    private _data: string;
    get data() {
        return this._data;
    }

    set data(value: string) {
        this._data = value;
    }

    renderTmpl() {
        this.el.innerHTML = menuTemplate({page: this._data});
    }
}
