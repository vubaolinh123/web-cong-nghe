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
      { name: t("footer.marketingServices.facebookAds"), href: "#marketing-services" },
      { name: t("footer.marketingServices.fanpageManagement"), href: "#marketing-services" },
      { name: t("footer.marketingServices.tiktokShop"), href: "#marketing-services" },
      { name: t("footer.marketingServices.websiteDesign"), href: "#marketing-services" },
      { name: t("footer.marketingServices.fanpageTrading"), href: "#marketing-services" },
      { name: t("footer.marketingServices.contentDistribution"), href: "#marketing-services" },
    ],
    techServices: [
      { name: t("footer.techServices.webDev"), href: "#services" },
      { name: t("footer.techServices.mobile"), href: "#services" },
      { name: t("footer.techServices.cloud"), href: "#services" },
      { name: t("footer.techServices.ai"), href: "#services" },
      { name: t("footer.techServices.consulting"), href: "#services" },
    ],
    company: [
      { name: t("footer.company.about"), href: "#about" },
      { name: t("footer.company.team"), href: "#" },
      { name: t("footer.company.careers"), href: "#" },
      { name: t("footer.company.blog"), href: "/bai-viet" },
      { name: t("footer.company.contact"), href: "/lien-he" },
    ],
    support: [
      { name: t("footer.support.helpCenter"), href: "#" },
      { name: t("footer.support.documentation"), href: "#" },
      { name: t("footer.support.privacy"), href: "#" },
      { name: t("footer.support.terms"), href: "#" },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/image/logo.png"
                alt="ASI EVEREST logo"
                width={180}
                height={64}
                className="h-12 w-auto object-contain"
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

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.companyTitle")}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.supportTitle")}</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
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
