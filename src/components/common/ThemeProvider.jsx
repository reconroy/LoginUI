import React, { useEffect } from 'react';
import { useThemeStore } from '../../store';

const ThemeProvider = ({ children }) => {
  const { isDarkMode, colors } = useThemeStore();

  // Apply theme to document root
  useEffect(() => {
    // Apply dark mode class to body
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Apply CSS variables for theme colors
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [isDarkMode, colors]);

  return <>{children}</>;
};

export default ThemeProvider;
