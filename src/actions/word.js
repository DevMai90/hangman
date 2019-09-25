// Import action types
import { GET_WORD, GET_ERROR, GUESS_LETTER, WRONG_LETTER } from './types';

// Add difficulty setting later
export const getSecretWord = () => async dispatch => {
  // CORS
  const proxyURL = 'https://cors-anywhere.herokuapp.com/';
  const apiURL = 'http://app.linkedin-reach.io/words';

  try {
    // Returns promise
    const res = await fetch(proxyURL + apiURL);

    // Returns ANOTHER promise
    // TEXT
    const data = await res.text();

    // Response is one string. Must separate by new lines
    const dataArray = data.split('\n');

    // Math.floor returns largest integer less than or equal to a given number
    // Math.random returns floating point number between 0 and 1.
    const randomWord =
      dataArray[Math.floor(Math.random() * Math.floor(dataArray.length))];

    dispatch({
      type: GET_WORD,
      payload: randomWord
    });
  } catch (error) {
    console.log(error);
  }
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
