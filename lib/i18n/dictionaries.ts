import { TranslationDictionary } from './types';

export const vi: TranslationDictionary = {
  nav: {
    home: "Trang Chủ",
    services: "Dịch Vụ",
    blog: "Bài Viết",
    about: "Về Chúng Tôi",
    contact: "Liên Hệ",
    cta: "Tư Vấn Miễn Phí"
  },
  common: {
    language: "Ngôn ngữ"
  }
};

export const en: TranslationDictionary = {
  nav: {
    home: "Home",
    services: "Services",
    blog: "Blog",
    about: "About Us",
    contact: "Contact",
    cta: "Free Consultation"
  },
  common: {
    language: "Language"
  }
};

export const dictionaries = { vi, en };