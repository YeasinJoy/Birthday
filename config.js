// ==============================================================================
// 🕯️ INTIMATE & TIMELESS CELEBRATION CONFIGURATION
// Styled in sophisticated warm gray, charcoal, and candlelight gold.
//
// 💡 QUICK START:
// 1. Change recipientName and birthdayDate below.
// 2. Choose relationshipType: "romantic" (for your gf) or "friendship" (for close friends).
// 3. Drop your pictures in the 'images' folder and update the polaroids list.
// That's it! Everything else auto-adapts seamlessly.
// ==============================================================================

window.BIRTHDAY_CONFIG = {
  // ----------------------------------------------------------------------------
  // 1. BASIC DETAILS (Edit these!)
  // ----------------------------------------------------------------------------
  recipientName: "Eity",            // Her name (or friend's name)
  nickname: "Angry Bird",              // Cute pet name or nickname
  birthdayDate: "October 17",          // Birthday date
  relationshipType: "Friendship",        // Choose: "romantic" (girlfriend/partner) or "friendship" (close friend)
  startDate: "March 2023",             // YYYY-MM-DD: date you met or started dating (leave "" to hide counter)

  // ----------------------------------------------------------------------------
  // 2. THEMES & VIBE
  // ----------------------------------------------------------------------------
  theme: {
    accentColor: "#d4af37",            // Candlelight gold accent
    secondaryAccent: "#a0a0b0",        // Warm silver gray
    particleType: "embers",            // "embers" (warm candle sparks & soft starlight) or "minimal"
  },

  // ----------------------------------------------------------------------------
  // 3. SURPRISE WAX-SEAL ENVELOPE (Opening Teaser)
  // ----------------------------------------------------------------------------
  landingEnvelope: {
    badge: "A Quiet Moment For You",
    title: "A Birthday Keepsake",
    subtitle: "Click the seal to step inside ✨",
    buttonText: "Open Keepsake ✉️"
  },

  // ----------------------------------------------------------------------------
  // 4. HERO SECTION
  // (Auto-adapts based on relationshipType if left empty, or customize your own)
  // ----------------------------------------------------------------------------
  hero: {
    tagline: "Celebrating someone truly irreplaceable",
    quote: "In a noisy world, your presence is quiet comfort and genuine warmth. Today is dedicated to honoring everything you are.",
    scrollHint: "Explore your keepsake below"
  },

  // ----------------------------------------------------------------------------
  // 5. ARTISAN BIRTHDAY CAKE & WISH
  // ----------------------------------------------------------------------------
  cake: {
    title: "Make A Wish In The Quiet",
    instructions: "Click or tap the candles to blow them out gently ✨",
    wishGrantedTitle: "Happy Birthday",
    wishGrantedMessage: "May the year ahead bring quiet peace, gentle laughter, and dreams taking shape."
  },

  // ----------------------------------------------------------------------------
  // 6. PART 1: MEMORIES OF HER (Solo Moments)
  // Photos of just her / the birthday person. Simply drop your photos into 'images/'!
  // (e.g. 'images/her1.jpg', 'images/her2.jpg')
  // ----------------------------------------------------------------------------
  memoriesHer: [
    {
      image: "images/her1.jpg",
      fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
      caption: "Quiet grace and genuine smiles.",
      tag: "Radiant ✨",
      rotation: -2
    },
    {
      image: "images/her2.jpg",
      fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
      caption: "Candid, effortless, and radiant.",
      tag: "Unfiltered 🎞️",
      rotation: 2
    },
    {
      image: "images/her3.jpg",
      fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80",
      caption: "Always finding beauty in the little things.",
      tag: "Authentic 🕯️",
      rotation: -1
    },
    {
      image: "images/her4.jpg",
      fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
      caption: "A year wiser, kinder, and more captivating.",
      tag: "Today & Always 🌟",
      rotation: 2
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. PART 2: MEMORIES OF US (Moments Together)
  // Photos of the two of you together! Simply drop your photos into 'images/'!
  // (e.g. 'images/us1.jpg', 'images/us2.jpg')
  // ----------------------------------------------------------------------------
  memoriesUs: [
    {
      image: "images/us1.jpg",
      fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80",
      caption: "One of those evenings I never want to end.",
      tag: "Memories Together ☕",
      rotation: 2
    },
    {
      image: "images/us2.jpg",
      fallback: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&auto=format&fit=crop&q=80",
      caption: "Lost in conversation for hours without noticing time.",
      tag: "Shared Moments 🌙",
      rotation: -3
    },
    {
      image: "images/us3.jpg",
      fallback: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80",
      caption: "Our favorite backroads and late night drives.",
      tag: "Adventures 🚗",
      rotation: 2
    },
    {
      image: "images/us4.jpg",
      fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80",
      caption: "Here's to all the quiet chapters still waiting to be written.",
      tag: "Always 🥂",
      rotation: -2
    }
  ],

  // ----------------------------------------------------------------------------
  // 8. "THINGS I DEEPLY APPRECIATE ABOUT YOU" (Intimate Cards)
  // Heartfelt qualities that fit both romantic partners and true friends
  // ----------------------------------------------------------------------------
  reasons: [
    {
      number: "01",
      title: "Your Grounded Calm",
      description: "You have a natural ability to bring perspective and peaceful composure even into chaotic moments."
    },
    {
      number: "02",
      title: "The Way You Truly Listen",
      description: "Conversations with you are rare because you don't just hear words — you genuinely understand."
    },
    {
      number: "03",
      title: "Your Unspoken Humor",
      description: "A single glance, a subtle inside joke, or a dry remark that leaves us laughing uncontrollably."
    },
    {
      number: "04",
      title: "Your Quiet Loyalty",
      description: "You don't need grand gestures to show you care. Your consistency and honesty speak for themselves."
    },
    {
      number: "05",
      title: "Your Authentic Perspective",
      description: "You never pretend to be someone you're not. Your depth and authenticity are deeply inspiring."
    },
    {
      number: "06",
      title: "Just Existing In My World",
      description: "Having you in my life makes every ordinary day feel a little richer, warmer, and more meaningful."
    }
  ],

  // ----------------------------------------------------------------------------
  // 9. THE INTIMATE LETTER
  // ----------------------------------------------------------------------------
  letter: {
    envelopeTitle: "A Letter For Your Birthday",
    salutation: "Dearest",
    paragraphs: [
      "Happy Birthday. As another year begins, I wanted to take a quiet moment amidst the noise to tell you how deeply you are appreciated.",
      "People like you are rare in this world. You carry a quiet strength, a thoughtful mind, and a warmth that makes everyone around you feel grounded and seen.",
      "Whether through late-night talks, silent understanding, or simply sharing the same room, your presence has been a constant anchor and a gift.",
      "I hope this upcoming year treats you with the same gentleness, respect, and deep kindness that you offer so freely to others."
    ],
    closing: "With genuine love and deep respect,",
    signature: "Joy 🕯️"
  },

  // ----------------------------------------------------------------------------
  // 10. BACKGROUND AUDIO
  // Built-in cozy ambient lofi guitar/chimes, or drop an MP3 into the folder!
  // ----------------------------------------------------------------------------
  music: {
    enabled: true,
    title: "Quiet Ambient Melody 🎶",
    url: "" // Set to e.g. "music.mp3" if you have a favorite track, or leave empty for built-in soothing sound
  }
};
