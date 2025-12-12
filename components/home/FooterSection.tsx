"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100087853460884", label: "Facebook" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function FooterSection() {
  const { t } = useLanguage();

  const footerLinks = {
    marketingServices: [
      { name: t("footer.marketingServices.facebookAds"), href: "/dich-vu/marketing" },
      { name: t("footer.marketingServices.fanpageManagement"), href: "/dich-vu/marketing" },
      { name: t("footer.marketingServices.tiktokShop"), href: "/dich-vu/marketing" },
      { name: t("footer.marketingServices.websiteDesign"), href: "/dich-vu/marketing" },
    ],
    techServices: [
      { name: t("footer.techServices.webDev"), href: "/dich-vu/cong-nghe" },
      { name: t("footer.techServices.mobile"), href: "/dich-vu/cong-nghe" },
      { name: t("footer.techServices.cloud"), href: "/dich-vu/cong-nghe" },
      { name: t("footer.techServices.ai"), href: "/dich-vu/cong-nghe" },
    ],
    company: [
      { name: t("footer.company.about"), href: "/ve-chung-toi" },
      { name: t("footer.company.blog"), href: "/bai-viet" },
      { name: t("footer.company.contact"), href: "/lien-he" },
    ],
  };

  return (
    <section className="relative h-full flex flex-col justify-between bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/50 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Section - Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/image/logo.png"
                  alt="ASI EVEREST logo"
                  width={200}
                  height={72}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                {t("footer.description")}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href={`mailto:${t("footer.contact.email")}`} className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm">{t("footer.contact.email")}</span>
                </a>
                <a href={`tel:${t("footer.contact.phone").replace(/\./g, "")}`} className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <span className="text-sm">{t("footer.contact.phone")}</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm">{t("footer.contact.address")}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Clock size={16} />
                  </div>
                  <span className="text-sm">{t("footer.contact.businessHours")}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Section - Right */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
                {/* Marketing Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    {t("footer.marketingServicesTitle")}
                  </h4>
                  <ul className="space-y-2">
                    {footerLinks.marketingServices.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-slate-400 hover:text-green-400 transition-colors text-sm flex items-center gap-1 group">
                          <span>{link.name}</span>
                          <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tech Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    {t("footer.techServicesTitle")}
                  </h4>
                  <ul className="space-y-2">
                    {footerLinks.techServices.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1 group">
                          <span>{link.name}</span>
                          <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    {t("footer.companyTitle")}
                  </h4>
                  <ul className="space-y-2">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1 group">
                          <span>{link.name}</span>
                          <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* CTA Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 p-5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-slate-800"
              >
                <h4 className="text-white font-semibold mb-2">Bạn cần tư vấn?</h4>
                <p className="text-slate-400 text-sm mb-4">Liên hệ ngay để được hỗ trợ miễn phí từ chuyên gia.</p>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Liên Hệ Ngay
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-slate-500 text-xs text-center sm:text-left">
              {t("footer.copyright")}
            </p>
            <p className="text-slate-600 text-xs text-center sm:text-right">
              {t("footer.companyInfo")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
