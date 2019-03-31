import {BaseComponent} from '../Base/Base';
// @ts-ignore
import * as profileTemplate from './Profile.handlebars';

export class ProfileComponent extends BaseComponent {
    renderTmpl() {
        this.el.innerHTML = profileTemplate();
    }
}
