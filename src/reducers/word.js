import { GET_WORD, GUESS_LETTER, WRONG_LETTER } from '../actions/types';

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
    case GET_WORD:
      return {
        ...state,
        secretWord: payload
      };
    case GUESS_LETTER:
      return {
        ...state,
        guessedLetters: [...state.guessedLetters, payload]
      };
    case WRONG_LETTER:
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, payload],
        remainingGuesses: state.remainingGuesses - 1
      };
    default:
      return state;
  }
}
