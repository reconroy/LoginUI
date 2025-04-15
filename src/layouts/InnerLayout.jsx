import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PrimarySideBar from '../components/PrimarySideBar';
import SecondarySideBar from '../components/SecondarySideBar';
import Breadcrumb from '../components/Breadcrumb';
import { Outlet } from 'react-router-dom';

const InnerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />

      <div className="flex flex-1">
        <PrimarySideBar />

        <main className="flex-1 p-4">
          {/* Breadcrumb component */}
          <Breadcrumb />

          {/* Page content will be rendered here */}
          <div className="bg-white p-4 rounded-md shadow">
            <Outlet />
          </div>
        </main>

        <SecondarySideBar />
      </div>

      <Footer />
    </div>
  );
};

export default InnerLayout;
