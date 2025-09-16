"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs'
import {
    Home,
    Users,
    Cpu,
    Briefcase,
    MessageCircle,
    Sun,
    Moon,
    ChevronRight,
    Download,
    FileText,
    User,
    BookOpen,
    Menu
} from "lucide-react";
import { SidebarContext } from "@/context/SidebarContext";

interface SidebarProps {
    children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [isThai, setIsThai] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const storedDarkMode = localStorage.getItem("isDarkMode");
        if (storedDarkMode) {
            setIsDarkMode(storedDarkMode === "true");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("isDarkMode", isDarkMode.toString());

        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleSidebar = () => setIsOpen((prev) => !prev);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    const toggleDropdown = (id: string) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuItems = [
        { icon: <Home size={20} />, label: "Home", id: "home-section" },
        { icon: <Users size={20} />, label: "About Me", id: "about-section" },
        { icon: <Cpu size={20} />, label: "Portfolio", id: "skills-section" },
        { icon: <Briefcase size={20} />, label: "Experience", id: "portfolio-section" },
        { icon: <MessageCircle size={20} />, label: "Contract", id: "footer" },
    ];

    const infoItems = [
        {
            icon: <FileText size={20} />,
            label: "Resume",
            id: "resume-section",
            hasDropdown: true,
            subMenu: [
                { label: "Download Resume", fileName: "Pawarit_Resume.pdf" },
                { label: "Download CV", fileName: "Pawarit_CV.pdf" },
            ],
        },
        {
            icon: <User size={20} />,
            label: "Profile",
            id: "profile-section",
            hasDropdown: true,
            content: (
                <div className="p-4 min-w-[280px]">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            P
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Pawarit Jaroenphatthanasiri</p>
                            <p className="text-sm text-gray-500">pawarit-j@rmutp.ac.th</p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Phone:</span>
                            <span className="text-gray-800">099-999-9999</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Role:</span>
                            <span className="text-gray-800">Developer</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            icon: <BookOpen size={20} />,
            label: "Education",
            id: "education-section",
            hasDropdown: true,
            content: (
                <div className="p-4 min-w-[200px]">
                    <h3 className="text-lg font-semibold text-center text-gray-800">Education</h3>
                    <p className="text-sm text-gray-600 text-center mt-2">
                        Click to view education details
                    </p>
                </div>
            ),
        },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const sidebarWidth = isOpen ? 280 : 80;

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar, isDarkMode, toggleDarkMode }}>
            <div className={`h-screen flex ${isDarkMode ? 'dark' : ''}`}>
                <motion.div
                    animate={{ width: sidebarWidth }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`h-screen fixed left-0 top-0 z-50 ${isDarkMode ? "bg-[#121212]" : "bg-white"} shadow-xl overflow-visible`}
                >
                    <div className="flex flex-col h-full">
                        <div className={`p-4 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-2 cursor-pointer rounded-lg bg-gray-100  hover:bg-gray-200 transition-colors"
                                >
                                    <Menu size={18} className="text-gray-700" />
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ delay: -0.5 }}
                                        >
                                            <span className={`font-bold text-xl ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                                                Pawarit
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-4"
                                >
                                    <button
                                        onClick={toggleDarkMode}
                                        className={`relative w-14 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${isDarkMode ? "bg-blue-600" : "bg-gray-300"
                                            }`}
                                    >
                                        <motion.div
                                            animate={{ x: isDarkMode ? 30 : 2 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                                        >
                                            {isDarkMode ? (
                                                <Moon size={14} className="text-blue-600" />
                                            ) : (
                                                <Sun size={14} className="text-yellow-500" />
                                            )}
                                        </motion.div>
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        <div className="flex-1">
                            <div className="p-4">
                                {isOpen && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.15 }}
                                        className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? "text-[#404040]" : "text-gray-500"} mb-3`}
                                    >
                                        Navigation
                                    </motion.p>
                                )}

                                <div className="space-y-1">
                                    {menuItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + index * 0.05 }}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full flex cursor-pointer items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors ${!isOpen ? "justify-center" : ""
                                                }`}
                                        >
                                            <span className={`${isDarkMode ? "text-[#B3B3B3]" : "text-gray-700"}`}>{item.icon}</span>
                                            {isOpen && (
                                                <motion.span
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.25 + index * 0.05 }}
                                                    className={`${isDarkMode ? "text-[#B3B3B3]" : "text-gray-700"} font-medium`}
                                                >
                                                    {item.label}
                                                </motion.span>
                                            )}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4">
                                {isOpen && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.15 }}
                                        className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? "text-[#404040]" : "text-gray-500"} mb-3`}
                                    >
                                        Information
                                    </motion.p>
                                )}

                                <div className="space-y-1" ref={dropdownRef}>
                                    {infoItems.map((item, index) => (
                                        <div key={item.id} className="relative">
                                            <motion.button
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + index * 0.05 }}
                                                onClick={() => item.hasDropdown && toggleDropdown(item.id)}
                                                className={`w-full flex cursor-pointer items-center justify-between px-3 py-2.5 rounded-lg text-gray-700  hover:bg-gray-100 transition-colors ${!isOpen ? "justify-center" : ""
                                                    }`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <span className={`${isDarkMode ? "text-[#B3B3B3]" : "text-gray-700"}`}>{item.icon}</span>
                                                    {isOpen && (
                                                        <motion.span
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.25 + index * 0.05 }}
                                                            className={`${isDarkMode ? "text-[#B3B3B3]" : "text-gray-700"} font-medium`}
                                                        >
                                                            {item.label}
                                                        </motion.span>
                                                    )}
                                                </div>

                                                {isOpen && item.hasDropdown && (
                                                    <motion.div
                                                        animate={{
                                                            rotate: activeDropdown === item.id ? 90 : 0
                                                        }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 500,
                                                            damping: 25
                                                        }}
                                                    >
                                                        <ChevronRight size={16} className="text-gray-400" />
                                                    </motion.div>
                                                )}
                                            </motion.button>

                                            <AnimatePresence>
                                                {isClient && activeDropdown === item.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                                                        transition={{ duration: 0.2 }}
                                                        style={{
                                                            position: 'fixed',
                                                            top: dropdownRef.current?.getBoundingClientRect().top ?? 0,
                                                            left: sidebarWidth + 16,
                                                            zIndex: 9999,
                                                            minWidth: 250
                                                        }}
                                                        className="bg-white shadow-lg rounded-xl p-4"
                                                    >
                                                        {item.subMenu ? (
                                                            <div>
                                                                {item.subMenu.map((sub, subIndex) => (
                                                                    <button
                                                                        key={subIndex}
                                                                        onClick={() => console.log(`Downloading ${sub.fileName}`)}
                                                                        className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                                    >
                                                                        <span>{sub.label}</span>
                                                                        <Download size={14} />
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            item.content
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={`p-4 border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
                            {isOpen ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center"
                                >
                                    <p className="text-xs text-gray-500 ">
                                        © 2025 Pawarit J. All rights reserved.
                                    </p>
                                    <div className="flex justify-center space-x-4 mt-1">
                                        <button className="text-xs text-gray-400 hover:text-gray-600">
                                            Privacy
                                        </button>
                                        <button className="text-xs text-gray-400 hover:text-gray-600">
                                            Terms
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="flex justify-center">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        P
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                <div
                    className="flex-1 transition-all duration-300 bg-gray-50"
                    style={{ marginLeft: sidebarWidth }}
                >
                    <div
                        className={`${isDarkMode ? "bg-[#121212]" : "bg-white"} h-20 shadow-sm flex justify-between items-center px-6 fixed top-0 right-0 transition-all duration-300 z-40`}
                        style={{ left: sidebarWidth }}
                    >
                        <div className={`text-[28px] font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                            Portfolio
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsThai(prev => !prev)}
                                className={`relative w-14 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${isThai ? "bg-blue-600" : "bg-gray-300"}`}
                            >
                                <motion.div
                                    animate={{ x: isThai ? 30 : 2 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-gray-700"
                                >
                                    {isThai ? "TH" : "EN"}
                                </motion.div>
                            </button>

                            <div className={`cursor-pointer text-3xl opacity-70
                        transition-all duration-300 hover:text-red-500
                        hover:opacity-100 ${isDarkMode ? "text-[#B3B3B3]" : ""}`}>
                                <BsGithub size={20} onClick={() => window.open("https://github.com/RitJaroen26")} />
                            </div>

                            <div className={`cursor-pointer text-xl opacity-70
                        transition-all duration-300 hover:text-red-500
                        hover:opacity-100 ${isDarkMode ? "text-[#B3B3B3]" : ""}`}>
                                <BsInstagram size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 h-full">
                        {children}
                    </div>
                </div>
            </div>
        </SidebarContext.Provider>
    );
}