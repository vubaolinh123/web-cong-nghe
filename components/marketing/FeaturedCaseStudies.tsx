"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from "next/image";
import { ChevronLeft, ChevronRight, Users, Eye, Heart, MessageCircle, TrendingUp, Share2, Sparkles, Star, Zap } from "lucide-react";
import { Container } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Category types and colors
type ProjectCategory = 'marketing' | 'fanpage' | 'group' | 'tiktok';

const categoryConfig: Record<ProjectCategory, { labelVI: string; labelEN: string; color: string; gradient: string; glowColor: string }> = {
    marketing: {
        labelVI: 'Marketing',
        labelEN: 'Marketing',
        color: 'bg-orange-500',
        gradient: 'from-orange-500 to-amber-500',
        glowColor: 'orange',
    },
    fanpage: {
        labelVI: 'Fanpage',
        labelEN: 'Fanpage',
        color: 'bg-blue-500',
        gradient: 'from-blue-500 to-cyan-500',
        glowColor: 'cyan',
    },
    group: {
        labelVI: 'Group',
        labelEN: 'Group',
        color: 'bg-purple-500',
        gradient: 'from-purple-500 to-pink-500',
        glowColor: 'purple',
    },
    tiktok: {
        labelVI: 'TikTok',
        labelEN: 'TikTok',
        color: 'bg-rose-500',
        gradient: 'from-rose-500 to-pink-600',
        glowColor: 'pink',
    },
};

// Project data structure
interface ProjectStat {
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    labelVI: string;
    labelEN: string;
}

interface CaseStudyProject {
    id: number;
    category: ProjectCategory;
    nameVI: string;
    nameEN: string;
    descriptionVI: string;
    descriptionEN: string;
    image: string;
    stats: ProjectStat[];
}

// 5 Featured Projects Data with AI-generated images
const featuredProjects: CaseStudyProject[] = [
    {
        id: 1,
        category: 'marketing',
        nameVI: 'Palado Vietnam',
        nameEN: 'Palado Vietnam',
        descriptionVI: 'Thương hiệu PALADO Việt Nam chuyên cung cấp thiết bị vệ sinh cao cấp. Chiến dịch Marketing tổng thể giúp tăng nhận diện thương hiệu và doanh số vượt bậc.',
        descriptionEN: 'PALADO Vietnam brand specializes in high-end sanitary equipment. Comprehensive Marketing campaign helps increase brand awareness and outstanding sales growth.',
        image: '/image/casestudies/palado_ai.png',
        stats: [
            { icon: TrendingUp, value: '+150%', labelVI: 'Tăng doanh số', labelEN: 'Sales Growth' },
            { icon: Eye, value: '2.5M', labelVI: 'Lượt tiếp cận', labelEN: 'Reach' },
            { icon: Users, value: '+5K', labelVI: 'Khách hàng mới', labelEN: 'New Customers' },
        ],
    },
    {
        id: 2,
        category: 'fanpage',
        nameVI: 'Ú Oà - Mẹ Bầu Và Em Bé',
        nameEN: 'Ú Oà - Mother & Baby',
        descriptionVI: 'Chuỗi cửa hàng Mẹ Bầu Và Em Bé - Đồng hành cùng các mẹ trong hành trình nuôi dưỡng, chăm sóc con yêu với hơn 500K người theo dõi.',
        descriptionEN: 'Mother & Baby store chain - Accompanying mothers in the journey of nurturing and caring for their beloved children with over 500K followers.',
        image: '/image/casestudies/uoa_ai.png',
        stats: [
            { icon: Users, value: '511K', labelVI: 'Followers', labelEN: 'Followers' },
            { icon: Heart, value: '98%', labelVI: 'Tương tác', labelEN: 'Engagement' },
            { icon: MessageCircle, value: '+6K', labelVI: 'Bình luận/tháng', labelEN: 'Comments/month' },
        ],
    },
    {
        id: 3,
        category: 'marketing',
        nameVI: 'HPMED Company',
        nameEN: 'HPMED Company',
        descriptionVI: 'Công ty Thiết Bị Thẩm Mỹ HPMED Việt Nam - Tiên phong công nghệ, dẫn đầu xu hướng trong ngành thiết bị làm đẹp chuyên nghiệp.',
        descriptionEN: 'HPMED Vietnam Aesthetic Equipment Company - Pioneering technology, leading trends in the professional beauty equipment industry.',
        image: '/image/casestudies/hpmed_ai.png',
        stats: [
            { icon: TrendingUp, value: '+200%', labelVI: 'Tăng trưởng', labelEN: 'Growth' },
            { icon: Eye, value: '1.8M', labelVI: 'Lượt xem', labelEN: 'Views' },
            { icon: Share2, value: '50K', labelVI: 'Chia sẻ', labelEN: 'Shares' },
        ],
    },
    {
        id: 4,
        category: 'group',
        nameVI: 'Thiết Kế & Thi Công Nội Thất',
        nameEN: 'Interior Design & Construction',
        descriptionVI: 'Nhóm của Thửa Vũ Design - Kiến trúc & Nội thất. Cộng đồng chia sẻ kiến thức và kết nối khách hàng với các đơn vị thiết kế hàng đầu.',
        descriptionEN: 'Thua Vu Design Group - Architecture & Interior. Community for sharing knowledge and connecting customers with leading design units.',
        image: '/image/casestudies/group_ai.png',
        stats: [
            { icon: Users, value: '510.1K', labelVI: 'Thành viên', labelEN: 'Members' },
            { icon: MessageCircle, value: '1K+', labelVI: 'Bài viết/ngày', labelEN: 'Posts/day' },
            { icon: Heart, value: '95%', labelVI: 'Tương tác', labelEN: 'Engagement' },
        ],
    },
    {
        id: 5,
        category: 'tiktok',
        nameVI: 'Tama',
        nameEN: 'Tama',
        descriptionVI: 'Kênh TikTok giải trí với hơn 1.1 triệu người theo dõi, nội dung sáng tạo và viral thu hút hàng triệu lượt xem mỗi tháng.',
        descriptionEN: 'Entertainment TikTok channel with over 1.1 million followers, creative and viral content attracting millions of views monthly.',
        image: '/image/casestudies/tama_ai.png',
        stats: [
            { icon: Users, value: '1.1M', labelVI: 'Followers', labelEN: 'Followers' },
            { icon: Heart, value: '63.8M', labelVI: 'Lượt thích', labelEN: 'Likes' },
            { icon: Eye, value: '500M+', labelVI: 'Lượt xem', labelEN: 'Views' },
        ],
    },
];

export default function FeaturedCaseStudies() {
    const { language } = useLanguage();
    const isVI = language === 'vi';
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrev = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            swiperRef.current?.slidePrev();
            setTimeout(() => setIsAnimating(false), 800);
        }
    }, [isAnimating]);

    const handleNext = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            swiperRef.current?.slideNext();
            setTimeout(() => setIsAnimating(false), 800);
        }
    }, [isAnimating]);

    const currentProject = featuredProjects[activeIndex];
    const catConfig = categoryConfig[currentProject?.category || 'marketing'];

    return (
        <section className="relative lg:min-h-screen flex items-center overflow-hidden py-12 sm:py-16 lg:py-0">
            {/* === ANIMATED BACKGROUND === */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-30"
                    style={{
                        background: `radial-gradient(circle, ${catConfig.glowColor === 'orange' ? 'rgba(249,115,22,0.3)' : catConfig.glowColor === 'cyan' ? 'rgba(6,182,212,0.3)' : catConfig.glowColor === 'purple' ? 'rgba(168,85,247,0.3)' : 'rgba(244,63,94,0.3)'} 0%, transparent 70%)`,
                    }}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e05_1px,transparent_1px),linear-gradient(to_bottom,#22c55e05_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Top and bottom fades */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-green-400/30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <Container className="relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-between mb-12 lg:mb-16"
                >
                    <div className="flex items-center gap-4">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-8 h-8 text-green-400" />
                        </motion.div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                            Success{" "}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 italic">
                                    Stories
                                </span>
                                <motion.span
                                    className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-lg rounded-lg -z-10"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </span>
                        </h2>
                    </div>
                    <motion.a
                        href="#"
                        className="hidden lg:flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold text-lg group"
                        whileHover={{ x: 5 }}
                    >
                        {isVI ? 'Xem thêm' : 'See more'}
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>

                {/* Main Slider Container */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                        className="case-studies-swiper-enhanced"
                    >
                        {featuredProjects.map((project, index) => {
                            const projCatConfig = categoryConfig[project.category];
                            return (
                                <SwiperSlide key={project.id}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center lg:min-h-[600px]">
                                        {/* Left: Text Content */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="order-2 lg:order-1 space-y-6"
                                        >
                                            {/* Category Badge with glow */}
                                            <motion.div
                                                className="inline-block"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r ${projCatConfig.gradient} text-white text-sm font-bold shadow-lg shadow-${projCatConfig.glowColor}-500/30`}>
                                                    <Star className="w-4 h-4" />
                                                    {isVI ? projCatConfig.labelVI : projCatConfig.labelEN}
                                                </span>
                                            </motion.div>

                                            {/* Project Title with gradient animation */}
                                            <motion.h3
                                                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                            >
                                                {isVI ? project.nameVI : project.nameEN}
                                            </motion.h3>

                                            {/* Project Description */}
                                            <motion.p
                                                className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-xl"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                            >
                                                {isVI ? project.descriptionVI : project.descriptionEN}
                                            </motion.p>

                                            {/* Stats Badges - Compact on mobile */}
                                            <motion.div
                                                className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                            >
                                                {project.stats.map((stat, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        className="group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-slate-700/50 backdrop-blur-md hover:border-green-500/50 transition-all duration-300"
                                                        whileHover={{ scale: 1.05, y: -5 }}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.6 + idx * 0.1 }}
                                                    >
                                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${projCatConfig.gradient} flex items-center justify-center flex-shrink-0`}>
                                                            <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <div className="text-white font-bold text-sm sm:text-lg truncate">{stat.value}</div>
                                                            <div className="text-slate-400 text-xs sm:text-sm truncate">{isVI ? stat.labelVI : stat.labelEN}</div>
                                                        </div>
                                                        {/* Hover glow - desktop only */}
                                                        <div className="hidden sm:block absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300 -z-10" />
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </motion.div>

                                        {/* Right: Image with effects */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            className="order-1 lg:order-2"
                                        >
                                            <div className="relative group">
                                                {/* Glow effect behind image */}
                                                <motion.div
                                                    className={`absolute -inset-4 bg-gradient-to-r ${projCatConfig.gradient} rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
                                                    animate={{
                                                        scale: [1, 1.05, 1],
                                                    }}
                                                    transition={{ duration: 4, repeat: Infinity }}
                                                />

                                                {/* Image container */}
                                                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-slate-700/50 group-hover:border-green-500/30 transition-all duration-500 shadow-2xl shadow-black/50">
                                                    <div className="relative aspect-[16/10] lg:aspect-[16/9]">
                                                        <Image
                                                            src={project.image}
                                                            alt={isVI ? project.nameVI : project.nameEN}
                                                            fill
                                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                                            priority={index === 0}
                                                        />

                                                        {/* Gradient overlays */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20" />
                                                        <div className={`absolute inset-0 bg-gradient-to-br ${projCatConfig.gradient} opacity-10 mix-blend-overlay`} />
                                                    </div>

                                                    {/* Floating stats on image */}
                                                    <motion.div
                                                        className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-end gap-2"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.8 }}
                                                    >
                                                        {project.stats.slice(0, 2).map((stat, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/10"
                                                                whileHover={{ scale: 1.1 }}
                                                            >
                                                                <stat.icon className="w-4 h-4 text-green-400" />
                                                                <span className="text-white text-sm font-bold">{stat.value}</span>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>

                                                    {/* Corner decoration */}
                                                    <div className="absolute top-4 right-4">
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                        >
                                                            <Zap className="w-8 h-8 text-green-400/50" />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <motion.div
                        className="flex justify-center lg:justify-end gap-3 sm:gap-4 mt-6 sm:mt-10 lg:mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        {/* Slide indicators - center on mobile */}
                        <div className="flex items-center gap-2 mr-auto lg:mr-0">
                            {featuredProjects.map((_, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => swiperRef.current?.slideToLoop(idx)}
                                    className={`rounded-full transition-all duration-500 ${activeIndex === idx
                                        ? 'w-10 h-3 bg-gradient-to-r from-green-400 to-emerald-400'
                                        : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Nav buttons */}
                        <div className="flex gap-3">
                            <motion.button
                                onClick={handlePrev}
                                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-slate-600 bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:border-green-500 group backdrop-blur-sm"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-green-400 transition-colors" />
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-slate-600 bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:border-green-500 group backdrop-blur-sm"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-green-400 transition-colors" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </Container>

            {/* Custom styles for enhanced slider */}
            <style jsx global>{`
                .case-studies-swiper-enhanced .swiper-slide {
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
                .case-studies-swiper-enhanced .swiper-slide-active {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}
