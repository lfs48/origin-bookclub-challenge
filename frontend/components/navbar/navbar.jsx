import React from 'react';

const Navbar = () => {
    return(
        <nav id="nav-container">
            <label htmlFor="nav-username-input"></label>
            <input type="text" id="nav-username-input" placeholder="Username"></input>

            <label htmlFor="nav-password-input"></label>
            <input type="password" id="nav-password-input" placeholder="Password"></input>
            <button id="nav-login-button">Log In</button>
            <button id="nav-register-button">New User? Register an Account!</button>
        </nav>
    )
}

export default Navbar;