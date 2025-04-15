import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PrimarySideBar from '../components/PrimarySideBar';
import SecondarySideBar from '../components/SecondarySideBar';
import Breadcrumb from '../components/Breadcrumb';
import { Outlet } from 'react-router-dom';
import useSidebarStore from '../store/useSidebarStore';

const InnerLayout = () => {
  const { isPrimarySidebarOpen, isSecondarySidebarOpen } = useSidebarStore();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area with sidebars */}
      <div className="flex flex-1 overflow-hidden">
        {/* Primary sidebar - left side */}
        <PrimarySideBar />

        {/* Main content */}
        <main className={`flex-1 transition-all duration-300 overflow-auto p-4 ${isPrimarySidebarOpen ? 'ml-0' : 'ml-0'} ${isSecondarySidebarOpen ? 'mr-0' : 'mr-0'}`}>
          {/* Breadcrumb navigation */}
          <Breadcrumb />

          {/* Page content */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <Outlet />
          </div>
        </main>

        {/* Secondary sidebar - right side */}
        <SecondarySideBar />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InnerLayout;
