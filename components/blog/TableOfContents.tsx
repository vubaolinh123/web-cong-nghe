"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";
import { HeadingItem } from "@/lib/blog/types";

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
	const headings = useMemo<HeadingItem[]>(() => {
	  	// Parse headings from markdown content in a pure way
	  	const headingRegex = /^(#{2,3})\s+(.+)$/gm;
	  	const matches: HeadingItem[] = [];
	  	let match: RegExpExecArray | null;

	  	while ((match = headingRegex.exec(content)) !== null) {
	  	  const level = match[1].length;
	  	  const text = match[2];
	  	  const id = text
	  	    .toLowerCase()
	  	    .replace(/[^\w\s-]/g, "")
	  	    .replace(/\s+/g, "-");
	  	  matches.push({ id, text, level });
	  	}

	  	return matches;
	}, [content]);
	  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length < 3) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="sticky top-24 rounded-xl border border-gray-200 bg-white p-5"
    >
      <div className="mb-4 flex items-center gap-2">
        <List className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">Mục lục</h3>
      </div>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full text-left text-sm transition-colors ${
                activeId === heading.id
                  ? "font-medium text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

