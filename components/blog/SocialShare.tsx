"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export default function SocialShare({
  url,
  title,
  description,
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || "");

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const buttonClass =
    "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110";

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-600">Chia sẻ:</span>
      <div className="flex gap-2">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} bg-blue-600 text-white hover:bg-blue-700`}
          aria-label="Chia sẻ trên Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} bg-sky-500 text-white hover:bg-sky-600`}
          aria-label="Chia sẻ trên Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} bg-blue-700 text-white hover:bg-blue-800`}
          aria-label="Chia sẻ trên LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <button
          onClick={copyToClipboard}
          className={`${buttonClass} ${
            copied
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-label="Sao chép liên kết"
        >
          {copied ? (
            <Check className="h-5 w-5" />
          ) : (
            <Link2 className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}

