import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send request to server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    return (
        <form>
            <label>
                Username:
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
    );
}

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
};