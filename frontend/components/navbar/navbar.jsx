import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {login} from '../../actions/entities/user_actions';
import {merge} from 'lodash';

const Navbar = () => {
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const dispatch = useDispatch();

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

    return(
        <nav id="nav-container">
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
            <button id="nav-register-button">New User? Register an Account!</button>
        </nav>
    )
}

export default Navbar;