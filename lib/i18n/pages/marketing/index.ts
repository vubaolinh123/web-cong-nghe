'use client';

import { useLanguage } from '../../LanguageContext';
import { vi } from './vi';
import { en } from './en';
import { MarketingPageTranslations } from './types';

const dictionaries: Record<'vi' | 'en', MarketingPageTranslations> = { vi, en };

export function useMarketingTranslations() {
    const { language } = useLanguage();
    return dictionaries[language];
}

export type { MarketingPageTranslations };
