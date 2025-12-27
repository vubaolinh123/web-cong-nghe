// Shared types for Case Studies components

export type CategoryKey = 'marketing' | 'group' | 'fanpage' | 'tiktok';

export interface CaseStudy {
    id: number;
    image: string;
    alt: string;
    type: "landscape" | "portrait";
    description?: string;
}

export interface Category {
    key: CategoryKey;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    caseStudies: CaseStudy[];
    color: string;
}

export interface StatItem {
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
    color: string;
}
