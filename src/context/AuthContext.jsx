import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component that wraps the app and makes auth object available to any child component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on initial load
  useEffect(() => {
    // Check localStorage for saved auth state
    const savedUser = localStorage.getItem('user');
    const savedAuth = localStorage.getItem('isAuthenticated');
    
    if (savedAuth === 'true' && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    }
    
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    
    // Save to localStorage
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
    
    return true;
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    
    // Remove from localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  // Auth context value
  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
