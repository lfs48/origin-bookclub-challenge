import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import sessionsReducer from './sessions/sessions_reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    sessions: sessionsReducer
});

export default rootReducer;