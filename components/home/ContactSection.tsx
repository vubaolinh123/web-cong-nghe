"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle, User, Phone, Briefcase, Globe, Check, Zap, Clock, Shield, Headphones } from "lucide-react";
import { FormInput, FormTextarea, FormSelect, SubmitButton } from "../form";
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

const initialFormData: ContactFormData = {
  name: "",
  jobTitle: "",
  currentJob: "",
  phone: "",
  fanpageOrWebsite: "",
  serviceCategory: "",
  specificServices: [],
  message: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
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
    { icon: Zap, text: "Phản hồi trong 24 giờ" },
    { icon: Clock, text: "Tư vấn miễn phí" },
    { icon: Shield, text: "Bảo mật thông tin" },
    { icon: Headphones, text: "Hỗ trợ 24/7" },
  ];

  const specificServiceOptions = formData.serviceCategory === "technology"
    ? technologyServiceOptions
    : formData.serviceCategory === "marketing"
    ? marketingServiceOptions
    : [];

  return (
    <section className="relative h-full flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2 block">
              Liên Hệ Với Chúng Tôi
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              Nhận{" "}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Tư Vấn Miễn Phí
              </span>
            </h2>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Để lại thông tin của bạn, đội ngũ chuyên gia của chúng tôi sẽ liên hệ tư vấn giải pháp phù hợp nhất.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800"
                >
                  <div className="w-7 h-7 rounded-md bg-cyan-500/20 flex items-center justify-center">
                    <benefit.icon size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-slate-300 text-xs font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
          >
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <SuccessMessage onReset={resetForm} />
              ) : submitStatus === "error" && serverMessage ? (
                <ErrorMessage message={serverMessage} onReset={resetForm} />
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative rounded-2xl p-4 space-y-2.5 bg-slate-900/70 border border-transparent"
                  style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(34, 197, 94, 0.5), rgba(168, 85, 247, 0.5))`,
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  {/* Basic Info - 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <FormInput label="Họ và Tên" name="name" value={formData.name} onChange={handleChange}
                      error={errors.name} placeholder="Nguyễn Văn A" required icon={<User size={16} />} />
                    <FormInput label="Số Điện Thoại" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                      error={errors.phone} placeholder="0912 345 678" required icon={<Phone size={16} />} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <FormInput label="Chức Danh" name="jobTitle" value={formData.jobTitle} onChange={handleChange}
                      error={errors.jobTitle} placeholder="Giám đốc, Quản lý, ..." required icon={<Briefcase size={16} />} />
                    <FormInput label="Công Việc Hiện Tại" name="currentJob" value={formData.currentJob} onChange={handleChange}
                      error={errors.currentJob} placeholder="Mô tả công việc" required icon={<Briefcase size={16} />} />
                  </div>

                  <FormInput label="Link Fanpage/Website (Tùy chọn)" name="fanpageOrWebsite"
                    value={formData.fanpageOrWebsite} onChange={handleChange}
                    placeholder="https://facebook.com/yourpage" icon={<Globe size={16} />} />

                  <FormSelect label="Dịch Vụ Bạn Cần" name="serviceCategory" value={formData.serviceCategory}
                    onChange={handleChange} error={errors.serviceCategory} options={serviceCategoryOptions}
                    placeholder="Chọn loại dịch vụ" required />

                  {/* Conditional Specific Services - Compact layout */}
                  {formData.serviceCategory && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5"
                    >
                      <label className="block text-xs font-medium text-slate-300">
                        Chọn Dịch Vụ Cụ Thể <span className="text-red-400">*</span>
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {specificServiceOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleServiceToggle(option.value)}
                            className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[11px] transition-all ${
                              formData.specificServices.includes(option.value)
                                ? "bg-cyan-500/20 border-cyan-500 text-white"
                                : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600"
                            }`}
                          >
                            <div className={`w-3 h-3 rounded-full flex items-center justify-center shrink-0 ${
                              formData.specificServices.includes(option.value)
                                ? "bg-cyan-500"
                                : "border border-slate-500"
                            }`}>
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

                  <FormTextarea label="Nội Dung Tin Nhắn" name="message" value={formData.message} onChange={handleChange}
                    error={errors.message} placeholder="Mô tả ngắn gọn về dự án hoặc nhu cầu của bạn..." required rows={1} />

                  <SubmitButton isLoading={submitStatus === "loading"} loadingText="Đang gửi...">
                    <Send size={16} />Gửi Yêu Cầu Tư Vấn
                  </SubmitButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
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
        onClick={onReset}
        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
      >
        Gửi Yêu Cầu Khác
      </button>
    </motion.div>
  );
}

function ErrorMessage({ message, onReset }: { message: string; onReset: () => void }) {
  return (
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
      <p className="text-slate-400 text-sm mb-4">{message}</p>
      <button
        onClick={onReset}
        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
      >
        Thử Lại
      </button>
    </motion.div>
  );
}
