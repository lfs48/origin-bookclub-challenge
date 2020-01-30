import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link, Redirect} from 'react-router-dom';4
import {deleteBook} from '../../actions/entities/book_actions'
import {createFavorite} from '../../actions/entities/favorite_actions';

const Booklist = () => {
    const {books, currentUser} = useSelector(
        state => ({
            books: state.entities.books,
            currentUser: state.entities.users[state.sessions.id]
        })
    );

    const dispatch = useDispatch();

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteBook(id));
    }

    const handleFavorite = (e, id) => {
        e.preventDefault();
        dispatch(createFavorite(currentUser.id, id));
    }

    const handleUnfavorite = (e, id) => {
        e.preventDefault();
    }

    const lis = Object.entries(books).map( (keyval, i) => {
        const id = parseInt(keyval[0]);
        const book = keyval[1]
        return(
            <li key={i}>
                <span>Title: {book.title}</span>
                <span>Author: {book.author}</span>
                <span>Genre: {book.genre}</span>
                {currentUser.favorites.includes(id) ?
                <button onClick={e => handleFavorite(e, id)}>Add to Favorites</button>
                :
                <button onClick={e => handleUnfavorite(e, id)}>Remove from Favorites</button>
                }
                {currentUser.id === book.uploader_id ? 
                    <>
                    <Link to={`/edit_book/${book.id}`}>Edit</Link>
                    <button onClick={e => handleDelete(e, id)}>Delete</button>
                    </>
                :<></>}
            </li>
        );
    });

    return(
        <section id="booklist-container">
            <ul>
                {lis}
            </ul>
            <Link to="/create_book">Add a Book</Link>
        </section>
    );
}

export default Booklist;