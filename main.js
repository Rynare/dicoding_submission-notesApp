import { NoteHeader } from './app/components/Header.js';
import { MyNotes } from './app/components/MyNotes.js';
import { NoteList } from './app/components/NoteList.js';
import { NoteItem } from './app/components/NoteItem.js';
import { NoteDetail } from './app/components/NoteDetail.js';

customElements.define('note-header', NoteHeader);
customElements.define('my-notes', MyNotes, { extends: 'div' });
customElements.define('note-list', NoteList);
customElements.define('note-item', NoteItem);
customElements.define('note-detail', NoteDetail);