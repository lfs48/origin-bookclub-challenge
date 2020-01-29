import * as SessionAPIUtil from '../../util/api/session_api_util';
import {LOGIN_USER, LOGOUT_USER} from '../types';

// Standard actions

export const loginUser = (user) => ({
    type: LOGIN_USER,
    user: user
});

export const logoutUser = () => ({
    type: LOGOUT_USER
})

// Thunk actions

// Make an http request to log in a user.
// Then creates and dispatches an action to add that user to state.
export const login = (user) => (dispatch) => {
    return SessionAPIUtil.login(user)
    .then( (res) => dispatch(receiveUser(res.data.user) ) );
};