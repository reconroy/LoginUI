import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PrimarySideBar from '../components/PrimarySideBar';
import SecondarySideBar from '../components/SecondarySideBar';
import Breadcrumb from '../components/Breadcrumb';
import { Outlet } from 'react-router-dom';
import { useSidebarStore, useThemeStore } from '../store';
import ThemeToggle from '../components/common/ThemeToggle';

const InnerLayout = () => {
  const { isFooterVisible } = useSidebarStore();
  const { isDarkMode } = useThemeStore();

  return (
    <div className={`flex flex-col h-screen overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
      {/* Navbar at the top - permanently dark */}
      <Navbar className="flex-shrink-0" />

      {/* Main content area with sidebars */}
      <div className="flex flex-1 overflow-hidden">
        {/* Primary sidebar - left side - permanently dark */}
        <PrimarySideBar />

        {/* Main content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className={`p-4 flex-1 overflow-auto ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
            {/* Breadcrumb navigation */}
            <div className="mb-4">
              <Breadcrumb />
            </div>

            {/* Page content */}
            <div className={`p-6 rounded-lg shadow-md mt-2 mb-4 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'} transition-colors duration-300`}>
              <Outlet />
            </div>
          </div>
        </main>

        {/* Secondary sidebar - right side - themed */}
        <SecondarySideBar />
      </div>

      {/* Footer - conditionally rendered - permanently dark */}
      {isFooterVisible && <Footer className="flex-shrink-0" />}
    </div>
  );
};

export default InnerLayout;
