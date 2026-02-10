"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";
import { ChevronLeft, ChevronRight, TrendingUp, Eye, Users, Award, Sparkles, Star, Zap } from "lucide-react";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSectionActivity } from "@/hooks/useSectionActivity";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Category types and colors
type ProjectCategory = 'media' | 'brand' | 'marketing' | 'product';

const categoryConfig: Record<ProjectCategory, { labelVI: string; labelEN: string; gradient: string; glowColor: string }> = {
    media: {
        labelVI: 'Media Partner',
        labelEN: 'Media Partner',
        gradient: 'from-red-500 to-blue-500',
        glowColor: 'blue',
    },
    brand: {
        labelVI: 'Brand Development',
        labelEN: 'Brand Development',
        gradient: 'from-orange-500 to-yellow-500',
        glowColor: 'orange',
    },
    marketing: {
        labelVI: 'Full Marketing',
        labelEN: 'Full Marketing',
        gradient: 'from-green-500 to-emerald-500',
        glowColor: 'green',
    },
    product: {
        labelVI: 'Product Launch',
        labelEN: 'Product Launch',
        gradient: 'from-lime-500 to-green-500',
        glowColor: 'lime',
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

// 4 Featured Projects with AI-generated images
const featuredProjects: CaseStudyProject[] = [
    {
        id: 1,
        category: 'media',
        nameVI: 'VTV Partnership',
        nameEN: 'VTV Partnership',
        descriptionVI: 'Hợp tác chiến lược với Đài Truyền hình Việt Nam (VTV) - Xây dựng chiến dịch truyền thông đa nền tảng, tiếp cận hàng triệu khán giả trên toàn quốc.',
        descriptionEN: 'Strategic partnership with Vietnam Television (VTV) - Building multi-platform media campaigns, reaching millions of viewers nationwide.',
        image: '/image/casestudies/marketing_7.jpg',
        stats: [
            { icon: Eye, value: '10M+', labelVI: 'Lượt xem', labelEN: 'Views' },
            { icon: Users, value: '5M+', labelVI: 'Khán giả', labelEN: 'Audience' },
            { icon: TrendingUp, value: '+300%', labelVI: 'Nhận diện', labelEN: 'Awareness' },
        ],
    },
    {
        id: 2,
        category: 'brand',
        nameVI: 'Palado Vietnam',
        nameEN: 'Palado Vietnam',
        descriptionVI: 'Xây dựng thương hiệu PALADO Việt Nam - Thiết bị vệ sinh cao cấp từ châu Âu. Phát triển định vị thương hiệu và chiến lược truyền thông toàn diện.',
        descriptionEN: 'Building PALADO Vietnam brand - Premium European sanitary equipment. Developing brand positioning and comprehensive communication strategy.',
        image: '/image/casestudies/marketing_8.jpg',
        stats: [
            { icon: TrendingUp, value: '+200%', labelVI: 'Doanh số', labelEN: 'Sales' },
            { icon: Award, value: 'Top 5', labelVI: 'Thương hiệu', labelEN: 'Brand Rank' },
            { icon: Users, value: '+10K', labelVI: 'Đối tác', labelEN: 'Partners' },
        ],
    },
    {
        id: 3,
        category: 'marketing',
        nameVI: 'HPMED Vietnam',
        nameEN: 'HPMED Vietnam',
        descriptionVI: 'Chiến dịch Marketing toàn diện cho HPMED - Công ty Thiết bị Thẩm mỹ Y tế hàng đầu Việt Nam. Từ branding đến digital marketing.',
        descriptionEN: 'Comprehensive Marketing campaign for HPMED - Leading Medical Aesthetic Equipment Company in Vietnam. From branding to digital marketing.',
        image: '/image/casestudies/marketing_11.webp',
        stats: [
            { icon: TrendingUp, value: '+250%', labelVI: 'Tăng trưởng', labelEN: 'Growth' },
            { icon: Eye, value: '3M+', labelVI: 'Tiếp cận', labelEN: 'Reach' },
            { icon: Award, value: '#1', labelVI: 'Thị phần', labelEN: 'Market Share' },
        ],
    },
    {
        id: 4,
        category: 'product',
        nameVI: 'Real EMS',
        nameEN: 'Real EMS',
        descriptionVI: 'Ra mắt sản phẩm Real EMS - Công nghệ tập luyện EMS tiên tiến. Chiến dịch launch đa kênh với influencer marketing và PR.',
        descriptionEN: 'Product launch for Real EMS - Advanced EMS training technology. Multi-channel launch campaign with influencer marketing and PR.',
        image: '/image/casestudies/marketing_10.jpg',
        stats: [
            { icon: Users, value: '50K+', labelVI: 'Khách hàng', labelEN: 'Customers' },
            { icon: TrendingUp, value: '+180%', labelVI: 'ROI', labelEN: 'ROI' },
            { icon: Eye, value: '2M+', labelVI: 'Impressions', labelEN: 'Impressions' },
        ],
    },
];

export default function CaseStudies() {
    const t = useMarketingFullPackageTranslations();
    const swiperRef = useRef<SwiperType | null>(null);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const shouldReduceMotion = useReducedMotion();
    const { ref: sectionRef, isActive } = useSectionActivity<HTMLElement>(undefined, {
        threshold: 0.2,
    });
    const animationEnabled = isActive && !shouldReduceMotion;

    const particles = useMemo(() => {
        const amount = shouldReduceMotion ? 0 : 8;
        return Array.from({ length: amount }, (_, index) => {
            const left = ((index * 41) % 100) + 0.5;
            const top = ((index * 61) % 100) + 0.5;
            const duration = 3 + (index % 3);
            const delay = (index % 4) * 0.4;

            return {
                id: `full-package-particle-${index}`,
                left,
                top,
                duration,
                delay,
            };
        });
    }, [shouldReduceMotion]);

    useEffect(() => {
        if (!swiper || !swiper.autoplay) return;

        if (animationEnabled) {
            swiper.autoplay.start();
        } else {
            swiper.autoplay.stop();
        }
    }, [animationEnabled, swiper]);

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

    // Get language using useLanguage hook
    const { language } = useLanguage();
    const isVI = language === 'vi';

    return (
        <section ref={sectionRef} className="relative py-16 sm:py-20 overflow-hidden bg-slate-950">
            {/* === BACKGROUND === */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-30"
                    style={{
                        background: `radial-gradient(circle, ${catConfig.glowColor === 'blue' ? 'rgba(59,130,246,0.3)' : catConfig.glowColor === 'orange' ? 'rgba(249,115,22,0.3)' : catConfig.glowColor === 'green' ? 'rgba(34,197,94,0.3)' : 'rgba(132,204,22,0.3)'} 0%, transparent 70%)`,
                    }}
                    animate={animationEnabled ? {
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    } : undefined}
                    transition={animationEnabled ? { duration: 20, repeat: Infinity, ease: "easeInOut" } : undefined}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)',
                    }}
                    animate={animationEnabled ? {
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.3, 1],
                    } : undefined}
                    transition={animationEnabled ? { duration: 15, repeat: Infinity, ease: "easeInOut" } : undefined}
                />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e05_1px,transparent_1px),linear-gradient(to_bottom,#22c55e05_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Top and bottom fades */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

                {/* Floating particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 rounded-full bg-green-400/30"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={animationEnabled ? {
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        } : { opacity: 0.3 }}
                        transition={animationEnabled ? {
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                        } : undefined}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-between mb-10 lg:mb-14"
                >
                    <div className="flex items-center gap-4">
                        <motion.div
                            animate={animationEnabled ? { rotate: 360 } : undefined}
                            transition={animationEnabled ? { duration: 20, repeat: Infinity, ease: "linear" } : undefined}
                        >
                            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                            {t.caseStudies?.sectionTitle || 'Success'}{" "}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 italic">
                                    {t.caseStudies?.sectionTitleHighlight || 'Stories'}
                                </span>
                                <motion.span
                                    className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-lg rounded-lg -z-10"
                                    animate={animationEnabled ? { opacity: [0.5, 1, 0.5] } : undefined}
                                    transition={animationEnabled ? { duration: 2, repeat: Infinity } : undefined}
                                />
                            </span>
                        </h2>
                    </div>
                </motion.div>

                {/* Main Slider Container */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: shouldReduceMotion ? 0 : 7000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setSwiper(swiper);
                        }}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                        className="case-studies-fullpackage-swiper"
                    >
                        {featuredProjects.map((project, index) => {
                            const projCatConfig = categoryConfig[project.category];
                            return (
                                <SwiperSlide key={project.id}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center lg:min-h-[500px]">
                                        {/* Left: Text Content */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="order-2 lg:order-1 space-y-5"
                                        >
                                            {/* Category Badge */}
                                            <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
                                                <span className={`inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r ${projCatConfig.gradient} text-white text-xs sm:text-sm font-bold shadow-lg`}>
                                                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    {isVI ? projCatConfig.labelVI : projCatConfig.labelEN}
                                                </span>
                                            </motion.div>

                                            {/* Project Title */}
                                            <motion.h3
                                                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                            >
                                                {isVI ? project.nameVI : project.nameEN}
                                            </motion.h3>

                                            {/* Project Description */}
                                            <motion.p
                                                className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-xl"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                            >
                                                {isVI ? project.descriptionVI : project.descriptionEN}
                                            </motion.p>

                                            {/* Stats Badges - Compact on mobile */}
                                            <motion.div
                                                className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 pt-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                            >
                                                {project.stats.map((stat, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        className="group relative flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700/50 backdrop-blur-md"
                                                        whileHover={{ scale: 1.05, y: -3 }}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.6 + idx * 0.1 }}
                                                    >
                                                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${projCatConfig.gradient} flex items-center justify-center flex-shrink-0`}>
                                                            <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <div className="text-white font-bold text-sm truncate">{stat.value}</div>
                                                            <div className="text-slate-400 text-xs truncate">{isVI ? stat.labelVI : stat.labelEN}</div>
                                                        </div>
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
                                                    animate={animationEnabled ? { scale: [1, 1.05, 1] } : undefined}
                                                    transition={animationEnabled ? { duration: 4, repeat: Infinity } : undefined}
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
                                                        className="absolute bottom-3 left-3 right-3 flex flex-wrap justify-end gap-2"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.8 }}
                                                    >
                                                        {project.stats.slice(0, 2).map((stat, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10"
                                                                whileHover={{ scale: 1.1 }}
                                                            >
                                                                <stat.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-400" />
                                                                <span className="text-white text-xs sm:text-sm font-bold">{stat.value}</span>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>

                                                    {/* Corner decoration */}
                                                    <div className="absolute top-3 right-3">
                                                        <motion.div
                                                            animate={animationEnabled ? { rotate: 360 } : undefined}
                                                            transition={animationEnabled ? { duration: 10, repeat: Infinity, ease: "linear" } : undefined}
                                                        >
                                                            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-green-400/50" />
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
                        className="flex justify-center lg:justify-end gap-3 mt-6 sm:mt-8 lg:mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        {/* Slide indicators */}
                        <div className="flex items-center gap-2 mr-auto lg:mr-0">
                            {featuredProjects.map((_, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => swiperRef.current?.slideToLoop(idx)}
                                    className={`rounded-full transition-all duration-500 ${activeIndex === idx
                                        ? 'w-8 h-2.5 bg-gradient-to-r from-green-400 to-emerald-400'
                                        : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-500'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Nav buttons */}
                        <div className="flex gap-2 sm:gap-3">
                            <motion.button
                                onClick={handlePrev}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-600 bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:border-green-500 group backdrop-blur-sm"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-green-400 transition-colors" />
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-600 bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:border-green-500 group backdrop-blur-sm"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-green-400 transition-colors" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Custom styles */}
            <style jsx global>{`
                .case-studies-fullpackage-swiper .swiper-slide {
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
                .case-studies-fullpackage-swiper .swiper-slide-active {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}
