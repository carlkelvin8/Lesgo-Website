"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  MapPin,
  Truck,
  Users,
  Star,
  CheckCircle,
  Clock,
  Shield,
  Smartphone,
  TrendingUp,
  Award,
  Sparkles,
  Package,
  Bike,
  Plane,
  DollarSign,
  Headphones,
} from "lucide-react";
import Footer from "./footer";

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

// New animation variants
const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  show: { opacity: 1, rotate: 0, scale: 1 },
};

const bounceIn: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const flipIn: Variants = {
  hidden: { opacity: 0, rotateY: -90 },
  show: { opacity: 1, rotateY: 0 },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

// Reusable Components
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl bg-gradient-to-br from-white/[0.12] to-white/[0.05] p-6 ring-1 ring-white/18 backdrop-blur-xl ${className}`}>
    {children}
  </div>
);

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sm font-bold text-white uppercase tracking-widest">
    {children}
  </span>
);

const SectionHeader = ({ kicker, title, description }: { kicker: string; title: string; description: string }) => (
  <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
    <Kicker>{kicker}</Kicker>
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">{title}</h2>
    <p className="text-lg text-white/85 mt-6 leading-relaxed">{description}</p>
  </motion.div>
);

const Pill = ({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] ring-1 ring-white/16 text-sm text-white/90">
    {Icon && <Icon className="h-4 w-4" />}
    {children}
  </div>
);

const ButtonLink = ({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
      variant === "primary"
        ? "bg-white text-[#5a2a8b] hover:shadow-2xl hover:shadow-white/40"
        : "bg-white/20 text-white ring-1 ring-white/40 hover:bg-white/30 hover:ring-white/60 font-bold"
    }`}
  >
    {children}
    <ArrowRight className="h-5 w-5" />
  </motion.a>
);

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-[#5a2a8b] via-[#6b3fa0] to-[#7a4fb5] overflow-hidden">
      <main className="relative">
        {/* Background gradient orbs */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed -top-96 -left-96 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-[#5b18a0]/30 to-transparent blur-[150px]"
          animate={reduceMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none fixed -bottom-96 -right-96 h-[800px] w-[800px] rounded-full bg-gradient-to-tl from-[#7a3fd4]/25 to-transparent blur-[150px]"
          animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* HERO SECTION */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="text-center"
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-6">
                <Kicker>Welcome to LeSgo</Kicker>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              >
                Fast Delivery,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e054f1] via-[#e054f1] to-[#e054f1]">
                  Trusted Service
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Experience the future of logistics with real-time tracking, verified riders, and instant updates. Your packages deserve the best.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <ButtonLink href="#services" variant="primary">
                  Explore Services
                </ButtonLink>
                <ButtonLink href="#download" variant="secondary">
                  Download App
                </ButtonLink>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Premium Design */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-20 relative"
            >
              {/* Background gradient orbs for hero */}
              <motion.div
                aria-hidden
                className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#5C1F68]/20 to-transparent blur-3xl"
                animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                aria-hidden
                className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-[#e054f1]/15 to-transparent blur-3xl"
                animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              />

              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-1 ring-1 ring-white/18 shadow-2xl shadow-[#5C1F68]/20">
                {/* Hero Content Container */}
                <div className="relative bg-gradient-to-br from-[#1a0a2e] via-[#0f0319] to-[#0b0217] rounded-2xl overflow-hidden">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

                  {/* Content Grid */}
                  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16 min-h-[500px] items-center">
                    {/* Left Side - Animated Package */}
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="flex flex-col items-center justify-center"
                    >
                      <motion.div
                        animate={reduceMotion ? undefined : { y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                      >
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#5C1F68] to-[#e054f1] rounded-3xl blur-2xl opacity-40"
                          animate={reduceMotion ? undefined : { scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Image */}
                        <div className="relative h-96 w-96 sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]">
                          <Image
                            src="/hero-image.png"
                            alt="Delivery Experience"
                            fill
                            className="object-contain drop-shadow-2xl"
                          />
                        </div>
                      </motion.div>

                      {/* Floating elements */}
                      <motion.div
                        animate={reduceMotion ? undefined : { y: [0, -30, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#5C1F68]/30 to-transparent rounded-full blur-xl"
                      />
                      <motion.div
                        animate={reduceMotion ? undefined : { y: [0, 30, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#e054f1]/20 to-transparent rounded-full blur-xl"
                      />
                    </motion.div>

                    {/* Right Side - Features */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                          Your delivery experience starts here
                        </h3>
                        <p className="text-white/85 leading-relaxed">
                          We've reimagined logistics to be faster, smarter, and more reliable than ever before.
                        </p>
                      </div>

                      {/* Feature List */}
                      <div className="space-y-4">
                        {[
                          {
                            icon: Zap,
                            title: "Lightning Fast",
                            desc: "Deliveries in 30 minutes or less",
                          },
                          {
                            icon: MapPin,
                            title: "Real-time Tracking",
                            desc: "Know exactly where your package is",
                          },
                          {
                            icon: Shield,
                            title: "100% Secure",
                            desc: "Your items are protected always",
                          },
                          {
                            icon: Users,
                            title: "Verified Riders",
                            desc: "Trusted professionals every time",
                          },
                        ].map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + idx * 0.1 }}
                            className="flex gap-4 items-start group cursor-pointer"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-[#5C1F68]/30 to-[#e054f1]/20 group-hover:from-[#5C1F68]/50 group-hover:to-[#e054f1]/40 transition-all">
                                <feature.icon className="h-5 w-5 text-white" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-white group-hover:text-white transition-colors">
                                {feature.title}
                              </p>
                              <p className="text-sm text-white/90">{feature.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
                      >
                        {[
                          { value: "50K+", label: "Happy Users" },
                          { value: "24/7", label: "Support" },
                          { value: "99.9%", label: "Uptime" },
                        ].map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5C1F68] to-[#e054f1]">
                              {stat.value}
                            </p>
                            <p className="text-xs text-white/90 mt-1">{stat.label}</p>
                          </div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={reduceMotion ? undefined : { backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.1), transparent)",
                      backgroundSize: "200% 200%",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              {[
                { icon: Clock, label: "24/7 Support", value: "Always Available" },
                { icon: MapPin, label: "Live Tracking", value: "Real-time Updates" },
                { icon: Zap, label: "Fast Pickups", value: "Within 30 Minutes" },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={fadeInScale}>
                  <GlassCard className="text-center h-full">
                    <stat.icon className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                    <p className="text-white/85">{stat.value}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="Why Choose Us"
              title="Premium Features"
              description="Everything you need for seamless delivery and logistics"
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {[
                { icon: Smartphone, title: "Real-time Tracking", desc: "Track your package every step of the way with live GPS updates" },
                { icon: Shield, title: "Verified Riders", desc: "All our riders are thoroughly vetted and background checked" },
                { icon: Zap, title: "Instant Updates", desc: "Get notifications for every milestone in your delivery journey" },
              ].map((feature, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <GlassCard className="h-full hover:from-white/[0.18] hover:to-white/[0.08] transition-all duration-300">
                    <feature.icon className="h-10 w-10 text-[#e054f1] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/85 leading-relaxed">{feature.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="Our Services"
              title="Multiple Ways to Move"
              description="Choose the service that fits your needs"
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {[
                {
                  icon: Bike,
                  title: "LeSeat/Rides",
                  desc: "We deliver the city's best meals straight to your door with lightning-fast speed and real-time tracking.",
                  features: ["Quick pickup", "Affordable rates", "Safe drivers"],
                  image: "/services-image.png",
                },
                {
                  icon: Truck,
                  title: "LeSgo/Courier",
                  desc: "Bypass the traffic and send small parcels, products, or documents across the city instantly with LeSgo's delivery service.",
                  features: ["Real-time tracking", "Insured deliveries", "Same-day delivery"],
                  image: "/courier-image.png",
                },
                {
                  icon: Package,
                  title: "LeSbuy/Errands",
                  desc: "Our professional riders shop and deliver exactly what you need with real-time updates, so you can stay home and skip the errands.",
                  features: ["Shop for you", "Quick delivery", "Verified merchants"],
                  image: "/errands-image.png",
                },
              ].map((service, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <GlassCard className="h-full flex flex-col hover:from-white/[0.18] hover:to-white/[0.08] transition-all duration-300">
                    {service.image ? (
                      <div className="relative h-32 w-32 mb-4">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <service.icon className="h-12 w-12 text-white mb-4" />
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/85 mb-6 flex-grow">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-white/90">
                          <CheckCircle className="h-4 w-4 text-[#e054f1]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* COMING SOON SECTION */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="Exciting Updates"
              title="Coming Soon"
              description="We're expanding our services to serve you better"
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {[
                { icon: Package, title: "LesCargo", desc: "Heavy cargo and bulk shipments" },
                { icon: Bike, title: "LeSride", desc: "Premium ride-sharing experience" },
                { icon: Plane, title: "LeStravel", desc: "Travel and tour packages" },
              ].map((service, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <GlassCard className="text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5C1F68]/10 to-[#e054f1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <service.icon className="h-12 w-12 text-white mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/85 mb-4">{service.desc}</p>
                      <Pill>Coming Soon</Pill>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="Customer Stories"
              title="What Our Users Say"
              description="Real feedback from real customers"
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {[
                {
                  name: "Maria Santos",
                  role: "Business Owner",
                  quote: "LeSgo has transformed how I manage my deliveries. The tracking is incredibly accurate.",
                  rating: 5,
                },
                {
                  name: "Juan Dela Cruz",
                  role: "Regular User",
                  quote: "Fast, reliable, and affordable. I use LeSgo for all my courier needs now.",
                  rating: 5,
                },
                {
                  name: "Ana Garcia",
                  role: "E-commerce Manager",
                  quote: "The customer support is exceptional. They really care about getting it right.",
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <GlassCard className="h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#e054f1] text-[#e054f1]" />
                      ))}
                    </div>
                    <p className="text-white/90 mb-6 flex-grow italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/90">{testimonial.role}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PARTNERS/RIDERS SECTION */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.div variants={slideInLeft}>
                <Kicker>Join Our Team</Kicker>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">Become a LeSgo Rider</h2>
                <p className="text-lg text-white/85 mb-8 leading-relaxed">
                  Earn flexible income on your own schedule. Join thousands of riders already making money with LeSgo.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Flexible working hours",
                    "Competitive earnings",
                    "Insurance coverage",
                    "24/7 support",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#e054f1] flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <ButtonLink href="#" variant="primary">
                  Apply Now
                </ButtonLink>
              </motion.div>

              <motion.div variants={slideInRight}>
                <GlassCard className="p-8">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <DollarSign className="h-6 w-6 text-white" />
                        <h3 className="text-xl font-bold text-white">Earnings</h3>
                      </div>
                      <p className="text-white/85">Earn ₱15-25 per delivery with bonuses for high ratings</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="h-6 w-6 text-white" />
                        <h3 className="text-xl font-bold text-white">Growth</h3>
                      </div>
                      <p className="text-white/85">Top riders earn ₱50,000+ monthly with incentives</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="h-6 w-6 text-white" />
                        <h3 className="text-xl font-bold text-white">Recognition</h3>
                      </div>
                      <p className="text-white/85">Get recognized and rewarded for excellent service</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WHY JOIN SECTION */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="The LeSgo Advantage"
              title="Why Join LeSgo"
              description="Experience the difference with our platform"
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {[
                { icon: Zap, title: "Lightning Fast", desc: "Fastest delivery times in the industry" },
                { icon: Shield, title: "Secure & Safe", desc: "Your packages are protected always" },
                { icon: Users, title: "Community", desc: "Join a growing community of users" },
                { icon: Headphones, title: "Support", desc: "24/7 customer support available" },
              ].map((benefit, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <GlassCard className="text-center h-full hover:from-white/[0.18] hover:to-white/[0.08] transition-all duration-300">
                    <benefit.icon className="h-10 w-10 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-white/85">{benefit.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.div variants={slideInLeft}>
                <GlassCard className="p-8 h-full flex flex-col justify-center">
                  <Sparkles className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Founded in 2023, LeSgo started with a simple mission: to revolutionize logistics in the Philippines. We believe everyone deserves fast, reliable, and affordable delivery services.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    Today, we're proud to serve thousands of customers and riders across the country, making delivery seamless and trustworthy.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div variants={slideInRight}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Get in Touch</h3>
                    <GlassCard>
                      <div className="space-y-3">
                        <p className="text-white/90">
                          <span className="font-semibold">Email:</span> hello@lesgo.ph
                        </p>
                        <p className="text-white/90">
                          <span className="font-semibold">Phone:</span> +63 (2) 1234-5678
                        </p>
                        <p className="text-white/90">
                          <span className="font-semibold">Address:</span> Claveria, Cagayan Valley, PH
                        </p>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PARTNER CLUB SECTION */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.div variants={slideInLeft}>
                <Kicker>100+ Partners Nationwide!</Kicker>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">Join the LeSgo Partner Club!</h2>
                <p className="text-lg text-white/85 mb-8 leading-relaxed">
                  Our partnership offers businesses a wider reach of potential customers by providing exposure to audiences across the entire country, ensuring your brand connects with more clients than ever before.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Cost-efficient solution with small one-time investment",
                    "Powerful advertising tools to boost sales",
                    "Dedicated dashboard to manage reviews and growth",
                    "Real-time delivery tracking and direct chat support",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <ButtonLink href="#" variant="primary">
                  Register Now
                </ButtonLink>
              </motion.div>

              <motion.div variants={slideInRight}>
                <GlassCard className="p-8 h-full">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="h-6 w-6 text-white" />
                        <h3 className="text-xl font-bold text-white">Wider Reach</h3>
                      </div>
                      <p className="text-white/85">Connect with customers across the entire country and expand your business reach exponentially.</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="h-6 w-6 text-white" />
                        <h3 className="text-xl font-bold text-white">Business Growth</h3>
                      </div>
                      <p className="text-white/85">Access powerful tools and analytics to track results and scale your business with transparency.</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Headphones className="h-6 w-6 text-white" />
                        <h3 className="text-xl font-bold text-white">Dedicated Support</h3>
                      </div>
                      <p className="text-white/85">Get real-time tracking, direct chat support, and a dedicated dashboard for managing your partnership.</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Experience LeSgo?
              </h2>
              <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied customers and riders. Download the app today and get your first delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonLink href="#download" variant="primary">
                  Download Now
                </ButtonLink>
                <ButtonLink href="#services" variant="secondary">
                  Learn More
                </ButtonLink>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
