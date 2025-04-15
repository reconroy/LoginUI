import React from 'react';
import { Outlet } from 'react-router-dom';
import { useThemeStore } from '../store';
import ThemeToggle from '../components/common/ThemeToggle';

const OuterLayout = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      {/* Theme toggle button - visible only on large screens */}
      <div className="fixed top-4 right-4 hidden lg:block z-10">
        <ThemeToggle />
      </div>

      {/* Main content area with left text and right panel */}
      <div className="container max-w-6xl mx-auto py-12 px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left side text - hidden on small screens */}
          <div className="w-full lg:w-1/2 hidden md:block">
            <div className="pr-8">
              <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-300`}>
                Welcome to Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Futuristic Platform</span>
              </h1>
              <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                Join thousands of users who trust our platform for their daily needs.
                Get started today and experience the difference.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className={`ml-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>Secure and reliable platform</p>
                </div>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className={`ml-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>24/7 customer support</p>
                </div>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className={`ml-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>Easy to use interface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side panel - full width on small screens */}
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className={`rounded-lg shadow-xl p-8 backdrop-blur-sm transition-all duration-300 ${isDarkMode ? 'bg-gray-800/90 text-white border border-gray-700' : 'bg-white/90 text-gray-800 border border-gray-200'}`}>
              {/* Theme toggle for small screens */}
              <div className="flex justify-end mb-4 lg:hidden">
                <ThemeToggle />
              </div>

              {/* Panel content - will be replaced with your specific content */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuterLayout;
