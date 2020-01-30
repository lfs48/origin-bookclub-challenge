import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';4
import {deleteBook} from '../../actions/entities/book_actions'

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
        dispatch(deleteBook(id))
    }

    const lis = Object.entries(books).map( (keyval, i) => {
        const book = keyval[1]
        return(
            <li key={i}>
                <span>Title: {book.title}</span>
                <span>Author: {book.author}</span>
                <span>Genre: {book.genre}</span>
                {currentUser.id === book.uploader_id ? 
                    <>
                    <button>Edit</button>
                    <button onClick={e => handleDelete(e, keyval[0])}>Delete</button>
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