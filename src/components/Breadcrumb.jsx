import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

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
    <div className="bg-gray-100 p-2 mb-4 rounded-md">
      <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            {pathnames.length > 0 && <span className="mx-2 text-gray-500">/</span>}
          </li>
          
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNameMap[value] || value;
            
            return (
              <li key={to} className="flex items-center">
                {isLast ? (
                  <span className="text-blue-600">{displayName}</span>
                ) : (
                  <>
                    <Link to={to} className="text-gray-600 hover:text-blue-600">
                      {displayName}
                    </Link>
                    <span className="mx-2 text-gray-500">/</span>
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
