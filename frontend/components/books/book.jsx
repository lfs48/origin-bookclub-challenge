import React from 'react';
import {useSelector} from 'react-redux';

const Book = ({match}) => {

    const {book} = useSelector(
        state => ({
            book: state.entities.books[match.params.id] || {title:"",author:"",genre:""}
        })
    );

    return(
        <section id="book-container">
            <header>Title: {book.title}</header>
            <span>Author: {book.author}</span>
            <span>Genre: {book.genre}</span>
        </section>
    );
}

export default Book;