"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Container } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Types and Data
import { CategoryKey, CaseStudy } from "./case-studies/types";
import { buildCategories, buildStats } from "./case-studies/data";
import { caseStudiesStyles } from "./case-studies/styles";

// Static imports for above-the-fold content (always loaded)
import BackgroundEffects from "./case-studies/BackgroundEffects";
import SectionHeader from "./case-studies/SectionHeader";
import CategoryDropdown from "./case-studies/CategoryDropdown";
import CategoryTabs from "./case-studies/CategoryTabs";

// Dynamic imports for below-the-fold content (lazy loaded)
const FeaturedProjectsMarketing = dynamic(
    () => import("./case-studies/FeaturedProjectsMarketing"),
    { ssr: false }
);
const FeaturedProjectsGroup = dynamic(
    () => import("./case-studies/FeaturedProjectsGroup"),
    { ssr: false }
);
const FeaturedProjectsFanpage = dynamic(
    () => import("./case-studies/FeaturedProjectsFanpage"),
    { ssr: false }
);
const FeaturedProjectsTiktok = dynamic(
    () => import("./case-studies/FeaturedProjectsTiktok"),
    { ssr: false }
);
const CaseStudiesSlider = dynamic(
    () => import("./case-studies/CaseStudiesSlider"),
    { ssr: false }
);
const ImageModal = dynamic(
    () => import("./case-studies/ImageModal"),
    { ssr: false }
);
const BottomCTA = dynamic(() => import("./case-studies/BottomCTA"));

export default function MarketingCaseStudies() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('marketing');
    const [selectedImage, setSelectedImage] = useState<CaseStudy | null>(null);
    // Track which tabs have been mounted (for lazy loading)
    const [mountedTabs, setMountedTabs] = useState<Set<CategoryKey>>(new Set(['marketing']));

    // Build categories and stats from translations
    const categories = buildCategories(t);
    const activeCategoryData = categories.find(cat => cat.key === activeCategory)!;
    const stats = buildStats(t);

    // When category changes, add it to mounted tabs (if not already there)
    useEffect(() => {
        if (!mountedTabs.has(activeCategory)) {
            setMountedTabs(prev => new Set([...prev, activeCategory]));
        }
    }, [activeCategory, mountedTabs]);

    return (
        <section className="relative py-16 sm:py-24 bg-slate-950 overflow-hidden">
            {/* Background Effects */}
            <BackgroundEffects />

            <Container className="relative z-10">
                {/* Section Header */}
                <SectionHeader t={t} />

                {/* Category Selection - Mobile */}
                <CategoryDropdown
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    activeCategoryData={activeCategoryData}
                />

                {/* Category Tabs - Desktop */}
                <CategoryTabs
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    activeCategoryData={activeCategoryData}
                />

                {/* Featured Projects - Lazy loaded: only mount when first selected, then keep mounted but hidden */}
                {mountedTabs.has('marketing') && (
                    <div className={activeCategory === 'marketing' ? '' : 'hidden'}>
                        <FeaturedProjectsMarketing
                            t={t}
                            stats={stats}
                            setSelectedImage={setSelectedImage}
                        />
                    </div>
                )}
                {mountedTabs.has('group') && (
                    <div className={activeCategory === 'group' ? '' : 'hidden'}>
                        <FeaturedProjectsGroup setSelectedImage={setSelectedImage} />
                    </div>
                )}
                {mountedTabs.has('fanpage') && (
                    <div className={activeCategory === 'fanpage' ? '' : 'hidden'}>
                        <FeaturedProjectsFanpage setSelectedImage={setSelectedImage} />
                    </div>
                )}
                {mountedTabs.has('tiktok') && (
                    <div className={activeCategory === 'tiktok' ? '' : 'hidden'}>
                        <FeaturedProjectsTiktok setSelectedImage={setSelectedImage} />
                    </div>
                )}

                {/* Case Studies Slider - Hidden for marketing category */}
                {activeCategory !== 'marketing' && (
                    <CaseStudiesSlider
                        activeCategory={activeCategory}
                        activeCategoryData={activeCategoryData}
                        setSelectedImage={setSelectedImage}
                    />
                )}

                {/* Image Modal */}
                <ImageModal
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />

                {/* Bottom CTA */}
                <BottomCTA t={t} />
            </Container>

            {/* Custom Swiper Styles */}
            <style jsx global>{caseStudiesStyles}</style>
        </section>
    );
}
