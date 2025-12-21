'use client';

import { useLanguage } from '../../LanguageContext';
import { vi } from './vi';
import { en } from './en';
import { MarketingFullPackageTranslations } from './types';

const dictionaries: Record<'vi' | 'en', MarketingFullPackageTranslations> = { vi, en };

export function useMarketingFullPackageTranslations() {
    const { language } = useLanguage();
    return dictionaries[language];
}

export type { MarketingFullPackageTranslations };
