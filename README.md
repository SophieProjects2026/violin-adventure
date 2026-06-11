# Violin Adventure

Prototype Version 1 is a plain HTML, CSS, and JavaScript app. It runs by opening `index.html` in a browser and stores practice, score, streak, and reward data in `localStorage`.

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

Practice Mode also uses the same mapping table. It generates 10 notes, shows them in a row on the staff, and asks for each violin location in order. Accuracy is based on first-try correctness for each note; a note counts as missed if the student taps any wrong location before finding the right one.

The main screen is designed for a child student and shows the current mode, difficulty, points, practice status, rewards, and weekly/monthly/yearly progress. Detailed mode-by-mode scores and streaks are hidden by default in the Parent View.

Training and practice choices use compact dropdown selectors to keep the top of the game screen clear. Ear Training keeps the staff hidden, shows a listening prompt, and includes a large violin cue that replays the note and points the student toward the violin answer board.

## Suzuki Book Modes

The app includes focused Book Practice 10-note runs for Suzuki Book 1, Suzuki Book 2, and Suzuki Book 3:

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

Game and practice modes now use 10-question rounds. A round earns 1 point only when all 10 questions are answered correctly with no misses. If the student misses one or more questions, the round can still be completed, but it earns 0 points.

Daily violin practice can also earn 1 point. If the student records more than 15 minutes of real violin practice, the app awards 1 practice point for that calendar date. Practice points are stored in `localStorage` under `liamPracticePointDates`, so the same date cannot be counted twice.

## Reward Bank

The reward area is a flexible family reward bank. Total earned points come from perfect 10-question rounds and daily practice points. Total redeemed points come from parent or child reward redemptions. Remaining points are calculated as:

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
