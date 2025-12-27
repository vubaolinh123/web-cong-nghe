"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Category, CategoryKey } from "./types";

interface CategoryTabsProps {
    categories: Category[];
    activeCategory: CategoryKey;
    setActiveCategory: (key: CategoryKey) => void;
    activeCategoryData: Category;
}

export default function CategoryTabs({
    categories,
    activeCategory,
    setActiveCategory,
    activeCategoryData
}: CategoryTabsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 hidden lg:block"
        >
            <div className="flex justify-center">
                <div className="inline-flex gap-2 sm:gap-3 p-2 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === category.key;

                        return (
                            <motion.button
                                key={category.key}
                                onClick={() => setActiveCategory(category.key)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`
                                    relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base
                                    transition-all duration-300 whitespace-nowrap flex items-center gap-2
                                    ${isActive
                                        ? 'text-white shadow-lg'
                                        : 'text-slate-400 hover:text-slate-200'
                                    }
                                `}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                                <span className="relative z-10">{category.name}</span>
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Category Description */}
            <AnimatePresence mode="wait">
                <motion.p
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center text-slate-400 text-sm sm:text-base mt-4"
                >
                    {activeCategoryData.description}
                </motion.p>
            </AnimatePresence>
        </motion.div>
    );
}
