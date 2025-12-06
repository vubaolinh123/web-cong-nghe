"use client";

import { useMemo } from "react";

interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  const htmlContent = useMemo(() => {
    // Simple markdown to HTML conversion
    let html = content;

    // Convert code blocks with syntax highlighting class
    html = html.replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      (_, lang, code) => {
        const language = lang || "plaintext";
        return `<pre class="code-block" data-language="${language}"><code class="language-${language}">${escapeHtml(code.trim())}</code></pre>`;
      }
    );

    // Convert inline code
    html = html.replace(
      /`([^`]+)`/g,
      '<code class="inline-code">$1</code>'
    );

    // Convert headings with IDs for TOC
    html = html.replace(/^### (.+)$/gm, (_, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return `<h3 id="${id}" class="article-h3">${text}</h3>`;
    });

    html = html.replace(/^## (.+)$/gm, (_, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return `<h2 id="${id}" class="article-h2">${text}</h2>`;
    });

    // Convert bold and italic
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // Convert links
    html = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="article-link" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Convert paragraphs (lines separated by double newlines)
    html = html
      .split(/\n\n+/)
      .map((block) => {
        block = block.trim();
        if (
          block.startsWith("<h") ||
          block.startsWith("<pre") ||
          block.startsWith("<ul") ||
          block.startsWith("<ol")
        ) {
          return block;
        }
        if (block) {
          return `<p class="article-p">${block.replace(/\n/g, "<br>")}</p>`;
        }
        return "";
      })
      .join("\n");

    return html;
  }, [content]);

  return (
    <div
      className="article-content prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

