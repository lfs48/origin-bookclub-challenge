import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createNote, deleteNote} from '../../actions/entities/note_actions';
import {merge} from 'lodash';

const Book = ({match}) => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        noteBody: "",
        editedNoteBody: "",
        editing: false
    });
    
    const {notes, book, currentUser} = useSelector(
        state => ({
            notes: state.entities.notes,
            currentUser: state.entities.users[state.sessions.id],
            book: state.entities.books[match.params.id] || {id:"",title:"",author:"",genre:""}
        })
    );
    
    const handleInput = (e, field) => {
        e.preventDefault();
        const newState = merge({}, state);
        newState[field] = e.target.value;
        setState(newState);
    }

    const handleAddNote = (e) => {
        e.preventDefault();
        const note = {
            user_id: currentUser.id,
            book_id: book.id,
            body: state.noteBody
        }
        dispatch(createNote(note));
    }

    const handleEditNote = (e, id) => {
        e.preventDefault();
        const newState = merge({}, state);
        newState.editing = id;
        newState.editedNoteBody = notes[id].body
        setState(newState);
    }

    const handleDeleteNote = (e, id) => {
        e.preventDefault();
        dispatch(deleteNote(id));
    }

    const lis = Object.values(notes).map(note => {
        if (note.book_id === book.id) {
            if (state.editing !== note.id) {
                return (
                    <li key={note.id}>
                    <span>{note.body}</span>
                    <button onClick={e => handleEditNote(e, note.id)}>Edit</button>
                    <button onClick={e => handleDeleteNote(e, note.id)}>X</button>
                    </li>
                )
            } else {
                return (
                    <li key={note.id}>
                        <form>
                            <input
                                type="text"
                                value={state.editedNoteBody}
                                onChange={e => handleInput(e, editedNoteBody)}
                            ></input>
                        </form>
                    </li>
                )
            }
        } else {
            return <></>
        }
    });

    return(
        <section id="book-container">
            <header>Title: {book.title}</header>
            <span>Author: {book.author}</span>
            <span>Genre: {book.genre}</span>
            <ul>
                {lis}
            </ul>
            <input
                type="text"
                value={state.noteBody}
                placeholder="Type your note here"
                onChange={e => handleInput(e, "noteBody")}
            ></input>
            <button onClick={e => handleAddNote(e, "noteBody")}>Add Note</button>
        </section>
    );
}

export default Book;