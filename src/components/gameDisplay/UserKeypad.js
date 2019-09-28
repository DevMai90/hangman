import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessLetter } from '../../actions/word';
import uuidv4 from 'uuid/v4';

const UserKeypad = ({
  word: { secretWord, guessedLetters, remainingGuesses },
  game: { status },
  guessLetter
}) => {
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  const onClick = e => {
    const clickedLetter = e.target.innerText;
    const incorrect = secretWord.split('').indexOf(clickedLetter) < 0;

    guessLetter(clickedLetter, incorrect);
  };

  let disabled;
  if (!secretWord || remainingGuesses === 0 || status) disabled = true;

  return (
    <div>
      <div id="keypad" className="p-3 mx-auto mb-1">
        <div className="d-flex justify-content-center flex-wrap">
          {alphabet.map(item => {
            let disableLetter;
            if (guessedLetters.indexOf(item) > -1) {
              disableLetter = true;
            }
            return (
              <button
                key={uuidv4()}
                className="btn p-1 m-1 text-white keypad-button"
                onClick={e => onClick(e)}
                disabled={disabled || disableLetter}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

UserKeypad.propTypes = {
  word: PropTypes.object.isRequired,
  guessLetter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word,
  game: state.game
});

export default connect(
  mapStateToProps,
  { guessLetter }
)(UserKeypad);
