// export class NotesModel {
//     constructor() {
//         //сохраняем адрес сервера по которому будем делать запросы в переменную
//         this._url = 'http://localhost:3000/notes'
//     }

//     //этот метод возвращает все заметки через promise
//     getNotes() {
//         return $.get(this._url);
//     }

//     //этот метод добавляет новую заметку на сервер
//     addNote(noteBody) { //в параметр сдесь из view приходит новая заметка
//         const note = {
//             //сохраняем ее как обьект в ключ body
//             body: noteBody
//         }

//         return $.post(`${this._url}`, note);
//     }

//     //этот метод удаляет заметку из сервера по id
//     removeNote(noteId) {//в параметр приходит Ид заметки из Вью
//         //делаем запрос на удаление
//         return $.ajax({
//             method: 'DELETE',
//             url: `${this._url}/${noteId}`
//         })
//     }
// }

export class NotesModel {
    constructor() {
        this._url = 'http://localhost:3000/notes';
    }

    getNotes() {
        return $.get(this._url);
    }

    addNote(noteBody) {
        const note = {
            body: noteBody
        }

        return $.post(`${this._url}`, note);
    }

    removeNote(noteId) {
        return $.ajax({
            method: 'DELETE',
            url: `${this._url}/${noteId}`
        })
    }
}