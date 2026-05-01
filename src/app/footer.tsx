"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="download" className="relative bg-gradient-to-br from-gray-900 via-[#1a0a2e] to-gray-900 text-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e054f1] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5C1F68] rounded-full blur-3xl"></div>
      </div>

      {/* Google Map Section */}
      <div className="relative w-full h-[450px] mb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30516.08861831!2d121.0847!3d18.6069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386d1c8f8f8f8f8%3A0x1234567890abcdef!2sClaveria%2C%20Cagayan!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LeSgo Office Location - Claveria, Cagayan Valley"
          className="brightness-90 contrast-110 saturate-50 hover:saturate-100 transition-all duration-500"
        ></iframe>
        {/* Map Overlay with Location Info */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#5C1F68] to-[#8b3fa8] backdrop-blur-lg rounded-2xl p-6 shadow-2xl max-w-md w-full mx-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">Visit Our Office</h4>
              <p className="text-white/90 text-sm">Claveria, Cagayan Valley, Philippines</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-16 w-40 mb-6">
                <Image src="/logo.png" alt="LeSgo" fill className="object-contain brightness-0 invert" />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Fast, reliable courier services built for the modern community. Your trusted delivery partner across Northern Philippines.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e054f1] focus:ring-2 focus:ring-[#e054f1]/20 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#5C1F68] to-[#e054f1] rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "https://facebook.com/lesgo", label: "Facebook" },
                    { icon: Instagram, href: "https://instagram.com/lesgo", label: "Instagram" },
                    { icon: Twitter, href: "https://twitter.com/lesgo", label: "Twitter" },
                    { icon: Linkedin, href: "https://linkedin.com/company/lesgo", label: "LinkedIn" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#5C1F68] hover:to-[#e054f1] transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Become a Rider", href: "#" },
                { label: "Partner with Us", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-[#e054f1] transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@lesgo.ph" className="flex items-start gap-3 text-gray-400 hover:text-[#e054f1] transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#e054f1]/20 transition-all">
                    <Mail className="h-5 w-5 text-[#e054f1]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Email</div>
                    <div className="font-medium">hello@lesgo.ph</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+6321234-5678" className="flex items-start gap-3 text-gray-400 hover:text-[#e054f1] transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#e054f1]/20 transition-all">
                    <Phone className="h-5 w-5 text-[#e054f1]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Phone</div>
                    <div className="font-medium">+63 (2) 1234-5678</div>
                    <div className="text-xs text-gray-500">24/7 Support</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#e054f1]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Office</div>
                    <div className="font-medium">Claveria, Cagayan Valley</div>
                    <div className="text-xs text-gray-500">Northern Philippines</div>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LeSgo Courier Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#e054f1] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#e054f1] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#e054f1] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
