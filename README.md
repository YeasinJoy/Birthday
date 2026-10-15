# 🕯️ Intimate Birthday Keepsake Website

A timeless, moody, and intimate celebration website designed in **warm charcoal, slate gray, and candlelight gold**.

Ready to host on **GitHub Pages** for free in under 3 minutes, and designed so you can reuse it for both your girlfriend or your closest friends just by changing the name, pictures, and date in `config.js`!

---

## ✨ Features Included

1. ✉️ **Intimate Wax-Sealed Keepsake Envelope**:
   - Opens with an antique gold wax seal stamp `✦`.
   - Unrolls with warm harmonic chimes and metallic champagne/gold confetti to reveal the keepsake.
2. 🎂 **Artisan Candlelit Cake**:
   - Realistic warm golden flickering candle flames.
   - She can click or tap to blow out the candles, accompanied by smoke puffs, gentle chime melody, and a quiet birthday wish.
3. ⏳ **Live Keepsake / Memory Counter**:
   - Tracks the days, hours, and minutes you've known each other or been together.
4. 📸 **Part 01 • Her Moments (Solo Memories)**:
   - Dedicated spotlight gallery celebrating just her, her smiles, and her radiance.
5. ☕ **Part 02 • Moments Of Us (Shared Memories)**:
   - Dedicated gallery celebrating moments of you two together, roadtrips, and shared laughs.
6. 🕯️ **"Things I Deeply Appreciate" Interactive Flip Cards**:
   - Reflective, thoughtful cards that flip over when clicked.
7. 📜 **The Intimate Letter**:
   - Handwritten and serif stationery on textured warm slate paper with a golden pin.
8. 🕯️ **"Send Warmth & Appreciation" Interactive Button**:
   - Spawns rising candlelight embers, stars, and stardust across the screen.
9. 🎶 **Cozy Ambient Audio**:
   - Built-in soothing lofi ambient chords, or drop your own favorite MP3 file into the folder!

---

## 🚀 How to Preview Right Now

1. Open File Explorer to:
   `C:\Users\USER\.gemini\antigravity\scratch\birthday-surprise`
2. Double-click **`index.html`** to open it immediately in Chrome or Edge.

---

## 🎨 How to Personalize for Your Girlfriend (In 1 Minute)

Open **`config.js`** in Notepad or any editor:
```javascript
window.BIRTHDAY_CONFIG = {
  recipientName: "Sarah",            // Her name
  nickname: "Sweetheart",            // Her pet name
  birthdayDate: "October 17",        // Birthday date
  relationshipType: "romantic",      // "romantic" (for girlfriend)
  startDate: "2023-06-15",           // Date you two got together
  // ...
};
```

---

## 👥 How to Reuse for a Close Friend Later

Whenever a close friend has a birthday, you literally only need to change 3 lines in **`config.js`**:
```javascript
window.BIRTHDAY_CONFIG = {
  recipientName: "Alex",             // Your friend's name
  birthdayDate: "November 5",        // Friend's birthday
  relationshipType: "friendship",    // 👈 Switches all text & tabs to friendship mode!
  startDate: "2020-09-01",           // When you became friends (or leave "" to hide)
};
```
Everything else (the tabs, counter, hero quote, and letter) automatically adapts into an appreciative, authentic friendship celebration!

---

## 📸 Adding Photos

1. Drop photos into the **`images/`** folder:
   - Solo shots: `images/her1.jpg` (or `images/friend1.jpg`)
   - Shots together: `images/us1.jpg`
2. In `config.js`, update the `polaroids` array. (Automatic elegant fallbacks ensure nothing looks broken if some photos are missing).

---

## 🌐 Deploy to GitHub Pages (FREE!)

1. Go to [github.com](https://github.com) and create a **New Public Repository** (e.g., `birthday-keepsake`).
2. Click **"Upload files"** and drag-and-drop:
   - `index.html`
   - `style.css`
   - `script.js`
   - `config.js`
   - The `images` folder
3. Click **Commit changes**.
4. Go to **Settings** ➔ **Pages** ➔ Branch: **`main`** ➔ Click **Save**.
5. In 60 seconds, your site is live at:
   `https://<your-username>.github.io/<repo-name>/`
