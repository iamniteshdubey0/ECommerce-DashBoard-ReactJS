import React, { createContext, useContext, useState } from 'react';

// Create a context
const SidebarContext = createContext();

// Provider component
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebar = () => useContext(SidebarContext);
