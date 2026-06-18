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
    instructions: "Play 20 staff notes in order, then see accuracy, time, and missed notes.",
    answerType: "practice",
    promptType: "practice"
  },
  {
    id: "book1",
    title: "Suzuki Book 1 Practice",
    shortTitle: "Book 1",
    group: "book",
    poolLabel: "Book 1 Practice Pool",
    instructions: "Practice 20 notes from the current Book 1 pool, then see accuracy, time, and misses.",
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
    instructions: "Practice 20 notes from the full beginner Book 1 and 2 pool.",
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
    instructions: "Practice 20 notes from the current Book 3 prototype pool.",
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
    instructions: "Choose strings, use the selected difficulty, then play a 20-question custom run.",
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
const QUESTIONS_PER_ROUND = 20;
const STAFF_TOP_Y = 62;
const STAFF_BOTTOM_Y = 142;
const STAFF_LINE_SPACING = 20;
const STAFF_STEP = STAFF_LINE_SPACING / 2;
const LEDGER_EXTENSION = 27;
const NOTE_HEAD_RX = 20.2;
const NOTE_HEAD_RY = 8.1;
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
const SINFONIETTA_SCALES = [
  "C Major",
  "G Major",
  "D Major",
  "A Major",
  "F Major",
  "B♭ Major",
  "G Melodic Minor",
  "D Melodic Minor"
];
const SINFONIETTA_ITEMS = [
  { id: "openStrings", titleKey: "openStringPractice", descriptionKey: "openStringDescription" },
  { id: "scale1", titleKey: "scalePractice1", type: "scale" },
  { id: "scale2", titleKey: "scalePractice2", type: "scale" },
  { id: "sightReadingMusic", titleKey: "sightReadingMusic", goalKey: "sightReadingMusicGoal" },
  { id: "sightReadingSongs", titleKey: "sightReadingSongs", goalKey: "sightReadingSongsGoal" },
  { id: "repertoire", titleKey: "repertoire", goalKey: "repertoireGoal", textKey: "repertoireText", textPlaceholderKey: "repertoirePlaceholder" },
  { id: "favoriteSongs", titleKey: "favoriteSongs", goalKey: "favoriteSongsGoal", textKey: "favoriteSongsText", textPlaceholderKey: "favoriteSongsPlaceholder" }
];

const I18N = {
  en: {
    appTitle: "Violin Adventure",
    dailyPracticeQuest: "Daily practice quest",
    rewardStatus: "Reward Status",
    parentView: "Parent View",
    totalPoints: "Total Points",
    pointRules: "⭐ You earn 1 point when you complete 20 questions perfectly on the first try.\n\nIf you miss a question, you can try once more for learning, but that round will not earn a point.\n\n⭐ Complete all Daily Sinfonietta Practice tasks to earn 2 points each day.\n\n⭐ Every extra 15 minutes of violin practice earns 1 bonus point.",
    readyPractice: "Ready for today's practice? 🎻",
    sinfoniettaEyebrow: "Daily Orchestra Habit",
    sinfoniettaTitle: "Sinfonietta Practice",
    sinfoniettaIntro: "Build tone, scales, sight reading, repertoire, and fun playing every day.",
    pickScales: "🎲 Pick Today's Scales",
    completed: "Completed",
    dailyPracticeProgress: "Daily Practice Progress: {count} / {total} completed",
    sinfoniettaComplete: "🎉 Great Job!\n🎻 Daily Sinfonietta Practice Complete!\n⭐ +2 Bonus Practice Points",
    sinfoniettaCompleteSaved: "🎉 Great Job!\n🎻 Daily Sinfonietta Practice Complete!\n⭐ Bonus Practice Points already earned today",
    extraPracticeTitle: "⭐ Extra Practice Time",
    extraPracticeHelp: "After Daily Sinfonietta Practice is complete, every extra 15 minutes earns 1 bonus point.",
    extraPracticeMinutes: "Extra Practice Minutes",
    addExtraPractice: "+15 minutes",
    extraPracticeBonus: "Bonus Points Earned: {points}",
    extraPracticeLocked: "Complete Daily Sinfonietta Practice first to unlock extra practice bonus points.",
    openStringPractice: "Open String Practice",
    openStringDescription: "Long bows • Beautiful tone • Straight bow • G, D, A, E strings",
    scalePractice1: "Scale Practice #1",
    scalePractice2: "Scale Practice #2",
    sightReadingMusic: "Sight Reading - I Can Read Music",
    sightReadingMusicGoal: "Read 1 page from I Can Read Music",
    sightReadingSongs: "Sight Reading - Popular Songs",
    sightReadingSongsGoal: "Play 1 song from the Popular Songs book",
    repertoire: "Repertoire",
    repertoireGoal: "Practice Suzuki piece and/or Orchestra music",
    repertoireText: "Today I practiced:",
    repertoirePlaceholder: "Suzuki piece, orchestra music...",
    favoriteSongs: "My Favorite Songs",
    favoriteSongsGoal: "Play any song or songs you enjoy",
    favoriteSongsText: "Today I played:",
    favoriteSongsPlaceholder: "Favorite song names...",
    today: "Today",
    thisWeek: "This Week",
    thisMonth: "This Month",
    thisYear: "This Year",
    training: "🎯 Training",
    trainingMode: "Training Mode",
    practiceMode: "Practice Mode",
    difficultyLevel: "Difficulty Level",
    currentMode: "Current Mode",
    difficulty: "Difficulty",
    notePool: "Note Pool",
    customPractice: "Custom Practice",
    customPracticeHelp: "Choose strings for the next 20-question run. The global difficulty level still applies.",
    strings: "Strings",
    stringHeading: "String",
    open: "Open",
    first: "1st",
    second: "2nd",
    third: "3rd",
    fourth: "4th",
    listenCarefully: "Listen carefully",
    thenTapLocation: "Then tap the violin location.",
    tapViolinBoard: "Tap the violin board",
    replayNote: "Replay Note",
    playNote: "Play note",
    newChallenge: "New challenge",
    mapButton: "How Notes Map to the Violin",
    tapAnswer: "Tap the answer.",
    practice: "Practice",
    practiceRecordTitle: "🎻 Daily Practice",
    saveProgress: "Save Progress",
    resetProgress: "Reset Progress",
    dailyPracticeCheckIn: "Daily Extra Practice Check-In",
    minutesPracticed: "Minutes practiced",
    practicedToday: "I practiced today",
    weeklyRecord: "Weekly Record",
    monthlyRecord: "Monthly Record",
    yearlyRecord: "Yearly Record",
    mappingTitle: "How Notes Map To The Violin",
    backToGame: "Back to Game",
    parentViewEyebrow: "Parent View",
    parentViewTitle: "Detailed Practice Stats",
    parentNote: "Mode-by-mode scores and streaks are kept here so the main screen can stay simple.",
    backupToolsTitle: "Progress Backup",
    backupToolsHelp: "Export a backup before updating or moving to a new device. Paste backup text here to restore saved progress.",
    exportProgress: "Export Progress",
    copyBackupText: "Copy Backup Text",
    importProgress: "Import Progress",
    progressBackupLabel: "Backup Text",
    progressBackupPlaceholder: "Exported backup text appears here.",
    backupReady: "Backup ready. Keep this text somewhere safe before updating.",
    backupCopied: "Backup text copied.",
    backupCopyFailed: "Backup text is ready. Select it and copy it manually.",
    backupMissing: "Paste backup text before importing.",
    backupInvalid: "That backup text could not be read.",
    backupImportConfirm: "Importing backup text will replace progress saved on this device. Continue?",
    backupImported: "Progress restored. Reloading now.",
    backupImportCanceled: "Import canceled.",
    adjustPointsTitle: "Restore Points",
    adjustPointsHelp: "If points were lost during an update, add them back here.",
    adjustPointsLabel: "Points to Add",
    addRestorePoints: "Add Restore Points",
    adjustPointsInvalid: "Enter a whole number greater than 0.",
    adjustPointsSuccess: "{points} point{plural} restored.",
    rewards: "🏆 Rewards",
    rewardBank: "🏆 Rewards",
    earned: "Earned",
    redeemed: "Redeemed",
    available: "Available",
    rewardGoal: "Reward Goal",
    createReward: "Create a Reward",
    editReward: "Edit Reward",
    rewardFormHelp: "Choose a family reward and decide how many points it costs.",
    rewardName: "Reward Name",
    rewardNamePlaceholder: "New LEGO set",
    rewardCost: "Reward Cost (points)",
    addReward: "Add Reward",
    cancelEdit: "Cancel Edit",
    saveReward: "Save Reward",
    yourRewards: "Your Rewards",
    suggestedRewardIdeas: "Suggested Reward Ideas",
    suggestionNote: "These are examples only. Families choose the reward names and point costs.",
    redemptionHistory: "Redemption History",
    noRewards: "No family rewards yet",
    addRewardWorkToward: "Add a reward to work toward.",
    rewardExample: "Try \"Mini golf with Dad\" for 15 points or \"New LEGO set\" for 25 points.",
    readyToRedeem: "Ready to redeem",
    redeem: "Redeem",
    edit: "Edit",
    delete: "Delete",
    noRewardsRedeemed: "No rewards redeemed yet",
    ptsAvailable: "{points} pts available",
    ptsUsed: "{points} pts used",
    ptsLeft: "{points} left",
    pointsAvailable: "{points} points available.",
    chooseRewardToRedeem: "{points} points available. Choose a reward below to redeem it.",
    pointsNeededForReward: "{points} more point{plural} for {reward}",
    pointsSavedForReward: "{current} of {cost} points saved for this reward.",
    addFamilyReward: "Add a family reward to begin.",
    familiesChooseRewards: "Families choose the rewards and point costs.",
    morePointsNeeded: "{points} more point{plural} needed",
    rewardPointCost: "{points} point{plural}",
    youCanGet: "You can get: {reward}",
    rewardAdded: "Reward added.",
    rewardUpdated: "Reward updated.",
    rewardDeleted: "Reward deleted.",
    rewardRedeemed: "Reward redeemed!",
    editingReward: "Editing reward.",
    editCanceled: "Edit canceled.",
    deleteCanceled: "Delete canceled.",
    enterRewardName: "Please enter a reward name.",
    enterRewardPoints: "Please enter a whole number of points greater than 0.",
    needMorePoints: "You need more points for this reward.",
    deleteRewardConfirm: "Delete \"{reward}\" from your rewards?",
    greatPractice: "Great job! You practiced {minutes} minutes today.",
    enterPracticeMinutes: "Enter your practice minutes first.",
    practiceMinutesSaved: "Practice minutes saved.",
    progressSaved: "Progress saved on {date}.",
    resetConfirm: "Reset all saved progress? Scores, streaks, practice records, and point history will be cleared.",
    resetCanceled: "Reset canceled.",
    progressReset: "Progress reset.",
    noPointsWeek: "No points this week yet",
    noPointsMonth: "No points this month yet",
    noPointsYear: "No points this year yet",
    modeLabels: {
      level1: "Staff to Violin Location",
      level2: "Staff to String Only",
      level3: "Staff to Finger Only",
      level4: "Ear Training",
      level5: "Melody Challenge",
      practice: "Practice Mode",
      book1: "Suzuki Book 1 Practice",
      book2: "Suzuki Book 2 Practice",
      book3: "Suzuki Book 3 Practice",
      custom: "Custom Practice Mode"
    },
    modeSelectLabels: {
      practice: "Regular Practice",
      book1: "Book 1",
      book2: "Book 2",
      book3: "Book 3",
      custom: "Custom Practice"
    },
    modeInstructions: {
      level1: "Read the staff note, then tap the exact string and finger.",
      level2: "Read the staff note, then tap only the correct string.",
      level3: "Read the staff note, then tap open, 1st, 2nd, 3rd, or 4th finger.",
      level4: "Listen carefully, then tap the violin location.",
      level5: "Read the melody, then tap each string and finger in order.",
      practice: "Play 20 staff notes in order, then see accuracy, time, and missed notes.",
      book1: "Practice 20 notes from the current Book 1 pool, then see accuracy, time, and misses.",
      book2: "Practice 20 notes from the full beginner Book 1 and 2 pool.",
      book3: "Practice 20 notes from the current Book 3 prototype pool.",
      custom: "Choose strings, use the selected difficulty, then play a 20-question custom run."
    },
    poolLabels: {
      all: "All Notes",
      book1: "Book 1 Practice Pool",
      book2: "Book 2 Practice Pool",
      book3: "Book 3 Practice Pool",
      custom: "Custom Practice Pool"
    },
    difficulties: [
      "Difficulty 1: Open Strings Only",
      "Difficulty 2: Open + 1st Finger",
      "Difficulty 3: Open + 1st + 2nd Finger",
      "Difficulty 4: Open through 3rd Finger",
      "Difficulty 5: Open through 4th Finger"
    ],
    difficultyShort: ["Difficulty 1", "Difficulty 2", "Difficulty 3", "Difficulty 4", "Difficulty 5"],
    fingers: ["open string", "first finger", "second finger", "third finger", "fourth finger"],
    fingerButtons: ["Open", "1", "2", "3", "4"],
    stringName: "{string} string",
    chooseTrainingMode: "Choose a training mode",
    choosePracticeMode: "Choose a practice mode",
    noMatchingNotes: "No notes match these settings yet.",
    higherDifficultyBook: "Try a higher difficulty level for this book practice.",
    noNotesSettings: "No notes match these settings. Try a higher difficulty level or choose more strings.",
    perfectSoFar: "Perfect first tries so far.",
    learningRound: "Learning Mode: finish strong.",
    learningTryAgain: "Learning Mode: try one more time.",
    learningShort: "Learning Mode.",
    questionStatus: "Question {current} / {total}. {status}",
    audioQuestionStatus: "Question {current} / {total}. Listen, then choose the location. {status}",
    melodyStatus: "Melody note {current} / {total}. {status}",
    melodyQuestionStatus: "Melody {current} / {total}. {status}",
    practiceStatus: "Practice note {current} / {total}. {status}",
    correct: "Correct!",
    secondTryCorrect: "Good job! You found it.",
    goodTryAgain: "Good try! The correct answer is {answer}. Try it once more for learning.",
    correctAnswerIs: "Good try! The correct answer is {answer}",
    perfectRound: "🎉 Perfect!\n{total} / {total} correct on the first try.\n⭐ You earned 1 point!",
    effortRound: "Good effort! You got {correct} / {total}. Try again for a perfect round to earn 1 point.",
    learningRoundComplete: "👏 Nice work!\nYou completed the round and learned from your mistakes.\n\n⭐ Points are earned only for 20 correct answers on the first try.\n\nKeep practicing and try for a perfect round next time!",
    roundCompletePerfect: "🎉 Perfect! {total} / {total}",
    roundCompleteTry: "Try again for a perfect round to earn 1 point.",
    melodyComplete: "Melody complete!",
    practiceComplete: "Practice complete!",
    practiceRoundLearning: "Practice round complete. A point needs 20 first-try answers.",
    tapFirstNote: "Tap the first note location.",
    tapNotePerfect: "Tap note 1 of 20. Perfect first tries so far.",
    tapReplay: "Tap Replay Note to hear it again.",
    nowTapBoard: "Now tap the matching string and finger on the violin board.",
    locationLabel: "{note} = {string}, {finger}",
    stringAnswer: "{note} is on the {string}.",
    fingerAnswer: "{note} uses {finger}.",
    accuracy: "Accuracy: {value}%",
    timeSeconds: "Time: {seconds} seconds",
    notesMissed: "Notes missed: {notes}",
    none: "None",
    streak: "Streak {value}",
    suggestedRewards: [
      "Dessert after dinner",
      "Family movie night",
      "Pokemon budget",
      "LEGO budget",
      "Stay up later",
      "Parent-child outing",
      "New violin accessory",
      "Family adventure"
    ]
  },
  zh: {
    appTitle: "小提琴冒险",
    dailyPracticeQuest: "每日练琴任务",
    rewardStatus: "奖励状态",
    parentView: "家长视图",
    totalPoints: "总积分",
    pointRules: "⭐ 连续 20 题第一次就答对，可以得 1 分。\n\n如果答错一题，可以再试一次来学习，但这一轮不加分。\n\n⭐ 完成所有每日 Sinfonietta 练习任务，每天可获得 2 分。\n\n⭐ 每额外练琴 15 分钟，可获得 1 个奖励积分。",
    readyPractice: "准备好今天练琴了吗？🎻",
    sinfoniettaEyebrow: "每日乐团习惯",
    sinfoniettaTitle: "Sinfonietta 练习",
    sinfoniettaIntro: "每天练音色、音阶、视奏、曲目，还有喜欢的歌。",
    pickScales: "🎲 随机选择今天的音阶",
    completed: "完成",
    dailyPracticeProgress: "每日练习进度：{count} / {total} 完成",
    sinfoniettaComplete: "🎉 做得真棒！\n🎻 今日 Sinfonietta 练习完成！\n⭐ +2 个奖励练习积分",
    sinfoniettaCompleteSaved: "🎉 做得真棒！\n🎻 今日 Sinfonietta 练习完成！\n⭐ 今天已经获得奖励练习积分",
    extraPracticeTitle: "⭐ 额外练琴时间",
    extraPracticeHelp: "完成每日 Sinfonietta 练习后，每额外练琴 15 分钟可获得 1 个奖励积分。",
    extraPracticeMinutes: "额外练琴分钟数",
    addExtraPractice: "+15 分钟",
    extraPracticeBonus: "已获得奖励积分：{points}",
    extraPracticeLocked: "先完成每日 Sinfonietta 练习，就可以获得额外练琴奖励积分。",
    openStringPractice: "空弦练习",
    openStringDescription: "长弓 • 好听的音色 • 直直的弓 • G、D、A、E 弦",
    scalePractice1: "音阶练习 #1",
    scalePractice2: "音阶练习 #2",
    sightReadingMusic: "视奏 - I Can Read Music",
    sightReadingMusicGoal: "读 I Can Read Music 里的 1 页",
    sightReadingSongs: "视奏 - Popular Songs",
    sightReadingSongsGoal: "拉 Popular Songs 书里的 1 首歌",
    repertoire: "曲目练习",
    repertoireGoal: "练 Suzuki 曲子和/或乐团音乐",
    repertoireText: "今天我练了：",
    repertoirePlaceholder: "Suzuki 曲子、乐团音乐...",
    favoriteSongs: "我喜欢的歌",
    favoriteSongsGoal: "拉你喜欢的任何歌曲",
    favoriteSongsText: "今天我拉了：",
    favoriteSongsPlaceholder: "喜欢的歌名...",
    today: "今天",
    thisWeek: "本周",
    thisMonth: "本月",
    thisYear: "今年",
    training: "🎯 训练",
    trainingMode: "训练模式",
    practiceMode: "练习模式",
    difficultyLevel: "难度等级",
    currentMode: "当前模式",
    difficulty: "难度",
    notePool: "音符范围",
    customPractice: "自定义练习",
    customPracticeHelp: "选择这次 20 题练习要包含的弦。当前难度仍然会生效。",
    strings: "弦",
    stringHeading: "弦",
    open: "空弦",
    first: "1指",
    second: "2指",
    third: "3指",
    fourth: "4指",
    listenCarefully: "仔细听。",
    thenTapLocation: "然后点小提琴上的位置。",
    tapViolinBoard: "点小提琴指板",
    replayNote: "再听一次",
    playNote: "播放音",
    newChallenge: "新题目",
    mapButton: "音符怎样对应小提琴",
    tapAnswer: "点一个答案。",
    practice: "练习",
    practiceRecordTitle: "🎻 每日练习",
    saveProgress: "保存进度",
    resetProgress: "重置进度",
    dailyPracticeCheckIn: "每日额外练琴打卡",
    minutesPracticed: "练琴分钟数",
    practicedToday: "我今天练琴了",
    weeklyRecord: "本周记录",
    monthlyRecord: "本月记录",
    yearlyRecord: "今年记录",
    mappingTitle: "音符怎样对应小提琴",
    backToGame: "回到游戏",
    parentViewEyebrow: "家长视图",
    parentViewTitle: "详细练习数据",
    parentNote: "每个模式的分数和连续记录放在这里，让主屏幕保持简单。",
    backupToolsTitle: "进度备份",
    backupToolsHelp: "更新或换设备前先导出备份。把备份文字粘贴到这里，就可以恢复进度。",
    exportProgress: "导出进度",
    copyBackupText: "复制备份文字",
    importProgress: "导入进度",
    progressBackupLabel: "备份文字",
    progressBackupPlaceholder: "导出的备份文字会显示在这里。",
    backupReady: "备份已准备好。更新前请把这段文字保存好。",
    backupCopied: "备份文字已复制。",
    backupCopyFailed: "备份文字已准备好。请手动选中并复制。",
    backupMissing: "请先粘贴备份文字再导入。",
    backupInvalid: "无法读取这段备份文字。",
    backupImportConfirm: "导入备份会替换这台设备上的进度。继续吗？",
    backupImported: "进度已恢复，正在重新加载。",
    backupImportCanceled: "已取消导入。",
    adjustPointsTitle: "恢复积分",
    adjustPointsHelp: "如果更新后积分丢失，可以在这里加回来。",
    adjustPointsLabel: "要增加的积分",
    addRestorePoints: "增加恢复积分",
    adjustPointsInvalid: "请输入大于 0 的整数。",
    adjustPointsSuccess: "已恢复 {points} 分。",
    rewards: "🏆 奖励",
    rewardBank: "🏆 奖励",
    earned: "已获得",
    redeemed: "已兑换",
    available: "可用",
    rewardGoal: "奖励目标",
    createReward: "创建奖励",
    editReward: "编辑奖励",
    rewardFormHelp: "全家一起决定奖励是什么，以及需要多少积分。",
    rewardName: "奖励名称",
    rewardNamePlaceholder: "新的 LEGO 套装",
    rewardCost: "奖励积分",
    addReward: "添加奖励",
    cancelEdit: "取消编辑",
    saveReward: "保存奖励",
    yourRewards: "你的奖励",
    suggestedRewardIdeas: "奖励建议",
    suggestionNote: "这些只是例子。奖励名称和积分由家里自己决定。",
    redemptionHistory: "兑换记录",
    noRewards: "还没有家庭奖励",
    addRewardWorkToward: "添加一个可以努力获得的奖励。",
    rewardExample: "比如“和爸爸打迷你高尔夫”15 分，或“新的 LEGO 套装”25 分。",
    readyToRedeem: "可以兑换",
    redeem: "兑换",
    edit: "编辑",
    delete: "删除",
    noRewardsRedeemed: "还没有兑换奖励",
    ptsAvailable: "可用 {points} 分",
    ptsUsed: "用了 {points} 分",
    ptsLeft: "还剩 {points} 分",
    pointsAvailable: "可用 {points} 分。",
    chooseRewardToRedeem: "可用 {points} 分。可以在下面选择奖励来兑换。",
    pointsNeededForReward: "还差 {points} 分可以获得 {reward}",
    pointsSavedForReward: "这个奖励已存 {current}/{cost} 分。",
    addFamilyReward: "先添加一个家庭奖励吧。",
    familiesChooseRewards: "奖励和积分由家里自己决定。",
    morePointsNeeded: "还差 {points} 分",
    rewardPointCost: "{points} 分",
    youCanGet: "可以兑换：{reward}",
    rewardAdded: "奖励已添加。",
    rewardUpdated: "奖励已更新。",
    rewardDeleted: "奖励已删除。",
    rewardRedeemed: "奖励已兑换！",
    editingReward: "正在编辑奖励。",
    editCanceled: "已取消编辑。",
    deleteCanceled: "已取消删除。",
    enterRewardName: "请输入奖励名称。",
    enterRewardPoints: "请输入大于 0 的整数积分。",
    needMorePoints: "这个奖励需要更多积分。",
    deleteRewardConfirm: "要删除“{reward}”这个奖励吗？",
    greatPractice: "做得真棒！今天已经练了 {minutes} 分钟。",
    enterPracticeMinutes: "请先输入练琴分钟数。",
    practiceMinutesSaved: "练琴分钟数已保存。",
    progressSaved: "进度已保存：{date}。",
    resetConfirm: "要重置所有进度吗？分数、连续记录、练琴记录和积分历史都会清除。",
    resetCanceled: "已取消重置。",
    progressReset: "进度已重置。",
    noPointsWeek: "本周还没有积分",
    noPointsMonth: "本月还没有积分",
    noPointsYear: "今年还没有积分",
    modeLabels: {
      level1: "看五线谱，找小提琴位置",
      level2: "看五线谱，找弦",
      level3: "看五线谱，找手指",
      level4: "听音练习",
      level5: "旋律挑战",
      practice: "普通练习",
      book1: "铃木第一册练习",
      book2: "铃木第二册练习",
      book3: "铃木第三册练习",
      custom: "自定义练习"
    },
    modeSelectLabels: {
      practice: "普通练习",
      book1: "第一册",
      book2: "第二册",
      book3: "第三册",
      custom: "自定义练习"
    },
    modeInstructions: {
      level1: "看五线谱上的音，然后点正确的弦和手指位置。",
      level2: "看五线谱上的音，然后只找正确的弦。",
      level3: "看五线谱上的音，然后点空弦、1指、2指、3指或4指。",
      level4: "仔细听，然后点小提琴上的位置。",
      level5: "看旋律，然后按顺序点每个弦和手指位置。",
      practice: "按顺序完成 20 个五线谱音符，然后查看正确率、时间和错过的音。",
      book1: "练习当前第一册音符范围里的 20 个音。",
      book2: "练习第一册和第二册的初级音符范围。",
      book3: "练习当前第三册原型音符范围。",
      custom: "选择弦和难度，然后完成 20 题自定义练习。"
    },
    poolLabels: {
      all: "全部音符",
      book1: "第一册音符范围",
      book2: "第二册音符范围",
      book3: "第三册音符范围",
      custom: "自定义音符范围"
    },
    difficulties: [
      "难度 1：只用空弦",
      "难度 2：空弦 + 1指",
      "难度 3：空弦 + 1指 + 2指",
      "难度 4：空弦到 3指",
      "难度 5：空弦到 4指"
    ],
    difficultyShort: ["难度 1", "难度 2", "难度 3", "难度 4", "难度 5"],
    fingers: ["空弦", "1指", "2指", "3指", "4指"],
    fingerButtons: ["空弦", "1", "2", "3", "4"],
    stringName: "{string}弦",
    chooseTrainingMode: "选择训练模式",
    choosePracticeMode: "选择练习模式",
    noMatchingNotes: "这些设置下还没有可用音符。",
    higherDifficultyBook: "这个册别可以试试更高难度。",
    noNotesSettings: "这些设置下没有音符。可以提高难度或选择更多弦。",
    perfectSoFar: "目前都是第一次答对。",
    learningRound: "学习模式：继续加油。",
    learningTryAgain: "学习模式：再试一次吧。",
    learningShort: "学习模式。",
    questionStatus: "第 {current}/{total} 题。{status}",
    audioQuestionStatus: "第 {current}/{total} 题。仔细听，然后找位置。{status}",
    melodyStatus: "旋律第 {current}/{total} 个音。{status}",
    melodyQuestionStatus: "第 {current}/{total} 条旋律。{status}",
    practiceStatus: "练习第 {current}/{total} 个音。{status}",
    correct: "答对了！",
    secondTryCorrect: "做得真棒！你找到了。",
    goodTryAgain: "试得很好！正确答案是 {answer}。再试一次来学习吧！",
    correctAnswerIs: "试得很好！正确答案是 {answer}",
    perfectRound: "🎉 完美！\n{total} / {total} 题都第一次答对。\n⭐ 你获得 1 分！",
    effortRound: "很努力！你答对了 {correct} / {total}。再试一次，完美完成一轮就能得 1 分。",
    learningRoundComplete: "👏 做得很好！\n你完成了这一轮，也从错误中学习了。\n\n⭐ 只有 20 题都第一次答对，才可以得分。\n\n继续练习，下次挑战完美一轮！",
    roundCompletePerfect: "🎉 完美！{total} / {total}",
    roundCompleteTry: "再试一次，完美完成一轮就能得 1 分。",
    melodyComplete: "旋律完成！",
    practiceComplete: "练习完成！",
    practiceRoundLearning: "练习完成。要得分需要 20 题都第一次答对。",
    tapFirstNote: "点第一个音的位置。",
    tapNotePerfect: "点第 1/20 个音。目前都是第一次答对。",
    tapReplay: "点“再听一次”可以再听。",
    nowTapBoard: "现在点小提琴指板上对应的弦和手指。",
    locationLabel: "{note} = {string}，{finger}",
    stringAnswer: "{note} 在 {string} 上。",
    fingerAnswer: "{note} 用 {finger}。",
    accuracy: "正确率：{value}%",
    timeSeconds: "用时：{seconds} 秒",
    notesMissed: "错过的音：{notes}",
    none: "没有",
    streak: "连续 {value}",
    suggestedRewards: [
      "晚饭后选甜点",
      "家庭电影夜",
      "Pokemon 预算",
      "LEGO 预算",
      "周末晚睡一会儿",
      "亲子出游",
      "新的小提琴配件",
      "家庭冒险活动"
    ]
  }
};

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
const exportProgressButton = document.getElementById("exportProgressButton");
const copyBackupButton = document.getElementById("copyBackupButton");
const importProgressButton = document.getElementById("importProgressButton");
const progressBackupText = document.getElementById("progressBackupText");
const backupMessage = document.getElementById("backupMessage");
const adjustPointsInput = document.getElementById("adjustPointsInput");
const addRestorePointsButton = document.getElementById("addRestorePointsButton");
const adjustPointsMessage = document.getElementById("adjustPointsMessage");
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
const englishButton = document.getElementById("englishButton");
const chineseButton = document.getElementById("chineseButton");
const sinfoniettaSection = document.getElementById("sinfoniettaSection");
const pickScalesButton = document.getElementById("pickScalesButton");
const sinfoniettaProgressText = document.getElementById("sinfoniettaProgressText");
const sinfoniettaProgressFill = document.getElementById("sinfoniettaProgressFill");
const sinfoniettaChecklist = document.getElementById("sinfoniettaChecklist");
const sinfoniettaMessage = document.getElementById("sinfoniettaMessage");
const extraPracticeMinutesInput = minutesInput;
const addExtraPracticeButton = document.getElementById("addExtraPracticeButton");
const extraPracticeBonusText = document.getElementById("extraPracticeBonusText");

let currentLanguage = loadSelectedLanguage();
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
let practiceTotalMinutes = loadPracticeTotalMinutes();
let practicePointsAwarded = loadPracticePointsAwarded();
let redemptionRecords = loadRedemptionRecords();
let customRewards = loadCustomRewards();
let sinfoniettaHistory = loadSinfoniettaHistory();
let sinfoniettaState = loadSinfoniettaState();
let editingRewardId = null;
let lastPromptNote = null;
let roundState = createRoundState();

function loadSelectedLanguage() {
  const saved = localStorage.getItem("violinAdventureLanguage");
  return saved === "zh" ? "zh" : "en";
}

function saveSelectedLanguage() {
  localStorage.setItem("violinAdventureLanguage", currentLanguage);
}

function t(key, values = {}) {
  const parts = key.split(".");
  let text = I18N[currentLanguage];

  parts.forEach((part) => {
    text = text?.[part];
  });

  if (typeof text !== "string") {
    text = key;
  }

  Object.entries(values).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, value);
  });

  return text;
}

function plural(value) {
  return currentLanguage === "en" && Number(value) !== 1 ? "s" : "";
}

function stringText(stringName) {
  return t("stringName", { string: stringName });
}

function stringButtonText(stringName) {
  return stringName;
}

function fingerText(fingerValue) {
  return I18N[currentLanguage].fingers[fingerValue] || "";
}

function fingerButtonText(fingerValue) {
  return I18N[currentLanguage].fingerButtons[fingerValue] || String(fingerValue);
}

function modeTitleText(mode) {
  return I18N[currentLanguage].modeLabels[mode.id] || mode.title;
}

function modeInstructionText(mode) {
  return I18N[currentLanguage].modeInstructions[mode.id] || mode.instructions;
}

function modePoolLabel(mode) {
  return I18N[currentLanguage].poolLabels[mode.notePool || "all"] || mode.poolLabel || I18N[currentLanguage].poolLabels.all;
}

function formatPoints(value) {
  return currentLanguage === "zh" ? `${value} 分` : `${value} pts`;
}

function setText(selector, text) {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = text;
  }
}

function setAllText(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) {
      element.textContent = values[index];
    }
  });
}

function setControlLabelText(selector, text) {
  const label = document.querySelector(selector);

  if (!label) {
    return;
  }

  const control = label.querySelector("input, select, textarea");
  label.textContent = `${text} `;

  if (control) {
    label.appendChild(control);
  }
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-Hans" : "en";
  document.title = t("appTitle");
  document.querySelector("meta[name='apple-mobile-web-app-title']")?.setAttribute("content", currentLanguage === "zh" ? "小提琴" : "Violin");

  setText(".hero .eyebrow", t("dailyPracticeQuest"));
  setText("h1", t("appTitle"));
  setText(".level-badge span", t("rewardStatus"));
  parentViewButton.textContent = t("parentView");
  setText(".points-panel h2", t("totalPoints"));
  setText(".point-rules", t("pointRules"));
  setAllText(".period-points span", [t("today"), t("thisWeek"), t("thisMonth"), t("thisYear")]);

  setText(".sinfonietta-panel .eyebrow", t("sinfoniettaEyebrow"));
  setText(".sinfonietta-panel h2", t("sinfoniettaTitle"));
  setText(".sinfonietta-intro", t("sinfoniettaIntro"));
  pickScalesButton.textContent = t("pickScales");
  setText(".extra-practice-help", t("extraPracticeHelp"));
  addExtraPracticeButton.textContent = t("addExtraPractice");

  setText(".game-header .eyebrow", t("training"));
  mappingButton.textContent = t("mapButton");
  newNoteButton.textContent = t("newChallenge");
  setControlLabelText("label[for='trainingModeSelect']", t("trainingMode"));
  setControlLabelText("label[for='practiceModeSelect']", t("practiceMode"));
  setControlLabelText("label[for='difficultySelect']", t("difficultyLevel"));
  setAllText(".current-context span", [t("currentMode"), t("difficulty"), t("notePool")]);
  setText("#customPracticePanel h3", t("customPractice"));
  setText("#customPracticePanel p", t("customPracticeHelp"));
  setText(".string-options legend", t("strings"));
  document.querySelectorAll(".string-options label").forEach((label, index) => {
    const input = label.querySelector("input");
    const stringName = STRINGS[index];
    label.textContent = ` ${stringButtonText(stringName)}`;
    label.prepend(input);
  });

  document.getElementById("staffTitle").textContent = currentLanguage === "zh" ? "五线谱题目" : "Treble clef staff challenge";
  document.getElementById("staffDescription").textContent = currentLanguage === "zh"
    ? "显示当前题目音符或旋律的高音谱号五线谱。"
    : "A treble clef staff showing the note or melody for the current challenge.";
  setText(".listening-prompt strong", t("listenCarefully"));
  setText(".listening-instruction", t("thenTapLocation"));
  setText(".violin-cue-text", t("tapViolinBoard"));
  playNoteButton.textContent = activeMode.promptType === "audio" ? t("replayNote") : t("playNote");
  setText("#gameFeedback", gameFeedback.textContent || t("tapAnswer"));

  setText(".progress-summary .eyebrow", t("practice"));
  setText(".progress-summary h2", t("practiceRecordTitle"));
  saveProgressButton.textContent = t("saveProgress");
  resetProgressButton.textContent = t("resetProgress");
  setText(".practice-panel h3", t("dailyPracticeCheckIn"));
  setControlLabelText("label[for='minutesInput']", t("minutesPracticed"));
  practiceButton.textContent = t("practicedToday");
  setAllText(".record-grid h3", [t("weeklyRecord"), t("monthlyRecord"), t("yearlyRecord")]);

  setText("#mappingTitle", t("mappingTitle"));
  closeMappingButton.textContent = t("backToGame");
  renderMappingGrid();
  setText("#parentModal .eyebrow", t("parentViewEyebrow"));
  setText("#parentViewTitle", t("parentViewTitle"));
  closeParentViewButton.textContent = t("backToGame");
  setText(".parent-note", t("parentNote"));
  setText("#backupToolsTitle", t("backupToolsTitle"));
  setText("#backupToolsHelp", t("backupToolsHelp"));
  exportProgressButton.textContent = t("exportProgress");
  copyBackupButton.textContent = t("copyBackupText");
  importProgressButton.textContent = t("importProgress");
  setControlLabelText("label[for='progressBackupText']", t("progressBackupLabel"));
  progressBackupText.placeholder = t("progressBackupPlaceholder");
  setText("#adjustPointsTitle", t("adjustPointsTitle"));
  setText("#adjustPointsHelp", t("adjustPointsHelp"));
  setControlLabelText("label[for='adjustPointsInput']", t("adjustPointsLabel"));
  addRestorePointsButton.textContent = t("addRestorePoints");

  setText(".rewards .eyebrow", t("rewards"));
  setText(".rewards h2", t("rewardBank"));
  setAllText(".reward-balances span", [t("earned"), t("redeemed"), t("available")]);
  setText(".next-reward-card span", t("rewardGoal"));
  setText("#rewardFormTitle", editingRewardId ? t("saveReward") : t("createReward"));
  setText(".reward-form-panel p", t("rewardFormHelp"));
  setControlLabelText("label[for='rewardNameInput']", t("rewardName"));
  setControlLabelText("label[for='rewardPointsInput']", t("rewardCost"));
  rewardNameInput.placeholder = t("rewardNamePlaceholder");
  addRewardButton.textContent = editingRewardId ? t("saveReward") : t("addReward");
  cancelRewardEditButton.textContent = t("cancelEdit");
  const rewardHeadings = document.querySelectorAll(".rewards > h3");
  if (rewardHeadings[0]) rewardHeadings[0].textContent = t("yourRewards");
  if (rewardHeadings[1]) rewardHeadings[1].textContent = t("suggestedRewardIdeas");
  if (rewardHeadings[2]) rewardHeadings[2].textContent = t("redemptionHistory");
  setText(".suggestion-note", t("suggestionNote"));

  englishButton.classList.toggle("is-active", currentLanguage === "en");
  chineseButton.classList.toggle("is-active", currentLanguage === "zh");
}

function renderMappingGrid() {
  const mapping = [
    ["E", "E open, F# first, G# second, A third, B fourth", "E空弦，F# 1指，G# 2指，A 3指，B 4指"],
    ["A", "A open, B first, C# second, D third, E fourth", "A空弦，B 1指，C# 2指，D 3指，E 4指"],
    ["D", "D open, E first, F# second, G third, A fourth", "D空弦，E 1指，F# 2指，G 3指，A 4指"],
    ["G", "G open, A first, B second, C third, D fourth", "G空弦，A 1指，B 2指，C 3指，D 4指"]
  ];

  document.querySelector(".mapping-grid").textContent = "";
  mapping.forEach(([stringName, english, chinese]) => {
    const item = document.createElement("div");
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    title.textContent = stringText(stringName);
    detail.textContent = currentLanguage === "zh" ? chinese : english;
    item.append(title, detail);
    document.querySelector(".mapping-grid").appendChild(item);
  });
}

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
    total: QUESTIONS_PER_ROUND,
    answered: 0,
    firstTryCorrect: 0,
    missedQuestions: 0,
    missed: false,
    complete: false,
    attempts: 0,
    revealing: false,
    questionPerfect: true,
    pointAwarded: false
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
  return date.toLocaleDateString(currentLanguage === "zh" ? "zh-CN" : "en-US", {
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

function recordPointEarned(mode = activeMode.id, points = 1) {
  progressRecords.push({
    date: localDateKey(new Date()),
    timestamp: new Date().toISOString(),
    mode,
    points
  });
  saveProgressRecords();
}

function loadPracticePointDates() {
  return JSON.parse(localStorage.getItem("liamPracticePointDates") || "[]");
}

function savePracticePointDates() {
  localStorage.setItem("liamPracticePointDates", JSON.stringify(practicePointDates));
}

function getLoggedPracticeMinutes() {
  const log = getPracticeLog();
  return Object.values(log).reduce((total, entry) => total + Number(entry.minutes || 0), 0);
}

function loadPracticeTotalMinutes() {
  const saved = localStorage.getItem("liamPracticeTotalMinutes");

  if (saved !== null) {
    return Number(saved) || 0;
  }

  return getLoggedPracticeMinutes();
}

function savePracticeTotalMinutes() {
  localStorage.setItem("liamPracticeTotalMinutes", String(practiceTotalMinutes));
}

function loadPracticePointsAwarded() {
  const saved = localStorage.getItem("liamPracticePointsAwarded");

  if (saved !== null) {
    return Number(saved) || 0;
  }

  return 0;
}

function savePracticePointsAwarded() {
  localStorage.setItem("liamPracticePointsAwarded", String(practicePointsAwarded));
}

function createDefaultSinfoniettaState(dateKey = localDateKey(new Date())) {
  return {
    date: dateKey,
    completed: Object.fromEntries(SINFONIETTA_ITEMS.map((item) => [item.id, false])),
    scales: {
      scale1: SINFONIETTA_SCALES[0],
      scale2: SINFONIETTA_SCALES[1]
    },
    notes: {
      repertoire: "",
      favoriteSongs: ""
    },
    bonusAwarded: false,
    bonusAwardedAt: "",
    extraPracticeMinutes: 0,
    extraPracticePointsAwarded: 0,
    updatedAt: new Date().toISOString()
  };
}

function normalizeSinfoniettaState(state) {
  const normalized = createDefaultSinfoniettaState(state?.date || localDateKey(new Date()));
  SINFONIETTA_ITEMS.forEach((item) => {
    normalized.completed[item.id] = Boolean(state?.completed?.[item.id]);
  });
  normalized.scales.scale1 = SINFONIETTA_SCALES.includes(state?.scales?.scale1) ? state.scales.scale1 : SINFONIETTA_SCALES[0];
  normalized.scales.scale2 = SINFONIETTA_SCALES.includes(state?.scales?.scale2) ? state.scales.scale2 : SINFONIETTA_SCALES[1];
  normalized.notes.repertoire = state?.notes?.repertoire || "";
  normalized.notes.favoriteSongs = state?.notes?.favoriteSongs || "";
  normalized.bonusAwarded = Boolean(state?.bonusAwarded);
  normalized.bonusAwardedAt = state?.bonusAwardedAt || "";
  normalized.extraPracticeMinutes = Math.max(0, Number(state?.extraPracticeMinutes || 0));
  normalized.extraPracticePointsAwarded = Math.max(0, Number(state?.extraPracticePointsAwarded || 0));
  normalized.updatedAt = state?.updatedAt || new Date().toISOString();
  return normalized;
}

function loadSinfoniettaHistory() {
  return JSON.parse(localStorage.getItem("liamSinfoniettaPracticeHistory") || "{}");
}

function saveSinfoniettaHistory() {
  localStorage.setItem("liamSinfoniettaPracticeHistory", JSON.stringify(sinfoniettaHistory));
}

function loadSinfoniettaState() {
  const saved = normalizeSinfoniettaState(JSON.parse(localStorage.getItem("liamSinfoniettaPracticeState") || "null"));
  const today = localDateKey(new Date());
  return saved.date === today ? saved : createDefaultSinfoniettaState(today);
}

function getSinfoniettaCompletedCount() {
  return SINFONIETTA_ITEMS.filter((item) => sinfoniettaState.completed[item.id]).length;
}

function saveSinfoniettaState() {
  sinfoniettaState.updatedAt = new Date().toISOString();
  localStorage.setItem("liamSinfoniettaPracticeState", JSON.stringify(sinfoniettaState));
  sinfoniettaHistory[sinfoniettaState.date] = {
    ...sinfoniettaState,
    completedCount: getSinfoniettaCompletedCount(),
    totalCount: SINFONIETTA_ITEMS.length
  };
  saveSinfoniettaHistory();
}

function ensureSinfoniettaToday() {
  const today = localDateKey(new Date());

  if (sinfoniettaState.date !== today) {
    sinfoniettaState = createDefaultSinfoniettaState(today);
    saveSinfoniettaState();
  }
}

function awardSinfoniettaBonusIfReady() {
  if (getSinfoniettaCompletedCount() !== SINFONIETTA_ITEMS.length || sinfoniettaState.bonusAwarded) {
    return false;
  }

  sinfoniettaState.bonusAwarded = true;
  sinfoniettaState.bonusAwardedAt = new Date().toISOString();
  practicePointsAwarded += 2;
  savePracticePointsAwarded();
  recordPointEarned("sinfonietta-bonus", 2);
  updateScoreDisplay();
  return true;
}

function calculateExtraPracticePoints() {
  if (!sinfoniettaState.bonusAwarded) {
    return 0;
  }

  return Math.floor(Math.max(0, Number(sinfoniettaState.extraPracticeMinutes || 0)) / 15);
}

function reconcileExtraPracticeBonus() {
  const targetPoints = calculateExtraPracticePoints();
  const alreadyAwarded = Number(sinfoniettaState.extraPracticePointsAwarded || 0);
  const delta = targetPoints - alreadyAwarded;

  if (!delta) {
    return 0;
  }

  sinfoniettaState.extraPracticePointsAwarded = targetPoints;
  practicePointsAwarded += delta;
  savePracticePointsAwarded();
  recordPointEarned("extra-practice-bonus", delta);
  updateScoreDisplay();
  return delta;
}

function updateExtraPracticeDisplay() {
  extraPracticeMinutesInput.value = String(Math.max(0, Number(sinfoniettaState.extraPracticeMinutes || 0)));
  const earnedPoints = Number(sinfoniettaState.extraPracticePointsAwarded || 0);
  extraPracticeBonusText.textContent = t("extraPracticeBonus", { points: earnedPoints });
  extraPracticeBonusText.classList.toggle("is-locked", !sinfoniettaState.bonusAwarded);

  if (!sinfoniettaState.bonusAwarded) {
    extraPracticeBonusText.textContent = `${t("extraPracticeBonus", { points: 0 })} · ${t("extraPracticeLocked")}`;
  }
}

function setExtraPracticeMinutes(minutes) {
  ensureSinfoniettaToday();
  sinfoniettaState.extraPracticeMinutes = Math.max(0, Math.floor(Number(minutes) || 0));
  reconcileExtraPracticeBonus();
  updateExtraPracticeDisplay();
  saveSinfoniettaState();
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
  difficultySelect.textContent = "";
  I18N[currentLanguage].difficulties.forEach((label, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = label;
    difficultySelect.appendChild(option);
  });
  difficultySelect.value = String(selectedDifficulty);
}

function createScaleSelect(item) {
  const select = document.createElement("select");
  select.className = "sinfonietta-scale-select";
  select.value = sinfoniettaState.scales[item.id] || SINFONIETTA_SCALES[0];
  SINFONIETTA_SCALES.forEach((scale) => {
    const option = document.createElement("option");
    option.value = scale;
    option.textContent = scale;
    select.appendChild(option);
  });
  select.value = sinfoniettaState.scales[item.id] || SINFONIETTA_SCALES[0];
  select.addEventListener("change", () => {
    ensureSinfoniettaToday();
    sinfoniettaState.scales[item.id] = select.value;
    updateSinfoniettaProgress();
  });
  return select;
}

function createSinfoniettaTextInput(item) {
  const label = document.createElement("label");
  label.className = "sinfonietta-text-label";
  label.textContent = t(item.textKey);

  const input = document.createElement("input");
  input.type = "text";
  input.value = sinfoniettaState.notes[item.id] || "";
  input.placeholder = t(item.textPlaceholderKey);
  input.addEventListener("input", () => {
    ensureSinfoniettaToday();
    sinfoniettaState.notes[item.id] = input.value;
    updateSinfoniettaProgress();
  });

  label.appendChild(input);
  return label;
}

function renderSinfoniettaChecklist() {
  ensureSinfoniettaToday();
  sinfoniettaChecklist.textContent = "";
  updateExtraPracticeDisplay();

  SINFONIETTA_ITEMS.forEach((item) => {
    const row = document.createElement("article");
    row.className = "sinfonietta-item";

    const content = document.createElement("div");
    content.className = "sinfonietta-item-content";

    const title = document.createElement("h3");
    title.textContent = t(item.titleKey);
    content.appendChild(title);

    if (item.descriptionKey || item.goalKey) {
      const description = document.createElement("p");
      description.textContent = t(item.descriptionKey || item.goalKey);
      content.appendChild(description);
    }

    if (item.type === "scale") {
      content.appendChild(createScaleSelect(item));
    }

    if (item.textKey) {
      content.appendChild(createSinfoniettaTextInput(item));
    }

    const checkboxLabel = document.createElement("label");
    checkboxLabel.className = "sinfonietta-check";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(sinfoniettaState.completed[item.id]);
    checkbox.addEventListener("change", () => {
      ensureSinfoniettaToday();
      sinfoniettaState.completed[item.id] = checkbox.checked;
      row.classList.toggle("is-complete", checkbox.checked);
      updateSinfoniettaProgress();
    });
    const checkText = document.createElement("span");
    checkText.textContent = t("completed");
    checkboxLabel.append(checkbox, checkText);

    row.classList.toggle("is-complete", checkbox.checked);
    row.append(content, checkboxLabel);
    sinfoniettaChecklist.appendChild(row);
  });

  updateSinfoniettaProgress();
}

function updateSinfoniettaProgress() {
  ensureSinfoniettaToday();
  const completedCount = getSinfoniettaCompletedCount();
  const totalCount = SINFONIETTA_ITEMS.length;
  const percent = Math.round((completedCount / totalCount) * 100);
  sinfoniettaProgressText.textContent = t("dailyPracticeProgress", { count: completedCount, total: totalCount });
  sinfoniettaProgressFill.style.width = `${percent}%`;

  if (completedCount === totalCount) {
    const justAwarded = awardSinfoniettaBonusIfReady();
    reconcileExtraPracticeBonus();
    sinfoniettaMessage.textContent = justAwarded ? t("sinfoniettaComplete") : t("sinfoniettaCompleteSaved");
    sinfoniettaMessage.classList.add("is-complete");
  } else {
    sinfoniettaMessage.textContent = "";
    sinfoniettaMessage.classList.remove("is-complete");
  }

  updateExtraPracticeDisplay();
  saveSinfoniettaState();
}

function pickTodayScales() {
  ensureSinfoniettaToday();
  const shuffled = [...SINFONIETTA_SCALES].sort(() => Math.random() - 0.5);
  sinfoniettaState.scales.scale1 = shuffled[0];
  sinfoniettaState.scales.scale2 = shuffled.find((scale) => scale !== shuffled[0]) || shuffled[1];
  saveSinfoniettaState();
  renderSinfoniettaChecklist();
}

function updatePracticeStatus() {
  const log = getPracticeLog();
  const today = localDateKey(new Date());

  if (log[today]) {
    practiceStatus.textContent = t("greatPractice", { minutes: log[today].minutes });
    return;
  }

  practiceStatus.textContent = t("readyPractice");
}

function saveTodayPractice() {
  const minutes = Number(minutesInput.value);
  const today = localDateKey(new Date());

  if (!minutes || minutes < 1) {
    practiceStatus.textContent = t("enterPracticeMinutes");
    minutesInput.focus();
    return;
  }

  const log = getPracticeLog();
  const previousTodayMinutes = Number(log[today]?.minutes || 0);
  log[today] = {
    minutes: previousTodayMinutes + minutes,
    savedAt: new Date().toISOString()
  };

  practiceTotalMinutes += minutes;
  savePracticeTotalMinutes();
  progressMessage.textContent = t("practiceMinutesSaved");

  savePracticeLog(log);
  updatePracticeStatus();
  updateScoreDisplay();
}

function getTotalScore() {
  const gamePoints = Object.values(levelStats).reduce((total, stat) => total + stat.score, 0);
  return gamePoints + practicePointsAwarded;
}

function getRewardTitle() {
  return t("ptsAvailable", { points: getRemainingRewardPoints() });
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

function rewardProgressColor(percent) {
  const clamped = Math.max(0, Math.min(100, percent));
  const hue = Math.round((clamped / 100) * 120);
  const lightness = clamped >= 100 ? 42 : 50;
  return `hsl(${hue} 86% ${lightness}%)`;
}

function setRewardProgress(percent) {
  const clamped = Math.max(0, Math.min(100, percent));
  rewardProgressFill.style.width = `${clamped}%`;
  rewardProgressFill.style.background = rewardProgressColor(clamped);
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
    nextRewardText.textContent = t("youCanGet", { reward: bestReward.name });
    setRewardProgress(100);
    rewardProgressText.textContent = t("chooseRewardToRedeem", { points: remainingPoints });
  } else if (nextReward) {
    const cost = Number(nextReward.cost);
    const percent = Math.max(0, Math.min(100, (remainingPoints / cost) * 100));
    const pointsNeeded = cost - remainingPoints;
    nextRewardText.textContent = t("pointsNeededForReward", {
      points: pointsNeeded,
      plural: plural(pointsNeeded),
      reward: nextReward.name
    });
    setRewardProgress(percent);
    rewardProgressText.textContent = t("pointsSavedForReward", { current: remainingPoints, cost });
  } else {
    nextRewardText.textContent = t("addFamilyReward");
    setRewardProgress(0);
    rewardProgressText.textContent = t("familiesChooseRewards");
  }

  renderCustomRewards();
  suggestedRewardsList.textContent = "";
  I18N[currentLanguage].suggestedRewards.forEach((suggestion) => {
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
    empty.innerHTML = `<span>${emptyText}</span><strong>${formatPoints(0)}</strong>`;
    element.appendChild(empty);
    return;
  }

  rows.forEach(([dateKey, points]) => {
    const row = document.createElement("div");
    row.className = "record-row";
    row.innerHTML = `<span>${formatLongDate(new Date(`${dateKey}T00:00:00`))}</span><strong>${formatPoints(points)}</strong>`;
    element.appendChild(row);
  });
}

function renderRedemptionHistory() {
  redemptionHistoryList.textContent = "";

  if (!redemptionRecords.length) {
    const empty = document.createElement("div");
    empty.className = "record-row";
    empty.innerHTML = `<span>${t("noRewardsRedeemed")}</span><strong>${formatPoints(0)}</strong>`;
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
      t("ptsUsed", { points: record.points }),
      document.createElement("br"),
      t("ptsLeft", { points: record.remainingAfter })
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
        <span>${t("noRewards")}</span>
        <strong>${t("addRewardWorkToward")}</strong>
        <p>${t("rewardExample")}</p>
      </div>
    `;
    customRewardsList.appendChild(empty);
    return;
  }

  const remainingPoints = getRemainingRewardPoints();

  customRewards.forEach((reward) => {
    const cost = Number(reward.cost);
    const pointsNeeded = Math.max(0, cost - remainingPoints);
    const percent = cost > 0 ? Math.max(0, Math.min(100, (remainingPoints / cost) * 100)) : 0;
    const progressColor = rewardProgressColor(percent);
    const card = document.createElement("div");
    card.className = "custom-reward-card";
    card.style.borderColor = progressColor;

    const details = document.createElement("div");
    const status = document.createElement("span");
    const title = document.createElement("strong");
    const helper = document.createElement("p");
    status.textContent = pointsNeeded ? t("morePointsNeeded", { points: pointsNeeded, plural: plural(pointsNeeded) }) : t("readyToRedeem");
    status.style.color = progressColor;
    title.textContent = reward.name;
    helper.textContent = t("rewardPointCost", { points: cost, plural: plural(cost) });
    details.append(status, title, helper);

    const actions = document.createElement("div");
    actions.className = "reward-card-actions";

    const redeemButton = document.createElement("button");
    redeemButton.type = "button";
    redeemButton.textContent = t("redeem");
    redeemButton.disabled = pointsNeeded > 0;
    redeemButton.addEventListener("click", () => redeemCustomReward(reward.id));

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "secondary-button";
    editButton.textContent = t("edit");
    editButton.addEventListener("click", () => startRewardEdit(reward.id));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger-button";
    deleteButton.textContent = t("delete");
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
  rewardFormTitle.textContent = t("createReward");
  addRewardButton.textContent = t("addReward");
  cancelRewardEditButton.classList.add("is-hidden");
}

function saveRewardFromForm() {
  const rewardName = rewardNameInput.value.trim();
  const requestedPoints = Number(rewardPointsInput.value);

  if (!rewardName) {
    rewardMessage.textContent = t("enterRewardName");
    rewardMessage.className = "reward-message error";
    return;
  }

  if (!Number.isInteger(requestedPoints) || requestedPoints <= 0) {
    rewardMessage.textContent = t("enterRewardPoints");
    rewardMessage.className = "reward-message error";
    return;
  }

  if (editingRewardId) {
    customRewards = customRewards.map((reward) => reward.id === editingRewardId
      ? { ...reward, name: rewardName, cost: requestedPoints, updatedAt: new Date().toISOString() }
      : reward);
    rewardMessage.textContent = t("rewardUpdated");
  } else {
    customRewards.push({
      id: `reward-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: rewardName,
      cost: requestedPoints,
      createdAt: new Date().toISOString()
    });
    rewardMessage.textContent = t("rewardAdded");
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
  rewardFormTitle.textContent = t("editReward");
  addRewardButton.textContent = t("saveReward");
  cancelRewardEditButton.classList.remove("is-hidden");
  rewardMessage.textContent = t("editingReward");
  rewardMessage.className = "reward-message";
  rewardNameInput.focus();
}

function deleteCustomReward(rewardId) {
  const reward = customRewards.find((item) => item.id === rewardId);

  if (!reward) {
    return;
  }

  const confirmed = window.confirm(t("deleteRewardConfirm", { reward: reward.name }));

  if (!confirmed) {
    rewardMessage.textContent = t("deleteCanceled");
    rewardMessage.className = "reward-message";
    return;
  }

  customRewards = customRewards.filter((item) => item.id !== rewardId);

  if (editingRewardId === rewardId) {
    clearRewardForm();
  }

  saveCustomRewards();
  rewardMessage.textContent = t("rewardDeleted");
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
    rewardMessage.textContent = t("needMorePoints");
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
  rewardMessage.textContent = t("rewardRedeemed");
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
  monthlyRange.textContent = `${monthStart.toLocaleDateString(currentLanguage === "zh" ? "zh-CN" : "en-US", { month: "long", year: "numeric" })}`;
  yearlyRange.textContent = `${yearStart.getFullYear()}`;

  renderRecordList(weeklyRecord, pointsByDate(weekStart, weekEnd), t("noPointsWeek"));
  renderRecordList(monthlyRecord, pointsByDate(monthStart, monthEnd), t("noPointsMonth"));
  renderRecordList(yearlyRecord, pointsByDate(yearStart, yearEnd), t("noPointsYear"));
}

function saveProgressSnapshot() {
  localStorage.setItem("liamProgressSnapshot", JSON.stringify({
    savedAt: new Date().toISOString(),
    levelStats,
    progressRecords,
    practicePointDates,
    practiceTotalMinutes,
    practicePointsAwarded,
    sinfoniettaState,
    sinfoniettaHistory,
    redemptionRecords,
    customRewards,
    practiceLog: getPracticeLog()
  }));

  progressMessage.textContent = t("progressSaved", { date: formatLongDate(new Date()) });
}

const BACKUP_STORAGE_KEYS = [
  "violinAdventureLanguage",
  "liamLevelStats",
  "liamPracticeLog",
  "liamProgressRecords",
  "liamPracticePointDates",
  "liamPracticeTotalMinutes",
  "liamPracticePointsAwarded",
  "liamSinfoniettaPracticeState",
  "liamSinfoniettaPracticeHistory",
  "liamRewardRedemptions",
  "liamCustomRewards",
  "liamCustomPracticeSettings",
  "liamSelectedDifficulty",
  "liamProgressSnapshot",
  "liamLastPracticeRun"
];

function createProgressBackup() {
  return {
    app: "Violin Adventure",
    backupVersion: 1,
    exportedAt: new Date().toISOString(),
    storage: Object.fromEntries(BACKUP_STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)]))
  };
}

function downloadBackupFile(backupText) {
  const blob = new Blob([backupText], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `violin-adventure-backup-${localDateKey(new Date())}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportProgressBackup() {
  const backupText = JSON.stringify(createProgressBackup(), null, 2);
  progressBackupText.value = backupText;
  backupMessage.textContent = t("backupReady");
  downloadBackupFile(backupText);
}

async function copyProgressBackup() {
  if (!progressBackupText.value.trim()) {
    progressBackupText.value = JSON.stringify(createProgressBackup(), null, 2);
  }

  progressBackupText.select();

  try {
    await navigator.clipboard.writeText(progressBackupText.value);
    backupMessage.textContent = t("backupCopied");
  } catch (error) {
    backupMessage.textContent = t("backupCopyFailed");
  }
}

function importProgressBackup() {
  const rawText = progressBackupText.value.trim();

  if (!rawText) {
    backupMessage.textContent = t("backupMissing");
    return;
  }

  let backup;

  try {
    backup = JSON.parse(rawText);
  } catch (error) {
    backupMessage.textContent = t("backupInvalid");
    return;
  }

  if (!backup?.storage || typeof backup.storage !== "object") {
    backupMessage.textContent = t("backupInvalid");
    return;
  }

  if (!window.confirm(t("backupImportConfirm"))) {
    backupMessage.textContent = t("backupImportCanceled");
    return;
  }

  BACKUP_STORAGE_KEYS.forEach((key) => {
    const value = backup.storage[key];

    if (value === null || value === undefined) {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(key, String(value));
  });

  backupMessage.textContent = t("backupImported");
  window.setTimeout(() => window.location.reload(), 600);
}

function addRestorePoints() {
  const pointsToAdd = Number(adjustPointsInput.value);

  if (!Number.isInteger(pointsToAdd) || pointsToAdd <= 0) {
    adjustPointsMessage.textContent = t("adjustPointsInvalid");
    return;
  }

  practicePointsAwarded += pointsToAdd;
  savePracticePointsAwarded();
  recordPointEarned("parent-restore", pointsToAdd);
  adjustPointsInput.value = "";
  adjustPointsMessage.textContent = t("adjustPointsSuccess", {
    points: pointsToAdd,
    plural: plural(pointsToAdd)
  });
  updateScoreDisplay();
}

function resetProgress() {
  const confirmed = window.confirm(t("resetConfirm"));

  if (!confirmed) {
    progressMessage.textContent = t("resetCanceled");
    return;
  }

  levelStats = {};
  MODES.forEach((mode) => {
    levelStats[mode.id] = { score: 0, streak: 0 };
  });
  progressRecords = [];
  practicePointDates = [];
  practiceTotalMinutes = 0;
  practicePointsAwarded = 0;
  redemptionRecords = [];
  customRewards = [];
  sinfoniettaHistory = {};
  sinfoniettaState = createDefaultSinfoniettaState();
  clearRewardForm();

  localStorage.removeItem("liamLevelStats");
  localStorage.removeItem("liamPracticeLog");
  localStorage.removeItem("liamProgressRecords");
  localStorage.removeItem("liamPracticePointDates");
  localStorage.removeItem("liamPracticeTotalMinutes");
  localStorage.removeItem("liamPracticePointsAwarded");
  localStorage.removeItem("liamSinfoniettaPracticeState");
  localStorage.removeItem("liamSinfoniettaPracticeHistory");
  localStorage.removeItem("liamRewardRedemptions");
  localStorage.removeItem("liamCustomRewards");
  localStorage.removeItem("liamProgressSnapshot");
  localStorage.removeItem("liamLastPracticeRun");

  minutesInput.value = "";
  saveSinfoniettaState();
  renderSinfoniettaChecklist();
  updatePracticeStatus();
  updateScoreDisplay();
  progressMessage.textContent = t("progressReset");
}

function updateScoreDisplay() {
  const totalScore = getTotalScore();
  totalScoreValue.textContent = totalScore;
  rewardLevel.textContent = getRewardTitle();

  MODES.forEach((mode, index) => {
    document.getElementById(`${mode.id}Score`).textContent = levelStats[mode.id].score;
    document.getElementById(`${mode.id}Streak`).textContent = t("streak", { value: levelStats[mode.id].streak });
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

function startRound(total = QUESTIONS_PER_ROUND) {
  roundState = {
    total,
    answered: 0,
    firstTryCorrect: 0,
    missedQuestions: 0,
    missed: false,
    complete: false,
    attempts: 0,
    revealing: false,
    questionPerfect: true,
    pointAwarded: false
  };
}

function startQuestionAttempt(options = {}) {
  const { resetQuestionPerfect = true } = options;
  roundState.attempts = 0;
  roundState.revealing = false;

  if (resetQuestionPerfect) {
    roundState.questionPerfect = true;
  }
}

function markRoundMissed() {
  if (!roundState.complete) {
    if (roundState.questionPerfect) {
      roundState.missedQuestions += 1;
    }

    roundState.questionPerfect = false;
    roundState.missed = true;
  }
}

function roundStatusText() {
  const answered = Math.min(roundState.answered, roundState.total - 1);
  const perfectText = roundState.missed ? t("learningRound") : t("perfectSoFar");
  return t("questionStatus", { current: answered + 1, total: roundState.total, status: perfectText });
}

function finishRound() {
  if (roundState.complete) {
    return;
  }

  roundState.complete = true;
  const isPerfect = roundState.firstTryCorrect === roundState.total && !roundState.missed;

  if (isPerfect) {
    if (!roundState.pointAwarded) {
      roundState.pointAwarded = true;
      awardRoundPoint();
    }

    gameFeedback.textContent = t("perfectRound", { total: roundState.total });
    gameFeedback.className = "feedback correct";
    melodyProgress.textContent = t("roundCompletePerfect", { total: roundState.total });
    return;
  }

  resetActiveStreak();
  gameFeedback.textContent = t("learningRoundComplete", { correct: roundState.firstTryCorrect, total: roundState.total });
  gameFeedback.className = "feedback try-again";
  melodyProgress.textContent = t("roundCompleteTry");
}

function countCorrectQuestion() {
  if (roundState.complete) {
    return;
  }

  if (roundState.questionPerfect) {
    roundState.firstTryCorrect += 1;
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
      y1: STAFF_TOP_Y + index * STAFF_LINE_SPACING,
      y2: STAFF_TOP_Y + index * STAFF_LINE_SPACING,
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

  return STAFF_BOTTOM_Y - (pitchStep - bottomLineE4Step) * STAFF_STEP;
}

function drawLedgerLinesForNote(x, y) {
  for (let ledgerY = STAFF_BOTTOM_Y + STAFF_LINE_SPACING; ledgerY <= y + 1; ledgerY += STAFF_LINE_SPACING) {
    if (ledgerY > STAFF_BOTTOM_Y) {
      ledgerLines.appendChild(makeSvgElement("line", {
        x1: x - LEDGER_EXTENSION,
        x2: x + LEDGER_EXTENSION,
        y1: ledgerY,
        y2: ledgerY,
        class: "ledger-line"
      }));
    }
  }

  for (let ledgerY = STAFF_TOP_Y - STAFF_LINE_SPACING; ledgerY >= y - 1; ledgerY -= STAFF_LINE_SPACING) {
    if (ledgerY < STAFF_TOP_Y) {
      ledgerLines.appendChild(makeSvgElement("line", {
        x1: x - LEDGER_EXTENSION,
        x2: x + LEDGER_EXTENSION,
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
    rx: NOTE_HEAD_RX,
    ry: NOTE_HEAD_RY,
    class: noteClass
  }));

  const stemX = y < 96 ? x - NOTE_HEAD_RX : x + NOTE_HEAD_RX;
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
  return t("locationLabel", {
    note: note.name,
    string: stringText(note.string),
    finger: fingerText(note.finger)
  });
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
  return I18N[currentLanguage].difficulties[selectedDifficulty];
}

function selectLabel(mode) {
  return I18N[currentLanguage].modeSelectLabels[mode.id] || modeTitleText(mode);
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
  currentModeLabel.textContent = modeTitleText(activeMode);
  currentDifficultyLabel.textContent = difficultyLabel();
  currentPoolLabel.textContent = currentLanguage === "zh"
    ? `${modePoolLabel(activeMode)}（${pool.length}/${basePool.length} 个音）`
    : `${modePoolLabel(activeMode)} (${pool.length} of ${basePool.length} notes)`;

  if (activeMode.group === "book" && pool.length < 4) {
    poolWarning.textContent = t("higherDifficultyBook");
    return;
  }

  if (!pool.length) {
    poolWarning.textContent = t("noNotesSettings");
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

function buildMelodyQuestion() {
  const melodyLength = 3 + Math.floor(Math.random() * 3);
  return buildNoteSequence(melodyLength);
}

function melodyQuestionStatusText(status) {
  return t("melodyQuestionStatus", {
    current: Math.min(roundState.answered + 1, roundState.total),
    total: roundState.total,
    status
  });
}

function startMelodyQuestion() {
  clearChoiceMarks();
  currentMelody = buildMelodyQuestion();
  melodyIndex = 0;
  currentNote = currentMelody[0];
  startQuestionAttempt();
  melodyAnswer.textContent = "";

  if (!currentNote) {
    gameFeedback.textContent = t("noMatchingNotes");
    return;
  }

  drawMelody();
  melodyProgress.textContent = melodyQuestionStatusText(roundState.missed ? t("learningRound") : t("perfectSoFar"));
  gameFeedback.textContent = t("tapFirstNote");
}

function finishMelodyQuestion(nextDelay = 1000) {
  melodyProgress.textContent = t("melodyComplete");
  melodyAnswer.textContent = currentMelody.map(locationLabel).join(" | ");
  countCorrectQuestion();

  if (!roundState.complete) {
    setTimeout(startMelodyQuestion, nextDelay);
  }
}

function advanceMelodyNoteOrQuestion() {
  melodyIndex += 1;
  clearChoiceMarks();

  if (melodyIndex >= currentMelody.length) {
    finishMelodyQuestion();
    return;
  }

  currentNote = currentMelody[melodyIndex];
  startQuestionAttempt({ resetQuestionPerfect: false });
  melodyProgress.textContent = melodyQuestionStatusText(roundState.missed ? t("learningRound") : t("perfectSoFar"));
  drawMelody();
}

function pickNewChallenge() {
  clearChoiceMarks();
  practiceSequence.textContent = "";
  melodyAnswer.textContent = "";
  gameFeedback.className = "feedback";
  updateCurrentContext();
  startRound(QUESTIONS_PER_ROUND);

  if (!activeNotePool().length) {
    ledgerLines.textContent = "";
    noteGroup.textContent = "";
    currentNote = null;
    currentMelody = [];
    practiceRun = createEmptyPracticeRun();
    melodyProgress.textContent = "";
    gameFeedback.textContent = t("noMatchingNotes");
    return;
  }

  if (activeMode.promptType === "melody") {
    startMelodyQuestion();
    return;
  }

  if (activeMode.promptType === "practice") {
    practiceRun = {
      notes: buildNoteSequence(QUESTIONS_PER_ROUND),
      index: 0,
      startedAt: Date.now(),
      missedIndexes: new Set()
    };
    currentNote = practiceRun.notes[0];
    startQuestionAttempt();
    if (!currentNote) {
      gameFeedback.textContent = t("noMatchingNotes");
      return;
    }

    currentMelody = [];
    melodyIndex = 0;
    drawPracticeRun();
    updatePracticeProgress();
    gameFeedback.textContent = t("tapNotePerfect");
    return;
  }

  currentNote = pickRandomNote();
  if (!currentNote) {
    gameFeedback.textContent = t("noMatchingNotes");
    return;
  }

  currentMelody = [];
  melodyIndex = 0;
  startQuestionAttempt();
  drawSingleNote(currentNote);
  melodyProgress.textContent = activeMode.promptType === "audio"
    ? t("audioQuestionStatus", { current: 1, total: roundState.total, status: t("perfectSoFar") })
    : roundStatusText();
  gameFeedback.textContent = activeMode.promptType === "audio" ? t("tapReplay") : t("tapAnswer");

  if (activeMode.promptType === "audio") {
    playCurrentNote();
  }
}

function nextSingleQuestion() {
  if (roundState.complete) {
    return;
  }

  clearChoiceMarks();
  startQuestionAttempt();
  currentNote = pickRandomNote();
  drawSingleNote(currentNote);
  melodyProgress.textContent = activeMode.promptType === "audio"
    ? t("audioQuestionStatus", {
      current: Math.min(roundState.answered + 1, roundState.total),
      total: roundState.total,
      status: roundState.missed ? t("learningRound") : t("perfectSoFar")
    })
    : roundStatusText();
  gameFeedback.textContent = activeMode.promptType === "audio" ? t("tapReplay") : t("tapAnswer");

  if (activeMode.promptType === "audio") {
    playCurrentNote();
  }
}

function setActiveMode(modeId) {
  activeMode = MODES.find((mode) => mode.id === modeId);
  modeTitle.textContent = modeTitleText(activeMode);
  modeInstructions.textContent = modeInstructionText(activeMode);
  playNoteButton.classList.toggle("is-hidden", activeMode.promptType !== "audio");
  playNoteButton.textContent = activeMode.promptType === "audio" ? t("replayNote") : t("playNote");
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

function targetAnswerText(target, answerType = activeMode.answerType) {
  if (answerType === "string") {
    return t("stringAnswer", { note: target.name, string: stringText(target.string) });
  }

  if (answerType === "finger") {
    return t("fingerAnswer", { note: target.name, finger: fingerText(target.finger) });
  }

  return locationLabel(target);
}

function handleCorrect(button) {
  button.classList.add("correct-choice");
  gameFeedback.textContent = roundState.attempts > 0 ? t("secondTryCorrect") : t("correct");
  gameFeedback.className = "feedback correct";
}

function handleWrong(button, target, answerType = activeMode.answerType) {
  if (roundState.revealing) {
    return "locked";
  }

  button.classList.add("wrong-choice");
  roundState.attempts += 1;
  markRoundMissed();
  gameFeedback.className = "feedback try-again";

  if (roundState.attempts === 1) {
    gameFeedback.textContent = t("goodTryAgain", { answer: targetAnswerText(target, answerType) });
  } else {
    roundState.revealing = true;
    gameFeedback.textContent = t("correctAnswerIs", { answer: targetAnswerText(target, answerType) });
  }

  if (activeMode.promptType === "practice") {
    updatePracticeProgress();
    return roundState.revealing ? "reveal" : "retry";
  }

  if (activeMode.promptType === "melody") {
    melodyProgress.textContent = melodyQuestionStatusText(t("learningTryAgain"));
    return roundState.revealing ? "reveal" : "retry";
  }

  melodyProgress.textContent = activeMode.promptType === "audio"
    ? t("audioQuestionStatus", {
      current: Math.min(roundState.answered + 1, roundState.total),
      total: roundState.total,
      status: t("learningShort")
    })
    : roundStatusText();

  return roundState.revealing ? "reveal" : "retry";
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

  const perfectText = roundState.missed ? t("learningRound") : t("perfectSoFar");
  melodyProgress.textContent = t("practiceStatus", {
    current: Math.min(practiceRun.index + 1, practiceRun.notes.length),
    total: practiceRun.notes.length,
    status: perfectText
  });
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

  melodyProgress.textContent = t("practiceComplete");
  practiceSequence.textContent = practiceRun.notes.map((note) => note.name).join("  ");
  melodyAnswer.innerHTML = [
    t("accuracy", { value: accuracy }),
    t("timeSeconds", { seconds }),
    t("notesMissed", { notes: missedNotes.length ? missedNotes.join(" | ") : t("none") })
  ].join("<br>");
  gameFeedback.textContent = roundState.missed
    ? t("learningRoundComplete", { correct: roundState.firstTryCorrect, total: roundState.total })
    : t("perfectRound", { total: roundState.total });
  gameFeedback.className = roundState.missed ? "feedback try-again" : "feedback correct";
  drawPracticeRun();
}

function handleLocationTap(button, stringName, finger) {
  if (roundState.complete) {
    return;
  }

  if (activeMode.promptType === "practice") {
    handlePracticeTap(button, stringName, finger);
    return;
  }

  if (roundState.revealing) {
    return;
  }

  const target = activeMode.promptType === "melody" ? currentMelody[melodyIndex] : currentNote;
  const isCorrect = isCorrectLocation(target, stringName, finger);

  if (activeMode.promptType === "melody") {
    if (!isCorrect) {
      const result = handleWrong(button, target, "location");

      if (result === "reveal") {
        setTimeout(advanceMelodyNoteOrQuestion, 1800);
      }

      return;
    }

    handleCorrect(button);
    setTimeout(advanceMelodyNoteOrQuestion, 350);
    return;
  }

  if (!isCorrect) {
    const result = handleWrong(button, target, "location");
    if (result === "reveal") {
      countCorrectQuestion();

      if (!roundState.complete) {
        setTimeout(nextSingleQuestion, 1800);
      }
    }
    return;
  }

  handleCorrect(button);
  countCorrectQuestion();

  if (!roundState.complete) {
    setTimeout(nextSingleQuestion, 850);
  }
}

function handlePracticeTap(button, stringName, finger) {
  if (roundState.revealing || roundState.complete) {
    return;
  }

  const target = practiceRun.notes[practiceRun.index];
  const isCorrect = isCorrectLocation(target, stringName, finger);

  if (!isCorrect) {
    practiceRun.missedIndexes.add(practiceRun.index);
    const result = handleWrong(button, target, "location");
    if (result === "reveal") {
      practiceRun.index += 1;
      countCorrectQuestion();

      if (roundState.complete || practiceRun.index >= practiceRun.notes.length) {
        finishPracticeRun();
        return;
      }

      currentNote = practiceRun.notes[practiceRun.index];
      startQuestionAttempt();
      updatePracticeProgress();
      setTimeout(() => {
        clearChoiceMarks();
        drawPracticeRun();
      }, 1800);
      return;
    }
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
  startQuestionAttempt();
  updatePracticeProgress();
  drawPracticeRun();
  setTimeout(clearChoiceMarks, 250);
}

function handleStringTap(button, stringName) {
  if (roundState.revealing || roundState.complete) {
    return;
  }

  if (isCorrectString(currentNote, stringName)) {
    handleCorrect(button);
    countCorrectQuestion();

    if (!roundState.complete) {
      setTimeout(nextSingleQuestion, 850);
    }

    return;
  }

  const result = handleWrong(button, currentNote, "string");
  if (result === "reveal") {
    countCorrectQuestion();

    if (!roundState.complete) {
      setTimeout(nextSingleQuestion, 1800);
    }
  }
}

function handleFingerTap(button, finger) {
  if (roundState.revealing || roundState.complete) {
    return;
  }

  if (isCorrectFinger(currentNote, finger)) {
    handleCorrect(button);
    countCorrectQuestion();

    if (!roundState.complete) {
      setTimeout(nextSingleQuestion, 850);
    }

    return;
  }

  const result = handleWrong(button, currentNote, "finger");
  if (result === "reveal") {
    countCorrectQuestion();

    if (!roundState.complete) {
      setTimeout(nextSingleQuestion, 1800);
    }
  }
}

function createModeSelectors() {
  trainingModeSelect.textContent = "";
  practiceModeSelect.textContent = "";
  const trainingPlaceholder = document.createElement("option");
  trainingPlaceholder.value = "";
  trainingPlaceholder.textContent = t("chooseTrainingMode");
  trainingModeSelect.appendChild(trainingPlaceholder);

  const practicePlaceholder = document.createElement("option");
  practicePlaceholder.value = "";
  practicePlaceholder.textContent = t("choosePracticeMode");
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
  levelScoreGrid.textContent = "";
  MODES.forEach((mode, index) => {
    const card = document.createElement("div");
    card.className = "level-score-card";
    card.innerHTML = `
      <span>${selectLabel(mode)}</span>
      <strong id="${mode.id}Score">0</strong>
      <em id="${mode.id}Streak">${t("streak", { value: 0 })}</em>
    `;
    levelScoreGrid.appendChild(card);
  });
}

function createFingerboard() {
  fingerboard.textContent = "";
  setAllText(".fingerboard-heading span", [t("stringHeading"), t("open"), t("first"), t("second"), t("third"), t("fourth")]);

  STRINGS.forEach((stringName) => {
    const row = document.createElement("div");
    row.className = "fingerboard-row";

    const label = document.createElement("div");
    label.className = "string-label";
    label.textContent = stringButtonText(stringName);
    row.appendChild(label);

    FINGERS.forEach((finger) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "finger-button";
      button.setAttribute("aria-label", `${stringText(stringName)} ${fingerText(finger.value)}`);

      const buttonLabel = document.createElement("span");
      buttonLabel.textContent = fingerButtonText(finger.value);
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
  stringPanel.textContent = "";
  fingerPanel.textContent = "";
  STRINGS.forEach((stringName) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = stringButtonText(stringName);
    button.setAttribute("aria-label", stringText(stringName));
    button.addEventListener("click", () => handleStringTap(button, stringName));
    stringPanel.appendChild(button);
  });

  FINGERS.forEach((finger) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = fingerButtonText(finger.value);
    button.setAttribute("aria-label", fingerText(finger.value));
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
  gameFeedback.textContent = t("nowTapBoard");
  gameFeedback.className = "feedback";
  fingerboardPanel.classList.add("answer-pulse");
  setTimeout(() => {
    fingerboardPanel.classList.remove("answer-pulse");
  }, 900);
}

function applyLanguage() {
  applyStaticTranslations();
  applyDifficultyToControls();
  createModeSelectors();
  createScoreCards();
  createFingerboard();
  createChoicePanels();
  renderSinfoniettaChecklist();
  applyCustomSettingsToControls();
  updatePracticeStatus();
  updateProgressDashboard();
  updateScoreDisplay();
  setActiveMode(activeMode.id);
}

function setLanguage(language) {
  currentLanguage = language;
  saveSelectedLanguage();
  applyLanguage();
}

practiceButton.addEventListener("click", saveTodayPractice);
pickScalesButton.addEventListener("click", pickTodayScales);
extraPracticeMinutesInput.addEventListener("input", () => {
  setExtraPracticeMinutes(extraPracticeMinutesInput.value);
});
addExtraPracticeButton.addEventListener("click", () => {
  setExtraPracticeMinutes(Number(sinfoniettaState.extraPracticeMinutes || 0) + 15);
});
newNoteButton.addEventListener("click", pickNewChallenge);
playNoteButton.addEventListener("click", playCurrentNote);
saveProgressButton.addEventListener("click", saveProgressSnapshot);
resetProgressButton.addEventListener("click", resetProgress);
exportProgressButton.addEventListener("click", exportProgressBackup);
copyBackupButton.addEventListener("click", copyProgressBackup);
importProgressButton.addEventListener("click", importProgressBackup);
addRestorePointsButton.addEventListener("click", addRestorePoints);
addRewardButton.addEventListener("click", saveRewardFromForm);
cancelRewardEditButton.addEventListener("click", () => {
  clearRewardForm();
  rewardMessage.textContent = t("editCanceled");
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
englishButton.addEventListener("click", () => setLanguage("en"));
chineseButton.addEventListener("click", () => setLanguage("zh"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .catch(() => {
        // The app still works normally if service workers are unavailable.
      });
  });
}

drawStaffLines();
applyLanguage();
setInterval(() => {
  const previousDate = sinfoniettaState.date;
  ensureSinfoniettaToday();

  if (sinfoniettaState.date !== previousDate) {
    renderSinfoniettaChecklist();
  }
}, 60000);
