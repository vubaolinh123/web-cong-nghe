"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  articles,
  categories,
  tags,
  getFeaturedArticles,
  paginateArticles,
} from "@/lib/blog";
import { ArticleCard, ArticleFilters, Pagination } from "@/components/blog";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function BlogListingClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const featuredArticles = getFeaturedArticles();

  // Filter articles based on selected filters
  const filteredArticles = useMemo(() => {
    let result = [...articles];

    if (selectedCategory) {
      result = result.filter(
        (article) => article.category.slug === selectedCategory
      );
    }

    if (selectedTag) {
      result = result.filter((article) =>
        article.tags.some((tag) => tag.slug === selectedTag)
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.name.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedCategory, selectedTag, searchQuery]);

  // Paginate filtered articles
  const { items: paginatedArticles, pagination } = paginateArticles(
    filteredArticles,
    currentPage,
    6
  );

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Blog Công Nghệ
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-blue-100 md:text-xl">
              Khám phá các bài viết về công nghệ, hướng dẫn lập trình, và xu
              hướng mới nhất trong ngành IT
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && !selectedCategory && !selectedTag && !searchQuery && (
        <section className="container mx-auto -mt-12 px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {featuredArticles.slice(0, 2).map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="featured"
                index={index}
              />
            ))}
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        {/* Filters */}
        <ArticleFilters
          categories={categories}
          tags={tags}
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          searchQuery={searchQuery}
          onCategoryChange={handleCategoryChange}
          onTagChange={handleTagChange}
          onSearchChange={handleSearchChange}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Hiển thị {paginatedArticles.length} trong số {filteredArticles.length} bài viết
          </p>
        </div>

        {/* Articles Grid */}
        {paginatedArticles.length > 0 ? (
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-500">
              Không tìm thấy bài viết nào phù hợp với bộ lọc của bạn.
            </p>
          </div>
        )}

        {/* Pagination */}
        <Pagination pagination={pagination} onPageChange={setCurrentPage} />
        </section>
      </main>
      <Footer />
    </>
  );
}

