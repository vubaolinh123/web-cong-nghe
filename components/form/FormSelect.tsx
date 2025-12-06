"use client";

import { forwardRef, SelectHTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: Option[];
  placeholder?: string;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, placeholder = "Chọn một tùy chọn", className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full px-4 py-3 rounded-xl appearance-none
              bg-slate-800/50 border border-slate-700
              text-white
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500
              transition-all duration-300
              cursor-pointer
              ${error ? "border-red-500 focus:ring-red-500/50 focus:border-red-500" : ""}
              ${className}
            `}
            {...props}
          >
            <option value="" disabled className="bg-slate-800 text-slate-500">
              {placeholder}
            </option>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-slate-800 text-white"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <ChevronDown size={20} />
          </div>
        </div>
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

FormSelect.displayName = "FormSelect";

export default FormSelect;

