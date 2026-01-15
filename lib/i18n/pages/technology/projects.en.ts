// Projects data for English
// Separated from en.ts for better maintainability

export const projectsDataEn = [
    {
        id: 'bbq-website',
        title: 'Korean BBQ Landing Page',
        category: 'Website',
        image: '/images/projects/bbq-website.png',
        description: 'Authentic Korean BBQ restaurant website with food-focused UI, integrated booking engine, and visual menu.',
        content: {
            projectInfo: {
                productName: 'Korean BBQ Landing Page Website',
                client: 'Korean BBQ Restaurant',
                projectType: 'Website Landing Page',
                platform: 'Web (Responsive)',
                targetUsers: 'Korean cuisine enthusiasts',
                duration: '2-3 weeks'
            },
            overview: 'Landing page for authentic Korean BBQ restaurant. Dark Mode luxury design with integrated realtime booking.',
            features: [
                { title: 'Dark Mode Design', description: 'Beautiful dark UI that highlights food imagery. Interactive menu with visual effects.' },
                { title: 'User Experience Optimization', description: 'Lazy loading, responsive design for all devices.' },
                { title: 'Realtime Booking', description: 'Select date/time, auto email/SMS confirmation.' },
                { title: 'SEO and Marketing', description: 'Local SEO, Google Analytics tracking.' }
            ]
        }
    },
    {
        id: 'real-estate-web',
        title: 'LuxHome Real Estate Exchange',
        category: 'Website',
        image: '/images/projects/real-estate.png',
        description: 'Premium real estate listing platform with advanced map search and 360-degree VR Tours.',
        content: {
            projectInfo: {
                productName: 'LuxHome Real Estate Exchange',
                client: 'LuxHome Real Estate',
                projectType: 'Trading Platform Website',
                platform: 'Web (Responsive)',
                targetUsers: 'Premium property buyers/sellers, Brokers',
                duration: '4-6 weeks'
            },
            overview: 'High-end real estate trading platform. Demonstrates prestige, transparency, and class.',
            features: [
                { title: 'Smart Filter System', description: 'Filter by location, price, area. Realtime map results.' },
                { title: '360 VR Tour', description: '3D Tour virtual viewing without visiting in person.' },
                { title: 'CMS Management', description: 'Real estate management dashboard. Post listings, track views.' },
                { title: 'Performance Optimization', description: 'Cache and CDN. Supports 500+ brokers simultaneously.' }
            ]
        }
    },
    {
        id: 'fitness-app',
        title: 'FitLife - Workout Companion App',
        category: 'Mobile App',
        image: '/images/projects/fitness-app.png',
        description: 'Cross-platform mobile app (iOS/Android) supporting personalized workout training and nutrition tracking.',
        content: {
            projectInfo: {
                productName: 'FitLife - Workout Companion App',
                client: 'FitLife Startup',
                projectType: 'Mobile App',
                platform: 'iOS and Android (Flutter)',
                targetUsers: 'Office workers wanting to exercise',
                duration: '6-8 weeks'
            },
            overview: 'FitLife helps office workers maintain workout habits through short exercises and healthy diet plans.',
            features: [
                { title: 'Gamification', description: 'Badges and leaderboards for daily motivation. Weekly/monthly challenges.' },
                { title: 'Health Data Sync', description: 'Apple Health and Google Fit integration from wearables.' },
                { title: 'Video Streaming', description: 'Optimized video player. Offline mode support.' },
                { title: 'Nutrition Planning', description: 'Diet recommendations. Track calories and macros.' }
            ]
        }
    },
    {
        id: 'shop-apple-123',
        title: 'AI Chatbot for Shop Apple 123',
        category: 'AI Chatbot',
        image: '/images/projects/ai-agent.png',
        detailImage: '/images/projects/ai_agent.jpg',
        detailImageCaption: 'Demo conversation between customer and AI Chatbot',
        description: 'Smart Chatbot solution with AI Vision, OCR integration and auto installment calculation for Apple store.',
        content: {
            projectInfo: {
                productName: 'AI Chatbot Assistant - Shop Apple 123',
                client: 'Shop Apple 123',
                projectType: 'AI SaaS – Smart Chatbot Solution',
                platform: 'Facebook Messenger, Zalo OA',
                targetUsers: 'Customers buying/selling/repairing iPhone, iPad, MacBook',
                duration: '4-6 weeks'
            },
            overview: 'The AI Chatbot for Shop Apple 123 is built to optimize sales and customer service automation on messaging platforms. The system goes beyond regular text responses by integrating advanced AI technologies like image recognition (Vision AI) and data extraction (OCR) to handle complex operations such as installment plans and used device valuation.\n\nWith the goal of improving conversion rates and reducing staff workload, this solution delivers accurate product specifications, real-time pricing, and transparent trade-in processes. The system ensures seamless handover between AI and human agents through instant notifications and smart conversation transfer.',
            features: [
                { title: 'Product Lookup & Smart Pricing', description: 'Auto-update and accurately quote iPhone, iPad, MacBook prices by configuration. Support product comparisons and budget-based recommendations.' },
                { title: 'iPhone Recognition via Image (AI Vision)', description: 'Auto-detect device model, color, and condition when customers send photos. Combine with database to provide estimated trade-in price.' },
                { title: 'Auto Installment Calculator', description: 'Interest rate tables for different terms (6, 9, 12 months). Recommend partner financial companies or banks with lowest rates.' },
                { title: 'ID Card Recognition & Processing (AI OCR)', description: 'Auto-read data from ID card photos for preliminary installment applications (Name, DOB, ID number). Process data with security compliance.' },
                { title: 'Trade-in Process (Trade-in)', description: 'Chatbot guides customers through device condition checks (screen, battery, iCloud). Provide estimated trade-in price and upgrade cost difference.' },
                { title: 'Warranty & Repair Management', description: 'Customers enter IMEI to check warranty status. Accept device issues, quote parts, and schedule appointments at nearest branch.' },
                { title: 'Customer Info Collection (Lead Gen)', description: 'Collect phone number, address, and purchase needs naturally in conversation. Auto-tag customers (New buyer, Repair, Installment).' },
                { title: 'Multimedia Content Distribution', description: 'Send product photo albums (multiple angles). Support sending test videos or quick user guides.' },
                { title: 'Message Grouping & Human Handover', description: 'Summarize main content before transferring to staff. Smart Stop: Auto-pause AI when staff enters chat to avoid conflicts.' },
                { title: 'Telegram Real-time Notifications', description: 'Instant alerts to Telegram group when customers leave phone numbers or need urgent support. Daily sales/message count reports via Telegram bot.' }
            ]
        }
    },
    {
        id: 'tpbank-automation',
        title: 'AI Agent Appointment Management (TP Bank)',
        category: 'AI Agent Management',
        image: '/images/projects/automation.png',
        detailImage: '/images/projects/AI_AUTOMATION.png',
        detailImageCaption: 'n8n Automation Workflow Process',
        description: 'Smart AI Agent integrated on Telegram, automating entire meeting scheduling and time management for staff.',
        content: {
            projectInfo: {
                productName: 'AI Agent for All Staff Appointment Management',
                client: 'TP Bank',
                projectType: 'AI Agent Management',
                platform: 'Telegram',
                targetUsers: 'Sales Specialists, Managers (Team Leader/Manager)',
                duration: '3-4 weeks'
            },
            overview: 'Development of a smart AI Agent integrated on Telegram, serving as a powerful virtual assistant for the TP Bank team. The main goal is to automate and optimize time management and scheduling. The Agent understands natural language, helping staff and managers arrange internal meetings and customer appointments quickly. The system ensures synchronization, avoids conflicts, and provides timely reminders.',
            features: [
                { title: 'Personal Schedule Management', description: 'Quick scheduling via chat: Users just send a message (e.g., "Meeting with Mr. Nguyen at 2pm tomorrow at HQ"), AI automatically extracts info and creates the appointment.' },
                { title: 'Team and Department Calendar', description: 'View shared calendars: Managers can request team member availability. Schedule reports: Summary of customer meeting counts by specialist weekly/monthly.' },
                { title: 'Meeting Automation', description: 'Group meeting scheduling: "Schedule team meeting at 9am Monday". AI auto-checks member availability. Auto-invite via Telegram chat. Conflict handling: Auto-alert if key members have conflicts and suggest alternative times.' },
                { title: 'Interaction and Operation', description: '100% Telegram operation: No separate app needed, all actions from creating, inviting, checking schedules done in familiar chat. Natural Language Processing (NLP): Understands everyday commands, no complex syntax needed.' }
            ]
        }
    }
];
