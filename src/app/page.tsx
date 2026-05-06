"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight, CheckCircle, Star, MapPin, Clock, Shield,
  Smartphone, Users, TrendingUp, Zap, Phone, Mail,
} from "lucide-react";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION - Bold Purple Background */}
      <section className="relative bg-gradient-to-br from-[#5C1F68] to-[#8b3fa8] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#e054f1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5C1F68] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Fast, Safe, and Affordable Delivery
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-white/90">
                Your all-in-one logistics platform for food, parcels, and everything in between
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#5C1F68] rounded-full font-bold text-lg hover:shadow-2xl transition-all"
                >
                  Learn More
                </motion.a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">GET IT ON</div>
                    <div className="text-sm font-bold -mt-0.5">Google Play</div>
                  </div>
                </motion.a>
                <motion.a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-sm font-bold -mt-0.5">App Store</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "50K+", label: "Active Users", icon: Users },
              { value: "100K+", label: "Deliveries Completed", icon: CheckCircle },
              { value: "24/7", label: "Customer Support", icon: Clock },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-lg"
              >
                <stat.icon className="h-12 w-12 text-[#e054f1] mx-auto mb-4" />
                <h3 className="text-4xl font-extrabold text-[#5C1F68] mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#5C1F68] mb-4">
              Why Choose LeSgo?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, reliable, and trusted by thousands across Northern Philippines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Deliveries in 30 minutes or less with real-time tracking",
              },
              {
                icon: Shield,
                title: "100% Secure",
                desc: "All riders are verified and your items are fully insured",
              },
              {
                icon: MapPin,
                title: "Wide Coverage",
                desc: "Serving all major cities across Northern Philippines",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e054f1]/10 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-[#e054f1]" />
                </div>
                <h3 className="text-2xl font-bold text-[#5C1F68] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - Bold Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#5C1F68] to-[#8b3fa8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Services</h2>
            <p className="text-xl text-white/90">Multiple ways to move what matters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "LeSeat",
                subtitle: "Food Delivery",
                desc: "Hot meals delivered fast from your favorite restaurants",
                image: "/lesgo-png-5.png",
              },
              {
                title: "LeSgo",
                subtitle: "Instant Courier",
                desc: "Send parcels and documents across the city instantly",
                image: "/courier-image.png",
              },
              {
                title: "LesBuy",
                subtitle: "Shopping & Errands",
                desc: "We shop and deliver exactly what you need",
                image: "/errands-image.png",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all"
              >
                <div className="relative h-32 w-32 mx-auto mb-6">
                  <Image src={service.image} alt={service.title} fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-[#e054f1] font-semibold mb-3">{service.subtitle}</p>
                <p className="text-white/80">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#5C1F68] mb-4">
              How to Book a Delivery
            </h2>
            <p className="text-xl text-gray-600">Simple, fast, and hassle-free</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Choose Service", desc: "Select food, courier, or shopping delivery" },
              { step: "2", title: "Enter Details", desc: "Add pickup and delivery locations" },
              { step: "3", title: "Track & Receive", desc: "Real-time tracking until delivery" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#e054f1] text-white rounded-full text-3xl font-extrabold mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-[#5C1F68] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE APP SCREENSHOTS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#5C1F68] mb-4">
                Experience the LeSgo App
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Intuitive design, powerful features, and seamless delivery experience at your fingertips
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - App Screenshots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative flex justify-center items-center gap-4">
                {/* Phone Frame 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative w-64 h-[500px] bg-gradient-to-br from-[#5C1F68] to-[#8b3fa8] rounded-[3rem] p-3 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                >
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="bg-gradient-to-br from-[#5C1F68] to-[#8b3fa8] h-full flex flex-col items-center justify-center p-6 text-white">
                      <Smartphone className="h-16 w-16 mb-4 text-[#e054f1]" />
                      <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
                      <p className="text-sm text-center text-white/80">Book deliveries in just 3 taps</p>
                      <div className="mt-8 w-full space-y-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-left">
                          <div className="text-xs text-white/70">From</div>
                          <div className="font-semibold">Your Location</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-left">
                          <div className="text-xs text-white/70">To</div>
                          <div className="font-semibold">Destination</div>
                        </div>
                        <button className="w-full bg-white text-[#5C1F68] rounded-xl py-3 font-bold">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Frame 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative w-64 h-[500px] bg-gradient-to-br from-[#5C1F68] to-[#8b3fa8] rounded-[3rem] p-3 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300"
                >
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="bg-white h-full flex flex-col items-center justify-center p-6">
                      <MapPin className="h-16 w-16 mb-4 text-[#e054f1]" />
                      <h3 className="text-xl font-bold mb-2 text-[#5C1F68]">Live Tracking</h3>
                      <p className="text-sm text-center text-gray-600 mb-6">Track your rider in real-time</p>
                      <div className="w-full bg-gray-100 rounded-2xl h-48 flex items-center justify-center mb-4">
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#5C1F68]/10 to-[#e054f1]/10 rounded-2xl"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-12 h-12 bg-[#e054f1] rounded-full flex items-center justify-center animate-pulse">
                              <Smartphone className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-gradient-to-r from-[#5C1F68] to-[#e054f1] text-white rounded-xl p-3 text-center">
                        <div className="text-xs">Arriving in</div>
                        <div className="text-2xl font-bold">12 mins</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-extrabold text-[#5C1F68] mb-8">
                Designed for Your Convenience
              </h3>

              {[
                {
                  icon: Zap,
                  title: "Lightning Fast Booking",
                  desc: "Book a delivery in under 30 seconds with our streamlined interface",
                  color: "text-yellow-500",
                },
                {
                  icon: MapPin,
                  title: "Real-Time GPS Tracking",
                  desc: "Watch your rider's location live on the map from pickup to delivery",
                  color: "text-red-500",
                },
                {
                  icon: Shield,
                  title: "Secure Payments",
                  desc: "Multiple payment options with bank-level encryption and security",
                  color: "text-green-500",
                },
                {
                  icon: Star,
                  title: "Rate & Review",
                  desc: "Share your experience and help us maintain quality service",
                  color: "text-[#e054f1]",
                },
                {
                  icon: Clock,
                  title: "Order History",
                  desc: "Access all your past deliveries and reorder with one tap",
                  color: "text-blue-500",
                },
                {
                  icon: Phone,
                  title: "In-App Chat Support",
                  desc: "Direct messaging with riders and 24/7 customer support",
                  color: "text-purple-500",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5C1F68] mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-90">GET IT ON</div>
                      <div className="text-sm font-bold -mt-0.5">Google Play</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-90">Download on the</div>
                      <div className="text-sm font-bold -mt-0.5">App Store</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* COMING SOON SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#5C1F68] mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600">Exciting new services launching soon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "LeSride", subtitle: "Ride Hailing", desc: "Premium ride-sharing across the city", image: "/services-image.png" },
              { title: "LesCargo", subtitle: "Long Haul Delivery", desc: "Heavy cargo and bulk shipments nationwide", image: "/lesgo-png-3.png" },
              { title: "LesTravel", subtitle: "Booking & Reservation", desc: "Travel and tour packages at your fingertips", image: "/lesgo-png-6.png" },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="relative h-32 w-32 mx-auto mb-6">
                  <Image src={service.image} alt={service.title} fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-[#5C1F68] mb-2">{service.title}</h3>
                <p className="text-[#e054f1] font-semibold mb-3">{service.subtitle}</p>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER CLUB */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#5C1F68] mb-6">
                Join the LeSgo Partner Club
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Expand your business reach across Northern Philippines with our partnership program
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Cost-efficient solution with small one-time investment",
                  "Powerful advertising tools to boost sales",
                  "Dedicated dashboard to manage reviews and growth",
                  "Real-time delivery tracking and direct chat support",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#e054f1] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5C1F68] to-[#e054f1] text-white rounded-full font-bold text-lg hover:shadow-xl transition-all"
              >
                Register Now <ArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                { icon: Users, title: "Wider Reach", desc: "Connect with customers nationwide" },
                { icon: TrendingUp, title: "Business Growth", desc: "Track results and scale with transparency" },
                { icon: Shield, title: "Dedicated Support", desc: "Real-time tracking and chat support" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e054f1]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-[#e054f1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#5C1F68] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BECOME A RIDER */}
      <section className="py-20 bg-gradient-to-br from-[#5C1F68] to-[#8b3fa8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Become a LeSgo Rider
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Earn flexible income on your own schedule. Join thousands of riders making money with LeSgo.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Flexible working hours",
                  "Highest profit sharing in the Philippines",
                  "Earn up to ₱2,500 per day",
                  "Insurance coverage and 24/7 support",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#e054f1] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5C1F68] rounded-full font-bold text-lg hover:shadow-2xl transition-all"
              >
                Apply Now <ArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                { value: "₱2,500", label: "Daily Earnings", sublabel: "Top riders" },
                { value: "₱50K+", label: "Monthly Income", sublabel: "With incentives" },
                { value: "5,000+", label: "Active Riders", sublabel: "Join the team" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
                  <p className="text-4xl font-extrabold text-white mb-2">{stat.value}</p>
                  <p className="text-lg font-semibold text-white/90">{stat.label}</p>
                  <p className="text-sm text-white/70">{stat.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#5C1F68] mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions? We're here to help! Send us a message and we'll respond within 24 hours.
              </p>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-br from-[#5C1F68] to-[#8b3fa8] rounded-2xl p-6 mb-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-6 w-6 text-[#e054f1]" />
                  <h3 className="font-bold text-lg">Quick Response Guarantee</h3>
                </div>
                <p className="text-white/90 text-sm">
                  We respond to all inquiries within 24 hours. For urgent matters, call our hotline for immediate assistance.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e054f1]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#e054f1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5C1F68] mb-1">Phone</h4>
                    <p className="text-gray-600">+63 (2) 1234-5678</p>
                    <p className="text-sm text-gray-500">Mon-Sun, 24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e054f1]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#e054f1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5C1F68] mb-1">Email</h4>
                    <p className="text-gray-600">hello@lesgo.ph</p>
                    <p className="text-sm text-gray-500">We'll reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e054f1]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#e054f1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5C1F68] mb-1">Office</h4>
                    <p className="text-gray-600">Claveria, Cagayan Valley</p>
                    <p className="text-sm text-gray-500">Northern Philippines</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will get back to you within 24 hours.'); }}>
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#5C1F68] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#e054f1] focus:ring-2 focus:ring-[#e054f1]/20 outline-none transition-all text-gray-900"
                    placeholder="Juan Dela Cruz"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#5C1F68] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#e054f1] focus:ring-2 focus:ring-[#e054f1]/20 outline-none transition-all text-gray-900"
                    placeholder="juan@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#5C1F68] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#e054f1] focus:ring-2 focus:ring-[#e054f1]/20 outline-none transition-all text-gray-900"
                    placeholder="+63 912 345 6789"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#5C1F68] mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#e054f1] focus:ring-2 focus:ring-[#e054f1]/20 outline-none transition-all text-gray-900"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="rider">Become a Rider</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="complaint">File a Complaint</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#5C1F68] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#e054f1] focus:ring-2 focus:ring-[#e054f1]/20 outline-none transition-all resize-none text-gray-900"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#5C1F68] to-[#e054f1] text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#5C1F68] to-[#8b3fa8] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Download LeSgo Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of satisfied users. Get your first delivery now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:shadow-2xl transition-all"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-bold -mt-1">Google Play</div>
              </div>
            </motion.a>
            <motion.a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:shadow-2xl transition-all"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold -mt-1">App Store</div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
