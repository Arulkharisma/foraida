"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { siteData } from "@/data/siteData";

export const Greeting: React.FC = () => {
  return (
    <section id="greeting" className="relative py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
      >
        {/* Soft corner accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-romantic-cream/30 rounded-bl-full -z-10" />
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-romantic-lavender/30 rounded-tr-full -z-10" />

        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="h-px w-8 bg-romantic-soft" />
          <span className="text-xs uppercase tracking-widest text-romantic-primary font-medium flex items-center gap-1.5">
            <Heart className="w-3 h-3 fill-romantic-primary" />
            {siteData.greeting.badge}
          </span>
          <span className="h-px w-8 bg-romantic-soft" />
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-romantic-text font-normal mb-8 leading-snug">
          {siteData.greeting.title.replace("[HER_NAME]", siteData.herName)}
        </h2>

        {/* Paragraphs with staggered reveal */}
        <div className="space-y-4 text-center text-base sm:text-lg text-romantic-text/90 font-light leading-relaxed max-w-xl mx-auto">
          {siteData.greeting.paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
            >
              {p.replace("[HER_NAME]", siteData.herName).replace("[MY_NAME]", siteData.myName)}
            </motion.p>
          ))}
        </div>

        {/* Highlight quote box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-romantic-soft/40 via-romantic-cream/40 to-romantic-lavender/30 border border-white/60 text-center"
        >
          <p className="font-serif italic text-lg sm:text-xl text-romantic-primary">
            &ldquo;{siteData.greeting.highlightQuote}&rdquo;
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
