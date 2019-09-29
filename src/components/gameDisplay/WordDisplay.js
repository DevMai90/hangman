import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';

const WordDisplay = ({
  word: { secretWord, guessedLetters, wrongLetters },
  game: { status }
}) => {
  const blankLetters = secretWord.split('').map(item => {
    let correctlyGuessed;

    if (guessedLetters.indexOf(item) < 0) {
      correctlyGuessed = '_';
    } else {
      correctlyGuessed = item;
    }

    return (
      <p key={uuidv4()} className="btn p-1 m-1 text-white keypad-guess">
        {correctlyGuessed}
      </p>
    );
  });

  // Loop through wrong guesses from state and return each letter
  const displayWrongGuess = wrongLetters.map(item => {
    return (
      <p key={uuidv4()} className="btn p-1 m-1 text-white keypad-button-wrong">
        {item}
      </p>
    );
  });

  // If game status was set to 'lose' then display full word
  let revealSecretWord;
  if (status === 'lose') {
    revealSecretWord = secretWord.split('').map(item => {
      if (guessedLetters.indexOf(item) < 0) {
        return (
          <p
            key={uuidv4()}
            className="btn p-1 m-1 text-white keypad-button-wrong"
          >
            {item}
          </p>
        );
      } else {
        return (
          <p key={uuidv4()} className="btn p-1 m-1 text-white keypad-guess">
            {item}
          </p>
        );
      }
    });
  }

  // If game status was set to 'win' then display full word
  let winningWord;
  if (status === 'win') {
    winningWord = secretWord.split('').map(item => {
      return (
        <p key={uuidv4()} className="btn p-1 m-1 text-white keypad-guess">
          {item}
        </p>
      );
    });
  }

  // If all letters have been guessed, set game status to 'win'

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
          : blankLetters}
      </div>
      <div
        id="wrong-guess-area"
        className="d-flex justify-content-center flex-wrap"
      >
        {wrongLetters.length === 0 ? (
          <p className="guess-letters">- - - - -</p>
        ) : (
          <Fragment>{displayWrongGuess}</Fragment>
        )}
      </div>
    </div>
  );
};

WordDisplay.propTypes = {
  word: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  word: state.word,
  game: state.game
});

export default connect(mapStateToProps)(WordDisplay);
