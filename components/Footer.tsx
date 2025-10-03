"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSidebar } from '@/context/SidebarContext';
import { contractInfo, socialLinks, quickLinks, services } from './Data/footerData';

import {
    Github,
    Code,
    ExternalLink
} from 'lucide-react';

const Footer = () => {
    const { isOpen, isDarkMode, isThai } = useSidebar();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('footer');
        if (element) observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <>
            <footer id="footer" className={`relative ${isDarkMode ? 'bg-[#181818]' : 'bg-gray-200'} text-white overflow-hidden`}>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                <div className={`relative z-10 ${isOpen ? "md:px-20" : "md:px-0"}`}>
                    <div className="border-b border-gray-700 py-16">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-12"
                            >
                                <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                                    Let&apos;s Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Together</span>
                                </h2>
                                <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
                                    Ready to bring your ideas to life? I&apos;m here to help you create amazing digital experiences.
                                </p>
                            </motion.div>

                            <div className="flex lg:flex-row gap-12 md:justify-center items-start">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="space-y-8 flex flex-col md:flex-row gap-0 md:gap-50 sm:justify-around md:justify-between"
                                >
                                    <div>
                                        <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-700"}`}>Get In Touch</h3>
                                        <div className="space-y-4">
                                            {contractInfo.map((info, index) => (
                                                <motion.div
                                                    key={info.label}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4 + index * 0.1 }}
                                                    className="flex items-center gap-4"
                                                >
                                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                                        {info.icon}
                                                    </div>
                                                    <div>
                                                        <p className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>{info.label}</p>
                                                        {info.link ? (
                                                            <a
                                                                href={info.link}
                                                                className={`${isDarkMode ? "text-white" : "text-gray-700"} hover:text-blue-400 transition-colors font-medium`}
                                                            >
                                                                {info.value}
                                                            </a>
                                                        ) : (
                                                            <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-700"}`}>{info.value}</p>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}>Follow Me</h4>
                                        <div className="flex gap-4">
                                            {socialLinks.map((social, index) => (
                                                <motion.a
                                                    key={social.name}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6 + index * 0.1 }}
                                                    className={`p-3 bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                                                >
                                                    {social.icon}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                        </div>
                    </div>

                    <div className="py-12">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="space-y-4"
                                >
                                    <h4 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-700"}`}>Pawarit</h4>
                                    <p className={`leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                        Full Stack Developer passionate about creating innovative digital solutions
                                        that bridge design and functionality.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="space-y-4"
                                >
                                    <h4 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>Quick Links</h4>
                                    <ul className="space-y-2">
                                        {quickLinks.map((link) => (
                                            <li key={link.name}>
                                                <button
                                                    onClick={() => scrollToSection(link.id)}
                                                    className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} hover:text-white transition-colors cursor-pointer`}
                                                >
                                                    {link.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="space-y-4"
                                >
                                    <h4 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>Services</h4>
                                    <ul className="space-y-2">
                                        {services.map((service) => (
                                            <li key={service} className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} flex items-center gap-2`}>
                                                <Code size={12} className="text-blue-400" />
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                    className="space-y-4"
                                >
                                    <h4 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>Resources</h4>
                                    <ul className="space-y-2">
                                        <li>
                                            <button
                                                onClick={() => console.log('Download Resume')}
                                                className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} hover:text-white transition-colors flex items-center gap-2`}
                                            >
                                                <ExternalLink size={12} />
                                                Download Resume
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => console.log('Download CV')}
                                                className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} hover:text-white transition-colors flex items-center gap-2`}
                                            >
                                                <ExternalLink size={12} />
                                                Download CV
                                            </button>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/RitJaroen26"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} hover:text-white transition-colors flex items-center gap-2`}
                                            >
                                                <Github size={12} />
                                                GitHub Profile
                                            </a>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 py-6">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isVisible ? 1 : 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                className="flex flex-col md:flex-row justify-between items-center gap-4"
                            >
                                <p className={`hidden md:block ${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>
                                    © 2025 Pawarit Jaroenphatthanasiri. All rights reserved.
                                </p>
                                <p className={`block md:hidden text-center ${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>
                                    © 2025 Pawarit Jaroenphatthanasiri.<br />
                                    All rights reserved.
                                </p>
                                <div className={`flex items-center gap-6 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    <button className="hover:text-white transition-colors">Privacy Policy</button>
                                    <button className="hover:text-white transition-colors">Terms of Service</button>
                                    <button className="hover:text-white transition-colors">Cookies</button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </footer>
            
        </>
    );
};

export default Footer;