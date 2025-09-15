"use client";

import { useState, ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FiHome,
    FiUsers,
    FiCpu,
    FiBriefcase,
    FiMessageCircle,
    FiSettings,
    FiSun,
    FiMoon,
    FiChevronRight,
    FiChevronDown,
    FiDownload,
} from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import HomeSection from "./HomeSection";
import About from "./AboutSection";

interface SidebarProps {
    children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = useState<string | null>(null);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleDropdown = (id: string) => {
        setIsOpenDropdown(isOpenDropdown === id ? null : id);
    };

    const menuItems = [
        { icon: <FiHome />, label: "Home", id: "home-section" },
        { icon: <FiUsers />, label: "About Me", id: "about-section" },
        { icon: <FiCpu />, label: "Skills", id: "skills-section" },
        { icon: <FiBriefcase />, label: "Portfolio", id: "portfolio-section" },
        { icon: <FiMessageCircle />, label: "Contract", id: "footer" },
    ];

    const infoItem = [
        {
            icon: <FiSettings />,
            label: "Resume",
            id: "settings-section",
            subMenu: [
                { label: "Download Resume", id: "profile-settings", file: "/files/resume.pdf", fileName: "Pawarit_Resume.pdf" },
                { label: "Download CV", id: "account-settings", file: "/files/Quiz1.pdf", fileName: "Pawarit_CV.pdf" },
            ]
        },
        {
            icon: <FiUsers />,
            label: "Profile",
            id: "profile-section",
            content: (
                <div className="p-6">
                    <div className="flex items-center space-x-3">
                        <img src="/images/pawarit.jpg" className="w-12 h-12 bg-gray-200 rounded-full" />
                        <div>
                            <p className="font-bold text-gray-800">Pawarit Jaroenphatthanasiri</p>
                            <p className="text-sm text-gray-500">pawarit-j@rmutp.ac.th</p>
                        </div>
                    </div>
                    <div className="mt-4 space-y-2">
                        <p className="text-gray-600 text-sm">Phone: 099-999-9999</p>
                        <p className="text-gray-600 text-sm">Role: Developer</p>
                    </div>
                </div>
            ),
        },
        {
            icon: <FiUsers />,
            label: "Education",
            id: "education-section",
            content: (
                <div className="p-6">
                    <h1 className="text-[30px] text-center">Education</h1>
                    <div>

                    </div>
                </div>
            ),
        },
    ]

    const sidebarWidth = isOpen ? 260 : 80;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpenDropdown(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

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
                            className="bg-gray-100 cursor-pointer text-black p-2 rounded-full hover:bg-gray-200 transition"
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


                    <div className={`flex flex-col space-y-2 ${isOpen ? "mt-0" : "mt-17"}`}>
                        <p className={`text-[14px] font-semibold px-4 py-1 text-gray-600 ${!isOpen ? "hidden" : "block"}`}>Menu</p>
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className={`flex items-center text-black space-x-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition relative cursor-pointer ${!isOpen ? "justify-center" : ""}`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                {isOpen && <span className="text-gray-700">{item.label}</span>}
                            </button>
                        ))}
                    </div>

                    <div className={`flex flex-col space-y-2 ${isOpen ? "mt-6" : "mt-2"}`}>
                        <p className={`text-[14px] font-semibold px-4 py-1 text-gray-600 ${!isOpen ? "hidden" : "block"}`}>Information</p>
                        {infoItem.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onClick={() => setIsOpenDropdown(
                                    isOpenDropdown === item.id ? null : item.id
                                )}
                            >
                                <button
                                    className={`grid ${isOpen ? "grid-cols-2" : "flex"} gap-40 items-center text-black px-3 py-2 rounded-xl hover:bg-gray-100 w-full transition relative cursor-pointer ${!isOpen ? "justify-center" : ""}`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="text-xl">{item.icon}</span>
                                        {isOpen && <span className="text-gray-700">{item.label}</span>}
                                    </div>
                                    {isOpen && (
                                        <span className="text-gray-500">
                                            {isOpenDropdown === item.id ? (
                                                <FiChevronDown className="transition-transform duration-300" />
                                            ) : (
                                                <FiChevronRight className="transition-transform duration-300" />
                                            )}
                                        </span>
                                    )}
                                </button>

                                {isClient && isOpenDropdown === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        // className="absolute top-0 left-full ml-4 w-64 bg-white shadow-lg rounded-xl p-4 z-50"
                                        className={`
                                            absolute left-full ml-4 bg-white shadow-lg rounded-xl p-4 z-50
                                            ${item.content 
                                                ? isOpen 
                                                    ? "w-100 h-150 -top-[360px]" 
                                                    : "w-100 h-150 -top-[280px]"
                                                : "w-64 top-0"
                                            } 
                                        `}
                                    >
                                        <div className="space-y-2 flex flex-col">
                                            {item.subMenu ? item.subMenu?.map((sub, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href={sub.file}
                                                    download={sub.fileName}
                                                    className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded cursor-pointer"
                                                >
                                                    <div>
                                                        {sub.label}
                                                    </div>
                                                    <FiDownload className="transition-transform duration-300" />
                                                </a>
                                            )) : item.content}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
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

                    </div>
                </div>
            </motion.div>

            <div className="flex-1 flex flex-col" style={{ marginLeft: sidebarWidth }}>
                <div className="h-20 bg-white shadow flex items-center justify-between px-6 fixed top-0 right-0 transition-all duration-300"
                    style={{ left: sidebarWidth }}>

                </div>

                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}