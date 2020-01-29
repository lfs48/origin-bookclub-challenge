import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import sessionsReducer from './sessions/sessions_reducer'
const entitiesReducer = combineReducers({
    users: usersReducer
});

export default entitiesReducer;