'use client';

import { useLanguage } from '../../LanguageContext';
import { vi } from './vi';
import { en } from './en';
import { FacebookGroupTranslations } from './types';

const dictionaries: Record<'vi' | 'en', FacebookGroupTranslations> = { vi, en };

export function useFacebookGroupTranslations() {
    const { language } = useLanguage();
    return dictionaries[language];
}

export type { FacebookGroupTranslations };
