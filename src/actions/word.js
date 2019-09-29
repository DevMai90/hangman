import {
  GET_WORD_LIST,
  GET_WORD,
  GUESS_LETTER,
  WRONG_LETTER,
  RESET_GAME,
  UPDATE_DIFFICULTY,
  SET_LOADING,
  RESET_ENTIRE_GAME
} from './types';

/*
- Retrieve word list from word bank based on difficulty configuration. 
- Use word list to find random word.
- App will check if word list is already in state. If yes then just get secret word. Will not make additional API requests unless user resets the game.
- Have option to reset game without losing the existing word list or completely start over.
*/

export const getWordList = diffConfig => async dispatch => {
  const { level, minLength, maxLength } = diffConfig;

  // CORS
  const proxyURL = 'https://cors-anywhere.herokuapp.com/';
  const apiURL = `http://app.linkedin-reach.io/words?difficulty=${level}&minLength=${minLength}&maxLength=${maxLength}`;

  dispatch({
    type: SET_LOADING
  });

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
    console.log(error);
  }
};

export const getSecretWord = wordList => dispatch => {
  const index = Math.floor(Math.random() * Math.floor(wordList.length));
  const randomWord = wordList[index].toUpperCase();

  dispatch({
    type: GET_WORD,
    payload: randomWord
  });
};

export const checkLetter = (letter, incorrectGuess) => dispatch => {
  if (incorrectGuess) {
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

export const updateDifficulty = difficulty => dispatch => {
  dispatch({
    type: UPDATE_DIFFICULTY,
    payload: difficulty
  });
};

export const resetEntireGame = () => dispatch => {
  dispatch({
    type: RESET_ENTIRE_GAME
  });
};
