import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessLetter } from '../../actions/word';

/*
- Virtual keypad allows users to click on letters to guess.
- Guessed letters will be disabled after they have been clicked.
- Entire keypad will be disabled if the current game has ended.
*/

const UserKeypad = ({
  word: { secretWord, guessedLetters },
  game: { status },
  guessLetter
}) => {
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  const onClick = e => {
    const clickedLetter = e.target.innerText;
    const incorrectGuess = secretWord.split('').indexOf(clickedLetter) < 0;

    guessLetter(clickedLetter, incorrectGuess);
  };

  const keypadArea = alphabet.map((item, index) => {
    let disableKeypad;
    if (!secretWord || status) disableKeypad = true;

    let disableLetter;
    if (guessedLetters.indexOf(item) > -1) disableLetter = true;

    return (
      <button
        key={index}
        className="btn p-1 m-1 text-white keypad-button"
        onClick={e => onClick(e)}
        disabled={disableKeypad || disableLetter}
      >
        {item}
      </button>
    );
  });

  return (
    <div id="keypad" className="p-3 mx-auto mb-1">
      <div className="d-flex justify-content-center flex-wrap">
        {keypadArea}
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
