"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Locale = 'vi' | 'en';

interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string, replacements?: Record<string, string>) => any;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>('vi');
    const [translations, setTranslations] = useState<Record<string, any>>({});

    // Load translations
    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const caseStudies = await import(`./locales/${locale}/case-studies.json`);
                setTranslations(caseStudies.default || caseStudies);
            } catch (error) {
                console.error('Failed to load translations:', error);
            }
        };
        loadTranslations();
    }, [locale]);

    const t = useCallback((key: string, replacements?: Record<string, string>) => {
        const keys = key.split('.');
        let value: any = translations;

        for (const k of keys) {
            value = value?.[k];
        }

        // Handle string replacements
        if (typeof value === 'string' && replacements) {
            Object.entries(replacements).forEach(([placeholder, replacement]) => {
                value = value.replace(`{${placeholder}}`, replacement);
            });
        }

        return value ?? key;
    }, [translations]);

    // Save locale preference to localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLocale = localStorage.getItem('locale') as Locale;
            if (savedLocale && (savedLocale === 'vi' || savedLocale === 'en')) {
                setLocale(savedLocale);
            }
        }
    }, []);

    const handleSetLocale = useCallback((newLocale: Locale) => {
        setLocale(newLocale);
        if (typeof window !== 'undefined') {
            localStorage.setItem('locale', newLocale);
        }
    }, []);

    return (
        <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider');
    }
    return context;
}
