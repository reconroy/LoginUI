import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useSidebarStore from '../store/useSidebarStore';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const {
    isPrimarySidebarOpen,
    isSecondarySidebarOpen,
    togglePrimarySidebar,
    toggleSecondarySidebar
  } = useSidebarStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and sidebar toggle */}
          <div className="flex items-center">
            {/* Primary sidebar toggle */}
            <button
              onClick={togglePrimarySidebar}
              className="p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
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
            <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Home
            </Link>
            <Link to="/dashboard/reports" className="px-3 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Reports
            </Link>
            <Link to="/dashboard/settings" className="px-3 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Settings
            </Link>
          </div>

          {/* Right side - User menu and secondary sidebar toggle */}
          <div className="flex items-center">
            {/* User dropdown */}
            <div className="relative ml-3">
              <div className="flex items-center">
                <span className="hidden md:block mr-3">{user?.name || 'User'}</span>
                <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white">
                  <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                </button>
              </div>
            </div>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="ml-4 px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Logout
            </button>

            {/* Secondary sidebar toggle */}
            <button
              onClick={toggleSecondarySidebar}
              className="ml-4 p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
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

      {/* Mobile menu - Only visible on small screens */}
      <div className="md:hidden border-t border-blue-700">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/dashboard" className="block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Home
          </Link>
          <Link to="/dashboard/reports" className="block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Reports
          </Link>
          <Link to="/dashboard/settings" className="block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
