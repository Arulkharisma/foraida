"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Trophy } from "lucide-react";
import { siteData } from "@/data/siteData";

interface ClickHeartParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  text?: string;
}

export const HeartInteraction: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [particles, setParticles] = useState<ClickHeartParticle[]>([]);
  const [isSparkling, setIsSparkling] = useState(false);

  // Retrieve current reaction text based on stages
  const getReactionText = (count: number) => {
    if (count === 0) return "Tap the heart ♡";
    const stages = siteData.interactiveHeart.stages;
    let current = stages[0].text;
    for (const stage of stages) {
      if (count >= stage.count) {
        current = stage.text;
      }
    }
    return current;
  };

  const handleHeartClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Spawn 3 mini floating hearts from click position
    const newParticles: ClickHeartParticle[] = Array.from({ length: 3 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      x: (Math.random() - 0.5) * 120,
      y: -Math.random() * 80 - 40,
      rotation: (Math.random() - 0.5) * 40,
      scale: Math.random() * 0.4 + 0.8,
    }));

    setParticles((prev) => [...prev.slice(-15), ...newParticles]);

    // Trigger special sparkle milestone on 5, 10, 15 clicks
    if (newCount % 5 === 0) {
      setIsSparkling(true);
      setTimeout(() => setIsSparkling(false), 2000);
    }
  };

  return (
    <section className="py-16 px-4 max-w-xl mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-romantic-soft/60 text-romantic-primary text-xs font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{siteData.interactiveHeart.badge}</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-romantic-text font-normal mb-2">
          {siteData.interactiveHeart.title}
        </h3>
        <p className="text-xs sm:text-sm text-romantic-muted max-w-sm mx-auto mb-8 font-light">
          {siteData.interactiveHeart.subtitle}
        </p>

        {/* Heart Interactive Button Container */}
        <div className="relative inline-block my-4">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.88 }}
            onClick={handleHeartClick}
            aria-label="Tap to show love"
            className="relative p-6 sm:p-8 rounded-full bg-gradient-to-tr from-romantic-soft via-white to-romantic-cream border-2 border-white/80 shadow-romantic focus:outline-none focus:ring-4 focus:ring-romantic-soft/50 group cursor-pointer"
          >
            {/* Pulsing ring */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full border-2 border-romantic-primary pointer-events-none"
            />

            <Heart
              className={`w-16 h-16 sm:w-20 sm:h-20 transition-colors duration-300 ${
                clickCount > 0
                  ? "text-romantic-primary fill-romantic-primary drop-shadow-md"
                  : "text-romantic-primary/70 fill-romantic-soft group-hover:fill-romantic-primary/80"
              }`}
            />

            {/* Click milestone starburst */}
            {isSparkling && (
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1.4, rotate: 180, opacity: [1, 0] }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none text-amber-400"
              >
                <Sparkles className="w-24 h-24" />
              </motion.div>
            )}
          </motion.button>

          {/* Floating heart bursts on click */}
          <AnimatePresence>
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 1, x: 0, y: 0, scale: 0.5, rotate: 0 }}
                animate={{
                  opacity: 0,
                  x: p.x,
                  y: p.y,
                  scale: p.scale,
                  rotate: p.rotation,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 text-romantic-primary"
              >
                <Heart className="w-6 h-6 fill-romantic-primary" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Reaction speech bubble */}
        <div className="min-h-[52px] flex items-center justify-center mt-3">
          <motion.div
            key={clickCount}
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="inline-block px-5 py-2 rounded-2xl bg-white border border-romantic-soft shadow-sm"
          >
            <p className="font-handwriting text-xl sm:text-2xl text-romantic-primary font-bold">
              {getReactionText(clickCount)}
            </p>
          </motion.div>
        </div>

        {/* Taps count indicator */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-romantic-muted">
          <span>Taps registered:</span>
          <span className="px-2 py-0.5 rounded-full bg-romantic-cream font-semibold text-romantic-text">
            {clickCount}
          </span>
          {clickCount >= 10 && (
            <span className="flex items-center gap-1 text-amber-500 font-medium">
              <Trophy className="w-3.5 h-3.5" />
              Master of Affection
            </span>
          )}
        </div>
      </motion.div>
    </section>
  );
};
