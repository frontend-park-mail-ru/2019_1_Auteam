export class BaseComponent {
  constructor({
    el = document.body,
  } = {}) {
    this._el = el;
  }

  render() {
    this._el.innerHTML = '';
    this.__renderTmpl();
  }

  __renderTmpl() {
  }
}
