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
        description: string;
        readMore: string;
        viewProject: string;
        swipeHint: string;
        projects: Array<{
            id: string;
            title: string;
            category: string;
            image: string;
            description: string;
            detailImage?: string;
            detailImageCaption?: string;
            content: {
                projectInfo: {
                    productName: string;
                    client: string;
                    projectType: string;
                    platform: string;
                    targetUsers: string;
                    duration: string;
                };
                overview: string;
                features: Array<{
                    title: string;
                    description: string;
                }>;
            };
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
    servicePricing: {
        title: string;
        titleHighlight: string;
        headingPrefix: string;
        headingHighlight: string;
        description: string;
        ctaButton: string;
        ctaButtonContact: string;
        expandButton: string;
        collapseButton: string;
        tabs: {
            mobileApp: string;
            website: string;
            aiAgent: string;
            automation: string;
        };
        categories: {
            mobileApp: {
                icon: string;
                heading?: string;
                description: string;
                note?: string;
                packages: Array<{
                    name: string;
                    price: string;
                    priceNote?: string;
                    subtitle: string;
                    features: string[];
                    highlighted?: boolean;
                }>;
            };
            website: {
                icon: string;
                heading?: string;
                description: string;
                note?: string;
                packages: Array<{
                    name: string;
                    price: string;
                    priceNote?: string;
                    subtitle: string;
                    features: string[];
                    highlighted?: boolean;
                }>;
            };
            aiAgent: {
                icon: string;
                heading?: string;
                description: string;
                note?: string;
                packages: Array<{
                    name: string;
                    price: string;
                    priceNote?: string;
                    subtitle: string;
                    features: string[];
                    highlighted?: boolean;
                }>;
            };
            automation: {
                icon: string;
                heading?: string;
                description: string;
                note?: string;
                packages: Array<{
                    name: string;
                    price: string;
                    priceNote?: string;
                    subtitle: string;
                    features: string[];
                    highlighted?: boolean;
                }>;
            };
        };
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
