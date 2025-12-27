import { TrendingUpIcon, UsersIcon, ThumbsUp, Video, CheckCircle, Users, Target, Clock, Award } from "lucide-react";
import { CategoryKey, Category, CaseStudy } from "./types";

// Icon mapping for stats
export const statIcons = [CheckCircle, Users, Target, Clock];

// Stat colors
export const statColors = [
    'from-green-500 to-emerald-500',
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500'
];

// Marketing category case studies
const marketingCaseStudies: CaseStudy[] = [
    { id: 2, image: "/image/casestudies/marketing_2.jpg", alt: "Marketing Case Study 2", type: "portrait" },
    { id: 4, image: "/image/casestudies/marketing_4.jpg", alt: "Marketing Case Study 4", type: "portrait" },
    { id: 5, image: "/image/casestudies/marketing_5.jpg", alt: "Marketing Case Study 5", type: "portrait" },
    { id: 6, image: "/image/casestudies/marketing_6.jpg", alt: "Marketing Case Study 6", type: "portrait" },
];

// Group category case studies
const groupCaseStudies: CaseStudy[] = [
    { id: 7, image: "/image/casestudies/group_6.jpg", alt: "Facebook Group Case Study 1", type: "portrait" },
    { id: 8, image: "/image/casestudies/group_7.jpg", alt: "Facebook Group Case Study 2", type: "portrait" },
    { id: 9, image: "/image/casestudies/group_3.jpg", alt: "Facebook Group Case Study 3", type: "portrait" },
    { id: 100, image: "/image/casestudies/group_4.jpg", alt: "Facebook Group Case Study 4", type: "portrait" },
    { id: 101, image: "/image/casestudies/group_5.jpg", alt: "Facebook Group Case Study 5", type: "portrait" },
    { id: 102, image: "/image/casestudies/group_8.jpg", alt: "Facebook Group Case Study 8", type: "portrait" },
    { id: 103, image: "/image/casestudies/group_9.jpg", alt: "Facebook Group Case Study 9", type: "portrait" },
    { id: 104, image: "/image/casestudies/group_10.jpg", alt: "Facebook Group Case Study 4", type: "portrait" },
    { id: 105, image: "/image/casestudies/group_11.jpg", alt: "Facebook Group Case Study 5", type: "portrait" },
];

// Fanpage category case studies
const fanpageCaseStudies: CaseStudy[] = [
    { id: 11, image: "/image/casestudies/fanpage_2.jpg", alt: "Fanpage Case Study 2", type: "portrait" },
    { id: 12, image: "/image/casestudies/fanpage_3.jpg", alt: "Fanpage Case Study 3", type: "portrait" },
    { id: 13, image: "/image/casestudies/fanpage_4.jpg", alt: "Fanpage Case Study 4", type: "portrait" },
    { id: 14, image: "/image/casestudies/fanpage_5.jpg", alt: "Fanpage Case Study 5", type: "portrait" },
];

// TikTok category case studies
const tiktokCaseStudies: CaseStudy[] = [
    { id: 15, image: "/image/casestudies/tiktok_1.jpg", alt: "TikTok Case Study 1", type: "portrait" },
    { id: 16, image: "/image/casestudies/tiktok_2.jpg", alt: "TikTok Case Study 2", type: "portrait" },
    { id: 17, image: "/image/casestudies/tiktok_3.jpg", alt: "TikTok Case Study 3", type: "portrait" },
    { id: 19, image: "/image/casestudies/tiktok_5.jpg", alt: "TikTok Case Study 5", type: "portrait" },
];

// Build categories with translations
export function buildCategories(t: (key: string) => string): Category[] {
    return [
        {
            key: 'marketing' as CategoryKey,
            name: t('caseStudies.categories.marketing.name') || 'Marketing tổng thể',
            icon: TrendingUpIcon,
            description: t('caseStudies.categories.marketing.description') || 'Các chiến dịch marketing đa kênh tổng thể',
            color: 'from-green-500 to-emerald-500',
            caseStudies: marketingCaseStudies
        },
        {
            key: 'group' as CategoryKey,
            name: t('caseStudies.categories.group.name') || 'Xây Group Facebook',
            icon: UsersIcon,
            description: t('caseStudies.categories.group.description') || 'Xây dựng và phát triển cộng đồng Facebook Group',
            color: 'from-blue-500 to-cyan-500',
            caseStudies: groupCaseStudies
        },
        {
            key: 'fanpage' as CategoryKey,
            name: t('caseStudies.categories.fanpage.name') || 'Fanpage',
            icon: ThumbsUp,
            description: t('caseStudies.categories.fanpage.description') || 'Quản lý và phát triển Facebook Fanpage chuyên nghiệp',
            color: 'from-purple-500 to-pink-500',
            caseStudies: fanpageCaseStudies
        },
        {
            key: 'tiktok' as CategoryKey,
            name: t('caseStudies.categories.tiktok.name') || 'TikTok',
            icon: Video,
            description: t('caseStudies.categories.tiktok.description') || 'Chiến lược marketing và viral content trên TikTok',
            color: 'from-orange-500 to-red-500',
            caseStudies: tiktokCaseStudies
        },
    ];
}

// Build stats from translations
export function buildStats(t: (key: string) => any) {
    const statsData = t('caseStudies.stats');
    return Array.isArray(statsData) ? statsData.map((stat: any, index: number) => ({
        icon: statIcons[index] || Award,
        value: stat.value,
        label: stat.label,
        color: statColors[index]
    })) : [];
}
