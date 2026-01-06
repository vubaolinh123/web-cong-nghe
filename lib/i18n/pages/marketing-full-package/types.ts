export type MarketingFullPackageTranslations = {
    pageCta: {
        title: string;
        description: string;
        button: string;
    };
    hero: {
        badge: string;
        title: string;
        titleHighlight: string;
        description: string;
        ctaPrimary: string;
        ctaSecondary: string;
        scrollIndicator: string;
        stats: Array<{
            value: string;
            label: string;
        }>;
    };
    benefits: {
        title: string;
        titleHighlight: string;
        items: Array<{
            title: string;
            desc: string;
        }>;
    };
    serviceDetails: {
        title: string;
        titleHighlight: string;
        description: string;
        content: Array<{
            title: string;
            desc: string;
            items: string[];
        }>;
    };
    salesFunnel: {
        title: string;
        titleHighlight: string;
        description: string;
        imageCaption: string;
        stages: Array<{
            title: string;
            subtitle: string;
            desc: string;
        }>;
        strategyTitle: string;
        strategyDesc: string;
    };
    trafficSources: {
        title: string;
        titleHighlight: string;
        description: string;
        sources: Array<{
            title: string;
            desc: string;
        }>;
    };
    marketingStrategy: {
        reverseFunnel: {
            title: string;
            titleHighlight: string;
            steps: Array<{
                title: string;
                desc: string;
            }>;
        };
        targetPersona: {
            badge: string;
            title: string;
            titleHighlight: string;
            description: string;
            cta: string;
        };
    };
    customerJourney: {
        title: string;
        titleHighlight: string;
        description: string;
        steps: Array<{
            title: string;
            desc: string;
        }>;
    };
    detailedPricing: {
        title: string;
        titleHighlight: string;
        description: string;
        recommendedBadge: string;
        detailsButton: string;
        plans: Array<{
            name: string;
            duration: string;
            price: string;
            desc: string;
            features: string[];
        }>;
        monthlyPackage: {
            title: string;
            description: string;
            savings: string;
            savingsAmount: string;
            price: string;
            perMonth: string;
        };
    };
    caseStudies: {
        sectionTitle: string;
        sectionTitleHighlight: string;
        featuredBadge: string;
        organicBadge: string;
        watchTimeLabel: string;
        separator: string;
        stats: {
            views: string;
            reach: string;
            threeSecViews: string;
            interactions: string;
        };
        featuredDescriptions: string[];
        projects: Array<{
            title: string;
            description: string;
            views: string;
            reach: string;
            reachGrowth: string;
            threeSecViews: string;
            threeSecGrowth: string;
            interactions: string;
            interactionsGrowth: string;
            watchTime?: string;
        }>;
    };
};
