import { Metadata } from "next";
import { siteConfig, pageSEO } from "@/lib/seo";

export const metadata: Metadata = {
    title: `${pageSEO.groupBuilding.title} | ${siteConfig.name}`,
    description: pageSEO.groupBuilding.description,
    keywords: pageSEO.groupBuilding.keywords,
    openGraph: {
        title: `${pageSEO.groupBuilding.title} | ${siteConfig.name}`,
        description: pageSEO.groupBuilding.description,
        url: `${siteConfig.url}/dich-vu-marketing/xay-dung-group-facebook`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: pageSEO.groupBuilding.title,
        description: pageSEO.groupBuilding.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/dich-vu-marketing/xay-dung-group-facebook`,
    },
};

export default function GroupBuildingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
