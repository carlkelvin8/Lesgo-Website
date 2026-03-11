"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Mail,
} from "lucide-react";
import Image from "next/image";

type IconComponent = (props: { className?: string; "aria-hidden"?: boolean }) => ReactNode;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      id="download"
      className="relative mt-40 sm:mt-56 lg:mt-64 w-screen -ml-[calc((100vw-100%)/2)] overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Animated gradient orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-96 top-0 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#e054f1]/10 to-transparent blur-[140px]"
        animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-96 bottom-0 h-[700px] w-[700px] rounded-full bg-gradient-to-tl from-[#5a2a8b]/10 to-transparent blur-[140px]"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(0,0,0,.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.1)_1px,transparent_1px)] bg-[size:120px_120px]" />

      <div className="relative">
        {/* Main content area */}
        <div className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto w-full max-w-7xl">
            {/* Top section - Brand, Newsletter, and Map */}
            <div className="grid gap-16 lg:grid-cols-3 mb-24">
              {/* Left column - Brand & Newsletter */}
              <motion.div variants={fadeUp} className="lg:col-span-2 space-y-16">
                {/* Brand section */}
                <div className="space-y-8">
                  <div className="flex items-center justify-center mb-12">
                    <motion.div
                      whileHover={reduceMotion ? undefined : { rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="relative h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
                        <Image
                          src="/logo.png"
                          alt="LeSgo Logo"
                          fill
                          className="object-contain drop-shadow-2xl"
                        />
                      </div>
                    </motion.div>
                  </div>
                  <p className="max-w-2xl text-center text-base leading-8 text-gray-700 mb-12">
                    Fast, reliable courier services built for the modern community. Track deliveries in real-time, send items faster, and ride with confidence.
                  </p>
                </div>

                {/* App Store Badges */}
                <div className="space-y-6 text-center">
                  <h3 className="text-sm font-bold text-[#e054f1] uppercase tracking-widest">Download App</h3>
                  <div className="flex flex-wrap gap-5 justify-center">
                    <motion.a
                      href="#"
                      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.08 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 px-6 py-4 ring-1 ring-gray-200 transition-all duration-300 hover:from-gray-50 hover:to-white hover:ring-gray-300 hover:shadow-lg"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 group-hover:bg-gray-300">
                        <svg className="h-6 w-6 text-gray-700 group-hover:text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 13.5v8.236q0 .899.675 1.575.675.675 1.575.675h13.5q.9 0 1.575-.675.675-.676.675-1.575V13.5M17.25 1.5H6.75Q5.85 1.5 5.175 2.175 4.5 2.85 4.5 3.75v6.75h15V3.75q0-.9-.675-1.575Q17.15 1.5 17.25 1.5Z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-600 group-hover:text-gray-800">Get it on</div>
                        <div className="text-sm font-semibold text-gray-900">Google Play</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="#"
                      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.08 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 px-6 py-4 ring-1 ring-gray-200 transition-all duration-300 hover:from-gray-50 hover:to-white hover:ring-gray-300 hover:shadow-lg"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 group-hover:bg-gray-300">
                        <svg className="h-6 w-6 text-gray-700 group-hover:text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.05 13.5q0-.75-.3-1.462.15-.075.712-.375.563-.3.563-.9 0-.6-.563-.9-.562-.3-.712-.375.3-.712.3-1.463 0-1.95-1.462-3.412Q14.475 3 12.525 3q-1.95 0-3.412 1.463Q7.65 5.925 7.65 7.875q0 .75.3 1.462-.15.075-.712.375-.563.3-.563.9 0 .6.563.9.562.3.712.375-.3.712-.3 1.463 0 1.95 1.462 3.412Q10.575 18 12.525 18q1.95 0 3.412-1.463Q17.4 15.075 17.4 13.125q0-.75-.3-1.462.15-.075.712-.375.563-.3.563-.9 0-.6-.563-.9-.562-.3-.712-.375.3-.712.3-1.463Z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-600 group-hover:text-gray-800">Download on</div>
                        <div className="text-sm font-semibold text-gray-900">App Store</div>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="space-y-6 text-center">
                  <h3 className="text-sm font-bold text-[#e054f1] uppercase tracking-widest">Stay Updated</h3>
                  <div className="flex flex-col gap-4 sm:flex-row sm:max-w-lg mx-auto">
                    <div className="relative flex-1">
                      <Mail aria-hidden className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="h-13 w-full rounded-xl bg-gray-100 pl-13 pr-4 text-sm text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-300 outline-none transition focus:bg-white focus:ring-gray-400 focus:shadow-lg focus:shadow-gray-200"
                      />
                    </div>
                    <motion.button
                      whileHover={reduceMotion ? undefined : { scale: 1.06, y: -2 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                      className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5a2a8b] to-[#e054f1] px-8 text-sm font-semibold text-white ring-1 ring-transparent transition hover:shadow-lg hover:shadow-[#e054f1]/30"
                    >
                      Subscribe
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                  <p className="text-xs text-white/50">No spam. Unsubscribe anytime.</p>
                </div>
              </motion.div>

              {/* Right column - Google Maps */}
              <motion.div variants={fadeUp} className="lg:col-span-1">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-1.5 ring-1 ring-white/18 shadow-2xl shadow-[#5b18a0]/25">
                  <div className="relative h-96 overflow-hidden rounded-2xl bg-white/[0.02]">
                    <iframe
                      title="LeSgo Courier Services Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4284.080376995187!2d121.0563524!3d18.582653000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388dd006375fe19%3A0x3f4dd9b4bc7e73fa!2sLeSgo%20Courier%20Services!5e1!3m2!1sen!2sph!4v1773207450472!5m2!1sen!2sph"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: "1rem" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/70 backdrop-blur-xl px-4 py-3 ring-1 ring-white/20"
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                  >
                    <p className="text-xs font-semibold text-white">Claveria, Cagayan Valley, PH</p>
                    <p className="text-xs text-gray-700 mt-1">Headquarters</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div className="h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />

            {/* Navigation Grid */}
            <div className="py-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
              {/* Product */}
              <motion.div variants={fadeUp} className="space-y-8 text-center sm:text-left">
                <h4 className="text-sm font-bold text-[#e054f1] uppercase tracking-widest">Product</h4>
                <ul className="space-y-5">
                  {[
                    { label: "Services", href: "#services" },
                    { label: "Pricing", href: "#" },
                    { label: "Security", href: "#" },
                    { label: "Status", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <motion.a
                        href={item.href}
                        whileHover={reduceMotion ? undefined : { x: 4 }}
                        className="text-sm text-gray-700 transition hover:text-white/95"
                      >
                        {item.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div variants={fadeUp} className="space-y-8 text-center sm:text-left">
                <h4 className="text-sm font-bold text-[#e054f1] uppercase tracking-widest">Company</h4>
                <ul className="space-y-5">
                  {[
                    { label: "About", href: "#about" },
                    { label: "Blog", href: "#" },
                    { label: "Careers", href: "#" },
                    { label: "Contact", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <motion.a
                        href={item.href}
                        whileHover={reduceMotion ? undefined : { x: 4 }}
                        className="text-sm text-gray-700 transition hover:text-white/95"
                      >
                        {item.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div variants={fadeUp} className="space-y-8 text-center sm:text-left">
                <h4 className="text-sm font-bold text-[#e054f1] uppercase tracking-widest">Resources</h4>
                <ul className="space-y-5">
                  {[
                    { label: "Documentation", href: "#" },
                    { label: "API Reference", href: "#" },
                    { label: "Support", href: "#" },
                    { label: "Community", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <motion.a
                        href={item.href}
                        whileHover={reduceMotion ? undefined : { x: 4 }}
                        className="text-sm text-gray-700 transition hover:text-white/95"
                      >
                        {item.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div variants={fadeUp} className="space-y-8 text-center sm:text-left">
                <h4 className="text-sm font-bold text-[#e054f1] uppercase tracking-widest">Legal</h4>
                <ul className="space-y-5">
                  {[
                    { label: "Privacy Policy", href: "#" },
                    { label: "Terms of Service", href: "#" },
                    { label: "Cookie Policy", href: "#" },
                    { label: "License", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <motion.a
                        href={item.href}
                        whileHover={reduceMotion ? undefined : { x: 4 }}
                        className="text-sm text-gray-700 transition hover:text-white/95"
                      >
                        {item.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

            {/* Bottom bar */}
            <div className="py-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
              <p className="text-sm text-gray-700 font-medium">
                © {new Date().getFullYear()} LeSgo Courier Services. All rights reserved.
              </p>
              <div className="flex items-center gap-8 justify-center sm:justify-end">
                <div className="flex gap-6">
                  {[
                    { icon: "f", label: "Facebook", href: "#" },
                    { icon: "𝕏", label: "Twitter", href: "#" },
                    { icon: "in", label: "LinkedIn", href: "#" },
                    { icon: "📷", label: "Instagram", href: "#" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={reduceMotion ? undefined : { scale: 1.15, y: -2 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.9 }}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 ring-1 ring-gray-300 transition-all duration-300 hover:bg-[#e054f1] hover:ring-[#e054f1]/50 hover:text-white"
                      title={social.label}
                    >
                      <span className="text-sm font-semibold text-gray-700 hover:text-white">
                        {social.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
                <div className="hidden sm:flex gap-6 text-sm text-gray-700">
                  <motion.a
                    href="#"
                    whileHover={reduceMotion ? undefined : { x: 2 }}
                    className="transition hover:text-gray-900 font-medium"
                  >
                    Privacy
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={reduceMotion ? undefined : { x: 2 }}
                    className="transition hover:text-gray-900 font-medium"
                  >
                    Terms
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
