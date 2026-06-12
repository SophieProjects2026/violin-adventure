# Release Notes

## Current Version

This version expands the original Violin Adventure prototype into a more complete offline violin practice app for a child student and family use.

## Changes Since Version 1

### Core App

- Renamed the app from a child-specific title to **Violin Adventure**.
- Kept the app fully offline with plain HTML, CSS, and JavaScript.
- Preserved browser-only usage by opening `index.html`.
- Continued using `localStorage` for saved progress, settings, rewards, and practice records.
- Added bilingual English and Simplified Chinese support with a saved language switcher.

### Training Modes

- Reorganized the original numbered levels into clear training modes:
  - Staff to Violin Location
  - Staff to String Only
  - Staff to Finger Only
  - Ear Training
  - Melody Challenge
- Replaced large mode buttons with compact dropdown selectors.
- Added a separate Difficulty Level selector.
- Added Book Practice and Custom Practice modes.

### Violin Note Model

- Updated fingerboard string order to E, A, D, G from top to bottom.
- Added fourth-finger notes on every string.
- Added difficulty filtering from open strings only through fourth finger.
- Kept note pools easy to customize for Suzuki Book 1, Book 2, and Book 3.
- Reduced repeated notes by avoiding the same note twice in a row when possible.

### Staff And Ear Training

- Improved staff notation and ledger-line display.
- Kept the SVG staff display for note-reading modes.
- Hid staff notation during Ear Training.
- Added oscillator tones with correct violin-note pitches.
- Added Replay Note for Ear Training.
- Added a large violin cue button in Ear Training to guide students to the answer board.

### Practice And Points

- Added 10-question rounds.
- Changed scoring so a perfect 10-question round earns 1 point only when every answer is correct on the first try.
- Added one encouraging second try after a missed answer.
- Second-try correct answers help learning, but the round no longer earns a point.
- Added accumulated real-practice points:
  - Every full 15 minutes of accumulated real practice earns 1 point.
  - Practice minutes can build across multiple sessions.
- Added today, week, month, and year point tracking.

### Dashboard And Layout

- Added today's date near the top of the app.
- Moved the daily practice message into the top welcome/points area.
- Merged Practice Check-In with the progress record.
- Placed Practice Check-In and Progress Record before Rewards.
- Moved detailed mode-by-mode stats into an optional Parent View.
- Moved How Notes Map to the Violin into a hidden modal opened by a button.

### Reward Bank

- Replaced fixed reward milestones with a flexible family reward bank.
- Added total earned, total redeemed, and available point balances.
- Added custom reward creation with:
  - Reward Name
  - Reward Cost
- Added reward editing and deleting.
- Added Redeem buttons for custom rewards.
- Added redemption history with date, reward name, points used, and remaining balance.
- Changed old reward ideas into Suggested Reward Ideas only.

### Persistence

- Preserved existing localStorage data where possible.
- Added localStorage records for:
  - selected difficulty
  - custom practice settings
  - progress records
  - accumulated practice minutes and awarded practice points
  - custom rewards
  - reward redemptions
  - latest practice run

### Progressive Web App

- Added a web app manifest for Home Screen installation.
- Added app icons for manifest and Apple Home Screen support.
- Added a service worker to cache the main app files for offline use after the first online visit.
- Kept all PWA paths relative for GitHub Pages compatibility.
- Added README instructions for adding the app to an iPad or iPhone Home Screen.

### Final QA

- Verified all training modes.
- Verified practice and book modes.
- Verified difficulty filtering.
- Verified point calculations.
- Verified reward creation and redemption.
- Verified dashboard and refresh behavior.
- Verified no visible app text mentions the original child-specific name.
