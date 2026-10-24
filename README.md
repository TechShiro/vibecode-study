# VibeCode Study — Mobile APK & Anti-Dopamine Learning Feed

A high-performance mobile application designed to replace mindless social media doomscrolling with rapid, high-yield computer science and university engineering mastery.

---

## 🌟 Key Features

### 1. Dual Mode Switcher
- **Interview Mode**: 264 deep-dive lessons across System Design, DSA, Web Dev, OOPS, Operating Systems, DBMS, AI/ML, and Cyber Security.
- **Semester Mode**: 191 academic syllabus lessons across Indian Knowledge Systems (IKS), Operating Systems, Computer Networks, Compiler Design, DAA, and Soft Computing.

### 2. "Study Shorts" — The Dopamine Replacement Feed
- **TikTok / Reels Style Vertical Snap**: Fullscreen snap-scroll (`100dvh`) cards.
- **Randomized High-Yield Concepts**: Random topic card from your active track.
- **30-Second Punchy Core Idea**: Key formula, ASCII flowchart, or critical code takeaway.
- **Action Buttons**:
  - `Read Full Lesson` &rarr; Slides into the distraction-free reader.
  - `Mark Mastered` &rarr; Checks off your syllabus with tactile haptic feedback.
  - Swipe up for the next random concept.

### 3. Progress Tracking & Focus Hub
- **Per-Subject Progress Bars**: Track what is completed and what remains.
- **Focus Streak Counter**: Gamify your daily learning habit.
- **25-Minute Pomodoro Study Timer**: Distraction-free countdown for deep focus.
- **Verified Video Vault**: Instant access to 3Blue1Brown, Karpathy, Abdul Bari, and Computerphile lectures.

---

## 📱 How to Use on Your Phone Today

### Option A: Instant PWA Install (No Cable or Android Studio Needed)
1. In the `agent/mobile-app` directory, run a quick local server:
   ```powershell
   npx serve www -p 3000
   ```
2. Open your phone's browser (e.g. Chrome on Android) and navigate to `http://<your-pc-ip>:3000`.
3. Tap the browser menu (⋮) and tap **"Install App"** or **"Add to Home Screen"**.
4. The app installs with its own icon, launches full-screen without URL bars, and caches lessons offline!

### Option B: Build the Standalone `.apk` File via GitHub Actions
1. Push this repository to GitHub (or push the `agent/mobile-app` folder).
2. Go to the **Actions** tab on GitHub &rarr; select **"Build Android APK"** &rarr; click **"Run workflow"**.
3. In under 3 minutes, GitHub builds the APK on its Ubuntu cloud runners.
4. Download `VibeCode-Study-Debug-APK.zip` from the workflow summary, unzip, and install `app-debug.apk` directly on your Android phone!
