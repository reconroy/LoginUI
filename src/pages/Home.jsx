import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../store';

const Home = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="mb-4">This is the home page of our application.</p>
      <p className="mb-6">You can navigate to other pages using the links below.</p>

      <div className="flex flex-col space-y-4 mt-4">
        <Link
          to="/login"
          className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors text-center`}
        >
          Go to Login Page
        </Link>
        <Link
          to="/register"
          className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} transition-colors text-center`}
        >
          Go to Register Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
