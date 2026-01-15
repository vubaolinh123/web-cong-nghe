"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Info, FileText, Sparkles, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectInfo {
    productName: string;
    client: string;
    projectType: string;
    platform: string;
    targetUsers: string;
    duration: string;
}

interface Feature {
    title: string;
    description: string;
}

interface ProjectContent {
    projectInfo: ProjectInfo;
    overview: string;
    features: Feature[];
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
        viewProject?: string;
        readMore?: string;
        detailImage?: string;
        detailImageCaption?: string;
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

    const { projectInfo, overview, features } = project.content;

    // Project info items for grid display
    const infoItems = [
        { label: 'Tên sản phẩm', value: projectInfo.productName },
        { label: 'Khách hàng', value: projectInfo.client },
        { label: 'Loại dự án', value: projectInfo.projectType },
        { label: 'Nền tảng', value: projectInfo.platform },
        { label: 'Đối tượng', value: projectInfo.targetUsers },
        { label: 'Thời gian', value: projectInfo.duration },
    ];

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

                                {/* Section 1: Thông tin dự án */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                            <Info size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">1. Thông tin dự án</h3>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {infoItems.map((item, idx) => (
                                            <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                                                <p className="text-slate-200 font-medium">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-slate-800" />

                                {/* Section 2: Tổng quan dự án */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                            <FileText size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">2. Tổng quan dự án</h3>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                                        {overview}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-slate-800" />

                                {/* Section 3: Tính năng nổi bật */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                                            <Sparkles size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">3. Tính năng nổi bật</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {features.map((feature, idx) => (
                                            <div key={idx} className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                                                <h4 className="text-lg font-semibold text-cyan-400 mb-2">{feature.title}</h4>
                                                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Detail Image (Workflow) */}
                                {project.detailImage && (
                                    <>
                                        <div className="h-px w-full bg-slate-800" />
                                        <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={project.detailImage}
                                                alt={project.detailImageCaption || 'Project Detail Image'}
                                                className="w-full h-auto object-cover"
                                            />
                                            <div className="bg-slate-900/50 p-3 border-t border-slate-800 text-center">
                                                <span className="text-sm text-slate-400 font-medium">{project.detailImageCaption}</span>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* CTA Button */}
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
