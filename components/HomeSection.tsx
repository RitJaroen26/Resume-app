"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    Code,
    Database,
    Globe,
    Smartphone,
    ArrowRight,
    Download,
    Github,
    Mail
} from 'lucide-react';

import { useSidebar } from '@/context/SidebarContext';

export default function HomeSection() {
    const { isOpen, isDarkMode } = useSidebar();
    const [currentRole, setCurrentRole] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const roles = [
        "Full Stack Developer",
        "Freelance",
    ];

    const skills = [
        { icon: <Code size={24} />, name: "Web Development", color: "from-blue-500 to-cyan-500" },
        { icon: <Database size={24} />, name: "Database Design", color: "from-green-500 to-emerald-500" },
        { icon: <Globe size={24} />, name: "API Development", color: "from-purple-500 to-pink-500" },
        { icon: <Smartphone size={24} />, name: "Mobile Apps", color: "from-orange-500 to-red-500" }
    ];

    const stats = [
        { number: "2+", label: "Years Experience", delay: 0.2 },
        { number: "15+", label: "Projects Completed", delay: 0.4 },
        { number: "5+", label: "Technologies", delay: 0.6 },
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (sectionId: any) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="home-section" className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-[#121212]' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'}`}>
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-20 left-20 w-72 h-72 ${isDarkMode ? 'bg-blue-500/5' : 'bg-blue-500/10'} rounded-full blur-3xl animate-pulse`} />
                <div className={`absolute bottom-20 right-20 w-96 h-96 ${isDarkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl animate-pulse delay-1000`} />
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ${isDarkMode ? 'bg-gradient-to-r from-cyan-500/3 to-blue-500/3' : 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5'} rounded-full blur-3xl animate-pulse delay-2000`} />
            </div>

            <div className={`relative z-10 container mx-auto ${isOpen ? "px-16" : "px-10"} py-20`}>
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <p className={`text-lg font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                Hello, I'm
                            </p>
                            <h1 className={`text-7xl md:text-5xl lg:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                                Pawarit
                                <span className={`hidden md:block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Jaroenphatthanasiri
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="h-16 -mt-10 md:-mt-0 flex items-center"
                        >
                            <span className={`text-2xl lg:text-3xl font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mr-4`}>
                                I'm a
                            </span>
                            <div className="relative">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentRole}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
                                    >
                                        {roles[currentRole]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className={`text-lg leading-relaxed w-100 md:w-full ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}
                        >
                            I'm Computer Science Student and Developer with a passion for developing software,
                            technology through creativity and problem solving, turning ideas into practical experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col md:flex-row ml-25 md:ml-0 gap-4"
                        >
                            <button
                                onClick={() => scrollToSection('portfolio-section')}
                                className="group w-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2"
                            >
                                View My Work
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() => console.log('Download CV')}
                                className={`group w-50 border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2`}
                            >
                                <Download size={20} />
                                Download CV
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                            className="flex ml-35 md:ml-0 gap-4 pt-4"
                        >
                            <a
                                href="https://github.com/RitJaroen26"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-all duration-300 hover:scale-110`}
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="mailto:pawarit-j@rmutp.ac.th"
                                className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-all duration-300 hover:scale-110`}
                            >
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="hidden xl:flex relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" /> */}
                            <div className={`relative w-full h-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-full flex items-center justify-center overflow-hidden`}>
                                <div className="w-110 h-110 rounded-full flex items-center justify-center">
                                    {/* <span className="text-4xl font-bold text-white">P</span> */}
                                    <img src="/images/pawarit.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="md:mt-20 ml-15 md:ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 + stat.delay }}
                            className={`text-center w-70 md:w-full p-6 rounded-xl ${isDarkMode ? 'bg-[#282828]' : 'bg-white/60'} backdrop-blur-sm ${isDarkMode ? "border-none" : "border"} ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                        >
                            <h3 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                {stat.number}
                            </h3>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-8 left-60 md:left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        onClick={() => scrollToSection('about-section')}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`p-2 rounded-full cursor-pointer ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}
                    >
                        <ChevronDown size={24} />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

