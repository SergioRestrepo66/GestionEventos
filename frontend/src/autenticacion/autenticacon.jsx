import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    const register = (userData) => setUsuario(userData);
    const login = (userData) => setUsuario(userData);

    return (
        <AuthContext.Provider value={{ usuario, register, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
