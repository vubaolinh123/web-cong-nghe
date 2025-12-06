// JSON-LD Structured Data for SEO

import { siteConfig } from "./config";

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    "https://facebook.com/techvisionpro",
    "https://linkedin.com/company/techvisionpro",
    "https://twitter.com/techvisionpro",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84-123-456-789",
    contactType: "customer service",
    availableLanguage: ["Vietnamese", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Nguyễn Huệ",
    addressLocality: "Quận 1",
    addressRegion: "TP. Hồ Chí Minh",
    postalCode: "700000",
    addressCountry: "VN",
  },
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Technology Services",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  areaServed: {
    "@type": "Country",
    name: "Vietnam",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dịch Vụ Công Nghệ",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Phát Triển Phần Mềm",
          description: "Xây dựng phần mềm tùy chỉnh theo yêu cầu doanh nghiệp",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tư Vấn IT",
          description: "Tư vấn chiến lược công nghệ thông tin",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chuyển Đổi Số",
          description: "Giải pháp chuyển đổi số toàn diện",
        },
      },
    ],
  },
};

// Helper function to generate JSON-LD script
export function generateJsonLd(schema: object): string {
  return JSON.stringify(schema);
}

// Combined schemas for homepage
export const homePageSchemas = [organizationSchema, websiteSchema, serviceSchema];

