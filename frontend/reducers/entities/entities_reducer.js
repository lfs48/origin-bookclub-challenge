import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import notesReducer from './notes_reducer';

// Combines all lower-level entities reducers, to be passed to the root reducer under the 'entities' key.
const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    notes: notesReducer
});

export default entitiesReducer;