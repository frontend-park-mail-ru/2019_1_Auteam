import {before} from './before.js';
import {after} from './after.js';

Handlebars.registerHelper('before', before);
Handlebars.registerHelper('after', after);
