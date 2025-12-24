export type Language = 'vi' | 'en';

export type TranslationDictionary = {
  nav: {
    home: string;
    services: string;
    blog: string;
    about: string;
    contact: string;
    cta: string;
  };
  common: {
    language: string;
    learnMore: string;
    getStarted: string;
    viewMore: string;
    sendRequest: string;
    tryAgain: string;
    sending: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    subtitle: string;
    subtitleMarketing: string;
    subtitleTechnology: string;
    ctaPrimary: string;
    ctaSecondary: string;
    serviceCards: {
      marketing: { title: string; description: string };
      technology: { title: string; description: string };
    };
    stats: {
      clients: string;
      campaigns: string;
      projects: string;
      support: string;
      satisfaction: string;
    };
  };
  services: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    learnMore: string;
    items: {
      webDev: { title: string; description: string };
      mobile: { title: string; description: string };
      cloud: { title: string; description: string };
      ai: { title: string; description: string };
      security: { title: string; description: string };
      consulting: { title: string; description: string };
    };
  };
  about: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    highlights: string[];
    learnMore: string;
    features: {
      speed: { title: string; description: string };
      team: { title: string; description: string };
      quality: { title: string; description: string };
      cost: { title: string; description: string };
    };
  };
  features: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    items: {
      exclusiveAgency: { title: string; description: string };
      uniqueIdeas: { title: string; description: string };
      qualityPromotion: { title: string; description: string };
      experience: { title: string; description: string };
    };
  };
  partners: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    categories: {
      marketingAgency: string;
      banking: string;
      fnb: string;
      travel: string;
      realEstate: string;
    };
    stats: {
      seoReach: { title: string; description: string };
      conversionRate: { title: string; description: string };
      serviceValue: { title: string; description: string };
      permanentOperation: { title: string; description: string };
    };
  };
  stats: {
    projects: { value: string; label: string; description: string };
    clients: { value: string; label: string; description: string };
    experience: { value: string; label: string; description: string };
    satisfaction: { value: string; label: string; description: string };
  };
  process: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    steps: {
      consulting: { title: string; description: string };
      design: { title: string; description: string };
      development: { title: string; description: string };
      deployment: { title: string; description: string };
      support: { title: string; description: string };
    };
  };
  testimonials: {
    subtitle: string;
    title1: string;
    title2: string;
    items: {
      testimonial1: { content: string; author: string; role: string; company: string };
      testimonial2: { content: string; author: string; role: string; company: string };
      testimonial3: { content: string; author: string; role: string; company: string };
    };
  };
  cta: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  homepageServices: {
    badge: string;
    title: string;
    titleHighlight: string;
    marketing: {
      title: string;
      description: string;
      features: {
        ads: string;
        fanpage: string;
        content: string;
        seo: string;
      };
    };
    tech: {
      title: string;
      description: string;
      features: {
        automation: string;
        chatbot: string;
        custom: string;
        integration: string;
      };
    };
    exploreButton: string;
  };
  whyUs: {
    stats: {
      inVietnam: string;
      support: string;
      efficiency: string;
      yearsExp: string;
    };
  };
  approach: {
    badge: string;
    title: string;
    titleHighlight: string;
    steps: {
      discovery: { subtitle: string; description: string };
      strategy: { subtitle: string; description: string };
      development: { subtitle: string; description: string };
    };
  };
  contactSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    benefits: {
      response: string;
      free: string;
      security: string;
      support: string;
    };
    form: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      jobTitle: string;
      jobTitlePlaceholder: string;
      currentJob: string;
      currentJobPlaceholder: string;
      fanpage: string;
      fanpagePlaceholder: string;
      service: string;
      servicePlaceholder: string;
      specificService: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    success: {
      title: string;
      message: string;
      sendAnother: string;
    };
    error: {
      title: string;
      tryAgain: string;
    };
  };
  footerCta: {
    title: string;
    description: string;
    button: string;
  };
  marketingServices: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    stats: {
      clients: { value: string; label: string };
      campaigns: { value: string; label: string };
      satisfaction: { value: string; label: string };
    };
    items: {
      facebookAds: { title: string; description: string; features: string[] };
      fanpageManagement: { title: string; description: string; features: string[] };
      tiktokShop: { title: string; description: string; features: string[] };
      websiteDesign: { title: string; description: string; features: string[] };
      fanpageTrading: { title: string; description: string; features: string[] };
      contentDistribution: { title: string; description: string; features: string[] };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
    consultButton: string;
  };
  footer: {
    description: string;
    marketingServicesTitle: string;
    techServicesTitle: string;
    companyTitle: string;
    supportTitle: string;
    marketingServices: {
      facebookAds: string;
      fanpageManagement: string;
      tiktokShop: string;
      websiteDesign: string;
      fanpageTrading: string;
      contentDistribution: string;
    };
    techServices: {
      webDev: string;
      mobile: string;
      cloud: string;
      ai: string;
      consulting: string;
    };
    company: {
      about: string;
      team: string;
      careers: string;
      blog: string;
      contact: string;
    };
    support: {
      helpCenter: string;
      documentation: string;
      apiDocs: string;
      privacy: string;
      terms: string;
    };
    contact: {
      email: string;
      phone: string;
      address: string;
      businessHours: string;
    };
    copyright: string;
    companyInfo: string;
  };
  contact: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      service: string;
      servicePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    success: {
      title: string;
      message: string;
      sendAnother: string;
    };
    error: {
      title: string;
      tryAgain: string;
      genericError: string;
    };
    validation: {
      nameRequired: string;
      nameMin: string;
      nameMax: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      phoneInvalid: string;
      serviceRequired: string;
      messageRequired: string;
      messageMin: string;
      messageMax: string;
    };
    serviceOptions: {
      webDev: string;
      mobile: string;
      cloud: string;
      ai: string;
      security: string;
      consulting: string;
      other: string;
    };
  };
  caseStudies: {
    badge: string;
    title: {
      prefix: string;
      highlight: string;
    };
    description: string;
    descriptionValues: {
      roi: string;
      growth: string;
    };
    categories: {
      marketing: { name: string; description: string };
      group: { name: string; description: string };
      fanpage: { name: string; description: string };
      tiktok: { name: string; description: string };
    };
    stats: Array<{
      value: string;
      label: string;
    }>;
    cta: {
      description: string;
      button: string;
    };
  };
};
