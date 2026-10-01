"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Heart } from "lucide-react";
import { siteData } from "@/data/siteData";

export const Memories: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-romantic-soft text-romantic-primary text-xs font-medium mb-3 shadow-xs">
          <Calendar className="w-3.5 h-3.5" />
          <span>Our Journey Together</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-romantic-text font-normal mb-3">
          Moments I Keep In My Heart
        </h2>
        <p className="text-sm text-romantic-muted font-light max-w-md mx-auto">
          Little snapshots in time that made me realize just how special you are.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-romantic-primary via-romantic-soft to-romantic-lavender -translate-x-1/2 -z-0" />

        <div className="space-y-12">
          {siteData.memories.map((mem, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={mem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } gap-6 sm:gap-10`}
              >
                {/* Timeline node icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-white border-2 border-romantic-primary shadow-romantic flex items-center justify-center text-romantic-primary">
                  <Heart className="w-4 h-4 fill-romantic-primary" />
                </div>

                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0">
                  <div className="glass-card-interactive rounded-3xl p-6 sm:p-7 relative group">
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-romantic-cream/80 text-romantic-text text-xs font-semibold">
                        {mem.tag || `Chapter 0${index + 1}`}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-romantic-muted font-medium">
                        <Calendar className="w-3 h-3 text-romantic-primary" />
                        {mem.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-romantic-text font-normal mb-2 group-hover:text-romantic-primary transition-colors">
                      {mem.title}
                    </h3>

                    <p className="text-sm sm:text-base text-romantic-text/80 font-light leading-relaxed mb-4">
                      {mem.description}
                    </p>

                    {mem.location && (
                      <div className="flex items-center gap-1.5 text-xs text-romantic-muted pt-2 border-t border-romantic-soft/40">
                        <MapPin className="w-3.5 h-3.5 text-romantic-primary" />
                        <span>{mem.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty spacer for the opposite column on tablet/desktop */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
