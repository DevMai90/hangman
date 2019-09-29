import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkLetter } from '../../actions/word';
import { gameOver } from '../../actions/game';

/*
- Allow user to guess entire word. Inputs are converted to uppercase
- Alphabetical letters only. No numbers, spaces, special characters, etc.
- Compare against secretWord. If wrong then count as one strike. Decrement 1 chance.
- Add the string to guessedLetters and wrongLetters state
*/

const UserWordGuess = ({
  word: { secretWord, guessedLetters, remainingGuesses },
  checkLetter,
  gameOver
}) => {
  const [formWord, setFormWord] = useState('');

  const [inputError, setInputError] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    // Check if there is an input
    if (!formWord) {
      return setInputError('Too scared to try?');
    }

    if (guessedLetters.indexOf(formWord) > -1) {
      return setInputError('Already guessed!');
    }

    // Check if letter is from English alphabet
    if (!formWord.match(/^[A-Z]+$/)) {
      return setInputError('Only English letters are allowed!');
    }

    let incorrect;

    if (formWord === secretWord) {
      gameOver('win');
    } else {
      incorrect = secretWord.split('').indexOf(formWord) < 0;
    }

    // Send letter to store
    checkLetter(formWord, incorrect);

    setFormWord('');
    setInputError('');
  };

  let disabled;
  if (!secretWord || remainingGuesses === 0) disabled = true;

  return (
    <div id="lucky-guess" className="py-3">
      <h4>Feeling lucky?</h4>
      <div className="d-flex justify-content-center">
        <form onSubmit={e => onSubmit(e)}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="letter"
              placeholder="Guess the word"
              value={formWord}
              onChange={e => setFormWord(e.target.value.toUpperCase())}
              disabled={disabled}
            />

            <div className="input-group-append">
              <button
                className="btn text-white"
                type="submit"
                disabled={disabled}
              >
                <i className="far fa-arrow-alt-circle-right" /> Go!
              </button>
            </div>
          </div>
        </form>
      </div>
      <p className="text-danger error-alert p-2 m-0">{inputError}</p>
    </div>
  );
};

UserWordGuess.propTypes = {
  word: PropTypes.object.isRequired,
  checkLetter: PropTypes.func.isRequired,
  gameOver: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(
  mapStateToProps,
  { checkLetter, gameOver }
)(UserWordGuess);
