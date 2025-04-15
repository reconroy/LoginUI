import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Welcome to your dashboard.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Users</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold">$5,678</p>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Orders</h2>
          <p className="text-3xl font-bold">9,012</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
