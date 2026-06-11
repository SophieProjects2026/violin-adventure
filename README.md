# Liam's Violin Adventure

Prototype Version 1 is a plain HTML, CSS, and JavaScript app. It runs by opening `index.html` in a browser and stores practice, score, streak, and reward data in `localStorage`.

## Note-To-Violin Mapping

The game uses beginner Suzuki Book 1 and Book 2 note locations:

| Staff Note | Violin Location |
| --- | --- |
| G | G string, open |
| A | G string, first finger |
| B | G string, second finger |
| C | G string, third finger |
| D | D string, open |
| E | D string, first finger |
| F# | D string, second finger |
| G | D string, third finger |
| A | A string, open |
| B | A string, first finger |
| C# | A string, second finger |
| D | A string, third finger |
| E | E string, open |
| F# | E string, first finger |
| G# | E string, second finger |
| A | E string, third finger |

Internally, each note also has a staff pitch, accidental, and Web Audio oscillator frequency. The five game levels use the same mapping table, but ask Liam for different parts of the answer: full location, string only, finger only, heard note to location, or a short melody of locations in order.

Practice Mode also uses the same mapping table. It generates 10 notes, shows them in a row on the staff, and asks for each violin location in order. Accuracy is based on first-try correctness for each note; a note counts as missed if Liam taps any wrong location before finding the right one.

## Suzuki Book Modes

The app includes focused 10-note runs for Suzuki Book 1, Suzuki Book 2, and Suzuki Book 3:

- Book 1 Mode currently uses D, A, and E string notes from the beginner table.
- Book 2 Mode currently uses the full beginner table, including G string notes.
- Book 3 Mode currently uses the full supported table as a mechanics-testing pool.

These are prototype note pools for testing mechanics. They can be adjusted later to match exact pieces or teacher-assigned repertoire.

To customize the Suzuki pools, edit the clearly named section near the top of `app.js`:

- `book1Notes`
- `book2Notes`
- `book3Notes`

Each list contains note ids from `NOTE_SET`, such as `a-open`, `cs-a2`, or `g-open`.

Custom Practice settings are chosen inside the app and stored locally in `localStorage` under `liamCustomPracticeSettings`.

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
