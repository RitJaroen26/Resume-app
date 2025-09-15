"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import {
    FiHome,
    FiUsers,
    FiCpu,
    FiBriefcase,
    FiMessageCircle,
    FiSettings,
    FiSun,
    FiMoon,
} from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import HomeSection from "./HomeSection";
import About from "./AboutSection";

interface SidebarProps {
    children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: <FiHome />, label: "Home", id: "home-section" },
        { icon: <FiUsers />, label: "About Me", id: "about-section" },
        { icon: <FiCpu />, label: "Skills", id: "skills-section" },
        { icon: <FiBriefcase />, label: "Portfolio", id: "portfolio-section" },
        { icon: <FiMessageCircle />, label: "Contract" },
    ];

    const sidebarWidth = isOpen ? 260 : 80;

    return (
        <div className="h-screen bg-gray-50 flex">
            <motion.div
                animate={{ width: sidebarWidth }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white shadow-xl h-screen flex flex-col justify-between py-4 px-2 fixed left-0 top-0"
            >
                <div>
                    <div className="flex items-center gap-6 px-3 mb-8">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                        >
                            <FaBars />
                        </button>

                        {isOpen && (
                            <motion.div
                                animate={{ opacity: isOpen ? 1 : 0 }}
                                className="flex items-center space-x-2"
                            >
                                <span className="font-bold text-lg">Pawarit</span>
                            </motion.div>
                        )}
                    </div>

                    <div className="flex flex-col space-y-2">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition relative"
                            >
                                <span className="text-xl">{item.icon}</span>
                                {isOpen && <span className="text-gray-700">{item.label}</span>}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="px-3">
                    <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2 mb-4">
                        <button className="flex items-center space-x-2 text-blue-600 font-medium">
                            <FiSun /> {isOpen && <span>Light</span>}
                        </button>
                        <button className="flex items-center space-x-2 text-gray-400">
                            <FiMoon /> {isOpen && <span>Dark</span>}
                        </button>
                    </div>

                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="profile"
                            className="w-10 h-10 rounded-full"
                        />
                        {isOpen && (
                            <div>
                                <p className="font-semibold text-sm">Josh Harris</p>
                                <p className="text-xs text-gray-500">josh@protonui.com</p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            <div className="flex-1 flex flex-col" style={{ marginLeft: sidebarWidth }}>
                <div className="h-16 bg-white shadow flex items-center justify-between px-6 fixed top-0 right-0 transition-all duration-300"
                    style={{ left: sidebarWidth }}>
                    
                </div>

                <div className="flex-1 p-6 mt-16 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}