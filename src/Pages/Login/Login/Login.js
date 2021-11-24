import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/UseAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <button onClick={signInUsingGoogle} className="btn btn-warning mt-5 mb-5"  > Sign in Using Google </button>
        </div>
    );
};

export default Login;