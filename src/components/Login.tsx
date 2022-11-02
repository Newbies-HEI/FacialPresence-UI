import { Button, Input, InputLabel } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate();
    return(
        <>
        <div className="container-login">
            <div className='login'>
                <div className='login-title' >
                    <h1>Login</h1>
                </div>
                <div className="login-body">
                    <div>
                        <InputLabel>Username:</InputLabel>
                        <Input/>
                    </div>
                    <div>
                        <InputLabel>Password:</InputLabel>
                        <Input type='password'/> 
                    </div>
                    <div>
                        <Button color='primary' variant='contained' onClick={() => {
                            Navigate("/NewEvent")
                        }}>Continue</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;
