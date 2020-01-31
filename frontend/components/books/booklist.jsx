import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link, Redirect} from 'react-router-dom';4
import {deleteBook} from '../../actions/entities/book_actions'
import {createFavorite, removeFavorite} from '../../actions/entities/favorite_actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart, faPlusSquare, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Booklist = ({match, history}) => {

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
        dispatch(removeFavorite(currentUser.id, id));
    }

    const handleEdit = (e, id) => {
        e.preventDefault();
        history.push(`/edit_book/${id}`);
    }

    const lis = Object.entries(books).map( (keyval, i) => {
        const id = parseInt(keyval[0]);
        const book = keyval[1]
        if (match.path === "/favorites" && !currentUser.favorites.includes(id) ) {return <></>}
        return(
            <li key={i}>
                {!currentUser.favorites.includes(id) ?
                <FontAwesomeIcon className="fa" onClick={e => handleFavorite(e, id)} icon={faPlusSquare} color="gray"/>
                :
                <FontAwesomeIcon className="fa" onClick={e => handleUnfavorite(e, id)} icon={faHeart} color="red" />
                }
                {currentUser.id === book.uploader_id ? 
                    <>
                    <FontAwesomeIcon className="fa" onClick={e => handleEdit(e, id)} icon={faEdit} color="gray"/>
                    <FontAwesomeIcon className="fa" onClick={e => handleDelete(e, id)} icon={faTrash} color="gray"/>
                    </>
                :<></>}
                <Link className="book-link" to={`/book/${book.id}`}>{book.title}</Link>
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