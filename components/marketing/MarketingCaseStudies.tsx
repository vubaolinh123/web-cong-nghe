"use client";

import { motion } from "framer-motion";
import { Container } from "../common";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import Image from "next/image";
import { TrendingUp, Eye, Users, Award } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const caseStudies = [
    {
        id: 1,
        image: "/image/casestudies/marketing_1.jpg",
        alt: "Marketing Case Study 1",
        type: "landscape",
        span: "col-span-2 row-span-2"
    },
    {
        id: 2,
        image: "/image/casestudies/marketing_2.jpg",
        alt: "Marketing Case Study 2",
        type: "portrait",
        span: "col-span-1 row-span-2"
    },
    {
        id: 3,
        image: "/image/casestudies/marketing_3.jpg",
        alt: "Marketing Case Study 3",
        type: "landscape",
        span: "col-span-2 row-span-2"
    },
    {
        id: 4,
        image: "/image/casestudies/marketing_4.jpg",
        alt: "Marketing Case Study 4",
        type: "portrait",
        span: "col-span-1 row-span-2"
    },
    {
        id: 5,
        image: "/image/casestudies/marketing_5.jpg",
        alt: "Marketing Case Study 5",
        type: "portrait",
        span: "col-span-2 row-span-1"
    },
    {
        id: 6,
        image: "/image/casestudies/marketing_6.jpg",
        alt: "Marketing Case Study 6",
        type: "portrait",
        span: "col-span-1 row-span-1"
    },
];

const stats = [
    { icon: Eye, value: "272M+", label: "Lượt xem", color: "from-green-500 to-emerald-500" },
    { icon: Users, value: "84.2M+", label: "Reach", color: "from-cyan-500 to-blue-500" },
    { icon: TrendingUp, value: "494%", label: "Tăng trưởng", color: "from-purple-500 to-pink-500" },
    { icon: Award, value: "100%", label: "Organic", color: "from-orange-500 to-red-500" },
];

export default function MarketingCaseStudies() {
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

                {/* DESKTOP: Masonry Grid Layout - Hidden on Mobile */}
                <div className="hidden lg:grid grid-cols-3 auto-rows-[200px] gap-4 mb-12">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, zIndex: 10 }}
                            className={`${study.span} group relative rounded-2xl overflow-hidden`}
                        >
                            <div className="relative w-full h-full bg-slate-900">
                                <Image
                                    src={study.image}
                                    alt={study.alt}
                                    fill
                                    className={`${study.type === "portrait"
                                        ? "object-contain"
                                        : "object-cover"
                                        } transition-transform duration-500 group-hover:scale-105`}
                                    quality={75}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                            </div>
                            <div className="absolute inset-0 border-2 border-slate-700/50 group-hover:border-green-500/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* MOBILE & TABLET: Swiper Slider - Hidden on Desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="lg:hidden relative mb-12"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-green-500/10">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                            spaceBetween={0}
                            slidesPerView={1}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            navigation
                            pagination={{
                                clickable: true,
                                bulletActiveClass: 'swiper-pagination-bullet-active !bg-green-500',
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            loop={true}
                            speed={800}
                            className="marketing-mobile-swiper"
                        >
                            {caseStudies.map((study) => (
                                <SwiperSlide key={study.id}>
                                    <div className={`relative w-full bg-slate-900 ${study.type === "portrait"
                                        ? "aspect-[9/16]"
                                        : "aspect-[16/9]"
                                        }`}>
                                        <Image
                                            src={study.image}
                                            alt={study.alt}
                                            fill
                                            className={study.type === "portrait" ? "object-contain" : "object-cover object-center"}
                                            priority={study.id === 1}
                                            quality={75}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30 pointer-events-none" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>

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
                    .marketing-mobile-swiper {
                        padding-bottom: 50px;
                    }

                    .marketing-mobile-swiper .swiper-button-next,
                    .marketing-mobile-swiper .swiper-button-prev {
                        color: #22c55e;
                        background: rgba(15, 23, 42, 0.8);
                        backdrop-filter: blur(8px);
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        border: 1px solid rgba(34, 197, 94, 0.3);
                        transition: all 0.3s ease;
                    }

                    .marketing-mobile-swiper .swiper-button-next:hover,
                    .marketing-mobile-swiper .swiper-button-prev:hover {
                        background: rgba(34, 197, 94, 0.2);
                        border-color: rgba(34, 197, 94, 0.6);
                        transform: scale(1.1);
                    }

                    .marketing-mobile-swiper .swiper-button-next::after,
                    .marketing-mobile-swiper .swiper-button-prev::after {
                        font-size: 16px;
                        font-weight: bold;
                    }

                    .marketing-mobile-swiper .swiper-pagination {
                        bottom: 10px;
                    }

                    .marketing-mobile-swiper .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background: rgba(148, 163, 184, 0.5);
                        opacity: 1;
                        transition: all 0.3s ease;
                    }

                    .marketing-mobile-swiper .swiper-pagination-bullet-active {
                        background: #22c55e !important;
                        width: 28px;
                        border-radius: 5px;
                    }

                    @media (max-width: 640px) {
                        .marketing-mobile-swiper .swiper-button-next,
                        .marketing-mobile-swiper .swiper-button-prev {
                            width: 32px;
                            height: 32px;
                        }

                        .marketing-mobile-swiper .swiper-button-next::after,
                        .marketing-mobile-swiper .swiper-button-prev::after {
                            font-size: 14px;
                        }
                    }
                `}</style>
            </Container>
        </section>
    );
}
