"use client";

import React from "react";
import {
  Smile,
  Sparkles,
  MessageCircleHeart,
  Send,
  Sun,
  Heart,
  HeartHandshake,
  PartyPopper,
  Star,
  Coffee,
  Camera,
  Music,
  Cloud,
  Flower2,
  Calendar,
  Compass,
  LucideProps,
} from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  switch (name) {
    case "Smile":
      return <Smile {...props} />;
    case "Sparkles":
      return <Sparkles {...props} />;
    case "MessageCircleHeart":
      return <MessageCircleHeart {...props} />;
    case "Send":
      return <Send {...props} />;
    case "Sun":
      return <Sun {...props} />;
    case "ShieldHeart":
      return <Heart {...props} />;
    case "HeartHandshake":
      return <HeartHandshake {...props} />;
    case "PartyPopper":
      return <PartyPopper {...props} />;
    case "Star":
      return <Star {...props} />;
    case "Coffee":
      return <Coffee {...props} />;
    case "Camera":
      return <Camera {...props} />;
    case "Music":
      return <Music {...props} />;
    case "Cloud":
      return <Cloud {...props} />;
    case "Flower2":
      return <Flower2 {...props} />;
    case "Calendar":
      return <Calendar {...props} />;
    case "Compass":
      return <Compass {...props} />;
    default:
      return <Heart {...props} />;
  }
};
