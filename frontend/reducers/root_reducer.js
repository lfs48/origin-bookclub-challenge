import { combineReducers } from 'redux';
import entitiesReducer from './entities/entities_reducer';
import sessionsReducer from './sessions/sessions_reducer';
import errorsReducer from './errors/errors_reducer';

// Combines all other high-level reducers to generate redux state.
const rootReducer = combineReducers({
    entities: entitiesReducer,
    sessions: sessionsReducer,
    errors: errorsReducer
});

export default rootReducer;