import React, { useState } from 'react';
import useSidebarStore from '../../store/useSidebarStore';
import { useThemeStore } from '../../store';
import ThemeToggle from '../../components/common/ThemeToggle';

const Settings = () => {
  const {
    isPrimarySidebarOpen,
    isSecondarySidebarOpen,
    isFooterVisible,
    setPrimarySidebar,
    setSecondarySidebar,
    setFooterVisibility
  } = useSidebarStore();

  const { isDarkMode, toggleTheme } = useThemeStore();

  const [formData, setFormData] = useState({
    notifications: true,
    marketing: false,
    updates: true
  });

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <div className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="space-y-8">
        {/* Theme Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
          <h2 className="text-lg font-semibold mb-4">Theme Preferences</h2>

          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Toggle between light and dark theme</p>
            </div>
            <ThemeToggle />
          </div>

          <div className="border-t my-4 border-gray-200 dark:border-gray-700"></div>

          <h2 className="text-lg font-semibold my-4">Layout Preferences</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Primary Sidebar</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Show or hide the left sidebar</p>
              </div>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                <input
                  type="checkbox"
                  id="primary-sidebar"
                  name="primary-sidebar"
                  className="absolute w-6 h-6 opacity-0"
                  checked={isPrimarySidebarOpen}
                  onChange={() => setPrimarySidebar(!isPrimarySidebarOpen)}
                />
                <label
                  htmlFor="primary-sidebar"
                  className={`block w-full h-full rounded-full cursor-pointer ${
                    isPrimarySidebarOpen
                      ? 'bg-blue-600 dark:bg-blue-500'
                      : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute left-0 w-6 h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full ${
                      isPrimarySidebarOpen ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between lg:block hidden">
              <div>
                <h3 className="font-medium">Secondary Sidebar</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Show or hide the right sidebar</p>
              </div>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                <input
                  type="checkbox"
                  id="secondary-sidebar"
                  name="secondary-sidebar"
                  className="absolute w-6 h-6 opacity-0"
                  checked={isSecondarySidebarOpen}
                  onChange={() => setSecondarySidebar(!isSecondarySidebarOpen)}
                />
                <label
                  htmlFor="secondary-sidebar"
                  className={`block w-full h-full rounded-full cursor-pointer ${
                    isSecondarySidebarOpen
                      ? 'bg-blue-600 dark:bg-blue-500'
                      : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute left-0 w-6 h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full ${
                      isSecondarySidebarOpen ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <h3 className="font-medium">Footer</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Show or hide the footer</p>
              </div>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                <input
                  type="checkbox"
                  id="footer-visibility"
                  name="footer-visibility"
                  className="absolute w-6 h-6 opacity-0"
                  checked={isFooterVisible}
                  onChange={() => setFooterVisibility(!isFooterVisible)}
                />
                <label
                  htmlFor="footer-visibility"
                  className={`block w-full h-full rounded-full cursor-pointer ${
                    isFooterVisible
                      ? 'bg-blue-600 dark:bg-blue-500'
                      : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute left-0 w-6 h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full ${
                      isFooterVisible ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
          <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Receive notifications via email</p>
              </div>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                <input
                  type="checkbox"
                  id="notifications"
                  name="notifications"
                  className="absolute w-6 h-6 opacity-0"
                  checked={formData.notifications}
                  onChange={handleToggleChange}
                />
                <label
                  htmlFor="notifications"
                  className={`block w-full h-full rounded-full cursor-pointer ${
                    formData.notifications
                      ? 'bg-blue-600 dark:bg-blue-500'
                      : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute left-0 w-6 h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full ${
                      formData.notifications ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Marketing Emails</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Receive marketing and promotional emails</p>
              </div>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  className="absolute w-6 h-6 opacity-0"
                  checked={formData.marketing}
                  onChange={handleToggleChange}
                />
                <label
                  htmlFor="marketing"
                  className={`block w-full h-full rounded-full cursor-pointer ${
                    formData.marketing
                      ? 'bg-blue-600 dark:bg-blue-500'
                      : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute left-0 w-6 h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full ${
                      formData.marketing ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Product Updates</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Receive notifications about product updates</p>
              </div>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                <input
                  type="checkbox"
                  id="updates"
                  name="updates"
                  className="absolute w-6 h-6 opacity-0"
                  checked={formData.updates}
                  onChange={handleToggleChange}
                />
                <label
                  htmlFor="updates"
                  className={`block w-full h-full rounded-full cursor-pointer ${
                    formData.updates
                      ? 'bg-blue-600 dark:bg-blue-500'
                      : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute left-0 w-6 h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full ${
                      formData.updates ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
