import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define theme colors
const lightTheme = {
  primary: '#3B82F6', // Blue
  secondary: '#10B981', // Green
  accent: '#8B5CF6', // Purple
  background: '#F3F4F6', // Light gray
  foreground: '#1F2937', // Dark gray
  card: '#FFFFFF', // White
  border: '#E5E7EB', // Light gray border
  success: '#10B981', // Green
  warning: '#F59E0B', // Amber
  error: '#EF4444', // Red
  info: '#3B82F6', // Blue
};

const darkTheme = {
  primary: '#60A5FA', // Lighter blue
  secondary: '#34D399', // Lighter green
  accent: '#A78BFA', // Lighter purple
  background: '#111827', // Very dark gray
  foreground: '#F9FAFB', // Very light gray
  card: '#1F2937', // Dark gray
  border: '#374151', // Medium gray border
  success: '#34D399', // Lighter green
  warning: '#FBBF24', // Lighter amber
  error: '#F87171', // Lighter red
  info: '#60A5FA', // Lighter blue
};

// Create a store with persistence
const useThemeStore = create(
  persist(
    (set) => ({
      // Initial state
      isDarkMode: false,
      colors: lightTheme,
      
      // Actions
      toggleTheme: () => 
        set((state) => ({ 
          isDarkMode: !state.isDarkMode,
          colors: !state.isDarkMode ? darkTheme : lightTheme
        })),
        
      setDarkMode: (isDark) => 
        set(() => ({ 
          isDarkMode: isDark,
          colors: isDark ? darkTheme : lightTheme
        })),
    }),
    {
      name: 'theme-storage', // unique name for localStorage
    }
  )
);

export default useThemeStore;
