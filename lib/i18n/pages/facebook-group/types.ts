export type FacebookGroupTranslations = {
    pageCta: {
        title: string;
        button: string;
    };
    hero: {
        badge: string;
        title: string;
        titleHighlight1: string;
        titleLine2: string;
        titleHighlight2: string;
        description: string;
        descriptionHighlight: string;
        descriptionLine2: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    intro: {
        paragraph1Start: string;
        paragraph1Highlight: string;
        paragraph1End: string;
        paragraph2: string;
        paragraph2Highlight: string;
        paragraph2End: string;
    };
    benefits: {
        items: Array<{
            title: string;
            desc: string;
        }>;
    };
    strategyVideo: {
        title: string;
        subtitle: string;
    };
    groupPricing: {
        title: string;
        titleHighlight: string;
        description: string;
        recommendedBadge: string;
        ebookButton: string;
        plans: Array<{
            price: string;
            sales: string;
            features: string[];
        }>;
    };
    process: {
        title: string;
        titleHighlight: string;
        steps: Array<{
            num: string;
            title: string;
            desc: string;
        }>;
    };
    faq: {
        title: string;
        subtitle: string;
        questions: Array<{
            q: string;
            a: string;
        }>;
    };
};
