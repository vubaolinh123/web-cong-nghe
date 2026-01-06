"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { vi } from "./vi";
import { en } from "./en";
import { MarketingBasicTranslations } from "./types";

export function useMarketingBasicTranslations(): MarketingBasicTranslations {
    const { language } = useLanguage();
    return language === "vi" ? vi : en;
}

export type { MarketingBasicTranslations };
