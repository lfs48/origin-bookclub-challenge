import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createNote} from '../../actions/entities/note_actions';
import {merge} from 'lodash';

const Book = ({match}) => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        noteBody: ""
    });

    const {currentUser, book} = useSelector(
        state => ({
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

    return(
        <section id="book-container">
            <header>Title: {book.title}</header>
            <span>Author: {book.author}</span>
            <span>Genre: {book.genre}</span>
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