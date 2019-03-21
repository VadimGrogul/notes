// export class NotesView {
//     constructor() {
//         //Сохраняем в переменные основные селекторы, к которым мы будем обращаться
//         this._selectors = {
//             list: $('.notes__list'),
//             input: $('.notes__input'),
//             addBtn: $('.notes__add-btn'),
//                     //следующие 2 селектора обозначаем как строку, так как при иннициализации конструктора, их еще не будет в DOM
                    
//             removeBtn: '.notes__item-remove', 
//             item: '.notes__item'
//         }
//         this._templates = {
//             //Сдесь иннициализируем html шаблон, который мы будем рендерить с определеннымы значениями
//             noteItem : function(note) { //В параметр передаем заметку целиком
//                 return `
//                     <div class="notes__item" data-id="${note.id}"> 
//                         ${note.body}
//                         <button style="color: red" class="notes__item-remove">Remove</button>
//                     </div>
//                 `
//             }
//         }
//     }

//     //даный метод отрисовывает заметки при загрузке сайта (дефолтная прорисовка)
//     renderNotes(notes) {  //в параметр нам приходит массив всех заметок
//        notes.forEach(note => {
//            //сдесь мы через цикл отрисовываем все заметки. В селектор .list добавляем шаблон noteItem;
//            this._selectors.list.append(this._templates.noteItem(note));
//        })
//     }

//     //этот метод рисует новую заметку в html
//     renderNewNote(newNote) {  //в параметр нам приходит заметка которую нужно отрисовать
//             //добавляем .list через шаблон 
//         this._selectors.list.append(this._templates.noteItem(newNote));
//     }

//     //этот метод слушает добавление новой заметки
//     listenAddingNote(cb) {
//         //по клике на кнопку "добавить"...;
//         this._selectors.addBtn.click(() => {
//             //...сохраняем значение инпута в переменную inputVal;
//             const inputVal = this._selectors.input.val();
//             //проверяем не пустой ли инпут
//             if(inputVal.length > 0){
//                 //если инпут не пустой, передаем его значение в колбэк функцию, и передаем эту функцию в параметр нашего метода
//                 cb(inputVal);
//             }
//         })
//     }

//     //этот метод слушает удаление заметок
//     listenRemoveNote(cb) {
//         //сдесь мы слушаем собитие клика, на родительском елементе заметок, так как сами заметки и кнопка удаления появлятся после того как этот
//         //метод будет задекларирован.
//         //
//         this._selectors.list.on('click', this._selectors.removeBtn, function() {
//             //сохраняем значение аттрибута id в переменную
//             const noteId = $(this).parent().attr('data-id');
//             //скрываем кнопку удаления
//             $(this).hide();
//             //передаем айди заметки, которую нужно удалить в коллбэк функцию, и ее же передаем в параметр самого метода
//             cb(noteId);
//         })
//     }

//     //этот метод удаляет заметку в html
//     removeNote(noteId) {  //в параметр нам приходит id заметки которую нужно удалить
//         //в списке заметок, через метод find(), ищем заметку с указанным id, и удаляем ее.
//         this._selectors.list.find(`${this._selectors.item}[data-id='${noteId}']`).remove();
//     }
// }

export class NotesView {
    constructor() {
        this.selectors = {
            $notesList: $('.notes__list'),
            $noteInput: $('.notes__input'),
            $noteAddBtn: $('.notes__add-btn'),

            noteItem: '.notes-item',
            noteRemoveBtn: '.notes-item__remove-btn'
        }

        this.templates = {
            noteItem: function(note) {
                return `
                    <div class="notes-item" data-id="${note.id}">
                    ${note.body}
                    <button class="notes-item__remove-btn" style="color: red">Remove note</button>
                    </div>
                `
            }
        }
    }

    renderNotes(notes) {
        notes.forEach(note => {
            this.selectors.$notesList.append(this.templates.noteItem(note));
        })
    }

    renderNewNote(note) {
        this.selectors.$notesList.append(this.templates.noteItem(note));
    }

    renderRemoveNote(noteId) {
        this.selectors.$notesList.find(`${this.selectors.noteItem}[data-id="${noteId}"]`).remove();
    }

    listenAddNote(cb) {
        this.selectors.$noteAddBtn.click(() => {
            const inputVal = this.selectors.$noteInput.val();
            if(inputVal.length > 0) {
                cb(inputVal);
            }
        })
    }

    listenRemoveNote(cb) {
        this.selectors.$notesList.on('click', this.selectors.noteRemoveBtn, function() {
            let noteId = $(this).parent().attr('data-id');
            $(this).hide();
            cb(noteId)
        })
    }
}