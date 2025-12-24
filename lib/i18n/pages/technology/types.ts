export type TechnologyPageTranslations = {
    hero: {
        badge: string;
        title: string;
        titleHighlight: string;
        description: string;
        highlightText: string;
        stats: {
            projects: { value: string; label: string };
            satisfaction: { value: string; label: string };
            efficiency: { value: string; label: string };
        };
        ctaPrimary: string;
        ctaSecondary: string;
    };
    introduction: {
        sectionLabel: string;
        quote: {
            text1: string;
            highlight1: string;
            text2: string;
            highlight2: string;
            text3: string;
        };
        values: Array<{
            title: string;
            desc: string;
        }>;
        stats: {
            experience: { value: string; label: string };
            projects: { value: string; label: string };
            partners: { value: string; label: string };
        };
    };
    serviceList: {
        title: string;
        description: string;
        featuredBadge: string;
        consultButton: string;
        pricingLabel: string;
        featuredService: {
            title: string;
            description: string;
            features: string[];
            pricing: {
                from: string;
                currency: string;
                note: string;
            };
            benefits: string[];
        };
        otherServices: Array<{
            title: string;
            description: string;
            features: string[];
        }>;
    };
    caseStudies: {
        title: string;
        subtitle: string;
        cases: Array<{
            title: string;
            client: string;
            category: string;
            description: string;
            stats: Array<{
                value: string;
                label: string;
            }>;
        }>;
    };
    cta: {
        title: string;
        subtitle: string;
        description: string;
    };
    itServicesIntro: {
        badge: string;
        title: string;
        titleHighlight1: string;
        titleHighlight2: string;
        description: string;
        services: Array<{
            title: string;
            description: string;
        }>;
    };
    pricingPackages: {
        title: string;
        titleHighlight: string;
        description: string;
        packages: Array<{
            badge: string;
            name: string;
            price: string;
            originalPrice: string;
            target: string;
            featuredBadge?: string;
            visibleFeatures: string[];
            expandButton: string;
            collapseButton: string;
            ctaButton: string;
            features: Array<{
                title: string;
                items: string[];
            }>;
        }>;
    };
    commitments: {
        badge: string;
        title: string;
        titleHighlight: string;
        description: string;
        warrantyBadge: string;
        items: Array<{
            title: string;
            description: string;
        }>;
    };
    blogSection: {
        title: string;
        titleHighlight: string;
        subtitle: string;
        viewAll: string;
        readMore: string;
        minuteRead: string;
    };
};
