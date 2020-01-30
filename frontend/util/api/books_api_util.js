// Each of these methods sends an http request using jquery's ajax method to the rails api.

// GET request for a book by id.
// id should be an integer.
export const fetchBook = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/books/${id}`
    });
};

// GET request for collection of all books.
export const fetchBooks = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/books'
    });
};

// POST request to create a new book.
// book should be json object containing title, author, and genre keys.
export const createBook = (book) => {
    return $.ajax({
        method: 'POST',
        url: 'api/books',
        data: { book: book }
    });
};

// POST request to update a new book.
// book should be json object containing title, author, and genre keys.
export const updateBook = (book) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/books/${book.id}`,
        data: { book: book }
    });
};


// POST request to delete a book by id.
export const deleteBook = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/books/${id}`
    });
};