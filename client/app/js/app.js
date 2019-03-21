// import {
//     NotesModule
// } from './notes/notes.module';

// class App {
//     constructor() {
//         this.notesModule = new NotesModule();
//     }

//     init() {
//         this.notesModule.init();
//     }
// }

// new App().init();
import {
    NotesModule
} from './notes/notes.module'

class App {
    constructor() {
        this.notesModule = new NotesModule();
    }

    init() {
        this.notesModule.init();
    }
}

new App().init();