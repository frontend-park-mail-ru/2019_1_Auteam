import {BaseComponent} from '../Base/Base';
// @ts-ignore
import * as aboutTemplate from './About.handlebars'

export class AboutComponent extends BaseComponent {
    renderTmpl() {
        this.el.innerHTML = aboutTemplate();
    }
}
