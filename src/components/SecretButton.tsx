"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, X } from "lucide-react";
import confetti from "canvas-confetti";
import { siteData } from "@/data/siteData";

export const SecretButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSecret = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 35,
        spread: 70,
        origin: { y: 0.5 },
        colors: ["#FFE8BA", "#E8DFFF", "#FF7FA8", "#FFFFFF"],
      });
    } catch {
      // fallback
    }
  };

  return (
    <>
      {/* Subtle Easter Egg Trigger: A tiny, gently pulsing starry sparkle */}
      <div className="py-6 flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.35, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOpenSecret}
          title="✨ Something is waiting here..."
          aria-label="Secret Easter Egg"
          className="p-2 rounded-full text-romantic-soft hover:text-romantic-primary transition-colors focus:outline-none cursor-pointer group relative"
        >
          <Sparkles className="w-4 h-4 text-romantic-soft group-hover:text-romantic-primary animate-pulse" />
          <span className="sr-only">Secret button</span>
        </motion.button>
      </div>

      {/* Secret Starry Sky Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-[#160E18]/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 text-white"
          >
            {/* Twinkling ambient stars in background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                  style={{
                    top: `${(i * 19) % 100}%`,
                    left: `${(i * 31) % 100}%`,
                    animationDelay: `${(i % 5) * 0.5}s`,
                    opacity: 0.7,
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 sm:p-10 text-center shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close secret"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-amber-300/20 border border-amber-300/40 flex items-center justify-center text-amber-300 shadow-glow">
                <Star className="w-7 h-7 fill-amber-300" />
              </div>

              <span className="text-xs uppercase tracking-widest text-pink-300 font-semibold mb-2 inline-block">
                Easter Egg Unlocked
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
                {siteData.secret.headline}
              </h3>

              <p className="font-handwriting text-xl sm:text-2xl text-pink-200 mb-6">
                &ldquo;{siteData.secret.subhead}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
                {siteData.secret.message}
              </p>

              <p className="text-xs text-pink-300/90 italic">
                {siteData.secret.note}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
