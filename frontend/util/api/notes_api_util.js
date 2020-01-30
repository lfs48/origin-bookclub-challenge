// Each of these methods sends an http request using jquery's ajax method to the rails api.

// GET request for a note by id.
// id should be an integer.
export const fetchNote = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/notes/${id}`
    });
};

// GET request for collection of all notes.
export const fetchAllNotes = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/notes'
    });
};

// GET request for collection of specific user's notes notes.
export const fetchUserNotes = (userId) => {
    return $.ajax({
        method: 'GET',
        url: 'api/notes',
        data: {
            note: {
                user_id: userId
            }
        }
    });
};

// POST request to create a new note.
// note should be json object containing title, author, and genre keys.
export const createNote = (note) => {
    return $.ajax({
        method: 'POST',
        url: 'api/notes',
        data: { note: note }
    });
};

// POST request to update a new note.
// note should be json object containing title, author, and genre keys.
export const updateNote = (note) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/notes/${note.id}`,
        data: { note: note }
    });
};


// POST request to delete a note by id.
export const deleteNote = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/notes/${id}`
    });
};