"use client";

import { createContext, useContext } from "react";

interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  toggleSidebar: () => {},
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useSidebar = () => useContext(SidebarContext);