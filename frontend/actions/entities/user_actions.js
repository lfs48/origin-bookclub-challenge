import * as UsersAPIUtil from '../../util/api/user_api_util';
import {RECEIVE_USER, RECEIVE_ALL_USERS} from './types';


// Standard actions

// Action to add a user to state.
const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
});

// Action to add collection of users to state.
const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users: users
});
