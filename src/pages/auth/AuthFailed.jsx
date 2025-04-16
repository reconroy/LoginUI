import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../../store';

const AuthFailed = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <svg className="w-16 h-16 text-red-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      
      <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4`}>
        Authentication Failed
      </h2>
      
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-md`}>
        We couldn't authenticate you with Google. This could be due to a network issue, 
        or you may have cancelled the authentication process.
      </p>
      
      <button
        onClick={() => navigate('/login')}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Return to Login
      </button>
    </div>
  );
};

export default AuthFailed;
