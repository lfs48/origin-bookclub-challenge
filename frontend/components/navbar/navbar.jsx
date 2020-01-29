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

    const updateInput = (e, field) => {
        e.preventDefault();
        const newState = merge({}, state);
        newState[field] = e.target.value;
        setState(newState);
    }

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
            <label htmlFor="nav-username-input"></label>
            <input 
                type="text" 
                id="nav-username-input" 
                placeholder="Username"
                value={state.username}
                onChange={e => updateInput(e, "username")}
            ></input>

            <label htmlFor="nav-password-input"></label>
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