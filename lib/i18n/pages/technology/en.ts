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
                title: 'Low-code Automation',
                description: 'Automate workflows with n8n - a powerful low-code platform.',
                features: [
                    'Automated reporting and data analysis',
                    'Automatic market research',
                    'Task assignment and updates',
                ],
            },
            {
                title: 'AI Agent',
                description: 'Intelligent AI assistant that automatically handles complex tasks, interacts with systems, and makes data-driven decisions.',
                features: [
                    'Business process automation',
                    'Multi-channel integration: Website, Zalo, Messenger',
                    'Smart analytics and reporting',
                ],
            },
        ],
    },
    caseStudies: {
        title: 'Featured Projects',
        subtitle: 'Real Results from Enterprise Clients',
        readMore: 'View Details',
        viewProject: 'Visit Website',
        projects: [
            {
                id: 'bbq-website',
                title: 'Korean BBQ Landing Page',
                category: 'Website',
                image: '/images/projects/bbq-website.png',
                description: 'Authentic Korean BBQ restaurant website with food-focused UI, integrated booking engine, and visual menu.',
                content: {
                    overview: 'The Korean BBQ Landing Page project was developed with modern technologies, focusing on visual experience and conversion rates.',
                    challenges: 'The client needed a website that was not only beautiful but also fast-loading, showcasing the deliciousness of the food and encouraging immediate bookings.',
                    solutions: [
                        'Luxury Dark Mode UI design highlighting food imagery',
                        'Realtime table booking module integration',
                        'Local SEO optimization for regional reach',
                        'Interactive menu with attractive visual effects'
                    ],
                    results: 'Increased online bookings by 200% after 1 month. Bounce rate reduced to under 30%.'
                }
            },
            {
                id: 'real-estate-web',
                title: 'LuxHome Real Estate Exchange',
                category: 'Website',
                image: '/images/projects/real-estate.png',
                description: 'Premium real estate listing platform with advanced map search and 360-degree VR Tours.',
                content: {
                    overview: 'LuxHome is a high-end real estate exchange. The website needs to demonstrate prestige, transparency, and class.',
                    challenges: 'Handling large volumes of listing data with high-resolution images while ensuring fast page load speeds.',
                    solutions: [
                        'Advanced Smart Filter search system',
                        ' Integrated 3D Tour / VR View',
                        'CMS for real estate cart management',
                        'Cache and CDN optimization for images'
                    ],
                    results: 'Supports over 500 brokers simultaneously. Average on-site time reached 5 minutes.'
                }
            },
            {
                id: 'fitness-app',
                title: 'FitLife - Workout Companion App',
                category: 'Mobile App',
                image: '/images/projects/fitness-app.png',
                description: 'Cross-platform mobile app (iOS/Android) supporting personalized workout training and nutrition tracking.',
                content: {
                    overview: 'FitLife helps office workers maintain workout habits through short exercises and healthy diet plans.',
                    challenges: 'Motivating users to return to the app daily (Retention) and syncing health data from wearable devices.',
                    solutions: [
                        'Developed with Flutter (Cross-platform) for cost efficiency',
                        'Gamification: Badge and leaderboard system',
                        'Apple Health & Google Fit integration',
                        'Video player optimized for workout streaming'
                    ],
                    results: 'Reached 10,000 users after 3 months. 4.8/5 rating on App Store.'
                }
            },
            {
                id: 'shop-apple-123',
                title: 'Shop Apple 123 AI Assistant',
                category: 'AI Agent',
                image: '/images/projects/ai-agent.png',
                description: 'AI Agent system automating customer service, appointment scheduling, and order processing on Facebook/Zalo.',
                content: {
                    overview: 'Shop Apple 123 faced overload in checking messages and scheduling repairs/warranty services for customers.',
                    challenges: 'Staff spent 4-5 hours daily just checking availability and confirming with customers. Prone to scheduling errors.',
                    solutions: [
                        'Automated customer request classification using NLP',
                        'Bot automatically checks Google Sheet for availability',
                        'Automatically add, update, delete appointments upon request',
                        'Instant customer response with personalized scripts'
                    ],
                    results: 'Reduced manual scheduling time by 90%. Shop operates 24/7 without missing any customer inquiries.'
                }
            },
            {
                id: 'tpbank-automation',
                title: 'TPBank Automated Approval System',
                category: 'Automation',
                image: '/images/projects/automation.png',
                description: 'Low-code solution automating document approval processes and internal request classification.',
                content: {
                    overview: 'The bank needed to shorten processing time for internal documents and requests sent from branches to headquarters.',
                    challenges: 'Manual processes via email were cumbersome, difficult to track progress, and prone to lost documents.',
                    solutions: [
                        'Built Automation workflows on n8n/Low-code platform',
                        'Automated data extraction from forms and emails',
                        'Approval routing based on limits and departments',
                        'Realtime status updates to management system'
                    ],
                    results: 'Shortened approval time by 60%. Transparentized the entire internal processing workflow.'
                }
            }
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
        titleHighlight2: 'Low-code',
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
                title: 'Low-code Automation',
                description: 'Fast app development with Low Code platform. Save 70% time, easy customization, MVP and landing pages in just 1-3 weeks',
            },
        ],
    },
    servicePricing: {
        title: 'Service',
        titleHighlight: 'Pricing',
        description: 'Choose the service that fits your business needs and budget',
        ctaButton: 'Contact Us',
        ctaButtonContact: 'Contact',
        expandButton: 'View details',
        collapseButton: 'Collapse',
        tabs: {
            mobileApp: 'Mobile App',
            website: 'Website',
            aiAgent: 'AI Agent',
            automation: 'Automation',
        },
        categories: {
            mobileApp: {
                icon: '📱',
                description: 'Flexible mobile applications, from basic to premium',
                packages: [
                    {
                        name: 'Starter',
                        price: '50,000,000₫',
                        subtitle: 'Simple app, pre-designed UI',
                        features: [
                            'Basic interface optimization',
                            '≤5 screens',
                            'No back-end',
                            'iOS or Android only',
                            'Basic login integration',
                            'Lightweight loading',
                            'Fast deployment (>4 weeks)',
                            '1 month maintenance',
                            'Basic brand interface',
                        ],
                    },
                    {
                        name: 'Plus',
                        price: '100,000,000₫',
                        subtitle: 'Mid-tier app, API, custom UI',
                        highlighted: true,
                        features: [
                            'Custom UX/UI design',
                            'Optimized user experience',
                            'API integration (payment, social...)',
                            'iOS & Android support',
                            'Basic admin system',
                            'Simple reporting',
                            'Performance optimized',
                            '3 months maintenance',
                            'Push notifications',
                            'User permissions',
                        ],
                    },
                    {
                        name: 'Pro',
                        price: '250,000,000₫',
                        subtitle: 'E-commerce or service app',
                        features: [
                            'Full premium UX/UI, animations',
                            'Online payment + discount codes',
                            'Product/service management',
                            'Personalized notifications',
                            'Admin dashboard',
                            'Multi-platform consistency',
                            'SSL security & auth',
                            'Speed and cache optimization',
                            '6 months maintenance',
                        ],
                    },
                    {
                        name: 'Ultra',
                        price: 'Contact',
                        subtitle: 'Premium app, IoT/ERP integration',
                        features: [
                            'Premium UX/UI design, animations',
                            'Multi-language',
                            'Real-time data (chat, tracking)',
                            'IoT or ERP/CRM integration',
                            'Advanced admin dashboard',
                            'Multi-layer security',
                            'Scalable architecture',
                            '12 months maintenance + SLA',
                            'Automated testing',
                            'Deployment consulting & training',
                        ],
                    },
                ],
            },
            website: {
                icon: '🌐',
                description: 'Professional websites, from landing pages to complex systems',
                packages: [
                    {
                        name: 'Landing Page',
                        price: '5,000,000₫+',
                        subtitle: 'Ads, lead generation',
                        features: [
                            'High UI/UX, conversion optimized',
                            'Pre-design goal analysis',
                            'Customer behavior-based design',
                            'Ad-optimized loading speed',
                            'Email marketing, CRM connection',
                            'SEO standard, mobile-friendly',
                            'Sign-up form + Chatbot',
                            'Promo popup, CTA',
                            'Source code delivery',
                        ],
                    },
                    {
                        name: 'Basic',
                        price: '15,000,000₫+',
                        subtitle: 'Individual, small business',
                        features: [
                            'Beautiful template design',
                            'Domain and hosting consulting',
                            '99+ beautiful themes, multi-industry',
                            'Brand color customization',
                            'Responsive on all devices',
                            'Completion: 15+ days',
                            'Upgradeable anytime',
                            'Backup, technical maintenance',
                            'Source code delivery',
                        ],
                    },
                    {
                        name: 'Custom',
                        price: '25,000,000₫+',
                        subtitle: 'Medium business, brands',
                        highlighted: true,
                        features: [
                            'Industry-specific UI/UX design',
                            'Domain and hosting consulting',
                            'About, services, contact pages',
                            'Custom CMS content management',
                            'SEO standard, mobile-friendly',
                            'Momo, VNPAY integration',
                            'Zalo OA, Fanpage integration',
                            'Order management dashboard',
                            'Expandable to CRM/booking',
                            'Source code delivery',
                        ],
                    },
                    {
                        name: 'System',
                        price: '50,000,000₫+',
                        subtitle: 'Large enterprise, marketplace',
                        features: [
                            'Deep industry-specific UI/UX',
                            'Strategy & analysis consulting',
                            'Advanced CMS: Mini CRM module',
                            'Custom admin dashboard',
                            'Detailed permission system',
                            'Mini CRM customer tracking',
                            'ERP, LMS integration',
                            'Long-term warranty, upgrades',
                            'Source code delivery',
                        ],
                    },
                ],
            },
            aiAgent: {
                icon: '🤖',
                description: 'AI Agent system for process automation, 24/7 operation',
                packages: [
                    {
                        name: 'AI Chatbot',
                        price: '15,000,000₫+',
                        priceNote: 'Setup + 1 month support',
                        subtitle: '24/7 customer service automation',
                        features: [
                            'Auto-reply customer chatbot',
                            'Customer data collection',
                            'Auto appointment booking',
                            'Error notification and bot stop',
                            'Facebook, Tiktok, Shopee integration',
                            'Instagram, Whatsapp, Zalo integration',
                            'Website integration',
                            'ERP, CRM integration (Misa...)',
                            'Staff handover',
                            '3 months warranty',
                        ],
                    },
                    {
                        name: 'AI Assistant',
                        price: '25,000,000₫+',
                        subtitle: 'Calendar, email, task management',
                        features: [
                            'Auto appointment management',
                            'Email management, sorting',
                            'Task list management',
                            'Deadline reminders',
                            'Google Calendar integration',
                            'Gmail/Outlook integration',
                            'Teams/Slack sync',
                            'Daily activity reports',
                            'Workflow optimization',
                            '3 months warranty',
                        ],
                    },
                    {
                        name: 'AI Manager',
                        price: '35,000,000₫+',
                        subtitle: 'HR and project management',
                        highlighted: true,
                        features: [
                            'HR task management',
                            'Daily task notifications',
                            'Progress reports for bosses',
                            'Database information saving',
                            'Centralized project management',
                            'Auto deadline tracking',
                            'Asana, Monday, Jira integration',
                            'Visual dashboard display',
                            'Auto weekly/monthly reports',
                            '3 months warranty',
                        ],
                    },
                    {
                        name: 'AI Content',
                        price: '50,000,000₫+',
                        priceNote: 'Setup + 1 month support',
                        subtitle: 'Auto content creation & posting',
                        features: [
                            'Auto article creation',
                            'AI image generation',
                            'Auto short video creation',
                            'Post to Facebook, Instagram, Tiktok',
                            'Auto edit, clip merging',
                            'Realistic avatar creation',
                            'Subtitles, background audio',
                            'Post scheduling',
                            'Content performance analysis',
                            'Multi-language support',
                            '3 months warranty',
                        ],
                    },
                ],
            },
            automation: {
                icon: '⚡',
                description: 'Business process automation, time-saving',
                packages: [
                    {
                        name: 'Basic',
                        price: '6,000,000₫+',
                        priceNote: 'Setup + 30 days support',
                        subtitle: '1-2 simple processes',
                        features: [
                            '1-2 process automation',
                            'Auto daily/weekly reports',
                            'Auto email notifications',
                            'Basic form data entry',
                            '2-3 platform data sync',
                            'Simple monitoring dashboard',
                            'Testing and fine-tuning',
                        ],
                    },
                    {
                        name: 'Intermediate',
                        price: '10,000,000₫+',
                        priceNote: 'Setup + 60 days support',
                        subtitle: '3-5 processes, complex logic',
                        highlighted: true,
                        features: [
                            '3-5 process automation',
                            'Complex logic, clear conditions',
                            '5+ platform/API integration',
                            'Auto report files (Excel, PDF)',
                            'Auto rate limit error handling',
                            'Auto scheduled runs',
                        ],
                    },
                    {
                        name: 'Advanced',
                        price: '20,000,000₫+',
                        priceNote: 'Setup + 90 days support',
                        subtitle: '6+ processes, full integration',
                        features: [
                            '6+ complex process automation',
                            'ERP, CRM, HR system integration',
                            'Advanced logic, basic ML',
                            'Large data processing',
                            'Webhook and API management',
                            'Executive level dashboard',
                            'Process optimization consulting',
                        ],
                    },
                    {
                        name: 'Maintenance',
                        price: '2-10M/month',
                        subtitle: 'Ongoing post-deployment support',
                        features: [
                            '24/7 error support',
                            'Formula and logic updates',
                            'Performance optimization',
                            'New platform integrations',
                            'Auto monitoring and alerts',
                            'Weekly reports',
                            'Periodic data backup',
                            'New staff training',
                            'System upgrade consulting',
                        ],
                    },
                ],
            },
        },
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
