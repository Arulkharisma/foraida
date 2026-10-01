"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";
import { siteData, GalleryPhoto } from "@/data/siteData";

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = siteData.gallery.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % siteData.gallery.length;
    setActivePhoto(siteData.gallery[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = siteData.gallery.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + siteData.gallery.length) % siteData.gallery.length;
    setActivePhoto(siteData.gallery[prevIndex]);
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-romantic-soft text-romantic-primary text-xs font-medium mb-3 shadow-xs">
          <Camera className="w-3.5 h-3.5" />
          <span>Captured Moments</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-romantic-text font-normal mb-3">
          Our Little Photo Gallery
        </h2>
        <p className="text-sm text-romantic-muted font-light max-w-md mx-auto">
          Tap any card to view it full screen with its story.
        </p>
      </div>

      {/* Grid of Photo Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteData.gallery.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActivePhoto(photo)}
            className="cursor-pointer group rounded-3xl overflow-hidden bg-white border border-romantic-soft/60 shadow-romantic p-3 transition-all duration-300 flex flex-col"
          >
            {/* Image container / gradient preview */}
            <div
              className={`relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br ${
                photo.gradient || "from-rose-200 to-amber-100"
              } flex flex-col items-center justify-center p-6 text-center text-romantic-text/80 shadow-inner`}
            >
              {photo.imageUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex flex-col items-center justify-center z-10 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-romantic-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 fill-romantic-primary/30" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-romantic-primary">
                    {photo.date}
                  </span>
                  <p className="font-serif text-base text-romantic-text font-medium leading-tight">
                    {photo.title}
                  </p>
                </div>
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-romantic-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                <span className="text-xs bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-romantic-primary font-medium shadow-xs">
                  Tap to open
                </span>
              </div>
            </div>

            {/* Caption below */}
            <div className="p-3 text-left">
              <h4 className="font-serif text-base text-romantic-text font-medium truncate">
                {photo.title}
              </h4>
              <p className="text-xs text-romantic-muted line-clamp-2 mt-1 font-light leading-relaxed">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-romantic-text shadow-sm flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev & Next navigation buttons */}
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-romantic-text shadow-md flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-romantic-text shadow-md flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image / Gradient showcase */}
              <div
                className={`relative aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br ${
                  activePhoto.gradient || "from-rose-200 to-amber-100"
                } flex items-center justify-center p-8`}
              >
                {activePhoto.imageUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={activePhoto.imageUrl}
                    alt={activePhoto.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm max-w-xs">
                    <Heart className="w-10 h-10 text-romantic-primary fill-romantic-primary/40 mx-auto mb-2" />
                    <span className="text-xs uppercase tracking-widest text-romantic-primary font-bold">
                      {activePhoto.date}
                    </span>
                    <h3 className="font-serif text-xl text-romantic-text mt-1">
                      {activePhoto.title}
                    </h3>
                  </div>
                )}
              </div>

              {/* Modal Caption Content */}
              <div className="p-6 sm:p-8 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-romantic-primary font-semibold">
                    {activePhoto.date}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-romantic-muted">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Special Memory</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-romantic-text font-normal mb-3">
                  {activePhoto.title}
                </h3>
                <p className="text-sm sm:text-base text-romantic-text/80 font-light leading-relaxed">
                  &ldquo;{activePhoto.caption}&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
