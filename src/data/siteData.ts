export interface MemoryItem {
  id: string;
  title: string;
  date: string;
  description: string;
  tag?: string;
  imageUrl?: string;
  location?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  date: string;
  imageUrl?: string;
  gradient?: string;
}

export interface ReasonItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Key to match Lucide icon
  tag?: string;
}

export interface IfYouWereOption {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  message: string;
  accentColor: string;
}

export const siteData = {
  // Personal Names
  herName: "Aida",
  myName: "Arul",
  herNickname: "Pretty",

  // SEO & Headings
  metaTitle: "Untuk Aida ♡",
  metaDescription: "A little corner of the internet crafted with love just for you.",

  // Background Music Configuration
  music: {
    audioSrc: "/music/song.mp3",
    title: "Lagu Romantis Untuk Aida",
    artist: "Arul",
  },

  // 1. Hero Section
  hero: {
    greeting: "Hi, pretty.",
    subGreeting: "I made something special for you.",
    buttonText: "Open it ♡",
    scrollHint: "Scroll down to explore our little world",
  },

  // 2. Personal Greeting Section
  greeting: {
    badge: "Just between us",
    title: "Hi, Aida ♡",
    paragraphs: [
      "I know this is just a website on a screen...",
      "But I wanted to build a tiny corner of the internet that belongs entirely to us.",
      "A quiet, cozy place where time slows down, filled with the little reasons and moments that make me fall for you more every single day.",
    ],
    highlightQuote: "You make ordinary days feel like a gentle celebration.",
  },

  // 3. Interactive Heart
  interactiveHeart: {
    badge: "Tap gently",
    title: "The Affection Reactor",
    subtitle: "Every time you tap the heart, it records a piece of my heart for you.",
    stages: [
      { count: 1, text: "hehe ♡" },
      { count: 2, text: "you're adorable ✨" },
      { count: 3, text: "stop clicking me 😭" },
      { count: 4, text: "okay fine... you win 🥺" },
      { count: 5, text: "I really really like you ♡" },
      { count: 7, text: "Still tapping? You're obsessed! 🥰" },
      { count: 10, text: "Okay, you unlocked 100% pure love 💕" },
      { count: 15, text: "Infinite love mode activated! 🚀💖" },
    ],
  },

  // 4. "If You Were..." Game
  ifYouWere: {
    badge: "A little game",
    title: "If you were a...",
    subtitle: "Pick whatever catches your eye. There's a secret answer for each.",
    options: [
      {
        id: "cloud",
        emoji: "☁️",
        title: "Cloud",
        tagline: "Soft & Peaceful",
        message: "You'd be that gentle, golden-hour cloud drifting lazily across the sky—making the whole world feel quieter, softer, and safe.",
        accentColor: "from-sky-100 to-pink-100",
      },
      {
        id: "flower",
        emoji: "🌷",
        title: "Flower",
        tagline: "Blooming & Bright",
        message: "You'd be a delicate spring tulip that blooms gracefully no matter how cold the morning was, brightening every corner of my heart.",
        accentColor: "from-rose-100 to-amber-100",
      },
      {
        id: "star",
        emoji: "🌙",
        title: "Star",
        tagline: "Luminous & Constant",
        message: "You'd be a star because somehow, even on my darkest and heaviest nights, you always find a way to make everything shine.",
        accentColor: "from-purple-100 to-pink-100",
      },
      {
        id: "strawberry",
        emoji: "🍓",
        title: "Strawberry",
        tagline: "Sweet & Cheerful",
        message: "Sweet, a tiny bit mischievous, and guaranteed to instantly make any dull moment 100 times better than it was before.",
        accentColor: "from-red-100 to-rose-100",
      },
      {
        id: "bear",
        emoji: "🐻",
        title: "Bear",
        tagline: "Warm & Cozy",
        message: "The warmest, softest teddy bear who gives the kind of hugs that make all worries disappear in seconds.",
        accentColor: "from-amber-100 to-orange-100",
      },
    ] as IfYouWereOption[],
  },

  // 5. Memory Timeline
  memories: [
    {
      id: "mem-1",
      title: "The Beginning",
      date: "[DATE 1]",
      description: "The very first conversation that started everything. I still remember how easy it felt to talk to you, like we had known each other forever.",
      tag: "Day One",
      location: "Where it all began",
    },
    {
      id: "mem-2",
      title: "That Unforgettable Day",
      date: "[DATE 2]",
      description: "When we laughed until our stomachs hurt. We didn't do anything extraordinary, but just being next to you made it unforgettable.",
      tag: "Special",
      location: "Our favorite place",
    },
    {
      id: "mem-3",
      title: "One of My Favorite Moments",
      date: "[DATE 3]",
      description: "Late evening chats, talking about everything and nothing at all. Time always moves too fast whenever I'm with you.",
      tag: "Pure Happiness",
      location: "Under the night sky",
    },
    {
      id: "mem-4",
      title: "Looking Ahead",
      date: "Every Day Since",
      description: "Every single day with you becomes my new favorite day. I can't wait for all the unwritten chapters waiting for us.",
      tag: "Forever",
      location: "With you",
    },
  ] as MemoryItem[],

  // 6. Photo / Memory Gallery
  gallery: [
    {
      id: "photo-1",
      title: "Golden Hour Glow",
      caption: "That warm sunshine couldn't even compete with your smile.",
      date: "Memory #01",
      gradient: "from-rose-200 via-pink-100 to-amber-100",
    },
    {
      id: "photo-2",
      title: "Sweet Coffee Run",
      caption: "Spilling drinks, quiet giggles, and sharing the best sweet treats.",
      date: "Memory #02",
      gradient: "from-pink-200 via-purple-100 to-rose-100",
    },
    {
      id: "photo-3",
      title: "Stargazing Nights",
      caption: "Sitting side by side watching the streetlights flicker on.",
      date: "Memory #03",
      gradient: "from-purple-200 via-pink-200 to-indigo-100",
    },
    {
      id: "photo-4",
      title: "Just Being Us",
      caption: "No filters, no plans, just you and me being completely goofy.",
      date: "Memory #04",
      gradient: "from-amber-100 via-rose-100 to-pink-200",
    },
  ] as GalleryPhoto[],

  // 7. "Reasons I Like You" Section
  reasons: [
    {
      id: "reason-1",
      title: "Your Smile",
      description: "It has this magical way of instantly melting away every trace of a stressful day.",
      iconName: "Smile",
      tag: "Pure Light",
    },
    {
      id: "reason-2",
      title: "Your Personality",
      description: "Warm, kindhearted, thoughtful, and wonderfully genuine in everything you do.",
      iconName: "Sparkles",
      tag: "Rare Gem",
    },
    {
      id: "reason-3",
      title: "The Way You Talk",
      description: "The little excited expressions you make when you're telling a story you care about.",
      iconName: "MessageCircleHeart",
      tag: "Melody",
    },
    {
      id: "reason-4",
      title: "Your Random Messages",
      description: "Checking my phone and seeing a silly photo or sweet check-in turns my whole day around.",
      iconName: "Send",
      tag: "Little Joys",
    },
    {
      id: "reason-5",
      title: "Ordinary Days Made Better",
      description: "Even doing laundry or grocery shopping becomes an adventure as long as you're there.",
      iconName: "Sun",
      tag: "Everyday Magic",
    },
    {
      id: "reason-6",
      title: "How Safe You Make Me Feel",
      description: "Around you, I can take off all armor and simply be my true self without hesitation.",
      iconName: "ShieldHeart",
      tag: "My Home",
    },
    {
      id: "reason-7",
      title: "Your Gentle Kindness",
      description: "The empathy you show to small animals, strangers, and the people you love.",
      iconName: "HeartHandshake",
      tag: "Golden Heart",
    },
    {
      id: "reason-8",
      title: "Your Cute Laugh",
      description: "Especially the quiet snicker when something catches you completely off guard.",
      iconName: "PartyPopper",
      tag: "Music to My Ears",
    },
  ] as ReasonItem[],

  reasonsFinalNote: {
    headline: "And honestly...",
    body: "I could keep writing cards forever, and I still wouldn't have enough words to capture everything I adore about you.",
  },

  // 8. Love Meter
  loveMeter: {
    badge: "Scientific calculation",
    title: "The Love Meter",
    subtitle: "Let's calibrate the exact level of affection.",
    buttonLabel: "Calculate Love Level ♡",
    steps: [
      { percent: 12, label: "Scanning heartbeats..." },
      { percent: 34, label: "Analyzing smiles and laughs..." },
      { percent: 68, label: "Measuring comfort and warmth..." },
      { percent: 99, label: "Approaching standard limits..." },
      { percent: 100, label: "Standard capacity reached!" },
      { percent: 150, label: "Wait... that doesn't seem right." },
      { percent: 300, label: "Calculating overflow..." },
      { percent: 9999, label: "ERROR: Capacity Exceeded!" },
    ],
    finalError: {
      title: "ERROR: Too Much Love to Measure",
      message: "The system crashed because my love for you is off the charts.",
      infinitySymbol: "♡ ∞",
    },
  },

  // 9. "Open When You Miss Me" Envelope
  openWhen: {
    badge: "A handwritten letter",
    title: "Open When You Miss Me",
    subtitle: "Click the envelope whenever you need a reminder of how much you are cherished.",
    letterDate: "Written with love, for whenever you need it",
    letterSalutation: "My dearest Aida,",
    letterParagraphs: [
      "If you're reading this right now, take a slow deep breath.",
      "Close your eyes for three seconds and remember this: you are deeply loved, cherished, and appreciated more than words can hold.",
      "Whenever the world feels a little too loud or distance feels a little too wide, remember that my heart is always quietly cheering for you.",
      "I'm so lucky to have you in my story. Don't ever forget how special you are.",
    ],
    letterSignoff: "Always yours,",
    letterAuthor: "Arul ♡",
    sealText: "With Love",
  },

  // 10. Secret Easter Egg
  secret: {
    triggerHint: "Find the hidden starry sparkle",
    headline: "You found the secret ♡",
    subhead: "Here's something I don't say out loud often enough...",
    message: "Out of all 8 billion people on this planet, meeting you and getting to share this life with you is my single favorite coincidence in the universe.",
    note: "P.S. You looked especially pretty today.",
  },

  // 11. Final Romantic Climax Section
  finalMessage: {
    badge: "From the bottom of my heart",
    herName: "Aida,",
    paragraph1: "I don't know if a website can explain how much you mean to me...",
    paragraph2: "Words and code will always be a little too small for feelings this big, but I wanted to try anyway.",
    thankYou: "Thank you for being the sweetest part of my life.",
    signaturePrefix: "Love,",
    signatureName: "Arul",
    heartEmoji: "♡",
  },
};
