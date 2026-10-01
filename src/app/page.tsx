"use client";

import React from "react";
import { FloatingDecorations } from "@/components/FloatingDecorations";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Hero } from "@/components/Hero";
import { Greeting } from "@/components/Greeting";
import { HeartInteraction } from "@/components/HeartInteraction";
// import { IfYouWere } from "@/components/IfYouWere";
// import { Memories } from "@/components/Memories";
// import { Reasons } from "@/components/Reasons";
import { LoveMeter } from "@/components/LoveMeter";
import { OpenWhen } from "@/components/OpenWhen";
import { SecretButton } from "@/components/SecretButton";
import { FinalMessage } from "@/components/FinalMessage";

export default function Home() {
  const handleHeroOpen = () => {
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
      greetingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen selection:bg-romantic-soft selection:text-romantic-text overflow-hidden">
      {/* Ambient background particles & bokeh gradients */}
      <FloatingDecorations />

      {/* Floating background music control */}
      <MusicPlayer />

      {/* Main Experience Flow */}
      <div className="relative z-10 space-y-4 sm:space-y-8">
        {/* 1. Hero Section */}
        <Hero onOpen={handleHeroOpen} />

        {/* 2. Personal Greeting */}
        <Greeting />

        {/* 3. Interactive Affection Heart */}
        <HeartInteraction />

        {/* 4. "If you were a..." Interactive Game (Di-comment untuk sementara) */}
        {/* <IfYouWere /> */}

        {/* 5. Memory Timeline / Our Journey (Di-comment untuk sementara) */}
        {/* <Memories /> */}

        {/* 6. Photo & Memory Gallery (Di-comment untuk sementara) */}
        {/* <Gallery /> */}

        {/* 7. "Reasons I Like You" / Things I Adore (Di-comment untuk sementara) */}
        {/* <Reasons /> */}

        {/* 8. Love Meter */}
        <LoveMeter />

        {/* 9. "Open When You Miss Me" Envelope */}
        <OpenWhen />

        {/* 10. Secret Easter Egg Trigger */}
        <SecretButton />

        {/* 11. Final Romantic Climax & Signature */}
        <FinalMessage />
      </div>
    </main>
  );
}
