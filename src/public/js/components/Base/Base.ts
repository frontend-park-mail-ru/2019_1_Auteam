export abstract class BaseComponent {
    constructor(public el: HTMLElement) {
    }

    public render() {
        this.el.innerHTML = '';
        this.renderTmpl();
    }

    abstract renderTmpl() : void;
}
