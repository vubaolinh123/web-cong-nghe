// Contact Form Validation Schema and Types

export interface ContactFormData {
  name: string;
  jobTitle: string;
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
  return undefined;
};

export const validateContactForm = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const serviceCategoryError = validateServiceCategory(data.serviceCategory);
  if (serviceCategoryError) errors.serviceCategory = serviceCategoryError;

  const specificServicesError = validateSpecificServices(data.specificServices);
  if (specificServicesError) errors.specificServices = specificServicesError;

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
  { value: "mobile-app", label: "Mobile App" },
  { value: "ai-agent", label: "AI Agent" },
];

// Marketing services - 4 main categories
export const marketingServiceOptions = [
  { value: "marketing-tong-the", label: "Marketing Tổng Thể" },
  { value: "xay-group", label: "Group Facebook" },
  { value: "xay-kenh", label: "Fanpage" },
  { value: "livestream-tiktok", label: "TiktokShop" },
];

