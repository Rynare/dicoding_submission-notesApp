export class NoteHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.appendChild(this.makeTitle('Notes App'));
        this.appendChild(this.makeNewNoteBtn())
    }

    makeTitle(title) {
        const h3 = document.createElement('h3');
        h3.innerText = title;
        return h3;
    }

    makeNewNoteBtn() {
        const btn = document.createElement('button')
        btn.innerHTML = `
        <i class="bi bi-journal-bookmark-fill"></i>
        <span>Baru</span>
        `;

        btn.addEventListener('click', () => {
            document.querySelector('note-detail').setAttribute('note-id', 'new')
        })
        return btn
    }
}

