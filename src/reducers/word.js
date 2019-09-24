// Reducers take in state and action

// Set initialState
const initialState = {
  guessedLetters: [],
  wrongLetters: [],
  remainingGuesses: 6,
  secretWord: ''
};

// No need to name because it is the only thing being exported
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
