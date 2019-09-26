import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';

const WordDisplay = ({
  word: { secretWord, guessedLetters, wrongLetters }
}) => {
  // useEffect(() => {
  //   if (
  //     secretWord.split('').map(item => {
  //       if (guessedLetters.indexOf(item < 0)) {
  //         return console.log('NOT YET BRO');
  //       }
  //     })
  //   );
  // }, [guessedLetters]);
  // useEffect(() => {
  //   for (let character of secretWord.split('')) {
  //     if (guessedLetters.indexOf(character) < 0) {
  //       return console.log('noooooo');
  //     }
  //   }

  //   return console.log('winnn');
  // });

  const blankLetters = secretWord.split('').map(item => {
    // If letter is has not been correctly guessed then show '?'
    // Else return the correctly guessed letter
    let correctlyGuessed;

    if (guessedLetters.indexOf(item) < 0) {
      correctlyGuessed = '?';
    } else {
      correctlyGuessed = item;
    }

    return (
      <p className="px-3 guess-letters" key={uuidv4()}>
        <u>
          <strong>{correctlyGuessed}</strong>
        </u>
      </p>
    );
  });

  // Loop through wrong guesses from state and return each letter
  const displayWrongGuess = wrongLetters.map(item => {
    return (
      <p className="text-danger px-3 guess-letters" key={uuidv4()}>
        {item}
      </p>
    );
  });

  return (
    <div className="mt-2">
      <div className="d-flex justify-content-center">
        {secretWord ? blankLetters : <Spinner />}
      </div>
      <div className="d-flex justify-content-center">
        {wrongLetters.length === 0 ? (
          <p className="guess-letters">- - -</p>
        ) : (
          <Fragment>{displayWrongGuess}</Fragment>
        )}
      </div>
    </div>
  );
};

WordDisplay.propTypes = {
  word: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(mapStateToProps)(WordDisplay);
