import { Button, Input, InputLabel } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const Navigate = useNavigate();
    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const authenticate = async () => {
        const response = await axios.post("https://api-dev.hei.school/login",{
            "username": user,
            "password": password
        })
            .then(
                () => {
                    Navigate("/NewEvent")
                }
            )
            .catch(
                () => {
                    Navigate("/NewEvent")
                }
            )
    }
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
                        <Input value = {user}  onChange = {(e) => {setUser(e.target.value)}}/>
                    </div>
                    <div>
                        <InputLabel>Password:</InputLabel>
                        <Input type='password'value = {password}  onChange = {(e) => {setPassword(e.target.value)}}/> 
                    </div>
                    <div>
                        <Button color='primary' variant='contained' className="login-button" onClick={
                            () => {
                                authenticate()
                            }}>
                                Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;
