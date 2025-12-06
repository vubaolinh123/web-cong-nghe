// Contact Form Validation Schema and Types

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  errors?: ContactFormErrors;
}

// Validation functions
export const validateName = (name: string): string | undefined => {
  if (!name.trim()) return "Vui lòng nhập họ tên";
  if (name.trim().length < 2) return "Họ tên phải có ít nhất 2 ký tự";
  if (name.trim().length > 100) return "Họ tên không được quá 100 ký tự";
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) return "Vui lòng nhập email";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Email không hợp lệ";
  return undefined;
};

export const validatePhone = (phone: string): string | undefined => {
  if (!phone.trim()) return "Vui lòng nhập số điện thoại";
  const phoneRegex = /^[0-9+\-\s()]{9,15}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
    return "Số điện thoại không hợp lệ";
  }
  return undefined;
};

export const validateService = (service: string): string | undefined => {
  if (!service) return "Vui lòng chọn dịch vụ quan tâm";
  return undefined;
};

export const validateMessage = (message: string): string | undefined => {
  if (!message.trim()) return "Vui lòng nhập nội dung tin nhắn";
  if (message.trim().length < 10) return "Tin nhắn phải có ít nhất 10 ký tự";
  if (message.trim().length > 2000) return "Tin nhắn không được quá 2000 ký tự";
  return undefined;
};

export const validateContactForm = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const serviceError = validateService(data.service);
  if (serviceError) errors.service = serviceError;

  const messageError = validateMessage(data.message);
  if (messageError) errors.message = messageError;

  return errors;
};

export const hasErrors = (errors: ContactFormErrors): boolean => {
  return Object.keys(errors).length > 0;
};

// Service options
export const serviceOptions = [
  { value: "web-development", label: "Phát Triển Web" },
  { value: "mobile-app", label: "Ứng Dụng Di Động" },
  { value: "cloud-solutions", label: "Cloud Solutions" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "cybersecurity", label: "An Ninh Mạng" },
  { value: "it-consulting", label: "Tư Vấn IT" },
  { value: "other", label: "Khác" },
];

