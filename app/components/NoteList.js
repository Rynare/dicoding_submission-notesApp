export class NoteList extends HTMLElement {
    static observedAttributes = ["selected-note-item", "active-note-item"];

    constructor() {
        super()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'selected-note-item':
                break
            case 'active-note-item':
                break
            default:
                break;
        }
    }
}

customElements.define('note-list', NoteList)