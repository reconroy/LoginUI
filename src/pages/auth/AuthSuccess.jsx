import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useThemeStore } from '../../store';
import API from '../../services/API';

const AuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isDarkMode } = useThemeStore();
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('Processing authentication...');

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (!token) {
      setStatus('error');
      setMessage('Authentication failed: No token received');
      return;
    }

    const processToken = async () => {
      try {
        // Store the token
        localStorage.setItem('token', token);
        
        // Get user info from token (you might want to decode the JWT or make an API call)
        // For now, we'll make a simple API call to get user data
        const userData = await API.get('/users/me');
        
        if (userData) {
          // Login the user
          login({
            id: userData._id,
            name: userData.fullName,
            email: userData.email,
            role: userData.role || 'user',
            token: token
          });
          
          setStatus('success');
          setMessage('Authentication successful! Redirecting...');
          
          // Redirect to dashboard after a short delay
          setTimeout(() => {
            navigate('/dashboard');
          }, 1500);
        } else {
          throw new Error('Failed to get user data');
        }
      } catch (error) {
        console.error('Auth processing error:', error);
        setStatus('error');
        setMessage('Authentication failed: ' + (error.message || 'Unknown error'));
      }
    };

    processToken();
  }, [searchParams, login, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {status === 'processing' && (
        <div className="animate-pulse">
          <svg className="w-12 h-12 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </div>
      )}
      
      {status === 'success' && (
        <svg className="w-16 h-16 text-green-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      
      {status === 'error' && (
        <svg className="w-16 h-16 text-red-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      
      <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4`}>
        {status === 'processing' ? 'Processing' : status === 'success' ? 'Success!' : 'Error'}
      </h2>
      
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-md`}>
        {message}
      </p>
      
      {status === 'error' && (
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Login
        </button>
      )}
    </div>
  );
};

export default AuthSuccess;
