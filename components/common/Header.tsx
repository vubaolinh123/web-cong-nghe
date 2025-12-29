"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Megaphone, Code2 } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface ServiceItem {
  name: string;
  href: string;
  icon: any; // using any for Lucide icon component type simplicity
  description: string;
  color: string;
  children?: {
    name: string;
    href: string;
  }[];
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // State for mobile nested menus
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState<string | null>(null);

  // State for desktop nested menus (hover)
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const servicesSubMenu: ServiceItem[] = [
    {
      name: "Marketing Online",
      href: "/dich-vu-marketing",
      icon: Megaphone,
      description: "Facebook Ads, TikTok, Fanpage",
      color: "text-green-400",
      children: [
        { name: "Marketing Tổng Thể", href: "/dich-vu-marketing/marketing-tong-the" },
        { name: "Group Facebook", href: "/dich-vu-marketing/xay-dung-group-facebook" },
        { name: "Fanpage", href: "/dich-vu-marketing/xay-dung-fanpage" },
        { name: "TikTok Shop", href: "/dich-vu-marketing/xay-dung-tiktok-shop" },
      ]
    },
    {
      name: "Gia Công Công Nghệ",
      href: "/dich-vu-cong-nghe",
      icon: Code2,
      description: "Web, Mobile App, AI & Cloud",
      color: "text-cyan-400",
      children: [
        { name: "Web App", href: "/dich-vu-cong-nghe" },
        { name: "App Mobile", href: "/dich-vu-cong-nghe" },
        { name: "AI", href: "/dich-vu-cong-nghe" },
      ]
    },
  ];

  const navItems = [
    { name: t('nav.blog'), href: "/bai-viet" },
    { name: t('nav.about'), href: "/#about" },
    { name: t('nav.contact'), href: "/lien-he" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
        setHoveredService(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to toggle mobile sub-menu
  const toggleMobileSubMenu = (name: string) => {
    setActiveMobileSubMenu(activeMobileSubMenu === name ? null : name);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/10"
        : "bg-slate-900/70 backdrop-blur-sm"
        }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-15">
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
                Marketing & Technology
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Home Link */}
            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="/"
                className="text-slate-300 hover:text-white transition-colors font-medium"
                suppressHydrationWarning
              >
                {t('nav.home')}
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => {
                setIsServicesDropdownOpen(false);
                setHoveredService(null);
              }}
            >
              <motion.button
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {t('nav.services')}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 py-3 bg-slate-800/95 backdrop-blur-lg border border-slate-700 rounded-xl shadow-xl"
                  >
                    {servicesSubMenu.map((service, index) => (
                      <div
                        key={index}
                        className="relative group/item"
                        onMouseEnter={() => setHoveredService(service.name)}
                      // clearing hovered service handled by parent mouse leave
                      >
                        <div
                          className="flex items-center justify-between px-4 py-3 hover:bg-slate-700/50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            {/* If item has children, default link behavior might just be toggle, but user requested link to main page too? 
                                User Requirement: "if click marketing online opens 4 sub items". 
                                Usually on desktop click navigates, hover opens. 
                                Let's keep the Link wrapper but ensure the layout supports the hover flyout. 
                             */}
                            <Link href={service.href} className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center ${service.color} group-hover/item:scale-110 transition-transform`}>
                                <service.icon size={20} />
                              </div>
                              <div>
                                <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-xs text-slate-400">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          </div>
                          {service.children && (
                            <ChevronRight size={16} className="text-slate-500 group-hover/item:text-white" />
                          )}
                        </div>

                        {/* Nested Flyout Menu */}
                        {service.children && hoveredService === service.name && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-0 left-full ml-2 w-64 py-2 bg-slate-800/95 backdrop-blur-lg border border-slate-700 rounded-xl shadow-xl"
                          >
                            {service.children.map((child, idx) => (
                              <Link
                                key={idx}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Items */}
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
              <div className="py-6 space-y-2">
                {/* Home */}
                <Link
                  href="/"
                  className="block text-slate-300 hover:text-white py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-slate-300 hover:text-white py-2 font-medium"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  >
                    <span>{t('nav.services')}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-2">
                          {servicesSubMenu.map((service, index) => (
                            <div key={index}>
                              {/* Parent Service Item */}
                              <div className="flex items-center justify-between group">
                                <Link
                                  href={service.href}
                                  className="flex items-center gap-3 py-2 flex-1"
                                  onClick={() => {
                                    if (!service.children) {
                                      setIsMobileMenuOpen(false);
                                      setIsMobileServicesOpen(false);
                                    }
                                  }}
                                >
                                  <service.icon size={18} className={service.color} />
                                  <div>
                                    <div className="text-slate-300 group-hover:text-white transition-colors">
                                      {service.name}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                      {service.description}
                                    </div>
                                  </div>
                                </Link>
                                {service.children && (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toggleMobileSubMenu(service.name);
                                    }}
                                    className="p-2 text-slate-400 hover:text-white"
                                  >
                                    <ChevronDown size={16} className={`transition-transform duration-200 ${activeMobileSubMenu === service.name ? "rotate-180" : ""}`} />
                                  </button>
                                )}
                              </div>

                              {/* Mobile Nested Menu */}
                              <AnimatePresence>
                                {service.children && activeMobileSubMenu === service.name && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden border-l border-slate-700 ml-4 pl-4"
                                  >
                                    {service.children.map((child, idx) => (
                                      <Link
                                        key={idx}
                                        href={child.href}
                                        className="block py-2 text-sm text-slate-400 hover:text-white transition-colors"
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setIsMobileServicesOpen(false);
                                        }}
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Nav Items */}
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
