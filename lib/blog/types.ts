// Blog/Article TypeScript Interfaces

export interface Author {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: Author;
  publishDate: string;
  modifiedDate?: string;
  category: Category;
  tags: Tag[];
  readTime: number; // in minutes
  featured?: boolean;
  views?: number;
}

export interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

export interface ArticleFilters {
  category?: string;
  tag?: string;
  search?: string;
  sortBy?: 'date' | 'views' | 'title';
  sortOrder?: 'asc' | 'desc';
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

// SEO Types for blog pages
export interface ArticleSEO {
  title: string;
  description: string;
  image: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
  author: Author;
  tags: string[];
}

