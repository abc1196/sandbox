import React, {createContext, useReducer } from 'react';
import { userReducer } from '../../reducers/User/UserReducer';

export const UserContext = createContext();

const initialState = { value: '' };

const UserContextProvider = (props) => {
    const [token, dispatch] = useReducer(userReducer, initialState, () => {
        const localData = localStorage.getItem('token');
        return localData ? JSON.parse(localData) : initialState;
    });
    return (
        <UserContext.Provider value={{token, dispatch}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;