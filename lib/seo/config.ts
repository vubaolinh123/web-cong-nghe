// SEO Configuration for TechServices Website

export const siteConfig = {
  name: "ASI EVEREST",
  description:
    "ASI EVEREST - Giải pháp Marketing & Công Nghệ AI toàn diện. Dịch vụ xây dựng Fanpage, TikTok Shop, Group Facebook, Automation & AI Agent cho doanh nghiệp.",
  url: "https://asieverest.vn",
  ogImage: "/og-image.jpg",
  keywords: [
    // Marketing Services
    "dịch vụ marketing",
    "marketing AI",
    "marketing tổng thể",
    "xây dựng fanpage",
    "fanpage bán hàng",
    "TikTok Shop",
    "bán hàng TikTok",
    "group Facebook",
    "cộng đồng khách hàng",
    "quảng cáo Facebook",
    "quảng cáo đa kênh",
    // Technology Services
    "dịch vụ công nghệ",
    "AI automation",
    "tự động hóa doanh nghiệp",
    "chatbot AI",
    "AI agent",
    "RPA",
    "phát triển phần mềm",
    "chuyển đổi số",
    // General
    "ASI EVEREST",
    "digital marketing",
    "software development"
  ],
  author: "ASI EVEREST",
  twitterHandle: "@asieverest",
  locale: "vi_VN",
  themeColor: "#0066FF",
};

export const defaultSEO = {
  title: {
    default: `${siteConfig.name} | Dịch Vụ Công Nghệ Hàng Đầu`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: "Trang Chủ | Giải Pháp Marketing & Công Nghệ AI",
    description:
      "ASI EVEREST - Đối tác Marketing & Công Nghệ tin cậy. Xây dựng Fanpage, TikTok Shop, Group Facebook, Automation & AI Agent cho doanh nghiệp.",
    keywords: ["ASI EVEREST", "marketing AI", "công nghệ AI", "giải pháp doanh nghiệp"],
  },
  services: {
    title: "Dịch Vụ | Giải Pháp Marketing & Công Nghệ Toàn Diện",
    description: "Khám phá dịch vụ của chúng tôi: Marketing đa kênh, xây dựng Fanpage, TikTok Shop, AI Automation, Chatbot và RPA.",
    keywords: ["dịch vụ marketing", "dịch vụ công nghệ", "giải pháp AI"],
  },
  about: {
    title: "Về Chúng Tôi | Đội Ngũ Chuyên Gia Marketing & Công Nghệ",
    description:
      "Tìm hiểu về ASI EVEREST - đội ngũ chuyên gia với hơn 7 năm kinh nghiệm trong Marketing Digital và Công nghệ AI.",
    keywords: ["về ASI EVEREST", "đội ngũ chuyên gia", "kinh nghiệm marketing"],
  },
  contact: {
    title: "Liên Hệ | Tư Vấn Miễn Phí",
    description: "Liên hệ ASI EVEREST để được tư vấn miễn phí về giải pháp Marketing & Công nghệ phù hợp cho doanh nghiệp của bạn.",
    keywords: ["liên hệ", "tư vấn miễn phí", "hotline ASI EVEREST"],
  },

  // Technology Services
  technologyServices: {
    title: "Dịch Vụ AI & Automation | Tự Động Hóa Doanh Nghiệp",
    description: "Giải pháp AI toàn diện: Automation, Chatbot AI, AI Agent, RPA. Tự động hóa quy trình, tăng hiệu suất, giảm chi phí vận hành lên đến 70%.",
    keywords: ["AI automation", "chatbot AI", "AI agent", "RPA", "tự động hóa doanh nghiệp", "giảm chi phí vận hành"],
  },

  // Marketing Services Main Page
  marketingServices: {
    title: "Dịch Vụ Marketing AI | Thu Hút Khách Hàng Tiềm Năng",
    description: "Marketing đa kênh Facebook, TikTok, Fanpage. Xây dựng thương hiệu, có ngay tệp khách hàng tiềm năng với dịch vụ marketing chuyên nghiệp.",
    keywords: ["marketing AI", "marketing Facebook", "marketing TikTok", "xây dựng fanpage", "khách hàng tiềm năng"],
  },

  // Marketing Sub-pages
  marketingFullPackage: {
    title: "Marketing Tổng Thể A-Z | Giải Pháp Marketing Toàn Diện",
    description: "Hệ thống Marketing tổng thể từ chiến lược đến thực thi. Xây dựng thương hiệu, tối ưu quảng cáo đa kênh, tăng doanh thu bền vững cho doanh nghiệp.",
    keywords: ["marketing tổng thể", "marketing A-Z", "chiến lược marketing", "quảng cáo đa kênh", "tăng doanh thu"],
  },
  fanpageBuilding: {
    title: "Xây Dựng Fanpage Nghìn Đơn | Dịch Vụ Fanpage Facebook",
    description: "Dịch vụ setup Fanpage bán hàng chuyên nghiệp. Sở hữu Fanpage nghìn đơn với chi phí tối ưu nhất thị trường, cam kết hiệu quả.",
    keywords: ["xây dựng fanpage", "fanpage bán hàng", "fanpage Facebook", "fanpage nghìn đơn", "setup fanpage"],
  },
  groupBuilding: {
    title: "Xây Dựng Group Facebook | Cộng Đồng Khách Hàng Tiềm Năng",
    description: "Dịch vụ xây dựng và phát triển Group Facebook chất lượng cao. Tạo cộng đồng khách hàng tiềm năng, tăng tương tác và doanh số bán hàng.",
    keywords: ["xây dựng group Facebook", "group bán hàng", "cộng đồng khách hàng", "group tiềm năng"],
  },
  tiktokShop: {
    title: "Xây Dựng TikTok Shop | Bùng Nổ Doanh Số TikTok",
    description: "Dịch vụ setup TikTok Shop chuyên nghiệp. Livestream bán hàng, affiliate marketing, tối ưu thuật toán để bùng nổ doanh số trên TikTok.",
    keywords: ["TikTok Shop", "bán hàng TikTok", "livestream TikTok", "affiliate TikTok", "setup TikTok Shop"],
  },
};
