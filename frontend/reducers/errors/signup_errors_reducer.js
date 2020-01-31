import { merge } from 'lodash';
import {RECEIVE_SIGNUP_ERRORS, LOGIN_USER} from '../../actions/types';

const signupErrorsReducer = (state = {}, action) => {
    // Copy of state is created and state is frozen to ensure this function does not create side effects
    const newState = merge({}, state);
    Object.freeze(state);

    switch (action.type) {
        default: return state;
    }
};

export default signupErrorsReducer;