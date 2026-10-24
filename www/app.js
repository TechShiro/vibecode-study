// VibeCode Study App - High Performance Mobile Frontend

let catalogData = { interview: [], sem: [] };
let currentMode = 'interview'; // 'interview' or 'sem'
let masteredLessons = new Set();
let currentShortsIndex = 0;
let currentReadingLesson = null;
let pomodoroSeconds = 25 * 60;
let pomodoroTimer = null;
let isTimerRunning = false;

// 1. Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  loadSavedState();
  await loadCatalogData();
  renderCurriculum();
  initShortsFeed();
  renderProgressView();
  registerServiceWorker();
});

// Load Mastered State & Streaks from LocalStorage
function loadSavedState() {
  try {
    const saved = localStorage.getItem('vibecode_mastered');
    if (saved) {
      masteredLessons = new Set(JSON.parse(saved));
    }
  } catch (e) {
    console.error('Failed to load state', e);
  }
}

function saveState() {
  localStorage.setItem('vibecode_mastered', JSON.stringify(Array.from(masteredLessons)));
}

// Fetch Catalog Data
async function loadCatalogData() {
  try {
    const res = await fetch('data.json');
    catalogData = await res.json();
  } catch (err) {
    console.error('Error loading data.json:', err);
  }
}

// 2. Mode Switching: Interview vs Semester
function switchMode(mode) {
  if (currentMode === mode) return;
  currentMode = mode;
  
  triggerHaptic(10);
  document.getElementById('btn-mode-interview').classList.toggle('active', mode === 'interview');
  document.getElementById('btn-mode-sem').classList.toggle('active', mode === 'sem');

  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  if (mode === 'interview') {
    heroTitle.textContent = 'Interview Mastery Track';
    heroDesc.textContent = 'Zero-level to production deep dive across System Design, DSA, Web Dev, OOPS, OS, DBMS, AI/ML, and Cyber Security.';
  } else {
    heroTitle.textContent = 'University Semester Track';
    heroDesc.textContent = 'Academic syllabus curriculum across Indian Knowledge Systems (IKS), OS, Networks, Compilers, DAA, and Soft Computing.';
  }

  renderCurriculum();
  initShortsFeed();
  renderProgressView();
}

// 3. Tab Switching: Learn, Shorts, Progress
function switchTab(tabId) {
  triggerHaptic(15);
  ['learn', 'shorts', 'progress'].forEach(t => {
    document.getElementById(`tab-${t}`).classList.toggle('active', t === tabId);
    document.getElementById(`view-${t}`).classList.toggle('active', t === tabId);
  });

  if (tabId === 'shorts') {
    // If empty, generate feed
    const container = document.getElementById('shorts-feed');
    if (!container.children.length) {
      initShortsFeed();
    }
  } else if (tabId === 'progress') {
    renderProgressView();
  }
}

// 4. Render Curriculum View
function renderCurriculum() {
  const list = catalogData[currentMode] || [];
  const container = document.getElementById('subjects-list');
  container.innerHTML = '';

  // Group lessons by subject
  const subjectsMap = {};
  list.forEach(item => {
    if (!subjectsMap[item.subject]) {
      subjectsMap[item.subject] = {
        name: item.subject,
        id: item.subjectId,
        lessons: []
      };
    }
    subjectsMap[item.subject].lessons.push(item);
  });

  let totalLessonsCount = list.length;
  let masteredCount = 0;

  Object.values(subjectsMap).forEach(sub => {
    const subTotal = sub.lessons.length;
    const subDone = sub.lessons.filter(l => masteredLessons.has(l.id)).length;
    masteredCount += subDone;
    const subPct = subTotal > 0 ? Math.round((subDone / subTotal) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'subject-card';
    card.onclick = () => openSubjectLessonsModal(sub);
    card.innerHTML = `
      <div class="subject-info">
        <h3>${sub.name}</h3>
        <div class="subject-meta">${subTotal} Lessons &middot; ${subDone} Mastered</div>
      </div>
      <div class="progress-pill">${subPct}%</div>
    `;
    container.appendChild(card);
  });

  // Update Hero Stats
  document.getElementById('stat-total-lessons').textContent = totalLessonsCount;
  document.getElementById('stat-mastered-lessons').textContent = masteredCount;
  const overallPct = totalLessonsCount > 0 ? Math.round((masteredCount / totalLessonsCount) * 100) : 0;
  document.getElementById('stat-progress-pct').textContent = `${overallPct}%`;
}

// 5. Study Shorts: The Doomscroll Feed
function initShortsFeed() {
  const container = document.getElementById('shorts-feed');
  container.innerHTML = '';
  
  const pool = [...(catalogData[currentMode] || [])];
  if (!pool.length) return;

  // Shuffle pool randomly
  shuffleArray(pool);

  // Render first batch of 15 random cards
  appendShortsBatch(pool.slice(0, 20));

  // Infinite scroll listener
  container.onscroll = () => {
    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 500) {
      // Append another shuffled slice
      shuffleArray(pool);
      appendShortsBatch(pool.slice(0, 10));
    }
  };
}

function appendShortsBatch(items) {
  const container = document.getElementById('shorts-feed');
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'short-card';
    const isMastered = masteredLessons.has(item.id);

    card.innerHTML = `
      <div>
        <div class="short-header">
          <span class="badge-subject">${item.subject}</span>
          <span class="badge-unit">${item.unit}</span>
        </div>
        <h2 class="short-title">${item.title}</h2>
      </div>

      <div class="short-body">
        <div class="one-idea-box">
          <span class="label">30-Second Core Concept</span>
          <p>${item.oneIdea}</p>
        </div>
        ${item.keyVisual ? `<div class="visual-preview">${item.keyVisual}</div>` : ''}
      </div>

      <div>
        <div class="short-footer">
          <button class="btn-read-full" onclick="openReader('${item.id}')">
            <span>Read Full Lesson</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <button class="btn-master ${isMastered ? 'mastered' : ''}" id="btn-master-${item.id}" onclick="toggleShortMastery('${item.id}')">
            ${isMastered ? '✓ Mastered' : '○ Mark Done'}
          </button>
        </div>
        <div class="swipe-hint" style="margin-top:0.6rem;">
          <span>Swipe up for next concept</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleShortMastery(lessonId) {
  triggerHaptic(25);
  if (masteredLessons.has(lessonId)) {
    masteredLessons.delete(lessonId);
  } else {
    masteredLessons.add(lessonId);
  }
  saveState();

  // Update button state across UI
  const isMastered = masteredLessons.has(lessonId);
  const btns = document.querySelectorAll(`[id="btn-master-${lessonId}"]`);
  btns.forEach(btn => {
    btn.classList.toggle('mastered', isMastered);
    btn.textContent = isMastered ? '✓ Mastered' : '○ Mark Done';
  });

  renderCurriculum();
}

// 6. Fullscreen Reader
function openReader(lessonId) {
  triggerHaptic(15);
  const allLessons = [...catalogData.interview, ...catalogData.sem];
  const lesson = allLessons.find(l => l.id === lessonId);
  if (!lesson) return;

  currentReadingLesson = lesson;
  const modal = document.getElementById('reader-modal');
  const title = document.getElementById('reader-title');
  const frame = document.getElementById('reader-frame');
  const masterBtn = document.getElementById('reader-master-btn');

  title.textContent = lesson.title;
  frame.src = `content/${lesson.filePath}`;
  
  const isDone = masteredLessons.has(lesson.id);
  masterBtn.classList.toggle('mastered', isDone);
  masterBtn.textContent = isDone ? '✓ Mastered' : 'Mark Done';

  modal.classList.add('open');

  // Track scroll progress inside frame if same-origin
  frame.onload = () => {
    try {
      const doc = frame.contentWindow.document;
      frame.contentWindow.addEventListener('scroll', () => {
        const scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
        const scrollHeight = doc.documentElement.scrollHeight - doc.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        document.getElementById('reader-progress-bar').style.width = `${progress}%`;
      });
    } catch (e) {}
  };
}

function closeReader() {
  triggerHaptic(10);
  document.getElementById('reader-modal').classList.remove('open');
  document.getElementById('reader-frame').src = 'about:blank';
}

function toggleCurrentLessonMastery() {
  if (!currentReadingLesson) return;
  toggleShortMastery(currentReadingLesson.id);
  const isDone = masteredLessons.has(currentReadingLesson.id);
  const masterBtn = document.getElementById('reader-master-btn');
  masterBtn.classList.toggle('mastered', isDone);
  masterBtn.textContent = isDone ? '✓ Mastered' : 'Mark Done';
}

// 7. Subject Lessons Modal
function openSubjectLessonsModal(subject) {
  triggerHaptic(15);
  const container = document.getElementById('search-results-list');
  container.innerHTML = `<h3 style="padding:0.5rem 0; font-size:1.1rem; color:#fff;">${subject.name} (${subject.lessons.length} Lessons)</h3>`;
  
  subject.lessons.forEach(l => {
    const isDone = masteredLessons.has(l.id);
    const item = document.createElement('div');
    item.className = 'subject-card';
    item.style.marginBottom = '0.5rem';
    item.innerHTML = `
      <div style="flex:1;" onclick="closeSearch(); openReader('${l.id}')">
        <h4 style="font-size:0.9rem; margin-bottom:0.2rem;">${l.title}</h4>
        <span style="font-size:0.75rem; color:var(--text-muted);">${l.unit}</span>
      </div>
      <button class="btn-master ${isDone ? 'mastered' : ''}" style="padding:0.4rem 0.6rem; font-size:0.75rem;" onclick="toggleShortMastery('${l.id}'); this.classList.toggle('mastered', masteredLessons.has('${l.id}')); this.textContent = masteredLessons.has('${l.id}') ? '✓' : '○';">
        ${isDone ? '✓' : '○'}
      </button>
    `;
    container.appendChild(item);
  });

  document.getElementById('search-modal').classList.add('open');
}

// 8. Progress & Pomodoro Focus Timer
function renderProgressView() {
  const container = document.getElementById('progress-breakdown-list');
  container.innerHTML = '';
  
  const videoVault = document.getElementById('video-vault-list');
  videoVault.innerHTML = '';

  const list = catalogData[currentMode] || [];
  const subjectsMap = {};

  list.forEach(item => {
    if (!subjectsMap[item.subject]) {
      subjectsMap[item.subject] = { total: 0, done: 0 };
    }
    subjectsMap[item.subject].total++;
    if (masteredLessons.has(item.id)) {
      subjectsMap[item.subject].done++;
    }

    // Video Vault population
    if (item.ytVideo) {
      const vCard = document.createElement('div');
      vCard.className = 'subject-card';
      vCard.onclick = () => openReader(item.id);
      vCard.innerHTML = `
        <div style="flex:1;">
          <h4 style="font-size:0.88rem; color:#fff;">${item.title}</h4>
          <span style="font-size:0.72rem; color:var(--accent-cyan); font-weight:700;">▶ Watch Lecture intuition</span>
        </div>
        <span class="badge-subject">${item.subject}</span>
      `;
      videoVault.appendChild(vCard);
    }
  });

  Object.entries(subjectsMap).forEach(([name, stats]) => {
    const pct = stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0;
    const row = document.createElement('div');
    row.style.background = 'var(--bg-card)';
    row.style.padding = '0.75rem 1rem';
    row.style.borderRadius = '10px';
    row.style.border = '1px solid var(--border-color)';
    row.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.4rem;">
        <span style="font-weight:600;">${name}</span>
        <span style="color:var(--text-muted);">${stats.done} / ${stats.total} (${pct}%)</span>
      </div>
      <div style="height:6px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden;">
        <div style="width:${pct}%; height:100%; background:linear-gradient(90deg, var(--accent-primary), var(--accent-cyan));"></div>
      </div>
    `;
    container.appendChild(row);
  });
}

function toggleTimer() {
  triggerHaptic(20);
  const btn = document.getElementById('btn-timer-toggle');
  if (isTimerRunning) {
    clearInterval(pomodoroTimer);
    isTimerRunning = false;
    btn.textContent = 'Resume Focus';
    btn.classList.remove('pause');
  } else {
    isTimerRunning = true;
    btn.textContent = 'Pause';
    btn.classList.add('pause');
    pomodoroTimer = setInterval(() => {
      pomodoroSeconds--;
      updateTimerDisplay();
      if (pomodoroSeconds <= 0) {
        clearInterval(pomodoroTimer);
        isTimerRunning = false;
        triggerHaptic([50, 100, 50, 100]);
        alert('🎉 Focus session completed! Outstanding discipline.');
        resetTimer();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(pomodoroTimer);
  isTimerRunning = false;
  pomodoroSeconds = 25 * 60;
  updateTimerDisplay();
  const btn = document.getElementById('btn-timer-toggle');
  btn.textContent = 'Start Focus';
  btn.classList.remove('pause');
}

function updateTimerDisplay() {
  const m = Math.floor(pomodoroSeconds / 60);
  const s = pomodoroSeconds % 60;
  document.getElementById('timer-display').textContent = 
    `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// 9. Instant Search
function openSearch() {
  triggerHaptic(10);
  document.getElementById('search-modal').classList.add('open');
  document.getElementById('search-input').focus();
}

function closeSearch() {
  document.getElementById('search-modal').classList.remove('open');
}

function handleSearch(query) {
  const q = query.toLowerCase().trim();
  const container = document.getElementById('search-results-list');
  container.innerHTML = '';
  if (!q) return;

  const all = [...catalogData.interview, ...catalogData.sem];
  const matches = all.filter(item => 
    item.title.toLowerCase().includes(q) ||
    item.subject.toLowerCase().includes(q) ||
    item.unit.toLowerCase().includes(q) ||
    item.oneIdea.toLowerCase().includes(q)
  ).slice(0, 30);

  matches.forEach(item => {
    const isDone = masteredLessons.has(item.id);
    const row = document.createElement('div');
    row.className = 'subject-card';
    row.onclick = () => { closeSearch(); openReader(item.id); };
    row.innerHTML = `
      <div style="flex:1;">
        <h4 style="font-size:0.9rem; margin-bottom:0.2rem;">${item.title}</h4>
        <span style="font-size:0.75rem; color:var(--text-muted);">${item.subject} &middot; ${item.unit}</span>
      </div>
      <span style="font-size:0.75rem; color:${isDone ? 'var(--accent-emerald)' : 'var(--text-faint)'};">
        ${isDone ? '✓ Mastered' : 'Pending'}
      </span>
    `;
    container.appendChild(row);
  });
}

// Utilities
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function triggerHaptic(duration) {
  if (navigator.vibrate) {
    try { navigator.vibrate(duration); } catch (e) {}
  }
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}
