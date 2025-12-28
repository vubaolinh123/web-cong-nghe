"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import Image from "next/image";
import { Eye, Users, Video, ThumbsUp, Clock, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

interface CaseStudyImage {
    id: number;
    image: string;
    alt: string;
    type: "landscape" | "portrait";
}



// Featured Projects from Marketing page
const featuredProjects = [
    {
        id: 7,
        image: "/image/casestudies/marketing_7.jpg",
        alt: "VTV Partnership",
        badge: "Media Partner",
        badgeColor: "from-red-500 to-blue-500",
        title: "VTV Partnership",
        objectFit: "object-contain bg-white"
    },
    {
        id: 8,
        image: "/image/casestudies/marketing_8.jpg",
        alt: "Palado Vietnam",
        badge: "Brand Development",
        badgeColor: "from-orange-500 to-yellow-500",
        title: "Palado Vietnam",
        objectFit: "object-cover"
    },
    {
        id: 9,
        image: "/image/casestudies/marketing_11.webp",
        alt: "HPMED Vietnam",
        badge: "Full Marketing",
        badgeColor: "from-amber-500 to-yellow-400",
        title: "HPMED Vietnam",
        objectFit: "object-cover"
    },
    {
        id: 10,
        image: "/image/casestudies/marketing_10.jpg",
        alt: "Real EMS",
        badge: "Product Launch",
        badgeColor: "from-lime-500 to-green-500",
        title: "Real EMS",
        objectFit: "object-contain bg-white"
    },
];

export default function CaseStudies() {
    const t = useMarketingFullPackageTranslations();
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

    const projectImages = [
        "/image/casestudies/marketing_1.jpg",
        "/image/casestudies/marketing_3.jpg"
    ];

    return (
        <section className="relative py-16 sm:py-20 bg-slate-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                            {t.caseStudies.sectionTitleHighlight}
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
                </motion.div>

                {/* Featured Projects Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-green-500/20">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            loop={true}
                            speed={800}
                            effect="creative"
                            creativeEffect={{
                                prev: { translate: ["-100%", 0, -1] },
                                next: { translate: ["100%", 0, 0] },
                            }}
                            className="featured-projects-swiper"
                        >
                            {featuredProjects.map((project, index) => (
                                <SwiperSlide key={project.id}>
                                    <div className="relative bg-slate-900">
                                        {/* Large Image */}
                                        <div
                                            className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden cursor-pointer group/image"
                                            onClick={() => setSelectedImage({ id: project.id, image: project.image, alt: project.alt, type: "landscape" })}
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.alt}
                                                fill
                                                className={`${project.objectFit} transition-transform duration-500 group-hover/image:scale-105`}
                                                sizes="100vw"
                                                priority={index === 0}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                                            {/* Eye Icon Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity duration-300">
                                                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                    <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                                </div>
                                            </div>

                                            {/* Badge */}
                                            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                                                <span className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${project.badgeColor} text-white text-xs font-bold shadow-lg`}>
                                                    {project.badge}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Below Image */}
                                        <div className="relative p-4 sm:p-6 lg:p-8 bg-slate-900">
                                            <div className="max-w-5xl mx-auto text-center">
                                                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                                                    {project.title}
                                                </h4>
                                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                                    {t.caseStudies.featuredDescriptions?.[index] || t.caseStudies.projects?.[0]?.description || 'Chiến dịch marketing toàn diện'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
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
                        className={`relative ${selectedImage.type === 'portrait' ? 'max-h-[90vh] w-auto' : 'max-w-[95vw] max-h-[90vh]'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage.image}
                            alt={selectedImage.alt}
                            width={selectedImage.type === 'portrait' ? 600 : 1600}
                            height={selectedImage.type === 'portrait' ? 1200 : 900}
                            className="object-contain max-h-[90vh] w-auto rounded-lg"
                            priority
                        />
                    </motion.div>
                </motion.div>,
                document.body
            )}

            {/* Styles */}
            <style jsx global>{`
                .featured-projects-swiper .swiper-button-next,
                .featured-projects-swiper .swiper-button-prev {
                    color: #22c55e;
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(8px);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    border: 2px solid rgba(34, 197, 94, 0.3);
                    transition: all 0.3s ease;
                }

                .featured-projects-swiper .swiper-button-next:hover,
                .featured-projects-swiper .swiper-button-prev:hover {
                    background: rgba(34, 197, 94, 0.2);
                    border-color: rgba(34, 197, 94, 0.8);
                    transform: scale(1.1);
                }

                .featured-projects-swiper .swiper-button-next::after,
                .featured-projects-swiper .swiper-button-prev::after {
                    font-size: 16px;
                    font-weight: bold;
                }

                .featured-projects-swiper .swiper-pagination-bullet-active {
                    background: #22c55e;
                }

                .phone-mockup-swiper .swiper-button-next,
                .phone-mockup-swiper .swiper-button-prev {
                    color: #22c55e;
                    background: rgba(15, 23, 42, 0.9);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 2px solid rgba(34, 197, 94, 0.3);
                }

                .phone-mockup-swiper .swiper-button-next::after,
                .phone-mockup-swiper .swiper-button-prev::after {
                    font-size: 14px;
                }

                .phone-mockup-swiper .swiper-pagination-bullet-active {
                    background: #22c55e;
                    width: 24px;
                    border-radius: 4px;
                }

                @media (max-width: 640px) {
                    .featured-projects-swiper .swiper-button-next,
                    .featured-projects-swiper .swiper-button-prev,
                    .phone-mockup-swiper .swiper-button-next,
                    .phone-mockup-swiper .swiper-button-prev {
                        width: 32px;
                        height: 32px;
                    }

                    .featured-projects-swiper .swiper-button-next::after,
                    .featured-projects-swiper .swiper-button-prev::after,
                    .phone-mockup-swiper .swiper-button-next::after,
                    .phone-mockup-swiper .swiper-button-prev::after {
                        font-size: 12px;
                    }
                /* Continuous Swiper - Marquee Effect */
                .continuous-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </section>
    );
}
