import {
  GET_WORD_LIST,
  GET_WORD,
  GUESS_LETTER,
  WRONG_LETTER,
  RESET_GAME,
  UPDATE_DIFFICULTY,
  SET_LOADING,
  RESET_ENTIRE_GAME,
  SHOW_HINTS
} from '../actions/types';

const initialState = {
  guessedLetters: [],
  wrongLetters: [],
  remainingGuesses: 6,
  secretWord: '',
  difficulty: { name: 'AVERAGE JOE (3)', level: 3, minLength: 3, maxLength: 6 },
  wordList: null,
  loading: false,
  hints: false
};

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
        wordList: payload
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
        secretWord: '',
        hints: false
      };
    case UPDATE_DIFFICULTY:
      return {
        ...state,
        difficulty: payload
      };

    case SHOW_HINTS:
      return {
        ...state,
        hints: payload
      };

    case RESET_ENTIRE_GAME:
      return initialState;
    default:
      return state;
  }
}
