"use client";

import { motion } from "framer-motion";
import { Container } from "../common";
import { TrendingUp, Users, Clock, Database, BarChart3, ChevronLeft, ChevronRight, Star, Zap } from "lucide-react";
import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";

// Icon and style mapping for cases
const caseConfigs = [
    {
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
        statIcons: [Clock, Users],
        statColors: ["text-purple-400", "text-purple-400"],
        border: "hover:border-purple-500/50",
        shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    },
    {
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
        statIcons: [TrendingUp, Star],
        statColors: ["text-blue-400", "text-yellow-400"],
        border: "hover:border-blue-500/50",
        shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        statIcons: [Users, Zap],
        statColors: ["text-green-400", "text-red-400"],
        border: "hover:border-green-500/50",
        shadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
    },
    {
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
        statIcons: [Database, BarChart3],
        statColors: ["text-orange-400", "text-emerald-400"],
        border: "hover:border-orange-500/50",
        shadow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
    },
    {
        image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?q=80&w=1000&auto=format&fit=crop",
        statIcons: [TrendingUp, Clock],
        statColors: ["text-cyan-400", "text-blue-300"],
        border: "hover:border-cyan-500/50",
        shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    }
];

export default function CaseStudies() {
    const t = useTechnologyTranslations();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Build cases array from translations
    const cases = t.caseStudies.cases.map((caseItem, index) => ({
        ...caseConfigs[index],
        title: caseItem.title,
        client: caseItem.client,
        category: caseItem.category,
        description: caseItem.description,
        stats: caseItem.stats.map((stat, i) => ({
            icon: caseConfigs[index].statIcons[i],
            value: stat.value,
            label: stat.label,
            color: caseConfigs[index].statColors[i],
        })),
    }));

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleMouseDown = (e: MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="py-20 sm:py-32 bg-slate-900/50 overflow-hidden select-none">
            <Container>
                {/* Header */}
                <div className="flex flex-col items-center mb-12 gap-6">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            {t.caseStudies.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg"
                        >
                            {t.caseStudies.subtitle}
                        </motion.p>
                    </div>

                    {/* Controls */}
                    <div className="flex gap-3 hidden sm:flex">
                        <button
                            onClick={() => scroll('left')}
                            className="p-4 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:bg-cyan-600 hover:border-cyan-500 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-lg"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-4 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:bg-cyan-600 hover:border-cyan-500 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-lg"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Slider with mobile scroll buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Mobile scroll buttons - overlaid on slider */}
                    <button
                        onClick={() => scroll('left')}
                        className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 text-white/70 active:bg-cyan-600 transition-all"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 text-white/70 active:bg-cyan-600 transition-all"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div
                        ref={scrollRef}
                        className={`flex overflow-x-auto gap-3 lg:gap-4 pb-6 scrollbar-hide ${isDragging ? 'snap-none' : 'snap-x snap-mandatory'}`}
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            cursor: isDragging ? 'grabbing' : 'grab'
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {cases.map((item, index) => (
                            <div
                                key={index}
                                className="w-[calc(100vw-48px)] min-w-[calc(100vw-48px)] sm:w-[calc(50vw-32px)] sm:min-w-[calc(50vw-32px)] lg:w-[calc(33.333%-11px)] lg:min-w-[calc(33.333%-11px)] snap-start flex-none"
                            >
                                <div className={`relative h-full bg-slate-950 border border-slate-800 rounded-xl p-3 sm:p-4 flex flex-col group hover:-translate-y-1 transition-transform duration-300 ${item.border} ${item.shadow}`}>

                                    {/* Image Area - Compact */}
                                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-3 shadow-xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                                        {/* Floating Tag */}
                                        <div className="absolute top-2 left-2">
                                            <span className="px-2 py-0.5 rounded-full bg-slate-900/70 backdrop-blur-sm border border-white/10 text-[8px] font-bold text-white tracking-wide uppercase">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Area - Compact */}
                                    <div className="flex flex-col flex-grow">
                                        <h4 className="text-slate-500 text-[9px] font-semibold mb-1 uppercase tracking-wider flex items-center gap-1">
                                            <div className="w-1 h-1 rounded-full bg-cyan-500" />
                                            {item.client}
                                        </h4>
                                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight mb-1.5">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-400 text-[10px] sm:text-xs leading-snug line-clamp-2 mb-3">
                                            {item.description}
                                        </p>

                                        {/* Stats Row - Inline compact */}
                                        <div className="grid grid-cols-2 gap-1.5 mt-auto">
                                            {item.stats.map((stat, i) => (
                                                <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-2 flex flex-col items-center text-center">
                                                    <stat.icon className={`w-3.5 h-3.5 mb-1 ${stat.color}`} />
                                                    <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
                                                    <span className="text-[7px] text-slate-500 font-medium uppercase">{stat.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
