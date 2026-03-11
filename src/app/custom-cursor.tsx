"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer");

      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>

      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-[#a78bfa] to-[#ec4899] rounded-full shadow-lg shadow-[#a78bfa]/50" />
      </motion.div>

      {/* Outer ring cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div
          className={`w-10 h-10 border-2 rounded-full transition-all duration-300 ${
            isHovering
              ? "border-[#ec4899] shadow-lg shadow-[#ec4899]/40"
              : "border-[#a78bfa]/50 shadow-lg shadow-[#a78bfa]/20"
          }`}
        />
      </motion.div>

      {/* Trailing particles */}
      <motion.div
        className="pointer-events-none fixed z-[9997]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1,
        }}
      >
        <div className="w-3 h-3 bg-[#a78bfa]/30 rounded-full blur-sm" />
      </motion.div>
    </>
  );
}
