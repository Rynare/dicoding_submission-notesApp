import { addNote, findNoteById, getSortedByCreateAtAsc, updateNoteById } from '../../notes-data.js'

const template = document.createElement('template')
template.innerHTML = `
<form>
    <header>
        <i class="bi bi-arrow-left back-btn"></i>
        <div>
            <button type="submit" id="save-btn"><i class="bi bi-floppy-fill"></i></button>
        </div>
    </header>
    <div id="detail-container">
        <input id="detail-title" required placeholder="Judul" name="title">
        <textarea id="detail-body" placeholder="Isi Catatan" name="body"></textarea>
    </div>
</form>
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
        this.runBackEvent()
        this.runSubmitFormEvent()
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
                newValue = newValue.trim();
                const data = findNoteById(newValue)
                if ((newValue != '' || newValue != null || newValue != undefined) && data) {
                    this.render(data.title, data.body)
                    this.style.zIndex = 9999
                } else {
                    this.render()
                    this.style.zIndex = 9999
                }
                break
            default:
                break;
        }
    }

    runBackEvent() {
        const backBtn = this.querySelector('.back-btn')
        backBtn.addEventListener('click', () => {
            this.setAttribute('note-id', '')
            document.querySelector('note-list').setAttribute('refresh', true)
            this.style.zIndex = -9999
        })
    }

    runSubmitFormEvent() {
        const form = this.querySelector('form')
        const submitBtn = this.querySelector('#save-btn')
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const formData = new FormData(form, submitBtn)
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            if (this.getAttribute('note-id') == 'new') {
                addNote(data)
            } else {
                updateNoteById(this.getAttribute('note-id'), data)
            }
        })
    }
}
