import {BaseComponent} from '../Base/Base';

// @ts-ignore
import * as loginTemplate from './Login.handlebars'

export class LoginComponent extends BaseComponent {
    renderTmpl() {
        this.el.innerHTML = loginTemplate();
    }
}
