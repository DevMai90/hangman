import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
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

  const blankLetters = secretWord.split('').map((item, index) => {
    // If letter is has not been correctly guessed then show '?'
    // Else return the correctly guessed letter
    let correctlyGuessed;

    if (guessedLetters.indexOf(item) < 0) {
      correctlyGuessed = '?';
    } else {
      correctlyGuessed = item;
    }

    return (
      <p className="px-3 guess-letters" key={index}>
        <u>
          <strong>{correctlyGuessed}</strong>
        </u>
      </p>
    );
  });

  const displayGuesses = guessedLetters.map((item, index) => {
    if (wrongLetters.indexOf(item) >= 0) {
      return (
        <p className="text-danger px-3 guess-letters" key={index}>
          {item}
        </p>
      );
    }
  });

  return (
    <div className="mt-2">
      <div className="d-flex justify-content-center">
        {secretWord ? blankLetters : <Spinner />}
      </div>
      <div className="d-flex justify-content-center">
        {wrongLetters.length === 0 ? (
          <p className="guess-letters">Guess Below!</p>
        ) : (
          <Fragment>{displayGuesses}</Fragment>
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
