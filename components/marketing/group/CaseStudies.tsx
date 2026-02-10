"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import Image from "next/image";
import { Eye, Users, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";
import { useSectionActivity } from "@/hooks/useSectionActivity";

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

// Featured Projects
const featuredImages = [
    "/image/casestudies/group_1.jpg",
    "/image/casestudies/group_2.jpg",
    "/image/casestudies/group_6.jpg"
];

// Case Studies Slider images
const caseStudiesImages = [
    { id: 1, image: "/image/casestudies/group_3.jpg", alt: "Facebook Group 3" },
    { id: 2, image: "/image/casestudies/group_4.jpg", alt: "Facebook Group 4" },
    { id: 3, image: "/image/casestudies/group_5.jpg", alt: "Facebook Group 5" },
    { id: 4, image: "/image/casestudies/group_6.jpg", alt: "Facebook Group 6" },
    { id: 5, image: "/image/casestudies/group_7.jpg", alt: "Facebook Group 7" },
    { id: 6, image: "/image/casestudies/group_8.jpg", alt: "Facebook Group 8" },
    { id: 7, image: "/image/casestudies/group_9.jpg", alt: "Facebook Group 9" },
    { id: 8, image: "/image/casestudies/group_10.jpg", alt: "Facebook Group 10" },
    { id: 9, image: "/image/casestudies/group_11.jpg", alt: "Facebook Group 11" },
];

export default function CaseStudies() {
    const t = useFacebookGroupTranslations();
    const shouldReduceMotion = useReducedMotion();
    const [selectedImage, setSelectedImage] = useState<CaseStudyImage | null>(null);
    const [featuredSwiper, setFeaturedSwiper] = useState<SwiperType | null>(null);
    const [gallerySwiper, setGallerySwiper] = useState<SwiperType | null>(null);
    const { ref: sectionRef, isActive } = useSectionActivity<HTMLElement>(undefined, {
        threshold: 0.2,
    });

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

    useEffect(() => {
        const swipers = [featuredSwiper, gallerySwiper];
        swipers.forEach((swiper) => {
            if (!swiper || !swiper.autoplay) return;

            if (!shouldReduceMotion && isActive) {
                swiper.autoplay.start();
            } else {
                swiper.autoplay.stop();
            }
        });
    }, [featuredSwiper, gallerySwiper, isActive, shouldReduceMotion]);

    return (
        <section ref={sectionRef} className="relative py-16 sm:py-20 bg-slate-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            {t.caseStudies.sectionTitleHighlight}
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                {/* Featured Projects Title */}
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
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                {/* Featured Phone Mockups */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="relative">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={20}
                            slidesPerView={1.2}
                            centeredSlides={true}
                            breakpoints={{
                                480: { slidesPerView: 1.5, spaceBetween: 24 },
                                640: { slidesPerView: 2, spaceBetween: 32, centeredSlides: false },
                                1024: { slidesPerView: 2, spaceBetween: 48, centeredSlides: false },
                            }}
                            navigation
                            pagination={{ clickable: true, dynamicBullets: true }}
                            autoplay={shouldReduceMotion ? false : { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            loop={true}
                            speed={600}
                            onSwiper={setFeaturedSwiper}
                            className="group-featured-swiper !pb-12"
                        >
                            {t.caseStudies.featuredProjects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="relative group/phone cursor-pointer"
                                            onClick={() => setSelectedImage({ id: 100 + index, image: featuredImages[index], alt: project.name, type: "portrait" })}
                                        >
                                            {/* Phone Frame */}
                                            <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 shadow-2xl shadow-blue-500/30">
                                                <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                                    <div className="relative aspect-[9/19] w-[220px] sm:w-[260px] lg:w-[280px] overflow-hidden">
                                                        <Image
                                                            src={featuredImages[index]}
                                                            alt={project.name}
                                                            fill
                                                            className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                                            sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                                        {/* Eye Icon */}
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
                                                                    <span className="text-white font-bold text-sm">{project.members.split(' ')[0]}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Glow Effect */}
                                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                        </div>

                                        {/* Group Info */}
                                        <div className="mt-6 text-center max-w-[280px]">
                                            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                                                {project.name}
                                            </h4>
                                            <p className="text-slate-400 text-sm">{project.members}</p>
                                            <div className="mt-2">
                                                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium">
                                                    {project.badge}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>

                {/* Separator */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-sm font-semibold">
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
                            768: { slidesPerView: 4, spaceBetween: 24 },
                            1024: { slidesPerView: 5, spaceBetween: 28 },
                        }}
                        freeMode={true}
                        autoplay={shouldReduceMotion ? false : { delay: 1, disableOnInteraction: false }}
                        loop={true}
                        speed={3000}
                        onSwiper={setGallerySwiper}
                        className="continuous-swiper !pb-12"
                    >
                        {caseStudiesImages.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col items-center">
                                    <div
                                        className="relative group/phone cursor-pointer"
                                        onClick={() => setSelectedImage({ id: item.id, image: item.image, alt: item.alt, type: "portrait" })}
                                    >
                                        <div className="relative p-[2px] rounded-[1.5rem] bg-gradient-to-br from-blue-500/50 to-cyan-500/50 shadow-lg shadow-blue-500/20">
                                            <div className="relative bg-slate-900 rounded-[1.4rem] overflow-hidden">
                                                <div className="relative aspect-[9/16] w-[200px] sm:w-[220px] lg:w-[240px] overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.alt}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover/phone:scale-105"
                                                        sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                                                    {/* Eye Icon */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                            <Eye className="w-5 h-5 text-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Glow Effect */}
                                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-[2rem] blur-lg opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
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
                }

                .group-featured-swiper .swiper-button-next:hover,
                .group-featured-swiper .swiper-button-prev:hover {
                    background: rgba(6, 182, 212, 0.2);
                    border-color: rgba(6, 182, 212, 0.8);
                    transform: scale(1.1);
                }

                .group-featured-swiper .swiper-button-next::after,
                .group-featured-swiper .swiper-button-prev::after {
                    font-size: 16px;
                    font-weight: bold;
                }

                .group-featured-swiper .swiper-pagination-bullet-active,
                .case-studies-swiper .swiper-pagination-bullet-active {
                    background: #06b6d4;
                    width: 24px;
                    border-radius: 4px;
                }

                .case-studies-swiper .swiper-button-next,
                .case-studies-swiper .swiper-button-prev {
                    color: #06b6d4;
                    background: rgba(15, 23, 42, 0.9);
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 2px solid rgba(6, 182, 212, 0.3);
                }

                .case-studies-swiper .swiper-button-next::after,
                .case-studies-swiper .swiper-button-prev::after {
                    font-size: 12px;
                }

                @media (max-width: 640px) {
                    .group-featured-swiper .swiper-button-next,
                    .group-featured-swiper .swiper-button-prev,
                    .case-studies-swiper .swiper-button-next,
                    .case-studies-swiper .swiper-button-prev {
                        width: 32px;
                        height: 32px;
                    }

                    .group-featured-swiper .swiper-button-next::after,
                    .group-featured-swiper .swiper-button-prev::after,
                    .case-studies-swiper .swiper-button-next::after,
                    .case-studies-swiper .swiper-button-prev::after {
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
