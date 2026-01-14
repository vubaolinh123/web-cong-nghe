"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Calendar, Users, Award, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectContent {
    overview: string;
    challenges: string;
    solutions: string[];
    results: string;
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        category: string;
        image: string;
        description: string;
        content: ProjectContent;
        viewProject?: string; // Optional URL
        readMore?: string;
    } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            // Lock both html and body to be safe across browsers/devices
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }
        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!mounted || !project) return null;

    // Use React Portal to render outside of parent stacking context
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[9999] flex items-start sm:items-center justify-center p-4 sm:p-6 pt-24 sm:pt-12"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-700/50 w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl relative scrollbar-hide flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors z-20 backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            {/* Hero Image */}
                            <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden shrink-0">
                                {/* Placeholder Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600">
                                    {project.image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-80"
                                            onError={(e) => {
                                                e.currentTarget.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop';
                                            }}
                                        />
                                    ) : (
                                        <div className="text-4xl">🖼️</div>
                                    )}
                                </div>
                                <div className="absolute bottom-6 left-6 sm:left-10 z-20">
                                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold mb-3 backdrop-blur-md uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white shadow-sm">
                                        {project.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-10 space-y-8 sm:space-y-10">
                                {/* Overview & Challenges Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                                <Calendar size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Tổng Quan</h3>
                                        </div>
                                        <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                                            {project.content.overview}
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                                                <Users size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Thách Thức</h3>
                                        </div>
                                        <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                                            {project.content.challenges}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-slate-800" />

                                {/* Solutions */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                            <CheckCircle size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Giải Pháp Triển Khai</h3>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {project.content.solutions.map((solution, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                                                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <span className="text-slate-300 font-medium">{solution}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                                                <Award size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Kết Quả Đạt Được</h3>
                                        </div>
                                        <p className="text-lg sm:text-x text-slate-200 font-medium leading-relaxed">
                                            {project.content.results}
                                        </p>
                                    </div>
                                </div>

                                {/* View Project Button (Fake Action) */}
                                <div className="flex justify-center pt-4">
                                    <button
                                        onClick={onClose}
                                        className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors"
                                    >
                                        Liên hệ tư vấn dự án tương tự
                                        <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
