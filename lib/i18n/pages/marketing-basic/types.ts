export type MarketingBasicTranslations = {
    meta: {
        title: string;
        description: string;
    };
    hero: {
        badge: string;
        title: string;
        titleHighlight: string;
        price: string;
        originalPrice: string;
        duration: string;
        setupTime: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    overview: {
        title: string;
        titleHighlight: string;
        services: Array<{
            icon: string;
            title: string;
            desc: string;
        }>;
    };
    facebook: {
        title: string;
        titleHighlight: string;
        description: string;
        features: string[];
    };
    tiktok: {
        title: string;
        titleHighlight: string;
        description: string;
        features: string[];
    };
    group: {
        title: string;
        titleHighlight: string;
        description: string;
        features: string[];
    };
    brand: {
        title: string;
        titleHighlight: string;
        description: string;
        features: string[];
    };
    kpiResults: {
        title: string;
        titleHighlight: string;
        results: Array<{
            value: string;
            title: string;
            desc: string;
        }>;
    };
    cta: {
        title: string;
        titleHighlight: string;
        description: string;
        phone: string;
        button: string;
    };
};
