import { Metadata } from "next";
import { siteConfig } from "@/lib/seo/config";
import BlogListingClient from "./BlogListingClient";

export const metadata: Metadata = {
  title: "Bài Viết | Blog Công Nghệ",
  description:
    "Khám phá các bài viết về công nghệ, phát triển phần mềm, AI, cloud computing và các xu hướng công nghệ mới nhất.",
  keywords: [
    "blog công nghệ",
    "bài viết IT",
    "tin tức công nghệ",
    "hướng dẫn lập trình",
    "technology blog",
    "tech articles",
  ],
  openGraph: {
    title: "Bài Viết | Blog Công Nghệ - TechVision Pro",
    description:
      "Khám phá các bài viết về công nghệ, phát triển phần mềm, AI, cloud computing và các xu hướng công nghệ mới nhất.",
    url: `${siteConfig.url}/bai-viet`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "TechVision Pro Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bài Viết | Blog Công Nghệ - TechVision Pro",
    description:
      "Khám phá các bài viết về công nghệ, phát triển phần mềm, AI, cloud computing.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/bai-viet`,
  },
};

// JSON-LD Structured Data for Blog
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "TechVision Pro Blog",
  description:
    "Blog về công nghệ, phát triển phần mềm và các xu hướng công nghệ mới nhất",
  url: `${siteConfig.url}/bai-viet`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
    },
  },
  inLanguage: "vi-VN",
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogListingClient />
    </>
  );
}

