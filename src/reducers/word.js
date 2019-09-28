import {
  GET_WORD_LIST,
  GET_WORD,
  GUESS_LETTER,
  WRONG_LETTER,
  RESET_GAME,
  UPDATE_DIFFICULTY,
  SET_LOADING,
  RESET_ENTIRE_GAME
} from '../actions/types';

// Set initialState
const initialState = {
  guessedLetters: [],
  wrongLetters: [],
  remainingGuesses: 6,
  secretWord: '',
  difficulty: { name: 'AVERAGE JOE', level: 6, minLength: 5, maxLength: 9 },
  wordList: null,
  loading: false
};

// No need to name because it is the only thing being exported
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    case GET_WORD_LIST:
      return {
        ...state,
        wordList: payload,
        loading: true
      };
    case GET_WORD:
      return {
        ...state,
        secretWord: payload,
        loading: false
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
    case RESET_GAME:
      return {
        ...state,
        guessedLetters: [],
        wrongLetters: [],
        remainingGuesses: 6,
        secretWord: ''
      };
    case UPDATE_DIFFICULTY:
      return {
        ...state,
        difficulty: payload
      };
    case RESET_ENTIRE_GAME:
      return initialState;
    default:
      return state;
  }
}
