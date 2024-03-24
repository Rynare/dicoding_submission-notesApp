import { findNoteById } from '../../notes-data.js'

const template = document.createElement('template')
template.innerHTML = `
<header>
    <i class="bi bi-arrow-left back-btn"></i>
    <div>
        <i class="bi bi-floppy-fill"></i>
    </div>
</header>
<div id="detail-container">
    <input id="detail-title">
    <textarea id="detail-body"></textarea>
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
        this.runBackEvent()
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
            this.style.zIndex = -9999
        })
    }
}
