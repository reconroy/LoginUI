import React, { useEffect } from 'react';

const Notification = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getNotificationStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-400 text-green-700';
      case 'error':
        return 'bg-red-100 border-red-400 text-red-700';
      case 'info':
        return 'bg-blue-100 border-blue-400 text-blue-700';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-700';
    }
  };

  return (
    <div className={`fixed top-4 right-4 px-4 py-3 border rounded ${getNotificationStyles()} z-50`} role="alert">
      <div className="flex items-center">
        <span className="block sm:inline">{message}</span>
        <button 
          onClick={onClose}
          className="ml-4 font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;