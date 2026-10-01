"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, RefreshCw, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { siteData } from "@/data/siteData";

export const LoveMeter: React.FC = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);

  const steps = siteData.loveMeter.steps;

  const triggerCelebration = () => {
    // Multi-stage pastel confetti burst
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#FF7FA8", "#FFD6E3", "#FFF3D6", "#E8DFFF"],
      });
      setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#FF7FA8", "#FFD6E3", "#FFF3D6"],
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#FF7FA8", "#E8DFFF", "#FFF3D6"],
        });
      }, 300);
    } catch {
      // Graceful fallback if canvas is not supported
    }
  };

  const startCalculation = () => {
    if (isCalculating) return;
    setIsCalculating(true);
    setIsComplete(false);
    setCurrentStepIndex(0);

    // Progression intervals
    const delays = [600, 700, 800, 900, 1000, 1100, 1000, 1200];

    const runStep = (index: number) => {
      if (index >= steps.length) {
        setIsCalculating(false);
        setIsComplete(true);
        triggerCelebration();
        return;
      }

      setCurrentStepIndex(index);
      setTimeout(() => {
        runStep(index + 1);
      }, delays[index] || 800);
    };

    setTimeout(() => {
      runStep(1);
    }, delays[0]);
  };

  const currentStep =
    currentStepIndex >= 0 && currentStepIndex < steps.length
      ? steps[currentStepIndex]
      : null;

  const progressPercent = currentStep
    ? Math.min(currentStep.percent, 100)
    : isComplete
    ? 100
    : 0;

  return (
    <section className="py-20 px-4 sm:px-6 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden border-2 border-romantic-soft/60"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-romantic-soft text-romantic-primary text-xs font-medium mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{siteData.loveMeter.badge}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-romantic-text font-normal mb-2">
          {siteData.loveMeter.title}
        </h2>
        <p className="text-sm text-romantic-muted font-light max-w-sm mx-auto mb-8">
          {siteData.loveMeter.subtitle}
        </p>

        {/* Progress Bar Container */}
        <div className="relative w-full max-w-md mx-auto mb-6">
          <div className="h-6 w-full bg-romantic-soft/40 rounded-full overflow-hidden p-1 border border-romantic-soft">
            <motion.div
              animate={{
                width: isComplete ? "100%" : `${progressPercent}%`,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className={`h-full rounded-full transition-colors duration-500 ${
                isComplete
                  ? "bg-gradient-to-r from-romantic-primary via-purple-400 to-romantic-primary"
                  : currentStep && currentStep.percent > 100
                  ? "bg-gradient-to-r from-amber-400 to-rose-500"
                  : "bg-gradient-to-r from-romantic-primary to-[#ff94b8]"
              }`}
            />
          </div>

          {/* Current Percentage Label */}
          <div className="flex items-center justify-between text-xs text-romantic-muted mt-2 px-1 font-mono">
            <span>0%</span>
            <span className="font-semibold text-romantic-primary text-sm">
              {isComplete
                ? "∞"
                : currentStep
                ? `${currentStep.percent}%`
                : "Ready"}
            </span>
            <span>100%</span>
          </div>
        </div>

        {/* Dynamic Status Display */}
        <div className="min-h-[72px] flex items-center justify-center my-4">
          <AnimatePresence mode="wait">
            {isCalculating && currentStep && (
              <motion.div
                key={currentStep.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-romantic-text font-medium text-base sm:text-lg"
              >
                {currentStep.percent > 100 ? (
                  <AlertCircle className="w-5 h-5 text-amber-500 animate-pulse" />
                ) : (
                  <RefreshCw className="w-5 h-5 text-romantic-primary animate-spin" />
                )}
                <span>{currentStep.label}</span>
              </motion.div>
            )}

            {isComplete && (
              <motion.div
                key="complete-reveal"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="p-5 rounded-2xl bg-gradient-to-r from-romantic-soft/60 via-romantic-cream/50 to-romantic-lavender/60 border border-white shadow-sm"
              >
                <div className="text-3xl sm:text-4xl text-romantic-primary font-bold mb-1">
                  {siteData.loveMeter.finalError.infinitySymbol}
                </div>
                <h4 className="font-serif text-lg sm:text-xl text-romantic-text font-medium mb-1">
                  {siteData.loveMeter.finalError.title}
                </h4>
                <p className="text-xs sm:text-sm text-romantic-muted font-light">
                  {siteData.loveMeter.finalError.message}
                </p>
              </motion.div>
            )}

            {!isCalculating && !isComplete && (
              <motion.p
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-romantic-muted italic"
              >
                Tap the button below to initiate calibration...
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startCalculation}
          disabled={isCalculating}
          className="mt-4 px-8 py-3.5 rounded-full bg-gradient-to-r from-romantic-primary to-[#ff94b8] text-white font-medium shadow-romantic hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2 mx-auto"
        >
          {isCalculating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Calibrating...</span>
            </>
          ) : isComplete ? (
            <>
              <Heart className="w-4 h-4 fill-white" />
              <span>Test Again ♡</span>
            </>
          ) : (
            <>
              <Heart className="w-4 h-4 fill-white" />
              <span>{siteData.loveMeter.buttonLabel}</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </section>
  );
};
