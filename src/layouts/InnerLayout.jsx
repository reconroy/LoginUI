import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PrimarySideBar from '../components/PrimarySideBar';
import SecondarySideBar from '../components/SecondarySideBar';
import Breadcrumb from '../components/Breadcrumb';
import { Outlet } from 'react-router-dom';
import { useSidebarStore, useThemeStore } from '../store';

const InnerLayout = () => {
  const { isFooterVisible, isPrimarySidebarOpen, togglePrimarySidebar } = useSidebarStore();
  const { isDarkMode } = useThemeStore();

  return (
    <div className={`flex flex-col h-screen overflow-hidden bg-gray-900 transition-colors duration-300`}>
      {/* Navbar at the top - permanently dark */}
      <Navbar className="flex-shrink-0" />

      {/* Main content area with sidebars */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile overlay - only visible when sidebar is open on mobile */}
        {isPrimarySidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={togglePrimarySidebar}
            aria-hidden="true"
          />
        )}
        {/* Primary sidebar - left side - permanently dark */}
        <PrimarySideBar />

        {/* Main content - with left padding on medium screens and up */}
        <main className="flex-1 flex flex-col overflow-hidden w-full">
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
