// Import action types
import { GET_WORD, GET_ERROR } from './types';

// Add difficulty setting later
export const getSecretWord = () => async dispatch => {
  try {
    // Returns promise
    const res = await fetch(
      // CORS
      'https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words'
    );

    // Returns ANOTHER promise
    // TEXT
    const data = await res.text();

    // Response is one string. Must separate by new lines
    const dataArray = data.split('\n');
    console.log(dataArray.length);

    // Math.floor returns largest integer less than or equal to a given number
    // Math.random returns floating point number between 0 and 1.
    const randomWord =
      dataArray[Math.floor(Math.random() * Math.floor(dataArray.length))];

    dispatch({
      type: GET_WORD,
      payload: randomWord
    });

    console.log(randomWord);
  } catch (error) {
    console.log(error);
  }

  // fetch(
  //   'https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words'
  // )
  // // CORS
  //   .then(results => {
  //     // console.log(results);
  //     return results.text();
  //   })
  //   .then(data => console.log(data))
  //   // .then(data => console.log(data))
  //   .catch(err => console.log(err));
};
