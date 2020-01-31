import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from '../../actions/entities/user_actions'
import {merge} from 'lodash';

const Splash = () => {

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const dispatch = useDispatch();

    const {errors} = useSelector(
        state => ({
            errors: state.errors.signup
        })
    );

    // Controls input fields by updating react state.
    const updateInput = (e, field) => {
        e.preventDefault();
        const newState = merge({}, state);
        newState[field] = e.target.value;
        setState(newState);
    }

    // Handles register button by dispatching a createUser action, using info from react state to build user object.
    const handleRegister = (e) => {
        e.preventDefault();
        const user = {
            username: state.username,
            password: state.password
        };
        dispatch(createUser(user));
    }

    let errorMessages = <></>;

    if (Array.isArray(errors)) {
        errorMessages = errors.map( error => {
            return <li>{error}</li>
        });
    }

    return(
        <section id="splash-container">
            <header>New User? Register An Account!</header>
            <input 
                type="text" 
                id="splash-username-input" 
                placeholder="Username"
                value={state.username}
                onChange={e => updateInput(e, "username")}
            ></input>

            <input 
                type="password" 
                id="splash-password-input" 
                placeholder="Password"
                value={state.password}
                onChange={e => updateInput(e, "password")}
            ></input>

            <button onClick={e => handleRegister(e)}>Register</button>
            
            <ul>
                {errorMessages}
            </ul>
        </section>
    )
}

export default Splash;