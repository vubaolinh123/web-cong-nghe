"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.services'), href: "/#services" },
    { name: t('nav.blog'), href: "/bai-viet" },
    { name: t('nav.about'), href: "/#about" },
    { name: t('nav.contact'), href: "/lien-he" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-slate-900/70 backdrop-blur-sm"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-24">
          {/* Logo + Brand Name */}
          <motion.a
            href="/"
            aria-label="ASI EVEREST - Trang chủ"
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            {/* Logo Image - Large and Prominent */}
            <Image
              src="/image/logo.png"
              alt="ASI EVEREST logo"
              width={220}
              height={80}
              priority
              className="h-16 sm:h-18 lg:h-20 w-auto object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
            />
            {/* Brand Name Text */}
            <div className="hidden sm:flex flex-col">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent tracking-wide">
                ASI EVEREST
              </span>
              <span className="text-[10px] lg:text-xs text-slate-400 tracking-[0.2em] uppercase">
                Technology Solutions
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/lien-he">
              <Button size="sm">{t('nav.cta')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800"
          >
            <Container>
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-slate-300 hover:text-white py-2 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="py-2">
                  <LanguageSwitcher />
                </div>
                <Link href="/lien-he" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full mt-4">{t('nav.cta')}</Button>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

