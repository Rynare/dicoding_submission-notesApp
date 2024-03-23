import { findNoteById } from '../../notes-data.js'

const template = document.createElement('template')
template.innerHTML = `
<header></header>
<div>
<input id="detail-title">
<textarea id="detail-body">
</textarea>
</div>
`

export class NoteDetail extends HTMLElement {

    static observedAttributes = ["note-id"];

    constructor() {
        super()
        const newTemplate = template.content.cloneNode(true)
        this.appendChild(newTemplate)
    }

    connectedCallback() {
        this.render()
    }


    render(title = '', body = '') {
        const detail_title = this.querySelector('#detail-title')
        const detail_body = this.querySelector('#detail-body')

        detail_title.value = title
        detail_body.value = body
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'note-id':
                const data = findNoteById(newValue)
                this.render(data.title, data.body)
                break
            default:
                break;
        }
    }
}

customElements.define('note-detail', NoteDetail)