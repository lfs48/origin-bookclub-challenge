import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../actions/sessions/sessions_actions';
import {merge} from 'lodash';

const Navbar = () => {
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const dispatch = useDispatch();

    const {loggedIn, currentUser} = useSelector(
        state => ({
            loggedIn: state.sessions.id != null,
            currentUser: state.entities.users[state.sessions.id]
        })
    );

    // Controls input fields by updating react state.
    const updateInput = (e, field) => {
        e.preventDefault();
        const newState = merge({}, state);
        newState[field] = e.target.value;
        setState(newState);
    }

    // Handles login button by dispatching a login action, using info from react state to build user object.
    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username: state.username,
            password: state.password
        };
        dispatch(login(user));
    }

    let content = <></>
    
    if (loggedIn) {
        content = 
        <> 
        <span>Welcome, {currentUser.username}</span>
        </>
    } else {
        content = 
        <>
        <input 
            type="text" 
            id="nav-username-input" 
            placeholder="Username"
            value={state.username}
            onChange={e => updateInput(e, "username")}
        ></input>

        <input 
            type="password" 
            id="nav-password-input" 
            placeholder="Password"
            value={state.password}
            onChange={e => updateInput(e, "password")}
        ></input>

        <button id="nav-login-button" onClick={e => handleLogin(e)}>Log In</button>
        </>
    }

    return (
        <nav id="nav-container">
            {content}
        </nav>
    );
}

export default Navbar;