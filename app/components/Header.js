export class NoteHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.appendChild(this.makeTitle('Notes App'));
    }

    makeTitle(title) {
        const h3 = document.createElement('h3');
        h3.innerText = title;
        return h3;
    }
}

customElements.define('note-header', NoteHeader);
