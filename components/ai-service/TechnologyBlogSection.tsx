"use client";

import { motion } from "framer-motion";
import { Container } from "../common";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { articles } from "@/lib/blog/data";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";

export default function TechnologyBlogSection() {
    const t = useTechnologyTranslations();

    // Get 4 latest articles
    const latestArticles = articles.slice(0, 4);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("vi-VN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <section className="py-20 sm:py-32 bg-slate-900/50 overflow-hidden">
            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {t.blogSection.title}{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {t.blogSection.titleHighlight}
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {t.blogSection.subtitle}
                    </p>
                </motion.div>

                {/* Blog Grid - 4 columns on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {latestArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        >
                            <Link
                                href={`/bai-viet/${article.slug}`}
                                className="relative block aspect-[16/10] overflow-hidden"
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
                                    <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-medium text-white">
                                        {article.category.name}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-5">
                                {/* Tags */}
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

                                {/* Title */}
                                <Link href={`/bai-viet/${article.slug}`}>
                                    <h3 className="mb-2 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
                                        {article.title}
                                    </h3>
                                </Link>

                                {/* Excerpt */}
                                <p className="mb-4 line-clamp-2 text-sm text-slate-400">
                                    {article.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="relative h-7 w-7 overflow-hidden rounded-full bg-slate-800">
                                            <User className="absolute inset-0 m-auto h-4 w-4 text-slate-500" />
                                        </div>
                                        <span className="text-xs font-medium text-slate-400">
                                            {article.author.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {article.readTime}{t.blogSection.minuteRead}
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
                        href="/bai-viet"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105"
                    >
                        {t.blogSection.viewAll}
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}
