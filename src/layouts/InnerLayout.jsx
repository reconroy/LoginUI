import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PrimarySideBar from '../components/PrimarySideBar';
import SecondarySideBar from '../components/SecondarySideBar';
import Breadcrumb from '../components/Breadcrumb';
import { Outlet } from 'react-router-dom';
import { useSidebarStore } from '../store';

const InnerLayout = () => {
  const { isFooterVisible } = useSidebarStore();

  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
      {/* Navbar at the top */}
      <Navbar className="flex-shrink-0" />

      {/* Main content area with sidebars */}
      <div className="flex flex-1 overflow-hidden">
        {/* Primary sidebar - left side */}
        <PrimarySideBar />

        {/* Main content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 flex-1 overflow-auto">
            {/* Breadcrumb navigation */}
            <Breadcrumb />

            {/* Page content */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-4 mb-4">
              <Outlet />
            </div>
          </div>
        </main>

        {/* Secondary sidebar - right side */}
        <SecondarySideBar />
      </div>

      {/* Footer - conditionally rendered */}
      {isFooterVisible && <Footer className="flex-shrink-0" />}
    </div>
  );
};

export default InnerLayout;
