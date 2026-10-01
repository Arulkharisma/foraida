"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteData, IfYouWereOption } from "@/data/siteData";

export const IfYouWere: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<IfYouWereOption>(
    siteData.ifYouWere.options[2] // Default selected: Star
  );

  return (
    <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-romantic-soft text-romantic-primary text-xs font-medium mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{siteData.ifYouWere.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-romantic-text font-normal mb-2">
          {siteData.ifYouWere.title}
        </h2>
        <p className="text-sm text-romantic-muted font-light max-w-md mx-auto">
          {siteData.ifYouWere.subtitle}
        </p>
      </div>

      {/* Option Buttons Grid */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
        {siteData.ifYouWere.options.map((option) => {
          const isSelected = selectedOption.id === option.id;
          return (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedOption(option)}
              className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl transition-all duration-300 border text-sm sm:text-base font-medium ${
                isSelected
                  ? "bg-white border-romantic-primary text-romantic-primary shadow-romantic ring-2 ring-romantic-soft"
                  : "bg-white/70 border-white text-romantic-text hover:bg-white hover:border-romantic-soft shadow-xs"
              }`}
            >
              <span className="text-xl sm:text-2xl">{option.emoji}</span>
              <span>{option.title}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Revealed Message Card with Smooth Spring Transition */}
      <div className="max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedOption.id}
            initial={{ opacity: 0, y: 15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`glass-panel rounded-3xl p-6 sm:p-8 text-center relative border border-romantic-soft/60 overflow-hidden bg-gradient-to-br ${selectedOption.accentColor}`}
          >
            {/* Background emoji watermark */}
            <span className="absolute -right-4 -bottom-4 text-7xl sm:text-8xl opacity-15 select-none pointer-events-none">
              {selectedOption.emoji}
            </span>

            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl">
              {selectedOption.emoji}
            </div>

            <p className="text-xs uppercase tracking-widest text-romantic-primary font-semibold mb-2">
              {selectedOption.tagline}
            </p>

            <h3 className="font-serif text-xl sm:text-2xl text-romantic-text font-normal mb-3">
              If you were a {selectedOption.title.toLowerCase()}...
            </h3>

            <p className="text-base sm:text-lg text-romantic-text/90 font-light leading-relaxed">
              &ldquo;{selectedOption.message}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
