import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/User/UserContext';
import * as types from '../../reducers/User/types';
import LoginComponent from '../../components/Login/LoginComponent';
import UserService from '../../services/UserService';
import { validateStrings, validateEmail } from '../../utils/Validators';
 
const Login = () => {
    const history = useHistory();
    const { dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const login = async e => {
        try {
            e.preventDefault();
            setError('');
            if (!validateStrings(email, password)) {
                setError('Debes completar el campo de correo y/o contraseña.');
            } else if (!validateEmail(email)) {
                setError('Debes escribir un correo válido.');
            } else {
                setLoading(true);
                const response = await UserService.signIn(email.trim(), password.trim());
                const value = response.value ? response.value : '';
                localStorage.setItem('token', JSON.stringify({ value}));
                dispatch({type: types.ADD_TOKEN,  value });
                history.push('/home');
                setLoading(false);
            }
        } catch (error) {
            if (error.message === 'Password incorrect') {
              setError('La contraseña no coincide con el correo ingresado.');
            } else if (error.message === `Not found user with username ${email}`) {
              setError(`No existe un usuario asociado al correo ${email}`);
            } else {
                setError('Ocurrió un error inesperando en el inicio de sesión. Intenta de nuevo.');
            }
            setLoading(false);
        }
    }

    return (
        <LoginComponent 
            email={email} 
            password={password} 
            setEmail={setEmail} 
            setPassword={setPassword} 
            loading={loading} 
            setLoading={setLoading}  
            error={error} 
            login={login} 
        />
    );
}

export default Login;