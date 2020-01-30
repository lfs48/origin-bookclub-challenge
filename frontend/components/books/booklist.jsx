import React from 'react';
import {useSelector} from 'react-redux'

const Booklist = () => {
    const {books} = useSelector(
        state => ({
            books: state.entities.books
        })
    );

    const lis = Object.values(books).map( (book, i) => {
        return(
            <li key={i}>
                <span>Title: {book.title}</span>
                <span>Author: {book.author}</span>
                <span>Genre: {book.genre}</span>
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