"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle, User, Mail, Phone, Building } from "lucide-react";
import { FormInput, FormTextarea, FormSelect, SubmitButton } from "../form";
import { Container, AnimatedSection } from "../common";
import {
  ContactFormData,
  ContactFormErrors,
  ContactApiResponse,
  validateContactForm,
  hasErrors,
  serviceOptions,
} from "@/lib/validations/contact";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name as keyof ContactFormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
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
    } catch (error) {
      setSubmitStatus("error");
      setServerMessage("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  const resetForm = () => {
    setSubmitStatus("idle");
    setServerMessage("");
  };

  return (
    <section className="py-24 bg-slate-950">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Liên Hệ
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nhận{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tư Vấn Miễn Phí
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Để lại thông tin của bạn, đội ngũ chuyên gia của chúng tôi sẽ liên hệ 
            tư vấn giải pháp phù hợp nhất trong 24 giờ.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <SuccessMessage onReset={resetForm} />
            ) : submitStatus === "error" && serverMessage ? (
              <ErrorMessage message={serverMessage} onReset={resetForm} />
            ) : (
              <FormContent
                formData={formData}
                errors={errors}
                isLoading={submitStatus === "loading"}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

// Continued in the next part - these are sub-components
interface FormContentProps {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function FormContent({ formData, errors, isLoading, onChange, onSubmit }: FormContentProps) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onSubmit={onSubmit}
      className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FormInput label="Họ và Tên" name="name" value={formData.name} onChange={onChange}
          error={errors.name} placeholder="Nguyễn Văn A" required icon={<User size={20} />} />
        <FormInput label="Email" name="email" type="email" value={formData.email} onChange={onChange}
          error={errors.email} placeholder="email@example.com" required icon={<Mail size={20} />} />
        <FormInput label="Số Điện Thoại" name="phone" type="tel" value={formData.phone} onChange={onChange}
          error={errors.phone} placeholder="0912 345 678" required icon={<Phone size={20} />} />
        <FormInput label="Công Ty (Tùy chọn)" name="company" value={formData.company} onChange={onChange}
          placeholder="Tên công ty của bạn" icon={<Building size={20} />} />
      </div>
      <div className="mb-6">
        <FormSelect label="Dịch Vụ Quan Tâm" name="service" value={formData.service} onChange={onChange}
          error={errors.service} options={serviceOptions} placeholder="Chọn dịch vụ bạn quan tâm" required />
      </div>
      <div className="mb-8">
        <FormTextarea label="Nội Dung Tin Nhắn" name="message" value={formData.message} onChange={onChange}
          error={errors.message} placeholder="Mô tả ngắn gọn về dự án hoặc nhu cầu của bạn..." required rows={5} />
      </div>
      <SubmitButton isLoading={isLoading} loadingText="Đang gửi thông tin...">
        <Send size={20} />Gửi Yêu Cầu Tư Vấn
      </SubmitButton>
    </motion.form>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-slate-900/50 border border-green-500/30 rounded-3xl p-10 text-center"
    >
      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-green-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">Gửi Thành Công!</h3>
      <p className="text-slate-400 mb-8 max-w-md mx-auto">
        Cảm ơn bạn đã liên hệ. Đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
      </p>
      <button
        onClick={onReset}
        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
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
      className="bg-slate-900/50 border border-red-500/30 rounded-3xl p-10 text-center"
    >
      <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <XCircle size={40} className="text-red-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">Có Lỗi Xảy Ra</h3>
      <p className="text-slate-400 mb-8 max-w-md mx-auto">{message}</p>
      <button
        onClick={onReset}
        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
      >
        Thử Lại
      </button>
    </motion.div>
  );
}

