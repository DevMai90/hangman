// Import action types
import {
  GET_WORD_LIST,
  GET_WORD,
  GUESS_LETTER,
  WRONG_LETTER,
  RESET_GAME,
  WRONG_WORD,
  UPDATE_DIFFICULTY,
  SET_LOADING
} from './types';

/*
- Retrieve word list from word bank based on difficulty configuration. 
- Use word list to find random word
- Frontend will check if word list is already in state. If yes then just get secret word
*/
export const setLoading = () => dispatch => {
  dispatch({ type: SET_LOADING });
};

export const getWordList = diffConfig => async dispatch => {
  const { level, minLength, maxLength } = diffConfig;

  // CORS
  const proxyURL = 'https://cors-anywhere.herokuapp.com/';
  const apiURL = `http://app.linkedin-reach.io/words?difficulty=${level}&minLength=${minLength}&maxLength=${maxLength}`;

  try {
    const res = await fetch(proxyURL + apiURL);
    const data = await res.text();
    const wordList = data.split('\n');

    dispatch({
      type: GET_WORD_LIST,
      payload: wordList
    });

    dispatch(getSecretWord(wordList));
  } catch (error) {
    // ADD HANDLING
    console.log(error);
  }
};

export const getSecretWord = wordList => async dispatch => {
  const index = Math.floor(Math.random() * Math.floor(wordList.length));
  const randomWord = wordList[index].toUpperCase();

  dispatch({
    type: GET_WORD,
    payload: randomWord
  });
};

export const guessLetter = (letter, incorrect) => dispatch => {
  // Need error handler if blank
  // Need error handler if not letter

  if (incorrect) {
    dispatch({
      type: WRONG_LETTER,
      payload: letter
    });
  }

  dispatch({
    type: GUESS_LETTER,
    payload: letter
  });
};

export const resetGame = () => dispatch => {
  dispatch({
    type: RESET_GAME
  });
};

export const guessWord = (word, incorrect) => dispatch => {
  if (incorrect) {
    dispatch({
      type: WRONG_WORD,
      payload: word
    });
  }
};

export const updateDifficulty = difficulty => dispatch => {
  dispatch({
    type: UPDATE_DIFFICULTY,
    payload: difficulty
  });
};
