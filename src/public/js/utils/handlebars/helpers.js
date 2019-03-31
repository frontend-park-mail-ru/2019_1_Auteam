import {before} from './before';
import {after} from './after';

Handlebars.registerHelper('before', before);
Handlebars.registerHelper('after', after);
