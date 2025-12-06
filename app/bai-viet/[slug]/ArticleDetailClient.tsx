"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import { Article } from "@/lib/blog/types";
import { siteConfig } from "@/lib/seo/config";
import {
  ReadingProgress,
  SocialShare,
  TableOfContents,
  RelatedArticles,
  ArticleContent,
} from "@/components/blog";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface ArticleDetailClientProps {
  article: Article;
  relatedArticles: Article[];
}

export default function ArticleDetailClient({
  article,
  relatedArticles,
}: ArticleDetailClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const articleUrl = `${siteConfig.url}/bai-viet/${article.slug}`;

  return (
    <>
      <Header />
      <ReadingProgress />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={article.thumbnail}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl"
            >
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center gap-2 text-sm text-gray-300">
                <Link href="/" className="hover:text-white">
                  Trang chủ
                </Link>
                <span>/</span>
                <Link href="/bai-viet" className="hover:text-white">
                  Bài viết
                </Link>
                <span>/</span>
                <span className="text-white">{article.category.name}</span>
              </nav>

              {/* Category Badge */}
              <span className="mb-4 inline-block rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white">
                {article.category.name}
              </span>

              {/* Title */}
              <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="mb-8 text-lg text-gray-200 md:text-xl">
                {article.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-600">
                    <User className="absolute inset-0 m-auto h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{article.author.name}</p>
                    <p className="text-sm">{article.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-5 w-5" />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-5 w-5" />
                  <span>{article.readTime} phút đọc</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_280px]">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-w-0"
            >
              {/* Featured Image */}
              <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Body */}
              <ArticleContent content={article.content} />

              {/* Tags */}
              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-gray-200 pt-8">
                <Tag className="h-5 w-5 text-gray-500" />
                {article.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/bai-viet?tag=${tag.slug}`}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-700"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>

              {/* Social Share */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
                <SocialShare
                  url={articleUrl}
                  title={article.title}
                  description={article.excerpt}
                />
                <Link
                  href="/bai-viet"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Quay lại danh sách
                </Link>
              </div>
            </motion.article>

            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <TableOfContents content={article.content} />
            </aside>
          </div>
        </section>

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </main>
      <Footer />
    </>
  );
}

