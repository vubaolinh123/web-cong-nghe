"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { Article } from "@/lib/blog/types";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
  index?: number;
}

export default function ArticleCard({
  article,
  variant = "default",
  index = 0,
}: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700"
      >
        <Link href={`/bai-viet/${article.slug}`} className="block">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                {article.category.name}
              </span>
              <h2 className="mb-3 text-2xl font-bold text-white md:text-4xl">
                {article.title}
              </h2>
              <p className="mb-4 line-clamp-2 text-gray-200 md:text-lg">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-600">
                    <User className="absolute inset-0 m-auto h-5 w-5" />
                  </div>
                  <span>{article.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} phút đọc</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group flex gap-4"
      >
        <Link
          href={`/bai-viet/${article.slug}`}
          className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg"
        >
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="80px"
          />
        </Link>
        <div className="flex flex-col justify-center">
          <Link href={`/bai-viet/${article.slug}`}>
            <h3 className="line-clamp-2 font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
              {article.title}
            </h3>
          </Link>
          <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
            <span>{formatDate(article.publishDate)}</span>
            <span>•</span>
            <span>{article.readTime} phút</span>
          </div>
        </div>
      </motion.article>
    );
  }

  // Default variant
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <Link
        href={`/bai-viet/${article.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
            {article.category.name}
          </span>
        </div>
      </Link>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.id}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <Link href={`/bai-viet/${article.slug}`}>
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
            {article.title}
          </h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200">
              <User className="absolute inset-0 m-auto h-5 w-5 text-gray-500" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {article.author.name}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{formatDate(article.publishDate)}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}p
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

