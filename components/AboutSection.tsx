"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar } from '@/context/SidebarContext';
import { 
    tabs, 
    values, 
    skills 
} from './Data/aboutData';

import {
    SiCanva,
    SiFigma,
    SiPostman,
    SiGithub,
} from 'react-icons/si';

import { BiLogoVisualStudio } from 'react-icons/bi';

export default function AboutSection() {
    const { isOpen, isDarkMode, isThai } = useSidebar();
    const [activeTab, setActiveTab] = useState('story');
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

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

    const fullEngText = "I am a Computer Science student with a strong passion for exploring new technologies and applying them to solve real-world problems. My journey in technology is driven by curiosity, creativity, and a hands-on approach to learning, which allows me to continuously improve my skills and adapt to different challenges. I enjoy experimenting with emerging tools and frameworks, turning ideas into practical solutions, and learning from both successes and failures along the way. Whether working individually or as part of a team, I am adaptable, resilient, and able to perform well under pressure, ensuring that I deliver results while maintaining quality and efficiency.";
    const shortEngText = fullEngText.slice(0, 315);
    const fullThaiText = "ฉันเป็นนักศึกษาวิทยาการคอมพิวเตอร์ ผู้มีใจรักในการสำรวจเทคโนโลยีใหม่ๆ และประยุกต์ใช้เพื่อแก้ปัญหาในชีวิตจริง เส้นทางอาชีพของฉันในด้านเทคโนโลยีขับเคลื่อนด้วยความอยากรู้อยากเห็น ความคิดสร้างสรรค์ และการเรียนรู้แบบลงมือปฏิบัติจริง ซึ่งช่วยให้ฉันสามารถพัฒนาทักษะและปรับตัวเข้ากับความท้าทายต่างๆ ได้อย่างต่อเนื่อง ฉันชอบทดลองใช้เครื่องมือและกรอบการทำงานใหม่ๆ เปลี่ยนไอเดียให้เป็นวิธีแก้ปัญหาที่ใช้งานได้จริง และเรียนรู้จากทั้งความสำเร็จและความล้มเหลว ไม่ว่าจะทำงานคนเดียวหรือทำงานเป็นทีม ฉันมีความยืดหยุ่น ปรับตัว และทำงานได้ดีภายใต้ความกดดัน มั่นใจได้ว่าฉันจะส่งมอบผลลัพธ์ที่ดีควบคู่ไปกับการรักษาคุณภาพและประสิทธิภาพ";
    const shortThaiText = fullThaiText.slice(0, 309);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div id="about-section" className={`min-h-screen py-20 ${isDarkMode ? 'bg-[#121212]' : 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden`}>
            <div className="absolute inset-0">
                <div className={`absolute top-1/4 right-20 w-64 h-64 ${isDarkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl`} />
                <div className={`absolute bottom-1/4 left-20 w-80 h-80 ${isDarkMode ? 'bg-blue-500/5' : 'bg-blue-500/10'} rounded-full blur-3xl`} />
            </div>

            <div className={`relative z-10 w-full ${isOpen ? "px-16" : "px-0 md:px-12"} `}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {isThai ? "เกี่ยวกับ" : "About"} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{isThai ? "ฉัน" : "Me"}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className={`w-80 sm:w-180 md:w-full md:h-full ml-5 md:ml-0 ${isDarkMode ? 'bg-[#282828]' : 'bg-white'} backdrop-blur-sm rounded-2xl p-8 shadow-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                            <div className="text-center mb-6">
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg">
                                    <Image src="/images/image2.jpg" alt="" className='rounded-full' width={128} height={128} />
                                </div>
                                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                    {isThai ? "ปวริศร์ เจริญพัฒนศิริ" : "Pawarit Jaroenphatthanasiri"}
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

                            <div className='p-5 mt-5'>
                                <h2 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-700"} text-center`}>Devtool</h2>
                                <div className='flex flex-wrap items-center justify-center gap-10 p-5 max-w-[300px] ml-1 md:ml-35 lg:ml-0'>
                                    <SiGithub className='cursor-pointer text-[40px] text-gray-500
                                    transition-all duration-300 hover:translate-y-5 sm:text-[50px]
                                    md:text-[30px]' />
                                    <SiFigma className='cursor-pointer text-[40px] text-orange-500
                                    transition-all duration-300 hover:translate-y-5 sm:text-[50px]
                                    md:text-[30px]' />
                                    <BiLogoVisualStudio className='cursor-pointer text-[40px] text-blue-500
                                    transition-all duration-300 hover:translate-y-5 sm:text-[50px]
                                    md:text-[30px]' />
                                    <SiCanva className='cursor-pointer text-[40px] text-blue-500
                                    transition-all duration-300 hover:translate-y-5 sm:text-[50px]
                                    md:text-[30px]' />
                                    <SiPostman className='cursor-pointer text-[40px] text-orange-500
                                    transition-all duration-300 hover:translate-y-5 sm:text-[50px]
                                    md:text-[30px]' />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex flex-row justify-center md:justify-start gap-2 mb-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg cursor-pointer'
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

                        <div className={`w-90 md:w-full ${!isDarkMode ? 'bg-white' : ''} backdrop-blur-sm rounded-2xl p-8 shadow-xl ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} min-h-[500px]`}>
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
                                        <div className="space-y-4 text-lg leading-relaxed flex flex-col justify-center">
                                            <AnimatePresence initial={false}>
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{
                                                        duration: 0.6,
                                                        ease: [0.25, 0.1, 0.25, 1],
                                                    }}
                                                    className={`md:hidden overflow-hidden ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                                                >
                                                    <p className='leading-relaxed'>
                                                        {isExpanded
                                                            ? (isThai ? fullThaiText : fullEngText)
                                                            : (isThai ? shortThaiText : shortEngText) + '...'}
                                                    </p>
                                                </motion.div>
                                            </AnimatePresence>

                                            <button
                                                className={`md:hidden ${isDarkMode ? "text-gray-200" : "text-gray-600"} font-medium text-[16px] underline cursor-pointer`}
                                                onClick={() => setIsExpanded(!isExpanded)}
                                            >
                                                {isExpanded ? (isThai ? 'อ่านน้อยลง' : 'Read Less') : (isThai ? 'อ่านเพิ่มเติม' : 'Read More')}
                                            </button>

                                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hidden md:block`}>
                                                {isThai ? fullThaiText : fullEngText}
                                            </p>

                                            <div className="flex justify-center mt-6">
                                                <motion.div
                                                    variants={variants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                    className={`${isDarkMode ? "bg-[#404040]" : "bg-gray-200"} p-10 rounded-2xl shadow-xl max-w-full md:w-[500px] md:h-[290px]`}>
                                                    <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-500"}`}>
                                                        {isThai ? "เป้าหมายในสายอาชีพ" : "Career Objectives"}
                                                    </h2>
                                                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                        {isThai
                                                            ? "ผมต้องการพัฒนาทักษะการเขียนโค้ดให้มีประสิทธิภาพมากขึ้น พร้อมทั้งเรียนรู้แนวคิดใหม่ ๆ เกี่ยวกับการออกแบบซอฟต์แวร์ การรองรับการขยายระบบ และการตอบสนองความต้องการของผู้ใช้อย่างยอดเยี่ยม รวมถึงการพัฒนาทักษะด้านการจัดการโปรเจกต์และการทำงานร่วมกับทีมให้มีประสิทธิผล"
                                                            : "I aim to develop more efficient coding skills, while learning new concepts in software design, scalability, and excellent responsiveness to user needs, as well as developing effective project management and team collaboration skills."}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* {activeTab === 'journey' && (
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
                                                            {item.year}
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
                                )} */}

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

                                                    <div className='flex justify-center gap-4 flex-wrap space-y-2'>
                                                        {value.skill.map((skill, i) => (
                                                            <div
                                                                key={i}
                                                                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform transform hover:scale-110`}
                                                                aria-hidden={false}
                                                            >
                                                                <div className='flex flex-col items-center'>
                                                                    <span className={`${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                                        {skill.icon}
                                                                    </span>
                                                                    <p className="text-xs mt-2 text-gray-500 dark:text-gray-400 text-center">
                                                                        {skill.title}
                                                                    </p>
                                                                </div>
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