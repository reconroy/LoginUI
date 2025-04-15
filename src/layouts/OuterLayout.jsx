import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const OuterLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simple header for non-authenticated pages */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">Your App Name</Link>
            <div className="hidden sm:block">
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mr-2 inline-block">
                Login
              </Link>
              <Link to="/register" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors inline-block">
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content area with left text and right panel */}
      <main className="container mx-auto py-12 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left side text - hidden on small screens */}
          <div className="w-full lg:w-1/2 hidden md:block">
            <div className="pr-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Platform</h1>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of users who trust our platform for their daily needs.
                Get started today and experience the difference.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Secure and reliable platform</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">24/7 customer support</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Easy to use interface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side panel - full width on small screens */}
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Panel content - will be replaced with your specific content later */}
              <Outlet />
            </div>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Your App Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OuterLayout;
