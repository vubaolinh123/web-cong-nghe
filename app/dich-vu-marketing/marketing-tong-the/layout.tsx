import { Metadata } from "next";
import { siteConfig, pageSEO } from "@/lib/seo";

export const metadata: Metadata = {
    title: `${pageSEO.marketingFullPackage.title} | ${siteConfig.name}`,
    description: pageSEO.marketingFullPackage.description,
    keywords: pageSEO.marketingFullPackage.keywords,
    openGraph: {
        title: `${pageSEO.marketingFullPackage.title} | ${siteConfig.name}`,
        description: pageSEO.marketingFullPackage.description,
        url: `${siteConfig.url}/dich-vu-marketing/marketing-tong-the`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: pageSEO.marketingFullPackage.title,
        description: pageSEO.marketingFullPackage.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/dich-vu-marketing/marketing-tong-the`,
    },
};

export default function MarketingFullPackageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
