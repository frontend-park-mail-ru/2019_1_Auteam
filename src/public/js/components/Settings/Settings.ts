import {BaseComponent} from '../Base/Base';
// @ts-ignore
import * as settingsTemplate from './Settings.handlebars';

export class SettingsComponent extends BaseComponent {
    renderTmpl() {
        this.el.innerHTML = settingsTemplate();
    }
}
