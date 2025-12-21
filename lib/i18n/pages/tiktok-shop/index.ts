'use client';

import { useLanguage } from '../../LanguageContext';
import { vi } from './vi';
import { en } from './en';
import { TiktokShopTranslations } from './types';

const dictionaries: Record<'vi' | 'en', TiktokShopTranslations> = { vi, en };

export function useTiktokShopTranslations() {
    const { language } = useLanguage();
    return dictionaries[language];
}

export type { TiktokShopTranslations };
