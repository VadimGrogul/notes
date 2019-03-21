// import { NotesModule } from "./notes.module";

// export class NotesController {
//     constructor(model, view) {
//         this._model = model;
//         this._view = view;
//     }

//     init() {
//         this._getNotes();  
//         this._addNote();
//         this._removeNote();
//     }

//     _getNotes() {
//         this._model.getNotes()
//         .then(res => {
//             this._view.renderNotes(res);
//         })  
//     }

//     _addNote() {
//         this._view.listenAddingNote((note) => {
//             this._model.addNote(note)
//                 .then(newNote => {
//                     this._view.renderNewNote(newNote);
//                 })
//         })
//     }

//     _removeNote() {
//         this._view.listenRemoveNote((noteId) => {
//             this._model.removeNote(noteId)
//                 .then(res => {
//                     this._view.removeNote(noteId);
//                 })
//             console.log(noteId);
//         })
//     }
// }

export class NotesController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.renderNotes();
        this.addNewNote();
        this.removeNote();
    }

    renderNotes() {
        this.model.getNotes()
        .then(notes => {
            this.view.renderNotes(notes);
        })
    }

    addNewNote() {
        this.view.listenAddNote(noteBody => {
            this.model.addNote(noteBody)
            .then(note => {
                this.view.renderNewNote(note);
            })
        })
    }

    removeNote() {
        this.view.listenRemoveNote(noteId => {
            this.model.removeNote(noteId)
            .then(_ => {
                this.view.renderRemoveNote(noteId)
            })
        })
    }
}