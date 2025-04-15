import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSidebarStore } from '../store';
import ThemeToggle from './common/ThemeToggle';

const Navbar = ({ className = '' }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const {
    isPrimarySidebarOpen,
    isSecondarySidebarOpen,
    togglePrimarySidebar,
    toggleSecondarySidebar
  } = useSidebarStore();
  // We're not using isDarkMode here as the navbar is permanently dark

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={`bg-gray-900 text-white shadow-md ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and sidebar toggle */}
          <div className="flex items-center">
            {/* Primary sidebar toggle */}
            <button
              onClick={togglePrimarySidebar}
              className="p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white z-50 relative"
              aria-label="Toggle primary sidebar"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isPrimarySidebarOpen ? '' : 'transform rotate-180'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/dashboard" className="ml-4 font-bold text-xl">
              Dashboard
            </Link>
          </div>

          {/* Center - Navigation links (hidden on small screens) */}
          <div className="hidden md:flex items-center space-x-4">
            CUPL | EMS
          </div>
          {/* <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Home
            </Link>
            <Link to="/dashboard/reports" className="px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Reports
            </Link>
            <Link to="/dashboard/settings" className="px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Settings
            </Link>
          </div> */}

          {/* Right side - User menu and secondary sidebar toggle */}
          <div className="flex items-center">
            {/* User dropdown */}
            <div className="relative ml-3">
              <div className="flex items-center">
                <span className="hidden md:block mr-3">{user?.name || 'User'}</span>
                <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                </button>
              </div>
            </div>

            {/* Logout button with icon */}
            <button
              onClick={handleLogout}
              className="ml-4 p-2 rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Logout"
              title="Logout"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>

            {/* Theme toggle */}
            <div className="ml-4 hidden sm:block">
              <ThemeToggle />
            </div>

            {/* Secondary sidebar toggle - only visible on large screens */}
            <button
              onClick={toggleSecondarySidebar}
              className="ml-4 p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white hidden lg:block"
              aria-label="Toggle secondary sidebar"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isSecondarySidebarOpen ? '' : 'transform rotate-180'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Only visible on small screens with theme toggle for mobile */}
      {/* <div className="md:hidden border-t border-gray-800">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="flex justify-end mb-2 sm:hidden">
            <ThemeToggle />
          </div>
          <Link to="/dashboard" className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Home
          </Link>
          <Link to="/dashboard/reports" className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Reports
          </Link>
          <Link to="/dashboard/settings" className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Settings
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
