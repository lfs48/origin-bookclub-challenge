import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import sessionsReducer from './sessions/sessions_reducer'

// Combines all lower-level entities reducers, to be passed to the root reducer under the 'entities' key.
const entitiesReducer = combineReducers({
    users: usersReducer
});

export default entitiesReducer;