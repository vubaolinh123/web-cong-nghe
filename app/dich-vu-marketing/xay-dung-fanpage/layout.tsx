import { Metadata } from "next";
import { siteConfig, pageSEO } from "@/lib/seo";

export const metadata: Metadata = {
    title: `${pageSEO.fanpageBuilding.title} | ${siteConfig.name}`,
    description: pageSEO.fanpageBuilding.description,
    keywords: pageSEO.fanpageBuilding.keywords,
    openGraph: {
        title: `${pageSEO.fanpageBuilding.title} | ${siteConfig.name}`,
        description: pageSEO.fanpageBuilding.description,
        url: `${siteConfig.url}/dich-vu-marketing/xay-dung-fanpage`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: pageSEO.fanpageBuilding.title,
        description: pageSEO.fanpageBuilding.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/dich-vu-marketing/xay-dung-fanpage`,
    },
};

export default function FanpageBuildingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
