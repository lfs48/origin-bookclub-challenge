import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';4

const Booklist = () => {
    const {books, currentUser} = useSelector(
        state => ({
            books: state.entities.books,
            currentUser: state.entities.users[state.sessions.id]
        })
    );

    const lis = Object.values(books).map( (book, i) => {
        return(
            <li key={i}>
                <span>Title: {book.title}</span>
                <span>Author: {book.author}</span>
                <span>Genre: {book.genre}</span>
                {currentUser.id === book.uploader_id ? 
                    <>
                    <button>Edit</button>
                    <button>Delete</button>
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