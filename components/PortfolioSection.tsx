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
    Database
} from 'lucide-react';
import { JSX } from 'react';

type Project = {
    id: number;
    title: string;
    category: string;
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
    const { isOpen, isDarkMode } = useSidebar();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

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

    const projects = [
        {
            id: 1,
            title: "Food Ordering System",
            category: "Web Application",
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
            category: "Mobile Application",
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
            category: "Web Application",
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

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const openProjectDetails = (project: any) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    const getVisibleProjects = () => {
        const result = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % projects.length;
            result.push({ ...projects[index], position: i });
        }
        return result;
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
                    className="md:text-center mb-16"
                >
                    <h2 className={`ml-30 md:ml-0 text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className={`hidden md:block w-95 md:w-full text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Explore my recent projects and technical achievements. Each project represents a unique challenge and learning experience.
                    </p>
                </motion.div>

                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative w-50"
                >
                    <button
                        onClick={prevSlide}
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-800'} shadow-lg transition-all duration-300 hover:scale-110`}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-800'} shadow-lg transition-all duration-300 hover:scale-110`}
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="flex justify-center items-center min-h-[500px] overflow-hidden">
                        <div className="flex gap-6 w-full max-w-6xl">
                            {getVisibleProjects().map((project, index) => (
                                <motion.div
                                    key={`${project.id}-${currentIndex}`}
                                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                                    animate={{
                                        opacity: index === 1 ? 1 : 0.7,
                                        scale: index === 1 ? 1 : 0.9,
                                        x: 0
                                    }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex-1 max-w-sm ${index === 1 ? 'z-10' : 'z-5'}`}
                                >
                                    <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
                                        <div className={`relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center`}>
                                            <div className="text-white text-4xl w-full h-48 relative">
                                                {project.image ? (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    project.icon
                                                )}
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <span className={`px-3 py-1 rounded-full shadow-md text-xs font-medium ${isDarkMode ? 'bg-gray-900/50 text-gray-300' : 'bg-white/90 text-gray-700'}`}>
                                                    {project.date}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Tag size={16} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                                                <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                    {project.category}
                                                </span>
                                            </div>

                                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                                {project.title}
                                            </h3>

                                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4 line-clamp-2`}>
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

                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => openProjectDetails(project)}
                                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                                                >
                                                    <Eye size={16} />
                                                    Details
                                                </button>
                                                <button
                                                    className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-colors`}
                                                    onClick={() => window.open(project.githubUrl, '_blank')}
                                                >
                                                    <Github size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, index) => (
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
                </motion.div>
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
                            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                        {selectedProject.title}
                                    </h2>
                                    <div className="flex items-center gap-4 text-sm">
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
                                    className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center">
                                {selectedProject.image ? (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    selectedProject.icon
                                )}
                            </div>

                            <div className="mb-6">
                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                    About This Project
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                    {selectedProject.longDescription}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                    Key Features
                                </h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {selectedProject.features.map((feature, index) => (
                                        <div key={index} className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-4 py-2 rounded-lg font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                                    onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                                >
                                    <ExternalLink size={18} />
                                    View Live Demo
                                </button>
                                <button
                                    className={`flex-1 border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2`}
                                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                                >
                                    <Github size={18} />
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
