export type FanpageTranslations = {
    pageCta: {
        title: string;
        description: string;
        button: string;
    };
    hero: {
        badge: string;
        title: string;
        titleHighlight: string;
        titleLine2: string;
        description: string;
        descriptionHighlight: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    experience: {
        title: string;
        titleHighlight: string;
        description: string;
        points: Array<{
            title: string;
            desc: string;
        }>;
    };
    whySetup: {
        title: string;
        titleHighlight: string;
        description: string;
        visualTitle: string;
        visualDesc: string;
    };
    process: {
        title: string;
        titleHighlight: string;
        steps: Array<{
            title: string;
            desc: string;
        }>;
    };
    benefits: {
        items: Array<{
            title: string;
            desc: string;
        }>;
        banner: {
            label: string;
            title: string;
            titleHighlight: string;
            description: string;
            button: string;
        };
    };
    pricing: {
        title: string;
        titleHighlight: string;
        description: string;
        registerButton: string;
        plans: Array<{
            badge: string;
            featuredBadge?: string;
            price: string;
            originalPrice?: string;
            sales: string;
            target?: string;
            visibleFeatures: string[];
            features: Array<{
                title: string;
                items: string[];
            }>;
            expandButton: string;
            collapseButton: string;
            ctaButton: string;
        }>;
    };
    caseStudies: {
        sectionTitle: string;
        sectionTitleHighlight: string;
        featuredTitle: string;
        separator: string;
        featuredProjects: Array<{
            name: string;
            followers: string;
            badge: string;
            verified: string;
        }>;
    };
};
