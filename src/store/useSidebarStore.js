import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create a store with persistence
const useSidebarStore = create(
  persist(
    (set) => ({
      // Initial state
      isPrimarySidebarOpen: true,
      isSecondarySidebarOpen: true,
      isFooterVisible: true,

      // Actions
      togglePrimarySidebar: () =>
        set((state) => ({
          isPrimarySidebarOpen: !state.isPrimarySidebarOpen
        })),

      toggleSecondarySidebar: () =>
        set((state) => ({
          isSecondarySidebarOpen: !state.isSecondarySidebarOpen
        })),

      toggleFooter: () =>
        set((state) => ({
          isFooterVisible: !state.isFooterVisible
        })),

      setPrimarySidebar: (isOpen) =>
        set(() => ({
          isPrimarySidebarOpen: isOpen
        })),

      setSecondarySidebar: (isOpen) =>
        set(() => ({
          isSecondarySidebarOpen: isOpen
        })),

      setFooterVisibility: (isVisible) =>
        set(() => ({
          isFooterVisible: isVisible
        })),
    }),
    {
      name: 'sidebar-storage', // unique name for localStorage
    }
  )
);

export default useSidebarStore;
