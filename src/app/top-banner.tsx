"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-[99] pt-16 sm:pt-20"
    >
      <div className="relative w-full h-32 sm:h-40 overflow-hidden bg-gradient-to-r from-[#5a2a8b] via-[#6b3fa0] to-[#7a4fb5]">
        {/* Banner Content */}
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex-1">
            <p className="text-white font-bold text-lg">🎉 Limited Time Offer: Get 30% off your first delivery!</p>
            <p className="text-white/80 text-sm">Use code: WELCOME30</p>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          onClick={() => setIsVisible(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-lg transition-colors z-10"
        >
          <X className="h-6 w-6 text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
}
