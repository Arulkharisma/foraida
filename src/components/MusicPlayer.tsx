"use client";

import React, { useState, useRef, useEffect } from "react";
import { Music, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(siteData.music.audioSrc);
    audio.loop = true;
    audio.volume = 0.5;

    audio.addEventListener("error", () => {
      // Audio file might not exist yet
      setIsPlaying(false);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
        setToastMessage("Drop your favourite song into public/music/song.mp3 to hear it here! 🎵");
        setTimeout(() => setToastMessage(null), 4500);
      }
    }
  };

  return (
    <>
      {/* Floating music toggle button */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMusic}
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full shadow-romantic transition-all duration-300 backdrop-blur-md border ${
            isPlaying
              ? "bg-romantic-primary text-white border-romantic-primary shadow-glow"
              : "bg-white/80 text-romantic-text hover:text-romantic-primary border-romantic-soft hover:bg-white"
          }`}
        >
          {isPlaying ? (
            <>
              {/* Sound waves animation */}
              <div className="flex items-center gap-0.5 h-4">
                <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
                <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s] h-4" />
                <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.45s] h-2.5" />
              </div>
              <span className="text-xs font-medium tracking-wide max-w-[140px] sm:max-w-none truncate">
                {siteData.music.title}
              </span>
            </>
          ) : (
            <>
              <Music className="w-4 h-4 text-romantic-primary" />
              <span className="text-xs font-medium tracking-wide">♫ Putar Musik</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Graceful Toast Alert if music file is not loaded yet */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-16 right-4 z-50 max-w-xs p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-romantic-soft shadow-romantic text-xs text-romantic-text"
          >
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-romantic-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-romantic-primary">Music Player Ready</p>
                <p className="mt-0.5 text-romantic-muted">{toastMessage}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
