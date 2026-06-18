# Violin Adventure

Prototype Version 1 is a plain HTML, CSS, and JavaScript app. It runs by opening `index.html` in a browser and stores practice, score, streak, and reward data in `localStorage`.

The current version also includes Progressive Web App files for GitHub Pages:

- `manifest.json`
- `service-worker.js`
- `icons/icon.svg`
- `icons/icon-192.png`
- `icons/icon-512.png`
- `icons/apple-touch-icon.png`

When hosted on GitHub Pages, the app can be installed to a phone or tablet Home Screen and can cache its main files for offline use after the first successful visit.

## Bilingual Support

The app supports English and Simplified Chinese. Use the language switcher near the top of the app to choose English or 中文.

The selected language is saved in `localStorage` under `violinAdventureLanguage`, so the app remembers the choice after a refresh. User-facing app text is kept in the `I18N` translation object in `app.js`. Musical note names such as G, F#, and C# stay unchanged. Answer buttons use compact violin string labels: `E`, `A`, `D`, and `G`.

## GitHub Pages

Upload the project files to a GitHub repository and enable GitHub Pages from the repository settings. Use the repository root as the Pages source.

The PWA paths use relative URLs, so the app works both at a custom domain and at a GitHub Pages project URL such as:

`https://username.github.io/violin-adventure/`

## Add To Home Screen On iPad Or iPhone

1. Open the GitHub Pages app URL in Safari.
2. Wait for the app to finish loading.
3. Tap the Share button.
4. Choose Add to Home Screen.
5. Keep the name or rename it.
6. Tap Add.

After installing, open Violin Adventure from the Home Screen icon. Visit once while online before relying on offline mode, so Safari has a chance to cache the app files.

## Offline Notes

The service worker caches the main app shell: HTML, CSS, JavaScript, manifest, and icons. Practice records, reward data, and settings remain stored in the device browser with `localStorage`.

Offline caching requires a secure origin. GitHub Pages uses HTTPS, so it is compatible. Opening the files directly with `file://` still works for normal app use, but service-worker offline caching is only available from a web server or GitHub Pages.

## Note-To-Violin Mapping

The game uses beginner violin note locations with strings displayed from top to bottom as E, A, D, G:

| Staff Note | Violin Location |
| --- | --- |
| E | E string, open |
| F# | E string, first finger |
| G# | E string, second finger |
| A | E string, third finger |
| B | E string, fourth finger |
| A | A string, open |
| B | A string, first finger |
| C# | A string, second finger |
| D | A string, third finger |
| E | A string, fourth finger |
| D | D string, open |
| E | D string, first finger |
| F# | D string, second finger |
| G | D string, third finger |
| A | D string, fourth finger |
| G | G string, open |
| A | G string, first finger |
| B | G string, second finger |
| C | G string, third finger |
| D | G string, fourth finger |

Internally, each note also has a staff pitch, accidental, and Web Audio oscillator frequency. The five training modes use the same mapping table, but ask the student for different parts of the answer: full location, string only, finger only, heard note to location, or a short melody of locations in order.

## Training Modes And Difficulty

The app separates training mode from difficulty level. Training mode controls the task type. Difficulty controls which finger positions are included:

- Difficulty 1: open strings only
- Difficulty 2: open + 1st finger
- Difficulty 3: open + 1st + 2nd finger
- Difficulty 4: open through 3rd finger
- Difficulty 5: open through 4th finger

The selected difficulty is stored in `localStorage` under `liamSelectedDifficulty` and applies to all training and practice modes.

Practice Mode also uses the same mapping table. It generates 20 questions, shows the notes on the staff, and asks for each violin location in order. Accuracy is based on first-try correctness for each note; a note counts as missed if the student taps any wrong location before finding the right one.

The main screen is designed for a child student and shows the current mode, difficulty, points, practice status, rewards, and weekly/monthly/yearly progress. Detailed mode-by-mode scores and streaks are hidden by default in the Parent View.

Training and practice choices use compact dropdown selectors to keep the top of the game screen clear. Ear Training keeps the staff hidden, shows a listening prompt, and includes a large violin cue that replays the note and points the student toward the violin answer board.

## Suzuki Book Modes

The app includes focused Book Practice 20-question runs for Suzuki Book 1, Suzuki Book 2, and Suzuki Book 3:

- Book 1 Mode currently uses D, A, and E string notes from the beginner table.
- Book 2 Mode currently uses the full beginner table, including G string notes.
- Book 3 Mode currently uses the full supported table as a mechanics-testing pool.

These are prototype note pools for testing mechanics. They can be adjusted later to match exact pieces or teacher-assigned repertoire.

Book Practice modes show both the selected book pool and the selected difficulty filter. If the difficulty filter leaves too few notes, the app suggests trying a higher difficulty level.

To customize the Suzuki pools, edit the clearly named section near the top of `app.js`:

- `book1Notes`
- `book2Notes`
- `book3Notes`

Each list contains note ids from `NOTE_SET`, such as `a-open`, `cs-a2`, or `g-open`.

Custom Practice settings are chosen inside the app and stored locally in `localStorage` under `liamCustomPracticeSettings`.

## Progress Records

Checkpoint 3 adds local progress records. Earned points are stored in `localStorage` under `liamProgressRecords`, grouped by actual calendar dates for the daily, weekly, monthly, and yearly dashboard. The Save Progress button also writes a snapshot to `liamProgressSnapshot`. Reset Progress clears saved scores, streaks, practice logs, point records, and the latest practice run after confirmation.

## Point System

Game and practice modes use 20-question rounds. A round earns 1 point only when all 20 questions are answered correctly on the first try. If the student misses a question, the app shows the correct answer and gives one encouraging second try for learning, but that round becomes Learning Mode and no longer earns a game point.

Daily Sinfonietta Practice also earns points. Completing all 7 Daily Sinfonietta Practice tasks earns 2 points each day. The bonus is awarded only once per calendar day, even if items are unchecked and rechecked.

After Daily Sinfonietta Practice is complete, extra violin practice earns 1 bonus point for every additional 15 minutes entered in the Extra Practice Minutes field. Extra minutes and awarded extra-practice points are stored in the daily Sinfonietta state and history so refreshes do not duplicate point awards.

## Reward Bank

The reward area is a flexible family reward bank. Total earned points come from perfect 20-question rounds, Daily Sinfonietta Practice completion bonuses, and extra-practice minute bonuses. Total redeemed points come from parent or child reward redemptions. Remaining points are calculated as:

`remaining points = total earned points - total redeemed points`

Suggested rewards are examples only and do not determine point values. Families create their own rewards by entering a reward name and reward cost. Custom rewards are stored in `localStorage` under `liamCustomRewards`.

Each saved reward has Redeem, Edit, and Delete controls. Redeeming a reward records the date, reward name, points used, and remaining points after redemption in `localStorage` under `liamRewardRedemptions`.

The suggested reward ideas are defined in `REWARD_SUGGESTIONS` near the top of `app.js`.

## Oscillator Pitch Reference

For now, Level 4 uses Web Audio oscillator tones instead of recorded violin samples. The frequencies are standard equal-tempered pitches using A4 = 440 Hz:

| Note | Frequency |
| --- | ---: |
| G3 | 196.00 Hz |
| A3 | 220.00 Hz |
| B3 | 246.94 Hz |
| C4 | 261.63 Hz |
| D4 | 293.66 Hz |
| E4 | 329.63 Hz |
| F#4 | 369.99 Hz |
| G4 | 392.00 Hz |
| A4 | 440.00 Hz |
| B4 | 493.88 Hz |
| C#5 | 554.37 Hz |
| D5 | 587.33 Hz |
| E5 | 659.25 Hz |
| F#5 | 739.99 Hz |
| G#5 | 830.61 Hz |
| A5 | 880.00 Hz |
| B5 | 987.77 Hz |
