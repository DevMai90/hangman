import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';

const WordDisplay = ({
  word: { secretWord, guessedLetters, wrongLetters }
}) => {
  const blankLetters = secretWord.split('').map(item => {
    // If letter is has not been correctly guessed then show '?'
    // Else return the correctly guessed letter
    let correctlyGuessed;

    if (guessedLetters.indexOf(item) < 0) {
      correctlyGuessed = '?';
    } else {
      correctlyGuessed = item;
    }
    console.log('Hi Huy. Fix this.');

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
      <button
        key={uuidv4()}
        className="btn p-1 m-1 text-white keypad-button-wrong"
        disabled
      >
        {item}
      </button>
    );
  });

  return (
    <div className="mt-2 pt-3">
      <div id="guess-area" className="d-flex justify-content-center flex-wrap">
        {secretWord && blankLetters}
      </div>
      <div
        id="wrong-guess-area"
        className="d-flex justify-content-center flex-wrap"
      >
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
