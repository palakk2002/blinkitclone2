import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Mock logged in user - can be toggled for testing
    // Roles: 'user', 'vendor', 'admin'
    const [user, setUser] = useState({
        name: 'Guest User',
        role: 'user', // Change this to 'vendor' or 'admin' to test other modules
        isAuthenticated: true
    });

    const login = (role = 'user') => {
        setUser({
            name: role === 'user' ? 'Rahul Sharma' : role === 'vendor' ? 'Fresh Mart' : 'Admin User',
            role: role,
            isAuthenticated: true
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
