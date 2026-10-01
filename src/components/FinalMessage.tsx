"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { siteData } from "@/data/siteData";

export const FinalMessage: React.FC = () => {
  const handleHeartClick = () => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#FF7FA8", "#FFD6E3", "#FFF3D6", "#E8DFFF"],
      });
    } catch {
      // fallback
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 max-w-3xl mx-auto text-center relative">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <div className="w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-gradient-to-tr from-romantic-soft/50 via-romantic-cream/40 to-romantic-lavender/40 blur-3xl opacity-70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="glass-panel rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden border-2 border-romantic-soft/80 shadow-romantic"
      >
        {/* Subtle decorative heart watermark */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-romantic-soft/20 pointer-events-none -z-10" />

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 border border-romantic-soft text-romantic-primary text-xs font-medium mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{siteData.finalMessage.badge}</span>
        </div>

        {/* Her Name heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-romantic-text font-normal mb-8 leading-tight">
          {siteData.finalMessage.herName.replace("[HER_NAME]", siteData.herName)}
        </h2>

        {/* Sincere letter body */}
        <div className="space-y-5 text-base sm:text-xl text-romantic-text/90 font-light leading-relaxed max-w-lg mx-auto">
          <p>{siteData.finalMessage.paragraph1}</p>
          <p>{siteData.finalMessage.paragraph2}</p>
          <p className="font-serif italic text-xl sm:text-2xl text-romantic-primary font-normal pt-2">
            &ldquo;{siteData.finalMessage.thankYou}&rdquo;
          </p>
        </div>

        {/* Signature */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <p className="font-serif text-sm uppercase tracking-widest text-romantic-muted mb-1">
            {siteData.finalMessage.signaturePrefix}
          </p>
          <p className="font-handwriting text-4xl sm:text-5xl text-romantic-primary font-bold">
            {siteData.finalMessage.signatureName.replace(
              "[MY_NAME]",
              siteData.myName
            )}
          </p>

          {/* Interactive closing heart button */}
          <motion.button
            whileHover={{ scale: 1.25, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            onClick={handleHeartClick}
            aria-label="Send love back"
            className="mt-6 w-14 h-14 rounded-full bg-gradient-to-tr from-romantic-primary to-[#ff94b8] text-white flex items-center justify-center shadow-romantic hover:shadow-glow transition-all cursor-pointer group"
          >
            <Heart className="w-7 h-7 fill-white drop-shadow-sm group-hover:scale-110 transition-transform" />
          </motion.button>
          <span className="text-[11px] text-romantic-muted mt-2 tracking-wide font-light">
            (tap the heart ♡)
          </span>
        </div>
      </motion.div>

      {/* Footer copyright / love note */}
      <footer className="mt-16 text-center text-xs text-romantic-muted/80 space-y-1">
        <p>Made with endless love & care, just for you.</p>
        <p className="font-mono text-[10px]">Forever & Always</p>
      </footer>
    </section>
  );
};
