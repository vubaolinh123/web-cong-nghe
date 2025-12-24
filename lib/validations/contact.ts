// Contact Form Validation Schema and Types

export interface ContactFormData {
  name: string;
  jobTitle: string;
  currentJob: string;
  phone: string;
  fanpageOrWebsite: string;
  budget: string;
  serviceCategory: string;
  specificServices: string[];
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  jobTitle?: string;
  currentJob?: string;
  phone?: string;
  fanpageOrWebsite?: string;
  budget?: string;
  serviceCategory?: string;
  specificServices?: string;
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

export const validateJobTitle = (jobTitle: string): string | undefined => {
  if (!jobTitle.trim()) return "Vui lòng nhập chức danh";
  return undefined;
};

export const validateCurrentJob = (currentJob: string): string | undefined => {
  if (!currentJob.trim()) return "Vui lòng nhập công việc hiện tại";
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

export const validateServiceCategory = (serviceCategory: string): string | undefined => {
  if (!serviceCategory) return "Vui lòng chọn loại dịch vụ";
  return undefined;
};

export const validateSpecificServices = (specificServices: string[]): string | undefined => {
  if (specificServices.length === 0) return "Vui lòng chọn ít nhất một dịch vụ cụ thể";
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

  const jobTitleError = validateJobTitle(data.jobTitle);
  if (jobTitleError) errors.jobTitle = jobTitleError;

  const currentJobError = validateCurrentJob(data.currentJob);
  if (currentJobError) errors.currentJob = currentJobError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const serviceCategoryError = validateServiceCategory(data.serviceCategory);
  if (serviceCategoryError) errors.serviceCategory = serviceCategoryError;

  const specificServicesError = validateSpecificServices(data.specificServices);
  if (specificServicesError) errors.specificServices = specificServicesError;

  const messageError = validateMessage(data.message);
  if (messageError) errors.message = messageError;

  return errors;
};

export const hasErrors = (errors: ContactFormErrors): boolean => {
  return Object.keys(errors).length > 0;
};

// Service category options
export const serviceCategoryOptions = [
  { value: "technology", label: "Gia Công Công Nghệ" },
  { value: "marketing", label: "Dịch Vụ Marketing" },
];

// Technology services - 4 main categories
export const technologyServiceOptions = [
  { value: "custom-website", label: "Custom Website" },
  { value: "low-code-automation", label: "Low Code Automation" },
  { value: "ai-chatbot", label: "AI Chatbot" },
  { value: "ai-agent", label: "AI Agent" },
];

// Marketing services - 4 main categories
export const marketingServiceOptions = [
  { value: "marketing-tong-the", label: "Marketing Tổng Thể" },
  { value: "xay-group", label: "Xây Group" },
  { value: "xay-kenh", label: "Xây Kênh" },
  { value: "livestream-tiktok", label: "Livestream TikTok" },
];

