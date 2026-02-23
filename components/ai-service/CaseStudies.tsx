"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Container } from '../common';
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";
import ProjectModal from './ProjectModal';
import type { TechnologyPageTranslations } from '@/lib/i18n/pages/technology';
import { useSectionActivity } from '@/hooks/useSectionActivity';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function CaseStudies() {
    const t = useTechnologyTranslations();
    const [selectedProject, setSelectedProject] = useState<TechnologyPageTranslations['caseStudies']['projects'][number] | null>(null);
    const [desktopSwiper, setDesktopSwiper] = useState<SwiperType | null>(null);
    const [mobileSwiper, setMobileSwiper] = useState<SwiperType | null>(null);

    // Data Selection
    // Mobile: Standard 5 items
    const projects = t.caseStudies.projects || [];

    // Desktop: same source list as mobile, no duplicate item
    const desktopProjects = projects;

    const { ref: sectionRef, isActive } = useSectionActivity<HTMLElement>(undefined, {
        threshold: 0.25,
    });

    useEffect(() => {
        const swipers = [desktopSwiper, mobileSwiper];
        swipers.forEach((swiper) => {
            if (!swiper || !swiper.autoplay) return;
            if (isActive) {
                swiper.autoplay.start();
            } else {
                swiper.autoplay.stop();
            }
        });
    }, [desktopSwiper, mobileSwiper, isActive]);

    return (
        <section ref={sectionRef} className="relative py-16 sm:py-32 bg-slate-950/50 overflow-hidden" id="case-studies">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <Container className="relative z-10 w-full dvcn-container">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto md:mx-0"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm font-medium text-purple-400 mb-4 backdrop-blur-sm justify-center md:justify-start">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            {t.caseStudies.title}
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            {t.caseStudies.subtitle}
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto md:mx-0">
                            {t.caseStudies.description}
                        </p>
                    </motion.div>

                    {/* Desktop Navigation Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            className="ai-case-desktop-prev w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            className="ai-case-desktop-next w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* ---------------- MOBILE LAYOUT (Swiper 1 Slide + Hints) ---------------- */}
                <div className="md:hidden pb-12 relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={{
                            prevEl: '.ai-case-mobile-prev',
                            nextEl: '.ai-case-mobile-next',
                        }}
                        onSwiper={setMobileSwiper}
                        className="w-full !pb-12" // Padding bottom for pagination bullets
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={`mobile-${project.id}-${index}`} className="!h-auto">
                                <div
                                    className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col shadow-xl"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-contain bg-slate-900"
                                            onError={(e) => {
                                                e.currentTarget.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop';
                                            }}
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur border border-slate-700 text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col gap-3">
                                        <h3 className="text-xl font-bold text-white leading-snug line-clamp-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm line-clamp-3">
                                            {project.description}
                                        </p>
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="mt-2 w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 font-medium text-sm transition-colors flex items-center justify-center gap-2 border border-slate-700/50"
                                        >
                                            {t.caseStudies.readMore}
                                            <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Visual Hint: Navigation Buttons underneath on Mobile */}
                    <div className="flex items-center justify-center gap-4 mt-2">
                        <button
                            className="ai-case-mobile-prev w-10 h-10 rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 flex items-center justify-center active:scale-95 transition-transform"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">
                            {t.caseStudies.swipeHint}
                        </span>
                        <button
                            className="ai-case-mobile-next w-10 h-10 rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 flex items-center justify-center active:scale-95 transition-transform"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>


                {/* ---------------- DESKTOP LAYOUT (Swiper 6 Items Loop) ---------------- */}
                <div className="hidden md:block">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        navigation={{
                            prevEl: '.ai-case-desktop-prev',
                            nextEl: '.ai-case-desktop-next',
                        }}
                        onSwiper={setDesktopSwiper}
                        loop={true}
                        spaceBetween={32}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 32,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            }
                        }}
                        className="w-full py-8 !overflow-visible"
                    >
                        {desktopProjects.map((project, index) => (
                            <SwiperSlide key={project.id || index} className="!w-[450px]">
                                <div
                                    className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 h-[500px] flex flex-col transition-all duration-500 hover:border-slate-600 hover:shadow-2xl"
                                >
                                    {/* Image Area */}
                                    <div className="relative h-[280px] overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-600">
                                            {project.image ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 group-hover:scale-105"
                                                    onError={(e) => {
                                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop';
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-4xl">📷</span>
                                            )}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />

                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-slate-950/50 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="relative flex-1 p-8 flex flex-col justify-between z-10 -mt-10">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-cyan-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-base text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all flex items-center justify-center gap-2 group/btn border border-slate-700"
                                        >
                                            {t.caseStudies.readMore}
                                            <Expand size={16} className="group-hover/btn:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Modal */}
                <ProjectModal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    project={selectedProject}
                />
            </Container>

            {/* Custom Styles for Swiper Pagination */}
            <style jsx global>{`
                .swiper-button-disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                .swiper-pagination-bullet {
                    background: #64748b;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    background: #22d3ee;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}
