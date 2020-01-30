import React, {useState} from 'react';
import {merge} from 'lodash';

const Bookform = () => {

    const [state, setState] = useState({
        title: "",
        author: "",
        genre: ""
    });

    const updateInput = (e, field) => {
        e.preventDefault();
        const newState = merge({}, state);
        newState[field] = e.target.value;
        setState(newState);
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
        </form>
    );
}

export default Bookform;