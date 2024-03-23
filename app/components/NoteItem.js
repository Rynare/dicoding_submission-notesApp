import { findNoteById } from '../../notes-data.js'

const template = document.createElement('template')
template.innerHTML = `
<p class="note-item-title">Title</p>
<p class="note-item-body">Body</p>
<p class="note-item-createAt">Created At:</p>
`

export class NoteItem extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
        this.runClickEvent()
    }

    render() {
        const newTemplate = template.content.cloneNode(true);
        const data = findNoteById(this.getAttribute('note-item-id'))
        const note_title = newTemplate.querySelector('.note-item-title')
        const note_body = newTemplate.querySelector('.note-item-body')
        const note_createAt = newTemplate.querySelector('.note-item-createAt')
        note_title.innerText = data.title
        note_body.innerText = data.body
        note_createAt.innerText = data.createdAt
        this.appendChild(newTemplate);
    }

    runClickEvent() {
        this.addEventListener('click', (event) => {

        })
    }
}

customElements.define('note-item', NoteItem)