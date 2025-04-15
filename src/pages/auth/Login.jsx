import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useThemeStore } from '../../store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isDarkMode } = useThemeStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // For demo purposes, we'll accept any credentials
      // In a real app, you would validate against a backend
      const userData = {
        id: 1,
        name: 'Demo User',
        email: email,
        role: 'admin'
      };

      // Call the login function from auth context
      login(userData);

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);

    // Simulate social login
    setTimeout(() => {
      const userData = {
        id: 2,
        name: `${provider} User`,
        email: `user@${provider.toLowerCase()}.com`,
        role: 'user'
      };

      login(userData);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="relative z-20 w-full max-w-md mx-auto">
      <h1 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Sign In</span>
      </h1>

      {error && (
        <div className={`${isDarkMode ? 'bg-red-900/50 border-red-800 text-red-200' : 'bg-red-100 border-red-400 text-red-700'} border px-4 py-3 rounded-md mb-4 animate-shake`}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="group">
          <label htmlFor="email" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 sm:py-3 border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'} rounded-md focus:outline-none transition-colors duration-200`}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="group">
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Password
            </label>
            <div className="text-sm">
              <Link to="/forgot-password" className={`font-medium ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 sm:py-3 border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400' : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'} rounded-md focus:outline-none transition-colors duration-200`}
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className={`h-4 w-4 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-blue-400 focus:ring-blue-400' : 'text-blue-600 focus:ring-blue-500 border-gray-300'} rounded transition-colors duration-200`}
          />
          <label htmlFor="remember-me" className={`ml-2 block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Remember me
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center items-center py-2 sm:py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : 'Sign in'}
          </button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className={`w-full border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className={`px-2 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>Or continue with</span>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3">
          <button
            onClick={() => handleSocialLogin('Google')}
            className={`w-full inline-flex justify-center py-2 px-2 sm:px-4 border ${isDarkMode ? 'border-gray-700 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} transition-colors duration-200`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
            </svg>
          </button>

          <button
            onClick={() => handleSocialLogin('Facebook')}
            className={`w-full inline-flex justify-center py-2 px-2 sm:px-4 border ${isDarkMode ? 'border-gray-700 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} transition-colors duration-200`}
          >
            <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </button>

          <button
            onClick={() => handleSocialLogin('Twitter')}
            className={`w-full inline-flex justify-center py-2 px-2 sm:px-4 border ${isDarkMode ? 'border-gray-700 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} transition-colors duration-200`}
          >
            <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Don't have an account?{' '}
          <Link to="/register" className={`font-medium ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
