import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create a store with persistence
const useSidebarStore = create(
  persist(
    (set) => ({
      // Initial state
      isPrimarySidebarOpen: true,
      isSecondarySidebarOpen: true,
      
      // Actions
      togglePrimarySidebar: () => 
        set((state) => ({ 
          isPrimarySidebarOpen: !state.isPrimarySidebarOpen 
        })),
        
      toggleSecondarySidebar: () => 
        set((state) => ({ 
          isSecondarySidebarOpen: !state.isSecondarySidebarOpen 
        })),
        
      setPrimarySidebar: (isOpen) => 
        set(() => ({ 
          isPrimarySidebarOpen: isOpen 
        })),
        
      setSecondarySidebar: (isOpen) => 
        set(() => ({ 
          isSecondarySidebarOpen: isOpen 
        })),
    }),
    {
      name: 'sidebar-storage', // unique name for localStorage
    }
  )
);

export default useSidebarStore;
