"use client";

import { createContext, useContext } from "react";

interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isThai: boolean;
  toggleThai: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  toggleSidebar: () => {},
  isDarkMode: false,
  toggleDarkMode: () => {},
  isThai: false,
  toggleThai: () => {},
});

export const useSidebar = () => useContext(SidebarContext);