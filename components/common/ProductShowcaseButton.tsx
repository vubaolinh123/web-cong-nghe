"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryHorizontal } from "lucide-react";
import ProductShowcaseModal from "./ProductShowcaseModal";

export default function ProductShowcaseButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsModalOpen(true)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Xem sản phẩm"
            >
                <GalleryHorizontal
                    size={24}
                    className="sm:w-7 sm:h-7 group-hover:scale-110 transition-transform"
                />
            </motion.button>

            {/* Modal */}
            <ProductShowcaseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
