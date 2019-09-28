import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessLetter } from '../../actions/word';
import uuidv4 from 'uuid/v4';

const UserKeypad = ({
  word: { secretWord, guessedLetters, remainingGuesses },
  guessLetter
}) => {
  // Input validation
  const [inputError, setInputError] = useState('');

  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  const onClick = e => {
    const clickedLetter = e.target.innerText;
    const incorrect = secretWord.split('').indexOf(clickedLetter) < 0;

    if (guessedLetters.indexOf(clickedLetter) > -1) {
      return setInputError('Already guessed that letter!');
    }

    guessLetter(clickedLetter, incorrect);
    setInputError('');
  };

  let disabled;

  if (!secretWord) disabled = true;
  else if (remainingGuesses === 0) disabled = true;

  return (
    <div>
      <div id="keypad" className="p-3 mx-auto">
        <div className="d-flex justify-content-center flex-wrap">
          {alphabet.map(item => {
            return (
              <button
                key={uuidv4()}
                className="p-2 m-1 circle-icon text-white"
                onClick={e => onClick(e)}
                disabled={disabled}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <p className="text-danger error-alert  m-0">
        {inputError ? inputError : ' '}
      </p>
    </div>
  );
};

UserKeypad.propTypes = {
  word: PropTypes.object.isRequired,
  guessLetter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(
  mapStateToProps,
  { guessLetter }
)(UserKeypad);
