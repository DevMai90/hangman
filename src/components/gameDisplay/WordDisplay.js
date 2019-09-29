import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
- Display unguessed letters as underscores.
- Reveal correct guesses as they occur.
- Reveal entire word at end of game.
*/

const WordDisplay = ({
  word: { secretWord, guessedLetters, wrongLetters },
  status
}) => {
  const hiddenWordDisplay = secretWord.split('').map((item, index) => {
    let displayLetter;

    if (guessedLetters.indexOf(item) < 0) displayLetter = '_';
    else displayLetter = item;

    return (
      <p key={index} className="btn p-1 m-1 text-white keypad-guess">
        {displayLetter}
      </p>
    );
  });

  const wrongGuessDisplay = wrongLetters.map((item, index) => {
    return (
      <p key={index} className="btn p-1 m-1 text-white keypad-button-wrong">
        {item}
      </p>
    );
  });

  let revealSecretWord;
  if (status === 'lose') {
    revealSecretWord = secretWord.split('').map((item, index) => {
      if (guessedLetters.indexOf(item) < 0) {
        return (
          <p key={index} className="btn p-1 m-1 text-white keypad-button-wrong">
            {item}
          </p>
        );
      } else {
        return (
          <p key={index} className="btn p-1 m-1 text-white keypad-guess">
            {item}
          </p>
        );
      }
    });
  }

  let winningWord;
  if (status === 'win') {
    winningWord = secretWord.split('').map((item, index) => {
      return (
        <p key={index} className="btn p-1 m-1 text-white keypad-guess">
          {item}
        </p>
      );
    });
  }

  return (
    <div className="pt-3">
      <div
        id="guess-area"
        className="d-flex justify-content-center flex-wrap p-3"
      >
        {winningWord
          ? winningWord
          : revealSecretWord
          ? revealSecretWord
          : hiddenWordDisplay}
      </div>
      <div
        id="wrong-guess-area"
        className="d-flex justify-content-center flex-wrap"
      >
        {wrongLetters.length === 0 ? (
          <p className="guess-letters">- - - - -</p>
        ) : (
          <Fragment>{wrongGuessDisplay}</Fragment>
        )}
      </div>
    </div>
  );
};

WordDisplay.propTypes = {
  word: PropTypes.object.isRequired,
  status: PropTypes.string
};

const mapStateToProps = state => ({
  word: state.word,
  status: state.game.status
});

export default connect(mapStateToProps)(WordDisplay);
