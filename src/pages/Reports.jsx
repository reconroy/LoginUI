import React from 'react';

const Reports = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
          <p className="text-gray-600 mb-4">
            View and analyze your monthly sales data with detailed breakdowns by product category and region.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View Report
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">User Activity</h2>
          <p className="text-gray-600 mb-4">
            Track user engagement metrics including active users, session duration, and feature usage.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View Report
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Inventory Status</h2>
          <p className="text-gray-600 mb-4">
            Monitor inventory levels, restocking needs, and product turnover rates.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View Report
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Financial Summary</h2>
          <p className="text-gray-600 mb-4">
            Review revenue, expenses, and profit margins with quarterly and yearly comparisons.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
