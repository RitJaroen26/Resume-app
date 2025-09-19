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
    Check,
    Briefcase,
    Users,
    Code2,
    GraduationCap,
    Award,
    Star,
    MapPin,
    Clock,
    Building
} from 'lucide-react';
import { JSX } from 'react';

type Experience = {
    id: number;
    type: string;
    title: string;
    image: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    duration: string;
    category: string;
    description: string;
    longDescription: string;
    responsibilities: string[];
    technologies: string[];
    achievements: string[];
    icon: JSX.Element;
    color: string;
};

export default function ExperienceSection() {
    const { isOpen, isDarkMode, isThai } = useSidebar();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

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

    const experiences: Experience[] = [
        {
            id: 1,
            type: "work",
            title: "Web Developer Intern",
            image: "/images/work_image1.jpg",
            organization: "Regexinnovation Co., Ltd.",
            location: "Huai Khwang, Bangkok",
            startDate: "16 Jun 2025",
            endDate: "5 Oct 2025",
            duration: "4 months",
            category: "Internship",
            description: "Gain hands-on experience in front-end and back-end development, participating in corporate projects.",
            longDescription: "During my internship at Regexinnovation Co., Ltd., I gained hands-on experience in both front-end and back-end development. I worked on various corporate projects, learned industry best practices, and developed modern web technology skills. This role helped me understand the software development lifecycle and professional workflows.",
            responsibilities: [
                "Built responsive web interfaces using React.js and CSS frameworks",
                "Integrated third-party APIs and services into web applications",
                "Optimized website performance and implemented SEO best practices",
                "Collaborated with senior developers on code reviews",
            ],
            technologies: ["Laravel", "Next.js", "React", "HTML/CSS", "TypeScript", "Bootstrap", "SourceTree", "Figma"],
            achievements: [
                "Successfully completed 3 client projects during internship",
                "Received excellent feedback from supervisors and clients",
                "Contributed to company's component library"
            ],
            icon: <Code2 size={24} />,
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            type: "work",
            title: "Coming Soon",
            image: "",
            organization: "",
            location: "-",
            startDate: "",
            endDate: "",
            duration: "-",
            category: "",
            description: "",
            longDescription: "",
            responsibilities: [],
            technologies: [],
            achievements: [],
            icon: <Code2 size={24} />,
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            type: "work",
            title: "Coming Soon",
            image: "",
            organization: "",
            location: "-",
            startDate: "",
            endDate: "",
            duration: "-",
            category: "",
            description: "",
            longDescription: "",
            responsibilities: [],
            technologies: [],
            achievements: [],
            icon: <Code2 size={24} />,
            color: "from-purple-500 to-pink-500"
        },
    ];



    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'work': return <Briefcase size={20} />;
            case 'education': return <GraduationCap size={20} />;
            case 'achievement': return <Award size={20} />;
            default: return <Star size={20} />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'work': return isDarkMode ? 'text-blue-400' : 'text-blue-600';
            case 'education': return isDarkMode ? 'text-green-400' : 'text-green-600';
            case 'achievement': return isDarkMode ? 'text-yellow-400' : 'text-yellow-600';
            default: return isDarkMode ? 'text-purple-400' : 'text-purple-600';
        }
    };

    const openExperienceDetails = (experience: Experience) => {
        setSelectedExperience(experience);

        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
    };

    const closeExperienceDetails = () => {
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";

        window.scrollTo(0, parseInt(scrollY || "0") * -1);

        setSelectedExperience(null);
    };

    const getVisibleExperiences = () => {
        if (experiences.length === 0) return [];

        if (isMobile) {
            return [{ ...experiences[currentIndex % experiences.length], position: 0 }];
        } else {
            const result = [];
            for (let i = 0; i < Math.min(3, experiences.length); i++) {
                const index = (currentIndex + i) % experiences.length;
                result.push({ ...experiences[index], position: i });
            }
            return result;
        }
    };

    const cardVariants = {
        left: { x: -100, scale: 0.92, opacity: 0.6 },
        center: { x: 0, scale: 1, opacity: 1 },
        right: { x: 100, scale: 0.92, opacity: 0.6 },
        exit: { opacity: 0, scale: 0.9, x: 0 },
    };

    return (
        <div id="experience-section" className={`min-h-screen py-20 ${isDarkMode ? 'bg-[#121212]' : 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden`}>
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
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experiences</span>
                    </h2>
                    <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto px-4`}>
                        Professional journey, educational milestones, and achievements that shaped my career in software development.
                    </p>
                </motion.div>

                {experiences.length > 0 ? (
                    <motion.div
                        ref={containerRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {experiences.length > 1 && (
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
                                {getVisibleExperiences().map((experience, index) => (
                                    <motion.div
                                        key={`${experience.id}-${currentIndex}`}
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
                                            <div className={`relative h-48 bg-gradient-to-br ${experience.color} flex items-center justify-center`}>
                                                <div className="text-white text-4xl w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-out">
                                                    {experience.image ? (
                                                        <img
                                                            src={experience.image}
                                                            alt={experience.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full">
                                                            {experience.icon}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="absolute top-4 left-4">
                                                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900/50 text-gray-300' : 'bg-white/90 text-gray-700'}`}>
                                                        {getTypeIcon(experience.type)}
                                                        {experience.type}
                                                    </span>
                                                </div>
                                                <div className="absolute top-4 right-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-900/50 text-gray-300' : 'bg-white/90 text-gray-700'}`}>
                                                        {experience.category}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='p-6 flex flex-col flex-1'>
                                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                                    {experience.title}
                                                </h3>

                                                <div className="flex items-center gap-2 mb-2">
                                                    <Building size={16} className={getTypeColor(experience.type)} />
                                                    <span className={`text-sm font-medium ${getTypeColor(experience.type)}`}>
                                                        {experience.organization}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-4 text-sm mb-3">
                                                    <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                        <MapPin size={14} />
                                                        {experience.location}
                                                    </span>
                                                    <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                        <Clock size={14} />
                                                        {experience.duration}
                                                    </span>
                                                </div>

                                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4 line-clamp-3`}>
                                                    {experience.description}
                                                </p>

                                                <div className={`flex items-center gap-1 mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    <Calendar size={14} />
                                                    <span>{experience.startDate} - {experience.endDate}</span>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {experience.technologies.slice(0, 3).map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className={`px-2 py-1 rounded-md text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {experience.technologies.length > 3 && (
                                                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                                                            +{experience.technologies.length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className='flex gap-3 mt-auto'>
                                                    <button
                                                        onClick={() => openExperienceDetails(experience)}
                                                        className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                                                    >
                                                        <Eye size={16} />
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {experiences.length > 1 && (
                            <div className="flex justify-center gap-2 mt-8">
                                {experiences.map((_, index) => (
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
                {selectedExperience && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeExperienceDetails}
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
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${selectedExperience.color} rounded-lg flex items-center justify-center text-white`}>
                                            {selectedExperience.icon}
                                        </div>
                                        <div>
                                            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {selectedExperience.title}
                                            </h2>
                                            <p className={`${getTypeColor(selectedExperience.type)} font-medium`}>
                                                {selectedExperience.organization}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 text-sm">
                                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            <MapPin size={14} />
                                            {selectedExperience.location}
                                        </span>
                                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            <Calendar size={14} />
                                            {selectedExperience.startDate} - {selectedExperience.endDate}
                                        </span>
                                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            <Clock size={14} />
                                            {selectedExperience.duration}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={closeExperienceDetails}
                                    className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="mb-6">
                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                    About This Role
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                    {selectedExperience.longDescription}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                    Key Responsibilities
                                </h3>
                                <div className="grid md:grid-cols-1 gap-2">
                                    {selectedExperience.responsibilities.map((responsibility, index) => (
                                        <div key={index} className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <ChevronRight size={16} className={`mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                            <span>{responsibility}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                    Technologies & Tools
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedExperience.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-4 py-2 rounded-lg font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                    Key Achievements
                                </h3>
                                <div className="space-y-2">
                                    {selectedExperience.achievements.map((achievement, index) => (
                                        <div key={index} className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <Star size={16} className={`mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                                            <span>{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
