import {BaseComponent} from '../Base/Base';
// @ts-ignore
import * as registrationTemplate from './Registration.handlebars';

export class RegistrationComponent extends BaseComponent {
    renderTmpl() {
        this.el.innerHTML = registrationTemplate();
    }
}
