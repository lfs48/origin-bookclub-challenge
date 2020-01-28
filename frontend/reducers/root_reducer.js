import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';

const rootReducer = combineReducers({
    users: usersReducer
});

export default rootReducer;