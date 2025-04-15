import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebarStore } from '../store';

const PrimarySideBar = () => {
  const { isPrimarySidebarOpen } = useSidebarStore();
  const location = useLocation();

  // Navigation items
  const navItems = [
    { path: '/dashboard', icon: 'home', label: 'Dashboard' },
    { path: '/dashboard/analytics', icon: 'chart', label: 'Analytics' },
    { path: '/dashboard/reports', icon: 'document', label: 'Reports' },
    { path: '/dashboard/users', icon: 'users', label: 'Users' },
    { path: '/dashboard/settings', icon: 'settings', label: 'Settings' },
  ];

  // Function to check if a path is active
  const isActive = (path) => {
    // Exact match for dashboard home
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    // For other routes, check if the current path matches or is a sub-path
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // Render icons based on name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'home':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'document':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'users':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'settings':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <aside
      className={`bg-gray-900 text-white transition-all duration-300 ease-in-out ${isPrimarySidebarOpen ? 'w-64' : 'w-0 md:w-16'} overflow-hidden h-full fixed md:static z-50 top-16 md:top-0 left-0 bottom-0`}
    >
      <div className="h-full flex flex-col">
        {/* Sidebar header */}
        <div className="p-4 border-b border-gray-800">
          <h2 className={`font-bold text-xl ${isPrimarySidebarOpen ? 'block' : 'hidden md:block text-center'}`}>
            {isPrimarySidebarOpen ? 'Navigation' : ''}
          </h2>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-md transition-colors ${isActive(item.path) ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  <span className="inline-flex">{renderIcon(item.icon)}</span>
                  <span className={`ml-3 ${isPrimarySidebarOpen ? 'block' : 'hidden'}`}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-gray-800">
          <div className={`text-sm text-gray-400 ${isPrimarySidebarOpen ? 'block' : 'hidden'}`}>
            <p>© {new Date().getFullYear()} Your Company</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PrimarySideBar;
