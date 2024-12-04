import React, { createContext, useReducer } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Initial state
const initialState = { isAuthenticated: false };

// Reducer function
const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'LOGIN': // Define action types as strings
            return { isAuthenticated: true };
        case 'LOGOUT':
            return { isAuthenticated: false };
        default:
            return state;
    }
};

// Context Provider component
const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
