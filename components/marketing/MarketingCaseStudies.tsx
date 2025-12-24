"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../common";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import Image from "next/image";
import { TrendingUp, Eye, Users, Award, TrendingUpIcon, UsersIcon, ThumbsUp, Video, X } from "lucide-react";
import { useState, useEffect } from "react";

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

// Case studies organized by category
const categories: Category[] = [
    {
        key: 'marketing',
        name: 'Marketing tổng thể',
        icon: TrendingUpIcon,
        description: 'Các chiến dịch marketing đa kênh tổng thể',
        color: 'from-green-500 to-emerald-500',
        caseStudies: [
            { id: 1, image: "/image/casestudies/marketing_1.jpg", alt: "Marketing Case Study 1", type: "landscape" },
            { id: 2, image: "/image/casestudies/marketing_2.jpg", alt: "Marketing Case Study 2", type: "portrait" },
            { id: 3, image: "/image/casestudies/marketing_3.jpg", alt: "Marketing Case Study 3", type: "landscape" },
            { id: 4, image: "/image/casestudies/marketing_4.jpg", alt: "Marketing Case Study 4", type: "portrait" },
            { id: 5, image: "/image/casestudies/marketing_5.jpg", alt: "Marketing Case Study 5", type: "portrait" },
            { id: 6, image: "/image/casestudies/marketing_6.jpg", alt: "Marketing Case Study 6", type: "portrait" },
        ]
    },
    {
        key: 'group',
        name: 'Xây Group Facebook',
        icon: UsersIcon,
        description: 'Xây dựng và phát triển cộng đồng Facebook Group',
        color: 'from-blue-500 to-cyan-500',
        caseStudies: [
            { id: 7, image: "/image/casestudies/group_1.jpg", alt: "Facebook Group Case Study 1", type: "portrait" },
            { id: 8, image: "/image/casestudies/group_2.jpg", alt: "Facebook Group Case Study 2", type: "portrait" },
            { id: 9, image: "/image/casestudies/group_3.jpg", alt: "Facebook Group Case Study 3", type: "portrait" },
            { id: 100, image: "/image/casestudies/group_4.jpg", alt: "Facebook Group Case Study 4", type: "portrait" },
            { id: 101, image: "/image/casestudies/group_5.jpg", alt: "Facebook Group Case Study 5", type: "portrait" },
        ]
    },
    {
        key: 'fanpage',
        name: 'Fanpage',
        icon: ThumbsUp,
        description: 'Quản lý và phát triển Facebook Fanpage chuyên nghiệp',
        color: 'from-purple-500 to-pink-500',
        caseStudies: [
            { id: 10, image: "/image/casestudies/fanpage_1.jpg", alt: "Fanpage Case Study 1", type: "portrait" },
            { id: 11, image: "/image/casestudies/fanpage_2.jpg", alt: "Fanpage Case Study 2", type: "portrait" },
            { id: 12, image: "/image/casestudies/fanpage_3.jpg", alt: "Fanpage Case Study 3", type: "portrait" },
            { id: 13, image: "/image/casestudies/fanpage_4.jpg", alt: "Fanpage Case Study 4", type: "portrait" },
            { id: 14, image: "/image/casestudies/fanpage_5.jpg", alt: "Fanpage Case Study 5", type: "portrait" },
        ]
    },
    {
        key: 'tiktok',
        name: 'TikTok',
        icon: Video,
        description: 'Chiến lược marketing và viral content trên TikTok',
        color: 'from-orange-500 to-red-500',
        caseStudies: [
            { id: 15, image: "/image/casestudies/tiktok_1.jpg", alt: "TikTok Case Study 1", type: "portrait" },
            { id: 16, image: "/image/casestudies/tiktok_2.jpg", alt: "TikTok Case Study 2", type: "portrait" },
            { id: 17, image: "/image/casestudies/tiktok_3.jpg", alt: "TikTok Case Study 3", type: "portrait" },
            { id: 18, image: "/image/casestudies/tiktok_4.jpg", alt: "TikTok Case Study 4", type: "portrait" },
            { id: 19, image: "/image/casestudies/tiktok_5.jpg", alt: "TikTok Case Study 5", type: "portrait" },
        ]
    },
];

const stats = [
    { icon: Eye, value: "272M+", label: "Lượt xem", color: "from-green-500 to-emerald-500" },
    { icon: Users, value: "84.2M+", label: "Reach", color: "from-cyan-500 to-blue-500" },
    { icon: TrendingUp, value: "494%", label: "Tăng trưởng", color: "from-purple-500 to-pink-500" },
    { icon: Award, value: "100%", label: "Organic", color: "from-orange-500 to-red-500" },
];

export default function MarketingCaseStudies() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('marketing');
    const [selectedImage, setSelectedImage] = useState<CaseStudy | null>(null);
    const activeCategoryData = categories.find(cat => cat.key === activeCategory)!;

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
                            Case Studies
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-black mb-6"
                    >
                        <span className="text-white">Kết Quả </span>
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
                            Thực Tế
                        </motion.span>
                    </motion.h2>

                    <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                        Những chiến dịch marketing đột phá đã mang lại{" "}
                        <span className="font-bold text-green-400">ROI vượt trội</span> và{" "}
                        <span className="font-bold text-cyan-400">tăng trưởng mạnh mẽ</span> cho khách hàng
                    </p>
                </motion.div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, index) => (
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

                {/* Case Studies Slider */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="mb-12"
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
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 24,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1280: {
                                        slidesPerView: 3.5,
                                        spaceBetween: 30,
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

                                                {/* Hover overlay with view icon */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${activeCategoryData.color} flex items-center justify-center shadow-lg`}>
                                                        <Eye className="w-6 h-6 text-white" />
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

                {/* Image Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
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
                                className="relative max-w-7xl max-h-[60vh] w-full"
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

                                {/* Image info badge */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-slate-300 text-sm whitespace-nowrap"
                                >
                                    <span className={`font-bold bg-gradient-to-r ${activeCategoryData.color} bg-clip-text text-transparent`}>
                                        {activeCategoryData.name}
                                    </span>
                                    <span className="mx-2">•</span>
                                    <span>Click bên ngoài hoặc ESC để đóng</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <p className="text-slate-400 text-sm mb-4">
                        Nhìn thấy kết quả tương tự này cho doanh nghiệp của bạn
                    </p>
                    <motion.a
                        href="https://zalo.me/0584503333"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300"
                    >
                        Tư Vấn Miễn Phí Ngay
                    </motion.a>
                </motion.div>

                {/* Custom Swiper Styles */}
                <style jsx global>{`
                    .case-studies-swiper {
                        padding: 20px 20px 60px 20px;
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
                        bottom: 20px;
                    }

                    .case-studies-swiper .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background: rgba(148, 163, 184, 0.5);
                        opacity: 1;
                        transition: all 0.3s ease;
                    }

                    .case-studies-swiper .swiper-pagination-bullet-active {
                        background: #22c55e;
                        width: 32px;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
                    }

                    @media (max-width: 640px) {
                        .case-studies-swiper {
                            padding: 15px 10px 50px 10px;
                        }

                        .case-studies-swiper .swiper-button-next,
                        .case-studies-swiper .swiper-button-prev {
                            width: 36px;
                            height: 36px;
                        }

                        .case-studies-swiper .swiper-button-next::after,
                        .case-studies-swiper .swiper-button-prev::after {
                            font-size: 14px;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .case-studies-swiper .swiper-slide {
                            transition: none;
                        }
                    }
                `}</style>
            </Container>
        </section>
    );
}
