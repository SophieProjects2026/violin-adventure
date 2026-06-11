const NOTE_SET = [
  { id: "g-open", name: "G", pitch: "G3", string: "G", finger: 0, accidental: "", frequency: 196.0 },
  { id: "a-g1", name: "A", pitch: "A3", string: "G", finger: 1, accidental: "", frequency: 220.0 },
  { id: "b-g2", name: "B", pitch: "B3", string: "G", finger: 2, accidental: "", frequency: 246.94 },
  { id: "c-g3", name: "C", pitch: "C4", string: "G", finger: 3, accidental: "", frequency: 261.63 },
  { id: "d-g4", name: "D", pitch: "D4", string: "G", finger: 4, accidental: "", frequency: 293.66 },
  { id: "d-open", name: "D", pitch: "D4", string: "D", finger: 0, accidental: "", frequency: 293.66 },
  { id: "e-d1", name: "E", pitch: "E4", string: "D", finger: 1, accidental: "", frequency: 329.63 },
  { id: "fs-d2", name: "F#", pitch: "F#4", string: "D", finger: 2, accidental: "#", frequency: 369.99 },
  { id: "g-d3", name: "G", pitch: "G4", string: "D", finger: 3, accidental: "", frequency: 392.0 },
  { id: "a-d4", name: "A", pitch: "A4", string: "D", finger: 4, accidental: "", frequency: 440.0 },
  { id: "a-open", name: "A", pitch: "A4", string: "A", finger: 0, accidental: "", frequency: 440.0 },
  { id: "b-a1", name: "B", pitch: "B4", string: "A", finger: 1, accidental: "", frequency: 493.88 },
  { id: "cs-a2", name: "C#", pitch: "C#5", string: "A", finger: 2, accidental: "#", frequency: 554.37 },
  { id: "d-a3", name: "D", pitch: "D5", string: "A", finger: 3, accidental: "", frequency: 587.33 },
  { id: "e-a4", name: "E", pitch: "E5", string: "A", finger: 4, accidental: "", frequency: 659.25 },
  { id: "e-open", name: "E", pitch: "E5", string: "E", finger: 0, accidental: "", frequency: 659.25 },
  { id: "fs-e1", name: "F#", pitch: "F#5", string: "E", finger: 1, accidental: "#", frequency: 739.99 },
  { id: "gs-e2", name: "G#", pitch: "G#5", string: "E", finger: 2, accidental: "#", frequency: 830.61 },
  { id: "a-e3", name: "A", pitch: "A5", string: "E", finger: 3, accidental: "", frequency: 880.0 },
  { id: "b-e4", name: "B", pitch: "B5", string: "E", finger: 4, accidental: "", frequency: 987.77 }
];

const allNotes = NOTE_SET.map((note) => note.id);

// Easy-to-edit Suzuki note pools. Add or remove note ids here as the student's
// pieces change. Book 3 is currently a placeholder and should be adjusted
// based on actual pieces and teacher guidance.
const book1Notes = [
  "d-open",
  "e-d1",
  "fs-d2",
  "g-d3",
  "a-open",
  "b-a1",
  "cs-a2",
  "d-a3",
  "a-d4",
  "e-open",
  "fs-e1",
  "gs-e2",
  "a-e3",
  "e-a4",
  "b-e4"
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
    title: "Staff to Violin Location",
    shortTitle: "Location",
    group: "training",
    poolLabel: "All Notes",
    instructions: "Read the staff note, then tap the exact string and finger.",
    answerType: "location",
    promptType: "single"
  },
  {
    id: "level2",
    title: "Staff to String Only",
    shortTitle: "String",
    group: "training",
    poolLabel: "All Notes",
    instructions: "Read the staff note, then tap only the correct string.",
    answerType: "string",
    promptType: "single"
  },
  {
    id: "level3",
    title: "Staff to Finger Only",
    shortTitle: "Finger",
    group: "training",
    poolLabel: "All Notes",
    instructions: "Read the staff note, then tap open, 1st, 2nd, 3rd, or 4th finger.",
    answerType: "finger",
    promptType: "single"
  },
  {
    id: "level4",
    title: "Ear Training",
    shortTitle: "Ear Training",
    group: "training",
    poolLabel: "All Notes",
    instructions: "Listen carefully, then tap the violin location.",
    answerType: "location",
    promptType: "audio"
  },
  {
    id: "level5",
    title: "Melody Challenge",
    shortTitle: "Melody",
    group: "training",
    poolLabel: "All Notes",
    instructions: "Read the melody, then tap each string and finger in order.",
    answerType: "melody",
    promptType: "melody"
  },
  {
    id: "practice",
    title: "Practice Mode",
    shortTitle: "Practice",
    group: "practice",
    poolLabel: "All Notes",
    instructions: "Play 10 staff notes in order, then see accuracy, time, and missed notes.",
    answerType: "practice",
    promptType: "practice"
  },
  {
    id: "book1",
    title: "Suzuki Book 1 Practice",
    shortTitle: "Book 1",
    group: "book",
    poolLabel: "Book 1 Practice Pool",
    instructions: "Practice 10 notes from the current Book 1 pool, then see accuracy, time, and misses.",
    answerType: "practice",
    promptType: "practice",
    notePool: "book1"
  },
  {
    id: "book2",
    title: "Suzuki Book 2 Practice",
    shortTitle: "Book 2",
    group: "book",
    poolLabel: "Book 2 Practice Pool",
    instructions: "Practice 10 notes from the full beginner Book 1 and 2 pool.",
    answerType: "practice",
    promptType: "practice",
    notePool: "book2"
  },
  {
    id: "book3",
    title: "Suzuki Book 3 Practice",
    shortTitle: "Book 3",
    group: "book",
    poolLabel: "Book 3 Practice Pool",
    instructions: "Practice 10 notes from the current Book 3 prototype pool.",
    answerType: "practice",
    promptType: "practice",
    notePool: "book3"
  },
  {
    id: "custom",
    title: "Custom Practice Mode",
    shortTitle: "Custom",
    group: "practice",
    poolLabel: "Custom Practice Pool",
    instructions: "Choose strings, use the selected difficulty, then play a 10-note custom run.",
    answerType: "practice",
    promptType: "practice",
    notePool: "custom"
  }
];

const DIFFICULTIES = [
  { value: 0, label: "Difficulty 1", detail: "Open Strings Only" },
  { value: 1, label: "Difficulty 2", detail: "Open + 1st Finger" },
  { value: 2, label: "Difficulty 3", detail: "Open + 1st + 2nd Finger" },
  { value: 3, label: "Difficulty 4", detail: "Open through 3rd Finger" },
  { value: 4, label: "Difficulty 5", detail: "Open through 4th Finger" }
];

const STRINGS = ["E", "A", "D", "G"];
const FINGERS = [
  { value: 0, label: "Open", longLabel: "open string" },
  { value: 1, label: "1", longLabel: "first finger" },
  { value: 2, label: "2", longLabel: "second finger" },
  { value: 3, label: "3", longLabel: "third finger" },
  { value: 4, label: "4", longLabel: "fourth finger" }
];
const REWARD_SUGGESTIONS = [
  "Dessert after dinner",
  "Family movie night",
  "Pokemon budget",
  "LEGO budget",
  "Stay up later",
  "Parent-child outing",
  "New violin accessory",
  "Family adventure"
];

const practiceButton = document.getElementById("practiceButton");
const minutesInput = document.getElementById("minutesInput");
const practiceStatus = document.getElementById("practiceStatus");
const todayDate = document.getElementById("todayDate");
const totalScoreValue = document.getElementById("totalScoreValue");
const rewardLevel = document.getElementById("rewardLevel");
const rewardCurrentPoints = document.getElementById("rewardCurrentPoints");
const rewardRedeemedPoints = document.getElementById("rewardRedeemedPoints");
const rewardRemainingPoints = document.getElementById("rewardRemainingPoints");
const nextRewardText = document.getElementById("nextRewardText");
const rewardProgressFill = document.getElementById("rewardProgressFill");
const rewardProgressText = document.getElementById("rewardProgressText");
const rewardFormTitle = document.getElementById("rewardFormTitle");
const rewardNameInput = document.getElementById("rewardNameInput");
const rewardPointsInput = document.getElementById("rewardPointsInput");
const addRewardButton = document.getElementById("addRewardButton");
const cancelRewardEditButton = document.getElementById("cancelRewardEditButton");
const rewardMessage = document.getElementById("rewardMessage");
const customRewardsList = document.getElementById("customRewardsList");
const suggestedRewardsList = document.getElementById("suggestedRewardsList");
const redemptionHistoryList = document.getElementById("redemptionHistoryList");
const parentViewButton = document.getElementById("parentViewButton");
const parentModal = document.getElementById("parentModal");
const closeParentViewButton = document.getElementById("closeParentViewButton");
const mappingButton = document.getElementById("mappingButton");
const mappingModal = document.getElementById("mappingModal");
const closeMappingButton = document.getElementById("closeMappingButton");
const saveProgressButton = document.getElementById("saveProgressButton");
const resetProgressButton = document.getElementById("resetProgressButton");
const progressMessage = document.getElementById("progressMessage");
const todayPoints = document.getElementById("todayPoints");
const weekPoints = document.getElementById("weekPoints");
const monthPoints = document.getElementById("monthPoints");
const yearPoints = document.getElementById("yearPoints");
const weeklyRange = document.getElementById("weeklyRange");
const monthlyRange = document.getElementById("monthlyRange");
const yearlyRange = document.getElementById("yearlyRange");
const weeklyRecord = document.getElementById("weeklyRecord");
const monthlyRecord = document.getElementById("monthlyRecord");
const yearlyRecord = document.getElementById("yearlyRecord");
const modeTitle = document.getElementById("modeTitle");
const modeInstructions = document.getElementById("modeInstructions");
const trainingModeSelect = document.getElementById("trainingModeSelect");
const practiceModeSelect = document.getElementById("practiceModeSelect");
const levelScoreGrid = document.getElementById("levelScoreGrid");
const difficultySelect = document.getElementById("difficultySelect");
const currentModeLabel = document.getElementById("currentModeLabel");
const currentDifficultyLabel = document.getElementById("currentDifficultyLabel");
const currentPoolLabel = document.getElementById("currentPoolLabel");
const poolWarning = document.getElementById("poolWarning");
const customPracticePanel = document.getElementById("customPracticePanel");
const customStringInputs = document.querySelectorAll("[name='customString']");
const playNoteButton = document.getElementById("playNoteButton");
const newNoteButton = document.getElementById("newNoteButton");
const staffSvg = document.getElementById("staffSvg");
const listeningPrompt = document.getElementById("listeningPrompt");
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
const earViolinCue = document.getElementById("earViolinCue");

let activeMode = MODES[0];
let currentNote = null;
let currentMelody = [];
let melodyIndex = 0;
let practiceRun = createEmptyPracticeRun();
let audioContext = null;
let levelStats = loadLevelStats();
let customSettings = loadCustomSettings();
let selectedDifficulty = loadSelectedDifficulty();
let progressRecords = loadProgressRecords();
let practicePointDates = loadPracticePointDates();
let redemptionRecords = loadRedemptionRecords();
let customRewards = loadCustomRewards();
let editingRewardId = null;
let lastPromptNote = null;
let roundState = createRoundState();

function createEmptyPracticeRun() {
  return {
    notes: [],
    index: 0,
    startedAt: 0,
    missedIndexes: new Set()
  };
}

function createRoundState() {
  return {
    total: 10,
    answered: 0,
    missed: false,
    complete: false
  };
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatLongDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfWeek(date) {
  const start = startOfDay(date);
  start.setDate(start.getDate() - start.getDay());
  return start;
}

function endOfWeek(date) {
  const end = startOfWeek(date);
  end.setDate(end.getDate() + 6);
  return end;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function startOfYear(date) {
  return new Date(date.getFullYear(), 0, 1);
}

function endOfYear(date) {
  return new Date(date.getFullYear(), 11, 31);
}

function dateInRange(dateKey, start, end) {
  const date = new Date(`${dateKey}T00:00:00`);
  return date >= startOfDay(start) && date <= startOfDay(end);
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

function loadProgressRecords() {
  return JSON.parse(localStorage.getItem("liamProgressRecords") || "[]");
}

function saveProgressRecords() {
  localStorage.setItem("liamProgressRecords", JSON.stringify(progressRecords));
}

function recordPointEarned(mode = activeMode.id) {
  progressRecords.push({
    date: localDateKey(new Date()),
    timestamp: new Date().toISOString(),
    mode,
    points: 1
  });
  saveProgressRecords();
}

function loadPracticePointDates() {
  return JSON.parse(localStorage.getItem("liamPracticePointDates") || "[]");
}

function savePracticePointDates() {
  localStorage.setItem("liamPracticePointDates", JSON.stringify(practicePointDates));
}

function loadRedemptionRecords() {
  return JSON.parse(localStorage.getItem("liamRewardRedemptions") || "[]");
}

function saveRedemptionRecords() {
  localStorage.setItem("liamRewardRedemptions", JSON.stringify(redemptionRecords));
}

function loadCustomRewards() {
  return JSON.parse(localStorage.getItem("liamCustomRewards") || "[]");
}

function saveCustomRewards() {
  localStorage.setItem("liamCustomRewards", JSON.stringify(customRewards));
}

function loadCustomSettings() {
  const saved = JSON.parse(localStorage.getItem("liamCustomPracticeSettings") || "{}");

  return {
    strings: Array.isArray(saved.strings) && saved.strings.length ? saved.strings : ["E", "A", "D", "G"]
  };
}

function saveCustomSettings() {
  localStorage.setItem("liamCustomPracticeSettings", JSON.stringify(customSettings));
}

function applyCustomSettingsToControls() {
  customStringInputs.forEach((input) => {
    input.checked = customSettings.strings.includes(input.value);
  });
}

function updateCustomSettingsFromControls() {
  const selectedStrings = [...customStringInputs]
    .filter((input) => input.checked)
    .map((input) => input.value);

  customSettings = {
    strings: selectedStrings.length ? selectedStrings : ["E", "A", "D", "G"]
  };

  if (!selectedStrings.length) {
    applyCustomSettingsToControls();
  }

  saveCustomSettings();
}

function loadSelectedDifficulty() {
  const saved = Number(localStorage.getItem("liamSelectedDifficulty"));
  return Number.isInteger(saved) && saved >= 0 && saved <= 4 ? saved : 4;
}

function saveSelectedDifficulty() {
  localStorage.setItem("liamSelectedDifficulty", String(selectedDifficulty));
}

function applyDifficultyToControls() {
  difficultySelect.value = String(selectedDifficulty);
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
  const today = localDateKey(new Date());

  if (!minutes || minutes < 1) {
    practiceStatus.textContent = "Enter your practice minutes first.";
    minutesInput.focus();
    return;
  }

  const log = getPracticeLog();
  log[today] = {
    minutes,
    savedAt: new Date().toISOString()
  };

  if (minutes > 15 && !practicePointDates.includes(today)) {
    practicePointDates.push(today);
    savePracticePointDates();
    recordPointEarned("daily-practice");
    progressMessage.textContent = "Daily practice point earned!";
  } else if (minutes > 15) {
    progressMessage.textContent = "Daily practice point already earned today.";
  } else {
    progressMessage.textContent = "Practice saved. More than 15 minutes earns 1 daily practice point.";
  }

  savePracticeLog(log);
  updatePracticeStatus();
  updateScoreDisplay();
}

function getTotalScore() {
  const gamePoints = Object.values(levelStats).reduce((total, stat) => total + stat.score, 0);
  return gamePoints + practicePointDates.length;
}

function getRewardTitle() {
  return `${getRemainingRewardPoints()} pts available`;
}

function getRedeemedPoints() {
  return redemptionRecords.reduce((total, record) => total + Number(record.points || 0), 0);
}

function getRemainingRewardPoints() {
  return Math.max(0, getTotalScore() - getRedeemedPoints());
}

function createRewardSuggestionCard(suggestion) {
  const card = document.createElement("div");
  card.className = "reward-card";
  card.innerHTML = `<strong>${suggestion}</strong>`;
  return card;
}

function updateRewardTracker() {
  const totalScore = getTotalScore();
  const redeemedPoints = getRedeemedPoints();
  const remainingPoints = getRemainingRewardPoints();
  const sortedRewards = [...customRewards].sort((a, b) => Number(a.cost) - Number(b.cost));
  const nextReward = sortedRewards.find((reward) => Number(reward.cost) > remainingPoints);
  const readyRewards = sortedRewards.filter((reward) => Number(reward.cost) <= remainingPoints);

  rewardCurrentPoints.textContent = totalScore;
  rewardRedeemedPoints.textContent = redeemedPoints;
  rewardRemainingPoints.textContent = remainingPoints;

  if (readyRewards.length) {
    const bestReward = readyRewards[readyRewards.length - 1];
    nextRewardText.textContent = `You can get: ${bestReward.name}`;
    rewardProgressFill.style.width = "100%";
    rewardProgressText.textContent = `${remainingPoints} points available. Choose a reward below to redeem it.`;
  } else if (nextReward) {
    const cost = Number(nextReward.cost);
    const percent = Math.max(0, Math.min(100, (remainingPoints / cost) * 100));
    const pointsNeeded = cost - remainingPoints;
    nextRewardText.textContent = `${pointsNeeded} more point${pointsNeeded === 1 ? "" : "s"} for ${nextReward.name}`;
    rewardProgressFill.style.width = `${percent}%`;
    rewardProgressText.textContent = `${remainingPoints} of ${cost} points saved for this reward.`;
  } else {
    nextRewardText.textContent = "Add a family reward to begin.";
    rewardProgressFill.style.width = "0";
    rewardProgressText.textContent = "Families choose the rewards and point costs.";
  }

  renderCustomRewards();
  suggestedRewardsList.textContent = "";
  REWARD_SUGGESTIONS.forEach((suggestion) => {
    suggestedRewardsList.appendChild(createRewardSuggestionCard(suggestion));
  });

  renderRedemptionHistory();
}

function pointsInRange(start, end) {
  return progressRecords
    .filter((record) => dateInRange(record.date, start, end))
    .reduce((total, record) => total + Number(record.points || 0), 0);
}

function pointsByDate(start, end) {
  const totals = new Map();

  progressRecords.forEach((record) => {
    if (!dateInRange(record.date, start, end)) {
      return;
    }

    totals.set(record.date, (totals.get(record.date) || 0) + Number(record.points || 0));
  });

  return [...totals.entries()].sort(([a], [b]) => a.localeCompare(b));
}

function renderRecordList(element, rows, emptyText) {
  element.textContent = "";

  if (!rows.length) {
    const empty = document.createElement("div");
    empty.className = "record-row";
    empty.innerHTML = `<span>${emptyText}</span><strong>0 pts</strong>`;
    element.appendChild(empty);
    return;
  }

  rows.forEach(([dateKey, points]) => {
    const row = document.createElement("div");
    row.className = "record-row";
    row.innerHTML = `<span>${formatLongDate(new Date(`${dateKey}T00:00:00`))}</span><strong>${points} pts</strong>`;
    element.appendChild(row);
  });
}

function renderRedemptionHistory() {
  redemptionHistoryList.textContent = "";

  if (!redemptionRecords.length) {
    const empty = document.createElement("div");
    empty.className = "record-row";
    empty.innerHTML = "<span>No rewards redeemed yet</span><strong>0 pts</strong>";
    redemptionHistoryList.appendChild(empty);
    return;
  }

  [...redemptionRecords].reverse().forEach((record) => {
    const row = document.createElement("div");
    row.className = "record-row redemption-row";

    const details = document.createElement("span");
    const dateLine = document.createElement("span");
    const nameLine = document.createElement("strong");
    dateLine.textContent = formatLongDate(new Date(`${record.date}T00:00:00`));
    nameLine.textContent = record.name;
    details.append(dateLine, document.createElement("br"), nameLine);

    const points = document.createElement("strong");
    points.append(
      `${record.points} pts used`,
      document.createElement("br"),
      `${record.remainingAfter} left`
    );

    row.append(details, points);
    redemptionHistoryList.appendChild(row);
  });
}

function renderCustomRewards() {
  customRewardsList.textContent = "";

  if (!customRewards.length) {
    const empty = document.createElement("div");
    empty.className = "custom-reward-card reward-empty";
    empty.innerHTML = `
      <div>
        <span>No family rewards yet</span>
        <strong>Add a reward to work toward.</strong>
        <p>Try "Mini golf with Dad" for 15 points or "New LEGO set" for 25 points.</p>
      </div>
    `;
    customRewardsList.appendChild(empty);
    return;
  }

  const remainingPoints = getRemainingRewardPoints();

  customRewards.forEach((reward) => {
    const cost = Number(reward.cost);
    const pointsNeeded = Math.max(0, cost - remainingPoints);
    const card = document.createElement("div");
    card.className = "custom-reward-card";

    const details = document.createElement("div");
    const status = document.createElement("span");
    const title = document.createElement("strong");
    const helper = document.createElement("p");
    status.textContent = pointsNeeded ? `${pointsNeeded} more point${pointsNeeded === 1 ? "" : "s"} needed` : "Ready to redeem";
    title.textContent = reward.name;
    helper.textContent = `${cost} point${cost === 1 ? "" : "s"}`;
    details.append(status, title, helper);

    const actions = document.createElement("div");
    actions.className = "reward-card-actions";

    const redeemButton = document.createElement("button");
    redeemButton.type = "button";
    redeemButton.textContent = "Redeem";
    redeemButton.disabled = pointsNeeded > 0;
    redeemButton.addEventListener("click", () => redeemCustomReward(reward.id));

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "secondary-button";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => startRewardEdit(reward.id));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteCustomReward(reward.id));

    actions.append(redeemButton, editButton, deleteButton);
    card.append(details, actions);
    customRewardsList.appendChild(card);
  });
}

function clearRewardForm() {
  editingRewardId = null;
  rewardNameInput.value = "";
  rewardPointsInput.value = "";
  rewardFormTitle.textContent = "Create a Reward";
  addRewardButton.textContent = "Add Reward";
  cancelRewardEditButton.classList.add("is-hidden");
}

function saveRewardFromForm() {
  const rewardName = rewardNameInput.value.trim();
  const requestedPoints = Number(rewardPointsInput.value);

  if (!rewardName) {
    rewardMessage.textContent = "Please enter a reward name.";
    rewardMessage.className = "reward-message error";
    return;
  }

  if (!Number.isInteger(requestedPoints) || requestedPoints <= 0) {
    rewardMessage.textContent = "Please enter a whole number of points greater than 0.";
    rewardMessage.className = "reward-message error";
    return;
  }

  if (editingRewardId) {
    customRewards = customRewards.map((reward) => reward.id === editingRewardId
      ? { ...reward, name: rewardName, cost: requestedPoints, updatedAt: new Date().toISOString() }
      : reward);
    rewardMessage.textContent = "Reward updated.";
  } else {
    customRewards.push({
      id: `reward-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: rewardName,
      cost: requestedPoints,
      createdAt: new Date().toISOString()
    });
    rewardMessage.textContent = "Reward added.";
  }

  saveCustomRewards();
  clearRewardForm();
  rewardMessage.className = "reward-message success";
  updateScoreDisplay();
}

function startRewardEdit(rewardId) {
  const reward = customRewards.find((item) => item.id === rewardId);

  if (!reward) {
    return;
  }

  editingRewardId = reward.id;
  rewardNameInput.value = reward.name;
  rewardPointsInput.value = reward.cost;
  rewardFormTitle.textContent = "Edit Reward";
  addRewardButton.textContent = "Save Reward";
  cancelRewardEditButton.classList.remove("is-hidden");
  rewardMessage.textContent = "Editing reward.";
  rewardMessage.className = "reward-message";
  rewardNameInput.focus();
}

function deleteCustomReward(rewardId) {
  const reward = customRewards.find((item) => item.id === rewardId);

  if (!reward) {
    return;
  }

  const confirmed = window.confirm(`Delete "${reward.name}" from your rewards?`);

  if (!confirmed) {
    rewardMessage.textContent = "Delete canceled.";
    rewardMessage.className = "reward-message";
    return;
  }

  customRewards = customRewards.filter((item) => item.id !== rewardId);

  if (editingRewardId === rewardId) {
    clearRewardForm();
  }

  saveCustomRewards();
  rewardMessage.textContent = "Reward deleted.";
  rewardMessage.className = "reward-message success";
  updateScoreDisplay();
}

function redeemCustomReward(rewardId) {
  const reward = customRewards.find((item) => item.id === rewardId);

  if (!reward) {
    return;
  }

  const cost = Number(reward.cost);
  const remainingPoints = getRemainingRewardPoints();

  if (cost > remainingPoints) {
    rewardMessage.textContent = "You need more points for this reward.";
    rewardMessage.className = "reward-message error";
    return;
  }

  const record = {
    date: localDateKey(new Date()),
    timestamp: new Date().toISOString(),
    rewardId,
    name: reward.name,
    points: cost,
    remainingAfter: remainingPoints - cost
  };

  redemptionRecords.push(record);
  saveRedemptionRecords();
  rewardMessage.textContent = "Reward redeemed!";
  rewardMessage.className = "reward-message success";
  updateScoreDisplay();
}

function updateProgressDashboard() {
  const now = new Date();
  const today = startOfDay(now);
  const weekStart = startOfWeek(now);
  const weekEnd = endOfWeek(now);
  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(now);
  const yearStart = startOfYear(now);
  const yearEnd = endOfYear(now);

  todayDate.textContent = formatLongDate(now);
  todayPoints.textContent = pointsInRange(today, today);
  weekPoints.textContent = pointsInRange(weekStart, weekEnd);
  monthPoints.textContent = pointsInRange(monthStart, monthEnd);
  yearPoints.textContent = pointsInRange(yearStart, yearEnd);

  weeklyRange.textContent = `${formatLongDate(weekStart)} - ${formatLongDate(weekEnd)}`;
  monthlyRange.textContent = `${monthStart.toLocaleDateString("en-US", { month: "long", year: "numeric" })}`;
  yearlyRange.textContent = `${yearStart.getFullYear()}`;

  renderRecordList(weeklyRecord, pointsByDate(weekStart, weekEnd), "No points this week yet");
  renderRecordList(monthlyRecord, pointsByDate(monthStart, monthEnd), "No points this month yet");
  renderRecordList(yearlyRecord, pointsByDate(yearStart, yearEnd), "No points this year yet");
}

function saveProgressSnapshot() {
  localStorage.setItem("liamProgressSnapshot", JSON.stringify({
    savedAt: new Date().toISOString(),
    levelStats,
    progressRecords,
    practicePointDates,
    redemptionRecords,
    customRewards,
    practiceLog: getPracticeLog()
  }));

  progressMessage.textContent = `Progress saved on ${formatLongDate(new Date())}.`;
}

function resetProgress() {
  const confirmed = window.confirm("Reset all saved progress? Scores, streaks, practice records, and point history will be cleared.");

  if (!confirmed) {
    progressMessage.textContent = "Reset canceled.";
    return;
  }

  levelStats = {};
  MODES.forEach((mode) => {
    levelStats[mode.id] = { score: 0, streak: 0 };
  });
  progressRecords = [];
  practicePointDates = [];
  redemptionRecords = [];
  customRewards = [];
  clearRewardForm();

  localStorage.removeItem("liamLevelStats");
  localStorage.removeItem("liamPracticeLog");
  localStorage.removeItem("liamProgressRecords");
  localStorage.removeItem("liamPracticePointDates");
  localStorage.removeItem("liamRewardRedemptions");
  localStorage.removeItem("liamCustomRewards");
  localStorage.removeItem("liamProgressSnapshot");
  localStorage.removeItem("liamLastPracticeRun");

  minutesInput.value = "";
  updatePracticeStatus();
  updateScoreDisplay();
  progressMessage.textContent = "Progress reset.";
}

function updateScoreDisplay() {
  const totalScore = getTotalScore();
  totalScoreValue.textContent = totalScore;
  rewardLevel.textContent = getRewardTitle();

  MODES.forEach((mode, index) => {
    document.getElementById(`${mode.id}Score`).textContent = levelStats[mode.id].score;
    document.getElementById(`${mode.id}Streak`).textContent = `Streak ${levelStats[mode.id].streak}`;
  });

  updateRewardTracker();
  updateProgressDashboard();
}

function awardRoundPoint() {
  levelStats[activeMode.id].score += 1;
  levelStats[activeMode.id].streak += 1;
  recordPointEarned();
  saveLevelStats();
  updateScoreDisplay();
}

function resetActiveStreak() {
  levelStats[activeMode.id].streak = 0;
  saveLevelStats();
  updateScoreDisplay();
}

function startRound(total = 10) {
  roundState = {
    total,
    answered: 0,
    missed: false,
    complete: false
  };
}

function markRoundMissed() {
  if (!roundState.complete) {
    roundState.missed = true;
  }
}

function roundStatusText() {
  const answered = Math.min(roundState.answered, roundState.total);
  const perfectText = roundState.missed ? "Perfect round lost: this round earns 0 points." : "Perfect so far.";
  return `Question ${answered + 1} of ${roundState.total}. ${perfectText}`;
}

function finishRound() {
  roundState.complete = true;

  if (!roundState.missed) {
    awardRoundPoint();
    gameFeedback.textContent = "Perfect 10! You earned 1 point.";
    gameFeedback.className = "feedback correct";
    melodyProgress.textContent = "Round complete: 10 correct in a row.";
    return;
  }

  resetActiveStreak();
  gameFeedback.textContent = "Round complete. Since there was a miss, this round earns 0 points.";
  gameFeedback.className = "feedback try-again";
  melodyProgress.textContent = "Round complete: try for a perfect 10 next time.";
}

function countCorrectQuestion() {
  if (roundState.complete) {
    return;
  }

  roundState.answered += 1;

  if (roundState.answered >= roundState.total) {
    finishRound();
  }
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
        x1: x - 27,
        x2: x + 27,
        y1: ledgerY,
        y2: ledgerY,
        class: "ledger-line"
      }));
    }
  }

  for (let ledgerY = 48; ledgerY <= y + 1; ledgerY += 18) {
    if (ledgerY < 66) {
      ledgerLines.appendChild(makeSvgElement("line", {
        x1: x - 27,
        x2: x + 27,
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

function equivalentNotesFor(target) {
  return NOTE_SET.filter((note) => note.pitch === target.pitch);
}

function isCorrectLocation(target, stringName, finger) {
  return equivalentNotesFor(target).some((note) => note.string === stringName && note.finger === finger);
}

function isCorrectString(target, stringName) {
  return equivalentNotesFor(target).some((note) => note.string === stringName);
}

function isCorrectFinger(target, finger) {
  return equivalentNotesFor(target).some((note) => note.finger === finger);
}

function difficultyLabel() {
  const difficulty = DIFFICULTIES.find((item) => item.value === selectedDifficulty);
  return `${difficulty.label}: ${difficulty.detail}`;
}

function selectLabel(mode) {
  if (mode.id === "practice") {
    return "Regular Practice";
  }

  if (mode.id === "custom") {
    return "Custom Practice";
  }

  return mode.title
    .replace("Suzuki ", "")
    .replace(" Practice", "");
}

function baseNotePool() {
  if (activeMode.notePool === "custom") {
    return NOTE_SET.filter((note) => customSettings.strings.includes(note.string));
  }

  const poolIds = NOTE_POOLS[activeMode.notePool || "all"];
  return NOTE_SET.filter((note) => poolIds.includes(note.id));
}

function activeNotePool() {
  return baseNotePool().filter((note) => note.finger <= selectedDifficulty);
}

function updateCurrentContext() {
  const pool = activeNotePool();
  const basePool = baseNotePool();
  currentModeLabel.textContent = activeMode.title;
  currentDifficultyLabel.textContent = difficultyLabel();
  currentPoolLabel.textContent = `${activeMode.poolLabel || "All Notes"} (${pool.length} of ${basePool.length} notes)`;

  if (activeMode.group === "book" && pool.length < 4) {
    poolWarning.textContent = "Try a higher difficulty level for this book practice.";
    return;
  }

  if (!pool.length) {
    poolWarning.textContent = "No notes match these settings. Try a higher difficulty level or choose more strings.";
    return;
  }

  poolWarning.textContent = "";
}

function chooseRandomNote(pool, avoidNote) {
  if (!pool.length) {
    return null;
  }

  const differentNameAndPitch = pool.filter((note) => !avoidNote || (note.name !== avoidNote.name && note.pitch !== avoidNote.pitch));
  const differentPitch = pool.filter((note) => !avoidNote || note.pitch !== avoidNote.pitch);
  const differentId = pool.filter((note) => !avoidNote || note.id !== avoidNote.id);
  const candidates = differentNameAndPitch.length ? differentNameAndPitch : differentPitch.length ? differentPitch : differentId.length ? differentId : pool;

  return candidates[Math.floor(Math.random() * candidates.length)];
}

function pickRandomNote(avoidNote = lastPromptNote) {
  const note = chooseRandomNote(activeNotePool(), avoidNote);
  if (!note) {
    return null;
  }

  lastPromptNote = note;
  return note;
}

function buildNoteSequence(length) {
  const pool = activeNotePool();
  const notes = [];
  let previousNote = lastPromptNote;

  for (let index = 0; index < length; index += 1) {
    const note = chooseRandomNote(pool, previousNote);
    if (!note) {
      break;
    }

    notes.push(note);
    previousNote = note;
  }

  lastPromptNote = previousNote;
  return notes;
}

function pickNewChallenge() {
  clearChoiceMarks();
  practiceSequence.textContent = "";
  melodyAnswer.textContent = "";
  gameFeedback.className = "feedback";
  updateCurrentContext();
  startRound(10);

  if (!activeNotePool().length) {
    ledgerLines.textContent = "";
    noteGroup.textContent = "";
    currentNote = null;
    currentMelody = [];
    practiceRun = createEmptyPracticeRun();
    melodyProgress.textContent = "";
    gameFeedback.textContent = "No notes match these settings yet.";
    return;
  }

  if (activeMode.promptType === "melody") {
    currentMelody = buildNoteSequence(10);
    melodyIndex = 0;
    currentNote = currentMelody[0];
    if (!currentNote) {
      gameFeedback.textContent = "No notes match these settings yet.";
      return;
    }

    drawMelody();
    melodyProgress.textContent = `Melody note 1 of ${currentMelody.length}. Perfect so far.`;
    gameFeedback.textContent = "Tap the first note location.";
    return;
  }

  if (activeMode.promptType === "practice") {
    practiceRun = {
      notes: buildNoteSequence(10),
      index: 0,
      startedAt: Date.now(),
      missedIndexes: new Set()
    };
    currentNote = practiceRun.notes[0];
    if (!currentNote) {
      gameFeedback.textContent = "No notes match these settings yet.";
      return;
    }

    currentMelody = [];
    melodyIndex = 0;
    drawPracticeRun();
    updatePracticeProgress();
    gameFeedback.textContent = "Tap note 1 of 10. Perfect so far.";
    return;
  }

  currentNote = pickRandomNote();
  if (!currentNote) {
    gameFeedback.textContent = "No notes match these settings yet.";
    return;
  }

  currentMelody = [];
  melodyIndex = 0;
  drawSingleNote(currentNote);
  melodyProgress.textContent = activeMode.promptType === "audio" ? "Question 1 of 10. Listen, then choose the location. Perfect so far." : roundStatusText();
  gameFeedback.textContent = activeMode.promptType === "audio" ? "Tap Replay Note to hear it again." : "Tap the answer.";

  if (activeMode.promptType === "audio") {
    playCurrentNote();
  }
}

function nextSingleQuestion() {
  if (roundState.complete) {
    return;
  }

  clearChoiceMarks();
  currentNote = pickRandomNote();
  drawSingleNote(currentNote);
  melodyProgress.textContent = activeMode.promptType === "audio" ? `Question ${roundState.answered + 1} of 10. Listen, then choose the location. ${roundState.missed ? "Perfect round lost: this round earns 0 points." : "Perfect so far."}` : roundStatusText();
  gameFeedback.textContent = activeMode.promptType === "audio" ? "Tap Replay Note to hear it again." : "Tap the answer.";

  if (activeMode.promptType === "audio") {
    playCurrentNote();
  }
}

function setActiveMode(modeId) {
  activeMode = MODES.find((mode) => mode.id === modeId);
  modeTitle.textContent = activeMode.title;
  modeInstructions.textContent = activeMode.instructions;
  playNoteButton.classList.toggle("is-hidden", activeMode.promptType !== "audio");
  playNoteButton.textContent = activeMode.promptType === "audio" ? "Replay Note" : "Play note";
  mappingButton.classList.toggle("is-hidden", activeMode.id !== "level1");
  staffSvg.classList.toggle("is-hidden", activeMode.promptType === "audio");
  listeningPrompt.classList.toggle("is-visible", activeMode.promptType === "audio");
  customPracticePanel.classList.toggle("is-visible", activeMode.id === "custom");
  trainingModeSelect.value = activeMode.group === "training" ? activeMode.id : "";
  practiceModeSelect.value = activeMode.group === "training" ? "" : activeMode.id;

  fingerboardPanel.style.display = activeMode.answerType === "string" || activeMode.answerType === "finger" ? "none" : "block";
  stringPanel.classList.toggle("is-visible", activeMode.answerType === "string");
  fingerPanel.classList.toggle("is-visible", activeMode.answerType === "finger");

  updateCurrentContext();
  pickNewChallenge();
}

function handleCorrect(button) {
  button.classList.add("correct-choice");
  gameFeedback.textContent = "Correct!";
  gameFeedback.className = "feedback correct";
}

function handleWrong(button) {
  markRoundMissed();
  button.classList.add("wrong-choice");
  gameFeedback.textContent = "Try again";
  gameFeedback.className = "feedback try-again";

  if (activeMode.promptType === "practice") {
    updatePracticeProgress();
    return;
  }

  if (activeMode.promptType === "melody") {
    melodyProgress.textContent = `Melody note ${melodyIndex + 1} of ${currentMelody.length}. Perfect round lost: this round earns 0 points.`;
    return;
  }

  melodyProgress.textContent = activeMode.promptType === "audio"
    ? `Question ${roundState.answered + 1} of 10. Listen, then choose the location. Perfect round lost: this round earns 0 points.`
    : roundStatusText();
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

  const perfectText = roundState.missed ? "Perfect round lost: this round earns 0 points." : "Perfect so far.";
  melodyProgress.textContent = `Practice note ${Math.min(practiceRun.index + 1, practiceRun.notes.length)} of ${practiceRun.notes.length}. ${perfectText}`;
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

  if (!roundState.complete) {
    finishRound();
  }

  melodyProgress.textContent = "Practice complete!";
  practiceSequence.textContent = practiceRun.notes.map((note) => note.name).join("  ");
  melodyAnswer.innerHTML = [
    `Accuracy: ${accuracy}%`,
    `Time: ${seconds} seconds`,
    `Notes missed: ${missedNotes.length ? missedNotes.join(" | ") : "None"}`
  ].join("<br>");
  gameFeedback.textContent = roundState.missed ? "Practice round complete. This round earns 0 points." : "Perfect 10! You earned 1 point.";
  gameFeedback.className = roundState.missed ? "feedback try-again" : "feedback correct";
  drawPracticeRun();
}

function handleLocationTap(button, stringName, finger) {
  if (activeMode.promptType === "practice") {
    handlePracticeTap(button, stringName, finger);
    return;
  }

  const target = activeMode.promptType === "melody" ? currentMelody[melodyIndex] : currentNote;
  const isCorrect = isCorrectLocation(target, stringName, finger);

  if (!isCorrect) {
    handleWrong(button);
    return;
  }

  handleCorrect(button);

  if (activeMode.promptType !== "melody") {
    countCorrectQuestion();

    if (!roundState.complete) {
      setTimeout(nextSingleQuestion, 850);
    }

    return;
  }

  countCorrectQuestion();
  melodyIndex += 1;

  if (roundState.complete || melodyIndex >= currentMelody.length) {
    melodyProgress.textContent = "Melody complete!";
    melodyAnswer.textContent = currentMelody.map(locationLabel).join(" | ");
    return;
  }

  currentNote = currentMelody[melodyIndex];
  melodyProgress.textContent = `Melody note ${melodyIndex + 1} of ${currentMelody.length}. ${roundState.missed ? "Perfect round lost: this round earns 0 points." : "Perfect so far."}`;
  drawMelody();
}

function handlePracticeTap(button, stringName, finger) {
  const target = practiceRun.notes[practiceRun.index];
  const isCorrect = isCorrectLocation(target, stringName, finger);

  if (!isCorrect) {
    practiceRun.missedIndexes.add(practiceRun.index);
    handleWrong(button);
    updatePracticeProgress();
    return;
  }

  handleCorrect(button);
  practiceRun.index += 1;
  countCorrectQuestion();

  if (roundState.complete || practiceRun.index >= practiceRun.notes.length) {
    finishPracticeRun();
    return;
  }

  currentNote = practiceRun.notes[practiceRun.index];
  updatePracticeProgress();
  drawPracticeRun();
  setTimeout(clearChoiceMarks, 250);
}

function handleStringTap(button, stringName) {
  if (isCorrectString(currentNote, stringName)) {
    handleCorrect(button);
    countCorrectQuestion();

    if (!roundState.complete) {
      setTimeout(nextSingleQuestion, 850);
    }

    return;
  }

  handleWrong(button);
}

function handleFingerTap(button, finger) {
  if (isCorrectFinger(currentNote, finger)) {
    handleCorrect(button);
    countCorrectQuestion();

    if (!roundState.complete) {
      setTimeout(nextSingleQuestion, 850);
    }

    return;
  }

  handleWrong(button);
}

function createModeSelectors() {
  const trainingPlaceholder = document.createElement("option");
  trainingPlaceholder.value = "";
  trainingPlaceholder.textContent = "Choose a training mode";
  trainingModeSelect.appendChild(trainingPlaceholder);

  const practicePlaceholder = document.createElement("option");
  practicePlaceholder.value = "";
  practicePlaceholder.textContent = "Choose a practice mode";
  practiceModeSelect.appendChild(practicePlaceholder);

  MODES.forEach((mode) => {
    const option = document.createElement("option");
    option.value = mode.id;
    option.textContent = selectLabel(mode);

    if (mode.group === "training") {
      trainingModeSelect.appendChild(option);
      return;
    }

    practiceModeSelect.appendChild(option);
  });
}

function createScoreCards() {
  MODES.forEach((mode, index) => {
    const card = document.createElement("div");
    card.className = "level-score-card";
    card.innerHTML = `
      <span>${mode.shortTitle}</span>
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

function playTone(frequency, startTime, duration, volume = 0.18) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.04);
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
    const duration = activeMode.promptType === "audio" ? 1.25 : 0.65;
    const volume = activeMode.promptType === "audio" ? 0.34 : 0.18;
    playTone(currentNote.frequency, audioContext.currentTime + 0.02, duration, volume);
  }
}

function guideEarTrainingAnswer() {
  if (activeMode.promptType !== "audio") {
    return;
  }

  playCurrentNote();
  gameFeedback.textContent = "Now tap the matching string and finger on the violin board.";
  gameFeedback.className = "feedback";
  fingerboardPanel.classList.add("answer-pulse");
  setTimeout(() => {
    fingerboardPanel.classList.remove("answer-pulse");
  }, 900);
}

practiceButton.addEventListener("click", saveTodayPractice);
newNoteButton.addEventListener("click", pickNewChallenge);
playNoteButton.addEventListener("click", playCurrentNote);
saveProgressButton.addEventListener("click", saveProgressSnapshot);
resetProgressButton.addEventListener("click", resetProgress);
addRewardButton.addEventListener("click", saveRewardFromForm);
cancelRewardEditButton.addEventListener("click", () => {
  clearRewardForm();
  rewardMessage.textContent = "Edit canceled.";
  rewardMessage.className = "reward-message";
});
mappingButton.addEventListener("click", () => {
  mappingModal.classList.add("is-visible");
});
closeMappingButton.addEventListener("click", () => {
  mappingModal.classList.remove("is-visible");
});
mappingModal.addEventListener("click", (event) => {
  if (event.target === mappingModal) {
    mappingModal.classList.remove("is-visible");
  }
});
parentViewButton.addEventListener("click", () => {
  parentModal.classList.add("is-visible");
});
closeParentViewButton.addEventListener("click", () => {
  parentModal.classList.remove("is-visible");
});
parentModal.addEventListener("click", (event) => {
  if (event.target === parentModal) {
    parentModal.classList.remove("is-visible");
  }
});
customStringInputs.forEach((input) => {
  input.addEventListener("change", () => {
    updateCustomSettingsFromControls();

    if (activeMode.id === "custom") {
      pickNewChallenge();
    }
  });
});
difficultySelect.addEventListener("change", () => {
  selectedDifficulty = Number(difficultySelect.value);
  saveSelectedDifficulty();
  pickNewChallenge();
});
trainingModeSelect.addEventListener("change", () => {
  if (trainingModeSelect.value) {
    setActiveMode(trainingModeSelect.value);
  }
});
practiceModeSelect.addEventListener("change", () => {
  if (practiceModeSelect.value) {
    setActiveMode(practiceModeSelect.value);
  }
});
earViolinCue.addEventListener("click", guideEarTrainingAnswer);

drawStaffLines();
createModeSelectors();
createScoreCards();
createFingerboard();
createChoicePanels();
applyCustomSettingsToControls();
applyDifficultyToControls();
updatePracticeStatus();
updateProgressDashboard();
updateScoreDisplay();
setActiveMode("level1");
