"use client";

import { motion, useReducedMotion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight, Zap, MapPin, Users, Star, CheckCircle,
  Shield, Smartphone, TrendingUp, Award, Sparkles,
  Bike, DollarSign, Headphones, Mail, Phone,
  Facebook, Instagram,
} from "lucide-react";
import Footer from "./footer";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const slideInLeft: Variants  = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const slideInRight: Variants = { hidden: { opacity: 0, x:  40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

// ─── Reusable Components ──────────────────────────────────────────────────────
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:shadow-lg ${className}`}
    style={{
      background: `linear-gradient(135deg, var(--card-from), var(--card-to))`,
      borderColor: "var(--card-border)",
      boxShadow: "0 2px 16px 0 var(--card-border)"
    }}>
    {children}
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e054f1]/10 text-[#e054f1] border border-[#e054f1]/20 uppercase tracking-widest">
    {children}
  </span>
);

const SectionHeader = ({ tag, title, description }: { tag: string; title: string; description: string }) => (
  <motion.div className="text-center max-w-2xl mx-auto mb-16" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
    <Tag>{tag}</Tag>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 mb-4 leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>{title}</h2>
    <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{description}</p>
  </motion.div>
);

const Btn = ({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) => (
  <motion.a href={href} whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 border"
    style={{ color: "var(--text-primary)", borderColor: "var(--card-border)", background: "var(--input-bg)" }}>
    {children}
    <ArrowRight className="h-4 w-4" />
  </motion.a>
);

// ─── Hero Slideshow ───────────────────────────────────────────────────────────
const heroSlides = [
  { label: "LeSeat",  image: "/lesgo-png-5.png",    desc: "Food Delivery",     color: "#f59e0b" },
  { label: "LeSgo",   image: "/courier-image.png",  desc: "Instant Delivery",  color: "#e054f1" },
  { label: "LesBuy",  image: "/errands-image.png",  desc: "Purchase Delivery", color: "#22d3ee" },
];

function HeroSlideshow({ reduceMotion }: { reduceMotion: boolean }) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => { setDir(1); setCurrent(p => (p + 1) % heroSlides.length); }, 3500);
    return () => clearInterval(t);
  }, [reduceMotion]);

  const goTo = (i: number) => { setDir(i > current ? 1 : -1); setCurrent(i); };
  const slide = heroSlides[current];

  return (
    <div className="flex flex-col items-center select-none w-full">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {heroSlides.map((s, i) => (
          <button key={s.label} onClick={() => goTo(i)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              i === current
                ? "bg-[#e054f1] text-white shadow-md shadow-[#e054f1]/40"
                : "bg-white/[0.08] border border-white/[0.12]"
            }`}
            style={i !== current ? { color: "var(--text-primary)" } : undefined}
          >{s.label}</button>
        ))}
      </div>

      {/* Image */}
      <div className="relative w-full flex items-center justify-center overflow-hidden min-h-[280px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div key={current} custom={dir}
            initial={{ opacity: 0, x: dir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }} className="relative flex flex-col items-center">
            {/* Per-slide color glow */}
            <div className="absolute inset-0 rounded-full blur-3xl scale-75 opacity-40"
              style={{ background: `radial-gradient(circle, ${heroSlides[current].color}88, transparent 70%)` }} />
            <motion.div animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image src={slide.image} alt={slide.label} fill className="object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
            {/* Service badge */}
            <div className="mt-3 px-4 py-1.5 rounded-full text-xs font-bold border border-white/30 bg-white/10 backdrop-blur-sm" style={{ color: "var(--text-primary)" }}>
              {slide.desc}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-5">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-5 h-1.5 bg-[#e054f1]" : "w-1.5 h-1.5 bg-[#5C1F68]/40"}`} />
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: "var(--bg-page)", color: "var(--text-primary)" }}>
      {/* Global ambient orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[15%] w-[80vw] h-[80vw] rounded-full blur-[160px]" style={{ background: "var(--orb-1)" }} />
        <div className="absolute -bottom-[30%] -right-[15%] w-[80vw] h-[80vw] rounded-full blur-[160px]" style={{ background: "var(--orb-2)" }} />
        <div className="absolute top-[20%] right-[10%] w-[55vw] h-[55vw] rounded-full blur-[120px]" style={{ background: "var(--orb-3)" }} />
        <div className="absolute bottom-[20%] left-[10%] w-[55vw] h-[55vw] rounded-full blur-[120px]" style={{ background: "var(--orb-4)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[140px]" style={{ background: "var(--orb-5)" }} />
      </div>

      <main className="relative">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8 lg:pt-28 lg:pb-20">
          <div className="mx-auto max-w-7xl">

            {/* Top text block */}
            <motion.div className="text-center mb-12" initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex justify-center mb-3">
                <div className="relative h-32 w-72 sm:h-40 sm:w-[380px] lg:h-48 lg:w-[460px]">
                  <Image src="/logo.png" alt="LeSgo" fill className="object-contain" style={{ filter: "var(--logo-filter)" }} priority />
                </div>
              </motion.div>

              <motion.h1 variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
                Fast Delivery,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#e054f1]">
                  Trusted Service
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Find all your logistical needs in one place — parcels, food, documents, and many more with our all-in-1 transport platform.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
                <Btn href="#services">Explore Services</Btn>
                <Btn href="#download" variant="ghost">Download App</Btn>
              </motion.div>
            </motion.div>

            {/* Hero card */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className="relative rounded-3xl border overflow-hidden shadow-2xl shadow-[#5C1F68]/30 backdrop-blur-xl"
                style={{ borderColor: "var(--card-border)", background: "var(--card-solid)" }}>
                {/* Hairline top glow */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e054f1]/50 to-transparent" />
                {/* Dot grid */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

                <div className="relative grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#5C1F68]/10">
                  {/* Left — slideshow */}
                  <div className="flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br from-[#5C1F68]/10 to-transparent">
                    <HeroSlideshow reduceMotion={!!reduceMotion} />
                  </div>

                  {/* Right — features */}
                  <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.7 }}
                    className="flex flex-col justify-center gap-6 p-8 lg:p-12">
                    <div>
                      <Tag>Why LeSgo?</Tag>
                      <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-2 leading-snug tracking-tight" style={{ color: "var(--text-primary)" }}>
                        One app.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#e054f1]">
                          Every delivery.
                        </span>
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        Food, parcels, errands — LeSgo connects you to fast, trusted riders across Northern Philippines.
                      </p>
                    </div>

                    {/* Feature rows */}
                    <div className="space-y-2">
                      {[
                        { icon: Zap,    title: "Lightning Fast",     desc: "Deliveries in 30 minutes or less",    accent: "#f59e0b" },
                        { icon: MapPin, title: "Real-time Tracking",  desc: "Know exactly where your package is",  accent: "#22d3ee" },
                        { icon: Shield, title: "100% Secure",         desc: "Your items are protected always",     accent: "#34d399" },
                        { icon: Users,  title: "Verified Riders",     desc: "Trusted professionals every time",    accent: "#e054f1" },
                      ].map((f, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.07 }}
                          className="flex items-center gap-3 p-3 rounded-xl border hover:bg-white/[0.08] transition-all group cursor-default" style={{ borderColor: "var(--card-border)" }}>
                          <div className="flex-shrink-0 h-9 w-9 rounded-lg flex items-center justify-center"
                            style={{ background: `${f.accent}18` }}>
                            <f.icon className="h-4 w-4" style={{ color: f.accent }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold leading-none" style={{ color: "var(--text-primary)" }}>{f.title}</p>
                            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{f.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                      className="grid grid-cols-3 gap-3 pt-4 border-t" style={{ borderColor: "var(--divider)" }}>
                      {[
                        { value: "50K+",  label: "Happy Users", color: "#e054f1" },
                        { value: "24/7",  label: "Support",     color: "#22d3ee" },
                        { value: "99.9%", label: "Uptime",      color: "#34d399" },
                      ].map((s, i) => (
                        <div key={i} className="text-center p-3 rounded-xl border" style={{ background: "var(--input-bg)", borderColor: "var(--card-border)" }}>
                          <p className="text-xl font-extrabold" style={{ color: s.color }}>{s.value}</p>
                          <p className="text-[10px] mt-0.5 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
                {/* Bottom hairline */}
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5C1F68]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────────────── */}
        <section id="features" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader tag="Why Choose Us" title="Built Different" description="Everything you need for seamless delivery and logistics, in one platform." />
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              {[
                { icon: Smartphone, title: "Real-time Tracking",  desc: "Track your package every step of the way with live GPS updates.", accent: "#22d3ee" },
                { icon: Shield,     title: "Verified Riders",     desc: "All our riders are thoroughly vetted and background checked.",    accent: "#34d399" },
                { icon: Zap,        title: "Instant Updates",     desc: "Get notifications for every milestone in your delivery journey.", accent: "#f59e0b" },
              ].map((f, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="p-6 h-full group">
                    <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${f.accent}15` }}>
                      <f.icon className="h-5 w-5" style={{ color: f.accent }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────────────── */}
        <section id="services" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader tag="Our Services" title="Multiple Ways to Move" description="Choose the service that fits your needs." />
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              {[
                { title: "LeSeat",  subtitle: "Food Delivery",     desc: "We deliver the city's best meals straight to your door with lightning-fast speed and real-time tracking.", features: ["Quick pickup", "Affordable rates", "Safe drivers"],          image: "/lesgo-png-5.png" },
                { title: "LeSgo",   subtitle: "Instant Delivery",  desc: "Bypass the traffic and send small parcels, products, or documents across the city instantly.",            features: ["Real-time tracking", "Insured deliveries", "Same-day delivery"], image: "/courier-image.png"  },
                { title: "LesBuy",  subtitle: "Purchase Delivery", desc: "Our professional riders shop and deliver exactly what you need with real-time updates.",                  features: ["Shop for you", "Quick delivery", "Verified merchants"],           image: "/errands-image.png"  },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="p-6 h-full flex flex-col">
                    <div className="relative h-36 w-36 mb-5">
                      <Image src={s.image} alt={s.title} fill className="object-contain drop-shadow-xl" />
                    </div>
                    <div className="mb-3">
                      <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                      <Tag>{s.subtitle}</Tag>
                    </div>
                    <p className="text-sm mb-5 flex-grow leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                    <ul className="space-y-2 border-t pt-4" style={{ borderColor: "var(--divider)" }}>
                      {s.features.map((feat, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                          <CheckCircle className="h-3.5 w-3.5 text-[#e054f1] flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── COMING SOON ──────────────────────────────────────────────────── */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader tag="Exciting Updates" title="Coming Soon" description="We're expanding our services to serve you better." />
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              {[
                { image: "/services-image.png", title: "LeSride",   subtitle: "Ride Hailing",          desc: "Premium ride-sharing experience across the city." },
                { image: "/lesgo-png-3.png", title: "LesCargo",  subtitle: "Long Haul Delivery",    desc: "Heavy cargo and bulk shipments nationwide." },
                { image: "/lesgo-png-6.png", title: "LesTravel", subtitle: "Booking & Reservation", desc: "Travel and tour packages at your fingertips." },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="p-6 text-center group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5C1F68]/10 to-[#e054f1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex flex-col items-center">
                      <div className="relative h-36 w-36 mb-4">
                        <Image src={s.image} alt={s.title} fill className="object-contain drop-shadow-lg" />
                      </div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                      <Tag>{s.subtitle}</Tag>
                      <p className="text-sm mt-3 mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border" style={{ background: "var(--input-bg)", color: "var(--text-muted)", borderColor: "var(--card-border)" }}>
                        Coming Soon
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader tag="Customer Stories" title="What Our Users Say" description="Real feedback from real customers." />
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              {[
                { name: "Maria Santos",   role: "Business Owner",      quote: "LeSgo has transformed how I manage my deliveries. The tracking is incredibly accurate." },
                { name: "Juan Dela Cruz", role: "Regular User",         quote: "Fast, reliable, and affordable. I use LeSgo for all my courier needs now." },
                { name: "Ana Garcia",     role: "E-commerce Manager",   quote: "The customer support is exceptional. They really care about getting it right." },
              ].map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="p-6 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-[#e054f1] text-[#e054f1]" />)}
                    </div>
                    <p className="text-sm italic flex-grow leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>"{t.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--divider)" }}>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#5C1F68] to-[#e054f1] flex items-center justify-center text-xs font-bold text-white">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-none" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{t.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PARTNER CLUB ─────────────────────────────────────────────────── */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
              <motion.div variants={slideInLeft}>
                <Tag>100+ Partners Nationwide</Tag>
                <h2 className="text-3xl sm:text-4xl font-bold mt-5 mb-4 leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>Join the LeSgo Partner Club</h2>
                <p className="mb-7 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Our partnership offers businesses a wider reach of potential customers by providing exposure to audiences across the entire country.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Cost-efficient solution with small one-time investment",
                    "Powerful advertising tools to boost sales",
                    "Dedicated dashboard to manage reviews and growth",
                    "Real-time delivery tracking and direct chat support",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                      <CheckCircle className="h-4 w-4 text-[#e054f1] flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Btn href="#">Register Now</Btn>
              </motion.div>

              <motion.div variants={slideInRight} className="space-y-4">
                {[
                  { icon: Users,     title: "Wider Reach",       desc: "Connect with customers across the entire country and expand your business reach exponentially.", accent: "#e054f1" },
                  { icon: TrendingUp, title: "Business Growth",  desc: "Access powerful tools and analytics to track results and scale your business with transparency.",  accent: "#22d3ee" },
                  { icon: Headphones, title: "Dedicated Support", desc: "Get real-time tracking, direct chat support, and a dedicated dashboard for managing your partnership.", accent: "#34d399" },
                ].map((item, i) => (
                  <Card key={i} className="p-5 flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: `${item.accent}15` }}>
                      <item.icon className="h-5 w-5" style={{ color: item.accent }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                    </div>
                  </Card>
                ))}

                {/* App download buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.a href="#download" whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full border text-sm font-bold uppercase tracking-widest transition-all hover:shadow-md"
                    style={{ borderColor: "var(--card-border)", color: "var(--text-primary)", background: "var(--input-bg)" }}>
                    <Smartphone className="h-4 w-4" /> Merchant App
                  </motion.a>
                  <motion.a href="#download" whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full border text-sm font-bold uppercase tracking-widest transition-all hover:shadow-md"
                    style={{ borderColor: "var(--card-border)", color: "var(--text-primary)", background: "var(--input-bg)" }}>
                    <Bike className="h-4 w-4" /> Rider App
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── BECOME A RIDER ───────────────────────────────────────────────── */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
              <motion.div variants={slideInLeft}>
                <Tag>Join Our Team</Tag>
                <h2 className="text-3xl sm:text-4xl font-bold mt-5 mb-4 leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>Become a LeSgo Rider</h2>
                <p className="mb-7 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Earn flexible income on your own schedule. Join thousands of riders already making money with LeSgo.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Flexible working hours", "Competitive earnings", "Insurance coverage", "24/7 support"].map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                      <CheckCircle className="h-4 w-4 text-[#e054f1] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Btn href="#">Apply Now</Btn>
              </motion.div>

              <motion.div variants={slideInRight} className="space-y-4">
                {[
                  { icon: DollarSign, title: "Earnings",     desc: "Highest profit sharing setup in the Philippines — earn up to ₱2,500 per day.", accent: "#f59e0b" },
                  { icon: TrendingUp, title: "Growth",       desc: "Top riders earn ₱50,000+ monthly with incentives.",                              accent: "#34d399" },
                  { icon: Award,      title: "Recognition",  desc: "Get recognized and rewarded for excellent service.",                              accent: "#e054f1" },
                ].map((item, i) => (
                  <Card key={i} className="p-5 flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: `${item.accent}15` }}>
                      <item.icon className="h-5 w-5" style={{ color: item.accent }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────────────────── */}
        <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
              <motion.div variants={slideInLeft}>
                <Card className="p-8">
                  <Sparkles className="h-8 w-8 text-[#e054f1] mb-4" />
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Story</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                    Founded in 2023 by <span className="text-[#e054f1] font-semibold">Mr. Sean Lester Suniga</span>, LeSgo was born in the heart of <span className="text-[#e054f1] font-semibold">Northern Philippines</span> with a simple mission: to revolutionize logistics and make fast, reliable, and affordable delivery accessible to everyone.
                  </p>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                    Rooted in Cagayan Valley and proud of its Northern Philippine heritage, LeSgo is built for the local community — connecting riders, merchants, and customers across the region and beyond.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Today, we're proud to serve thousands of customers and riders across the country, making delivery seamless and trustworthy.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={slideInRight} className="space-y-5">
                <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Get in Touch</h3>
                <div className="space-y-3">
                  {[
                    { icon: Mail,  label: "Email",   value: "hello@lesgo.ph",          href: "mailto:hello@lesgo.ph" },
                    { icon: Phone, label: "Phone",   value: "+63 (2) 1234-5678",        href: "tel:+6321234-5678" },
                    { icon: MapPin, label: "Address", value: "Claveria, Cagayan Valley, PH", href: "#" },
                  ].map((item) => (
                    <motion.a key={item.label} href={item.href} whileHover={{ x: 3 }}
                      className="flex items-center gap-4 p-4 rounded-xl border hover:opacity-80 transition-all group" style={{ background: "var(--input-bg)", borderColor: "var(--card-border)" }}>
                      <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-[#e054f1]/10 flex items-center justify-center group-hover:bg-[#e054f1]/20 transition-all">
                        <item.icon className="h-4 w-4 text-[#e054f1]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-medium" style={{ color: "var(--text-muted)" }}>{item.label}</p>
                        <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Follow Us</p>
                  <div className="flex gap-2">
                    {[
                      { icon: Facebook,  label: "Facebook",  href: "https://facebook.com/lesgo",  hoverBg: "#1877F2" },
                      { icon: Instagram, label: "Instagram", href: "https://instagram.com/lesgo", hoverBg: "#E1306C" },
                    ].map((s) => (
                      <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.95 }} title={s.label}
                        className="h-10 w-10 rounded-xl border flex items-center justify-center hover:bg-[#e054f1] hover:border-[#e054f1] transition-all duration-300 group" style={{ background: "var(--input-bg)", borderColor: "var(--card-border)" }}>
                        <s.icon className="h-4 w-4 group-hover:text-white transition-colors" style={{ color: "var(--text-primary)" }} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div className="relative rounded-3xl overflow-hidden border p-12 text-center" style={{ borderColor: "var(--card-border)" }}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              {/* BG glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5C1F68]/30 via-transparent to-[#5C1F68]/20" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e054f1]/50 to-transparent" />
              <div className="relative">
                <Tag>Get Started</Tag>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-5 mb-4 tracking-tight">
                  Ready to Experience LeSgo?
                </h2>
                <p className="mb-8 max-w-lg mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Join thousands of satisfied customers and riders. Download the app today and get your first delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Btn href="#download">Download Now</Btn>
                  <Btn href="#services" variant="ghost">Learn More</Btn>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}



