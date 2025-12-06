import { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/seo/config";
import ArticleDetailClient from "./ArticleDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Bài viết không tồn tại",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags.map((tag) => tag.name),
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/bai-viet/${article.slug}`,
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.modifiedDate,
      authors: [article.author.name],
      tags: article.tags.map((tag) => tag.name),
      images: [
        {
          url: article.thumbnail,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.thumbnail],
    },
    alternates: {
      canonical: `${siteConfig.url}/bai-viet/${article.slug}`,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 4);

  // JSON-LD Structured Data for Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.thumbnail,
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/bai-viet/${article.slug}`,
    },
    keywords: article.tags.map((tag) => tag.name).join(", "),
    articleSection: article.category.name,
    wordCount: article.content.split(/\s+/).length,
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bài viết",
        item: `${siteConfig.url}/bai-viet`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/bai-viet/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleDetailClient article={article} relatedArticles={relatedArticles} />
    </>
  );
}

