"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 hover:border-cyan-500/50 bg-slate-800/50 hover:bg-slate-800 transition-all group"
      aria-label="Switch Language"
    >
      <div className="relative w-8 h-4 bg-slate-700 rounded-full p-0.5">
        <motion.div
          className="w-3 h-3 bg-cyan-400 rounded-full shadow-sm"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          animate={{
            x: language === 'en' ? 16 : 0
          }}
        />
      </div>
      <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors w-5 text-center">
        {language.toUpperCase()}
      </span>
    </button>
  );
}