import React from 'react';
import SignupForm from '../SignupForm';
import { Link } from 'react-router-dom';

function Signin(props) {
    return (
        <div>
            <h1>Signin</h1>
            <SignupForm {...props} />
            <div><Link to="/login">Login</Link></div>
        </div>
    )
}

export default Signin