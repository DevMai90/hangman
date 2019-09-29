import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkLetter } from '../../actions/word';
import { gameOver } from '../../actions/game';

/*
- Allow user to guess entire word. Inputs are converted to uppercase
- Alphabetical letters only. No numbers, spaces, special characters, etc.
- Display input errors.
- Compare against secretWord. If wrong then count as one strike. Decrement 1 chance.
- Add the string to guessedLetters and wrongLetters redux state
*/

const UserWordGuess = ({
  word: { secretWord, guessedLetters },
  status,
  checkLetter,
  gameOver
}) => {
  const [inputLetter, setInputLetter] = useState('');
  const [inputError, setInputError] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (!inputLetter) return setInputError('Too scared to try?');

    if (guessedLetters.indexOf(inputLetter) > -1)
      return setInputError('Already guessed!');

    if (!inputLetter.match(/^[A-Z]+$/))
      return setInputError('Only English letters are allowed!');

    let incorrectGuess;
    if (inputLetter === secretWord) gameOver('win');
    else incorrectGuess = secretWord.split('').indexOf(inputLetter) < 0;

    checkLetter(inputLetter, incorrectGuess);

    setInputLetter('');
    setInputError('');
  };

  let disabled;
  if (!secretWord || status) disabled = true;

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
              value={inputLetter}
              onChange={e => setInputLetter(e.target.value.toUpperCase())}
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
  status: PropTypes.string,
  checkLetter: PropTypes.func.isRequired,
  gameOver: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word,
  status: state.game.status
});

export default connect(
  mapStateToProps,
  { checkLetter, gameOver }
)(UserWordGuess);
