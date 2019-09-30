Responsive
Deployed to gh-pages
Difficulty Settings
Display remaining guesses
Toggle hints

# Hangman

This is my implementation of the classic childhood game Hangman. The game secretly selects a word based on the player's difficulty setting. The player tries to guess one letter at a time or they can choose to guess the entire word. Each correct guess will reveal the respective letter. The player is allowed six incorrect guesses. Incorrect guesses will be listed. Each wrong guess will decrement their remaining guesses by one. If the player uses up all six incorrect guesses before they can figure out the word then the game is over. The entire word is revealed at the end.

[See a working demo hosted here.](https://devmai90.github.io/hangman/)

The app is composed of the following components:

- App - Entry point.

- GameDisplay - Container for the game visual and input components.
- SelectDifficulty - Allows user to get the game difficulty via a slidebar.
- Gallows - Visual section that gets updated as the user makes incorrect guesses.
- WordDisplay - Displays the hidden word as a series of underscores. A letter is revealed if the character makes a correct guess. Displays entire word at the end of the game.
- UserKeypad - Virtual keyboard that allows users to click on letter tiles to make their guesses. Tile becomes disabled after being clicked on.
- UserWordGuess - Input field where the user can guess the entire word.

- Spinner - Temporary spinner while the app makes the initial API call to the word bank.

- SidebarDisplay - Lists remaining guesses, difficulty level, game stats, hints, and reset game button.

## Getting Started

Following the instructions below in your terminal to have a working copy on your local machine.

```
git clone https://github.com/DevMai90/hangman.git
cd hangman
npm i
npm run start
```

The game will run on localhost:3000

## Built With:

- React.js - JavaScript library for buildinog user interfaces.
- Redux - Predictable state container for JavaScript apps.
- React-Redux - Official React bindings for Redux.
- Bootstrap 4 - CSS Framework.
- GitHub Pages - Static web publishing directly from GitHub repository.
