"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import Image from "next/image";
import { Eye, Users, Heart, X, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTiktokShopTranslations } from "@/lib/i18n/pages/tiktok-shop";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface CaseStudyImage {
    id: number;
    image: string;
    alt: string;
    type: "portrait";
}

// Featured Project images
const featuredImages = [
    "/image/casestudies/tiktok_4.jpg",
    "/image/casestudies/tiktok_slider/tiktok_6.jpg",
    "/image/casestudies/tiktok_slider/tiktok_11.jpg"
];

// Case Studies Slider images
const caseStudiesImages = [
    { id: 1, image: "/image/casestudies/tiktok_1.jpg", alt: "TikTok 1" },
    { id: 2, image: "/image/casestudies/tiktok_2.jpg", alt: "TikTok 2" },
    { id: 3, image: "/image/casestudies/tiktok_3.jpg", alt: "TikTok 3" },
    { id: 4, image: "/image/casestudies/tiktok_5.jpg", alt: "TikTok 5" },
];

export default function CaseStudies() {
    const t = useTiktokShopTranslations();
    const [selectedImage, setSelectedImage] = useState<CaseStudyImage | null>(null);

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
        <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/30 to-black" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {t.caseStudies.sectionTitle}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                            {t.caseStudies.sectionTitleHighlight}
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
                </motion.div>

                {/* Featured Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {t.caseStudies.featuredTitle}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
                </motion.div>

                {/* Featured Phone Mockups - 3 Profiles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={16}
                        slidesPerView={1.3}
                        centeredSlides={true}
                        breakpoints={{
                            480: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
                            768: { slidesPerView: 3, spaceBetween: 32, centeredSlides: false },
                        }}
                        navigation
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        loop={true}
                        speed={600}
                        className="tiktok-featured-swiper !pb-12"
                    >
                        {t.caseStudies.featuredProjects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center">
                                    <div
                                        className="relative group/phone cursor-pointer"
                                        onClick={() => setSelectedImage({ id: 100 + index, image: featuredImages[index], alt: project.name, type: "portrait" })}
                                    >
                                        {/* Phone Frame */}
                                        <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 shadow-2xl shadow-orange-500/30">
                                            <div className="relative bg-black rounded-[2.3rem] overflow-hidden">
                                                <div className="relative aspect-[9/19] w-[200px] sm:w-[220px] lg:w-[240px] overflow-hidden">
                                                    <Image
                                                        src={featuredImages[index]}
                                                        alt={project.name}
                                                        fill
                                                        className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                                        sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                                    {/* Eye Icon */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                            <Eye className="w-6 h-6 text-white" />
                                                        </div>
                                                    </div>

                                                    {/* Stats Badge */}
                                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                                                        <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg flex items-center gap-1">
                                                            <Users className="w-3 h-3 text-white" />
                                                            <span className="text-white font-bold text-xs">{project.followers.split(' ')[0]}</span>
                                                        </div>
                                                        <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-red-500/30 shadow-lg flex items-center gap-1">
                                                            <Heart className="w-3 h-3 text-red-400" />
                                                            <span className="text-white font-bold text-xs">{project.likes.split(' ')[0]}</span>
                                                        </div>
                                                    </div>

                                                    {/* Verified Badge */}
                                                    {project.verified && (
                                                        <div className="absolute top-4 right-4 z-10">
                                                            <div className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
                                                                <CheckCircle className="w-4 h-4 text-white" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Glow Effect */}
                                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                    </div>

                                    {/* Profile Info */}
                                    <div className="mt-5 text-center max-w-[240px]">
                                        <div className="flex items-center justify-center gap-2 mb-1">
                                            <h4 className="text-base sm:text-lg font-bold text-white">
                                                {project.name}
                                            </h4>
                                            {project.verified && (
                                                <CheckCircle className="w-4 h-4 text-cyan-400" />
                                            )}
                                        </div>
                                        <p className="text-slate-400 text-sm">{project.followers}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Separator */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="px-4 py-2 bg-black rounded-full border border-slate-800/50">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 text-sm font-semibold">
                                {t.caseStudies.separator}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Case Studies Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={12}
                        slidesPerView={1.5}
                        centeredSlides={false}
                        breakpoints={{
                            480: { slidesPerView: 2, spaceBetween: 16 },
                            640: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                        }}
                        freeMode={true}
                        autoplay={{ delay: 1, disableOnInteraction: false }}
                        loop={true}
                        speed={3000}
                        className="continuous-swiper !pb-12"
                    >
                        {caseStudiesImages.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col items-center">
                                    <div
                                        className="relative group/phone cursor-pointer"
                                        onClick={() => setSelectedImage({ id: item.id, image: item.image, alt: item.alt, type: "portrait" })}
                                    >
                                        <div className="relative p-[2px] rounded-[1.5rem] bg-gradient-to-br from-orange-500/50 to-red-500/50 shadow-lg shadow-orange-500/20">
                                            <div className="relative bg-black rounded-[1.4rem] overflow-hidden">
                                                <div className="relative aspect-[9/16] w-[200px] sm:w-[220px] lg:w-[240px] overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.alt}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover/phone:scale-105"
                                                        sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                                    {/* Eye Icon */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                            <Eye className="w-5 h-5 text-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Glow Effect */}
                                        <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-[2rem] blur-lg opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            {/* Full Image Modal */}
            {selectedImage && typeof window !== 'undefined' && createPortal(
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 z-[100000] w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative max-h-[90vh] w-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage.image}
                            alt={selectedImage.alt}
                            width={600}
                            height={1200}
                            className="object-contain max-h-[90vh] w-auto rounded-lg"
                            priority
                        />
                    </motion.div>
                </motion.div>,
                document.body
            )}

            {/* Styles */}
            <style jsx global>{`
                .tiktok-featured-swiper .swiper-button-next,
                .tiktok-featured-swiper .swiper-button-prev {
                    color: #f97316;
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(8px);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 2px solid rgba(249, 115, 22, 0.3);
                    transition: all 0.3s ease;
                }

                .tiktok-featured-swiper .swiper-button-next:hover,
                .tiktok-featured-swiper .swiper-button-prev:hover {
                    background: rgba(249, 115, 22, 0.2);
                    border-color: rgba(249, 115, 22, 0.8);
                    transform: scale(1.1);
                }

                .tiktok-featured-swiper .swiper-button-next::after,
                .tiktok-featured-swiper .swiper-button-prev::after {
                    font-size: 14px;
                    font-weight: bold;
                }

                .tiktok-featured-swiper .swiper-pagination-bullet-active,
                .tiktok-swiper .swiper-pagination-bullet-active {
                    background: #f97316;
                    width: 24px;
                    border-radius: 4px;
                }

                .tiktok-swiper .swiper-button-next,
                .tiktok-swiper .swiper-button-prev {
                    color: #f97316;
                    background: rgba(0, 0, 0, 0.9);
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    border: 2px solid rgba(249, 115, 22, 0.3);
                }

                .tiktok-swiper .swiper-button-next::after,
                .tiktok-swiper .swiper-button-prev::after {
                    font-size: 12px;
                }

                @media (max-width: 640px) {
                    .tiktok-featured-swiper .swiper-button-next,
                    .tiktok-featured-swiper .swiper-button-prev,
                    .tiktok-swiper .swiper-button-next,
                    .tiktok-swiper .swiper-button-prev {
                        width: 32px;
                        height: 32px;
                    }

                    .tiktok-featured-swiper .swiper-button-next::after,
                    .tiktok-featured-swiper .swiper-button-prev::after,
                    .tiktok-swiper .swiper-button-next::after,
                    .tiktok-swiper .swiper-button-prev::after {
                        font-size: 10px;
                    }
                /* Continuous Swiper - Marquee Effect */
                .continuous-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </section>
    );
}
