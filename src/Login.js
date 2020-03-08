import React from 'react';
import { useState } from 'react';
import { login } from './action';
import { connect } from 'react-redux';
import loginData from './Login.json';
import { useEffect } from 'react';

function Login(props) {
    const { isAuthenticated } = props.auth;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(isAuthenticated){
            props.history.replace('/');
        }
    },[isAuthenticated])

    const onLogin = () => {
        if (username === loginData.username && password === loginData.password) {
            const user = {
                username: loginData.username
            }
            props.login(user);
            props.history.push('/');
        }
        else{
            alert('Username or password is incorrect')
        }
    }

    return (
        <div className="card-custom login-bg">
            <h2>Login</h2>
            <div className="input">
                <div className="inputBox">
                    <label htmlFor="">Username</label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text" />
                </div>
                <div className="inputBox">
                    <label htmlFor="">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" />
                </div>
                <div className="inputBox">
                    <input
                        onClick={onLogin}
                        type="button" value="Login" />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { login })(Login);
