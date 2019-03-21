// import {
//     NotesModel
// } from './notes.model';

// import {
//     NotesView
// } from './notes.view';

// import {
//     NotesController
// } from './notes.controller';

// export class NotesModule {
//     constructor() {
//         this._moduleName;
//         this._model = new NotesModel();
//         this._view = new NotesView();
//         this._controller = new NotesController(this._model, this._view);
//     }

//     init() {
//         this._controller.init();
//     }
// }

import {
    NotesModel
} from './notes.model';

import {
    NotesView
} from './notes.view';

import {
    NotesController
} from './notes.controller';

export class NotesModule {
    constructor() {
        this._model = new NotesModel();
        this._view = new NotesView();
        this._controller = new NotesController(this._model, this._view);
    }

    init() {
        this._controller.init();
    }
}