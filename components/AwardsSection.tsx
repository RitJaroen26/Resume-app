"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar } from '@/context/SidebarContext';
import { awards, Award, AwardCategory } from './Data/awardsData';
import {
    Award as AwardIcon,
    Trophy,
    Medal,
    ScrollText,
    Calendar,
    Building,
    ChevronLeft,
    ChevronRight,
    X,
    Images,
} from 'lucide-react';

export default function AwardsSection() {
    const { isDarkMode, isThai } = useSidebar();
    const [isVisible, setIsVisible] = useState(false);
    const [cardImageIndex, setCardImageIndex] = useState<Record<number, number>>({});
    const [lightbox, setLightbox] = useState<{ award: Award; index: number } | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('awards-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!lightbox) return;

        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";

        return () => {
            const y = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            window.scrollTo(0, parseInt(y || "0") * -1);
        };
    }, [lightbox]);

    const getCategoryIcon = (category: AwardCategory, size = 20) => {
        switch (category) {
            case 'award': return <Trophy size={size} />;
            case 'honor': return <Medal size={size} />;
            case 'certificate': return <ScrollText size={size} />;
            case 'competition': return <AwardIcon size={size} />;
            default: return <Trophy size={size} />;
        }
    };

    const getCategoryColor = (category: AwardCategory) => {
        switch (category) {
            case 'award': return isDarkMode ? 'text-amber-400' : 'text-amber-600';
            case 'honor': return isDarkMode ? 'text-yellow-400' : 'text-yellow-600';
            case 'certificate': return isDarkMode ? 'text-purple-400' : 'text-purple-600';
            case 'competition': return isDarkMode ? 'text-blue-400' : 'text-blue-600';
            default: return isDarkMode ? 'text-amber-400' : 'text-amber-600';
        }
    };

    const getCardIndex = (awardId: number) => cardImageIndex[awardId] ?? 0;

    const setCardIndex = (awardId: number, index: number, total: number) => {
        setCardImageIndex((prev) => ({
            ...prev,
            [awardId]: ((index % total) + total) % total,
        }));
    };

    const openLightbox = (award: Award, index: number) => {
        if (award.images.length === 0) return;
        setLightbox({ award, index });
    };

    const closeLightbox = () => setLightbox(null);

    const lightboxPrev = () => {
        if (!lightbox) return;
        const total = lightbox.award.images.length;
        setLightbox({
            ...lightbox,
            index: (lightbox.index - 1 + total) % total,
        });
    };

    const lightboxNext = () => {
        if (!lightbox) return;
        const total = lightbox.award.images.length;
        setLightbox({
            ...lightbox,
            index: (lightbox.index + 1) % total,
        });
    };

    return (
        <div id="awards-section" className={`min-h-screen py-12 sm:py-16 lg:py-20 ${isDarkMode ? 'bg-[#121212]' : 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden`}>
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/4 left-4 lg:left-20 w-40 h-40 lg:w-64 lg:h-64 ${isDarkMode ? 'bg-amber-500/5' : 'bg-amber-500/10'} rounded-full blur-3xl`} />
                <div className={`absolute bottom-1/4 right-4 lg:right-20 w-48 h-48 lg:w-80 lg:h-80 ${isDarkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl`} />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {isThai ? (
                            <>
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">รางวัล</span>
                                {" "}และเกียรติบัตร
                            </>
                        ) : (
                            <>
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Awards</span>
                                {" "}& Honors
                            </>
                        )}
                    </h2>
                    <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto px-1 sm:px-4`}>
                        {isThai
                            ? "รางวัล เกียรติบัตร และประกาศนียบัตรที่สะท้อนความมุ่งมั่นและการพัฒนาอย่างต่อเนื่อง"
                            : "Awards, honors, and certificates that reflect dedication and continuous growth."
                        }
                    </p>
                </motion.div>

                {awards.length > 0 ? (
                    <div className="relative max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto">
                        {/* Mobile/Tablet: left rail | Desktop: center timeline */}
                        <div className={`absolute left-3 sm:left-4 lg:left-1/2 top-0 bottom-0 w-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} lg:-translate-x-1/2`} />

                        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                            {awards.map((award: Award, index: number) => {
                                const isLeft = index % 2 === 0;
                                const currentImg = getCardIndex(award.id);
                                const hasImages = award.images.length > 0;

                                return (
                                    <motion.div
                                        key={award.id}
                                        initial={{ opacity: 0, y: 40, x: isLeft ? -20 : 20 }}
                                        animate={{
                                            opacity: isVisible ? 1 : 0,
                                            y: isVisible ? 0 : 40,
                                            x: isVisible ? 0 : (isLeft ? -20 : 20),
                                        }}
                                        transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
                                        className={`relative flex flex-col lg:flex-row items-start lg:items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                    >
                                        <div className="absolute left-3 sm:left-4 lg:left-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-[3px] lg:border-4 border-white dark:border-[#121212] -translate-x-1/2 z-10 mt-5 lg:mt-0 shadow-md" />

                                        {/* Mobile/Tablet: full width card | Desktop: half-width alternating */}
                                        <div className={`ml-8 sm:ml-10 lg:ml-0 w-[calc(100%-2.25rem)] sm:w-[calc(100%-2.75rem)] lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:mr-auto lg:pr-4' : 'lg:ml-auto lg:pl-4'}`}>
                                            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'border border-gray-700' : 'border border-gray-100'} transition-all duration-500 hover:shadow-2xl lg:hover:scale-[1.02] group`}>
                                                {/* Mobile/Tablet: taller contain | Desktop: h-48 cover */}
                                                <div className={`relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-48 bg-gradient-to-br ${award.color} overflow-hidden`}>
                                                    {hasImages ? (
                                                        <>
                                                            <button
                                                                type="button"
                                                                onClick={() => openLightbox(award, currentImg)}
                                                                className="absolute inset-0 cursor-pointer"
                                                                aria-label={isThai ? "ดูรูปขนาดเต็ม" : "View full image"}
                                                            >
                                                                <Image
                                                                    src={award.images[currentImg]}
                                                                    alt={`${isThai ? award.titleTh : award.title} - ${currentImg + 1}`}
                                                                    fill
                                                                    className="object-contain p-1.5 sm:p-2 lg:p-0 lg:object-cover group-hover:scale-105 transition-transform duration-700"
                                                                    sizes="(max-width: 1024px) 100vw, 400px"
                                                                />
                                                            </button>

                                                            {award.images.length > 1 && (
                                                                <>
                                                                    <button
                                                                        type="button"
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setCardIndex(award.id, currentImg - 1, award.images.length);
                                                                        }}
                                                                        className={`absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full ${isDarkMode ? 'bg-black/50 hover:bg-black/70 text-white' : 'bg-white/90 hover:bg-white text-gray-800'} shadow transition-all cursor-pointer`}
                                                                        aria-label="Previous image"
                                                                    >
                                                                        <ChevronLeft size={16} />
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setCardIndex(award.id, currentImg + 1, award.images.length);
                                                                        }}
                                                                        className={`absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full ${isDarkMode ? 'bg-black/50 hover:bg-black/70 text-white' : 'bg-white/90 hover:bg-white text-gray-800'} shadow transition-all cursor-pointer`}
                                                                        aria-label="Next image"
                                                                    >
                                                                        <ChevronRight size={16} />
                                                                    </button>
                                                                    <div className={`absolute bottom-2 right-2 z-10 flex items-center gap-1 px-2 py-1 rounded-full text-[11px] lg:text-xs font-medium ${isDarkMode ? 'bg-black/50 text-white' : 'bg-white/90 text-gray-700'}`}>
                                                                        <Images size={12} />
                                                                        {currentImg + 1}/{award.images.length}
                                                                    </div>
                                                                </>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-white/80">
                                                            {getCategoryIcon(award.category, 48)}
                                                        </div>
                                                    )}
                                                </div>

                                                {hasImages && award.images.length > 1 && (
                                                    <div className="flex gap-2 px-3 sm:px-4 pt-3 overflow-x-auto">
                                                        {award.images.map((img, imgIndex) => (
                                                            <button
                                                                key={imgIndex}
                                                                type="button"
                                                                onClick={() => setCardIndex(award.id, imgIndex, award.images.length)}
                                                                className={`relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                                                                    imgIndex === currentImg
                                                                        ? 'border-blue-500 scale-105'
                                                                        : isDarkMode
                                                                            ? 'border-gray-600 opacity-60 hover:opacity-100'
                                                                            : 'border-gray-200 opacity-60 hover:opacity-100'
                                                                }`}
                                                            >
                                                                <Image
                                                                    src={img}
                                                                    alt={`Thumbnail ${imgIndex + 1}`}
                                                                    fill
                                                                    className="object-cover"
                                                                    sizes="56px"
                                                                />
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="p-4 sm:p-5 lg:p-6">
                                                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 lg:mb-4">
                                                        <span className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] lg:text-xs font-medium ${isDarkMode ? 'bg-gray-700/80 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                                                            <span className={getCategoryColor(award.category)}>
                                                                {getCategoryIcon(award.category, 16)}
                                                            </span>
                                                            {isThai ? award.categoryLabelTh : award.categoryLabel}
                                                        </span>
                                                        <span className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-[11px] lg:text-xs font-medium ${isDarkMode ? 'bg-gray-700/80 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                                                            <Calendar size={12} />
                                                            {isThai ? award.yearTh : award.year}
                                                        </span>
                                                    </div>

                                                    <h3 className={`text-base sm:text-lg lg:text-xl font-bold leading-snug ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                                                        {isThai ? award.titleTh : award.title}
                                                    </h3>

                                                    <div className="flex items-start gap-2 mb-2 lg:mb-3">
                                                        <Building size={16} className={`mt-0.5 shrink-0 ${getCategoryColor(award.category)}`} />
                                                        <span className={`text-xs sm:text-sm font-medium leading-snug ${getCategoryColor(award.category)}`}>
                                                            {isThai ? award.organizationTh : award.organization}
                                                        </span>
                                                    </div>

                                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-xs sm:text-sm leading-relaxed`}>
                                                        {isThai ? award.descriptionTh : award.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        className="text-center py-16 lg:py-20"
                    >
                        <Trophy size={48} className={`mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                        <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {isThai ? "กำลังอัปเดตรางวัลเร็วๆ นี้" : "Awards coming soon"}
                        </p>
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end lg:items-center justify-center p-0 lg:p-4"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 24 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 24 }}
                            transition={{ duration: 0.25 }}
                            className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-t-2xl lg:rounded-2xl w-full max-w-4xl max-h-[92vh] lg:max-h-[90vh] overflow-hidden flex flex-col`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-start justify-between gap-3 p-3 sm:p-4 border-b border-gray-700/30 shrink-0">
                                <div className="min-w-0 flex-1 pr-2">
                                    <h3 className={`text-sm sm:text-base lg:text-lg font-bold line-clamp-2 lg:truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {isThai ? lightbox.award.titleTh : lightbox.award.title}
                                    </h3>
                                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {lightbox.index + 1} / {lightbox.award.images.length}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={closeLightbox}
                                    className={`p-2 rounded-lg shrink-0 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                                    aria-label="Close"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="relative flex-1 min-h-[42vh] sm:min-h-[50vh] lg:min-h-[420px] bg-black/20">
                                <Image
                                    src={lightbox.award.images[lightbox.index]}
                                    alt={`${isThai ? lightbox.award.titleTh : lightbox.award.title} - ${lightbox.index + 1}`}
                                    fill
                                    className="object-contain p-2 lg:p-0"
                                    sizes="(max-width: 1024px) 100vw, 900px"
                                    priority
                                />

                                {lightbox.award.images.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={lightboxPrev}
                                            className={`absolute left-2 lg:left-3 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-white' : 'bg-white/90 hover:bg-white text-gray-800'} shadow-lg transition-all`}
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={lightboxNext}
                                            className={`absolute right-2 lg:right-3 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-white' : 'bg-white/90 hover:bg-white text-gray-800'} shadow-lg transition-all`}
                                            aria-label="Next image"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </>
                                )}
                            </div>

                            {lightbox.award.images.length > 1 && (
                                <div className="flex gap-2 p-3 sm:p-4 overflow-x-auto justify-center shrink-0">
                                    {lightbox.award.images.map((img, imgIndex) => (
                                        <button
                                            key={imgIndex}
                                            type="button"
                                            onClick={() => setLightbox({ ...lightbox, index: imgIndex })}
                                            className={`relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                                                imgIndex === lightbox.index
                                                    ? 'border-blue-500'
                                                    : isDarkMode
                                                        ? 'border-gray-600 opacity-50 hover:opacity-100'
                                                        : 'border-gray-200 opacity-50 hover:opacity-100'
                                            }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${imgIndex + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="64px"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
