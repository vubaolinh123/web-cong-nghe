'use client';

import { useLanguage } from '../../LanguageContext';
import { vi } from './vi';
import { en } from './en';
import { FanpageTranslations } from './types';

const dictionaries: Record<'vi' | 'en', FanpageTranslations> = { vi, en };

export function useFanpageTranslations() {
    const { language } = useLanguage();
    return dictionaries[language];
}

export type { FanpageTranslations };
