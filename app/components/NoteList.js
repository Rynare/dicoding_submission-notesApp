import { notesData } from "../../notes-data.js";
export class NoteList extends HTMLElement {
    static observedAttributes = ["selected-note-item", "active-note-item", 'refresh'];

    constructor() {
        super()
    }


    connectedCallback() {
        this.render()
    }


    render() {
        notesData.forEach(obj => {
            const note_item = document.createElement('note-item')
            note_item.setAttribute(`note-item-id`, obj['id'])
            this.appendChild(note_item)
        })
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'selected-note-item':
                break
            case 'refresh':
                if (newValue == 'true') {
                    this.innerHTML = ''
                    this.render()
                    this.removeAttribute(name)
                }
                break
            case 'active-note-item':
                const allActive = this.querySelectorAll('.is-active')
                if (allActive != null) {
                    for (const active of allActive) {
                        active.classList.remove('is-active')
                    }
                }
                const activeNow = this.querySelector(newValue)
                activeNow.classList.add('is-active')
                break
            default:
                break;
        }
    }
}
