import { combineReducers } from 'redux';
import entitiesReducer from './entities/users_reducer';
import sessionsReducer from './sessions/sessions_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    sessions: sessionsReducer
});

export default rootReducer;