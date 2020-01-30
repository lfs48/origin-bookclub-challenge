import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createbook} from '../../actions/entities/book_actions';
import {merge} from 'lodash';

const Bookform = () => {

    const [state, setState] = useState({
        title: "",
        author: "",
        genre: "",
    });

    const dispatch = useDispatch();

    const {currentUser} = useSelector(
        state => ({
            currentUser: state.entities.users[state.sessions.id]
        })
    );

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
        dispatch(createbook(book));
    }

    return(
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
    );
}

export default Bookform;