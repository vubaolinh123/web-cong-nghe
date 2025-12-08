// Mock Blog Data
import { Article, Author, Category, Tag } from "./types";

// Authors
export const authors: Author[] = [
  {
    id: "1",
    name: "Nguyễn Văn An",
    avatar: "/images/avatars/author-1.jpg",
    role: "Senior Developer",
    bio: "Chuyên gia phát triển phần mềm với hơn 7 năm kinh nghiệm.",
  },
  {
    id: "2",
    name: "Trần Thị Bình",
    avatar: "/images/avatars/author-2.jpg",
    role: "Tech Lead",
    bio: "Dẫn dắt các dự án công nghệ lớn tại các công ty hàng đầu.",
  },
  {
    id: "3",
    name: "Lê Minh Cường",
    avatar: "/images/avatars/author-3.jpg",
    role: "Cloud Architect",
    bio: "Kiến trúc sư đám mây với chuyên môn về AWS và Azure.",
  },
];

// Categories
export const categories: Category[] = [
  { id: "1", name: "Phát Triển Web", slug: "phat-trien-web", description: "Các bài viết về phát triển web" },
  { id: "2", name: "Trí Tuệ Nhân Tạo", slug: "tri-tue-nhan-tao", description: "AI và Machine Learning" },
  { id: "3", name: "Cloud Computing", slug: "cloud-computing", description: "Điện toán đám mây" },
  { id: "4", name: "Bảo Mật", slug: "bao-mat", description: "An ninh mạng và bảo mật" },
  { id: "5", name: "Mobile", slug: "mobile", description: "Phát triển ứng dụng di động" },
  { id: "6", name: "DevOps", slug: "devops", description: "CI/CD và tự động hóa" },
];

// Tags
export const tags: Tag[] = [
  { id: "1", name: "React", slug: "react" },
  { id: "2", name: "Next.js", slug: "nextjs" },
  { id: "3", name: "TypeScript", slug: "typescript" },
  { id: "4", name: "Node.js", slug: "nodejs" },
  { id: "5", name: "Python", slug: "python" },
  { id: "6", name: "Docker", slug: "docker" },
  { id: "7", name: "Kubernetes", slug: "kubernetes" },
  { id: "8", name: "AWS", slug: "aws" },
  { id: "9", name: "AI", slug: "ai" },
  { id: "10", name: "Machine Learning", slug: "machine-learning" },
];

// Articles - Part 1 (first 5 articles)
export const articles: Article[] = [
  {
    id: "1",
    slug: "huong-dan-xay-dung-ung-dung-nextjs-14",
    title: "Hướng Dẫn Xây Dựng Ứng Dụng Web Hiện Đại với Next.js 14",
    excerpt: "Tìm hiểu cách xây dựng ứng dụng web hiệu suất cao với Next.js 14, App Router và các tính năng mới nhất.",
    content: `## Giới Thiệu

Next.js 14 mang đến nhiều cải tiến đáng kể cho việc phát triển web. Trong bài viết này, chúng ta sẽ tìm hiểu cách tận dụng tối đa framework này.

## App Router

App Router là cách tiếp cận mới trong Next.js 14, cho phép bạn tổ chức ứng dụng theo cách trực quan hơn.

### Cấu trúc thư mục

\`\`\`
app/
├── page.tsx
├── layout.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
\`\`\`

## Server Components

Server Components cho phép render trên server, giảm JavaScript phía client.

## Kết Luận

Next.js 14 là lựa chọn tuyệt vời cho các dự án web hiện đại.`,
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
    author: authors[0],
    publishDate: "2024-12-01",
    category: categories[0],
    tags: [tags[1], tags[2], tags[0]],
    readTime: 8,
    featured: true,
    views: 1250,
  },
  {
    id: "2",
    slug: "ung-dung-ai-trong-doanh-nghiep-2024",
    title: "Ứng Dụng Trí Tuệ Nhân Tạo Trong Doanh Nghiệp Năm 2024",
    excerpt: "Khám phá cách các doanh nghiệp đang tận dụng AI để tối ưu hóa hoạt động và tăng trưởng doanh thu.",
    content: `## AI Đang Thay Đổi Doanh Nghiệp

Trí tuệ nhân tạo không còn là công nghệ của tương lai mà đã trở thành hiện thực.

## Các Ứng Dụng Phổ Biến

### Chatbot và Hỗ Trợ Khách Hàng

AI chatbot có thể xử lý hàng nghìn yêu cầu cùng lúc.

### Phân Tích Dữ Liệu

Machine Learning giúp phát hiện pattern trong dữ liệu lớn.

## Kết Luận

Đầu tư vào AI là đầu tư cho tương lai.`,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    author: authors[1],
    publishDate: "2024-11-28",
    category: categories[1],
    tags: [tags[8], tags[9]],
    readTime: 6,
    featured: true,
    views: 980,
  },
  {
    id: "3",
    slug: "aws-cloud-architecture-best-practices",
    title: "Best Practices Kiến Trúc Cloud trên AWS",
    excerpt: "Hướng dẫn thiết kế kiến trúc cloud scalable và cost-effective trên Amazon Web Services.",
    content: `## Nguyên Tắc Thiết Kế

### Well-Architected Framework

AWS cung cấp framework với 5 trụ cột chính.

## Kết Luận

Áp dụng best practices giúp tiết kiệm chi phí và tăng hiệu suất.`,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    author: authors[2],
    publishDate: "2024-11-25",
    category: categories[2],
    tags: [tags[7], tags[6]],
    readTime: 10,
    views: 756,
  },
  {
    id: "4",
    slug: "bao-mat-ung-dung-web-2024",
    title: "Bảo Mật Ứng Dụng Web: Hướng Dẫn Toàn Diện 2024",
    excerpt: "Các phương pháp bảo mật ứng dụng web từ cơ bản đến nâng cao, bảo vệ dữ liệu người dùng.",
    content: `## Các Mối Đe Dọa Phổ Biến

### SQL Injection

Luôn sử dụng parameterized queries.

### XSS Attacks

Escape tất cả user input trước khi render.

## Kết Luận

Bảo mật là trách nhiệm của mọi developer.`,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    author: authors[0],
    publishDate: "2024-11-20",
    category: categories[3],
    tags: [tags[2], tags[3]],
    readTime: 12,
    views: 890,
  },
  {
    id: "5",
    slug: "react-native-vs-flutter-2024",
    title: "React Native vs Flutter: So Sánh Chi Tiết 2024",
    excerpt: "Phân tích ưu nhược điểm của hai framework phát triển mobile phổ biến nhất hiện nay.",
    content: `## Giới Thiệu

Cả React Native và Flutter đều là lựa chọn tuyệt vời cho cross-platform development.

## Kết Luận

Lựa chọn phụ thuộc vào nhu cầu dự án cụ thể.`,
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    author: authors[1],
    publishDate: "2024-11-15",
    category: categories[4],
    tags: [tags[0]],
    readTime: 7,
    views: 1100,
  },
  {
    id: "6",
    slug: "docker-kubernetes-cho-nguoi-moi-bat-dau",
    title: "Docker và Kubernetes: Hướng Dẫn Cho Người Mới Bắt Đầu",
    excerpt: "Học cách containerize ứng dụng và deploy lên Kubernetes cluster một cách dễ dàng.",
    content: `## Docker Là Gì?

Docker cho phép đóng gói ứng dụng cùng dependencies vào container.

## Kubernetes Orchestration

Kubernetes quản lý việc deploy và scale containers.

## Kết Luận

Container là tương lai của deployment.`,
    thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800",
    author: authors[2],
    publishDate: "2024-11-10",
    category: categories[5],
    tags: [tags[5], tags[6]],
    readTime: 9,
    views: 670,
  },
  {
    id: "7",
    slug: "typescript-advanced-patterns",
    title: "TypeScript Advanced Patterns: Nâng Cao Kỹ Năng Lập Trình",
    excerpt: "Khám phá các pattern nâng cao trong TypeScript để viết code type-safe và maintainable.",
    content: `## Generic Types

Generics cho phép tạo components có thể tái sử dụng.

## Conditional Types

TypeScript hỗ trợ conditional logic trong type definitions.

## Kết Luận

Mastering TypeScript giúp giảm bugs đáng kể.`,
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    author: authors[0],
    publishDate: "2024-11-05",
    category: categories[0],
    tags: [tags[2]],
    readTime: 11,
    views: 820,
  },
  {
    id: "8",
    slug: "machine-learning-python-tutorial",
    title: "Xây Dựng Model Machine Learning Đầu Tiên với Python",
    excerpt: "Hướng dẫn từng bước xây dựng và train model ML sử dụng Python và scikit-learn.",
    content: `## Chuẩn Bị Dữ Liệu

Data preprocessing là bước quan trọng nhất.

## Training Model

Sử dụng scikit-learn để train model đơn giản.

## Kết Luận

ML accessible hơn bao giờ hết với Python.`,
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    author: authors[1],
    publishDate: "2024-10-30",
    category: categories[1],
    tags: [tags[4], tags[9]],
    readTime: 14,
    views: 950,
  },
  {
    id: "9",
    slug: "microservices-architecture-guide",
    title: "Microservices Architecture: Hướng Dẫn Thiết Kế và Triển Khai",
    excerpt: "Tìm hiểu cách thiết kế, phát triển và deploy microservices cho ứng dụng enterprise.",
    content: `## Khi Nào Nên Dùng Microservices?

Không phải mọi ứng dụng đều cần microservices.

## Communication Patterns

REST, gRPC, và message queues.

## Kết Luận

Microservices phù hợp với các ứng dụng phức tạp.`,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    author: authors[2],
    publishDate: "2024-10-25",
    category: categories[5],
    tags: [tags[5], tags[3]],
    readTime: 13,
    views: 780,
  },
  {
    id: "10",
    slug: "nodejs-performance-optimization",
    title: "Tối Ưu Hiệu Suất Node.js: Tips và Best Practices",
    excerpt: "Các kỹ thuật tối ưu hóa để ứng dụng Node.js chạy nhanh hơn và sử dụng ít tài nguyên hơn.",
    content: `## Event Loop

Hiểu event loop là chìa khóa để optimize Node.js.

## Memory Management

Tránh memory leaks với proper cleanup.

## Kết Luận

Node.js có thể rất nhanh nếu được optimize đúng cách.`,
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
    author: authors[0],
    publishDate: "2024-10-20",
    category: categories[0],
    tags: [tags[3]],
    readTime: 8,
    views: 620,
  },
  {
    id: "11",
    slug: "cicd-pipeline-github-actions",
    title: "Xây Dựng CI/CD Pipeline với GitHub Actions",
    excerpt: "Tự động hóa quy trình build, test và deploy với GitHub Actions.",
    content: `## GitHub Actions Basics

Workflows, jobs, và steps.

## Deployment Automation

Auto deploy khi push to main branch.

## Kết Luận

CI/CD giúp ship code nhanh và an toàn hơn.`,
    thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800",
    author: authors[1],
    publishDate: "2024-10-15",
    category: categories[5],
    tags: [tags[5]],
    readTime: 6,
    views: 540,
  },
  {
    id: "12",
    slug: "api-design-best-practices",
    title: "Thiết Kế RESTful API: Best Practices và Common Mistakes",
    excerpt: "Hướng dẫn thiết kế API chuẩn REST, dễ sử dụng và dễ maintain.",
    content: `## RESTful Principles

Resource-based URLs và HTTP methods.

## Error Handling

Consistent error responses với proper status codes.

## Kết Luận

Good API design = Happy developers.`,
    thumbnail: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800",
    author: authors[2],
    publishDate: "2024-10-10",
    category: categories[0],
    tags: [tags[3], tags[2]],
    readTime: 7,
    views: 710,
  },
];

// Helper functions
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((article) => article.category.slug === categorySlug);
}

export function getArticlesByTag(tagSlug: string): Article[] {
  return articles.filter((article) =>
    article.tags.some((tag) => tag.slug === tagSlug)
  );
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getRelatedArticles(article: Article, limit: number = 4): Article[] {
  return articles
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.category.id === article.category.id ||
          a.tags.some((tag) => article.tags.some((t) => t.id === tag.id)))
    )
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.name.toLowerCase().includes(lowerQuery))
  );
}

export function paginateArticles(
  articleList: Article[],
  page: number,
  itemsPerPage: number = 6
) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = articleList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(articleList.length / itemsPerPage);

  return {
    items: paginatedItems,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems: articleList.length,
      itemsPerPage,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
}

