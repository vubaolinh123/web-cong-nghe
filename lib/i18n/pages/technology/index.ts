'use client';

import { useLanguage } from '../../LanguageContext';
import { vi } from './vi';
import { en } from './en';
import { TechnologyPageTranslations } from './types';

const dictionaries: Record<'vi' | 'en', TechnologyPageTranslations> = { vi, en };

export function useTechnologyTranslations() {
    const { language } = useLanguage();
    return dictionaries[language];
}

export type { TechnologyPageTranslations };
