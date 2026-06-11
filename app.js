const NOTE_SET = [
  { id: "g-open", name: "G", pitch: "G3", string: "G", finger: 0, accidental: "", frequency: 196.0 },
  { id: "a-g1", name: "A", pitch: "A3", string: "G", finger: 1, accidental: "", frequency: 220.0 },
  { id: "b-g2", name: "B", pitch: "B3", string: "G", finger: 2, accidental: "", frequency: 246.94 },
  { id: "c-g3", name: "C", pitch: "C4", string: "G", finger: 3, accidental: "", frequency: 261.63 },
  { id: "d-open", name: "D", pitch: "D4", string: "D", finger: 0, accidental: "", frequency: 293.66 },
  { id: "e-d1", name: "E", pitch: "E4", string: "D", finger: 1, accidental: "", frequency: 329.63 },
  { id: "fs-d2", name: "F#", pitch: "F#4", string: "D", finger: 2, accidental: "#", frequency: 369.99 },
  { id: "g-d3", name: "G", pitch: "G4", string: "D", finger: 3, accidental: "", frequency: 392.0 },
  { id: "a-open", name: "A", pitch: "A4", string: "A", finger: 0, accidental: "", frequency: 440.0 },
  { id: "b-a1", name: "B", pitch: "B4", string: "A", finger: 1, accidental: "", frequency: 493.88 },
  { id: "cs-a2", name: "C#", pitch: "C#5", string: "A", finger: 2, accidental: "#", frequency: 554.37 },
  { id: "d-a3", name: "D", pitch: "D5", string: "A", finger: 3, accidental: "", frequency: 587.33 },
  { id: "e-open", name: "E", pitch: "E5", string: "E", finger: 0, accidental: "", frequency: 659.25 },
  { id: "fs-e1", name: "F#", pitch: "F#5", string: "E", finger: 1, accidental: "#", frequency: 739.99 },
  { id: "gs-e2", name: "G#", pitch: "G#5", string: "E", finger: 2, accidental: "#", frequency: 830.61 },
  { id: "a-e3", name: "A", pitch: "A5", string: "E", finger: 3, accidental: "", frequency: 880.0 }
];

const allNotes = NOTE_SET.map((note) => note.id);

// Easy-to-edit Suzuki note pools. Add or remove note ids here as Liam's
// pieces change. Book 3 is currently a placeholder and should be adjusted
// based on Liam's actual pieces and teacher guidance.
const book1Notes = [
  "d-open",
  "e-d1",
  "fs-d2",
  "g-d3",
  "a-open",
  "b-a1",
  "cs-a2",
  "d-a3",
  "e-open",
  "fs-e1",
  "gs-e2",
  "a-e3"
];
const book2Notes = allNotes;
const book3Notes = allNotes;

const NOTE_POOLS = {
  all: allNotes,
  book1: book1Notes,
  book2: book2Notes,
  book3: book3Notes
};

// Mapping rule: each Suzuki beginner note is stored with its staff pitch,
// violin string, finger number, accidental, and oscillator frequency. The
// answer checker uses this table for every level.
const MODES = [
  {
    id: "level1",
    title: "Level 1: Staff to Violin Location",
    shortTitle: "Location",
    instructions: "Read the staff note, then tap the exact string and finger.",
    answerType: "location",
    promptType: "single"
  },
  {
    id: "level2",
    title: "Level 2: Staff to String Only",
    shortTitle: "String",
    instructions: "Read the staff note, then tap only the correct string.",
    answerType: "string",
    promptType: "single"
  },
  {
    id: "level3",
    title: "Level 3: Staff to Exact Finger",
    shortTitle: "Finger",
    instructions: "Read the staff note, then tap open, 1st, 2nd, or 3rd finger.",
    answerType: "finger",
    promptType: "single"
  },
  {
    id: "level4",
    title: "Level 4: Hear Note to Location",
    shortTitle: "Hear",
    instructions: "Listen to the note, then tap the exact string and finger.",
    answerType: "location",
    promptType: "audio"
  },
  {
    id: "level5",
    title: "Level 5: Short Melody Challenge",
    shortTitle: "Melody",
    instructions: "Read the melody, then tap each string and finger in order.",
    answerType: "melody",
    promptType: "melody"
  },
  {
    id: "practice",
    title: "Practice Mode",
    shortTitle: "Practice",
    instructions: "Play 10 staff notes in order, then see accuracy, time, and missed notes.",
    answerType: "practice",
    promptType: "practice"
  },
  {
    id: "book1",
    title: "Suzuki Book 1 Mode",
    shortTitle: "Book 1",
    instructions: "Practice 10 notes from the current Book 1 pool, then see accuracy, time, and misses.",
    answerType: "practice",
    promptType: "practice",
    notePool: "book1"
  },
  {
    id: "book2",
    title: "Suzuki Book 2 Mode",
    shortTitle: "Book 2",
    instructions: "Practice 10 notes from the full beginner Book 1 and 2 pool.",
    answerType: "practice",
    promptType: "practice",
    notePool: "book2"
  },
  {
    id: "book3",
    title: "Suzuki Book 3 Mode",
    shortTitle: "Book 3",
    instructions: "Practice 10 notes from the current Book 3 prototype pool.",
    answerType: "practice",
    promptType: "practice",
    notePool: "book3"
  },
  {
    id: "custom",
    title: "Custom Practice Mode",
    shortTitle: "Custom",
    instructions: "Choose strings and finger difficulty, then play a 10-note custom run.",
    answerType: "practice",
    promptType: "practice",
    notePool: "custom"
  }
];

const STRINGS = ["G", "D", "A", "E"];
const FINGERS = [
  { value: 0, label: "Open", longLabel: "open string" },
  { value: 1, label: "1", longLabel: "first finger" },
  { value: 2, label: "2", longLabel: "second finger" },
  { value: 3, label: "3", longLabel: "third finger" }
];
const REWARDS = [
  { points: 30, title: "Master Trainer of Music" },
  { points: 20, title: "Raichu Musician" },
  { points: 10, title: "Pikachu Performer" },
  { points: 5, title: "Pichu Violinist" }
];

const practiceButton = document.getElementById("practiceButton");
const minutesInput = document.getElementById("minutesInput");
const practiceStatus = document.getElementById("practiceStatus");
const totalScoreValue = document.getElementById("totalScoreValue");
const rewardLevel = document.getElementById("rewardLevel");
const modeTitle = document.getElementById("modeTitle");
const modeInstructions = document.getElementById("modeInstructions");
const modeButtons = document.getElementById("modeButtons");
const levelScoreGrid = document.getElementById("levelScoreGrid");
const customPracticePanel = document.getElementById("customPracticePanel");
const customStringInputs = document.querySelectorAll("[name='customString']");
const customDifficulty = document.getElementById("customDifficulty");
const playNoteButton = document.getElementById("playNoteButton");
const newNoteButton = document.getElementById("newNoteButton");
const staffLines = document.getElementById("staffLines");
const ledgerLines = document.getElementById("ledgerLines");
const noteGroup = document.getElementById("noteGroup");
const melodyProgress = document.getElementById("melodyProgress");
const practiceSequence = document.getElementById("practiceSequence");
const melodyAnswer = document.getElementById("melodyAnswer");
const fingerboard = document.getElementById("fingerboard");
const fingerboardPanel = document.getElementById("fingerboardPanel");
const stringPanel = document.getElementById("stringPanel");
const fingerPanel = document.getElementById("fingerPanel");
const gameFeedback = document.getElementById("gameFeedback");

let activeMode = MODES[0];
let currentNote = null;
let currentMelody = [];
let melodyIndex = 0;
let practiceRun = createEmptyPracticeRun();
let audioContext = null;
let levelStats = loadLevelStats();
let customSettings = loadCustomSettings();

function createEmptyPracticeRun() {
  return {
    notes: [],
    index: 0,
    startedAt: 0,
    missedIndexes: new Set()
  };
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getPracticeLog() {
  return JSON.parse(localStorage.getItem("liamPracticeLog") || "{}");
}

function savePracticeLog(log) {
  localStorage.setItem("liamPracticeLog", JSON.stringify(log));
}

function loadLevelStats() {
  const saved = JSON.parse(localStorage.getItem("liamLevelStats") || "{}");
  const stats = {};

  MODES.forEach((mode) => {
    stats[mode.id] = {
      score: Number(saved[mode.id]?.score || 0),
      streak: Number(saved[mode.id]?.streak || 0)
    };
  });

  return stats;
}

function saveLevelStats() {
  localStorage.setItem("liamLevelStats", JSON.stringify(levelStats));
}

function loadCustomSettings() {
  const saved = JSON.parse(localStorage.getItem("liamCustomPracticeSettings") || "{}");

  return {
    strings: Array.isArray(saved.strings) && saved.strings.length ? saved.strings : ["G", "D", "A", "E"],
    maxFinger: Number.isInteger(saved.maxFinger) ? saved.maxFinger : 3
  };
}

function saveCustomSettings() {
  localStorage.setItem("liamCustomPracticeSettings", JSON.stringify(customSettings));
}

function applyCustomSettingsToControls() {
  customStringInputs.forEach((input) => {
    input.checked = customSettings.strings.includes(input.value);
  });

  customDifficulty.value = String(customSettings.maxFinger);
}

function updateCustomSettingsFromControls() {
  const selectedStrings = [...customStringInputs]
    .filter((input) => input.checked)
    .map((input) => input.value);

  customSettings = {
    strings: selectedStrings.length ? selectedStrings : ["G", "D", "A", "E"],
    maxFinger: Number(customDifficulty.value)
  };

  if (!selectedStrings.length) {
    applyCustomSettingsToControls();
  }

  saveCustomSettings();
}

function updatePracticeStatus() {
  const log = getPracticeLog();
  const today = todayKey();

  if (log[today]) {
    practiceStatus.textContent = `Great job! You practiced ${log[today].minutes} minutes today.`;
    minutesInput.value = log[today].minutes;
    return;
  }

  practiceStatus.textContent = "Ready for today's practice?";
}

function saveTodayPractice() {
  const minutes = Number(minutesInput.value);

  if (!minutes || minutes < 1) {
    practiceStatus.textContent = "Enter your practice minutes first.";
    minutesInput.focus();
    return;
  }

  const log = getPracticeLog();
  log[todayKey()] = {
    minutes,
    savedAt: new Date().toISOString()
  };

  savePracticeLog(log);
  updatePracticeStatus();
}

function getTotalScore() {
  return Object.values(levelStats).reduce((total, stat) => total + stat.score, 0);
}

function getRewardTitle() {
  const totalScore = getTotalScore();
  const reward = REWARDS.find((item) => totalScore >= item.points);
  return reward ? reward.title : "Keep Practicing!";
}

function updateScoreDisplay() {
  const totalScore = getTotalScore();
  totalScoreValue.textContent = totalScore;
  rewardLevel.textContent = getRewardTitle();

  MODES.forEach((mode, index) => {
    document.getElementById(`${mode.id}Score`).textContent = levelStats[mode.id].score;
    document.getElementById(`${mode.id}Streak`).textContent = `Streak ${levelStats[mode.id].streak}`;
  });

  document.querySelectorAll(".reward-card").forEach((card) => {
    const points = Number(card.dataset.points);
    card.classList.toggle("unlocked", totalScore >= points);
  });
}

function awardPoint() {
  levelStats[activeMode.id].score += 1;
  levelStats[activeMode.id].streak += 1;
  saveLevelStats();
  updateScoreDisplay();
}

function resetActiveStreak() {
  levelStats[activeMode.id].streak = 0;
  saveLevelStats();
  updateScoreDisplay();
}

function makeSvgElement(tag, attributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function drawStaffLines() {
  staffLines.textContent = "";

  for (let index = 0; index < 5; index += 1) {
    staffLines.appendChild(makeSvgElement("line", {
      x1: 104,
      x2: 580,
      y1: 66 + index * 18,
      y2: 66 + index * 18,
      class: "staff-line"
    }));
  }
}

function pitchToY(pitch) {
  const match = pitch.match(/^([A-G])#?(\d)$/);
  const letterOrder = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
  const [, letter, octaveText] = match;
  const octave = Number(octaveText);
  const pitchStep = octave * 7 + letterOrder[letter];
  const bottomLineE4Step = 4 * 7 + letterOrder.E;

  return 138 - (pitchStep - bottomLineE4Step) * 9;
}

function drawLedgerLinesForNote(x, y) {
  for (let ledgerY = 156; ledgerY <= y + 1; ledgerY += 18) {
    if (ledgerY > 138) {
      ledgerLines.appendChild(makeSvgElement("line", {
        x1: x - 34,
        x2: x + 34,
        y1: ledgerY,
        y2: ledgerY,
        class: "ledger-line"
      }));
    }
  }

  for (let ledgerY = 48; ledgerY <= y + 1; ledgerY += 18) {
    if (ledgerY < 66) {
      ledgerLines.appendChild(makeSvgElement("line", {
        x1: x - 34,
        x2: x + 34,
        y1: ledgerY,
        y2: ledgerY,
        class: "ledger-line"
      }));
    }
  }
}

function drawNote(note, x, options = {}) {
  const y = pitchToY(note.pitch);
  drawLedgerLinesForNote(x, y);

  if (note.accidental) {
    const accidental = makeSvgElement("text", {
      x: x - 58,
      y: y + 12,
      class: "accidental"
    });
    accidental.textContent = note.accidental;
    noteGroup.appendChild(accidental);
  }

  const noteClass = ["note-head", options.isCurrent ? "is-current" : "", options.isComplete ? "is-complete" : ""]
    .filter(Boolean)
    .join(" ");

  noteGroup.appendChild(makeSvgElement("ellipse", {
    cx: x,
    cy: y,
    rx: 20,
    ry: 13,
    class: noteClass
  }));

  const stemX = y < 96 ? x - 20 : x + 20;
  noteGroup.appendChild(makeSvgElement("line", {
    x1: stemX,
    x2: stemX,
    y1: y,
    y2: y < 96 ? y + 58 : y - 58,
    class: "note-stem"
  }));
}

function drawSingleNote(note) {
  ledgerLines.textContent = "";
  noteGroup.textContent = "";
  drawNote(note, 330);
}

function drawMelody() {
  ledgerLines.textContent = "";
  noteGroup.textContent = "";

  currentMelody.forEach((note, index) => {
    drawNote(note, 180 + index * 82, {
      isCurrent: index === melodyIndex,
      isComplete: index < melodyIndex
    });
  });
}

function drawPracticeRun() {
  ledgerLines.textContent = "";
  noteGroup.textContent = "";

  practiceRun.notes.forEach((note, index) => {
    drawNote(note, 128 + index * 48, {
      isCurrent: index === practiceRun.index,
      isComplete: index < practiceRun.index
    });
  });
}

function clearChoiceMarks() {
  document.querySelectorAll(".finger-button, .choice-button").forEach((button) => {
    button.classList.remove("correct-choice", "wrong-choice");
  });
}

function locationLabel(note) {
  const finger = FINGERS.find((item) => item.value === note.finger);
  return `${note.name} = ${note.string} string, ${finger.longLabel}`;
}

function modeLabel(mode, index) {
  if (mode.id === "practice") {
    return "Practice";
  }

  if (mode.id === "book1") {
    return "Book 1";
  }

  if (mode.id === "book2") {
    return "Book 2";
  }

  if (mode.id === "book3") {
    return "Book 3";
  }

  if (mode.id === "custom") {
    return "Custom";
  }

  return `Level ${index + 1}`;
}

function activeNotePool() {
  if (activeMode.notePool === "custom") {
    return NOTE_SET.filter((note) => customSettings.strings.includes(note.string) && note.finger <= customSettings.maxFinger);
  }

  const poolIds = NOTE_POOLS[activeMode.notePool || "all"];
  return NOTE_SET.filter((note) => poolIds.includes(note.id));
}

function pickRandomNote() {
  const pool = activeNotePool();
  return pool[Math.floor(Math.random() * pool.length)];
}

function pickNewChallenge() {
  clearChoiceMarks();
  practiceSequence.textContent = "";
  melodyAnswer.textContent = "";
  gameFeedback.className = "feedback";

  if (activeMode.promptType === "melody") {
    const length = 3 + Math.floor(Math.random() * 3);
    currentMelody = Array.from({ length }, pickRandomNote);
    melodyIndex = 0;
    currentNote = currentMelody[0];
    drawMelody();
    melodyProgress.textContent = `Melody note 1 of ${currentMelody.length}`;
    gameFeedback.textContent = "Tap the first note location.";
    return;
  }

  if (activeMode.promptType === "practice") {
    practiceRun = {
      notes: Array.from({ length: 10 }, pickRandomNote),
      index: 0,
      startedAt: Date.now(),
      missedIndexes: new Set()
    };
    currentNote = practiceRun.notes[0];
    currentMelody = [];
    melodyIndex = 0;
    drawPracticeRun();
    updatePracticeProgress();
    gameFeedback.textContent = "Tap note 1 of 10.";
    return;
  }

  currentNote = pickRandomNote();
  currentMelody = [];
  melodyIndex = 0;
  drawSingleNote(currentNote);
  melodyProgress.textContent = activeMode.promptType === "audio" ? "Listen, then choose the location." : "";
  gameFeedback.textContent = activeMode.promptType === "audio" ? "Tap Play note, then answer." : "Tap the answer.";

  if (activeMode.promptType === "audio") {
    playCurrentNote();
  }
}

function setActiveMode(modeId) {
  activeMode = MODES.find((mode) => mode.id === modeId);
  modeTitle.textContent = activeMode.title;
  modeInstructions.textContent = activeMode.instructions;
  playNoteButton.classList.toggle("is-hidden", activeMode.promptType !== "audio");
  customPracticePanel.classList.toggle("is-visible", activeMode.id === "custom");

  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === activeMode.id);
  });

  fingerboardPanel.style.display = activeMode.answerType === "string" || activeMode.answerType === "finger" ? "none" : "block";
  stringPanel.classList.toggle("is-visible", activeMode.answerType === "string");
  fingerPanel.classList.toggle("is-visible", activeMode.answerType === "finger");

  pickNewChallenge();
}

function handleCorrect(button) {
  awardPoint();
  button.classList.add("correct-choice");
  gameFeedback.textContent = "Correct!";
  gameFeedback.className = "feedback correct";
}

function handleWrong(button) {
  resetActiveStreak();
  button.classList.add("wrong-choice");
  gameFeedback.textContent = "Try again";
  gameFeedback.className = "feedback try-again";
}

function updatePracticeProgress() {
  const notes = practiceRun.notes.map((note, index) => {
    const label = note.name;

    if (index < practiceRun.index) {
      return practiceRun.missedIndexes.has(index) ? `${label}*` : label;
    }

    if (index === practiceRun.index) {
      return `[${label}]`;
    }

    return label;
  });

  melodyProgress.textContent = `Practice note ${practiceRun.index + 1} of ${practiceRun.notes.length}`;
  practiceSequence.textContent = notes.join("  ");
}

function finishPracticeRun() {
  const totalNotes = practiceRun.notes.length;
  const missedCount = practiceRun.missedIndexes.size;
  const accuracy = Math.round(((totalNotes - missedCount) / totalNotes) * 100);
  const seconds = Math.max(1, Math.round((Date.now() - practiceRun.startedAt) / 1000));
  const missedNotes = [...practiceRun.missedIndexes].map((index) => locationLabel(practiceRun.notes[index]));
  const result = {
    accuracy,
    seconds,
    missedNotes,
    sequence: practiceRun.notes.map((note) => note.name),
    completedAt: new Date().toISOString()
  };

  localStorage.setItem("liamLastPracticeRun", JSON.stringify(result));

  melodyProgress.textContent = "Practice complete!";
  practiceSequence.textContent = practiceRun.notes.map((note) => note.name).join("  ");
  melodyAnswer.innerHTML = [
    `Accuracy: ${accuracy}%`,
    `Time: ${seconds} seconds`,
    `Notes missed: ${missedNotes.length ? missedNotes.join(" | ") : "None"}`
  ].join("<br>");
  gameFeedback.textContent = "Nice run! Tap New challenge to try another 10 notes.";
  gameFeedback.className = "feedback correct";
  drawPracticeRun();
}

function handleLocationTap(button, stringName, finger) {
  if (activeMode.promptType === "practice") {
    handlePracticeTap(button, stringName, finger);
    return;
  }

  const target = activeMode.promptType === "melody" ? currentMelody[melodyIndex] : currentNote;
  const isCorrect = target.string === stringName && target.finger === finger;

  if (!isCorrect) {
    handleWrong(button);
    return;
  }

  handleCorrect(button);

  if (activeMode.promptType !== "melody") {
    setTimeout(pickNewChallenge, 850);
    return;
  }

  melodyIndex += 1;

  if (melodyIndex >= currentMelody.length) {
    melodyProgress.textContent = "Melody complete!";
    melodyAnswer.textContent = currentMelody.map(locationLabel).join(" | ");
    setTimeout(pickNewChallenge, 2800);
    return;
  }

  currentNote = currentMelody[melodyIndex];
  melodyProgress.textContent = `Melody note ${melodyIndex + 1} of ${currentMelody.length}`;
  drawMelody();
}

function handlePracticeTap(button, stringName, finger) {
  const target = practiceRun.notes[practiceRun.index];
  const isCorrect = target.string === stringName && target.finger === finger;

  if (!isCorrect) {
    practiceRun.missedIndexes.add(practiceRun.index);
    handleWrong(button);
    updatePracticeProgress();
    return;
  }

  handleCorrect(button);
  practiceRun.index += 1;

  if (practiceRun.index >= practiceRun.notes.length) {
    finishPracticeRun();
    return;
  }

  currentNote = practiceRun.notes[practiceRun.index];
  updatePracticeProgress();
  drawPracticeRun();
  setTimeout(clearChoiceMarks, 250);
}

function handleStringTap(button, stringName) {
  if (currentNote.string === stringName) {
    handleCorrect(button);
    setTimeout(pickNewChallenge, 850);
    return;
  }

  handleWrong(button);
}

function handleFingerTap(button, finger) {
  if (currentNote.finger === finger) {
    handleCorrect(button);
    setTimeout(pickNewChallenge, 850);
    return;
  }

  handleWrong(button);
}

function createModeButtons() {
  MODES.forEach((mode, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mode-button";
    button.dataset.mode = mode.id;
    button.innerHTML = `<span>${modeLabel(mode, index)}</span><strong>${mode.shortTitle}</strong>`;
    button.addEventListener("click", () => setActiveMode(mode.id));
    modeButtons.appendChild(button);
  });
}

function createScoreCards() {
  MODES.forEach((mode, index) => {
    const card = document.createElement("div");
    card.className = "level-score-card";
    card.innerHTML = `
      <span>${modeLabel(mode, index)}</span>
      <strong id="${mode.id}Score">0</strong>
      <em id="${mode.id}Streak">Streak 0</em>
    `;
    levelScoreGrid.appendChild(card);
  });
}

function createFingerboard() {
  fingerboard.textContent = "";

  STRINGS.forEach((stringName) => {
    const row = document.createElement("div");
    row.className = "fingerboard-row";

    const label = document.createElement("div");
    label.className = "string-label";
    label.textContent = stringName;
    row.appendChild(label);

    FINGERS.forEach((finger) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "finger-button";
      button.setAttribute("aria-label", `${stringName} string ${finger.longLabel}`);

      const buttonLabel = document.createElement("span");
      buttonLabel.textContent = finger.label;
      button.appendChild(buttonLabel);

      button.addEventListener("click", () => {
        handleLocationTap(button, stringName, finger.value);
      });

      row.appendChild(button);
    });

    fingerboard.appendChild(row);
  });
}

function createChoicePanels() {
  STRINGS.forEach((stringName) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = stringName;
    button.addEventListener("click", () => handleStringTap(button, stringName));
    stringPanel.appendChild(button);
  });

  FINGERS.forEach((finger) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = finger.label;
    button.setAttribute("aria-label", finger.longLabel);
    button.addEventListener("click", () => handleFingerTap(button, finger.value));
    fingerPanel.appendChild(button);
  });
}

function playTone(frequency, startTime, duration) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.18, startTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.05);
}

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playCurrentNote() {
  ensureAudioContext();

  if (activeMode.promptType === "melody" && currentMelody.length) {
    const now = audioContext.currentTime + 0.02;
    currentMelody.forEach((note, index) => {
      playTone(note.frequency, now + index * 0.42, 0.34);
    });
    return;
  }

  if (currentNote) {
    playTone(currentNote.frequency, audioContext.currentTime + 0.02, 0.65);
  }
}

practiceButton.addEventListener("click", saveTodayPractice);
newNoteButton.addEventListener("click", pickNewChallenge);
playNoteButton.addEventListener("click", playCurrentNote);
customStringInputs.forEach((input) => {
  input.addEventListener("change", () => {
    updateCustomSettingsFromControls();

    if (activeMode.id === "custom") {
      pickNewChallenge();
    }
  });
});
customDifficulty.addEventListener("change", () => {
  updateCustomSettingsFromControls();

  if (activeMode.id === "custom") {
    pickNewChallenge();
  }
});

drawStaffLines();
createModeButtons();
createScoreCards();
createFingerboard();
createChoicePanels();
applyCustomSettingsToControls();
updatePracticeStatus();
updateScoreDisplay();
setActiveMode("level1");
