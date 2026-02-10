"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const TechShowcaseModal = dynamic(() => import("./TechShowcaseModal"), {
    ssr: false,
});

export default function TechShowcaseButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsModalOpen(true)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Xem dự án công nghệ"
            >
                <Layers
                    size={24}
                    className="sm:w-7 sm:h-7 group-hover:scale-110 transition-transform"
                />
            </motion.button>

            {/* Modal */}
            <TechShowcaseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
