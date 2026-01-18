"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface TechShowcaseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Technology projects data from CaseStudies
const techProjects = [
    {
        id: 'bbq-website',
        title: 'Website BBQ Hàn Quốc',
        category: 'Website',
        image: '/images/projects/bbq-website.png',
        description: 'Landing page nhà hàng với Dark Mode và đặt bàn realtime'
    },
    {
        id: 'real-estate-web',
        title: 'Sàn BĐS LuxHome',
        category: 'Website',
        image: '/images/projects/real-estate.png',
        description: 'Nền tảng giao dịch BĐS cao cấp với VR Tour 360°'
    },
    {
        id: 'fitness-app',
        title: 'FitLife - App Tập Luyện',
        category: 'Mobile App',
        image: '/images/projects/fitness-app.png',
        description: 'Ứng dụng iOS/Android hỗ trợ workout và dinh dưỡng'
    },
    {
        id: 'shop-apple-123',
        title: 'AI Chatbot Shop Apple',
        category: 'AI Chatbot',
        image: '/images/projects/shop-apple-123.png',
        description: 'Chatbot thông minh với Vision AI và OCR'
    },
    {
        id: 'tpbank-automation',
        title: 'AI Agent TP Bank',
        category: 'AI Agent',
        image: '/images/projects/tpbank-automation.png',
        description: 'Tự động hóa quản lý lịch hẹn trên Telegram'
    },
];

// Triple array for smooth infinite loop
const tripleProjects = [...techProjects, ...techProjects, ...techProjects];

// Slide Card Component
const ProjectSlide = ({ project, isMobile = false }: { project: typeof techProjects[0]; isMobile?: boolean }) => (
    <div className="flex flex-col items-center">
        <div className="relative group cursor-pointer">
            {/* Card Container */}
            <div className={`relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-xl transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/20 ${isMobile ? 'w-[280px]' : 'w-[300px] lg:w-[340px]'}`}>
                {/* Image */}
                <div className={`relative ${isMobile ? 'h-[180px]' : 'h-[200px] lg:h-[220px]'} overflow-hidden`}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain bg-slate-900 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 280px, 340px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>
    </div>
);

export default function TechShowcaseModal({ isOpen, onClose }: TechShowcaseModalProps) {
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Check if mobile
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isClient) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[60] flex flex-col bg-slate-950/95 backdrop-blur-sm"
                    onClick={onClose}
                >
                    {/* Header Section */}
                    <div className="flex items-start justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-2">
                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                        >
                            <h2 className="text-lg sm:text-xl font-bold text-white">
                                Dự Án Công Nghệ Tiêu Biểu
                            </h2>
                            <p className="text-xs sm:text-sm text-white/60 mt-1">
                                5 dự án đã triển khai thành công
                            </p>
                        </motion.div>

                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            onClick={onClose}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
                            aria-label="Đóng"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.button>
                    </div>

                    {/* Slider Container - Takes remaining space */}
                    <div className="flex-1 w-full flex items-center justify-center py-4 sm:py-6" onClick={(e) => e.stopPropagation()}>
                        {/* Mobile Slider */}
                        {isMobile ? (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="w-full"
                            >
                                <Swiper
                                    modules={[Autoplay, FreeMode, Pagination]}
                                    spaceBetween={16}
                                    slidesPerView={1.15}
                                    centeredSlides={true}
                                    freeMode={{
                                        enabled: true,
                                        momentum: false,
                                    }}
                                    loop={true}
                                    speed={4000}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    className="tech-mobile-swiper !pb-10"
                                >
                                    {tripleProjects.map((project, index) => (
                                        <SwiperSlide key={`mobile-${project.id}-${index}`}>
                                            <ProjectSlide project={project} isMobile={true} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </motion.div>
                        ) : (
                            /* Desktop Slider with Coverflow Effect */
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="w-full max-w-7xl px-4 sm:px-8"
                            >
                                <Swiper
                                    modules={[Autoplay, EffectCoverflow, Pagination]}
                                    effect="coverflow"
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={2.5}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 2,
                                        slideShadows: false,
                                    }}
                                    loop={true}
                                    speed={5000}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                        1280: {
                                            slidesPerView: 3.5,
                                        },
                                    }}
                                    className="tech-desktop-swiper !pb-10"
                                >
                                    {tripleProjects.map((project, index) => (
                                        <SwiperSlide key={`desktop-${project.id}-${index}`}>
                                            <ProjectSlide project={project} isMobile={false} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </motion.div>
                        )}
                    </div>

                    {/* Footer Hint */}
                    <div className="px-4 pb-4 sm:pb-6 text-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xs text-white/40"
                        >
                            Nhấn vào bất kỳ đâu để đóng
                        </motion.p>
                    </div>

                    {/* Styles */}
                    <style jsx global>{`
                        .tech-mobile-swiper .swiper-wrapper,
                        .tech-desktop-swiper .swiper-wrapper {
                            transition-timing-function: linear !important;
                        }

                        .tech-mobile-swiper .swiper-pagination-bullet-active,
                        .tech-desktop-swiper .swiper-pagination-bullet-active {
                            background: #06b6d4;
                            width: 24px;
                            border-radius: 4px;
                        }

                        .tech-mobile-swiper .swiper-pagination-bullet,
                        .tech-desktop-swiper .swiper-pagination-bullet {
                            background: rgba(255, 255, 255, 0.3);
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
