import React from 'react';
import { useSidebarStore } from '../store';

const SecondarySideBar = () => {
  const { isSecondarySidebarOpen } = useSidebarStore();

  // Sample data for notifications
  const notifications = [
    { id: 1, type: 'info', message: 'System update scheduled for tonight', time: '2 hours ago' },
    { id: 2, type: 'warning', message: 'Your storage is almost full', time: '5 hours ago' },
    { id: 3, type: 'success', message: 'Report has been generated successfully', time: '1 day ago' },
  ];

  // Sample data for recent activities
  const activities = [
    { id: 1, user: 'John Doe', action: 'created a new report', time: '10 minutes ago' },
    { id: 2, user: 'Jane Smith', action: 'updated user settings', time: '1 hour ago' },
    { id: 3, user: 'Mike Johnson', action: 'deleted a file', time: '3 hours ago' },
    { id: 4, user: 'Sarah Williams', action: 'added a new user', time: '1 day ago' },
  ];

  // Function to render notification icon based on type
  const renderNotificationIcon = (type) => {
    switch (type) {
      case 'info':
        return (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case 'warning':
        return (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        );
      case 'success':
        return (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-500 flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <aside
      className={`bg-gray-50 border-l border-gray-200 transition-all duration-300 ease-in-out ${isSecondarySidebarOpen ? 'w-80' : 'w-0'} overflow-hidden h-full`}
    >
      <div className="h-full flex flex-col">
        {/* Sidebar header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-bold text-xl text-gray-800">Activity</h2>
        </div>

        {/* Notifications section */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-3">Notifications</h3>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start space-x-3">
                {renderNotificationIcon(notification.type)}
                <div>
                  <p className="text-sm text-gray-800">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all notifications
          </button>
        </div>

        {/* Recent activity section */}
        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="font-semibold text-gray-700 mb-3">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="border-l-2 border-gray-200 pl-3 py-1">
                <p className="text-sm font-medium text-gray-800">{activity.user}</p>
                <p className="text-sm text-gray-600">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Clear All
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SecondarySideBar;
