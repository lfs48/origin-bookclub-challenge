import * as FavoritesAPIUtil from '../../util/api/favorites_api_util';
import {receiveUser} from './user_actions';

// Makes an http request to create a new like from data.
// Then creates an action to add the user adding the favorite to state and dispatches the action.
// Data should contain a userId and bookId key.
export const createFavorite = (userId, bookId) => (dispatch) => {
    return FavoritesAPIUtil.favorite(userId, bookId).then(
        (user) => dispatch(receiveUser(user))
    );
};