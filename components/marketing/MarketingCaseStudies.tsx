"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../common";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import Image from "next/image";
import { TrendingUp, Eye, Users, Award, TrendingUpIcon, UsersIcon, ThumbsUp, Video, X, CheckCircle, Target, Clock, DollarSign, ShoppingCart, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { createPortal } from "react-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

// Category types
type CategoryKey = 'marketing' | 'group' | 'fanpage' | 'tiktok';

interface CaseStudy {
    id: number;
    image: string;
    alt: string;
    type: "landscape" | "portrait";
    description?: string;
}

interface Category {
    key: CategoryKey;
    name: string;
    icon: any;
    description: string;
    caseStudies: CaseStudy[];
    color: string;
}

// Icon mapping for stats
const statIcons = [CheckCircle, Users, Target, Clock];

export default function MarketingCaseStudies() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('marketing');
    const [selectedImage, setSelectedImage] = useState<CaseStudy | null>(null);

    // Build categories with translations
    const categories: Category[] = [
        {
            key: 'marketing',
            name: t('caseStudies.categories.marketing.name') || 'Marketing tổng thể',
            icon: TrendingUpIcon,
            description: t('caseStudies.categories.marketing.description') || 'Các chiến dịch marketing đa kênh tổng thể',
            color: 'from-green-500 to-emerald-500',
            caseStudies: [
                { id: 2, image: "/image/casestudies/marketing_2.jpg", alt: "Marketing Case Study 2", type: "portrait" },
                { id: 4, image: "/image/casestudies/marketing_4.jpg", alt: "Marketing Case Study 4", type: "portrait" },
                { id: 5, image: "/image/casestudies/marketing_5.jpg", alt: "Marketing Case Study 5", type: "portrait" },
                { id: 6, image: "/image/casestudies/marketing_6.jpg", alt: "Marketing Case Study 6", type: "portrait" },
            ]
        },
        {
            key: 'group',
            name: t('caseStudies.categories.group.name') || 'Xây Group Facebook',
            icon: UsersIcon,
            description: t('caseStudies.categories.group.description') || 'Xây dựng và phát triển cộng đồng Facebook Group',
            color: 'from-blue-500 to-cyan-500',
            caseStudies: [
                { id: 7, image: "/image/casestudies/group_6.jpg", alt: "Facebook Group Case Study 1", type: "portrait" },
                { id: 8, image: "/image/casestudies/group_7.jpg", alt: "Facebook Group Case Study 2", type: "portrait" },
                { id: 9, image: "/image/casestudies/group_3.jpg", alt: "Facebook Group Case Study 3", type: "portrait" },
                { id: 100, image: "/image/casestudies/group_4.jpg", alt: "Facebook Group Case Study 4", type: "portrait" },
                { id: 101, image: "/image/casestudies/group_5.jpg", alt: "Facebook Group Case Study 5", type: "portrait" },
                { id: 102, image: "/image/casestudies/group_8.jpg", alt: "Facebook Group Case Study 8", type: "portrait" },
                { id: 103, image: "/image/casestudies/group_9.jpg", alt: "Facebook Group Case Study 9", type: "portrait" },
                { id: 104, image: "/image/casestudies/group_10.jpg", alt: "Facebook Group Case Study 4", type: "portrait" },
                { id: 105, image: "/image/casestudies/group_11.jpg", alt: "Facebook Group Case Study 5", type: "portrait" },
            ]
        },
        {
            key: 'fanpage',
            name: t('caseStudies.categories.fanpage.name') || 'Fanpage',
            icon: ThumbsUp,
            description: t('caseStudies.categories.fanpage.description') || 'Quản lý và phát triển Facebook Fanpage chuyên nghiệp',
            color: 'from-purple-500 to-pink-500',
            caseStudies: [
                // { id: 10, image: "/image/casestudies/fanpage_1.jpg", alt: "Fanpage Case Study 1", type: "portrait" },
                { id: 11, image: "/image/casestudies/fanpage_2.jpg", alt: "Fanpage Case Study 2", type: "portrait" },
                { id: 12, image: "/image/casestudies/fanpage_3.jpg", alt: "Fanpage Case Study 3", type: "portrait" },
                { id: 13, image: "/image/casestudies/fanpage_4.jpg", alt: "Fanpage Case Study 4", type: "portrait" },
                { id: 14, image: "/image/casestudies/fanpage_5.jpg", alt: "Fanpage Case Study 5", type: "portrait" },
            ]
        },
        {
            key: 'tiktok',
            name: t('caseStudies.categories.tiktok.name') || 'TikTok',
            icon: Video,
            description: t('caseStudies.categories.tiktok.description') || 'Chiến lược marketing và viral content trên TikTok',
            color: 'from-orange-500 to-red-500',
            caseStudies: [
                { id: 15, image: "/image/casestudies/tiktok_1.jpg", alt: "TikTok Case Study 1", type: "portrait" },
                { id: 16, image: "/image/casestudies/tiktok_2.jpg", alt: "TikTok Case Study 2", type: "portrait" },
                { id: 17, image: "/image/casestudies/tiktok_3.jpg", alt: "TikTok Case Study 3", type: "portrait" },
                // { id: 18, image: "/image/casestudies/tiktok_4.jpg", alt: "TikTok Case Study 4", type: "portrait" },
                { id: 19, image: "/image/casestudies/tiktok_5.jpg", alt: "TikTok Case Study 5", type: "portrait" },
            ]
        },
    ];

    const activeCategoryData = categories.find(cat => cat.key === activeCategory)!;

    // Get translated stats
    const statsData = t('caseStudies.stats');
    const stats = Array.isArray(statsData) ? statsData.map((stat: any, index: number) => ({
        icon: statIcons[index] || Award,
        value: stat.value,
        label: stat.label,
        color: ['from-green-500 to-emerald-500', 'from-cyan-500 to-blue-500', 'from-purple-500 to-pink-500', 'from-orange-500 to-red-500'][index]
    })) : [];

    // Close modal on ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedImage) {
                setSelectedImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <section className="relative py-16 sm:py-24 bg-slate-950 overflow-hidden">
            {/* Ultra Advanced Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Massive Animated Gradient Mesh */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)",
                        ],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Rotating Gradient Orbs */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={`orb-${i}`}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            width: 300 + i * 100,
                            height: 300 + i * 100,
                            left: `${20 + i * 15}%`,
                            top: `${10 + i * 20}%`,
                            background: i % 2 === 0
                                ? "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)"
                                : "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                            x: [0, 50 * (i % 2 === 0 ? 1 : -1), 0],
                            y: [0, 30 * (i % 2 === 0 ? -1 : 1), 0],
                        }}
                        transition={{
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    />
                ))}

                {/* Hexagon Grid Pattern */}
                <motion.div className="absolute inset-0 opacity-[0.04]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="hex-grid" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                                <polygon
                                    points="30,0 55,14 55,38 30,52 5,38 5,14"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-green-400"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hex-grid)" />
                    </svg>
                </motion.div>

                {/* Radial Grid Lines */}
                <div className="absolute inset-0" style={{
                    background: `
                        repeating-linear-gradient(90deg, rgba(34,197,94,0.03) 0px, transparent 1px, transparent 80px, rgba(34,197,94,0.03) 81px),
                        repeating-linear-gradient(0deg, rgba(6,182,212,0.03) 0px, transparent 1px, transparent 80px, rgba(6,182,212,0.03) 81px)
                    `
                }} />
            </div>

            <Container className="relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-green-500/10 border border-green-500/30 mb-6 backdrop-blur-md shadow-lg shadow-green-500/10"
                    >
                        <motion.span
                            className="w-2.5 h-2.5 rounded-full bg-green-500"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                                boxShadow: ["0 0 0px #22c55e", "0 0 15px #22c55e", "0 0 0px #22c55e"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 uppercase tracking-widest">
                            {t('caseStudies.badge') || 'Case Studies'}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-black mb-6"
                    >
                        <span className="text-white">{t('caseStudies.title.prefix') || 'Dự Án'} </span>
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: "200% 200%"
                            }}
                        >
                            {t('caseStudies.title.highlight') || 'Thành Công'}
                        </motion.span>
                    </motion.h2>

                    <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                        {t('caseStudies.description').replace('{roi}', t('caseStudies.descriptionValues.roi')).replace('{growth}', t('caseStudies.descriptionValues.growth')) || 'Khám phá các dự án thành công của chúng tôi'}
                    </p>
                </motion.div>

                {/* Stats Section */}
                {stats.length > 0 && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {stats.map((stat: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="relative p-4 sm:p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />
                                    <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.color} opacity-20 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                                    </div>
                                    <div className={`text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Category Selection - Mobile Dropdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 sm:mb-12 lg:hidden"
                >
                    <div className="relative">
                        <select
                            value={activeCategory}
                            onChange={(e) => setActiveCategory(e.target.value as CategoryKey)}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white font-bold text-base appearance-none cursor-pointer focus:outline-none focus:border-green-500/50 transition-all duration-300"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2322c55e'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 1rem center',
                                backgroundSize: '1.5rem',
                                paddingRight: '3rem'
                            }}
                        >
                            {categories.map((category) => (
                                <option key={category.key} value={category.key}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Category Description */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-center text-slate-400 text-sm mt-4"
                        >
                            {activeCategoryData.description}
                        </motion.p>
                    </AnimatePresence>
                </motion.div>

                {/* Category Tabs - Desktop Only */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 sm:mb-12 hidden lg:block"
                >
                    <div className="flex justify-center">
                        <div className="inline-flex gap-2 sm:gap-3 p-2 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                const isActive = activeCategory === category.key;

                                return (
                                    <motion.button
                                        key={category.key}
                                        onClick={() => setActiveCategory(category.key)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`
                                            relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base
                                            transition-all duration-300 whitespace-nowrap flex items-center gap-2
                                            ${isActive
                                                ? 'text-white shadow-lg'
                                                : 'text-slate-400 hover:text-slate-200'
                                            }
                                        `}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                                        <span className="relative z-10">{category.name}</span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Category Description */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-center text-slate-400 text-sm sm:text-base mt-4"
                        >
                            {activeCategoryData.description}
                        </motion.p>
                    </AnimatePresence>
                </motion.div>

                {/* Featured Projects Section - Only for Marketing Category */}
                {activeCategory === 'marketing' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        {/* Section Title */}
                        <div className="text-center mb-10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                Dự Án Nổi Bật
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
                        </div>

                        {/* Featured Projects Slider - LARGE */}
                        <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-green-500/20 mb-12">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: false,
                                }}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={true}
                                speed={800}
                                effect="creative"
                                creativeEffect={{
                                    prev: {
                                        translate: ["-100%", 0, -1],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}
                                className="featured-projects-swiper"
                            >
                                <SwiperSlide>
                                    <div className="relative bg-slate-900">
                                        {/* Large Image - Clickable to view full */}
                                        <div
                                            className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden cursor-pointer group/image"
                                            onClick={() => setSelectedImage({ id: 1, image: "/image/casestudies/marketing_1.jpg", alt: "Chiến Dịch Content Marketing Facebook", type: "landscape" })}
                                        >
                                            <Image
                                                src="/image/casestudies/marketing_1.jpg"
                                                alt="Chiến Dịch Content Marketing Facebook"
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                                                sizes="100vw"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                                            {/* Eye Icon Overlay for View Full Image */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity duration-300">
                                                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                    <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                                </div>
                                            </div>

                                            {/* Badges */}
                                            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                                                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg">
                                                    Featured Project
                                                </span>
                                                <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-xs font-bold backdrop-blur-sm">
                                                    100% Organic
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Below Image */}
                                        <div className="relative p-4 sm:p-6 lg:p-8 bg-slate-900">
                                            <div className="max-w-5xl mx-auto">
                                                {/* Title & Description */}
                                                <div className="mb-4 sm:mb-6">
                                                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                                                        Chiến Dịch Content Marketing Facebook
                                                    </h4>
                                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                                        Xây dựng chiến lược nội dung viral, đạt <span className="text-green-400 font-bold">272 triệu lượt xem</span> trong 4 tháng với 100% organic.
                                                    </p>
                                                </div>

                                                {/* Stats Grid */}
                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                                    {/* Views */}
                                                    <div className="relative p-3 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 hover:border-green-500/50 transition-all duration-300 group">
                                                        <Eye className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                                                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                                            272M
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-slate-400 font-medium">Lượt xem</div>
                                                    </div>

                                                    {/* Reach */}
                                                    <div className="relative p-3 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 hover:border-green-500/50 transition-all duration-300 group">
                                                        <Users className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                                                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                                            84.2M
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                                            Reach <span className="text-green-400">+494%</span>
                                                        </div>
                                                    </div>

                                                    {/* 3s Views */}
                                                    <div className="relative p-3 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 hover:border-green-500/50 transition-all duration-300 group">
                                                        <Video className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                                                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                                            44M
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                                            3s Views <span className="text-green-400">+214%</span>
                                                        </div>
                                                    </div>

                                                    {/* Interactions */}
                                                    <div className="relative p-3 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 hover:border-green-500/50 transition-all duration-300 group">
                                                        <ThumbsUp className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                                                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                                            1.5M
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                                            Tương tác <span className="text-green-400">+147%</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Watch Time Badge */}
                                                <div className="mt-4 flex justify-center">
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/80 border border-slate-700/50">
                                                        <Clock className="w-4 h-4 text-green-400" />
                                                        <span className="text-slate-300 text-sm">Watch time: <span className="text-green-400 font-bold">7,690 ngày</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Project 2 - 84.1M Views */}
                                <SwiperSlide>
                                    <div className="relative bg-slate-900">
                                        {/* Large Image - Clickable to view full */}
                                        <div
                                            className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden cursor-pointer group/image"
                                            onClick={() => setSelectedImage({ id: 3, image: "/image/casestudies/marketing_3.jpg", alt: "Chiến Dịch Viral Content 1 Tháng", type: "landscape" })}
                                        >
                                            <Image
                                                src="/image/casestudies/marketing_3.jpg"
                                                alt="Chiến Dịch Viral Content 1 Tháng"
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                                                sizes="100vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                                            {/* Eye Icon Overlay for View Full Image */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity duration-300">
                                                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                    <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                                </div>
                                            </div>

                                            {/* Badges */}
                                            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                                                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg">
                                                    Featured Project
                                                </span>
                                                <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-xs font-bold backdrop-blur-sm">
                                                    100% Organic
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Below Image */}
                                        <div className="relative p-4 sm:p-6 lg:p-8 bg-slate-900">
                                            <div className="max-w-5xl mx-auto">
                                                {/* Title & Description */}
                                                <div className="mb-4 sm:mb-6">
                                                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                                                        Chiến Dịch Viral Content 1 Tháng
                                                    </h4>
                                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                                        Tăng trưởng <span className="text-green-400 font-bold">72.5%</span> chỉ trong 1 tháng với nội dung viral 100% organic. Đạt 84 triệu views.
                                                    </p>
                                                </div>

                                                {/* Stats Grid */}
                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                                    {/* Views */}
                                                    <div className="relative p-3 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 hover:border-green-500/50 transition-all duration-300 group">
                                                        <Eye className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                                                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                                            84.1M
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                                            Views <span className="text-green-400">+72.5%</span>
                                                        </div>
                                                    </div>

                                                    {/* Reach */}
                                                    <div className="relative p-3 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 hover:border-green-500/50 transition-all duration-300 group">
                                                        <Users className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                                                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                                            38.2M
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                                            Reach <span className="text-green-400">+68%</span>
                                                        </div>
                                                    </div>

                                                    {/* 3s Views */}
                                                    <div className="relative p-3 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 hover:border-green-500/50 transition-all duration-300 group">
                                                        <Video className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                                                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                                            28.4M
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                                            3s Views <span className="text-green-400">+289%</span>
                                                        </div>
                                                    </div>

                                                    {/* Interactions */}
                                                    <div className="relative p-3 sm:p-4 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800/50 hover:border-green-500/50 transition-all duration-300 group">
                                                        <ThumbsUp className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                                                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                                            648K
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                                            Tương tác <span className="text-green-400">+117%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        {/* Separator - Compact with enhanced styling */}
                        <div className="relative mb-6 mt-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 text-sm font-semibold">
                                        Các Câu Chuyện Thành Công Khác
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Featured Projects Section - For Facebook Group Category */}
                {activeCategory === 'group' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        {/* Section Title */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                Dự Án Nổi Bật
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
                        </div>

                        {/* Phone Mockup Carousel */}
                        <div className="relative">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={16}
                                slidesPerView={1.15}
                                centeredSlides={true}
                                breakpoints={{
                                    480: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 20,
                                        centeredSlides: true,
                                    },
                                    640: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 24,
                                        centeredSlides: true,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 32,
                                        centeredSlides: false,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 48,
                                        centeredSlides: false,
                                    },
                                }}
                                navigation
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={true}
                                speed={600}
                                className="group-featured-swiper !pb-12"
                            >
                                {/* Group 1: Thiết Kế & Thi Công Nội Thất */}
                                <SwiperSlide>
                                    <div className="flex flex-col items-center">
                                        {/* Phone Frame */}
                                        <div
                                            className="relative group/phone cursor-pointer"
                                            onClick={() => setSelectedImage({ id: 101, image: "/image/casestudies/group_1.jpg", alt: "Thiết Kế & Thi Công Nội Thất", type: "portrait" })}
                                        >
                                            {/* Phone Outer Frame with Gradient Border */}
                                            <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 shadow-2xl shadow-blue-500/30">
                                                <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">

                                                    {/* Screen Content */}
                                                    <div className="relative aspect-[9/19] w-[220px] sm:w-[260px] lg:w-[280px] overflow-hidden">
                                                        <Image
                                                            src="/image/casestudies/group_1.jpg"
                                                            alt="Thiết Kế & Thi Công Nội Thất"
                                                            fill
                                                            className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                                            sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                                                        />

                                                        {/* Gradient Overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                                        {/* Eye Icon Overlay */}
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                                <Eye className="w-7 h-7 text-white" />
                                                            </div>
                                                        </div>

                                                        {/* Member Badge */}
                                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                                                            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                                                                <div className="flex items-center gap-2">
                                                                    <Users className="w-4 h-4 text-white" />
                                                                    <span className="text-white font-bold text-sm">510,1K</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Glow Effect */}
                                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                        </div>

                                        {/* Group Info Below Phone */}
                                        <div className="mt-6 text-center max-w-[280px]">
                                            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                                                Thiết Kế & Thi Công Nội Thất
                                            </h4>
                                            <p className="text-slate-400 text-sm">
                                                Nhóm của <span className="text-cyan-400">Thừa Vũ Design</span>
                                            </p>
                                            <div className="mt-2 flex items-center justify-center gap-2">
                                                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium">
                                                    Nhóm Công khai
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Group 2: Xuất Nhập Khẩu Logistics */}
                                <SwiperSlide>
                                    <div className="flex flex-col items-center">
                                        {/* Phone Frame */}
                                        <div
                                            className="relative group/phone cursor-pointer"
                                            onClick={() => setSelectedImage({ id: 102, image: "/image/casestudies/group_2.jpg", alt: "Xuất Nhập Khẩu Logistics", type: "portrait" })}
                                        >
                                            {/* Phone Outer Frame with Gradient Border */}
                                            <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/30">
                                                <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                                    {/* Screen Content */}
                                                    <div className="relative aspect-[9/19] w-[220px] sm:w-[260px] lg:w-[280px] overflow-hidden">
                                                        <Image
                                                            src="/image/casestudies/group_2.jpg"
                                                            alt="Xuất Nhập Khẩu Logistics"
                                                            fill
                                                            className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                                            sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                                                        />

                                                        {/* Gradient Overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                                        {/* Eye Icon Overlay */}
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                                <Eye className="w-7 h-7 text-white" />
                                                            </div>
                                                        </div>

                                                        {/* Member Badge */}
                                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                                                            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                                                                <div className="flex items-center gap-2">
                                                                    <Users className="w-4 h-4 text-white" />
                                                                    <span className="text-white font-bold text-sm">369,4K</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Glow Effect */}
                                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                        </div>

                                        {/* Group Info Below Phone */}
                                        <div className="mt-6 text-center max-w-[280px]">
                                            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                                                Xuất Nhập Khẩu Logistics
                                            </h4>
                                            <p className="text-slate-400 text-sm">
                                                Nhóm của <span className="text-cyan-400">Phaata</span>
                                            </p>
                                            <div className="mt-2 flex items-center justify-center gap-2">
                                                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium">
                                                    Nhóm Công khai
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        {/* Separator */}
                        <div className="relative mb-6 mt-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-sm font-semibold">
                                        Các Dự Án Khác
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Featured Projects Section - For Fanpage Category */}
                {activeCategory === 'fanpage' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        {/* Section Title */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                Dự Án Nổi Bật
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                        </div>

                        {/* Phone Mockup - Single Fanpage */}
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center">
                                {/* Phone Frame */}
                                <div
                                    className="relative group/phone cursor-pointer"
                                    onClick={() => setSelectedImage({ id: 200, image: "/image/casestudies/fanpage_1.jpg", alt: "Ú OÀ - Mẹ Bầu Và Em Bé", type: "portrait" })}
                                >
                                    {/* Phone Outer Frame with Gradient Border */}
                                    <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 shadow-2xl shadow-purple-500/30">
                                        <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                            {/* Screen Content */}
                                            <div className="relative aspect-[9/19] w-[240px] sm:w-[280px] lg:w-[300px] overflow-hidden">
                                                <Image
                                                    src="/image/casestudies/fanpage_1.jpg"
                                                    alt="Ú OÀ - Mẹ Bầu Và Em Bé"
                                                    fill
                                                    className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 300px"
                                                />

                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                                {/* Eye Icon Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                        <Eye className="w-7 h-7 text-white" />
                                                    </div>
                                                </div>

                                                {/* Follower Badge */}
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                                                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                                                        <div className="flex items-center gap-2">
                                                            <Users className="w-4 h-4 text-white" />
                                                            <span className="text-white font-bold text-sm">511K</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Glow Effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                </div>

                                {/* Fanpage Info Below Phone */}
                                <div className="mt-6 text-center max-w-[300px]">
                                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                                        Ú OÀ - Mẹ Bầu Và Em Bé
                                        <CheckCircle className="w-5 h-5 text-blue-500" />
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Cửa hàng quần áo sơ sinh & trẻ em
                                    </p>
                                    <div className="mt-2 flex items-center justify-center gap-2">
                                        <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium">
                                            Trang
                                        </span>
                                        <span className="text-slate-500 text-xs">•</span>
                                        <span className="text-pink-400 text-xs font-medium">
                                            511K người theo dõi
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="relative mb-6 mt-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-semibold">
                                        Các Dự Án Khác
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Featured Projects Section - For TikTok Category */}
                {activeCategory === 'tiktok' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        {/* Section Title */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                Dự Án Nổi Bật
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
                        </div>

                        {/* Phone Mockup Carousel */}
                        <div className="relative">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={16}
                                slidesPerView={1.15}
                                centeredSlides={true}
                                breakpoints={{
                                    480: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 20,
                                        centeredSlides: true,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 24,
                                        centeredSlides: false,
                                    },
                                    768: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 28,
                                        centeredSlides: false,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 32,
                                        centeredSlides: false,
                                    },
                                }}
                                navigation
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={true}
                                speed={600}
                                className="tiktok-featured-swiper !pb-12"
                            >
                                {/* TikTok 1: Tina Nguyen */}
                                <SwiperSlide>
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="relative group/phone cursor-pointer"
                                            onClick={() => setSelectedImage({ id: 301, image: "/image/casestudies/tiktok_4.jpg", alt: "Tina Nguyen", type: "portrait" })}
                                        >
                                            <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 shadow-2xl shadow-orange-500/30">
                                                <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                                    <div className="relative aspect-[9/19] w-[200px] sm:w-[220px] lg:w-[240px] overflow-hidden">
                                                        <Image
                                                            src="/image/casestudies/tiktok_4.jpg"
                                                            alt="Tina Nguyen"
                                                            fill
                                                            className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                                            sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                                <Eye className="w-6 h-6 text-white" />
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                                                            <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                                                                <div className="flex items-center gap-1.5">
                                                                    <Users className="w-3.5 h-3.5 text-white" />
                                                                    <span className="text-white font-bold text-xs">263,2K</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                        </div>
                                        <div className="mt-5 text-center max-w-[240px]">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-0.5 flex items-center justify-center gap-1.5">
                                                Tina Nguyen
                                                <CheckCircle className="w-4 h-4 text-cyan-400" />
                                            </h4>
                                            <p className="text-orange-400 text-xs font-medium">263,2K followers • 1,2Tr likes</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* TikTok 2: Tama */}
                                <SwiperSlide>
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="relative group/phone cursor-pointer"
                                            onClick={() => setSelectedImage({ id: 302, image: "/image/casestudies/tiktok_slider/tiktok_6.jpg", alt: "Tama", type: "portrait" })}
                                        >
                                            <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 shadow-2xl shadow-red-500/30">
                                                <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                                    <div className="relative aspect-[9/19] w-[200px] sm:w-[220px] lg:w-[240px] overflow-hidden">
                                                        <Image
                                                            src="/image/casestudies/tiktok_slider/tiktok_6.jpg"
                                                            alt="Tama"
                                                            fill
                                                            className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                                            sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                                <Eye className="w-6 h-6 text-white" />
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                                                            <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                                                                <div className="flex items-center gap-1.5">
                                                                    <Users className="w-3.5 h-3.5 text-white" />
                                                                    <span className="text-white font-bold text-xs">1,1Tr</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                        </div>
                                        <div className="mt-5 text-center max-w-[240px]">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">
                                                Tama
                                            </h4>
                                            <p className="text-orange-400 text-xs font-medium">1,1Tr followers • 63,8Tr likes</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* TikTok 3: Chiêu Tài Mẫn Mẫn */}
                                <SwiperSlide>
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="relative group/phone cursor-pointer"
                                            onClick={() => setSelectedImage({ id: 303, image: "/image/casestudies/tiktok_slider/tiktok_11.jpg", alt: "Chiêu Tài Mẫn Mẫn", type: "portrait" })}
                                        >
                                            <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 shadow-2xl shadow-pink-500/30">
                                                <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                                    <div className="relative aspect-[9/19] w-[200px] sm:w-[220px] lg:w-[240px] overflow-hidden">
                                                        <Image
                                                            src="/image/casestudies/tiktok_slider/tiktok_11.jpg"
                                                            alt="Chiêu Tài Mẫn Mẫn"
                                                            fill
                                                            className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                                            sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                                <Eye className="w-6 h-6 text-white" />
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                                                            <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                                                                <div className="flex items-center gap-1.5">
                                                                    <Users className="w-3.5 h-3.5 text-white" />
                                                                    <span className="text-white font-bold text-xs">57,1K</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                        </div>
                                        <div className="mt-5 text-center max-w-[240px]">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">
                                                Chiêu Tài Mẫn Mẫn
                                            </h4>
                                            <p className="text-orange-400 text-xs font-medium">57,1K followers • 1,2Tr likes</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        {/* Separator */}
                        <div className="relative mb-6 mt-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 text-sm font-semibold">
                                        Các Dự Án Khác
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Case Studies Slider */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="mb-8"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-green-500/10">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                                spaceBetween={20}
                                slidesPerView={1.2}
                                centeredSlides={false}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 12,
                                    },
                                    768: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 16,
                                    },
                                    1024: {
                                        slidesPerView: 3.2,
                                        spaceBetween: 20,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                                navigation
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={activeCategoryData.caseStudies.length > 3}
                                speed={600}
                                className="case-studies-swiper"
                            >
                                {activeCategoryData.caseStudies.map((study) => (
                                    <SwiperSlide key={study.id}>
                                        <motion.div
                                            whileHover={{ y: -8 }}
                                            onClick={() => setSelectedImage(study)}
                                            className="group relative rounded-xl overflow-hidden bg-slate-900 h-full cursor-pointer"
                                        >
                                            <div className={`relative w-full ${study.type === "portrait"
                                                ? "aspect-[9/16]"
                                                : "aspect-[16/9]"
                                                }`}>
                                                <Image
                                                    src={study.image}
                                                    alt={study.alt}
                                                    fill
                                                    className={`${study.type === "portrait"
                                                        ? "object-cover"
                                                        : "object-cover"
                                                        } transition-transform duration-500 group-hover:scale-110`}
                                                    quality={85}
                                                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 28vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                                {/* Hover overlay with view icon - Always visible on mobile */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r ${activeCategoryData.color} flex items-center justify-center shadow-lg`}>
                                                        <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Border effect */}
                                            <div className={`absolute inset-0 border-2 border-slate-700/50 group-hover:border-transparent rounded-xl transition-colors duration-300 pointer-events-none`} />
                                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${activeCategoryData.color} rounded-xl transition-opacity duration-300 pointer-events-none`} style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Image Modal - Using Portal for Maximum Z-Index */}
                {selectedImage && typeof window !== 'undefined' && createPortal(
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
                            style={{
                                zIndex: 2147483647,
                                isolation: 'isolate',
                                position: 'fixed'
                            }}
                            onClick={() => setSelectedImage(null)}
                        >
                            {/* Backdrop */}
                            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

                            {/* Close button */}
                            <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ delay: 0.1 }}
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group"
                            >
                                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                            </motion.button>

                            {/* Image container */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="relative max-w-3xl max-h-[60vh] w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={`relative w-full h-full flex items-center justify-center`}>
                                    <div className={`relative ${selectedImage.type === "portrait"
                                        ? "w-auto h-[60vh] max-w-full"
                                        : "w-full h-auto max-h-[60vh]"
                                        }`}>
                                        <Image
                                            src={selectedImage.image}
                                            alt={selectedImage.alt}
                                            width={selectedImage.type === "portrait" ? 1080 : 1920}
                                            height={selectedImage.type === "portrait" ? 1920 : 1080}
                                            className={`${selectedImage.type === "portrait"
                                                ? "w-auto h-full max-h-[60vh]"
                                                : "w-full h-auto max-h-[60vh]"
                                                } rounded-2xl shadow-2xl`}
                                            quality={95}
                                            priority
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>,
                    document.body
                )}

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <p className="text-slate-400 text-sm mb-4">
                        {t('caseStudies.cta.description') || 'Nhìn thấy kết quả tương tự này cho doanh nghiệp của bạn'}
                    </p>
                    <motion.a
                        href="https://zalo.me/0584503333"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300"
                    >
                        {t('caseStudies.cta.button') || 'Tư Vấn Miễn Phí Ngay'}
                    </motion.a>
                </motion.div>

                {/* Custom Swiper Styles */}
                <style jsx global>{`
                    .case-studies-swiper {
                        padding: 12px 12px 45px 12px;
                    }

                    .case-studies-swiper .swiper-button-next,
                    .case-studies-swiper .swiper-button-prev {
                        color: #22c55e;
                        background: rgba(15, 23, 42, 0.9);
                        backdrop-filter: blur(8px);
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        border: 2px solid rgba(34, 197, 94, 0.3);
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                    }

                    .case-studies-swiper .swiper-button-next:hover,
                    .case-studies-swiper .swiper-button-prev:hover {
                        background: rgba(34, 197, 94, 0.2);
                        border-color: rgba(34, 197, 94, 0.8);
                        transform: scale(1.1);
                        box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
                    }

                    .case-studies-swiper .swiper-button-next::after,
                    .case-studies-swiper .swiper-button-prev::after {
                        font-size: 18px;
                        font-weight: bold;
                    }

                    .case-studies-swiper .swiper-pagination {
                        bottom: 12px;
                    }

                    .case-studies-swiper .swiper-pagination-bullet {
                        width: 8px;
                        height: 8px;
                        background: rgba(148, 163, 184, 0.5);
                        opacity: 1;
                        transition: all 0.3s ease;
                    }

                    .case-studies-swiper .swiper-pagination-bullet-active {
                        background: #22c55e;
                        width: 24px;
                        border-radius: 4px;
                        box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
                    }

                    @media (max-width: 640px) {
                        .case-studies-swiper {
                            padding: 8px 6px 40px 6px;
                        }

                        .case-studies-swiper .swiper-button-next,
                        .case-studies-swiper .swiper-button-prev {
                            width: 32px;
                            height: 32px;
                        }

                        .case-studies-swiper .swiper-button-next::after,
                        .case-studies-swiper .swiper-button-prev::after {
                            font-size: 12px;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .case-studies-swiper .swiper-slide {
                            transition: none;
                        }
                    }

                    /* Group Featured Projects Swiper */
                    .group-featured-swiper {
                        padding: 20px 10px 50px 10px;
                    }

                    .group-featured-swiper .swiper-button-next,
                    .group-featured-swiper .swiper-button-prev {
                        color: #06b6d4;
                        background: rgba(15, 23, 42, 0.9);
                        backdrop-filter: blur(8px);
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        border: 2px solid rgba(6, 182, 212, 0.3);
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                    }

                    .group-featured-swiper .swiper-button-next:hover,
                    .group-featured-swiper .swiper-button-prev:hover {
                        background: rgba(6, 182, 212, 0.2);
                        border-color: rgba(6, 182, 212, 0.8);
                        transform: scale(1.1);
                        box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
                    }

                    .group-featured-swiper .swiper-button-next::after,
                    .group-featured-swiper .swiper-button-prev::after {
                        font-size: 16px;
                        font-weight: bold;
                    }

                    .group-featured-swiper .swiper-pagination-bullet {
                        width: 8px;
                        height: 8px;
                        background: rgba(148, 163, 184, 0.5);
                        opacity: 1;
                        transition: all 0.3s ease;
                    }

                    .group-featured-swiper .swiper-pagination-bullet-active {
                        background: #06b6d4;
                        width: 24px;
                        border-radius: 4px;
                        box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
                    }

                    @media (max-width: 640px) {
                        .group-featured-swiper {
                            padding: 10px 0 45px 0;
                        }

                        .group-featured-swiper .swiper-button-next,
                        .group-featured-swiper .swiper-button-prev {
                            width: 32px;
                            height: 32px;
                        }

                        .group-featured-swiper .swiper-button-next::after,
                        .group-featured-swiper .swiper-button-prev::after {
                            font-size: 12px;
                        }
                    }

                    /* TikTok Featured Projects Swiper */
                    .tiktok-featured-swiper {
                        padding: 20px 10px 50px 10px;
                    }

                    .tiktok-featured-swiper .swiper-button-next,
                    .tiktok-featured-swiper .swiper-button-prev {
                        color: #f97316;
                        background: rgba(15, 23, 42, 0.9);
                        backdrop-filter: blur(8px);
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        border: 2px solid rgba(249, 115, 22, 0.3);
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                    }

                    .tiktok-featured-swiper .swiper-button-next:hover,
                    .tiktok-featured-swiper .swiper-button-prev:hover {
                        background: rgba(249, 115, 22, 0.2);
                        border-color: rgba(249, 115, 22, 0.8);
                        transform: scale(1.1);
                        box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
                    }

                    .tiktok-featured-swiper .swiper-button-next::after,
                    .tiktok-featured-swiper .swiper-button-prev::after {
                        font-size: 14px;
                        font-weight: bold;
                    }

                    .tiktok-featured-swiper .swiper-pagination-bullet {
                        width: 8px;
                        height: 8px;
                        background: rgba(148, 163, 184, 0.5);
                        opacity: 1;
                        transition: all 0.3s ease;
                    }

                    .tiktok-featured-swiper .swiper-pagination-bullet-active {
                        background: #f97316;
                        width: 24px;
                        border-radius: 4px;
                        box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
                    }

                    @media (max-width: 640px) {
                        .tiktok-featured-swiper {
                            padding: 10px 0 45px 0;
                        }

                        .tiktok-featured-swiper .swiper-button-next,
                        .tiktok-featured-swiper .swiper-button-prev {
                            width: 32px;
                            height: 32px;
                        }

                        .tiktok-featured-swiper .swiper-button-next::after,
                        .tiktok-featured-swiper .swiper-button-prev::after {
                            font-size: 12px;
                        }
                    }
                `}</style>
            </Container>
        </section>
    );
}
