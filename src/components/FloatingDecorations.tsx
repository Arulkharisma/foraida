"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "heart" | "sparkle";
}

export const FloatingDecorations: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate light ambient floating particles once on client
    const newParticles: Particle[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across screen width
      size: Math.random() * 14 + 10,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.35 + 0.15,
      type: i % 3 === 0 ? "sparkle" : "heart",
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft pastel ambient gradient orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-romantic-soft/30 blur-3xl"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div
        className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-romantic-cream/40 blur-3xl"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div
        className="absolute top-2/3 -left-20 w-88 h-88 rounded-full bg-romantic-lavender/35 blur-3xl"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div
        className="absolute -bottom-32 right-10 w-96 h-96 rounded-full bg-romantic-soft/25 blur-3xl"
        style={{ transform: "translate3d(0,0,0)" }}
      />

      {/* Floating hearts and sparkles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "110vh", x: `${p.x}vw`, opacity: 0 }}
          animate={{
            y: "-10vh",
            x: `${p.x + (p.id % 2 === 0 ? 3 : -3)}vw`,
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
        >
          {p.type === "heart" ? (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="#FF7FA8"
              opacity={0.6}
              className="drop-shadow-sm"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              width={p.size * 0.8}
              height={p.size * 0.8}
              viewBox="0 0 24 24"
              fill="#FFE8BA"
              opacity={0.7}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};
