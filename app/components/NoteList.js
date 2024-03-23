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
                const allActive = this.querySelectorAll('.is-active')
                if (allActive != null) {
                    for (const active of allActive) {
                        active.classList.remove('is-active')
                    }
                }
                const activeNow = this.querySelector(newValue)
                console.log(activeNow)
                activeNow.classList.add('is-active')
                break
            default:
                break;
        }
    }
}

customElements.define('note-list', NoteList)