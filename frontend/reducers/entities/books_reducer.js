import { merge } from 'lodash';
import {RECEIVE_BOOK, RECEIVE_ALL_BOOKS} from '../../actions/types';

const booksReducer = (state = {}, action) => {
    // Copy of state is created and state is frozen to ensure this function does not create side effects
    const newState = merge({}, state);
    Object.freeze(state);

    switch (action.type) {
        default: return state;

        // Sets key in new state corresponding to book's id to be book info provided by action
        // Returns the new state
        case(RECEIVE_BOOK): {
            newState[action.book.id] = action.book
            return newState;
        }

        // Returns the books collection provided by action to replace previous state
        case(RECEIVE_ALL_BOOKS): {
            return action.books;
        }
    }
};

export default booksReducer;