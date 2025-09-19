"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar } from '@/context/SidebarContext';
import {
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Github,
    Calendar,
    Tag,
    X,
    Eye,
    Code,
    Smartphone,
    Globe,
    Database,
    Palette,
    Camera,
    ChevronDown,
    Check
} from 'lucide-react';
import { JSX } from 'react';

type Project = {
    id: number;
    title: string;
    category: string;
    categoryName: string;
    image: string;
    technologies: string[];
    date: string;
    description: string;
    longDescription: string;
    features: string[];
    demoUrl: string;
    githubUrl: string;
    icon: JSX.Element;
};

export default function PortfolioSection() {
    const { isOpen, isDarkMode, isThai } = useSidebar();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [isComboboxOpen, setIsComboboxOpen] = useState(false);
    const comboboxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('portfolio-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (comboboxRef.current && !comboboxRef.current.contains(event.target as Node)) {
                setIsComboboxOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const projects: Project[] = [
        {
            id: 1,
            title: "Food Ordering System",
            category: "Web & Mobile",
            categoryName: "Web Application",
            image: "/images/food-ordering.png",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            date: "2024",
            description: "I learned and experimented with creating a web application about food ordering system using React.js and Node.js. to build new skills in using frameworks.",
            longDescription: "This comprehensive e-commerce platform features a modern React frontend with a responsive design, robust Node.js backend API, and MongoDB database. The platform includes user authentication, shopping cart functionality, secure payment processing through Stripe, order management, and an admin dashboard for inventory and order management. The application is optimized for performance and includes features like product search, filtering, and user reviews.",
            features: [
                "Secure user authentication and authorization",
                "Shopping cart and checkout process",
                "Payment integration with Stripe",
                "Admin dashboard for product management",
                "Order tracking and history",
                "Responsive design for all devices"
            ],
            demoUrl: "https://leafmeat-food.onrender.com/",
            githubUrl: "https://github.com/RitJaroen26/LeafMeat",
            icon: <Globe size={24} />
        },
        {
            id: 2,
            title: "Travel Recommendation Mobile App",
            category: "Web & Mobile",
            categoryName: "Mobile Application",
            image: "/images/TravelApp.png",
            technologies: ["React Native", "Expo"],
            date: "2024",
            description: "Develop a mobile app with React Native that introduces the location of Phra Pathom Chedi Temple in Nakhon Pathom.",
            longDescription: "A comprehensive task management mobile application built with React Native, featuring real-time synchronization across devices using Firebase. The app includes project organization, team collaboration, deadline tracking, and push notifications. Users can create projects, assign tasks to team members, set priorities, and track progress with intuitive charts and statistics.",
            features: [
                "Real-time task synchronization",
                "Team collaboration and assignment",
                "Project organization and categorization",
                "Deadline tracking with notifications",
                "Progress analytics and reporting",
                "Offline functionality with sync"
            ],
            demoUrl: "#",
            githubUrl: "https://github.com/RitJaroen26/Travel2",
            icon: <Smartphone size={24} />
        },
        {
            id: 3,
            title: "Basic Kanban Boards",
            category: "Web & Mobile",
            categoryName: "Web Application",
            image: "/images/Kanban1.png",
            technologies: ["React"],
            date: "2023",
            description: "Development a kanban boards with design and critical thinking.",
            longDescription: "An interactive weather dashboard built with Vue.js that provides current weather conditions, 5-day forecasts, and historical weather data visualization. The application integrates with the OpenWeather API to fetch real-time weather data and uses Chart.js for beautiful data visualization. Features include geolocation support, multiple city tracking, and weather alerts.",
            features: [
                "Real-time weather data from OpenWeather API",
                "5-day weather forecast",
                "Interactive charts and data visualization",
                "Geolocation-based weather detection",
                "Multiple city weather tracking",
                "Weather alerts and notifications"
            ],
            demoUrl: "https://basic-kanban-board.vercel.app/",
            githubUrl: "https://github.com/RitJaroen26/basic-kanban-board",
            icon: <Globe size={24} />
        },
    ];

    const categories = [
        { value: "All", label: "All Projects", icon: <Globe size={16} /> },
        { value: "Web & Mobile", label: 'Web & Mobile Application', icon: <Code size={16} /> },
        { value: 'Graphic Design', label: 'Graphic Design', icon: <Palette size={16} /> },
        { value: 'Photography', label: 'Photography', icon: <Camera size={16} /> }
    ]

    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);

    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedCategory]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    };

    const openProjectDetails = (project: Project) => {
        setSelectedProject(project);

        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
    };

    const closeProjectDetails = () => {
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";

        window.scrollTo(0, parseInt(scrollY || "0") * -1);

        setSelectedProject(null);
    };

    const getVisibleProjects = () => {
        if (filteredProjects.length === 0) return [];

        if (isMobile) {
            return [{ ...filteredProjects[currentIndex % filteredProjects.length], position: 0 }];
        } else {
            const result = [];
            for (let i = 0; i < Math.min(3, filteredProjects.length); i++) {
                const index = (currentIndex + i) % filteredProjects.length;
                result.push({ ...filteredProjects[index], position: i });
            }
            return result;
        }
    };

    const handleCategorySelect = (categoriyValue: string) => {
        setSelectedCategory(categoriyValue);
        setIsComboboxOpen(false);
    }

    const selectedCategoryData = categories.find(cat => cat.value === selectedCategory) || categories[0];

    const cardVariants = {
        left: { x: -100, scale: 0.92, opacity: 0.6 },
        center: { x: 0, scale: 1, opacity: 1 },
        right: { x: 100, scale: 0.92, opacity: 0.6 },
        exit: { opacity: 0, scale: 0.9, x: 0 },
    };

    return (
        <div id="portfolio-section" className={`min-h-screen py-20 ${isDarkMode ? 'bg-[#121212]' : 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden`}>
            <div className="absolute inset-0">
                <div className={`absolute top-1/4 right-20 w-64 h-64 ${isDarkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl`} />
                <div className={`absolute bottom-1/4 left-20 w-80 h-80 ${isDarkMode ? 'bg-blue-500/5' : 'bg-blue-500/10'} rounded-full blur-3xl`} />
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto px-4`}>
                        Explore my recent projects and technical achievements. Each project represents a unique challenge and learning experience.
                    </p>

                    <div className='my-8'>
                        <h1 className={`text-[16px] ${isDarkMode ? "text-white" : "text-gray-600"} mb-4`}>Category</h1>

                        <div className="flex justify-center mb-6">
                            <div className="relative" ref={comboboxRef}>
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsComboboxOpen(!isComboboxOpen)}
                                    className={`
                                    flex items-center gap-3 px-6 py-3 rounded-xl font-medium text-sm
                                    ${isDarkMode
                                            ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white hover:bg-gray-700/80'
                                            : 'bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-900 hover:bg-gray-50/80'
                                        }
                                    shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] justify-between
                                    ${isComboboxOpen ? 'ring-2 ring-blue-500/50' : ''}
                                `}
                                >
                                    <div className="flex items-center gap-2">
                                        {selectedCategoryData.icon}
                                        <span>{selectedCategoryData.label}</span>
                                    </div>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${isComboboxOpen ? 'rotate-180' : ''}`}
                                    />
                                </motion.button>

                                <AnimatePresence>
                                    {isComboboxOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className={`
                                            absolute top-full mt-2 left-0 right-0 z-50
                                            ${isDarkMode
                                                    ? 'bg-gray-800/95 backdrop-blur-md border border-gray-700'
                                                    : 'bg-white/95 backdrop-blur-md border border-gray-200'
                                                }
                                            rounded-xl shadow-2xl overflow-hidden
                                        `}
                                        >
                                            {categories.map((category, index) => (
                                                <motion.button
                                                    key={category.value}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    onClick={() => handleCategorySelect(category.value)}
                                                    className={`
                                                    w-full flex items-center gap-3 px-4 py-3 text-left text-sm
                                                    ${isDarkMode
                                                            ? 'hover:bg-gray-700/50 text-gray-300'
                                                            : 'hover:bg-gray-50/50 text-gray-700'
                                                        }
                                                    transition-all duration-200 group relative
                                                    ${selectedCategory === category.value
                                                            ? (isDarkMode ? 'bg-blue-600/20' : 'bg-blue-50')
                                                            : ''
                                                        }
                                                `}
                                                >
                                                    <div className="flex items-center gap-2 flex-1">
                                                        <span className={`${selectedCategory === category.value ? 'text-blue-500' : ''}`}>
                                                            {category.icon}
                                                        </span>
                                                        <span className={`${selectedCategory === category.value ? 'font-medium' : ''}`}>
                                                            {category.label}
                                                        </span>
                                                    </div>
                                                    {selectedCategory === category.value && (
                                                        <Check size={16} className="text-blue-500" />
                                                    )}

                                                    <div className={`
                                                    absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500
                                                    transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center
                                                `} />
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                        Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                        {selectedCategory !== 'All' && (
                            <span className="ml-1">in {selectedCategoryData.label}</span>
                        )}
                    </div>
                </motion.div>

                {filteredProjects.length > 0 ? (
                    <motion.div
                        ref={containerRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                        key={selectedCategory}
                    >
                        {filteredProjects.length > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-800'} shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer`}
                                >
                                    <ChevronLeft size={isMobile ? 20 : 24} />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-800'} shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer`}
                                >
                                    <ChevronRight size={isMobile ? 20 : 24} />
                                </button>
                            </>
                        )}

                        <div className="flex justify-center items-center min-h-[550px] md:min-h-[600px] px-12 md:px-16">
                            <div className={`${isMobile ? 'w-full max-w-sm' : 'flex gap-6 w-full max-w-6xl'}`}>
                                {getVisibleProjects().map((project, index) => (
                                    <motion.div
                                        key={`${project.id}-${currentIndex}`}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.95,
                                            y: isMobile ? 20 : 0,
                                            x: isMobile ? 0 : (index === 0 ? -30 : index === 2 ? 30 : 0)
                                        }}
                                        animate={{
                                            opacity: isMobile ? 1 : (index === 1 ? 1 : 0.6),
                                            scale: isMobile ? 1 : (index === 1 ? 1 : 0.92),
                                            y: 0,
                                            x: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            transition: { duration: 0.2 }
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }}
                                        className={`${isMobile ? 'w-full' : 'flex-1 max-w-sm'} mx-auto ${isMobile ? 'z-10' : (index === 1 ? 'z-10' : 'z-5')}`}
                                    >
                                        <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.02] group flex flex-col h-full min-h-[500px]`}>
                                            <div className={`relative h-56 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden`}>
                                                <div className="text-white text-4xl w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-out">
                                                    {project.image ? (
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full">
                                                            {project.icon}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="absolute top-4 right-4 transform group-hover:scale-105 transition-transform duration-300">
                                                    <span className={`px-3 py-1 rounded-full shadow-md text-xs font-medium backdrop-blur-sm ${isDarkMode ? 'bg-gray-900/70 text-gray-300' : 'bg-white/80 text-gray-700'}`}>
                                                        {project.date}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Tag size={16} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                                                    <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                        {project.categoryName}
                                                    </span>
                                                </div>

                                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                                    {project.title}
                                                </h3>

                                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4 line-clamp-3`}>
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className={`px-2 py-1 rounded-md text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.technologies.length > 3 && (
                                                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                                                            +{project.technologies.length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex gap-3 mt-auto">
                                                    <button
                                                        onClick={() => openProjectDetails(project)}
                                                        className="flex-1 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] flex items-center justify-center gap-2 group-hover:from-blue-700 group-hover:to-purple-700"
                                                    >
                                                        <Eye size={16} className="transition-transform duration-200 group-hover:scale-110" />
                                                        Details
                                                    </button>
                                                    <button
                                                        className={`p-2 cursor-pointer rounded-lg transition-all duration-300 ease-out hover:scale-110 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                                                        onClick={() => window.open(project.githubUrl, '_blank')}
                                                    >
                                                        <Github size={16} className="transition-transform duration-200 hover:rotate-12" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {filteredProjects.length > 1 && (
                            <div className="flex justify-center gap-2 mt-8">
                                {filteredProjects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                                            : isDarkMode
                                                ? 'bg-gray-600 hover:bg-gray-500'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <div className={`text-6xl mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                            🔍
                        </div>
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                            No projects found
                        </h3>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Try selecting a different category to see more projects.
                        </p>
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeProjectDetails}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-4 md:p-8 w-full max-w-4xl ${isMobile ? 'max-h-screen h-full' : 'max-h-[90vh]'} flex flex-col`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6 flex-shrink-0">
                                <div className="min-w-0 flex-1 mr-4">
                                    <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 break-words`}>
                                        {selectedProject.title}
                                    </h2>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                            <Tag size={14} />
                                            {selectedProject.category}
                                        </span>
                                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            <Calendar size={14} />
                                            {selectedProject.date}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={closeProjectDetails}
                                    className={`p-2 rounded-lg flex-shrink-0 ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                <div className={`relative h-48 md:h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center overflow-hidden`}>
                                    {selectedProject.image ? (
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="text-white text-6xl">
                                            {selectedProject.icon}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <h3 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                        About This Project
                                    </h3>
                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm md:text-base`}>
                                        {selectedProject.longDescription}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                        Key Features
                                    </h3>
                                    <div className="grid gap-2 md:gap-3">
                                        {selectedProject.features.map((feature, index) => (
                                            <div key={index} className={`flex items-start gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-base`}>
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                                                <span className="leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className={`px-3 py-1 md:px-4 md:py-2 rounded-lg font-medium text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 flex-shrink-0">
                                <button
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 md:px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
                                    onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                                >
                                    <ExternalLink size={16} />
                                    View Live Demo
                                </button>
                                <button
                                    className={`flex-1 border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} py-3 px-4 md:px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base`}
                                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                                >
                                    <Github size={16} />
                                    View Code
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
