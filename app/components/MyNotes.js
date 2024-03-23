import { notesData } from "../../notes-data.js";

const template = document.createElement('template')
template.innerHTML = `
<note-list>
</note-list>
<note-detail></note-detail>
`;

export class MyNotes extends HTMLDivElement {
    static observedAttributes = ["note-data-new"];

    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const templateNode = template.content.cloneNode('true')
        this.appendChild(templateNode)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'note-data-new':
                const noteList = this.querySelector('note-list')
                const noteItem = document.createElement('note-item')
                // kode disini
                // akhir kode
                noteList.appendChild(noteItem)
                this.addNewNoteData(JSON.parse(newValue))
                this.setAttribute('note-data-new', '')
                break
            default:
                break;
        }
    }

    addNewNoteData(newObject) {
        notesData.push(newObject)
    }
}

customElements.define('my-notes', MyNotes, { extends: 'div' })