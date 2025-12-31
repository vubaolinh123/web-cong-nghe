"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle, User, Phone, Briefcase, Globe, Check, Zap, Clock, Shield, Headphones } from "lucide-react";
import { FormInput, FormTextarea, FormSelect, SubmitButton } from "../../form";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
    ContactFormData,
    ContactFormErrors,
    ContactApiResponse,
    validateContactForm,
    hasErrors,
    serviceCategoryOptions,
    technologyServiceOptions,
    marketingServiceOptions,
} from "@/lib/validations/contact";

const budgetOptions = [
    { value: "under-20m", label: "Dưới 20 triệu" },
    { value: "20m-50m", label: "20 - 50 triệu" },
    { value: "50m-100m", label: "50 - 100 triệu" },
    { value: "over-100m", label: "Trên 100 triệu" },
];

const initialFormData: ContactFormData = {
    name: "",
    jobTitle: "",
    phone: "",
    fanpageOrWebsite: "",
    budget: "",
    serviceCategory: "",
    specificServices: [],
    message: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function MobileContact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
    const [serverMessage, setServerMessage] = useState("");

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            if (name === "serviceCategory") {
                setFormData((prev) => ({ ...prev, [name]: value, specificServices: [] }));
            } else {
                setFormData((prev) => ({ ...prev, [name]: value }));
            }
            if (errors[name as keyof ContactFormErrors]) {
                setErrors((prev) => ({ ...prev, [name]: undefined }));
            }
        },
        [errors]
    );

    const handleServiceToggle = useCallback((serviceValue: string) => {
        setFormData((prev) => {
            const isSelected = prev.specificServices.includes(serviceValue);
            const newServices = isSelected
                ? prev.specificServices.filter((s) => s !== serviceValue)
                : [...prev.specificServices, serviceValue];
            return { ...prev, specificServices: newServices };
        });
        if (errors.specificServices) {
            setErrors((prev) => ({ ...prev, specificServices: undefined }));
        }
    }, [errors]);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateContactForm(formData);
        if (hasErrors(validationErrors)) {
            setErrors(validationErrors);
            return;
        }
        setSubmitStatus("loading");
        setErrors({});

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data: ContactApiResponse = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                setServerMessage(data.message);
                setFormData(initialFormData);
            } else {
                setSubmitStatus("error");
                setServerMessage(data.message);
                if (data.errors) {
                    setErrors(data.errors);
                }
            }
        } catch {
            setSubmitStatus("error");
            setServerMessage("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
        }
    };

    const resetForm = () => {
        setSubmitStatus("idle");
        setServerMessage("");
    };

    const benefits = [
        { icon: Zap, text: t("contactSection.benefits.response") },
        { icon: Clock, text: t("contactSection.benefits.free") },
        { icon: Shield, text: t("contactSection.benefits.security") },
        { icon: Headphones, text: t("contactSection.benefits.support") },
    ];

    const specificServiceOptions = formData.serviceCategory === "technology"
        ? technologyServiceOptions
        : formData.serviceCategory === "marketing"
            ? marketingServiceOptions
            : [];

    return (
        <section className="py-16 bg-slate-950">
            <div className="px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2 block">
                        {t("contactSection.badge")}
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        {t("contactSection.title")}{" "}
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            {t("contactSection.titleHighlight")}
                        </span>
                    </h2>
                    <p className="text-slate-400 text-sm">{t("contactSection.description")}</p>
                </motion.div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800"
                        >
                            <div className="w-6 h-6 rounded-md bg-cyan-500/20 flex items-center justify-center shrink-0">
                                <benefit.icon className="w-3 h-3 text-cyan-400" />
                            </div>
                            <span className="text-slate-300 text-[10px] font-medium">{benefit.text}</span>
                        </div>
                    ))}
                </div>

                {/* Form */}
                <AnimatePresence mode="wait">
                    {submitStatus === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-slate-900/70 border border-green-500/30 rounded-2xl p-6 text-center"
                        >
                            <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle size={28} className="text-green-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Gửi Thành Công!</h3>
                            <p className="text-slate-400 text-sm mb-4">
                                Đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ.
                            </p>
                            <button
                                onClick={resetForm}
                                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                            >
                                Gửi Yêu Cầu Khác
                            </button>
                        </motion.div>
                    ) : submitStatus === "error" && serverMessage ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-slate-900/70 border border-red-500/30 rounded-2xl p-6 text-center"
                        >
                            <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <XCircle size={28} className="text-red-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Có Lỗi Xảy Ra</h3>
                            <p className="text-slate-400 text-sm mb-4">{serverMessage}</p>
                            <button
                                onClick={resetForm}
                                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                            >
                                Thử Lại
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 space-y-3"
                        >
                            {/* Basic Info */}
                            <FormInput
                                label={t("contactSection.form.name")}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={errors.name}
                                placeholder={t("contactSection.form.namePlaceholder")}
                                required
                                icon={<User size={16} />}
                            />
                            <FormInput
                                label={t("contactSection.form.phone")}
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                error={errors.phone}
                                placeholder={t("contactSection.form.phonePlaceholder")}
                                required
                                icon={<Phone size={16} />}
                            />
                            <FormInput
                                label={t("contactSection.form.jobTitle")}
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                error={errors.jobTitle}
                                placeholder={t("contactSection.form.jobTitlePlaceholder")}
                                required
                                icon={<Briefcase size={16} />}
                            />
                            <FormInput
                                label={t("contactSection.form.fanpage")}
                                name="fanpageOrWebsite"
                                value={formData.fanpageOrWebsite}
                                onChange={handleChange}
                                placeholder={t("contactSection.form.fanpagePlaceholder")}
                                icon={<Globe size={16} />}
                            />
                            <FormSelect
                                label="Ngân sách (Tùy chọn)"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                options={budgetOptions}
                                placeholder="Chọn ngân sách"
                            />
                            <FormSelect
                                label={t("contactSection.form.service")}
                                name="serviceCategory"
                                value={formData.serviceCategory}
                                onChange={handleChange}
                                error={errors.serviceCategory}
                                options={serviceCategoryOptions}
                                placeholder={t("contactSection.form.servicePlaceholder")}
                                required
                            />

                            {/* Specific Services */}
                            {formData.serviceCategory && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-2"
                                >
                                    <label className="block text-xs font-medium text-slate-300">
                                        {t("contactSection.form.specificService")} <span className="text-red-400">*</span>
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {specificServiceOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => handleServiceToggle(option.value)}
                                                className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[11px] transition-all ${formData.specificServices.includes(option.value)
                                                    ? "bg-cyan-500/20 border-cyan-500 text-white"
                                                    : "bg-slate-800/50 border-slate-700 text-slate-300"
                                                    }`}
                                            >
                                                <div
                                                    className={`w-3 h-3 rounded-full flex items-center justify-center shrink-0 ${formData.specificServices.includes(option.value)
                                                        ? "bg-cyan-500"
                                                        : "border border-slate-500"
                                                        }`}
                                                >
                                                    {formData.specificServices.includes(option.value) && (
                                                        <Check size={8} className="text-white" />
                                                    )}
                                                </div>
                                                <span>{option.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    {errors.specificServices && (
                                        <p className="text-xs text-red-400">{errors.specificServices}</p>
                                    )}
                                </motion.div>
                            )}

                            <FormTextarea
                                label={t("contactSection.form.message")}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                error={errors.message}
                                placeholder={t("contactSection.form.messagePlaceholder")}
                                required
                                rows={3}
                            />

                            <SubmitButton isLoading={submitStatus === "loading"} loadingText={t("contactSection.form.submitting")}>
                                <Send size={16} />
                                {t("contactSection.form.submit")}
                            </SubmitButton>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
