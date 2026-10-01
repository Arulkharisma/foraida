"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, ChevronDown } from "lucide-react";
import { siteData } from "@/data/siteData";
import { DynamicIcon } from "./IconHelper";

export const Reasons: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const initialVisibleCount = 6;
  const displayedReasons = showAll
    ? siteData.reasons
    : siteData.reasons.slice(0, initialVisibleCount);

  return (
    <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-romantic-soft text-romantic-primary text-xs font-medium mb-3 shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-romantic-primary" />
          <span>Things I Adore</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-romantic-text font-normal mb-3">
          Little Reasons Why I Like You
        </h2>
        <p className="text-sm text-romantic-muted font-light max-w-md mx-auto">
          Just a few of the countless things about you that make my heart flutter.
        </p>
      </div>

      {/* Grid of Reason Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {displayedReasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card-interactive rounded-3xl p-6 sm:p-7 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-romantic-soft to-romantic-cream flex items-center justify-center text-romantic-primary shadow-xs group-hover:scale-110 transition-transform">
                    <DynamicIcon name={reason.iconName} className="w-6 h-6" />
                  </div>
                  {reason.tag && (
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-romantic-primary bg-white/90 px-2.5 py-1 rounded-full border border-romantic-soft/60">
                      {reason.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl text-romantic-text font-normal mb-2 group-hover:text-romantic-primary transition-colors">
                  {reason.title}
                </h3>

                <p className="text-sm text-romantic-text/80 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Cute tiny footer sparkle */}
              <div className="mt-4 pt-3 border-t border-romantic-soft/30 flex items-center justify-end">
                <Sparkles className="w-3.5 h-3.5 text-romantic-primary/40 group-hover:text-romantic-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Expand / Show More Button if more reasons exist */}
      {siteData.reasons.length > initialVisibleCount && (
        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/90 border border-romantic-soft text-romantic-primary hover:bg-white text-sm font-medium shadow-sm transition-all"
          >
            <span>{showAll ? "Show Less" : "Discover More Reasons ♡"}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </motion.button>
        </div>
      )}

      {/* The Final Revelation Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-12 glass-panel rounded-3xl p-8 sm:p-10 text-center max-w-2xl mx-auto border-2 border-romantic-soft/60 relative overflow-hidden bg-gradient-to-r from-romantic-soft/30 via-white to-romantic-lavender/30"
      >
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-romantic-soft/60 flex items-center justify-center text-romantic-primary">
          <Heart className="w-5 h-5 fill-romantic-primary" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-romantic-text font-normal mb-3">
          {siteData.reasonsFinalNote.headline}
        </h3>
        <p className="font-handwriting text-2xl sm:text-3xl text-romantic-primary leading-relaxed max-w-lg mx-auto">
          &ldquo;{siteData.reasonsFinalNote.body}&rdquo;
        </p>
      </motion.div>
    </section>
  );
};
