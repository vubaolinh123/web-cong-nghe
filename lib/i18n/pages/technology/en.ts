import { TechnologyPageTranslations } from './types';

export const en: TechnologyPageTranslations = {
    hero: {
        badge: '⚡ Advanced AI Technology',
        title: 'AI Services',
        titleHighlight: 'Complete Digitalization',
        highlightText: 'From Data to Power',
        description: 'Automate processes, optimize operations, and unlock your business potential with cutting-edge AI technology.',
        stats: {
            projects: { value: '500+', label: 'Projects Completed' },
            satisfaction: { value: '98%', label: 'Customer Satisfaction' },
            efficiency: { value: '50%', label: 'Efficiency Increase' },
        },
        ctaPrimary: 'Book Consultation Now',
        ctaSecondary: 'Explore Solutions',
    },
    introduction: {
        sectionLabel: 'About Us',
        quote: {
            text1: '"We help businesses harness the power of ',
            highlight1: 'AI',
            text2: ' to optimize operations. From automating repetitive tasks to building intelligent assistants, we transform AI technology into a real ',
            highlight2: 'competitive advantage',
            text3: ' for your business."',
        },
        values: [
            {
                title: 'Results-Focused',
                desc: 'Every solution aims for clear ROI',
            },
            {
                title: 'Unlimited Creativity',
                desc: 'Applying the most advanced AI technology',
            },
            {
                title: 'Dedicated Partnership',
                desc: '24/7 support, top expert team',
            },
        ],
        stats: {
            experience: { value: '5+', label: 'Years Experience' },
            projects: { value: '200+', label: 'AI Projects' },
            partners: { value: '50+', label: 'Trusted Partners' },
        },
    },
    serviceList: {
        title: 'Our Services',
        description: 'Comprehensive technology solutions to help businesses break through',
        featuredBadge: 'Featured',
        consultButton: 'Consult Now',
        pricingLabel: 'Starting From',
        featuredService: {
            title: 'Custom Websites & Apps',
            description: 'Build AI-integrated websites and applications tailored to your business needs. Modern design, SEO optimized, responsive on all devices.',
            features: [
                'Brand-optimized UX/UI design',
                'Built-in AI Chatbot integration',
                'Responsive on all devices',
                'Google SEO standard',
                'Admin Dashboard management',
                'Free hosting & SSL first year',
            ],
            pricing: {
                from: '15,000,000',
                currency: 'VND',
                note: 'Depending on specific requirements',
            },
            benefits: [
                'Source code delivery',
                '6-month warranty',
                '24/7 technical support',
            ],
        },
        otherServices: [
            {
                title: 'Low Code Automation',
                description: 'Automate workflows with n8n - a powerful low-code platform.',
                features: [
                    'Automated reporting and data analysis',
                    'Automatic market research',
                    'Task assignment and updates',
                ],
            },
            {
                title: 'AI Chatbot',
                description: 'Intelligent chatbot serving customers 24/7, automatically nurturing and converting leads.',
                features: [
                    'Instant product consultation',
                    'Customer information collection',
                    'Existing customer care',
                ],
            },
            {
                title: 'AI Agent',
                description: 'Specialized AI assistants for specific needs.',
                features: [
                    'Personal Assistant: Calendar, email management',
                    'Content Creation: Writing, design',
                    'Management: Operations monitoring, reporting',
                ],
            },
        ],
    },
    caseStudies: {
        title: 'Case Studies',
        subtitle: 'Real results from our clients',
        cases: [
            {
                title: 'Calendar AI Agent',
                client: 'TPBank',
                category: 'Automation',
                description: 'AI system automating meeting scheduling for over 500 employees, resolving time conflicts and optimizing meeting rooms without human intervention.',
                stats: [
                    { value: '15h+', label: 'Saved/week' },
                    { value: '100%', label: 'Automated' },
                ],
            },
            {
                title: 'AI Personal Shopper',
                client: 'Thinh Phan Suit',
                category: 'Retail AI',
                description: 'Smart chatbot analyzing customer style and measurements to suggest the most suitable outfits, increasing conversion rates and significantly reducing returns.',
                stats: [
                    { value: '+40%', label: 'Try-on rate' },
                    { value: '4.9/5', label: 'Satisfaction' },
                ],
            },
            {
                title: 'Smart Lead System',
                client: 'Caffe Saphie',
                category: 'Marketing',
                description: 'Automatic lead collection and classification tool from multiple channels, helping sales teams focus on the highest quality leads.',
                stats: [
                    { value: '3.5x', label: 'Quality leads' },
                    { value: '-60%', label: 'Ad costs' },
                ],
            },
            {
                title: 'A.I Invoice Processor',
                client: 'Logistics Corp',
                category: 'Operations',
                description: 'OCR & AI solution processing thousands of shipping invoices daily with near-perfect accuracy, reducing manual data entry staff by 80%.',
                stats: [
                    { value: '80%', label: 'Time reduced' },
                    { value: '99.9%', label: 'Accuracy' },
                ],
            },
            {
                title: 'Store Manager Agent',
                client: 'Apple Reseller',
                category: 'Management',
                description: 'Virtual assistant monitoring inventory, sales, and employee performance in real-time, providing detailed management reports directly on phone.',
                stats: [
                    { value: '+25%', label: 'Efficiency' },
                    { value: 'Realtime', label: 'Reports' },
                ],
            },
        ],
    },
    cta: {
        title: 'START TODAY',
        subtitle: 'Ready to bring AI into your business?',
        description: 'Book a free consultation so we can analyze your needs and propose the most suitable solution.',
    },
    itServicesIntro: {
        badge: 'Professional IT Services',
        title: 'Comprehensive technology solutions from',
        titleHighlight1: 'Website, Mobile App, AI',
        titleHighlight2: 'Low Code',
        description: '5+ years expert team, on-time delivery, dedicated support',
        services: [
            {
                title: 'Website Design',
                description: 'Business, e-commerce, landing pages with modern design, responsive and SEO optimized. Delivery in 3-7 days',
            },
            {
                title: 'Mobile App',
                description: 'Android & iOS development with React Native, Flutter. Cross-platform, high performance, full features',
            },
            {
                title: 'AI Chatbot',
                description: 'Smart AI chatbot with OpenAI, Claude. Integrate into website, Zalo, Facebook Messenger. Automate customer care',
            },
            {
                title: 'Low Code',
                description: 'Fast app development with Low Code platform. Save 70% time, easy customization, MVP and landing pages in just 1-3 weeks',
            },
        ],
    },
    pricingPackages: {
        title: 'Pricing',
        titleHighlight: 'Plans',
        description: 'Choose the package that fits your business scale and needs',
        packages: [
            {
                badge: 'Basic',
                name: 'STARTER PACKAGE',
                price: '20,000,000',
                originalPrice: '25,000,000',
                target: 'Suitable for: Startups, small businesses starting digitalization',
                visibleFeatures: [
                    'Complete Landing Page/Intro Website',
                    'Simple mobile app for 1 platform',
                    'Basic AI Chatbot integration',
                ],
                expandButton: 'View More',
                collapseButton: 'Collapse',
                ctaButton: 'View Details',
                features: [
                    {
                        title: 'Website/Landing Page',
                        items: [
                            '5-7 responsive pages, SEO optimized',
                            'Domain + Hosting for 1 year',
                            'Delivery: 5-7 days',
                        ],
                    },
                    {
                        title: 'Mobile App',
                        items: [
                            '1 platform (iOS/Android)',
                            '5-8 screens, React Native/Flutter',
                            'Delivery: 1-2 months',
                        ],
                    },
                    {
                        title: 'AI Chatbot',
                        items: [
                            'OpenAI/Claude, 20-30 scenarios',
                            'Website/Facebook integration',
                            'Delivery: 5-7 days',
                        ],
                    },
                ],
            },
            {
                badge: 'Popular',
                name: 'PROFESSIONAL PACKAGE',
                price: '50,000,000',
                originalPrice: '70,000,000',
                target: 'Suitable for: Medium businesses needing comprehensive solutions',
                featuredBadge: 'Most Popular',
                visibleFeatures: [
                    'Complete e-commerce website',
                    'Advanced cross-platform mobile app',
                    'CRM customer management system',
                ],
                expandButton: 'View More',
                collapseButton: 'Collapse',
                ctaButton: 'View Details',
                features: [
                    {
                        title: 'E-commerce Website',
                        items: [
                            '15-20 pages, online payment',
                            'CMS management, advanced SEO',
                            '5 SEO articles, 1 year maintenance',
                            'Delivery: 1-2 weeks',
                        ],
                    },
                    {
                        title: 'Cross-platform App',
                        items: [
                            'iOS + Android, 15-20 screens',
                            'Backend API, Firebase',
                            'Upload to App Store & Play Store',
                            'Delivery: 1-2 months',
                        ],
                    },
                    {
                        title: 'CRM + AI',
                        items: [
                            'Customer, leads, pipeline management',
                            'Multi-channel AI Agent, data learning',
                            'Multi-language chatbot, 50-100 scenarios',
                        ],
                    },
                ],
            },
            {
                badge: 'Premium',
                name: 'ENTERPRISE PACKAGE',
                price: '100,000,000',
                originalPrice: '150,000,000',
                target: 'Suitable for: Large businesses, comprehensive complex solutions',
                visibleFeatures: [
                    'Synchronized Web + App + Admin platform',
                    'Comprehensive Sales + Marketing CRM',
                    'Complete End-to-end AI solution',
                ],
                expandButton: 'View More',
                collapseButton: 'Collapse',
                ctaButton: 'View Details',
                features: [
                    {
                        title: 'Enterprise Platform',
                        items: [
                            'Web + App + Admin real-time sync',
                            'Microservices, Cloud (AWS/GCP)',
                            '99.9% uptime, auto-scaling',
                        ],
                    },
                    {
                        title: 'Comprehensive CRM + AI',
                        items: [
                            'Sales + Marketing + Service',
                            'AI lead scoring, predictive analytics',
                            'Multi-branch, Data warehouse, BI tools',
                        ],
                    },
                    {
                        title: 'AI & Development',
                        items: [
                            'AI Agent, multi-channel chatbot, ML models',
                            'Dedicated team, dedicated PM',
                            'CI/CD, Security audit, 24/7 support',
                            'Delivery: 2-4 months',
                        ],
                    },
                ],
            },
        ],
    },
    commitments: {
        badge: 'Quality commitment',
        title: '3 Commitments When',
        titleHighlight: 'Building Code',
        description: 'Ensure maximum customer benefits with clear, transparent commitments',
        warrantyBadge: '3-month free warranty for all service packages',
        items: [
            {
                title: 'On-Time Delivery',
                description: 'Commitment to deliver projects on the agreed timeline. If delayed due to our fault, you will be compensated 10% of the contract value.',
            },
            {
                title: 'Bug Fix Support',
                description: 'Fix all bugs that arise during usage. Technical team ready to support via Zalo, email, or phone during business hours (8am-6pm, Mon-Fri).',
            },
            {
                title: 'Comprehensive Warranty',
                description: 'Free warranty for the first 3 months. After that, repairs and maintenance at reasonable fees depending on features and bug complexity. See detailed maintenance pricing.',
            },
        ],
    },
    blogSection: {
        title: 'Technology',
        titleHighlight: 'Articles',
        subtitle: 'Stay updated with the latest technology insights and trends from experts',
        viewAll: 'View All Articles',
        readMore: 'Read more',
        minuteRead: 'min read',
    },
};
