import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultSEO, siteConfig } from "@/lib/seo/config";
import { organizationSchema, websiteSchema } from "@/lib/seo/structured-data";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingContactButton from "@/components/common/FloatingContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultSEO.title.default,
    template: defaultSEO.title.template,
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultSEO.title.default,
    description: defaultSEO.description,
    images: [
      {
        url: defaultSEO.openGraph.images[0].url,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title.default,
    description: defaultSEO.description,
    images: [defaultSEO.openGraph.images[0].url],
    creator: defaultSEO.twitter.creator,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/image/logo.png", type: "image/png" },
    ],
    shortcut: "/image/logo.png",
    apple: "/image/logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <CustomCursor />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <FloatingContactButton />
      </body>
    </html>
  );
}
