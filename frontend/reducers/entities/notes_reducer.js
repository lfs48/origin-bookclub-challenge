import { merge } from 'lodash';
import {RECEIVE_NOTE, RECEIVE_USER_NOTES, REMOVE_NOTE} from '../../actions/types';

const notesReducer = (state = {}, action) => {
    // Copy of state is created and state is frozen to ensure this function does not create side effects
    const newState = merge({}, state);
    Object.freeze(state);

    switch (action.type) {
        default: return state;

        case(RECEIVE_NOTE): {
            newState[action.note.id] = action.note;
            return newState;
        }

        case(RECEIVE_USER_NOTES): {
            return action.notes
        }

        case(REMOVE_NOTE): {
            delete newState[action.id];
            return newState;
        }
    }
};

export default notesReducer;