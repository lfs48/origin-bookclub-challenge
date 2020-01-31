import { combineReducers } from 'redux';
import {signupErrorsReducer} from './signup_errors_reducer';

// Combines all lower-level errors reducers, to be passed to the root reducer under the 'errors' key.
const errorsReducer = combineReducers({
    signup: signupErrorsReducer
});

export default errorsReducer;