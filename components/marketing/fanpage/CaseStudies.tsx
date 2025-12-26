"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import { Eye, Users, X, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useFanpageTranslations } from "@/lib/i18n/pages/fanpage";

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

// Case Studies Slider images
const caseStudiesImages = [
    { id: 1, image: "/image/casestudies/fanpage_2.jpg", alt: "Fanpage 2" },
    { id: 2, image: "/image/casestudies/fanpage_3.jpg", alt: "Fanpage 3" },
    { id: 3, image: "/image/casestudies/fanpage_4.jpg", alt: "Fanpage 4" },
    { id: 4, image: "/image/casestudies/fanpage_5.jpg", alt: "Fanpage 5" },
];

export default function CaseStudies() {
    const t = useFanpageTranslations();
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
        <section className="relative py-16 sm:py-20 bg-slate-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            {t.caseStudies.sectionTitleHighlight}
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                {/* Featured Project Title */}
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
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                {/* Featured Phone Mockup - Single */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12 flex justify-center"
                >
                    <div className="flex flex-col items-center">
                        <div
                            className="relative group/phone cursor-pointer"
                            onClick={() => setSelectedImage({ id: 100, image: "/image/casestudies/fanpage_1.jpg", alt: t.caseStudies.featuredProject.name, type: "portrait" })}
                        >
                            {/* Phone Frame */}
                            <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 shadow-2xl shadow-purple-500/30">
                                <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                    <div className="relative aspect-[9/19] w-[240px] sm:w-[280px] lg:w-[300px] overflow-hidden">
                                        <Image
                                            src="/image/casestudies/fanpage_1.jpg"
                                            alt={t.caseStudies.featuredProject.name}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                            sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 300px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                        {/* Eye Icon */}
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
                                                    <span className="text-white font-bold text-sm">{t.caseStudies.featuredProject.followers.split(' ')[0]}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Verified Badge */}
                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                        </div>

                        {/* Fanpage Info */}
                        <div className="mt-6 text-center max-w-[300px]">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <h4 className="text-lg sm:text-xl font-bold text-white">
                                    {t.caseStudies.featuredProject.name}
                                </h4>
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                            </div>
                            <p className="text-slate-400 text-sm">{t.caseStudies.featuredProject.followers}</p>
                            <div className="mt-2 flex items-center justify-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium">
                                    {t.caseStudies.featuredProject.badge}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium">
                                    ✓ {t.caseStudies.featuredProject.verified}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Separator */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-semibold">
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
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={16}
                        slidesPerView={1.5}
                        centeredSlides={true}
                        breakpoints={{
                            480: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
                            640: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
                            1024: { slidesPerView: 4, spaceBetween: 32, centeredSlides: false },
                        }}
                        navigation
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        loop={true}
                        speed={600}
                        className="fanpage-swiper !pb-12"
                    >
                        {caseStudiesImages.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col items-center">
                                    <div
                                        className="relative group/phone cursor-pointer"
                                        onClick={() => setSelectedImage({ id: item.id, image: item.image, alt: item.alt, type: "portrait" })}
                                    >
                                        <div className="relative p-[2px] rounded-[1.8rem] bg-gradient-to-br from-purple-500/50 to-pink-500/50 shadow-lg shadow-purple-500/20">
                                            <div className="relative bg-slate-900 rounded-[1.6rem] overflow-hidden">
                                                <div className="relative aspect-[9/16] w-[160px] sm:w-[180px] lg:w-[200px] overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.alt}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover/phone:scale-105"
                                                        sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                                                    {/* Eye Icon */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                            <Eye className="w-5 h-5 text-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Glow Effect */}
                                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-[2rem] blur-lg opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
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
                .fanpage-swiper .swiper-button-next,
                .fanpage-swiper .swiper-button-prev {
                    color: #a855f7;
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(8px);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 2px solid rgba(168, 85, 247, 0.3);
                    transition: all 0.3s ease;
                }

                .fanpage-swiper .swiper-button-next:hover,
                .fanpage-swiper .swiper-button-prev:hover {
                    background: rgba(168, 85, 247, 0.2);
                    border-color: rgba(168, 85, 247, 0.8);
                    transform: scale(1.1);
                }

                .fanpage-swiper .swiper-button-next::after,
                .fanpage-swiper .swiper-button-prev::after {
                    font-size: 14px;
                    font-weight: bold;
                }

                .fanpage-swiper .swiper-pagination-bullet-active {
                    background: #a855f7;
                    width: 24px;
                    border-radius: 4px;
                }

                @media (max-width: 640px) {
                    .fanpage-swiper .swiper-button-next,
                    .fanpage-swiper .swiper-button-prev {
                        width: 32px;
                        height: 32px;
                    }

                    .fanpage-swiper .swiper-button-next::after,
                    .fanpage-swiper .swiper-button-prev::after {
                        font-size: 12px;
                    }
                }
            `}</style>
        </section>
    );
}
