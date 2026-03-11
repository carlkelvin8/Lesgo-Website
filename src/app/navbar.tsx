"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white border-b border-gray-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                <Image
                  src="/logo.png"
                  alt="LeSgo Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-[#5C1F68] transition-colors relative group font-medium"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#a855f7] to-[#e054f1]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#download"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#e054f1] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#e054f1]/40 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download App
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[#0b0217]" />
              ) : (
                <Menu className="h-6 w-6 text-[#0b0217]" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pb-4 pt-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#5C1F68] transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 font-medium"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#download"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#e054f1] text-white font-semibold text-center"
                whileHover={{ scale: 1.02 }}
              >
                Download App
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20 sm:h-24" />
    </>
  );
}
