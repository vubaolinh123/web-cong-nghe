"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { Linkedin } from "lucide-react";
import Container from "./Container";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100087853460884", label: "Facebook" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    marketingServices: [
      { name: "Marketing Tổng Thể", href: "/dich-vu-marketing/marketing-tong-the" },
      { name: "Xây Group", href: "/dich-vu-marketing/xay-dung-group-facebook" },
      { name: "Xây Kênh", href: "/dich-vu-marketing/xay-dung-fanpage" },
      { name: "Livestream TikTok", href: "/dich-vu-marketing/xay-dung-tiktok-shop" },
    ],
    techServices: [
      { name: "Custom Website", href: "/dich-vu-cong-nghe" },
      { name: "Low Code Automation", href: "/dich-vu-cong-nghe" },
      { name: "AI Chatbot", href: "/dich-vu-cong-nghe" },
      { name: "AI Agent", href: "/dich-vu-cong-nghe" },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <Container>
        <div className="py-10 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/image/logo.png"
                alt="ASI EVEREST logo"
                width={200}
                height={72}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="space-y-3">
              <a href={`mailto:${t("footer.contact.email")}`} className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={18} />
                <span>{t("footer.contact.email")}</span>
              </a>
              <a href={`tel:${t("footer.contact.phone").replace(/\./g, "")}`} className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Phone size={18} />
                <span>{t("footer.contact.phone")}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>{t("footer.contact.address")}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock size={18} />
                <span>{t("footer.contact.businessHours")}</span>
              </div>
            </div>
          </div>

          {/* Marketing Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.marketingServicesTitle")}</h4>
            <ul className="space-y-2">
              {footerLinks.marketingServices.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-green-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.techServicesTitle")}</h4>
            <ul className="space-y-2">
              {footerLinks.techServices.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm">
              {t("footer.copyright")}
            </p>
            <p className="text-slate-600 text-xs mt-1">
              {t("footer.companyInfo")}
            </p>
          </div>
          <div className="flex items-center gap-4">
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
        </div>
      </Container>
    </footer>
  );
}
