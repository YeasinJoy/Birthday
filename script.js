// ==============================================================================
// 🕯️ INTIMATE & TIMELESS CELEBRATION SCRIPT
// Features: Warm candle embers canvas, intelligent relationship adapter (romantic/friend),
// interactive candlelit cake, film photo album, and cozy ambient sound.
// ==============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.BIRTHDAY_CONFIG || {};

  // 1. Initialize Content & Adapt to Relationship Type (Romantic / Friendship)
  initContent(cfg);

  // 2. Initialize Warm Candlelight Embers & Ambient Dust Canvas
  initParticles(cfg.theme);

  // 3. Initialize Opening Surprise Envelope
  initEnvelope();

  // 4. Initialize Live Counter
  initCounter(cfg.startDate, cfg.relationshipType);

  // 5. Initialize Interactive Candlelit Cake
  initCake();

  // 6. Initialize Audio Controller
  initAudio(cfg.music);

  // 7. Initialize "Angry Bird" De-Grumpifier & Mood Shifter
  initMoodCalmer(cfg.moodCalmer, cfg.recipientName, cfg.nickname);

  // 8. Initialize Silver Touch Scratch-off Secret Card
  initScratchCard(cfg.scratchCard);

  // 9. Initialize "Open When..." Keepsake Letters
  initOpenWhen(cfg.openWhen);

  // 10. Initialize Lightbox for Memories
  initLightbox();
});

// ------------------------------------------------------------------------------
// 1. POPULATE & ADAPT CONTENT
// ------------------------------------------------------------------------------
function initContent(cfg) {
  const isRomantic = (cfg.relationshipType || 'romantic').toLowerCase() === 'romantic';

  // Names & Hero
  const recipientName = cfg.recipientName || (isRomantic ? "My Love" : "My Friend");
  const elRecipientName = document.getElementById('recipientName');
  if (elRecipientName) elRecipientName.textContent = recipientName;

  const elFooterName = document.getElementById('footerName');
  if (elFooterName) elFooterName.textContent = recipientName;

  // Dynamically set browser tab title
  document.title = `Happy Birthday, ${recipientName} ✨`;

  // Adapt Part 1 (Her / Solo) and Part 2 (Us / Together) Headings
  const part1Tag = document.getElementById('part1Tag');
  const part1Title = document.getElementById('part1Title');
  const part1Desc = document.getElementById('part1Desc');
  const part2Tag = document.getElementById('part2Tag');
  const part2Title = document.getElementById('part2Title');
  const part2Desc = document.getElementById('part2Desc');

  if (part1Tag) part1Tag.textContent = isRomantic ? "Part 01 • Celebrating Her" : "Part 01 • Celebrating A Great Friend";
  if (part1Title) part1Title.textContent = isRomantic ? "Her Moments ✨" : `${recipientName}'s Moments ✨`;
  if (part1Desc) {
    part1Desc.textContent = isRomantic
      ? "A celebration of your grace, your genuine smile, and the quiet beauty you bring to every room."
      : "Honoring your authenticity, your humor, and the incredible energy you bring everywhere.";
  }

  if (part2Tag) part2Tag.textContent = isRomantic ? "Part 02 • Moments Together" : "Part 02 • Shared Adventures";
  if (part2Title) part2Title.textContent = isRomantic ? "Moments Of Us ☕" : "Adventures & Us 🥂";
  if (part2Desc) {
    part2Desc.textContent = isRomantic
      ? "The late-night conversations, the quiet laughs, and the chapters we share together."
      : "The roadtrips, the late-night talks, and the unforgettable memories we've made.";
  }

  // Hero defaults
  if (cfg.hero) {
    if (cfg.hero.tagline) {
      const badge = document.getElementById('heroBadgeText');
      if (badge) badge.textContent = cfg.hero.tagline;
    }
    if (cfg.hero.quote) {
      const quote = document.getElementById('heroQuote');
      if (quote) quote.textContent = cfg.hero.quote;
    }
    if (cfg.hero.scrollHint) {
      const hint = document.getElementById('scrollHint');
      if (hint) hint.textContent = cfg.hero.scrollHint;
    }
  }

  // Envelope texts
  if (cfg.landingEnvelope) {
    if (cfg.landingEnvelope.badge) document.getElementById('introBadge').textContent = cfg.landingEnvelope.badge;
    if (cfg.landingEnvelope.title) document.getElementById('introTitle').textContent = cfg.landingEnvelope.title;
    if (cfg.landingEnvelope.subtitle) document.getElementById('introSubtitle').textContent = cfg.landingEnvelope.subtitle;
    if (cfg.landingEnvelope.buttonText) document.getElementById('introBtnText').textContent = cfg.landingEnvelope.buttonText;
  }

  // Cake texts
  if (cfg.cake) {
    if (cfg.cake.title) document.getElementById('cakeTitle').textContent = cfg.cake.title;
    if (cfg.cake.instructions) document.getElementById('cakeInstructions').textContent = cfg.cake.instructions;
    if (cfg.cake.wishGrantedTitle) document.getElementById('wishGrantedTitle').textContent = cfg.cake.wishGrantedTitle;
    if (cfg.cake.wishGrantedMessage) document.getElementById('wishGrantedMsg').textContent = cfg.cake.wishGrantedMessage;
  }

  // Scratch card texts
  if (cfg.scratchCard) {
    if (cfg.scratchCard.badge) {
      const el = document.getElementById('scratchBadge');
      if (el) el.textContent = cfg.scratchCard.badge;
    }
    if (cfg.scratchCard.title) {
      const el = document.getElementById('scratchTitle');
      if (el) el.textContent = cfg.scratchCard.title;
    }
    if (cfg.scratchCard.instructions) {
      const el = document.getElementById('scratchInstructions');
      if (el) el.textContent = cfg.scratchCard.instructions;
    }
    if (cfg.scratchCard.secretText) {
      const el = document.getElementById('scratchSecretText');
      if (el) el.textContent = cfg.scratchCard.secretText;
    }
  }

  // Mood calmer texts
  if (cfg.moodCalmer) {
    if (cfg.moodCalmer.title) {
      const el = document.getElementById('moodCalmerTitle');
      if (el) el.textContent = cfg.moodCalmer.title;
    }
    if (cfg.moodCalmer.subtitle) {
      const el = document.getElementById('moodCalmerSubtitle');
      if (el) el.textContent = cfg.moodCalmer.subtitle;
    }
  }

  // Build Unified Memories & Render Both Sections
  window.ALL_MEMORIES = [];

  const rawHer = cfg.memoriesHer || (cfg.polaroids ? cfg.polaroids.filter(p => p.category === 'solo' || p.category === 'her') : []);
  const rawUs = cfg.memoriesUs || (cfg.polaroids ? cfg.polaroids.filter(p => p.category === 'together' || p.category === 'us') : []);

  // Render Part 1: Her
  renderMemoryGrid('galleryHer', rawHer, isRomantic ? 'The Birthday Girl ✨' : 'Solo Moments ✨');

  // Render Part 2: Us
  renderMemoryGrid('galleryUs', rawUs, isRomantic ? 'Moments Together ☕' : 'Shared Adventures 🥂');

  // Render Reasons / Appreciation Cards
  const reasonsGrid = document.getElementById('reasonsGrid');
  if (reasonsGrid && Array.isArray(cfg.reasons)) {
    reasonsGrid.innerHTML = '';
    cfg.reasons.forEach(r => {
      const card = document.createElement('div');
      card.className = 'reason-card';
      card.innerHTML = `
        <div class="reason-card-inner">
          <div class="reason-face reason-front">
            <div class="reason-number">${r.number || '✦'}</div>
            <h4>${r.title}</h4>
            <span class="tap-hint">Tap to reflect ✨</span>
          </div>
          <div class="reason-face reason-back">
            <h4>${r.title}</h4>
            <p>${r.description}</p>
          </div>
        </div>
      `;
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        playChime(520 + Math.random() * 150);
      });
      reasonsGrid.appendChild(card);
    });
  }

  // Render Letter
  if (cfg.letter) {
    if (cfg.letter.envelopeTitle) {
      const lt = document.getElementById('letterSectionTitle');
      if (lt) lt.textContent = cfg.letter.envelopeTitle;
    }
    if (cfg.letter.salutation) {
      const sal = document.getElementById('letterSalutation');
      if (sal) sal.textContent = `${cfg.letter.salutation} ${cfg.recipientName || (isRomantic ? 'My Love' : 'My Friend')},`;
    }
    if (Array.isArray(cfg.letter.paragraphs)) {
      const container = document.getElementById('letterContent');
      if (container) {
        container.innerHTML = cfg.letter.paragraphs.map(p => `<p>${p}</p>`).join('');
      }
    }
    if (cfg.letter.closing) {
      const cl = document.getElementById('letterClosing');
      if (cl) cl.textContent = cfg.letter.closing;
    }
    if (cfg.letter.signature) {
      const sig = document.getElementById('letterSignature');
      if (sig) sig.textContent = cfg.letter.signature;
    }
  }
}

// ------------------------------------------------------------------------------
// 2. BACKGROUND PARTICLES (Warm Candlelight Embers & Soft Starlight)
// ------------------------------------------------------------------------------
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const emberColors = [
    'rgba(212, 175, 55, ',   // Candle gold
    'rgba(230, 200, 120, ',  // Warm amber
    'rgba(255, 240, 200, ',  // Warm candlelight
    'rgba(160, 160, 180, '   // Muted silver starlight
  ];

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      speedY: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.6 + 0.2,
      baseOpacity: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseVal: Math.random() * Math.PI,
      color: emberColors[Math.floor(Math.random() * emberColors.length)]
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.pulseVal += p.pulseSpeed;
      const currentOpacity = p.baseOpacity + Math.sin(p.pulseVal) * 0.2;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      // Draw soft glowing ember
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${Math.max(0.1, currentOpacity)})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ------------------------------------------------------------------------------
// 3. INTRO SURPRISE ENVELOPE
// ------------------------------------------------------------------------------
function initEnvelope() {
  const envelope = document.getElementById('envelopeCard');
  const waxSeal = document.getElementById('waxSealBtn');
  const openBtn = document.getElementById('openSurpriseBtn');
  const overlay = document.getElementById('introOverlay');

  function openGift() {
    if (envelope.classList.contains('open')) return;

    envelope.classList.add('open');
    playCelebrationChord();

    // Elegant gold and champagne confetti burst
    fireMetallicConfetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      overlay.classList.add('unlocked');
      tryStartMusic();
    }, 1200);
  }

  if (waxSeal) waxSeal.addEventListener('click', openGift);
  if (envelope) envelope.addEventListener('click', openGift);
  if (openBtn) openBtn.addEventListener('click', openGift);
}

// ------------------------------------------------------------------------------
// 4. LIVE MEMORIES COUNTER
// ------------------------------------------------------------------------------
function initCounter(startDateStr, relationshipType) {
  const card = document.getElementById('loveCounterCard');
  if (!startDateStr || startDateStr.trim() === '') {
    if (card) card.style.display = 'none';
    return;
  }

  const startDate = new Date(startDateStr);
  if (isNaN(startDate.getTime())) {
    if (card) card.style.display = 'none';
    return;
  }

  const isRomantic = (relationshipType || 'romantic').toLowerCase() === 'romantic';
  const label = document.getElementById('counterLabel');
  const footer = document.getElementById('counterFooterText');
  if (label) {
    label.textContent = isRomantic ? "We've been creating memories for" : "Cherishing our friendship for";
  }
  if (footer) {
    footer.textContent = isRomantic ? "...and grateful for every single moment ✨" : "...through every chapter and adventure ✨";
  }

  function update() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
      if (card) card.style.display = 'none';
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const elDays = document.getElementById('countDays');
    const elHours = document.getElementById('countHours');
    const elMinutes = document.getElementById('countMinutes');
    const elSeconds = document.getElementById('countSeconds');

    if (elDays) elDays.textContent = days.toLocaleString();
    if (elHours) elHours.textContent = String(hours).padStart(2, '0');
    if (elMinutes) elMinutes.textContent = String(minutes).padStart(2, '0');
    if (elSeconds) elSeconds.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ------------------------------------------------------------------------------
// 5. INTERACTIVE CANDLELIT CAKE
// ------------------------------------------------------------------------------
function initCake() {
  const cake = document.getElementById('interactiveCake');
  const candles = document.querySelectorAll('.candle');
  const wishReveal = document.getElementById('wishReveal');
  const relightBtn = document.getElementById('relightCandlesBtn');
  let isBlown = false;

  function blowCandles() {
    if (isBlown) return;
    isBlown = true;

    candles.forEach((c, index) => {
      setTimeout(() => {
        c.classList.add('blown');
      }, index * 120);
    });

    playChime(392.00); // G4
    setTimeout(() => playChime(493.88), 160); // B4
    setTimeout(() => playChime(587.33), 320); // D5
    setTimeout(() => playChime(783.99), 480); // G5

    setTimeout(() => {
      fireGrandCelebration();
      if (wishReveal) wishReveal.classList.add('show');
    }, 500);
  }

  if (cake) cake.addEventListener('click', blowCandles);

  if (relightBtn) {
    relightBtn.addEventListener('click', () => {
      candles.forEach(c => c.classList.remove('blown'));
      if (wishReveal) wishReveal.classList.remove('show');
      isBlown = false;
      playChime(440);
    });
  }
}

// ------------------------------------------------------------------------------
// 6. AUDIO CONTROLLER & COZY WARM SYNTHESIZER
// ------------------------------------------------------------------------------
let audioCtx = null;
let isMusicPlaying = false;
let synthInterval = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playChime(freq = 440, type = 'sine', duration = 0.9) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Warm envelope
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function playCelebrationChord() {
  const chord = [293.66, 369.99, 440.00, 587.33]; // D, F#, A, D
  chord.forEach((f, i) => {
    setTimeout(() => playChime(f, 'sine', 1.4), i * 140);
  });
}

function initAudio(musicCfg = {}) {
  const btn = document.getElementById('musicToggle');
  const audioEl = document.getElementById('bgMusic');
  const label = document.getElementById('musicLabel');

  const customUrl = musicCfg.url && musicCfg.url.trim().length > 0 ? musicCfg.url : null;

  if (customUrl && audioEl) {
    audioEl.src = customUrl;
  }

  function togglePlay() {
    getAudioContext();

    if (isMusicPlaying) {
      if (customUrl && audioEl) {
        audioEl.pause();
      } else {
        stopSynthMelody();
      }
      isMusicPlaying = false;
      if (btn) btn.classList.remove('playing');
      if (label) label.textContent = 'Play Melody';
    } else {
      if (customUrl && audioEl) {
        audioEl.play().then(() => {
          isMusicPlaying = true;
          if (btn) btn.classList.add('playing');
          if (label) label.textContent = 'Pause Melody';
        }).catch(() => {
          startSynthMelody();
          isMusicPlaying = true;
          if (btn) btn.classList.add('playing');
          if (label) label.textContent = 'Melody On ✨';
        });
      } else {
        startSynthMelody();
        isMusicPlaying = true;
        if (btn) btn.classList.add('playing');
        if (label) label.textContent = 'Melody On ✨';
      }
    }
  }

  if (btn) btn.addEventListener('click', togglePlay);

  window.tryStartMusic = () => {
    if (!isMusicPlaying) {
      togglePlay();
    }
  };
}

// Gentle, warm, intimate acoustic/piano-like progression
function startSynthMelody() {
  stopSynthMelody();
  const notes = [
    220.00, 277.18, 329.63, 440.00, // A major
    196.00, 246.94, 293.66, 392.00, // G major
    164.81, 207.65, 246.94, 329.63, // E minor
    220.00, 261.63, 329.63, 440.00  // A minor
  ];
  let step = 0;

  playChime(notes[0], 'sine', 1.8);
  synthInterval = setInterval(() => {
    step = (step + 1) % notes.length;
    playChime(notes[step], 'sine', 2.0);
  }, 1100);
}

function stopSynthMelody() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

// ------------------------------------------------------------------------------
// 7. "ANGRY BIRD" DE-GRUMPIFIER & INTERACTIVE MOOD SHIFTER
// ------------------------------------------------------------------------------
function initMoodCalmer(cfg = {}, recipientName = "Eity", nickname = "Angry Bird") {
  const btn = document.getElementById('loveBlastBtn');
  const fill = document.getElementById('loveMeterFill');
  const status = document.getElementById('loveStatusText');
  const btnText = document.getElementById('moodBtnText');
  let clickCount = 0;

  const targetName = nickname || recipientName || "Angry Bird";

  const stages = [
    {
      fill: "70%",
      status: `Deploying hot coffee & warm pastries to appease ${targetName}... 🥐☕`,
      btn: "Deploy Another Round of Snacks 🍫"
    },
    {
      fill: "85%",
      status: `Emergency head pats administered. Pout is visibly fading... 🐥✨`,
      btn: "Cast Peace & Comfort Spell 🕯️"
    },
    {
      fill: "95%",
      status: `Subtle smile detected! ${targetName} mode disengaged. 🥰`,
      btn: "Lock in Infinite Birthday Good Vibes 💫"
    },
    {
      fill: "100%",
      status: `Complete Serenity: 100% loved, radiant, and celebrated! 🕊️💖`,
      btn: "Celebrate More Smiles! ✨"
    }
  ];

  if (!btn) return;

  btn.addEventListener('click', (e) => {
    clickCount++;
    const stage = stages[(clickCount - 1) % stages.length];

    playChime(480 + (clickCount % 5) * 55, 'sine', 0.5);
    setTimeout(() => playChime(640 + (clickCount % 5) * 45, 'sine', 0.6), 110);

    if (status) status.textContent = stage.status;
    if (fill) fill.style.width = stage.fill;
    if (btnText) btnText.textContent = stage.btn;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX || (rect.left + rect.width / 2);
    const y = e.clientY || (rect.top + rect.height / 2);

    const icons = ['🥐', '☕', '🕊️', '✨', '🍫', '🕯️', '💖', '🧸', '✦'];
    for (let i = 0; i < 7; i++) {
      createFloatingCustomItem(x, y, icons[Math.floor(Math.random() * icons.length)]);
    }

    if (clickCount % 4 === 0) {
      fireMetallicConfetti({ particleCount: 35, spread: 50, origin: { y: 0.8 } });
    }
  });
}

function createFloatingCustomItem(x, y, symbol) {
  const item = document.createElement('div');
  item.textContent = symbol;
  item.style.position = 'fixed';
  item.style.left = `${x}px`;
  item.style.top = `${y}px`;
  item.style.fontSize = `${Math.random() * 12 + 20}px`;
  item.style.pointerEvents = 'none';
  item.style.zIndex = '99999';
  item.style.transition = 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)';
  document.body.appendChild(item);

  const destX = x + (Math.random() - 0.5) * 160;
  const destY = y - (Math.random() * 180 + 80);

  requestAnimationFrame(() => {
    item.style.transform = `translate(${destX - x}px, ${destY - y}px) scale(1.3) rotate(${(Math.random() - 0.5) * 40}deg)`;
    item.style.opacity = '0';
  });

  setTimeout(() => {
    item.remove();
  }, 1450);
}

// ------------------------------------------------------------------------------
// 8. INTERACTIVE SILVER SCRATCH-OFF CARD
// ------------------------------------------------------------------------------
function initScratchCard(cfg = {}) {
  const container = document.getElementById('scratchContainer');
  const canvas = document.getElementById('scratchCanvas');
  const progressText = document.getElementById('scratchProgress');
  const secretTextEl = document.getElementById('scratchSecretText');

  if (!canvas || !container) return;

  if (cfg && cfg.secretText && secretTextEl) {
    secretTextEl.textContent = cfg.secretText;
  }

  const ctx = canvas.getContext('2d');
  let isScratching = false;
  let isRevealed = false;
  let lastX = null;
  let lastY = null;

  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    paintFoil(rect.width, rect.height);
  }

  function paintFoil(w, h) {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';

    // Charcoal & slate silver metallic gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#32323e');
    grad.addColorStop(0.35, '#4a4a5a');
    grad.addColorStop(0.7, '#2b2b36');
    grad.addColorStop(1, '#3a3a48');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle metallic stardust flecks
    ctx.fillStyle = 'rgba(212, 175, 55, 0.22)';
    for (let i = 0; i < 40; i++) {
      const sx = (Math.sin(i * 99) * 0.5 + 0.5) * w;
      const sy = (Math.cos(i * 33) * 0.5 + 0.5) * h;
      ctx.beginPath();
      ctx.arc(sx, sy, (i % 3) + 1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Elegant text banner on foil
    ctx.font = '600 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.95)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ SCRATCH TO REVEAL SECRET ✦', w / 2, h / 2 - 12);

    ctx.font = 'italic 12px "Playfair Display", Georgia, serif';
    ctx.fillStyle = 'rgba(220, 220, 235, 0.7)';
    ctx.fillText('(Rub with finger or mouse)', w / 2, h / 2 + 14);

    ctx.restore();
  }

  function scratch(x, y) {
    if (isRevealed) return;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    if (lastX !== null && lastY !== null) {
      ctx.lineWidth = 44;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    ctx.restore();

    lastX = x;
    lastY = y;
  }

  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function checkProgress() {
    if (isRevealed) return;
    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(rect.width * dpr);
    const h = Math.floor(rect.height * dpr);

    try {
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      let transparentCount = 0;
      let totalSamples = 0;

      for (let i = 3; i < data.length; i += 4 * 16) {
        totalSamples++;
        if (data[i] === 0) {
          transparentCount++;
        }
      }

      const percent = Math.min(100, Math.round((transparentCount / totalSamples) * 100));
      if (progressText) {
        progressText.textContent = `Scratch to reveal: ${percent}%`;
      }

      if (percent >= 40) {
        revealSecret();
      }
    } catch (err) {}
  }

  function revealSecret() {
    if (isRevealed) return;
    isRevealed = true;
    canvas.classList.add('revealed');
    if (progressText) {
      progressText.innerHTML = '✨ <strong style="color: var(--candle-gold)">Secret Revealed!</strong> ✨';
    }
    playCelebrationChord();
    fireMetallicConfetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 }
    });
  }

  // Pointer & Touch Events
  canvas.addEventListener('pointerdown', (e) => {
    isScratching = true;
    const pos = getCanvasCoords(e);
    lastX = pos.x;
    lastY = pos.y;
    scratch(pos.x, pos.y);
  });

  window.addEventListener('pointermove', (e) => {
    if (!isScratching) return;
    const pos = getCanvasCoords(e);
    scratch(pos.x, pos.y);
  });

  window.addEventListener('pointerup', () => {
    if (isScratching) {
      isScratching = false;
      lastX = null;
      lastY = null;
      checkProgress();
    }
  });

  // Dedicated touch listeners for smooth mobile support
  canvas.addEventListener('touchstart', (e) => {
    isScratching = true;
    const pos = getCanvasCoords(e);
    lastX = pos.x;
    lastY = pos.y;
    scratch(pos.x, pos.y);
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (!isScratching) return;
    e.preventDefault();
    const pos = getCanvasCoords(e);
    scratch(pos.x, pos.y);
  }, { passive: false });

  canvas.addEventListener('touchend', () => {
    if (isScratching) {
      isScratching = false;
      lastX = null;
      lastY = null;
      checkProgress();
    }
  });

  setTimeout(resizeCanvas, 150);
  window.addEventListener('resize', () => {
    if (!isRevealed) {
      resizeCanvas();
    }
  });
}

// ------------------------------------------------------------------------------
// 9. "OPEN WHEN..." TIME CAPSULE LETTERS
// ------------------------------------------------------------------------------
function initOpenWhen(list) {
  const grid = document.getElementById('openWhenGrid');
  const modal = document.getElementById('openWhenModal');
  const backdrop = document.getElementById('openWhenBackdrop');
  const closeBtn = document.getElementById('openWhenClose');

  const modalIcon = document.getElementById('modalLetterIcon');
  const modalTag = document.getElementById('modalLetterTag');
  const modalTitle = document.getElementById('modalLetterTitle');
  const modalBody = document.getElementById('modalLetterBody');

  if (!grid || !Array.isArray(list) || list.length === 0) return;

  grid.innerHTML = '';

  list.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'open-when-card';
    card.innerHTML = `
      <span class="open-when-stamp">${item.icon || '✉️'}</span>
      <span class="open-when-tag">${item.tag || 'Open When'}</span>
      <h4>${item.label}</h4>
      <span class="open-when-hint">Tap to unseal ✦</span>
    `;

    card.addEventListener('click', () => {
      if (modalIcon) modalIcon.textContent = item.icon || '✉️';
      if (modalTag) modalTag.textContent = item.tag || 'Special Letter';
      if (modalTitle) modalTitle.textContent = item.label || 'Open When...';
      if (modalBody) {
        modalBody.innerHTML = `<p>${item.letter || ''}</p>`;
      }

      if (modal) modal.classList.add('active');
      playChime(520, 'sine', 0.6);
      setTimeout(() => playChime(660, 'sine', 0.7), 120);
    });

    grid.appendChild(card);
  });

  function closeModal() {
    if (modal) modal.classList.remove('active');
  }

  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ------------------------------------------------------------------------------
// 8. RENDER MEMORY GRIDS (PART 1 & PART 2)
// ------------------------------------------------------------------------------
function renderMemoryGrid(containerId, items, defaultTag) {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(items)) return;

  container.innerHTML = '';

  items.forEach((item, localIdx) => {
    const globalIdx = window.ALL_MEMORIES.length;
    window.ALL_MEMORIES.push({
      ...item,
      defaultTag: defaultTag
    });

    const card = document.createElement('div');
    card.className = 'polaroid-card';
    card.setAttribute('data-global-index', globalIdx);

    const rot = item.rotation !== undefined ? item.rotation : (localIdx % 2 === 0 ? -2 : 2);
    card.style.transform = `rotate(${rot}deg)`;

    const fallbackSrc = item.fallback || 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80';

    card.innerHTML = `
      <div class="polaroid-img-wrapper">
        <img src="${item.image}" alt="${item.caption || 'Memory'}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackSrc}';">
        <span class="polaroid-tag-badge">${item.tag || defaultTag}</span>
      </div>
      <div class="polaroid-caption">${item.caption}</div>
    `;

    card.addEventListener('click', () => {
      openLightboxIndex(globalIdx);
    });

    container.appendChild(card);
  });
}

// ------------------------------------------------------------------------------
// 9. LIGHTBOX NAVIGATION (CYCLES SEAMLESSLY THROUGH ALL PHOTOS)
// ------------------------------------------------------------------------------
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  function close() {
    if (lightbox) lightbox.classList.remove('active');
  }

  function showPhoto(idx) {
    const list = window.ALL_MEMORIES || [];
    if (!list[idx]) return;

    currentLightboxIndex = idx;
    const item = list[idx];

    const img = document.getElementById('lightboxImg');
    const cap = document.getElementById('lightboxCaption');
    const badge = document.getElementById('lightboxBadge');
    const counter = document.getElementById('lightboxCounter');

    const fallbackSrc = item.fallback || 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80';

    if (img) {
      img.onerror = function() {
        this.onerror = null;
        this.src = fallbackSrc;
      };
      img.src = item.image;
      img.alt = item.caption || 'Memory';
    }

    if (cap) cap.textContent = item.caption || '';
    if (badge) {
      badge.textContent = item.tag || item.defaultTag || 'Memory ✦';
    }

    if (counter) {
      counter.textContent = `${idx + 1} of ${list.length}`;
    }

    if (lightbox) lightbox.classList.add('active');
  }

  function step(dir) {
    const list = window.ALL_MEMORIES || [];
    if (list.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + dir + list.length) % list.length;
    showPhoto(currentLightboxIndex);
    playChime(450 + dir * 50);
  }

  window.openLightboxIndex = (index) => {
    showPhoto(index);
  };

  if (backdrop) backdrop.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn) prevBtn.addEventListener('click', () => step(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => step(1));

  window.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  // Mobile Touch Swipe Gestures (Swipe left/right to browse, swipe down to close)
  let touchStartX = 0;
  let touchStartY = 0;

  lightbox.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Horizontal swipe
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          step(1); // Swipe left = Next photo
        } else {
          step(-1); // Swipe right = Previous photo
        }
      } else if (diffY > 75 && Math.abs(diffY) > Math.abs(diffX)) {
        close(); // Swipe down = dismiss
      }
    }
  }, { passive: true });
}

// ------------------------------------------------------------------------------
// METALLIC GOLD & SILVER CELEBRATION
// ------------------------------------------------------------------------------
function fireMetallicConfetti(opts = {}) {
  if (typeof confetti === 'function') {
    confetti({
      colors: ['#d4af37', '#f4e4b5', '#ffffff', '#a0a0b2', '#c5a059'],
      ...opts
    });
  }
}

function fireGrandCelebration() {
  if (typeof confetti !== 'function') return;

  const duration = 3.2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 28, spread: 360, ticks: 60, zIndex: 10000, colors: ['#d4af37', '#f4e4b5', '#ffffff', '#a0a0b2', '#c5a059'] };

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    const particleCount = 40 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: Math.random() * 0.4 + 0.1, y: Math.random() - 0.2 }
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: Math.random() * 0.4 + 0.5, y: Math.random() - 0.2 }
    });
  }, 260);
}
