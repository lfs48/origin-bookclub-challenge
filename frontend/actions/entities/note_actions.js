import * as notesAPIUtil from '../../util/api/notes_api_util';
import {RECEIVE_NOTE, RECEIVE_USER_NOTES, REMOVE_NOTE} from '../types';


// Standard actions

// Action to add a note to state.
const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note: note
});

// Action to add collection of notes to state.
const receiveUserNotes = (notes) => ({
    type: RECEIVE_USER_NOTES,
    notes: notes
});

const removeNote = (id) => ({
    type: REMOVE_NOTE,
    id: id
})

// Thunk actions

// Makes an http request for a note by id.
// Then creates and dispatches an action to add that note to state.
export const fetchNote = (id) => (dispatch) => {
    return notesAPIUtil.fetchNote(id).then(
        (note) => dispatch( receiveNote(note) )
    );
};

// Makes an http request for collection of all notes.
// Then creates and dispatches an action to add notes to state.
export const fetchNotes = (userId) => (dispatch) => {
    return notesAPIUtil.fetchNotes(userId).then(
        (notes) => dispatch(receiveUserNotes(notes))
    );
};

// Makes an http request to create a new note from form data.
// Then creates an action to add the newly created note to state and dispatches the action.
// If note creation fails, instead creates and dispatches an action to add errors to state.
export const createNote = (formNote) => (dispatch) => {
    return notesAPIUtil.createNote(formNote).then(
        (note) => dispatch(receiveNote(note))
    );
};

export const updateNote = (formNote) => (dispatch) => {
    return notesAPIUtil.updateNote(formNote).then(
        (note) => dispatch(receiveNote(note))
    );
};

export const deleteNote = (id) => (dispatch) => {
    return notesAPIUtil.deleteNote(id).then(
        () => dispatch(removeNote(id))
    );
};