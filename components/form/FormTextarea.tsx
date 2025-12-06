"use client";

import { forwardRef, TextareaHTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-xl
            bg-slate-800/50 border border-slate-700
            text-white placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500
            transition-all duration-300 resize-none
            min-h-[120px]
            ${error ? "border-red-500 focus:ring-red-500/50 focus:border-red-500" : ""}
            ${className}
          `}
          {...props}
        />
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 text-sm text-red-400"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;

