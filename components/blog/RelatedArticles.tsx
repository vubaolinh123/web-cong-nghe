"use client";

import { motion } from "framer-motion";
import { Article } from "@/lib/blog/types";
import ArticleCard from "./ArticleCard";

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

export default function RelatedArticles({
  articles,
  title = "Bài viết liên quan",
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.slice(0, 4).map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="default"
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

