"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar } from '@/context/SidebarContext';
import { 
    SiReact, 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiTypescript, 
    SiPython, 
    SiPhp, 
    SiMysql, 
    SiMongodb, 
    SiNextdotjs, 
    SiNodedotjs,
    SiCanva,
    SiFigma,
    SiPostman,
    SiGithub,
    SiSourcetree,
    SiDocker,
} from 'react-icons/si';

import { 
    FiPenTool,
    FiMonitor,
    FiDatabase,
    FiTool
 } from "react-icons/fi";

import {
    User,
    Calendar,
    MapPin,
    GraduationCap,
    Coffee,
    Code2,
    Lightbulb,
    Target,
    Heart,
    Award,
    BookOpen,
    Zap
} from 'lucide-react';

export default function AboutSection() {
    const { isOpen, isDarkMode } = useSidebar();
    const [activeTab, setActiveTab] = useState('story');
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

        const element = document.getElementById('about-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const tabs = [
        { id: 'story', label: 'My Story', icon: <User size={20} /> },
        { id: 'journey', label: 'Journey', icon: <GraduationCap size={20} /> },
        { id: 'values', label: 'Skills', icon: <Heart size={20} /> }
    ];

    const personalInfo = [
        { icon: <Calendar size={18} />, label: 'Age', value: '24 years old' },
        { icon: <MapPin size={18} />, label: 'Location', value: 'Bangkok, Thailand' },
        { icon: <GraduationCap size={18} />, label: 'Education', value: 'Computer Science' },
        { icon: <Coffee size={18} />, label: 'Coffee/Day', value: '3-4 cups' }
    ];

    const journey = [
        {
            year: '2020',
            title: 'Started Programming',
            description: 'Began my journey with web development and fell in love with creating digital solutions.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            year: '2021',
            title: 'First Projects',
            description: 'Built my first web applications and discovered the power of modern frameworks.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            year: '2022',
            title: 'Expanded Skills',
            description: 'Learned backend development, databases, and mobile app development.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            year: '2023',
            title: 'Professional Growth',
            description: 'Started working on real projects and collaborating with teams.',
            color: 'from-orange-500 to-red-500'
        },
        {
            year: '2024',
            title: 'Full Stack Mastery',
            description: 'Achieved proficiency in full-stack development and modern technologies.',
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    const values = [
        {
            icon: <Code2 size={24} />,
            title: 'Frontend',
            skill: [
                <SiReact size={26} key="react" title="React" color="#61DAFB" />,
                <SiHtml5 size={26} key="html" title="HTML5" color= "#E34F26" />,
                <SiCss3 size={26} key="css" title="CSS3" color= "#1572B6" />,
                <SiJavascript size={26} key="js" title="JavaScript" color= "#F7DF1E" />,
                <SiTypescript size={26} key="ts" title="TypeScript"color= "#3178C6"  />,
                <SiNextdotjs size={26} key="next" title="NextJs" color= "#000000" />,
            ]
        },
        {
            icon: <FiDatabase size={24} />,
            title: 'Backend',
            skill: [
                <SiNodedotjs size={26} key="node" title="NodeJS" color="#339933" />,
                <SiPhp size={26} key="php" title="PHP" color="#777BB4"/>,
                <SiMysql size={26} key="mysql" title="MySQL" color="#4479A1" />,
                <SiMongodb size={26} key="mongodb" title="MongoDB" color="#47A248" />,
                <SiPython size={26} key="python" title="Python" color="#3776AB" />,
            ]
        },
        {
            icon: <FiPenTool size={24} />,
            title: 'Design',
            skill: [
                <SiFigma size={26} key="figma" title="Figma" color="#F24E1E" />,
                <SiCanva size={26} key="canva" title="Canva" color="#00C4CC" />
            ]
        },
        {
            icon: <FiTool size={24} />,
            title: 'Other',
            skill: [
                <SiPostman size={26} key="postman" title="Postman" color="#FF6C37" />,
                <SiGithub size={26} key="github" title="GitHub" color="#181717" />,
                <SiSourcetree size={26} key="sourcetree" title="SourceTree" color="#0052CC" />,
                <SiDocker size={26} key="docker" title="Docker" color="#2496ED" />,
            ]
        }
    ];

    const skills = [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 80 },
        { name: 'Leadership', level: 75 }
    ];

    return (
        <div id="about-section" className={`min-h-screen py-20 ${isDarkMode ? 'bg-[#121212]' : 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden`}>
            <div className="absolute inset-0">
                <div className={`absolute top-1/4 right-20 w-64 h-64 ${isDarkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl`} />
                <div className={`absolute bottom-1/4 left-20 w-80 h-80 ${isDarkMode ? 'bg-blue-500/5' : 'bg-blue-500/10'} rounded-full blur-3xl`} />
            </div>

            <div className={`relative z-10 container mx-auto ${isOpen ? "px-16" : "px-10"}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className={`${isDarkMode ? 'bg-[#282828]' : 'bg-white'} backdrop-blur-sm rounded-2xl p-8 shadow-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                            <div className="text-center mb-6">
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg">
                                    <img src="/images/image2.jpg" alt="" className='rounded-full' />
                                </div>
                                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                    Pawarit Jaroenphatthanasiri
                                </h3>
                                <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                                    Full Stack Developer
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                    >
                                        <div className="flex mb-2 rounded-full bg-gray-700 py-1 px-4 text-center w-full">
                                            <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-[#B3B3B3]'} text-[12px]`}>{skill.name}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex flex-wrap gap-2 mb-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                            : isDarkMode
                                                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className={`${isDarkMode ? 'bg-[#282828]' : 'bg-white'} backdrop-blur-sm rounded-2xl p-8 shadow-xl ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} min-h-[500px]`}>
                            <AnimatePresence mode="wait">
                                {activeTab === 'story' && (
                                    <motion.div
                                        key="story"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                                            My Story
                                        </h3>
                                        <div className="space-y-4 text-lg leading-relaxed">
                                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                I’m Computer Science student with an interest in trying new
                                                technologies through problem solving, creativity and hands-on
                                                experience. I am adaptable and work under pressure. I am also always
                                                learning new things to further develop my skills and challenge
                                                myself.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'journey' && (
                                    <motion.div
                                        key="journey"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8`}>
                                            My Development Journey
                                        </h3>
                                        <div className="space-y-6">
                                            {journey.map((item, index) => (
                                                <motion.div
                                                    key={item.year}
                                                    initial={{ opacity: 0, x: -30 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex gap-6"
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                                                            {item.year.slice(-2)}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                                            {item.title}
                                                        </h4>
                                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'values' && (
                                    <motion.div
                                        key="values"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8`}>
                                            Skills
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {values.map((value, index) => (
                                                <motion.div
                                                    key={value.title}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} shadow-sm hover:shadow-lg transition-all duration-300`}
                                                >
                                                    <div className='flex items-center gap-4'>
                                                        <div className={`w-12 h-12 ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'} rounded-lg flex items-center justify-center mb-4`}>
                                                            <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                                {value.icon}
                                                            </span>
                                                        </div>
                                                        <h4 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                                            {value.title}
                                                        </h4>
                                                    </div>
                                                    
                                                    <div className='flex justify-center gap-4 flex-wrap'>
                                                        {value.skill.map((skill, i) => (
                                                            <div
                                                                key={i}
                                                                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform transform hover:scale-110`}
                                                                aria-hidden={false}
                                                            >
                                                                <span className={`${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                                    {skill}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};