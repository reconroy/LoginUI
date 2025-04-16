import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useThemeStore } from '../store';

const NotFound = () => {
  const { isAuthenticated } = useAuth();
  const { isDarkMode } = useThemeStore();

  // Determine the home route based on authentication status
  const homeRoute = isAuthenticated ? '/dashboard' : '/';

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className={`text-6xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4`}>404</h1>
      <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>Page Not Found</h2>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-8 max-w-md`}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to={homeRoute}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {isAuthenticated ? 'Go to Dashboard' : 'Go to Home Page'}
      </Link>
    </div>
  );
};

export default NotFound;
