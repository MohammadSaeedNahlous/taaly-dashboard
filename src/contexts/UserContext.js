// UserContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';

import { auth } from '../lib/firebase';

// Create a context for the user
const UserContext = createContext();

// Create a custom hook to use the user context
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const loginUser = async (email, password) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const logoutUser = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <UserContext.Provider value={ { user, setUser, loginUser, logoutUser } }>
            { children }
        </UserContext.Provider>
    );
};
