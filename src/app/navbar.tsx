"use client";

import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./theme-provider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const closed = sessionStorage.getItem("popupBannerClosed");
    setBannerVisible(!closed);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${bannerVisible ? "top-[40px] sm:top-[44px]" : "top-0"}`}
        style={{ background: "#ffffff", borderColor: "rgba(92,31,104,0.15)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">

            {/* Logo */}
            <motion.a href="/" className="flex items-center gap-3 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="relative h-20 w-20 sm:h-28 sm:w-28">
                <Image src="/logo.png" alt="LeSgo Logo" fill className="object-contain" priority />
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a key={link.label} href={link.href}
                  className="relative group font-medium transition-colors"
                  style={{ color: "#3b0764" }}
                  whileHover={{ y: -2 }}>
                  {link.label}
                  <motion.div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#a855f7] to-[#e054f1]"
                    initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.3 }} />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl border transition-all duration-300"
                style={{ background: "rgba(92,31,104,0.06)", borderColor: "rgba(92,31,104,0.15)", color: "#3b0764" }}
                aria-label="Toggle theme"
              >
                {theme === "dark"
                  ? <Sun className="h-4 w-4 text-[#f59e0b]" />
                  : <Moon className="h-4 w-4 text-[#5C1F68]" />
                }
              </motion.button>

              {/* CTA */}
              <motion.a href="#download"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#e054f1] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#e054f1]/40 transition-all"
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                Download App
              </motion.a>

              {/* Mobile menu button */}
              <motion.button onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ color: "#3b0764" }}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Nav */}
          <motion.div initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }} className="md:hidden overflow-hidden">
            <div className="flex flex-col gap-4 pb-4 pt-2 px-2 rounded-xl mb-3"
              style={{ background: "var(--nav-mobile-bg)" }}>
              {navLinks.map((link) => (
                <motion.a key={link.label} href={link.href} onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg font-medium transition-colors"
                  style={{ color: "#3b0764" }}
                  whileHover={{ x: 4 }}>
                  {link.label}
                </motion.a>
              ))}
              <motion.a href="#download" onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#e054f1] text-white font-semibold text-center"
                whileHover={{ scale: 1.02 }}>
                Download App
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className={`${bannerVisible ? "h-[100px] sm:h-[108px]" : "h-20 sm:h-24"}`} />
    </>
  );
}
