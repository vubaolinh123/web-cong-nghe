import { Metadata } from "next";
import { siteConfig, pageSEO } from "@/lib/seo";

export const metadata: Metadata = {
    title: `${pageSEO.tiktokShop.title} | ${siteConfig.name}`,
    description: pageSEO.tiktokShop.description,
    keywords: pageSEO.tiktokShop.keywords,
    openGraph: {
        title: `${pageSEO.tiktokShop.title} | ${siteConfig.name}`,
        description: pageSEO.tiktokShop.description,
        url: `${siteConfig.url}/dich-vu-marketing/xay-dung-tiktok-shop`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: pageSEO.tiktokShop.title,
        description: pageSEO.tiktokShop.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/dich-vu-marketing/xay-dung-tiktok-shop`,
    },
};

export default function TiktokShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
