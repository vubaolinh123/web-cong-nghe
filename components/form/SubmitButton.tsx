"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  children: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
}

export default function SubmitButton({
  children,
  isLoading = false,
  loadingText = "Đang gửi...",
  className = "",
  disabled = false,
}: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={isLoading || disabled}
      className={`
        w-full py-4 px-6 rounded-xl
        bg-gradient-to-r from-blue-600 to-cyan-500
        text-white font-semibold text-lg
        shadow-lg shadow-blue-500/25
        hover:from-blue-700 hover:to-cyan-600
        focus:outline-none focus:ring-2 focus:ring-cyan-500/50
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-3
        ${className}
      `}
      whileHover={{ scale: isLoading || disabled ? 1 : 1.02 }}
      whileTap={{ scale: isLoading || disabled ? 1 : 0.98 }}
    >
      {isLoading ? (
        <>
          <Loader2 size={24} className="animate-spin" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}

