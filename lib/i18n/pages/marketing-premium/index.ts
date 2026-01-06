"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { vi } from "./vi";
import { en } from "./en";
import { MarketingPremiumTranslations } from "./types";

export function useMarketingPremiumTranslations(): MarketingPremiumTranslations {
    const { language } = useLanguage();
    return language === "vi" ? vi : en;
}

export type { MarketingPremiumTranslations };
