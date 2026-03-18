"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Facebook, Instagram, Smartphone } from "lucide-react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
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
      className="relative w-screen -ml-[calc((100vw-100%)/2)] overflow-hidden"
      style={{ background: "var(--footer-bg)" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
    >
      {/* Gradient orbs */}
      <motion.div aria-hidden className="pointer-events-none absolute -left-64 top-0 h-[600px] w-[600px] rounded-full bg-[#5C1F68]/20 blur-[120px]"
        animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 18, repeat: Infinity }} />
      <motion.div aria-hidden className="pointer-events-none absolute -right-64 bottom-0 h-[600px] w-[600px] rounded-full bg-[#e054f1]/10 blur-[120px]"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 22, repeat: Infinity, delay: 2 }} />

      {/* CTA Banner */}
      <motion.div variants={fadeUp} className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#5C1F68] via-[#7c3aed] to-[#e054f1] p-px shadow-2xl shadow-[#5C1F68]/40">
            <div className="rounded-3xl backdrop-blur-xl px-8 py-12 sm:px-16 flex flex-col lg:flex-row items-center justify-between gap-8"
              style={{ background: "var(--footer-cta-inner)" }}>
              <div>
                <p className="text-xs font-bold text-[#e054f1] uppercase tracking-widest mb-2">Download Now</p>
                <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>Ready to ride with LeSgo?</h2>
                <p className="mt-2 text-base" style={{ color: "var(--text-muted)" }}>Get the app and start your first delivery today.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <motion.a href="#" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-[#5a2a8b] font-bold text-sm hover:shadow-xl hover:shadow-white/20 transition-all">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.18-3.18L3.18 23.76zm17.1-11.4c.48-.27.72-.66.72-1.11s-.24-.84-.72-1.11l-2.88-1.65-3.33 3.33 3.33 3.33 2.88-1.79zM.3.54C.12.84.03 1.2.03 1.59v20.82c0 .39.09.75.27 1.05L12.9 11.16.3.54zm3.57-.3L16.47 7.5l-3.18 3.18L.9.24C1.26.18 1.62.27 1.89.24z"/></svg>
                  Google Play
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#5C1F68] to-[#e054f1] text-white font-bold text-sm hover:shadow-xl hover:shadow-[#e054f1]/30 transition-all ring-1 ring-white/20">
                  <Smartphone className="h-5 w-5" />
                  App Store
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b" style={{ borderColor: "var(--divider)" }}>

          {/* Brand column */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
            <div className="relative h-20 w-48">
              <Image src="/logo.png" alt="LeSgo" fill className="object-contain" style={{ filter: "var(--logo-filter)" }} />
            </div>
            <p className="text-sm leading-7 max-w-xs" style={{ color: "var(--text-muted)" }}>
              Fast, reliable courier services built for the modern community. Track deliveries in real-time, send items faster, and ride with confidence.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: "hello@lesgo.ph", href: "mailto:hello@lesgo.ph" },
                { icon: Phone, text: "+63 (2) 1234-5678", href: "tel:+6221234-5678" },
                { icon: MapPin, text: "Claveria, Cagayan Valley, PH", href: "#" },
              ].map((item) => (
                <a key={item.text} href={item.href}
                  className="flex items-center gap-3 text-sm hover:text-[#e054f1] transition-colors group" style={{ color: "var(--text-muted)" }}>
                  <item.icon className="h-4 w-4 text-[#e054f1] flex-shrink-0" />
                  {item.text}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com/lesgo", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com/lesgo", label: "Instagram" },
              ].map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} title={s.label}
                  className="h-10 w-10 rounded-xl ring-1 flex items-center justify-center hover:bg-[#e054f1] hover:ring-[#e054f1]/50 transition-all duration-300"
                  style={{ background: "var(--stat-bg)", borderColor: "var(--card-border)" }}>
                  <s.icon className="h-4 w-4" style={{ color: "var(--text-primary)" }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {[
            {
              title: "Services",
              links: [
                { label: "LeSeat — Food Delivery", href: "#services" },
                { label: "LeSgo — Courier", href: "#services" },
                { label: "LesBuy — Errands", href: "#services" },
                { label: "Coming Soon", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About Us", href: "#about" },
                { label: "Become a Rider", href: "#" },
                { label: "Partner Club", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Refund Policy", href: "#" },
              ],
            },
          ].map((col) => (
            <motion.div key={col.title} variants={fadeUp} className="space-y-6">
              <h4 className="text-xs font-bold text-[#e054f1] uppercase tracking-widest">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <motion.a href={link.href} whileHover={{ x: 4 }}
                      className="text-sm hover:text-[#e054f1] transition-colors" style={{ color: "var(--text-muted)" }}>
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter + Map row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 border-b" style={{ borderColor: "var(--divider)" }}>
          {/* Newsletter */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="text-xs font-bold text-[#e054f1] uppercase tracking-widest">Stay Updated</h4>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Get the latest news, offers, and updates from LeSgo.</p>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#e054f1]" />
                <input type="email" placeholder="Enter your email"
                  className="w-full h-12 rounded-xl ring-1 pl-11 pr-4 text-sm outline-none transition" style={{ background: "var(--input-bg)", boxShadow: "0 0 0 1px var(--input-ring)", color: "var(--text-primary)" }} />
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#5C1F68] to-[#e054f1] text-white text-sm font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-[#e054f1]/30 transition-all">
                Subscribe <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>No spam. Unsubscribe anytime.</p>
          </motion.div>

          {/* Map */}
          <motion.div variants={fadeUp}>
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 h-48">
              <iframe
                title="LeSgo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4284.080376995187!2d121.0563524!3d18.582653000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388dd006375fe19%3A0x3f4dd9b4bc7e73fa!2sLeSgo%20Courier%20Services!5e1!3m2!1sen!2sph!4v1773207450472!5m2!1sen!2sph"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/70 backdrop-blur-md px-3 py-2">
                <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>Claveria, Cagayan Valley, PH</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>Headquarters</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div variants={fadeUp} className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} LeSgo Courier Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "var(--text-muted)" }}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <motion.a key={item} href="#"
                className="hover:text-[#e054f1] transition-colors" style={{ color: "var(--text-muted)" }}>
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}


