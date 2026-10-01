"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MailOpen, Heart, X } from "lucide-react";
import { siteData } from "@/data/siteData";

export const OpenWhen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 max-w-3xl mx-auto text-center">
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-romantic-soft text-romantic-primary text-xs font-medium mb-3 shadow-xs">
          <Mail className="w-3.5 h-3.5" />
          <span>{siteData.openWhen.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-romantic-text font-normal mb-3">
          {siteData.openWhen.title}
        </h2>
        <p className="text-sm text-romantic-muted font-light max-w-md mx-auto">
          {siteData.openWhen.subtitle}
        </p>
      </div>

      {/* Interactive Envelope Graphic & Button */}
      <div className="relative max-w-md mx-auto">
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-romantic-soft/70 shadow-romantic text-center relative overflow-hidden group cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Animated decorative envelope icon */}
          <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <motion.div
              animate={{
                rotate: isOpen ? [0, -5, 5, 0] : 0,
                scale: isOpen ? 1.05 : 1,
              }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-romantic-soft via-white to-romantic-cream border border-romantic-soft shadow-md flex items-center justify-center text-romantic-primary"
            >
              {isOpen ? (
                <MailOpen className="w-10 h-10 text-romantic-primary" />
              ) : (
                <Mail className="w-10 h-10 text-romantic-primary group-hover:scale-110 transition-transform" />
              )}
            </motion.div>

            {/* Wax seal simulation */}
            <div className="absolute -bottom-1 w-8 h-8 rounded-full bg-romantic-primary border-2 border-white shadow-md flex items-center justify-center text-white text-[10px] font-bold">
              <Heart className="w-4 h-4 fill-white" />
            </div>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-romantic-text font-normal mb-2">
            A Letter For A Rainy Day
          </h3>
          <p className="text-xs sm:text-sm text-romantic-muted font-light mb-6">
            Click below to unfold the letter whenever you need a warm hug.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all shadow-sm ${
              isOpen
                ? "bg-white text-romantic-text border border-romantic-soft hover:bg-romantic-soft/30"
                : "bg-romantic-primary text-white hover:bg-romantic-primaryHover shadow-romantic"
            }`}
          >
            {isOpen ? "Close Letter" : "Open Letter ♡"}
          </motion.button>
        </motion.div>
      </div>

      {/* Unfolded Letter Card Modal / Expand */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FFFDF9] border border-amber-200/80 rounded-3xl p-7 sm:p-10 shadow-2xl text-left overflow-hidden"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 27px, #FCE7F3 28px)",
                lineHeight: "28px",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close letter"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-romantic-text shadow-sm flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Letter Header */}
              <div className="flex items-center justify-between text-xs text-romantic-muted mb-4 border-b border-romantic-soft/50 pb-2">
                <span className="font-mono text-[11px]">
                  {siteData.openWhen.letterDate}
                </span>
                <span className="inline-flex items-center gap-1 text-romantic-primary">
                  <Heart className="w-3 h-3 fill-romantic-primary" />
                  Special Delivery
                </span>
              </div>

              {/* Salutation */}
              <p className="font-handwriting text-2xl sm:text-3xl text-romantic-primary font-bold mb-4">
                {siteData.openWhen.letterSalutation.replace(
                  "[HER_NAME]",
                  siteData.herName
                )}
              </p>

              {/* Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-romantic-text/90 font-serif leading-relaxed">
                {siteData.openWhen.letterParagraphs.map((p, idx) => (
                  <p key={idx}>
                    {p
                      .replace("[HER_NAME]", siteData.herName)
                      .replace("[MY_NAME]", siteData.myName)}
                  </p>
                ))}
              </div>

              {/* Signoff */}
              <div className="mt-8 text-right font-handwriting">
                <p className="text-xl text-romantic-muted">
                  {siteData.openWhen.letterSignoff}
                </p>
                <p className="text-3xl sm:text-4xl text-romantic-primary font-bold mt-1">
                  {siteData.openWhen.letterAuthor.replace(
                    "[MY_NAME]",
                    siteData.myName
                  )}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
