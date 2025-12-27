"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Category, CategoryKey } from "./types";

interface CategoryDropdownProps {
    categories: Category[];
    activeCategory: CategoryKey;
    setActiveCategory: (key: CategoryKey) => void;
    activeCategoryData: Category;
}

export default function CategoryDropdown({
    categories,
    activeCategory,
    setActiveCategory,
    activeCategoryData
}: CategoryDropdownProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 lg:hidden"
        >
            <div className="relative">
                <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value as CategoryKey)}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white font-bold text-base appearance-none cursor-pointer focus:outline-none focus:border-green-500/50 transition-all duration-300"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2322c55e'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.5rem',
                        paddingRight: '3rem'
                    }}
                >
                    {categories.map((category) => (
                        <option key={category.key} value={category.key}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Category Description */}
            <AnimatePresence mode="wait">
                <motion.p
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center text-slate-400 text-sm mt-4"
                >
                    {activeCategoryData.description}
                </motion.p>
            </AnimatePresence>
        </motion.div>
    );
}
