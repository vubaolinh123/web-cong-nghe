export type MarketingPageTranslations = {
    hero: {
        badge: string;
        title: string;
        titleHighlight: string;
        description: string;
        optimizeText: string;
        stats: {
            campaigns: { value: string; label: string };
            roi: { value: string; label: string };
            support: { value: string; label: string };
        };
        ctaPrimary: string;
        ctaSecondary: string;
    };
    introduction: {
        sectionLabel: string;
        quote: {
            text1: string;
            highlight: string;
            text2: string;
        };
        values: Array<{
            title: string;
            desc: string;
        }>;
        stats: {
            campaigns: { value: string; label: string };
            roi: { value: string; label: string };
            clients: { value: string; label: string };
        };
    };
    serviceList: {
        badge: string;
        title: string;
        titleHighlight: string;
        description: string;
        viewDetails: string;
        bottomCta: {
            text: string;
            button: string;
        };
        services: Array<{
            title: string;
            description: string;
            features: string[];
            badge: string;
            stats: { value: string; label: string };
        }>;
    };
    cta: {
        title: string;
        subtitle: string;
        description: string;
    };
};
