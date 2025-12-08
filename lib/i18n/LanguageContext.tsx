"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Language, TranslationDictionary } from './types';
import { dictionaries, vi as defaultDictionary } from './dictionaries';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dictionary: TranslationDictionary;
}

// Create a translate function that works with any dictionary
const createTranslate = (dictionary: TranslationDictionary) => (path: string): string => {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = dictionary;
  
  for (const key of keys) {
    if (current[key] === undefined) {
      console.warn(`Translation key not found: ${path}`);
      return path;
    }
    current = current[key];
  }
  
  return current as string;
};

// Default context value for SSR
const defaultContextValue: LanguageContextType = {
  language: 'vi',
  setLanguage: () => {},
  t: createTranslate(defaultDictionary),
  dictionary: defaultDictionary
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

// Helper to get initial language (only runs on client)
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'vi';
  const savedLang = localStorage.getItem('language');
  if (savedLang === 'vi' || savedLang === 'en') {
    return savedLang;
  }
  return 'vi';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Sync document lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }, []);

  const dictionary = dictionaries[language];

  const t = useCallback((path: string): string => {
    return createTranslate(dictionary)(path);
  }, [dictionary]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}