import {BaseComponent} from '../Base/Base';
// @ts-ignore
import * as playTemplate from './Play.handlebats';

export class PlayComponent extends BaseComponent {
    renderTmpl() {
        this.el.innerHTML = playTemplate();
    }
}
