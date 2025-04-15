import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useThemeStore } from '../store';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const { isDarkMode } = useThemeStore();

  // Map of path segments to display names
  const breadcrumbNameMap = {
    '': 'Home',
    'dashboard': 'Dashboard',
    'profile': 'Profile',
    'settings': 'Settings',
    'users': 'Users',
    // Add more mappings as needed
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-2 mb-4 rounded-md transition-colors duration-300`}>
      <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300`}>
              Home
            </Link>
            {pathnames.length > 0 && <span className={`mx-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>/</span>}
          </li>

          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNameMap[value] || value;

            return (
              <li key={to} className="flex items-center">
                {isLast ? (
                  <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>{displayName}</span>
                ) : (
                  <>
                    <Link to={to} className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300`}>
                      {displayName}
                    </Link>
                    <span className={`mx-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
