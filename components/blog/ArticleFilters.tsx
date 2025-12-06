"use client";

import { useState } from "react";
import { Search, X, Filter } from "lucide-react";
import { Category, Tag } from "@/lib/blog/types";

interface ArticleFiltersProps {
  categories: Category[];
  tags: Tag[];
  selectedCategory: string | null;
  selectedTag: string | null;
  searchQuery: string;
  onCategoryChange: (category: string | null) => void;
  onTagChange: (tag: string | null) => void;
  onSearchChange: (query: string) => void;
}

export default function ArticleFilters({
  categories,
  tags,
  selectedCategory,
  selectedTag,
  searchQuery,
  onCategoryChange,
  onTagChange,
  onSearchChange,
}: ArticleFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters = selectedCategory || selectedTag || searchQuery;

  const clearAllFilters = () => {
    onCategoryChange(null);
    onTagChange(null);
    onSearchChange("");
  };

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 rounded-xl border px-4 py-3 font-medium transition-colors ${
            showFilters || hasActiveFilters
              ? "border-blue-500 bg-blue-50 text-blue-600"
              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Filter className="h-5 w-5" />
          <span className="hidden sm:inline">Bộ lọc</span>
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Lọc bài viết</h3>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Xóa tất cả
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-medium text-gray-700">Danh mục</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>
                    onCategoryChange(
                      selectedCategory === category.slug ? null : category.slug
                    )
                  }
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === category.slug
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="mb-2 text-sm font-medium text-gray-700">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() =>
                    onTagChange(selectedTag === tag.slug ? null : tag.slug)
                  }
                  className={`rounded-md px-2.5 py-1 text-sm transition-colors ${
                    selectedTag === tag.slug
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  #{tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && !showFilters && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-500">Đang lọc:</span>
          {selectedCategory && (
            <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              {categories.find((c) => c.slug === selectedCategory)?.name}
              <button onClick={() => onCategoryChange(null)}>
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
          {selectedTag && (
            <span className="flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">
              #{tags.find((t) => t.slug === selectedTag)?.name}
              <button onClick={() => onTagChange(null)}>
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
              &quot;{searchQuery}&quot;
              <button onClick={() => onSearchChange("")}>
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

