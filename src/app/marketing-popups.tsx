"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";

interface Popup {
  id: string;
  title: string;
  description: string;
  promoStrip?: string;
  icon: React.ComponentType<{ className?: string }>;
  cta: string;
  ctaLink: string;
  delay: number;
  color: "purple" | "pink" | "orange";
  position: "center" | "bottom-left";
}

const popups: Popup[] = [
  {
    id: "welcome",
    title: "Welcome to LeSgo! 🎉",
    description: "Get FREE DELIVERY on your first booking *WELCOMELESGO",
    icon: Gift,
    cta: "Claim Offer",
    ctaLink: "#download",
    delay: 3000,
    color: "orange",
    position: "bottom-left",
  },
  {
    id: "app-launch",
    title: "📱🚀 App Launch Coming Soon",
    description: "Get ready for the LeSgo mobile app! Sign up to be notified when we launch.",
    icon: Gift,
    cta: "Notify Me",
    ctaLink: "#download",
    delay: 8000,
    color: "orange",
    position: "bottom-left",
  },
  {
    id: "community",
    title: "👥🌟 Join Our Community",
    description: "Be part of the fastest growing courier network. Become a LeSgo partner today.",
    promoStrip: "📣 Reach more customers for your business! Join the LeSgo Partner Club",
    icon: Users,
    cta: "Join Now",
    ctaLink: "#",
    delay: 15000,
    color: "orange",
    position: "bottom-left",
  },
  {
    id: "rider",
    title: "Become a Rider",
    description: "Earn ₱15-25 per delivery. Join 5,000+ riders today!",
    promoStrip: "⚡ Highest profit sharing in the Philippines — earn up to ₱2,500/day!",
    icon: Zap,
    cta: "Apply Now",
    ctaLink: "#",
    delay: 25000,
    color: "orange",
    position: "bottom-left",
  },
];

export default function MarketingPopups() {
  const [visiblePopups, setVisiblePopups] = useState<Set<string>>(new Set());
  const [closedPopups, setClosedPopups] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Version-based reset: if version changed, clear old popup keys
    const POPUP_VERSION = "v2";
    if (sessionStorage.getItem("popup_version") !== POPUP_VERSION) {
      popups.forEach((p) => sessionStorage.removeItem(`popup_shown_${p.id}`));
      sessionStorage.removeItem("popupBannerClosed");
      sessionStorage.setItem("popup_version", POPUP_VERSION);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    popups.forEach((popup) => {
      const timer = setTimeout(() => {
        // Check inside the timer so it re-evaluates at show time
        if (sessionStorage.getItem(`popup_shown_${popup.id}`)) return;
        setVisiblePopups((prev) => new Set(prev).add(popup.id));
        sessionStorage.setItem(`popup_shown_${popup.id}`, "true");
      }, popup.delay);

      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);
  const closePopup = (id: string) => {
    setVisiblePopups((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
    setClosedPopups((prev) => new Set(prev).add(id));
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return {
          gradient: "from-[#5C1F68] to-[#7c3aed]",
          glow: "shadow-[#5C1F68]/40",
          accent: "bg-[#5C1F68]",
          text: "text-[#5C1F68]",
        };
      case "pink":
        return {
          gradient: "from-[#ec4899] to-[#db2777]",
          glow: "shadow-[#ec4899]/40",
          accent: "bg-[#ec4899]",
          text: "text-[#ec4899]",
        };
      case "orange":
        return {
          gradient: "from-[#f97316] to-[#ea580c]",
          glow: "shadow-[#f97316]/40",
          accent: "bg-[#f97316]",
          text: "text-[#f97316]",
        };
      default:
        return {
          gradient: "from-[#5C1F68] to-[#7c3aed]",
          glow: "shadow-[#5C1F68]/40",
          accent: "bg-[#5C1F68]",
          text: "text-[#5C1F68]",
        };
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <AnimatePresence>
        {Array.from(visiblePopups).map((popupId) => {
          const popup = popups.find((p) => p.id === popupId);
          if (!popup) return null;

          const colors = getColorClasses(popup.color);
          const Icon = popup.icon;

          const isCenter = popup.position === "center";
          const isBottomLeft = popup.position === "bottom-left";

          return (
            <motion.div
              key={popup.id}
              initial={
                isCenter
                  ? { opacity: 0, scale: 0.8, y: 20 }
                  : { opacity: 0, x: -50, y: 50 }
              }
              animate={
                isCenter
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 1, x: 0, y: 0 }
              }
              exit={
                isCenter
                  ? { opacity: 0, scale: 0.8, y: 20 }
                  : { opacity: 0, x: -50, y: 50 }
              }
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              className={`pointer-events-auto fixed ${
                isCenter
                  ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  : "bottom-6 left-6"
              }`}
            >
              {/* Backdrop - only for center popups */}
              {isCenter && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => closePopup(popup.id)}
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                />
              )}

              {/* Popup Card */}
              <motion.div
                className={`relative ${
                  isCenter ? "w-96" : "w-80"
                } max-w-[calc(100vw-32px)] rounded-2xl bg-gradient-to-br from-[#1a0a2e] to-[#0f0319] border border-white/10 overflow-hidden shadow-2xl ${colors.glow}`}
                animate={
                  visiblePopups.has(popup.id)
                    ? { y: [0, -10, 0] }
                    : undefined
                }
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                  animate={
                    visiblePopups.has(popup.id)
                      ? { backgroundPosition: ["0% 0%", "100% 100%"] }
                      : undefined
                  }
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Promo Strip */}
                  {popup.promoStrip && (
                    <div className={`-mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-5 px-4 py-2 bg-gradient-to-r ${colors.gradient} text-center`}>
                      <p className="text-xs font-bold text-white leading-snug">{popup.promoStrip}</p>
                    </div>
                  )}
                  {/* Close Button */}
                  <motion.button
                    onClick={() => closePopup(popup.id)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <X className="h-5 w-5 text-white hover:text-white" />
                  </motion.button>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} p-3 mb-4 flex items-center justify-center`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`${isCenter ? "text-2xl" : "text-xl"} font-bold text-white mb-2`}
                  >
                    {popup.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`${isCenter ? "text-white" : "text-white"} ${
                      isCenter ? "mb-8" : "mb-6"
                    } leading-relaxed ${isCenter ? "text-base" : "text-sm"}`}
                  >
                    {popup.description}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`flex ${isCenter ? "gap-3" : "flex-col gap-2"}`}
                  >
                    <motion.a
                      href={popup.ctaLink}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${isCenter ? "flex-1" : "w-full"} px-4 py-2 rounded-lg bg-gradient-to-r ${colors.gradient} font-bold text-center text-white hover:shadow-lg ${colors.glow} transition-all`}
                    >
                      {popup.cta}
                    </motion.a>
                    {isCenter && (
                      <motion.button
                        onClick={() => closePopup(popup.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold transition-all border border-white/20"
                        style={{ color: "#ffffff" }}
                      >
                        Later
                      </motion.button>
                    )}
                  </motion.div>

                  {/* Progress indicator */}
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 15 }}
                    onAnimationComplete={() => closePopup(popup.id)}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colors.gradient}`}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

