export class NoteDetail extends HTMLElement {

    static observedAttributes = ["note-id"];

    constructor() {
        super()
    }

    connectedCallback() {

    }


    render() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'note-id':
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
}

customElements.define('note-detail', NoteDetail)