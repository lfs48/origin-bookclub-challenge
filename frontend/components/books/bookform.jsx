import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createbook, updateBook} from '../../actions/entities/book_actions';
import {merge} from 'lodash';

const Bookform = ({match, history}) => {

    const {currentUser, currentBook} = useSelector(
        state => ({
            currentUser: state.entities.users[state.sessions.id],
            currentBook: match.params.id ? state.entities.books[match.params.id] : null
        })
    );

    const [state, setState] = useState({
        title: currentBook ? currentBook.title : "",
        author: currentBook ? currentBook.author : "",
        genre: currentBook ? currentBook.genre : "",
    });

    const dispatch = useDispatch();

    const updateInput = (e, field) => {
        e.preventDefault();
        const newState = merge({}, state);
        newState[field] = e.target.value;
        setState(newState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {
            title: state.title,
            author: state.author,
            genre: state.genre,
            uploader_id: parseInt(currentUser.id, 10)
        };
        if (currentBook) {
            book.id = currentBook.id;
            dispatch(updateBook(book))
            .then(history.push('/books'));
        } else {
            dispatch(createbook(book))
            .then(history.push('/books'));
        }
    }

    return(
        <section id="create-book-container">
            <form id="create-book-form">
                <input
                    type="text" 
                    id="title-input" 
                    placeholder="Title"
                    value={state.title}
                    onChange={e => updateInput(e, "title")}
                ></input>
                <input
                    type="text" 
                    id="author-input" 
                    placeholder="Author"
                    value={state.author}
                    onChange={e => updateInput(e, "author")}
                ></input>
                <input
                    type="text" 
                    id="genre-input" 
                    placeholder="Genre"
                    value={state.genre}
                    onChange={e => updateInput(e, "genre")}
                ></input>
                <button onClick={e => handleSubmit(e)}>Submit</button>
            </form>
        </section>
    );
}

export default Bookform;