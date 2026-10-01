"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ChevronDown } from "lucide-react";
import { siteData } from "@/data/siteData";

interface HeroProps {
  onOpen: () => void;
}

interface FloatingHeart {
  id: number;
  x: number;
  delay: number;
  size: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [burstHearts, setBurstHearts] = useState<FloatingHeart[]>([]);

  const handleOpenClick = () => {
    setIsOpening(true);

    // Create a gentle upward flutter of romantic hearts
    const hearts: FloatingHeart[] = Array.from({ length: 16 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 240, // spread in px
      delay: Math.random() * 0.4,
      size: Math.random() * 16 + 14,
    }));
    setBurstHearts(hearts);

    // Trigger parent scroll callback after smooth animation starts
    setTimeout(() => {
      onOpen();
    }, 650);
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center overflow-hidden">
      {/* Gentle center glow */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-romantic-soft/40 via-romantic-cream/30 to-romantic-lavender/30 blur-3xl -z-10 pointer-events-none" />

      {/* Hero Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-romantic-soft shadow-sm text-romantic-primary text-xs sm:text-sm font-medium mb-6 tracking-wide"
      >
        <Sparkles className="w-3.5 h-3.5 text-romantic-primary animate-sparkle" />
        <span>A little surprise crafted for you</span>
      </motion.div>

      {/* Main floating heart icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-6"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-romantic-soft via-romantic-cream to-romantic-lavender p-0.5 shadow-romantic flex items-center justify-center"
        >
          <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-romantic-primary fill-romantic-primary drop-shadow-sm" />
          </div>
        </motion.div>

        {/* Floating tiny halo sparkle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute -top-2 -right-2 text-amber-300"
        >
          <Sparkles className="w-5 h-5 fill-amber-200" />
        </motion.div>
      </motion.div>

      {/* Greeting Typography */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-romantic-primary mb-3 select-none"
      >
        {siteData.hero.greeting}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-romantic-text font-normal max-w-xl leading-tight mb-8"
      >
        {siteData.hero.subGreeting}
      </motion.h1>

      {/* Call to action button with burst animation */}
      <div className="relative">
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          onClick={handleOpenClick}
          disabled={isOpening}
          className="relative z-10 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-romantic-primary to-[#ff94b8] text-white font-medium text-base sm:text-lg shadow-romantic hover:shadow-glow transition-all duration-300 flex items-center gap-3 cursor-pointer active:outline-none focus:outline-none focus:ring-4 focus:ring-romantic-soft"
        >
          <span>{siteData.hero.buttonText}</span>
          <Heart className="w-5 h-5 fill-white/80" />
        </motion.button>

        {/* Upward floating hearts triggered on click */}
        <AnimatePresence>
          {burstHearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ y: 0, x: heart.x, opacity: 1, scale: 0.6 }}
              animate={{
                y: -180,
                x: heart.x * 1.3,
                opacity: 0,
                scale: 1.3,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.2,
                delay: heart.delay,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-0 pointer-events-none -translate-x-1/2 -z-10"
            >
              <Heart
                style={{ width: heart.size, height: heart.size }}
                className="text-romantic-primary fill-romantic-primary/70"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Gentle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 text-romantic-muted text-xs tracking-wider font-light select-none"
      >
        <span>{siteData.hero.scrollHint}</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};
