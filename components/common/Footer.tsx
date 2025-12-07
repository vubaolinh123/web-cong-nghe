"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Github } from "lucide-react";
import Container from "./Container";

const footerLinks = {
  services: [
    { name: "Phát Triển Web", href: "#" },
    { name: "Ứng Dụng Di Động", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "AI & Machine Learning", href: "#" },
    { name: "Tư Vấn IT", href: "#" },
  ],
  company: [
    { name: "Về Chúng Tôi", href: "#about" },
    { name: "Đội Ngũ", href: "#" },
    { name: "Tuyển Dụng", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Liên Hệ", href: "#contact" },
  ],
  support: [
    { name: "Trung Tâm Hỗ Trợ", href: "#" },
    { name: "Tài Liệu", href: "#" },
    { name: "API Docs", href: "#" },
    { name: "Chính Sách Bảo Mật", href: "#" },
    { name: "Điều Khoản Sử Dụng", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "Github" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <Container>
	        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
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
              Đối tác công nghệ tin cậy cho doanh nghiệp. Chúng tôi biến ý tưởng thành giải pháp số xuất sắc.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@asieverest.vn" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={18} />
                <span>contact@asieverest.vn</span>
              </a>
              <a href="tel:+84123456789" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Phone size={18} />
                <span>+84 123 456 789</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                <span>Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white font-semibold mb-4">Dịch Vụ</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Công Ty</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

	        {/* Bottom Section */}
	        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
	          <p className="text-slate-500 text-sm">
	            © 2025 ASI EVEREST. Tất cả quyền được bảo lưu.
	          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
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

