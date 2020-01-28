import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/User/UserContext';
import * as types from '../../reducers/User/types';
import LoginComponent from '../../components/Login/LoginComponent';

const Login = () => {
    const history = useHistory();
    const { token, dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = e => {
        e.preventDefault();
        console.log(token);
        localStorage.setItem('token', JSON.stringify({ value: '123 '}));
        dispatch({type: types.ADD_TOKEN,  value: '123' });
        history.push('/home');
    }
    return (
        <LoginComponent email={email} password={password} setEmail={setEmail} setPassword={setPassword} login={login} />
    );
}

export default Login;