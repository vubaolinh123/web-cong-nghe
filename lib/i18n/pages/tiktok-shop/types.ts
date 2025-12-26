export type TiktokShopTranslations = {
    pageCta: {
        title: string;
        titleHighlight: string;
        button: string;
    };
    hero: {
        badge: string;
        title: string;
        titleHighlight: string;
        titleLine2: string;
        titleHighlight2: string;
        description: string;
        descriptionHighlight: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    benefits: {
        items: Array<{
            title: string;
            subtitle: string;
            desc: string;
        }>;
    };
    pricing: {
        title: string;
        titleHighlight: string;
        note: string;
        registerButton: string;
        plans: Array<{
            price: string;
            sales: string;
            features: Array<{
                text: string;
                active: boolean;
            }>;
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
        questions: Array<{
            q: string;
            a: string;
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
            likes: string;
            verified?: boolean;
        }>;
    };
};
