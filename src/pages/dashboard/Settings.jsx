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
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Settings</h1>

      <div className="space-y-6 sm:space-y-8">
        {/* Theme Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} p-4 sm:p-6 rounded-lg shadow-md transition-colors duration-300`}>
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Theme Preferences</h2>

          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="pr-4">
              <h3 className="text-sm sm:text-base font-medium">Dark Mode</h3>
              <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Toggle between light and dark theme</p>
            </div>
            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>

          <div className="border-t my-3 sm:my-4 border-gray-200 dark:border-gray-700"></div>

          <h2 className="text-base sm:text-lg font-semibold my-3 sm:my-4">Layout Preferences</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-1">
              <div className="pr-4">
                <h3 className="text-sm sm:text-base font-medium">Primary Sidebar</h3>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Show or hide the left sidebar</p>
              </div>
              <div className="relative inline-block w-10 sm:w-12 h-5 sm:h-6 transition duration-200 ease-in-out rounded-full flex-shrink-0 shadow-sm self-center">
                <input
                  type="checkbox"
                  id="primary-sidebar"
                  name="primary-sidebar"
                  className="absolute w-5 sm:w-6 h-5 sm:h-6 opacity-0"
                  checked={isPrimarySidebarOpen}
                  onChange={() => setPrimarySidebar(!isPrimarySidebarOpen)}
                />
                <label
                  htmlFor="primary-sidebar"
                  className={`block w-full h-full rounded-full cursor-pointer border ${
                    isPrimarySidebarOpen
                      ? 'bg-blue-600 dark:bg-blue-500 border-blue-700'
                      : isDarkMode ? 'bg-gray-600 border-gray-700' : 'bg-gray-200 border-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0 bottom-0 my-auto left-0 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full shadow ${
                      isPrimarySidebarOpen ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between py-1 lg:block hidden">
              <div className="pr-4">
                <h3 className="text-sm sm:text-base font-medium">Secondary Sidebar</h3>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Show or hide the right sidebar</p>
              </div>
              <div className="relative inline-block w-10 sm:w-12 h-5 sm:h-6 transition duration-200 ease-in-out rounded-full flex-shrink-0 shadow-sm self-center">
                <input
                  type="checkbox"
                  id="secondary-sidebar"
                  name="secondary-sidebar"
                  className="absolute w-5 sm:w-6 h-5 sm:h-6 opacity-0"
                  checked={isSecondarySidebarOpen}
                  onChange={() => setSecondarySidebar(!isSecondarySidebarOpen)}
                />
                <label
                  htmlFor="secondary-sidebar"
                  className={`block w-full h-full rounded-full cursor-pointer border ${
                    isSecondarySidebarOpen
                      ? 'bg-blue-600 dark:bg-blue-500 border-blue-700'
                      : isDarkMode ? 'bg-gray-600 border-gray-700' : 'bg-gray-200 border-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0 bottom-0 my-auto left-0 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full shadow ${
                      isSecondarySidebarOpen ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between py-1 mt-4">
              <div className="pr-4">
                <h3 className="text-sm sm:text-base font-medium">Footer</h3>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Show or hide the footer</p>
              </div>
              <div className="relative inline-block w-10 sm:w-12 h-5 sm:h-6 transition duration-200 ease-in-out rounded-full flex-shrink-0 shadow-sm self-center">
                <input
                  type="checkbox"
                  id="footer-visibility"
                  name="footer-visibility"
                  className="absolute w-5 sm:w-6 h-5 sm:h-6 opacity-0"
                  checked={isFooterVisible}
                  onChange={() => setFooterVisibility(!isFooterVisible)}
                />
                <label
                  htmlFor="footer-visibility"
                  className={`block w-full h-full rounded-full cursor-pointer border ${
                    isFooterVisible
                      ? 'bg-blue-600 dark:bg-blue-500 border-blue-700'
                      : isDarkMode ? 'bg-gray-600 border-gray-700' : 'bg-gray-200 border-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0 bottom-0 my-auto left-0 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full shadow ${
                      isFooterVisible ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} p-4 sm:p-6 rounded-lg shadow-md transition-colors duration-300`}>
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Notification Preferences</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-1">
              <div className="pr-4">
                <h3 className="text-sm sm:text-base font-medium">Email Notifications</h3>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Receive notifications via email</p>
              </div>
              <div className="relative inline-block w-10 sm:w-12 h-5 sm:h-6 transition duration-200 ease-in-out rounded-full flex-shrink-0 shadow-sm self-center">
                <input
                  type="checkbox"
                  id="notifications"
                  name="notifications"
                  className="absolute w-5 sm:w-6 h-5 sm:h-6 opacity-0"
                  checked={formData.notifications}
                  onChange={handleToggleChange}
                />
                <label
                  htmlFor="notifications"
                  className={`block w-full h-full rounded-full cursor-pointer border ${
                    formData.notifications
                      ? 'bg-blue-600 dark:bg-blue-500 border-blue-700'
                      : isDarkMode ? 'bg-gray-600 border-gray-700' : 'bg-gray-200 border-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0 bottom-0 my-auto left-0 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full shadow ${
                      formData.notifications ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="pr-4">
                <h3 className="text-sm sm:text-base font-medium">Marketing Emails</h3>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Receive marketing and promotional emails</p>
              </div>
              <div className="relative inline-block w-10 sm:w-12 h-5 sm:h-6 transition duration-200 ease-in-out rounded-full flex-shrink-0 shadow-sm self-center">
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  className="absolute w-5 sm:w-6 h-5 sm:h-6 opacity-0"
                  checked={formData.marketing}
                  onChange={handleToggleChange}
                />
                <label
                  htmlFor="marketing"
                  className={`block w-full h-full rounded-full cursor-pointer border ${
                    formData.marketing
                      ? 'bg-blue-600 dark:bg-blue-500 border-blue-700'
                      : isDarkMode ? 'bg-gray-600 border-gray-700' : 'bg-gray-200 border-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0 bottom-0 my-auto left-0 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full shadow ${
                      formData.marketing ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="pr-4">
                <h3 className="text-sm sm:text-base font-medium">Product Updates</h3>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Receive notifications about product updates</p>
              </div>
              <div className="relative inline-block w-10 sm:w-12 h-5 sm:h-6 transition duration-200 ease-in-out rounded-full flex-shrink-0 shadow-sm self-center">
                <input
                  type="checkbox"
                  id="updates"
                  name="updates"
                  className="absolute w-5 sm:w-6 h-5 sm:h-6 opacity-0"
                  checked={formData.updates}
                  onChange={handleToggleChange}
                />
                <label
                  htmlFor="updates"
                  className={`block w-full h-full rounded-full cursor-pointer border ${
                    formData.updates
                      ? 'bg-blue-600 dark:bg-blue-500 border-blue-700'
                      : isDarkMode ? 'bg-gray-600 border-gray-700' : 'bg-gray-200 border-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0 bottom-0 my-auto left-0 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full shadow ${
                      formData.updates ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-md hover:bg-blue-700 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
