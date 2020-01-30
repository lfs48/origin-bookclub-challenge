import * as booksAPIUtil from '../../util/api/books_api_util';
import {RECEIVE_BOOK, RECEIVE_ALL_BOOKS, REMOVE_BOOK} from '../types';


// Standard actions

// Action to add a book to state.
const receiveBook = (book) => ({
    type: RECEIVE_BOOK,
    book: book
});

// Action to add collection of books to state.
const receiveAllBooks = (books) => ({
    type: RECEIVE_ALL_BOOKS,
    books: books
});

const removeBook = (id) => ({
    type: REMOVE_BOOK,
    id: id
})

// Thunk actions

// Makes an http request for a book by id.
// Then creates and dispatches an action to add that book to state.
export const fetchBook = (id) => (dispatch) => {
    return booksAPIUtil.fetchBook(id).then(
        (book) => dispatch( receiveBook(book) )
    );
};

// Makes an http request for collection of all books.
// Then creates and dispatches an action to add books to state.
export const fetchBooks = () => (dispatch) => {
    return booksAPIUtil.fetchBooks().then(
        (books) => dispatch(receiveAllBooks(books))
    );
};

// Makes an http request to create a new book from form data.
// Then creates an action to add the newly created book to state and dispatches the action.
// If book creation fails, instead creates and dispatches an action to add errors to state.
export const createbook = (formBook) => (dispatch) => {
    return booksAPIUtil.createBook(formBook).then(
        (book) => dispatch(receiveBook(book))
    );
};

export const updateBook = (formBook) => (dispatch) => {
    return booksAPIUtil.updateBook(formBook).then(
        (book) => dispatch(receiveBook(book))
    );
};

export const deleteBook = (id) => (dispatch) => {
    return booksAPIUtil.deleteBook(id).then(
        () => dispatch(removeBook(id))
    );
};