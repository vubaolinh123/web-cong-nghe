"use client";

import { motion } from "framer-motion";
import { Container } from "../common";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { articles } from "@/lib/blog/data";

type AccentColor = 'cyan' | 'green';

interface BlogSectionProps {
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewAllText: string;
    minuteReadText: string;
    accentColor?: AccentColor;
    viewAllLink?: string;
    compact?: boolean; // For homepage fullpage scroll
}

const accentClasses = {
    cyan: {
        gradient: 'from-cyan-400 to-blue-500',
        badge: 'bg-cyan-600',
        hover: 'hover:text-cyan-400',
        border: 'hover:border-cyan-500/50',
        shadow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
        button: 'from-cyan-600 to-blue-600',
        buttonHover: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]',
    },
    green: {
        gradient: 'from-green-400 to-emerald-500',
        badge: 'bg-green-600',
        hover: 'hover:text-green-400',
        border: 'hover:border-green-500/50',
        shadow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]',
        button: 'from-green-600 to-emerald-600',
        buttonHover: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]',
    },
};

export default function BlogSection({
    title,
    titleHighlight,
    subtitle,
    viewAllText,
    minuteReadText,
    accentColor = 'cyan',
    viewAllLink = '/bai-viet',
    compact = false,
}: BlogSectionProps) {
    const latestArticles = articles.slice(0, 4);
    const colors = accentClasses[accentColor];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("vi-VN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    // Compact mode for homepage fullpage scroll - BALANCED for viewport fit
    const sectionPadding = compact ? "py-10 sm:py-12" : "py-20 sm:py-32";
    const headerMargin = compact ? "mb-5 md:mb-6" : "mb-12 md:mb-16";
    const titleSize = compact ? "text-2xl sm:text-2xl md:text-3xl" : "text-3xl sm:text-4xl md:text-5xl";
    const subtitleSize = compact ? "text-sm" : "text-lg";
    const gridGap = compact ? "gap-3" : "gap-6";
    const cardPadding = compact ? "p-3" : "p-5";
    const bottomMargin = compact ? "mb-5" : "mb-12";
    const buttonSize = compact ? "px-5 py-2.5 text-sm" : "px-8 py-4 text-base";

    return (
        <section className={`${sectionPadding} bg-slate-900/50 overflow-hidden ${compact ? 'min-h-screen flex items-center' : ''}`}>
            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-center ${headerMargin}`}
                >
                    <h2 className={`${titleSize} font-bold text-white mb-2`}>
                        {title}{" "}
                        <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                            {titleHighlight}
                        </span>
                    </h2>
                    <p className={`text-slate-400 ${subtitleSize} max-w-2xl mx-auto`}>
                        {subtitle}
                    </p>
                </motion.div>

                {/* Blog Grid - 4 columns on desktop */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${gridGap} ${bottomMargin}`}>
                    {latestArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 ${colors.border} ${colors.shadow}`}
                        >
                            <Link
                                href={`/bai-viet/${article.slug}`}
                                className={`relative block ${compact ? 'aspect-[16/9]' : 'aspect-[16/10]'} overflow-hidden`}
                            >
                                <Image
                                    src={article.thumbnail}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                                {/* Category Badge */}
                                <div className="absolute left-3 top-3">
                                    <span className={`rounded-full ${colors.badge} ${compact ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'} font-medium text-white`}>
                                        {article.category.name}
                                    </span>
                                </div>
                            </Link>

                            <div className={cardPadding}>
                                {/* Tags */}
                                {!compact && (
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        {article.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag.id}
                                                className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-400"
                                            >
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Title */}
                                <Link href={`/bai-viet/${article.slug}`}>
                                    <h3 className={`mb-2 line-clamp-2 ${compact ? 'text-sm' : 'text-lg'} font-bold text-white transition-colors ${colors.hover}`}>
                                        {article.title}
                                    </h3>
                                </Link>

                                {/* Excerpt */}
                                <p className={`${compact ? 'mb-2 text-xs' : 'mb-4 text-sm'} line-clamp-2 text-slate-400`}>
                                    {article.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className={`flex items-center justify-between border-t border-slate-800 ${compact ? 'pt-2' : 'pt-4'}`}>
                                    <div className="flex items-center gap-2">
                                        <div className={`relative ${compact ? 'h-5 w-5' : 'h-7 w-7'} overflow-hidden rounded-full bg-slate-800`}>
                                            <User className={`absolute inset-0 m-auto ${compact ? 'h-3 w-3' : 'h-4 w-4'} text-slate-500`} />
                                        </div>
                                        <span className="text-xs font-medium text-slate-400 truncate max-w-[80px]">
                                            {article.author.name.split(' ').slice(-2).join(' ')}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {article.readTime}{minuteReadText}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href={viewAllLink}
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.button} ${buttonSize} font-semibold text-white shadow-lg transition-all duration-300 ${colors.buttonHover} hover:scale-105`}
                    >
                        {viewAllText}
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}
