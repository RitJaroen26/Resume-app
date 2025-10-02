"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsInstagram } from 'react-icons/bs'
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
    Menu,
    X
} from "lucide-react";
import { SidebarContext } from "@/context/SidebarContext";

interface SidebarProps {
    children: React.ReactNode;
}

interface SubMenuIitem {
    label: string;
    labelThai: string;
    fileName: string;
}

interface InfoItem {
    icon: React.ReactNode;
    label: string;
    labelThai: string;
    id: string;
    hasDropdown?: boolean;
    subMenu?: SubMenuIitem[];
    content?: React.ReactNode;
    contentClass?: string;
}

export default function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [isThai, setIsThai] = useState(false);
    const [mobilePopupContent, setMobilePopupContent] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        setIsClient(true);

        const storedDarkMode = localStorage.getItem("isDarkMode");
        const storedThai = localStorage.getItem("isThai");

        if (storedDarkMode && storedThai) {
            setIsDarkMode(storedDarkMode === "true");
            setIsThai(storedThai === "true");

            if (storedDarkMode === "true" && storedThai === "true") {
                document.documentElement.classList.add("dark");
                document.documentElement.classList.add("thai");
            } else {
                document.documentElement.classList.remove("dark");
                document.documentElement.classList.remove("thai");
            }
        }

        const checkMobile = () => {
            const newIsMobile = window.innerWidth < 1024;
            setIsMobile(newIsMobile);

            if (newIsMobile) {
                setIsOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        localStorage.setItem("isDarkMode", isDarkMode.toString());
        localStorage.setItem("isThai", isThai.toString());

        if (isDarkMode && isThai) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.add("thai");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.remove("thai");
        }
    }, [isDarkMode, isThai]);

    useEffect(() => {
        if (isMobile && !isOpen) {
            setMobilePopupContent(null);
        }
    }, [isOpen, isMobile]);

    const toggleSidebar = () => setIsOpen((prev) => !prev);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    const toggleThai = () => {
        setIsThai(prev => !prev);
    }

    const toggleDropdown = (id: string) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMobile) {
            setIsOpen(false);
        }
    };

    const menuItems = [
        { icon: <Home size={20} />, label: "Home", labelThai: "หน้าหลัก", id: "home-section" },
        { icon: <Users size={20} />, label: "About Me", labelThai: "เกี่ยวกับฉัน", id: "about-section" },
        { icon: <Cpu size={20} />, label: "Portfolio", labelThai: "ผลงาน", id: "portfolio-section" },
        { icon: <Briefcase size={20} />, label: "Experience", labelThai: "ประสบการณ์", id: "experience-section" },
        { icon: <MessageCircle size={20} />, label: "Contract", labelThai: "ติดต่อ", id: "footer" },
    ];

    const infoItems: InfoItem[] = [
        {
            icon: <FileText size={20} />,
            label: "Resume",
            labelThai: "เรซูเม่",
            id: "resume-section",
            hasDropdown: true,
            subMenu: [
                { label: "Download Resume", labelThai: "ดาวน์โหลด Resume", fileName: "Resume-Pawarit.pdf" },
                { label: "Download CV", labelThai: "ดาวน์โหลด CV", fileName: "CV-Pawarit.pdf" },
            ],
        },
        {
            icon: <BookOpen size={20} />,
            label: "Education",
            labelThai: "การศึกษา",
            id: "education-section",
            hasDropdown: true,
            contentClass: `${isOpen ? "-translate-y-80" : "-translate-y-50"}`,
            content: (
                <div className={`${isMobile ? "p-2" : "p-4"} min-w-[400px]`}>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-800"} mb-6`}>Education</h3>

                    <div className={`relative space-y-6`}>
                        <div className={`relative ${isMobile ? "pl-0" : "pl-6"}`}>
                            <span className={`${isMobile ? "hidden" : "block"} absolute left-[-10px] top-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full`}></span>
                            <div className={`${isDarkMode ? "bg-[#282828]" : "bg-gray-200"} ${isMobile ? "w-70 sm:w-auto p-3" : "w-full p-4"} rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"} font-semibold`}>2018 - 2022</p>
                                <h4 className={`text-md font-bold ${isDarkMode ? "text-white" : "text-gray-800"} ${isMobile ? "w-50 sm:w-auto" : "w-70"}`}>Sarasas Witaed Rangsit School</h4>
                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>
                                    High School Degree
                                </p>
                            </div>
                        </div>

                        <div className={`relative ${isMobile ? "pl-0" : "pl-6"}`}>
                            <span className={`${isMobile ? "hidden" : "block"} absolute left-[-10px] top-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full`}></span>
                            <div className={`${isDarkMode ? "bg-[#282828]" : "bg-gray-200"} ${isMobile ? "w-70 sm:w-auto p-3" : "w-full p-4"} p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"} font-semibold`}>2022 - 2025</p>
                                <h4 className={`text-md font-bold ${isDarkMode ? "text-white" : "text-gray-800"} ${isMobile ? "w-50 sm:w-auto" : "w-70"}`}>RMUTP Rajamangala University of Technology Phra Nakhon</h4>
                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>
                                    Bachelor&apos;s Degree
                                </p>
                            </div>
                        </div>

                        <div className={`relative ${isMobile ? "pl-0" : "pl-6"}`}>
                            <span className={`${isMobile ? "hidden" : "block"} absolute left-[-10px] top-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full`}></span>
                            <div className={`${isDarkMode ? "bg-[#282828]" : "bg-gray-200"} ${isMobile ? "w-70 sm:w-auto p-3" : "w-full p-4"} p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"} font-semibold`}>2018 - 2022</p>
                                <h4 className={`text-md font-bold ${isDarkMode ? "text-white" : "text-gray-800"} ${isMobile ? "w-50 sm:w-auto" : "w-70"}`}>RMUTP Rajamangala University of Technology Phra Nakhon</h4>
                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>
                                    Bachelor&apos;s Degree
                                </p>
                            </div>
                        </div>
                    </div>
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

    useEffect(() => {
        const setAppHeight = () => {
            document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
        };
        setAppHeight();
        window.addEventListener('resize', setAppHeight);
        return () => window.removeEventListener('resize', setAppHeight);
    }, []);

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar, isDarkMode, toggleDarkMode, isThai, toggleThai }}>
            <div className={`h-screen flex ${isDarkMode ? 'dark' : ''}`}>
                {isMobile && isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                <AnimatePresence>
                    {(isMobile ? isOpen : true) && (
                        <motion.div
                            initial={isMobile ? { x: -280 } : { width: isOpen ? 280 : 80 }}
                            animate={isMobile ? { x: 0 } : { width: isOpen ? 280 : 80 }}
                            exit={isMobile ? { x: -280 } : undefined}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={`h-screen fixed top-0 left-0 shadow-xl ${isMobile ? 'z-50' : 'z-40'} ${isDarkMode ? "bg-[#121212]" : "bg-white"} overflow-visible`}
                            style={{ width: isMobile ? 280 : (isOpen ? 280 : 80) }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col h-full">
                                <div className={`p-4 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={toggleSidebar}
                                                className={`p-2 cursor-pointer rounded-lg ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
                                            >
                                                {isMobile && isOpen ? (
                                                    <X size={18} className={isDarkMode ? "text-gray-300" : "text-gray-700"} />
                                                ) : (
                                                    <Menu size={18} className={isDarkMode ? "text-gray-300" : "text-gray-700"} />
                                                )}
                                            </button>

                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -10 }}
                                                        transition={{ delay: 0.1 }}
                                                    >
                                                        <span className={`font-bold text-xl ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                                                            {isThai ? "ปวริศร์" : "Pawarit"}
                                                        </span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
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
                                                className={`relative w-14 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${isDarkMode ? "bg-blue-600" : "bg-gray-300"}`}
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
                                                    className={`w-full flex cursor-pointer items-center space-x-3 px-3 py-2.5 rounded-lg ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"} transition-colors ${(!isOpen && !isMobile) ? "justify-center" : ""}`}
                                                >
                                                    <span className={`${isDarkMode ? "text-[#B3B3B3]" : "text-gray-700"}`}>{item.icon}</span>
                                                    {isOpen && (
                                                        <motion.span
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.25 + index * 0.05 }}
                                                            className={`${isDarkMode ? "text-[#B3B3B3]" : "text-gray-700"} font-medium`}
                                                        >
                                                            {isThai ? item.labelThai : item.label}
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
                                                        onClick={() => {
                                                            if (!item.hasDropdown) return;
                                                            
                                                            if (isMobile && item.content) {
                                                                setMobilePopupContent(item.content);
                                                            } else if (isMobile && item.subMenu && item.subMenu.length > 0) {
                                                                setMobilePopupContent(
                                                                    <div className="p-4">
                                                                        <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-800"} mb-4`}>
                                                                            {isThai ? item.labelThai : item.label}
                                                                        </h3>
                                                                        <div className="space-y-2">
                                                                            {item.subMenu?.map((sub, subIndex) => (
                                                                                <a
                                                                                    key={subIndex}
                                                                                    href={`/files/${sub.fileName}`}
                                                                                    download={sub.fileName}
                                                                                    onClick={() => {
                                                                                        console.log(`Downloading ${sub.fileName}`);
                                                                                        setMobilePopupContent(null);
                                                                                    }}
                                                                                    className={`w-full cursor-pointer flex items-center justify-between px-4 py-3 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded-lg transition-colors`}
                                                                                >
                                                                                    <span>{isThai ? sub.labelThai : sub.label}</span>
                                                                                    <Download size={16} />
                                                                                </a>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                );
                                                            } else {
                                                                toggleDropdown(item.id);
                                                            }
                                                        }}
                                                        className={`w-full flex cursor-pointer items-center justify-between px-3 py-2.5 rounded-lg ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"} transition-colors ${(!isOpen && !isMobile) ? "justify-center" : ""}`}
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
                                                                    {isThai ? item.labelThai : item.label}
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
                                                                key={item.id}
                                                                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                                                                transition={{ duration: 0.2 }}
                                                                style={{
                                                                    position: 'fixed',
                                                                    top: dropdownRef.current?.getBoundingClientRect().top ?? 0,
                                                                    left: (isMobile ? 280 : (isOpen ? 280 : 80)) + 16,
                                                                    zIndex: 9999,
                                                                    minWidth: 250,
                                                                }}
                                                                className={`${isDarkMode ? "bg-black/80" : "bg-white"} shadow-lg rounded-xl p-4 ${item.contentClass || ""}`}
                                                            >
                                                                {item.subMenu ? (
                                                                    <div>
                                                                        {item.subMenu.map((sub, subIndex) => (
                                                                            <a
                                                                                key={subIndex}
                                                                                href={`/files/${sub.fileName}`}
                                                                                download={sub.fileName}
                                                                                onClick={() => console.log(`Downloading ${sub.fileName}`)}
                                                                                className={`w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded-lg transition-colors`}
                                                                            >
                                                                                <span>{isThai ? sub.labelThai : sub.label}</span>
                                                                                <Download size={14} />
                                                                            </a>
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
                                            <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                © 2025 Pawarit J. All rights reserved.
                                            </p>
                                            <div className="flex justify-center space-x-4 mt-1">
                                                <button className={`text-xs ${isDarkMode ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`}>
                                                    Privacy
                                                </button>
                                                <button className={`text-xs ${isDarkMode ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`}>
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
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isMobile && mobilePopupContent && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobilePopupContent(null)}
                            className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className={`${isDarkMode ? "bg-[#1a1a1a]" : "bg-white"} rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto overflow-x-hidden`}
                            >
                                <div className="sticky top-0 z-10 flex justify-end p-4">
                                    <button
                                        onClick={() => setMobilePopupContent(null)}
                                        className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"} transition-colors`}
                                    >
                                        <X size={20} className={isDarkMode ? "text-gray-300" : "text-gray-700"} />
                                    </button>
                                </div>
                                <div className="px-2 pb-6">
                                    {mobilePopupContent}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    className="flex-1 bg-gray-50 max-w-full"
                    animate={{ marginLeft: isMobile ? 0 : (isOpen ? 280 : 80) }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <motion.div
                        className={`${isDarkMode ? "bg-[#121212]" : "bg-white"} h-20 shadow-sm flex justify-between items-center px-6 fixed top-0 right-0 z-30`}
                        animate={{ left: isMobile ? 0 : (isOpen ? 280 : 80) }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="flex items-center gap-4">
                            {isMobile && (
                                <button
                                    onClick={toggleSidebar}
                                    className={`p-2 cursor-pointer rounded-lg ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} transition-colors lg:hidden`}
                                >
                                    <Menu size={18} className={isDarkMode ? "text-gray-300" : "text-gray-700"} />
                                </button>
                            )}
                            <div className={`text-[28px] font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                                Portfolio
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleThai}
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

                            <div className={`cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100 ${isDarkMode ? "text-[#B3B3B3]" : "text-gray-700"}`}>
                                <BsGithub size={20} onClick={() => window.open("https://github.com/RitJaroen26")} />
                            </div>

                            <div className={`cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100 ${isDarkMode ? "text-[#B3B3B3]" : "text-gray-700"}`}>
                                <BsInstagram size={20} />
                            </div>
                        </div>
                    </motion.div>

                    <div className="pt-16 h-full">
                        {children}
                    </div>
                </motion.div>
            </div>
        </SidebarContext.Provider>
    );
}