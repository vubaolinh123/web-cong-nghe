// SEO Configuration for TechServices Website

export const siteConfig = {
	name: "ASI EVEREST",
	description:
		"ASI EVEREST - Giải pháp công nghệ toàn diện cho doanh nghiệp. Chúng tôi cung cấp dịch vụ phát triển phần mềm, tư vấn IT và chuyển đổi số hàng đầu tại Việt Nam.",
	url: "https://techvisionpro.vn",
  ogImage: "/og-image.jpg",
  keywords: [
    "dịch vụ công nghệ",
    "phát triển phần mềm",
    "tư vấn IT",
    "chuyển đổi số",
    "technology services",
    "software development",
    "IT consulting",
    "digital transformation",
    "web development",
    "mobile app development",
    "cloud services",
    "AI solutions"
	  ],
	  author: "ASI EVEREST",
	  twitterHandle: "@techvisionpro",
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
    title: "Trang Chủ | Dịch Vụ Công Nghệ Số 1 Việt Nam",
	  description:
			"ASI EVEREST - Đối tác công nghệ tin cậy của bạn. Chúng tôi cung cấp giải pháp phần mềm, tư vấn IT và dịch vụ chuyển đổi số cho doanh nghiệp.",
  },
  services: {
    title: "Dịch Vụ | Giải Pháp Công Nghệ Toàn Diện",
    description: "Khám phá các dịch vụ công nghệ của chúng tôi: phát triển web, ứng dụng di động, cloud computing, AI/ML, và tư vấn chuyển đổi số.",
  },
  about: {
    title: "Về Chúng Tôi | Đội Ngũ Chuyên Gia Công Nghệ",
	  description:
			"Tìm hiểu về ASI EVEREST - đội ngũ chuyên gia công nghệ với hơn 7 năm kinh nghiệm trong ngành IT.",
  },
  contact: {
    title: "Liên Hệ | Tư Vấn Miễn Phí",
    description: "Liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp công nghệ phù hợp cho doanh nghiệp của bạn.",
  },
};

